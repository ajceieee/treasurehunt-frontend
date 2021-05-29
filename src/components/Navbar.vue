<template>
  <nav class="navbar navbar-light" style="background-color: #e3f2fd">
    <a class="navbar-brand px-3" href="#">Treasure Hunt</a>
    <!-- <button class="btn btn-danger mx-auto" @click="Logout">Logout</button> -->
    <a class="btn btn-danger px-3 mx-4" @click="Logout">Logout</a>
  </nav>
</template>

<script>
import firebase from "firebase";
export default {
  name: "navbar",
  setup() {
    const Logout = () => {
      firebase
        .auth()
        .signOut()
        .then(console.log("Signed Out"))
        .catch((err) => alert(err.message));
    };
    return {
      Logout,
    };
  },
};
</script>

<style></style>
