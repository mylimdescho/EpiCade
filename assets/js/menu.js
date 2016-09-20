  var camera;
  var scene;
  var renderer;
  var mesh;
  var mesh2;

  init();
  animate();

  function init() {

      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 1, 1000);

      var light = new THREE.DirectionalLight( 0xffffff );
      light.position.set( 0, 1, 1 ).normalize();
      scene.add(light);

      var geometry = new THREE.CubeGeometry( 50, 10, 10);
      //var material = new THREE.MeshPhongMaterial( { ambient: 0x050505, color: 0x0033ff, specular: 0x555555, shininess: 30 } );

      var material = new THREE.MeshPhongMaterial( { map: THREE.ImageUtils.loadTexture('Gridround.png') } )
      mesh = new THREE.Mesh(geometry, material );
      mesh.position.z = -50;
      mesh.position.x = -25;

      mesh2 = new THREE.Mesh(geometry, material );;
      mesh2.position.z = -50;
      mesh2.position.x = 25;
      scene.add( mesh );
      scene.add(mesh2);

      renderer = new THREE.WebGLRenderer();
      renderer.setSize( window.innerWidth, window.innerHeight );
      document.body.appendChild( renderer.domElement );

      window.addEventListener( 'resize', onWindowResize, false );
      window.addEventListener('keydown',onDocumentKeyDown,false);
      render();
  }

  function animate() {


      render();
      requestAnimationFrame( animate );
  }

  function render() {
      renderer.render( scene, camera );
  }

  function onWindowResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize( window.innerWidth, window.innerHeight );
      render();
  }

  function onDocumentKeyDown (event) {
      console.log(event.keyCode);
      switch(event.keyCode) {
        case 37 :
          mesh.position.x -= 1;
          break;
        case 39 :
          mesh.position.x += 1;
          break;
        case 38 :
          mesh.position.y += 1;
          break;
        case 40 :
          mesh.position.y -= 1;
          break;
      }
  }
