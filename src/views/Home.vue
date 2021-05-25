<template>
  <navbar />
  <div class="container home py-3">
    <!-- <h1>Welcome, {{ name }}</h1> -->
    <!-- {{ name }} -->
    <!-- <img :src="name.photoURL" alt="profile" /> -->
    <!-- <button class="logout btn btn-danger" @click="Logout">Logout</button> -->
    <div class="card mx-auto" style="width: 20rem">
      <img class="card-img-top" :src="name.photoURL" alt="profile" />
      <h5 class="card-title mx-auto">Level #</h5>
      <div class="card-body">This is some text within a card body.</div>
    </div>

    <!-- <form class="form-inline">
      <div class="form-group mx-sm-3 mb-2">
        <input
          type="password"
          class="form-control"
          id="inputPassword2"
          placeholder="Password"
        />
      </div>
      <button type="submit" class="btn btn-primary mb-2">
        Confirm identity
      </button>
    </form> -->
    <form class="p-2">
      <div class="row">
        <div class="col">
          <input type="text" class="form-control" placeholder="Enter answer" />
        </div>
        <div class="col">
          <input type="button" class="btn btn-primary" value="Verify" />
        </div>
      </div>
    </form>
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
        name.value = user;
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
