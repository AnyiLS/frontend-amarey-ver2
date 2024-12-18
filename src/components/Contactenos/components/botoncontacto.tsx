import React from 'react'
import Formulario from 'screens/Formulario/Formulario'

const BotonContacto: React.FC = () => {

    const [showForm, setShowForm] = React.useState(false) 

	return (
		<div className='absolute bottom-[0] right-[0] w-[440px] h-[98px]'>
			<svg viewBox="-2 0 560.684 124.644" onClick={() => setShowForm(true)}>
				<defs>
					<style>
						{
							'.a-contabo{fill:#e40032;}.b-contabo,.c-contabo{fill:#fff;}.c-contabo{font-size:32px;font-family:Silka-Bold, Silka;font-weight:700;}.d-contabo{filter:url(#a-contabo);}'
						}
					</style>
					<filter
						id="a-contabo"
						x={0}
						y={0}
						width={578.684}
						height={143.644}
						filterUnits="userSpaceOnUse">
						<feOffset dy={-3} />
						<feGaussianBlur stdDeviation={3} result="b-contabo" />
						<feFlood floodOpacity={0.161} />
						<feComposite operator="in" in2="b-contabo" />
						<feComposite in="SourceGraphic" />
					</filter>
				</defs>
				<g>
					<g
						className="d-contabo"
						transform="matrix(1, 0, 0, 1, -9, -12)">
						<path
							className="a-contabo"
							d="M0,125.644V86.7A86.7,86.7,0,0,1,86.7,0h473.98V125.644Z"
							transform="translate(9 12)"
						/>
					</g>
					<g transform="translate(43.646 37.655)">
						<path
							className="b-contabo"
							d="M37.908,69.4a49.858,49.858,0,0,0,9.9,4.942c.5.181.716.7,1.046,1.079,2.386,2.727,5.052,5,8.8,5.586a10.01,10.01,0,0,0,6.793-1.511,19.535,19.535,0,0,0,5.91-5.676,39.612,39.612,0,0,0,6.631-16.706c.153-.9-.214-1.071-.993-1.11A47.019,47.019,0,0,1,65.69,54.691a37.1,37.1,0,0,1-14.658-8.075c-.812-.713-1.105-.538-1.658.24a19.047,19.047,0,0,1-8,6.842c-.788.335-.692.831-.627,1.417a43.887,43.887,0,0,0,2.8,11.284c.092.234.182.47.391,1.007a33.617,33.617,0,0,1-4.962-2.831.845.845,0,0,1-.24-.438c-1.8-5.994-2.7-12.068-1.206-18.259,1.914-7.936,7.679-12.946,16.2-14.15A31.25,31.25,0,0,1,68.54,32.786c7.178,2.488,11.144,7.673,12.29,15.077a35.476,35.476,0,0,1-1.374,15.419,3.912,3.912,0,0,0,0,2.316,15.674,15.674,0,0,1-.1,9.612A7.277,7.277,0,0,1,71.043,80.5a3.234,3.234,0,0,0-2.64.77c-6.04,4.914-12.9,4.86-19-.116a2.7,2.7,0,0,0-2.171-.687c-4.76.488-7.689-1.559-8.9-6.172a13.5,13.5,0,0,1-.407-2.241c-.069-.8-.015-1.6-.015-2.659"
							transform="translate(-27.405 -26.157)"
						/>
						<path
							className="b-contabo"
							d="M57.152,25.2c8.744.233,16.337,2.855,22.2,9.464a20.558,20.558,0,0,1,4.875,9.755,2.123,2.123,0,0,0,1.164,1.635,6.166,6.166,0,0,1,3.039,4.337,16.123,16.123,0,0,1-1.005,10.176,6.5,6.5,0,0,1-6.393,3.966c-.667.005-.842-.149-.754-.862.538-4.407.983-8.822,1.144-13.265.321-8.876-3.8-15.209-11.573-18.9-10.161-4.833-20.181-4.173-29.351,2.627a17.8,17.8,0,0,0-7.413,15.258,125.789,125.789,0,0,0,.99,13.022,1.481,1.481,0,0,0,.649,1.14A41.761,41.761,0,0,0,51.395,71.26a3.567,3.567,0,0,0,2.247-.353,7.74,7.74,0,0,1,5.675-.056A1.873,1.873,0,0,1,60.364,73.2a2,2,0,0,1-1.924,1.726c-1.308.07-2.625.024-3.937.009a1.459,1.459,0,0,1-1.305-.673c-.466-.9-1.27-.967-2.1-1.119a42.091,42.091,0,0,1-17.271-7.894,4.4,4.4,0,0,0-1.92-.879,6.014,6.014,0,0,1-4.675-3.517A15.742,15.742,0,0,1,26.2,49.972a6.1,6.1,0,0,1,3.176-4.079,1.406,1.406,0,0,0,.8-1.035C32.721,33.967,40.235,28.4,50.6,25.921a23.322,23.322,0,0,1,3.006-.485c1.22-.126,2.449-.167,3.549-.237"
							transform="translate(-25.675 -25.199)"
						/>
					</g>
					<text
						className="c-contabo"
						transform="translate(129.28 51.49)">
						<tspan x={0} y={30}>
							{'CONT\xC1CTENOS'}
						</tspan>
					</text>
				</g>
			</svg>
            {showForm && <Formulario onClose={() => setShowForm(false)}></Formulario>}
		</div>
	)
}

export default BotonContacto
