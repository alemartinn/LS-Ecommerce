import React, {useEffect } from 'react'
import { useLocation } from 'react-router-dom'

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
        <button className='scroll-to-top' onClick={goToTop}>Scroll to Top</button>
  )
}
export default ScrollToTop