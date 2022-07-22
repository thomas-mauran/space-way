import React, { useEffect } from 'react';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

import { Mesh } from 'three';

function Earth() {
    const gltf = useLoader(
        GLTFLoader,
        process.env.PUBLIC_URL + '/models/earth/scene.gltf'
    );

    useEffect(() => {
        gltf.scene.scale.set(0.0005, 0.0005, 0.0005);
        gltf.scene.position.set(0, 0, -2);
        gltf.scene.traverse((object) => {
            if (object instanceof Mesh) {
                object.castShadow = true;
                object.receiveShadow = true;
                object.material.envMapIntensity = 20;
            }
        });
    }, [gltf]);

    return <primitive object={gltf.scene} />;
}

export default Earth;
