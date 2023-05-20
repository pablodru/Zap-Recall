import styled from 'styled-components';

export default function Footer({counter}){
    return (
        <SCFooter data-test='footer' >
            <p>{counter}/8 CONCLUÍDOS</p>
        </SCFooter>
    )
}

const SCFooter = styled.div`
    width:100%;
    height:70px;
    background-color:#FFFFFF;
    box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.05);

    display:flex;
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
`