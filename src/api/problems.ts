import axios from 'axios';

//문제 리스트 get
export async function getProblemList(){
    const response = await axios.get<IProblems[]>('http://localhost:4037/fe-problems');
    return response.data;
}

//유사문항 리스트 get
export async function getSimilarProblemList(){
    const response = await axios.get<IProblems[]>(`http://localhost:4037/fe-similars`);
    return response.data;
}


export interface IProblems {
    id:               number;
    unitCode:         number;
    answerData:       string;
    problemLevel:     number;
    problemType:      string;
    problemURL:       string;
    unitName:         string;
    needCheckLayout:  number;
    source:           number;
    hide:             number;
    curriculumNumber: number;
    cebuCode:         number;
    totalTimes:       number;
    correctTimes:     number;
    hwpExist:         number;
    scorable:         number;
    tagTop:           null;
    bookDataId:       number;
}