<template>
  <div v-if="this.selectWg&& Object.keys(this.selectWg).length > 0">
    <div class="costom-item main-body" id="editbody">
      <el-form ref="form" label-width="100px">
        <div class="costom-item-t">
          <div class="costom-item-t-c">{{selectWg.name}} </div>
        </div>
        <template v-if="selectWg.type=='input'">
          <el-form-item label="提示内容">
            <el-input v-model="selectWg.value" :placeholder="selectWg.placeholder"></el-input>
          </el-form-item>
          <el-form-item label="搜索框样式">
            <el-radio-group v-model="selectWg.style.borderRadius">
              <el-radio label="0">方形</el-radio>
              <el-radio label="4px">圆角</el-radio>
              <el-radio label="18px">圆弧</el-radio>
            </el-radio-group>
          </el-form-item>
        </template>
        <template v-if="selectWg.type=='imgSlide'">
          <div>
            <draggable element="ul" :list="selectWg.value" :options="{group:{ name:'slideList'}, ghostClass: 'ghost'}">
              <li v-for="(item, index) in selectWg.value" :key="index" style="border:1px dashed #999">
                <div class="content">
                  <div class="content-item">
                    <span class="item-label">图片:</span>
                    <ImgUpload :value.sync="item.image"/>
                    <div class="handle-icon">
                      <i class="el-icon-menu move-icon"></i>
                      <i class="el-icon-delete delect-icon" @click="handleSlideRemove(index)"></i>
                    </div>
                  </div>
                  <div class="content-item">
                    <span class="item-label">图片地址：</span>
                    <el-input size="mini" placeholder="请输入图片地址" v-model="item.image"></el-input>
                  </div>
                  <div class="content-item">
                    <span class="item-label">跳转地址：</span>
                    <el-input size="mini" placeholder="请输入跳转地址" v-model="item.url"></el-input>
                  </div>
                </div>
              </li>
              <div class="addImg" @click="handleAddSlide">
                添加图片
              </div>
            </draggable>
          </div>
        </template>
      </el-form>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import Draggable from 'vuedraggable'
export default {
  name: 'LayoutConfig',
  data() {
    return {}
  },
  components: {
    Draggable
  },
  computed: {
    ...mapState({
      selectWg: state => state.common.selectWg
    })
  },
  methods: {
    handleSlideRemove(index) {
      this.selectWg.value.splice(index, 1)
    },
    handleAddSlide() {
      this.selectWg.value.push({
        url: '',
        image: ''
      })
    }
  }
}
</script>
<style lang="stylus">
.content {
  padding: 10px;

  &-item {
    position: relative;
    display: flex;
    margin-bottom: 15px;

    .item-label {
      width: 90px;
    }

    .el-input {
      flex: 1;
    }

    .handle-icon {
      position: absolute;
      right: 0;
      top: 0;

      .move-icon {
        font-size: 20px;
        color: #999;
        margin: 0 10px;
        cursor: move;

        &:hover {
          color: #ff7159;
        }
      }

      .delect-icon {
        font-size: 20px;
        color: #999;
        margin-left: 5px;
        cursor: pointer;

        &:hover {
          color: #ff7159;
        }
      }
    }
  }
}

.addImg {
  width: 100%;
  height: 32px;
  line-height: 32px;
  text-align: center;
  border: 1px solid #efefef;
  margin-top: 15px;
  cursor: pointer;

  &:hover {
    color: #ff7159;
  }
}

.costom-item {
  &-t {
    padding: 5px;
    border-bottom: 1px solid #f0f0f0;
    margin-bottom: 15px;

    &-c {
      padding: 0 10px;
      border-left: 4px solid #FF7159;
      text-align: left;
    }
  }

  .layui-form-label {
    box-sizing: content-box;
  }
}
</style>