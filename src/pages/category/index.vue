<template>
  <div class="category">
    <!-- 顶部搜索框 -->
    <search></search>
    <!-- 分类区域 -->
    <div class="category-box">
      <div class="left">
        <scroll-view>
          <div v-for="item in categoryList" :key="item.cat_id" class="active">
            {{item.cat_name}}
          </div>
        </scroll-view>
      </div>
      <div class="right">
        <scroll-view></scroll-view>
      </div>
    </div>
  </div>  
</template>
<script>
// 导入组件
import search from  "../../components/search";
// 导入hxios
import hxios from "../../utils/index";
export default {
  // 数据
  data:function () {
    return {
      // 分类名称
      categoryList:[],
    }
  },
  // 注册组件
  components:{
    search
  },
  // 声明周期函数
  created() {
    // 获取数据
    hxios.get("api/public/v1/categories").then(res => {
      // console.log(res);
      this.categoryList = res.data.message;
    });
  },
}
</script>
<style>

</style>


