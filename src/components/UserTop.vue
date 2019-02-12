<template>
  <div v-if="userStatus">
      <md-card>
        <md-avatar class="md-large">
          <img :src="photo" alt="">
        </md-avatar>
        <!-- <md-card-header>
          <md-card-header-text>
            <div class="md-title">
              <v-text-field label="shopName" v-model="shopName"/>
            </div>
            <div class="md-title">
              <v-text-field label="Name" v-model="name"/>
            </div>
            <div class="md-title">
              <v-text-field label="Email" v-model="email"/>
            </div>
            <div class="md-title">
              <v-text-field label="Password" v-model="password"/>
            </div>
          </md-card-header-text>
        </md-card-header> -->
        <md-list class="md-double-line">
      <md-list-item>
        <md-icon>store_mall_directory</md-icon>
        <span class="md-list-item-text">{{user.shopName}}</span>
      </md-list-item>

      <md-list-item>
        <md-icon>account_circle</md-icon>
        <span class="md-list-item-text">{{user.name}}</span>
      </md-list-item>

      <md-list-item>
        <md-icon>email</md-icon>
        <span class="md-list-item-text">{{user.email}}</span>
      </md-list-item>
    </md-list>

      <md-card-actions>
        <md-button class="md-raised md-primary">内容変更</md-button>
      </md-card-actions>
      

    </md-card>
    </div>
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
      shopName: '',
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
      // this.shopName = this.$store.getters.user.shopName;
      // this.name = this.$store.getters.user.name;
      // this.email = this.$store.getters.user.email;
      // this.password = this.$store.getters.user.password;
      // this.photoURL = this.$store.getters.imageURL;
      return this.$store.getters.user
      // console.log(this.$store.getters.imageURL)
    },
    userStatus() {
      return this.$store.getters.isSignedIn;
    },
    photo(){
      return this.$store.getters.imageURL;
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

<style scoped>

  .md-card {
    width: 100%;
    margin-top: 10px;
    display: inline-block;
    vertical-align: top;
  }

</style>
