import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import colors from './utils/style/colors';

import * as THREE from 'three';

// Components

import Header from './components/Header';
import Error from './components/Error';

// Pages

import Home from './pages/Home';

//global style

import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;800&display=swap');

  *{
    font-family: 'Montserrat', sans-serif;
    color: white;
    font-size: 1em;
  }
  body{
    background-color: ${colors.background_color}
  }

`;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Header />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </BrowserRouter>
        <GlobalStyle />
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
