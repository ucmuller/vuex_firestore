import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Signup from '@/components/signup'
import Signin from '@/components/signin'
import firebase from 'firebase'

Vue.use(Router)

let router =  new Router({
  mode: 'history',
  routes: [
    // {
    //   path: '*',
    //   redirect: 'signin'
    // },
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      // meta: { requiresAuth: true }
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/signin',
      name: 'Signin',
      component: Signin   
    }
  ]
})

// router.beforeEach((to, from, next)=>{
//   let requiresAuth = to.matched.some(record => record.meta.requiresAuth)
//   let currentUser = firebase.auth().currentUser
//   if (requiresAuth){
//   if (!currentUser){
//     next({
//       path: '/signin',
//       query: {redirect: to.fullPath}
//     })
//   }else{
//     next()
//   }
// }else{
//   next()
// }
// })


export default router