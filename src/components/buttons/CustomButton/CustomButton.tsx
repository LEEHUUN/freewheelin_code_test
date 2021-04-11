import React from 'react';
import myStyle from './CustomButton.module.css';

//#region 1. Props Declare
export const Similar = 'Similar';
export const Delete = 'Delete';
export const Add = 'Add';
export const Change = 'Change';
export type buttonTypes = typeof Similar | typeof Delete | typeof Add | typeof Change;
type CustomButtomProps = {
    isSelected?:boolean;
    type: typeof Similar | typeof Delete | typeof Add | typeof Change;
    onClick?:() => void;
}
//#endregion

//#region 2. Methods
const getText = (type: string) => {
    switch(type){
        case Similar: return '유사문제';
        case Delete: return '삭제';
        case Add: return '추가';
        case Change: return '교체';
        default: return 'Button';
    }
}

//#region 3. Component Declare
const CustomButton = ({type, onClick, isSelected}: CustomButtomProps) => {
    const text = getText(type);
    const className = isSelected === true ? myStyle['active'] : myStyle['normal'];

    const handleClick = () => {
        if(onClick !== undefined)
            onClick();
    }

    return(
        <button onClick={handleClick} className={className}>{text}</button>
    )
}
export default CustomButton;
//#endregion


