import React from 'react'
import { useTranslation } from 'react-i18next'

const MedicalDevicesMOMobile: React.FC = (): JSX.Element => {
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
					viewBox="2 0 414 700"
					width="100%"
					style={{ height: '100%' }}
					preserveAspectRatio="none">
					<defs>
						<style>
							{
								'.a-reward-2-mobile,.d-reward-2-mobile,.e-reward-2-mobile,.g-reward-2-mobile,.h-reward-2-mobile,.j-reward-2-mobile,.m-reward-2-mobile{fill:#fff;}.b-reward-2-mobile{fill:url(#a-reward-2-mobile);}.c-reward-2-mobile{mix-blend-mode:multiply;isolation:isolate;fill:url(#b-reward-2-mobile);}.d-reward-2-mobile{font-size:24px;}.d-reward-2-mobile,.g-reward-2-mobile{font-family:Kiona-Bold;font-weight:700;}.e-reward-2-mobile{font-size:14px;}.e-reward-2-mobile,.j-reward-2-mobile,.m-reward-2-mobile{font-family:Silka-Regular, Silka;}.f-reward-2-mobile{fill:rgba(67,67,67,0.09);}.g-reward-2-mobile{font-size:18px;}.h-reward-2-mobile{opacity:0.4;}.i-reward-2-mobile{fill:#001f5f;}.j-reward-2-mobile,.m-reward-2-mobile{font-size:12px;}.k-reward-2-mobile{clip-path:url(#g-reward-2-mobile);}.l-reward-2-mobile,.m-reward-2-mobile{text-decoration:underline;}.n-reward-2-mobile{filter:url(#e-reward-2-mobile);}.o-reward-2-mobile{filter:url(#c-reward-2-mobile);}'
							}
						</style>
						<pattern
							id="a-reward-2-mobile"
							width={1}
							height={1}
							viewBox="422.499 70.454 406.793 838.092">
							<image
								preserveAspectRatio="xMidYMid slice"
								width={1522.969}
								height={855}
								xlinkHref="/images/mobile/products/neuro/medicos-clinicos.webp"
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
						<clipPath id="g-reward-2-mobile">
							<rect
								className="a-reward-2-mobile"
								width={175}
								height={50}
								transform="translate(0.216 0.189)"
							/>
						</clipPath>
					</defs>
					<g>
						<rect
							className="b-reward-2-mobile"
							width={415}
							height={855}
							transform="translate(1.541)"
						/>
						<rect
							className="c-reward-2-mobile"
							width={415}
							height={855}
							transform="translate(1.541)"
						/>

						<g
							className="o-reward-2-mobile"
							transform="matrix(1, 0, 0, 1, -7.46, -6)">
							<rect
								className="f-reward-2-mobile"
								width={413}
								height={38}
								transform="translate(9 6)"
							/>
						</g>
						<text
							className="g-reward-2-mobile"
							transform="translate(208.541 26)">
							<tspan x={-101.322} y={0}>
								{t(' Soluciones en salud')}
							</tspan>
						</text>
						<g
							transform="translate(368.125 13.292)"
							onClick={() =>
								(window.location.href = '/productos')
							}>
							<path
								className="a-reward-2-mobile"
								onClick={() => setView(0)}
								d="M8.8,10.967,5.708,7.874,2.615,10.967A1.531,1.531,0,1,1,.448,8.8L3.542,5.708.448,2.615A1.532,1.532,0,0,1,2.615.448L5.708,3.542,8.8.448a1.531,1.531,0,1,1,2.165,2.166L7.874,5.708,10.967,8.8A1.531,1.531,0,0,1,8.8,10.967Z"
								transform="translate(0 0)"
							/>
						</g>
						<g transform="translate(0 -200)">
							<text
								className="d-reward-2-mobile"
								transform="translate(208.541 645)">
								<tspan x={-109.536} y={0}>
									{t('EQUIPOS MÉDICOS')}
								</tspan>
							</text>
							<text
								className="e-reward-2-mobile"
								transform="translate(36.541 681)">
								<tspan x={0} y={13}>
									{t(
										'Ofrecemos a los especialistas equipos de la más '
									)}
								</tspan>
								<tspan x={0} y={31}>
									{t(
										'alta tecnología para el servicio y asistencia de '
									)}
								</tspan>
								<tspan x={0} y={49}>
									{t('los pacientes.')}
								</tspan>
							</text>
							<g
								transform="translate(93.539 736.493)"
								onClick={() => setView(1)}>
								<g
									className="n-reward-2-mobile"
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

						<g transform="translate(0 -2990)">
							<path
								className="i-reward-2-mobile"
								d="M0,0H415.541V603H0Z"
								transform="translate(0 3845)"
							/>
							<text
								className="j-reward-2-mobile"
								transform="translate(41 3979)">
								<tspan x={74.978} y={11}>
									{'Carrera 7 # 99-53, pisos 19 y 20 '}
								</tspan>
								<tspan x={167} y={24} />
								<tspan x={35.528} y={37}>
									{
										'Línea de atención al cliente 018000 180066 -'
									}
								</tspan>
								<tspan x={124.028} y={50} xmlSpace="preserve">
									{' (601) 7447300 '}
								</tspan>
								<tspan x={167} y={63} />
								<tspan x={58.856} y={76}>
									{'Reporte de eventos adversos o PQR: '}
								</tspan>
								<tspan x={59.444} y={89}>
									{
										'servicioalcliente@grupoamarey.com-reward-2-mobile '
									}
								</tspan>
								<tspan x={167} y={102} />
								<tspan x={40.91} y={115}>
									{
										'Línea ética: linea.etica-reward-2-mobile@grupoamarey.com-reward-2-mobile '
									}
								</tspan>
							</text>
							<path
								className="a-reward-2-mobile"
								d="M23.372,55.682l.724-4.72H19.567V47.9a2.36,2.36,0,0,1,2.661-2.55h2.06V41.33a25.118,25.118,0,0,0-3.656-.319c-3.73,0-6.168,2.261-6.168,6.353v3.6H10.318v4.72h4.146V67.092a16.515,16.515,0,0,0,5.1,0V55.682Z"
								transform="translate(150.934 4271.925)"
							/>
							<g transform="translate(191.283 4313.196)">
								<g transform="translate(0)">
									<path
										className="a-reward-2-mobile"
										d="M68.445,43.5c3.474,0,3.885.013,5.258.076a7.189,7.189,0,0,1,2.416.448,4.308,4.308,0,0,1,2.469,2.469,7.194,7.194,0,0,1,.448,2.416c.063,1.372.077,1.784.077,5.258s-.014,3.885-.077,5.258a7.189,7.189,0,0,1-.448,2.416,4.308,4.308,0,0,1-2.469,2.469,7.183,7.183,0,0,1-2.416.449c-1.372.063-1.783.076-5.258.076s-3.885-.013-5.258-.076a7.183,7.183,0,0,1-2.416-.449A4.308,4.308,0,0,1,58.3,61.842a7.189,7.189,0,0,1-.448-2.416c-.063-1.372-.077-1.783-.077-5.258s.014-3.885.077-5.258a7.194,7.194,0,0,1,.448-2.416,4.308,4.308,0,0,1,2.469-2.469,7.189,7.189,0,0,1,2.416-.448c1.372-.063,1.784-.076,5.258-.076m0-2.345c-3.534,0-3.977.015-5.364.078a9.532,9.532,0,0,0-3.158.6,6.652,6.652,0,0,0-3.8,3.8,9.533,9.533,0,0,0-.6,3.158c-.063,1.388-.078,1.831-.078,5.364s.015,3.977.078,5.364a9.533,9.533,0,0,0,.6,3.158,6.645,6.645,0,0,0,3.8,3.8,9.553,9.553,0,0,0,3.158.606c1.387.063,1.831.078,5.364.078s3.977-.015,5.364-.078a9.553,9.553,0,0,0,3.158-.606,6.645,6.645,0,0,0,3.8-3.8,9.533,9.533,0,0,0,.6-3.158c.063-1.387.078-1.831.078-5.364s-.015-3.976-.078-5.364a9.533,9.533,0,0,0-.6-3.158,6.652,6.652,0,0,0-3.8-3.8,9.532,9.532,0,0,0-3.158-.6c-1.387-.063-1.831-.078-5.364-.078"
										transform="translate(-55.435 -41.158)"
									/>
									<path
										className="a-reward-2-mobile"
										d="M69.3,48.34a6.681,6.681,0,1,0,6.681,6.681A6.681,6.681,0,0,0,69.3,48.34m0,11.017a4.337,4.337,0,1,1,4.336-4.336A4.337,4.337,0,0,1,69.3,59.357"
										transform="translate(-56.287 -42.01)"
									/>
									<path
										className="a-reward-2-mobile"
										d="M79.426,47.83a1.561,1.561,0,1,1-1.561-1.561,1.561,1.561,0,0,1,1.561,1.561"
										transform="translate(-57.91 -41.764)"
									/>
								</g>
							</g>
							<g transform="translate(233.656 4314.22)">
								<path
									className="a-reward-2-mobile"
									d="M126.534,53.356c.347-.39.634-.786.991-1.123a5.434,5.434,0,0,1,3.908-1.542,9.024,9.024,0,0,1,2.458.3,4.8,4.8,0,0,1,3.411,3.587,15,15,0,0,1,.454,4.111c.005,2.921-.008,5.843,0,8.764,0,.274-.076.346-.345.344q-2.257-.019-4.515,0c-.264,0-.322-.079-.321-.33q.012-4.17,0-8.34a7.508,7.508,0,0,0-.242-2.07,2.327,2.327,0,0,0-2.56-1.814,2.8,2.8,0,0,0-2.94,2.792,10.245,10.245,0,0,0-.079,1.3c0,2.7,0,5.407.007,8.111,0,.27-.067.349-.342.346q-2.274-.02-4.548,0c-.243,0-.314-.063-.313-.309q.009-8.029,0-16.058c0-.264.086-.326.337-.324q2.159.016,4.319,0c.264,0,.333.084.328.334-.015.64-.005,1.28-.005,1.92"
									transform="translate(-112.693 -42.801)"
								/>
								<path
									className="a-reward-2-mobile"
									d="M117.149,59.528c0,2.648,0,5.3.006,7.944,0,.294-.072.383-.376.38-1.5-.017-3.009-.012-4.514,0-.242,0-.314-.059-.314-.308q.011-8.042,0-16.084c0-.222.054-.3.289-.3,1.527.01,3.052.012,4.579,0,.293,0,.333.111.332.362q-.011,4,0,8.009"
									transform="translate(-111.553 -42.856)"
								/>
								<path
									className="a-reward-2-mobile"
									d="M117.51,44.729a3.005,3.005,0,1,1-3-2.99,3.015,3.015,0,0,1,3,2.99"
									transform="translate(-111.5 -41.739)"
								/>
							</g>
							<g transform="translate(120.784 4242.811)">
								<g
									className="k-reward-2-mobile"
									transform="translate(0 0)">
									<path
										className="a-reward-2-mobile"
										d="M29.2,31.511l6.922,9.422a.262.262,0,0,1,.049.151l.039,7.376a.258.258,0,0,1-.257.259l-1.029,0a.257.257,0,0,1-.259-.256l-.014-2.616-3.721.019.014,2.617a.257.257,0,0,1-.257.259l-1.029,0A.256.256,0,0,1,29.4,48.5l-.035-6.777a.256.256,0,0,1,.256-.259l1.029-.006a.258.258,0,0,1,.259.257l.014,2.616,3.721-.019-.015-2.8-6.285-8.557-5.347.028L16.8,41.6l.014,2.8,3.722-.02-.014-2.616a.256.256,0,0,1,.256-.259l1.029-.006a.257.257,0,0,1,.259.257l.035,6.777a.258.258,0,0,1-.256.259l-1.029,0a.257.257,0,0,1-.259-.256l-.014-2.617-3.721.02.014,2.617a.258.258,0,0,1-.257.259l-1.029,0a.258.258,0,0,1-.259-.256l-.038-7.376a.257.257,0,0,1,.048-.151l6.823-9.495a.26.26,0,0,1,.207-.107l6.658-.034a.256.256,0,0,1,.208.105m-10.72-7.7L7.339,20.254a.249.249,0,0,0-.158,0l-7,2.315a.258.258,0,0,0-.163.325l.322.977a.257.257,0,0,0,.325.163l2.483-.821,1.169,3.533-2.484.821a.258.258,0,0,0-.163.325l.322.977a.258.258,0,0,0,.325.163l6.434-2.127a.257.257,0,0,0,.163-.325L8.589,25.6a.258.258,0,0,0-.325-.163l-2.484.822L4.612,22.73l2.656-.879L17.383,25.08l.826,2.5.852,2.577-6.2,8.623-2.657.878L9.041,36.123l2.484-.821a.258.258,0,0,0,.163-.325L11.365,34a.257.257,0,0,0-.324-.163L4.606,35.964a.258.258,0,0,0-.163.325l.322.977a.258.258,0,0,0,.325.163l2.484-.822,1.169,3.533-2.484.822a.257.257,0,0,0-.164.325l.323.977a.258.258,0,0,0,.325.163l7-2.316a.258.258,0,0,0,.129-.094L20.7,30.524a.255.255,0,0,0,.035-.231l-2.09-6.32a.258.258,0,0,0-.166-.165m13.734-1.74,11.1-3.671a.255.255,0,0,0,.128-.094l4.305-5.99a.258.258,0,0,0-.059-.359l-.836-.6a.257.257,0,0,0-.359.059l-1.528,2.124L41.94,11.365,43.467,9.24a.257.257,0,0,0-.058-.359l-.836-.6a.256.256,0,0,0-.359.059l-3.955,5.5a.258.258,0,0,0,.058.36l.837.6a.258.258,0,0,0,.359-.059l1.527-2.124,3.022,2.172-1.633,2.272L32.348,20.4l-4.342-3.12L27.951,6.659l1.633-2.272,3.022,2.172L31.079,8.683a.257.257,0,0,0,.059.359l.836.6a.257.257,0,0,0,.359-.059l3.955-5.5a.257.257,0,0,0-.059-.359l-.836-.6a.258.258,0,0,0-.359.059L33.506,5.3,30.485,3.133l1.527-2.125a.258.258,0,0,0-.059-.359l-.836-.6a.256.256,0,0,0-.359.059L26.453,6.1a.261.261,0,0,0-.048.151l.061,11.691a.256.256,0,0,0,.107.207l5.406,3.885a.258.258,0,0,0,.231.035M50.9,23.609l.313-.981a.258.258,0,0,0-.167-.323L44.02,20.062a.259.259,0,0,0-.159,0l-11.1,3.671a.254.254,0,0,0-.164.166l-2.024,6.342a.256.256,0,0,0,.037.23L37.531,39.9a.262.262,0,0,0,.13.092l7.026,2.243a.257.257,0,0,0,.323-.167l.313-.98a.255.255,0,0,0-.166-.323l-2.493-.8L43.8,36.419l2.493.8a.258.258,0,0,0,.323-.166l.313-.981a.258.258,0,0,0-.167-.323L40.3,33.683a.256.256,0,0,0-.322.167l-.314.981a.256.256,0,0,0,.167.322l2.492.8L41.194,39.5l-2.666-.85-6.286-8.558,1.626-5.093L43.949,21.66l2.665.851-1.131,3.545-2.493-.8a.259.259,0,0,0-.323.167l-.313.981a.257.257,0,0,0,.167.322l6.455,2.061a.257.257,0,0,0,.323-.166l.314-.981a.258.258,0,0,0-.167-.323l-2.493-.8,1.132-3.545,2.493.8a.259.259,0,0,0,.323-.167M19.26,22.089l5.36-3.948a.259.259,0,0,0,.105-.209L24.647,6.241a.254.254,0,0,0-.05-.15L20.222.151A.256.256,0,0,0,19.863.1l-.829.611a.257.257,0,0,0-.054.36l1.552,2.107-3,2.207L15.983,3.274a.257.257,0,0,0-.36-.054l-.829.611a.257.257,0,0,0-.054.36L18.76,9.646a.257.257,0,0,0,.36.054l.829-.611A.258.258,0,0,0,20,8.73L18.451,6.623l3-2.207,1.659,2.253.07,10.618-4.305,3.171L8.753,17.244,7.093,14.99l3-2.207,1.551,2.107a.257.257,0,0,0,.36.054l.829-.611a.258.258,0,0,0,.055-.36L8.865,8.519a.257.257,0,0,0-.36-.055l-.829.611a.257.257,0,0,0-.054.36l1.551,2.107-3,2.207L4.626,11.641a.258.258,0,0,0-.36-.055l-.829.611a.257.257,0,0,0-.054.36L7.758,18.5a.252.252,0,0,0,.129.092l11.143,3.54a.258.258,0,0,0,.231-.038"
										transform="translate(-0.516 0.439)"
									/>
									<path
										className="a-reward-2-mobile"
										d="M94.453,19.442H90.1a5.89,5.89,0,0,1-3.035-.814,6.053,6.053,0,0,1-2.2-2.212,6.134,6.134,0,0,1,0-6.107,6.138,6.138,0,0,1,2.2-2.221,5.956,5.956,0,0,1,5.45-.3,6.072,6.072,0,0,1,2.007,1.443l-.61.573A5.241,5.241,0,0,0,90.1,8.134a5.079,5.079,0,0,0-2.609.7,5.254,5.254,0,0,0-1.906,1.9,5.247,5.247,0,0,0,0,5.247A5.3,5.3,0,0,0,87.495,17.9a5.022,5.022,0,0,0,2.609.713h3.479V14.3h-3.96v-.833h4.83Z"
										transform="translate(-1.936 0.316)"
									/>
									<path
										className="a-reward-2-mobile"
										d="M106.294,19.444l-5-6.07h1.481A5.9,5.9,0,0,0,105,13.023a2.966,2.966,0,0,0,1.092-.9,2.118,2.118,0,0,0,.462-1.323,2.182,2.182,0,0,0-.388-1.231,2.872,2.872,0,0,0-1.11-.953,3.6,3.6,0,0,0-1.665-.371H100.02v11.2h-.833V7.415h4.2a4.63,4.63,0,0,1,1.591.268,3.912,3.912,0,0,1,1.3.768,3.421,3.421,0,0,1,.824,1.092,2.973,2.973,0,0,1-.324,3.081,3.525,3.525,0,0,1-1.443,1.157,3.807,3.807,0,0,1-1.12.323,9.8,9.8,0,0,1-1.156.065l4.348,5.274Z"
										transform="translate(-2.191 0.313)"
									/>
									<path
										className="a-reward-2-mobile"
										d="M116.351,19.574a4.408,4.408,0,0,1-1.749-.361,4.57,4.57,0,0,1-1.489-1.027,4.236,4.236,0,0,1-.99-1.481,4.75,4.75,0,0,1-.343-1.8v-7.5h.833v7.5a3.874,3.874,0,0,0,.287,1.481,3.66,3.66,0,0,0,.805,1.221,3.758,3.758,0,0,0,1.221.824,3.649,3.649,0,0,0,1.425.287,3.689,3.689,0,0,0,1.443-.287,3.762,3.762,0,0,0,1.222-.824,3.66,3.66,0,0,0,.805-1.221,3.892,3.892,0,0,0,.286-1.481v-7.5h.834v7.5a4.769,4.769,0,0,1-.343,1.8,4.249,4.249,0,0,1-.99,1.481,4.6,4.6,0,0,1-1.481,1.027,4.432,4.432,0,0,1-1.776.361"
										transform="translate(-2.404 0.313)"
									/>
									<path
										className="a-reward-2-mobile"
										d="M125.5,19.444l-.019-12.029h4.293a4.2,4.2,0,0,1,1.952.463,3.777,3.777,0,0,1,1.426,1.24,3,3,0,0,1,0,3.4,3.748,3.748,0,0,1-1.426,1.249,4.2,4.2,0,0,1-1.952.463h-3.442v5.218Zm.833-6.088h3.442a3.466,3.466,0,0,0,1.537-.342,2.924,2.924,0,0,0,1.12-.926,2.137,2.137,0,0,0,.416-1.267,2.164,2.164,0,0,0-.416-1.286,2.924,2.924,0,0,0-1.12-.926,3.466,3.466,0,0,0-1.537-.342h-3.461Z"
										transform="translate(-2.636 0.313)"
									/>
									<path
										className="a-reward-2-mobile"
										d="M142.943,19.572a5.933,5.933,0,0,1-3.054-.824,6.132,6.132,0,0,1-3.035-5.321,6.132,6.132,0,0,1,3.035-5.321,6.071,6.071,0,0,1,6.107,0,6.133,6.133,0,0,1,3.035,5.321A6.133,6.133,0,0,1,146,18.748a5.933,5.933,0,0,1-3.054.824m0-11.437a5.064,5.064,0,0,0-2.628.713,5.359,5.359,0,0,0-1.916,1.925,5.309,5.309,0,0,0,0,5.311,5.351,5.351,0,0,0,1.916,1.925,5.2,5.2,0,0,0,5.256,0,5.272,5.272,0,0,0,1.906-1.925,5.367,5.367,0,0,0,0-5.311,5.279,5.279,0,0,0-1.906-1.925,5.066,5.066,0,0,0-2.628-.713"
										transform="translate(-2.828 0.316)"
									/>
									<path
										className="a-reward-2-mobile"
										d="M80.825,25.953h3.069a.4.4,0,0,1,.4.4V27.6A5.252,5.252,0,0,1,88.87,25.54a5.41,5.41,0,0,1,5.177,2.731,6.4,6.4,0,0,1,5.62-2.731c2.764,0,4.986,1.079,6.1,2.953a10.071,10.071,0,0,1,1.049,4.891v9.759a.4.4,0,0,1-.4.4h-3.418a.4.4,0,0,1-.4-.4V33.892c0-1.811-.254-2.795-.857-3.462a3.112,3.112,0,0,0-2.445-1.017,3.2,3.2,0,0,0-3.017,1.778,8.311,8.311,0,0,0-.54,3.684v8.267a.4.4,0,0,1-.4.4H91.909a.4.4,0,0,1-.4-.4V33.892a5.376,5.376,0,0,0-.793-3.43,3.393,3.393,0,0,0-2.6-1.048,3.03,3.03,0,0,0-3.049,1.905,10.407,10.407,0,0,0-.413,3.557v8.267a.4.4,0,0,1-.4.4H80.825a.4.4,0,0,1-.4-.4V26.356a.4.4,0,0,1,.4-.4"
										transform="translate(-1.874 0.007)"
									/>
									<path
										className="a-reward-2-mobile"
										d="M128.027,43.547h-3.068a.4.4,0,0,1-.4-.4V41.26a7,7,0,0,1-5.844,2.7c-5.145,0-8.861-3.843-8.861-9.147,0-5.367,3.748-9.273,8.956-9.273a6.54,6.54,0,0,1,5.748,2.763V26.355a.4.4,0,0,1,.4-.4h3.068a.4.4,0,0,1,.4.4V43.143a.4.4,0,0,1-.4.4m-13.92-8.639a5.161,5.161,0,1,0,10.322-.1,5.1,5.1,0,0,0-5.24-5.4c-2.954,0-5.082,2.319-5.082,5.495"
										transform="translate(-2.372 0.007)"
									/>
									<path
										className="a-reward-2-mobile"
										d="M132.641,25.953h3.069a.4.4,0,0,1,.4.4v1.311a3.893,3.893,0,0,1,3.811-2.127h.318v4.065c-2.541.064-3.779,1.429-3.779,4.16v9.378a.4.4,0,0,1-.4.4h-3.418a.4.4,0,0,1-.4-.4V26.356a.4.4,0,0,1,.4-.4"
										transform="translate(-2.75 0.007)"
									/>
									<path
										className="a-reward-2-mobile"
										d="M145.921,36.624a4.634,4.634,0,0,0,4.858,3.461,4.441,4.441,0,0,0,3.754-1.607.406.406,0,0,1,.3-.139h3.843a.4.4,0,0,1,.374.553,7.974,7.974,0,0,1-1.191,1.892,8.63,8.63,0,0,1-6.987,3.176,9.215,9.215,0,0,1-9.525-9.3,9.352,9.352,0,0,1,10.18-9.078c4.77.435,8.175,4.281,8.175,9.423a6.8,6.8,0,0,1-.159,1.62Zm9.623-3.716c-.54-2.255-2.254-3.493-4.859-3.493a4.656,4.656,0,0,0-4.891,3.493Z"
										transform="translate(-2.904 0.007)"
									/>
									<path
										className="a-reward-2-mobile"
										d="M166.6,41.9l-6.223-15.389a.4.4,0,0,1,.374-.553h3.942a.4.4,0,0,1,.38.271l3.813,11.129,4.158-11.139a.4.4,0,0,1,.377-.262h3.966a.4.4,0,0,1,.37.562l-9.813,22.664a.4.4,0,0,1-.37.243h-3.661a.4.4,0,0,1-.369-.565Z"
										transform="translate(-3.225 0)"
									/>
									<path
										className="a-reward-2-mobile"
										d="M68.213,19.983h-3.43L60.463,30.352a.4.4,0,0,0,.372.557h3.688a.4.4,0,0,0,.379-.269l1.6-4.527,2.508,7.114H62.041A4.165,4.165,0,0,0,58.2,35.79l-2.961,7.1a.4.4,0,0,0,.372.557h3.927a.4.4,0,0,0,.37-.244l2.5-5.822h8.352L73.159,43.2a.4.4,0,0,0,.373.249h3.921a.4.4,0,0,0,.372-.558Z"
										transform="translate(-1.448 0.101)"
									/>
								</g>
							</g>
							<g transform="translate(79 4138)">
								<text className="j-reward-2-mobile">
									<tspan
										className="l-reward-2-mobile"
										x={29.712}
										y={11}>
										{'Tratamiento de datos personales'}
									</tspan>
									<tspan y={11} />
								</text>
							</g>
							<g transform="translate(79 3937)">
								<text className="m-reward-2-mobile">
									<tspan x={111.786} y={11}>
										{'Mapa'}
									</tspan>
								</text>
							</g>
							<g transform="translate(41 4171)">
								<text className="m-reward-2-mobile">
									<tspan x={39.14} y={11}>
										{
											'Política de protección de datos personales'
										}
									</tspan>
								</text>
							</g>
						</g>
					</g>
				</svg>
			) : (
				<svg viewBox="0 0 414 920">
					<defs>
						<style>
							{
								'.a-reward-2-mobile,.e-reward-2-mobile,.i-reward-2-mobile,.k-reward-2-mobile,.o-reward-2-mobile,.r-reward-2-mobile{fill:#fff;}.b-reward-2-mobile{fill:url(#a-reward-2-mobile);}.c-reward-2-mobile{mix-blend-mode:multiply;isolation:isolate;fill:url(#b-reward-2-mobile);}.d-reward-2-mobile{fill:rgba(67,67,67,0.09);}.e-reward-2-mobile{font-size:24px;}.e-reward-2-mobile,.k-reward-2-mobile{font-family:Kiona-Bold;font-weight:700;}.f-reward-2-mobile,.h-reward-2-mobile,.n-reward-2-mobile{fill:#001f5f;}.f-reward-2-mobile{font-size:14px;}.f-reward-2-mobile,.o-reward-2-mobile,.r-reward-2-mobile{font-family:Silka-Regular, Silka;}.g-reward-2-mobile{opacity:0.7;}.i-reward-2-mobile{opacity:0.4;}.j-reward-2-mobile{fill:#e40032;}.k-reward-2-mobile{font-size:18px;}.l-reward-2-mobile{clip-path:url(#e-reward-2-mobile);}.m-reward-2-mobile{fill:#e7002a;stroke:#e7002a;}.n-reward-2-mobile{stroke:#001f5f;}.o-reward-2-mobile,.r-reward-2-mobile{font-size:12px;}.p-reward-2-mobile{clip-path:url(#f-reward-2-mobile);}.q-reward-2-mobile,.r-reward-2-mobile{text-decoration:underline;}.s-reward-2-mobile{filter:url(#c-reward-2-mobile);}'
							}
						</style>
						<pattern
							id="a-reward-2-mobile"
							width={1}
							height={1}
							viewBox="244.467 200.166 1234.609 2552.718">
							<image
								preserveAspectRatio="xMidYMid slice"
								width={1524.75}
								height={856}
								xlinkHref="/images/mobile/products/neuro/medicos-clinicos.webp"
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
								height={764}
								transform="translate(0 -349)"
							/>
						</clipPath>
						<clipPath id="f-reward-2-mobile">
							<rect
								className="a-reward-2-mobile"
								width={175}
								height={50}
								transform="translate(0.216 0.189)"
							/>
						</clipPath>
					</defs>
					<g>
						<rect
							className="b-reward-2-mobile"
							width={414}
							height={856}
							transform="translate(1.541)"
						/>
						<rect
							className="c-reward-2-mobile"
							width={414}
							height={215}
							transform="translate(1.541)"
						/>
						<path
							className="a-reward-2-mobile"
							d="M10,0H404a10,10,0,0,1,10,10V541a0,0,0,0,1,0,0H0a0,0,0,0,1,0,0V10A10,10,0,0,1,10,0Z"
							transform="translate(1.541 163)"
						/>
						<g
							className="s-reward-2-mobile"
							transform="matrix(1, 0, 0, 1, -7.46, -6)">
							<rect
								className="d-reward-2-mobile"
								width={413}
								height={38}
								transform="translate(9 6)"
							/>
						</g>
						<text
							className="e-reward-2-mobile"
							transform="translate(208.541 147)">
							<tspan x={-113.136} y={0}>
								{t('EQUIPOS MÉDICOS')}
							</tspan>
						</text>
						<text
							className="f-reward-2-mobile"
							transform="translate(76.541 182)">
							<tspan x={0} y={13}>
								{t('Monitores de signos vitales')}
							</tspan>
							<tspan x={0} y={31}>
								{t('Centrales de monitoreo')}
							</tspan>
							<tspan x={0} y={49}>
								{t('Electrocardiografía')}
							</tspan>
							<tspan x={0} y={67} xmlSpace="preserve">
								{t('Ventilación ')}
							</tspan>
							<tspan x={0} y={85}>
								{t('Equipos para neurología:')}
							</tspan>
							<tspan x={0} y={103}>
								{t('electroencefalografía, polisomnografía y')}
							</tspan>
							<tspan x={0} y={121}>
								{t('electromiografía.')}
							</tspan>
							<tspan x={0} y={139}>
								{t('Camas y camillas hospitalarias')}
							</tspan>
							<tspan x={0} y={157}>
								{t('Mesas de cirugía')}
							</tspan>
							<tspan x={0} y={175}>
								{t('Incubadora neonatal y lámparas de')}
							</tspan>
							<tspan x={0} y={193}>
								{t('fototerapia')}
							</tspan>
							<tspan x={0} y={211}>
								{t('Desfibrilador Externo Automático (DEA)')}
							</tspan>
							<tspan x={0} y={229}>
								{t('Lámparas para quirófano, procedimientos')}
							</tspan>
							<tspan x={0} y={247}>
								{t('y exploración')}
							</tspan>
							<tspan x={0} y={265}>
								{t('Unidades de suministro medicinales')}
							</tspan>
						</text>
						<text
							className="f-reward-2-mobile"
							transform="translate(37.541 468)">
							<tspan x={0} y={13}>
								{t(
									'Con una variada gama de soluciones para áreas '
								)}
							</tspan>
							<tspan x={0} y={31}>
								{t(
									'especializadas, UCIs, quirófanos, urgencias y '
								)}
							</tspan>
							<tspan x={0} y={49}>
								{t('hospitalización. ')}
							</tspan>
							<tspan x={0} y={67} />
							<tspan x={0} y={85}>
								{t(
									'En cumplimiento de la Ley 1672 del 19 de julio de '
								)}
							</tspan>
							<tspan x={0} y={103}>
								{t(
									'2013, Decreto 284 de 2018 y Resolución 851 del '
								)}
							</tspan>
							<tspan x={0} y={121}>
								{t(
									'2022. Amarey Nova Medical S.A, Ucipharma S.A. '
								)}
							</tspan>
							<tspan x={0} y={139}>
								{t(
									'y Novatécnica S.A.S., ponen a su disposición '
								)}
							</tspan>
							<tspan x={0} y={157}>
								{t(
									'nuestro proceso de disposición y gestión de los '
								)}
							</tspan>
							<tspan x={0} y={175}>
								{t(
									'residuos de aparatos eléctricos y electrónicos '
								)}
							</tspan>
							<tspan x={0} y={193}>
								{t(
									'(RAEE) relacionados específicamente con los '
								)}
							</tspan>
							<tspan x={0} y={211}>
								{t(
									'equipos biomédicos eléctricos o electrónicos '
								)}
							</tspan>
							<tspan x={0} y={229}>
								{t('(con excepción de todos los productos ')}
							</tspan>
							<tspan x={0} y={247}>
								{t('implantados e infectados) que distribuye ')}
							</tspan>
							<tspan x={0} y={265}>
								{t(
									'nuestras compañías. Para este fin, solicitamos '
								)}
							</tspan>
							<tspan x={0} y={283}>
								{t('comunicarse directamente con nuestro ')}
							</tspan>
							<tspan x={0} y={301}>
								{t('representante de ventas asignado a su ')}
							</tspan>
							<tspan x={0} y={319}>
								{t(
									'institución con el objetivo de programar su '
								)}
							</tspan>
							<tspan x={0} y={337}>
								{t(
									'recolección. Para la disposición final de los RAEE '
								)}
							</tspan>
							<tspan x={0} y={355}>
								{t(
									'realizamos la gestión a través de una empresa '
								)}
							</tspan>
							<tspan x={0} y={373} xmlSpace="preserve">
								{t('autorizada por la Autoridad Ambiental.  ')}
							</tspan>
						</text>
						<g
							className="g-reward-2-mobile"
							transform="translate(186.541 912.024) rotate(-90)"
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
							transform="translate(63.541 187)"
						/>
						<circle
							className="j-reward-2-mobile"
							cx={3}
							cy={3}
							r={3}
							transform="translate(63.541 314)"
						/>
						<circle
							className="j-reward-2-mobile"
							cx={3}
							cy={3}
							r={3}
							transform="translate(63.541 205)"
						/>
						<circle
							className="j-reward-2-mobile"
							cx={3}
							cy={3}
							r={3}
							transform="translate(63.541 332)"
						/>
						<text
							className="k-reward-2-mobile"
							transform="translate(208.541 26)">
							<tspan x={-101.322} y={0}>
								{t(' Soluciones en salud')}
							</tspan>
						</text>
						<g
							transform="translate(368.125 13.292)"
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
							transform="translate(63.541 223)"
						/>
						<circle
							className="j-reward-2-mobile"
							cx={3}
							cy={3}
							r={3}
							transform="translate(63.541 350)"
						/>
						<circle
							className="j-reward-2-mobile"
							cx={3}
							cy={3}
							r={3}
							transform="translate(63.541 241)"
						/>
						<circle
							className="j-reward-2-mobile"
							cx={3}
							cy={3}
							r={3}
							transform="translate(63.541 404)"
						/>
						<circle
							className="j-reward-2-mobile"
							cx={3}
							cy={3}
							r={3}
							transform="translate(63.541 439)"
						/>
						<circle
							className="j-reward-2-mobile"
							cx={3}
							cy={3}
							r={3}
							transform="translate(63.541 259)"
						/>
						<circle
							className="j-reward-2-mobile"
							cx={3}
							cy={3}
							r={3}
							transform="translate(63.541 386)"
						/>
						<g transform="translate(1.541 605)">
							<g
								className="l-reward-2-mobile"
								transform="translate(0 -94)">
								<g transform="translate(435.292 -266.543) rotate(90)">
									<g transform="translate(-88.908 11)">
										<path
											className="m-reward-2-mobile"
											d="M.245,172.413l25.372-68C29.712,93.444,39.236,86.354,49.88,86.354H62.84v0h61.253a24.546,24.546,0,0,0,14.727-4.979A29.085,29.085,0,0,0,148.6,68.112l25.372-68L173.728,0,148.356,68c-4.095,10.972-13.618,18.062-24.262,18.062H111.133v0H49.88a24.543,24.543,0,0,0-14.727,4.979A29.085,29.085,0,0,0,25.372,104.3L0,172.3Z"
											transform="translate(809.222 7.305) rotate(90)"
										/>
										<path
											className="n-reward-2-mobile"
											d="M275.821,229.774l-39.253-91.78c-6.335-14.809-21.512-24.194-38.665-23.908l-20.887.348v0L78.3,116.081a43.394,43.394,0,0,1-23.613-6.375A38.846,38.846,0,0,1,39.248,91.931L0,.151l.4-.162L39.647,91.769c6.335,14.81,21.512,24.194,38.665,23.908l20.887-.348v0l98.711-1.644a43.39,43.39,0,0,1,23.613,6.375,38.846,38.846,0,0,1,15.443,17.775l39.253,91.779Z"
											transform="translate(197.783 515.343) rotate(-179)"
										/>
										<path
											className="n-reward-2-mobile"
											d="M275.821,229.774l-39.253-91.78c-6.335-14.809-21.512-24.194-38.665-23.908l-20.887.348v0L78.3,116.081a43.394,43.394,0,0,1-23.613-6.375A38.846,38.846,0,0,1,39.248,91.931L0,.151l.4-.162L39.647,91.769c6.335,14.81,21.512,24.194,38.665,23.908l20.887-.348v0l98.711-1.644a43.39,43.39,0,0,1,23.613,6.375,38.846,38.846,0,0,1,15.443,17.775l39.253,91.779Z"
											transform="translate(636.819 557.002) rotate(-90)"
										/>
									</g>
								</g>
							</g>
						</g>
						<g transform="translate(0 -2919.5)">
							<path
								className="h-reward-2-mobile"
								d="M0,0H415.541V533H0Z"
								transform="translate(0 3845)"
							/>
							<text
								className="o-reward-2-mobile"
								transform="translate(41 3979)">
								<tspan x={74.978} y={11}>
									{'Carrera 7 # 99-53, pisos 19 y 20 '}
								</tspan>
								<tspan x={167} y={24} />
								<tspan x={35.528} y={37}>
									{
										'Línea de atención al cliente 018000 180066 -'
									}
								</tspan>
								<tspan x={124.028} y={50} xmlSpace="preserve">
									{' (601) 7447300 '}
								</tspan>
								<tspan x={167} y={63} />
								<tspan x={58.856} y={76}>
									{'Reporte de eventos adversos o PQR: '}
								</tspan>
								<tspan x={59.444} y={89}>
									{
										'servicioalcliente@grupoamarey.com-reward-2-mobile '
									}
								</tspan>
								<tspan x={167} y={102} />
								<tspan x={40.91} y={115}>
									{
										'Línea ética: linea.etica-reward-2-mobile@grupoamarey.com-reward-2-mobile '
									}
								</tspan>
							</text>
							<path
								className="a-reward-2-mobile"
								d="M23.372,55.682l.724-4.72H19.567V47.9a2.36,2.36,0,0,1,2.661-2.55h2.06V41.33a25.118,25.118,0,0,0-3.656-.319c-3.73,0-6.168,2.261-6.168,6.353v3.6H10.318v4.72h4.146V67.092a16.515,16.515,0,0,0,5.1,0V55.682Z"
								transform="translate(150.934 4271.925)"
							/>
							<g transform="translate(191.283 4313.196)">
								<g transform="translate(0)">
									<path
										className="a-reward-2-mobile"
										d="M68.445,43.5c3.474,0,3.885.013,5.258.076a7.189,7.189,0,0,1,2.416.448,4.308,4.308,0,0,1,2.469,2.469,7.194,7.194,0,0,1,.448,2.416c.063,1.372.077,1.784.077,5.258s-.014,3.885-.077,5.258a7.189,7.189,0,0,1-.448,2.416,4.308,4.308,0,0,1-2.469,2.469,7.183,7.183,0,0,1-2.416.449c-1.372.063-1.783.076-5.258.076s-3.885-.013-5.258-.076a7.183,7.183,0,0,1-2.416-.449A4.308,4.308,0,0,1,58.3,61.842a7.189,7.189,0,0,1-.448-2.416c-.063-1.372-.077-1.783-.077-5.258s.014-3.885.077-5.258a7.194,7.194,0,0,1,.448-2.416,4.308,4.308,0,0,1,2.469-2.469,7.189,7.189,0,0,1,2.416-.448c1.372-.063,1.784-.076,5.258-.076m0-2.345c-3.534,0-3.977.015-5.364.078a9.532,9.532,0,0,0-3.158.6,6.652,6.652,0,0,0-3.8,3.8,9.533,9.533,0,0,0-.6,3.158c-.063,1.388-.078,1.831-.078,5.364s.015,3.977.078,5.364a9.533,9.533,0,0,0,.6,3.158,6.645,6.645,0,0,0,3.8,3.8,9.553,9.553,0,0,0,3.158.606c1.387.063,1.831.078,5.364.078s3.977-.015,5.364-.078a9.553,9.553,0,0,0,3.158-.606,6.645,6.645,0,0,0,3.8-3.8,9.533,9.533,0,0,0,.6-3.158c.063-1.387.078-1.831.078-5.364s-.015-3.976-.078-5.364a9.533,9.533,0,0,0-.6-3.158,6.652,6.652,0,0,0-3.8-3.8,9.532,9.532,0,0,0-3.158-.6c-1.387-.063-1.831-.078-5.364-.078"
										transform="translate(-55.435 -41.158)"
									/>
									<path
										className="a-reward-2-mobile"
										d="M69.3,48.34a6.681,6.681,0,1,0,6.681,6.681A6.681,6.681,0,0,0,69.3,48.34m0,11.017a4.337,4.337,0,1,1,4.336-4.336A4.337,4.337,0,0,1,69.3,59.357"
										transform="translate(-56.287 -42.01)"
									/>
									<path
										className="a-reward-2-mobile"
										d="M79.426,47.83a1.561,1.561,0,1,1-1.561-1.561,1.561,1.561,0,0,1,1.561,1.561"
										transform="translate(-57.91 -41.764)"
									/>
								</g>
							</g>
							<g transform="translate(233.656 4314.22)">
								<path
									className="a-reward-2-mobile"
									d="M126.534,53.356c.347-.39.634-.786.991-1.123a5.434,5.434,0,0,1,3.908-1.542,9.024,9.024,0,0,1,2.458.3,4.8,4.8,0,0,1,3.411,3.587,15,15,0,0,1,.454,4.111c.005,2.921-.008,5.843,0,8.764,0,.274-.076.346-.345.344q-2.257-.019-4.515,0c-.264,0-.322-.079-.321-.33q.012-4.17,0-8.34a7.508,7.508,0,0,0-.242-2.07,2.327,2.327,0,0,0-2.56-1.814,2.8,2.8,0,0,0-2.94,2.792,10.245,10.245,0,0,0-.079,1.3c0,2.7,0,5.407.007,8.111,0,.27-.067.349-.342.346q-2.274-.02-4.548,0c-.243,0-.314-.063-.313-.309q.009-8.029,0-16.058c0-.264.086-.326.337-.324q2.159.016,4.319,0c.264,0,.333.084.328.334-.015.64-.005,1.28-.005,1.92"
									transform="translate(-112.693 -42.801)"
								/>
								<path
									className="a-reward-2-mobile"
									d="M117.149,59.528c0,2.648,0,5.3.006,7.944,0,.294-.072.383-.376.38-1.5-.017-3.009-.012-4.514,0-.242,0-.314-.059-.314-.308q.011-8.042,0-16.084c0-.222.054-.3.289-.3,1.527.01,3.052.012,4.579,0,.293,0,.333.111.332.362q-.011,4,0,8.009"
									transform="translate(-111.553 -42.856)"
								/>
								<path
									className="a-reward-2-mobile"
									d="M117.51,44.729a3.005,3.005,0,1,1-3-2.99,3.015,3.015,0,0,1,3,2.99"
									transform="translate(-111.5 -41.739)"
								/>
							</g>
							<g transform="translate(120.784 4242.811)">
								<g
									className="p-reward-2-mobile"
									transform="translate(0 0)">
									<path
										className="a-reward-2-mobile"
										d="M29.2,31.511l6.922,9.422a.262.262,0,0,1,.049.151l.039,7.376a.258.258,0,0,1-.257.259l-1.029,0a.257.257,0,0,1-.259-.256l-.014-2.616-3.721.019.014,2.617a.257.257,0,0,1-.257.259l-1.029,0A.256.256,0,0,1,29.4,48.5l-.035-6.777a.256.256,0,0,1,.256-.259l1.029-.006a.258.258,0,0,1,.259.257l.014,2.616,3.721-.019-.015-2.8-6.285-8.557-5.347.028L16.8,41.6l.014,2.8,3.722-.02-.014-2.616a.256.256,0,0,1,.256-.259l1.029-.006a.257.257,0,0,1,.259.257l.035,6.777a.258.258,0,0,1-.256.259l-1.029,0a.257.257,0,0,1-.259-.256l-.014-2.617-3.721.02.014,2.617a.258.258,0,0,1-.257.259l-1.029,0a.258.258,0,0,1-.259-.256l-.038-7.376a.257.257,0,0,1,.048-.151l6.823-9.495a.26.26,0,0,1,.207-.107l6.658-.034a.256.256,0,0,1,.208.105m-10.72-7.7L7.339,20.254a.249.249,0,0,0-.158,0l-7,2.315a.258.258,0,0,0-.163.325l.322.977a.257.257,0,0,0,.325.163l2.483-.821,1.169,3.533-2.484.821a.258.258,0,0,0-.163.325l.322.977a.258.258,0,0,0,.325.163l6.434-2.127a.257.257,0,0,0,.163-.325L8.589,25.6a.258.258,0,0,0-.325-.163l-2.484.822L4.612,22.73l2.656-.879L17.383,25.08l.826,2.5.852,2.577-6.2,8.623-2.657.878L9.041,36.123l2.484-.821a.258.258,0,0,0,.163-.325L11.365,34a.257.257,0,0,0-.324-.163L4.606,35.964a.258.258,0,0,0-.163.325l.322.977a.258.258,0,0,0,.325.163l2.484-.822,1.169,3.533-2.484.822a.257.257,0,0,0-.164.325l.323.977a.258.258,0,0,0,.325.163l7-2.316a.258.258,0,0,0,.129-.094L20.7,30.524a.255.255,0,0,0,.035-.231l-2.09-6.32a.258.258,0,0,0-.166-.165m13.734-1.74,11.1-3.671a.255.255,0,0,0,.128-.094l4.305-5.99a.258.258,0,0,0-.059-.359l-.836-.6a.257.257,0,0,0-.359.059l-1.528,2.124L41.94,11.365,43.467,9.24a.257.257,0,0,0-.058-.359l-.836-.6a.256.256,0,0,0-.359.059l-3.955,5.5a.258.258,0,0,0,.058.36l.837.6a.258.258,0,0,0,.359-.059l1.527-2.124,3.022,2.172-1.633,2.272L32.348,20.4l-4.342-3.12L27.951,6.659l1.633-2.272,3.022,2.172L31.079,8.683a.257.257,0,0,0,.059.359l.836.6a.257.257,0,0,0,.359-.059l3.955-5.5a.257.257,0,0,0-.059-.359l-.836-.6a.258.258,0,0,0-.359.059L33.506,5.3,30.485,3.133l1.527-2.125a.258.258,0,0,0-.059-.359l-.836-.6a.256.256,0,0,0-.359.059L26.453,6.1a.261.261,0,0,0-.048.151l.061,11.691a.256.256,0,0,0,.107.207l5.406,3.885a.258.258,0,0,0,.231.035M50.9,23.609l.313-.981a.258.258,0,0,0-.167-.323L44.02,20.062a.259.259,0,0,0-.159,0l-11.1,3.671a.254.254,0,0,0-.164.166l-2.024,6.342a.256.256,0,0,0,.037.23L37.531,39.9a.262.262,0,0,0,.13.092l7.026,2.243a.257.257,0,0,0,.323-.167l.313-.98a.255.255,0,0,0-.166-.323l-2.493-.8L43.8,36.419l2.493.8a.258.258,0,0,0,.323-.166l.313-.981a.258.258,0,0,0-.167-.323L40.3,33.683a.256.256,0,0,0-.322.167l-.314.981a.256.256,0,0,0,.167.322l2.492.8L41.194,39.5l-2.666-.85-6.286-8.558,1.626-5.093L43.949,21.66l2.665.851-1.131,3.545-2.493-.8a.259.259,0,0,0-.323.167l-.313.981a.257.257,0,0,0,.167.322l6.455,2.061a.257.257,0,0,0,.323-.166l.314-.981a.258.258,0,0,0-.167-.323l-2.493-.8,1.132-3.545,2.493.8a.259.259,0,0,0,.323-.167M19.26,22.089l5.36-3.948a.259.259,0,0,0,.105-.209L24.647,6.241a.254.254,0,0,0-.05-.15L20.222.151A.256.256,0,0,0,19.863.1l-.829.611a.257.257,0,0,0-.054.36l1.552,2.107-3,2.207L15.983,3.274a.257.257,0,0,0-.36-.054l-.829.611a.257.257,0,0,0-.054.36L18.76,9.646a.257.257,0,0,0,.36.054l.829-.611A.258.258,0,0,0,20,8.73L18.451,6.623l3-2.207,1.659,2.253.07,10.618-4.305,3.171L8.753,17.244,7.093,14.99l3-2.207,1.551,2.107a.257.257,0,0,0,.36.054l.829-.611a.258.258,0,0,0,.055-.36L8.865,8.519a.257.257,0,0,0-.36-.055l-.829.611a.257.257,0,0,0-.054.36l1.551,2.107-3,2.207L4.626,11.641a.258.258,0,0,0-.36-.055l-.829.611a.257.257,0,0,0-.054.36L7.758,18.5a.252.252,0,0,0,.129.092l11.143,3.54a.258.258,0,0,0,.231-.038"
										transform="translate(-0.516 0.439)"
									/>
									<path
										className="a-reward-2-mobile"
										d="M94.453,19.442H90.1a5.89,5.89,0,0,1-3.035-.814,6.053,6.053,0,0,1-2.2-2.212,6.134,6.134,0,0,1,0-6.107,6.138,6.138,0,0,1,2.2-2.221,5.956,5.956,0,0,1,5.45-.3,6.072,6.072,0,0,1,2.007,1.443l-.61.573A5.241,5.241,0,0,0,90.1,8.134a5.079,5.079,0,0,0-2.609.7,5.254,5.254,0,0,0-1.906,1.9,5.247,5.247,0,0,0,0,5.247A5.3,5.3,0,0,0,87.495,17.9a5.022,5.022,0,0,0,2.609.713h3.479V14.3h-3.96v-.833h4.83Z"
										transform="translate(-1.936 0.316)"
									/>
									<path
										className="a-reward-2-mobile"
										d="M106.294,19.444l-5-6.07h1.481A5.9,5.9,0,0,0,105,13.023a2.966,2.966,0,0,0,1.092-.9,2.118,2.118,0,0,0,.462-1.323,2.182,2.182,0,0,0-.388-1.231,2.872,2.872,0,0,0-1.11-.953,3.6,3.6,0,0,0-1.665-.371H100.02v11.2h-.833V7.415h4.2a4.63,4.63,0,0,1,1.591.268,3.912,3.912,0,0,1,1.3.768,3.421,3.421,0,0,1,.824,1.092,2.973,2.973,0,0,1-.324,3.081,3.525,3.525,0,0,1-1.443,1.157,3.807,3.807,0,0,1-1.12.323,9.8,9.8,0,0,1-1.156.065l4.348,5.274Z"
										transform="translate(-2.191 0.313)"
									/>
									<path
										className="a-reward-2-mobile"
										d="M116.351,19.574a4.408,4.408,0,0,1-1.749-.361,4.57,4.57,0,0,1-1.489-1.027,4.236,4.236,0,0,1-.99-1.481,4.75,4.75,0,0,1-.343-1.8v-7.5h.833v7.5a3.874,3.874,0,0,0,.287,1.481,3.66,3.66,0,0,0,.805,1.221,3.758,3.758,0,0,0,1.221.824,3.649,3.649,0,0,0,1.425.287,3.689,3.689,0,0,0,1.443-.287,3.762,3.762,0,0,0,1.222-.824,3.66,3.66,0,0,0,.805-1.221,3.892,3.892,0,0,0,.286-1.481v-7.5h.834v7.5a4.769,4.769,0,0,1-.343,1.8,4.249,4.249,0,0,1-.99,1.481,4.6,4.6,0,0,1-1.481,1.027,4.432,4.432,0,0,1-1.776.361"
										transform="translate(-2.404 0.313)"
									/>
									<path
										className="a-reward-2-mobile"
										d="M125.5,19.444l-.019-12.029h4.293a4.2,4.2,0,0,1,1.952.463,3.777,3.777,0,0,1,1.426,1.24,3,3,0,0,1,0,3.4,3.748,3.748,0,0,1-1.426,1.249,4.2,4.2,0,0,1-1.952.463h-3.442v5.218Zm.833-6.088h3.442a3.466,3.466,0,0,0,1.537-.342,2.924,2.924,0,0,0,1.12-.926,2.137,2.137,0,0,0,.416-1.267,2.164,2.164,0,0,0-.416-1.286,2.924,2.924,0,0,0-1.12-.926,3.466,3.466,0,0,0-1.537-.342h-3.461Z"
										transform="translate(-2.636 0.313)"
									/>
									<path
										className="a-reward-2-mobile"
										d="M142.943,19.572a5.933,5.933,0,0,1-3.054-.824,6.132,6.132,0,0,1-3.035-5.321,6.132,6.132,0,0,1,3.035-5.321,6.071,6.071,0,0,1,6.107,0,6.133,6.133,0,0,1,3.035,5.321A6.133,6.133,0,0,1,146,18.748a5.933,5.933,0,0,1-3.054.824m0-11.437a5.064,5.064,0,0,0-2.628.713,5.359,5.359,0,0,0-1.916,1.925,5.309,5.309,0,0,0,0,5.311,5.351,5.351,0,0,0,1.916,1.925,5.2,5.2,0,0,0,5.256,0,5.272,5.272,0,0,0,1.906-1.925,5.367,5.367,0,0,0,0-5.311,5.279,5.279,0,0,0-1.906-1.925,5.066,5.066,0,0,0-2.628-.713"
										transform="translate(-2.828 0.316)"
									/>
									<path
										className="a-reward-2-mobile"
										d="M80.825,25.953h3.069a.4.4,0,0,1,.4.4V27.6A5.252,5.252,0,0,1,88.87,25.54a5.41,5.41,0,0,1,5.177,2.731,6.4,6.4,0,0,1,5.62-2.731c2.764,0,4.986,1.079,6.1,2.953a10.071,10.071,0,0,1,1.049,4.891v9.759a.4.4,0,0,1-.4.4h-3.418a.4.4,0,0,1-.4-.4V33.892c0-1.811-.254-2.795-.857-3.462a3.112,3.112,0,0,0-2.445-1.017,3.2,3.2,0,0,0-3.017,1.778,8.311,8.311,0,0,0-.54,3.684v8.267a.4.4,0,0,1-.4.4H91.909a.4.4,0,0,1-.4-.4V33.892a5.376,5.376,0,0,0-.793-3.43,3.393,3.393,0,0,0-2.6-1.048,3.03,3.03,0,0,0-3.049,1.905,10.407,10.407,0,0,0-.413,3.557v8.267a.4.4,0,0,1-.4.4H80.825a.4.4,0,0,1-.4-.4V26.356a.4.4,0,0,1,.4-.4"
										transform="translate(-1.874 0.007)"
									/>
									<path
										className="a-reward-2-mobile"
										d="M128.027,43.547h-3.068a.4.4,0,0,1-.4-.4V41.26a7,7,0,0,1-5.844,2.7c-5.145,0-8.861-3.843-8.861-9.147,0-5.367,3.748-9.273,8.956-9.273a6.54,6.54,0,0,1,5.748,2.763V26.355a.4.4,0,0,1,.4-.4h3.068a.4.4,0,0,1,.4.4V43.143a.4.4,0,0,1-.4.4m-13.92-8.639a5.161,5.161,0,1,0,10.322-.1,5.1,5.1,0,0,0-5.24-5.4c-2.954,0-5.082,2.319-5.082,5.495"
										transform="translate(-2.372 0.007)"
									/>
									<path
										className="a-reward-2-mobile"
										d="M132.641,25.953h3.069a.4.4,0,0,1,.4.4v1.311a3.893,3.893,0,0,1,3.811-2.127h.318v4.065c-2.541.064-3.779,1.429-3.779,4.16v9.378a.4.4,0,0,1-.4.4h-3.418a.4.4,0,0,1-.4-.4V26.356a.4.4,0,0,1,.4-.4"
										transform="translate(-2.75 0.007)"
									/>
									<path
										className="a-reward-2-mobile"
										d="M145.921,36.624a4.634,4.634,0,0,0,4.858,3.461,4.441,4.441,0,0,0,3.754-1.607.406.406,0,0,1,.3-.139h3.843a.4.4,0,0,1,.374.553,7.974,7.974,0,0,1-1.191,1.892,8.63,8.63,0,0,1-6.987,3.176,9.215,9.215,0,0,1-9.525-9.3,9.352,9.352,0,0,1,10.18-9.078c4.77.435,8.175,4.281,8.175,9.423a6.8,6.8,0,0,1-.159,1.62Zm9.623-3.716c-.54-2.255-2.254-3.493-4.859-3.493a4.656,4.656,0,0,0-4.891,3.493Z"
										transform="translate(-2.904 0.007)"
									/>
									<path
										className="a-reward-2-mobile"
										d="M166.6,41.9l-6.223-15.389a.4.4,0,0,1,.374-.553h3.942a.4.4,0,0,1,.38.271l3.813,11.129,4.158-11.139a.4.4,0,0,1,.377-.262h3.966a.4.4,0,0,1,.37.562l-9.813,22.664a.4.4,0,0,1-.37.243h-3.661a.4.4,0,0,1-.369-.565Z"
										transform="translate(-3.225 0)"
									/>
									<path
										className="a-reward-2-mobile"
										d="M68.213,19.983h-3.43L60.463,30.352a.4.4,0,0,0,.372.557h3.688a.4.4,0,0,0,.379-.269l1.6-4.527,2.508,7.114H62.041A4.165,4.165,0,0,0,58.2,35.79l-2.961,7.1a.4.4,0,0,0,.372.557h3.927a.4.4,0,0,0,.37-.244l2.5-5.822h8.352L73.159,43.2a.4.4,0,0,0,.373.249h3.921a.4.4,0,0,0,.372-.558Z"
										transform="translate(-1.448 0.101)"
									/>
								</g>
							</g>
							<g transform="translate(79 4138)">
								<text className="o-reward-2-mobile">
									<tspan
										className="q-reward-2-mobile"
										x={29.712}
										y={11}>
										{'Tratamiento de datos personales'}
									</tspan>
									<tspan y={11} />
								</text>
							</g>
							<g transform="translate(79 3937)">
								<text className="r-reward-2-mobile">
									<tspan x={111.786} y={11}>
										{'Mapa'}
									</tspan>
								</text>
							</g>
							<g transform="translate(41 4171)">
								<text className="r-reward-2-mobile">
									<tspan x={39.14} y={11}>
										{
											'Política de protección de datos personales'
										}
									</tspan>
								</text>
							</g>
						</g>
					</g>
				</svg>
			)}
		</React.Fragment>
	)
}

export default MedicalDevicesMOMobile
