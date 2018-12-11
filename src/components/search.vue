<template>
  <!-- 顶部搜索栏 -->
  <div class="nav">
    <i class="iconfont icon-sousuo"></i>
    <input type="text" placeholder="搜索">
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss">
// 自定义变量
$uRed: #fe2c4b;
// 顶部搜索框
.nav {
  padding: 20rpx 16rpx;
  background-color: $uRed;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  box-sizing: border-box;
  z-index: 999;
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
</style>

