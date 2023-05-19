import logo from '../assets/logo.png';
import styled from 'styled-components';

export default function Header(){
    return(
        <SCHeader>
            <img src={logo} alt="logo" />
            <p>ZapRecall</p>
        </SCHeader>
    )
}

const SCHeader = styled.div`
    width:68%;
    height:auto;
    margin:15px auto;

    display:flex;
    justify-content: space-between;
    align-items:center;

    img{
        width:20%;
        height:9vh;
    }
    p{
        font-family: 'Righteous';
        font-style: normal;
        font-weight: 400;
        font-size: 36px;
        line-height: 45px;
        color: #FFFFFF;
        transform: rotate(0.58deg);
    }
` 