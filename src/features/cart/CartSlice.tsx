import { createSlice } from "@reduxjs/toolkit";
import { CartInitialState } from "../../types/types";

const initialState: CartInitialState = {
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    increaseCartQuantity: (state, action) => {
      if (state.items.find((item) => item.id === action.payload.id) == null) {
        state.items = [...state.items, action.payload];
      } else {
        state.items = state.items.map((item) => {
          if (item.id === action.payload.id) {
            console.log(item.quantity);
            return { ...item, quantity: item.quantity! + 1 };
          } else {
            return item;
          }
        });
      }
    },
    decreaseCartQuantity: (state, action) => {
      if (state.items.find((item) => item.id === action.payload.id)?.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== action.payload.id);
      } else {
        state.items = state.items.map((item) => {
          if (item.id === action.payload.id) {
            return { ...item, quantity: item.quantity! - 1 };
          } else {
            return item;
          }
        });
      }
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },
  },
});

export const { increaseCartQuantity, decreaseCartQuantity, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
