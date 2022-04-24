import "../styles/style.scss"
import {render} from "./render";

window.onload = async () => {
    await render()
}

//to do/problems:
//1.(problem) error handling
//2.(probably problem) monstrous data object
//3.(problem) ugly and hard to follow promise chain - remove async await where possible