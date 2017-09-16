<template>
  <div class="detail">
    <div class="detail-head">
        <img v-lazy="attachImageUrl(this.data.image)" :alt="this.data.title">
        <h2>{{data.title}}</h2>
        <p>图片：{{this.data.image_source}}</p>
    </div>
    <div class="detail-from"></div>
    <div class="detail-body" v-html="this.data.body"></div>
    <foot-bar @reloadId="fetchData"></foot-bar>  
  </div>
</template>
<script>
import axios from 'axios';
import FootBar from '../components/FootBar.vue';
import { mapGetters,mapActions } from 'vuex'
export default {
  data() {
    return {
      data: {}
    };
  },
  components: {
    FootBar
  },
  created() {
    this.fetchData();
  },
  methods: {
    ...mapActions(['get_next_news']),
    // 获取路由参数上的id新闻具体内容
    fetchData: function() {
      // 获得新闻id
      let id = this.$route.params.id;
      axios.get('api/news/' + id)
      .then(response => {
        response.data.body = this.attachBodyContent(response.data.body);
        this.data = response.data;
      })
      .catch(error => {
        console.log(error);
      });
    },
    // 修改图片链接
    attachImageUrl: function(srcUrl) {
      if (srcUrl !== undefined) {
        return srcUrl.replace(/http\w{0,1}:\/\/p/g, 'https://images.weserv.nl/?url=p');
      }
    },
    // 修改返回数据中的body中的图片链接
    attachBodyContent: function(body) {
      return body.replace(/src="http\w{0,1}:\/\//g, 'src="https://images.weserv.nl/?url=');
    }
  }
};
</script>
<style lang="less" scoped>
@import '../assets/base.less';
@import '/static/css/public.css';
.detail{
    padding-bottom: @80px;
    .detail-head{ 
        height: @440px;position: relative;
        img{ width: 100%;height: 100%;object-fit: cover;}
        h2{ color: #fff;text-shadow: 0 0 4px rgba(0,0,4px,.9);position: absolute;
            bottom: @60px;left: 0;width: 100%;padding: 0 @30px;font-size: @40px;line-height: @50px;
        }
        p{ color: #999;font-size: 12px;position: absolute;right: 0;bottom: 10px;right: @30px;}
    }

}
</style>
