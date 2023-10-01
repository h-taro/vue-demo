<template>
  <div class="container">
    <button class="load-data-btn" @click="loadData">Load Data</button>
    <ul v-if="allPosts && allPosts.length">
      <li v-for="post in allPosts" :key="post.id" class="post-item">
        <h3 class="post-title">{{ post.title }}</h3>
        <p class="post-body">{{ post.body }}</p>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import store from '@/store';
import PostModule from '@/store/modules/PostModule';
import { Component, Vue } from 'vue-property-decorator';
import { getModule } from 'vuex-module-decorators';

@Component
export default class MyComponent extends Vue {
  private postModule = getModule(PostModule, store)

  get allPosts() {
    return this.postModule.allPosts;
  }

  mounted() {
    if (!this.allPosts.length) {
      this.loadData();
    }
  }

  loadData() {
    this.postModule.fetchPosts();
  }
}
</script>

<style scoped>
.container {
  max-width: 800px;
  margin: 40px auto;
  padding: 0 20px;
  font-family: 'Arial', sans-serif;
}

.load-data-btn {
  display: block;
  margin: 20px 0;
  padding: 10px 20px;
  background-color: #3498db;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.load-data-btn:hover {
  background-color: #2980b9;
}

ul {
  list-style-type: none;
  padding: 0;
}

.post-item {
  border-bottom: 1px solid #eaeaea;
  padding: 20px 0;
  margin: 20px 0;
}

.post-title {
  margin: 0 0 10px;
  font-size: 20px;
  color: #333;
}

.post-body {
  margin: 0;
  color: #777;
}
</style>