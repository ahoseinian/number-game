import store from './reducers';
import {changeCurrentDisplay, changeCalculationModel} from './actions';

document.onkeypress = function(e) {
  e = e || window.event;
  const code = e.keyCode;
  if (code >= 49 && code < 58) {
    store.dispatch(changeCurrentDisplay((code - 48) * store.getState().calculation.model))
  }
  if (code === 45) {
    store.dispatch(changeCalculationModel(-1))
  }
  if (code === 43) {
    store.dispatch(changeCalculationModel(1))
  }

  console.log(e.keyCode);
};
