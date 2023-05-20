import styled from 'styled-components';
import { useState } from 'react';
import party from '../assets/party.png';
import sad from '../assets/sad.png';

export default function Footer({counter, arrayAnswers}){
    console.log(arrayAnswers)
    let [isFinished, setIsFinished] = useState(false);
    let [image, setImage] = useState('');
    let [title, setTitle] = useState('');
    let [message, setMessage] = useState('');

    if(counter===8 && !isFinished ){
        setIsFinished(true)
        let c = 0;

        arrayAnswers.forEach(e => {
            if(e==="/src/assets/icone_erro.png") {
                setImage(sad);
                setTitle('Putz...')
                setMessage('Ainda faltam alguns... Mas não desanime!')
                c=c+1;
            }
        })

        if(c===0){
            setImage(party);
            setTitle('Parabéns!')
            setMessage('Você não esqueceu de nenhum flashcard!')
        }
    }

    return (
        <SCFooter data-test='footer'>
            { isFinished && (
                <>
                    <SCTitleFinal>
                        <img src={image} alt="party" />
                        <p>{title}</p>
                    </SCTitleFinal>
                    <SCFinalMessage>{message}</SCFinalMessage>
                </>
            )}
            <p>{counter}/8 CONCLUÍDOS</p>
            <div>
                {arrayAnswers.map((answer,i) => <img key={i} src={answer} alt='resposta' />)}
            </div>
        </SCFooter>
    )
}

const SCFooter = styled.div`
    width:100%;
    min-height: 70px;
    height:auto;
    background-color:#FFFFFF;
    box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.05);

    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;

    position:fixed;
    bottom:0;
    left:0;

    p{
        font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color:#333333;
    }

    div{
        display:flex;
        justify-content:space-between;
        align-items:center;
        gap:5px;
    }
    img{
        width:23px;
        height:23px;
    }
`
const SCTitleFinal = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    gap:12px;
    margin-top:15px;

    img{
        width:23px;
        height:23px;
    }
    p{
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        line-height: 22px;
        color:#333333;
    }
`

const SCFinalMessage = styled.p`
    max-width:222px;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    text-align: center;
    color: #333333;
    margin: 20px 0;
`