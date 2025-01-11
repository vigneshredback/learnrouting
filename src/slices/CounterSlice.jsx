import {createSlice} from '@reduxjs/toolkit'


let initialState = {
    value: 25,
    name:'irfan',
    hobbies:['reading','coding','swimming']
}

const CounterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state, x) => {
            console.log( typeof Number(x.payload));
            
            state.value += Number(x.payload)
        },
        decrement: (state,action) => {
            state.value -= 1
        },
        changeName: (state,action) => {
            state.name = action.payload
        }
    }
})

export const {increment, decrement , changeName} = CounterSlice.actions
export default CounterSlice.reducer
    