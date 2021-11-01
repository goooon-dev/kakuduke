<template>
  <div id="app">
    <Kekkahappyo />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Kekkahappyo from "./components/pages/Kekkahappyo.vue";

@Component({
  components: {
    Kekkahappyo,
  },
})
export default class App extends Vue {}
</script>
