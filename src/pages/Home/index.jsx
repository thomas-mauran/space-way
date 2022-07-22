import React from 'react';
import ReactDOM from 'react-dom';

import { useEffect, useState } from 'react';
import SolarSystem from '../../components/SolarSystem';

import styled from 'styled-components';

import colors from '../../utils/style/colors';

const StyledDiv = styled.div`
    canvas {
        height: 1000px;
        border-radius: 50px;
        box-shadow: 2px 2px 2px ${colors.primary};
    }
`;

function Home() {
    const [canvasReady, setCanvasReady] = useState(false);

    useEffect(() => {
        setCanvasReady(true);
    });

    return (
        <StyledDiv>
            {canvasReady ? (
                <SolarSystem className="canvas" />
            ) : (
                <p>Not ready</p>
            )}
        </StyledDiv>
    );
}

// function render() {
//     requestAnimationFrame(render);
// }
// requestAnimationFrame(render);

export default Home;
