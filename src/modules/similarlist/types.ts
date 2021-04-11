import * as actions from './actions';
import { ActionType } from 'typesafe-actions';
import { IProblems } from '../../api/problems';

//Step 1. similarlist의 Action Combine & Declare
export type ProblemAction = ActionType<typeof actions>;

//Step 2. similarlist의 State Type Declare
export type ProblemState = {
  similarList:{
    unitName: string,
    data: IProblems[] | null;
  }
};