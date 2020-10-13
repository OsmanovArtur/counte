import {
  ADD,
  INTERMEDIATE_RESULT,
  DELETE_ITEM,
  ADD1,
  INTERMEDIATE_RESULT1,
  DELETE_ITEM1,
} from "./ActionsTypes";

export function changeCounter(number) {
  return {
    type: ADD,
    payload: number,
  };
}
export function saveIntermediateResult() {
  return {
    type: INTERMEDIATE_RESULT,
  };
}
export const deleteItem = (index) => ({
  type: DELETE_ITEM,
  payload: index,
});

export function changeCounter1(number) {
  return {
    type: ADD1,
    payload: number,
  };
}
export function saveIntermediateResult1() {
  return {
    type: INTERMEDIATE_RESULT1,
  };
}
export const deleteItem1 = (index) => ({
  type: DELETE_ITEM1,
  payload: index,
});
