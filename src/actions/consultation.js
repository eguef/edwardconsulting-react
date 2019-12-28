import $ from 'jquery';
import {
  SAVE_CONSULTATION_SUCCESS,
  SAVE_CONSULTATION_FAILED,
  SAVE_CONSULTATION,
  CLOSE_SNACK_BAR,
} from './types';

// eslint-disable-next-line import/prefer-default-export
export const saveConsultation = consultation => (dispatch) => {
  dispatch({ type: SAVE_CONSULTATION });
  const excelUrl = 'https://script.google.com/macros/s/AKfycbw1PzILXxh7uoHNXfbLJzonSoQg_WcLpACWmbB-aHgX98vMXN4/exec';

  const success = ({ result }) => {
    if (result === 'success') dispatch({ type: SAVE_CONSULTATION_SUCCESS, consultation });
  };

  const errorMethod = (error) => {
    dispatch({ type: SAVE_CONSULTATION_FAILED, error });
  };

  $.ajax({
    url: excelUrl,
    method: 'GET',
    dataType: 'json',
    data: consultation,
    success,
    error: errorMethod,
  });
};

export const closeSnackBar = () => ({
  type: CLOSE_SNACK_BAR,
});
