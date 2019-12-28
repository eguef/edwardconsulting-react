import {
  SAVE_CONSULTATION_SUCCESS,
  SAVE_CONSULTATION_FAILED,
  SAVE_CONSULTATION,
  CLOSE_SNACK_BAR
} from '../actions/types';

const INITIAL_STATE = {
  loading: false,
  error: false,
  success: false,
  consultationInfo: {},
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SAVE_CONSULTATION:
      return {
        ...state,
        loading: true,
      };
    case SAVE_CONSULTATION_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        error: false,
        consultationInfo: action.consultation,
      };
    case SAVE_CONSULTATION_FAILED:
      return {
        ...state,
        loading: false,
        error: true,
      };
    case CLOSE_SNACK_BAR:
      return {
        ...state,
        error: false,
      };
    default:
      return state;
  }
};
