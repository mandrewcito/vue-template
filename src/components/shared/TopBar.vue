<template>
  <nav class="navbar">
        <a href="#" class="nav-link" v-on:click="isActive = !isActive">
          <font-awesome-icon icon="bars" size="2x" style="color: grey;"/>
        </a>
    <span class="page-title text-center">{{pagetitle}}</span>
    <SideBar v-bind:isActive="isActive" title="A title"></SideBar>
    <Overlay v-bind:fun="active" v-bind:isActive="isActive"></Overlay>
  </nav>
</template>
<script>

import SideBar from '../../components/shared/SideBar'
import Overlay from '../../components/shared/Overlay'

export default {
  data() {
    return {
      isActive:false
    }
  },
  props:{
    pagetitle:String
  },
  methods:{
    active: function(){
      this.isActive = !this.isActive
    }
  },
  components: {
    SideBar,
    Overlay
  }
}
</script>
<style scoped>
.page-title{
  flex-grow:4;
  font-family: 'Courier New', Courier, monospace;
  font-size: 2em;
}
.enlaces {
  flex-wrap: wrap;
  display:flex;
  align-content: space-between;
  justify-content: space-between;
}
</style>
