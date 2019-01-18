import firebase from '@firebase/app';
import '@firebase/auth';
import {store} from '@/store/'
import router from '@/router'
import types from '@/store/mutation-types';


const config = {
  apiKey: "AIzaSyCFHDrspcVSK6vFgK2XEr8uqf1cgDtKerw",
  authDomain: "reserve-beta.firebaseapp.com",
  databaseURL: "https://reserve-beta.firebaseio.com",
  projectId: "reserve-beta",
  storageBucket: "reserve-beta.appspot.com",
  messagingSenderId: "297677270503"
};

export default {
  init(){
    firebase.initializeApp(config)
    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
  },

  signup(email,password){
    firebase.auth().createUserAndRetrieveDataWithEmailAndPassword(email, password)
    .then(user => {
      console.log(email)
      alert('Create account: ')
      router.push('/signin')
    })
    .catch(error => {
      console.log('error')
      alert(error.messeage)
    })
  },

  login(email,password){
    firebase.auth().signInWithEmailAndPassword(email,password)
    .then(user => {
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
    });
  }
}