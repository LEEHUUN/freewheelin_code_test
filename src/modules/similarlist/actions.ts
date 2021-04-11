import { createAction } from 'typesafe-actions';
import { IProblems } from '../../api/problems';
import { AxiosError } from 'axios';

//Step 1. Action Type Declare : 문항 교체/추가 리스트 axios 통신요청/통신성공/통신실패/리스트클리어.
//접두사는 코드겹침 방지.
export const GET_S_PROBLEMLIST = 'similar/GET_S_PROBLEMLIST';
export const GET_S_PROBLEMLIST_SUCCESS = 'similar/GET_S_PROBLEMLIST_SUCCESS';
export const GET_S_PROBLEMLIST_ERROR = 'similar/GET_S_PROBLEMLIST_ERROR';
export const LIST_CLEAR = 'similar/GET_S_PROBLEMLIST_ERROR';

//Step 2. Action Declare
interface I_S_Problems {data : IProblems[] | null; unitName:string}
export const getSimilarProblemList_action = createAction(GET_S_PROBLEMLIST)();
export const getSimilarProblemListSuccess_action = createAction(GET_S_PROBLEMLIST_SUCCESS)<I_S_Problems>();
export const getSimilarProblemListError_action = createAction(GET_S_PROBLEMLIST_ERROR)<AxiosError>();
export const listClear_action = createAction(LIST_CLEAR)();