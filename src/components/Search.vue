<template>
  <div class="home">
      <h1>Bienvenido a la guarida de Rick &amp; Morty</h1>
      <input type="text" id="form-search" class="search" placeholder="Ingresa el nombre de tu personaje de la serie a buscar" />
      <button class="btn-src" id="btn-search" v-on:click="fetchDataCharacters">Buscar</button>
      <div v-for="character of characters" v-bind:key="character.id">
          {{character}}
      </div>
  </div>
</template>
<script>
  import axios from 'axios'

  export default {
    methods: {
      // getAllData(){
      //   for (var i =0;i<32;i++){
      //     console.log(i);
      //   }
      // }
      fetchDataCharacters(){
        console.log("desde fetch data characters")
         axios.get("https://rickandmortyapi.com/api/character/")
                          .then(res => {
                            this.characters = res.data.results
                            //console.log(this.characters[0])
                          }).catch(err =>{
                            console.log(err)
                          })
      }
    },
    watch: {
    },
    created () {
      //this.getAllData();
      axios.get("https://rickandmortyapi.com/api/character/").then((result) => {
        var info = result.data.info;
        var results = result.data.results;
        console.log(info);
        console.log(results);
        
      }).catch(error => console.log(error))
    },
    data () {
      return {
        characters:[]
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
          border 1px solid black
          margin 0
          padding 0
          align-content center
      h1 
          font-size 0.9em
      .search
          width 75%
          float center
      input.search
          border 1px solid black
          border-radius 30px
          padding 10px
          margin-bottom 1% 
          float center
      .btn-src
        border-radius 30px
        text-align center
        margin-top 10%
        padding 10px
        transform scale(0.87)
      @media (min-width: 300px)
        .btn-src
          width 70%
          margin 0 auto !important
        @media screen and (min-width: 600px)
          .btn-src
            width 25%
  </style>