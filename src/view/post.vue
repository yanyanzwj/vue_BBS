<template>
  <div>
    <div class="header">
      <span>发表</span>
      <p>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-FishFood"></use>
        </svg>
      </p>
    </div>
    <div class="bodyer">
      <form>
        <input type="text" class="title" placeholder="标题...">
        <select id="tab">
          <option value="">请选择</option>
          <option value="ask">问答</option>
          <option value="share">分享</option>
          <option value="job">招聘</option>
        </select>
        <textarea type="text" class="content" placeholder="内容..."></textarea>
     </form>
    </div>
    <bbsfooter></bbsfooter>
  </div>
</template>

<script>
  import axios from 'axios';
  import bbsfooter from '../components/footer.vue';
  export default{
    components:{ bbsfooter },
    data(){
      return {
      }
    },
    methods: {

      }
    }
</script>

<style lang="less" rel="stylesheet/less" scoped> //scoped指下面的css只用于这个页面
div.header {
  width: 10rem;
  height: 1.4rem;
  position: fixed;
  border-bottom: 1px solid gray;
  top: 0;
  left: 0;
  span {
    float: left;
    height: 1.4rem;
    margin-top: 0.3rem;
    margin-left: 4rem;
    font-size: 40px;
  }
  p {
    float: left;
    font-size: 45px;
    margin-left: 3.5rem;
    margin-top: 0.4rem;
    svg.icon {
      width: 1em;
      height: 1em;
      fill: currentColor;
    }
  }
}
div.bodyer {
  margin-top: 1.5rem;
  width: 10rem;
  form{
  input.title{
    width: 10rem;
    height:80px;
    vertical-align: middle;
    border-style: none;
    border-bottom: 1px solid gray;
  }
  select{
    width: 10rem;
    height:70px;
    font-size: 30px;
    vertical-align: middle;
    border-style: none;
    border-bottom: 1px solid gray;

  }
  textarea.content{
    width: 10rem;
    height: 12rem;
    margin-top: 0.3rem;
    border-style: none;
  }
}
}
</style>
