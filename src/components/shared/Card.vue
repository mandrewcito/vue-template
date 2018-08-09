<template>
<div class="card">
  <img class="card-img-top" v-bind:src="data.imageSrc" v-bind:alt="data.imageAlt">
  <div class="card-block">
    <h4 class="card-title">{{data.title}}</h4>
    <p class="card-text">{{data.text}}</p>
    <a v-bind:href="data.detailLink" class="btn btn-primary">{{data.detailLinkText}}</a>
  </div>
</div>    
</template>
<script>
export default {
    props:{
        data:Object
    }
}
</script>
<style scoped>

</style>
