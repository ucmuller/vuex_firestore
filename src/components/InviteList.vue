<template>
  <div v-if="userStatus">
    <md-list class="md-triple-line">
      <div v-for="(data, i) in getData"
            :key="i">
        <md-list-item v-if="data.inviteFlag">
            <md-avatar>
              <md-button class="md-icon-button md-raised md-primary">
                <md-icon>contact_mail</md-icon>
              </md-button>
            </md-avatar>
            <div class="md-list-item-text">
              <span>{{data.guestName}}様　{{data.people}}名</span>
              <span>{{data.date}}　{{data.time}}</span>
            </div>
            <md-button @click="routerPush({name:'InvitePage',params:{id:data.inviteID}})" class="md-raised md-primary">予約詳細</md-button>
        </md-list-item>
      <md-divider class="md-inset"></md-divider>
      </div>
    </md-list>
  </div>
  <div v-else>
      <router-link to="/signin">sign in now!</router-link>
  </div>
</template>

<script>
// import { mapActions, mapGetters } from 'vuex'
import Firebase from '@/api/firebase/firebase'
import Firestore from '@/api/firebase/firestore'
import router from '@/router'
import { mapGetters } from 'vuex'

export default {
  name: 'InviteList',
  components: {
    OAuth
  },
  data(){
    return {
      id: this.$route.params.id,
    }
  },

  created: function(){
    Firebase.onAuth()
    this.getInviteData()
  },

  computed: {
    url(){
      return 'https://social-plugins.line.me/lineit/share?url=http://localhost:8080/userpage/' + this.id
    },
    ...mapGetters({
      getData: 'data',
      userStatus: 'isSignedIn',
      user: 'user'
    })

  },

  watch: {
    data() {
      console.log("data")
    },
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
    },
    routerPush(router){
      this.$router.push(router)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

a {
  color: #42b983;
}
.md-card-example{
  padding: 10px;
  padding-bottom: 60px
  
}
.md-list-item-text{
  text-align: center
}
</style>
