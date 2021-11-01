<template>
  <div class="result">
    <table border="1" class="result-table">
      <tr>
        <td class="rank1 box text">
          一流<br>会社員
        </td>
        <td class="rank2 box text">
          普通<br>会社員
        </td>
        <td class="rank3 box text">
          二流<br>会社員
        </td>
        <td class="rank4 box text">
          三流<br>会社員
        </td>
        <td class="rank5 box text">
          アルバイト
        </td>
        <td class="rank6 box text">
          フリーター
        </td>
      </tr>
      <tr>
        <td class="user box text">
          小宮
        </td>
        <td class="box text">
          
        </td>
        <td class="box text">
          
        </td>
        <td class="box text">
          
        </td>
        <td class="box text">
          
        </td>
        <td class="box text">
          
        </td>
      </tr>
      <tr>
        <td class="user box text">
          平澤
        </td>
        <td class="box text">
          
        </td>
        <td class="box text">
          
        </td>
        <td class="box text">
          
        </td>
        <td class="box text">
          
        </td>
        <td class="box text">
          
        </td>
      </tr>
      <tr>
        <td class="user box text">
          黒田
        </td>
        <td class="box text">
          
        </td>
        <td class="box text">
          
        </td>
        <td class="box text">
          
        </td>
        <td class="box text">
          
        </td>
        <td class="box text">
          
        </td>
      </tr>
      <tr>
        <td class="user box text">
          加瀬
        </td>
        <td class="box text">
          
        </td>
        <td class="box text">
          
        </td>
        <td class="box text">
          
        </td>
        <td class="box text">
          
        </td>
        <td class="box text">
          
        </td>
      </tr>
    </table>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class HelloWorld extends Vue {

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
    border-image-source:url("https://www.photolibrary.jp/mhd1/img777/450-20200615171824303107.jpg");
    border-style:solid;
    padding: 50px;
  }
  .text {
    font-size: 3rem;
  }
  .box {
    text-align: center;
    width: 16%;
    height: 20%;
  }
  .rank1 {
    font-family: "游明朝体";
    line-height:1.1em;
	  font-weight:bold;
    background: linear-gradient(45deg, #B67B03 0%, #DAAF08 45%, #FEE9A0 70%, #DAAF08 85%, #B67B03 90% 100%);
  }
  .rank2 {
    line-height:1.1em;
	  font-weight:bold;
    background: linear-gradient(45deg, #757575 0%, #9E9E9E 45%, #E8E8E8 70%, #9E9E9E 85%, #757575 90% 100%);
  }
  .rank3 {
    line-height:1.1em;
	  font-weight:bold;
    background: #0099FF;
  }
  .rank4 {
    line-height:1.1em;
	  font-weight:bold;
    background: white;
  }
  .rank5 {
    line-height:1.1em;
	  font-weight:bold;
    background: #00FF00;
  }
  .rank6 {
    color: white;
    line-height:1.1em;
    font-family: "Hannotate SC";
    background: black;
  }
  .user {
    color: white;
    background: #FF0033;
  }
</style>
