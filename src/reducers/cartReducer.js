// src/reducers/cartReducer.js

const initialState = [];

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      // Check if the item is already in the cart
      const existingItem = state.find((item) => item.id === action.payload.id);
      if (existingItem) {
        // If the item is already in the cart, update its quantity (or other properties)
        return state.map((item) =>
          item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        // If the item is not in the cart, add it with a quantity of 1
        return [...state, { ...action.payload, quantity: 1 }];
      }

    case 'REMOVE_FROM_CART':
      // Remove the item from the cart based on its id
      return state.filter((item) => item.id !== action.payload);

    case 'CLEAR_CART':
      // Clear all items from the cart
      return [];

    default:
      return state;
  }
};

export default cartReducer;
