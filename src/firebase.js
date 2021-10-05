import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAgbU-Kh7GqUmK13tTVdU-5SuIXft6-eEA",
    authDomain: "crud-c4f76.firebaseapp.com",
    projectId: "crud-c4f76",
    storageBucket: "crud-c4f76.appspot.com",
    messagingSenderId: "734261929981",
    appId: "1:734261929981:web:99bec8954303323646db94"
  }

  export const firebaseApp = firebase.initializeApp(firebaseConfig)