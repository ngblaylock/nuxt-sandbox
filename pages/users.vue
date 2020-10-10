<template>
  <div>
    <div class="leftnav">
      <div v-for="user in users" :key="user.id">
        <nuxt-link :to="`/users/${user.name}`">
          {{ user.name }}
        </nuxt-link>
      </div>
    </div>
    <div class="maincontent">
      <h1>Users</h1>
      <hr />
      <nuxt-child :test="activeUser" :loading="loading" />
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data: function() {
    return {
      users: [],
      loading: true
    }
  },
  created() {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        this.users = response.data
      })
      .catch(error => {
        console.error(error)
      })
      .finally(() => (this.loading = false))
  },
  computed: {
    activeUser: function() {
      if(this.users.length){
        return this.users.find(item => {
          return item.name == this.$route.params.id
        })
      } else{
        return "Loading"
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.leftnav {
  width: 30%;
  float: left;
  background: #f8f8f8;
  width: 200px;
  padding: 15px;
}
.maincontent {
  padding: 15px;
  width: 70%;
  float: left;
}
</style>