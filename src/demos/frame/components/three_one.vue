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
      this.animate();
    },
    methods: {
      init() {
        let container = document.getElementById("container");
        this.camera = new THREE.PerspectiveCamera(
          70,
          container.clientWidth / container.clientHeight,
          0.01,
          10
        );
        this.camera.position.z = 1;
        this.scene = new THREE.Scene();
        let geometry = new THREE.BoxGeometry(0.2, 0.2, 0.2);
        let material = new THREE.MeshNormalMaterial();
        this.mesh = new THREE.Mesh(geometry, material);
        this.scene.add(this.mesh);
        this.renderer = new THREE.WebGLRenderer({ antialias: true });
        this.renderer.setSize(container.clientWidth, container.clientHeight);
        container.appendChild(this.renderer.domElement);
      },
      animate() {
        requestAnimationFrame(this.animate);
        this.mesh.rotation.x += 0.01;
        this.mesh.rotation.y += 0.02;
        this.renderer.render(this.scene, this.camera);
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
