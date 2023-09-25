/** @format */

import React from 'react'

const Ads = (props) => {
	const { dataAdSlot } = props

	useEffect(() => {
		try {
			;(window.adsbygoogle = window.adsbygoogle || []).push({})
		} catch (e) {}
	}, [])
	return (
		<>
			<ins
				class='adsbygoogle'
				style='display:block'
				data-ad-client='ca-pub-4884232232976809'
				data-ad-slot={dataAdSlot}
				data-ad-format='auto'
				data-full-width-responsive='true'></ins>
		</>
	)
}

export default Ads
