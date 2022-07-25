import React, { useEffect } from 'react';
import { useLoader, useFrame } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

import { Mesh } from 'three';

function Planet(props) {
    let rayon = props.rayon;
    let time = Math.floor(Math.random() * 100);
    let r = Math.random();
    let speed = (Math.random() / 100) * (r > 0.5 ? -1 : 1);

    let turnWithY = false;
    if (r > 0.5) {
        turnWithY = true;
    }

    let xInitPos = props.position[0];
    let yInitPos = props.position[1];
    let zInitPos = props.position[2];

    let { skin, size } = props;

    const gltf = useLoader(
        GLTFLoader,
        process.env.PUBLIC_URL + '/models/' + skin + '/scene.gltf'
    );

    useEffect(() => {
        gltf.scene.scale.set(size, size, size);
        gltf.scene.position.set(xInitPos, yInitPos, zInitPos);
        gltf.scene.traverse((object) => {
            if (object instanceof Mesh) {
                object.castShadow = true;
                object.receiveShadow = true;
                object.material.envMapIntensity = 20;
            }
        });
    }, [gltf]);

    useFrame(() => {
        // La rotation sur soi même
        gltf.scene.rotation.x += 0.005;

        if (r < 0.3) {
            gltf.scene.position.x = rayon * Math.cos(time);
            gltf.scene.position.y = rayon * Math.sin(time);
            gltf.scene.rotation.z += 0.01;
        } else if (r < 0.6 && r > 0.3) {
            gltf.scene.position.x = rayon * Math.cos(time);
            gltf.scene.position.z = rayon * Math.sin(time);
            gltf.scene.rotation.y += 0.01;
        } else {
            gltf.scene.position.y = rayon * Math.cos(time);
            gltf.scene.position.z = rayon * Math.sin(time);
            gltf.scene.rotation.x += 0.01;
        }

        time += speed;
    });

    return <primitive object={gltf.scene} />;
}

export default Planet;
