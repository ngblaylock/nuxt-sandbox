<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12 pb-3">
        <h1>Upload and Resize</h1>
        <p>
          Choose a file and upload and resize it in the browser, preparing it
          for upload. This specific script will constrain the image to fit
          inside a 600x600 pixel box.
        </p>
        <p>
          This article was very helpful:
          <a
            href="https://medium.com/front-end-weekly/draw-an-image-in-canvas-using-javascript-%EF%B8%8F-2f75b7232c63"
            target="_blank"
            >Draw an image in canvas using Javascript</a
          >
        </p>
        <hr />
      </div>
      <div class="col-sm-12">
        <form>
          <input type="file" accept="image/*" @change="resizeImageBeforeUpload" />
        </form>
        <canvas class="dev-border" id="canvas-container" style="display: none;">
          Your browser does not support the HTML5 canvas tag.</canvas
        >
        <img id="resized-image" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'dataURL',
  data: function() {
    return {
      progress: 0,
      url: ''
    }
  },
  methods: {
    addToFirestorage: function(data) {
        console.log(data)
      let uploadTask = this.$fireStorage
        .ref(`dataurl/upload.png`)
        .putString(data, 'data_url')
    },
    resizeImageBeforeUpload: function(e) {
      if (e.target.files[0]) {
        let file = e.target.files[0]
        let reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onloadend = e1 => {
          // Prepare the image
          let image = new Image()
          image.src = e1.target.result
          image.onload = e2 => {
            // Prepare the canvas
            let canvas = document.getElementById('canvas-container')
            let ctx = canvas.getContext('2d')
            // Setup to constrain the image to fit into a 600x600 container
            let canvasContainer = 600
            let imageRatio = image.height / image.width
            // Draw the image
            if (imageRatio > 1) {
              // For portrait images
              canvas.width = canvasContainer / imageRatio
              canvas.height = canvasContainer
            } else {
              // For landscape and square images
              canvas.width = canvasContainer
              canvas.height = canvasContainer * imageRatio
            }
            ctx.drawImage(image, 0, 0, canvas.width, canvas.height)
            // Set the image tag to save to computer
            var canvasData = canvas.toDataURL()
            document.getElementById('resized-image').src = canvasData
            this.addToFirestorage(canvasData)
          }
        }
      }
    }
  }
}
</script>

<style scoped lang="scss"></style>
