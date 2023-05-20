import Card from './Card';
import styled from 'styled-components';
import { useState } from 'react';


export default function Main(props){

    const {cards, counter, setCounter} = props;

    const [answers, setAnswers] = useState([]);
    
    return (
        <SCMain>
            {cards.map((card,i) => <Card key={card.question} question={card.question} answer={card.answer} id={i} counter={counter} setCounter={setCounter} answers={answers} setAnswers={setAnswers} />)}
        </SCMain>
    )
}

const SCMain = styled.div`
    width: 100%;
    margin-bottom:90px;
`