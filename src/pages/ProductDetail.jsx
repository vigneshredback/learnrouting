import React from 'react'
import Navbar from '../components/generalComponents/Navbar'
import {useParams,Link} from 'react-router-dom'

function ProductDetail() {
    let {string} = useParams();
  return (

    <div>
        <Navbar/>
        <h1>ProductDetail {string}</h1>
        <hr />
        <Link to='/products'>back</Link>
    </div>
  )
}

export default ProductDetail