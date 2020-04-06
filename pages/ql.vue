<template>
  <div class="container" v-if="character">
      <img :src="character.imageURL" :alt="`Portrait of ${character.name}`">
    <h1>{{ character.name }}</h1>
    <p>Age: {{ character.age }}</p>
  </div>
</template>

<script>
export default {
  name: 'QueryLink',
  head() {
    return {
      title: this.character.name
    }
  },
  data() {
    return {
      character: ''
    }
  },
  methods: {
    showCharacter() {
      let x = this.$route.query.id

      this.$fireStore
        .collection('people')
        .doc(x)
        .get()
        .then(doc => {
          if (doc.exists) {
            console.log('Document data:', doc.data())
            this.character = doc.data()
            this.character.id = x
          } else {
            // doc.data() will be undefined in this case
            console.error('No such document!')
          }
        })
        .catch(function(error) {
          console.error('Error getting document:', error.message)
        })
    }
  },
  mounted() {
      this.showCharacter()
  },
  watch: {
    '$route.query.id': function(id) {
      this.showCharacter()
    }
  }
}
</script>

<style scoped>
img{
    max-width: 300px;
}
</style>
