import "../styles/style.scss"
import {renderForm} from "./render";
import {Validator} from "./validator";

renderForm()

const formValidation = Validator("#form")

formValidation.validate()
