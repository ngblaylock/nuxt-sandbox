<template>
  <div class="site">
    <NavBar />
    <main>
      <nuxt />
    </main>
    <FooterBar />
  </div>
</template>

<style lang="scss" scoped>
.site{
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  main{
    flex: 1 0 auto;
    display: flex;
    .center-vh{
      align-self: center;
    }
  }
}
</style>
