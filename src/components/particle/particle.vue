<style lang="less" scoped>
.demo{ width: 100%;}
</style>
<template> 
    <div class="demo" ref="demo" :style="{height:height,width:width}"> 
        
    </div> 
</template>
<script type="text/ecmascript-6">
  import JParticles from 'jparticles'

  export default {
    props: {
      demoID:{
        type: String,
        default: ''   
      },
      height:{
        type: String,
        default: '3rem'
      },
      width:{
        type: String,
        default: '5rem'
      },
    },
    mounted() {
        this._init()
    },
    methods: {
      _init() {
        new JParticles.particle("#"+this.demoID);
      }
    },

  }
</script>
