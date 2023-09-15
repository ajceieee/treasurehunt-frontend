import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import firebase from "firebase/app";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./registerServiceWorker";

// Replace the firebaseConfig with the credentials from firebase

const firebaseConfig = {
  apiKey: "AIzaSyC5UVuPwBWJ8znIeQY6e4hxN7_jR-tMoJI",
  authDomain: "treasurehunt-cs.firebaseapp.com",
  projectId: "treasurehunt-cs",
  storageBucket: "treasurehunt-cs.appspot.com",
  messagingSenderId: "460878873176",
  appId: "1:460878873176:web:7f205eead0bfc799df802d",
};
firebase.initializeApp(firebaseConfig);

createApp(App).use(router).mount("#app");
