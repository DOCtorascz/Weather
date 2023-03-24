export {saveInfoCity}
import { nowCities, detailsCities } from "./main.js"
import { addCitiesList } from "./createRight.js"

function saveInfoCity() {
  let saveCity = localStorage.getItem('newCities')
  saveCity = JSON.parse(saveCity)

  let saveCityforecast = localStorage.getItem('forecastCities')
  saveCityforecast = JSON.parse(saveCityforecast)

  if (saveCity != null && saveCityforecast != null) {
    nowCities.DEGREE.textContent = saveCity[0].degree
    nowCities.CLOUDPAGE.setAttribute('src', `${saveCity[0].cloud}`)
    nowCities.NAME.textContent = saveCity[0].name

    addCitiesList()

    detailsCities.NAME.textContent = saveCityforecast[0].name
    detailsCities.INFO.textContent = saveCityforecast[0].info
    detailsCities.FEELS.textContent = saveCityforecast[0].feels
    detailsCities.CLOUDS.textContent = saveCityforecast[0].clouds
    detailsCities.RISE.textContent = saveCityforecast[0].rise
    detailsCities.SET.textContent = saveCityforecast[0].set
  }
}