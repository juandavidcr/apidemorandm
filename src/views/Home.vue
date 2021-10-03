<template>
  <div class="home">
    <img class="logo" alt="logo" src="../assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Search></Search>
  </div>
</template>

<script>
// @ is an alias to /src
import Results from '@/components/Results.vue'
import Search from '@/components/Search.vue'

export default {
  name: 'Home',
  components: {
    Results,
    Search
  }
}
</script>
<style lang="stylus">
  .logo
    max-width 20%
  body 
    font-family Roboto
</style>
