<template>
  <a href="#" class="btn">
    <slot></slot>
  </a>
</template>

<script>
export default {}
</script>

<style scoped lang="scss">
$red: rgb(228, 61, 61);

.btn {
    background-color: $red;
    color: white;
    padding: 10px;
    border-radius: 2px;
    &:hover{
        background-color: darken($red, 10)
    }
}
</style>