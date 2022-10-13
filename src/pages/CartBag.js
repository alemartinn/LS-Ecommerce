import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark, faTruckFast, faUser, faTag, faPlus, faMinus, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import '../styles/CartBag.css'
import Form from '../components/Form'
import Card from '../components/Card'
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
  /// just because i want to test it
  let testDiscount = coupon * quantity
  let totalValue = subTotal * ((100 - testDiscount) / 100)
  const user = useSelector(store => store.userData)
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
  // function handleAddToCart(item) {
  //   dispatch(addToCart(item))
  // }
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
  useEffect(() => {
    if (quantity > 1) {
      setSubTotal(price * quantity)
    }
  }, [quantity])
  useEffect(() => {
   dispatch(getTotals())
  }, [cart])
  return (
    <>
      <main className='cart-bag-main' style={{ backgroundColor: bcgColor, color: fontColor }}>
        <div className='cart-bag-container'  >
          <div className={`cart-bag-products ${light && "light"}`} style={{ backgroundColor: thirdColor }}>
            <div className="cart-header">
              <h2>My Cart</h2>
              <FontAwesomeIcon icon={faTrashCan} onClick={() => dispatch(emptyCart())} />
            </div>
            <div className="cart-table" style={{ backgroundColor: bcgColor, color: fontColor }}>
              <p className='cart-p'>Product</p>
              <p className='cart-p'>Price</p>
              <p className='cart-p'>Quantity</p>
              <p className='cart-p'>Subtotal</p>
            </div>
            <div className="cart-bag-products-detail" >
              {cart.cartItems.length === 0 ? (
                <div className="cart-empty">
                  <p>Empty Cart Bag</p>
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
                {cart.cartItems?.map(cartItem => (
                  <div className='cart-bag-product' style={{ backgroundColor: bcgColor, color: fontColor }} >
                    <div className='cart-bag-card-number' style={{ backgroundColor: bcgColor, color: fontColor }}>
                      <img className='cart-bag-img' src={cartItem.recipe.image} alt={cartItem._id} />
                      <p>
                        Price: ${cartItem.price}
                      </p>
                      <div className='quantity-div' style={{ backgroundColor: bcgColor, color: fontColor }}>
                        <p> Quantity:  {cartItem.quantity}</p>
                        <div className='cart-quantity-btn' style={{ backgroundColor: bcgColor, color: fontColor }} >
                          <FontAwesomeIcon className='cart-bag-quantity' icon={faPlus} onClick={() => handleIncreaseQuantity(cartItem)} />
                          <FontAwesomeIcon className='cart-bag-quantity' icon={faMinus} onClick={() => handleDecreaseQuantity(cartItem)} />
                        </div>
                      </div>
                      <p>Subtotal: ${cartItem.price * cartItem.quantity}</p>
                    </div>
                    <button className='cart-bag-delete'
                      style={{ backgroundColor: bcgColor, color: fontColor }}
                      onClick={() => handleRemoveFromCart(cartItem)}
                    >
                      <FontAwesomeIcon icon={faXmark} />remove</button>
                  </div>
                ))}
              </>)
              }
            </div>
            {user ? null
              : <div className="cart-bag-login" style={{ backgroundColor: bcgColor, color: fontColor }}>
                <p className='cart-bag-subtitle '>Existing Customer?</p>
                <FontAwesomeIcon onClick={() => multiDispatcher(user?.name ? 'profile' : 'signIn')}
                  className='cart-bag-loginicon'
                  alt="profile"
                  icon={faUser}></FontAwesomeIcon>
                <p className="cart-logmessage">Sign in in your account</p>
              </div>}
            <div className="cart-bag-payment" style={{ backgroundColor: bcgColor, color: fontColor }}>
              <p className='cart-bag-subtitle'>Payment</p>
              <select onChange={focused} className='cart-bag-select'>
                <option value="none"> Payment option  </option>
                <option name="Cash" value="Cash"> Cash </option>
                <option name="Credit" value="Card"> Card </option>
              </select>
              {selectValue === 'Card' ?
                <Paypalbtn />
                : selectValue === 'Cash' ?
                  <div style={{ backgroundColor: bcgColor, color: fontColor }}>
                    <p className='cart-message'> Pay up when your product arrives </p> <FontAwesomeIcon icon={faTruckFast} />

                    <div className="cart-bag-address" style={{ backgroundColor: bcgColor, color: fontColor }}>
                      <p className='cart-bag-subtitle'>Shipping Address</p>
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
                          {address ? <p className='cart-message'>Will send the product to {address}</p> : <p className='cart-message'> Please select an address.</p>}
                        </>
                      </div>
                      {!open ? <p className='cart-bag-subtitle '>Have a new address?</p> : null}
                      <div className='cart-form-div'>
                        {open ?
                          <Form modelForm={modelCart} />
                          : null}
                        <button className='cart-bag-addressbtn' onClick={pressed} > {!open ? "Data change" : "Close"}</button>
                      </div>
                    </div>
                  </div>
                  : null}
            </div>
          </div>
          <div className={`cart-bag-total ${light && "light"}`}>
            <div className='cartBag-totalPrice'>

              <p className='cart-bag-subtitle'>Total</p>
            </div>
            <div className='cartBag-discount'>
              <p className='cart-bag-data' >Default Price : ${subTotal}</p>
              <p className='cart-bag-data'>With coupon: ${subTotal - (coupon * quantity)}</p>
              <p className='cart-bag-discount'>% {testDiscount} of discount !</p>
            </div>
            <div className='cartBag-benefits'>
              <p className='cart-bag-data'>Info/Benefits</p>
              <ul className='cart-list'>
                <li><span>FREE gifts</span> from other healthy & sustainable brands</li>
                <li>Exclusive access to our customer-only <span>Facebook comunity!</span></li>
                <li><span>FREE weekly magazine</span> packed with recipes, offers and chefs tips</li>
              </ul>
              <div className='cart-benefits'>
                {/* {couponMaker.map(coupons)} */}
                <div className='cart-discounts'>
                  <p className='cart-message'>Coupon 1</p>
                  <FontAwesomeIcon icon={faTag} />
                </div>
                <div className='cart-discounts'>
                  <p className='cart-message'>Coupon 2</p>
                  <FontAwesomeIcon icon={faTag} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='cart-popular-choices'>
          <h2>Popular choices...</h2>
          <div className='cart-choices-div'>
            <h2>Nacho's house 😍👍👌👀🏘</h2>
          </div>
        </div>
      </main>
    </>
  )
}
