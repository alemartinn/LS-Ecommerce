import { useState } from 'react'
import { useSelector } from "react-redux";
import { Link as LinkRouter } from "react-router-dom";
import Card from '../components/Card.js'

import "../styles/Home.css"

function Home() {
  const [isOpen, setIsOpen] = useState(false)
  const closeModal = () => setIsOpen(false)
  const { bcgColor, fontColor, thirdColor } = useSelector(state => state.color)
  return (
    <main className="home-main" style={{ backgroundColor: bcgColor }}>
      <div className="home-content">
        <div className="home-banner">
          <img className="home-banner-img"
            src="https://www.wellandgood.com/wp-content/uploads/2015/05/meal_delivery_provenance.jpg" />
          <LinkRouter to="/recipes"
            className="home-banner-link"
            style={{ backgroundColor: thirdColor, color: fontColor}}
          >Look at our recipes!</LinkRouter>
        </div>
        <div className="home-cards-container">
          <Card />
        </div>
      </div>
    </main>
  )
}
export default Home