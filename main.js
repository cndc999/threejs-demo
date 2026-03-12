const scene = new THREE.Scene();

const camera = new THREE.OrthographicCamera(-5, 5, 5, -5, 1, 1000);
camera.position.z = 10;

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const lineGeometry = new THREE.BufferGeometry().setFromPoints([
    new THREE.Vector3(-1, -1, 0),
    new THREE.Vector3(1, 1, 0)
]);
const lineMaterial = new THREE.LineBasicMaterial({ color: 0xD22B2B });

const line = new THREE.Line(lineGeometry, lineMaterial);
line.position.set(0, 0, 0);
scene.add(line);

renderer.render(scene, camera);



