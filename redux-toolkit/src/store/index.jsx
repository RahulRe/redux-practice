import {configureStore,createSlice} from '@reduxjs/toolkit'

const counterSlicer = createSlice({
    name:'counter',
    initialState: {counter:0},
    reducers: {
        increment: (state)=>{
            state.counter+=1
        },
        decrement:(state)=>{
            state.counter-=1
        }
        
    }
})

export const {increment,decrement} = counterSlicer.actions;

const store = configureStore({
    reducer: counterSlicer.reducer
})

export default store;