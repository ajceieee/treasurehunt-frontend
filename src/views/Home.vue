<template>
  <navbar />
  <div class="container">
    <div class="row">
      <div class="col-12 col-md-6">
        <h4 class="mt-3"><b>Details</b></h4>
        <form class="mt-3">
          <div class="form-group mt-4">
            <label for="exampleInputFullName">Full Name</label>
            <input
              type="fullName"
              class="form-control"
              id="exampleInputFullName"
              placeholder="Full Name"
              :value="details.displayName"
              required
            />
          </div>
          <div class="form-group mt-4">
            <label for="exampleInputEmail">Email Address</label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail"
              readonly
              :value="details.email"
            />
          </div>
          <div class="form-group mt-4">
            <label for="exampleInputUcode">Virtual Code</label>
            <input
              type="uCode"
              class="form-control"
              id="exampleInputUcode"
              placeholder="Enter Virtual Code"
              required
            />
          </div>

          <button type="submit" @click="startGame" class="btn btn-success mt-4">
            Submit & Start game
          </button>
        </form>
      </div>
      <div class="col-12 col-md-6">
        <h4 class="mt-3"><b>Rules</b></h4>
        <div class="card">
          1. Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
          minima soluta temporibus? Iste culpa minus iure corporis quibusdam.
          Mollitia suscipit nesciunt error rerum, quidem accusantium iure fugiat
          voluptates earum dolorum! <br /><br />
          2. Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
          minima soluta temporibus? Iste culpa minus iure corporis quibusdam.
          Mollitia suscipit nesciunt error rerum, quidem accusantium iure fugiat
          voluptates earum dolorum! <br /><br />
          3. Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
          minima soluta temporibus? Iste culpa minus iure corporis quibusdam.
          Mollitia suscipit nesciunt error rerum, quidem accusantium iure fugiat
          voluptates earum dolorum! <br /><br />
          4. Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
          minima soluta temporibus? Iste culpa minus iure corporis quibusdam.
          Mollitia suscipit nesciunt error rerum, quidem accusantium iure fugiat
          voluptates earum dolorum!
        </div>
      </div>
    </div>
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
    const details = ref("");
    const router = useRouter();
    const route = useRoute();

    onBeforeMount(() => {
      const user = firebase.auth().currentUser;
      if (user) {
        details.value = user;
      } else if (route.path == "/") {
        router.replace("/signup");
      }
    });

    const startGame = () => {
      router.replace("/game");
    };
    return {
      details,
      startGame,
    };
  },
};
</script>
