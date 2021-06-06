<template>
  <navbar />
  <div class="container">
    <!-- <div class="m-5 loading" v-if="isLoading">
      <div class="mx-auto" style="width: 50%; text-align: center">
        <img
          src="../../public/minion.gif"
          alt="Loading..."
          width="100"
          height="100"
        />
        <p>Loading...</p>
      </div>
    </div> -->
    <div class="row">
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
          <!-- <div hidden class="form-group mt-4">
            <label for="exampleInputUcode">Virtual Code</label>
            <input
              type="uCode"
              class="form-control"
              id="exampleInputUcode"
              placeholder="Enter Virtual Code"
              required
              :value="uCode"
              :v-model="uCode"
              @input="uCode = $event.target.value"
              :disabled="getUid"
            />
          </div> -->

          <button
            type="submit"
            :disabled="btnDisabled"
            class="btn btn-success mt-4"
          >
            Submit & Start game
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
      // isLoading: true,
      // uCode: null,
      // getUid: false,
      // uCode: null,
      // displayName: null,
    };
  },
  created() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.user = user;
        this.uId = user.uid;
        this.displayName = user.displayName;
        this.email = user.email;
        console.log(this.uId);
        // this.checkUser();
      } else {
        this.user = null;
      }
    });
  },
  methods: {
    async startGame() {
      const userData = {
        uId: this.uId,
        fullName: this.displayName,
        email: this.email,
      };
      console.log(userData);
      // console.log(userData);
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
          console.log(res.data);
          alert("Successfully Registered!");
          this.$router.push("/game");
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    // async checkUser() {
    //   const token = await firebase.auth().currentUser.getIdToken();
    //   let config = {
    //     headers: {
    //       Authorization: `Bearer ${token}`,
    //     },
    //   };

    //   await axios

    //     .get(
    //       `https://mighty-island-44038.herokuapp.com/users/${this.uId}`,
    //       config
    //     )
    //     .then((res) => {
    //       console.log(res.data.result);
    //       // if (res.data.result != null) {
    //       console.log(res.data);
    //       console.log("null alla");
    //       // this.uCode = res.data.result.uCode;
    //       this.displayName = res.data.result.fullName;
    //       // this.getUid = true;
    //       this.getFullName = true;
    //       this.btnDisabled = true;
    //       this.$router.push("/game");
    //       // this.isLoading = false;
    //       // }
    //       // this.isLoading = false;
    //     })
    //     .catch(function (error) {
    //       console.log(error);
    //     });
    // },
  },
};
</script>
