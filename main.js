const scene = new THREE.Scene();

const camera = new THREE.OrthographicCamera(-5, 5, 5, -5, 1, 1000);
camera.position.z = 10;

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const squareGeometry = new THREE.PlaneGeometry(2.2, 2.2);
const squareMaterial = new THREE.MeshBasicMaterial({
    color: 0xD22B2B
});

const square = new THREE.Mesh(squareGeometry, squareMaterial);
square.position.set(0, 0, 0);

scene.add(square);

renderer.render(scene, camera);