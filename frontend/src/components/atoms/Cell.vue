<template>
  <td class="box text">
    {{ text }}
  </td>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Cell extends Vue {
  @Prop({default: ''})
  text!: string
}
</script>

<style scoped>
  .text {
    font-size: 3rem;
  }
  .box {
    text-align: center;
    width: 16%;
    height: 16%;
  }
</style>
