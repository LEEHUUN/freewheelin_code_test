import { createAction } from 'typesafe-actions';
import { IProblems } from '../../api/problems';
import { AxiosError } from 'axios';

//Step 1. 문제리스트 Action Type Declare : 통신요청/통신성공/통신실패/유사문제/삭제/추가/교체
export const GET_PROBLEMLIST = 'problems/GET_PROBLEMLIST';
export const GET_PROBLEMLIST_SUCCESS = 'problems/GET_PROBLEMLIST_SUCCESS';
export const GET_PROBLEMLIST_ERROR = 'problems/GET_PROBLEMLIST_ERROR';
export const TOGGLE_ITEM = 'problems/TOGGLE_ITEM';
export const DELETE_ITEM = 'problems/DELETE_ITEM';
export const ADD_ITEM = 'problems/ADD_ITEM';
export const CHANGE_ITEM = 'problems/CHANGE_ITEM';

//Step 2. Action Declare
export const getProblemList_action = createAction(GET_PROBLEMLIST)();
export const getProblemListSuccess_action = createAction(GET_PROBLEMLIST_SUCCESS)<IProblems[]>();
export const getProblemListError_action = createAction(GET_PROBLEMLIST_ERROR)<AxiosError>();
export const toggleItem_action = createAction(TOGGLE_ITEM)<number>();
export const deleteItem_action = createAction(DELETE_ITEM)<number>();
export const addItem_action = createAction(ADD_ITEM)<{addData: IProblems, baseID: number}>();
export const changeItem_action = createAction(CHANGE_ITEM)<{changeData: IProblems, baseID: number}>();