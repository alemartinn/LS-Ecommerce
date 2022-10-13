import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, {useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import '../styles/ScrollToTop.css'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({
      top:0,
      behavior: "smooth"
    })
  }, [pathname])

  function goToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
        <button className='scroll-to-top' onClick={goToTop}><FontAwesomeIcon icon={faArrowUp} /></button>
  )
}
export default ScrollToTop