export {addCityLi}
import { lockCities } from "./main.js";
import { catchGet } from "./catch.js";

function addCityLi() {
  lockCities.addEventListener('click', (event) => {
    if (event.target.classList.contains('addCities')) {
      let cityName = event.target.textContent;
      catchGet(cityName)
    }
  })
}