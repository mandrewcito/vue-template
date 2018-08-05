<template>
    <div class="overlay" v-on:click="fun" v-bind:class="{ active: isActive }"></div>
</template>
<script>
export default {
    name:'overlay',
    props:{
        isActive:Boolean,
        fun:Function
    }   
}
</script>
<style scoped>
.overlay {
    position: absolute; /* Sit on top of the page content */
    display: none; /* Hidden by default */
    width: 100%; /* Full width (cover the whole page) */
    height: 100vh; /* Full height (cover the whole page) */
    top: 0; 
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0,0,0,0.25); /* Black background with opacity */
    z-index: 1000; /* Specify a stack order in case you're using a different order for other elements */
    cursor: pointer; /* Add a pointer on hover */
}
.overlay.active {
    display:block;
}
</style>
