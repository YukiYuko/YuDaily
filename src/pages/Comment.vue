<style lang="less">
@import '../assets/base.less';
.comment{ 
  .comment-content{ height: 100%;padding-top: 40px;}
  .comment-title{ 
    height: @80px;line-height: @80px;border-bottom: 1px solid #e7e7e7;color: #333;padding: 0 @30px;
    span{ font-size: @30px;}
    a{ 
      float: right;display: block;
      transition: all 0.3s;    
      &.active{ transform: rotate(180deg)}
    }
  }
  .comment-body{
    li{ 
      padding: @30px;border-bottom: 1px solid #e7e7e7;position: relative;
      img{ position: absolute;left: @30px;top: @30px;width: @80px;height: @80px;border-radius: 50%;}
      .text{ 
        margin-left: @100px;
        h2{ 
          overflow: hidden;margin-bottom: 5px;
          span{ vertical-align: middle;font-size: @28px;}
          a{ color: #666;float: right;}
        }
        div{ margin-bottom: @20px;line-height: @40px;font-size: @28px;color: #666;}
        p{ font-size: @24px;color: #999;}
      }
    }
  }
}
</style>

<template>
  <div class="comment">
    <mt-header fixed :title="comments+'条点评'">
      <a @click="goBack" slot="left">
        <mt-button icon="back">返回</mt-button>
      </a>
    </mt-header>
    <div class="comment-content">
      <div class="comment-box">
        <!-- 长评 -->
        <div class="comment-long">
          <div class="comment-title"><span>{{long.length}}条长评论</span></div>
          <div class="comment-body">
            <ul>
              <li v-for="(item,index) in long" :key="index">
                <img :src="attachImageUrl(item.avatar)" :alt="item.author">
                <div class="text">
                  <h2>
                    <span>{{item.author}}</span>
                    <a href="javascript:;"><i class="iconfont icon-zan"></i> {{item.likes}}</a>
                  </h2>
                  <div>{{item.content}}</div>
                  <p>{{commonDate(item.time)}}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <!-- 短评 -->
        <div class="comment-short" ref="comment_short">
          <div class="comment-title">
            <span>{{short.length}}条短评论</span>
            <a href="javascript:;" :class="{active:shortShow}" @click="show"><i class="iconfont icon-zhankai"></i></a>
          </div>
          <div class="comment-body" v-show="shortShow">
            <ul>
              <li v-for="(item,index) in short" :key="index">
                <img :src="attachImageUrl(item.avatar)" :alt="item.author">
                <div class="text">
                  <h2>
                    <span>{{item.author}}</span>
                    <a href="javascript:;"><i class="iconfont icon-zan"></i> {{item.likes}}</a>
                  </h2>
                  <div>{{item.content}}</div>
                  <p>{{commonDate(item.time)}}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    
  </div> 
</template>

<script>
import axios from 'axios';
import { mapGetters,mapActions } from 'vuex'
import filters from '../filters'
import Scroll from '../components/Bscroll/scroll';
export default {
  name: 'comment',
  data() {
    return {
      long: [],
      short: [],
      shortShow:false
    }
  },
  computed: {
    ...mapGetters(['comments'])
  },
  components: {
    Scroll
  },
  created() {
    this.fetchLongData();
    this.fetchShortData();
  },
  methods: {
    ...filters,
    ...mapActions(['goBack']),
    // 获取长评数据
    fetchLongData() {
      axios.get('api/story/' + this.$route.params.id + '/long-comments')
      .then(response => {
        this.long = response.data.comments;
      })
      .catch(error => {
        console.log(error);
      });
    },
    // 获取短评数据
    fetchShortData() {
      axios.get('api/story/' + this.$route.params.id + '/short-comments')
      .then(response => {
        this.short = response.data.comments;
      })
      .catch(error => {
        console.log(error);
      });
    },
    show(){
      this.shortShow = !this.shortShow;
      let h = this.$refs.comment_short.offsetTop;
      let b = this.$refs.comment_short.offsetBottom;
    }
  }
};
</script>
