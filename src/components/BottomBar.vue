<template>
    <div class="phone-viewport" v-if="userStatus">
      <md-bottom-bar class="md-primary bottom-bar">
        <div class="bottom-bar-item">
          <md-bottom-bar-item @click="routerPush('/')" id="bottom-bar-item-account" md-label="account" md-icon="account_circle"></md-bottom-bar-item>
          <md-bottom-bar-item @click="routerPush('/inviteform')" id="bottom-bar-item-invite" md-label="inviteForm" md-icon="email"></md-bottom-bar-item>
          <md-bottom-bar-item @click="routerPush({name:'InviteList',params:{id:user.staff_uid}})" id="bottom-bar-item-playlist" md-label="inviteList" md-icon="playlist_add_check"></md-bottom-bar-item>
          <md-bottom-bar-item @click="routerPush({name:'ReservationList',params:{id:user.staff_uid}})" id="bottom-bar-item-pages" md-label="reservationList" md-icon="assignment"></md-bottom-bar-item>
        </div>
      </md-bottom-bar>
    </div>
</template>

<script>
import router from 'vue-router'
export default {
  name: 'Shift',
  methods: {
    routerPush(router){
      this.$router.push(router)
    }
  },
  computed: {
    user() {
      return this.$store.getters.user;
    },
    userStatus() {
      return this.$store.getters.isSignedIn;
    }
  }
}
</script>

<style lang="scss" scoped>
  .phone-viewport {
    height: 57px;
    align-items: center;
    overflow: hidden;
    border: 1px solid rgba(#000, .26);
    background: rgba(#000, .06);
    position: fixed;
    bottom:0px;
    width: 100%;
    z-index: 2;
    justify-content: center;
  }
  .bottom-bar-item{
    display: flex;
    width: 100%;
    justify-content: space-between;
  }

</style>