"use client"
import { createSlice } from '@reduxjs/toolkit'

// Define the initial state using that type
export const cartSlice = createSlice({
  name: 'products',
  initialState: [],
  reducers: {
      // add to cart functionality
    add(state: { id: number; color: string; size: string; qty: number; uuid?: number }[], action) {
    const uuid = Math.floor(1000 + Math.random() * 9000)
      const newobj = { ...action.payload, uuid }
      state.push(newobj)
    },
     // delete from cart
     remove(state: { id: number; color: string; size: string; qty: number; uuid?: number }[], { payload }) {
      const index = state.findIndex((val: { id: number; color: string; size: string; qty: number; uuid?: number }) => val.uuid === payload);
      if (index !== -1) {
        state.splice(index, 1);
      }
    },
     // addition of item
     addition(state: { id: number; color: string; size: string; qty: number; uuid?: number }[], action) {
      const obj = state.find(
        (val: { id: number; color: string; size: string; qty: number; uuid?: number }) =>
          val.id == action.payload.id &&
          val.color == action.payload.color &&
          val.size == action.payload.size
      )
      if (obj) {
        ++obj.qty
        const newState = state.filter((val: { id: number; color: string; size: string; qty: number; uuid?: number }) => val.id !== obj.id)
        state = [...newState, obj]
        return
      }
    },
    // subtraction of item
    subraction(state: { id: number; color: string; size: string; qty: number; uuid?: number }[], action) {
      const obj = state.find(
        (val: { id: number; color: string; size: string; qty: number; uuid?: number }) =>
          val.id == action.payload.id &&
          val.color == action.payload.color &&
          val.size == action.payload.size
      )
      if (obj !== undefined) {
        --obj.qty
        const newState = state.filter((val: { id: number; color: string; size: string; qty: number; uuid?: number }) => val.uuid !== obj.uuid)
        state = [...newState, obj]
        return
      }
    },
     // Action to clear the cart and remove order from localStorage
     removeOrderFromLocalStorage(state: { id: number; color: string; size: string; qty: number; uuid?: number }[]) {
      // Empty the cart in the Redux state
      state.length = 0;
      // Remove the cart details from localStorage
      localStorage.removeItem('cart');
    },
  }
})

export const {add,remove,addition,subraction,removeOrderFromLocalStorage} =  cartSlice.actions

export default cartSlice.reducer