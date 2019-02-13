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
        mesh: null
      };
    },
    mounted() {
      this.init();
      this.animate();
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
        var geometry = new THREE.CircleGeometry(0.2, 32);
        var material = new THREE.MeshNormalMaterial();
        this.mesh = new THREE.Mesh(geometry, material);
        this.scene.add(this.mesh);
        this.renderer = new THREE.WebGLRenderer({ antialias: true });
        this.renderer.setSize(circle.clientWidth, circle.clientHeight);
        circle.appendChild(this.renderer.domElement);
      },
      animate() {
        requestAnimationFrame(this.animate);
        this.mesh.rotation.x += 0.01;
        this.mesh.rotation.y += 0.02;
        // let clock = new THREE.Clock(); //时间跟踪
        // //圆周运动
        // let time = clock.getElapsedTime() * 1;
        // this.mesh.position.x = Math.cos(time) * 10;
        // this.mesh.position.y = Math.sin(time) * 10;
        // console.log(time);
        this.renderer.render(this.scene, this.camera);
      }
    }
  };
</script>

<style lang="scss">
  .three-one {
    #circle {
      //   display: block;
      //   width: 20px;
      //   height: 20px;
      //   border-radius: 50%;
      //   background: $theme-color;
      height: 400px;
    }
  }
</style>
