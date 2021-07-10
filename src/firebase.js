import firebase from "firebase/app"
import "firebase/auth"
import 'firebase/storage'
import 'firebase/firestore'

firebase.initializeApp(
    {
    apiKey: "AIzaSyBVEuT9Cj7c7HneoWEpnnhMIP1-Y1lhEjk",
    authDomain: "reels-48f2d.firebaseapp.com",
    projectId: "reels-48f2d",
    storageBucket: "reels-48f2d.appspot.com",
    messagingSenderId: "942121882784",
    appId: "1:942121882784:web:2ca656530cec760ec6e5c5"
      }
)
export const auth = firebase.auth();
const firestore = firebase.firestore();
export const database ={
    users:firestore.collection('users'),
    getCurrentTimeStamp : firebase.firestore.FieldValue.serverTimestamp
}
export const storage = firebase.storage();
// export default firebase;