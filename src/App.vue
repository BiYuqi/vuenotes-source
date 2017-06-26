<template>
  <div id="app">
    <Headers></Headers>
    <div class="range">
        <transition name="fade-nav">
            <NavBar v-if="canShow"></NavBar>
        </transition>
        <transition name="no-mode-translate-fade">
            <router-view class="main_content"></router-view>
        </transition>
    </div>
  </div>
</template>

<script>
import NavBar from './components/nav.vue'
import Headers from './components/header.vue'
import { mapActions } from 'vuex';
export default {
    name: 'app',
    components: {
        NavBar,
        Headers
    },
    data() {
        return {

        }
    },
    methods:{
        ...mapActions(['enableshow','disableshow']),
        rightShow () {
            if(this.$store.state.isShow.isShow === false){
                return this.enableshow();
            }
        },
        leftShow () {
            if(this.$store.state.isShow.isShow === true){
                return this.disableshow();
            }
        }
    },
    computed:{
        canShow () {
            if(document.body.clientWidth <= 800){
                return this.$store.state.isShow.isShow;
            }else {
                return true
            }
        }
    },
    mounted () {
        this.$nextTick(function(){
            var that = this;
            etouch('#app',function(e,touch) {
                // e.clock = true;  //给div加锁,完全阻止默认事件
            }).on('swiper',function(e,touch) {

            }).on('up',function(e,touch) {
                // console.log('上滑回调');
            }).on('down',function(e,touch) {
                // console.log('下滑回调');
            }).on('left',function(e,touch) {
                that.leftShow();
            }).on('right',function(e,touch) {
                that.rightShow();
            });
        })
    }
}
</script>

<style>
    body,html,h3,ul,li,section,p,div{
        margin: 0;
        padding: 0;
    }
    html,body{
        height: 100%;
        width: 100%;
    }
    #mf3a1ecf95f2c3f438db4c3e92a9e43aa156e1{
	   display:none !important;
    }
    *{
        box-sizing: border-box;
    }
    .no-mode-translate-fade-enter-active, .no-mode-translate-fade-leave-active {
      transition: all 0.8s;
    }
    .no-mode-translate-fade-enter, .no-mode-translate-fade-leave-active {
      opacity: 0;
    }
    .no-mode-translate-fade-enter {
      transform: translateY(31px);
    }
    .no-mode-translate-fade-leave-active {
      transform: translateY(0);
    }
    .fade-nav-enter-active, .fade-nav-leave-active {
      transition: all 0.5s;
    }
    .fade-nav-enter, .fade-nav-leave-active {
      opacity: 0;
    }
    .fade-nav-enter {
      transform: translateX(-31px);
    }
    .fade-nav-leave-active {
      transform: translateX(0);
    }
    body{
        font-family: "Microsoft Yahei";
        font-size: 14px;
        width: 100%;
        background-color: #F8F8F8;
    }
    .range{
        height: 100%;
        width: 100%;
        position: relative;
    }
    .header{
        height: 60px;
        width: 100%;
        box-sizing: border-box;
        line-height: 60px;
        color: #E9F6FD;
        padding-left: 70px;
        text-align: left;
        background-color: #FDFDFD;
        position: relative;
        border-bottom: 1px solid #E8E8E8;
    }
    .header i{
        font-style: normal;
        display: inline-block;
        color: #2B2B2B;
        font-size: 20px;
    }
    .header img{
        display: block;
        width: 48px;
        height: 48px;
        position: absolute;
        top: 50%;
        margin-top: -24px;
        left: 12px;
        z-index: 200;
    }
    .header .logo img{
        animation: change 5s linear infinite;
        -webkit-animation: change 5s linear infinite;
        animation-play-state: paused;
        -webkit-animation-play-state: paused;
    }
    .header .logo img:hover{
        animation-play-state: running;
        -webkit-animation-play-state: running;
    }
    @keyframes change{
        from{-webkit-transform:rotate(0);transform:rotate(0)}
        to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}
    }
    .btn{
        display: none;
        position: absolute;
        top: 10px;
        right: 15px;
        width: 30px;
        height: 30px;
        background: url('http://oiukswkar.bkt.clouddn.com/logo.mobile.png') no-repeat;
        background-size: cover;
    }
    #app {
      font-family: 'Microsoft Yahei';
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      color: #2c3e50;
      height: 100%;
      box-sizing: border-box;
    }
    .main_content{
        height: 100%;
        box-sizing: border-box;
        background-color: #F8F8F8;
        position: absolute;
        top: 0;
        left: 200px;
        padding: 0 15px;
    }
    .main-mod-con{
        list-style: none;
        float: left;
        width: auto;
        text-align: center;
        border-radius: 5px;
        border: 1px solid #6CC9A0;
        background-color: #fff;
        transition: .4s all;
        margin: 6px 6px;
    }
    .main-mod-con a{
        display: block;
        padding: 8px 12px;
        color: #333;
        margin: 0 5px;
        text-decoration: none;
    }
    .main-mod-con:hover{
        box-shadow: 0 0 6px 1px #E0E0E0;
        transform: translateY(-2px);
    }
    .main-mod-con:hover a{
        color: #2973B7;
    }
    .design{
        font-size: 14px;
        position: relative;
        padding-left: 8px;
        /*color: #4fc08d;*/
        color: #333;
        font-weight: bold;
        text-align: left;
    }
    .design:before{
        position: absolute;
        left: 0;
        bottom: 0;
        display: block;
        content: '';
        width: 4px;
        height: 16px;
        background-color: #1BA261;
    }
    .main-mod{
        width: 100%;
        padding: 14px 10px 0;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        margin-bottom: 15px;
    }
    .main-wraper{
        margin-top: 15px;
    }
    .main-wraper:after{
        content: '';
        display: block;
        overflow: hidden;
        clear: both;
    }
    @media screen and (max-width: 800px){
        body{
            background-color: #fff;
        }
        .star-gihub{
            display: none;
        }
        .header{
            width: 100%;
            height: 50px;
            line-height: 50px;
            position: relative;
            text-align: center;
            border-bottom: 1px solid #ececec;
            background-color: #FDFDFD;
                background: #54d9e0;
        }
        .btn{
            display: inline-block;
        }
        .main_content{
            height: 100%;
            box-sizing: border-box;
            background-color: #fafafa;
            position: absolute;
            top: 0;
            left: 0;
            padding: 0;
        }
        .header img,
        .github-img{
            display: none !important;
        }
        .header i{
            font-size: 18px;
            color: #fff;
        }
        .header{
            padding-left: 20px;
            text-align: left;
        }
        .main-mod-con{
            list-style: none;
            float: left;
            width: auto;
            text-align: center;
            border-radius: 5px;
            transition: .4s all;
            border: 1px solid #1BA261;
            background-color: #fff;
        }
        .main-mod-con a{
            display: block;
            padding: 5px 5px;
            color: #333;
            margin: 0 1px;
            text-decoration: none;
        }
    }
</style>
