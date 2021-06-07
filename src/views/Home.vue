<template>
  <navbar />
  <div class="container">
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
    <div class="row" v-else>
      <div class="col-12 col-md-6">
        <h4 class="mt-3"><b>Details</b></h4>
        <form class="mt-3" @submit.prevent="startGame">
          <div class="form-group mt-4">
            <label for="exampleInputFullName">Full Name</label>
            <input
              type="fullName"
              class="form-control"
              id="exampleInputFullName"
              placeholder="Full Name"
              :value="displayName"
              required
              :v-model="displayName"
              @input="displayName = $event.target.value"
              :disabled="getFullName"
            />
            {{ fullName }}
          </div>
          <div class="form-group mt-4">
            <label for="exampleInputEmail">Email Address</label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail"
              disabled
              :value="email"
              :v-model="email"
            />
          </div>
          <button
            type="submit"
            :disabled="btnDisabled"
            class="btn btn-success mt-4"
          >
            <span
              v-if="spinning"
              class="spinner-border spinner-border-sm"
              role="status"
              aria-hidden="true"
            ></span>

            <span v-if="spinning" class="sr-only">&nbsp; Loading...</span>
            <span v-else class="sr-only">Submit & Start game</span>
          </button>
        </form>
      </div>
      <div class="col-12 col-md-6">
        <h4 class="mt-3"><b>Rules</b></h4>
        <div class="card p-5">
          <p>
            1. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Accusamus minima soluta temporibus? Iste culpa minus iure corporis
            quibusdam. Mollitia suscipit nesciunt error rerum, quidem
            accusantium iure fugiat voluptates earum dolorum! <br /><br />
          </p>
          <p>
            2. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Accusamus minima soluta temporibus? Iste culpa minus iure corporis
            quibusdam. Mollitia suscipit nesciunt error rerum, quidem
            accusantium iure fugiat voluptates earum dolorum! <br /><br />
          </p>
          <p>
            3. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Accusamus minima soluta temporibus? Iste culpa minus iure corporis
            quibusdam. Mollitia suscipit nesciunt error rerum, quidem
            accusantium iure fugiat voluptates earum dolorum! <br /><br />
          </p>
          <p>
            4. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Accusamus minima soluta temporibus? Iste culpa minus iure corporis
            quibusdam. Mollitia suscipit nesciunt error rerum, quidem
            accusantium iure fugiat voluptates earum dolorum!
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
import axios from "axios";
import Navbar from "../components/Navbar.vue";

export default {
  components: {
    Navbar,
  },
  data() {
    return {
      uId: null,
      user: null,
      fullName: null,
      email: null,
      details: null,
      displayName: null,
      getFullName: false,
      btnDisabled: false,
      isLoading: true,
      spinning: false,
    };
  },
  created() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.user = user;
        this.uId = user.uid;
        this.displayName = user.displayName;
        this.email = user.email;
        this.checkUser();
      } else {
        this.user = null;
      }
    });
  },
  methods: {
    async checkUser() {
      const token = await firebase.auth().currentUser.getIdToken();
      let config = {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "Application/json",
        },
      };

      await axios

        .get(
          `https://mighty-island-44038.herokuapp.com/users/${this.uId}`,
          config
        )
        .then((res) => {
          if (res.data.result != null) {
            this.$router.push("/game");
          } else {
            this.isLoading = false;
            this.$router.push("/");
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    async startGame() {
      this.spinning = true;
      const userData = {
        uId: this.uId,
        fullName: this.displayName,
        email: this.email,
      };
      console.log(userData);
      const token = await firebase.auth().currentUser.getIdToken();
      let config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      await axios
        .post(
          "https://mighty-island-44038.herokuapp.com/users",
          userData,
          config
        )
        .then((res) => {
          if (res.data.result == null) {
            alert("User already exist");
            this.$router.push("/game");
          } else {
            alert("Successfully Registered!");
            this.$router.push("/game");
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
};
</script>
