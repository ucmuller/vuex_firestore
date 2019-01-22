<template>
  <v-app id="inspire">
    <v-content class="signin">
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark color="primary">
                <v-toolbar-title>Login form</v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field prepend-icon="email" name="email" label="email" type="text" v-model="email"></v-text-field>
                  <v-text-field id="password" prepend-icon="lock" name="Password" label="Password" type="password" v-model="password"></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" @click="login">Login</v-btn>
                <v-spacer></v-spacer>
              </v-card-actions>
              <v-card-actions>
                <v-spacer></v-spacer>
                <router-link to="/signup">create account now!</router-link>
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
    <!-- <div class='signup'>
    <h2>Signin</h2>
    <input type="text" placeholder="email" v-model="email">
    <input type="password" placeholder="Password" v-model="password">
    <button @click="login">Signin</button>
    <p>You Don't have an account?
      <router-link to="/signup">create account now!</router-link>
    </p>
  </div> -->
</template>

<script>
// import { mapActions, mapGetters } from 'vuex'
import Firebase from '@/api/firebase/firebase'
export default {
  name: 'Signin',
  data() {
    return {
      email: '',
      password: ''
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
      return this.$store.getters.inSignedIn;
    }
  },

  methods: {
    login() {
      Firebase.login(this.email, this.password);
    },
    logout() {
      Firebase.logout();
    }
  }
  
}
</script>


<style scoped>
a {
  color: #42b983;
}

.signin{
  margin-top: 60px;
}


</style>
