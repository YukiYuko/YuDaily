<template>
  <div class="my-index">
    <swipe></swipe>
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
