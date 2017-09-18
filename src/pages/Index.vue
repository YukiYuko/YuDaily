<template>
  <div class="my-index">
      <transition name="fade">
        <welcome v-if="isFirst" @hide="hide"></welcome>
      </transition>  
      <transition name="fade">
        <header class="head" :class="{on:menuShow,blueColor:top<-1}" v-if="!isFirst">
          <div class="btn" @click="showMenu">
              <i></i>
              <i></i>
              <i></i>
          </div>
          <span>今日新闻</span>
        </header>
      </transition> 
      <transition name="fade">
        <side-bar :class="{on:menuShow}" v-if="!isFirst"></side-bar>
      </transition>
      <transition name="fade">
        <list :class="{on:menuShow}" v-on:childscroll="scroll" v-if="!isFirst"></list>
      </transition>
  </div>
</template>

<script>
import axios from 'axios';
import List from '../components/List';
import SideBar from '../components/SideBar';
import Welcome from '../components/Welcome';
import { mapGetters,mapActions } from 'vuex'
export default {
  name: 'index',
  data() {
    return {
      comments: [],
      top:0,
      isFirst:true
    }
  },
  computed: {
    ...mapGetters(['menuShow'])
  },
  components: {
    List,SideBar,Welcome
  },
  created() {
    
  },
  methods: {
    ...mapActions(['toggleShow']),
    showMenu(){
      this.toggleShow();
    },
    scroll(val){
      this.top = val;
    },
    hide(){
      this.isFirst = false;
    }
  }
};
</script>

<style lang="less">
@import '../assets/base.less';
.head{ height: @80px;width: 100%;position: fixed;left: 0;top: 0;z-index: 1;padding: 0 @30px;font-size: @40px;
transition: all .8s cubic-bezier(.55,0,.1,1);
  &.on{ transform: translateX(@440px)}
  &.blueColor{ background-color: #169FE6;}
}
.head span{ position: absolute;height: 100%;line-height: @80px;top: 0;text-align: center;color: #fff;
transform: translateX(-50%);left: 50%;}
.head .btn{ width:24px; height:20px; margin-top:10px; position:relative;}
.head .btn i{ display:block; width:24px; height:4px; background:#fff; position:absolute; left:0; transition:0.3s}
.head .btn i:nth-child(1){ top:0; -webkit-transform-origin:left bottom; transform-origin:left bottom;}
.head .btn i:nth-child(2){ top:8px;}
.head .btn i:nth-child(3){ top:16px; -webkit-transform-origin:left top;transform-origin:left top}

.head.on .btn i:nth-child(1){ -webkit-transform:rotate(40deg);transform:rotate(40deg)}
.head.on .btn i:nth-child(2){ opacity:0;}
.head.on .btn i:nth-child(3){ -webkit-transform:rotate(-40deg);transform:rotate(-40deg)}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-to /* .fade-leave-active in below version 2.1.8 */ {
  opacity: 0
}

</style>
