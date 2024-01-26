import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cart: [],
        count: 0
    },
    // reducers are for internal application logic
    reducers: {
        addToCart: (state, action) => {
            state.cart = [...state.cart, action.payload];
        },
    },
    // extraReducers are for external application logic (e.g. API calls, get and post data)
    extraReducers: (builder) => {},
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;