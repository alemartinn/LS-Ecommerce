import React from 'react';
import { useSelector } from 'react-redux';
import '../styles/Contact.css';
import Button from "../components/Button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';


export default function Contact() {
    const {fontColor, bcgColor,thirdColor} = useSelector(state=>state.color)
    return (
        <main className='contact-page'  style={{backgroundColor: bcgColor, color: fontColor}}>
            <div className='contact-container'>
                <div className='contact-info'>
                    <div className='contact'>
                        <div className='contact-me'>
                            <h2 className='contact-title'>Contact</h2>
                            <div className='contact-me-data'><FontAwesomeIcon icon={faEnvelope}/> <span>lsfoodco@gmail.com</span></div>
                            <div className='contact-me-data'><FontAwesomeIcon icon={faLocationDot}/><span>4838 E Kings Canyon Rd, Fresno, CA 93727 +15594569050</span></div>
                            <div className='contact-me-data'><FontAwesomeIcon icon={faPhone}/><span>011-12345678</span></div>
                        </div>
                    </div>
                    <div className='contact-description'>
                        <p className='contact-description-p'>
                            Most of our client relationships are measured in years, not months. Learn more about how we can
                            improve your ecommerce generated from, and within, social media
                        </p>
                        <form onSubmit={e => e.preventDefault()}>
                            <div className='contact-inputs'>
                                <input className="contact-input" type="text" placeholder="Name"
                                style={{ backgroundColor: bcgColor, color: fontColor, borderColor: thirdColor }} />
                                <input className="contact-input" type="text" placeholder="Email"
                                style={{ backgroundColor: bcgColor, color: fontColor, borderColor: thirdColor }}/>
                                <textarea className="contact-input"
                                    style={{ backgroundColor: bcgColor, borderColor: thirdColor,color: fontColor, resize: "none" }}
                                    placeholder="Message..."
                                    rows="10" ></textarea>
                            </div>
                            <div style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}>
                                <Button>Send</Button>
                            </div>
                        </form>
                    </div>
                    <div className='contact-map'>
                        <img className='contact-map-img' src='/images/map.png' alt="map-location" />
                    </div>
                </div>
            </div>
        </main>
    )
}
