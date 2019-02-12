<template>
   <v-app id="inspire">
    <v-content>
      <v-container fluid>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark color="primary">
                <v-toolbar-title>Signup form</v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar>
              <v-card-text>
                <div>
                  <v-text-field prepend-icon="person" name="name" label="name" type="text" v-model="name"></v-text-field>
                  <v-text-field prepend-icon="person" name="shopName" label="shopName" type="text" v-model="shopName"></v-text-field>
                  <v-text-field prepend-icon="email" name="email" label="email" type="text" v-model="email"></v-text-field>
                  <v-text-field id="password" prepend-icon="lock" name="Password" label="Password" type="password" v-model="password"></v-text-field>
                  <v-input prepend-icon="image">
                    <label for="file_photo">
                      <input id="file_photo" @change="selectFile" type="file" name="file" style="display:none;">
                      <div id="errArea"> {{ infoMsg }}</div>
                    </label>
                  </v-input>
                </div>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" @click="signup">Signup</v-btn>
                <v-spacer></v-spacer>
              </v-card-actions>
              <v-card-actions>
                <v-spacer></v-spacer>
                <router-link to="/signin">sign in now!</router-link>
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
  <!-- <div class='signup'>
    <h2>Sign up</h2>
    <input type="text" placeholder="email" v-model="email">
    <input type="password" placeholder="Password" v-model="password">
    <button @click="signup">Register</button>
    <p>Do you have account?
      <router-link to="/signin">sign in now!</router-link>
    </p>
  </div> -->
</template>

<script>
// import { mapActions, mapGetters } from 'vuex'
import Firebase from '@/api/firebase/firebase'

export default {
  name: 'Signup',
  data() {
    return {
      name: '',
      shopName: '',
      email: '',
      password: '',
      uploadFile:'',
      infoMsg:'＋写真を選択'
    }
  },
  methods: {
    signup(){
      let userData = {
        email: this.email,
        password: this.password,
        name: this.name,
        imageURL: this.uploadFile.name,
        uploadFile: this.uploadFile,
        shopName: this.shopName
      }
      Firebase.signup(userData)
      // this.upload()
      console.log('ok')

    },
    selectFile: function (e) {
      e.preventDefault();
      let files = e.target.files;
      this.uploadFile = files[0];
      console.log(files[0])
      this.infoMsg = this.uploadFile.name

    },
    upload() {
      if (!this.uploadFile) {
        this.infoMsg = '選択してください'
        return;
      }     
      Firebase.upload(this.uploadFile)
    }
  }
  
}
</script>


<style scoped>
a {
  color: #42b983;
}

label {
  color: white;  
  background-color: #AAA;
  padding: 6px;
  border-radius: 12px;
}

.container.fluid {
  padding-top: 50px;
}

</style>
