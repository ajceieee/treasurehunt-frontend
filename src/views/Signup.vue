<template>
  <div class="signup">
    <!-- Email: <input type="email" v-model="email" /> <br />
    Password:
    <input type="password" v-model="password" /> -->
    <button class="btn btn-primary" @click="googleSignIn">
      Sign In With Google
    </button>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  data() {
    return {
      email: "",
      password: "",
    };
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
  },
};
</script>

<style></style>
