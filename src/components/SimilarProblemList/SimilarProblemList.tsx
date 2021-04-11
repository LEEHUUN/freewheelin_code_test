import React from 'react';
import myStyle from './SimilarProblemList.module.css';
import {IProblems} from '../../api/problems'
import ProblemItem from '../ProblemItem';

//#region 1. Props Declare
type SimilarProblemListProps = {
    data: IProblems[] | null,
    unitName: string,
    onClick_add?:(problemData: IProblems) => void;
    onClick_change?:(problemData: IProblems) => void;
}
//#endregion

//#region 2. Methods
//#endregion

//#region 3. Component Declare
const SimilarProblemList = (props: SimilarProblemListProps) => {
    const {data, unitName, onClick_change, onClick_add} = props;
    const sData = data != null && data.length > 0 ? data : [];

    //Event Parent로 전달
    const handleClick_add = (id: number) => {
        if(onClick_add !== undefined){
            const temp = sData.find(d=>d.id === id);
            if(temp !== undefined)
                onClick_add(temp);
        }
    }

    //Event Parent로 전달
    const handleClick_change = (id: number) => {
        if(onClick_change !== undefined){
            const temp = sData.find(d=>d.id === id);
            if(temp !== undefined)
                onClick_change(temp);
        }
    }

    return(
        <div className={myStyle['content-box']}>
            <div className={myStyle['header']}>문항 교체/추가</div>
            {sData.length > 0 && 
                <div className={myStyle['sub-header']}>{unitName}</div>}
            {sData.length > 0 && 
                <ul>
                    {sData.map((problem, idx:number) => 
                        <li key={`pitem_${problem.id}`}>
                            <ProblemItem formType='Similars' IndexNum={idx + 1} data={problem}
                                onClick_add={handleClick_add} 
                                onClick_change={handleClick_change}/>
                        </li>)}
                </ul>}
            {sData.length === 0 && 
                <div className={myStyle['none-problem-box']}>
                    <div className={myStyle['first-text']}><div className={myStyle['border-text']}>유사문항</div>버튼을 누르면</div>
                    <div>해당 문제의 유사 문항을 볼 수 있습니다.</div>
                </div>}
        </div>
    );
}
export default SimilarProblemList;
//#endregion