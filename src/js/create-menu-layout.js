import menuData from "../db/menu.json";

import refs from "../js/refs.js";
import template from "../templates/menu.hbs";
const { jsMenu } = refs

const menuLayout = template(menuData)



jsMenu.insertAdjacentHTML('afterbegin', menuLayout)