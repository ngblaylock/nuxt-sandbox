<template>
  <form @submit.prevent="addPerson" id="add-person">
    <div class="form-group">
      <label for="add-name">Name</label>
      <input
        type="text"
        class="form-control"
        id="add-name"
        v-model="add.name"
        required
      />
    </div>
    <div class="form-group">
      <label for="add-age">Age</label>
      <input
        type="number"
        class="form-control"
        id="add-age"
        v-model="add.age"
        required
      />
    </div>
    <button type="submit" class="btn btn-primary">Add Person</button>
  </form>
</template>

<script>
export default {
  data: function() {
    return {
        add: {}
    }
  },
  methods: {
    addPerson: function() {
      this.$fireStore
        .collection('people')
        .add({
          name: this.add.name,
          age: parseInt(this.add.age)
        })
        .then(() => {
          this.add.name = ''
          this.add.age = ''
        })
        .catch(err => {
          console.error('Error writing document: ', error)
        })
    }
  }
}
</script>

<style></style>
