<style lang="less">
@import '../assets/base.less';
.sidebar{ 
    background-color: #232A30;position: fixed;height: 100%;z-index: 2;
    width: @440px;
    transform: translateX(-@440px);
    transition: all .8s cubic-bezier(.55,0,.1,1);
    .sidebar-head{ 
        padding: @40px @30px 0 @30px;
        border-bottom: 1px solid #1B2329;height: 3rem;
        position: absolute;left: 0;top:0;width: 100%;
        h2{ 
            font-size: @32px;color:#666;
            margin-bottom: @20px;
            img{ vertical-align: middle;width: @66px;height: @66px;border-radius: 50%;}
            span{ margin-left: 5px;}
        }
        p{ 
            a{ 
                width: 33.3333%;
                i{ display: block;font-size: @50px;}
                span{ font-size: @20px;}
            }
        }
    }
    .sidebar-content{
        // overflow: auto;
        position: absolute;top:3rem;bottom:@100px;width:100%;overflow: hidden;
        ul{ 
            li{ 
                height: @90px;line-height: @80px;
                a{ 
                    display: block;position: relative;height: 100%;padding: 0 @80px 0 @30px;color:rgba(255,255,255,0.5);
                    font-size: @28px;
                    span{ margin-left: 10px;}
                    i{ font-size: @40px;}
                    em{ float: right;height: 100%;}
                }
                &.active{ 
                    background-color: #1B2329;
                    a{ color: rgba(255, 255, 255, 1)}
                }
            }
        }
    }
    .sidebar-foot{
        height: @100px;line-height: @100px;position: absolute;
        bottom: 0;left: 0;width: 100%;
        padding: 0 @30px;
        a{ 
            font-size: @28px;
            i{ font-size: @40px;vertical-align: middle;margin-right: 10px;}
        }
        // &:before{
        //     position: absolute;content: '';bottom: 100%;width: 100%;height: 100%;
        //     background-color: rgba(35, 42, 45, 0.5)
        // }
    }
}
.mask{ position: fixed;background: rgba(0,0,0,0.3);left: 0;right: 0;top: 0;bottom: 0;z-index: 1;display: none;}
.sidebarBox.on{ 
    .sidebar{ transform: translateX(0);} 
    // .mask{ display: block;}
}
</style>
<template>
<div class="sidebarBox">
    <div class="sidebar" flex dir="column">
        <div class="sidebar-head">
            <h2>
                <img src="../assets/touxiang.jpg" alt="用户名">
                <span>请登录</span>
            </h2>
            <p flex>
                <a href="javascript:;">
                    <i class="iconfont icon-shoucang"></i>
                    <span>收藏</span>
                </a>
                <a href="javascript:;">
                    <i class="iconfont icon-xiaoxi"></i>
                    <span>消息</span>
                </a>
                <a href="javascript:;">
                    <i class="iconfont icon-shezhi"></i>
                    <span>设置</span>
                </a>
            </p>
        </div>
        <div class="sidebar-content" ref="sidebar_content">
            <ul>
                <li v-for="item in data" :key="item.id">
                    <a href="">
                        <i class="iconfont icon-shouye"  v-if="item.id === -1"></i> 
                            {{item.name}}
                        <em class="iconfont icon-you"></em>
                    </a>
                </li>
            </ul>
        </div>
        <div class="sidebar-foot" flex>
            <a href="" box="1"><i class="iconfont icon-xiazai"></i>离线</a>
            <a href="" box="1"><i class="iconfont icon-yejian"></i>夜间</a>
        </div>
    </div>
    <div class="mask"></div>
</div>
</template>

<script>
import axios from 'axios';
import BScroll from 'better-scroll';
export default {
  name: 'sidebar',
  data () {
    return {
      data:[]
    }
  },
  created(){
      this.fetchData();
  },
  methods:{
    fetchData: function() {
      axios.get('api/themes')
      .then(response => {
        this.data = response.data.others;

        this.data.unshift({
          color: 0,
          thumbnail: '',
          description: '首页',
          id: -1,
          name: '首页'
        });

        this.$nextTick(() => {
          this.menuScroll = new BScroll(this.$refs.sidebar_content, {
            click: true
          });
        });
      })
      .catch(error => {
        console.log(error);
      });
    },
  }
}

</script>

