import "regenerator-runtime";
import "./styles/style.css";
import "./script/component/app-bar.js";
import { main, search } from "./script/view/main.js";
import "./scss/styles.scss";
import * as bootstrap from "bootstrap";

document.addEventListener("DOMContentLoaded", search);
document.addEventListener("DOMContentLoaded", main);
