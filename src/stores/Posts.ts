import { PostIndex } from "@/types/PostIndex";
import axios from "axios";
import { defineStore } from "pinia";
/**
 *
 */
interface PostsState {
  pageStatus: Object;
  isLoading: boolean;
}
/**
 *
 */
export const usePostsStore = defineStore({
  id: "Posts",
  state: (): PostsState => {
    return {
      pageStatus: [],
      isLoading: true,
    };
  },
  getters: {
    getPostStatus: (state): any => {
      return state.pageStatus;
    },
  },
  actions: {
    /**
     *
     */
    async recievePostIndex() {
      const response = await axios.get<PostIndex[]>(
        "blog_store/posts_index.json"
      );
      const postsIndex = response.data;
      console.log(postsIndex.length);
      this.pageStatus = postsIndex.slice(1, 5);
    },
  },
  // SessionStorageに保存する場合
  persist: {
    storage: sessionStorage,
    // paths: ["counter","doubleCount"],
  },
});
