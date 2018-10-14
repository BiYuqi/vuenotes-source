import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
/* eslint-disable no-new */
const PersonBlog = require('components/personBlog.vue')
const AngularBlog = require('components/angular.vue')
const NodejsBlog = require('components/nodejs.vue')
const VueReact = require('components/vuereact.vue')
const Javascript = require('components/Javascript.vue')
const Mobile = require('components/mobile.vue')
const MakeTool = require('components/maketool.vue')
const HandBook = require('components/handbook.vue')
const QuietRes = require('components/static.vue')
const Gits = require('components/gits.vue')
const About = require('components/aboutme.vue')
const Oth = require('components/oth.vue')
const WeChat = require('components/wechat/wechat.vue')
const Visual = require('components/visual/index.vue')

const routes = [
  {path: '/', redirect: '/blog'},
  {path: '/blog', component: PersonBlog},
  {path: '/ng', component: AngularBlog},
  {path: '/nodejs', component: NodejsBlog},
  {path: '/vr', component: VueReact},
  {path: '/js', component: Javascript},
  {path: '/mobile', component: Mobile},
  {path: '/maketool', component: MakeTool},
  {path: '/handbook', component: HandBook},
  {path: '/static', component: QuietRes},
  {path: '/gits', component: Gits},
  {path: '/aboutme', component: About},
  {path: '/oth', component: Oth},
  {path: '/wechat', component: WeChat},
  {path: '/visual', component: Visual}
]

const router = new VueRouter({
  routes
})

export default router
