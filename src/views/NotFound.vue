<template>
  <v-container>
    <h1>404: Not Found</h1>
    <p>ページが見つかりません。</p>
    <v-btn @click="goHome()"> &laquo; Back </v-btn>
  </v-container>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
const router = useRouter();
/**
 * ブログ記事一覧ページに戻る
 */
const goHome = () => {
  router.push({ name: "PostList" });
};
</script>
