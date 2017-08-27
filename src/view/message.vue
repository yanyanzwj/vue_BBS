<template>
  <div>
    <div class="header">
      <p>消息</p>
      <p></p>
    </div>
    <div class="bodyer">

    </div>
    <bbsfooter></bbsfooter>
    <div class="loading" v-if="show_loading">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  import bbsfooter from '../components/footer.vue';
  export default{
    components:{ bbsfooter },
    data(){
      return {
        show_loading:false,
      }},
    methods:{

      }
  }
</script>

<style lang="less" rel="stylesheet/less" scoped>
  div.header{
    width:10rem;
    height: 1.4rem;
    position: fixed;
    border-bottom: 1px solid gray;
    top: 0;
    left: 0;
    p{
      float: left;
      height: 1.4rem;
      margin-top: 0.3rem;
      margin-left: 4.5rem;
      font-size: 40px;
    }
  }
  div.bodyer{
    margin-top: 1.5rem;
  }
</style>
