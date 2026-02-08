<template>
  <!-- <PatchMeta :title="title" /> -->
  <v-container style="background-color: white">
    <span class="markdown-body" :style="`background-color: 'blue' ; color: 'white';`" v-html="postHtml" />
    <v-btn @click="goHome()"> &laquo; Back </v-btn>
  </v-container>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { onBeforeRouteUpdate, useRouter } from "vue-router";
import axios from "axios";
import MarkdownIt from "markdown-it";
import { onBeforeMount } from "vue";
import Fetcher from "@/utils/rest";
const router = useRouter();
/** Propsインタフェース定義 */
interface Props {
  section: string;
  id: string;
}
/** Propsインタフェース定義 */
const props = defineProps<Props>();

/* Hacky navigation when a href link is clicked within the compiled html Post */
onBeforeRouteUpdate(async () => {
  location.reload();
});
/**
 * ブログ記事一覧ページに戻る
 */
const goHome = () => {
  router.push({ name: "PostList" });
};
/** Htmlに表示するマークダウン情報 */
const postHtml = ref();
const markDownIt = new MarkdownIt({ html: true });
/** Htmlに表示するマークダウン情報をセットする。 */
onBeforeMount(async () => {
  // const response = await axios.get(
  //   "/blog_store/posts/" + props.section + "/" + props.id + ".md"
  // );
  // const markDownSource = response.data;
  // postHtml.value = markDownIt.render(markDownSource);
  await Fetcher.getRequest("/blog_store/posts/" + props.section + "/" + props.id + ".md")
    .then(response => {
      return response.text();
    })
    .then(body => {
      postHtml.value = markDownIt.render(body);
    });
});
</script>
