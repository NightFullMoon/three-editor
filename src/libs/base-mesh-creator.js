// 用于创建基础的网格模型
import * as THREE from "three";

export default {
  scene: null,
  init(scene) {
    this.scene = scene;
  },

  // 创建立方体
  createBox() {
    this.addGeometryToScene(new THREE.BoxGeometry());
  },

  // 创建平面
  createPlane() {
    this.addGeometryToScene(new THREE.PlaneGeometry());
  },

  // 创建球
  createSphere() {
    this.addGeometryToScene(new THREE.SphereGeometry());
  },
  // 创建圆柱体
  createCylinder() {
    this.addGeometryToScene(new THREE.CylinderGeometry());
  },
  // 创建锥体
  createCone() {
    this.addGeometryToScene(new THREE.ConeGeometry());
  },
  // 创建圆环
  createTorus() {
    this.addGeometryToScene(new THREE.TorusGeometry());
  },

  // 由几何体创建网格并加入场景
  addGeometryToScene(geometry) {
    var material = new THREE.MeshBasicMaterial({ color: 0x156289 });
    var cube = new THREE.Mesh(geometry, material);
    this.scene.add(cube);

    // 为其添加线框
    var lineMaterial = new THREE.LineBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.5
    });
    this.scene.add(new THREE.LineSegments(geometry, lineMaterial));
  }
};
