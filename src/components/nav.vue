<template>
     <transition name="fade">
        <ul class="nav-list" id="nav-bar-nav">
            <li class="nav-item" v-for="(item,index) in items">
                <router-link :to="'/' + item.ad">{{item.name}}</router-link>
            </li>
        </ul>
    </transition>
</template>

<script>
    import { mapActions } from 'vuex';
    export default {
        data () {
            return {
                items: [
                    {name:'技术博客',ad:'personBlog'},
                    {name:'AngularJs',ad:'angular'},
                    {name:'NodeJs',ad:'nodejs'},
                    {name:'Vue & React',ad:'vuereact'},
                    {name:'Javascript',ad:'javascript'},
                    {name:'移动端开发',ad:'mobile'},
                    {name:'构建工具',ad:'maketool'},
                    {name:'工具手册',ad:'handbook'},
                    {name:'常用资源',ad:'static'},
                    {name:'版本控制',ad:'gits'},
                    {name:'其他语言',ad:'oth'},
                    {name:'关于本站',ad:'aboutme'}
                ]
            }
        }
    }
</script>

<style scoped>
    .nav-list{
        width: 200px;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        box-sizing: border-box;
        background-color: #fff;
        border-right: 1px solid #E8E8E8;
    }
    .nav-item{
        list-style: none;
        height: 40px;
        line-height: 40px;
        position: relative;
        cursor: pointer;
        border-bottom: 1px solid #eee;
    }
    .nav-item a{
        display: block;
        text-decoration: none;
        color: #333;
        transition: all .2s;
        padding-left: 30px;
    }
    .nav-item a:hover{
        background-color: #4FC08D;
        cursor: pointer;
        color: #fff;
        font-weight: bold;
    }
    a.router-link-active{
        color:#4FC08D;
        font-weight: bold;
    }
    a.router-link-active:before{
        position: absolute;
        left: 0;
        bottom: 0;
        display: block;
        content: '';
        width: 4px;
        height: 40px;
        background-color: #4FC08D;
    }
    @media screen and (max-width: 800px){
        *{
            box-sizing: border-box;
        }
        body{
            background-color: #fff;
            width: 100%;
        }
        #nav-bar-nav{
            position: absolute;
            top: 0;
            left: 0;
            width: 52%;
            height: 200%;
            z-index: 100;
            background: #fff;
            border:none;
            border-right: 1px solid #eee;
        }
        #nav-bar-nav:after{
            content: '';
            display: block;
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            right: -100%;
            background-color: #333;
            opacity: 0.6;
        }
        .nav-list{
            height: auto;
        }
        .nav-item{
            list-style: none;
            height: 45px;
            line-height: 35px;
            float: inherit;
            line-height: 20px;
            position: relative;
            text-align: center;
            cursor: pointer;
            background-color: #fff;
            border-bottom: 1px solid #eee
        }
        .nav-item a{
            display: block;
            height: 45px;
            line-height: 45px;
            text-decoration: none;
            color: #000;
            padding-left: 0;
        }
        a.router-link-active{
            color: #008000;
            font-weight: bold;
        }
        a.router-link-active:before{
            display: none;
        }
        .nav-item a:hover{
            background-color: #f0f0f0;
            cursor: pointer;
            color: #008000;
        }
        .fade-enter-active, .fade-leave-active {
          transition: opacity .3s;
        }
        .fade-enter, .fade-leave-active {
          opacity: 0;
        }
    }
</style>
