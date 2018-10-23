import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyDDOwPtv46O8gP0f-RBsvT9nDp3yrRXxtQ",
  authDomain: "ad-snadbox.firebaseapp.com",
  databaseURL: "https://ad-snadbox.firebaseio.com",
  projectId: "ad-snadbox",
  storageBucket: "ad-snadbox.appspot.com",
  messagingSenderId: "328854615659"
}

firebase.initializeApp(config)

export const databaseRef = firebase.database().ref('isa-after-hours-23-10-18/messages')