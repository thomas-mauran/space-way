import React from 'react';
import ReactDOM from 'react-dom';

import notFound from '../../assets/notFound.svg';
import styled from 'styled-components';
import colors from '../../utils/style/colors';
const MainDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 10%;
`;

const StyledImg = styled.img`
    width: 500px;
`;

const TextBox = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    text-shadow: 3px 3px 2px ${colors.secondary};
    text-align: center;
`;

const BigText = styled.h1`
    font-size: 4em;
`;

const SmallText = styled.h5`
    font-size: 1.5em;
`;

function Error() {
    return (
        <MainDiv>
            <StyledImg src={notFound} />
            <TextBox>
                <BigText> 404 Not page not found </BigText>
                <SmallText>Did you try to catch a shooting star ? 💫</SmallText>
            </TextBox>
        </MainDiv>
    );
}

export default Error;
