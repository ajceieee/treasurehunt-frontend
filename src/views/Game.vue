<template>
  <navbar />
  <div class="container">
    <div class="m-5" v-if="isLoading">
      <div class="mx-auto" style="width: 50%; text-align: center">
        Loading...
      </div>
    </div>
    <div class="row" v-else>
      <div class="col col-lg-6 mx-auto m-5">
        <div class="card">
          <h3>
            <b
              ><i>#{{ level }}</i></b
            >
          </h3>
          <img
            :src="image"
            class="mx-auto"
            style="width: 60%"
            :alt="`#${level}`"
          />
          <div class="card-body">
            <p class="card-text">
              {{ question }}
            </p>
            <form class="form-inline" @submit.prevent="verifyAnswer">
              <div class="form-group mb-2">
                <label for="validationServer01" class="sr-only">Answer</label>
                <input
                  type="text"
                  class="form-control"
                  :class="{
                    'is-valid': isAnswerCorrect == true,
                    'is-invalid': isAnswerCorrect == false,
                  }"
                  :readonly="isAnswerCorrect"
                  id="validationServer01"
                  placeholder="Enter your Answer"
                  required
                  v-model="answer"
                />
                <div
                  :class="{
                    'valid-feedback': isAnswerCorrect,
                    'invalid-feedback': !isAnswerCorrect,
                  }"
                >
                  {{ answerComment }}
                </div>
              </div>
              <button
                v-if="!isAnswerCorrect"
                type="submit"
                class="btn btn-primary mb-2"
              >
                Verify Answer
              </button>
              <button v-else @click="checkLevel" class="btn btn-success mb-2">
                Play Next Level
              </button>
            </form>
          </div>
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
      user: null,
      highestLevelPlayed: null,
      // question: null,
      level: null,
      question: null,
      image: null,
      answer: null,
      isLoading: true,
      qId: null,
      isAnswerCorrect: null,
      answerComment: null,
    };
  },
  created() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.uId = user.uid;
        this.checkLevel();
      } else {
        this.user = null;
      }
    });
  },
  methods: {
    async checkLevel() {
      this.answerComment = null;
      this.isAnswerCorrect = null;
      this.qId = null;
      this.answer = "";
      this.image = null;
      this.question = null;
      this.level = null;
      this.highestLevelPlayed = null;
      this.isLoading = true;
      const token = await firebase.auth().currentUser.getIdToken();
      let config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      await axios

        .get(
          `https://mighty-island-44038.herokuapp.com/questions/${this.uId}`,
          config
        )
        .then((res) => {
          console.log(res.data);
          // this.question = res.data.result;
          this.level = res.data.result.level;
          this.question = res.data.result.question;
          this.image = res.data.result.image;
          this.qId = res.data.result._id;
          this.isLoading = false;
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    async verifyAnswer() {
      const token = await firebase.auth().currentUser.getIdToken();
      let config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const answer = { answer: this.answer };

      await axios

        .post(
          `https://mighty-island-44038.herokuapp.com/answer/${this.qId}/${this.uId}`,
          answer,
          config
        )
        .then((res) => {
          console.log(res.data);
          this.answerComment = res.data.message;
          this.isAnswerCorrect = res.data.result.isAnswerCorrect;
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
};
</script>

<style></style>
