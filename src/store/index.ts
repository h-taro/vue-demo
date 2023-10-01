import Vue from 'vue'
import Vuex from 'vuex'
import PostModule from './modules/PostModule'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    post: PostModule
  }
})