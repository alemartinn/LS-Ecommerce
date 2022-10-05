import React from 'react'
import '../styles/CartBag.css'

export default function CartBag() {
  return (
    <div>
        <div className='cartBag-container'>
            <div className='cartBag-products'>
                <h2>Products</h2>
                <div className='cartBag-productDetail'>
                    <img className='cartBag-img' src='https://cocinateelmundo.com/wp-content/uploads/2018/06/comida-asiatica-cocinateelmundo-16.jpg'></img>
                    <p>Product details</p>
                    <p>Price $</p>
                    <span className='cartBag-delete'>X</span>
                </div>
                <div className='cartBag-login'>
                    <p>Login</p>
                </div>
                <div className='cartBag-payment'>
                    <p>Payment</p>
                    <img className='payment-img' src='https://t4.ftcdn.net/jpg/04/75/86/45/360_F_475864587_i3tUy1prvkk3GGSYBmorpvaAdoAcJfI4.jpg'></img>
                </div>
                <div className='cartBag-address'>
                    <p>Shipping Address</p>
                    <p>Data change</p>
                </div>

            </div>
            <div className='cartBag-total'>
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
    </div>
  )
}
