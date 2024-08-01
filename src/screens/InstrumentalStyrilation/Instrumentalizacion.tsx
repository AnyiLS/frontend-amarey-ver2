import React from 'react'
import { useTranslation } from 'react-i18next'

const InstrumentalStyrilationMobile: React.FC = (): JSX.Element => {
	/** States */
	const [view, setView] = React.useState<number>(0)
	const [height, setHeight] = React.useState<number>(0)
	const { t } = useTranslation()

	React.useEffect(() => {
		if (document.getElementById('navbar__container'))
			setHeight(
				document.getElementById('navbar__container')?.clientHeight ?? 0
			)
	}, [])

	return (
		<React.Fragment>
			{view === 0 ? (
				<svg
					viewBox="0 0 414 700"
					width="100%"
					style={{ height: '100%' }}
					preserveAspectRatio="none">
					<defs>
						<style>
							{
								'.a-reward-2-mobile,.d-reward-2-mobile,.e-reward-2-mobile,.g-reward-2-mobile,.h-reward-2-mobile{fill:#fff;}.b-reward-2-mobile{fill:url(#a-reward-2-mobile);}.c-reward-2-mobile{mix-blend-mode:multiply;isolation:isolate;fill:url(#b-reward-2-mobile);}.d-reward-2-mobile{font-size:24px;}.d-reward-2-mobile,.g-reward-2-mobile{font-family:Kiona-Bold;font-weight:700;}.e-reward-2-mobile{font-size:14px;font-family:Silka-Regular, Silka;}.f-reward-2-mobile{fill:rgba(67,67,67,0.09);}.g-reward-2-mobile{font-size:18px;}.h-reward-2-mobile{opacity:0.4;}.i-reward-2-mobile{filter:url(#e-reward-2-mobile);}.j-reward-2-mobile{filter:url(#c-reward-2-mobile);}'
							}
						</style>
						<pattern
							id="a-reward-2-mobile"
							width={1}
							height={1}
							viewBox="309.537 0 415 855">
							<image
								preserveAspectRatio="xMidYMid slice"
								width={1282.5}
								height={855}
								xlinkHref="/images/mobile/products/neuro/instrumental.webp"
							/>
						</pattern>
						<linearGradient
							id="b-reward-2-mobile"
							x1={0.5}
							x2={0.5}
							y2={1}
							gradientUnits="objectBoundingBox">
							<stop
								offset={0}
								stopColor="#001f5f"
								stopOpacity={0}
							/>
							<stop offset={1} stopColor="#001f5f" />
						</linearGradient>
						<filter
							id="c-reward-2-mobile"
							x={0}
							y={0}
							width={431}
							height={56}
							filterUnits="userSpaceOnUse">
							<feOffset dy={3} />
							<feGaussianBlur stdDeviation={3} result="d" />
							<feFlood floodOpacity={0.302} />
							<feComposite operator="in" in2="d" />
							<feComposite in="SourceGraphic" />
						</filter>
						<filter
							id="e-reward-2-mobile"
							x={91.999}
							y={771.493}
							width={248}
							height={61.169}
							filterUnits="userSpaceOnUse">
							<feOffset dy={3} />
							<feGaussianBlur stdDeviation={3} result="f" />
							<feFlood floodOpacity={0.4} />
							<feComposite operator="in" in2="f" />
							<feComposite in="SourceGraphic" />
						</filter>
					</defs>
					<g>
						<rect
							className="b-reward-2-mobile"
							width={415}
							height={855}
						/>
						<rect
							className="c-reward-2-mobile"
							width={415}
							height={855}
						/>
						<g transform='translate(0 -200)'>
							<text
								className="d-reward-2-mobile"
								transform="translate(207 632)">
								<tspan x={-100.932} y={0}>
									{t('INSTRUMENTAL Y')}
								</tspan>
								<tspan x={-93.996} y={26}>
									{t('ESTERILIZACIÓN')}
								</tspan>
							</text>
							<text
								className="e-reward-2-mobile"
								transform="translate(35 681)">
								<tspan x={0} y={13}>
									{t(
										'Con un completo portafolio de instrumentos '
									)}
								</tspan>
								<tspan x={0} y={31}>
									{t(
										'para las diferentes especialidades quirúrgicas, y '
									)}
								</tspan>
								<tspan x={0} y={49}>
									{t(
										'la interacción entre los productos y los procesos '
									)}
								</tspan>
								<tspan x={0} y={67}>
									{t('de lavado y esterilización.')}
								</tspan>
							</text>
						</g>
						<g
							className="j-reward-2-mobile"
							transform="matrix(1, 0, 0, 1, -9, -6)">
							<rect
								className="f-reward-2-mobile"
								width={413}
								height={38}
								transform="translate(9 6)"
							/>
						</g>
						<text
							className="g-reward-2-mobile"
							transform="translate(207 26)">
							<tspan x={-101.322} y={0}>
								{t('SOLUCIONES EN SALUD')}
							</tspan>
						</text>
						<g
							transform="translate(366.585 13.292)"
							onClick={() =>
								(window.location.href = '/productos')
							}>
							<path
								className="a-reward-2-mobile"
								d="M8.8,10.967,5.708,7.874,2.615,10.967A1.531,1.531,0,1,1,.448,8.8L3.542,5.708.448,2.615A1.532,1.532,0,0,1,2.615.448L5.708,3.542,8.8.448a1.531,1.531,0,1,1,2.165,2.166L7.874,5.708,10.967,8.8A1.531,1.531,0,0,1,8.8,10.967Z"
								transform="translate(0 0)"
								onClick={() =>
									(window.location.href = '/productos')
								}
							/>
						</g>
						<g
							transform="translate(91.999 571.493)"
							onClick={() => setView(1)}>
							<g
								className="i-reward-2-mobile"
								transform="matrix(1, 0, 0, 1, -101, -777.49)">
								<path
									className="h-reward-2-mobile"
									d="M230,0H47.176C28.161,0,11.086,12.6,4.142,31.746L0,43.169H181.308c20.259,0,38.4-13.581,45.534-34.092Z"
									transform="translate(101 777.49)"
								/>
							</g>
							<text
								className="g-reward-2-mobile"
								transform="translate(55.5 28.584)"
								onClick={() => setView(1)}>
								<tspan x={0} y={0}>
									{t('Conoce Más')}
								</tspan>
							</text>
						</g>
					</g>
				</svg>
			) : (
				<svg
					viewBox="0 0 414 855"
					width="100%"
					style={{ height: '100%' }}
					preserveAspectRatio="none">
					<defs>
						<style>
							{
								'.a-reward-2-mobile,.i-reward-2-mobile,.k-reward-2-mobile{fill:#fff;}.b-reward-2-mobile{fill:url(#a-reward-2-mobile);}.c-reward-2-mobile{opacity:0.65;mix-blend-mode:multiply;isolation:isolate;fill:url(#b-reward-2-mobile);}.d-reward-2-mobile{fill:rgba(67,67,67,0.09);}.e-reward-2-mobile,.f-reward-2-mobile,.h-reward-2-mobile,.n-reward-2-mobile{fill:#001f5f;}.e-reward-2-mobile{font-size:24px;}.e-reward-2-mobile,.k-reward-2-mobile{font-family:Kiona-Bold;font-weight:700;}.f-reward-2-mobile{font-size:14px;font-family:Silka-Regular, Silka;}.g-reward-2-mobile{opacity:0.7;}.i-reward-2-mobile{opacity:0.4;}.j-reward-2-mobile{fill:#e40032;}.k-reward-2-mobile{font-size:18px;}.l-reward-2-mobile{clip-path:url(#e-reward-2-mobile);}.m-reward-2-mobile{fill:#e7002a;stroke:#e7002a;}.n-reward-2-mobile{stroke:#001f5f;}.o-reward-2-mobile{filter:url(#c-reward-2-mobile);}'
							}
						</style>
						<pattern
							id="a-reward-2-mobile"
							width={1}
							height={1}
							viewBox="87.949 0 796.772 1647.433">
							<image
								preserveAspectRatio="xMidYMid slice"
								width={1284}
								height={856}
								xlinkHref="/images/mobile/products/neuro/instrumental.webp"
							/>
						</pattern>
						<linearGradient
							id="b-reward-2-mobile"
							x1={0.5}
							x2={0.5}
							y2={1}
							gradientUnits="objectBoundingBox">
							<stop
								offset={0}
								stopColor="#001f5f"
								stopOpacity={0}
							/>
							<stop offset={1} stopColor="#001f5f" />
						</linearGradient>
						<filter
							id="c-reward-2-mobile"
							x={0}
							y={0}
							width={431}
							height={56}
							filterUnits="userSpaceOnUse">
							<feOffset dy={3} />
							<feGaussianBlur stdDeviation={3} result="d" />
							<feFlood floodOpacity={0.302} />
							<feComposite operator="in" in2="d" />
							<feComposite in="SourceGraphic" />
						</filter>
						<clipPath id="e-reward-2-mobile">
							<rect
								className="a-reward-2-mobile"
								width={414}
								height={114}
								transform="translate(0 116)"
							/>
						</clipPath>
					</defs>
					<g>
						<rect
							className="b-reward-2-mobile"
							width={414}
							height={856}
						/>
						<rect
							className="c-reward-2-mobile"
							width={414}
							height={474}
						/>
						<path
							className="a-reward-2-mobile"
							d="M10,0H404a10,10,0,0,1,10,10V452a0,0,0,0,1,0,0H0a0,0,0,0,1,0,0V10A10,10,0,0,1,10,0Z"
							transform="translate(0 404)"
						/>
						<g
							className="o-reward-2-mobile"
							transform="matrix(1, 0, 0, 1, -9, -6)">
							<rect
								className="d-reward-2-mobile"
								width={413}
								height={38}
								transform="translate(9 6)"
							/>
						</g>
						<text
							className="e-reward-2-mobile"
							transform="translate(207 457)">
							<tspan x={-100.932} y={0}>
								{t('INSTRUMENTAL Y')}
							</tspan>
							<tspan x={-93.996} y={26}>
								{t('ESTERILIZACIÓN')}
							</tspan>
						</text>
						<text
							className="f-reward-2-mobile"
							transform="translate(36 509)">
							<tspan x={0} y={13}>
								{t(
									'nuestro equipo profesional está presto a brindar '
								)}
							</tspan>
							<tspan x={0} y={31}>
								{t('información, asesoría, acompañamiento, ')}
							</tspan>
							<tspan x={0} y={49}>
								{t('sugerencias y soluciones a sus planes y ')}
							</tspan>
							<tspan x={0} y={67}>
								{t('proyectos con:')}
							</tspan>
						</text>
						<text
							className="f-reward-2-mobile"
							transform="translate(36 714)">
							<tspan x={0} y={13}>
								{t(
									'Siempre enfocados en optimizar y preservar '
								)}
							</tspan>
							<tspan x={0} y={31}>
								{t('su inversión. ')}
							</tspan>
						</text>
						<text
							className="f-reward-2-mobile"
							transform="translate(75 595)">
							<tspan x={0} y={13}>
								{t('Instrumental quirúrgico y su ')}
							</tspan>
							<tspan x={0} y={31}>
								{t('mantenimiento ')}
							</tspan>
							<tspan x={0} y={49}>
								{t('Contenedores ecológicos ')}
							</tspan>
							<tspan x={0} y={67}>
								{t('Equipos para lavado y termodesinfección ')}
							</tspan>
							<tspan x={0} y={85}>
								{t('Equipos para esterilización ')}
							</tspan>
						</text>
						<g
							className="g-reward-2-mobile"
							transform="translate(185 824.024) rotate(-90)"
							onClick={() => setView(0)}>
							<circle
								className="h-reward-2-mobile"
								cx={22}
								cy={22}
								r={22}
								transform="translate(0 0)"
							/>
							<path
								className="i-reward-2-mobile"
								d="M0,0V17.12l14.824-8.56L7.743,4.471Z"
								transform="translate(26.66 30.56) rotate(180)"
							/>
						</g>
						<circle
							className="j-reward-2-mobile"
							cx={3}
							cy={3}
							r={3}
							transform="translate(62 600)"
						/>
						<text
							className="k-reward-2-mobile"
							transform="translate(207 26)">
							<tspan x={-101.322} y={0}>
								{t('SOLUCIONES EN SALUD')}
							</tspan>
						</text>
						<g
							transform="translate(366.584 13.292)"
							onClick={() => setView(0)}>
							<path
								className="a-reward-2-mobile"
								d="M8.8,10.967,5.708,7.874,2.615,10.967A1.531,1.531,0,1,1,.448,8.8L3.542,5.708.448,2.615A1.532,1.532,0,0,1,2.615.448L5.708,3.542,8.8.448a1.531,1.531,0,1,1,2.165,2.166L7.874,5.708,10.967,8.8A1.531,1.531,0,0,1,8.8,10.967Z"
							/>
						</g>
						<circle
							className="j-reward-2-mobile"
							cx={3}
							cy={3}
							r={3}
							transform="translate(62 636)"
						/>
						<circle
							className="j-reward-2-mobile"
							cx={3}
							cy={3}
							r={3}
							transform="translate(62 654)"
						/>
						<circle
							className="j-reward-2-mobile"
							cx={3}
							cy={3}
							r={3}
							transform="translate(62 672)"
						/>
						<g transform="translate(0 605)">
							<g
								className="l-reward-2-mobile"
								transform="translate(0 21)">
								<g transform="translate(423.485 1.267) rotate(90)">
									<path
										className="m-reward-2-mobile"
										d="M.339,213.5l35.086-84.2A36.255,36.255,0,0,1,68.977,106.93H86.9v0h84.706A36.717,36.717,0,0,0,205.5,84.341L240.583.141,240.244,0,205.158,84.2a36.254,36.254,0,0,1-33.552,22.365H153.683v0H68.977a36.717,36.717,0,0,0-33.891,22.592L0,213.354Z"
										transform="translate(304.048 -11.807) rotate(90)"
									/>
									<path
										className="n-reward-2-mobile"
										d="M254.919,235.375,217.1,143.212c-6.1-14.871-20.046-24.587-35.518-24.752l-18.84-.2v0L73.7,117.315a38.173,38.173,0,0,1-21.476-6.948,40.8,40.8,0,0,1-14.4-18.054L0,.15.355,0,38.178,92.162c6.1,14.872,20.046,24.587,35.518,24.752l18.84.2v0l89.038.948a38.169,38.169,0,0,1,21.476,6.948,40.8,40.8,0,0,1,14.4,18.054l37.823,92.162Z"
										transform="matrix(-0.966, -0.259, 0.259, -0.966, -210.757, 473.973)"
									/>
								</g>
							</g>
						</g>
					</g>
				</svg>
			)}
		</React.Fragment>
	)
}

export default InstrumentalStyrilationMobile
