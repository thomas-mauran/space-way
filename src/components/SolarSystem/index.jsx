import React from 'react';

import { Canvas } from '@react-three/fiber';

import { OrbitControls, Stars } from '@react-three/drei';

import Sun from '../Sun';
import Planet from '../Planet';

let assetList = [];

let numberOfAssets = 5;

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

const purple_planet = {
    size: 0.5,
    skin: 'purple_planet',
    initPosition: [0, 0, 0],
};

const saturn = {
    size: 0.3,
    skin: 'saturn',
    initPosition: [0, 0, 0],
};

assetList.push(earth_stats);
assetList.push(earth2_stats);
assetList.push(shatered_planet_stats);
assetList.push(purple_planet);
assetList.push(saturn);

let assetsTab = [];

for (let i = numberOfAssets; i > 0; i--) {
    let r = Math.floor(Math.random() * i);
    assetsTab.push(assetList[r]);
    assetList.splice(r, 1);
}

function SolarSystem() {
    return (
        <Canvas camera={{ position: [0, 5, 10] }}>
            <ambientLight intensity={0.3} />

            <pointLight intensity={2} />
            <Sun />

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
                size={assetsTab[1].size * 1.5}
                position={assetsTab[1].initPosition}
                rayon={10}
            />

            <Planet
                // skin={assetsTab[1].skin}
                skin={assetsTab[2].skin}
                size={assetsTab[2].size * 1.5}
                position={assetsTab[2].initPosition}
                rayon={20}
            />

            <Planet
                // skin={assetsTab[1].skin}
                skin={assetsTab[3].skin}
                size={assetsTab[3].size * 2}
                position={assetsTab[3].initPosition}
                rayon={30}
            />

            <Planet
                // skin={assetsTab[1].skin}
                skin={assetsTab[4].skin}
                size={assetsTab[4].size * 2}
                position={assetsTab[4].initPosition}
                rayon={40}
            />

            <Stars />
            <OrbitControls autoRotate enableZoom />
        </Canvas>
    );
}

export default SolarSystem;
