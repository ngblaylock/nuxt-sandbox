<template>
  <div class="note-container" :class="type">
    <p class="note-container-title">{{ name ? name.toUpperCase() : type.toUpperCase() }}</p>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      default: 'note'
    },
    name: {}
  }
}
</script>

<style>
.note-container {
  background: aliceblue;
  padding: 30px;
  margin-bottom: 15px;
  border-left: 3px solid #aecbe6;
  color: rgba(0, 0, 0, 0.8);
}

.warning{
  background: #fffff2;
  border-color: #dfdf9f;
}

.danger{
  background: #ffe8ec;
  border-color: #e2bec4;
}

.note-container-title{
  margin-top: 0;
  padding-top: 0;
  font-weight: bold;
}

</style>
