<template>
  <div class="my-index">
    <list></list>
  </div>
</template>

<script>
import axios from 'axios';
import List from '../components/List';
export default {
  name: 'index',
  data() {
    return {
      comments: []
    };
  },
  components: {
    List
  },
  created() {
    
  },
  methods: {
    
  }
};
</script>

<style lang="less">

</style>
