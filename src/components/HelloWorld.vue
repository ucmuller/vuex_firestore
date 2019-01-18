<template>
  <div class="hello">
    <div v-if="userStatus">
      <h1>{{ user.email }}</h1>
      <h2>Essential Links</h2>
      <button @click="logout">Log out</button>
    </div>
    <div v-else>
      <router-link to="/signin">sign in now!</router-link>
      <button @click="logout">Log out</button>
    </div>
  </div>
</template>

<script>
// import { mapActions, mapGetters } from 'vuex'
import Firebase from '@/api/firebase/firebase'
export default {
  name: 'HelloWorld',

  created: function(){
    Firebase.onAuth()
  },

  computed: {
    user() {
      return this.$store.getters.user;
    },
    userStatus() {
      return this.$store.getters.isSignedIn;
    }
  },

  methods: {
    login() {
      Firebase.login();
    },
    logout() {
      Firebase.logout();
    }
  }
  // data () {
  //   return {
  //     msg: firebase.auth().currentUser.email
  //   }
  // },
  // methods: {
  //   signOut: function (){
  //     firebase.auth().signOut().then(()=>{
  //       this.$router.push('/signin')
  //     })
  //   }
  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
