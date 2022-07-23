import React, { useEffect } from 'react';
import { useLoader, useFrame } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

import { Mesh } from 'three';

function Earth() {
    let rayon = 3;
    let time = 0;
    let speed = 0.01;

    const gltf = useLoader(
        GLTFLoader,
        process.env.PUBLIC_URL + '/models/earth/scene.gltf'
    );

    useEffect(() => {
        gltf.scene.scale.set(0.0002, 0.0002, 0.0002);
        gltf.scene.position.set(0, 0, -3);
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
        gltf.scene.rotation.y += 0.01;

        time += speed;

        gltf.scene.position.x = rayon * Math.cos(time);
        gltf.scene.position.z = rayon * Math.sin(time);
    });

    return <primitive object={gltf.scene} />;
}

export default Earth;
