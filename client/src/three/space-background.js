import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import gsap from 'gsap';
// import * as dat from 'dat.gui';

export const camera = new THREE.PerspectiveCamera(75,
    innerWidth / innerHeight,
    0.1,
    1000
);

export function setBackground(canvas) {
    // initial setup
    const raycaster = new THREE.Raycaster();
    const scene = new THREE.Scene();
    const renderer = new THREE.WebGLRenderer({
        canvas
    });

// setup dat gui
// const gui = new dat.GUI();
    const world = {
        plane: {
            width: 400,
            height: 400,
            widthSegments: 50,
            heightSegments: 50
        }
    };
// gui.add(world.plane, 'width', 1, 500).onChange(generatePlane);
// gui.add(world.plane, 'height', 1, 500).onChange(generatePlane);
// gui.add(world.plane, 'widthSegments', 1, 100).onChange(generatePlane);
// gui.add(world.plane, 'heightSegments', 1, 100).onChange(generatePlane);

    function generatePlane() {
        planeMesh.geometry.dispose();
        planeMesh.geometry = new THREE.PlaneGeometry(
            world.plane.width,
            world.plane.height,
            world.plane.widthSegments,
            world.plane.heightSegments
        );

        // randomize vertex position
        const { array } = planeMesh.geometry.attributes.position;
        const randomValues = [];
        for (let i = 0; i < array.length; i++) {

            if (i % 3 === 0) {
                const x = array[i];
                const y = array[i + 1];
                const z = array[i + 2];

                array[i] = x + ((Math.random() - 0.5) * 3);
                array[i + 1] = y + ((Math.random() - 0.5) * 3);
                array[i + 2] = z + ((Math.random() - 0.5) * 3);
            }

            randomValues.push(Math.random() * Math.PI * 2);
        }

        planeMesh.geometry.attributes.position.randomValues = randomValues;
        planeMesh.geometry.attributes.position.originalPosition = planeMesh.geometry.attributes.position.array;

        const colors = [];
        const { count } = planeMesh.geometry.attributes.position;
        for (let i = 0; i < count; i++) {
            colors.push(0, 0.19, 0.4);
        }

        planeMesh.geometry.setAttribute(
            'color',
            new THREE.BufferAttribute(new
            Float32Array(colors), 3)
        );
    }

    renderer.setSize(innerWidth, innerHeight);
    renderer.setPixelRatio(devicePixelRatio);

    const controls = new OrbitControls(camera, renderer.domElement);

    controls.enableZoom = false; // disable zoom

    camera.position.z = 50; // set camera position

    const planeGeometry = new THREE.PlaneGeometry(
        world.plane.width,
        world.plane.height,
        world.plane.widthSegments,
        world.plane.heightSegments
    );

    const planeMaterial = new THREE.MeshPhongMaterial({
        side: THREE.DoubleSide,
        flatShading: true,
        vertexColors: true
    });

    const planeMesh = new THREE.Mesh(
        planeGeometry,
        planeMaterial
    );

// scene.add(planeMesh);

    generatePlane();

    const light = new THREE.DirectionalLight(
        0xffffff,
        1
    );
    light.position.set(0, 1, 1);
    scene.add(light);

    const backLight = new THREE.DirectionalLight(
        0xffffff,
        1
    );
    backLight.position.set(
        0,
        0,
        -1);
    scene.add(backLight);

    const starMaterial = new THREE.PointsMaterial({
        color: 0xffffff
    });
    const starGeometry = new THREE.BufferGeometry();

    const starVertices = [];
    for (let i = 0; i < 10000; i++) {
        const x = (Math.random() - 0.5) * 2000;
        const y = (Math.random() - 0.5) * 2000;
        const z = (Math.random() - 0.5) * 2000;
        starVertices.push(x, y, z);
    }

    starGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starVertices, 3));
    const stars = new THREE.Points(starGeometry, starMaterial);
    scene.add(stars);

    const mouse = {
        x: undefined,
        y: undefined
    };

    let frame = 0;

    function animate() {
        requestAnimationFrame(animate);

        // render scene with camera
        renderer.render(
            scene,
            camera
        );

        raycaster.setFromCamera(mouse, camera);
        frame += 0.01;
        const {
            array,
            originalPosition,
            randomValues
        } = planeMesh.geometry.attributes.position;
        for (let i = 0; i < array.length; i += 3) {
            array[i] = originalPosition[i] + (Math.cos(frame + randomValues[i]) * 0.003);
            array[i + 1] = originalPosition[i + 1] + (Math.sin(frame + randomValues[i + 1]) * 0.003);
        }

        planeMesh.geometry.attributes.position.needsUpdate = true;

        const intersects = raycaster.intersectObject(planeMesh);
        if (intersects.length) {
            const { color } = intersects[0].object.geometry.attributes;
            // vertex 1
            color.setX(intersects[0].face.a, 0.1);
            color.setY(intersects[0].face.a, 0.5);
            color.setZ(intersects[0].face.a, 1);

            // vertex 2
            color.setX(intersects[0].face.b, 0.1);
            color.setY(intersects[0].face.b, 0.5);
            color.setZ(intersects[0].face.b, 1);

            // vertex 3
            color.setX(intersects[0].face.c, 0.1);
            color.setY(intersects[0].face.c, 0.5);
            color.setZ(intersects[0].face.c, 1);

            intersects[0].object.geometry.attributes.color.needsUpdate = true;

            const initialColor = { r: 0, g: 0.19, b: 0.4 };
            const hoverColor = { r: 0.1, g: 0.5, b: 1};
            gsap.to(hoverColor, {
                r: initialColor.r,
                g: initialColor.g,
                b: initialColor.b,
                onUpdate: () => {
                    // vertex 1
                    color.setX(intersects[0].face.a, hoverColor.r);
                    color.setY(intersects[0].face.a, hoverColor.g);
                    color.setZ(intersects[0].face.a, hoverColor.b);

                    // vertex 2
                    color.setX(intersects[0].face.b, hoverColor.r);
                    color.setY(intersects[0].face.b, hoverColor.g);
                    color.setZ(intersects[0].face.b, hoverColor.b);

                    // vertex 3
                    color.setX(intersects[0].face.c, hoverColor.r);
                    color.setY(intersects[0].face.c, hoverColor.g);
                    color.setZ(intersects[0].face.c, hoverColor.b);

                    color.needsUpdate = true;
                }
            });
        }
        stars.rotation.x += 0.0005;
    }

    animate();

    addEventListener('mousemove', (event) => {
        mouse.x = ((event.clientX / innerWidth) * 2) - 1;
        mouse.y = (-(event.clientY / innerHeight) * 2) + 1;
    });

    function resizeCanvas(options = {}) {
        let {
            height,
            width = innerWidth
        } = options;
        height = Math.min(height, innerHeight);
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        // console.log('resizing to: ', height);
        renderer.setSize(width, height);
    }

    addEventListener('resize', resizeCanvas);

    return {
        renderer,
        resizeCanvas
    }
}

// document.querySelector('#primary-cta').addEventListener('click', (e) => {
//     e.preventDefault();
//     gsap.to('#container', {
//         opacity: 0
//     });
//     gsap.to(camera.position, {
//         z: 25,
//         ease: 'power3.inOut',
//         duration: 2
//     });
//     gsap.to(camera.rotation, {
//         x: Math.PI / 2,
//         ease: 'power3.inOut',
//         duration: 2
//     });
//     gsap.to(camera.position, {
//         y: 1000,
//         ease: 'power3.in',
//         duration: 2,
//         delay: 2,
//         onComplete: () => {
//             this.$router.push('/work');
//         }
//     });
// });