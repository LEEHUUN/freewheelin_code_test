import { ThunkAction } from 'redux-thunk';
import { RootState } from '..';
import { ProblemAction } from './types';
import { getSimilarProblemList } from '../../api/problems';
import { getSimilarProblemList_action, getSimilarProblemListSuccess_action, getSimilarProblemListError_action,
  listClear_action
 } from './actions';

 //Step 1. 문항 교체/추가 리스트 localhost 통신 Thunk;
export function getSimilarProblemListThunk(unitName: string): ThunkAction<void, RootState, null, ProblemAction> {
  return async dispatch => {
    dispatch(getSimilarProblemList_action()); //통신 요청
    try {
      const list = await getSimilarProblemList(); 
      dispatch(getSimilarProblemListSuccess_action({unitName, data: list})); //통신 성공
    } catch (e) {
      dispatch(getSimilarProblemListError_action(e)); //통신 실패
    }
  };
}

//Step 2. 상태 초기화 Thunk
export function clearSimilarListThunk(): ThunkAction<void, RootState, null, ProblemAction> {
  return async dispatch => {
      dispatch(listClear_action()); //임의상태로 초기화
  };
}