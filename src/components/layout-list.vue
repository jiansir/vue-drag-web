<template>
  <Draggable
    v-model="pageData[list]"
    :options="{
      group: 'widget',
      ghostClass: 'ghost',
      swapThreshold: 0.5,
      animation: 100
    }"
    @add="handleWidgetAdd"
    class="layout-list"
    :class="{ 'widget-empty': pageData[list].length === 0 }"
  >
    <template v-for="(item, index) in pageData[list]">
      <div
        class="layout-main"
        :key="item.key"
        :class="{ active: selectWg.key === item.key }"
        @click="handleSelectWidget(index)"
      >
        <!-- 输入框 -->
        <div
          v-if="item.type === 'input'"
          class="lay-item"
          :class="[
            item.label.labelPosition === 'top' ? 'flex-column' : 'align-middle'
          ]"
          :style="item.style"
        >
          <div
            class="lay-title"
            :style="{ width: item.label.labelWidth }"
            v-show="item.showLabel"
          >
            {{ item.label.labelTitle }}
          </div>
          <div class="flex-auto">
            <input
              v-model="item.value"
              :placeholder="item.placeholder"
              class="lay-input"
            />
          </div>
        </div>
      </div>
    </template>
  </Draggable>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Draggable from "vuedraggable";
export default {
  components: { Draggable },
  props: {},
  data() {
    return {};
  },
  watch: {},
  computed: {
    ...mapState({
      pageData: state => state.common.pageData
    })
  },
  methods: {
    ...mapActions(["setPageData", "setSelectWg"]),
    handleWidgetAdd(evt) {
      console.log(evt);
    }
  },
  created() {},
  mounted() {}
};
</script>
<style lang="stylus" scoped>
input::-webkit-input-placeholder {
  color: #666;
  opacity: 1;
}
.layout-list {
  min-height: 400px;
  .layout-main {
    padding: 5px 10px;
    position: relative;
    &:after {
      content: "";
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      top: 0;
      display: block;
      z-index: 1001;
    }
    &:hover {
      background: #ecf5ff;
    }
    &.active {
      background: $primary-background-color;
      // box-shadow: 0px 1px 10px 1px #90c7ff;
      z-index: 1111;
    }
    .lay-item {
      display: flex;
      line-height: 50px;
    }
    .lay-input {
      width: 100%;
      height: 40px;
      margin: 5px 0;
      color: #666;
      font-size: 14px;
      border-radius: 4px;
      border: 1px solid #ddd;
      outline: none;
      text-indent: 10px;
      transition: 0.3s;
    }
    .lay-title {
      font-size: 14px;
      margin-right: 10px;
      color: #333;
    }
  }
  .ghost {
    background: #fff;
    border: 1px dashed $pri-color;
    &::after {
      background: #fff;
    }
  }
  li.ghost {
    position: relative;
    line-height: 30px;
    list-style: none;
    font-size: 0;

    &::after {
      content: "放到这里";
      display: block;
      background: #fff;
      position: absolute;
      left: 50%;
      margin-left: -32px;
      top: 0;
      font-size: 16px;
      color: #999;
      z-index: 10;
    }
  }
}
</style>
