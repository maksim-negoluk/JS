import "../styles/style.scss"
import {render} from "./render";
import {observeImages} from "./utils";

window.onload = async () => {
    await render()
    observeImages()
}