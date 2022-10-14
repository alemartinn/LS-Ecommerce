import React, { useState, useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark, faCheckCircle, faTruckFast, faUser, faTag, faPlus, faMinus, faTrashCan } from '@fortawesome/free-solid-svg-icons'
// import '../styles/CartBag.css'
import '../styles/CartBagNewDesign.css'
import Form from '../components/Form'
import Paypalbtn from '../components/Paypalbtn'
import { openModal, specifyModal } from '../features/modal/modalSlice'
import { addToCart, removeFromCart, decreaseQuantity, emptyCart, getTotals } from '../features/cart/cartSlice'

export default function CartBag() {
  const coupon = 3
  const [open, setOpen] = useState(false)
  const [focus, setFocus] = useState(false)
  const [selectValue, setSelectValue] = useState()
  const [address, setAddress] = useState()
  const price = 5
  const [subTotal, setSubTotal] = useState(price)
  const [quantity, setQuantity] = useState(1)
  const cardMethodRef = useRef()
  const paypalMethodRef = useRef()
  /// just because i want to test it
  let testDiscount = coupon * quantity
  let totalValue = subTotal * ((100 - testDiscount) / 100)
  const user = localStorage.getItem("token")
  const modelCart = [
    { name: 'Name', label: "Name", type: 'text', required: 'required', autoComplete: 'on' },
    { name: 'Address', label: "Address", type: 'text', required: 'required', autoComplete: 'on' },
    { name: 'Zip or Postal Code', label: "Zip or Postal Code", type: 'number', required: 'required', autoComplete: 'on' },
    { name: 'Country or Region', label: "Country or Region", type: 'text', required: 'required', autoComplete: 'on' },
    { name: 'Phone', label: "Phone", type: 'number', required: 'required', autoComplete: 'on' },
  ]
  const cart = useSelector((state) => state.cart)
  const dispatch = useDispatch()
  const multiDispatcher = (modalType) => {
    dispatch(openModal())
    dispatch(specifyModal({ name: modalType }))
  }
  let tax = (cart.cartTotalAmount * 0.05)
  let shipping = 10
  let totalPlusTaxes = (tax > 0 ? (tax + shipping + cart.cartTotalAmount) : 0)
  function handleRemoveFromCart(item) {
    dispatch(removeFromCart(item))
  }
  function handleIncreaseQuantity(item) {
    dispatch(addToCart(item))
  }
  function handleDecreaseQuantity(item) {
    dispatch(decreaseQuantity(item))
  }
  const {
    bcgColor,
    fontColor,
    thirdColor,
    fifthColor,
    mainColor,
    light } = useSelector(state => state.color)
  function focused(e) {
    if (focus !== true) {
      setFocus(true)
      setSelectValue(e.target.value)
    } else if (selectValue !== e.target.value) {
      e.target.value === "none" ? setSelectValue('')
        : setSelectValue(e.target.value)
    }
  }
  function selected(e) {
    if (focus !== true) {
      setFocus(true)
      setAddress(e.target.value)
    } else if (address !== e.target.value) {
      e.target.value === "none" ? setAddress('')
        : setAddress(e.target.value)
    }
  }
  function pressed() {
    if (open !== true) {
      setOpen(true)
    } else {
      setOpen(false)
    }
  }
  // const couponMaker = (discountType) => {
  //  
  //     <div className='cart-discounts'>
  //         <p className='cart-message'> {discountType}</p>
  //         <FontAwesomeIcon icon={faTag} />
  //     </div>
  //     )
  // }
  // useEffect(() => {
  //   if (quantity > 1) {
  //     setSubTotal(price * quantity)
  //   }
  // }, [quantity])
  useEffect(() => {
    if (light) {
      setSubTotal(price * quantity)
    }
  }, [light])

  const [cardMethod, setCardMethod] = useState(false)
  const [paypalMethod, setPaypalMethod] = useState(false)
  function togglePaymentMethod(method) {
    if (method === 'card') {
      cardMethodRef.current.classList.add('selected')
      cardMethodRef.current.children[2].classList.add('fill')
      paypalMethodRef.current.classList.remove(light ? 'selected' : 'dark')
      paypalMethodRef.current.children[2].classList.remove('fill')
      setCardMethod(true)
      setPaypalMethod(false)
    } else {
      cardMethodRef.current.classList.remove('selected')
      cardMethodRef.current.children[2].classList.remove('fill')
      paypalMethodRef.current.classList.add('selected')
      paypalMethodRef.current.children[2].classList.add('fill')
      setPaypalMethod(true)
      setCardMethod(false)
    }
  }
  useEffect(() => {
    dispatch(getTotals())
  }, [cart])
  return (
    <main  style={{ color: fontColor, backgroundColor: bcgColor }}>
      <div className="cart-container">
      <h1 className="heading">
        My Cart
      </h1>
      <div className="item-flex">
        <section className="checkout" style={{ backgroundColor: thirdColor }}>
          <h2 className="section-heading">Payment details</h2>
          <div className="payment-form">
            <div className="payment-method">
              <button className="method selected" onClick={() => togglePaymentMethod('card')} ref={cardMethodRef}>
                <ion-icon name="card"></ion-icon>
                <span>Credit Card</span>
                <FontAwesomeIcon className='checkmark fill' icon={faCheckCircle} />
              </button>
              <button className="method" onClick={() => togglePaymentMethod('paypal')} ref={paypalMethodRef}>
                <ion-icon name="logo-paypal"></ion-icon>
                <span>PayPal</span>
                <FontAwesomeIcon className='checkmark' icon={faCheckCircle} />
              </button>
            </div>
            {!paypalMethod ? (
              <form action="#" style={{ color: fontColor }}>
                <div className="cardholder-name">
                  <label className="label-default">Cardholder name</label>
                  <input type="text" name="cardholder-name" id="cardholder-name" className="input-default" style={{backgroundColor: bcgColor}} />
                </div>
                <div className="card-number">
                  <label  className="label-default">Card number</label>
                  <input type="number" name="card-number" id="card-number" className="input-default" style={{backgroundColor: bcgColor}} />
                </div>
                <div className="input-flex">
                  <div className="expire-date">
                    <label className="label-default">Expiration date</label>
                    <div className="input-flex">
                      <input type="number" name="day" id="expire-date" placeholder="mm" min="1" max="12"
                        className="input-default"  style={{backgroundColor: bcgColor}}>
                      </input>
                      <input type="number" name="month" id="expire-date" placeholder="yy" min="22" max="30"
                        className="input-default"  style={{backgroundColor: bcgColor}}></input>
                    </div>
                  </div>
                  <div className="cvv">
                    <label className="label-default">CVV</label>
                    <input type="number" name="cvv" id="cvv" className="input-default"  style={{backgroundColor: bcgColor}}/>
                  </div>
                </div>
              </form>
            ) : (
              <Paypalbtn />
            )}
          </div>
          {user ?
            null
            : <div className="cart-bag-login" style={{ backgroundColor: bcgColor, color: fontColor }}>
              <p className='cart-bag-subtitle '>Already a customer?</p>
              <FontAwesomeIcon onClick={() => multiDispatcher(user?.name ? 'profile' : 'signIn')}
                className='cart-bag-login-icon'
                alt="profile"
                icon={faUser}></FontAwesomeIcon>
              <p className="cart-log-message">Sign in with your account</p>
            </div>}
          <div className="cart-bag-address" style={{ backgroundColor: bcgColor, color: fontColor }}>
            <div>
              <p className='cart-bag-subtitle'>Shipping address</p>
            </div>
            <div>
              <select className='cart-bag-select' onChange={selected} >
                <option value='none'> Select an Address</option>
                <option value="Elvio's Hut"> Elvio's Hut</option>
                <option value="Juan's Stable"> Juan's Stable</option>
                <option value=" Daniel's Cave"> Daniel's Cave</option>
                <option value="Ale's Penthouse"> Ale's Penthouse</option>
                <option value="Andy's Consortium Bag"> Andy's Consortium Bag</option>
              </select>
              <div>
                <>
                  {address && <p className='cart-message'>We will ship the products to {address}</p>}
                </>
              </div>
            </div>
            <div className='cart-form-div'>
              {open ?
                <Form modelForm={modelCart} />
                : null}
              <button className='cart-bag-address-btn' onClick={pressed} > {!open ? "New address" : "Close"}</button>
            </div>
          </div>
        </section>
        <section className="cart">
          <div className="cart-item-box">
            <h2 className="section-heading">Order summary</h2>
            {cart.cartItems.length === 0 ? (
              <div className="cart-empty">
                <p>(empty bag)</p>
                <img src='https://2.bp.blogspot.com/-VYC7hvhUz4U/WdcPLAr86jI/AAAAAAAABuA/G3y27JwIL_0S5OsVIp6maXjsdgLRumaTwCLcBGAs/s1600/emptycart.png'></img>
                <div className='cart-start-shopping'>
                  <Link to='/' >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill={fontColor}
                      className="bi bi-arrow-left"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                      />
                    </svg>
                    <span>Start shopping</span>
                  </Link>
                </div>
              </div>
            ) : (<>
              {cart.cartItems?.map((cartItem, index) => (
                <div className="product-card" key={cartItem.name}>
                  <div className="card">
                    <div className="img-box">
                      <img src={cartItem.recipe.image} alt={cartItem._id} width="80px" className="product-img" />
                    </div>
                    <div className="detail">
                      <h4 className="product-name" style={{ color: fontColor }}>{cartItem.name} </h4>
                      <div className="wrapper">
                        <div className="product-qty">
                          <button id="decrement">
                            <FontAwesomeIcon className='cart-bag-quantity' icon={faMinus} onClick={() => handleDecreaseQuantity(cartItem)} />
                          </button>
                          <span id="quantity">{cartItem.quantity}</span>
                          <button id="increment">
                            <FontAwesomeIcon className='cart-bag-quantity' icon={faPlus} onClick={() => handleIncreaseQuantity(cartItem)} />
                          </button>
                        </div>
                        <div className="price">
                          $ <span id="price">{cartItem.price.toFixed(2)}</span>
                        </div>
                      </div>
                    </div>
                    <button className="product-close-btn">
                      <ion-icon name="close-outline"></ion-icon>
                    </button>
                  </div>
                </div>
              ))}
            </>)
            }
          </div>
          <div className="wrapper">
            <div className="discount-token">
              <label className="label-default">Gift card/Discount code</label>
              <div className="wrapper-flex">
                <input type="text" name="discount-token" id="discount-token" className=" code-input"  style={{borderColor: fontColor}}/>
                <button className="btn btn-outline" style={{ color: fontColor,backgroundColor: thirdColor }}>Apply</button>
              </div>
            </div>
            <div className="amount">
              <div className="subtotal">
                <span>Subtotal</span> <span>$ <span id="subtotal">{cart.cartTotalAmount.toFixed(2)}</span></span>
              </div>
              <div className="tax">
                <span>Tax</span> <span>$<span id="tax">{tax.toFixed(2)}</span></span>
              </div>
              <div className="shipping">
                <span>Shipping</span> <span>$ <span id="shipping">{cart.cartTotalAmount > 0 ? shipping.toFixed(2) : 0}</span></span>
              </div>
              <div className="total" style={{ color: fontColor }}>
                <span>Total</span> <span>$ <span id="total">{totalPlusTaxes}</span></span>
              </div>
            </div>
          </div>
        </section>
      </div >
      <div className='cart-bottom-btns'>
        <button className="btn btn-primary checkout-btn" style={{ color: fontColor, backgroundColor: thirdColor }}>
          <b>Checkout:</b> $ <span id="payAmount">{totalPlusTaxes}</span>
        </button>
        <button className="btn cart-delete-btn" onClick={()=>dispatch(emptyCart())} style={{ color: fontColor, backgroundColor: mainColor}}>
          Empty cart
        </button>
      </div>
      </div>
    </main >
  )
}
