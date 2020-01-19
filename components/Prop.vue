<template>
  <div class="prop">
      <h2>The prop is below:</h2>
      <img :src="friend.img" alt="Brian's Profile Picture">
      <p>{{ friend.name }}</p>
  </div>
</template>

<script>
export default {
    props: ['friend']
}
</script>

<style>

</style>