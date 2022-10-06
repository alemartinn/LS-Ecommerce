import React from 'react'
import '../styles/Contact.css'
export default function Contact() {
  return (
    <div className='contact-container'>
        <div className='contact-info'>
            <div className='contact'>
                <h2 className='contact-title'>Contact</h2>
                <p>📨 lsfoodco@gmail.com</p>
                <p>📞 011-12345678</p>
                <p>🏠 San Francisco Solano</p>
            </div>  
            <div className='contact-description'>
                <p className='contact-description-p'>
                    Most of our client relationships are measured in years, not months.Learn more about how we can
                    improve your ecommerce generated from, and within, social media
                </p>
                <div className='contact-inputs'>
                    <input class="effect-1" type="text" placeholder="Name"/>
                    <span class="focus-border1"></span>
                    <input class="effect-2" type="text" placeholder="Email"/>
                    <span class="focus-border2"></span>
                </div>
                <textarea style={{resize:"none", width:"100%"}} rows="10" cols="32" ></textarea>
            </div>
        </div>
    </div>
  )
}
