
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);


import CarmanagementCarManager from "./components/listers/CarmanagementCarCards"
import CarmanagementCarDetail from "./components/listers/CarmanagementCarDetail"
import CarmanagementDriverManager from "./components/listers/CarmanagementDriverCards"
import CarmanagementDriverDetail from "./components/listers/CarmanagementDriverDetail"


export default new Router({
    // mode: 'history',
    base: process.env.BASE_URL,
    routes: [
            {
                path: '/carmanagements/cars',
                name: 'CarmanagementCarManager',
                component: CarmanagementCarManager
            },
            {
                path: '/carmanagements/cars/:id',
                name: 'CarmanagementCarDetail',
                component: CarmanagementCarDetail
            },
            {
                path: '/carmanagements/drivers',
                name: 'CarmanagementDriverManager',
                component: CarmanagementDriverManager
            },
            {
                path: '/carmanagements/drivers/:id',
                name: 'CarmanagementDriverDetail',
                component: CarmanagementDriverDetail
            },



    ]
})
