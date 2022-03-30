import {renderOnEvent, tableRow, allSortingMethods} from "./data";

const wrapper: HTMLDivElement = document.querySelector(".wrapper");

const generateSelectTemplate = (options:string[]):HTMLSelectElement => {
  const select = document.createElement("select");
  select.className = "sorting-methods";

  options.forEach((option) => {
    const optionTag: HTMLOptionElement = document.createElement("option");
    optionTag.value = option;
    optionTag.innerHTML = option;
    select.insertAdjacentElement("beforeend", optionTag);
  });

  return select;
}

const generateFormTemplate = (sortingMethods:string[]):HTMLFormElement => {
  const form: HTMLFormElement = document.createElement("form");
  form.className = "input-form";
  form.innerHTML = `<div class="selection-block">
          <span>Sort method: </span>
          ${generateSelectTemplate(sortingMethods).outerHTML}
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

  return form
}

const generateTableNotationTemplate = ():HTMLSpanElement => {
  const notation = document.createElement("span")
  notation.innerHTML = "*see sorted array in console"
  notation.className = "notation"

  return notation
}

const generateTableTitleTemplate = ():HTMLTableElement => {
  const table: HTMLTableElement = document.createElement("table");
  table.className = "output-table";

  table.innerHTML = `<tr>
          <th>Method</th>
          <th>Length</th>
          <th>Top interval</th>
          <th>Bottom interval</th>
          <th>Time interval(milliseconds)</th>
        </tr>`;

  return table
}

const generateTableDataTemplate = (resultObject:tableRow) => {
  const tableRow = document.createElement("tr")

  tableRow.innerHTML = `<th>${resultObject.method}</th>
          <th>${resultObject.length}</th>
          <th>${resultObject.bottomInterval}</th>
          <th>${resultObject.topInterval}</th>
          <th>${resultObject.executionTime} milliseconds</th>`

  return tableRow
}

const renderForm = async (sortingMethods: string[]) => {
  wrapper.insertAdjacentElement("beforeend", generateFormTemplate(allSortingMethods));
};

const renderTableTitle = () => {
  const table = generateTableTitleTemplate()
  wrapper.insertAdjacentElement("beforeend", table);
  table.insertAdjacentElement("beforebegin", generateTableNotationTemplate())
};

const renderTableData = (resultObject: tableRow) => {
  const table = document.querySelector(".output-table")
  table.insertAdjacentElement("beforeend", generateTableDataTemplate(resultObject));
};

const renderDefaultPage = () => {
  renderOnEvent("click", ".submit-button")
  renderTableTitle()
}

export {renderForm, renderTableData, renderDefaultPage}