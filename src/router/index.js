import Vue from 'vue'
import Router from 'vue-router'
import UserTop from '@/components/UserTop'
import Signup from '@/components/Signup'
import Signin from '@/components/Signin'
import InviteForm from '@/components/InviteForm'
import UserPage from '@/components/UserPage'
import UserUpdate from '@/components/UserUpdate'
import InvitePage from '@/components/InvitePage'
import InvitePageUpdate from '@/components/InvitePageUpdate'
import ReservationPage from '@/components/ReservationPage'
import InviteList from '@/components/InviteList'
import ReservationList from '@/components/ReservationList'
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
      path: '/usertop',
      name: 'UserTop',
      component: UserTop,
      meta: { requiresAuth: true }
    },
    {
      path: '/userupdate',
      name: 'UserUpdate',
      component: UserUpdate,
      meta: { requiresAuth: true }
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/',
      name: 'Signin',
      component: Signin
    },
    {
      path: '/inviteform',
      name: 'Inviteform',
      component: InviteForm
    },
    {
      path: '/invitelist/:id',
      name: 'InviteList',
      component: InviteList,
      props: route => ({
        id: Number(route.params.id)
      })
    },
    {
      path: '/reservationlist/:id',
      name: 'ReservationList',
      component: ReservationList,
      props: route => ({
        id: Number(route.params.id)
      })
    },
    {
      path: '/userpage/:id',
      name: 'UserPage',
      component: UserPage,
      props: route => ({
        id: Number(route.params.id)
      })
    },
    {
      path: '/invitepage/:id',
      name: 'InvitePage',
      component: InvitePage,
      props: route => ({
        id: Number(route.params.id)
      })
    },
    {
      path: '/invitepageupdate/:id',
      name: 'InvitePageUpdate',
      component: InvitePageUpdate,
      props: route => ({
        id: Number(route.params.id)
      })
    },
    {
      path: '/reservationpage/:id',
      name: 'ReservationPage',
      component: ReservationPage,
      props: route => ({
        id: Number(route.params.id)
      })
    },
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