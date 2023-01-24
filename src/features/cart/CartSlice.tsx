import { createSlice } from "@reduxjs/toolkit";
import { CartInitialState } from "@/types/types";

const initialState: CartInitialState = {
	items: [],
	quantity: 0,
};

export const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		increaseCartQuantity: (state, action) => {
			if (state.items.find((item) => item.id === action.payload.id) == null) {
				state.items = [...state.items, action.payload];
				state.quantity++;
			} else {
				state.items.forEach((item) => {
					if (item.id === action.payload.id) {
						state.quantity++;
						return { ...item, quantity: item.quantity! + 1 };
					} else {
						return item;
					}
				});
			}
		},
		decreaseCartQuantity: (state, action) => {
			if (
				state.items.find((item) => item.id === action.payload.id)?.quantity ===
				1
			) {
				state.items.filter((item) => item.id !== action.payload.id);
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
			state.items.filter((item) => item.id !== action.payload.id);
		},
	},
});

export const { increaseCartQuantity, decreaseCartQuantity, removeFromCart } =
	cartSlice.actions;
export default cartSlice.reducer;
