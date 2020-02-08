<template>
  <div class="container">
    <h1>Firebase Cloud Storage</h1>
    <div class="row">
      <div class="col-sm-12">
        <h2>Upload a file</h2>
        <p>Make sure you are logged in or it won't work</p>
        <form
          @submit.prevent="upload"
          v-if="!documentUploaded"
          class="alert alert-primary"
        >
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
              accept="image/jpg"
              @change="processFile"
            />
            <p class="small">Only upload .jpg files.</p>
          </div>
          <button type="submit" class="btn btn-primary">Upload</button>
        </form>
        <div v-else class="alert alert-success">
          The file was uploaded. Hooray!
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-12">
        <h2>Get a file</h2>
        <img v-if="imageUrl" :src="imageUrl" alt="" class="img-fluid" />
      </div>
    </div>
    <div class="row">
      <div class="col-sm-12">
        <h2 class="text-danger">TODO: Delete a file</h2>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-12">
        <h2 class="text-danger">TODO: List Files</h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FirebaseStorage',
  data: function() {
    return {
      fileToUpload: null,
      documentUploaded: false,
      progress: 0,
      imageUrl: ''
    }
  },
  methods: {
    processFile(event) {
      // SAVE A REFERENCE TO THE UPLOADED SINGLE FILE WITH `@change='processFile'` EVENT ON THE UPLOAD FILE
      this.fileToUpload = event.target.files[0]
    },
    upload() {
      // ON FORM SUBMISSION, UPLOAD THE FILE
      let storageRef = this.$fireStorage.ref(`images/upload.jpg`)
      // OR USE THE ORIGINAL FILE NAME
      // let storageRef = this.$fireStorage.ref(`images/${this.fileToUpload.name}`)
      let uploadTask = storageRef.put(this.fileToUpload)

      uploadTask.on(
        'state_changed',
        snapshot => {
          let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          this.progress = parseInt(progress)
        },
        error => {
          console.error(`There was an error uploading the file: ${error}`)
        },
        () => {
          this.documentUploaded = true
          this.$fireStorage
            .ref('images/upload.jpg')
            .getDownloadURL()
            .then(url => {
              this.imageUrl = url
            })
            .catch(error => {
              console.error(`Error getting document: ${error}`)
            })
        }
      )
    }
  },
  mounted: function() {
    // GET A FILE
    this.$fireStorage
      .ref('images/upload.jpg')
      .getDownloadURL()
      .then(url => {
        this.imageUrl = url
      })
      .catch(error => {
        console.error(`Error getting document: ${error}`)
      })
  }
}
</script>
