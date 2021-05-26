import React from 'react';
import {Section, Cards} from '../components/GlobalStyles';
import styled, {keyframes} from 'styled-components'
import {motion} from 'framer-motion';
import Heart from '../images/heart.png'

const floating = keyframes`
    0% { transform: translate(0,  0px); }
    50%  { transform: translate(0, 18px); }
    100%   { transform: translate(0, -0px); }
`;

const IconSmall = styled(motion.img)`
    position: absolute;
    margin-top: 20px;
    max-width: ${props=> props.medium? '18rem': '12rem'};
    border: none;
    outline: none;
    animation: ${floating} 3s ease-in-out infinite;
    z-index: 0;
    

    @media screen and (max-width: 960px){
        max-width: ${props=> props.medium? '12rem': '8rem'};
    }

    @media screen and (max-width: 768px){
        max-width: ${props=> props.medium? '8rem': '6rem'};
    }
`;

const Container = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    margin: 40px;
    padding: 30px;
    height: 80%;
    width: 100%;
    justify-content: center;

    h1{
        text-align: center;
        font-size: 3rem;
        color: white;
        z-index: 1;
    }
    p{
        font-size: 1.5rem;
        color: white;
        z-index: 1;
    }

${IconSmall}:nth-child(1){
    top: 100px;
    left: 100px;       
}


${IconSmall}:nth-child(2){
    top: 0px;
    right: 100px;
}

${IconSmall}:nth-child(3){
    top: 200px;
    left: 300px;
}
${IconSmall}:nth-child(4){
    top: 300px;
    right: 150px;
}
${IconSmall}:nth-child(5){
    top: 400px;
    left: 50px;
}
${IconSmall}:nth-child(6){
    top: 500px;
    right: 200px;
}
${IconSmall}:nth-child(7){
    top: 600px;
    left: 250px;
}
`;

function Heartfailure() {
    return (
        <div id="heartfailure">
            <Section>
                <Container>
                <IconSmall src={Heart} />
                <IconSmall src={Heart} />
                <IconSmall src={Heart} />
                <IconSmall src={Heart} />
                <IconSmall src={Heart} />
                <IconSmall src={Heart} />
                <IconSmall src={Heart} />
                    <h1>Heart Failure</h1>
                    <p>Heart failure, sometimes known as congestive heart failure, occurs when your heart muscle doesn't pump blood as well as it should. Certain conditions, such as narrowed arteries in your heart (coronary artery disease) or high blood pressure, gradually leave your heart too weak or stiff to fill and pump efficiently.

                    Not all conditions that lead to heart failure can be reversed, but treatments can improve the signs and symptoms of heart failure and help you live longer. Lifestyle changes — such as exercising, reducing sodium in your diet, managing stress and losing weight — can improve your quality of life.

                    One way to prevent heart failure is to prevent and control conditions that cause heart failure, such as coronary artery disease, high blood pressure, diabetes or obesity.
                    </p>

                </Container>
            </Section>
        </div>
    )
}

export default Heartfailure
