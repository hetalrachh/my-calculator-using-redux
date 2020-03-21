import * as actiontypes from "../actions/actiontypes";

export const clearResult = () => {
  return {
    type: actiontypes.CLEAR_RESULT
  };
};

export const deleteQuestion = () => {
  return {
    type: actiontypes.DELETE
  };
};

export const checkResult = () => {
  return {
    type: actiontypes.CHECK_RESULT
  };
};

export const updateQuestion = val => {
  return {
    type: actiontypes.UPDATE_QUESTION,
    value: val
  };
};
