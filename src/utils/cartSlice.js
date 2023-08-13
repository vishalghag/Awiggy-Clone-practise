import { createSlice } from "@reduxjs/toolkit";

const cardSlice = createSlice({
    name:'cart',
    initialState:{
        items:[]
    },
    reducers:{
        addItems:(state,action) => {
            state.items.push(action.payload)
        },
        clearCart:(state) => {
            state.items = []
        },
        removeItems: (state,action) => {
            state.items.splice(action,1)
        },
    },
})

export const {addItems,clearCart,removeItems} = cardSlice.actions
export default cardSlice.reducer;