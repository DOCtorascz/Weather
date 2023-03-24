export {deleteCities}
import { lockCities } from "./main.js"
import { arrayCitiesList } from "./createRight.js"


function deleteCities() {
  lockCities.addEventListener('click', (event) => {
    if (event.target.classList.contains('deleteCity')) {
      let elementClickId = event.target.id
      let elementId = Number(elementClickId.slice(1))

      let domId = document.querySelector(`#${elementClickId}`)
      domId.parentNode.remove()

      arrayCitiesList.splice(elementId, 1)
      localStorage.removeItem('newCitiesList')  
      localStorage.setItem('newCitiesList', JSON.stringify(arrayCitiesList))


      for (let j = 0; j <= lockCities.childNodes.length - 1; j++) {
        lockCities.childNodes[j].childNodes[1].id = 'a' + j
      }
    }
  })
}