const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setAnimationLoop( animate );
document.body.appendChild( renderer.domElement );

scene.background = new THREE.Color(0x10041c);

let clicks = 0;
document.addEventListener("click", function() {
clicks++;
document.getElementById("contador").innerHTML = "Clics: " + clicks;
});



const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0x009ba3 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

const material1 = new THREE.MeshBasicMaterial( { color: 0xa30039 } );
const cube1 = new THREE.Mesh( geometry, material1 );
scene.add( cube1 );

const material2 = new THREE.MeshBasicMaterial( { color: 0x009ba3 } );
const cube2 = new THREE.Mesh( geometry, material );
scene.add( cube2 );

const material3 = new THREE.MeshBasicMaterial( { color: 0xa30039 } );
const cube3 = new THREE.Mesh( geometry, material1 );
scene.add( cube3 );

const material4 = new THREE.MeshBasicMaterial( { color: 0x009ba3 } );
const cube4 = new THREE.Mesh( geometry, material );
scene.add( cube4 );

const material5 = new THREE.MeshBasicMaterial( { color: 0xa30039 } );
const cube5 = new THREE.Mesh( geometry, material1 );
scene.add( cube5 );

camera.position.z = 5;

function animate() {

  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  cube.position.x = -0.6;
  cube.position.y = -0.6;

  cube1.rotation.x += 0.01;
  cube1.rotation.y += 0.01;
  cube1.position.x = -0.3;
  cube1.position.y = -0.3;

  cube2.rotation.x += 0.01;
  cube2.rotation.y += 0.01;
  cube2.position.x = 0;
  cube2.position.y = 0;

  cube3.rotation.x += 0.01;
  cube3.rotation.y += 0.01;
  cube3.position.x = 0.3;
  cube3.position.y = 0.3;

  cube4.rotation.x += 0.01;
  cube4.rotation.y += 0.01;
  cube4.position.x = 0.6;
  cube4.position.y = 0.6;

  cube5.rotation.x += 0.01;
  cube5.rotation.y += 0.01;
  cube5.position.x = 0.9;
  cube5.position.y = 0.9;


  renderer.render( scene, camera );

}


