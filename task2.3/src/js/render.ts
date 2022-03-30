import {renderOnEvent, tableRow} from "./data";

const wrapper: HTMLDivElement = document.querySelector(".wrapper");

const renderOptions = (options: string[]): HTMLSelectElement => {
  const select = document.createElement("select");
  select.className = "sorting-methods";

  options.forEach((option) => {
    const optionTag: HTMLOptionElement = document.createElement("option");
    optionTag.value = option;
    optionTag.innerHTML = option;
    select.insertAdjacentElement("beforeend", optionTag);
  });

  return select;
};

const renderForm = async (sortingMethods: string[]) => {
  const form: HTMLFormElement = document.createElement("form");
  form.className = "input-form";

  form.innerHTML = `<div class="selection-block">
          <span>Sort method: </span>
          ${renderOptions(sortingMethods).outerHTML}
        </div>
        <div class="input-block">
          <label for="length">length: </label>
          <input class="input length" type="text" name="length"/>
          <label for="bottomInterval">bottom interval: </label>
          <input class="input bottom-interval" type="text" name="bottomInterval"/>
          <label for="topInterval">top interval: </label>
          <input class="input top-interval" type="text" name="topInterval"/>
        </div>
        <button class="submit-button" type="submit">Submit</button>`;
  wrapper.insertAdjacentElement("beforeend", form);
};

const renderTableTitle = () => {
  const table: HTMLTableElement = document.createElement("table");
  table.className = "output-table";

  table.innerHTML = `<tr>
          <th>Method</th>
          <th>Length</th>
          <th>Top interval</th>
          <th>Bottom interval</th>
          <th>Time interval(milliseconds)</th>
        </tr>`;
  wrapper.insertAdjacentElement("beforeend", table);
};



const renderTableData = (resultObject: tableRow) => {
  const table = document.querySelector(".output-table")
  const tableRow = document.createElement("tr")

  tableRow.innerHTML = `<th>${resultObject.method}</th>
          <th>${resultObject.length}</th>
          <th>${resultObject.topInterval}</th>
          <th>${resultObject.bottomInterval}</th>
          <th>${resultObject.executionTime} milliseconds</th>`
  table.insertAdjacentElement("beforeend", tableRow);
};

const renderDefaultPage = () => {
  renderOnEvent("click", ".submit-button")
  renderTableTitle()
}

export {renderForm, renderTableData, renderDefaultPage}