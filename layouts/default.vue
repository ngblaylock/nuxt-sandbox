<template>
  <div class="container">
    <nuxt-link to="/">Home</nuxt-link> —
    <nuxt-link to="/blog/article1">Article 1</nuxt-link> — 
    <nuxt-link to="/blog/article2">Article 2</nuxt-link>
    <nuxt />
  </div>
</template>

<style>
body{
  margin: 0;
  padding: 0;
}
  *{
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    box-sizing: border-box;
  }
  .container{
    max-width: 1200px;
    padding: 15px;
    margin: 0 auto;
  }
</style>