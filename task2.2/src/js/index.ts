import "../styles/style.scss";
import "../fonts/Roboto-Regular.ttf";
import {renderFilteredItems, renderButtons, categoriesArray} from "./functions";

renderButtons(categoriesArray);
renderFilteredItems("all")