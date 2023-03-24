export {  addCities, nowCities, removeCities, detailsCities, lockCities }
import { catchGet } from "./catch.js"
import { saveInfoCity } from "./saveInfoCity.js" 
import { arrCitiesList } from "./createRight.js"
import { tabsColor } from "./tabsColor.js"
import { deleteCities } from "./deleteCity.js"
import { addCityLi } from "./rightListAdd.js"

const searchFormCitites = document.querySelector('.search-cities')
const searcBtCitites = document.querySelector('.search-cities__bt')
const searchTextCitites = document.querySelector('.search-cities__text')
const lockCities = document.querySelector('.location-cities')

searchFormCitites.addEventListener('click', (event) => {
  event.preventDefault()
})

const nowCities = {
  DEGREE: document.querySelector('.weather__left-degree'),
  CLOUDPAGE: document.querySelector('.weather__clouds'),
  NAME: document.querySelector('.weather__like-city-name'),
  LIKE: document.querySelector('.weather__like-city-page'),
}

const detailsCities = {
  NAME: document.querySelector('.weather__left-city'),
  INFO: document.querySelector('.temperature'),
  FEELS: document.querySelector('.feelsLike'),
  CLOUDS: document.querySelector('.clouds'),
  RISE: document.querySelector('.sunrise'),
  SET: document.querySelector('.sunset'),
}

function addCities() {
  catchGet(searchTextCitites.value)
}

function removeCities() {
  while(lockCities.firstChild) {
    lockCities.removeChild(lockCities.firstChild) 
  }
}

addCityLi()
tabsColor()
saveInfoCity()
deleteCities()
searcBtCitites.addEventListener('click', addCities)
nowCities.LIKE.addEventListener('click', arrCitiesList)
