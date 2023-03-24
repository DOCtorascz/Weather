export {catchGet}
import { nowCities, detailsCities} from "./main.js";

const arrayCities = [{}]
const arrayCitiesForecast = [{}]

async function catchGet(srchValue) {
  const serverUrl = 'http://api.openweathermap.org/data/2.5/weather';
  const apiKey = 'f8cd4820b655f3d5cd972164a020d8e8';
  const url = `${serverUrl}?q=${srchValue}&appid=${apiKey}&units=metric`;

  try {
    let response = await fetch(url)
    let now = await response.json()
    if (now.cod === '404') {
      alert('Неправильно ввели город')
    } else if (now.cod === '400') {
      alert('Стоит ввести город')
    } else {
      nowCities.DEGREE.textContent = now.main.temp + `°`
      nowCities.CLOUDPAGE.setAttribute('src', `https://openweathermap.org/img/wn/${now.weather[0].icon}@4x.png`)
      nowCities.NAME.textContent = now.name

      detailsCities.NAME.textContent = now.name
      detailsCities.INFO.textContent = `Temperature: ${now.main.temp + `°`}`
      detailsCities.FEELS.textContent = `Feels like: ${now.main.feels_like + `°`}`
      detailsCities.CLOUDS.textContent = `Weather: ${now.weather[0].main}`
      let dateMs = now.sys.sunrise * 1000
      let dates = new Date(dateMs)
      let dateMsSet = now.sys.sunset * 1000
      let datesSet = new Date(dateMsSet)
      detailsCities.RISE.textContent = `Sunrise: ${dates.getHours()}:${dates.getMinutes()}`
      detailsCities.SET.textContent = `Sunset: ${datesSet.getHours()}:${datesSet.getMinutes()}`
    }
  } catch(err) {
    console.log(err)
  }

  arrayCities[0] = {
    degree: nowCities.DEGREE.textContent,
    cloud: nowCities.CLOUDPAGE.getAttribute('src'),
    name: nowCities.NAME.textContent,
  }

  arrayCitiesForecast[0] = {
    name: detailsCities.NAME.textContent,
    info: detailsCities.INFO.textContent,
    feels: detailsCities.FEELS.textContent,
    clouds: detailsCities.CLOUDS.textContent,
    rise: detailsCities.RISE.textContent,
    set: detailsCities.SET.textContent
  }

  localStorage.setItem('newCities', JSON.stringify(arrayCities))
  localStorage.setItem('forecastCities', JSON.stringify(arrayCitiesForecast))
}