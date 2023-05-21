import logo from '../assets/logo.png';
import styled from 'styled-components';

export default function Welcome({setGoRecall}){
    return (
        <SCWelcome>
            <img src={logo} alt="logo" />
            <p>ZapRecall</p>
            <button onClick={() => setGoRecall(true)} >Iniciar Recall!</button>
        </SCWelcome>
    )
}

const SCWelcome = styled.div`
    margin: 150px auto 200px auto;

    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:center;
    gap:25px;

    img{
        width:136px;
        height:161px;
    }

    p{
        font-family: 'Righteous';
        font-style: normal;
        font-weight: 400;
        font-size: 36px;
        line-height: 45px;
        letter-spacing: -0.012em;
        color:#ffffff;
        transform: rotate(0.58deg);
    }

    button {
        width:246px;
        height:54px;
        background-color: #ffffff;
        border: 1px solid #D70900;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
        border-radius: 5px;

        font-family: 'Recursive';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        text-align: center;
        color: #D70900;
        cursor:pointer;
    }
`