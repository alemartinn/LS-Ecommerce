import { useSelector } from "react-redux";
import styled from "styled-components"

function Home() {

    const { bcgColor, fontColor } = useSelector(state => state.color)
    return (
        <main style={{backgroundColor: bcgColor}}>
            <Titulo color={fontColor}>Home</Titulo>
        </main>
    )
}

const Titulo = styled.h2`
    color: ${props => props.color};
`

export default Home