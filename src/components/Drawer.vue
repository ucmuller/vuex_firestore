<template>
  <nav v-if="userStatus">
    <v-toolbar flat app>
      <v-toolbar-side-icon class="grey--text" @click="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title class="text--uppercase grey--text">Title</v-toolbar-title>
      <v-spacer></v-spacer>
        <v-btn flat>aaa</v-btn>
        <v-btn flat>bbb</v-btn>
        <v-btn flat color="grey" @click="logout">
          <span>Sign Out</span>
          <v-icon right>exit_to_app</v-icon>
        </v-btn>
    </v-toolbar>

    <v-navigation-drawer
    id="app-drawer"
    v-model="drawer"
    app
    dark
    floating
    persistent
    mobile-break-point="991"
    width="260"
  >
      <v-layout
        class="fill-height"
        tag="v-list"
        column
      >
        <v-list-tile avatar>
          <v-list-tile-avatar
          >
          </v-list-tile-avatar>
          <v-list-tile-title class="title">
            Vuetify MD
          </v-list-tile-title>
        </v-list-tile>
        <v-divider/>
        <v-list-tile
        >
          <v-text-field
            class="purple-input search-input"
            label="Search..."
          />
        </v-list-tile>
        <v-list-tile
          v-for="(link, i) in links"
          :key="i"
          :to="link.to"
          avatar
          class="v-list-item"
        >
          <v-list-tile-action>
            <v-icon>{{ link.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-title
            v-text="link.text"
          />
        </v-list-tile>
      </v-layout>
  </v-navigation-drawer>
  </nav>
</template>

<script>
import Firebase from '@/api/firebase/firebase'
export default {
  data(){
    return {
      drawer: false,
      links: [
      {
        to: '/dashboard',
        icon: 'mdi-view-dashboard',
        text: 'Dashboard'
      },
      {
        to: '/user-profile',
        icon: 'mdi-account',
        text: 'User Profile'
      },
      {
        to: '/table-list',
        icon: 'mdi-clipboard-outline',
        text: 'Table List'
      },
      {
        to: '/typography',
        icon: 'mdi-format-font',
        text: 'Typography'
      },
      {
        to: '/icons',
        icon: 'mdi-chart-bubble',
        text: 'Icons'
      },
      {
        to: '/maps',
        icon: 'mdi-map-marker',
        text: 'Maps'
      },
      {
        to: '/notifications',
        icon: 'mdi-bell',
        text: 'Notifications'
      }
    ]
    }
  },
  created: function(){
    Firebase.onAuth()
  },
  computed: {
    user() {
      return this.$store.getters.user;
    },
    userStatus() {
      return this.$store.getters.isSignedIn;
    }
  },
  methods: {
    logout() {
      Firebase.logout();
    }
  }
}

</script>
