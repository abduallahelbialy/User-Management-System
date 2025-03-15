<template>
    <div>
        <NavBar/>
         <RouterView />
<Footer/>
    </div>
</template>

<script>
import { RouterView } from 'vue-router';
import NavBar from './components/layout/NavBar.vue';
import Footer from './components/layout/Footer.vue';

export default {
      components:{RouterView,NavBar,Footer}

}
</script>

<style lang="scss" scoped>
</style>
