import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import firebase from "firebase/app";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const firebaseConfig = {
  apiKey: "AIzaSyDetVPfaQ2KdZzlaUzlzQjKdwF9t0NwG2I",
  authDomain: "treasure-hunt-comp.firebaseapp.com",
  projectId: "treasure-hunt-comp",
  storageBucket: "treasure-hunt-comp.appspot.com",
  messagingSenderId: "365266434667",
  appId: "1:365266434667:web:28db1a18f10fd62c010f2e",
};
firebase.initializeApp(firebaseConfig);

createApp(App).use(router).mount("#app");
