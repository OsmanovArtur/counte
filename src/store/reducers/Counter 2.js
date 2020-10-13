const { ADD1, INTERMEDIATE_RESULT1, DELETE_ITEM1 } = require("../ActionsTypes");

const initialState = {
  results: 0,
  intermediateResult: [],
};
const counter2 = (state = initialState, action) => {
  switch (action.type) {
    case ADD1:
      return {
        ...state,
        results: state.results + action.payload,
      };
    case INTERMEDIATE_RESULT1:
      const newArr = [...state.intermediateResult];
      newArr.push(state.results);
      return {
        ...state,
        intermediateResult: newArr,
      };
    case DELETE_ITEM1:
      const intermediateResult = [...state.intermediateResult];

      intermediateResult.splice(action.payload, 1);
      return {
        ...state,
        intermediateResult,
      };

    default:
      return state;
  }
};
export default counter2;
