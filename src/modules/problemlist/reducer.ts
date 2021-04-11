import { createReducer } from 'typesafe-actions';
import { ProblemState, ProblemAction } from './types';
import { GET_PROBLEMLIST, GET_PROBLEMLIST_SUCCESS, GET_PROBLEMLIST_ERROR,
TOGGLE_ITEM, DELETE_ITEM, ADD_ITEM, CHANGE_ITEM  } from './actions';
import { IProblems } from '../../api/problems';

//Step 1. problemlist State Declare
const initialState: ProblemState = {
  problemlist: {
    data: [],
    selectedID:-1
  }
};

//Step 2. reducer Declare
const github = createReducer<ProblemState, ProblemAction>(initialState, {
  //통신 시작시 상태 초기화
  [GET_PROBLEMLIST]: state => ({
    ...state,
    problemlist: {
      data: [],
      selectedID: state.problemlist.selectedID
    }
  }),
  //통신 성공해 데이터 교체
  [GET_PROBLEMLIST_SUCCESS]: (state, action) => ({
    ...state,
    problemlist: {
      data: action.payload,
      selectedID: state.problemlist.selectedID
    }
  }),
  //통신 실패시 데이터 초기화
  [GET_PROBLEMLIST_ERROR]: (state, action) => ({
    ...state,
    problemlist: {
      data: [],
      selectedID: state.problemlist.selectedID
    }
  }),
  //유사문항 선택
  [TOGGLE_ITEM]: (state, action) => ({
    ...state,
    problemlist:{
      data: state.problemlist.data,
      selectedID: action.payload
    }
  }),
  //문항 삭제
  [DELETE_ITEM]: (state, action) => ({
    ...state,
    problemlist:{
      data: state.problemlist.data !== null ? state.problemlist.data.filter(d => d.id !== action.payload) : initialState.problemlist.data,
      selectedID: state.problemlist.selectedID
    }
  }),
  //문항 바로 아래 항목으로 추가
  [ADD_ITEM]: (state, action) => {
    const {data, selectedID} = state.problemlist;
    let idx = -1;
    data?.map( (d, index) => {
      if(d.id === action.payload.baseID)
        idx = index;
    });

    const tempData: IProblems[]|null = data;
    if(idx >= 0 && tempData !== null){
      if(tempData.find(d=>d.id === action.payload.addData.id))
        window.alert('동일한 문항이 이미 리스트에 있습니다.');
      else
        tempData.splice(idx + 1, 0, action.payload.addData);
    }

    return {...state,
      problemlist:{
        data:tempData,
        selectedID: state.problemlist.selectedID
      }
    }
  },
  //문항 교체
  [CHANGE_ITEM]: (state, action) => {
    const {data, selectedID} = state.problemlist;
    let idx = -1;
    data?.map( (d, index) => {
      if(d.id === action.payload.baseID)
        idx = index;
    });

    const tempData: IProblems[]|null = data;
    if(idx >= 0 && tempData !== null){
      if(tempData.find(d=>d.id === action.payload.changeData.id))
      window.alert('동일한 문항이 이미 리스트에 있습니다.');
      else
        tempData[idx] = action.payload.changeData;
    }

    return {...state,
      problemlist:{
        data:tempData,
        selectedID: initialState.problemlist.selectedID
      }
    }
  }
});

export default github;