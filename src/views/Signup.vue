<template>
  <div class="signup container">
    <div class="item">
      <!-- <h1>QuaRunTime 2.0</h1> -->
      <img src="../../public/icon.png" alt="icon" />
      <!-- <button @click="darkThemeSwitch">Switch Theme</button> -->
    </div>
    <div class="item">
      <button class="btn" @click="googleSignIn">Sign In With Google</button>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  mounted() {
    this._addDarkTheme();
  },
  methods: {
    googleSignIn() {
      const provider = new firebase.auth.GoogleAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(() => {
          console.log("signed in!");
        })
        .catch((err) => {
          console.log(err);
        });
    },
    _addDarkTheme() {
      let darkThemeLinkEl = document.createElement("link");
      darkThemeLinkEl.setAttribute("rel", "stylesheet");
      darkThemeLinkEl.setAttribute("href", "/styles.css");
      darkThemeLinkEl.setAttribute("id", "dark-theme-style");

      let docHead = document.querySelector("head");
      docHead.append(darkThemeLinkEl);
    },
    _removeDarkTheme() {
      let darkThemeLinkEl = document.querySelector("#dark-theme-style");
      let parentNode = darkThemeLinkEl.parentNode;
      parentNode.removeChild(darkThemeLinkEl);
    },
    darkThemeSwitch() {
      let darkThemeLinkEl = document.querySelector("#dark-theme-style");
      if (!darkThemeLinkEl) {
        this._addDarkTheme();
      } else {
        this._removeDarkTheme();
      }
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

.container {
  font-family: "Poppins", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  display: flex;
  flex-direction: column;
  height: 700px;
  justify-content: center;
  align-items: center;
  align-content: center;
}
h1 {
  color: #f59800;
  font-weight: 900;
}
button {
  color: #f59800;
}
img {
  width: 80%;
}

button {
  background-color: #f59800;
  color: black !important;
  font-weight: 600;
}

button:hover {
  background-color: black;
  color: #f59800 !important;
}

.item {
  align-self: center;
}
</style>
