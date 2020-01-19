<template>
  <div class="container">
    <h1>Working with Props</h1>
    <Prop :friend="friend">
        <p>This is a simple paragraph</p>
    </Prop>
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
