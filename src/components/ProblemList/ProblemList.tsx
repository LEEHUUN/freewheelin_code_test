import React from 'react';
import myStyle from './ProblemList.module.css';

import ProblemItem from '../ProblemItem';
import { IProblems } from '../../api/problems';

//#region 1. Props Declare
type ProblemItemProps = {
    selectedID: number,
    data: IProblems[] | null,
    onClick_Similar?:(unitName: string, id: number) => void;
    onClick_delete?:(id: number) => void;
}
//#endregion

//#region 2. Methods
//#endregion

//#region 3. Component Declare
const ProblemList = (props:ProblemItemProps) => {

    const {data, onClick_Similar, onClick_delete, selectedID} = props;
    const pData = data != null && data.length > 0 ? data : [];

    //Event Parent로 전달
    const handleClick_similar = (id: number) => {
        if(onClick_Similar !== undefined){
            const temp = pData.find(d=>d.id === id);
            if(temp !== undefined)
                onClick_Similar(temp.unitName, id);
        }
    }

    //Event Parent로 전달
    const handleClick_delete = (id: number) => {
        if(onClick_delete !== undefined)
            onClick_delete(id);
    }

    return(
        <div className={myStyle['content-box']}>
            <div className={myStyle['header']}>학습지 상세 편집</div>
            <ul>
                {pData.map((problem:any, idx:number) => 
                <li key={`pitem_${problem.id}`}>
                    <ProblemItem formType='Problems' IndexNum={idx+1} selectedID={selectedID} data={problem} 
                    onClick_Similar={handleClick_similar} 
                    onClick_delete={handleClick_delete}/>
                </li>)}
            </ul>
        </div>
    );
}
export default ProblemList;
//#endregion