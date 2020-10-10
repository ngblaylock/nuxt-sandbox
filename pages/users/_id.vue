<template>
  <div>
    <div v-if="loading">
      <div v-if="showLoading">
        Loading
      </div>
    </div>
    <div v-else-if="test">
      <h2>{{ test.name }}</h2>
      <ul>
        <li>{{ test.username }}</li>
        <li>
          <a :href="`mailto:${test.email}`">{{ test.email }}</a>
        </li>
        <li>
          Address:
          <br />
          {{ test.address.street }}
          <br />
          {{ test.address.suite }}
          <br />
          {{ test.address.city }}
          <br />
          {{ test.address.zipcode }}
        </li>
        <li>{{ test.phone }}</li>
        <li>
          <a :href="`https://${test.website}`">{{ test.website }}</a>
        </li>
      </ul>
    </div>
    <div v-else>
      <p>No such person exists</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['test', 'loading'],
  data: function() {
    return {
      showLoading: false
    }
  },
  mounted: function() {
    setTimeout(function() {
      this.showLoading = true
    }, 1500)
  }
}
</script>

<style>
</style>