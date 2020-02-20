<template>
  <div class="container axios-example">
    <h1>Axios Example for getting JSON Posts</h1>
    <div v-if="loading">Loading...</div>
    <div v-else v-for="post in posts" :key="post.id" class="bg-light p-3 mb-2">
      <h3>{{ post.title }}</h3>
      <p>{{ post.body }}</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      posts: [],
      loading: true
    }
  },
  head(){
    return {
      title: 'Axios'
    }
  },
  created() {
    axios
      .get('https://jsonplaceholder.typicode.com/posts/')
      .then(response => {
        this.posts = response.data
      })
      .catch(err => {
        console.log(err)
      })
      .finally(() => (this.loading = false))
  }
}
</script>