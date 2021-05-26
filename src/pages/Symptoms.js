import React from 'react';
import {Section, Cards} from '../components/GlobalStyles';
import styled from 'styled-components';
import {Symptomsdata} from './Symptomsdata';

const Container = styled.div`
    justify-content: center;
    margin: 20px;
    padding: 20px;
    height: 100%;
    width: 100%;
    justify-content: center;

`;

const Cardsdiv = styled.div`
margin: 30px;
display: flex;
justify-content: center;
flex-direction: row;
flex-wrap: wrap;
@media screen and (max-width: 768px){
    
    flex-direction: column;
    }
`;

function Symptoms() {
    return (
        <div id="symptoms">
            <Section primary pagesymp>
                <Container>
                    <h1 style= {{textAlign: "center",
                    fontSize: "3rem",
                    color: "white",
                    zIndex: "1"}}
                    > Symptoms </h1>
                    <Cardsdiv>
                    {Symptomsdata.map(symptom=>(
                        <Cards primary
                        whileHover={{scale: 1.1, transition: {duration: 0}}}
                        whileTap={{scale: 0.9, transition: {duration: 0}}}
                        initial={{opacity: 0}}
                        animate={{opacity: 1, transition:{duration: 1}}}
                        transition={{duration: 1}}>
                            <h1>{symptom.heading}</h1>
                            <p>{symptom.reason}</p>
                        </Cards>
                    ))}
                    </Cardsdiv>
                </Container>
            </Section>
        </div>
    )
}

export default Symptoms
