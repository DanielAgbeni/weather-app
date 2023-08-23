/** @format */
import {
	Accordion,
	AccordionItem,
	AccordionItemButton,
	AccordionItemHeading,
	AccordionItemPanel,
} from 'react-accessible-accordion'
import './forecast.css'
import React from 'react'

const WEEK_DAYS = [
	'Monday',
	'Tuesday',
	'Wednesday',
	'Thursday',
	'Friday',
	'Saturday',
	'Sunday',
]

const Forecast = ({ data }) => {
	const daysInAWeek = new Date().getDay()
	const forecastDays = WEEK_DAYS.slice(daysInAWeek, WEEK_DAYS.length).concat(
		WEEK_DAYS.slice(0, daysInAWeek)
	)
	return (
		<div>
			<label className='title'>Daily</label>
			<Accordion allowZeroExpanded>
				{data.list.splice(0, 7).map((item, i) => (
					<AccordionItem key={i}>
						<AccordionItemHeading>
							<AccordionItemButton>
								<div className='daily-item'>
									<img
										src={`icons/${item.weather[0].icon}.png`}
										alt='weather'
										className='icon-small'
									/>
									<label className='day'>{forecastDays[i]}</label>
									<label className='description'>
										{item.weather[0].description}
									</label>
									<label className='min-max'>
										Low: {Math.round(item.main.temp_min)}℃ High:{' '}
										{Math.round(item.main.temp_max)}℃
									</label>
								</div>
							</AccordionItemButton>
						</AccordionItemHeading>
						<AccordionItemPanel>
							<div className='daily-details-grid'>
								<div className='daily-details-grid-item'>
									<label>Pressure</label>
									<label>{item.main.pressure}hPa</label>
								</div>
								<div className='daily-details-grid-item'>
									<label>Humidity</label>
									<label>{item.main.humidity}%</label>
								</div>
								<div className='daily-details-grid-item'>
									<label>Wind</label>
									<label>{item.wind.speed}m/s</label>
								</div>
								<div className='daily-details-grid-item'>
									<label>Clouds</label>
									<label>{item.clouds.all}%</label>
								</div>
								<div className='daily-details-grid-item'>
									<label>Feels like</label>
									<label>{Math.round(item.main.feels_like)}℃</label>
								</div>
							</div>
						</AccordionItemPanel>
					</AccordionItem>
				))}
			</Accordion>
		</div>
	)
}

export default Forecast
