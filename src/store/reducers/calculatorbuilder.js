import * as actiontypes from "../actions/actiontypes";

//redux store initial state
const initialState = {
  question: "",
  result: ""
};

const clearResult = (state, action) => {
  return { ...state, question: "", result: "" };
};

const deleteQuestion = (state, action) => {
  let ques = state.question;
  let res = state.result;
  ques = ques.substr(0, ques.length - 1);
  if (ques === "") {
    res = "";
  }
  return { ...state, question: ques, result: res };
};

const updateQuestion = (state, action) => {
  return { ...state, question: state.question + action.value };
};

const checkResult = (state, action) => {
  let evalualtedResult = null;
  try {
    evalualtedResult = eval(state.question);
  } catch (error) {
    evalualtedResult = "Invalid input";
  }

  return { ...state, result: evalualtedResult };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actiontypes.CLEAR_RESULT:
      return clearResult(state, action);

    case actiontypes.DELETE:
      return deleteQuestion(state, action);

    case actiontypes.UPDATE_QUESTION:
      return updateQuestion(state, action);

    case actiontypes.CHECK_RESULT:
      return checkResult(state, action);
    default:
      return state;
  }
};

export default reducer;
