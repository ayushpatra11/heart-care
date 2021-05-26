import React from 'react';
import styled from 'styled-components';
import {motion} from 'framer-motion';

export const Section = styled.section`
    font-family: 'Arimo', sans-serif;
    height: ${props => props.pagesymp? "130vh" : "100vh" };
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${props => props.primary? "#2b2e4a" : "#903749" };
`;

export const Cards = styled(motion.div)`
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    height: auto;
    transition: 0.3s;
    border-radius:40px;
    margin: 10px;
    width: 40%;
    position: relative;
  
    justify-content: center;
    border: solid ${props=> props.primary? "#903749" : "#2b2e4a"};
    border-radius: 7px;
    background: transparent;
    h1{
        text-align: center;
        font-size: 2rem;
        margin: 10px;
        color: #fff;
        padding-bottom: 40px;
    }
    p{
        text-align: center;
        font-size: 1.5rem;
        color: #fff;
        margin: 10px;
    }
    @media screen and (max-width: 960px){
        width: 90%;
    h1{
        margin: 10px;
        font-size: 1.5rem;
        color: #fff;
        padding-bottom: 10px;
    }
    p{
        font-size: 1rem;
        color: #fff;
        margin: 10px;
    }
    }
    @media screen and (max-width: 760px){
        width: 90%;
    h1{
        font-size: 1rem;
        color: #fff;
        padding-bottom: 10px;
    }
    p{
        font-size: 0.8rem;
        color: #fff;
        margin: 10px;
    }
    }
    
`;