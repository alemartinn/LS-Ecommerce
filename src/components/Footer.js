import { useSelector } from "react-redux";
import styled from "styled-components"
import {Link as LinkR} from "react-router-dom"
function Footer() {

    const { fourthColor, fontColor } = useSelector(state => state.color)

    return (
        <FooterContainer bcgcolor={fourthColor}>
        <FooterContent>
            <ColFooter>
                <TextFooter color={fontColor}>Social Media...</TextFooter>
                <TextFooter color={fontColor}>©2022 LS Food Co</TextFooter>
            </ColFooter>
            <ColFooter>
                    <TextFooter color={fontColor}>LOGO</TextFooter>
                    <p style={{color:fontColor}}>
                    <LinkRouter to={"/terms"}
                            textcolor={fontColor}>Terms </LinkRouter>
                        /
                    <LinkRouter to={"/about"}
                        textcolor={fontColor}> About Us</LinkRouter>
                    </p>
            </ColFooter>
            <ColFooter>
                <TextFooter color={fontColor}>Footer nav</TextFooter>
            </ColFooter>
        </FooterContent>
        </FooterContainer>
    )
}
//styles
const FooterContainer = styled.footer`
    display: flex;
    justify-content: center;
    width: 100%;
    background-color:${props=>props.bcgcolor};
    padding: 0 2rem;
`
const FooterContent = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 1400px;
    min-height: 20vh;
`
const TextFooter = styled.p`
    color: ${props => props.color};
    margin: 0;
`
const ColFooter = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
`
const LinkRouter = styled(LinkR)`
    text-decoration: none;
    color: ${props=> props.textcolor}
`

export default Footer