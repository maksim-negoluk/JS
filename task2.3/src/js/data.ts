import {generateRandomNumberArray, getSortingTime, logArraysComparison} from "./functions";
import {renderForm, renderTableData} from "./render";

interface tableRow {
  method: string
  length: number
  topInterval: number
  bottomInterval: number
  executionTime?: string
}

const allSortingMethods = ["bubble", "selection", "insertion", "quick", "merge",]

const getFormValues = ():tableRow => {
  const optionSelector: HTMLSelectElement = document.querySelector(".sorting-methods");
  const lengthInputSelector: HTMLInputElement = document.querySelector(".length");
  const bottomIntervalInputSelector: HTMLInputElement = document.querySelector(".bottom-interval");
  const topIntervalInputSelector: HTMLInputElement = document.querySelector(".top-interval");
  return {
    method: optionSelector.value,
    length: parseInt(lengthInputSelector.value),
    topInterval: parseInt(topIntervalInputSelector.value),
    bottomInterval: parseInt(bottomIntervalInputSelector.value),
  }
}

const renderOnEvent = async (action: string, selector: string) => {
  await renderForm(allSortingMethods);
  const submitButton = document.querySelector(selector);

  submitButton.addEventListener(action, (event) => {
    event.preventDefault();
    let formValuesObject:tableRow = getFormValues()
    const numbersArray = generateRandomNumberArray(formValuesObject.length, formValuesObject.bottomInterval, formValuesObject.topInterval)
    console.log(`before: ${numbersArray}`)
    formValuesObject.executionTime = getSortingTime(formValuesObject.method, numbersArray)
    console.log(`after: ${numbersArray}`)
    renderTableData(formValuesObject);
  });
};

export {tableRow, renderOnEvent, allSortingMethods}