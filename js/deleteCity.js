export {deleteCities}
import { lockCities } from "./main.js"
import { mySet } from "./createRight.js"

function deleteCities() {
  lockCities.addEventListener('click', (event) => {
    if (event.target.classList.contains('deleteCity')) {
      let elementClickId = event.target.id
      let domId = document.querySelector(`#${elementClickId}`)
      domId.parentNode.remove()
      
      let contentCity = domId.parentNode.childNodes[0].textContent

      mySet.delete(contentCity)

      localStorage.removeItem('newCitiesList')  
      localStorage.setItem('newCitiesList', JSON.stringify([...mySet]))


      for (let j = 0; j <= lockCities.childNodes.length - 1; j++) {
        lockCities.childNodes[j].childNodes[1].id = 'a' + j
      }
    }
  })
}