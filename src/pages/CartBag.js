import React from 'react'
import { useSelector } from 'react-redux'
import '../styles/CartBag.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faXmark} from '@fortawesome/free-solid-svg-icons'
export default function CartBag() {
    const {
        bcgColor,
        fontColor,
        light} = useSelector(state => state.color)
    return (
        <main className='cart-bag-main' style={{ backgroundColor: bcgColor, color: fontColor }}>
            <div className='cart-bag-container'>
                <div className={`cart-bag-products ${light && "light"}`}>
                    <h2>Products</h2>
                    <div className="cart-bag-products-detail">
                        <div className='cart-bag-product'>
                            <img className='cart-bag-img' src='https://cocinateelmundo.com/wp-content/uploads/2018/06/comida-asiatica-cocinateelmundo-16.jpg'></img>
                            <p>Product name</p>
                            <p>Price $$$</p>
                            <button className='cart-bag-delete'
                            style={{backgroundColor:bcgColor, color:fontColor}}>
                                <FontAwesomeIcon icon={faXmark} /></button>
                        </div>
                        <div className='cart-bag-product'>
                            <img className='cart-bag-img' src='https://cocinateelmundo.com/wp-content/uploads/2018/06/comida-asiatica-cocinateelmundo-16.jpg'></img>
                            <p>Product name</p>
                            <p>Price $$$</p>
                            <button className='cart-bag-delete'
                            style={{backgroundColor:bcgColor, color:fontColor}}>
                                <FontAwesomeIcon icon={faXmark} />
                            </button>
                        </div>
                    </div>
                    <div className="cart-bag-login">
                        <p>Login</p>
                    </div>
                    <div className="cart-bag-payment">
                        <p>Payment</p>
                        <img className='payment-img' src='https://t4.ftcdn.net/jpg/04/75/86/45/360_F_475864587_i3tUy1prvkk3GGSYBmorpvaAdoAcJfI4.jpg'></img>
                    </div>
                    <div className="cart-bag-address">
                        <p>Shipping Address</p>
                        <p>Data change</p>
                    </div>
                </div>
                <div className={`cart-bag-total ${light && "light"}`}>
                    <div className='cartBag-totalPrice'>
                        <p>Total</p>
                    </div>
                    <div className='cartBag-discount'>
                        <p>Default</p>
                        <p>With coupon</p>
                        <p>$00.99 discount !</p>
                    </div>
                    <div className='cartBag-benefits'>
                        <p>Info/Benefits</p>
                    </div>
                </div>
            </div>
        </main>
    )
}
