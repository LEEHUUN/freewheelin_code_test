import React from 'react';
import myStyle from './ProblemItem.module.css';
import {IProblems} from '../../api/problems';
import CustomButton from '../buttons/CustomButton';

//#region 1. Props Declare
export const Problems = 'Problems';
export const Similars = 'Similars';
export type buttonTypes = typeof Problems | typeof Similars;
type ProblemItemProps = {
    formType: buttonTypes,
    data: IProblems,
    selectedID?: number,
    IndexNum:number,
    onClick_Similar?:(id: number) => void;
    onClick_delete?:(id: number) => void;
    onClick_add?:(id: number) => void;
    onClick_change?:(id: number) => void;
}
//#endregion

//#region 2. Methods
//#endregion

//#region 3. Component Declare
const ProblemItem = (props: ProblemItemProps) => {
    const {formType, data, onClick_Similar, onClick_delete, onClick_add, onClick_change, selectedID, IndexNum} = props;
    const {problemType, unitName, problemURL, id} = data;

    const handleClick_similar = () => {
        if(onClick_Similar !== undefined)
            onClick_Similar(id);
    }

    const handleClick_delete = () => {
        if(onClick_delete !== undefined)
            onClick_delete(id);
    }

    const handleClick_add = () => {
        if(onClick_add !== undefined)
            onClick_add(id);
    }

    const handleClick_change = () => {
        if(onClick_change !== undefined)
            onClick_change(id);
    }
    return(
        <>
            <div className={myStyle['header']}>
                <div className={myStyle['problem-type']}>{problemType}</div>
                <div className={myStyle['unit-name']}>{unitName}</div>
                <div className={myStyle['button-box']}>
                    {formType === Problems && <CustomButton type='Similar' onClick={handleClick_similar} isSelected={data.id === selectedID}/>}
                    {formType === Problems && <CustomButton type='Delete' onClick={handleClick_delete}/>}
                    {formType === Similars && <CustomButton type='Add' onClick={handleClick_add}/>}
                    {formType === Similars && <CustomButton type='Change' onClick={handleClick_change}/>}
                </div>
            </div>
            <div className={myStyle['img-box']}>
                <div className={myStyle['number']}>{IndexNum}</div>
                <img alt='problem img' src={problemURL}/>
            </div>
        </>
    )
}
export default ProblemItem;
//#endregion