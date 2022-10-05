import { useState } from 'react'
import { useSelector } from "react-redux";
import { Link as LinkR } from "react-router-dom";
import styled from "styled-components"
import Card from '../components/Card.js'
import Modal from '../components/Modal'

function Home() {
  const [isOpen, setIsOpen] = useState(false)
  const closeModal = () => setIsOpen(false)
  const { bcgColor, fontColor, thirdColor } = useSelector(state => state.color)
  return (
    <MainHome style={{ backgroundColor: bcgColor }}>
      <MainContent>
        <Banner onClick={()=>setIsOpen(true)}>
          <BannerImg
            src="https://www.wellandgood.com/wp-content/uploads/2015/05/meal_delivery_provenance.jpg" />
          <LinkRouter to="/recipes"
            textcolor={fontColor}
            bcgcolor={thirdColor}
          >*inserte frase*</LinkRouter>
        </Banner>
        <CardsContainer>
          <Card />
          <Card />
          <Card />
        </CardsContainer>
      </MainContent>
      <Modal
        isOpen={isOpen}
        closeModal={closeModal}
      />
    </MainHome>
  )
}
const MainHome = styled.main`
    display: flex;
    justify-content: center;
    width: 100%;
    min-height: 80vh;
`
const MainContent = styled.div`
    width: 100%;
    max-width: 1400px;


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
const CardsContainer = styled.div`
display: flex;
`
export default Home