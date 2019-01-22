<template>
  <div class="hello">
    <div>
      <h1>{{ email }}</h1>
      <h2>InvitePage</h2>
      <h2>invitedata:{{ getData["date"] }}</h2>
      <h2>invitedata:{{ getData["email"] }}</h2>
      <router-link to="/inviteform">InviteForm</router-link>
      <button @click="getInviteData">aaa</button>
    </div>
      <router-link to="/signin">sign in now!</router-link>
  </div>
</template>

<script>

// import { mapActions, mapGetters } from 'vuex'
import Firebase from '@/api/firebase/firebase'
import Firestore from '@/api/firebase/firestore'

export default {
  name: 'InvitePage',

  data(){
    return {
      email: this.$route.params.id,
      data: ''
    }
  },

  computed:{
    inviteData(){
      Firestore.getInviteData(this.$route.params.id)
    },
    getData() {
      return this.$store.getters.data;
    }
  },


  created(){
    this.getInviteData()
  },

  methods: {
    getInviteData(){
      Firestore.getInviteData(this.$route.params.id)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
</style>
