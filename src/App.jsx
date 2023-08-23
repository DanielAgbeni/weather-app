/** @format */
import './App.css'
import CurrentWeather from './component/CurrentWeather'
import Search from './component/search/Search'
import { WEATHER_API_KEY, WEATHER_API_URL } from './api'
import { useState } from 'react'
import Forecast from './component/Forecast'

function App() {
	const [currentWeather, setCurrentWeather] = useState(null)
	const [forecast, setForecast] = useState(null)
	const handleOnSearchChange = (searchData) => {
		const [lat, lon] = searchData.value.split(' ')
		const currWeahFetch = fetch(
			`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
		)
		const foreWeahFetch = fetch(
			`${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
		)
		Promise.all([currWeahFetch, foreWeahFetch])
			.then(async (response) => {
				const weatherResponse = await response[0].json()
				const forecastResponse = await response[1].json()
				setCurrentWeather({ city: searchData.label, ...weatherResponse })
				setForecast({ city: searchData.label, ...forecastResponse })
			})
			.catch((err) => console.error(err))
	}
	// console.log(currentWeather)
	// console.log(forecast)
	return (
		<div className='container'>
			<Search onSearchData={handleOnSearchChange} />
			{currentWeather && <CurrentWeather data={currentWeather} />}
			{forecast && <Forecast data={forecast} />}
		</div>
	)
}

export default App
