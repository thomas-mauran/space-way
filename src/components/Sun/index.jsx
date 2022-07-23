import React, { useEffect } from 'react';
import { useLoader, useFrame } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

import { Mesh } from 'three';

function Sun() {
    const gltf = useLoader(
        GLTFLoader,
        process.env.PUBLIC_URL + '/models/sun/scene.gltf'
    );

    useEffect(() => {
        gltf.scene.scale.set(1, 1, 1);
        gltf.scene.traverse((object) => {
            if (object instanceof Mesh) {
                object.castShadow = true;
                object.receiveShadow = true;
                object.material.envMapIntensity = 20;
            }
        });
    }, [gltf]);

    useFrame(() => {
        gltf.scene.rotation.y += 0.001;
    });
    return <primitive object={gltf.scene} />;
}

export default Sun;
