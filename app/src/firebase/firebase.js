import { initializeApp } from "firebase/app"
import config from "./config"

// const config = {
//   apiKey: "AIzaSyCTZSIjdDH77hPiC04tqpzd9wjQZEySFwg",
//   authDomain: "udemy-vue-firebase-practise.firebaseapp.com",
//   projectId: "udemy-vue-firebase-practise",
//   storageBucket: "udemy-vue-firebase-practise.firebasestorage.app",
//   messagingSenderId: "810202894616",
//   appId: "1:810202894616:web:533a80f14a0dd8b604ce6d"
// }

const firebase = initializeApp(config)

export default firebase
