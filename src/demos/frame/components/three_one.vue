<template>
  <div class="three-one">
    <div id="circle"></div>
  </div>
</template>
<script>
  import * as THREE from "three";
  export default {
    name: "three_one",
    data() {
      return {
        camera: null,
        scene: null,
        renderer: null,
        group: null
        //mesh: null
      };
    },
    mounted() {
      this.init();
      // this.animate();
    },
    methods: {
      init() {
        let circle = document.getElementById("circle");
        this.camera = new THREE.PerspectiveCamera(
          70,
          circle.clientWidth / circle.clientHeight,
          0.01,
          10
        );
        this.camera.position.z = 1;
        this.scene = new THREE.Scene();
        this.group = new THREE.Group();
        let geometry = new THREE.BoxBufferGeometry(1, 1, 1);
        let material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
        this.getMesh(geometry, material);
        // this.scene.add(this.mesh);
        this.scene.add(this.group);
        this.renderer = new THREE.WebGLRenderer({ antialias: true });
        this.renderer.setSize(circle.clientWidth, circle.clientHeight);
        circle.appendChild(this.renderer.domElement);
      },
      getMesh(geometry, material) {
        let mesh = new THREE.Mesh(geometry, material);
        this.group.add(mesh);
      }
    }
  };
</script>

<style lang="scss">
  .three-one {
    #circle {
      height: 400px;
    }
  }
</style>
