<template>
  <div class='signup'>
    <h2>Signin</h2>
    <input type="text" placeholder="email" v-model="email">
    <input type="password" placeholder="Password" v-model="password">
    <button @click="login">Signin</button>
    <p>You Don't have an account?
      <router-link to="/signup">create account now!</router-link>
    </p>
  </div>
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
    console.log(this.$store)
    console.log("this.$store")
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
.signup {
  margin-top: 20px;

  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center
}
input {
  margin: 10px 0;
  padding: 10px;
}

</style>
