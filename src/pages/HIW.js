import { useSelector } from "react-redux"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  fa1,
  fa2,
  fa3,
  faTruckMoving,
  faCheckCircle,
  faListCheck,
  faPlateWheat,
  faAward
} from '@fortawesome/free-solid-svg-icons'

import "../styles/HIW.css"

function HIW() {
  const { bcgColor, fontColor, thirdColor, fourthColor, fivethColor } = useSelector(state => state.color)
  //faq-opening handling function
  const handleOpenFaq = (e) => {
    let container = e.currentTarget.parentElement
    var answer = container.children[1].firstChild
    var trigger = container.firstChild.children[1]

    if (trigger.classList.contains('hiw-faq-o')) {
      trigger.classList.remove('hiw-faq-o')
    }
    else if (!answer.classList.contains('active')) {
      trigger.classList.add('hiw-faq-o')
    }
    // if (container.classList.contains('hiw-faq-expanded')) {
    //   container.classList.remove('hiw-faq-expanded')
    // }
    // else if (!answer.classList.contains('active')) {
    //   container.classList.add('hiw-faq-expanded')
    // }

    if (!answer.classList.contains('active')) {
      answer.classList.add('active')
      answer.style.height = 'auto'
      let height = answer.clientHeight + "px"
      answer.style.height = '0px'
      setTimeout(function () {
        answer.style.height = height
      }, 0)
    } else {
      answer.style.height = '0px'
      answer.addEventListener('transitionend', function () {
        answer.classList.remove('active')
      }, {
        once: true
      });
    }
  }
  const triggerStyle = {
    borderLeft: `2px solid ${fontColor}`,
    borderBottom: `2px solid ${fontColor}`
  }
  return (
    <main className="hiw-main" style={{ backgroundColor: bcgColor }}>
      <div className="hiw-content">

        {/* step-by-step guide section */}
        <div className="hiw-guide">
          <div className="hiw-flex hiw-container">
            <div className="hiw-box">
              <img src="https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2020/11/Oatmeal-Recipe-5.jpg" alt="Exercise Class" />
              <div className="hiw-guide-info-container">
                <div className="hiw-guide-icon" style={{ backgroundColor: thirdColor }}>
                  <FontAwesomeIcon icon={fa1} />
                </div>
                <h4 style={{ color: fontColor }}>Choose recipes</h4>
                <p style={{ color: fontColor }}>Build your first box of 2-5 recipes. Choose from 1-4 people boxes</p>
              </div>
            </div>
            <div className="hiw-box">
              <img src="https://www.smarther.co/wp-content/uploads/2021/07/5-own-food-delivery-app.jpg" alt="Man doing dumbbell rows" />
              <div className="hiw-guide-info-container">
                <div className="hiw-guide-icon" style={{ backgroundColor: thirdColor }}>
                  <FontAwesomeIcon icon={fa2} />
                </div>
                <h4 style={{ color: fontColor }}>Pick your first delivery</h4>
                <p style={{ color: fontColor }}>Pre-portioned, ethically sourced ingredients, delivered for free</p>
              </div>
            </div>
            <div className="hiw-box">
              <img src="https://blog.kettleandfire.com/wp-content/uploads/2018/01/Family-Meal.jpg" alt="Woman doing leg press" />
              <div className="hiw-guide-info-container">
                <div className="hiw-guide-icon" style={{ backgroundColor: thirdColor }}>
                  <FontAwesomeIcon icon={fa3} />
                </div>
                <h4 style={{ color: fontColor }}>Enjoy</h4>
                <p style={{ color: fontColor }}>Easy to follow recipes with meals on the table in as little as 10 mins</p>
              </div>
            </div>
          </div>
        </div>

        {/* mobile app promo section */}
        <div className="hiw-promo">
          <img src="https://drive.google.com/uc?export=view&id=1BHTxfI6vBGxWh3w24ePciX2YZqC43dPe"></img>
        </div>

        {/* why choose us section */}
        <div className="hiw-benefits"
          style={{ backgroundColor: 'transparent' }}>
          <div className="hiw-why-us-head">
            <h4><span style={{ color: fontColor }}>Why Choose</span> Us?</h4>
            <p style={{ color: fontColor }}>Our recipes allow you to hit your nutritional and fitness goals, without sacrificing the great flavours and vibrancy that come from a freshly prepared meal.</p>
          </div>
          <div className="hiw-why-us-container">
            <div className="hiw-why-us-box" >
              <div className="hiw-why-us-item" style={{ backgroundColor: thirdColor }}> <span className="hiw-why-us-icon feature-box-one"><FontAwesomeIcon icon={faCheckCircle} /></span>
                <h4 style={{ color: fontColor }}>TOP QUALITY AND TASTE</h4>
                <p style={{ color: fontColor }}>Focusing on quality, LS Food brings only the best products, made with prime ingredients that are selected with care.</p>
              </div>
            </div>
            <div className="hiw-why-us-box">
              <div className="hiw-why-us-item" style={{ backgroundColor: thirdColor }}> <span className="hiw-why-us-icon feature-box-two"><FontAwesomeIcon icon={faPlateWheat} /></span>
                <h4 style={{ color: fontColor }}>FOOD SAFETY</h4>
                <p style={{ color: fontColor }}>Our ambition is to safeguard the health of our customers. All of our providers are certified according to International Food Standards.</p>
              </div>
            </div>
            <div className="hiw-why-us-box">
              <div className="hiw-why-us-item" style={{ backgroundColor: thirdColor }}> <span className="hiw-why-us-icon feature-box-three"><FontAwesomeIcon icon={faTruckMoving} /> </span>
                <h4 style={{ color: fontColor }}>EASY DELIVERIES</h4>
                <p style={{ color: fontColor }}>Our logistic team is ready to offer a flexible delivery service, in order to ensure the products arrive in optimal conditions.</p>
              </div>
            </div>
            <div className="hiw-why-us-box">
              <div className="hiw-why-us-item" style={{ backgroundColor: thirdColor }}> <span className="hiw-why-us-icon feature-box-four"><FontAwesomeIcon icon={faAward} /></span>
                <h4 style={{ color: fontColor }}>INNOVATIVE AND AWARDED</h4>
                <p style={{ color: fontColor }}>In order to propose new culinary experiences, our staff continuosly create unique recipes and concepts.</p>
              </div>
            </div>
          </div>
        </div>

        {/* frequently asked question section */}
        <div className="hiw-faq"
          style={{ backgroundColor: thirdColor }}>
          <h1 style={{ color: fontColor }}>Frequently Asked Questions</h1>
          <div className="hiw-faq-topic" style={{ borderBottom: `1px solid ${fontColor}` }}>
            <div className="hiw-faq-open" onClick={handleOpenFaq}>
              <h2 className="hiw-faq-question" style={{ color: fontColor }}>1. What's in the box?</h2>
              <span className="hiw-faq-t" style={triggerStyle}></span>
            </div>
            <div className="hiw-faq-answer-wrapper">
              <p className="hiw-faq-answer" style={{ color: fontColor }}>All the pre-portioned ingredients to cook the delicious, healthy recipes you've chosen - all our meat  is free-range and ethically sourced from small farms, fresh fish is sustainably caught and our vegetables are cultivated in the most natural way possible.</p>
            </div>
          </div>
          <div className="hiw-faq-topic" style={{ borderBottom: `1px solid ${fontColor}` }}>
            <div className="hiw-faq-open" onClick={handleOpenFaq}>
              <h2 className="hiw-faq-question" style={{ color: fontColor }}>2. How does delivery work?
              </h2><span className="hiw-faq-t" style={triggerStyle}></span>
            </div>
            <div className="hiw-faq-answer-wrapper">
              <p className="hiw-faq-answer" style={{ color: fontColor }}>We offer free delivery nationwide. On day of delivery, you'll get a text with an eta but you don't need to be in to receive your box. Our insulated boxes will be keep everything fresh for up to 48 hours and your box will be left in your designated safe place.</p>
            </div>
          </div>
          <div className="hiw-faq-topic" style={{ borderBottom: `1px solid ${fontColor}` }}>
            <div className="hiw-faq-open" onClick={handleOpenFaq}>
              <h2 className="hiw-faq-question" style={{ color: fontColor }}>3. Do you offer a guarantee?
              </h2><span className="hiw-faq-t" style={triggerStyle}></span>
            </div>
            <div className="hiw-faq-answer-wrapper">
              <p className="hiw-faq-answer" style={{ color: fontColor }}>If you're not entirely happy, we offer 100% money-back guarantee.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
export default HIW