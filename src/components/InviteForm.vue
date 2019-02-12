<template>
  <md-card class="md-card-example" v-if="userStatus">
      <md-card-area md-inset>
        <md-card-media md-ratio="16:9">
          <img src="https://images.unsplash.com/photo-1521017432531-fbd92d768814?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" alt="Coffee House">
        </md-card-media>

        <md-card-header>
          <h2 class="md-title">{{user.shopName}}</h2>
          <div class="md-subhead">
            <md-icon>location_on</md-icon>
            <span>2 miles</span>
          </div>
        </md-card-header>
        <md-card-content>
          Shop Detail Shop Detail 
          Shop Detail Shop Detail 
        </md-card-content>
      </md-card-area>

      <md-card-content>
        <h3 class="md-subheading">Reserve Detail</h3>
        <div class="card-reservation">
          <md-icon>access_time</md-icon>
          <div class="md-layout-item">
          <md-field>
            <label>店名</label>
            <md-input v-model="user.shopName"></md-input>
          </md-field>
          <md-field>
            <label for="movie">日付</label>
            <md-select v-model="data.date" id="time">
              <md-option value="2/14">2/14</md-option>
              <md-option value="2/15">2/15</md-option>
            </md-select>
          </md-field>
          <md-field>
            <label for="movie">時間</label>
            <md-select v-model="data.time" id="time">
              <md-option value="19:00">19:00</md-option>
              <md-option value="19:30">19:30</md-option>
              <md-option value="20:00">20:00</md-option>
              <md-option value="20:30">20:30</md-option>
              <md-option value="21:00">21:00</md-option>
              <md-option value="21:30">21:30</md-option>
              <md-option value="22:00">22:00</md-option>
            </md-select>
          </md-field>
          <md-field>
            <label>ゲスト名</label>
            <md-input v-model="data.guestName"></md-input>
          </md-field>
          <md-field>
            <label>人数</label>
            <md-input v-model="data.people"></md-input>
          </md-field>
          <md-field>
            <label>TEL</label>
            <md-input v-model="data.tel"></md-input>
          </md-field>
          </div>
        </div>
      </md-card-content>

      <md-card-actions>
        <md-button @click="saveInviteData" class="md-raised md-primary">予約リストに追加</md-button>
        <!-- <router-link :to="{name:'InviteList',params:{id:user.staff_uid}}">InviteList!</router-link> -->
      </md-card-actions>
    </md-card>
  <div v-else>
      <router-link to="/signin">sign in now!</router-link>
  </div>
</template>

<script>
// import { mapActions, mapGetters } from 'vuex'
import Firebase from '@/api/firebase/firebase'
import Firestore from '@/api/firebase/firestore'
import router from '@/router'
export default {
  name: 'InviteForm',
  data() {
    return {
      data: {
        tel: '',
        date: '',
        time:'',
        guestName:'',
        people:'',
        shopName: ''
      }
    }
  },
  created: function(){
    Firebase.onAuth()
    console.log(this.userStatus)
  },
  computed: {
    user() {
      this.shopName = this.$store.getters.user.shopName
      return this.$store.getters.user;
    },
    userStatus() {
      return this.$store.getters.isSignedIn;
    }
  },
  methods: {
    logout() {
      Firebase.logout();
    },
    saveInviteData(){
      Firestore.saveInviteData(this.user, this.data)
      console.log(this.$store.getters.user.shopName)
      router.push({name:'InviteList',params:{id:this.$store.getters.user.staff_uid}})
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
</style>
