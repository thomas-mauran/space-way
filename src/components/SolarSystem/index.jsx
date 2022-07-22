import React from 'react';
import ReactDOM from 'react-dom';

import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera } from '@react-three/drei';

import { OrbitControls, Stars } from '@react-three/drei';

import Earth from '../Earth';

function SolarSystem() {
    return (
        <Canvas>
            <OrbitControls enableZoom={false} />
            <ambientLight itensity={0.5} />
            <Earth />
            <Stars />
            <directionalLight position={[-2, 5, 2]} intensity={1} />
            {/* <mesh rotation={[90, 0, 20]}>
                <boxBufferGeometry attach="geometry" args={[3, 5, 3]} />
                <meshLambertMaterial attach="material" color="blue" />
            </mesh> */}
        </Canvas>
    );
}

export default SolarSystem;
