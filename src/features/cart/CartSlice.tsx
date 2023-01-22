import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	items: [],
	quantity: 0,
};

export const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		increaseCartQuantity: (state) => {
			state.quantity += 1;
		},
		decreaseCartQuantity: (state) => {
			state.quantity -= 1;
		},
	},
});

export const { increaseCartQuantity, decreaseCartQuantity } = cartSlice.actions;
export default cartSlice.reducer;
