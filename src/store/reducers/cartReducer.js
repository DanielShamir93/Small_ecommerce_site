import { INCREMENT, DECREMENT, SET } from '../actions/actionsTypes';

const cartReducer = (state = 0, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + action.payload;
    case DECREMENT:
      return state - action.payload;
    case SET:
      return action.payload;
    default:
      return state;
  }
};
  

export default cartReducer;