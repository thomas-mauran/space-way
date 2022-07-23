import React from 'react';
import ReactDOM from 'react-dom';

import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera } from '@react-three/drei';

import { OrbitControls, Stars } from '@react-three/drei';

import Earth from '../Earth';
import Sun from '../Sun';
import Shatered_planet from '../Shatered_planet';
import Earth2 from '../Earth2';
import Planet from '../Planet';

let assetList = [];

let numberOfAssets = 3;

const earth2_stats = {
    size: 0.5,
    skin: 'earth2',
    initPosition: [0, -1.5, 0],
};

const earth_stats = {
    size: 0.001,
    skin: 'earth',
    initPosition: [0, 0, 0],
};

const shatered_planet_stats = {
    size: 0.007,
    skin: 'shatered_planet',
    initPosition: [0, 0, 0],
};

assetList.push(earth_stats);
assetList.push(earth2_stats);
assetList.push(shatered_planet_stats);

let assetsTab = [];

for (let i = numberOfAssets; i > 0; i--) {
    let r = Math.floor(Math.random() * i);
    assetsTab.push(assetList[r]);
    assetList.splice(r, 1);
    console.log(r);
}

console.log(assetsTab);

function SolarSystem() {
    return (
        <Canvas>
            <OrbitControls enableZoom={true} />
            {/* <rectAreaLight
                width={35}
                height={35}
                intensity={10}
                color={'red'}
                position={[0, 0, 3]}
                rotation={[0, 0, 0]}
                castShadow
            /> */}

            <ambientLight />
            <Sun castShadow={false} />

            <Planet
                // skin={assetsTab[0].skin}
                skin={assetsTab[0].skin}
                size={assetsTab[0].size}
                position={assetsTab[0].initPosition}
                rayon={5}
            />

            <Planet
                // skin={assetsTab[1].skin}
                skin={assetsTab[1].skin}
                size={assetsTab[1].size}
                position={assetsTab[1].initPosition}
                rayon={10}
            />

            <Planet
                // skin={assetsTab[1].skin}
                skin={assetsTab[2].skin}
                size={assetsTab[2].size}
                position={assetsTab[2].initPosition}
                rayon={15}
            />

            <Stars />
            {/* <mesh rotation={[90, 0, 20]}>
                <boxBufferGeometry attach="geometry" args={[3, 5, 3]} />
                <meshLambertMaterial attach="material" color="blue" />
            </mesh> */}
        </Canvas>
    );
}

export default SolarSystem;
