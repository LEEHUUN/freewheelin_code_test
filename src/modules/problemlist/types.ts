import * as actions from './actions';
import { ActionType } from 'typesafe-actions';
import { IProblems } from '../../api/problems';

//Step 1. problemlist의 Action Combine & Declare
export type ProblemAction = ActionType<typeof actions>;

//Step 2. problemlist의 State Type Declare
export type ProblemState = {
  problemlist: {
    data: IProblems[] | null;
    selectedID:number;
  };
};