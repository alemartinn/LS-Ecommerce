import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCartPlus, faCheck, faMinus, faCircleInfo} from '@fortawesome/free-solid-svg-icons'
import '../styles/Card.css'
import { openModal, specifyModal } from '../features/modal/modalSlice';

export default function Card() {
  const {light} = useSelector(state=>state.color)
  const dispatch = useDispatch()
  const multiDispatcher = (modalType) => {
    dispatch(openModal())
    dispatch(specifyModal(modalType))
  }
  const [isClicked, setIsClicked] = useState(false);
  return (
    <div className={`card-wrapper ${light?"light":""}`}>
      <div className="card-container">
        <div className="card-top" style={{ 'background': 'url(https://static01.nyt.com/images/2019/01/08/dining/mc-peruvian-chicken/merlin_146806653_43c09c3c-dcc6-42b6-ac62-409d4bde8577-articleLarge.jpg)' }}></div>
        <div className={isClicked ? 'card-bottom clicked' : 'card-bottom'}>
          <div className="card-left">
            <div className="card-details">
              <p>Spicy Peruvian Chicken</p>
              <p>$250</p>
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
              <p>Spicy Peruvian Chicken</p>
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
}
