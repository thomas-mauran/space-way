import React from 'react';
import ReactDOM from 'react-dom';

import styled from 'styled-components';
import colors from '../../utils/style/colors';
import galaxyLogo from '../../assets/galaxy.png';

import { Link } from 'react-router-dom';

const NavContainer = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`;

const StyledLink = styled(Link)`
    padding: 50px 50px 0px 50px;
    text-decoration: none;
    list-style-type: none;
    font-size: 1.4em;

    ${(props) => props.$linkTitle && `font-weight: 800; `}
`;

const LogoDiv = styled.div`
    display: flex;
    flex-direction: row;
    font-size: 2em;
    margin-right: 500px;
`;

const GalaxyLogo = styled.img`
    width: 90px;
    height: 90px;
    padding: 30px 0px 0px 0px;
`;

function Header() {
    return (
        <NavContainer>
            <LogoDiv>
                <GalaxyLogo src={galaxyLogo} />
                <StyledLink $linkTitle to="/">
                    Space Way
                </StyledLink>
            </LogoDiv>
            <StyledLink to="/system">Discover</StyledLink>
            <StyledLink to="/today">Today picture</StyledLink>
            <StyledLink to="/search">Search</StyledLink>
        </NavContainer>
    );
}

export default Header;
