<style scoped lang="less">
  @import '../assets/base.less';
  .list{ 
      height: 100%;position: relative;
      &.on{ transform: translateX(@440px);}
      transition: all .8s cubic-bezier(.55,0,.1,1);
    .list-item{ 
        position: relative;overflow: hidden;
        background-color: #fff;
        border-bottom: 1px solid #e7e7e7;
        padding: @20px;
        &.time{ padding: 0;}
        img{ width: @220px;height: @150px;float: left;object-fit: cover;}
        .list-item-title{ margin-left: @240px;
            h2{ font-size: @30px;line-height: @40px;}
        }
        .multipic{ position: absolute;bottom:@20px;right: @20px;font-size: @30px;color: #007ACC}
        span{ height: @80px;display: block;line-height: @80px;background-color: #169FE6;color: #fff;font-size: @30px;padding: 0 @20px;
          text-align: center;
        }
    }
    .backTop{ position: absolute;bottom: 20px;right: 20px;border: 1px solid #e7e7e7;border-radius: 50%;width: @80px;height: @80px;
    line-height: @80px;text-align: center;background-color: #fff;
      i{ font-size: @40px;}
    }
  }
</style>
<template>
  <div class="list" ref="list">
    <scroll ref="scroll" :data="stories" :scrollbar="scrollbarObj" :pullDownRefresh="pullDownRefreshObj" :pullUpLoad="pullUpLoadObj"
              :startY="parseInt(startY)" @pullingDown="onPullingDown" @pullingUp="onPullingUp" :listenScroll="true" @scroll="scroll">
        <swipe></swipe>
        <ul>
            <li class="list-item" :class="{time:item.date}" v-for="(item,index) in stories" :key="index" @click="viewDetail(item.id)">
                <img :src="attachImageUrl(item.images[0])" :alt="item.title" v-if="!item.date">
                <div class="list-item-title" v-if="!item.date">
                    <h2>{{item.title}}</h2>
                </div>
                <i class="iconfont icon-images multipic" v-if="item.multipic && !item.date"></i>
                <span v-if="item.date">{{item.date}} {{week(item.date)}}</span>
            </li>
        </ul>
    </scroll>
    <a class="backTop" @click="backTop" v-if="scrollToY<-300"><i class="iconfont icon-backtop"></i></a>
  </div> 
</template>

<script type="text/ecmascript-6">
import axios from 'axios';
import moment from 'moment';
import {go} from '../actions';
import filters from '../filters';
import Swipe from '../components/Swipe';
import Scroll from '../components/scroll/scroll';
export default {
  data() {
      return {
        scrollbar: true,
        scrollbarFade: true,
        pullDownRefresh: true,
        pullDownRefreshThreshold: 90,
        pullDownRefreshStop: 40,
        pullUpLoad: true,
        pullUpLoadThreshold: 0,
        pullUpLoadMoreTxt: '加载更多',
        pullUpLoadNoMoreTxt: '没有更多数据了',
        startY: 0,
        stories:[],
        dateStr:new Date(),
        times:0,
        scrollToY: 0,
      }
  },
// ******** 这里不知道哪里有问题，导致页面 vscode 无法自动提示代码了
  components:{
    Scroll,
    Swipe
  },
//   ******
  watch: {
      scrollbarObj() {
        this.rebuildScroll()
      },
      pullDownRefreshObj() {
        this.rebuildScroll()
      },
      pullUpLoadObj() {
        this.rebuildScroll()
      },
      startY() {
        this.rebuildScroll()
      }
    },
    computed: {
      scrollbarObj: function () {
        return this.scrollbar ? {fade: this.scrollbarFade} : false
      },
      pullDownRefreshObj: function () {
        return this.pullDownRefresh ? {
          threshold: parseInt(this.pullDownRefreshThreshold),
          stop: parseInt(this.pullDownRefreshStop)
        } : false
      },
      pullUpLoadObj: function () {
        return this.pullUpLoad ? {threshold: parseInt(this.pullUpLoadThreshold), txt: {more: this.pullUpLoadMoreTxt, noMore: this.pullUpLoadNoMoreTxt}} : false
      }
    },
    methods:{
        ...filters,
        // 获取最新新闻数据列表
        fetchData() {
            axios.get('api/news/latest')
            .then(response => {
                // 初始化新闻内容和id数组，并添加进state
                this.stories = response.data.stories;
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
      // 跳转到对应id的文章详情页
    viewDetail: function(id) {
        go({ name: 'detail', params: { id: id } });
    },
    // 根据日期获取更多新闻数据
    fetchMoreData: function() {
        this.dateStr = moment().add(this.times,'days').format('YYYYMMDD');
        axios.get('api/news/before/' + this.dateStr)
        .then(response => {
            // 合并数据
            this.stories = [...this.stories,{date:moment(response.data.date).format('YYYY-MM-DD')},...response.data.stories];
            this.times-=1;
        })
        .catch(error => {
            console.log(error);
        });
    },
      onPullingDown() {
        // 模拟更新数据
        this.times = 0;
        this.fetchData();
      },
      onPullingUp() {
        // 更新数据
        this.fetchMoreData();
      },
      rebuildScroll() {
        Vue.nextTick(() => {
          this.$refs.scroll.destroy()
          this.$refs.scroll.initScroll()
        })
      },
      backTop(){
        this.$refs.scroll.scrollTo(0,0,300);
      },
      scroll(pos){
        this.scrollToY = pos.y;
        this.$emit('childscroll',this.scrollToY);
      }
    },
    created(){
        this.fetchData();
    }
}
</script>
