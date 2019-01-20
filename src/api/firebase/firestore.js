import firebase from '@firebase/app';
import '@firebase/firestore';
import {store} from '@/store/'
import router from '@/router'
import firebaseConfig from './firebaseConfig'


const firebaseApp = firebase.initializeApp(firebaseConfig, 'exercise-vue')
const firestore = firebaseApp.firestore();
const settings = {timestampsInSnapshots: true};
firestore.settings(settings);

export default {
  sendtoFirestore(uid,email,date){
    firestore.collection("invite").doc(uid).set({
        email: email,
        date: date
    })
    .then(function() {
        console.log("Document written with ID");
    })
    .catch(function(error) {
        console.error("Error writing document: ", error);
    });
  },
  getInviteData(uid){
   
    firestore.collection("invite").doc(uid).get().then(function(doc) {
      let array = []
      if (doc.exists) {
        let data = {date: doc.data().date}
          console.log("Document data:", doc.data())
          array.push(data);
          console.log("Document arraydata:", array[0])
          return array
      } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
      }
      // return array[0]
    }).catch(function(error) {
        console.log("Error getting document:", error);
    });
  }

}



