<template>
  <div>
      <div class="recent">
        <ul>
          <li v-for="(item,index) in userdata.recent_topics" :key="index">
            <span class="avatar_url"><img :src="item.author.avatar_url" alt=""></span>
            <span class="loginname"> {{item.author.loginname}}</span><br>
            <span class="title"  >{{item.title}}</span><br>
            <span class="last_reply_at">
              <svg class="icon" aria-hidden="true">
               <use xlink:href="#icon-Parrot"></use>
               </svg>
              {{item.last_reply_at | time_string}}
            </span>
          </li>
        </ul>
      </div>
    </div>
</template>
<script>
  import axios from 'axios';
  import {ARTICLE_DATA} from '../comment/api';
  import {formatDate} from '../comment/lib'
  export default{
    data(){
      return{
        userdata:{}
      }
    },
    created(){
      this.initdata();
    },
    filters: {
      time_string: function (value) {
        return formatDate(value);
      }
    },
    methods: {
      initdata: function () {
        var that = this;
        axios.get( ARTICLE_DATA + this.$route.params.loginname)
          .then(function (data) {
            that.userdata=data.data.data;
          })
          .catch(function (error) {
            console.log(error);
          });
      },
    }
  }
</script>
<style>
  div.recent {
    margin: 0.2rem 0.2rem 0.2rem 0.2rem;
  }
  div.recent ul li {
    height: 3.5rem;
    border-bottom: 1px solid tomato;
  }
  div.recent ul li span.avatar_url {
    width: 1rem;
    height: 1rem;
    display: block;
    float: left;
    margin-top: 0.3rem;
    margin-left: 0.3rem;
  }
  div.recent ul li span.avatar_url img {
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
  }
  div.recent ul li span.loginname {
    width: 2.5rem;
    height: 0.6rem;
    display: block;
    float: left;
    margin-top: 0.3rem;
    margin-left: 0.3rem;
    line-height: 0.5rem;
  }

  div.recent  ul li span.title {
    width: 7rem;
    display: block;
    float: left;
    margin-left: 1.6rem;
  }
  div.recent  ul li span.last_reply_at {
    width: 4rem;
    height: 0.5rem;
    display: block;
    float: left;
    margin-left: 7rem;
    margin-top: 0.1rem;
    /*overflow: hidden;*/
  }
  div.recent ul li span.last_reply_at svg.icon {
    font-size: 30px;
    margin-top: 0.1rem;
    width: 1em;
    height: 1em;
    fill: currentColor;
    /*overflow: hidden;*/
  }

</style>
