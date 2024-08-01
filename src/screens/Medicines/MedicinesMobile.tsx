import { useLanguage } from 'context/language'
import useGeneral from 'hooks/general.hook'
import React from 'react'
import { useTranslation } from 'react-i18next'

const MedicinesMobile: React.FC = (): JSX.Element => {
	const { width } = useGeneral()
	/** States */
	const [view, setView] = React.useState<number>(0)
	const [height, setHeight] = React.useState<number>(0)

	const { t } = useTranslation()
	const { selectedLanguage } = useLanguage()

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
								'.a-reward-2-mobile{fill:url(#a-reward-2-mobile);}.b-reward-2-mobile{mix-blend-mode:multiply;isolation:isolate;fill:url(#b-reward-2-mobile);}.c-reward-2-mobile,.d-reward-2-mobile,.f-reward-2-mobile,.g-reward-2-mobile,.h-reward-2-mobile{fill:#fff;}.c-reward-2-mobile{font-size:24px;}.c-reward-2-mobile,.f-reward-2-mobile{font-family:Kiona-Bold;font-weight:700;}.d-reward-2-mobile{font-size:14px;font-family:Silka-Regular, Silka;}.e-reward-2-mobile{fill:rgba(67,67,67,0.09);}.f-reward-2-mobile{font-size:18px;}.h-reward-2-mobile{opacity:0.4;}.i-reward-2-mobile{filter:url(#e-reward-2-mobile);}.j-reward-2-mobile{filter:url(#c-reward-2-mobile);}'
							}
						</style>
						<pattern
							id="a-reward-2-mobile"
							width={1}
							height={1}
							viewBox="678.943 10.049 404.279 835.901">
							<image
								preserveAspectRatio="xMidYMid slice"
								width={1284}
								height={856}
								xlinkHref="/images/mobile/products/neuro/neuro-2.webp"
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
							className="a-reward-2-mobile"
							width={414}
							height={856}
						/>
						<rect
							className="b-reward-2-mobile"
							width={414}
							height={856}
						/>

						<g
							className="j-reward-2-mobile"
							transform="matrix(1, 0, 0, 1, -9, -6)">
							<rect
								className="e-reward-2-mobile"
								width={413}
								height={38}
								transform="translate(9 6)"
							/>
						</g>
						<text
							className="f-reward-2-mobile"
							transform="translate(207 26)">
							<tspan x={-101.322} y={0}>
								{t('Soluciones en salud ')}
							</tspan>
						</text>
						<g
							transform="translate(366.585 13.292)"
							onClick={() =>
								(window.location.href = '/productos')
							}>
							<path
								className="g-reward-2-mobile"
								d="M8.8,10.967,5.708,7.874,2.615,10.967A1.531,1.531,0,1,1,.448,8.8L3.542,5.708.448,2.615A1.532,1.532,0,0,1,2.615.448L5.708,3.542,8.8.448a1.531,1.531,0,1,1,2.165,2.166L7.874,5.708,10.967,8.8A1.531,1.531,0,0,1,8.8,10.967Z"
								transform="translate(0 0)"
							/>
						</g>
						<g transform='translate(0 -200)'>
							<text
								className="c-reward-2-mobile"
								transform={
									selectedLanguage === 'es'
										? 'translate(207 623)'
										: 'translate(207 580)'
								}>
								<tspan x={-97.428} y={0}>
									{t('MEDICAMENTOS ')}
								</tspan>
							</text>
							<text
								className="d-reward-2-mobile"
								transform={
									selectedLanguage === 'es'
										? 'translate(36 653)'
										: 'translate(36 613)'
								}>
								<tspan x={0} y={13}>
									{t(
										'Con medicamentos de la más alta tecnología'
									)}
								</tspan>
								<tspan x={0} y={31}>
									{t(
										'para el cuidado de la salud de los pacientes, ya '
									)}
								</tspan>
								<tspan x={0} y={49}>
									{t(
										'sea adultos, niños o neonatos, ofrecemos mayor '
									)}
								</tspan>
								<tspan x={0} y={67}>
									{t(
										'eficacia y tolerabilidad al paciente en '
									)}
								</tspan>
								<tspan x={0} y={85}>
									{t('productos.')}
								</tspan>
								{selectedLanguage === 'en' && (
									<tspan x={0} y={103}>
										{t('productos-2')}
									</tspan>
								)}
							</text>
							<g
								transform="translate(91.999 771.493)"
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
									className="f-reward-2-mobile"
									transform="translate(55.5 28.584)"
									onClick={() => setView(1)}>
									<tspan x={0} y={0}>
										{t('Conoce Más')}
									</tspan>
								</text>
							</g>
						</g>
					</g>
				</svg>
			) : (
				<svg viewBox="8 0 414 855">
					<defs>
						<style>
							{
								'.a-reward-2-mobile,.k-reward-2-mobile,.r-reward-2-mobile{fill:#fff;}.b-reward-2-mobile{fill:none;}.c-reward-2-mobile{fill:url(#a-reward-2-mobile);}.d-reward-2-mobile{mix-blend-mode:multiply;isolation:isolate;fill:url(#b-reward-2-mobile);}.e-reward-2-mobile{fill:rgba(67,67,67,0.09);}.f-reward-2-mobile,.g-reward-2-mobile,.j-reward-2-mobile,.l-reward-2-mobile,.p-reward-2-mobile{fill:#001f5f;}.f-reward-2-mobile{font-size:24px;}.f-reward-2-mobile,.r-reward-2-mobile{font-family:Kiona-Bold;font-weight:700;}.g-reward-2-mobile{font-size:14px;}.g-reward-2-mobile,.l-reward-2-mobile{font-family:Silka-Regular, Silka;}.h-reward-2-mobile{font-size:13px;}.i-reward-2-mobile{opacity:0.7;}.k-reward-2-mobile{opacity:0.4;}.l-reward-2-mobile{font-size:16px;}.m-reward-2-mobile{fill:#e40032;}.n-reward-2-mobile{clip-path:url(#e-reward-2-mobile);}.o-reward-2-mobile{clip-path:url(#f-reward-2-mobile);}.p-reward-2-mobile{stroke:#001f5f;}.q-reward-2-mobile{fill:#e7002a;stroke:#e7002a;}.r-reward-2-mobile{font-size:18px;}.s-reward-2-mobile{filter:url(#c-reward-2-mobile);}'
							}
						</style>
						<pattern
							id="a-reward-2-mobile"
							width={1}
							height={1}
							viewBox="361.391 0 727.946 1505.125">
							<image
								preserveAspectRatio="xMidYMid slice"
								width={1284}
								height={856}
								xlinkHref="/images/mobile/products/neuro/neuro-2.webp"
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
								height={454}
								transform="translate(0 -38)"
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
							d="M10,0H404a10,10,0,0,1,10,10V453a0,0,0,0,1,0,0H0a0,0,0,0,1,0,0V10A10,10,0,0,1,10,0Z"
							transform="translate(8 403)"
						/>
						<g
							className="s-reward-2-mobile"
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
							transform="translate(215 464)">
							<tspan x={-97.428} y={0}>
								{t('MEDICAMENTOS  ')}
							</tspan>
						</text>
						<text
							className="g-reward-2-mobile"
							transform="translate(60 543)">
							<tspan x={0} y={13}>
								{t('Trasplantes ')}
							</tspan>
							<tspan x={0} y={31} />
							<tspan x={0} y={49}>
								{t('Hemoderivados ')}
							</tspan>
							<tspan x={0} y={67} />
							<tspan x={0} y={85} xmlSpace="preserve">
								{t('Antibióticos  ')}
							</tspan>
							<tspan x={0} y={103} />
							<tspan x={0} y={121}>
								{t('Reumatología ')}
							</tspan>
							<tspan x={0} y={139} />
							<tspan x={0} y={157} xmlSpace="preserve">
								{t('Respiratoria  ')}
							</tspan>
							<tspan x={0} y={175} />
							<tspan x={0} y={193}>
								{t('UCI Neonatología')}
							</tspan>
							<tspan x={0} y={211} />
						</text>
						<text
							className="g-reward-2-mobile"
							transform="translate(233 543)">
							<tspan x={0} y={13} xmlSpace="preserve">
								{t('UCI Pediátrica  ')}
							</tspan>
							<tspan x={0} y={31} />
							<tspan x={0} y={49}>
								{t('UCI Adultos ')}
							</tspan>
							<tspan x={0} y={67} />
							<tspan x={0} y={85}>
								{t('Dolor ')}
							</tspan>
							<tspan x={0} y={103} />
							<tspan x={0} y={121}>
								{t('Genética y genómica ')}
							</tspan>
							<tspan x={0} y={139} />
							<tspan className="h-reward-2-mobile">
								<tspan x={0} y={157}>
									{t('Neurointervencionismo ')}
								</tspan>
								<tspan x={0} y={175} />
							</tspan>
						</text>
						<g
							className="i-reward-2-mobile"
							transform="translate(192 836.024) rotate(-90)"
							onClick={() => setView(0)}>
							<circle
								className="j-reward-2-mobile"
								cx={22}
								cy={22}
								r={22}
								transform="translate(0.024 0)"
							/>
							<path
								className="k-reward-2-mobile"
								d="M0,0V17.12l14.824-8.56L7.743,4.471Z"
								transform="translate(26.684 30.56) rotate(180)"
							/>
						</g>
						<text
							className="l-reward-2-mobile"
							transform="translate(215 484)">
							<tspan x={-82.088} y={0}>
								{t('especializados para:')}
							</tspan>
						</text>
						<circle
							className="m-reward-2-mobile"
							cx={4}
							cy={4}
							r={4}
							transform="translate(220 548)"
						/>
						<circle
							className="m-reward-2-mobile"
							cx={4}
							cy={4}
							r={4}
							transform="translate(45 548)"
						/>
						<circle
							className="m-reward-2-mobile"
							cx={4}
							cy={4}
							r={4}
							transform="translate(220 584)"
						/>
						<circle
							className="m-reward-2-mobile"
							cx={4}
							cy={4}
							r={4}
							transform="translate(45 584)"
						/>
						<circle
							className="m-reward-2-mobile"
							cx={4}
							cy={4}
							r={4}
							transform="translate(220 620)"
						/>
						<circle
							className="m-reward-2-mobile"
							cx={4}
							cy={4}
							r={4}
							transform="translate(45 620)"
						/>
						<circle
							className="m-reward-2-mobile"
							cx={4}
							cy={4}
							r={4}
							transform="translate(220 656)"
						/>
						<circle
							className="m-reward-2-mobile"
							cx={4}
							cy={4}
							r={4}
							transform="translate(45 656)"
						/>
						<circle
							className="m-reward-2-mobile"
							cx={4}
							cy={4}
							r={4}
							transform="translate(45 691)"
						/>
						<circle
							className="m-reward-2-mobile"
							cx={4}
							cy={4}
							r={4}
							transform="translate(45 727)"
						/>
						<circle
							className="m-reward-2-mobile"
							cx={4}
							cy={4}
							r={4}
							transform="translate(220 692)"
						/>
						<g transform="translate(8)">
							<g
								className="n-reward-2-mobile"
								transform="translate(0 440)">
								<g transform="translate(423.485 0) rotate(90)">
									<g className="o-reward-2-mobile">
										<path
											className="p-reward-2-mobile"
											d="M.356,0,0,.155,27.207,68.224A39.683,39.683,0,0,0,41.385,86.177a37.253,37.253,0,0,0,21.346,6.739H184.324v-.4H62.731C47.3,92.513,33.5,82.918,27.564,68.07Z"
											transform="translate(317.952 3)"
										/>
										<path
											className="q-reward-2-mobile"
											d="M251.812,233.331l-36.775-92.023c-5.935-14.848-19.739-24.443-35.167-24.443H161.083v0H72.3a37.258,37.258,0,0,1-21.346-6.739A39.682,39.682,0,0,1,36.775,92.177L0,.154.356,0,37.131,92.022c5.935,14.849,19.739,24.443,35.167,24.443H91.085v0h88.784a37.254,37.254,0,0,1,21.346,6.739,39.682,39.682,0,0,1,14.177,17.952l36.775,92.022Z"
											transform="translate(167.061 -80.208)"
										/>
										<path
											className="p-reward-2-mobile"
											d="M254.919,235.375,217.1,143.212c-6.1-14.871-20.046-24.587-35.518-24.752l-18.84-.2v0L73.7,117.315a38.173,38.173,0,0,1-21.476-6.948,40.8,40.8,0,0,1-14.4-18.054L0,.15.355,0,38.178,92.162c6.1,14.872,20.046,24.587,35.518,24.752l18.84.2v0l89.038.948a38.169,38.169,0,0,1,21.476,6.948,40.8,40.8,0,0,1,14.4,18.054l37.823,92.162Z"
											transform="matrix(-0.966, -0.259, 0.259, -0.966, 56.095, 476.233)"
										/>
									</g>
								</g>
							</g>
						</g>
						<text
							className="r-reward-2-mobile"
							transform="translate(215 26)">
							<tspan x={-101.322} y={0}>
								{t('Soluciones en salud ')}
							</tspan>
						</text>
						<g
							transform="translate(374.584 13.292)"
							onClick={() => setView(0)}>
							<path
								onClick={() => setView(0)}
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

export default MedicinesMobile
