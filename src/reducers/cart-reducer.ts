import { db } from "../data/db";
import { CartItem, Guitar } from "../types";

export type CartAction =
  | { type: "ADD_TO_CART"; payload: { item: Guitar } }
  | { type: "REMOVE_FROM_CART"; payload: { item: Guitar["id"] } }
  | { type: "DECREASE_QUANTITY"; payload: { item: Guitar["id"] } }
  | { type: "INCREASE_QUANTITY"; payload: { item: Guitar["id"] } }
  | { type: "CLEAR_CART" };

export type CartState = {
  data: Guitar[];
  cart: CartItem[];
};

export const initialState: CartState = {
  data: db,
  cart: [],
};
const MIN_ITEMS = 1;
const MAX_ITEMS = 5;

export const cartReducer = (
  state: CartState = initialState,
  action: CartAction
) => {
  if (action.type === "ADD_TO_CART") {
    const itemExists = state.cart.find(
      (guitar) => guitar.id === action.payload.item.id
    );
    let updatedCart: CartItem[] = [];
    if (itemExists) {
      updatedCart = state.cart.map((item) => {
        if (item.id === action.payload.item.id) {
          if (item.quantity < MAX_ITEMS) {
            return {
              ...item,
              quantity: item.quantity + 1,
            };
          } else {
            return item;
          }
        } else {
          return item;
        }
      });
    } else {
      const newItem: CartItem = { ...action.payload.item, quantity: 1 };
      updatedCart = [...state.cart, newItem];
    }
    return {
      ...state,
      cart: updatedCart,
    };
  }
  if (action.type === "REMOVE_FROM_CART") {
    return {
      ...state,
    };
  }
  if (action.type === "DECREASE_QUANTITY") {
    return {
      ...state,
    };
  }
  if (action.type === "INCREASE_QUANTITY") {
    return {
      ...state,
    };
  }
  if (action.type === "CLEAR_CART") {
    return {
      ...state,
    };
  }
  return state;
};
