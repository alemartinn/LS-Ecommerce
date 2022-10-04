import { useSelector } from "react-redux";
import { Link as LinkR } from "react-router-dom";
import styled from "styled-components"
function Home() {

    const { bcgColor, fontColor, thirdColor } = useSelector(state => state.color)
    return (
        <MainHome style={{ backgroundColor: bcgColor }}>
            <MainContent>
                <Banner>
                    <BannerImg
                        src="https://www.wellandgood.com/wp-content/uploads/2015/05/meal_delivery_provenance.jpg" />
                    <LinkRouter to="/recipes"
                        textcolor={fontColor}
                        bcgcolor={thirdColor}
                    >*inserte frase*</LinkRouter>
                </Banner>
            </MainContent>
        </MainHome>
    )
}
const MainHome = styled.main`
    display: flex;
    justify-content: center;
    width: 100%;
    min-height: 70vh;
`
const MainContent = styled.div`
    width: 100%;
    max-width: 1400px;
    padding: 2rem;
` 
const Banner = styled.div`
    position: relative;
    width: 100%;
    height: 60vh;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
`
const BannerImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;

`
const LinkRouter = styled(LinkR)`
    text-decoration: none;
    color: ${props => props.textcolor};
    position: absolute;
    bottom: 2rem;
    right: 20%;
    background-color: ${props => props.bcgcolor};
    padding: .5rem;
    border-radius: 1rem;
`

export default Home