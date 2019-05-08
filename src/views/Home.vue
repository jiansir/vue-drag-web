<template>
  <div class="home">
    <el-container>
      <div class="form-edit-wrapper">
        <el-aside>
          <div class="components-list">
            <div class="components-title">
              <div class="text">
                组件库
              </div>
            </div>
            <div class="component-item">
              <div class="component-item-title">商城组件</div>
              <draggable
                element="ul"
                :list="storeComponents"
                :options="{group:{ name:'widget', pull:'clone',put:false},sort:false, ghostClass: 'ghost'}"
              >
              <li class="component-item-li" v-for="(item, index) in storeComponents" :key="index">
                <i class="iconfont" :class="item.icon"></i>
                <p class="text">{{item.name}}</p>
              </li>
              </draggable>
            </div>
          </div>
        </el-aside>

        <el-container class="center-container" direction="vertical">
          <!-- <el-header class="btn-bar" style="height: 45px;">
            <el-button type="text" size="medium" icon="el-icon-refresh" @click="handleReset()" class="mg-r15">重置</el-button>
            <el-button type="text" size="medium" icon="el-icon-view" @click="handlePreview()" class="mg-r15">预览</el-button>
            <el-button type="text" size="medium" icon="el-icon-document" @click="handleSave()" class="mg-r15">保存</el-button>
          </el-header> -->
          <el-main>
            <!-- <widget-form></widget-form> -->
          </el-main>
        </el-container>

        <!-- <el-aside class="widget-config-container" style="min-width:300px;width:20vw">
          <el-container>
            <el-header height="45px" class="flex">
              <div class="config-tab flex-auto" :class="{active: configTab=='widget'}" @click="handleConfigSelect('widget')">字段属性</div>
              <div class="config-tab flex-auto" :class="{active: configTab=='page'}" @click="handleConfigSelect('page')">页面属性</div>
            </el-header>
            <el-main class="config-content">
              <widget-config v-show="configTab=='widget'"></widget-config>
              <page-config v-show="configTab=='page'"></page-config>
            </el-main>
          </el-container>
        </el-aside> -->
      </div>
    </el-container>
  </div>
</template>

<script>
import Draggable from 'vuedraggable'
import allWidget from 'assets/json/widget.json'
export default {
  name: 'home',
  components: { Draggable },
  data() {
    return {
      storeComponents: allWidget.storeComponents
    }
  }
}
</script>
<style lang="stylus">
.form-edit-wrapper {
  display: flex;
  width: 100%;
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

