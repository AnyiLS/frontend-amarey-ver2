import React from 'react'
import { useTranslation } from 'react-i18next'

const WoundCareMobile: React.FC = (): JSX.Element => {
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
								'.a-reward-2-mobile,.d-reward-2-mobile,.e-reward-2-mobile,.g-reward-2-mobile,.h-reward-2-mobile{fill:#fff;}.b-reward-2-mobile{fill:url(#a-reward-2-mobile);}.c-reward-2-mobile{opacity:0.85;mix-blend-mode:multiply;isolation:isolate;fill:url(#b-reward-2-mobile);}.d-reward-2-mobile{font-size:24px;}.d-reward-2-mobile,.g-reward-2-mobile{font-family:Kiona-Bold;font-weight:700;}.e-reward-2-mobile{font-size:14px;font-family:Silka-Regular, Silka;}.f-reward-2-mobile{fill:rgba(67,67,67,0.09);}.g-reward-2-mobile{font-size:18px;}.h-reward-2-mobile{opacity:0.4;}.i-reward-2-mobile{filter:url(#e-reward-2-mobile);}.j-reward-2-mobile{filter:url(#c-reward-2-mobile);}'
							}
						</style>
						<pattern
							id="a-reward-2-mobile"
							width={1}
							height={1}
							viewBox="500.981 0 414 856">
							<image
								preserveAspectRatio="xMidYMid slice"
								width={1284.153}
								height={856}
								xlinkHref="/images/mobile/products/neuro/cuidado.webp"
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
						<g transform='translate(0 -200)'>
							<text
								className="d-reward-2-mobile"
								transform="translate(207 598)">
								<tspan x={-119.352} y={0}>
									{t('CUIDADO AVANZADO')}
								</tspan>
								<tspan x={-67.392} y={26}>
									{t('DE HERIDAS ')}
								</tspan>
							</text>
							<text
								className="e-reward-2-mobile"
								transform="translate(36 645)">
								<tspan x={0} y={13}>
									{t(
										'Ofrecemos una línea de apósitos avanzados y '
									)}
								</tspan>
								<tspan x={0} y={31}>
									{t(
										'terapia de presión negativa para el tratamiento '
									)}
								</tspan>
								<tspan x={0} y={49}>
									{t(
										'integral de heridas agudas, crónicas y '
									)}
								</tspan>
								<tspan x={0} y={67}>
									{t(
										'complejas, como las ocasionadas por pie '
									)}
								</tspan>
								<tspan x={0} y={85}>
									{t(
										'diabético, lesiones por presión y lesiones de '
									)}
								</tspan>
								<tspan x={0} y={103}>
									{t('origen vascular.')}
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
								transform="translate(55.5 28.584)">
								<tspan x={0} y={0}>
									{t('Conoce Más')}
								</tspan>
							</text>
						</g>
					</g>
				</svg>
			) : (
				<svg
					viewBox="7 0 414 857"
					width="100%"
					style={{ height: '100%' }}
					preserveAspectRatio="none">
					<defs>
						<style>
							{
								'.a-reward-2-mobile,.j-reward-2-mobile,.o-reward-2-mobile{fill:#fff;}.b-reward-2-mobile{fill:none;}.c-reward-2-mobile{fill:url(#a-reward-2-mobile);}.d-reward-2-mobile{opacity:0.6;mix-blend-mode:multiply;isolation:isolate;fill:url(#b-reward-2-mobile);}.e-reward-2-mobile{fill:rgba(67,67,67,0.09);}.f-reward-2-mobile,.g-reward-2-mobile,.i-reward-2-mobile,.m-reward-2-mobile{fill:#001f5f;}.f-reward-2-mobile{font-size:24px;}.f-reward-2-mobile,.o-reward-2-mobile{font-family:Kiona-Bold;font-weight:700;}.g-reward-2-mobile{font-size:14px;font-family:Silka-Regular, Silka;}.h-reward-2-mobile{opacity:0.7;}.j-reward-2-mobile{opacity:0.4;}.k-reward-2-mobile{clip-path:url(#e-reward-2-mobile);}.l-reward-2-mobile{clip-path:url(#f-reward-2-mobile);}.m-reward-2-mobile{stroke:#001f5f;}.n-reward-2-mobile{fill:#e7002a;stroke:#e7002a;}.o-reward-2-mobile{font-size:18px;}.p-reward-2-mobile{fill:#e40032;}.q-reward-2-mobile{filter:url(#c-reward-2-mobile);}'
							}
						</style>
						<pattern
							id="a-reward-2-mobile"
							width={1}
							height={1}
							viewBox="228.076 0 828 1712">
							<image
								preserveAspectRatio="xMidYMid slice"
								width={1284.153}
								height={856}
								xlinkHref="/images/mobile/products/neuro/cuidado.webp"
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
								height={445}
								transform="translate(0 -69)"
							/>
						</clipPath>
						<clipPath id="f-reward-2-mobile">
							<rect
								className="b-reward-2-mobile"
								width={455.962}
								height={423.485}
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
							d="M10,0H404a10,10,0,0,1,10,10V445a0,0,0,0,1,0,0H0a0,0,0,0,1,0,0V10A10,10,0,0,1,10,0Z"
							transform="translate(8 411)"
						/>
						<g
							className="q-reward-2-mobile"
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
							transform="translate(215 477)">
							<tspan x={-119.352} y={0}>
								{t('CUIDADO AVANZADO')}
							</tspan>
							<tspan x={-67.392} y={26}>
								{t('DE HERIDAS ')}
							</tspan>
						</text>
						<text
							className="g-reward-2-mobile"
							transform="translate(44 695)">
							<tspan x={0} y={13}>
								{t('Nuestro compromiso es asesorar a los ')}
							</tspan>
							<tspan x={0} y={31}>
								{t(
									'profesionales de la salud en el uso, manejo y '
								)}
							</tspan>
							<tspan x={0} y={49}>
								{t(
									'aprovechamiento correcto de dichas tecnologías. '
								)}
							</tspan>
						</text>
						<text
							className="g-reward-2-mobile"
							transform="translate(89 587)">
							<tspan x={0} y={13}>
								{t('Soluciones simples y efectivas ')}
							</tspan>
							<tspan x={0} y={31} xmlSpace="preserve">
								{t(
									'Aceleración del proceso de cicatrización  '
								)}
							</tspan>
							<tspan x={0} y={49}>
								{t('Estimulación de la formación de')}
							</tspan>
							<tspan x={0} y={67} xmlSpace="preserve">
								{t('nuevo tejido')}
							</tspan>
							<tspan x={0} y={85}>
								{t('Prevención de infecciones ')}
							</tspan>
						</text>
						<text
							className="g-reward-2-mobile"
							transform="translate(44 529)">
							<tspan x={0} y={13}>
								{t(
									'Ayudando al paciente a mejorar su calidad de '
								)}
							</tspan>
							<tspan x={0} y={31}>
								{t('vida, mediante:')}
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
								transform="translate(0 480)">
								<g transform="translate(414 -76.733) rotate(90)">
									<g className="l-reward-2-mobile">
										<path
											className="m-reward-2-mobile"
											d="M.356,92.915,0,92.76,27.207,24.691A39.683,39.683,0,0,1,41.385,6.739,37.253,37.253,0,0,1,62.731,0H184.324V.4H62.731C47.3.4,33.5,10,27.564,24.845Z"
											transform="translate(354.685 327.569)"
										/>
										<path
											className="n-reward-2-mobile"
											d="M251.812,0,215.036,92.023c-5.935,14.848-19.739,24.443-35.167,24.443H161.083v0H72.3A37.258,37.258,0,0,0,50.952,123.2a39.682,39.682,0,0,0-14.177,17.952L0,233.176l.356.154,36.775-92.022C43.066,126.46,56.87,116.865,72.3,116.865H91.085v0h88.784a37.254,37.254,0,0,0,21.346-6.739,39.682,39.682,0,0,0,14.177-17.952L252.167.155Z"
											transform="translate(203.794 278.362)"
										/>
										<path
											className="m-reward-2-mobile"
											d="M172.894,0,147.242,92.163c-4.14,14.871-13.6,24.587-24.09,24.752l-12.778.2v0l-60.388.948c-5.185.081-10.221,2.484-14.566,6.948s-7.722,10.707-9.767,18.054L0,235.225l.241.15,25.652-92.162c4.14-14.872,13.6-24.587,24.09-24.752l12.778-.2v0l60.388-.948c5.185-.081,10.221-2.484,14.566-6.948s7.722-10.707,9.767-18.054L173.135.151Z"
											transform="matrix(-0.966, 0.259, -0.259, -0.966, 168.407, 144.866)"
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
						<circle
							className="p-reward-2-mobile"
							cx={4}
							cy={4}
							r={4}
							transform="translate(77 663)"
						/>
						<circle
							className="p-reward-2-mobile"
							cx={4}
							cy={4}
							r={4}
							transform="translate(77 627)"
						/>
						<circle
							className="p-reward-2-mobile"
							cx={4}
							cy={4}
							r={4}
							transform="translate(77 609)"
						/>
						<circle
							className="p-reward-2-mobile"
							cx={4}
							cy={4}
							r={4}
							transform="translate(77 591)"
						/>
					</g>
				</svg>
			)}
		</React.Fragment>
	)
}

export default WoundCareMobile
