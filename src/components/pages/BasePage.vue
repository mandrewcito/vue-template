<template>
    <div class="fullviewport-container">
        <div class="top-container">
            <TopBar v-bind:pagetitle="pagetitle"></TopBar>
        </div>
        <div class="body-container">
            <slot></slot>
        </div>
        <div class="footer-container">
            <BottomBar></BottomBar>
        </div>
    </div>
</template>
<script>

import BottomBar from '../shared/BottomBar'
import TopBar from '../shared/TopBar'

export default {
    name:'BasePage',
    components: {
        BottomBar,
        TopBar
    },
    props:{
        pagetitle:String
    }
}
</script>
<style scoped>
.top-container{
    top: 0px;
}
.footer-container{
    bottom: 0px;
    position:fixed;
    width: 100%;
}
</style>
