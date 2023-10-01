import { Post } from "@/types/post";
import { Action, Module, Mutation, VuexModule } from "vuex-module-decorators";

@Module({ namespaced: true, name: 'post' })
export default class PostModule extends VuexModule {
  public posts: Post[] = [];

  @Mutation
  private SET_POSTS(posts: Post[]) {
    this.posts = posts;
  }

  @Action
  public async fetchPosts() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts: Post[] = await response.json();
    this.SET_POSTS(posts);
  }

  get allPosts() {
    return this.posts;
  }
}