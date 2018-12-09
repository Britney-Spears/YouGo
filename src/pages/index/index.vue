<template>
  <div class="index">
    <!-- 顶部搜索栏 -->
    <div class="nav">
      <i class="iconfont icon-sousuo"></i>
      <input type="text" placeholder="搜索">
    </div>
    <!-- 轮播图 -->
    <swiper
      indicator-dots
      autoplay
      circular
      class="swiper"
    >
      <swiper-item v-for="(item, index) in swiperList" :key="index">
        <img mode="aspectFill" :src="item.image_src"/>
      </swiper-item>
    </swiper>
  </div>
</template>
<script>
// 导入自己写的模块
import hxios from "../../utils/index";
export default {
  // 数据
  data: function() {
    return {
      swiperList: []
    };
  },
  // 获取数据
  created() {
    // 发起请求
    hxios.get("api/public/v1/home/swiperdata").then(res => {
      // console.log(res);
      this.swiperList = res.data.message;
    });
  }
};
</script>
<style lang="scss">
// 自定义变量
$uRed: #fe2c4b;
// 给顶部设置一个padding-top
.index{
  padding-top: 100rpx;
}
.nav {
  padding: 20rpx 16rpx;
  background-color: $uRed;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  box-sizing: border-box;
  input {
    background-color: white;
    height: 60rpx;
    text-align: center;
    color: #bbb;
    font-size: 24rpx;
  }
  .icon-sousuo {
    font-size: 32rpx;
    color: #bbb;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-200%, -55%);
  }
}
// 轮播图
.swiper {
  img{
    width: 100%;
  }
}
</style>


