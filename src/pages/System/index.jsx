import React from 'react';

import styled from 'styled-components';

import SolarSystem from '../../components/SolarSystem';

import { useEffect, useState } from 'react';

const StyledDiv = styled.div`
    width: 100%;
    height: 87vh;
`;

function System() {
    const [canvasReady, setCanvasReady] = useState(false);

    useEffect(() => {
        setCanvasReady(true);
    });

    return (
        <StyledDiv>
            {canvasReady ? <SolarSystem /> : <p>Not ready</p>}
        </StyledDiv>
    );
}

export default System;
