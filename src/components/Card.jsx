import styled from 'styled-components';
import seta_play from '../assets/seta_play.png';
import seta_virar from '../assets/seta_virar.png';
import icone_erro from '../assets/icone_erro.png';
import icone_quase from '../assets/icone_quase.png';
import icone_certo from '../assets/icone_certo.png';
import { useState } from 'react';

export default function Card(props){

    const {question, answer, id, counter, setCounter, answers, setAnswers, arrayAnswers, setArrayAnswers} = props;

    let [inLive, setInLive] = useState('screen1');
    let [imageFinal, setImageFinal] = useState('');
    let [colorFinal, setColorFinal] = useState('');
    let [dataTest, setDataTest] = useState('');

    const questionText =    <>
                                <p data-test='flashcard-test' >{question}</p>
                                <img src={seta_virar} alt="virar" onClick={() => setInLive('screen3')} />
                            </>;

    const questionAnswer =  <>
                                <p data-test='flashcard-test' > {answer}</p>
                                <div>
                                    <SCButtonRed onClick={() => response('wrong')} data-test='no-btn' >Não lembrei</SCButtonRed>
                                    <SCButtonOrange onClick={() => response('almost')} data-test='partial-btn' >Quase não lembrei</SCButtonOrange>
                                    <SCButtonGreen onClick={() => response('right')} data-test='zap-btn' >Zap!</SCButtonGreen>
                                </div>
                            </>;

    return (   
        <>
            {inLive === 'screen1' && (
                <SCTitle data-test='flashcard' > 
                    <p data-test='flashcard-test'>Pergunta {id+1}</p>
                    <img src={seta_play} alt="seta" onClick={() => setInLive('screen2')} data-test='turn-btn' />
                </SCTitle>)}

            {inLive === 'screen2' && (
                <SCQuestion data-test='flashcard' >
                    {questionText}
                </SCQuestion>)}

            {inLive === 'screen3' && (
                <SCQuestion data-test='flashcard' >
                    {questionAnswer}
                </SCQuestion>)}

                {inLive === 'screen4' && (
                <SCTitleAnswered colorfinal={colorFinal} data-test='flashcard' > 
                    <p >Pergunta {id+1}</p>
                    <img src={imageFinal} alt="final" data-test={dataTest} />
                </SCTitleAnswered>)}
        </>
    )

    function response(r){

        console.log(colorFinal)

        if(!answers.includes(answer)){
            setAnswers([...answers, answer]);
            setCounter(counter+1);
            setInLive('screen4');
        }

        if(r === 'wrong') {
            setColorFinal('#FF3030');
            setImageFinal(icone_erro);
            setDataTest('no-icon');
            setArrayAnswers([...arrayAnswers, icone_erro]);

        } else if(r === 'almost') {
            setColorFinal('#FF922E');
            setImageFinal(icone_quase);
            setDataTest('partial-icon');
            setArrayAnswers([...arrayAnswers, icone_quase]);

        } else if( r === 'right' ){
            setColorFinal('#2FBE34');
            setImageFinal(icone_certo);
            setDataTest('zap-icon');
            setArrayAnswers([...arrayAnswers, icone_certo]);
        }

    }
}

const SCTitle = styled.div`
    width:80%;
    height:65px;
    margin:25px auto;
    background-color:#ffffff;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    padding:4%;

    display: flex;
    justify-content:space-between;
    align-items:center;
    p{
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
        color:#333333;
    }
    img{
        width:6%;
        height:44%;
    }
`

const SCQuestion = styled.div`
    width:80%;
    min-height:131px; //MESMO DA DIV DA RESPOSTA, DA PRA FAZER POR VARIAVEL
    margin:25px auto;
    background-color:#ffffff;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    padding:2%;

    display:flex;
    flex-direction:column;
    justify-content:space-between;
    gap:10px;

    position: relative;

    p{
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        color:#333333;
        text-align:t
    }
    img {
        width:30px;
        height:20px;

        position:absolute;
        bottom:6px;
        right:15px;
    }
    div{
        width:100%;
        height:auto;
        margin-bottom:8px;

        display:flex;
        align-items:center;
        justify-content:center;
        gap:5px;
    }
    button{
        width:85px;
        height:37px;
        border-radius: 5px;

        font-family: 'Recursive';
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 14px;
        color:#ffffff;
    }
`

const SCButtonRed = styled.button`
    background-color:#FF3030;
    border:1px solid #FF3030;
`

const SCButtonOrange = styled.button`
    background-color:#FF922E;
    border:1px solid #FF922E;
`

const SCButtonGreen = styled.button`
    background-color:#2FBE34;
    border:1px solid #2FBE34;
`

const SCTitleAnswered = styled.div`
    width:80%;
    height:65px;
    margin:25px auto;
    background-color:#ffffff;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    padding:4%;

    display: flex;
    justify-content:space-between;
    align-items:center;
    p{
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
        text-decoration-line: line-through;
        color: ${(props) => props.colorfinal};
    }
    img{
        width:6%;
        height:44%;
    }
`