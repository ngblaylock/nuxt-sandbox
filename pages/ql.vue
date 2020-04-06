<template>
  <div class="container">
      <h1>Query Links</h1>
      <p>This query link is {{$route.query}}</p>
  </div>
</template>

<script>
export default {
    head() {
        return {
            title: this.$route.query.title
        }
    }
}
</script>

<style>

</style>