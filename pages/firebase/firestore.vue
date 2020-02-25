<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12">
        <h1>{{ message }}</h1>
        <p class="lead">
          This is a simple CRUD (Create, Read, Update, Delete) operation made
          from Nuxt and Firebase
        </p>
      </div>
      <div class="col-sm-6">
        <h2>Add Character</h2>
        <AddHarryPotterCharacter />
        <ListHarryPotterCharacterImages />
      </div>
      <div class="col-sm-6">
        <h2>Harry Potter Characters</h2>
        <div v-for="file in files" :key="file.id">
          <HarryPotterCharacter :character="file" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AddHarryPotterCharacter from '@/components/AddHarryPotterCharacter'
import HarryPotterCharacter from '@/components/HarryPotterCharacter'
import ListHarryPotterCharacterImages from '@/components/ListHarryPotterCharacterImages'

export default {
  components: {
    AddHarryPotterCharacter,
    HarryPotterCharacter,
    ListHarryPotterCharacterImages
  },
  name: 'FirebaseFirestore',
  data() {
    return {
      message: 'Hello Nuxt-Fire',
      files: [],
      destroySnapshot: null
    }
  },
  mounted: function() {
    this.$fireStore
      .collection('people')
      .orderBy('age')
      .onSnapshot(
        snapshot => {
          this.files = []
          snapshot.docs.forEach(doc => {
            let obj = doc.data()
            obj.id = doc.id
            this.files.push(obj)
          })
        },
        err => {
          console.log(err.message)
        }
      )
  }
}
</script>
