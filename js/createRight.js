export {arrCitiesList, addCitiesList, mySet}
import { removeCities } from "./main.js"

const mySet = new Set()

function addCitiesList() {
  let saveCity2 = localStorage.getItem('newCitiesList')
  saveCity2 = JSON.parse(saveCity2)

  if (saveCity2 != null) {
    saveCity2.forEach((item, index) => {
      mySet.delete(`${item}`)
      mySet.add(`${item}`)
  
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
  mySet.add(`${cityList.textContent}`)

  localStorage.setItem('newCitiesList',  JSON.stringify([...mySet]))

  addCitiesList()
}
