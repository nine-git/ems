<template>
  <div>
    <div>我的邮寄办件业务</div>
    <div v-if="postData.length"><p>我要邮寄办件</p></div>
    <div v-else>你还没有需要邮寄的办件业务</div>
  </div>
</template>

<script>
export default {
  name: "MinePost",
  data(){
    return{
      postData:[],
    }
  },
  mounted() {
    //这里请求数据
    this.postData=[]
  }
}
</script>

<style scoped lang="less">

</style>
