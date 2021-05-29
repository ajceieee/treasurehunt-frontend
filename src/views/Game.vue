<template>
  <navbar />
  <div class="container">
    <div class="row">
      <div class="col col-lg-6 mx-auto m-5">
        <div class="card">
          <h3>
            <b><i>#1</i></b>
          </h3>
          <img
            class="mx-auto"
            src="https://ieeeajce.org/assets/images/avatar/2020/Socities/computer-Society/2.jpg"
            width="60%"
            alt="#1"
          />
          <div class="card-body">
            <p class="card-text">
              Some quick example ard title and make up the bulk of the card's
              content.
            </p>
            <form class="form-inline">
              <div class="form-group mb-2">
                <label for="inputPassword2" class="sr-only">Answer</label>
                <input
                  type="text"
                  class="form-control"
                  id="inputText2"
                  placeholder="Enter your Answer"
                />
              </div>
              <button type="submit" class="btn btn-primary mb-2">
                Verify Answer
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
export default {
  components: {
    Navbar,
  },
};
</script>

<style></style>
