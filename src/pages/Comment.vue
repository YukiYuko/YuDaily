<style lang="less">
@import '../assets/base.less';
.comment{ 
  .comment-content{ height: 100%;padding-top: 40px;}
}
</style>

<template>
  <div class="comment">
    <mt-header fixed :title="comments+'条点评'">
      <a @click="goBack" slot="left">
        <mt-button icon="back">返回</mt-button>
      </a>
    </mt-header>
    <div class="comment-content" ref="comment_content">
      <div class="comment-box">
        <div class="comment-long">
          <div class="comment-title">12条长评论</div>
          <div class="comment-body">
            
          </div>
        </div>
        <div class="comment-short"></div>
      </div>
    </div>
  </div> 
</template>

<script>
import axios from 'axios';
import BScroll from 'better-scroll';
import { mapGetters,mapActions } from 'vuex'
export default {
  name: 'comment',
  data() {
    return {
      long: [],
      short: []
    }
  },
  computed: {
    ...mapGetters(['comments'])
  },
  components: {
    
  },
  created() {
    this.$nextTick(() => {
      this.scroll = new BScroll(this.$refs.comment_content, {
        click: true
      });
    });
  },
  methods: {
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
  }
};
</script>
