import { useSelector } from "react-redux";
import { Link as LinkR } from "react-router-dom";
import styled from "styled-components"

function NotFound() {
    const {
        bcgColor,
        fontColor,
        thirdColor } = useSelector(state => state.color)
    return (
        <MainNotFound style={{backgroundColor: bcgColor}}>
            <TitleNotFound textcolor={fontColor}>404</TitleNotFound>
            <TitleNotFound textcolor={fontColor}>Are you lost?</TitleNotFound>
            <LinkRouter to="/"
                        textcolor={fontColor}
                        bcgcolor={thirdColor}
                    >Go Home</LinkRouter>
        </MainNotFound>
    )
}

const MainNotFound = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    min-height: 80vh;
`
const TitleNotFound = styled.h2`
    font-size: 3rem;
    color: ${props => props.textcolor};
`
const LinkRouter = styled(LinkR)`
    text-decoration: none;
    color: ${props => props.textcolor};
    background-color: ${props => props.bcgcolor};
    font-size: 3rem;
    padding: .5rem;
    border-radius: 1rem;
`

export default NotFound