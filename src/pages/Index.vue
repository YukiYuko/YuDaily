<template>
  <div class="my-index">
    <header class="head" :class="{on:menuShow}">
      <div class="btn" @click="showMenu">
          <i></i>
          <i></i>
          <i></i>
      </div>
      <span>今日新闻</span>
    </header>
    <side-bar :class="{on:menuShow}"></side-bar>
    <list :class="{on:menuShow}"></list>
  </div>
</template>

<script>
import axios from 'axios';
import List from '../components/List';
import SideBar from '../components/SideBar';
import { mapGetters,mapActions } from 'vuex'
export default {
  name: 'index',
  data() {
    return {
      comments: [],
    }
  },
  computed: {
    ...mapGetters(['menuShow'])
  },
  components: {
    List,SideBar
  },
  created() {

  },
  methods: {
    ...mapActions(['toggleShow']),
    showMenu(){
      this.toggleShow();
    }
  }
};
</script>

<style lang="less">
@import '../assets/base.less';
.head{ height: @80px;width: 100%;position: fixed;left: 0;top: 0;z-index: 1;padding: 0 @30px;font-size: @40px;
transition: all .8s cubic-bezier(.55,0,.1,1);
  &.on{ transform: translateX(@440px)}
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

</style>
