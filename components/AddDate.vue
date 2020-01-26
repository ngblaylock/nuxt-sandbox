<template>
  <div class="alert alert-warning mt-4">
    <h3>Add Date (Just for fun)</h3>
    <form action="" @submit.prevent="addDate" class="mb-3">
      <div class="form-group">
        <label for="add-date">Pick Date</label>
        <input
          type="date"
          class="form-control"
          id="add-date"
          v-model="date"
          required
        />
      </div>
      <button type="submit" class="btn btn-warning">Submit Date</button>
    </form>
    <p v-for="savedDate in savedDates" :key="savedDate.id">
        {{ new Date(savedDate.newTempDate.seconds * 1000) }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'AddDate',
  data: function(){
      return {
          savedDates: {}
      }
  },
  methods: {
    addDate: function(e) {
      this.$fireStore
        .collection('dates')
        .add({
          newTempDate: new Date(this.date.replace(/-/g, '\/'))
        })
        .then(() => {
          console.log('Date added to Firebase')
          this.date = null
        })
        .catch(err => {
          console.error('Error writing document: ', error)
        })
    }
  },
  created: function(){
      this.$fireStore
      .collection('dates')
      .orderBy('newTempDate')
      .onSnapshot(
        snapshot => {
          this.savedDates = []
          snapshot.docs.forEach(doc => {
            let obj = doc.data()
            obj.id = doc.id
            this.savedDates.push(obj)
          })
        },
        err => {
          console.log(err.message)
        })
  }
}
</script>

<style></style>
