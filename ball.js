import * as THREE from 'three';

const scene = new THREE.Scene();
const aspect = window.innerWidth / window.innerHeight;

const camera = new THREE.OrthographicCamera(-5 * aspect, 5 * aspect, 5, -5, 0.1, 100);
camera.position.z = 10;

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor('#000000');

document.body.appendChild(renderer.domElement);

const geometry = new THREE.CircleGeometry(0.5, 32);
const material = new THREE.MeshBasicMaterial({ color: 0xffff00 });
const ball = new THREE.Mesh(geometry, material);
scene.add(ball);

let velocity = new THREE.Vector2(0.036, 0.018);


function animate() 
{
    requestAnimationFrame(animate);
    ball.position.x += velocity.x;
    ball.position.y += velocity.y;
    if (ball.position.x > 5 || ball.position.x < -5) 
        {  
        velocity.x = -velocity.x;
        }
    if (ball.position.y > 5 || ball.position.y < -5) 
        {
        velocity.y = -velocity.y;
        }

    renderer.render(scene, camera);
}

animate();