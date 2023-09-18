import { combineReducers } from 'redux';
import newImpressionReducer from './new_impression_reducer';
import sessionReducer from './session_reducer';


const rootReducer = combineReducers({
  newImpression: newImpressionReducer,
  session: sessionReducer
});

export default rootReducer;