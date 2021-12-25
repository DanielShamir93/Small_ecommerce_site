import { INCREMENT, DECREMENT, SET } from './actionsTypes';

export const incrementAction = (number = 1) => {
  return (dispatch, getState) => {
    dispatch({
      type: INCREMENT,
      payload: number
    })
  }
};

export const decrementAction = (number = 1) => {
  return (dispatch, getState) => {
    dispatch({
      type: DECREMENT,
      payload: number
    })
  }
};

export const setAction = (number = 0) => {
  return (dispatch, getState) => {
    dispatch({
      type: SET,
      payload: number
    })
  }
};