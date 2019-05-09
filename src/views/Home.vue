<template>
  <div class="home">
    <div class="form-edit-wrapper">
      <el-aside>
        <div class="components-list">
          <div class="components-title">
            <div class="text">组件库</div>
          </div>
          <div class="component-item">
            <div class="component-item-title">商城组件</div>
            <draggable
              element="ul"
              :list="storeComponents"
              :options="{
                group: { name: 'widget', pull: 'clone', put: false },
                sort: false,
                ghostClass: 'ghost'
              }"
            >
              <li
                class="component-item-li"
                v-for="(item, index) in storeComponents"
                :key="index"
              >
                <i class="iconfont" :class="item.icon"></i>
                <p class="text">{{ item.name }}</p>
              </li>
            </draggable>
          </div>
        </div>
      </el-aside>

      <div class="center-container">
        <div>
          <Layout></Layout>
        </div>
      </div>

      <div class="edit-body">
        <div class="config-content">
          <layout-config></layout-config>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Draggable from 'vuedraggable'
import Layout from '@/components/layout.vue'
import LayoutConfig from '@/components/layout-config.vue'
import allWidget from 'assets/json/widget.json'
import { mapState } from 'vuex'
export default {
  name: 'home',
  components: { Draggable, Layout, LayoutConfig },
  data() {
    return {
      storeComponents: allWidget.storeComponents
    }
  },
  computed: {
    ...mapState({
      pageData: state => state.common.pageData
    })
  }
}
</script>
<style lang="stylus">
.form-edit-wrapper {
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 0 40px;
  align-items: flex-start;
}

.edit-body {
  width: 400px;
  height: auto;
  min-height: 100px;
  padding: 10px;
  border: 1px solid #e9e9e9;
}

.center-container {
  width: 375px;
  height: 700px;
  border: 1px solid #e9e9e9;
}

.components-list {
  border: 1px solid #e9e9e9;
  padding: 10px;
  text-align: left;
  color: #666;

  .components-title {
    padding: 5px;
    border-bottom: 1px solid #f0f0f0;

    .text {
      padding: 0 10px;
      border-left: 4px solid #FF7159;
    }
  }

  .component-item {
    padding: 10px;

    &-title {
      font-size: 12px;
      color: #999;
      margin-bottom: 12px;
    }

    ul {
      position: relative;
      overflow: hidden;
      padding: 0;
      margin: 0;
    }

    &-li {
      width: calc(33.3% - 10px);
      padding: 5px 0;
      float: left;
      margin: 5px;
      height: 51px;
      text-align: center;
      display: inline-block;
      background-color: #f5f5f5;
      border: 1px solid #ddd;
      font-size: 12px;
      color: #333;
      cursor: pointer;
      transition: all 0.5s;

      .iconfont {
        font-size: 20px !important;
        margin-bottom: 5px;
      }

      .text {
        padding: 0;
        margin: 0;
      }
    }
  }
}
</style>
