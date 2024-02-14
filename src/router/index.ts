import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import PostList from "@/views/PostList.vue";
import Post from "@/views/Post.vue";
import NotFound from "@/views/NotFound.vue";

const routeSettings: RouteRecordRaw[] = [
  {
    /** ブログ記事一覧 */
    // path: "/:section?",
    path: "/",
    name: "PostList",
    component: PostList,
    props: true,
  },
  {
    /** ブログ詳細情報 */
    path: "/:section/:id",
    name: "Post",
    component: Post,
    props: true,
  },
  {
    /** 存在しないURLにアクセスした場合 */
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: NotFound,
  },
];

const router = createRouter({
  //  history: createWebHistory(),
	history: createWebHistory(import.meta.env.BASE_URL),
  routes: routeSettings,
});

export default router;
