import { createRouter, createWebHistory} from 'vue-router'

// De components importeren

import HomePage from '@/components/HomePage.vue'; 
import AboutVue from '@/components/About.vue';

const routes = [
    // Hier komen alle routes
    {
        path: '/', // van url 
        name: 'home', // doel van de url 
        component: HomePage // de component naam 
    },
    {
        path: '/about',
        name: 'about',
        component: AboutVue
    },
    

    


]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})



//  voor een Vue2.x versie 
// import Vue from 'vue';
// import Router from 'vue-router';
// Vue.use(Router)
// export default new Router({
    // routers: [
        //alle routes komen hier
    // ]
//})

export default router; 