import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
  //   cart: [
  //     {
  //       pizzaId: 11,
  //       name: 'Peperoni',
  //       quantity: 2,
  //       unitPrice: 100,
  //       totalPrice: 200,
  //     },
  //   ],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      //payload=newItem
      state.cart.push(action.payload);
    },
    deleteItem(state, action) {
      //payload=pizzaId
      state.cart = state.cart.filter((item) => item.pizzaId !== action.payload);
    },
    increaseItemQuantity(state, action) {
      //payload=pizzaId
      const item = state.cart.find((item) => item.pizzaId === action.payload);

      item.quantity++;
      item.totalPrice = item.quantity * item.unitPrice;
    },
    decreaseItemQuantity(state, action) {
      //payload=pizzaId
      const item = state.cart.find((item) => item.pizzaId === action.payload);

      item.quantity--;
      item.totalPrice = item.quantity * item.unitPrice;

      if (item.quantity === 0) cartSlice.caseReducers.deleteItem(state, action);
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

export default cartSlice.reducer;
export const {
  addItem,
  deleteItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart,
} = cartSlice.actions;

export const getCart = (state) => state.cart.cart;

export const getTotalQuantity = (state) =>
  state.cart.cart.reduce(
    (acc, itemPizza) => acc + Number(itemPizza.quantity),
    0,
  );

export const getTotalPrice = (state) =>
  state.cart.cart.reduce((acc, itemPizza) => acc + itemPizza.totalPrice, 0);

export const getCurrentQuantityById = (id) => (state) =>
  state.cart.cart.find((item) => item.pizzaId === id)?.quantity ?? 0;
