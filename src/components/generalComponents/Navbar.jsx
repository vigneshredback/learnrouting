import React from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <nav style={{display:"flex",gap:"20px",backgroundColor:"black",color:"white",padding:"10px"}}>
      
            <Link to='/'>home</Link>
            <Link to='/contact'>contact</Link>
            <Link to='/services'>services</Link>
            <Link to='/about'>about</Link>
            <Link to='/products'>products</Link>
        </nav>
    </div>
  )
}

export default Navbar