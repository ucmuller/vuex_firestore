<template>
  <div class="hello">
    <div v-if="userStatus">
      <h1>{{ email }}</h1>
      <h2>UserPage</h2>
      <router-link to="/inviteform">InviteForm</router-link>
      <button @click="logout">Log out</button>
      <a :href="url">line</a>
      <router-link :to="{name:'InvitePage',params:{id:user.uid}}">invitepage!</router-link>

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

export default {
  name: 'UserPage',

  data(){
    return {
      email: this.$route.params.id
    }
  },

  created: function(){
    Firebase.onAuth()
    Firestore.getInviteData(this.$route.params.id)
  },

  computed: {
    user() {
      return this.$store.getters.user;
    },
    userStatus() {
      return this.$store.getters.isSignedIn;
    },
    url(){
      return 'https://social-plugins.line.me/lineit/share?url=http://localhost:8080/userpage' + this.user.uid
    }

  },

  methods: {
    login() {
      Firebase.login();
    },
    logout() {
      Firebase.logout();
    },
    getInviteData(){
      Firestore.getInviteData(this.$route.params.id)
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
