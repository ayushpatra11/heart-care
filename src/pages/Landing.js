import React from 'react'
import styled from 'styled-components';
import {AiFillHeart} from 'react-icons/ai';
import {Section} from '../components/GlobalStyles';
import {motion} from 'framer-motion';
import Heart from '../images/heart.png'

const Container = styled.div`
    margin: 30px;
    padding: 20px;
    display: grid;
    grid-template-rows: 1fr 1fr;
    
    @media screen and (max-width: 768px){
        grid-template-row: 1fr;
    }
`;


const IconHeart = styled(AiFillHeart)`
    position: absolute;
    margin-top: 20px;
    font-size: ${props=> props.big? '30rem': '26rem'};
    border: none;
    outline: none;
    color: ${props=> props.big? '#903749': '#e84545'};
    @media screen and (max-width: 960px){
        font-size: ${props=> props.big? '24rem': '20rem'};
    }

    @media screen and (max-width: 768px){
        font-size: ${props=> props.big? '20rem': '16rem'};
    }
`;


const Icon = styled(motion.img)`
    cursor: grab;
    position: absolute;
    margin-top: 20px;
    max-width: ${props=> props.big? '30rem': '26rem'};
    border: none;
    outline: none;

    @media screen and (max-width: 960px){
        max-width: ${props=> props.big? '24rem': '20rem'};
    }

    @media screen and (max-width: 768px){
        max-width: ${props=> props.big? '20rem': '16rem'};
    }
`;

const IconSmall = styled(motion.img)`
    cursor: grab;
    position: absolute;
    margin-top: 20px;
    max-width: ${props=> props.medium? '18rem': '12rem'};
    border: none;
    outline: none;

    @media screen and (max-width: 960px){
        max-width: ${props=> props.medium? '12rem': '8rem'};
    }

    @media screen and (max-width: 768px){
        max-width: ${props=> props.medium? '8rem': '6rem'};
    }
`;

const RowBottom = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 5rem 2rem;


h1{
    margin-bottom: 0.5rem;
    font-size: 1.5rem;
    color: #fff;
}

p{
    text-align: center;
    margin: 2rem 0;
    font-size: 3rem;
    line-height: 1.1;
    color: #fff;
}
`;

const RowTop= styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    position: relative;

    

    ${IconSmall}:nth-child(2){
    top: 250px;
    left: 500px;
    }
    ${IconSmall}:nth-child(3){
    top: 350px;
    right: 330px;
    }
    ${IconSmall}:nth-child(4){
    top: 250px;
    right: 730px;
    }
    ${IconSmall}:nth-child(5){
    top: 470px;
    left: 670px;
    }
    ${IconSmall}:nth-child(6){
    top: 30px;
    left: 400px;
    }

@media screen and (max-width: 1540px){
    ${IconSmall}:nth-child(2){
    top: 250px;
    left: 300px;
    }
    ${IconSmall}:nth-child(3){
    top: 350px;
    right: 310px;
    }
    ${IconSmall}:nth-child(4){
    top: 150px;
    right: 430px;
    }
    ${IconSmall}:nth-child(5){
    top: 470px;
    left: 370px;
    }
    ${IconSmall}:nth-child(6){
    top: 30px;
    left: 400px;
    }
}
@media screen and (max-width: 960px){
    ${IconSmall}:nth-child(2){
    top: 250px;
    left: 400px;
    }
    ${IconSmall}:nth-child(3){
    top: 350px;
    right: 330px;
    }
    ${IconSmall}:nth-child(4){
    top: 150px;
    right: 430px;
    }
    ${IconSmall}:nth-child(5){
    top: 470px;
    left: 370px;
    }
    ${IconSmall}:nth-child(6){
    top: 30px;
    left: 400px;
    }
}
@media screen and (max-width: 768px){
    ${IconSmall}:nth-child(2){
    top: 280px;
    left: 250px;
    }
    ${IconSmall}:nth-child(3){
    top: 200px;
    right: 260px;
    }
    ${IconSmall}:nth-child(4){
    top: 10px;
    right: 330px;
    }
    ${IconSmall}:nth-child(5){
    top: 170px;
    left: 300px;
    }
    ${IconSmall}:nth-child(6){
    top: 30px;
    left: 300px;
    }
}
`;

function Landing() {
    return (
        <div id="landing">
            <Section primary>
                <Container>
                    <RowTop>
                        <IconHeart big />
                        <IconSmall
                        src={Heart}
                        whileHover={{scale: 1.05}}
                        drag={true}
                        whileDrag={{scale: 0.5}}
                        dragConstraints={{left:0, right: 0, top: 0, bottom: 0}}
                        initial={{opacity:0, y:150}}
                        animate={{opacity:1, y:0, transition: {duration:1.5}}}
                        transition={{duration: 1}}
                        />
                        <IconSmall medium
                        src={Heart}
                        whileHover={{scale: 1.05}}
                        drag={true}
                        whileDrag={{scale: 0.5}}
                        dragConstraints={{left:0, right: 0, top: 0, bottom: 0}}
                        initial={{opacity:0, x:-150}}
                        animate={{opacity:1, x:0, transition: {duration:1.5}}}
                        transition={{duration: 1}}
                        />
                        <IconSmall 
                        src={Heart}
                        whileHover={{scale: 1.05}}
                        drag={true}
                        whileDrag={{scale: 0.5}}
                        dragConstraints={{left:0, right: 0, top: 0, bottom: 0}}
                        initial={{opacity:0, x:150}}
                        animate={{opacity:1, x:0, transition: {duration:1.5}}}
                        transition={{duration: 1}}
                        />
                        <IconSmall medium
                        src={Heart}
                        whileHover={{scale: 1.05}}
                        drag={true}
                        whileDrag={{scale: 0.5}}
                        dragConstraints={{left:0, right: 0, top: 0, bottom: 0}}
                        initial={{opacity:0, y:150}}
                        animate={{opacity:1, y:0, transition: {duration:1.5}}}
                        transition={{duration: 1}}
                        />
                        <IconSmall 
                        src={Heart}
                        whileHover={{scale: 1.05}}
                        drag={true}
                        whileDrag={{scale: 0.5}}
                        dragConstraints={{left:0, right: 0, top: 0, bottom: 0}}
                        initial={{opacity:0, x:150}}
                        animate={{opacity:1, x:0, transition: {duration:1.5}}}
                        transition={{duration: 1}}
                        />
                        
                        <Icon 
                        src={Heart}
                        whileHover={{scale: 1.05}}
                        drag={true}
                        whileDrag={{scale: 0.5}}
                        dragConstraints={{left:0, right: 0, top: 0, bottom: 0}}
                        initial={{opacity:0, y:-150}}
                        animate={{opacity:1, y:0, transition: {duration:1.5}}}
                        transition={{duration: 1}}
                        />
                        
                    </RowTop>
                    <RowBottom>
                        <motion.h1
                        initial={{opacity:0}}
                        animate={{opacity:1, transition: {duration:2}}}
                        transition={{duration: 1}}
                        >Don't ever forget</motion.h1>
                        <motion.p
                        initial={{opacity:0}}
                        animate={{opacity:1, transition: {duration:2}}}
                        transition={{duration: 1}}
                        >You're not alone</motion.p>
                    </RowBottom>
                </Container>
            </Section>
        </div>
    )
}

export default Landing;
