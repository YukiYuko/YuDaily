<style scoped lang="less">
  @import '../assets/base.less';
  .theme{
      padding-top: 40px;
      .mint-header{ background-color: #666}
      .mainEdit{ 
          height: @80px;
          line-height: @80px;
          font-size: 0;
          padding: 0 @30px;
          border-bottom: 1px solid #e7e7e7;
          span{ color: #666;display: inline-block;font-size: @28px;vertical-align: middle}
          a{ 
            margin-left: 10px;display: inline-block;width: @40px;height: @40px;border-radius: 50%;
            overflow: hidden;
            vertical-align: middle;
            img{ width: 100%;height: 100%;}
          }
      }
      .theme-list{
          padding: 0 @30px;
          li{ 
              padding: @30px 0; height: @170px;border-bottom: 1px solid #e7e7e7;position: relative;
              a{ 
                  display: block;font-size: @30px;line-height: @40px;
                  &.noImage{padding-right: @190px;}
              }
              .imageBox{ float: right;height: @110px;;width: @150px;position: absolute;
                right: 0;top: @30px;
                img{ width: 100%;height: 100%;}
              }
          }
      }
  }
</style>
<template>
  <div class="theme">
    <mt-header :title="data.name" fixed>
        <!-- <img :src="attachImageUrl(data.background)" alt=""> -->
        <router-link to="/" slot="left">
            <mt-button icon="back">返回</mt-button>
        </router-link>
        <mt-button slot="right"><i class="iconfont icon-jia"></i></mt-button>
    </mt-header>
    <div class="mainEdit" @click="go({ name: 'editors', params: { id: $route.params.id } })">
        <span>主编 </span>
        <a v-for="(item,index) in data.editors" :key="index"><img :src="attachImageUrl(item.avatar)" :alt="item.name"></a>
    </div>
    <div class="theme-list">
        <ul>
            <li v-for="(item,index) in data.stories" :key="index" @click="viewDetail(item.id)">
                <a :class="{noImage:item.images}">{{item.title}}</a>
                <div class="imageBox" v-if="item.images">
                    <img :src="attachImageUrl(item.images[0])" :alt="item.title">
                </div>
            </li>
        </ul>
    </div>
  </div> 
</template>

<script>
import axios from 'axios';
import Scroll from '../components/scroll/scroll';
import {go} from '../actions';
import { mapGetters,mapActions } from 'vuex'
export default {
  data() {
    return {
      data: []
    }
  },
  computed: {
      ...mapGetters(['params'])
  },
  components: {
    Scroll
  },
  created() {
    this.fetchData();
  },
  methods: {
    ...mapActions(['set_editors','go']),
    // 获取指定id主题下的数据
    fetchData() {
      let id = this.$route.params.id;
      axios.get('api/theme/' + id)
        .then(response => {
          this.data = response.data;
          this.set_editors(response.data.editors);
      });
    },
    // 修改图片链接
    attachImageUrl: function(srcUrl) {
        if (srcUrl !== undefined) {
            return srcUrl.replace(/http\w{0,1}:\/\/p/g, 'https://images.weserv.nl/?url=p');
        }
    },
    viewDetail(id){
        go({ name: 'detail', params: { id: id } });
    }
  }
};
</script>
