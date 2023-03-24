export {arrCitiesList, addCitiesList, arrayCitiesList}
import { removeCities } from "./main.js"

const arrayCitiesList = []

function addCitiesList() {
  let saveCity2 = localStorage.getItem('newCitiesList')
  saveCity2 = JSON.parse(saveCity2)

  if (saveCity2 != null) {
    saveCity2.forEach((item, index) => {
      arrayCitiesList.splice(index, arrayCitiesList.length)
      arrayCitiesList.push(item)
  
      const locationCitites = document.querySelector('.location-cities')
      const listCities = document.createElement('li')
      listCities.setAttribute('class', 'cities')
      const listCitiesSpan = document.createElement('span')
      listCitiesSpan.setAttribute('class', 'addCities')
      const listCitiesP = document.createElement('p')
      listCitiesP.textContent = 'x'
      listCitiesP.setAttribute('class', 'deleteCity')
      listCitiesP.setAttribute('id', `a${index}`)
      listCitiesSpan.textContent = saveCity2[index]
    
      locationCitites.appendChild(listCities)
      listCities.appendChild(listCitiesSpan)
      listCities.appendChild(listCitiesP)
    }) 
  }
}

function arrCitiesList() {
  removeCities()
  let cityList = document.querySelector('.weather__like-city-name')
  arrayCitiesList.push(cityList.textContent)

  localStorage.setItem('newCitiesList', JSON.stringify(arrayCitiesList))

  addCitiesList()
}
