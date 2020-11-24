import Vue from 'vue'
import VueRouter from "vue-router";
import login from '@/components/login'
import user from '@/components/user'
import selectstudent from '@/components/User/selectstudent'
import inforstudentfrom '@/components/User/information'
import register from '@/components/register'


Vue.use(VueRouter)

const routes = [


    { path: '/', component: login },
    { 
        path: '/user', 
        component: user , 
        children: [ 
        　　　{ 
        　　　　path: '/selectstudent', 
         　　　 component: selectstudent 
        　　  },{ 
            　　　　path: '/information', 
             　　　 component: information
            　　  }
        　　]
},
    { path: '/register', component: register },
    // { path: '/selectstudent', component: selectstudent },

];

const router = new VueRouter({
    routes,
    mode: "history"
});

export default router;