import { db } from "../data/db";
import { CartItem, Guitar } from "../types";

export type CartAction =
  | { type: "ADD_TO_CART"; payload: Guitar }
  | { type: "REMOVE_FROM_CART"; payload: Guitar["id"] }
  | { type: "DECREASE_QUANTITY"; payload: Guitar["id"] }
  | { type: "INCREASE_QUANTITY"; payload: Guitar["id"] }
  | { type: "CLEAR_CART" };

export type CartState = {
  data: Guitar[];
  cart: CartItem[];
};

export const initialState: CartState = {
  data: db,
  cart: [],
};

export const cartReducer = (
  state: CartState = initialState,
  action: CartAction
) => {
  if (action.type === "ADD_TO_CART") {
    return {
      ...state,
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
