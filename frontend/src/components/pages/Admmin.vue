<template>
  <div class="addmin">
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Cell from "../atoms/Cell.vue";

@Component({
  components: {
    Cell,
  },
})
export default class Addmin extends Vue {
  komiyaPosition = 1;
  hirasawaPosition = 2;
  kurodaPosition = 1;
  kasePosition = 1;

}
</script>

<style scoped>
  .result {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background: linear-gradient(45deg, #B67B03 0%, #DAAF08 45%, #FEE9A0 70%, #DAAF08 85%, #B67B03 90% 100%);
  }
  .result-table {
    width: 98%;
    height: 98%;
    border-image-slice: 100 100 100 100;
    border-image-width: 50px 50px 50px 50px;
    border-image-outset: 0px 0px 0px 0px;
    border-image-repeat: stretch stretch;
    border-image-source: url("https://www.photolibrary.jp/mhd1/img777/450-20200615171824303107.jpg");
    border-style: solid;
    padding: 50px;
  }
  .rank1 {
    font-family: "游明朝体";
    line-height:1.1em;
	  font-weight: bold;
    background: linear-gradient(45deg, #B67B03 0%, #DAAF08 45%, #FEE9A0 70%, #DAAF08 85%, #B67B03 90% 100%);
  }
  .rank2 {
    line-height: 1.1em;
	  font-weight: bold;
    background: linear-gradient(45deg, #757575 0%, #9E9E9E 45%, #E8E8E8 70%, #9E9E9E 85%, #757575 90% 100%);
  }
  .rank3 {
    line-height: 1.1em;
	  font-weight: bold;
    background: white;
  }
  .rank4 {
    line-height: 1.1em;
	  font-weight: bold;
    background: #00FF00;
  }
  .rank5 {
    color: white;
    line-height: 1.1em;
    font-family: "Hannotate SC";
    background: #CC33FF;
  }
  .rank6 {
    color: white;
    line-height: 1.1em;
    font-family: "Hannotate SC";
    background: black;
  }
  .user {
    color: white;
    background: #CC3300;
  }
</style>
