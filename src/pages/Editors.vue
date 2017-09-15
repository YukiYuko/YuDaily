<style lang="less" scoped>
@import '../assets/base.less';
.editor{ padding-top: 40px;
  ul{
    li{ 
      padding: @20px @30px;
      border-bottom: 1px solid #e7e7e7;
      img{ width: @80px;height: @80px;border-radius: 50%;margin-right: @20px;}
      h2{ font-size: @32px;margin-bottom: 5px;margin-top: @6px;}
      p{ font-size: @28px;color: #999}
      i{ width: @60px;height: 100%;margin-top: @20px;color: #999;}
    }
  }
  .editorDetail{ width: 100%;height: 100%;background-color: #fff;}
  .demo{ height: 3rem;width: 3rem}
}
</style>

<template>
  <div class="editor">
    <mt-header title="主编" fixed>
        <a @click="goBack" slot="left">
            <mt-button icon="back">返回</mt-button>
        </a>
    </mt-header>
    <ul>
      <li flex v-for="(item,index) in data" :key="index" @click="show">
        <img :src="attachImageUrl(item.avatar)" :alt="item.name">
        <div flex box="1">
          <div box="1">
            <h2>{{item.name}}</h2>
            <p>{{item.bio}}</p>
          </div>
          <i class="iconfont icon-you"></i>
        </div>
      </li>
    </ul>
    <mt-popup v-model="popupVisible" position="right" class="editorDetail">
      <mt-header title="主编详情">
        <a @click="popupVisible=false" slot="left">
            <mt-button icon="back">返回</mt-button>
        </a>
      </mt-header>
      <div class="demo"></div>
    </mt-popup>
  </div>
</template>

<script>
import axios from 'axios';
import { mapGetters,mapActions } from 'vuex'
import filters from '../filters'
// import Jparticles from '../components/particle/particle';
import JParticles from 'jparticles'
export default {
  name: 'editor',
  data() {
    return {
      data: [],
      popupVisible:false
    }
  },
  computed: {
      ...mapGetters(['editors','params'])
  },
  components: {
    
  },
  created() {
     this.fetchData();
  },
  methods: {
    ...filters,
    ...mapActions(['goBack','go']),
    // 获取指定id主题下主编的数据
    fetchData() {
      let id = this.$route.params.id;
      axios.get('api/theme/' + id)
        .then(response => {
          this.data = response.data.editors;
          console.log(this.data)
      });
    },
    show(){
      this.popupVisible = true;
      if(this.particle){
        return;
      }
      this.particle = new JParticles.particle(".demo");
      
    }
    // 或许指定id主题下的编辑信息
    // fetchData() {
    //   axios.get('api/editor/' + this.$route.params.editorId + '/profile-page/ios')
    //     .then(response => {
    //       response.data = this.attachBodyContent(response.data);
    //       this.data = response.data;
    //     });
    // },
  }
};
</script>