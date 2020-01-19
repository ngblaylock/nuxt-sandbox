<template>
  <div class="container">
    <h1>Nuxt Sandbox</h1>
    <Prop :friend="friend">Passing a prop</Prop>
  </div>
</template>

<script>
import Prop from '@/components/Prop'

export default {
  components: {
    Prop
  },
  data() {
    return {
      friend: {
        name: 'Brian Blaylock',
        username: 'blaylockbk',
        email: 'blaylockbk@gmail.com',
        img: 'https://i.pravatar.cc/300'
      }
    }
  }
}
</script>

<style>

</style>
