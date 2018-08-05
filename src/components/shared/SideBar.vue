<template>
<div class="sidebar-container">
        <nav id="sidebar" class="sidebar" v-bind:class="{ active: isActive }">
            <div class="sidebar-header">
                <h3> {{title}}</h3>
            </div>
        </nav>
</div>
</template>

<script>
export default {
    props:{
        title:String,
        isActive:Boolean
    }
}
</script>
<style scoped>
.sidebar {
    display:none;
    
}

.sidebar.active{
    display:block;
}

#sidebar {
    min-width: 250px;
    max-width: 250px;
    height: 100vh;
    position:absolute;
    top:0px;
    left:0px;
    background-color: rgba(255,255,255,0.75);
    box-shadow: grey;
    transition: all 0.3s;
    z-index: 1001;
}

#sidebar.active {
    margin-right: -250px;
}

#sidebar .sidebar-header {
    padding: 20px;

}

#sidebar ul.components {
    padding: 20px 0;

}

#sidebar ul p {

    padding: 10px;
}

#sidebar ul li a {
    padding: 10px;
    font-size: 1.1em;
    display: block;
}


</style>
