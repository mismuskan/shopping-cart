// src/reducers/productsReducer.js

const initialState = [];

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_PRODUCTS':
      return action.payload;

    // Other cases for handling product-related actions

    default:
      return state;
  }
};

export default productsReducer;
