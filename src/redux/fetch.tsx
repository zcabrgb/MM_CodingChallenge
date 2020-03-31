import {
  FETCH_PRODUCTS_PENDING,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_ERROR
} from './actions';
import {Dispatch} from 'react';

const api = 'https://dummy-hacxuuktha-ew.a.run.app/machines';

export const fetchProducts = () => (dispatch: Dispatch<any>) => {
  dispatch({
    type: FETCH_PRODUCTS_PENDING
  });
  fetch(api)
    .then(res => res.json())
    .then(res => {
      if (res.error) {
        throw res.error;
      }
      const request = res.machines.map(async (x: any) =>
        fetch(api + '/' + x.id + '/history')
          .then(res => res.json())
          .then(res => {
            if (res.error) {
              throw res.error;
            }
            x['history'] = res.history;
          })
      );
      Promise.all(request)
        .catch(function(err) {
          dispatch({
            type: FETCH_PRODUCTS_ERROR,
            payload: err
          });
        })
        .then(() => {
          if (res.machines[0].history) {
            localStorage.setItem('products', JSON.stringify(res.machines));
          }
          dispatch({
            type: FETCH_PRODUCTS_SUCCESS,
            payload: res.machines
          });
        });
    })
    .catch(error => {
      dispatch({
        type: FETCH_PRODUCTS_ERROR,
        payload: error
      });
    });
};
