<style lang="less" scoped>
@import '../assets/base.less';
.welcome{ 
    height: 100%;width: 100%;position: relative;
    .step{ padding: 5px 8px;background-color: rgba(255,255,255,0.7);color: #fff;font-size: @28px;
        position: absolute;right: 10px;top: 10px;z-index: 1;border-radius: 16px;;
    }
    .go{ position: absolute;width: 30%;height: @70px;line-height: @70px;border-radius: @70px;
        background-color: rgba(255,255,255,0.8);color: #ffffff;left: 50%;top: 50%;
        transform: translate3d(-50%,-50%,0);font-size: @30px;text-align: center;
    }
    img{ width: 100%;height: 100%;}    
}
</style>
<template>
  <div class="welcome">
    <a class="step" href="javascript:;" @click="hide">跳过</a>
    <mt-swipe :auto="0" :continuous="false">
        <mt-swipe-item>
            <img src="../assets/1.jpg" alt="启动图1">
        </mt-swipe-item>
        <mt-swipe-item>
            <img src="../assets/2.jpg" alt="启动图2">
        </mt-swipe-item>
        <mt-swipe-item>
            <a class="go" href="javascript:;" @click="hide">立即进入</a>
            <img src="../assets/3.jpg" alt="启动图3">
        </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
import axios from 'axios';
import { mapGetters,mapActions } from 'vuex'
export default {
  name: 'welcome',
  data() {
    return {
      
    }
  },
  props:{
      show:{
          type:Boolean,
          default:true
      }
  },
  computed: {
    
  },
  components: {
    
  },
  created() {

  },
  methods: {
    hide(){
        this.$emit('hide');
    }
  }
};
</script>
