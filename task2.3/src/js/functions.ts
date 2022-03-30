import BubbleSort from "./javascript-algorithms/BubbleSort";
import SelectionSort from "./javascript-algorithms/SelectionSort";
import InsertionSort from "./javascript-algorithms/InsertionSort";
import QuickSort from "./javascript-algorithms/QuickSort";
import MergeSort from "./javascript-algorithms/MergeSort";

const getRandomNumber = (bottomInterval:number, topInterval:number):number => {
    return Math.floor(Math.random() * (topInterval - bottomInterval) + bottomInterval)
}

const generateRandomNumberArray = (arrayLength:number, bottomInterval:number, topInterval:number):number[] => {
    let numberArray:number[] = []
    for(let index = 0; index < arrayLength; index++){
        numberArray.push(getRandomNumber(bottomInterval, topInterval))
    }
    return numberArray
}

const logArraysComparison = (method:string, array:any[]) => {
    console.log(`before: ${array}`)
    const sortedArray = sortArray(method, array)
    console.log(`after: ${sortedArray}`)
}

const getFunctionExecutionTime = (func:([...args]) => any, functionArguments:any[]):string => {
    const start = Date.now();
    func([...functionArguments]);
    return (Date.now() - start).toString()
}

const bubbleSorting = new BubbleSort();
const bubbleSort = (numberArray: number[]) => {
    return bubbleSorting.sort(numberArray);
};

const selectionSorting = new SelectionSort();
const selectionSort = (numberArray: number[]) => {
    return selectionSorting.sort(numberArray);
};

const insertionSorting = new InsertionSort();
const insertionSort = (numberArray: number[]) => {
    return insertionSorting.sort(numberArray);
};

const quickSorting = new QuickSort();
const quickSort = (numberArray: number[]) => {
    return quickSorting.sort(numberArray);
};

const mergeSorting = new MergeSort();
const mergeSort = (numberArray: number[]) => {
    return mergeSorting.sort(numberArray);
};

const getSortingTime = (method:string, array:any[]) => {
    if(method === "bubble"){
        return getFunctionExecutionTime(bubbleSort, array)
    }
    if(method === "selection"){
        return getFunctionExecutionTime(selectionSort, array)
    }
    if(method === "insertion"){
        return getFunctionExecutionTime(insertionSort, array)
    }
    if(method === "quick"){
        return getFunctionExecutionTime(quickSort, array)
    }
    if(method === "merge"){
        return getFunctionExecutionTime(mergeSort, array)
    }
}

const sortArray = (method:string, array:any[]) => {
    if(method === "bubble"){
        return bubbleSort(array)
    }
    if(method === "selection"){
        return selectionSort(array)
    }
    if(method === "insertion"){
        return insertionSort(array)
    }
    if(method === "quick"){
        return quickSort(array)
    }
    if(method === "merge"){
        return mergeSort(array)
    }
}

export {generateRandomNumberArray, getSortingTime, logArraysComparison}