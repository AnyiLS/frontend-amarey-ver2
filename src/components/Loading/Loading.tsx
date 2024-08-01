import React from 'react'
/** Styles */
import './Loading.css'

const Loading: React.FC = (): JSX.Element => {
	return (
		<div className="loading__container">
			<img src="/images/logo-amarey.png" alt="Logo Amarey" className='loading__logo'/>
			<div
				className="loading__spinner spinner-border"
				role="status"></div>
		</div>
	)
}

export default Loading
