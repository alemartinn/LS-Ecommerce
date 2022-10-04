import React from 'react'
import '../styles/Card.css'
import ModalCard from './ModalCard'

export default function Card() {
  return (
    <div className='card'>
      <div className='card-container'>
        <img className='card-img' src='https://cocinateelmundo.com/wp-content/uploads/2018/06/comida-asiatica-cocinateelmundo-16.jpg'></img>
        <ModalCard />
      </div>
    </div>
  )
}
