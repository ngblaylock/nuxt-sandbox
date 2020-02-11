<template>
  <div>
    <div class="people" :data-id="character.id">
      <img
        v-if="character.imageURL"
        class="profile-img"
        :src="character.imageURL"
        :alt="`portrait of ${character.name}`"
      />
      <img
        v-else
        class="profile-img"
        src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
        alt="No picture"
      />
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
        <form @submit.prevent="editPerson(selectedUser.id)" id="edit-person">
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
          <button type="submit" class="btn btn-primary">Update</button>
          <button
            type="button"
            class="btn btn-link"
            @click="$bvModal.hide('edit-person-modal')"
          >
            Cancel
          </button>
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
      selectedUser: ''
    }
  },
  methods: {
    deletePerson: function(id) {
      this.$fireStore
        .collection('people')
        .doc(id)
        .delete()
    },
    openEditModal: function() {
      this.selectedUser = { ...this.character }
      this.$bvModal.show(`character-${this.character.id}`)
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
.people {
  display: flex;
  border: 1px solid lighten(gray, 30);
  border-radius: 2px;
  margin-bottom: 12px;
  align-items: center;
  .profile-img {
    width: 150px;
    height: 150px;
    object-fit: cover;
    object-position: 50% 0;
  }
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
</style>
