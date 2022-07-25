import React from 'react';
import ReactDOM from 'react-dom';

import { Link } from 'react-router-dom';

import { useEffect, useState } from 'react';
import SolarSystem from '../../components/SolarSystem';

import styled from 'styled-components';

import colors from '../../utils/style/colors';

const StyledDiv = styled.div`
    display: flex;
    flex-direction: row;

    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
`;

const StyledCanvasDiv = styled.div`
    margin-top: 30px;
    width: 80%;
    height: 80vh;
    background-color: black;
    border-radius: 30px;
`;

const StyledTitle = styled.h1`
    text-align: right;
    width: 900px;
    position: absolute;
    top: 200px;
    right: 200px;
    font-size: 8em;
    font-weight: 800;
    z-index: 2;
    text-shadow: 3px 3px ${colors.secondary};
`;

const StyledLinkToFullscreen = styled(Link)`
    color: black;
    position: absolute;
    right: 20%;
    bottom: 30%;
    font-size: 1.5em;
    padding: 20px;
    border-radius: 20px;
    background-color: rgb(230, 230, 230);
    text-decoration: none;
    cursor: pointer;
    box-shadow: 3px 3px ${colors.secondary};
    transition: 0.1s ease-in-out;

    &:hover {
        transform: scale(1.1);
    }
`;

function Home() {
    const [canvasReady, setCanvasReady] = useState(false);

    useEffect(() => {
        setCanvasReady(true);
    });

    return (
        <StyledDiv>
            <StyledCanvasDiv>
                {canvasReady ? (
                    <SolarSystem className="canvas" />
                ) : (
                    <p>Not ready</p>
                )}
            </StyledCanvasDiv>
            <StyledTitle>Travel beyond the borders of our world</StyledTitle>
            <StyledLinkToFullscreen to="/system">
                Discover
            </StyledLinkToFullscreen>
        </StyledDiv>
    );
}

// function render() {
//     requestAnimationFrame(render);
// }
// requestAnimationFrame(render);

export default Home;
