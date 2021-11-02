<template>
  <div class="result">
    <table border="1" class="result-table">
      <tr>
        <Cell class="rank1" text='社長' />
        <Cell class="rank2" text='部長' />
        <Cell class="rank3" text='平社員' />
        <Cell class="rank4" text='窓際社員' />
        <Cell class="rank5" text='ニート' />
        <Cell class="rank6" text='権藤家雑用' />
      </tr>
      <tr>
        <Cell :class="{'user': komiyaPosition === 1}" :text="komiyaPosition === 1 ? '小宮' : ''" />
        <Cell :class="{'user': komiyaPosition === 2}" :text="komiyaPosition === 2 ? '小宮' : ''" />
        <Cell :class="{'user': komiyaPosition === 3}" :text="komiyaPosition === 3 ? '小宮' : ''" />
        <Cell :class="{'user': komiyaPosition === 4}" :text="komiyaPosition === 4 ? '小宮' : ''" />
        <Cell :class="{'user': komiyaPosition === 5}" :text="komiyaPosition === 5 ? '小宮' : ''" />
        <Cell :class="{'user': komiyaPosition === 6}" :text="komiyaPosition === 6 ? '小宮' : ''" />
      </tr>
      <tr>
        <Cell :class="{'user': hirasawaPosition === 1}" :text="hirasawaPosition === 1 ? '平澤' : ''" />
        <Cell :class="{'user': hirasawaPosition === 2}" :text="hirasawaPosition === 2 ? '平澤' : ''" />
        <Cell :class="{'user': hirasawaPosition === 3}" :text="hirasawaPosition === 3 ? '平澤' : ''" />
        <Cell :class="{'user': hirasawaPosition === 4}" :text="hirasawaPosition === 4 ? '平澤' : ''" />
        <Cell :class="{'user': hirasawaPosition === 5}" :text="hirasawaPosition === 5 ? '平澤' : ''" />
        <Cell :class="{'user': hirasawaPosition === 6}" :text="hirasawaPosition === 6 ? '平澤' : ''" />
      </tr>
      <tr>
        <Cell :class="{'user': kurodaPosition === 1}" :text="kurodaPosition === 1 ? '黒田' : ''" />
        <Cell :class="{'user': kurodaPosition === 2}" :text="kurodaPosition === 2 ? '黒田' : ''" />
        <Cell :class="{'user': kurodaPosition === 3}" :text="kurodaPosition === 3 ? '黒田' : ''" />
        <Cell :class="{'user': kurodaPosition === 4}" :text="kurodaPosition === 4 ? '黒田' : ''" />
        <Cell :class="{'user': kurodaPosition === 5}" :text="kurodaPosition === 5 ? '黒田' : ''" />
        <Cell :class="{'user': kurodaPosition === 5}" :text="kurodaPosition === 6 ? '黒田' : ''" />
      </tr>
      <tr>
        <Cell :class="{'user': kasePosition === 1}" :text="kasePosition === 1 ? '加瀬' : ''" />
        <Cell :class="{'user': kasePosition === 2}" :text="kasePosition === 2 ? '加瀬' : ''" />
        <Cell :class="{'user': kasePosition === 3}" :text="kasePosition === 3 ? '加瀬' : ''" />
        <Cell :class="{'user': kasePosition === 4}" :text="kasePosition === 4 ? '加瀬' : ''" />
        <Cell :class="{'user': kasePosition === 5}" :text="kasePosition === 5 ? '加瀬' : ''" />
        <Cell :class="{'user': kasePosition === 5}" :text="kasePosition === 6 ? '加瀬' : ''" />
      </tr>
    </table>
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
export default class Kekkahappyo extends Vue {
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
