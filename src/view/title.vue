<template>
  <div>
    <div class="content" v-html="contentdata.content"></div>
    <div class="replies" v-for="item in contentdata.replies">
      <span class="avatar_url"><img :src="item.author.avatar_url"></span>
      <span class="loginname">{{item.author.loginname}}</span>
      <span class="content" v-html="item.content"></span>
      <span class="create_at"><svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-Parrot"></use>
          </svg>{{item.create_at | time_string}}</span>
    </div>
  </div>
</template>
<script>
  import axios from 'axios';
  import {TITLE_DATA} from '../comment/api';
  import {formatDate} from '../comment/lib';

  export default{
    data(){
      return{
        contentdata: {}
      }
    },
    created(){
      this.initdata();
    },
    filters:{
      time_string: function (value) {
        return formatDate(value);
      }
    },
    methods: {
      initdata: function () {
        var that = this;
          axios.get( TITLE_DATA + this.$route.params.id)
          .then(function (response) {
            that.contentdata = response.data.data;
          })
          .catch(function (error) {
            console.log(error);
          });
      },
    }
  }
</script>

<style>
  div.content {
    width: 9rem;
    margin: 0.2rem 0.2rem 0.2rem 0.2rem;
    border-bottom: 1px solid tomato;
  }
  div.content img {
    width:5rem;
    height:5rem;
  }
  div.replies {
    margin: 1rem 0.2rem;
  }
  div.replies img{
    width:3rem;
    height:3rem;
  }
  div.replies span.avatar_url{
    width: 1rem;
    height: 1rem;
    display: block;
    float: left;
    margin-top: 0.3rem;
    margin-left: 0.3rem;
  }
  div.replies span.avatar_url img {
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
  }
  div.replies span.loginname {
    width: 3rem;
    height: 0.6rem;
    margin-top: 0.5rem;
    line-height: 0.3rem;
    margin-left: 0.3rem;
    display: block;
    float: left;
  }
  div.replies span.content {
    width: 6rem;
    display: block;
    float: left;
    margin-left: 0.3rem;
  }
  div.replies span.create_at {
    width: 3rem;
    height: 0.6rem;
    display: block;
    float: left;
    margin-left: 7rem;
    /*overflow: hidden;*/
  }
  div.replies span.create_at svg.icon {
    font-size: 30px;
    width: 2em;
    height: 1em;
    fill: currentColor;
  }
</style>
