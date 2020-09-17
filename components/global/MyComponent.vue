<template>
  <button @click="count++">Count: {{count}}</button>
</template>

<script>
export default {
  data: function(){
    return {
      count: 0
    }
  }
}
</script>