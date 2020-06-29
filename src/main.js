import Vue from "vue";
import App from "./App.vue";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import baseMeshCreator from "@/libs/base-mesh-creator.js";

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");

// Our Javascript will go here.
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// var geometry = new THREE.BoxGeometry();
// var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
// var cube = new THREE.Mesh(geometry, material);
// scene.add(cube);

camera.position.z = 5;

camera.lookAt(0, 0, 0);

baseMeshCreator.init(scene);

function render() {
  // cube.rotation.x += 0.01;
  // cube.rotation.y += 0.01;

  requestAnimationFrame(render);
  renderer.render(scene, camera);
}
render();

// 初始化鼠标控制
function setupMouseControls() {
  let controls = new OrbitControls(camera, renderer.domElement);
  controls.maxPolarAngle = Math.PI * 0.5;
  controls.minDistance = 1;
  controls.maxDistance = 100;
  // controls.addEventListener("change", render);
}

setupMouseControls();
