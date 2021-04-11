import { ThunkAction } from 'redux-thunk';
import { RootState } from '..';
import { ProblemAction } from './types';
import { getProblemList, IProblems } from '../../api/problems';
import { getProblemList_action, getProblemListError_action, getProblemListSuccess_action, toggleItem_action, deleteItem_action,
addItem_action, changeItem_action } from './actions';

 //Step 1. 문제리스트 localhost 통신 Thunk;
 export function getProblemListThunk(): ThunkAction<void, RootState, null, ProblemAction> {
  return async dispatch => {
    dispatch(getProblemList_action());
    try {
      const list = await getProblemList();
      dispatch(getProblemListSuccess_action(list));
    } catch (e) {
      dispatch(getProblemListError_action(e));
    }
  };
}

//Step 2. 문제리스트 문항 선택시 선택된 문항 상태관리.
export function toggleProblemListThunk(id: number):ThunkAction<void, RootState, null, ProblemAction> {
  return async dispatch => {
    dispatch(toggleItem_action(id))
  }
}

//Step 3. 선택 문항 삭제해 리스트 관리.
export function deleteProblemListThunk(id: number):ThunkAction<void, RootState, null, ProblemAction> {
  return async dispatch => {
    dispatch(deleteItem_action(id))
  }
}

//Step 4. 전달받은 추가 문항 상태 추가.
export function addProblemListThunk(problemData: IProblems, id: number):ThunkAction<void, RootState, null, ProblemAction> {
  return async dispatch => {
    dispatch(addItem_action({addData: problemData, baseID: id}))
  }
}

//Step 5. 전달받은 교체 문항 상태 교환.
export function changeProblemListThunk(problemData: IProblems, id: number):ThunkAction<void, RootState, null, ProblemAction> {
  return async dispatch => {
    dispatch(changeItem_action({changeData: problemData, baseID: id}))
  }
}