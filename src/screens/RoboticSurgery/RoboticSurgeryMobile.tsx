import React from 'react'
import { useTranslation } from 'react-i18next'

const RoboticSurgeryMobile: React.FC = (): JSX.Element => {
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
							viewBox="250.078 6.962 408.241 841.076">
							<image
								preserveAspectRatio="xMidYMid slice"
								width={1282.5}
								height={855}
								xlinkHref="/images/mobile/products/neuro/robotic.webp"
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
								{t('Soluciones en salud ')}
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
						<g transform="translate(0 -200)">
							<text
								className="d-reward-2-mobile"
								transform="translate(207 360)">
								<tspan x={-111.312} y={0}>
									{t('CIRUGÍA ROBÓTICA')}
								</tspan>
							</text>
							<text
								className="e-reward-2-mobile"
								transform="translate(35 396)">
								<tspan x={0} y={13}>
									{t(
										'Una extensión natural de los ojos, a través de '
									)}
								</tspan>
								<tspan x={0} y={31}>
									{t(
										'una visión en 3D y magnificación hasta 10 veces. '
									)}
								</tspan>
								<tspan x={0} y={49}>
									{t(
										'Movimientos intuitivos con mayor rango de '
									)}
								</tspan>
								<tspan x={0} y={67}>
									{t(
										'movimiento que exceden las capacidades de la '
									)}
								</tspan>
								<tspan x={0} y={85}>
									{t('mano humana. ')}
								</tspan>
								<tspan x={0} y={103} />
								<tspan x={0} y={121}>
									{t(
										'Somos el comercializador del sistema quirúrgico '
									)}
								</tspan>
								<tspan x={0} y={139}>
									{t(
										'da Vinci, con una experiencia de más de 3.000 '
									)}
								</tspan>
								<tspan x={0} y={157}>
									{t(
										'cirugías en nuestro país, una sofisticada '
									)}
								</tspan>
								<tspan x={0} y={175}>
									{t(
										'plataforma robótica que permite potenciar las '
									)}
								</tspan>
								<tspan x={0} y={193}>
									{t(
										'capacidades del cirujano y ofrecer una opción '
									)}
								</tspan>
								<tspan x={0} y={211}>
									{t(
										'mínimamente invasiva en procedimientos de '
									)}
								</tspan>
								<tspan x={0} y={229} xmlSpace="preserve">
									{t('cirugía compleja.  ')}
								</tspan>
								<tspan x={0} y={247} />
								<tspan x={0} y={265}>
									{t(
										'El sistema da Vinci da tratamiento a cuatro de '
									)}
								</tspan>
								<tspan x={0} y={283}>
									{t(
										'los cinco tipos de cáncer más frecuente en '
									)}
								</tspan>
								<tspan x={0} y={301}>
									{t(
										'Colombia: cáncer de próstata, cáncer de '
									)}
								</tspan>
								<tspan x={0} y={319}>
									{t(
										'estómago, cáncer de pulmón, cáncer colorrectal '
									)}
								</tspan>
								<tspan x={0} y={337}>
									{t('y muchas más patologías.')}
								</tspan>
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
									className="g-reward-2-mobile"
									transform="translate(55.5 28.584)">
									<tspan x={0} y={0}>
										{t('Conoce Más')}
									</tspan>
								</text>
							</g>
						</g>
					</g>
				</svg>
			) : (
				<svg viewBox="0 0 414 855">
					<defs>
						<style>
							{
								'.a-reward-2-mobile,.e-reward-2-mobile,.i-reward-2-mobile,.m-reward-2-mobile{fill:#fff;}.b-reward-2-mobile{fill:url(#a-reward-2-mobile);}.c-reward-2-mobile{mix-blend-mode:multiply;isolation:isolate;fill:url(#b-reward-2-mobile);}.d-reward-2-mobile{fill:rgba(67,67,67,0.09);}.e-reward-2-mobile{font-size:24px;}.e-reward-2-mobile,.m-reward-2-mobile{font-family:Kiona-Bold;}.e-reward-2-mobile,.j-reward-2-mobile,.k-reward-2-mobile,.m-reward-2-mobile{font-weight:700;}.f-reward-2-mobile,.h-reward-2-mobile,.j-reward-2-mobile,.p-reward-2-mobile{fill:#001f5f;}.f-reward-2-mobile{font-size:14px;font-family:Silka-Regular, Silka;}.g-reward-2-mobile{opacity:0.7;}.i-reward-2-mobile{opacity:0.4;}.j-reward-2-mobile,.k-reward-2-mobile{font-size:16px;font-family:Silka-Bold, Silka;}.k-reward-2-mobile,.l-reward-2-mobile{fill:#e40032;}.m-reward-2-mobile{font-size:18px;}.n-reward-2-mobile{clip-path:url(#e-reward-2-mobile);}.o-reward-2-mobile{fill:#e7002a;stroke:#e7002a;}.p-reward-2-mobile{stroke:#001f5f;}.q-reward-2-mobile{filter:url(#c-reward-2-mobile);}'
							}
						</style>
						<pattern
							id="a-reward-2-mobile"
							width={1}
							height={1}
							viewBox="137.018 0 1009.965 2088.237">
							<image
								preserveAspectRatio="xMidYMid slice"
								width={1284}
								height={856}
								xlinkHref="/images/mobile/products/neuro/robotic.webp"
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
							d="M10,0H404a10,10,0,0,1,10,10V541a0,0,0,0,1,0,0H0a0,0,0,0,1,0,0V10A10,10,0,0,1,10,0Z"
							transform="translate(0 315)"
						/>
						<g
							className="q-reward-2-mobile"
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
							transform="translate(207 294)">
							<tspan x={-111.312} y={0}>
								{t('CIRUGÍA ROBÓTICA')}
							</tspan>
						</text>
						<text
							className="f-reward-2-mobile"
							transform="translate(75 395)">
							<tspan x={0} y={13}>
								{t('Menor tiempo de hospitalización. ')}
							</tspan>
							<tspan x={0} y={31}>
								{t('Recuperación con menos dolor y riesgo de')}
							</tspan>
							<tspan x={0} y={49}>
								{t('infección. ')}
							</tspan>
							<tspan x={0} y={67}>
								{t('Cicatrices más pequeñas. ')}
							</tspan>
							<tspan x={0} y={85}>
								{t('Rápido retorno a las actividades diarias.')}
							</tspan>
							<tspan x={0} y={103}>
								{t('Mejor calidad de vida. ')}
							</tspan>
						</text>
						<text
							className="f-reward-2-mobile"
							transform="translate(75 541)">
							<tspan x={0} y={13}>
								{t('Movimientos intuitivos. Rotación de 540°,')}
							</tspan>
							<tspan x={0} y={31}>
								{t('articulación de 180°.')}
							</tspan>
							<tspan x={0} y={49}>
								{t('Visión 3D y magnificación 10X.')}
							</tspan>
							<tspan x={0} y={67}>
								{t('Mayor visión, control y ergonomía. ')}
							</tspan>
							<tspan x={0} y={85}>
								{t('Mayor precisión y seguridad.')}
							</tspan>
						</text>
						<text
							className="f-reward-2-mobile"
							transform="translate(75 669)">
							<tspan x={0} y={13}>
								{t('Innovación y diferenciación. ')}
							</tspan>
							<tspan x={0} y={31}>
								{t('Investigación y academia. ')}
							</tspan>
							<tspan x={0} y={49}>
								{t('Tecnología de vanguardia. ')}
							</tspan>
							<tspan x={0} y={67}>
								{t(
									'Atracción de nuevos pacientes y cirujanos. '
								)}
							</tspan>
							<tspan x={0} y={85}>
								{t('Mejores resultados clínicos. ')}
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
						<text
							className="j-reward-2-mobile"
							transform="translate(207 350)">
							<tspan x={-131.808} y={0}>
								{t('Beneficios de la cirugía robótica:')}
							</tspan>
						</text>
						<text
							className="k-reward-2-mobile"
							transform="translate(207 385)">
							<tspan x={-34.696} y={0}>
								{t('Paciente')}
							</tspan>
						</text>
						<text
							className="k-reward-2-mobile"
							transform="translate(207 529)">
							<tspan x={-34.376} y={0}>
								{t('Cirujano')}
							</tspan>
						</text>
						<text
							className="k-reward-2-mobile"
							transform="translate(207 661)">
							<tspan x={-42.536} y={0}>
								{t('Institución')}
							</tspan>
						</text>
						<circle
							className="l-reward-2-mobile"
							cx={3}
							cy={3}
							r={3}
							transform="translate(62 400)"
						/>
						<circle
							className="l-reward-2-mobile"
							cx={3}
							cy={3}
							r={3}
							transform="translate(62 546)"
						/>
						<circle
							className="l-reward-2-mobile"
							cx={3}
							cy={3}
							r={3}
							transform="translate(62 674)"
						/>
						<circle
							className="l-reward-2-mobile"
							cx={3}
							cy={3}
							r={3}
							transform="translate(62 692)"
						/>
						<circle
							className="l-reward-2-mobile"
							cx={3}
							cy={3}
							r={3}
							transform="translate(62 710)"
						/>
						<circle
							className="l-reward-2-mobile"
							cx={3}
							cy={3}
							r={3}
							transform="translate(62 728)"
						/>
						<circle
							className="l-reward-2-mobile"
							cx={3}
							cy={3}
							r={3}
							transform="translate(62 746)"
						/>
						<circle
							className="l-reward-2-mobile"
							cx={3}
							cy={3}
							r={3}
							transform="translate(62 418)"
						/>
						<text
							className="m-reward-2-mobile"
							transform="translate(207 26)">
							<tspan x={-101.322} y={0}>
								{t('Soluciones en salud ')}
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
							className="l-reward-2-mobile"
							cx={3}
							cy={3}
							r={3}
							transform="translate(62 582)"
						/>
						<circle
							className="l-reward-2-mobile"
							cx={3}
							cy={3}
							r={3}
							transform="translate(62 454)"
						/>
						<circle
							className="l-reward-2-mobile"
							cx={3}
							cy={3}
							r={3}
							transform="translate(62 600)"
						/>
						<circle
							className="l-reward-2-mobile"
							cx={3}
							cy={3}
							r={3}
							transform="translate(62 472)"
						/>
						<circle
							className="l-reward-2-mobile"
							cx={3}
							cy={3}
							r={3}
							transform="translate(62 618)"
						/>
						<circle
							className="l-reward-2-mobile"
							cx={3}
							cy={3}
							r={3}
							transform="translate(62 490)"
						/>
						<g transform="translate(0 605)">
							<g
								className="n-reward-2-mobile"
								transform="translate(0 21)">
								<g transform="translate(423.485 1.267) rotate(90)">
									<path
										className="o-reward-2-mobile"
										d="M.339,213.5l35.086-84.2A36.255,36.255,0,0,1,68.977,106.93H86.9v0h84.706A36.717,36.717,0,0,0,205.5,84.341L240.583.141,240.244,0,205.158,84.2a36.254,36.254,0,0,1-33.552,22.365H153.683v0H68.977a36.717,36.717,0,0,0-33.891,22.592L0,213.354Z"
										transform="translate(304.048 -11.807) rotate(90)"
									/>
									<path
										className="p-reward-2-mobile"
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

export default RoboticSurgeryMobile
