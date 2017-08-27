<template>
  <div>
    <div class="header">

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
    top: 0;
    left: 0;
  }
  div.bodyer{
    margin-top: 1.5rem;
  }
</style>
