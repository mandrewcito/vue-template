<template>
  <BasePage v-bind:pagetitle="pagetitle">
    <div class="container">
      <div class="row">
        <div class="col-sm-3">
          <img src="../../assets/logo.png">
        </div>
        <div class="col-sm">
         <p>
           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse lacinia urna at nibh fringilla, id eleifend libero euismod. Sed et molestie justo, eget accumsan mi. Vivamus id sapien sollicitudin, lacinia justo suscipit, porta felis. Donec ac auctor felis. Vestibulum sed tempor diam. Proin dictum posuere varius. Praesent at euismod ligula. Maecenas vestibulum accumsan nisl, tempus dignissim massa feugiat a. In id scelerisque diam. Donec scelerisque leo est, sit amet ornare diam pharetra quis. Praesent efficitur sodales luctus. Mauris bibendum aliquet urna sit amet hendrerit. Morbi erat eros, egestas in diam vel, varius ultrices neque. Nunc vulputate luctus ligula vitae viverra. Curabitur nunc sem, iaculis vel imperdiet id, maximus sit amet eros. Cras at sem sapien. 
         </p>
        </div>
      </div>
    </div>
  </BasePage>
</template>

<script>

import BasePage from '../pages/BasePage'

export default {
  name: 'Home',
  data () {
    return {
      pagetitle: 'A title '
    }
  },
  methods: {

  },
  created: function () {

  },
  watch: {

  },
  components: {
    BasePage,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .noButton{
    color:black;
    background-color:transparent;
    cursor:default;
    border: 0px;
  }
  .noButton:hover{
    all:none;
  }
  h3 {
    margin: 40px 0 0;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
</style>