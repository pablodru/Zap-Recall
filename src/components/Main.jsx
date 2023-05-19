import Question from './Question';
import styled from 'styled-components';


export default function Main(){
    return (
        <SCMain>
            <Question />
            <Question />
            <Question />
            <Question />
        </SCMain>
    )
}

const SCMain = styled.div`
    width: 100%;
    margin-bottom:90px;
`