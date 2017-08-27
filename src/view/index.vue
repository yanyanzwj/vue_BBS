<template>
  <div>
    <div class="header">
      <ul>
        <li @click="all" class="before" :class="{ active: topic === 'all' }">全部</li>
        <li @click="good" class="before" :class="{ active: topic === 'good'  }">精华</li>
        <li @click="share" class="before" :class="{ active: topic === 'share'  }">分享</li>
        <li @click="ask" class="before" :class="{ active: topic === 'ask'  }">问答</li>
        <li @click="job" :class="{ active: topic === 'job'  }">招聘</li>
      </ul>
    </div>
    <div class="bodyer" v-if="bbsdata.length!==0">
      <ul>
        <li v-for="item in bbsdata">
          <span class="avatar_url" @click="loginname(item.author.loginname)"><img :src="item.author.avatar_url"></span>
          <span class="loginname" @click="loginname(item.author.loginname)">{{item.author.loginname}}</span>
          <span class="tab">【{{item.tab | tab_string}}】</span>
          <span class="top"  v-if="item.top === true">【置顶】</span>
          <span class="title" @click="title" :id="item.id">{{item.title}}</span>
          <span class="last_reply_at"><svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-Parrot"></use>
          </svg>{{item.last_reply_at | time_string}}</span>
          <span class="reply_count"><svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-FlipFlops"></use>
          </svg>{{item.reply_count}}</span>
        </li>
      </ul>
      <div class="page">
        <p><button type="button" @click="prev">上一页</button>{{page}}
        <button type="button" @click="next">下一页</button></p>
      </div>
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
  import {formatDate} from '../comment/lib';
  import {ALL_DATA} from '../comment/api';
  import bbsfooter from '../components/footer.vue';
  export default{
    components:{ bbsfooter },
    data(){
      return {
        show_loading: false,
        page:1,
        limit:5,
        topic: "all",
        bbsdata: []
      }
    },
    created(){
      this.initdata();
    },
    filters: {
      tab_string: function (value) {
        if (value === 'share') {
          return '分享';
        }
        ;
        if (value === 'ask') {
          return '问答';
        }
        ;
        if (value === 'job') {
          return '招聘';
        }
        ;
      },
      time_string: function (value) {
        return formatDate(value);
      }
    },
    methods: {
      initdata: function () {
        this.show_loading = true;
        const that = this;
        axios.get(ALL_DATA +'?page='+this.page+'&limit='+this.limit+'&tab=' + this.topic)
          .then(function (response) {
            that.bbsdata = response.data.data;
            that.show_loading = false
          })
          .catch(function (error) {
            console.log(error);
          });
      },
      title:function(e){
        this.$router.push({name:'title',params:{id:e.target.id }})
      },
      loginname:function(f){
        this.$router.push({name:'article',params:{loginname:f }})
      },
      prev:function () {
          if(this.page < 2){

          }else{
        this.page--;
        this.initdata();
      }},
      next:function () {
        this.page++;
        this.initdata();
      },
      all: function () {
        this.topic = 'all';
        this.page = 1;
        this.initdata();
      },
      good: function () {
        this.topic = 'good';
        this.page = 1;
        this.initdata();
      },
      share: function () {
        this.topic = 'share';
        this.page = 1;
        this.initdata();
      },
      ask: function () {
        this.topic = 'ask';
        this.page = 1;
        this.initdata();
      },
      job: function () {
        this.topic = 'job';
        this.page = 1;
        this.initdata();
      }
    }
  }
</script>

<style scoped>
  div.header {
    width: 10rem;
    height: 1.4rem;
    position: fixed;
    top: 0;
    left: 0;
    background: white;
  }

  div.header ul {
    height: 1.4rem;
  }

  div.header ul li {
    width: 2rem;
    height: 1.4rem;
    float: left;
    text-align: center;
    line-height: 1.4rem;
    color: gray;
    border-bottom: 1px solid gray;
  }

  div.header ul li.active {
    border-bottom: 1px solid tomato;
    color: tomato;
  }

  div.header ul li.before:after {
    content: '';
    position: absolute;
    top: 0.4rem;
    width: 1px;
    height: 0.6rem;
    margin-left: 0.5rem;
    background: gray;
  }

  div.bodyer {
    margin: 1.5rem 10px 1.5rem 10px;
  }
  div.page{
    margin-left: 3rem;
    font-size: 30px;
  }
  div.page p button{
    font-size: 26px;
    color: tomato;
  }
  div.bodyer ul li {
    height: 3.5rem;
    border-bottom: 1px solid tomato;
  }

  div.bodyer ul li span.avatar_url {
    width: 1rem;
    height: 0.6rem;
    display: block;
    float: left;
    margin-top: 0.3rem;
    margin-left: 0.3rem;
  }

  div.bodyer ul li span.avatar_url img {
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
  }

  div.bodyer ul li span.loginname {
    width: 2.5rem;
    height: 0.6rem;
    display: block;
    float: left;
    margin-top: 0.3rem;
    margin-left: 0.3rem;
    line-height: 0.5rem;
  }

  div.bodyer ul li span.tab {
    width: 2rem;
    height: 0.6rem;
    float: left;
    color: tomato;
    line-height: 0.5rem;
    margin-top: 0.3rem;
    margin-left: 0.3rem;
  }
  div.bodyer ul li span.top{
    width: 2rem;
    height: 0.6rem;
    float: left;
    color: tomato;
    line-height: 0.5rem;
    margin-top: 0.3rem;
  }
  div.bodyer ul li span.title {
    width: 8rem;
    display: block;
    float: left;
    margin-left: 1.6rem;
  }

  div.bodyer ul li span.last_reply_at {
    width: 4rem;
    height: 0.5rem;
    display: block;
    float: left;
    margin-left: 1.6rem;
    margin-top: 0.3rem;
  }

  div.bodyer ul li span.reply_count {
    width: 2rem;
    height: 0.5rem;
    display: block;
    float: right;
    text-align: right;
    margin-right: 0.3rem;
    margin-top: 0.3rem;
  }
  div.bodyer ul li svg.icon {
    width: 1em;
    height: 1em;
    margin-top: 0.3rem;
    font-size: 30px;
    fill: currentColor;
  }
</style>
