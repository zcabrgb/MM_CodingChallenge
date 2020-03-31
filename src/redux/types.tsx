import {
  FETCH_PRODUCTS_PENDING,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_ERROR
} from './actions';

export interface IProduct {
  id: number;
  name: string;
  type: string;
  sensorID: string;
  imageURL: string;
  thumbURL: string;
  group: string;
  activity: {activeHours: number; idleHours: number};
  history: Array<Object>;
}

export interface IFetchProductsPending {
  type: typeof FETCH_PRODUCTS_PENDING;
}

export interface IFetchProductsSuccess {
  type: typeof FETCH_PRODUCTS_SUCCESS;
  payload: IProduct[];
}

export interface IFetchProductsError {
  type: typeof FETCH_PRODUCTS_ERROR;
  payloaf: Error;
}

export type IProductAction =
  | {type: typeof FETCH_PRODUCTS_PENDING}
  | {type: typeof FETCH_PRODUCTS_SUCCESS; payload: IProduct[]}
  | {type: typeof FETCH_PRODUCTS_ERROR; payload: Error};

export interface IProductsState {
  pending: boolean;
  products: IProduct[];
  error: Error | null;
}

export interface IAppState {
  machines: IProductsState;
}
