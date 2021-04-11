import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../modules';
import myStyle from './ProblemContainer.module.css';
import ProblemList from '../../components/ProblemList';
import SimilarProblemList from '../../components/SimilarProblemList';
import {getProblemListThunk, toggleProblemListThunk, deleteProblemListThunk, addProblemListThunk, changeProblemListThunk} from '../../modules/problemlist/thunks';
import {getSimilarProblemListThunk, clearSimilarListThunk} from '../../modules/similarlist/thunks';
import { IProblems } from '../../api/problems';


//#region 1. Component Declare
const ProblemContainer = () => {
    //문제리스트 State
    const { data: problemData, selectedID } = useSelector((state: RootState) => state.problemlistReducer.problemlist);
    //문항 교체/추가 State
    const { data: similarData, unitName: unitName_props } = useSelector((state: RootState) => state.similarlistReducer.similarList);
    const dispatch = useDispatch();

    //ComponentDidMount Event
    useEffect(() => { 
        dispatch(getProblemListThunk());
    }, [dispatch]);

    //유사문제 Click Event
    const handleClick_similar = (unitName: string, id: number) => {
        dispatch(getSimilarProblemListThunk(unitName)); //문항 교체/추가 상태 update
        dispatch(toggleProblemListThunk(id)); //문제리스트 문항 선택
    }

    //문항 삭제
    const handleClick_delete = (id: number) => {
        dispatch(deleteProblemListThunk(id));
        if(selectedID === id)
            dispatch(clearSimilarListThunk());//현재 선택된 문제리스트 문항 삭제시 우측 문항 교체/추가 페이지 초기화
    }

    //문항 추가
    const handleClick_add = (problemData: IProblems) => {
        console.log(problemData, selectedID)
        dispatch(addProblemListThunk(problemData, selectedID));
    }

    //문항 교체
    const handleClick_change = (problemData: IProblems) => {
        dispatch(changeProblemListThunk(problemData, selectedID));
    }

    return(
        <div className={myStyle['content-box']}>
            <ProblemList selectedID={selectedID} data={problemData} 
                onClick_Similar={handleClick_similar}
                onClick_delete={handleClick_delete}/>
            <div className={myStyle['seperator']}/>
            <SimilarProblemList data={similarData} unitName = {unitName_props}
                onClick_add={handleClick_add}
                onClick_change={handleClick_change}/>
        </div>
    );
}
export default ProblemContainer;
//#endregion
