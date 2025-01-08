import React from 'react'
import Navbar from '../components/generalComponents/Navbar';
import { Link } from 'react-router-dom';

export const product = [ 
    { id: "mobile", name: "mobile", des: "azahnjzba" }, 
    { id: "mobile", name: "mobile", des: "two abkbs" }, 
    { id: "car", name: "car", des: "two abkbs" }, 
   ]; 

function Products() {
  return (
    <div>
        <Navbar/>
        <h1>Products</h1>
        <br />
        {product.map((item,index)=>(
            <div key={index}>
                <h2>{item.name}</h2>
                <p>{item.des}</p>
                <Link to={`/${item.id}`}>view product</Link>
                <hr />
            </div>
           
        ))}
    </div>
  )
}

export default Products