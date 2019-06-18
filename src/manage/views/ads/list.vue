<style scoped>
  .ads-list-wrap {
    position: relative;
    width: 100%;
    height: 100%;
  }
  .ads-list-header {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 59px;
    background-color: #f7f8fa;
    padding-bottom: 5px;
  }
  .ads-list {
    position: absolute;
    top: 54px;
    bottom: 44px;
    left: 0;
    right: 0;
    overflow: auto;
  }

  .ads-list-item {
    height: 50px;
    border-bottom: 1px solid #DDD; 
  }
</style>


<template>
  <div class="ads-list-wrap">

    <div class="ads-list-header">
      <!-- <van-search placeholder="请输入搜索关键词" v-model="search" /> -->

      <van-search
        v-model="search"
        placeholder="请输入搜索关键词"
        show-action
        shape="round"
      >
        <div slot="action" >搜索</div>
      </van-search>
      
    </div>
    
    <div class="ads-list">
      <div class="ads-list-item" v-for="item in list" @click="gotoDetail(item)">
        方案{{item}}
      </div>
    </div>

    <van-button block square type="info" class="bottom-button" @click="add">新增</van-button>
  </div>
  
</template>

<script>
  export default {
    name: 'adseList',
    components: {
      // HelloWorld
    },
    data() {
      return {
        search: "",
        username: "",
        pwd: "",
        list: 20
      }
    },
    methods: {
      gotoDetail(id) {      
        this.$router.push(`/ads/detail/${id}`)
      },
      add() {
        this.$router.push(`/ads/add`)
      }
    },
    created() {
      setDocTitle("方案列表")
    }
  }
</script>
