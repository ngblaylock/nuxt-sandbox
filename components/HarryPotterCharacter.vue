<template>
  <div>
    <div class="people" :data-id="character.id">
      <img
        v-if="character.imageURL"
        class="img-profile"
        :src="character.imageURL"
        :alt="`portrait of ${character.name}`"
      />
      <img v-else class="img-profile" :src="placeholder" alt="No picture" />
      <div>
        <h4>{{ character.name }}</h4>
        <p>{{ character.age }} years old</p>
      </div>
      <div class="ml-auto">
        <button class="mx-1 btn btn-link text-info" @click="openEditModal()">
          <i class="fas fa-pencil-alt"><span class="sr-only">Edit</span></i>
        </button>

        <button
          class="mx-1 btn btn-link text-danger"
          @click="deletePerson(character.id)"
        >
          <i class="fas fa-trash"><span class="sr-only">Delete</span></i>
        </button>
      </div>
    </div>
    <b-modal :id="`character-${character.id}`" hide-footer>
      <template v-slot:modal-title>
        Update Person
        <span class="small text-muted">{{ selectedUser.id }}</span>
      </template>
      <div class="d-block">
        <div class="form-group">
          <h3>Edit Profile Image</h3>
          <div>
            <img
              :src="character.imageURL ? character.imageURL : placeholder"
              class="img-profile"
              alt=""
            />
          </div>
          <div class="progress my-3" v-if="progress">
            <div
              class="progress-bar"
              role="progressbar"
              :style="`width: ${progress}%`"
              :aria-valuenow="progress"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              {{ progress }}%
            </div>
          </div>
          <p class="mt-2">
            <input type="file" @change="editProfileImg" id='update-profile-img' />
          </p>
        </div>

        <div class="divider">
          <hr />
        </div>
        <form @submit.prevent="editPerson(selectedUser.id)" id="edit-person">
          <h3>Edit Info</h3>
          <div class="form-group">
            <label for="add-name">Name</label>
            <input
              type="text"
              class="form-control"
              id="add-name"
              v-model="selectedUser.name"
              required
            />
          </div>
          <div class="form-group">
            <label for="add-age">Age</label>
            <input
              type="text"
              class="form-control"
              id="add-age"
              v-model="selectedUser.age"
              required
            />
          </div>
          <button type="submit" class="btn btn-primary">Update Info</button>
        </form>
      </div>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: 'HarryPotterCharacter',
  props: ['character'],
  data: function() {
    return {
      selectedUser: '',
      placeholder:
        'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
      newImage: null,
      progress: 0
    }
  },
  methods: {
    deletePerson: function(id) {
      if (this.character.imagePath) {
        this.$fireStorage
          .ref()
          .child(this.character.imagePath)
          .delete()
          .then(() => {
            this.$fireStore
              .collection('people')
              .doc(id)
              .delete()
          })
          .catch(error => {
            alert(`Something didn't delete properly: ${error}`)
          })
      } else {
        this.$fireStore
          .collection('people')
          .doc(id)
          .delete()
      }
    },
    openEditModal: function() {
      this.selectedUser = { ...this.character }
      this.$bvModal.show(`character-${this.character.id}`)
    },
    editProfileImg: function(event) {
      const newImage = event.target.files[0]

      const imagePath = `hp/${newImage.name}`
      let storageRef = this.$fireStorage.ref(imagePath)
      let uploadImage = storageRef.put(newImage)
      let imagePathToDelete = this.character.imagePath

      uploadImage.on(
        'state_changed',
        snapshot => {
          let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          this.progress = parseInt(progress)
        },
        error => {
          alert(`There was an error uploading the file: ${error}`)
        },
        () => {
          document.getElementById('update-profile-img').value = ''
          this.$fireStorage
            .ref(imagePath)
            .getDownloadURL()
            .then(url => {
              this.progress = 0
              // ADD ALL INFORMATION TO THE FIRESTORE
              console.log(`URL: ${url}`)
              this.$fireStore
                .collection('people')
                .doc(this.character.id)
                .update({
                  imagePath: imagePath,
                  imageURL: url
                })
                .then(() => {
                  if (imagePathToDelete) {
                    this.$fireStorage
                      .ref()
                      .child(imagePathToDelete)
                      .delete()
                      .then(() => {
                        console.log(
                          `file ${imagePathToDelete} has been deleted`
                        )
                      })
                      .catch(error => {
                        alert(`Error deleting old image: ${error}`)
                      })
                  }
                })
                .catch(error => {
                  alert(`Error: ${error}`)
                })
            })
            .catch(error => {
              alert(`Error getting image path: ${error}`)
            })
        }
      )
    },
    editPerson: function(id) {
      this.$fireStore
        .collection('people')
        .doc(id)
        .update({
          name: this.selectedUser.name,
          age: parseInt(this.selectedUser.age)
        })
        .then(() => {
          console.log('Document successfully updated!')
          this.$bvModal.hide(`character-${this.character.id}`)
        })
        .catch(error => {
          // The document probably doesn't exist.
          console.error('Error updating document: ', error)
          this.$bvModal.hide(`character-${this.character.id}`)
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.img-profile {
  width: 150px;
  height: 150px;
  object-fit: cover;
  object-position: 50% 0;
}
.people {
  display: flex;
  border: 1px solid lighten(gray, 30);
  border-radius: 2px;
  margin-bottom: 12px;
  align-items: center;
  div {
    padding: 12px;
    p {
      margin-bottom: 0;
    }
  }
  button {
    &.text-danger:hover {
      background-color: lighten(pink, 8);
    }
    &.text-info:hover {
      background-color: lighten(#cbf3f3, 8);
    }
  }
}
.divider {
  margin-left: -15px;
  margin-right: -15px;
}
</style>
