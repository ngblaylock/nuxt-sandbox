<template>
  <div>
    <div class="alert alert-warning mt-4" v-if="loggedIn">
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
    <div class="alert alert-danger mt-4" v-else>
      There are no users signed in. Please <nuxt-link to="/firebase/auth" class='text-danger'><u>sign in</u></nuxt-link> to view the data.
    </div>
  </div>
</template>

<script>
export default {
  name: 'AddDate',
  data: function() {
    return {
      savedDates: {},
      loggedIn: false,
      date: null
    }
  },
  methods: {
    addDate: function() {
      if (this.loggedIn) {
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
    }
  },
  created: function() {
    this.$fireAuth.onAuthStateChanged(user => {
      if (user) {
        this.loggedIn = true
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
            }
          )
      } else {
        this.loggedIn = false
        console.log('No one is logged in.')
      }
    })
  }
}
</script>

<style></style>
