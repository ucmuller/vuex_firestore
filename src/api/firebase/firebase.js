import firebase from '@firebase/app';
import '@firebase/auth';
import '@firebase/firestore';
import firebaseConfig from './firebaseConfig'
import {store} from '@/store/'
import router from '@/router'
import types from '@/store/mutation-types';

// const firebaseApp = firebase.initializeApp(firebaseConfig, 'exercise-vue')
// const firestore = firebaseApp.firestore();
// const settings = {timestampsInSnapshots: true};
// firestore.settings(settings);


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
    .then((user)=>{
      this.upDate(data)
        // console.log('success2', firebase.auth().currentUser.uid)
      })
      .then((user)=>{
        this.upload(data.uploadFile)
        router.push('/signin')
      },
      (err) => {
        let errorCode = err.code
        let errorMessage = err.message
        alert(errorCode, errorMessage)
      }
    )
  },

  login(email,password){
    firebase.auth().signInWithEmailAndPassword(email,password)
    .then(currentUser => {
      console.log(currentUser.user.photoURL)
      alert('Success!')
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
    user = user ? user : {};
    store.commit(types.USER_ONAUTHSTATECHANGED, user);
    store.commit(types.USER_ONUSERSTATUSCHANGED, user.uid ? true : false);
    this.getImageURL(user.photoURL)
    });
  },

  upload(uploadFile) {
    let uid = firebase.auth().currentUser.uid;
    console.log('success3', firebase.auth().currentUser.uid)
    firebase.storage().ref().child('user/'+ uid + uploadFile.name).put(uploadFile).then(function (snapshot) {
    console.log('Uploaded a blob or file!',snapshot);
    });
  },

  getImageURL(uploadFile){
    firebase.storage().ref().child('user/' + uploadFile).getDownloadURL().then((url) => {
      store.commit(types.USER_ONUSERIMAGECHANGED, url);
      console.log(url)
      return url;
  });
  },

  upDate(data){
    firebase.auth().currentUser.updateProfile({
      displayName: data.name,
      photoURL: firebase.auth().currentUser.uid + data.imageURL
    })
  }


}