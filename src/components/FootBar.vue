<style scoped lang="less">
  @import '../assets/base.less';
  .footBar{ height: @80px;position: fixed;width: 100%;left: 0;bottom: 0;background-color: #fff;
  box-shadow: 0 -5px 5px -5px rgba(0,0,0,0.09);
    a{ width: 20%;height: 100%;text-align: center;line-height: @80px;float: left;position: relative;
      i{ font-size: @40px;}
      em{ color: #999;position: absolute;right: @18px;font-style: normal;font-size: @14px;top: 4px;line-height: normal;}
      span{ color: #fff;background-color: #20B4F1;right: @30px;font-size: @14px;top: 4px;line-height: normal;position: absolute;}
    }
  }
</style>
<template>
  <div class="foot">
    <div class="footBar">
      <router-link to=""><i class="iconfont icon-zuo"></i></router-link>
      <router-link to=""><i class="iconfont icon-you"></i></router-link>
      <router-link to=""><i class="iconfont icon-zan"></i> <em>188</em> </router-link>
      <router-link to=""><i class="iconfont icon-fenxiang"  @click="show"></i></router-link>
      <router-link to=""><i class="iconfont icon-pinglun"> <span>269</span></i></router-link>
    </div>
    <mt-popup v-model="popupVisible" position="bottom" style="width:100%;">
        <share @cancel="hideMenu"></share>
    </mt-popup>
  </div> 
</template>

<script>
import Share from '../components/Share.vue'
export default {
  data() {
    return {
      popupVisible:false
    }
  },
  components: {
    Share
  },
  created() {
    
  },
  methods: {
    show(){
      this.popupVisible = !this.popupVisible;
      console.log(this.popupVisible);
    },
    // 隐藏分享组件
    hideMenu: function() {
      this.popupVisible = false;
    },
  }
};
</script>
