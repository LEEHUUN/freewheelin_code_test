import { combineReducers } from 'redux';
import problemlistReducer from './problemlist';
import similarlistReducer from './similarlist';

//Step 1. rootReducer Declare - 기능 or 구조 별로 분리 개발한 Reducer Combine.
const rootReducer = combineReducers({
  problemlistReducer, similarlistReducer
});

//Step 2. rootReducer Export
export default rootReducer;

//Step 3. rootReducer의 Type Export - dispatch시 State의 Type를 확인 및 적용하기 위함.
export type RootState = ReturnType<typeof rootReducer>;