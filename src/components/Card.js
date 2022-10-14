import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faMinus, faCircleInfo, faBagShopping, faCartPlus } from '@fortawesome/free-solid-svg-icons'
import '../styles/Card.css'
import { openModal, specifyModal } from '../features/modal/modalSlice';
import CardInfo from './CardInfo'
import { addToCart, removeFromCart, getTotals } from '../features/cart/cartSlice'

export default function Card({ item }) {
  const { light, bcgColor } = useSelector(state => state.color)
  const dispatch = useDispatch()
  const multiDispatcher = (modalType) => {
    dispatch(openModal())
    dispatch(specifyModal({ name: modalType, props:{id:item._id} }))
  }
  const [isClicked, setIsClicked] = useState(false);

  function handleAddToCart(item) {
    setIsClicked(true)
    dispatch(addToCart(item))
    dispatch(getTotals())
  }
  function handleRemoveFromCart(item) {
    setIsClicked(false)
    dispatch(removeFromCart(item))
    dispatch(getTotals())
  }

  return (
    <div className={`card-wrapper ${light ? "light" : ""}`} key={item.name}>
      <div className="card-container">
        <img className="card-top" src={item.recipe.image} alt={'described-food-card'} />
        <div className={isClicked ? 'card-bottom clicked' : 'card-bottom'}>
          <div className="card-left">
            <div className="card-details-left">
              <p className='card-details-p'>{item.name}</p>
              <h4 className='card-details-p'>${item.price}</h4>
            </div>
            <div className="card-buy" onClick={() => { handleAddToCart(item) }}>
              <FontAwesomeIcon icon={faCartPlus}
                className="card-buy-icon" /></div>
          </div>
          <div className="card-right">
            <div className="card-done">
              <FontAwesomeIcon icon={faCheck}
                className="card-done-icon" /></div>
            <div className="card-details-right">
              <p className='card-details-p'>{item.name}</p>
              <h3 className='card-details-p'>IN CART</h3>
            </div>
            <div className="card-remove" onClick={() => { handleRemoveFromCart(item) }}> <FontAwesomeIcon icon={faMinus}
              className="card-remove-icon" /></div>
          </div>
        </div>
      </div>
      <div className="card-inside">
        <div className="card-info">
          <FontAwesomeIcon icon={faCircleInfo}
            className="card-info-icon" />
        </div>
        <div className="card-contents">
          <CardInfo id={item.recipe._id} />
          <button className='box-btn-card' onClick={() => multiDispatcher('card')}>More Info</button>
        </div>
      </div>
    </div>
  )
}
