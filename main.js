const scene = new THREE.Scene();
const aspect = window.innerWidth / window.innerHeight;
const camera = new THREE.OrthographicCamera(-5 * aspect, 5 * aspect, 5,-5,1,1000);
camera.position.z = 10;

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const lineGeometry = new THREE.BufferGeometry().setFromPoints([
    new THREE.Vector3(-3, -2, 0),
    new THREE.Vector3(-3, 2 , 0)
]);

const lineMaterial = new THREE.LineBasicMaterial({ color: 0xD22B2B });

const line2Geometry = new THREE.BufferGeometry().setFromPoints([
    new THREE.Vector3(-2, 2 , 0),
    new THREE.Vector3(2, 2 , 0),
    new THREE.Vector3(2, -2 , 0),
    new THREE.Vector3(-2, -2 , 0),
    new THREE.Vector3(-2, 2 , 0)
    
]);

const line2Material = new THREE.LineBasicMaterial({ color: 0xFFFF00 });


const triangleGeometry = new THREE.BufferGeometry().setFromPoints([
    new THREE.Vector3(3, -2 , 0),
    new THREE.Vector3(6, -2 , 0),
    new THREE.Vector3(4.5 , 2 , 0),
   
   
]);

const triangleMaterial = new THREE.MeshBasicMaterial({ color: 0x0000FF });
const triangle = new THREE.Mesh(triangleGeometry, triangleMaterial);
triangle.position.set(0, 0, 0);
scene.add(triangle);

const squareGeometry = new THREE.PlaneGeometry(1, 1);
const squareMaterial = new THREE.MeshBasicMaterial({ color: 0xFFFF00, side: THREE.DoubleSide });
const square = new THREE.Mesh(squareGeometry, squareMaterial);
square.position.set(0, 0, 0);
scene.add(square);

const line = new THREE.Line(lineGeometry, lineMaterial);
line.position.set(0, 0, 0);
scene.add(line);

const line2 = new THREE.Line(line2Geometry, line2Material);
line2.position.set(0, 0, 0);
scene.add(line2);

renderer.render(scene, camera);



