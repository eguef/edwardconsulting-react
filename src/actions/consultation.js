import $ from 'jquery';
import {
  SAVE_CONSULTATION_SUCCESS,
  SAVE_CONSULTATION_FAILED,
  SAVE_CONSULTATION,
} from './types';

// eslint-disable-next-line import/prefer-default-export
export const saveConsultation = consultation => (dispatch) => {
  dispatch({ type: SAVE_CONSULTATION });
  const excelUrl = 'https://script.google.com/macros/s/AKfycbw1PzILXxh7uoHNXfbLJzonSoQg_WcLpACWmbB-aHgX98vMXN4/exec';
  // axios.get(excelUrl, consultation).then((response) => {
  //   debugger;
  // }).catch((error) => {
  //   dispatch({ type: SAVE_CONSULTATION_FAILED, error });
  // });

  $.ajax({
    url: excelUrl,
    method: 'GET',
    dataType: 'json',
    data: consultation,
  }).success((response) => {
    
  }).error();

  // try {
  //   const response = await fetch(excelUrl, {
  //     method: 'GET', // or 'PUT'
  //     body: JSON.stringify(consultation), // data can be `string` or {object}!
  //   });
  //   const json = await response.json();
  //   debugger;
  // } catch (error) {
  //   dispatch({ type: SAVE_CONSULTATION_FAILED, error });
  // }
};
