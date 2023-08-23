/** @format */

import React, { useState } from 'react'
import { AsyncPaginate } from 'react-select-async-paginate'
import { GEO_API_URL, geoApiOptions } from '../../api'

const Search = (props) => {
	const [search, setSearch] = useState(null)

	const loadOptions = (inputValue) => {
		return fetch(
			`${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}`,
			geoApiOptions
		)
			.then((response) => response.json())
			.then((response) => {
				return {
					options: response.data.map((city) => {
						return {
							value: `${city.latitude} ${city.longitude}`,
							label: `${city.name}, ${city.countryCode}`,
						}
					}),
				}
			})
			.catch((err) => console.error(err))
	}
	const handleOnChange = (searchData) => {
		setSearch(searchData)
		props.onSearchData(searchData)
	}
	return (
		<div>
			<AsyncPaginate
				placeholder='Search for city'
				debounceTimeout={600}
				value={search}
				onChange={handleOnChange}
				loadOptions={loadOptions}
			/>
		</div>
	)
}

export default Search
