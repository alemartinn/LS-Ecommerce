import React, { useState } from 'react'
import '../styles/sass/Card.css'
import ModalCard from './ModalCard'

export default function Card() {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div className="wrapper">
      <div className="container">
        <div className="top" style={{ 'background': 'url(https://static01.nyt.com/images/2019/01/08/dining/mc-peruvian-chicken/merlin_146806653_43c09c3c-dcc6-42b6-ac62-409d4bde8577-articleLarge.jpg)' }}></div>
        <div className={isClicked ? 'bottom clicked' : 'bottom'}>
          <div className="left">
            <div className="details">
              <p>Spicy Peruvian Chicken</p>
              <p>$250</p>
            </div>
            <div className="buy" onClick={() => setIsClicked(true)}><i className="material-icons">Add</i></div>
          </div>
          <div className="right">
            <div className="done"><i className="material-icons">Done</i></div>
            <div className="details">
              <p>Spicy Peruvian Chicken</p>
              <p>Added to your cart</p>
            </div>
            <div className="remove" onClick={() => setIsClicked(false)}><i className="material-icons">Clear</i></div>
          </div>
        </div>
      </div>
      <div className="inside">
        <div className="icon"><i className="material-icons">Info</i></div>
        <div className="contents">
          <table>
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
          </table>
          <ModalCard/>
        </div>
      </div>
    </div>
  )
}
