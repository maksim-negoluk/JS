import "../styles/style.scss"
import {render} from "./render";

window.onload = async ():Promise<void> => {
    await render()
}