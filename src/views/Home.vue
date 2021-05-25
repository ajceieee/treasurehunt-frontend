<template>
  <navbar />
  <div class="home">
    <!-- <h1>Welcome, {{ name }}</h1> -->
    <!-- {{ name }} -->
    <!-- <img :src="name.photoURL" alt="profile" /> -->
    <!-- <button class="logout btn btn-danger" @click="Logout">Logout</button> -->
  </div>
</template>

<script>
import { ref, onBeforeMount } from "vue";
import { useRoute, useRouter } from "vue-router";
import firebase from "firebase";
import Navbar from "../components/Navbar.vue";

export default {
  components: {
    Navbar,
  },
  setup() {
    const name = ref("");
    const router = useRouter();
    const route = useRoute();

    onBeforeMount(() => {
      const user = firebase.auth().currentUser;
      if (user) {
        name.value = user.email;
      } else if (route.path == "/") {
        router.replace("/signup");
      }
    });

    const Logout = () => {
      firebase
        .auth()
        .signOut()
        .then(console.log("Signed Out"))
        .catch((err) => alert(err.message));
    };
    return {
      name,
      Logout,
    };
  },
};
</script>
