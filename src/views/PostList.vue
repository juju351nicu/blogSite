<template>
  <!-- <PatchMeta :title="section ? section : 'Minimal Vue3 + Markdown blog engine'" /> -->
  <BlogPagingList
    v-if="!isLoading"
    :pageStatus="pageStatus"
    :pageCounts="pageCounts"
    :currentPage="currentPage"
    @doPostDetail="doPostDetail"
    @toNumberPage="searchPaging"
  />
  <Loading v-if="isLoading" />
</template>

<script setup lang="ts">
import { Ref, onBeforeMount, ref } from "vue";
import Loading from "@/components/Loading.vue";
import BlogPagingList from "@/components/BlogPagingList.vue";
import { PostIndex } from "@/types/PostIndex";
import axios from "axios";
import { useRouter } from "vue-router";
import { usePostsStore } from "../stores/Posts";
const router = useRouter();

/** 最初のページ */
const currentPage: Ref<number> = ref(1);
/**
 * 記事の詳細ページに遷移する
 * @param section
 * @param id
 */
const doPostDetail = (section: string, id: string): void => {
  router.push({ name: "Post", params: { section: section, id: id } });
};

const postsStore = usePostsStore();
/** 記事の一覧情報 */
const pageStatus = ref();
/** 記事の取得件数 */
const pageCounts: Ref<number> = ref(0);
/** データ取得中フラグ */
const isLoading = ref(false);
/** ページ遷移 */
const searchPaging = async (pageNumber: number) => {
  currentPage.value = pageNumber;
  isLoading.value = true;
  const response = await axios.get<PostIndex[]>("blog_store/posts_index.json");
  const postsIndex = response.data;
  pageStatus.value = postsIndex.slice(pageNumber, pageNumber + 5);
  isLoading.value = false;
  console.log(pageNumber);
};
/** 記事の一覧情報をセットする。 */
onBeforeMount(async () => {
  isLoading.value = true;
  postsStore.recievePostIndex();
  const response = await axios.get<PostIndex[]>("blog_store/posts_index.json");
  const postsIndex = response.data;
  pageStatus.value = postsIndex.slice(1, 5);
  isLoading.value = false;
  console.log("PostList: Component about to be mounted.");
  pageCounts.value = postsIndex.length;
});
</script>
