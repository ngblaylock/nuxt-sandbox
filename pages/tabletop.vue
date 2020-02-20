<template>
  <div class="container">
    <h1>Tabletop Example</h1>
    <div v-if="loading">Loading...</div>
    <div
      v-else
      v-for="(favorite, index) in favorites"
      :key="index"
      class="bg-light p-3 my-3"
    >
      <ul>
        <li>Name: {{ favorite.name }}</li>
        <li>Favorite Food: {{ favorite.favFood }}</li>
        <li>Favorite Song: {{ favorite.favSong }}</li>
        <li>Favorite Animal: {{ favorite.favAnimal }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
// import tabletop from 'tabletop'

export default {
  name: 'Tabletop',
  data: function() {
    return {
      message: 'Hello Tabletop',
      loading: true,
      favorites: []
    }
  },
  head() {
    return {
      title: 'Tabletop',
      script: [
        {
          hid: 'tabletop',
          src:
            'https://cdnjs.cloudflare.com/ajax/libs/tabletop.js/1.5.1/tabletop.min.js',
          callback: () => {
            Tabletop.init({
              key:
                'https://docs.google.com/spreadsheets/d/1cRACXmApZf1Y1FZP3RC-PdE8xFknTQl0inm_5T6c2zo/pubhtml',
              simpleSheet: true,
              callback: (data, tabletop) => {
                console.log(data)
                this.favorites = data
                this.loading = false
              }
            })
          }
        }
      ]
    }
  }
}
</script>

<style></style>
