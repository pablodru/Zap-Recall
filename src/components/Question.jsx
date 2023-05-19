import styled from 'styled-components';
import seta_play from '../assets/seta_play.png';
import seta_virar from '../assets/seta_virar.png';

export default function Question(){
    return (
        <>
            <SCTitle>
                <p>Pergunta 1</p>
                <img src={seta_play} alt="seta" />
            </SCTitle>
            {/* <SCQuestion>
                <p>O que é JSX?</p>
                <img src={seta_virar} alt="virar" />
            </SCQuestion> */}
            {/* <SCQuestion>
                <p> JSX é uma sintaxe para escrever HTML dentro do JS </p>
                <div>
                    <SCButtonRed>Não lembrei</SCButtonRed>
                    <SCButtonOrange>Quase não lembrei</SCButtonOrange>
                    <SCButtonGreen>Zap!</SCButtonGreen>
                </div>
            </SCQuestion> */}
        </>
    )
}

const SCTitle = styled.div`
    width:80%;
    height:65px;
    margin:25px auto;
    background-color:#ffffff;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    padding:4%;

    display:flex;
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
        width:7%;
        height:36%;
    }
`

const SCQuestion = styled.div`
    width:80%;
    height:131px; //MESMO DA DIV DA RESPOSTA, DA PRA FAZER POR VARIAVEL
    margin:25px auto;
    background-color:#ffffff;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    padding:2%;

    display:flex;
    flex-direction:column;
    justify-content:space-between;

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