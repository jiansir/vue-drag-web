<template>
  <Draggable v-model="pageData[list]" :options="{
      group: 'widget',
      ghostClass: 'ghost',
      swapThreshold: 0.5,
      animation: 100
    }" @add="handleWidgetAdd" class="layout-list" :class="{ 'widget-empty': pageData[list].length === 0 }">
    <template v-for="(item, index) in pageData[list]">
      <div class="layout-main" :key="item.key" :class="{ active: selectWg.key === item.key}"
        @click="handleSelectWidget(index)">
        <!-- 输入框 -->
        <div v-if="item.type === 'input'" class="lay-item lay-search">
          <div class="lay-search-c">
            <input v-model="item.value" :placeholder="item.placeholder" class="lay-search-input" :style="item.style" />
            <i :class="item.icon"></i>
          </div>
        </div>
        <!-- 图片轮播 -->
        <div v-if="item.type==='imgSlide'" class="lay-item lay-imgSlide">
          <el-carousel :interval="3000" arrow="never" :autoplay="false">
            <el-carousel-item v-for="(list,key) in item.value" :key="key">
              <img  :src="list.image" alt="banner" style="width:100%;height:100%">
            </el-carousel-item>
          </el-carousel>
        </div>
        <div @click.stop="handleWidgetDelete(index)" class="btn-delete" v-if="selectWg.key === item.key">删除</div>
        <div @click.stop="handleWidgetClone(index)" class="btn-clone" v-if="selectWg.key === item.key">复制</div>
      </div>
    </template>
  </Draggable>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import Draggable from 'vuedraggable'
export default {
  components: { Draggable },
  props: {
    list: String
  },
  data() {
    return {}
  },
  watch: {},
  computed: {
    ...mapState({
      pageData: state => state.common.pageData,
      selectWg: state => state.common.selectWg
    })
  },
  methods: {
    ...mapActions(['setPageData', 'setSelectWg']),
    handleWidgetAdd(evt) {
      const newIndex = evt.newIndex
      const elKey = Date.now() + '_' + Math.ceil(Math.random() * 1000000)
      let newObj = this.$util.deepClone(this.pageData[this.list][newIndex])
      newObj.key = this.pageData[this.list][newIndex].type + '_' + elKey
      this.$set(this.pageData[this.list], newIndex, newObj)
      this.setSelectWg(this.pageData[this.list][newIndex])
    },
    handleSelectWidget(index) {
      this.setSelectWg(this.pageData[this.list][index])
    },
    handleWidgetDelete(index) {
      if (this.pageData[this.list].length - 1 === index) {
        if (index === 0) {
          this.setSelectWg([])
        } else {
          this.setSelectWg(this.pageData[this.list][index - 1])
        }
      } else {
        this.setSelectWg(this.pageData[this.list][index + 1])
      }
      this.$nextTick(() => {
        this.pageData[this.list].splice(index, 1)
      })
    },
    handleWidgetClone(index) {
      let cloneData = this.$util.deepClone(this.pageData[this.list][index])
      cloneData.key =
        this.pageData[this.list][index].type +
        '_' +
        Date.now() +
        '_' +
        Math.ceil(Math.random() * 1000000)
      this.pageData[this.list].splice(index, 0, cloneData)
      this.$nextTick(() => {
        this.setSelectWg(this.pageData[this.list][index + 1])
      })
      console.log(this.pageData)
    }
  },
  created() {},
  mounted() {
    // console.log(this.$util.parseUA())
  }
}
</script>
<style lang="stylus" scoped>
input::-webkit-input-placeholder {
  color: #666;
  opacity: 1;
}

.layout-list {
  min-height: 400px;

  .layout-main {
    position: relative;

    &:after {
      content: '';
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
      border: 2px dashed #FF7159;
      z-index: 1111;
    }

    .lay-item {
      display: flex;
    }

    .lay-imgSlide {
      .el-carousel {
        overflow: hidden !important;
        width: 100%;
        height: 200px !important;
      }
    }

    .el-carousel__container {
      height: 200px !important;
    }

    .el-carousel__item {
      height: 200px !important;
    }

    .lay-search {
      width: 100%;
      height: 50px;
      padding: 7px 13px;

      &-c {
        width: 100%;
        height: 100%;
        position: relative;
      }

      &-input {
        width: 100%;
        height: 100%;
        border-radius: 50px;
        background-color: #E9E9E9;
        border: none;
        padding: 0 15px;
        color: #999;
        cursor: move;
      }

      .el-icon-search {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: 15px;
        color: #999;
        font-size: 18px !important;
      }
    }

    .btn-clone {
      position: absolute;
      height: 18px;
      line-height: 18px;
      right: 50px;
      bottom: 2px;
      z-index: 90;
      width: 36px;
      text-align: center;
      font-size: 10px;
      color: #fff;
      background: #409EFF;
      cursor: pointer;
      z-index: 1010;
    }

    .btn-delete {
      position: absolute;
      height: 18px;
      line-height: 18px;
      right: 2px;
      bottom: 2px;
      z-index: 90;
      width: 36px;
      text-align: center;
      font-size: 10px;
      color: #fff;
      background: rgba(0, 0, 0, 0.4);
      cursor: pointer;
      z-index: 1010;
    }
  }

  .ghost {
    background: #fff;
    border: 1px dashed #409EFF;

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
      content: '放到这里';
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