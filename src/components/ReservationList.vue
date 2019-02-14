<template>
  <div v-if="userStatus">
    <md-list class="md-triple-line">
      <div v-for="(data, i) in allReservationData"
            :key="i">
        <md-list-item v-if="data.reservationFlag">
            <md-avatar>
              <md-button class="md-icon-button md-raised md-primary">
                <md-icon >contact_mail</md-icon>
              </md-button>
            </md-avatar>
            <div class="md-list-item-text">
              <span>{{data.guestName}}様　{{data.people}}名</span>
              <span>{{data.date}}　{{data.time}}</span>
            </div>
            <md-button @click="routerPush({name:'ReservationPage',params:{id:data.reservationID}})" class="md-raised md-primary">予約詳細</md-button>
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
  data(){
    return {
      id: this.$route.params.id,
    }
  },

  created: function(){
    Firebase.onAuth()
    this.getReservationData()
  },

  computed: {
    ...mapGetters({
      allReservationData: 'allReservationData',
      userStatus: 'isSignedIn',
      user: 'user'
    })
  },

  watch: {
    allReservationData() {
      console.log(this.allReservationData);
    },
  },

  methods: {
    login() {
      Firebase.login();
    },
    logout() {
      Firebase.logout();
    },
    getReservationData(){
      Firestore.getReservationData(this.$route.params.id)
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
