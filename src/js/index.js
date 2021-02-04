import "../scss/index.scss";
import route from "./router";

console.log(location.pathname);

const root = document.getElementById("root");

root.innerHTML = route[location.pathname];
