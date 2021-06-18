import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import firebase from "firebase/app";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./registerServiceWorker";

// Replace the firebaseConfig with the credentials from firebase

const firebaseConfig = {
  apiKey: "API_KEY",
  authDomain: "AUTH_DOMAIN",
  projectId: "PROGECT_ID",
  storageBucket: "STORAGE_BUCKET",
  messagingSenderId: "MESSAGING_SENDER_ID",
  appId: "APP_ID",
};
firebase.initializeApp(firebaseConfig);

createApp(App).use(router).mount("#app");
