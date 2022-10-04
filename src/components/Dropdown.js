import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Dropdown(props) {
    const {name, links, textColor, styles} = props
    const [drop, setDrop] = useState(false)
    const showDrop = ()=>{
        setDrop(true)
    }
    const hideDrop = ()=>{
        setDrop(false)
    }

    
    const pages = (item) => (<Link className='link' style={{color:textColor}} key={item.name} to={item.to}>{item.name}</Link>)

  return (
      <div onMouseEnter={showDrop} onMouseLeave={hideDrop}
          style={{ color: textColor }}>
        {name}
        {drop ?( 
            <div style={styles}>
                {links.map(pages)}
            </div>)
            :
            null}
        </div>

  )
}
