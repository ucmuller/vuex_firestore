import firebase from '@firebase/app';
import '@firebase/auth';
import '@firebase/firestore';
import firebaseConfig from './firebaseConfig'
import {store} from '@/store/'
import router from '@/router'
import types from '@/store/mutation-types';
import Firestore from '@/api/firebase/firestore'


export default {
  init(){
    firebase.initializeApp(firebaseConfig)
    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
  },

  signup(data){
    firebase.auth().createUserWithEmailAndPassword(data.email, data.password)
    .then((user) => {
      firebase.auth().signInWithEmailAndPassword(data.email, data.password)
    })
    .then(()=>{
      this.addUserDate(data)
      console.log('signup: success')
    })
    .then(()=>{
      this.upload(data.uploadFile)
      // router.push('/signin')
    })
    .then(()=>{
      console.log("uplaod後")
      firebase.auth().signInWithEmailAndPassword(data.email, data.password)
      .then(
        (currentUser) => {
          let currentUserData = currentUser.user
          let currentUserID = currentUserData.uid
          Firestore.saveStaffData(currentUserID,currentUserData,data.shopName)
          // console.log(currentUserData)
      })
      router.push('/signin')
    },
    (err) => {
      let errorCode = err.code
      let errorMessage = err.message
      alert(errorCode, errorMessage)
    })
  },

  login(email,password){
    firebase.auth().signInWithEmailAndPassword(email,password)
    .then(currentUser => {
      // console.log(currentUser.user.photoURL)
      // alert('Success!')
      router.push('/')
    },
    err => {
      alert(err.messsage)
    }
    ) 
  },

  logout(){
    firebase.auth().signOut().then(()=>{
    router.push('/signin')
    })
  },

  onAuth(){
    firebase.auth().onAuthStateChanged(user => {
    let userData = user ? user : {};
    Firestore.getStaffEachData(userData.uid)
    this.getImageURL(user.photoURL)
    // console.log(staffData)
    });
  },

  upload(uploadFile) {
    let uid = firebase.auth().currentUser.uid;
    // console.log('upload: success', firebase.auth().currentUser.uid)
    firebase.storage().ref().child('user/'+ uid + uploadFile.name).put(uploadFile).then(function (snapshot) {
    console.log('Uploaded a file!',snapshot);
    });
  },

  getImageURL(uploadFile){
    firebase.storage().ref().child('user/' + uploadFile).getDownloadURL().then((url) => {
      store.dispatch('getImageURL', url);
      console.log(url)
      return url;
  });
  },

  addUserDate(data){
    firebase.auth().currentUser.updateProfile({
      displayName: data.name,
      photoURL: firebase.auth().currentUser.uid + data.imageURL
    })
  },



}