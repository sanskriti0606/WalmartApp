import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  userInfo: null,
};

export const walmartSlice = createSlice({
  name: "walmart",
  initialState,
  reducers: {
    // Product reducers
    // Add to cart
    addToCart: (state, action) => {
      const item = state.products.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity += action.payload.quantity;
      } else {
        state.products.push(action.payload);
      }
    },
    increaseQuantity: (state, action) => {
      const item = state.products.find((item) => item.id === action.payload);
      if (item) {
        item.quantity++;
      }
    },
    decreaseQuantity: (state, action) => {
      const item = state.products.find((item) => item.id === action.payload);
      if (item.quantity === 1) {
        item.quantity = 1;
      } else {
        item.quantity--;
      }
    },
    // Delete item from cart
    deleteItem: (state, action) => {
      state.products = state.products.filter(
        (item) => item.id !== action.payload
      );
    },
    // Reset cart to initial state
    resetCart: (state) => {
      state.products = [];
    },
    // ============= Product Reducers End here =================
    // ============= UserInfo Reducers Start here ==============
    // User authentication
    setUserInfo: (state, action) => {
      state.userInfo = action.payload;
    },

    signoutUser: (state) => {
      state.userInfo = null;
    },
    // ============= UserInfo Reducers End here ================
  },
});

export const {
  addToCart,
  deleteItem,
  resetCart,
  increaseQuantity,
  decreaseQuantity,
  setUserInfo,
  signoutUser,
} = walmartSlice.actions;

export default walmartSlice.reducer;
