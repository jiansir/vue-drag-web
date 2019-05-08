<template>
  <div class="wrapper">
    <div class="container">
      <layout-list></layout-list>
    </div>
  </div>
</template>

<script>
import LayoutList from "./layout-list.vue";
export default {
  components: { LayoutList },
  props: {},
  data() {
    return {};
  },
  watch: {},
  computed: {},
  methods: {},
  created() {},
  mounted() {}
};
</script>
<style lang="stylus" scoped>
.wrapper {
  width: 414px;
  border:1px solid $pri-color;
}
</style>
