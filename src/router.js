/**
 * Created by Administrator on 2016/12/8.
 */
import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);

const INDEX = resolve => require(['./view/index.vue'], resolve)
const TITLE = resolve => require(['./view/title.vue'], resolve)
const ARTICLE = resolve => require(['./view/article.vue'], resolve)
const POST = resolve => require(['./view/post.vue'], resolve)
const MESSAGE = resolve => require(['./view/message.vue'], resolve)
const USER = resolve => require(['./view/user.vue'], resolve)

 const router =new Router({
  routes:[
    {path:'/' ,name:'index',component:INDEX},
    {path:'/:id' ,name:'title',component:TITLE},
    {path:'/:loginname' ,name:'article',component:ARTICLE},
    {path:'/post' ,name:'post',component:POST},
    {path:'/message' ,name:'message',component:MESSAGE},
    {path:'/user' ,name:'user',component:USER},
  ]
})
export  default router;
