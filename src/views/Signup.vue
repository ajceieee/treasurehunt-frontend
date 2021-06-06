<template>
  <div class="signup container">
    <div class="item m-3">
      <img src="../../public/QuaRunTime.png" alt="icon" />
    </div>
    <div class="item m-3">
      <img src="../../public/TREASUREHUNT.png" alt="icon" />
    </div>
    <div class="item minion m-3">
      <img src="../../public/Minion.png" alt="icon" />
    </div>
    <div class="item">
      <button class="btn mt-3" @click="googleSignIn">
        Sign In With Google
      </button>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
import axios from "axios";

export default {
  data() {
    return {
      uId: null,
    };
  },
  methods: {
    async googleSignIn() {
      const provider = new firebase.auth.GoogleAuthProvider();
      await firebase
        .auth()
        .signInWithPopup(provider)
        .then((res) => {
          console.log(res.user.uid);
          this.uId = res.user.uid;
          this.checkUser();
          console.log("signed in!");
        })
        .catch((err) => {
          console.log(err);
        });
    },
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
          console.log(res.data);
          if (res.data.result != null) {
            console.log(res.data);
            console.log("user unteee");
            this.$router.push("/game");
          } else {
            this.$router.push("/");
          }
        })
        .catch(function (error) {
          console.log(error);
        });
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
  height: 600px;
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

.minion {
  width: 40% !important;
}

@media (min-width: 840px) {
  img {
    width: 50%;
  }
}
</style>
