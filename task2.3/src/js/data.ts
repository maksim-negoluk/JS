import {generateRandomNumberArray, getFunctionExecutionTime} from "./functions";
import BubbleSort from "./javascript-algorithms/BubbleSort";
import SelectionSort from "./javascript-algorithms/SelectionSort";
import InsertionSort from "./javascript-algorithms/InsertionSort";
import QuickSort from "./javascript-algorithms/QuickSort";
import MergeSort from "./javascript-algorithms/MergeSort";
import {
  renderForm, renderOutputTableData, tableRow
} from "./render";

export const setEventListener = async (action: string, selector: string) => {
  await renderForm(allSortingMethods);
  const submitButton = document.querySelector(selector);
  submitButton.addEventListener(action, (event) => {
    event.preventDefault();
    const optionSelector: HTMLSelectElement =
      document.querySelector(".sorting-methods");
    const optionValue = optionSelector.value;
    const lengthInputSelector: HTMLInputElement =
      document.querySelector(".length");
    const lengthInputValue = lengthInputSelector.value;
    const bottomIntervalInputSelector: HTMLInputElement =
      document.querySelector(".bottom-range");
    const bottomIntervalInputValue = bottomIntervalInputSelector.value;
    const topIntervalInputSelector: HTMLInputElement =
      document.querySelector(".top-range");
    const topIntervalInputValue = topIntervalInputSelector.value;
    const numbersArray = generateRandomNumberArray(parseInt(lengthInputValue), parseInt(bottomIntervalInputValue), parseInt(topIntervalInputValue))
    const resultObject:tableRow = {
      method: optionValue,
      length: parseInt(lengthInputValue),
      topRange: parseInt(topIntervalInputValue),
      bottomRange: parseInt(bottomIntervalInputValue),
      executionTime: callSortingMethod(optionValue, numbersArray),
    };
    renderOutputTableData(resultObject);
  });
};

const callSortingMethod = (method:string, array:any[]) => {
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

export const allSortingMethods = [
  "bubble",
  "selection",
  "insertion",
  "quick",
  "merge",
]

const bubbleSorting = new BubbleSort();
export const bubbleSort = (numberArray: number[]) => {
  return bubbleSorting.sort(numberArray);
};

const selectionSorting = new SelectionSort();
export const selectionSort = (numberArray: number[]) => {
  return selectionSorting.sort(numberArray);
};

const insertionSorting = new InsertionSort();
export const insertionSort = (numberArray: number[]) => {
  return insertionSorting.sort(numberArray);
};

const quickSorting = new QuickSort();
export const quickSort = (numberArray: number[]) => {
  return quickSorting.sort(numberArray);
};

const mergeSorting = new MergeSort();
export const mergeSort = (numberArray: number[]) => {
  return mergeSorting.sort(numberArray);
};
