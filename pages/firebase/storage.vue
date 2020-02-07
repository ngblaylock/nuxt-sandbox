<template>
  <div class="container">
    <h1>Firebase Cloud Storage</h1>
    <div class="row">
      <div class="col-sm-12">
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
              @change="processFile"
            />
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
        <h2 class="mt-4">To Do:</h2>
        <ol>
          <li>Show Progress for upload</li>
          <li>
            Get a reference to the document to save in a database:
            <mark
              >This might be as simple as saving the sorageRef child path, or
              the root path.</mark
            >
          </li>
          <li>Delete a file</li>
        </ol>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore
          esse, cumque fugit veniam officiis mollitia expedita, accusamus
          quibusdam sequi perferendis incidunt necessitatibus vero repellendusss
          laborum totam. Explicabo et sit illum!
        </p>
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
      progress: 67
    }
  },
  methods: {
    processFile(event) {
      // SAVE A REFERENCE TO THE UPLOADED SINGLE FILE ON CHANGE EVENT
      this.fileToUpload = event.target.files[0]
    },
    upload() {
      // ON FORM SUBMISSION, UPLOAD THE FILE
      const storageRef = this.$fireStorage.ref(
        'images/' + this.fileToUpload.name
      )
      storageRef.put(this.fileToUpload).then(snapshot => {
        this.documentUploaded = true
      })
    }
  }
}
</script>
