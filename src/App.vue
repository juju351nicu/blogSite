<template>
  <!-- <PatchMeta /> -->
  <v-app>
    <BrogHeader />
    <v-spacer></v-spacer>
    <v-main style="background-color: #f5f6f6">
      <RouterView />
    </v-main>
    <BrogFooter />
  </v-app>
</template>

<script setup lang="ts">
// import PatchMeta from "./components/PatchMeta.vue";
import BrogHeader from "@/components/BrogHeader.vue";
import BrogFooter from "@/components/BrogFooter.vue";
import "github-markdown-css/github-markdown.css";
import { onBeforeMount } from "vue";

onBeforeMount(() => {
  console.log("App: Component about to be mounted.");
});
</script>
