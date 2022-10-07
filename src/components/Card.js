import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCartPlus, faCheck, faMinus, faCircleInfo} from '@fortawesome/free-solid-svg-icons'
import '../styles/Card.css'
import { openModal, specifyModal } from '../features/modal/modalSlice';
import { useAllBoxesQuery } from '../features/boxes/boxesApi'

export default function Card() {
  const {light} = useSelector(state=>state.color)
  const dispatch = useDispatch()
  const multiDispatcher = (modalType) => {
    dispatch(openModal())
    dispatch(specifyModal(modalType))
  }
  const [isClicked, setIsClicked] = useState(false);
  const {data:boxesRes} = useAllBoxesQuery()


  const [boxes, setBoxes ] = useState([])

  useEffect(() => {
    if(boxesRes){
      setBoxes(boxesRes)
    }
  }, [boxesRes])
  
  console.log(boxes)

  const printBoxes = (item) => (
    <div className={`card-wrapper ${light?"light":""}`} key={item.name}>
      <div className="card-container">
        <div className="card-top" style={{ 'background': `url(${item.recipe.image})` }}></div>
        <div className={isClicked ? 'card-bottom clicked' : 'card-bottom'}>
          <div className="card-left">
            <div className="card-details">
              <p>{item.name}</p>
              <p>${item.price}</p>
            </div>
            <div className="card-buy" onClick={() => setIsClicked(true)}>
              <FontAwesomeIcon icon={faCartPlus}
                className="card-buy-icon" /></div>
          </div>
          <div className="card-right">
            <div className="card-done">
              <FontAwesomeIcon icon={faCheck}
                className="card-done-icon" /></div>
            <div className="card-details">
              <p>{item.name}</p>
              <p>Added to your cart</p>
            </div>
            <div className="card-remove" onClick={() => setIsClicked(false)}> <FontAwesomeIcon icon={faMinus}
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
          <table>
            <tbody>
            <tr>
              <th>Ingredients</th>
            </tr>
            <tr>
              <td>1</td>
              <td>big chicken</td>
            </tr>
            <tr>
              <th>1 tbsp.</th>
              <th>chapotl chilli</th>
            </tr>
            <tr>
              <td>Some of</td>
              <td>Something</td>
            </tr>
            <tr>
              <th>Some of</th>
              <th>Something</th>
            </tr>
            <tr>
              <td>Some of</td>
              <td>Something</td>
            </tr>
            <tr>
              <th>Some of</th>
              <th>Something</th>
            </tr>
            <tr>
              <td>Some of</td>
              <td>Something</td>
            </tr>
            </tbody>
          </table>
          <button onClick={() => multiDispatcher('card')}>MORE INFO</button>
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
