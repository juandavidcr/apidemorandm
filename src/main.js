import { createApp } from 'vue'
import axios from 'axios'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA4zIu4GndShA4CPidUcYuNadM8J39F2j0",
  authDomain: "fir-cd30b.firebaseapp.com",
  projectId: "fir-cd30b",
  storageBucket: "fir-cd30b.appspot.com",
  messagingSenderId: "256887579399",
  appId: "1:256887579399:web:9f59e88976e58da2f65ba2",
  measurementId: "G-ZWEHH1Q830"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
axios.defaults.headers.common['Accept'] = '*';
//
createApp(App).use(router).mount('#app')
