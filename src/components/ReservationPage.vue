<template>
       <!-- <a href="https://access.line.me/oauth2/v2.1/authorize?response_type=code&client_id=1642220448&redirect_uri=http://localhost:8080/&state=12sadd43sdffgg&scope=profile">LINEログインする</a>
          <v-spacer></v-spacer>
          <OAuth/> -->
<md-card class="md-card-example" v-if="dataStatus">
  <md-card-area md-inset>
    <md-card-media md-ratio="16:9">
      <img src="https://images.unsplash.com/photo-1521017432531-fbd92d768814?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" alt="Coffee House">
    </md-card-media>

    <md-card-header>
      <h2 class="md-title">{{shopName}}</h2>
      <div class="md-subhead">
        <!-- <md-icon>location_on</md-icon>
        <span>2 miles</span> -->
      </div>
    </md-card-header>

    <md-card-content>
      Shop Detail Shop Detail 
      Shop Detail Shop Detail 
    </md-card-content>
  </md-card-area>

  <md-card-content>
    <h1 class="md-title">{{staffName}}さんからの招待</h1>
    <div class="card-reservation">
      <md-list class="md-double-line"
        v-for="(data, i) in getEachData"
          :key="i"
          >
        <md-list-item>
          <div class="md-list-item-text">
            <md-icon class="md-primary">{{data.icon}}</md-icon>
            <h1>{{data.value}}</h1>
          </div>
        </md-list-item>
      </md-list>
    </div>
  </md-card-content>
<!-- 
  <md-card-actions>
  </md-card-actions> -->
  <!-- <div v-if="inviteFlag">
    <md-button class="md-raised">Update</md-button>
    <md-button v-if="userStatus" :href="url" class="md-primary button">
      <img src="@/assets/share-a.png" alt="" srcset="" width="100%">
    </md-button>
    <md-button v-else @click="saveReservationData" class="md-raised md-primary">予約を確定</md-button>
  </div>
  <md-dialog-alert
      :md-active.sync="alert"
      md-title="予約を確定しました。"
      md-content="ご来店お待ちしております。" /> -->
</md-card>
 
</template>

<script>

// import { mapActions, mapGetters } from 'vuex'
import Firebase from '@/api/firebase/firebase'
import Firestore from '@/api/firebase/firestore'
import OAuth from "@/components/OAuth";


export default {
  name: 'UserPage',

  components: {
    OAuth
  },

  data(){
    return {
      shopName: '',
      staffName: '',
      id: this.$route.params.id,
      photoURL: '',
      date:'',
      email:'',
      guestName:'',
      people:'',
      datas: null,
      alert: false,
      inviteFlag: true
    }
  },

  created: function(){
    Firebase.onAuth()
    this.getReservationEachData()
    console.log(this.$store.getters.reservationDataStatus)
  },

  computed: {
    dataStatus() {
      return this.$store.getters.reservationDataStatus;
    },
    userStatus() {
      return this.$store.getters.isSignedIn;
    },
    url(){
      let domain = document.domain
      console.log(domain)
      if(domain == "localhost"){
        return `https://social-plugins.line.me/lineit/share?url=http://localhost:8080/invitepage/${this.id}`
      } else {
        return `https://social-plugins.line.me/lineit/share?url=https://${domain}/invitepage/${this.id}`
      }
    },
    user() {
      return this.$store.getters.user
    },
    getEachData() {
      let datas =  [
        // {
        //   text: 'from',
        //   value: this.$store.getters.user.displayName
        // },
        {
          text: 'ゲスト名',
          value: this.$store.getters.reservationData.guestName + '様',
          icon: 'account_circle'
        },
        {
          text: '人数',
          value: this.$store.getters.reservationData.people + '名様',
          icon: 'people'
        },
        {
          text: '日付',
          value: this.$store.getters.reservationData.date,
          icon: 'calendar_today'
        },
        {
          text: '時間',
          value: this.$store.getters.reservationData.time + '〜',
          icon: 'access_time'
        },
        {
          text: 'TEL',
          value: this.$store.getters.reservationData.tel,
          icon: 'phone_in_talk'
        },
        

      ]
      this.shopName = this.$store.getters.reservationData.shopName
      this.staffName = this.$store.getters.reservationData.staffName
      this.inviteFlag = this.$store.getters.reservationData.reservationFlag
      return datas
    },


  },

  watch: {
  },

  methods: {
    login() {
      Firebase.login();
    },
    logout() {
      Firebase.logout();
    },
    getReservationEachData(){
      Firestore.getReservationEachData(this.$route.params.id)
    },
    // saveReservationData(){
    //   console.log(this.$store.getters.inviteData, this.$route.params.id)
    //   Firestore.saveReservationData(this.$store.getters.inviteData, this.$route.params.id)
    //   Firestore.inviteCompletion(this.$route.params.id)
    //   this.alert = true
    //   this.inviteFlag = false
    // }

    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

a {
  color: black;
}

.md-card-example{
  padding: 10px;
  padding-bottom: 60px;
}
.md-list-item-text h1{
  font-size: 20px;
}

.md-list-item-text{
  text-align: center;
}

.update-button{
  
}


</style>
