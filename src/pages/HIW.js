import { useSelector } from "react-redux";
import { Link as LinkR } from "react-router-dom";
import styled from "styled-components"

function HIW() {

    const { bcgColor, fontColor, thirdColor, fourthColor, fivethColor } = useSelector(state => state.color)
    return (
        <MainHIW style={{ backgroundColor: bcgColor }}>
            <MainContent>
                <Guide bcgColor={fivethColor}>
                    <TextP textcolor={"#ccc"} >Steps guide</TextP>
                </Guide>
                <Promo>
                    <div style={{ height: 100, width: 100, backgroundColor: thirdColor }}></div>
                    <TextP textcolor={fontColor} >Mobile App Promo</TextP>
                </Promo>
                <Benefits bcgColor={fourthColor}>
                    <TextP textcolor={fontColor} >Benefits</TextP>
                </Benefits>
                <FAQ bcgColor={fourthColor}>
                    <TextP textcolor={fontColor} >FAQ</TextP>
                </FAQ>
            </MainContent>
        </MainHIW>
    )
}
const MainHIW = styled.main`
    display: flex;
    justify-content: center;
    width: 100%;
    min-height: 80vh;
`
const MainContent = styled.div`
    width: 100%;
    max-width: 1400px;
    padding-top: 10vh ;
    display: flex;
    flex-direction: column;
    align-items: center;
` 
const Guide = styled.div`
    width: 100%;
    max-width: 1000px;
    min-height: 250px;
    border-radius: 20px;
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 5vh;
    background-color: ${props=>props.bcgColor}
`
const Benefits = styled.div`
    width: 100%;
    max-width: 1000px;
    min-height: 250px;
    border-radius: 20px;
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 5vh;
    background-color: ${props=>props.bcgColor}
`
const FAQ = styled.div`
    width: 100%;
    max-width: 1000px;
    min-height: 250px;
    border-radius: 20px;
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 5vh;
    background-color: ${props=>props.bcgColor}
`
const Promo = styled.div`
    width: 100%;
    max-width: 1000px;
    min-height: 250px;
    border-radius: 20px;
    margin-bottom: 5vh;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`

const TextP = styled(LinkR)`
    color: ${props => props.textcolor};
    text-align: center;
    font-size: 1rem;
`

export default HIW