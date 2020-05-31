<template>
  <div class="container">
    <h1>Scriptures</h1>
    <div class="card">
      <div class="card-body">
        <p>
          I’ve update my APi endpoint:
          <a href="http://ec2-3-86-93-152.compute-1.amazonaws.com"
            >http://ec2-3-86-93-152.compute-1.amazonaws.com</a
          >
        </p>
        <p>
          You can now go to “/random_verse” to get a random verse or go to
          “/get_verse” to get a specific verse. For get verse you have to pass
          parameters. Two examples:
        </p>
        <p>“/get_verse?book=Genesis&chapter=1&verse=1”</p>

        <p>
          Or
        </p>

        <p>“/get_verse?ref=Genesis 1:1”</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'ScripturesGenerator',
  data: function() {
    return {
      scripture: '',
      loading: true
    }
  },
  created: function() {
    axios
      .get('http://ec2-3-86-93-152.compute-1.amazonaws.com/random_verse')
      .then(response => {
        this.scripture = response.data
      })
      .catch(error => {
        console.error(error)
      })
      .finally(() => (this.loading = false))
  }
}
</script>

<style></style>
