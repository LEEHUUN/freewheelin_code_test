import { createReducer } from 'typesafe-actions';
import { ProblemState, ProblemAction } from './types';
import { GET_S_PROBLEMLIST, GET_S_PROBLEMLIST_SUCCESS, GET_S_PROBLEMLIST_ERROR, LIST_CLEAR
,  } from './actions';

//Step 1. similarlist의 initial State Declare
const initialState: ProblemState = {
  similarList: {
    unitName:'',
    data: []
  }
};

//Step 2. Reducer Declare & Export
const github = createReducer<ProblemState, ProblemAction>(initialState, {
  //통신 시작시 상태 초기화
  [GET_S_PROBLEMLIST]: state => ({
    ...state,
    similarList: {
      unitName:'',
      data: []
    }
  }),
  //통신 성공 후 데이터 상태에 저장
  [GET_S_PROBLEMLIST_SUCCESS]: (state, action) => ({
    ...state,
    similarList: {
      unitName:action.payload.unitName,
      data: action.payload.data
    }
  }),
  //통신 실패시 상태 초기화
  [GET_S_PROBLEMLIST_ERROR]: (state, action) => ({
    ...state,
    similarList: {
      unitName:'',
      data: []
    }
  }),
  //임의의 상태로 상태 초기화
  [LIST_CLEAR]: (state) => ({
    ...state,
    similarList: {
      unitName: initialState.similarList.unitName,
      data: initialState.similarList.data
    }
  })
});
export default github;