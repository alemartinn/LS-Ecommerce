import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Dropdown(props) {
    const name = props.name
    const navLinks = props.links
    const [drop, setDrop] = useState(false)

    const showDrop = ()=>{
        setDrop(true)
    }
    const hideDrop = ()=>{
        setDrop(false)
    }

    
    const pages = (item) => (<Link className='link' styles={{display:"flex"}} key={item.name} to={item.to}>{item.name}</Link>)

  return (
        <div onMouseEnter={showDrop} onMouseLeave={hideDrop}>{name} 
        {drop ?( 
            <div className='header-dropdown'>
                {navLinks.map(pages)}
            </div>)
            :
            null}
        </div>

  )
}
