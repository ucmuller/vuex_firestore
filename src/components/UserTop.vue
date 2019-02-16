<template>
  <div v-if="userStatus">
      <md-card class="md-card">
        <md-avatar class="md-large">
          <img :src="photo" alt="">
        </md-avatar>
        <div>
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

            <md-list-item>
              <md-icon>group_add</md-icon>
              <span class="md-list-item-text">招待数：{{inviteAllDataLength}}</span>
            </md-list-item>

            <md-list-item>
              <md-icon>people_outline</md-icon>
              <span class="md-list-item-text">招待中：{{inviteDataLength}}</span>
            </md-list-item>

            <md-list-item>
              <md-icon>people</md-icon>
              <span class="md-list-item-text">確約数：{{reservationdataLength}}</span>
            </md-list-item>
          </md-list>
          <md-card-actions>
            <md-button class="md-raised md-primary" @click="routerPush('/userupdate')">表示名変更</md-button>
          </md-card-actions>
        </div>
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
import router from 'vue-router'


export default {
  name: 'UserTop',
  data(){
    return{
      shopName: '',
      name: '',
      email:'',
      password:'',
      photoURL:'',
      updateStatus: false
    }
  },

  created: function(){
    Firebase.onAuth()
  },
  mounted() {
          // this.reject()

  },

  computed: {
    photo(){
      return this.$store.getters.imageURL;
    },
    ...mapGetters({
      photo: 'imageURL',
      userStatus: 'isSignedIn',
      user: 'user',
      inviteAllDataLength: 'inviteAllDataLength',
      reservationdataLength: 'reservationdataLength',
      inviteDataLength: 'inviteDataLength'
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
    },
    routerPush(router){
      this.$router.push(router)
    },
    reject(){
      if(!this.userStatus){
          this.$router.push("/signin")
      }
    }
  }
}
</script>

<style scoped>

  .md-card {
    width: 90%;
    margin-top: 70px;
    display: inline-block;
    vertical-align: top;
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 10px;
    padding-bottom: 10px;
    margin-bottom: 80px;
  }
</style>
