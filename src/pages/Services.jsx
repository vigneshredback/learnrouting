import React from 'react'
import Navbar from '../components/generalComponents/Navbar'
import {useSelector} from 'react-redux'

function Services() {
  let x = useSelector((a)=>a.counter)
  return (
    <div>
        <Navbar/>
        <h1>Services {x.name}</h1>
    </div>
  )
}

export default Services