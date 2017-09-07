<template>
  <div class="swipe">
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="topStory in topStories" :key="topStory.id" @click.native="viewDetail(topStory.id)" >
        <img :src="attachImageUrl(topStory.image)" :alt="topStory.title">
        <span class="top-story-title">{{topStory.title}}</span>
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
import axios from 'axios';
import {go} from '../actions';
export default {
  data () {
    return {
      topStories: {}
    }
  },
  created(){
    this._getList();
  },
  methods:{
    _getList(){
      // 获取最热新闻
      axios.get('api/news/latest')
        .then(response => {
          this.topStories = response.data.top_stories;
        })
        .catch(error => {
          console.log(error);
        });
    },
    // 跳转到对应id的文章详情页
    viewDetail: function(id) {
      go({ name: 'detail', params: { id: id } });
    },
    // 修改图片链接
    attachImageUrl: function(srcUrl) {
      if (srcUrl !== undefined) {
        return srcUrl.replace(/http\w{0,1}:\/\/p/g, 'https://images.weserv.nl/?url=p');
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@import '../assets/base.less';
.swipe{
  height: @440px;
  color: #fff;
  font-size: @40px;
  img{
    position: absolute;
    bottom: -75px;
    width: 100%;
  }
  .top-story-title{
    position: absolute;
    z-index: 2;
    bottom: 0;
    padding: 30px 20px;
    line-height: 25px;
  }
}
</style>
