import {createStore, combineReducers} from 'redux';
import {CHANGE_CURRENT_DISPLAY, CHANGE_CALCULATION_MODEL} from './actions';

function display(state = {
  current: 0
}, action) {
  switch (action.type) {
    case CHANGE_CURRENT_DISPLAY:
      state = {
        ...state,
        current: state.current + action.to
      }
      break;
    default:
  }
  return state;
};

function calculation(state = {
  model: 1
}, action) {
  switch (action.type) {
    case CHANGE_CALCULATION_MODEL:
      state = {
        ...state,
        model: action.to
      }
      break;
    default:
  }
  return state
}

export default createStore(combineReducers({display, calculation}));
