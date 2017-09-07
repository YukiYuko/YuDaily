<template>
  <div class="my-index">
    <swipe></swipe>
    <p v-for="i in 50" :key="i">{{i}}</p>
  </div>
</template>

<script>
import axios from 'axios';
import Swipe from '../components/Swipe';
export default {
  name: 'index',
  data() {
    return {
      comments: []
    };
  },
  components: {
    Swipe,
  },
  created() {
    
  },
  methods: {
    
  }
};
</script>

<style lang="less">

</style>
