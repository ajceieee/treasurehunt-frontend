<template>
  <router-view />
</template>

<script>
import { onBeforeMount } from "vue";
import { useRoute, useRouter } from "vue-router";
import firebase from "firebase";
export default {
  setup() {
    const router = useRouter();
    const route = useRoute();
    // Dark theam if needed
    // let darkThemeLinkEl = document.createElement("link");
    // darkThemeLinkEl.setAttribute("rel", "stylesheet");
    // darkThemeLinkEl.setAttribute("href", "/css/darktheme.css");
    // darkThemeLinkEl.setAttribute("id", "dark-theme-style");

    // let docHead = document.querySelector("head");
    // docHead.append(darkThemeLinkEl);

    onBeforeMount(() => {
      firebase.auth().onAuthStateChanged((user) => {
        if (!user) {
          router.replace("/signup");
        } else if (route.path == "/signup") {
          router.replace("/");
        }
      });
    });
  },
};
</script>

<style lang="scss"></style>
