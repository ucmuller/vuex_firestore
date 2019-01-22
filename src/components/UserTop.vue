<template>
  <!-- <div class="hello">
    <div v-if="userStatus">
      <h1>{{ user.displayName }}</h1>
      <h2>Essential Links</h2>
      <router-link to="/inviteform">InviteForm</router-link>
      <button @click="logout">Log out</button>
    </div>
  </div> -->
<v-app id="inspire" v-if="userStatus">
  <v-container fill-height fluid grid-list-xl>
    <v-layout align-center justify-center>
      <v-flex xs12 md8>
        <v-card>
          <v-img :src="photoURL" aspect-ratio="1.4"></v-img>
          <v-form>
            <v-container >
              <v-layout wrap>
                <v-flex xs12 md12>
                  <v-text-field label="Name" v-model="name"/>
                </v-flex>
                <v-flex xs12 md12>
                  <v-text-field label="Email" v-model="email"/>
                </v-flex>
                <v-flex xs12 md12>
                  <v-text-field label="Password" v-model="password"/>
                </v-flex>
                <v-flex>
                  <v-btn color="primary" class="mx-0 font-weight-light">Update Profile</v-btn>
                </v-flex>
              </v-layout>
            </v-container>
          </v-form>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
  </v-app>
  <div v-else>
      <router-link to="/signin">sign in now!</router-link>
  </div>
</template>

<script>
// import { mapActions, mapGetters } from 'vuex'
import Firebase from '@/api/firebase/firebase'
export default {
  name: 'UserTop',
  data(){
    return{
      name: '',
      email:'',
      password:'',
      photoURL:''
    }
  },

  created: function(){
    Firebase.onAuth()
  },

  computed: {
    user() {
      this.name = this.$store.getters.user.displayName;
      this.email = this.$store.getters.user.email;
      this.password = this.$store.getters.user.password;
      this.photoURL = this.$store.getters.imageURL;
      console.log(this.$store.getters.imageURL)
    },
    userStatus() {
      return this.$store.getters.isSignedIn;
    }
  },
  watch: {
    user() {
      this.$store.getters.user;
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
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* h1, h2 {
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
} */

</style>
