<template>
  <div class="signup py-5">
    <h1>Amal Jyothi College of Engineering IEEE SB Treasure Hunt</h1>
    <button class="btn btn-primary" @click="googleSignIn">
      Sign In With Google
    </button>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
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
  },
};
</script>

<style scoped>
.signup {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
