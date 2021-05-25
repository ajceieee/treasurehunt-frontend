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
