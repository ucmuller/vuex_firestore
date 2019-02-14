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
import { mapGetters } from 'vuex'

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
    photo(){
      return this.$store.getters.imageURL;
    },
    ...mapGetters({
      photo: 'imageURL',
      userStatus: 'isSignedIn',
      user: 'user'
    })
  },
  watch: {
    user() {
      console.log("ユーザーデータ更新");
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
