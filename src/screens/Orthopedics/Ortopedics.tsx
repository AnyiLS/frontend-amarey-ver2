import React from 'react'
import { useTranslation } from 'react-i18next'

const OrthopedicsMobile: React.FC = (): JSX.Element => {
	/** States */
	const [view, setView] = React.useState<number>(0)

	const [height, setHeight] = React.useState<number>(0)

	React.useEffect(() => {
		if (document.getElementById('navbar__container'))
			setHeight(
				document.getElementById('navbar__container')?.clientHeight ?? 0
			)
	}, [])

	const { t } = useTranslation()

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
								'.a-reward-2-mobile,.d-reward-2-mobile,.e-reward-2-mobile,.g-reward-2-mobile,.h-reward-2-mobile{fill:#fff;}.b-reward-2-mobile{fill:url(#a-reward-2-mobile);}.c-reward-2-mobile{opacity:0.85;mix-blend-mode:multiply;isolation:isolate;fill:url(#b-reward-2-mobile);}.d-reward-2-mobile{font-size:24px;}.d-reward-2-mobile,.g-reward-2-mobile{font-family:Kiona-Bold;font-weight:700;}.e-reward-2-mobile{font-size:14px;font-family:Silka-Regular, Silka;}.f-reward-2-mobile{fill:rgba(67,67,67,0.09);}.g-reward-2-mobile{font-size:18px;}.h-reward-2-mobile{opacity:0.4;}.i-reward-2-mobile{fill:#e40032;}.j-reward-2-mobile{filter:url(#e-reward-2-mobile);}.k-reward-2-mobile{filter:url(#c-reward-2-mobile);}'
							}
						</style>
						<pattern
							id="a-reward-2-mobile"
							width={1}
							height={1}
							viewBox="586.235 9.084 405.213 837.831">
							<image
								preserveAspectRatio="xMidYMid slice"
								width={1521.778}
								height={856}
								xlinkHref="/images/mobile/products/neuro/orthopedic.webp"
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
							width={414}
							height={856}
						/>
						<rect
							className="c-reward-2-mobile"
							width={414}
							height={856}
						/>

						<g
							className="k-reward-2-mobile"
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
								{t(' Soluciones en salud')}
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
							/>
						</g>
						<g transform='translate(0 -200)'>
							<text
								className="d-reward-2-mobile"
								transform="translate(207 536)">
								<tspan x={-66.168} y={0}>
									{t('Ortopedia')}
								</tspan>
							</text>
							<text
								className="e-reward-2-mobile"
								transform="translate(36 560)">
								<tspan x={0} y={13}>
									{t(
										'Somos líderes con tecnología que aporta a los '
									)}
								</tspan>
								<tspan x={0} y={31}>
									{t(
										'profesionales de la salud y sus pacientes las '
									)}
								</tspan>
								<tspan x={0} y={49}>
									{t(
										'herramientas en cirugías que permiten alcanzar '
									)}
								</tspan>
								<tspan x={0} y={67}>
									{t(
										'una calidad de vida más activa y satisfactoria '
									)}
								</tspan>
								<tspan x={0} y={85} xmlSpace="preserve">
									{t('mediante las líneas de:  ')}
								</tspan>
							</text>
							<text
								className="e-reward-2-mobile"
								transform="translate(79 662)">
								<tspan x={0} y={13}>
									{t('Trauma')}
								</tspan>
								<tspan x={0} y={31}>
									{t('Reemplazo articular')}
								</tspan>
								<tspan x={0} y={49}>
									{t('Artroscopia')}
								</tspan>
								<tspan x={0} y={67}>
									{t('Cráneo y maxilofacial')}
								</tspan>
							</text>
							<g
								transform="translate(91.999 771.493)"
								onClick={() => setView(1)}>
								<g
									className="j-reward-2-mobile"
									transform="matrix(1, 0, 0, 1, -101, -777.49)">
									<path
										className="h-reward-2-mobile"
										d="M230,0H47.176C28.161,0,11.086,12.6,4.142,31.746L0,43.169H181.308c20.259,0,38.4-13.581,45.534-34.092Z"
										transform="translate(101 777.49)"
									/>
								</g>
								<text
									className="g-reward-2-mobile"
									transform="translate(55.5 28.584)">
									<tspan x={0} y={0}>
										{t('Conoce Más')}
									</tspan>
								</text>
							</g>
							<circle
								className="i-reward-2-mobile"
								cx={4}
								cy={4}
								r={4}
								transform="translate(67 666)"
							/>
							<circle
								className="i-reward-2-mobile"
								cx={4}
								cy={4}
								r={4}
								transform="translate(67 684)"
							/>
							<circle
								className="i-reward-2-mobile"
								cx={4}
								cy={4}
								r={4}
								transform="translate(67 702)"
							/>
							<circle
								className="i-reward-2-mobile"
								cx={4}
								cy={4}
								r={4}
								transform="translate(67 720)"
							/>
						</g>
					</g>
				</svg>
			) : (
				<svg
					viewBox="7 0 414 855"
					width="100%"
					style={{ height: '100%' }}
					preserveAspectRatio="none">
					<defs>
						<style>
							{
								'.a-reward-2-mobile,.j-reward-2-mobile,.o-reward-2-mobile{fill:#fff;}.b-reward-2-mobile{fill:none;}.c-reward-2-mobile{fill:url(#a-reward-2-mobile);}.d-reward-2-mobile{opacity:0.6;mix-blend-mode:multiply;isolation:isolate;fill:url(#b-reward-2-mobile);}.e-reward-2-mobile{fill:rgba(67,67,67,0.09);}.f-reward-2-mobile,.g-reward-2-mobile,.i-reward-2-mobile,.m-reward-2-mobile{fill:#001f5f;}.f-reward-2-mobile{font-size:24px;}.f-reward-2-mobile,.o-reward-2-mobile{font-family:Kiona-Bold;font-weight:700;}.g-reward-2-mobile{font-size:14px;font-family:Silka-Regular, Silka;}.h-reward-2-mobile{opacity:0.7;}.j-reward-2-mobile{opacity:0.4;}.k-reward-2-mobile{clip-path:url(#e-reward-2-mobile);}.l-reward-2-mobile{clip-path:url(#f-reward-2-mobile);}.m-reward-2-mobile{stroke:#001f5f;}.n-reward-2-mobile{fill:#e7002a;stroke:#e7002a;}.o-reward-2-mobile{font-size:18px;}.p-reward-2-mobile{filter:url(#c-reward-2-mobile);}'
							}
						</style>
						<pattern
							id="a-reward-2-mobile"
							width={1}
							height={1}
							viewBox="0 55.859 648.229 1340.299">
							<image
								preserveAspectRatio="xMidYMid slice"
								width={1100.778}
								height={856}
								xlinkHref="/images/portfolio.webp"
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
								height={376}
								transform="translate(0 40)"
							/>
						</clipPath>
						<clipPath id="f-reward-2-mobile">
							<rect
								className="b-reward-2-mobile"
								width={455.962}
								height={423.485}
								transform="translate(-36.733)"
							/>
						</clipPath>
					</defs>
					<g>
						<rect
							className="c-reward-2-mobile"
							width={414}
							height={856}
							transform="translate(8)"
						/>
						<rect
							className="d-reward-2-mobile"
							width={422}
							height={540}
						/>
						<path
							className="a-reward-2-mobile"
							d="M10,0H404a10,10,0,0,1,10,10V376a0,0,0,0,1,0,0H0a0,0,0,0,1,0,0V10A10,10,0,0,1,10,0Z"
							transform="translate(8 480)"
						/>
						<g
							className="p-reward-2-mobile"
							transform="matrix(1, 0, 0, 1, -1, -6)">
							<rect
								className="e-reward-2-mobile"
								width={413}
								height={38}
								transform="translate(9 6)"
							/>
						</g>
						<text
							className="f-reward-2-mobile"
							transform="translate(215 530)">
							<tspan x={-66.168} y={0}>
								{t('Ortopedia')}
							</tspan>
						</text>
						<text
							className="g-reward-2-mobile"
							transform="translate(44 578)">
							<tspan x={0} y={13}>
								{t('Nuestro modelo integral de servicio de ')}
							</tspan>
							<tspan x={0} y={31}>
								{t(
									'ortopedia ofrece disponibilidad 24/7 los 365'
								)}
							</tspan>
							<tspan x={0} y={49}>
								{t('días del año, con un servicio que ofrece ')}
							</tspan>
							<tspan x={0} y={67}>
								{t(
									'acompañamiento en el quirófano y servicio '
								)}
							</tspan>
							<tspan x={0} y={85}>
								{t('posventa. ')}
							</tspan>
							<tspan x={0} y={103} />
							<tspan x={0} y={121}>
								{t(
									'Contamos con una red logística de ortopedia '
								)}
							</tspan>
							<tspan x={0} y={139}>
								{t('para atención de cirugías en ciudades ')}
							</tspan>
							<tspan x={0} y={157} xmlSpace="preserve">
								{t('principales e intermedias de Colombia y')}
							</tspan>
							<tspan x={0} y={175}>
								{t('Costa Rica. ')}
							</tspan>
						</text>
						<g
							className="h-reward-2-mobile"
							transform="translate(192 836.024) rotate(-90)"
							onClick={() => setView(0)}>
							<circle
								className="i-reward-2-mobile"
								cx={22}
								cy={22}
								r={22}
								transform="translate(0.024 0)"
							/>
							<path
								className="j-reward-2-mobile"
								d="M0,0V17.12l14.824-8.56L7.743,4.471Z"
								transform="translate(26.684 30.56) rotate(180)"
							/>
						</g>
						<g transform="translate(8)">
							<g
								className="k-reward-2-mobile"
								transform="translate(0 440)">
								<g transform="translate(423.485 0) rotate(90)">
									<g className="l-reward-2-mobile">
										<path
											className="m-reward-2-mobile"
											d="M.356,0,0,.155,27.207,68.224A39.683,39.683,0,0,0,41.385,86.177a37.253,37.253,0,0,0,21.346,6.739H184.324v-.4H62.731C47.3,92.513,33.5,82.918,27.564,68.07Z"
											transform="translate(317.952 3)"
										/>
										<path
											className="n-reward-2-mobile"
											d="M251.812,233.331l-36.775-92.023c-5.935-14.848-19.739-24.443-35.167-24.443H161.083v0H72.3a37.258,37.258,0,0,1-21.346-6.739A39.682,39.682,0,0,1,36.775,92.177L0,.154.356,0,37.131,92.022c5.935,14.849,19.739,24.443,35.167,24.443H91.085v0h88.784a37.254,37.254,0,0,1,21.346,6.739,39.682,39.682,0,0,1,14.177,17.952l36.775,92.022Z"
											transform="translate(167.061 -80.208)"
										/>
										<path
											className="m-reward-2-mobile"
											d="M254.919,235.375,217.1,143.212c-6.1-14.871-20.046-24.587-35.518-24.752l-18.84-.2v0L73.7,117.315a38.173,38.173,0,0,1-21.476-6.948,40.8,40.8,0,0,1-14.4-18.054L0,.15.355,0,38.178,92.162c6.1,14.872,20.046,24.587,35.518,24.752l18.84.2v0l89.038.948a38.169,38.169,0,0,1,21.476,6.948,40.8,40.8,0,0,1,14.4,18.054l37.823,92.162Z"
											transform="matrix(-0.966, -0.259, 0.259, -0.966, 125.095, 478.233)"
										/>
									</g>
								</g>
							</g>
						</g>
						<text
							className="o-reward-2-mobile"
							transform="translate(215 26)">
							<tspan x={-101.322} y={0}>
								{t(' Soluciones en salud')}
							</tspan>
						</text>
						<g
							transform="translate(374.584 13.292)"
							onClick={() => setView(0)}>
							<path
								className="a-reward-2-mobile"
								d="M8.8,10.967,5.708,7.874,2.615,10.967A1.531,1.531,0,1,1,.448,8.8L3.542,5.708.448,2.615A1.532,1.532,0,0,1,2.615.448L5.708,3.542,8.8.448a1.531,1.531,0,1,1,2.165,2.166L7.874,5.708,10.967,8.8A1.531,1.531,0,0,1,8.8,10.967Z"
								transform="translate(0 0)"
							/>
						</g>
					</g>
				</svg>
			)}
		</React.Fragment>
	)
}

export default OrthopedicsMobile