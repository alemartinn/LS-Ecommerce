import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import '../styles/CartBag.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faXmark, faTruckFast, faUser, faTag, faPlus, faMinus} from '@fortawesome/free-solid-svg-icons'
import Form from '../components/Form'
import { openModal, specifyModal } from '../features/modal/modalSlice'
import Card from '../components/Card'


export default function CartBag() {
const coupon = 3
const [open, setOpen] = useState(false)
const [focus, setFocus] =useState(false)
const [selectValue, setSelectValue] = useState()
const [address, setAddress] = useState()
const price = 5
const [subTotal, setSubTotal] = useState(price)
const [quantity, setQuantity] = useState(1)
/// just because i want to test it
let testDiscount = coupon * quantity
let totalValue = subTotal * ( (100- testDiscount) / 100 )
const user = useSelector(store=>store.userData)
const modelCart = [
        {name:'Name',label:"Name", type: 'text', required: 'required', autoComplete: 'on'}, 
        {name:'Address',label:"Address", type: 'text', required: 'required', autoComplete: 'on'}, 
        {name:'Zip or Postal Code',label:"Zip or Postal Code", type: 'number', required: 'required', autoComplete: 'on'}, 
        {name:'Country or Region',label:"Country or Region", type: 'text', required: 'required', autoComplete: 'on'}, 
        {name:'Phone',label:"Phone", type: 'number', required: 'required', autoComplete: 'on'}, 

]
const modelPaymentForm =[
    {name:'Card Number',label:"Card Number", type: 'number', required: 'required', autoComplete: 'on'}, 
    {name:'Name on Card',label:"Name on Card", type: 'text', required: 'required', autoComplete: 'on'}, 
    {name:'Expiry date',label:"Expiry date", type: 'date', required: 'required', autoComplete: 'on'}, 
    {name:'Security Code',label:"Security Code", type: 'number',  max:'3', required: 'required', autoComplete: 'on'}, 
]
const dispatch = useDispatch()
const multiDispatcher = (modalType) => {
    dispatch(openModal())
    dispatch(specifyModal(modalType))
}
    const {
        bcgColor,
        fontColor,
        thirdColor,
        light} = useSelector(state => state.color)
function focused (e){
    if (focus !== true){
        setFocus(true)
        setSelectValue(e.target.value)
    } else if (selectValue !== e.target.value) {
        e.target.value === "none" ? setSelectValue('') 
        : setSelectValue(e.target.value) 
    }
}
function selected (e){
    if (focus!==true){
        setFocus(true)
        setAddress(e.target.value)
    } else if (address !== e.target.value){
        e.target.value === "none" ? setAddress('') 
        : setAddress(e.target.value) 
    }
}

function pressed (){
    if (open !== true){
        setOpen(true)
    } else{
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

    if (quantity > 1){
        setSubTotal( price * quantity)
    }
}, [quantity])

console.log(subTotal)
    return (
        <>
        <main className='cart-bag-main' style={{ backgroundColor: bcgColor, color: fontColor }}>
            <div className='cart-bag-container'  >
                <div className={`cart-bag-products ${light && "light"}`} style={{ backgroundColor: thirdColor}}> 
                    <h2>My Cart</h2>
                    <div className="cart-table" style={{ backgroundColor: bcgColor, color: fontColor }}>
                        <p className='cart-p'>Product</p>
                        <p className='cart-p'>Price</p>
                        <p className='cart-p'>Quantity</p>
                        <p className='cart-p'>Subtotal</p>
                    </div>
                    <div className="cart-bag-products-detail" >
                        <div className='cart-bag-product'style={{ backgroundColor: bcgColor, color: fontColor }} >
                            <div className='cart-bag-card-number' style={{ backgroundColor: bcgColor, color: fontColor }}>
                            <img className='cart-bag-img' src='https://cocinateelmundo.com/wp-content/uploads/2018/06/comida-asiatica-cocinateelmundo-16.jpg' />
                            <p>
                            Price: ${price}
                            </p>
                                <div className='quantity-div' style={{ backgroundColor: bcgColor, color: fontColor }}>
                                <p> Quantity:  {quantity}</p>
                                <div className='cart-quantity-btn' style={{ backgroundColor: bcgColor, color: fontColor }} >
                                    <FontAwesomeIcon className='cart-bag-quantity' icon={faPlus}  onClick={ () => setQuantity(quantity + 1)}/>
                                    <FontAwesomeIcon className='cart-bag-quantity' icon={faMinus}  onClick={() => { if (quantity >= 2) { setQuantity( (quantity - 1))}}}/>
                                </div>
                                </div>
                                
                            <p>Subtotal: $ {subTotal}</p>
                            </div>
                            <button className='cart-bag-delete'
                            style={{backgroundColor:bcgColor, color:fontColor}}>
                                <FontAwesomeIcon icon={faXmark} /></button>

                        </div>
                        
                            {/* Tryout */}
                        <div className='cart-bag-product'style={{ backgroundColor: bcgColor, color: fontColor }} >
                            <div className='cart-bag-card-number' style={{ backgroundColor: bcgColor, color: fontColor }}>
                            <img className='cart-bag-img' src='https://cocinateelmundo.com/wp-content/uploads/2018/06/comida-asiatica-cocinateelmundo-16.jpg' />
                            <p>
                            Price: ${price}
                            </p>
                                <div className='quantity-div' style={{ backgroundColor: bcgColor, color: fontColor }}>
                                <p> Quantity:  {quantity}</p>
                                <div className='cart-quantity-btn' style={{ backgroundColor: bcgColor, color: fontColor }} >
                                    <FontAwesomeIcon className='cart-bag-quantity' icon={faPlus}  onClick={ () => setQuantity(quantity + 1)}/>
                                    <FontAwesomeIcon className='cart-bag-quantity' icon={faMinus}  onClick={() => { if (quantity >= 2) { setQuantity( (quantity - 1))}}}/>
                                </div>
                                </div>
                                
                            <p>Subtotal: $ {subTotal}</p>
                            </div>
                            <button className='cart-bag-delete'
                            style={{backgroundColor:bcgColor, color:fontColor}}>
                                <FontAwesomeIcon icon={faXmark} /></button>

                        </div>
                        {/*End of tryout */}

                    </div>
                    {user? null
                        : <div className="cart-bag-login" style={{ backgroundColor: bcgColor, color: fontColor }}>
                            <p className='cart-bag-subtitle '>Existing Customer?</p>
                            <FontAwesomeIcon onClick={() => multiDispatcher(user?.name?'profile':'signIn')}
                className='cart-bag-loginicon'
                alt="profile"
                icon={faUser}></FontAwesomeIcon>
                    <p className="cart-logmessage">Sign in in your account</p>
                        </div> }
                    <div className="cart-bag-payment" style={{ backgroundColor: bcgColor, color: fontColor }}>
                        <p className='cart-bag-subtitle'>Payment</p>
                        <select onChange={focused} className='cart-bag-select'>
                            <option  value="none"> Payment option  </option>
                            <option  name="Cash" value="Cash"> Cash </option>
                            <option  name="Credit" value="Card"> Credit Card </option>
                            <option  name="Debit" value="Card"> Debit Card </option>
                        </select>
                        {selectValue==='Card'?
                        <Form modelForm={modelPaymentForm} />  
                        : selectValue === 'Cash'?
                
                        <div style={{ backgroundColor: bcgColor, color: fontColor }}>
                        <p className='cart-message'> Pay up when your product arrives </p> <FontAwesomeIcon icon={faTruckFast} />
                        </div>
                    
                        :null}


                    </div>
                    <div className="cart-bag-address" style={{ backgroundColor: bcgColor, color: fontColor }}>
                        <div style={{ backgroundColor: bcgColor, color: fontColor }}>
                        <p className='cart-bag-subtitle'>Shipping Address</p>
                        <select className='cart-bag-select' onChange={selected} >
                            <option value='none'> Select an Address</option>
                            <option value="Elvio's Hut"> Elvio's Hut</option>
                            <option value= "Juan's Stable"> Juan's Stable</option>
                            <option value= " Daniel's Cave"> Daniel's Cave</option>
                            <option value= "Ale's Penthouse"> Ale's Penthouse</option>
                            <option value= "Andy's Consortium Bag"> Andy's Consortium Bag</option>
                        </select>
                        </div>
                        <>
                        { address? <p className='cart-message'>Will send the product to {address}</p> : null}
                        </>
                        <div style={{ backgroundColor: bcgColor, color: fontColor }}>

                        {!open? <p className='cart-bag-subtitle '>Have a new address?</p> : null}
                        <button className='cart-bag-addressbtn' onClick={pressed} > {!open? "Data change" : "Close"}</button>
                        {open?
                            <Form  modelForm={modelCart} />
                            : null}
                            </div>
                        
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
        </main>
            <div className='cart-popular-choices'>
                <h2> Other popular choices...</h2>
                <p>Nacho's Apartment 🏘</p>
            </div>
            </>
    )
}
