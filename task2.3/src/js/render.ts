import { allSortingMethods } from "./data";

const wrapper: HTMLDivElement = document.querySelector(".wrapper");

export interface tableRow {
  method: string
  length: number
  topRange: number
  bottomRange: number
  executionTime: string
}

export const renderOptions = (options: string[]): HTMLSelectElement => {
  const select = document.createElement("select");
  select.className = "sorting-methods";
  options.forEach((option) => {
    const optionTag: HTMLOptionElement = document.createElement("option");
    optionTag.value = option;
    optionTag.innerHTML = option;
    select.insertAdjacentElement("afterbegin", optionTag);
  });
  return select;
};

export const renderForm = async (sortingMethods: string[]) => {
  const form: HTMLFormElement = document.createElement("form");
  form.className = "input-form";
  form.innerHTML = `<div class="selection-block">
          <span>Sort method: </span>
          ${renderOptions(allSortingMethods).outerHTML}
        </div>
        <div class="input-block">
          <label for="length">length: </label>
          <input class="input length" type="text" name="length"/>
          <label for="bottomRange">bottom range: </label>
          <input class="input bottom-range" type="text" name="bottomRange"/>
          <label for="topRange">top range: </label>
          <input class="input top-range" type="text" name="topRange"/>
        </div>
        <button class="submit-button" type="submit">Submit</button>`;
  wrapper.insertAdjacentElement("beforeend", form);
  return form
};

export const renderOutputTableTitle = () => {
  const table: HTMLTableElement = document.createElement("table");
  table.className = "output-table";
  table.innerHTML = `<tr>
          <th>Method</th>
          <th>Length</th>
          <th>Top range</th>
          <th>Bottom range</th>
          <th>Time interval(milliseconds)</th>
        </tr>`;
  wrapper.insertAdjacentElement("beforeend", table);
};

export const renderOutputTableData = (resultObject: tableRow) => {
  const table = document.querySelector(".output-table")
    const tableRow = document.createElement("tr")
    tableRow.innerHTML = `<th>${resultObject.method}</th>
          <th>${resultObject.length}</th>
          <th>${resultObject.topRange}</th>
          <th>${resultObject.bottomRange}</th>
          <th>${resultObject.executionTime} milliseconds</th>`
    table.insertAdjacentElement("beforeend", tableRow);
};

