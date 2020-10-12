const initialState = {
  results: 0,
  intermediateResult: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        results: state.results + action.payload,
      };

    case "INTERMEDIATERESULT":
      const newArr = [...state.intermediateResult];
      newArr.push(state.results);
      return {
        ...state,
        intermediateResult: newArr,
      };
    case "DELETE_ITEM":
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
export default reducer;
