import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus, faCheck, faMinus, faCircleInfo, faBagShopping } from '@fortawesome/free-solid-svg-icons'
import '../styles/Card.css'
import { openModal, specifyModal } from '../features/modal/modalSlice';
import { useAllBoxesQuery } from '../features/boxes/boxesApi'
import CardInfo from './CardInfo'
import { openAlert, specifyMessage } from "../features/alert/alertSlice"
import { addToCart, removeItem } from '../features/cart/cartSlice'

export default function Card() {
  const { light } = useSelector(state => state.color)
  const dispatch = useDispatch()
  const multiDispatcher = (modalType) => {
    dispatch(openModal())
    dispatch(specifyModal({ name: modalType }))
  }
  const [isClicked, setIsClicked] = useState(false);
  const { data: boxesRes } = useAllBoxesQuery()


  const [boxes, setBoxes] = useState([])

  useEffect(() => {
    if (boxesRes) {
      setBoxes(boxesRes)
    }
  }, [boxesRes])


  function AddingToCart(item) {
    setIsClicked(true)
    dispatch(addToCart(item))
  }
  function RemoveFromCart(item) {
    setIsClicked(false)
    dispatch(removeItem(item))
  }



  const printBoxes = (item) => (
    <div className={`card-wrapper ${light ? "light" : ""}`} key={item.name}>
      <div className="card-container">
        {/* <div className="card-top" style={{ 'background': `url(${item.recipe.image})` }}></div> */}
        <img className="card-top" src={item.recipe.image} />
        <div className={isClicked ? 'card-bottom clicked' : 'card-bottom'}>
          <div className="card-left">
            <div className="card-details">
              <p className='card-details-p'>{item.name}</p>
              <p className='card-details-p'>${item.price}</p>
            </div>
            <div className="card-buy" onClick={() => { AddingToCart(item) }}>
              <FontAwesomeIcon icon={faBagShopping}
                className="card-buy-icon" /></div>
          </div>
          <div className="card-right">
            <div className="card-done">
              <FontAwesomeIcon icon={faCheck}
                className="card-done-icon" /></div>
            <div className="card-details">
              <p className='card-details-p'>{item.name}</p>
              <p className='card-details-p'>Added to your cart</p>
            </div>
            <div className="card-remove" onClick={() => { RemoveFromCart(item) }}> <FontAwesomeIcon icon={faMinus}
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
          <button className='button-card' onClick={() => multiDispatcher('card')}>MORE INFO...</button>
        </div>
      </div>
    </div>
  )

  return (
    <>
      {boxes.map(printBoxes)}
    </>
  )
}
