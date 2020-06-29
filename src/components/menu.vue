<template>
  <ul class="menu">
    <li v-for="(item, index) in list" :key="index" @click="item.onClick">
      {{ item.label }}
    </li>
  </ul>
</template>

<script>
/**
 * @typedef {Menu} 菜单对象
 * @prop {string} label - 显示出来的文本
 * @prop {function} onClick - 点击时的操作
 */
export default {
  props: {
    list: {
      type: Array,
      default: () => []
    }
  }
};
</script>

<style lang="scss">
.menu {
  list-style: none;
  background-color: white;
  position: fixed;
  top: 16px;
  left: 16px;
  border-radius: 4px;
  padding-left: 0;
  li {
    font-size: 13px;
    padding: 4px 8px;
    color: #666;
    cursor: pointer;
  }
}
</style>
