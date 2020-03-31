import {IProductsState, IProductAction, IProduct} from './types';

// reducer.js

import {
  FETCH_PRODUCTS_PENDING,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_ERROR
} from './actions';

const initialState = {
  pending: false,
  products: [],
  error: null
};

export const productsReducer = (
  state: IProductsState = initialState,
  action: IProductAction
): IProductsState => {
  switch (action.type) {
    case FETCH_PRODUCTS_PENDING:
      return {
        ...state,
        pending: true
      };
    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        pending: false,
        products: action.payload
      };
    case FETCH_PRODUCTS_ERROR:
      return {
        ...state,
        pending: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export const getProducts = (state: any) => state.products;
export const getProductsPending = (state: any) => state.pending;
export const getProductsError = (state: any) => state.error;
