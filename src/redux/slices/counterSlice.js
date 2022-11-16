import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value : {
      name : '' ,
      number : 0 , 
    }
     
  },
  reducers: {
    increment: state => {
      state.value.name = '' 
      state.value.name = 'object'
      const a = state.value.number +=1 
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      a.toString(); 
      state.value.name+=a  
      
    },
    decrement: state => {
      state.value.name = '' 
      state.value.name = 'object'
      const a = state.value.number -=1 
      a.toString(); 
      state.value.name+=a  
    },
    incrementByAmount: (state,action) => {
      state.value.name = '' ;
      state.value.number = 0 ;
      state.value={
        name: action.payload.name,
        number: action.payload.number 
      } 
      // state.value.name=action.payload.name;
      // state.value.number=action.payload.number
    }
  }
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions ;

export default counterSlice.reducer ; 