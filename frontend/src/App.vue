<template>
  <div id="app">
    <Kekkahappyo v-if="isExistData" />
    <Admmin v-if="!isExistData" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Kekkahappyo from "./components/pages/Kekkahappyo.vue";
import Admmin from "./components/pages/Admmin.vue"

@Component({
  components: {
    Kekkahappyo,
    Admmin,
  },
})
export default class App extends Vue {
  isExistData = false
  created() {
    // 何か処理
  }
}
</script>
