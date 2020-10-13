import { ADD, INTERMEDIATE_RESULT, DELETE_ITEM } from "../ActionsTypes";

const initialState = {
  results: 0,
  intermediateResult: [],
};

const counter1 = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        results: state.results + action.payload,
      };

    case INTERMEDIATE_RESULT:
      const newArr = [...state.intermediateResult];
      newArr.push(state.results);
      return {
        ...state,
        intermediateResult: newArr,
      };
    case DELETE_ITEM:
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
export default counter1;
