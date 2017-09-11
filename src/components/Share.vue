<template>
  <div class="share">
    <h2>分享这篇文章</h2>
    <div class="shareSwipe">
        <mt-swipe :auto="0">
            <mt-swipe-item>
                <div class="share-box" flex wrap="wrap">
                    <div class="share-item" box="">
                        <i class="icon iconfont icon-weixin"></i>
                        <span>微信好友</span>
                    </div>
                    <div class="share-item">
                        <i class="icon iconfont icon-weixinpengyouquan"></i>
                        <span>微信朋友圈</span>
                    </div>
                    <div class="share-item">
                        <i class="icon iconfont icon-qq"></i>
                        <span>QQ</span>
                    </div>
                    <div class="share-item">
                        <i class="icon iconfont icon-weibo"></i>
                        <span>新浪微博</span>
                    </div>
                    <div class="share-item">
                        <i class="icon iconfont icon-fuzhilianjie"></i>
                        <span>复制链接</span>
                    </div>
                    <div class="share-item">
                        <i class="icon iconfont icon-youdaoyunbiji"></i>
                        <span>有道云笔记</span>
                    </div>
                    <div class="share-item">
                        <i class="icon iconfont icon-yinxiangbiji"></i>
                        <span>印象笔记</span>
                    </div>
                    <div class="share-item">
                        <i class="icon iconfont icon-tengxunweibo"></i>
                        <span>腾讯微博</span>
                    </div>
                </div>
            </mt-swipe-item>
            <mt-swipe-item>
                <div class="share-box" flex wrap="wrap">
                    <div class="share-item">
                        <i class="icon iconfont icon-information"></i>
                        <span>微信好友</span>
                    </div>
                    <div class="share-item">
                        <i class="icon iconfont icon-instapaper"></i>
                        <span>微信朋友圈</span>
                    </div>
                </div>
            </mt-swipe-item>
        </mt-swipe>
    </div>
    <div class="collect">
        <a href="javascript:;">收藏</a>
        <a href="javascript:;" @click="cancel">取消</a>
    </div>
  </div>
</template>

<script>
import {go} from '../actions';
export default {
  data () {
    return {
      shareList: [
          {}
      ]
    }
  },
  created(){
    
  },
  methods:{
    // 隐藏分享菜单事件
    cancel: function() {
    //抛出一个事件给父组件
      this.$emit('cancel');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
@import '../assets/base.less';
.share{ 
    height: @640px;width: 100%;background: #E9E9E9;
    padding: 0 @30px;
    h2{ font-size: @30px;color: @color333;line-height: @60px;text-align: center;}
    font-size: 0;
    .shareSwipe{ margin-bottom: @16px;height: 60%;}
    .share-item{ 
       font-size: @16px;margin-bottom: @20px; width: 25%;
        text-align: center;
        i{ width: @100px;height: @100px;display: block;margin:@16px auto;line-height: @100px;font-size: @60px;color: #fff;border-radius: 50%;
            &.icon-weixin{ background-color: #60C84D;}
            &.icon-weixinpengyouquan{ background-color: #72CF27;}
            &.icon-qq{ background-color: #2369C7;}
            &.icon-weibo{ background-color: #EF4017;}
            &.icon-fuzhilianjie{ background-color: #DF4622;}
            &.icon-youdaoyunbiji{ background-color: #30A2ED;}
            &.icon-yinxiangbiji{ background-color: #5AB53F;}
            &.icon-tengxunweibo{ background-color: #38A0DB;}
            &.icon-information{ background-color: #46E742;}
            &.icon-instapaper{ background-color: #6C6C6C;}
        }
    }
    .collect{ 
        a{ display: block;margin-bottom: @16px;background-color: #fff;color: #666;font-size: @30px;text-align: center;
            height: @70px;line-height: @70px;
        }
    }
}
.mint-swipe-indicator.is-active{ opacity: 0.8}
</style>
