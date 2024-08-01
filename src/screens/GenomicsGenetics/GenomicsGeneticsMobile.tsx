import React from 'react'
import { useTranslation } from 'react-i18next'

const GenomicsGeneticsMobile: React.FC = (): JSX.Element => {
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
					viewBox="85 1710 414 700"
					width="100%"
					style={{ height: '100%' }}
					preserveAspectRatio="none">
					<defs>
						<style>
							{
								'.a,.c,.d,.f,.g{fill:#fff;}.b{fill:url(#a);}.c{font-size:24px;}.c,.f{font-family:Kiona-Bold;font-weight:700;}.d{font-size:14px;font-family:Silka-Regular, Silka;}.e{fill:rgba(67,67,67,0.09);}.f{font-size:18px;}.g{opacity:0.4;}.h{fill:none;stroke:#00ff3b;stroke-width:6px;}.i{filter:url(#f);}.j{filter:url(#d);}.k{filter:url(#b);}'
							}
						</style>
						<pattern
							id="a"
							width={1}
							height={1}
							viewBox="970.308 8.899 406.361 837.201">
							<image
								preserveAspectRatio="xMidYMid slice"
								width={1520}
								height={855}
								xlinkHref="/images/mobile/products/neuro/geno.webp"
							/>
						</pattern>
						<filter
							id="b"
							x={75.34}
							y={1704.467}
							width={431}
							height={56}
							filterUnits="userSpaceOnUse">
							<feOffset dy={3} />
							<feGaussianBlur stdDeviation={3} result="c" />
							<feFlood floodOpacity={0.302} />
							<feComposite operator="in" in2="c" />
							<feComposite in="SourceGraphic" />
						</filter>
						<filter
							id="d"
							x={167.339}
							y={2475.96}
							width={248}
							height={61.169}
							filterUnits="userSpaceOnUse">
							<feOffset dy={3} />
							<feGaussianBlur stdDeviation={3} result="e" />
							<feFlood floodOpacity={0.4} />
							<feComposite operator="in" in2="e" />
							<feComposite in="SourceGraphic" />
						</filter>
						<filter
							id="f"
							x={167.339}
							y={2278.96}
							width={248}
							height={61.169}
							filterUnits="userSpaceOnUse">
							<feOffset dy={3} />
							<feGaussianBlur stdDeviation={3} result="g" />
							<feFlood floodOpacity={0.4} />
							<feComposite operator="in" in2="g" />
							<feComposite in="SourceGraphic" />
						</filter>
					</defs>
					<g transform="translate(2.84 0.967)">
						<rect
							className="b"
							width={415}
							height={855}
							transform="translate(81.5 1709.5)"
						/>
						<text className="c" transform="translate(288.5 1921.5)">
							<tspan x={-137.304} y={0}>
								{t('Gen\xF3mica y gen\xE9tica')}
							</tspan>
						</text>
						<g transform="translate(0 -200)">
							<text
								className="c"
								transform="translate(180.5 2211.5)">
								<tspan x={-63.072} y={0}>
									{'Gen\xF3mica'}
								</tspan>
							</text>
							<text
								className="c"
								transform="translate(175.5 2393.5)">
								<tspan x={-58.044} y={0}>
									{'Gen\xE9ticA'}
								</tspan>
							</text>
							<text
								className="d"
								transform="translate(116.5 2223.5)">
								<tspan x={0} y={13}>
									{t(
										'La gen\xF3mica analiza la forma en que se '
									)}
								</tspan>
								<tspan x={0} y={31}>
									{t('comporta un conjunto de genes. ')}
								</tspan>
							</text>
							<text
								className="d"
								transform="translate(116.5 2405.5)">
								<tspan x={0} y={13}>
									{t(
										'La gen\xE9tica es el estudio de rasgos y genes '
									)}
								</tspan>
								<tspan x={0} y={31}>
									{t(
										'heredados que pueden predisponer a una '
									)}
								</tspan>
								<tspan x={0} y={49}>
									{t(
										'persona a una condici\xF3n de salud particular.'
									)}
								</tspan>
							</text>
						</g>
						<g
							className="k"
							transform="matrix(1, 0, 0, 1, -2.84, -0.97)">
							<rect
								className="e"
								width={413}
								height={38}
								transform="translate(84.34 1710.47)"
							/>
						</g>
						<text className="f" transform="translate(288.5 1735.5)">
							<tspan x={-101.322} y={0}>
								{t(' Soluciones en salud')}
							</tspan>
						</text>
						<g
							transform="translate(448.085 1722.792)"
							onClick={() =>
								(window.location.href = '/productos')
							}>
							<path
								className="a"
								d="M8.8,10.967,5.708,7.874,2.615,10.967A1.531,1.531,0,1,1,.448,8.8L3.542,5.708.448,2.615A1.532,1.532,0,0,1,2.615.448L5.708,3.542,8.8.448a1.531,1.531,0,1,1,2.165,2.166L7.874,5.708,10.967,8.8A1.531,1.531,0,0,1,8.8,10.967Z"
								transform="translate(0 0)"
							/>
						</g>
						<g transform="translate(0 -200)">
							<g
								transform="translate(173.499 2480.993)"
								onClick={() => setView(1)}>
								<g
									className="j"
									transform="matrix(1, 0, 0, 1, -176.34, -2481.96)">
									<path
										className="g"
										d="M230,0H47.176C28.161,0,11.086,12.6,4.142,31.746L0,43.169H181.308c20.259,0,38.4-13.581,45.534-34.092Z"
										transform="translate(176.34 2481.96)"
									/>
								</g>
								<text
									className="f"
									transform="translate(55.5 28.584)">
									<tspan x={0} y={0}>
										{t('Conoce M\xE1s')}
									</tspan>
								</text>
							</g>
							<g
								transform="translate(173.499 2283.993)"
								onClick={() => setView(2)}>
								<g
									className="i"
									transform="matrix(1, 0, 0, 1, -176.34, -2284.96)">
									<path
										className="g"
										d="M230,0H47.176C28.161,0,11.086,12.6,4.142,31.746L0,43.169H181.308c20.259,0,38.4-13.581,45.534-34.092Z"
										transform="translate(176.34 2284.96)"
									/>
								</g>
								<text
									className="f"
									transform="translate(55.5 28.584)">
									<tspan x={0} y={0}>
										{t('Conoce M\xE1s')}
									</tspan>
								</text>
							</g>
						</g>
						<line className="h" x2={521} y2={1530} />
					</g>
				</svg>
			) : view === 1 ? (
				<svg
					viewBox="0 0 414 855"
					width="100%"
					style={{ height: '100%' }}
					preserveAspectRatio="none">
					<defs>
						<style>
							{
								'.a-reward-2-mobile,.e-reward-2-mobile,.i-reward-2-mobile,.k-reward-2-mobile{fill:#fff;}.b-reward-2-mobile{fill:url(#a-reward-2-mobile);}.c-reward-2-mobile{mix-blend-mode:multiply;isolation:isolate;fill:url(#b-reward-2-mobile);}.d-reward-2-mobile{fill:rgba(67,67,67,0.09);}.e-reward-2-mobile{font-size:24px;}.e-reward-2-mobile,.k-reward-2-mobile{font-family:Kiona-Bold;font-weight:700;}.f-reward-2-mobile,.h-reward-2-mobile,.n-reward-2-mobile{fill:#001f5f;}.f-reward-2-mobile{font-size:14px;font-family:Silka-Regular, Silka;}.g-reward-2-mobile{opacity:0.7;}.i-reward-2-mobile{opacity:0.4;}.j-reward-2-mobile{fill:#e40032;}.k-reward-2-mobile{font-size:18px;}.l-reward-2-mobile{clip-path:url(#e-reward-2-mobile);}.m-reward-2-mobile{fill:#e7002a;stroke:#e7002a;}.n-reward-2-mobile{stroke:#001f5f;}.o-reward-2-mobile{filter:url(#c-reward-2-mobile);}'
							}
						</style>
						<pattern
							id="a-reward-2-mobile"
							width={1}
							height={1}
							viewBox="72.352 27.415 929.947 1922.789">
							<image
								preserveAspectRatio="xMidYMid slice"
								width={1284}
								height={856}
								xlinkHref="/images/mobile/products/neuro/geno-1.webp"
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
								height={513}
								transform="translate(0 -282)"
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
							d="M10,0H404a10,10,0,0,1,10,10V511a0,0,0,0,1,0,0H0a0,0,0,0,1,0,0V10A10,10,0,0,1,10,0Z"
							transform="translate(0 345)"
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
							transform="translate(207 316)">
							<tspan x={-58.044} y={0}>
								{t('Genética')}
							</tspan>
						</text>
						<text
							className="f-reward-2-mobile"
							transform="translate(36 381)">
							<tspan x={0} y={13}>
								{t(
									'Esto significa que si usted tiene un historial '
								)}
							</tspan>
							<tspan x={0} y={31}>
								{t('familiar marcado de cáncer de mama, es ')}
							</tspan>
							<tspan x={0} y={49}>
								{t(
									'probable que haya heredado un gen anormal '
								)}
							</tspan>
							<tspan x={0} y={67}>
								{t(
									'vinculado a un mayor riesgo de sufrir cáncer '
								)}
							</tspan>
							<tspan x={0} y={85}>
								{t(
									'de mama (como las mutaciones de los genes '
								)}
							</tspan>
							<tspan x={0} y={103}>
								{t('BRCA 1 o 2).')}
							</tspan>
							<tspan x={0} y={121} />
							<tspan x={0} y={139}>
								{t('¿Por qué realizar pruebas genómicas')}
							</tspan>
							<tspan x={0} y={157} xmlSpace="preserve">
								{t('y genéticas?')}
							</tspan>
						</text>
						<text
							className="f-reward-2-mobile"
							transform="translate(75 556)">
							<tspan x={0} y={13}>
								{t('Son las pruebas base de medicina de')}
							</tspan>
							<tspan x={0} y={31}>
								{t(
									'precisión o medicina personalizada, ya que'
								)}
							</tspan>
							<tspan x={0} y={49}>
								{t('cada individuo es diferente.')}
							</tspan>
							<tspan x={0} y={67}>
								{t('Guían al profesional en la elección del')}
							</tspan>
							<tspan x={0} y={85}>
								{t('tratamiento más adecuado para el')}
							</tspan>
							<tspan x={0} y={103}>
								{t('paciente.')}
							</tspan>
							<tspan x={0} y={121}>
								{t(
									'Permite calcular el riesgo de recurrencia.'
								)}
							</tspan>
							<tspan x={0} y={139}>
								{t(
									'Muestra un beneficio real para el paciente'
								)}
							</tspan>
							<tspan x={0} y={157}>
								{t('y su familia.')}
							</tspan>
							<tspan x={0} y={175}>
								{t('Se pueden analizar más de 3.800')}
							</tspan>
							<tspan x={0} y={193}>
								{t('enfermedades.')}
							</tspan>
							<tspan x={0} y={211}>
								{t('Determinan calidad de vida del paciente. ')}
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
							transform="translate(62 562)"
						/>
						<circle
							className="j-reward-2-mobile"
							cx={3}
							cy={3}
							r={3}
							transform="translate(62 614)"
						/>
						<circle
							className="j-reward-2-mobile"
							cx={3}
							cy={3}
							r={3}
							transform="translate(62 668)"
						/>
						<circle
							className="j-reward-2-mobile"
							cx={3}
							cy={3}
							r={3}
							transform="translate(62 688)"
						/>
						<circle
							className="j-reward-2-mobile"
							cx={3}
							cy={3}
							r={3}
							transform="translate(62 757)"
						/>
						<circle
							className="j-reward-2-mobile"
							cx={3}
							cy={3}
							r={3}
							transform="translate(62 724)"
						/>
						<text
							className="k-reward-2-mobile"
							transform="translate(207 26)">
							<tspan x={-101.322} y={0}>
								{t(' Soluciones en salud')}
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
						<g transform="translate(0 605)">
							<g
								className="l-reward-2-mobile"
								transform="translate(0 21)">
								<g transform="translate(423.485 1.267) rotate(90)">
									<g transform="translate(-5 -5)">
										<path
											className="m-reward-2-mobile"
											d="M.339,213.5l35.086-84.2A36.255,36.255,0,0,1,68.977,106.93H86.9v0h84.706A36.717,36.717,0,0,0,205.5,84.341L240.583.141,240.244,0,205.158,84.2a36.254,36.254,0,0,1-33.552,22.365H153.683v0H68.977a36.717,36.717,0,0,0-33.891,22.592L0,213.354Z"
											transform="translate(304.048 -11.807) rotate(90)"
										/>
										<path
											className="n-reward-2-mobile"
											d="M.355,235.375l37.823-92.163c6.1-14.871,20.046-24.587,35.518-24.752l18.84-.2v0l89.038-.948a38.173,38.173,0,0,0,21.476-6.948,40.8,40.8,0,0,0,14.4-18.054L255.274.15,254.919,0,217.1,92.162c-6.1,14.872-20.046,24.587-35.518,24.752l-18.84.2v0L73.7,118.06a38.169,38.169,0,0,0-21.476,6.948,40.8,40.8,0,0,0-14.4,18.054L0,235.224Z"
											transform="translate(-150.898 194.623) rotate(90)"
										/>
									</g>
								</g>
							</g>
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
								'.a-reward-2-mobile,.d-reward-2-mobile,.h-reward-2-mobile,.m-reward-2-mobile{fill:#fff;}.b-reward-2-mobile{fill:url(#a-reward-2-mobile);}.c-reward-2-mobile{mix-blend-mode:multiply;isolation:isolate;fill:url(#b-reward-2-mobile);}.d-reward-2-mobile{font-size:24px;}.d-reward-2-mobile,.m-reward-2-mobile{font-family:Kiona-Bold;font-weight:700;}.e-reward-2-mobile,.g-reward-2-mobile,.k-reward-2-mobile{fill:#001f5f;}.e-reward-2-mobile{font-size:14px;font-family:Silka-Regular, Silka;}.f-reward-2-mobile{opacity:0.7;}.h-reward-2-mobile{opacity:0.4;}.i-reward-2-mobile{clip-path:url(#c-reward-2-mobile);}.j-reward-2-mobile{fill:#e7002a;stroke:#e7002a;}.k-reward-2-mobile{stroke:#001f5f;}.l-reward-2-mobile{fill:rgba(67,67,67,0.09);}.m-reward-2-mobile{font-size:18px;}.n-reward-2-mobile{filter:url(#d-reward-2-mobile);}'
							}
						</style>
						<pattern
							id="a-reward-2-mobile"
							width={1}
							height={1}
							viewBox="191.426 33.314 816.16 1687.519">
							<image
								preserveAspectRatio="xMidYMid slice"
								width={1284}
								height={856}
								xlinkHref="/images/mobile/products/neuro/geno-2.webp"
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
						<clipPath id="c-reward-2-mobile">
							<rect
								className="a-reward-2-mobile"
								width={414}
								height={447}
								transform="translate(0 -1)"
							/>
						</clipPath>
						<filter
							id="d-reward-2-mobile"
							x={0}
							y={0}
							width={431}
							height={56}
							filterUnits="userSpaceOnUse">
							<feOffset dy={3} />
							<feGaussianBlur stdDeviation={3} result="e" />
							<feFlood floodOpacity={0.302} />
							<feComposite operator="in" in2="e" />
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
							height={474}
						/>
						<path
							className="a-reward-2-mobile"
							d="M10,0H404a10,10,0,0,1,10,10V447a0,0,0,0,1,0,0H0a0,0,0,0,1,0,0V10A10,10,0,0,1,10,0Z"
							transform="translate(0 409)"
						/>
						<text
							className="d-reward-2-mobile"
							transform="translate(207 382)">
							<tspan x={-63.072} y={0}>
								{t('Genómica  ')}
							</tspan>
						</text>
						<text
							className="e-reward-2-mobile"
							transform="translate(36 459)">
							<tspan x={0} y={13}>
								{t('Las pruebas genómicas (también conocidas ')}
							</tspan>
							<tspan x={0} y={31}>
								{t('como pruebas multigénicas) analizan una ')}
							</tspan>
							<tspan x={0} y={49}>
								{t(
									'muestra del tumor del cáncer para analizar el '
								)}
							</tspan>
							<tspan x={0} y={67}>
								{t(
									'nivel de actividad de determinados genes, el '
								)}
							</tspan>
							<tspan x={0} y={85}>
								{t(
									'cual afecta el comportamiento del cáncer, '
								)}
							</tspan>
							<tspan x={0} y={103}>
								{t(
									'incluyendo su probabilidad de crecimiento y '
								)}
							</tspan>
							<tspan x={0} y={121}>
								{t(
									'propagación. Una de estas pruebas genómicas '
								)}
							</tspan>
							<tspan x={0} y={139}>
								{t('en particular proporciona, además, una ')}
							</tspan>
							<tspan x={0} y={157}>
								{t(
									'estimación del beneficio de la quimioterapia. Se '
								)}
							</tspan>
							<tspan x={0} y={175}>
								{t(
									'usan para ayudar en la toma de decisiones '
								)}
							</tspan>
							<tspan x={0} y={193}>
								{t('sobre tratamiento después de la cirugía. ')}
							</tspan>
							<tspan x={0} y={211} />
							<tspan x={0} y={229}>
								{t(
									'En el caso del cáncer de mama puede ayudar a'
								)}
							</tspan>
							<tspan x={0} y={247}>
								{t(
									'determinar la agresividad de un tumor o la'
								)}
							</tspan>
							<tspan x={0} y={265}>
								{t(
									'probabilidad que un determinado tratamiento'
								)}
							</tspan>
							<tspan x={0} y={283}>
								{t(
									'mejore el resultado, permitiendo escoger el plan'
								)}
							</tspan>
							<tspan x={0} y={301}>
								{t('de cuidado adecuado para el paciente.')}
							</tspan>
						</text>
						<g
							className="f-reward-2-mobile"
							transform="translate(185 824.024) rotate(-90)"
							onClick={() => setView(0)}>
							<circle
								className="g-reward-2-mobile"
								cx={22}
								cy={22}
								r={22}
								transform="translate(0 0)"
							/>
							<path
								className="h-reward-2-mobile"
								d="M0,0V17.12l14.824-8.56L7.743,4.471Z"
								transform="translate(26.66 30.56) rotate(180)"
							/>
						</g>
						<g transform="translate(0 410)">
							<g className="i-reward-2-mobile">
								<g transform="translate(-56.488 521.066) rotate(-90)">
									<path
										className="j-reward-2-mobile"
										d="M.339,0,35.425,84.2a36.255,36.255,0,0,0,33.552,22.365H86.9v0h84.706A36.717,36.717,0,0,1,205.5,129.154l35.086,84.2-.339.141-35.086-84.2a36.254,36.254,0,0,0-33.552-22.365H153.683v0H68.977A36.717,36.717,0,0,1,35.086,84.341L0,.142Z"
										transform="translate(396.885 477.78) rotate(-90)"
									/>
									<path
										className="k-reward-2-mobile"
										d="M254.919,0,217.1,92.163c-6.1,14.871-20.046,24.587-35.518,24.752l-18.84.2v0L73.7,118.06a38.173,38.173,0,0,0-21.476,6.948,40.8,40.8,0,0,0-14.4,18.054L0,235.225l.355.15,37.823-92.162c6.1-14.872,20.046-24.587,35.518-24.752l18.84-.2v0l89.038-.948a38.169,38.169,0,0,0,21.476-6.948,40.8,40.8,0,0,0,14.4-18.054L255.274.151Z"
										transform="matrix(-0.966, 0.259, -0.259, -0.966, 204.496, 268.419)"
									/>
								</g>
							</g>
						</g>
						<g
							className="n-reward-2-mobile"
							transform="matrix(1, 0, 0, 1, -9, -6)">
							<rect
								className="l-reward-2-mobile"
								width={413}
								height={38}
								transform="translate(9 6)"
							/>
						</g>
						<text
							className="m-reward-2-mobile"
							transform="translate(207 26)">
							<tspan x={-101.322} y={0}>
								{t(' Soluciones en salud')}
							</tspan>
						</text>
						<g
							transform="translate(366.584 13.292)"
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

export default GenomicsGeneticsMobile
