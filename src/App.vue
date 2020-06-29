<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <i-menu :list="createList"></i-menu>
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
import menu from "@/components/menu.vue";
import baseMeshCreator from "@/libs/base-mesh-creator.js";

export default {
  name: "App",
  components: {
    // HelloWorld,
    iMenu: menu
  },
  computed: {
    createList() {
      return [
        {
          label: "立方体",
          onClick: () => baseMeshCreator.createBox()
        },
        {
          label: "平面",
          onClick: () => baseMeshCreator.createPlane()
        },
        {
          label: "球",
          onClick: () => baseMeshCreator.createSphere()
        },
        {
          label: "圆柱体",
          onClick: () => baseMeshCreator.createCylinder()
        },
        {
          label: "锥体",
          onClick: () => baseMeshCreator.createCone()
        },
        {
          label: "圆环",
          onClick: () => baseMeshCreator.createTorus()
        }
      ];
    }
  }
};
</script>

<style lang="scss">
body {
  margin: 0;
}

canvas {
  display: block;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  // margin-top: 60px;
}
</style>
