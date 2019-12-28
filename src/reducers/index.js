import { combineReducers } from 'redux';
import ConsultationReducer from './ConsultationReducer';

export default combineReducers({
  consultation: ConsultationReducer,
});
