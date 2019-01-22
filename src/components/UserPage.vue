<template>
  <!-- <div class="hello">
    <div v-if="userStatus">
      <h1>{{ email }}</h1>
      <h2>UserPage</h2>
      <router-link to="/inviteform">InviteForm</router-link>
      <button @click="logout">Log out</button>
      <a :href="url">line</a>
      <router-link :to="{name:'InvitePage',params:{id:user.uid}}">invitepage!</router-link>

    </div>
    <div v-else>
      <router-link to="/signin">sign in now!</router-link>
      <button @click="logout">Log out</button>
    </div>
  </div> -->
  
  <v-card
    class="mx-auto"
    color="#26c6da"
    dark
    max-width="400"
  >
    <v-card-title>
      <v-icon
        large
        left
      >
        mdi-twitter
      </v-icon>
      <span class="title font-weight-light">Twitter</span>
    </v-card-title>

    <v-card-text class="headline font-weight-bold">
      "Turns out semicolon-less style is easier and safer in TS because most gotcha edge cases are type invalid as well."
    </v-card-text>

    <v-card-actions>
      <v-list-tile class="grow">
        <v-list-tile-avatar color="grey darken-3">
          <v-img
            class="elevation-6"
            src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
          ></v-img>
        </v-list-tile-avatar>

        <v-list-tile-content>
          <v-list-tile-title>Evan You</v-list-tile-title>
        </v-list-tile-content>

        <v-layout
          align-center
          justify-end
        >
          <v-icon class="mr-1">mdi-heart</v-icon>
          <span class="subheading mr-2">256</span>
          <span class="mr-1">·</span>
          <v-icon class="mr-1">mdi-share-variant</v-icon>
          <span class="subheading">45</span>
        </v-layout>
      </v-list-tile>
    </v-card-actions>
  </v-card>
</template>

<script>

// import { mapActions, mapGetters } from 'vuex'
import Firebase from '@/api/firebase/firebase'
import Firestore from '@/api/firebase/firestore'

export default {
  name: 'UserPage',

  data(){
    return {
      email: this.$route.params.id
    }
  },

  created: function(){
    Firebase.onAuth()
    Firestore.getInviteData(this.$route.params.id)
  },

  computed: {
    user() {
      return this.$store.getters.user;
    },
    userStatus() {
      return this.$store.getters.isSignedIn;
    },
    url(){
      return 'https://social-plugins.line.me/lineit/share?url=http://localhost:8080/userpage' + this.user.uid
    }

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
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* h1, h2 {
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
} */
</style>
