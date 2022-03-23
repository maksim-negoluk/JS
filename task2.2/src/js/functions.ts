import {menuItems} from "./data";

const menuItemsBlock: HTMLDivElement = document.querySelector(".items-block");
const FilterButtonsBlock: HTMLDivElement = document.querySelector(".filter-buttons-block");

const categoriesArray:string[] = ["all"]

menuItems.forEach(item => {
    categoriesArray.push(item.category)
})

const makeArrayUnique = (value:any, index:number, self:any) => {
    return self.indexOf(value) === index;
}

const renderButtons = (categories:string[]):void => {
    categories.filter(makeArrayUnique).forEach(category => {
        console.log(category)
        const button: HTMLElement = document.createElement("button");
        button.classList.add("item");
        button.innerHTML = category;
        FilterButtonsBlock.insertAdjacentElement(
            "beforeend",
            button
        );
        button.addEventListener("click", () => {
            menuItemsBlock.textContent = "";
            renderFilteredItems(category);
        })
    });
}

const renderFilteredItems = (category:string):any  => {
    menuItems.forEach((item) => {
        if(item.category == category || category == "all") {
            const menuItem: HTMLElement = document.createElement("div");
            menuItem.classList.add("item");
            menuItem.innerHTML = `<div class="item-picture-block">
            <img src="${item.image}" alt="pancake" />
          </div>
          <div class="item-info-block">
            <div class="item-title-block">
              <span class="item-title">${item.title}</span>
              <span class="price"> $${item.price}</span>
            </div>
            <div class="item-description-block">
              <p class="item-description">
                ${item.description}
              </p>
            </div>
          </div>`;
            menuItemsBlock.insertAdjacentElement(
                "afterbegin",
                menuItem
            )
        }
    });

}

export {renderFilteredItems, renderButtons, categoriesArray}