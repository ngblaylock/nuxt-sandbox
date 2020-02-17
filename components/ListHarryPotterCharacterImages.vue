<template>
  <div class="alert alert-primary mt-4 no-wrap">
    <h2>List Images</h2>
    <ul class="fa-ul">
      <li class='fa-li' v-for="(folder, index) in folders" :key="index"><i class="far fa-folder"></i> Folder: {{ folder }}</li>
      <li class='fa-li' v-for="(file, index) in files" :key="index"><i class="far fa-file"></i> File: {{ file }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      folders: [],
      files: []
    }
  },
  mounted: function() {
    var listRef = this.$fireStorage.ref('hp')

    // Find all the prefixes and items.
    listRef
      .listAll()
      .then(res => {
        res.prefixes.forEach(folderRef => {
          this.folders.push(folderRef)
          console.log(`Folder Ref: ${folderRef}`)
        })
        res.items.forEach(itemRef => {
          this.files.push(itemRef)
          console.log(`Item Ref: ${itemRef}`)
        })
      })
      .catch(error => {
        alert(`Error getting the list: ${error}`)
      })
  }
}
</script>

<style>
    .no-wrap{
        overflow: scroll;
        white-space: nowrap;
    }
</style>
