import React, { useState } from 'react'
import Navbar from '../components/generalComponents/Navbar'
import {useDispatch,useSelector} from 'react-redux'
import {increment,decrement,changeName} from '../slices/CounterSlice'


function Home() {
  let count = useSelector((state)=> state.counter)
  let dispatch = useDispatch()

  let [userInput,setUserInput]=useState(0)
  let [name,setName]=useState("")
  
  return (
    <div className=''>
        <Navbar/>
        <h1>home page</h1>
        <p>our count {count.value}</p>
        <p>our name {count.name}</p> 
        <p>our hobbies 
          {
            count.hobbies.map((hobby,index)=>{
              return <h1 key={index}>{hobby}</h1>
            })
          }
          </p> 

          <input 
          type="number"
          value={userInput} 
          onChange={(e)=>setUserInput(e.target.value)}
          />

          <input  type="text" 
          value={name}
          onChange={(e)=>setName(e.target.value)}/>

          <hr />
          <button onClick={()=>dispatch(increment(userInput))}>increment</button>
          <button onClick={()=>dispatch(decrement())}>decriment</button>
          <button onClick={()=>dispatch(changeName(name))}>change</button>

    </div>
  )
}

export default Home