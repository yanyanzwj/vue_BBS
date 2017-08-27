<template>
    <div class="footer">
      <ul>
        <li @click="gohome" :class="{active:$route.name === 'index'}">
          <p class="p1">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-PalmTree"></use>
            </svg>
          </p>
          <p class="p2">首页</p>
        </li>
        <li @click="gopost" :class="{active:$route.name === 'post'}">
          <p class="p1">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-FishFood"></use>
            </svg>
          </p>
          <p class="p2">发表</p>
        </li>
        <li @click="gomessage" :class="{active:$route.name === 'message'}">
          <p class="p1">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-SnareDrum"></use>
            </svg>
          </p>
          <p class="p2">消息</p>
        </li>
        <li @click="gouser" :class="{active:$route.name === 'user'}">
          <p class="p1">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-StatueOfChristTheRedeemer"></use>
            </svg>
          </p>
          <p class="p2">我的</p>
        </li>
      </ul>
    </div>
</template>
<script>
  export default{
    data(){
      return {

      }},
    methods:{
      gohome:function () {
        this.$router.push({name:'index'})
      },
      gopost:function () {
        this.$router.push({name:'post'})
      },
      gomessage:function () {
        this.$router.push({name:'message'})
      },
      gouser:function () {
        this.$router.push({name:'user'})
      }
    }
  }
</script>

<style lang="less" rel="stylesheet/less" scoped>
  div.footer{
    position: fixed;
    bottom: 0;
    left: 0;
    width: 10rem;
    height: 1.5rem;
    background: white;
    border-top:1px solid gray;
  ul{
    width:10rem;
  li{
    width: 2.5rem;
    height: 1.5rem;
    float: left;
    text-align: center;
    color:gray;
    p.p1 svg.icon {
      width: 1em;
      height: 1em;
      margin-top: 0.2rem;
      fill: currentColor;
      overflow: hidden;
    }
  } }
  }
  div.footer ul li.active{
    color:tomato;
  }
  div.footer ul li p.p1 svg.icon{
    font-size: 26px;
  }
  [data-dpr="2"] div.footer ul li p.p1 svg.icon{
    font-size: 42px;
  }
  [data-dpr="3"] div.footer ul li p.p1 svg.icon{
    font-size: 24px;
  }
</style>
