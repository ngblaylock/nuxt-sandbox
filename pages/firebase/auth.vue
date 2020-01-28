<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12">
        <h1>Firebase Auth</h1>
      </div>
      <div class="col-sm-6" v-if="loggedInUser.email">
        {{ loggedInUser.email }}
        <button class="btn btn-danger" @click="signOut">Sign Out</button>
      </div>
      <div class="col-sm-6" v-else>
        <form action="" @submit.prevent="signIn">
          <div class="form-group">
            <label for="username">Username</label>
            <input
              type="text"
              class="form-control"
              id="username"
              v-model="username"
              required
            />
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input
              type="password"
              class="form-control"
              id="password"
              v-model="password"
              required
            />
          </div>
          <button type="submit" class="btn btn-primary">Log In</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AuthenticationTest',
  data: function() {
    return {
      username: 'ngblaylock@gmail.com',
      password: '',
      loggedInUser: {}
    }
  },
  methods: {
    signIn() {
      //   console.log(this.username, this.password)
      this.$fireAuth
        .signInWithEmailAndPassword(this.username, this.password)
        .then(() => {
          console.log('Login Successful')
        })
        .catch(error => {
          console.error(error)
        })
    },
    signOut() {
       this.$fireAuth
        .signOut()
        .then(() => {
          console.log('Log Out Successful')
        })
        .catch(error => {
          console.log(error)
        })
    }
  },
  created: function() {
    this.$fireAuth.onAuthStateChanged(user => {
      if (user) {
        this.loggedInUser = user
      } else {
        this.loggedInUser = {}
      }
    })
  }
}
</script>

<style></style>
