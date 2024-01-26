import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getProducts = createAsyncThunk(
    "product/getProducts",
    async () => {
        const response = await axios.get("https://fakestoreapi.com/products");
        const data = response.data;
        return data;
    }
);

const productSlice = createSlice({
    name: "product",
    initialState: {
        products: [],
    },
    // reducers are for internal application logic
    reducers: {},
    // extraReducers are for external application logic (e.g. API calls, get and post data)
    extraReducers: (builder) => {
        builder.addCase(getProducts.fulfilled, (state, action) => {
           state.products = action.payload;
        });
    },
});

export default productSlice.reducer;