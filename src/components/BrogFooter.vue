<template>
  <v-footer class="d-flex align-center justify-center">
    <router-link :to="'/'" class="text-reset">
      <p class="m-0 p-0">{{ copyRight.title }}</p>
    </router-link>
    <br />
    <p class="m-0 p-0">
      Created with ❤️ by
      <a href="https://github.com/yeikiu/" target="_blank" class="text-reset">JQ</a> ©
      {{ copyRight.date }}
    </p>
  </v-footer>
</template>

<script setup lang="ts">
import { reactive } from "vue";

const copyRight = reactive({
  title: "Quita風ブログサイト v1.0.0",
  icon: "©",
  date: new Date().toDateString().slice(-4),
});
</script>
