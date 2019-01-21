<template>
  <div class="hello">
    <div v-if="userStatus">
      <h1>{{ user.email }}</h1>
      <h2>Invite Form</h2>
      <input type="text" placeholder="email" v-model="email">
      <input type="text" placeholder="date" v-model="date">
      <button @click="sendToFirestore">内容確定</button>
      <button @click="logout">Log out</button>
      <router-link :to="{name:'UserPage',params:{id:user.uid}}">userpage!</router-link>
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
import Firestore from '@/api/firebase/firestore'
import router from '@/router'
export default {
  name: 'InviteForm',
  data() {
    return {
      email: '',
      date: '',
    }
  },
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
    logout() {
      Firebase.logout();
    },
    sendToFirestore(){
      Firestore.sendToFirestore(this.user.uid,this.email,this.date)
      router.push({name:'UserPage',params:{id:this.user.uid}})
    }
  }
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
