<template>
  <div class="home">
      <h1>Bienvenido a la guarida de Rick &amp; Morty</h1>
      <input type="text" class="search" value='' placeholder="Ingresa el nombre de tu personaje de la serie a buscar" />
  </div>
</template>
<script>
  import axios from 'axios'

  export default {
    methods: {
     // getCharacters () { 
        // fetch('http://example.com/movies.json')
            // .then(response => response.json())
            // .then(data => console.log(data));
        // return console.log(data); 
      // },
    },
    watch: {
    },
    created () {

      axios.get("https://rickandmortyapi.com/api/character/").then((result) => {
        console.log(result.data);
      })
    },
    data () {
      return {
      }
    },
    name: 'Search',
    props: {
      msg: String
    }
  }
  </script>
  <style scoped lang="stylus">
      .home
          max-width 100%
          background silver
          border 1px solid black
          margin 0
          padding 0
          align-content center
          height 100vh
      h1 
          font-size 0.9em
      .search
          width 75%
          float center
      input.search
          border 1px solid black
          border-radius 30px
          padding 1%
  </style>