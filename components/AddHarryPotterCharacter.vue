<template>
  <form @submit.prevent="addPerson" id="add-person">
    <div class="alert alert-danger" v-if="error">{{ error }}</div>
    <div class="form-group">
      <label for="add-name">Name</label>
      <input
        type="text"
        class="form-control"
        id="add-name"
        v-model="add.name"
        required
      />
    </div>
    <div class="form-group">
      <label for="add-age">Age</label>
      <input
        type="number"
        class="form-control"
        id="add-age"
        v-model="add.age"
        required
      />
    </div>
    <div class="progress mb-3" v-if="progress">
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
    <div class="form-group">
      <input
        type="file"
        name="fileUpload"
        id="fileUpload"
        accept="image/*"
        @change="processFile"
      />
      <p class="small">Only upload image files.</p>
    </div>
    <button type="submit" class="btn btn-primary">Add Person</button>
  </form>
</template>

<script>
export default {
  data: function() {
    return {
      add: {
        name: '',
        age: '',
        fileToUpload: null,
        imagePath: ''
      },
      progress: 0,
      error: ''
    }
  },
  methods: {
    addPerson: function() {
      this.add.imagePath = `hp/${this.add.fileToUpload.name}`
      let storageRef = this.$fireStorage.ref(this.add.imagePath)
      let uploadImage = storageRef.put(this.add.fileToUpload)

      // GET THE ACTUAL FILE PATH AND UPDATE THE PROGRESS
      uploadImage.on(
        'state_changed',
        snapshot => {
          let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          this.progress = parseInt(progress)
        },
        error => {
          this.error = `There was an error uploading the file: ${error}`
        },
        () => {
          this.$fireStorage
            .ref(this.add.imagePath)
            .getDownloadURL()
            .then(url => {
              this.progress = 0
              // ADD ALL INFORMATION TO THE FIRESTORE
              this.$fireStore
                .collection('people')
                .add({
                  name: this.add.name,
                  age: parseInt(this.add.age),
                  imagePath: this.add.imagePath,
                  imageURL: url
                })
                .then(() => {
                  this.add.name = ''
                  this.add.age = ''
                })
                .catch(err => {
                  this.error = `Error writing document: ${error}`
                })
            })
            .catch(error => {
              this.error = `Error getting image path: ${error}`
            })
        }
      )
    },
    processFile(event) {
      this.add.fileToUpload = event.target.files[0]
    }
  }
}
</script>

<style></style>
