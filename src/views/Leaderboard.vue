<template>
  <navbar />
  <div class="container">
    <div class="row">
      <div class="m-5 loading" v-if="isLoading">
        <div class="mx-auto" style="width: 50%; text-align: center">
          <img
            src="../../public/minion.gif"
            alt="Loading..."
            width="100"
            height="100"
          />
          <p>Loading...</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
import Navbar from "../components/Navbar.vue";

export default {
  components: {
    Navbar,
  },
  data() {
    return {
      isLoading: true,
    };
  },
  created() {
    firebase
      .auth()
      .signOut()
      .then(() => {
        window.location.href = "https://quaruntime.web.app";
        console.log("Signed Out");
      })
      .catch((err) => alert(err.message));
  },
};
</script>

<style></style>
