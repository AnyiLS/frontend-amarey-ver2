import { useLanguage } from 'context/language'
import React from 'react'
import { useTranslation } from 'react-i18next'

const PortfolioCarousel: React.FC<any> = ({ onClose }): JSX.Element => {
	/** States */
	const [view, setView] = React.useState<number>(0)
	const [initial, setInitial] = React.useState<number>(0)
	const { t } = useTranslation()
	const { selectedLanguage } = useLanguage()

	return (
		<React.Fragment>
			{view === 0 ? (
				<svg
					viewBox="106 0 414 960"
					preserveAspectRatio="none"
					width="100%"
					height="100vh"
					onTouchEnd={(e) => {
						if (e.nativeEvent.changedTouches[0].clientX > initial) {
							setView((prevState: number) =>
								prevState === 0 ? 10 : prevState - 1
							)
						} else if (
							e.nativeEvent.changedTouches[0].clientX < initial
						) {
							setView((prevState: number) =>
								prevState === 10 ? 0 : prevState + 1
							)
						}
					}}
					onTouchStart={(e) =>
						setInitial(e.nativeEvent.changedTouches[0].clientX)
					}>
					<defs>
						<style>
							{
								".a-portfolio-1{fill:#d9dae4;}.b-portfolio-1,.l-portfolio-1{fill:none;}.c-portfolio-1,.o-portfolio-1{fill:#fff;}.d-portfolio-1{clip-path:url(#a-portfolio-1);}.e-portfolio-1{opacity:0.45;}.f-portfolio-1{fill:gray;}.g-portfolio-1{fill:#d3d3d3;}.h-portfolio-1{fill:#c1c1c1;}.i-portfolio-1{fill:#a4a4a4;}.j-portfolio-1{clip-path:url(#b-portfolio-1);}.k-portfolio-1{fill:#e40032;}.l-portfolio-1{stroke:#001f5f;stroke-miterlimit:10;stroke-width:0.942px;}.m-portfolio-1,.n-portfolio-1{fill:#001f5f;}.m-portfolio-1{font-size:46px;font-family:'Kiona-Bold';}.m-portfolio-1,.s-portfolio-1,.v-portfolio-1{font-weight:700;}.o-portfolio-1{font-size:16px;font-family:Silka-Medium, Silka;font-weight:500;}.p-portfolio-1{clip-path:url(#c-portfolio-1);}.q-portfolio-1{opacity:0.5;}.r-portfolio-1{fill:url(#f-portfolio-1);}.s-portfolio-1,.v-portfolio-1{fill:#182856;font-family:Silka-Bold, Silka;}.s-portfolio-1{font-size:9px;}.t-portfolio-1{fill:url(#i-portfolio-1);}.u-portfolio-1{fill:url(#l-portfolio-1);}.v-portfolio-1{font-size:13px;}.w-portfolio-1{fill:#c7c7cc;}.x-portfolio-1{opacity:0.36;mix-blend-mode:multiply;isolation:isolate;fill:url(#q-portfolio-1);}.y-portfolio-1{filter:url(#o-portfolio-1);}.z-portfolio-1{filter:url(#m-portfolio-1);}.aa-portfolio-1{filter:url(#j-portfolio-1);}.ab-portfolio-1{filter:url(#g-portfolio-1);}.ac-portfolio-1{filter:url(#d-portfolio-1);}"
							}
						</style>
						<clipPath id="a-portfolio-1">
							<rect
								className="a-portfolio-1"
								width={575.68}
								height={493.047}
							/>
						</clipPath>
						<clipPath id="b-portfolio-1">
							<rect
								className="b-portfolio-1"
								width={403.527}
								height={960}
							/>
						</clipPath>
						<clipPath id="c-portfolio-1">
							<rect
								className="c-portfolio-1"
								width={613}
								height={502}
								transform="translate(0)"
							/>
						</clipPath>
						<filter
							id="d-portfolio-1"
							x={53.754}
							y={311.543}
							width={162.484}
							height={303.272}
							filterUnits="userSpaceOnUse">
							<feOffset dy={3} />
							<feGaussianBlur stdDeviation={3} result="e" />
							<feFlood floodOpacity={0.161} />
							<feComposite operator="in" in2="e" />
							<feComposite in="SourceGraphic" />
						</filter>
						<pattern
							id="f-portfolio-1"
							width={1}
							height={1}
							patternTransform="translate(578 344.068) rotate(-180)"
							viewBox="0 2.304 140.722 167.426">
							<image
								preserveAspectRatio="none"
								width={258}
								height={172.034}
								xlinkHref="/images/biomedico-movil.jpg"
							/>
						</pattern>
						<filter
							id="g-portfolio-1"
							x={411.911}
							y={311.543}
							width={162.484}
							height={303.272}
							filterUnits="userSpaceOnUse">
							<feOffset dy={3} />
							<feGaussianBlur stdDeviation={3} result="h" />
							<feFlood floodOpacity={0.161} />
							<feComposite operator="in" in2="h" />
							<feComposite in="SourceGraphic" />
						</filter>
						<pattern
							id="i-portfolio-1"
							width={1}
							height={1}
							patternTransform="translate(720.103 344.068) rotate(-180)"
							viewBox="0 3.64 132.23 157.323">
							<image
								preserveAspectRatio="none"
								width={170}
								height={172.034}
								xlinkHref="/images/services/Equipos-M.webp"
							/>
						</pattern>
						<filter
							id="j-portfolio-1"
							x={218.292}
							y={311.543}
							width={190.727}
							height={359.038}
							filterUnits="userSpaceOnUse">
							<feOffset dy={3} />
							<feGaussianBlur stdDeviation={3} result="k" />
							<feFlood floodOpacity={0.161} />
							<feComposite operator="in" in2="k" />
							<feComposite in="SourceGraphic" />
						</filter>
						<pattern
							id="l-portfolio-1"
							width={1}
							height={1}
							patternTransform="translate(617.065 411.327) rotate(-180)"
							viewBox="77.948 3.464 164.537 195.761">
							<image
								preserveAspectRatio="none"
								width={308.532}
								height={205.664}
								xlinkHref="/images/services/Medicamentos.webp"
							/>
						</pattern>
						<filter
							id="m-portfolio-1"
							x={352.992}
							y={716.931}
							width={113.008}
							height={63.069}
							filterUnits="userSpaceOnUse">
							<feOffset dy={3} />
							<feGaussianBlur stdDeviation={3} result="n" />
							<feFlood floodOpacity={0.6} />
							<feComposite operator="in" in2="n" />
							<feComposite in="SourceGraphic" />
						</filter>
						<filter
							id="o-portfolio-1"
							x={162}
							y={716.931}
							width={113.008}
							height={63.069}
							filterUnits="userSpaceOnUse">
							<feOffset dy={3} />
							<feGaussianBlur stdDeviation={3} result="p" />
							<feFlood floodOpacity={0.6} />
							<feComposite operator="in" in2="p" />
							<feComposite in="SourceGraphic" />
						</filter>
						<radialGradient
							id="q-portfolio-1"
							cx={0.5}
							cy={0.5}
							r={0.538}
							gradientTransform="translate(0 0.113) scale(1 0.774)"
							gradientUnits="objectBoundingBox">
							<stop offset={0} stopColor="#9e9e9e" />
							<stop offset={1} stopColor="gray" stopOpacity={0} />
						</radialGradient>
					</defs>
					<rect
						className="c-portfolio-1"
						width={418}
						height={958.42}
						transform="translate(106.084)"
					/>
					<g
						className="d-portfolio-1"
						transform="translate(27.244 466.953)">
						<g
							className="e-portfolio-1"
							transform="translate(-114.213 15.386)">
							<path
								className="f-portfolio-1"
								d="M.595,362.454,148.249,493.466l-.595-303.659L0,58.795Z"
								transform="translate(0 22.179)"
							/>
							<path
								className="g-portfolio-1"
								d="M92.335,153.923l.595,303.659h504.5l-.593-303.659Z"
								transform="translate(55.319 58.063)"
							/>
							<path
								className="h-portfolio-1"
								d="M407.824,189.807l.595,303.659L572.566,362.453l-.593-303.659Z"
								transform="translate(244.333 22.179)"
							/>
							<path
								className="i-portfolio-1"
								d="M413.255,0,0,80.973,147.654,211.987h504.5L816.3,80.973Z"
								transform="translate(0)"
							/>
						</g>
					</g>
					<g transform="translate(106.084)">
						<g className="j-portfolio-1">
							<path
								className="k-portfolio-1"
								d="M.527.471V75.179h113.05c28.766,0,55.243-28.481,71.55-74.708Z"
								transform="translate(0.063 0.123)"
							/>
							<path
								className="k-portfolio-1"
								d="M71.851,747.92V713.612c0-40.767-21.59-77.244-55.02-92.936l-16.3-8.3V610.8l16.811,8.555c33.889,15.909,55.787,52.906,55.787,94.253V747.92Z"
								transform="translate(0.063 212.08)"
							/>
							<path
								className="l-portfolio-1"
								d="M.471.471V96.646H129.562c32.848,0,63.081-36.665,81.7-96.175Z"
								transform="translate(0.056 0.123)"
							/>
						</g>
					</g>
					<text
						className="m-portfolio-1"
						transform="translate(320 165.842)">
						<tspan x={-140.3} y={46}>
							{t('Portafolio')}
						</tspan>
					</text>
					<g transform="translate(316.562 869.166)" onClick={onClose}>
						<path
							className="n-portfolio-1"
							d="M207.522,145.656V54.822H80.435C48.1,54.822,18.333,89.451,0,145.656Z"
							transform="translate(0 -54.822)"
						/>
						<g transform="translate(90.438 35.798)">
							<path
								className="c-portfolio-1"
								d="M0,0V19.012L16.462,9.505,8.6,4.965Z"
								transform="translate(16.462 19.012) rotate(180)"
							/>
							<text
								className="o-portfolio-1"
								transform="translate(72.852 15.238)">
								<tspan x={-46.928} y={0}>
									{t('Volver')}
								</tspan>
							</text>
						</g>
					</g>
					<g transform="translate(0 284)">
						<g className="p-portfolio-1" transform="translate(0)">
							<g transform="translate(62.754 33.544)">
								<g className="q-portfolio-1">
									<g transform="translate(0)">
										<g
											className="ac-portfolio-1"
											transform="matrix(1, 0, 0, 1, -62.75, -317.54)">
											<rect
												className="c-portfolio-1"
												width={144.484}
												height={285.272}
												rx={21}
												transform="translate(62.75 317.54)"
											/>
										</g>
										<path
											className="r-portfolio-1"
											d="M0,0V89.866H0q0,.033,0,.066v65.319c0,9.269,7.045,16.783,15.735,16.783H128.86c8.69,0,15.735-7.514,15.735-16.783V89.932l-.028-.066h.028L126.061,28.877C120.749,11.4,108.218,0,94.317,0Z"
											transform="translate(144.595 172.034) rotate(180)"
										/>
									</g>
									<text
										className="s-portfolio-1"
										transform="translate(72.297 208.235)">
										<tspan
											x={
												selectedLanguage === 'es'
													? -42.923
													: -18.923
											}
											y={0}>
											{t('Mantenimiento')}
										</tspan>
										<tspan
											x={
												selectedLanguage === 'es'
													? -27.747
													: -22.747
											}
											y={10}>
											{t('biomédico_2')}
										</tspan>
									</text>
								</g>
								<g
									className="q-portfolio-1"
									transform="translate(358.157)">
									<g transform="translate(0)">
										<g
											className="ab-portfolio-1"
											transform="matrix(1, 0, 0, 1, -420.91, -317.54)">
											<rect
												className="c-portfolio-1"
												width={144.484}
												height={285.272}
												rx={21}
												transform="translate(420.91 317.54)"
											/>
										</g>
										<path
											className="t-portfolio-1"
											d="M0,0V89.866H0q0,.033,0,.066v65.319c0,9.269,7.045,16.783,15.735,16.783H128.86c8.69,0,15.735-7.514,15.735-16.783V89.932l-.028-.066h.028L126.061,28.877C120.749,11.4,108.218,0,94.317,0Z"
											transform="translate(144.595 172.034) rotate(180)"
										/>
									</g>
									<text
										className="s-portfolio-1"
										transform="translate(71.47 211.235)">
										<tspan
											x={
												selectedLanguage === 'es'
													? -28.985
													: -39.451
											}
											y={
												selectedLanguage === 'es'
													? 0
													: 20
											}>
											{t('Equipos médicos')}
										</tspan>
									</text>
								</g>
								<a href="/productos/medicamentos">
									<g transform="translate(164.538)">
										<g
											className="aa-portfolio-1"
											transform="matrix(1, 0, 0, 1, -227.29, -317.54)">
											<rect
												className="c-portfolio-1"
												width={172.727}
												height={341.038}
												rx={35}
												transform="translate(227.29 317.54)"
											/>
										</g>
										<path
											className="u-portfolio-1"
											d="M0,0V107.433H0q0,.04,0,.079V185.6c0,11.081,8.422,20.064,18.811,20.064H154.049c10.389,0,18.811-8.983,18.811-20.064V107.512l-.034-.079h.034L150.7,34.522C144.353,13.628,129.373,0,112.754,0Z"
											transform="translate(172.893 205.664) rotate(180)"
										/>
										<text
											className="v-portfolio-1"
											transform="translate(100.446 268.095)">
											<tspan
												x={
													selectedLanguage === 'es'
														? -60.417
														: -50.417
												}
												y={0}>
												{t('Medicamentos')}
											</tspan>
										</text>
									</g>
								</a>
							</g>
						</g>
						<g
							transform="translate(328.987 423.274)"
							onClick={() => setView(1)}>
							<g
								className="z-portfolio-1"
								transform="matrix(1, 0, 0, 1, -328.99, -707.27)">
								<path
									className="w-portfolio-1"
									d="M95.008,0H53.282a52.209,52.209,0,0,0-48.6,33.144L0,45.069H40.014A54.95,54.95,0,0,0,91.441,9.477Z"
									transform="translate(361.99 722.93)"
								/>
							</g>
							<path
								className="c-portfolio-1"
								d="M23.394,0V5.743H0V8.625H23.394v5.742l12.44-7.184Z"
								transform="translate(62.591 31.008)"
							/>
						</g>
						<g
							transform="translate(171 438.931)"
							onClick={() => {
								setView(10)
							}}>
							<g
								className="y-portfolio-1"
								transform="matrix(1, 0, 0, 1, -171, -722.93)">
								<path
									className="w-portfolio-1"
									d="M0,0H41.727a52.21,52.21,0,0,1,48.6,33.144l4.678,11.925H54.994A54.95,54.95,0,0,1,3.567,9.477Z"
									transform="translate(171 722.93)"
								/>
							</g>
							<path
								className="c-portfolio-1"
								d="M12.441,0V5.743H35.834V8.625H12.441v5.742L0,7.183Z"
								transform="translate(29.587 15.351)"
							/>
						</g>
						<ellipse
							className="x-portfolio-1"
							cx={97.5}
							cy={8}
							rx={97.5}
							ry={8}
							transform="translate(228.381 385.204)"
						/>
						<ellipse
							className="x-portfolio-1"
							cx={67.5}
							cy={6}
							rx={67.5}
							ry={6}
							transform="translate(70.743 328.917)"
						/>
						<ellipse
							className="x-portfolio-1"
							cx={67.5}
							cy={6}
							rx={67.5}
							ry={6}
							transform="translate(426.788 328.917)"
						/>
					</g>
				</svg>
			) : view === 1 ? (
				<svg
					viewBox="106 0 414 960"
					preserveAspectRatio="none"
					width="100%"
					height="100vh"
					onTouchEnd={(e) => {
						if (e.nativeEvent.changedTouches[0].clientX > initial) {
							setView((prevState: number) =>
								prevState === 0 ? 10 : prevState - 1
							)
						} else if (
							e.nativeEvent.changedTouches[0].clientX < initial
						) {
							setView((prevState: number) =>
								prevState === 10 ? 0 : prevState + 1
							)
						}
					}}
					onTouchStart={(e) =>
						setInitial(e.nativeEvent.changedTouches[0].clientX)
					}>
					<defs>
						<style>
							{
								".a-portfolio-1{fill:#d9dae4;}.b-portfolio-1,.l-portfolio-1{fill:none;}.c-portfolio-1,.o-portfolio-1{fill:#fff;}.d-portfolio-1{clip-path:url(#a-portfolio-1);}.e-portfolio-1{opacity:0.45;}.f-portfolio-1{fill:gray;}.g-portfolio-1{fill:#d3d3d3;}.h-portfolio-1{fill:#c1c1c1;}.i-portfolio-1{fill:#a4a4a4;}.j-portfolio-1{clip-path:url(#b-portfolio-1);}.k-portfolio-1{fill:#e40032;}.l-portfolio-1{stroke:#001f5f;stroke-miterlimit:10;stroke-width:0.942px;}.m-portfolio-1,.n-portfolio-1{fill:#001f5f;}.m-portfolio-1{font-size:46px;font-family:'Kiona-Bold';}.m-portfolio-1,.s-portfolio-1,.v-portfolio-1{font-weight:700;}.o-portfolio-1{font-size:16px;font-family:Silka-Medium, Silka;font-weight:500;}.p-portfolio-1{clip-path:url(#c-portfolio-1);}.q-portfolio-1{opacity:0.5;}.r-portfolio-1{fill:url(#f-portfolio-1);}.s-portfolio-1,.v-portfolio-1{fill:#182856;font-family:Silka-Bold, Silka;}.s-portfolio-1{font-size:9px;}.t-portfolio-1{fill:url(#i-portfolio-1);}.u-portfolio-1{fill:url(#l-portfolio-1);}.v-portfolio-1{font-size:13px;}.w-portfolio-1{fill:#c7c7cc;}.x-portfolio-1{opacity:0.36;mix-blend-mode:multiply;isolation:isolate;fill:url(#q-portfolio-1);}.y-portfolio-1{filter:url(#o-portfolio-1);}.z-portfolio-1{filter:url(#m-portfolio-1);}.aa-portfolio-1{filter:url(#j-portfolio-1);}.ab-portfolio-1{filter:url(#g-portfolio-1);}.ac-portfolio-1{filter:url(#d-portfolio-1);}"
							}
						</style>
						<clipPath id="a-portfolio-1">
							<rect
								className="a-portfolio-1"
								width={575.68}
								height={493.047}
							/>
						</clipPath>
						<clipPath id="b-portfolio-1">
							<rect
								className="b-portfolio-1"
								width={403.527}
								height={960}
							/>
						</clipPath>
						<clipPath id="c-portfolio-1">
							<rect
								className="c-portfolio-1"
								width={613}
								height={502}
								transform="translate(0)"
							/>
						</clipPath>
						<filter
							id="d-portfolio-1"
							x={53.754}
							y={311.543}
							width={162.484}
							height={303.272}
							filterUnits="userSpaceOnUse">
							<feOffset dy={3} />
							<feGaussianBlur stdDeviation={3} result="e" />
							<feFlood floodOpacity={0.161} />
							<feComposite operator="in" in2="e" />
							<feComposite in="SourceGraphic" />
						</filter>
						<pattern
							id="f-portfolio-1"
							width={1}
							height={1}
							patternTransform="translate(578 344.068) rotate(-180)"
							viewBox="0 2.304 140.722 167.426">
							<image
								preserveAspectRatio="none"
								width={200}
								height={172.034}
								xlinkHref="/images/services/Medicamentos.webp"
							/>
						</pattern>
						<filter
							id="g-portfolio-1"
							x={411.911}
							y={311.543}
							width={162.484}
							height={303.272}
							filterUnits="userSpaceOnUse">
							<feOffset dy={3} />
							<feGaussianBlur stdDeviation={3} result="h" />
							<feFlood floodOpacity={0.161} />
							<feComposite operator="in" in2="h" />
							<feComposite in="SourceGraphic" />
						</filter>
						<pattern
							id="i-portfolio-1"
							width={1}
							height={1}
							patternTransform="translate(720.103 344.068) rotate(-180)"
							viewBox="0 3.64 132.23 157.323">
							<image
								preserveAspectRatio="none"
								width={170.051}
								height={172.034}
								xlinkHref="/images/services/Dispositivos-Q.webp"
							/>
						</pattern>
						<filter
							id="j-portfolio-1"
							x={218.292}
							y={311.543}
							width={190.727}
							height={359.038}
							filterUnits="userSpaceOnUse">
							<feOffset dy={3} />
							<feGaussianBlur stdDeviation={3} result="k" />
							<feFlood floodOpacity={0.161} />
							<feComposite operator="in" in2="k" />
							<feComposite in="SourceGraphic" />
						</filter>
						<pattern
							id="l-portfolio-1"
							width={1}
							height={1}
							patternTransform="translate(520 411.327) rotate(-180)"
							viewBox="0 3.464 164.537 195.761">
							<image
								preserveAspectRatio="none"
								width={170}
								height={205.664}
								xlinkHref="/images/services/Equipos-M.webp"
							/>
						</pattern>
						<filter
							id="m-portfolio-1"
							x={352.992}
							y={716.931}
							width={113.008}
							height={63.069}
							filterUnits="userSpaceOnUse">
							<feOffset dy={3} />
							<feGaussianBlur stdDeviation={3} result="n" />
							<feFlood floodOpacity={0.6} />
							<feComposite operator="in" in2="n" />
							<feComposite in="SourceGraphic" />
						</filter>
						<filter
							id="o-portfolio-1"
							x={162}
							y={716.931}
							width={113.008}
							height={63.069}
							filterUnits="userSpaceOnUse">
							<feOffset dy={3} />
							<feGaussianBlur stdDeviation={3} result="p" />
							<feFlood floodOpacity={0.6} />
							<feComposite operator="in" in2="p" />
							<feComposite in="SourceGraphic" />
						</filter>
						<radialGradient
							id="q-portfolio-1"
							cx={0.5}
							cy={0.5}
							r={0.538}
							gradientTransform="translate(0 0.113) scale(1 0.774)"
							gradientUnits="objectBoundingBox">
							<stop offset={0} stopColor="#9e9e9e" />
							<stop offset={1} stopColor="gray" stopOpacity={0} />
						</radialGradient>
					</defs>
					<rect
						className="c-portfolio-1"
						width={418}
						height={958.42}
						transform="translate(106.084)"
					/>
					<g
						className="d-portfolio-1"
						transform="translate(27.244 466.953)">
						<g
							className="e-portfolio-1"
							transform="translate(-114.213 15.386)">
							<path
								className="f-portfolio-1"
								d="M.595,362.454,148.249,493.466l-.595-303.659L0,58.795Z"
								transform="translate(0 22.179)"
							/>
							<path
								className="g-portfolio-1"
								d="M92.335,153.923l.595,303.659h504.5l-.593-303.659Z"
								transform="translate(55.319 58.063)"
							/>
							<path
								className="h-portfolio-1"
								d="M407.824,189.807l.595,303.659L572.566,362.453l-.593-303.659Z"
								transform="translate(244.333 22.179)"
							/>
							<path
								className="i-portfolio-1"
								d="M413.255,0,0,80.973,147.654,211.987h504.5L816.3,80.973Z"
								transform="translate(0)"
							/>
						</g>
					</g>
					<g transform="translate(106.084)">
						<g className="j-portfolio-1">
							<path
								className="k-portfolio-1"
								d="M.527.471V75.179h113.05c28.766,0,55.243-28.481,71.55-74.708Z"
								transform="translate(0.063 0.123)"
							/>
							<path
								className="k-portfolio-1"
								d="M71.851,747.92V713.612c0-40.767-21.59-77.244-55.02-92.936l-16.3-8.3V610.8l16.811,8.555c33.889,15.909,55.787,52.906,55.787,94.253V747.92Z"
								transform="translate(0.063 212.08)"
							/>
							<path
								className="l-portfolio-1"
								d="M.471.471V96.646H129.562c32.848,0,63.081-36.665,81.7-96.175Z"
								transform="translate(0.056 0.123)"
							/>
						</g>
					</g>
					<text
						className="m-portfolio-1"
						transform="translate(320 165.842)">
						<tspan x={-140.3} y={46}>
							{t('Portafolio ')}
						</tspan>
					</text>
					<g transform="translate(316.562 869.166)" onClick={onClose}>
						<path
							className="n-portfolio-1"
							d="M207.522,145.656V54.822H80.435C48.1,54.822,18.333,89.451,0,145.656Z"
							transform="translate(0 -54.822)"
						/>
						<g transform="translate(90.438 35.798)">
							<path
								className="c-portfolio-1"
								d="M0,0V19.012L16.462,9.505,8.6,4.965Z"
								transform="translate(16.462 19.012) rotate(180)"
							/>
							<text
								className="o-portfolio-1"
								transform="translate(72.852 15.238)">
								<tspan x={-46.928} y={0}>
									{t('Volver')}
								</tspan>
							</text>
						</g>
					</g>
					<g transform="translate(0 284)">
						<g className="p-portfolio-1" transform="translate(0)">
							<g transform="translate(62.754 33.544)">
								<g className="q-portfolio-1">
									<g transform="translate(0)">
										<g
											className="ac-portfolio-1"
											transform="matrix(1, 0, 0, 1, -62.75, -317.54)">
											<rect
												className="c-portfolio-1"
												width={144.484}
												height={285.272}
												rx={21}
												transform="translate(62.75 317.54)"
											/>
										</g>
										<path
											className="r-portfolio-1"
											d="M0,0V89.866H0q0,.033,0,.066v65.319c0,9.269,7.045,16.783,15.735,16.783H128.86c8.69,0,15.735-7.514,15.735-16.783V89.932l-.028-.066h.028L126.061,28.877C120.749,11.4,108.218,0,94.317,0Z"
											transform="translate(144.595 172.034) rotate(180)"
										/>
									</g>
									<text
										className="s-portfolio-1"
										transform="translate(72.297 208.235)">
										<tspan
											x={
												selectedLanguage === 'es'
													? -33.269
													: -33.269
											}
											y={
												selectedLanguage === 'es'
													? 0
													: 20
											}>
											{t('Medicamentos')}
										</tspan>
									</text>
								</g>
								<g
									className="q-portfolio-1"
									transform="translate(358.157)">
									<g transform="translate(0)">
										<g
											className="ab-portfolio-1"
											transform="matrix(1, 0, 0, 1, -420.91, -317.54)">
											<rect
												className="c-portfolio-1"
												width={144.484}
												height={285.272}
												rx={21}
												transform="translate(420.91 317.54)"
											/>
										</g>
										<path
											className="t-portfolio-1"
											d="M0,0V89.866H0q0,.033,0,.066v65.319c0,9.269,7.045,16.783,15.735,16.783H128.86c8.69,0,15.735-7.514,15.735-16.783V89.932l-.028-.066h.028L126.061,28.877C120.749,11.4,108.218,0,94.317,0Z"
											transform="translate(144.595 172.034) rotate(180)"
										/>
									</g>
									<text
										className="s-portfolio-1"
										transform="translate(71.47 211.235)">
										<tspan
											x={
												selectedLanguage === 'es'
													? -27.112
													: -39.162
											}
											y={0}>
											{t('Dispositivos')}
										</tspan>
										<tspan
											x={
												selectedLanguage === 'es'
													? -43.843
													: -11.329
											}
											y={9}>
											{t('médico-quirúrgicos')}
										</tspan>
									</text>
								</g>
								<a href="/productos/equipos-medicos">
									<g transform="translate(164.538)">
										<g
											className="aa-portfolio-1"
											transform="matrix(1, 0, 0, 1, -227.29, -317.54)">
											<rect
												className="c-portfolio-1"
												width={172.727}
												height={341.038}
												rx={35}
												transform="translate(227.29 317.54)"
											/>
										</g>
										<path
											className="u-portfolio-1"
											d="M0,0V107.433H0q0,.04,0,.079V185.6c0,11.081,8.422,20.064,18.811,20.064H154.049c10.389,0,18.811-8.983,18.811-20.064V107.512l-.034-.079h.034L150.7,34.522C144.353,13.628,129.373,0,112.754,0Z"
											transform="translate(172.893 205.664) rotate(180)"
										/>
										<text
											className="v-portfolio-1"
											transform="translate(86.446 268.095)">
											<tspan
												x={
													selectedLanguage === 'es'
														? -54.451
														: -62.451
												}
												y={0}>
												{t('Equipos médicos')}
											</tspan>
										</text>
									</g>
								</a>
							</g>
						</g>
						<g
							transform="translate(328.987 423.274)"
							onClick={() => setView(2)}>
							<g
								className="z-portfolio-1"
								transform="matrix(1, 0, 0, 1, -328.99, -707.27)">
								<path
									className="w-portfolio-1"
									d="M95.008,0H53.282a52.209,52.209,0,0,0-48.6,33.144L0,45.069H40.014A54.95,54.95,0,0,0,91.441,9.477Z"
									transform="translate(361.99 722.93)"
								/>
							</g>
							<path
								className="c-portfolio-1"
								d="M23.394,0V5.743H0V8.625H23.394v5.742l12.44-7.184Z"
								transform="translate(62.591 31.008)"
							/>
						</g>
						<g
							transform="translate(171 438.931)"
							onClick={() => setView(0)}>
							<g
								className="y-portfolio-1"
								transform="matrix(1, 0, 0, 1, -171, -722.93)">
								<path
									className="w-portfolio-1"
									d="M0,0H41.727a52.21,52.21,0,0,1,48.6,33.144l4.678,11.925H54.994A54.95,54.95,0,0,1,3.567,9.477Z"
									transform="translate(171 722.93)"
								/>
							</g>
							<path
								className="c-portfolio-1"
								d="M12.441,0V5.743H35.834V8.625H12.441v5.742L0,7.183Z"
								transform="translate(29.587 15.351)"
							/>
						</g>
						<ellipse
							className="x-portfolio-1"
							cx={97.5}
							cy={8}
							rx={97.5}
							ry={8}
							transform="translate(228.381 385.204)"
						/>
						<ellipse
							className="x-portfolio-1"
							cx={67.5}
							cy={6}
							rx={67.5}
							ry={6}
							transform="translate(70.743 328.917)"
						/>
						<ellipse
							className="x-portfolio-1"
							cx={67.5}
							cy={6}
							rx={67.5}
							ry={6}
							transform="translate(426.788 328.917)"
						/>
					</g>
				</svg>
			) : view === 2 ? (
				<svg
					viewBox="106 0 414 960"
					preserveAspectRatio="none"
					width="100%"
					height="100vh"
					onTouchEnd={(e) => {
						if (e.nativeEvent.changedTouches[0].clientX > initial) {
							setView((prevState: number) =>
								prevState === 0 ? 10 : prevState - 1
							)
						} else if (
							e.nativeEvent.changedTouches[0].clientX < initial
						) {
							setView((prevState: number) =>
								prevState === 10 ? 0 : prevState + 1
							)
						}
					}}
					onTouchStart={(e) =>
						setInitial(e.nativeEvent.changedTouches[0].clientX)
					}>
					<defs>
						<style>
							{
								".a-portfolio-1{fill:#d9dae4;}.b-portfolio-1,.l-portfolio-1{fill:none;}.c-portfolio-1,.o-portfolio-1{fill:#fff;}.d-portfolio-1{clip-path:url(#a-portfolio-1);}.e-portfolio-1{opacity:0.45;}.f-portfolio-1{fill:gray;}.g-portfolio-1{fill:#d3d3d3;}.h-portfolio-1{fill:#c1c1c1;}.i-portfolio-1{fill:#a4a4a4;}.j-portfolio-1{clip-path:url(#b-portfolio-1);}.k-portfolio-1{fill:#e40032;}.l-portfolio-1{stroke:#001f5f;stroke-miterlimit:10;stroke-width:0.942px;}.m-portfolio-1,.n-portfolio-1{fill:#001f5f;}.m-portfolio-1{font-size:46px;font-family:'Kiona-Bold';}.m-portfolio-1,.s-portfolio-1,.v-portfolio-1{font-weight:700;}.o-portfolio-1{font-size:16px;font-family:Silka-Medium, Silka;font-weight:500;}.p-portfolio-1{clip-path:url(#c-portfolio-1);}.q-portfolio-1{opacity:0.5;}.r-portfolio-1{fill:url(#f-portfolio-1);}.s-portfolio-1,.v-portfolio-1{fill:#182856;font-family:Silka-Bold, Silka;}.s-portfolio-1{font-size:9px;}.t-portfolio-1{fill:url(#i-portfolio-1);}.u-portfolio-1{fill:url(#l-portfolio-1);}.v-portfolio-1{font-size:13px;}.w-portfolio-1{fill:#c7c7cc;}.x-portfolio-1{opacity:0.36;mix-blend-mode:multiply;isolation:isolate;fill:url(#q-portfolio-1);}.y-portfolio-1{filter:url(#o-portfolio-1);}.z-portfolio-1{filter:url(#m-portfolio-1);}.aa-portfolio-1{filter:url(#j-portfolio-1);}.ab-portfolio-1{filter:url(#g-portfolio-1);}.ac-portfolio-1{filter:url(#d-portfolio-1);}"
							}
						</style>
						<clipPath id="a-portfolio-1">
							<rect
								className="a-portfolio-1"
								width={575.68}
								height={493.047}
							/>
						</clipPath>
						<clipPath id="b-portfolio-1">
							<rect
								className="b-portfolio-1"
								width={403.527}
								height={960}
							/>
						</clipPath>
						<clipPath id="c-portfolio-1">
							<rect
								className="c-portfolio-1"
								width={613}
								height={502}
								transform="translate(0)"
							/>
						</clipPath>
						<filter
							id="d-portfolio-1"
							x={53.754}
							y={311.543}
							width={162.484}
							height={303.272}
							filterUnits="userSpaceOnUse">
							<feOffset dy={3} />
							<feGaussianBlur stdDeviation={3} result="e" />
							<feFlood floodOpacity={0.161} />
							<feComposite operator="in" in2="e" />
							<feComposite in="SourceGraphic" />
						</filter>
						<pattern
							id="f-portfolio-1"
							width={1}
							height={1}
							patternTransform="translate(578 344.068) rotate(-180)"
							viewBox="0 2.304 140.722 167.426">
							<image
								preserveAspectRatio="none"
								width={140}
								height={172.034}
								xlinkHref="/images/services/Equipos-M.webp"
							/>
						</pattern>
						<filter
							id="g-portfolio-1"
							x={411.911}
							y={311.543}
							width={162.484}
							height={303.272}
							filterUnits="userSpaceOnUse">
							<feOffset dy={3} />
							<feGaussianBlur stdDeviation={3} result="h" />
							<feFlood floodOpacity={0.161} />
							<feComposite operator="in" in2="h" />
							<feComposite in="SourceGraphic" />
						</filter>
						<pattern
							id="i-portfolio-1"
							width={1}
							height={1}
							patternTransform="translate(480 344.068) rotate(-180)"
							viewBox="0 3.64 132.23 157.323">
							<image
								preserveAspectRatio="none"
								width={258.051}
								height={172.034}
								xlinkHref="/images/services/Ortopedia.webp"
							/>
						</pattern>
						<filter
							id="j-portfolio-1"
							x={218.292}
							y={311.543}
							width={190.727}
							height={359.038}
							filterUnits="userSpaceOnUse">
							<feOffset dy={3} />
							<feGaussianBlur stdDeviation={3} result="k" />
							<feFlood floodOpacity={0.161} />
							<feComposite operator="in" in2="k" />
							<feComposite in="SourceGraphic" />
						</filter>
						<pattern
							id="l-portfolio-1"
							width={1}
							height={1}
							patternTransform="translate(517.065 411.327) rotate(-180)"
							viewBox="0 3.464 164.537 195.761">
							<image
								preserveAspectRatio="xMidYMid slice"
								width={170}
								height={205.664}
								xlinkHref="/images/services/Dispositivos-Q.webp"
							/>
						</pattern>
						<filter
							id="m-portfolio-1"
							x={352.992}
							y={716.931}
							width={113.008}
							height={63.069}
							filterUnits="userSpaceOnUse">
							<feOffset dy={3} />
							<feGaussianBlur stdDeviation={3} result="n" />
							<feFlood floodOpacity={0.6} />
							<feComposite operator="in" in2="n" />
							<feComposite in="SourceGraphic" />
						</filter>
						<filter
							id="o-portfolio-1"
							x={162}
							y={716.931}
							width={113.008}
							height={63.069}
							filterUnits="userSpaceOnUse">
							<feOffset dy={3} />
							<feGaussianBlur stdDeviation={3} result="p" />
							<feFlood floodOpacity={0.6} />
							<feComposite operator="in" in2="p" />
							<feComposite in="SourceGraphic" />
						</filter>
						<radialGradient
							id="q-portfolio-1"
							cx={0.5}
							cy={0.5}
							r={0.538}
							gradientTransform="translate(0 0.113) scale(1 0.774)"
							gradientUnits="objectBoundingBox">
							<stop offset={0} stopColor="#9e9e9e" />
							<stop offset={1} stopColor="gray" stopOpacity={0} />
						</radialGradient>
					</defs>
					<rect
						className="c-portfolio-1"
						width={418}
						height={958.42}
						transform="translate(106.084)"
					/>
					<g
						className="d-portfolio-1"
						transform="translate(27.244 466.953)">
						<g
							className="e-portfolio-1"
							transform="translate(-114.213 15.386)">
							<path
								className="f-portfolio-1"
								d="M.595,362.454,148.249,493.466l-.595-303.659L0,58.795Z"
								transform="translate(0 22.179)"
							/>
							<path
								className="g-portfolio-1"
								d="M92.335,153.923l.595,303.659h504.5l-.593-303.659Z"
								transform="translate(55.319 58.063)"
							/>
							<path
								className="h-portfolio-1"
								d="M407.824,189.807l.595,303.659L572.566,362.453l-.593-303.659Z"
								transform="translate(244.333 22.179)"
							/>
							<path
								className="i-portfolio-1"
								d="M413.255,0,0,80.973,147.654,211.987h504.5L816.3,80.973Z"
								transform="translate(0)"
							/>
						</g>
					</g>
					<g transform="translate(106.084)">
						<g className="j-portfolio-1">
							<path
								className="k-portfolio-1"
								d="M.527.471V75.179h113.05c28.766,0,55.243-28.481,71.55-74.708Z"
								transform="translate(0.063 0.123)"
							/>
							<path
								className="k-portfolio-1"
								d="M71.851,747.92V713.612c0-40.767-21.59-77.244-55.02-92.936l-16.3-8.3V610.8l16.811,8.555c33.889,15.909,55.787,52.906,55.787,94.253V747.92Z"
								transform="translate(0.063 212.08)"
							/>
							<path
								className="l-portfolio-1"
								d="M.471.471V96.646H129.562c32.848,0,63.081-36.665,81.7-96.175Z"
								transform="translate(0.056 0.123)"
							/>
						</g>
					</g>
					<text
						className="m-portfolio-1"
						transform="translate(320 165.842)">
						<tspan x={-140.3} y={46}>
							{t('Portafolio ')}
						</tspan>
					</text>
					<g transform="translate(316.562 869.166)" onClick={onClose}>
						<path
							className="n-portfolio-1"
							d="M207.522,145.656V54.822H80.435C48.1,54.822,18.333,89.451,0,145.656Z"
							transform="translate(0 -54.822)"
						/>
						<g transform="translate(90.438 35.798)">
							<path
								className="c-portfolio-1"
								d="M0,0V19.012L16.462,9.505,8.6,4.965Z"
								transform="translate(16.462 19.012) rotate(180)"
							/>
							<text
								className="o-portfolio-1"
								transform="translate(72.852 15.238)">
								<tspan x={-46.928} y={0}>
									{t('Volver')}
								</tspan>
							</text>
						</g>
					</g>
					<g transform="translate(0 284)">
						<g className="p-portfolio-1" transform="translate(0)">
							<g transform="translate(62.754 33.544)">
								<a href="/productos/equipos-medicos">
									<g className="q-portfolio-1">
										<g transform="translate(0)">
											<g
												className="ac-portfolio-1"
												transform="matrix(1, 0, 0, 1, -62.75, -317.54)">
												<rect
													className="c-portfolio-1"
													width={144.484}
													height={285.272}
													rx={21}
													transform="translate(62.75 317.54)"
												/>
											</g>
											<path
												className="r-portfolio-1"
												d="M0,0V89.866H0q0,.033,0,.066v65.319c0,9.269,7.045,16.783,15.735,16.783H128.86c8.69,0,15.735-7.514,15.735-16.783V89.932l-.028-.066h.028L126.061,28.877C120.749,11.4,108.218,0,94.317,0Z"
												transform="translate(144.595 172.034) rotate(180)"
											/>
										</g>
										<text
											className="s-portfolio-1"
											transform="translate(72.297 208.235)">
											<tspan
												x={-37.696}
												y={
													selectedLanguage === 'es'
														? 0
														: 20
												}>
												{t('Equipos médicos')}
											</tspan>
										</text>
									</g>
								</a>
								<g
									className="q-portfolio-1"
									transform="translate(358.157)">
									<g transform="translate(0)">
										<g
											className="ab-portfolio-1"
											transform="matrix(1, 0, 0, 1, -420.91, -317.54)">
											<rect
												className="c-portfolio-1"
												width={144.484}
												height={285.272}
												rx={21}
												transform="translate(420.91 317.54)"
											/>
										</g>
										<path
											className="t-portfolio-1"
											d="M0,0V89.866H0q0,.033,0,.066v65.319c0,9.269,7.045,16.783,15.735,16.783H128.86c8.69,0,15.735-7.514,15.735-16.783V89.932l-.028-.066h.028L126.061,28.877C120.749,11.4,108.218,0,94.317,0Z"
											transform="translate(144.595 172.034) rotate(180)"
										/>
									</g>
									<text
										className="s-portfolio-1"
										transform="translate(71.47 211.235)">
										<tspan
											x={
												selectedLanguage === 'es'
													? -23.251
													: -23.055
											}
											y={
												selectedLanguage === 'es'
													? 0
													: 20
											}>
											{t('Ortopedia')}
										</tspan>
									</text>
								</g>
								<a href="/productos/dispositivos-medico-quirurgicos">
									<g transform="translate(164.538)">
										<g
											className="aa-portfolio-1"
											transform="matrix(1, 0, 0, 1, -227.29, -317.54)">
											<rect
												className="c-portfolio-1"
												width={172.727}
												height={341.038}
												rx={35}
												transform="translate(227.29 317.54)"
											/>
										</g>
										<path
											className="u-portfolio-1"
											d="M0,0V107.433H0q0,.04,0,.079V185.6c0,11.081,8.422,20.064,18.811,20.064H154.049c10.389,0,18.811-8.983,18.811-20.064V107.512l-.034-.079h.034L150.7,34.522C144.353,13.628,129.373,0,112.754,0Z"
											transform="translate(172.893 205.664) rotate(180)"
										/>
										<text
											className="v-portfolio-1"
											transform="translate(86.446 268.095)">
											<tspan
												x={
													selectedLanguage === 'es'
														? -39.162
														: -54.162
												}
												y={0}>
												{t('Dispositivos')}
											</tspan>
											<tspan
												x={
													selectedLanguage === 'es'
														? -63.329
														: -22.329
												}
												y={14}>
												{t('médico-quirúrgicos')}
											</tspan>
										</text>
									</g>
								</a>
							</g>
						</g>
						<g
							transform="translate(328.987 423.274)"
							onClick={() => setView(3)}>
							<g
								className="z-portfolio-1"
								transform="matrix(1, 0, 0, 1, -328.99, -707.27)">
								<path
									className="w-portfolio-1"
									d="M95.008,0H53.282a52.209,52.209,0,0,0-48.6,33.144L0,45.069H40.014A54.95,54.95,0,0,0,91.441,9.477Z"
									transform="translate(361.99 722.93)"
								/>
							</g>
							<path
								className="c-portfolio-1"
								d="M23.394,0V5.743H0V8.625H23.394v5.742l12.44-7.184Z"
								transform="translate(62.591 31.008)"
							/>
						</g>
						<g
							transform="translate(171 438.931)"
							onClick={() => setView(1)}>
							<g
								className="y-portfolio-1"
								transform="matrix(1, 0, 0, 1, -171, -722.93)">
								<path
									className="w-portfolio-1"
									d="M0,0H41.727a52.21,52.21,0,0,1,48.6,33.144l4.678,11.925H54.994A54.95,54.95,0,0,1,3.567,9.477Z"
									transform="translate(171 722.93)"
								/>
							</g>
							<path
								className="c-portfolio-1"
								d="M12.441,0V5.743H35.834V8.625H12.441v5.742L0,7.183Z"
								transform="translate(29.587 15.351)"
							/>
						</g>
						<ellipse
							className="x-portfolio-1"
							cx={97.5}
							cy={8}
							rx={97.5}
							ry={8}
							transform="translate(228.381 385.204)"
						/>
						<ellipse
							className="x-portfolio-1"
							cx={67.5}
							cy={6}
							rx={67.5}
							ry={6}
							transform="translate(70.743 328.917)"
						/>
						<ellipse
							className="x-portfolio-1"
							cx={67.5}
							cy={6}
							rx={67.5}
							ry={6}
							transform="translate(426.788 328.917)"
						/>
					</g>
				</svg>
			) : view === 3 ? (
				<svg
					viewBox="106 0 414 960"
					preserveAspectRatio="none"
					width="100%"
					height="100vh"
					onTouchEnd={(e) => {
						if (e.nativeEvent.changedTouches[0].clientX > initial) {
							setView((prevState: number) =>
								prevState === 0 ? 10 : prevState - 1
							)
						} else if (
							e.nativeEvent.changedTouches[0].clientX < initial
						) {
							setView((prevState: number) =>
								prevState === 10 ? 0 : prevState + 1
							)
						}
					}}
					onTouchStart={(e) =>
						setInitial(e.nativeEvent.changedTouches[0].clientX)
					}>
					<defs>
						<style>
							{
								".a-portfolio-1{fill:#d9dae4;}.b-portfolio-1,.l-portfolio-1{fill:none;}.c-portfolio-1,.o-portfolio-1{fill:#fff;}.d-portfolio-1{clip-path:url(#a-portfolio-1);}.e-portfolio-1{opacity:0.45;}.f-portfolio-1{fill:gray;}.g-portfolio-1{fill:#d3d3d3;}.h-portfolio-1{fill:#c1c1c1;}.i-portfolio-1{fill:#a4a4a4;}.j-portfolio-1{clip-path:url(#b-portfolio-1);}.k-portfolio-1{fill:#e40032;}.l-portfolio-1{stroke:#001f5f;stroke-miterlimit:10;stroke-width:0.942px;}.m-portfolio-1,.n-portfolio-1{fill:#001f5f;}.m-portfolio-1{font-size:46px;font-family:'Kiona-Bold';}.m-portfolio-1,.s-portfolio-1,.v-portfolio-1{font-weight:700;}.o-portfolio-1{font-size:16px;font-family:Silka-Medium, Silka;font-weight:500;}.p-portfolio-1{clip-path:url(#c-portfolio-1);}.q-portfolio-1{opacity:0.5;}.r-portfolio-1{fill:url(#f-portfolio-1);}.s-portfolio-1,.v-portfolio-1{fill:#182856;font-family:Silka-Bold, Silka;}.s-portfolio-1{font-size:9px;}.t-portfolio-1{fill:url(#i-portfolio-1);}.u-portfolio-1{fill:url(#l-portfolio-1);}.v-portfolio-1{font-size:13px;}.w-portfolio-1{fill:#c7c7cc;}.x-portfolio-1{opacity:0.36;mix-blend-mode:multiply;isolation:isolate;fill:url(#q-portfolio-1);}.y-portfolio-1{filter:url(#o-portfolio-1);}.z-portfolio-1{filter:url(#m-portfolio-1);}.aa-portfolio-1{filter:url(#j-portfolio-1);}.ab-portfolio-1{filter:url(#g-portfolio-1);}.ac-portfolio-1{filter:url(#d-portfolio-1);}"
							}
						</style>
						<clipPath id="a-portfolio-1">
							<rect
								className="a-portfolio-1"
								width={575.68}
								height={493.047}
							/>
						</clipPath>
						<clipPath id="b-portfolio-1">
							<rect
								className="b-portfolio-1"
								width={403.527}
								height={960}
							/>
						</clipPath>
						<clipPath id="c-portfolio-1">
							<rect
								className="c-portfolio-1"
								width={613}
								height={502}
								transform="translate(0)"
							/>
						</clipPath>
						<filter
							id="d-portfolio-1"
							x={53.754}
							y={311.543}
							width={162.484}
							height={303.272}
							filterUnits="userSpaceOnUse">
							<feOffset dy={3} />
							<feGaussianBlur stdDeviation={3} result="e" />
							<feFlood floodOpacity={0.161} />
							<feComposite operator="in" in2="e" />
							<feComposite in="SourceGraphic" />
						</filter>
						<pattern
							id="f-portfolio-1"
							width={1}
							height={1}
							patternTransform="translate(578 344.068) rotate(-180)"
							viewBox="0 2.304 140.722 167.426">
							<image
								preserveAspectRatio="none"
								width={170}
								height={172.034}
								xlinkHref="/images/services/Dispositivos-Q.webp"
							/>
						</pattern>
						<filter
							id="g-portfolio-1"
							x={411.911}
							y={311.543}
							width={162.484}
							height={303.272}
							filterUnits="userSpaceOnUse">
							<feOffset dy={3} />
							<feGaussianBlur stdDeviation={3} result="h" />
							<feFlood floodOpacity={0.161} />
							<feComposite operator="in" in2="h" />
							<feComposite in="SourceGraphic" />
						</filter>
						<pattern
							id="i-portfolio-1"
							width={1}
							height={1}
							patternTransform="translate(590 344.068) rotate(-180)"
							viewBox="0 3.64 132.23 157.323">
							<image
								preserveAspectRatio="none"
								width={170}
								height={172.034}
								xlinkHref="/images/services/Ciruguia-R.webp"
							/>
						</pattern>
						<filter
							id="j-portfolio-1"
							x={218.292}
							y={311.543}
							width={190.727}
							height={359.038}
							filterUnits="userSpaceOnUse">
							<feOffset dy={3} />
							<feGaussianBlur stdDeviation={3} result="k" />
							<feFlood floodOpacity={0.161} />
							<feComposite operator="in" in2="k" />
							<feComposite in="SourceGraphic" />
						</filter>
						<pattern
							id="l-portfolio-1"
							width={1}
							height={1}
							patternTransform="translate(520.065 411.327) rotate(-180)"
							viewBox="77.948 3.464 164.537 195.761">
							<image
								preserveAspectRatio="xMidYMid slice"
								width={308.532}
								height={205.664}
								xlinkHref="/images/mobile/portfolio/image-5.webp"
							/>
						</pattern>
						<filter
							id="m-portfolio-1"
							x={352.992}
							y={716.931}
							width={113.008}
							height={63.069}
							filterUnits="userSpaceOnUse">
							<feOffset dy={3} />
							<feGaussianBlur stdDeviation={3} result="n" />
							<feFlood floodOpacity={0.6} />
							<feComposite operator="in" in2="n" />
							<feComposite in="SourceGraphic" />
						</filter>
						<filter
							id="o-portfolio-1"
							x={162}
							y={716.931}
							width={113.008}
							height={63.069}
							filterUnits="userSpaceOnUse">
							<feOffset dy={3} />
							<feGaussianBlur stdDeviation={3} result="p" />
							<feFlood floodOpacity={0.6} />
							<feComposite operator="in" in2="p" />
							<feComposite in="SourceGraphic" />
						</filter>
						<radialGradient
							id="q-portfolio-1"
							cx={0.5}
							cy={0.5}
							r={0.538}
							gradientTransform="translate(0 0.113) scale(1 0.774)"
							gradientUnits="objectBoundingBox">
							<stop offset={0} stopColor="#9e9e9e" />
							<stop offset={1} stopColor="gray" stopOpacity={0} />
						</radialGradient>
					</defs>
					<rect
						className="c-portfolio-1"
						width={418}
						height={958.42}
						transform="translate(106.084)"
					/>
					<g
						className="d-portfolio-1"
						transform="translate(27.244 466.953)">
						<g
							className="e-portfolio-1"
							transform="translate(-114.213 15.386)">
							<path
								className="f-portfolio-1"
								d="M.595,362.454,148.249,493.466l-.595-303.659L0,58.795Z"
								transform="translate(0 22.179)"
							/>
							<path
								className="g-portfolio-1"
								d="M92.335,153.923l.595,303.659h504.5l-.593-303.659Z"
								transform="translate(55.319 58.063)"
							/>
							<path
								className="h-portfolio-1"
								d="M407.824,189.807l.595,303.659L572.566,362.453l-.593-303.659Z"
								transform="translate(244.333 22.179)"
							/>
							<path
								className="i-portfolio-1"
								d="M413.255,0,0,80.973,147.654,211.987h504.5L816.3,80.973Z"
								transform="translate(0)"
							/>
						</g>
					</g>
					<g transform="translate(106.084)">
						<g className="j-portfolio-1">
							<path
								className="k-portfolio-1"
								d="M.527.471V75.179h113.05c28.766,0,55.243-28.481,71.55-74.708Z"
								transform="translate(0.063 0.123)"
							/>
							<path
								className="k-portfolio-1"
								d="M71.851,747.92V713.612c0-40.767-21.59-77.244-55.02-92.936l-16.3-8.3V610.8l16.811,8.555c33.889,15.909,55.787,52.906,55.787,94.253V747.92Z"
								transform="translate(0.063 212.08)"
							/>
							<path
								className="l-portfolio-1"
								d="M.471.471V96.646H129.562c32.848,0,63.081-36.665,81.7-96.175Z"
								transform="translate(0.056 0.123)"
							/>
						</g>
					</g>
					<text
						className="m-portfolio-1"
						transform="translate(320 165.842)">
						<tspan x={-140.3} y={46}>
							{t('Portafolio ')}
						</tspan>
					</text>
					<g transform="translate(316.562 869.166)" onClick={onClose}>
						<path
							className="n-portfolio-1"
							d="M207.522,145.656V54.822H80.435C48.1,54.822,18.333,89.451,0,145.656Z"
							transform="translate(0 -54.822)"
						/>
						<g transform="translate(90.438 35.798)">
							<path
								className="c-portfolio-1"
								d="M0,0V19.012L16.462,9.505,8.6,4.965Z"
								transform="translate(16.462 19.012) rotate(180)"
							/>
							<text
								className="o-portfolio-1"
								transform="translate(72.852 15.238)">
								<tspan x={-46.928} y={0}>
									{t('Volver')}
								</tspan>
							</text>
						</g>
					</g>
					<g transform="translate(0 284)">
						<g className="p-portfolio-1" transform="translate(0)">
							<g transform="translate(62.754 33.544)">
								<g className="q-portfolio-1">
									<g transform="translate(0)">
										<g
											className="ac-portfolio-1"
											transform="matrix(1, 0, 0, 1, -62.75, -317.54)">
											<rect
												className="c-portfolio-1"
												width={144.484}
												height={285.272}
												rx={21}
												transform="translate(62.75 317.54)"
											/>
										</g>
										<path
											className="r-portfolio-1"
											d="M0,0V89.866H0q0,.033,0,.066v65.319c0,9.269,7.045,16.783,15.735,16.783H128.86c8.69,0,15.735-7.514,15.735-16.783V89.932l-.028-.066h.028L126.061,28.877C120.749,11.4,108.218,0,94.317,0Z"
											transform="translate(144.595 172.034) rotate(180)"
										/>
									</g>
									<text
										className="s-portfolio-1"
										transform="translate(72.297 208.235)">
										<tspan
											x={
												selectedLanguage === 'es'
													? -24.1
													: -34.1
											}
											y={
												selectedLanguage === 'es'
													? 0
													: 15
											}>
											{t('Dispositivos')}
										</tspan>
										<tspan
											x={
												selectedLanguage === 'es'
													? -38.972
													: -18.972
											}
											y={
												selectedLanguage === 'es'
													? 9
													: 25
											}>
											{t('médico-quirúrgicos')}
										</tspan>
									</text>
								</g>
								<g
									className="q-portfolio-1"
									transform="translate(358.157)">
									<g transform="translate(0)">
										<g
											className="ab-portfolio-1"
											transform="matrix(1, 0, 0, 1, -420.91, -317.54)">
											<rect
												className="c-portfolio-1"
												width={144.484}
												height={285.272}
												rx={21}
												transform="translate(420.91 317.54)"
											/>
										</g>
										<path
											className="t-portfolio-1"
											d="M0,0V89.866H0q0,.033,0,.066v65.319c0,9.269,7.045,16.783,15.735,16.783H128.86c8.69,0,15.735-7.514,15.735-16.783V89.932l-.028-.066h.028L126.061,28.877C120.749,11.4,108.218,0,94.317,0Z"
											transform="translate(144.595 172.034) rotate(180)"
										/>
									</g>
									<text
										className="s-portfolio-1"
										transform="translate(71.47 211.235)">
										<tspan
											x={
												selectedLanguage === 'es'
													? -38.218
													: -36.218
											}
											y={
												selectedLanguage === 'es'
													? 0
													: 20
											}>
											{t('Cirugía robótica')}
										</tspan>
									</text>
								</g>
								<a href="/productos/ortopedia">
									<g transform="translate(164.538)">
										<g
											className="aa-portfolio-1"
											transform="matrix(1, 0, 0, 1, -227.29, -317.54)">
											<rect
												className="c-portfolio-1"
												width={172.727}
												height={341.038}
												rx={35}
												transform="translate(227.29 317.54)"
											/>
										</g>
										<path
											className="u-portfolio-1"
											d="M0,0V107.433H0q0,.04,0,.079V185.6c0,11.081,8.422,20.064,18.811,20.064H154.049c10.389,0,18.811-8.983,18.811-20.064V107.512l-.034-.079h.034L150.7,34.522C144.353,13.628,129.373,0,112.754,0Z"
											transform="translate(172.893 205.664) rotate(180)"
										/>
										<text
											className="v-portfolio-1"
											transform="translate(100.446 268.095)">
											<tspan
												x={
													selectedLanguage === 'es'
														? -48.055
														: -53.055
												}
												y={0}>
												{t('Ortopedia')}
											</tspan>
										</text>
									</g>
								</a>
							</g>
						</g>
						<g
							transform="translate(328.987 423.274)"
							onClick={() => setView(4)}>
							<g
								className="z-portfolio-1"
								transform="matrix(1, 0, 0, 1, -328.99, -707.27)">
								<path
									className="w-portfolio-1"
									d="M95.008,0H53.282a52.209,52.209,0,0,0-48.6,33.144L0,45.069H40.014A54.95,54.95,0,0,0,91.441,9.477Z"
									transform="translate(361.99 722.93)"
								/>
							</g>
							<path
								className="c-portfolio-1"
								d="M23.394,0V5.743H0V8.625H23.394v5.742l12.44-7.184Z"
								transform="translate(62.591 31.008)"
							/>
						</g>
						<g
							transform="translate(171 438.931)"
							onClick={() => setView(2)}>
							<g
								className="y-portfolio-1"
								transform="matrix(1, 0, 0, 1, -171, -722.93)">
								<path
									className="w-portfolio-1"
									d="M0,0H41.727a52.21,52.21,0,0,1,48.6,33.144l4.678,11.925H54.994A54.95,54.95,0,0,1,3.567,9.477Z"
									transform="translate(171 722.93)"
								/>
							</g>
							<path
								className="c-portfolio-1"
								d="M12.441,0V5.743H35.834V8.625H12.441v5.742L0,7.183Z"
								transform="translate(29.587 15.351)"
							/>
						</g>
						<ellipse
							className="x-portfolio-1"
							cx={97.5}
							cy={8}
							rx={97.5}
							ry={8}
							transform="translate(228.381 385.204)"
						/>
						<ellipse
							className="x-portfolio-1"
							cx={67.5}
							cy={6}
							rx={67.5}
							ry={6}
							transform="translate(70.743 328.917)"
						/>
						<ellipse
							className="x-portfolio-1"
							cx={67.5}
							cy={6}
							rx={67.5}
							ry={6}
							transform="translate(426.788 328.917)"
						/>
					</g>
				</svg>
			) : view === 4 ? (
				<svg
					viewBox="106 0 414 960"
					preserveAspectRatio="none"
					width="100%"
					height="100vh"
					onTouchEnd={(e) => {
						if (e.nativeEvent.changedTouches[0].clientX > initial) {
							setView((prevState: number) =>
								prevState === 0 ? 10 : prevState - 1
							)
						} else if (
							e.nativeEvent.changedTouches[0].clientX < initial
						) {
							setView((prevState: number) =>
								prevState === 10 ? 0 : prevState + 1
							)
						}
					}}
					onTouchStart={(e) =>
						setInitial(e.nativeEvent.changedTouches[0].clientX)
					}>
					<defs>
						<style>
							{
								".a-portfolio-1{fill:#d9dae4;}.b-portfolio-1,.l-portfolio-1{fill:none;}.c-portfolio-1,.o-portfolio-1{fill:#fff;}.d-portfolio-1{clip-path:url(#a-portfolio-1);}.e-portfolio-1{opacity:0.45;}.f-portfolio-1{fill:gray;}.g-portfolio-1{fill:#d3d3d3;}.h-portfolio-1{fill:#c1c1c1;}.i-portfolio-1{fill:#a4a4a4;}.j-portfolio-1{clip-path:url(#b-portfolio-1);}.k-portfolio-1{fill:#e40032;}.l-portfolio-1{stroke:#001f5f;stroke-miterlimit:10;stroke-width:0.942px;}.m-portfolio-1,.n-portfolio-1{fill:#001f5f;}.m-portfolio-1{font-size:46px;font-family:'Kiona-Bold';}.m-portfolio-1,.s-portfolio-1,.v-portfolio-1{font-weight:700;}.o-portfolio-1{font-size:16px;font-family:Silka-Medium, Silka;font-weight:500;}.p-portfolio-1{clip-path:url(#c-portfolio-1);}.q-portfolio-1{opacity:0.5;}.r-portfolio-1{fill:url(#f-portfolio-1);}.s-portfolio-1,.v-portfolio-1{fill:#182856;font-family:Silka-Bold, Silka;}.s-portfolio-1{font-size:9px;}.t-portfolio-1{fill:url(#i-portfolio-1);}.u-portfolio-1{fill:url(#l-portfolio-1);}.v-portfolio-1{font-size:13px;}.w-portfolio-1{fill:#c7c7cc;}.x-portfolio-1{opacity:0.36;mix-blend-mode:multiply;isolation:isolate;fill:url(#q-portfolio-1);}.y-portfolio-1{filter:url(#o-portfolio-1);}.z-portfolio-1{filter:url(#m-portfolio-1);}.aa-portfolio-1{filter:url(#j-portfolio-1);}.ab-portfolio-1{filter:url(#g-portfolio-1);}.ac-portfolio-1{filter:url(#d-portfolio-1);}"
							}
						</style>
						<clipPath id="a-portfolio-1">
							<rect
								className="a-portfolio-1"
								width={575.68}
								height={493.047}
							/>
						</clipPath>
						<clipPath id="b-portfolio-1">
							<rect
								className="b-portfolio-1"
								width={403.527}
								height={960}
							/>
						</clipPath>
						<clipPath id="c-portfolio-1">
							<rect
								className="c-portfolio-1"
								width={613}
								height={502}
								transform="translate(0)"
							/>
						</clipPath>
						<filter
							id="d-portfolio-1"
							x={53.754}
							y={311.543}
							width={162.484}
							height={303.272}
							filterUnits="userSpaceOnUse">
							<feOffset dy={3} />
							<feGaussianBlur stdDeviation={3} result="e" />
							<feFlood floodOpacity={0.161} />
							<feComposite operator="in" in2="e" />
							<feComposite in="SourceGraphic" />
						</filter>
						<pattern
							id="f-portfolio-1"
							width={1}
							height={1}
							patternTransform="translate(578 344.068) rotate(-180)"
							viewBox="100 2.304 140.722 167.426">
							<image
								preserveAspectRatio="xMidYMid slice"
								width={305.839}
								height={172.034}
								xlinkHref="/images/mobile/portfolio/image-5.webp"
							/>
						</pattern>
						<filter
							id="g-portfolio-1"
							x={411.911}
							y={311.543}
							width={162.484}
							height={303.272}
							filterUnits="userSpaceOnUse">
							<feOffset dy={3} />
							<feGaussianBlur stdDeviation={3} result="h" />
							<feFlood floodOpacity={0.161} />
							<feComposite operator="in" in2="h" />
							<feComposite in="SourceGraphic" />
						</filter>
						<pattern
							id="i-portfolio-1"
							width={1}
							height={1}
							patternTransform="translate(610.103 344.068) rotate(-180)"
							viewBox="0 3.64 132.23 157.323">
							<image
								preserveAspectRatio="none"
								width={170}
								height={172.034}
								xlinkHref="/images/services/Genetica.webp"
							/>
						</pattern>
						<filter
							id="j-portfolio-1"
							x={218.292}
							y={311.543}
							width={190.727}
							height={359.038}
							filterUnits="userSpaceOnUse">
							<feOffset dy={3} />
							<feGaussianBlur stdDeviation={3} result="k" />
							<feFlood floodOpacity={0.161} />
							<feComposite operator="in" in2="k" />
							<feComposite in="SourceGraphic" />
						</filter>
						<pattern
							id="l-portfolio-1"
							width={1}
							height={1}
							patternTransform="translate(520.065 411.327) rotate(-180)"
							viewBox="0 3.464 164.537 195.761">
							<image
								preserveAspectRatio="none"
								width={170}
								height={205.664}
								xlinkHref="/images/services/Ciruguia-R.webp"
							/>
						</pattern>
						<filter
							id="m-portfolio-1"
							x={352.992}
							y={716.931}
							width={113.008}
							height={63.069}
							filterUnits="userSpaceOnUse">
							<feOffset dy={3} />
							<feGaussianBlur stdDeviation={3} result="n" />
							<feFlood floodOpacity={0.6} />
							<feComposite operator="in" in2="n" />
							<feComposite in="SourceGraphic" />
						</filter>
						<filter
							id="o-portfolio-1"
							x={162}
							y={716.931}
							width={113.008}
							height={63.069}
							filterUnits="userSpaceOnUse">
							<feOffset dy={3} />
							<feGaussianBlur stdDeviation={3} result="p" />
							<feFlood floodOpacity={0.6} />
							<feComposite operator="in" in2="p" />
							<feComposite in="SourceGraphic" />
						</filter>
						<radialGradient
							id="q-portfolio-1"
							cx={0.5}
							cy={0.5}
							r={0.538}
							gradientTransform="translate(0 0.113) scale(1 0.774)"
							gradientUnits="objectBoundingBox">
							<stop offset={0} stopColor="#9e9e9e" />
							<stop offset={1} stopColor="gray" stopOpacity={0} />
						</radialGradient>
					</defs>
					<rect
						className="c-portfolio-1"
						width={418}
						height={958.42}
						transform="translate(106.084)"
					/>
					<g
						className="d-portfolio-1"
						transform="translate(27.244 466.953)">
						<g
							className="e-portfolio-1"
							transform="translate(-114.213 15.386)">
							<path
								className="f-portfolio-1"
								d="M.595,362.454,148.249,493.466l-.595-303.659L0,58.795Z"
								transform="translate(0 22.179)"
							/>
							<path
								className="g-portfolio-1"
								d="M92.335,153.923l.595,303.659h504.5l-.593-303.659Z"
								transform="translate(55.319 58.063)"
							/>
							<path
								className="h-portfolio-1"
								d="M407.824,189.807l.595,303.659L572.566,362.453l-.593-303.659Z"
								transform="translate(244.333 22.179)"
							/>
							<path
								className="i-portfolio-1"
								d="M413.255,0,0,80.973,147.654,211.987h504.5L816.3,80.973Z"
								transform="translate(0)"
							/>
						</g>
					</g>
					<g transform="translate(106.084)">
						<g className="j-portfolio-1">
							<path
								className="k-portfolio-1"
								d="M.527.471V75.179h113.05c28.766,0,55.243-28.481,71.55-74.708Z"
								transform="translate(0.063 0.123)"
							/>
							<path
								className="k-portfolio-1"
								d="M71.851,747.92V713.612c0-40.767-21.59-77.244-55.02-92.936l-16.3-8.3V610.8l16.811,8.555c33.889,15.909,55.787,52.906,55.787,94.253V747.92Z"
								transform="translate(0.063 212.08)"
							/>
							<path
								className="l-portfolio-1"
								d="M.471.471V96.646H129.562c32.848,0,63.081-36.665,81.7-96.175Z"
								transform="translate(0.056 0.123)"
							/>
						</g>
					</g>
					<text
						className="m-portfolio-1"
						transform="translate(320 165.842)">
						<tspan x={-140.3} y={46}>
							{t('Portafolio ')}
						</tspan>
					</text>
					<g transform="translate(316.562 869.166)" onClick={onClose}>
						<path
							className="n-portfolio-1"
							d="M207.522,145.656V54.822H80.435C48.1,54.822,18.333,89.451,0,145.656Z"
							transform="translate(0 -54.822)"
						/>
						<g transform="translate(90.438 35.798)">
							<path
								className="c-portfolio-1"
								d="M0,0V19.012L16.462,9.505,8.6,4.965Z"
								transform="translate(16.462 19.012) rotate(180)"
							/>
							<text
								className="o-portfolio-1"
								transform="translate(72.852 15.238)">
								<tspan x={-46.928} y={0}>
									{t('Volver')}
								</tspan>
							</text>
						</g>
					</g>
					<g transform="translate(0 284)">
						<g className="p-portfolio-1" transform="translate(0)">
							<g transform="translate(62.754 33.544)">
								<g className="q-portfolio-1">
									<g transform="translate(0)">
										<g
											className="ac-portfolio-1"
											transform="matrix(1, 0, 0, 1, -62.75, -317.54)">
											<rect
												className="c-portfolio-1"
												width={144.484}
												height={285.272}
												rx={21}
												transform="translate(62.75 317.54)"
											/>
										</g>
										<path
											className="r-portfolio-1"
											d="M0,0V89.866H0q0,.033,0,.066v65.319c0,9.269,7.045,16.783,15.735,16.783H128.86c8.69,0,15.735-7.514,15.735-16.783V89.932l-.028-.066h.028L126.061,28.877C120.749,11.4,108.218,0,94.317,0Z"
											transform="translate(144.595 172.034) rotate(180)"
										/>
									</g>
									<text
										className="s-portfolio-1"
										transform="translate(72.297 208.235)">
										<tspan
											x={-23.251}
											y={
												selectedLanguage === 'es'
													? 0
													: 20
											}>
											{t('Ortopedia')}
										</tspan>
									</text>
								</g>
								<g
									className="q-portfolio-1"
									transform="translate(358.157)">
									<g transform="translate(0)">
										<g
											className="ab-portfolio-1"
											transform="matrix(1, 0, 0, 1, -420.91, -317.54)">
											<rect
												className="c-portfolio-1"
												width={144.484}
												height={285.272}
												rx={21}
												transform="translate(420.91 317.54)"
											/>
										</g>
										<path
											className="t-portfolio-1"
											d="M0,0V89.866H0q0,.033,0,.066v65.319c0,9.269,7.045,16.783,15.735,16.783H128.86c8.69,0,15.735-7.514,15.735-16.783V89.932l-.028-.066h.028L126.061,28.877C120.749,11.4,108.218,0,94.317,0Z"
											transform="translate(144.595 172.034) rotate(180)"
										/>
									</g>
									<text
										className="s-portfolio-1"
										transform="translate(71.47 211.235)">
										<tspan x={-22.923} y={0}>
											{t('Genómica')}
										</tspan>
										<tspan
											x={
												selectedLanguage === 'es'
													? -23.747
													: -32.747
											}
											y={10}>
											{t('y genética')}
										</tspan>
									</text>
								</g>
								<a href="/productos/cirugia-robotica">
									<g transform="translate(164.538)">
										<g
											className="aa-portfolio-1"
											transform="matrix(1, 0, 0, 1, -227.29, -317.54)">
											<rect
												className="c-portfolio-1"
												width={172.727}
												height={341.038}
												rx={35}
												transform="translate(227.29 317.54)"
											/>
										</g>
										<path
											className="u-portfolio-1"
											d="M0,0V107.433H0q0,.04,0,.079V185.6c0,11.081,8.422,20.064,18.811,20.064H154.049c10.389,0,18.811-8.983,18.811-20.064V107.512l-.034-.079h.034L150.7,34.522C144.353,13.628,129.373,0,112.754,0Z"
											transform="translate(172.893 205.664) rotate(180)"
										/>
										<text
											className="v-portfolio-1"
											transform="translate(86.446 268.095)">
											<tspan x={-53.528} y={0}>
												{t('Cirugía robótica')}
											</tspan>
										</text>
									</g>
								</a>
							</g>
						</g>
						<g
							transform="translate(328.987 423.274)"
							onClick={() => setView(5)}>
							<g
								className="z-portfolio-1"
								transform="matrix(1, 0, 0, 1, -328.99, -707.27)">
								<path
									className="w-portfolio-1"
									d="M95.008,0H53.282a52.209,52.209,0,0,0-48.6,33.144L0,45.069H40.014A54.95,54.95,0,0,0,91.441,9.477Z"
									transform="translate(361.99 722.93)"
								/>
							</g>
							<path
								className="c-portfolio-1"
								d="M23.394,0V5.743H0V8.625H23.394v5.742l12.44-7.184Z"
								transform="translate(62.591 31.008)"
							/>
						</g>
						<g
							transform="translate(171 438.931)"
							onClick={() => setView(3)}>
							<g
								className="y-portfolio-1"
								transform="matrix(1, 0, 0, 1, -171, -722.93)">
								<path
									className="w-portfolio-1"
									d="M0,0H41.727a52.21,52.21,0,0,1,48.6,33.144l4.678,11.925H54.994A54.95,54.95,0,0,1,3.567,9.477Z"
									transform="translate(171 722.93)"
								/>
							</g>
							<path
								className="c-portfolio-1"
								d="M12.441,0V5.743H35.834V8.625H12.441v5.742L0,7.183Z"
								transform="translate(29.587 15.351)"
							/>
						</g>
						<ellipse
							className="x-portfolio-1"
							cx={97.5}
							cy={8}
							rx={97.5}
							ry={8}
							transform="translate(228.381 385.204)"
						/>
						<ellipse
							className="x-portfolio-1"
							cx={67.5}
							cy={6}
							rx={67.5}
							ry={6}
							transform="translate(70.743 328.917)"
						/>
						<ellipse
							className="x-portfolio-1"
							cx={67.5}
							cy={6}
							rx={67.5}
							ry={6}
							transform="translate(426.788 328.917)"
						/>
					</g>
				</svg>
			) : view === 5 ? (
				<svg
					viewBox="106 0 414 960"
					preserveAspectRatio="none"
					width="100%"
					height="100vh"
					onTouchEnd={(e) => {
						if (e.nativeEvent.changedTouches[0].clientX > initial) {
							setView((prevState: number) =>
								prevState === 0 ? 10 : prevState - 1
							)
						} else if (
							e.nativeEvent.changedTouches[0].clientX < initial
						) {
							setView((prevState: number) =>
								prevState === 10 ? 0 : prevState + 1
							)
						}
					}}
					onTouchStart={(e) =>
						setInitial(e.nativeEvent.changedTouches[0].clientX)
					}>
					<defs>
						<style>
							{
								".a-portfolio-1{fill:#d9dae4;}.b-portfolio-1,.l-portfolio-1{fill:none;}.c-portfolio-1,.o-portfolio-1{fill:#fff;}.d-portfolio-1{clip-path:url(#a-portfolio-1);}.e-portfolio-1{opacity:0.45;}.f-portfolio-1{fill:gray;}.g-portfolio-1{fill:#d3d3d3;}.h-portfolio-1{fill:#c1c1c1;}.i-portfolio-1{fill:#a4a4a4;}.j-portfolio-1{clip-path:url(#b-portfolio-1);}.k-portfolio-1{fill:#e40032;}.l-portfolio-1{stroke:#001f5f;stroke-miterlimit:10;stroke-width:0.942px;}.m-portfolio-1,.n-portfolio-1{fill:#001f5f;}.m-portfolio-1{font-size:46px;font-family:'Kiona-Bold';}.m-portfolio-1,.s-portfolio-1,.v-portfolio-1{font-weight:700;}.o-portfolio-1{font-size:16px;font-family:Silka-Medium, Silka;font-weight:500;}.p-portfolio-1{clip-path:url(#c-portfolio-1);}.q-portfolio-1{opacity:0.5;}.r-portfolio-1{fill:url(#f-portfolio-1);}.s-portfolio-1,.v-portfolio-1{fill:#182856;font-family:Silka-Bold, Silka;}.s-portfolio-1{font-size:9px;}.t-portfolio-1{fill:url(#i-portfolio-1);}.u-portfolio-1{fill:url(#l-portfolio-1);}.v-portfolio-1{font-size:13px;}.w-portfolio-1{fill:#c7c7cc;}.x-portfolio-1{opacity:0.36;mix-blend-mode:multiply;isolation:isolate;fill:url(#q-portfolio-1);}.y-portfolio-1{filter:url(#o-portfolio-1);}.z-portfolio-1{filter:url(#m-portfolio-1);}.aa-portfolio-1{filter:url(#j-portfolio-1);}.ab-portfolio-1{filter:url(#g-portfolio-1);}.ac-portfolio-1{filter:url(#d-portfolio-1);}"
							}
						</style>
						<clipPath id="a-portfolio-1">
							<rect
								className="a-portfolio-1"
								width={575.68}
								height={493.047}
							/>
						</clipPath>
						<clipPath id="b-portfolio-1">
							<rect
								className="b-portfolio-1"
								width={403.527}
								height={960}
							/>
						</clipPath>
						<clipPath id="c-portfolio-1">
							<rect
								className="c-portfolio-1"
								width={613}
								height={502}
								transform="translate(0)"
							/>
						</clipPath>
						<filter
							id="d-portfolio-1"
							x={53.754}
							y={311.543}
							width={162.484}
							height={303.272}
							filterUnits="userSpaceOnUse">
							<feOffset dy={3} />
							<feGaussianBlur stdDeviation={3} result="e" />
							<feFlood floodOpacity={0.161} />
							<feComposite operator="in" in2="e" />
							<feComposite in="SourceGraphic" />
						</filter>
						<pattern
							id="f-portfolio-1"
							width={1}
							height={1}
							patternTransform="translate(578 344.068) rotate(-180)"
							viewBox="0 2.304 140.722 167.426">
							<image
								preserveAspectRatio="xMidYMid slice"
								width={170}
								height={172.034}
								xlinkHref="/images/services/Ciruguia-R.webp"
							/>
						</pattern>
						<filter
							id="g-portfolio-1"
							x={411.911}
							y={311.543}
							width={162.484}
							height={303.272}
							filterUnits="userSpaceOnUse">
							<feOffset dy={3} />
							<feGaussianBlur stdDeviation={3} result="h" />
							<feFlood floodOpacity={0.161} />
							<feComposite operator="in" in2="h" />
							<feComposite in="SourceGraphic" />
						</filter>
						<pattern
							id="i-portfolio-1"
							width={1}
							height={1}
							patternTransform="translate(620.103 344.068) rotate(-180)"
							viewBox="0 3.64 132.23 157.323">
							<image
								preserveAspectRatio="none"
								width={170}
								height={172.034}
								xlinkHref="/images/services/Cuidado-A-H.png"
							/>
						</pattern>
						<filter
							id="j-portfolio-1"
							x={218.292}
							y={311.543}
							width={190.727}
							height={359.038}
							filterUnits="userSpaceOnUse">
							<feOffset dy={3} />
							<feGaussianBlur stdDeviation={3} result="k" />
							<feFlood floodOpacity={0.161} />
							<feComposite operator="in" in2="k" />
							<feComposite in="SourceGraphic" />
						</filter>
						<pattern
							id="l-portfolio-1"
							width={1}
							height={1}
							patternTransform="translate(520.065 411.327) rotate(-180)"
							viewBox="0 3.464 164.537 195.761">
							<image
								preserveAspectRatio="none"
								width={170}
								height={205.664}
								xlinkHref="/images/services/Genetica.webp"
							/>
						</pattern>
						<filter
							id="m-portfolio-1"
							x={352.992}
							y={716.931}
							width={113.008}
							height={63.069}
							filterUnits="userSpaceOnUse">
							<feOffset dy={3} />
							<feGaussianBlur stdDeviation={3} result="n" />
							<feFlood floodOpacity={0.6} />
							<feComposite operator="in" in2="n" />
							<feComposite in="SourceGraphic" />
						</filter>
						<filter
							id="o-portfolio-1"
							x={162}
							y={716.931}
							width={113.008}
							height={63.069}
							filterUnits="userSpaceOnUse">
							<feOffset dy={3} />
							<feGaussianBlur stdDeviation={3} result="p" />
							<feFlood floodOpacity={0.6} />
							<feComposite operator="in" in2="p" />
							<feComposite in="SourceGraphic" />
						</filter>
						<radialGradient
							id="q-portfolio-1"
							cx={0.5}
							cy={0.5}
							r={0.538}
							gradientTransform="translate(0 0.113) scale(1 0.774)"
							gradientUnits="objectBoundingBox">
							<stop offset={0} stopColor="#9e9e9e" />
							<stop offset={1} stopColor="gray" stopOpacity={0} />
						</radialGradient>
					</defs>
					<rect
						className="c-portfolio-1"
						width={418}
						height={958.42}
						transform="translate(106.084)"
					/>
					<g
						className="d-portfolio-1"
						transform="translate(27.244 466.953)">
						<g
							className="e-portfolio-1"
							transform="translate(-114.213 15.386)">
							<path
								className="f-portfolio-1"
								d="M.595,362.454,148.249,493.466l-.595-303.659L0,58.795Z"
								transform="translate(0 22.179)"
							/>
							<path
								className="g-portfolio-1"
								d="M92.335,153.923l.595,303.659h504.5l-.593-303.659Z"
								transform="translate(55.319 58.063)"
							/>
							<path
								className="h-portfolio-1"
								d="M407.824,189.807l.595,303.659L572.566,362.453l-.593-303.659Z"
								transform="translate(244.333 22.179)"
							/>
							<path
								className="i-portfolio-1"
								d="M413.255,0,0,80.973,147.654,211.987h504.5L816.3,80.973Z"
								transform="translate(0)"
							/>
						</g>
					</g>
					<g transform="translate(106.084)">
						<g className="j-portfolio-1">
							<path
								className="k-portfolio-1"
								d="M.527.471V75.179h113.05c28.766,0,55.243-28.481,71.55-74.708Z"
								transform="translate(0.063 0.123)"
							/>
							<path
								className="k-portfolio-1"
								d="M71.851,747.92V713.612c0-40.767-21.59-77.244-55.02-92.936l-16.3-8.3V610.8l16.811,8.555c33.889,15.909,55.787,52.906,55.787,94.253V747.92Z"
								transform="translate(0.063 212.08)"
							/>
							<path
								className="l-portfolio-1"
								d="M.471.471V96.646H129.562c32.848,0,63.081-36.665,81.7-96.175Z"
								transform="translate(0.056 0.123)"
							/>
						</g>
					</g>
					<text
						className="m-portfolio-1"
						transform="translate(320 165.842)">
						<tspan x={-140.3} y={46}>
							{t('Portafolio ')}
						</tspan>
					</text>
					<g transform="translate(316.562 869.166)" onClick={onClose}>
						<path
							className="n-portfolio-1"
							d="M207.522,145.656V54.822H80.435C48.1,54.822,18.333,89.451,0,145.656Z"
							transform="translate(0 -54.822)"
						/>
						<g transform="translate(90.438 35.798)">
							<path
								className="c-portfolio-1"
								d="M0,0V19.012L16.462,9.505,8.6,4.965Z"
								transform="translate(16.462 19.012) rotate(180)"
							/>
							<text
								className="o-portfolio-1"
								transform="translate(72.852 15.238)">
								<tspan x={-46.928} y={0}>
									{t('Volver')}
								</tspan>
							</text>
						</g>
					</g>
					<g transform="translate(0 284)">
						<g className="p-portfolio-1" transform="translate(0)">
							<g transform="translate(62.754 33.544)">
								<g className="q-portfolio-1">
									<g transform="translate(0)">
										<g
											className="ac-portfolio-1"
											transform="matrix(1, 0, 0, 1, -62.75, -317.54)">
											<rect
												className="c-portfolio-1"
												width={144.484}
												height={285.272}
												rx={21}
												transform="translate(62.75 317.54)"
											/>
										</g>
										<path
											className="r-portfolio-1"
											d="M0,0V89.866H0q0,.033,0,.066v65.319c0,9.269,7.045,16.783,15.735,16.783H128.86c8.69,0,15.735-7.514,15.735-16.783V89.932l-.028-.066h.028L126.061,28.877C120.749,11.4,108.218,0,94.317,0Z"
											transform="translate(144.595 172.034) rotate(180)"
										/>
									</g>
									<text
										className="s-portfolio-1"
										transform="translate(60.297 208.235)">
										<tspan
											x={
												selectedLanguage === 'es'
													? -23.251
													: -23.251
											}
											y={
												selectedLanguage === 'es'
													? 0
													: 20
											}>
											{t('Cirugía robótica')}
										</tspan>
									</text>
								</g>
								<g
									className="q-portfolio-1"
									transform="translate(358.157)">
									<g transform="translate(0)">
										<g
											className="ab-portfolio-1"
											transform="matrix(1, 0, 0, 1, -420.91, -317.54)">
											<rect
												className="c-portfolio-1"
												width={144.484}
												height={285.272}
												rx={21}
												transform="translate(420.91 317.54)"
											/>
										</g>
										<path
											className="t-portfolio-1"
											d="M0,0V89.866H0q0,.033,0,.066v65.319c0,9.269,7.045,16.783,15.735,16.783H128.86c8.69,0,15.735-7.514,15.735-16.783V89.932l-.028-.066h.028L126.061,28.877C120.749,11.4,108.218,0,94.317,0Z"
											transform="translate(144.595 172.034) rotate(180)"
										/>
									</g>
									<text
										className="s-portfolio-1"
										transform="translate(71.47 211.235)">
										<tspan
											x={
												selectedLanguage === 'es'
													? -22.923
													: -28.747
											}
											y={0}>
											{t('Cuidado avanzado')}
										</tspan>
										<tspan
											x={
												selectedLanguage === 'es'
													? -15.747
													: -28.747
											}
											y={10}>
											{t('de heridas')}
										</tspan>
									</text>
								</g>
								<a href="/productos/genomica-y-genetica">
									<g transform="translate(164.538)">
										<g
											className="aa-portfolio-1"
											transform="matrix(1, 0, 0, 1, -227.29, -317.54)">
											<rect
												className="c-portfolio-1"
												width={172.727}
												height={341.038}
												rx={35}
												transform="translate(227.29 317.54)"
											/>
										</g>
										<path
											className="u-portfolio-1"
											d="M0,0V107.433H0q0,.04,0,.079V185.6c0,11.081,8.422,20.064,18.811,20.064H154.049c10.389,0,18.811-8.983,18.811-20.064V107.512l-.034-.079h.034L150.7,34.522C144.353,13.628,129.373,0,112.754,0Z"
											transform="translate(172.893 205.664) rotate(180)"
										/>
										<text
											className="v-portfolio-1"
											transform="translate(75.446 268.095)">
											<tspan
												x={
													selectedLanguage === 'es'
														? -22.923
														: -20.923
												}
												y={0}>
												{t('Genómica')}
											</tspan>
											<tspan
												x={
													selectedLanguage === 'es'
														? -23.747
														: -32.747
												}
												y={15}>
												{t('y genética')}
											</tspan>
										</text>
									</g>
								</a>
							</g>
						</g>
						<g
							transform="translate(328.987 423.274)"
							onClick={() => setView(6)}>
							<g
								className="z-portfolio-1"
								transform="matrix(1, 0, 0, 1, -328.99, -707.27)">
								<path
									className="w-portfolio-1"
									d="M95.008,0H53.282a52.209,52.209,0,0,0-48.6,33.144L0,45.069H40.014A54.95,54.95,0,0,0,91.441,9.477Z"
									transform="translate(361.99 722.93)"
								/>
							</g>
							<path
								className="c-portfolio-1"
								d="M23.394,0V5.743H0V8.625H23.394v5.742l12.44-7.184Z"
								transform="translate(62.591 31.008)"
							/>
						</g>
						<g
							transform="translate(171 438.931)"
							onClick={() => setView(4)}>
							<g
								className="y-portfolio-1"
								transform="matrix(1, 0, 0, 1, -171, -722.93)">
								<path
									className="w-portfolio-1"
									d="M0,0H41.727a52.21,52.21,0,0,1,48.6,33.144l4.678,11.925H54.994A54.95,54.95,0,0,1,3.567,9.477Z"
									transform="translate(171 722.93)"
								/>
							</g>
							<path
								className="c-portfolio-1"
								d="M12.441,0V5.743H35.834V8.625H12.441v5.742L0,7.183Z"
								transform="translate(29.587 15.351)"
							/>
						</g>
						<ellipse
							className="x-portfolio-1"
							cx={97.5}
							cy={8}
							rx={97.5}
							ry={8}
							transform="translate(228.381 385.204)"
						/>
						<ellipse
							className="x-portfolio-1"
							cx={67.5}
							cy={6}
							rx={67.5}
							ry={6}
							transform="translate(70.743 328.917)"
						/>
						<ellipse
							className="x-portfolio-1"
							cx={67.5}
							cy={6}
							rx={67.5}
							ry={6}
							transform="translate(426.788 328.917)"
						/>
					</g>
				</svg>
			) : view === 6 ? (
				<svg
					viewBox="106 0 414 960"
					preserveAspectRatio="none"
					width="100%"
					height="100vh"
					onTouchEnd={(e) => {
						if (e.nativeEvent.changedTouches[0].clientX > initial) {
							setView((prevState: number) =>
								prevState === 0 ? 10 : prevState - 1
							)
						} else if (
							e.nativeEvent.changedTouches[0].clientX < initial
						) {
							setView((prevState: number) =>
								prevState === 10 ? 0 : prevState + 1
							)
						}
					}}
					onTouchStart={(e) =>
						setInitial(e.nativeEvent.changedTouches[0].clientX)
					}>
					<defs>
						<style>
							{
								".a-portfolio-1{fill:#d9dae4;}.b-portfolio-1,.l-portfolio-1{fill:none;}.c-portfolio-1,.o-portfolio-1{fill:#fff;}.d-portfolio-1{clip-path:url(#a-portfolio-1);}.e-portfolio-1{opacity:0.45;}.f-portfolio-1{fill:gray;}.g-portfolio-1{fill:#d3d3d3;}.h-portfolio-1{fill:#c1c1c1;}.i-portfolio-1{fill:#a4a4a4;}.j-portfolio-1{clip-path:url(#b-portfolio-1);}.k-portfolio-1{fill:#e40032;}.l-portfolio-1{stroke:#001f5f;stroke-miterlimit:10;stroke-width:0.942px;}.m-portfolio-1,.n-portfolio-1{fill:#001f5f;}.m-portfolio-1{font-size:46px;font-family:'Kiona-Bold';}.m-portfolio-1,.s-portfolio-1,.v-portfolio-1{font-weight:700;}.o-portfolio-1{font-size:16px;font-family:Silka-Medium, Silka;font-weight:500;}.p-portfolio-1{clip-path:url(#c-portfolio-1);}.q-portfolio-1{opacity:0.5;}.r-portfolio-1{fill:url(#f-portfolio-1);}.s-portfolio-1,.v-portfolio-1{fill:#182856;font-family:Silka-Bold, Silka;}.s-portfolio-1{font-size:9px;}.t-portfolio-1{fill:url(#i-portfolio-1);}.u-portfolio-1{fill:url(#l-portfolio-1);}.v-portfolio-1{font-size:13px;}.w-portfolio-1{fill:#c7c7cc;}.x-portfolio-1{opacity:0.36;mix-blend-mode:multiply;isolation:isolate;fill:url(#q-portfolio-1);}.y-portfolio-1{filter:url(#o-portfolio-1);}.z-portfolio-1{filter:url(#m-portfolio-1);}.aa-portfolio-1{filter:url(#j-portfolio-1);}.ab-portfolio-1{filter:url(#g-portfolio-1);}.ac-portfolio-1{filter:url(#d-portfolio-1);}"
							}
						</style>
						<clipPath id="a-portfolio-1">
							<rect
								className="a-portfolio-1"
								width={575.68}
								height={493.047}
							/>
						</clipPath>
						<clipPath id="b-portfolio-1">
							<rect
								className="b-portfolio-1"
								width={403.527}
								height={960}
							/>
						</clipPath>
						<clipPath id="c-portfolio-1">
							<rect
								className="c-portfolio-1"
								width={613}
								height={502}
								transform="translate(0)"
							/>
						</clipPath>
						<filter
							id="d-portfolio-1"
							x={53.754}
							y={311.543}
							width={162.484}
							height={303.272}
							filterUnits="userSpaceOnUse">
							<feOffset dy={3} />
							<feGaussianBlur stdDeviation={3} result="e" />
							<feFlood floodOpacity={0.161} />
							<feComposite operator="in" in2="e" />
							<feComposite in="SourceGraphic" />
						</filter>
						<pattern
							id="f-portfolio-1"
							width={1}
							height={1}
							patternTransform="translate(580 344.068) rotate(-180)"
							viewBox="0 2.304 140.722 167.426">
							<image
								preserveAspectRatio="none"
								width={170}
								height={172.034}
								xlinkHref="/images/services/Genetica.webp"
							/>
						</pattern>
						<filter
							id="g-portfolio-1"
							x={411.911}
							y={311.543}
							width={162.484}
							height={303.272}
							filterUnits="userSpaceOnUse">
							<feOffset dy={3} />
							<feGaussianBlur stdDeviation={3} result="h" />
							<feFlood floodOpacity={0.161} />
							<feComposite operator="in" in2="h" />
							<feComposite in="SourceGraphic" />
						</filter>
						<pattern
							id="i-portfolio-1"
							width={1}
							height={1}
							patternTransform="translate(600 344.068) rotate(-180)"
							viewBox="0 3.64 132.23 157.323">
							<image
								preserveAspectRatio="none"
								width={170}
								height={172.034}
								xlinkHref="/images/services/Instrumental.webp"
							/>
						</pattern>
						<filter
							id="j-portfolio-1"
							x={218.292}
							y={311.543}
							width={190.727}
							height={359.038}
							filterUnits="userSpaceOnUse">
							<feOffset dy={3} />
							<feGaussianBlur stdDeviation={3} result="k" />
							<feFlood floodOpacity={0.161} />
							<feComposite operator="in" in2="k" />
							<feComposite in="SourceGraphic" />
						</filter>
						<pattern
							id="l-portfolio-1"
							width={1}
							height={1}
							patternTransform="translate(520.065 411.327) rotate(-180)"
							viewBox="37 3.464 164.537 195.761">
							<image
								preserveAspectRatio="xMidYMid slice"
								width={308.532}
								height={205.664}
								xlinkHref="/images/mobile/portfolio/imagen-8.webp"
							/>
						</pattern>
						<filter
							id="m-portfolio-1"
							x={352.992}
							y={716.931}
							width={113.008}
							height={63.069}
							filterUnits="userSpaceOnUse">
							<feOffset dy={3} />
							<feGaussianBlur stdDeviation={3} result="n" />
							<feFlood floodOpacity={0.6} />
							<feComposite operator="in" in2="n" />
							<feComposite in="SourceGraphic" />
						</filter>
						<filter
							id="o-portfolio-1"
							x={162}
							y={716.931}
							width={113.008}
							height={63.069}
							filterUnits="userSpaceOnUse">
							<feOffset dy={3} />
							<feGaussianBlur stdDeviation={3} result="p" />
							<feFlood floodOpacity={0.6} />
							<feComposite operator="in" in2="p" />
							<feComposite in="SourceGraphic" />
						</filter>
						<radialGradient
							id="q-portfolio-1"
							cx={0.5}
							cy={0.5}
							r={0.538}
							gradientTransform="translate(0 0.113) scale(1 0.774)"
							gradientUnits="objectBoundingBox">
							<stop offset={0} stopColor="#9e9e9e" />
							<stop offset={1} stopColor="gray" stopOpacity={0} />
						</radialGradient>
					</defs>
					<rect
						className="c-portfolio-1"
						width={418}
						height={958.42}
						transform="translate(106.084)"
					/>
					<g
						className="d-portfolio-1"
						transform="translate(27.244 466.953)">
						<g
							className="e-portfolio-1"
							transform="translate(-114.213 15.386)">
							<path
								className="f-portfolio-1"
								d="M.595,362.454,148.249,493.466l-.595-303.659L0,58.795Z"
								transform="translate(0 22.179)"
							/>
							<path
								className="g-portfolio-1"
								d="M92.335,153.923l.595,303.659h504.5l-.593-303.659Z"
								transform="translate(55.319 58.063)"
							/>
							<path
								className="h-portfolio-1"
								d="M407.824,189.807l.595,303.659L572.566,362.453l-.593-303.659Z"
								transform="translate(244.333 22.179)"
							/>
							<path
								className="i-portfolio-1"
								d="M413.255,0,0,80.973,147.654,211.987h504.5L816.3,80.973Z"
								transform="translate(0)"
							/>
						</g>
					</g>
					<g transform="translate(106.084)">
						<g className="j-portfolio-1">
							<path
								className="k-portfolio-1"
								d="M.527.471V75.179h113.05c28.766,0,55.243-28.481,71.55-74.708Z"
								transform="translate(0.063 0.123)"
							/>
							<path
								className="k-portfolio-1"
								d="M71.851,747.92V713.612c0-40.767-21.59-77.244-55.02-92.936l-16.3-8.3V610.8l16.811,8.555c33.889,15.909,55.787,52.906,55.787,94.253V747.92Z"
								transform="translate(0.063 212.08)"
							/>
							<path
								className="l-portfolio-1"
								d="M.471.471V96.646H129.562c32.848,0,63.081-36.665,81.7-96.175Z"
								transform="translate(0.056 0.123)"
							/>
						</g>
					</g>
					<text
						className="m-portfolio-1"
						transform="translate(320 165.842)">
						<tspan x={-140.3} y={46}>
							{t('Portafolio ')}
						</tspan>
					</text>
					<g transform="translate(316.562 869.166)" onClick={onClose}>
						<path
							className="n-portfolio-1"
							d="M207.522,145.656V54.822H80.435C48.1,54.822,18.333,89.451,0,145.656Z"
							transform="translate(0 -54.822)"
						/>
						<g transform="translate(90.438 35.798)">
							<path
								className="c-portfolio-1"
								d="M0,0V19.012L16.462,9.505,8.6,4.965Z"
								transform="translate(16.462 19.012) rotate(180)"
							/>
							<text
								className="o-portfolio-1"
								transform="translate(72.852 15.238)">
								<tspan x={-46.928} y={0}>
									{t('Volver')}
								</tspan>
							</text>
						</g>
					</g>
					<g transform="translate(0 284)">
						<g className="p-portfolio-1" transform="translate(0)">
							<g transform="translate(62.754 33.544)">
								<g className="q-portfolio-1">
									<g transform="translate(0)">
										<g
											className="ac-portfolio-1"
											transform="matrix(1, 0, 0, 1, -62.75, -317.54)">
											<rect
												className="c-portfolio-1"
												width={144.484}
												height={285.272}
												rx={21}
												transform="translate(62.75 317.54)"
											/>
										</g>
										<path
											className="r-portfolio-1"
											d="M0,0V89.866H0q0,.033,0,.066v65.319c0,9.269,7.045,16.783,15.735,16.783H128.86c8.69,0,15.735-7.514,15.735-16.783V89.932l-.028-.066h.028L126.061,28.877C120.749,11.4,108.218,0,94.317,0Z"
											transform="translate(144.595 172.034) rotate(180)"
										/>
									</g>
									<text
										className="s-portfolio-1"
										transform="translate(72.297 208.235)">
										<tspan x={-22.923} y={0}>
											{t('Genomics')}
										</tspan>
										<tspan x={-23.747} y={8}>
											{t('y genética')}
										</tspan>
									</text>
								</g>
								<g
									className="q-portfolio-1"
									transform="translate(358.157)">
									<g transform="translate(0)">
										<g
											className="ab-portfolio-1"
											transform="matrix(1, 0, 0, 1, -420.91, -317.54)">
											<rect
												className="c-portfolio-1"
												width={144.484}
												height={285.272}
												rx={21}
												transform="translate(420.91 317.54)"
											/>
										</g>
										<path
											className="t-portfolio-1"
											d="M0,0V89.866H0q0,.033,0,.066v65.319c0,9.269,7.045,16.783,15.735,16.783H128.86c8.69,0,15.735-7.514,15.735-16.783V89.932l-.028-.066h.028L126.061,28.877C120.749,11.4,108.218,0,94.317,0Z"
											transform="translate(144.595 172.034) rotate(180)"
										/>
									</g>
									<text
										className="s-portfolio-1"
										transform="translate(71.47 211.235)">
										<tspan x={-28.985} y={0}>
											{t('Instrumental')}
										</tspan>
										<tspan x={-34.056} y={8}>
											{t('y esterilización')}
										</tspan>
									</text>
								</g>
								<a href="/productos/cuidado-avanzado-de-heridas">
									<g transform="translate(164.538)">
										<g
											className="aa-portfolio-1"
											transform="matrix(1, 0, 0, 1, -227.29, -317.54)">
											<rect
												className="c-portfolio-1"
												width={172.727}
												height={341.038}
												rx={35}
												transform="translate(227.29 317.54)"
											/>
										</g>
										<path
											className="u-portfolio-1"
											d="M0,0V107.433H0q0,.04,0,.079V185.6c0,11.081,8.422,20.064,18.811,20.064H154.049c10.389,0,18.811-8.983,18.811-20.064V107.512l-.034-.079h.034L150.7,34.522C144.353,13.628,129.373,0,112.754,0Z"
											transform="translate(172.893 205.664) rotate(180)"
										/>
										<text
											className="v-portfolio-1"
											transform="translate(86.446 268.095)">
											<tspan
												x={
													selectedLanguage === 'es'
														? -60.417
														: -30.417
												}
												y={0}>
												{t('Cuidado avanzado')}
											</tspan>
											<tspan x={-33.989} y={14}>
												{t('de heridas')}
											</tspan>
										</text>
									</g>
								</a>
							</g>
						</g>
						<g
							transform="translate(328.987 423.274)"
							onClick={() => setView(7)}>
							<g
								className="z-portfolio-1"
								transform="matrix(1, 0, 0, 1, -328.99, -707.27)">
								<path
									className="w-portfolio-1"
									d="M95.008,0H53.282a52.209,52.209,0,0,0-48.6,33.144L0,45.069H40.014A54.95,54.95,0,0,0,91.441,9.477Z"
									transform="translate(361.99 722.93)"
								/>
							</g>
							<path
								className="c-portfolio-1"
								d="M23.394,0V5.743H0V8.625H23.394v5.742l12.44-7.184Z"
								transform="translate(62.591 31.008)"
							/>
						</g>
						<g
							transform="translate(171 438.931)"
							onClick={() => setView(5)}>
							<g
								className="y-portfolio-1"
								transform="matrix(1, 0, 0, 1, -171, -722.93)">
								<path
									className="w-portfolio-1"
									d="M0,0H41.727a52.21,52.21,0,0,1,48.6,33.144l4.678,11.925H54.994A54.95,54.95,0,0,1,3.567,9.477Z"
									transform="translate(171 722.93)"
								/>
							</g>
							<path
								className="c-portfolio-1"
								d="M12.441,0V5.743H35.834V8.625H12.441v5.742L0,7.183Z"
								transform="translate(29.587 15.351)"
							/>
						</g>
						<ellipse
							className="x-portfolio-1"
							cx={97.5}
							cy={8}
							rx={97.5}
							ry={8}
							transform="translate(228.381 385.204)"
						/>
						<ellipse
							className="x-portfolio-1"
							cx={67.5}
							cy={6}
							rx={67.5}
							ry={6}
							transform="translate(70.743 328.917)"
						/>
						<ellipse
							className="x-portfolio-1"
							cx={67.5}
							cy={6}
							rx={67.5}
							ry={6}
							transform="translate(426.788 328.917)"
						/>
					</g>
				</svg>
			) : view === 7 ? (
				<svg
					viewBox="106 0 414 960"
					preserveAspectRatio="none"
					width="100%"
					height="100vh"
					onTouchEnd={(e) => {
						if (e.nativeEvent.changedTouches[0].clientX > initial) {
							setView((prevState: number) =>
								prevState === 0 ? 10 : prevState - 1
							)
						} else if (
							e.nativeEvent.changedTouches[0].clientX < initial
						) {
							setView((prevState: number) =>
								prevState === 10 ? 0 : prevState + 1
							)
						}
					}}
					onTouchStart={(e) =>
						setInitial(e.nativeEvent.changedTouches[0].clientX)
					}>
					<defs>
						<style>
							{
								".a-portfolio-1{fill:#d9dae4;}.b-portfolio-1,.l-portfolio-1{fill:none;}.c-portfolio-1,.o-portfolio-1{fill:#fff;}.d-portfolio-1{clip-path:url(#a-portfolio-1);}.e-portfolio-1{opacity:0.45;}.f-portfolio-1{fill:gray;}.g-portfolio-1{fill:#d3d3d3;}.h-portfolio-1{fill:#c1c1c1;}.i-portfolio-1{fill:#a4a4a4;}.j-portfolio-1{clip-path:url(#b-portfolio-1);}.k-portfolio-1{fill:#e40032;}.l-portfolio-1{stroke:#001f5f;stroke-miterlimit:10;stroke-width:0.942px;}.m-portfolio-1,.n-portfolio-1{fill:#001f5f;}.m-portfolio-1{font-size:46px;font-family:'Kiona-Bold';}.m-portfolio-1,.s-portfolio-1,.v-portfolio-1{font-weight:700;}.o-portfolio-1{font-size:16px;font-family:Silka-Medium, Silka;font-weight:500;}.p-portfolio-1{clip-path:url(#c-portfolio-1);}.q-portfolio-1{opacity:0.5;}.r-portfolio-1{fill:url(#f-portfolio-1);}.s-portfolio-1,.v-portfolio-1{fill:#182856;font-family:Silka-Bold, Silka;}.s-portfolio-1{font-size:9px;}.t-portfolio-1{fill:url(#i-portfolio-1);}.u-portfolio-1{fill:url(#l-portfolio-1);}.v-portfolio-1{font-size:13px;}.w-portfolio-1{fill:#c7c7cc;}.x-portfolio-1{opacity:0.36;mix-blend-mode:multiply;isolation:isolate;fill:url(#q-portfolio-1);}.y-portfolio-1{filter:url(#o-portfolio-1);}.z-portfolio-1{filter:url(#m-portfolio-1);}.aa-portfolio-1{filter:url(#j-portfolio-1);}.ab-portfolio-1{filter:url(#g-portfolio-1);}.ac-portfolio-1{filter:url(#d-portfolio-1);}"
							}
						</style>
						<clipPath id="a-portfolio-1">
							<rect
								className="a-portfolio-1"
								width={575.68}
								height={493.047}
							/>
						</clipPath>
						<clipPath id="b-portfolio-1">
							<rect
								className="b-portfolio-1"
								width={403.527}
								height={960}
							/>
						</clipPath>
						<clipPath id="c-portfolio-1">
							<rect
								className="c-portfolio-1"
								width={613}
								height={502}
								transform="translate(0)"
							/>
						</clipPath>
						<filter
							id="d-portfolio-1"
							x={53.754}
							y={311.543}
							width={162.484}
							height={303.272}
							filterUnits="userSpaceOnUse">
							<feOffset dy={3} />
							<feGaussianBlur stdDeviation={3} result="e" />
							<feFlood floodOpacity={0.161} />
							<feComposite operator="in" in2="e" />
							<feComposite in="SourceGraphic" />
						</filter>
						<pattern
							id="f-portfolio-1"
							width={1}
							height={1}
							patternTransform="translate(578 344.068) rotate(-180)"
							viewBox="0 2.304 140.722 167.426">
							<image
								preserveAspectRatio="none"
								width={170}
								height={172.034}
								xlinkHref="/images/services/Cuidado-A-H.png"
							/>
						</pattern>
						<filter
							id="g-portfolio-1"
							x={411.911}
							y={311.543}
							width={162.484}
							height={303.272}
							filterUnits="userSpaceOnUse">
							<feOffset dy={3} />
							<feGaussianBlur stdDeviation={3} result="h" />
							<feFlood floodOpacity={0.161} />
							<feComposite operator="in" in2="h" />
							<feComposite in="SourceGraphic" />
						</filter>
						<pattern
							id="i-portfolio-1"
							width={1}
							height={1}
							patternTransform="translate(620.103 344.068) rotate(-180)"
							viewBox="0 3.64 132.23 157.323">
							<image
								preserveAspectRatio="none"
								width={170}
								height={172.034}
								xlinkHref="/images/services/Neurointervencionismo.webp"
							/>
						</pattern>
						<filter
							id="j-portfolio-1"
							x={218.292}
							y={311.543}
							width={190.727}
							height={359.038}
							filterUnits="userSpaceOnUse">
							<feOffset dy={3} />
							<feGaussianBlur stdDeviation={3} result="k" />
							<feFlood floodOpacity={0.161} />
							<feComposite operator="in" in2="k" />
							<feComposite in="SourceGraphic" />
						</filter>
						<pattern
							id="l-portfolio-1"
							width={1}
							height={1}
							patternTransform="translate(520.065 411.327) rotate(-180)"
							viewBox="0 3.464 164.537 195.761">
							<image
								preserveAspectRatio="none"
								width={170}
								height={205.664}
								xlinkHref="/images/services/Instrumental.webp"
							/>
						</pattern>
						<filter
							id="m-portfolio-1"
							x={352.992}
							y={716.931}
							width={113.008}
							height={63.069}
							filterUnits="userSpaceOnUse">
							<feOffset dy={3} />
							<feGaussianBlur stdDeviation={3} result="n" />
							<feFlood floodOpacity={0.6} />
							<feComposite operator="in" in2="n" />
							<feComposite in="SourceGraphic" />
						</filter>
						<filter
							id="o-portfolio-1"
							x={162}
							y={716.931}
							width={113.008}
							height={63.069}
							filterUnits="userSpaceOnUse">
							<feOffset dy={3} />
							<feGaussianBlur stdDeviation={3} result="p" />
							<feFlood floodOpacity={0.6} />
							<feComposite operator="in" in2="p" />
							<feComposite in="SourceGraphic" />
						</filter>
						<radialGradient
							id="q-portfolio-1"
							cx={0.5}
							cy={0.5}
							r={0.538}
							gradientTransform="translate(0 0.113) scale(1 0.774)"
							gradientUnits="objectBoundingBox">
							<stop offset={0} stopColor="#9e9e9e" />
							<stop offset={1} stopColor="gray" stopOpacity={0} />
						</radialGradient>
					</defs>
					<rect
						className="c-portfolio-1"
						width={418}
						height={958.42}
						transform="translate(106.084)"
					/>
					<g
						className="d-portfolio-1"
						transform="translate(27.244 466.953)">
						<g
							className="e-portfolio-1"
							transform="translate(-114.213 15.386)">
							<path
								className="f-portfolio-1"
								d="M.595,362.454,148.249,493.466l-.595-303.659L0,58.795Z"
								transform="translate(0 22.179)"
							/>
							<path
								className="g-portfolio-1"
								d="M92.335,153.923l.595,303.659h504.5l-.593-303.659Z"
								transform="translate(55.319 58.063)"
							/>
							<path
								className="h-portfolio-1"
								d="M407.824,189.807l.595,303.659L572.566,362.453l-.593-303.659Z"
								transform="translate(244.333 22.179)"
							/>
							<path
								className="i-portfolio-1"
								d="M413.255,0,0,80.973,147.654,211.987h504.5L816.3,80.973Z"
								transform="translate(0)"
							/>
						</g>
					</g>
					<g transform="translate(106.084)">
						<g className="j-portfolio-1">
							<path
								className="k-portfolio-1"
								d="M.527.471V75.179h113.05c28.766,0,55.243-28.481,71.55-74.708Z"
								transform="translate(0.063 0.123)"
							/>
							<path
								className="k-portfolio-1"
								d="M71.851,747.92V713.612c0-40.767-21.59-77.244-55.02-92.936l-16.3-8.3V610.8l16.811,8.555c33.889,15.909,55.787,52.906,55.787,94.253V747.92Z"
								transform="translate(0.063 212.08)"
							/>
							<path
								className="l-portfolio-1"
								d="M.471.471V96.646H129.562c32.848,0,63.081-36.665,81.7-96.175Z"
								transform="translate(0.056 0.123)"
							/>
						</g>
					</g>
					<text
						className="m-portfolio-1"
						transform="translate(320 165.842)">
						<tspan x={-140.3} y={46}>
							{t('Portafolio ')}
						</tspan>
					</text>
					<g transform="translate(316.562 869.166)" onClick={onClose}>
						<path
							className="n-portfolio-1"
							d="M207.522,145.656V54.822H80.435C48.1,54.822,18.333,89.451,0,145.656Z"
							transform="translate(0 -54.822)"
						/>
						<g transform="translate(90.438 35.798)">
							<path
								className="c-portfolio-1"
								d="M0,0V19.012L16.462,9.505,8.6,4.965Z"
								transform="translate(16.462 19.012) rotate(180)"
							/>
							<text
								className="o-portfolio-1"
								transform="translate(72.852 15.238)">
								<tspan x={-46.928} y={0}>
									{t('Volver')}
								</tspan>
							</text>
						</g>
					</g>
					<g transform="translate(0 284)">
						<g className="p-portfolio-1" transform="translate(0)">
							<g transform="translate(62.754 33.544)">
								<g className="q-portfolio-1">
									<g transform="translate(0)">
										<g
											className="ac-portfolio-1"
											transform="matrix(1, 0, 0, 1, -62.75, -317.54)">
											<rect
												className="c-portfolio-1"
												width={144.484}
												height={285.272}
												rx={21}
												transform="translate(62.75 317.54)"
											/>
										</g>
										<path
											className="r-portfolio-1"
											d="M0,0V89.866H0q0,.033,0,.066v65.319c0,9.269,7.045,16.783,15.735,16.783H128.86c8.69,0,15.735-7.514,15.735-16.783V89.932l-.028-.066h.028L126.061,28.877C120.749,11.4,108.218,0,94.317,0Z"
											transform="translate(144.595 172.034) rotate(180)"
										/>
									</g>
									<text
										className="s-portfolio-1"
										transform="translate(72.297 208.235)">
										<tspan
											x={
												selectedLanguage === 'es'
													? -41.827
													: -17.827
											}
											y={0}>
											{t('Cuidado avanzado')}
										</tspan>
										<tspan x={-23.531} y={9}>
											{t('de heridas')}
										</tspan>
									</text>
								</g>
								<g
									className="q-portfolio-1"
									transform="translate(358.157)">
									<g transform="translate(0)">
										<g
											className="ab-portfolio-1"
											transform="matrix(1, 0, 0, 1, -420.91, -317.54)">
											<rect
												className="c-portfolio-1"
												width={144.484}
												height={285.272}
												rx={21}
												transform="translate(420.91 317.54)"
											/>
										</g>
										<path
											className="t-portfolio-1"
											d="M0,0V89.866H0q0,.033,0,.066v65.319c0,9.269,7.045,16.783,15.735,16.783H128.86c8.69,0,15.735-7.514,15.735-16.783V89.932l-.028-.066h.028L126.061,28.877C120.749,11.4,108.218,0,94.317,0Z"
											transform="translate(144.595 172.034) rotate(180)"
										/>
									</g>
									<text
										className="s-portfolio-1"
										transform="translate(71.47 211.235)">
										<tspan x={-52.321} y={0}>
											{t('Neurointervencionismo')}
										</tspan>
									</text>
								</g>
								<a href="/productos/instrumental-y-estirilizacion">
									<g transform="translate(164.538)">
										<g
											className="aa-portfolio-1"
											transform="matrix(1, 0, 0, 1, -227.29, -317.54)">
											<rect
												className="c-portfolio-1"
												width={172.727}
												height={341.038}
												rx={35}
												transform="translate(227.29 317.54)"
											/>
										</g>
										<path
											className="u-portfolio-1"
											d="M0,0V107.433H0q0,.04,0,.079V185.6c0,11.081,8.422,20.064,18.811,20.064H154.049c10.389,0,18.811-8.983,18.811-20.064V107.512l-.034-.079h.034L150.7,34.522C144.353,13.628,129.373,0,112.754,0Z"
											transform="translate(172.893 205.664) rotate(180)"
										/>
										<text
											className="v-portfolio-1"
											transform="translate(86.446 268.095)">
											<tspan x={-41.866} y={0}>
												{t('Instrumental')}
											</tspan>
											<tspan x={-49.192} y={14}>
												{t('y esterilización')}
											</tspan>
										</text>
									</g>
								</a>
							</g>
						</g>
						<g
							transform="translate(328.987 423.274)"
							onClick={() => setView(8)}>
							<g
								className="z-portfolio-1"
								transform="matrix(1, 0, 0, 1, -328.99, -707.27)">
								<path
									className="w-portfolio-1"
									d="M95.008,0H53.282a52.209,52.209,0,0,0-48.6,33.144L0,45.069H40.014A54.95,54.95,0,0,0,91.441,9.477Z"
									transform="translate(361.99 722.93)"
								/>
							</g>
							<path
								className="c-portfolio-1"
								d="M23.394,0V5.743H0V8.625H23.394v5.742l12.44-7.184Z"
								transform="translate(62.591 31.008)"
							/>
						</g>
						<g
							transform="translate(171 438.931)"
							onClick={() => setView(6)}>
							<g
								className="y-portfolio-1"
								transform="matrix(1, 0, 0, 1, -171, -722.93)">
								<path
									className="w-portfolio-1"
									d="M0,0H41.727a52.21,52.21,0,0,1,48.6,33.144l4.678,11.925H54.994A54.95,54.95,0,0,1,3.567,9.477Z"
									transform="translate(171 722.93)"
								/>
							</g>
							<path
								className="c-portfolio-1"
								d="M12.441,0V5.743H35.834V8.625H12.441v5.742L0,7.183Z"
								transform="translate(29.587 15.351)"
							/>
						</g>
						<ellipse
							className="x-portfolio-1"
							cx={97.5}
							cy={8}
							rx={97.5}
							ry={8}
							transform="translate(228.381 385.204)"
						/>
						<ellipse
							className="x-portfolio-1"
							cx={67.5}
							cy={6}
							rx={67.5}
							ry={6}
							transform="translate(70.743 328.917)"
						/>
						<ellipse
							className="x-portfolio-1"
							cx={67.5}
							cy={6}
							rx={67.5}
							ry={6}
							transform="translate(426.788 328.917)"
						/>
					</g>
				</svg>
			) : view === 8 ? (
				<svg
					viewBox="106 0 414 960"
					preserveAspectRatio="none"
					width="100%"
					height="100vh"
					onTouchEnd={(e) => {
						if (e.nativeEvent.changedTouches[0].clientX > initial) {
							setView((prevState: number) =>
								prevState === 0 ? 10 : prevState - 1
							)
						} else if (
							e.nativeEvent.changedTouches[0].clientX < initial
						) {
							setView((prevState: number) =>
								prevState === 10 ? 0 : prevState + 1
							)
						}
					}}
					onTouchStart={(e) =>
						setInitial(e.nativeEvent.changedTouches[0].clientX)
					}>
					<defs>
						<style>
							{
								".a-portfolio-1{fill:#d9dae4;}.b-portfolio-1,.l-portfolio-1{fill:none;}.c-portfolio-1,.o-portfolio-1{fill:#fff;}.d-portfolio-1{clip-path:url(#a-portfolio-1);}.e-portfolio-1{opacity:0.45;}.f-portfolio-1{fill:gray;}.g-portfolio-1{fill:#d3d3d3;}.h-portfolio-1{fill:#c1c1c1;}.i-portfolio-1{fill:#a4a4a4;}.j-portfolio-1{clip-path:url(#b-portfolio-1);}.k-portfolio-1{fill:#e40032;}.l-portfolio-1{stroke:#001f5f;stroke-miterlimit:10;stroke-width:0.942px;}.m-portfolio-1,.n-portfolio-1{fill:#001f5f;}.m-portfolio-1{font-size:46px;font-family:'Kiona-Bold';}.m-portfolio-1,.s-portfolio-1,.v-portfolio-1{font-weight:700;}.o-portfolio-1{font-size:16px;font-family:Silka-Medium, Silka;font-weight:500;}.p-portfolio-1{clip-path:url(#c-portfolio-1);}.q-portfolio-1{opacity:0.5;}.r-portfolio-1{fill:url(#f-portfolio-1);}.s-portfolio-1,.v-portfolio-1{fill:#182856;font-family:Silka-Bold, Silka;}.s-portfolio-1{font-size:9px;}.t-portfolio-1{fill:url(#i-portfolio-1);}.u-portfolio-1{fill:url(#l-portfolio-1);}.v-portfolio-1{font-size:13px;}.w-portfolio-1{fill:#c7c7cc;}.x-portfolio-1{opacity:0.36;mix-blend-mode:multiply;isolation:isolate;fill:url(#q-portfolio-1);}.y-portfolio-1{filter:url(#o-portfolio-1);}.z-portfolio-1{filter:url(#m-portfolio-1);}.aa-portfolio-1{filter:url(#j-portfolio-1);}.ab-portfolio-1{filter:url(#g-portfolio-1);}.ac-portfolio-1{filter:url(#d-portfolio-1);}"
							}
						</style>
						<clipPath id="a-portfolio-1">
							<rect
								className="a-portfolio-1"
								width={575.68}
								height={493.047}
							/>
						</clipPath>
						<clipPath id="b-portfolio-1">
							<rect
								className="b-portfolio-1"
								width={403.527}
								height={960}
							/>
						</clipPath>
						<clipPath id="c-portfolio-1">
							<rect
								className="c-portfolio-1"
								width={613}
								height={502}
								transform="translate(0)"
							/>
						</clipPath>
						<filter
							id="d-portfolio-1"
							x={53.754}
							y={311.543}
							width={162.484}
							height={303.272}
							filterUnits="userSpaceOnUse">
							<feOffset dy={3} />
							<feGaussianBlur stdDeviation={3} result="e" />
							<feFlood floodOpacity={0.161} />
							<feComposite operator="in" in2="e" />
							<feComposite in="SourceGraphic" />
						</filter>
						<pattern
							id="f-portfolio-1"
							width={1}
							height={1}
							patternTransform="translate(578 344.068) rotate(-180)"
							viewBox="0 2.304 140.722 167.426">
							<image
								preserveAspectRatio="none"
								width={170}
								height={172.034}
								xlinkHref="/images/services/Instrumental.webp"
							/>
						</pattern>
						<filter
							id="g-portfolio-1"
							x={411.911}
							y={311.543}
							width={162.484}
							height={303.272}
							filterUnits="userSpaceOnUse">
							<feOffset dy={3} />
							<feGaussianBlur stdDeviation={3} result="h" />
							<feFlood floodOpacity={0.161} />
							<feComposite operator="in" in2="h" />
							<feComposite in="SourceGraphic" />
						</filter>
						<pattern
							id="i-portfolio-1"
							width={1}
							height={1}
							patternTransform="translate(600.103 344.068) rotate(-180)"
							viewBox="0 3.64 132.23 157.323">
							<image
								preserveAspectRatio="none"
								width={170}
								height={172.034}
								xlinkHref="/images/services/Logistica-Hs.webp"
							/>
						</pattern>
						<filter
							id="j-portfolio-1"
							x={218.292}
							y={311.543}
							width={190.727}
							height={359.038}
							filterUnits="userSpaceOnUse">
							<feOffset dy={3} />
							<feGaussianBlur stdDeviation={3} result="k" />
							<feFlood floodOpacity={0.161} />
							<feComposite operator="in" in2="k" />
							<feComposite in="SourceGraphic" />
						</filter>
						<pattern
							id="l-portfolio-1"
							width={1}
							height={1}
							patternTransform="translate(520.065 411.327) rotate(-180)"
							viewBox="0 3.464 164.537 195.761">
							<image
								preserveAspectRatio="none"
								width={220}
								height={205.664}
								xlinkHref="/images/services/Neurointervencionismo.webp"
							/>
						</pattern>
						<filter
							id="m-portfolio-1"
							x={352.992}
							y={716.931}
							width={113.008}
							height={63.069}
							filterUnits="userSpaceOnUse">
							<feOffset dy={3} />
							<feGaussianBlur stdDeviation={3} result="n" />
							<feFlood floodOpacity={0.6} />
							<feComposite operator="in" in2="n" />
							<feComposite in="SourceGraphic" />
						</filter>
						<filter
							id="o-portfolio-1"
							x={162}
							y={716.931}
							width={113.008}
							height={63.069}
							filterUnits="userSpaceOnUse">
							<feOffset dy={3} />
							<feGaussianBlur stdDeviation={3} result="p" />
							<feFlood floodOpacity={0.6} />
							<feComposite operator="in" in2="p" />
							<feComposite in="SourceGraphic" />
						</filter>
						<radialGradient
							id="q-portfolio-1"
							cx={0.5}
							cy={0.5}
							r={0.538}
							gradientTransform="translate(0 0.113) scale(1 0.774)"
							gradientUnits="objectBoundingBox">
							<stop offset={0} stopColor="#9e9e9e" />
							<stop offset={1} stopColor="gray" stopOpacity={0} />
						</radialGradient>
					</defs>
					<rect
						className="c-portfolio-1"
						width={418}
						height={958.42}
						transform="translate(106.084)"
					/>
					<g
						className="d-portfolio-1"
						transform="translate(27.244 466.953)">
						<g
							className="e-portfolio-1"
							transform="translate(-114.213 15.386)">
							<path
								className="f-portfolio-1"
								d="M.595,362.454,148.249,493.466l-.595-303.659L0,58.795Z"
								transform="translate(0 22.179)"
							/>
							<path
								className="g-portfolio-1"
								d="M92.335,153.923l.595,303.659h504.5l-.593-303.659Z"
								transform="translate(55.319 58.063)"
							/>
							<path
								className="h-portfolio-1"
								d="M407.824,189.807l.595,303.659L572.566,362.453l-.593-303.659Z"
								transform="translate(244.333 22.179)"
							/>
							<path
								className="i-portfolio-1"
								d="M413.255,0,0,80.973,147.654,211.987h504.5L816.3,80.973Z"
								transform="translate(0)"
							/>
						</g>
					</g>
					<g transform="translate(106.084)">
						<g className="j-portfolio-1">
							<path
								className="k-portfolio-1"
								d="M.527.471V75.179h113.05c28.766,0,55.243-28.481,71.55-74.708Z"
								transform="translate(0.063 0.123)"
							/>
							<path
								className="k-portfolio-1"
								d="M71.851,747.92V713.612c0-40.767-21.59-77.244-55.02-92.936l-16.3-8.3V610.8l16.811,8.555c33.889,15.909,55.787,52.906,55.787,94.253V747.92Z"
								transform="translate(0.063 212.08)"
							/>
							<path
								className="l-portfolio-1"
								d="M.471.471V96.646H129.562c32.848,0,63.081-36.665,81.7-96.175Z"
								transform="translate(0.056 0.123)"
							/>
						</g>
					</g>
					<text
						className="m-portfolio-1"
						transform="translate(320 165.842)">
						<tspan x={-140.3} y={46}>
							{t('Portafolio ')}
						</tspan>
					</text>
					<g transform="translate(316.562 869.166)" onClick={onClose}>
						<path
							className="n-portfolio-1"
							d="M207.522,145.656V54.822H80.435C48.1,54.822,18.333,89.451,0,145.656Z"
							transform="translate(0 -54.822)"
						/>
						<g transform="translate(90.438 35.798)">
							<path
								className="c-portfolio-1"
								d="M0,0V19.012L16.462,9.505,8.6,4.965Z"
								transform="translate(16.462 19.012) rotate(180)"
							/>
							<text
								className="o-portfolio-1"
								transform="translate(72.852 15.238)">
								<tspan x={-46.928} y={0}>
									{t('Volver')}
								</tspan>
							</text>
						</g>
					</g>
					<g transform="translate(0 284)">
						<g className="p-portfolio-1" transform="translate(0)">
							<g transform="translate(62.754 33.544)">
								<g className="q-portfolio-1">
									<g transform="translate(0)">
										<g
											className="ac-portfolio-1"
											transform="matrix(1, 0, 0, 1, -62.75, -317.54)">
											<rect
												className="c-portfolio-1"
												width={144.484}
												height={285.272}
												rx={21}
												transform="translate(62.75 317.54)"
											/>
										</g>
										<path
											className="r-portfolio-1"
											d="M0,0V89.866H0q0,.033,0,.066v65.319c0,9.269,7.045,16.783,15.735,16.783H128.86c8.69,0,15.735-7.514,15.735-16.783V89.932l-.028-.066h.028L126.061,28.877C120.749,11.4,108.218,0,94.317,0Z"
											transform="translate(144.595 172.034) rotate(180)"
										/>
									</g>
									<text
										className="s-portfolio-1"
										transform="translate(72.297 208.235)">
										<tspan x={-41.827} y={0}>
											{t('Instrumental')}
										</tspan>
										<tspan x={-45.531} y={9}>
											{t('y esterilización')}
										</tspan>
									</text>
								</g>
								<g
									className="q-portfolio-1"
									transform="translate(358.157)">
									<g transform="translate(0)">
										<g
											className="ab-portfolio-1"
											transform="matrix(1, 0, 0, 1, -420.91, -317.54)">
											<rect
												className="c-portfolio-1"
												width={144.484}
												height={285.272}
												rx={21}
												transform="translate(420.91 317.54)"
											/>
										</g>
										<path
											className="t-portfolio-1"
											d="M0,0V89.866H0q0,.033,0,.066v65.319c0,9.269,7.045,16.783,15.735,16.783H128.86c8.69,0,15.735-7.514,15.735-16.783V89.932l-.028-.066h.028L126.061,28.877C120.749,11.4,108.218,0,94.317,0Z"
											transform="translate(144.595 172.034) rotate(180)"
										/>
									</g>
									<text
										className="s-portfolio-1"
										transform="translate(71.47 211.235)">
										<tspan x={-20.466} y={0}>
											{t('Logística')}
										</tspan>
										<tspan
											x={
												selectedLanguage === 'es'
													? -27.261
													: -20.261
											}
											y={10}>
											{t('HOSPITALARIA')}
										</tspan>
									</text>
								</g>
								<a href="/productos/neurointervencionismo">
									<g transform="translate(164.538)">
										<g
											className="aa-portfolio-1"
											transform="matrix(1, 0, 0, 1, -227.29, -317.54)">
											<rect
												className="c-portfolio-1"
												width={172.727}
												height={341.038}
												rx={35}
												transform="translate(227.29 317.54)"
											/>
										</g>
										<path
											className="u-portfolio-1"
											d="M0,0V107.433H0q0,.04,0,.079V185.6c0,11.081,8.422,20.064,18.811,20.064H154.049c10.389,0,18.811-8.983,18.811-20.064V107.512l-.034-.079h.034L150.7,34.522C144.353,13.628,129.373,0,112.754,0Z"
											transform="translate(172.893 205.664) rotate(180)"
										/>
										<text
											className="v-portfolio-1"
											transform="translate(60 268.095)">
											<tspan x={-48.055} y={0}>
												{t('Neurointervencionismo')}
											</tspan>
										</text>
									</g>
								</a>
							</g>
						</g>
						<g
							transform="translate(328.987 423.274)"
							onClick={() => setView(9)}>
							<g
								className="z-portfolio-1"
								transform="matrix(1, 0, 0, 1, -328.99, -707.27)">
								<path
									className="w-portfolio-1"
									d="M95.008,0H53.282a52.209,52.209,0,0,0-48.6,33.144L0,45.069H40.014A54.95,54.95,0,0,0,91.441,9.477Z"
									transform="translate(361.99 722.93)"
								/>
							</g>
							<path
								className="c-portfolio-1"
								d="M23.394,0V5.743H0V8.625H23.394v5.742l12.44-7.184Z"
								transform="translate(62.591 31.008)"
							/>
						</g>
						<g
							transform="translate(171 438.931)"
							onClick={() => setView(7)}>
							<g
								className="y-portfolio-1"
								transform="matrix(1, 0, 0, 1, -171, -722.93)">
								<path
									className="w-portfolio-1"
									d="M0,0H41.727a52.21,52.21,0,0,1,48.6,33.144l4.678,11.925H54.994A54.95,54.95,0,0,1,3.567,9.477Z"
									transform="translate(171 722.93)"
								/>
							</g>
							<path
								className="c-portfolio-1"
								d="M12.441,0V5.743H35.834V8.625H12.441v5.742L0,7.183Z"
								transform="translate(29.587 15.351)"
							/>
						</g>
						<ellipse
							className="x-portfolio-1"
							cx={97.5}
							cy={8}
							rx={97.5}
							ry={8}
							transform="translate(228.381 385.204)"
						/>
						<ellipse
							className="x-portfolio-1"
							cx={67.5}
							cy={6}
							rx={67.5}
							ry={6}
							transform="translate(70.743 328.917)"
						/>
						<ellipse
							className="x-portfolio-1"
							cx={67.5}
							cy={6}
							rx={67.5}
							ry={6}
							transform="translate(426.788 328.917)"
						/>
					</g>
				</svg>
			) : view === 9 ? (
				<svg
					viewBox="106 0 414 960"
					preserveAspectRatio="none"
					width="100%"
					height="100vh"
					onTouchEnd={(e) => {
						if (e.nativeEvent.changedTouches[0].clientX > initial) {
							setView((prevState: number) =>
								prevState === 0 ? 10 : prevState - 1
							)
						} else if (
							e.nativeEvent.changedTouches[0].clientX < initial
						) {
							setView((prevState: number) =>
								prevState === 10 ? 0 : prevState + 1
							)
						}
					}}
					onTouchStart={(e) =>
						setInitial(e.nativeEvent.changedTouches[0].clientX)
					}>
					<defs>
						<style>
							{
								".a-portfolio-1{fill:#d9dae4;}.b-portfolio-1,.l-portfolio-1{fill:none;}.c-portfolio-1,.o-portfolio-1{fill:#fff;}.d-portfolio-1{clip-path:url(#a-portfolio-1);}.e-portfolio-1{opacity:0.45;}.f-portfolio-1{fill:gray;}.g-portfolio-1{fill:#d3d3d3;}.h-portfolio-1{fill:#c1c1c1;}.i-portfolio-1{fill:#a4a4a4;}.j-portfolio-1{clip-path:url(#b-portfolio-1);}.k-portfolio-1{fill:#e40032;}.l-portfolio-1{stroke:#001f5f;stroke-miterlimit:10;stroke-width:0.942px;}.m-portfolio-1,.n-portfolio-1{fill:#001f5f;}.m-portfolio-1{font-size:46px;font-family:'Kiona-Bold';}.m-portfolio-1,.s-portfolio-1,.v-portfolio-1{font-weight:700;}.o-portfolio-1{font-size:16px;font-family:Silka-Medium, Silka;font-weight:500;}.p-portfolio-1{clip-path:url(#c-portfolio-1);}.q-portfolio-1{opacity:0.5;}.r-portfolio-1{fill:url(#f-portfolio-1);}.s-portfolio-1,.v-portfolio-1{fill:#182856;font-family:Silka-Bold, Silka;}.s-portfolio-1{font-size:9px;}.t-portfolio-1{fill:url(#i-portfolio-1);}.u-portfolio-1{fill:url(#l-portfolio-1);}.v-portfolio-1{font-size:13px;}.w-portfolio-1{fill:#c7c7cc;}.x-portfolio-1{opacity:0.36;mix-blend-mode:multiply;isolation:isolate;fill:url(#q-portfolio-1);}.y-portfolio-1{filter:url(#o-portfolio-1);}.z-portfolio-1{filter:url(#m-portfolio-1);}.aa-portfolio-1{filter:url(#j-portfolio-1);}.ab-portfolio-1{filter:url(#g-portfolio-1);}.ac-portfolio-1{filter:url(#d-portfolio-1);}"
							}
						</style>
						<clipPath id="a-portfolio-1">
							<rect
								className="a-portfolio-1"
								width={575.68}
								height={493.047}
							/>
						</clipPath>
						<clipPath id="b-portfolio-1">
							<rect
								className="b-portfolio-1"
								width={403.527}
								height={960}
							/>
						</clipPath>
						<clipPath id="c-portfolio-1">
							<rect
								className="c-portfolio-1"
								width={613}
								height={502}
								transform="translate(0)"
							/>
						</clipPath>
						<filter
							id="d-portfolio-1"
							x={53.754}
							y={311.543}
							width={162.484}
							height={303.272}
							filterUnits="userSpaceOnUse">
							<feOffset dy={3} />
							<feGaussianBlur stdDeviation={3} result="e" />
							<feFlood floodOpacity={0.161} />
							<feComposite operator="in" in2="e" />
							<feComposite in="SourceGraphic" />
						</filter>
						<pattern
							id="f-portfolio-1"
							width={1}
							height={1}
							patternTransform="translate(578 344.068) rotate(-180)"
							viewBox="0 2.304 140.722 167.426">
							<image
								preserveAspectRatio="none"
								width={170}
								height={172.034}
								xlinkHref="/images/services/Neurointervencionismo.webp"
							/>
						</pattern>
						<filter
							id="g-portfolio-1"
							x={411.911}
							y={311.543}
							width={162.484}
							height={303.272}
							filterUnits="userSpaceOnUse">
							<feOffset dy={3} />
							<feGaussianBlur stdDeviation={3} result="h" />
							<feFlood floodOpacity={0.161} />
							<feComposite operator="in" in2="h" />
							<feComposite in="SourceGraphic" />
						</filter>
						<pattern
							id="i-portfolio-1"
							width={1}
							height={1}
							patternTransform="translate(620.103 344.068) rotate(-180)"
							viewBox="0 3.64 132.23 157.323">
							<image
								preserveAspectRatio="none"
								width={170}
								height={172.034}
								xlinkHref="/images/biomedico-movil.jpg"
							/>
						</pattern>
						<filter
							id="j-portfolio-1"
							x={218.292}
							y={311.543}
							width={190.727}
							height={359.038}
							filterUnits="userSpaceOnUse">
							<feOffset dy={3} />
							<feGaussianBlur stdDeviation={3} result="k" />
							<feFlood floodOpacity={0.161} />
							<feComposite operator="in" in2="k" />
							<feComposite in="SourceGraphic" />
						</filter>
						<pattern
							id="l-portfolio-1"
							width={1}
							height={1}
							patternTransform="translate(520.065 411.327) rotate(-180)"
							viewBox="0 3.464 164.537 195.761">
							<image
								preserveAspectRatio="none"
								width={170}
								height={205.664}
								xlinkHref="/images/services/Logistica-Hs.webp"
							/>
						</pattern>
						<filter
							id="m-portfolio-1"
							x={352.992}
							y={716.931}
							width={113.008}
							height={63.069}
							filterUnits="userSpaceOnUse">
							<feOffset dy={3} />
							<feGaussianBlur stdDeviation={3} result="n" />
							<feFlood floodOpacity={0.6} />
							<feComposite operator="in" in2="n" />
							<feComposite in="SourceGraphic" />
						</filter>
						<filter
							id="o-portfolio-1"
							x={162}
							y={716.931}
							width={113.008}
							height={63.069}
							filterUnits="userSpaceOnUse">
							<feOffset dy={3} />
							<feGaussianBlur stdDeviation={3} result="p" />
							<feFlood floodOpacity={0.6} />
							<feComposite operator="in" in2="p" />
							<feComposite in="SourceGraphic" />
						</filter>
						<radialGradient
							id="q-portfolio-1"
							cx={0.5}
							cy={0.5}
							r={0.538}
							gradientTransform="translate(0 0.113) scale(1 0.774)"
							gradientUnits="objectBoundingBox">
							<stop offset={0} stopColor="#9e9e9e" />
							<stop offset={1} stopColor="gray" stopOpacity={0} />
						</radialGradient>
					</defs>
					<rect
						className="c-portfolio-1"
						width={418}
						height={958.42}
						transform="translate(106.084)"
					/>
					<g
						className="d-portfolio-1"
						transform="translate(27.244 466.953)">
						<g
							className="e-portfolio-1"
							transform="translate(-114.213 15.386)">
							<path
								className="f-portfolio-1"
								d="M.595,362.454,148.249,493.466l-.595-303.659L0,58.795Z"
								transform="translate(0 22.179)"
							/>
							<path
								className="g-portfolio-1"
								d="M92.335,153.923l.595,303.659h504.5l-.593-303.659Z"
								transform="translate(55.319 58.063)"
							/>
							<path
								className="h-portfolio-1"
								d="M407.824,189.807l.595,303.659L572.566,362.453l-.593-303.659Z"
								transform="translate(244.333 22.179)"
							/>
							<path
								className="i-portfolio-1"
								d="M413.255,0,0,80.973,147.654,211.987h504.5L816.3,80.973Z"
								transform="translate(0)"
							/>
						</g>
					</g>
					<g transform="translate(106.084)">
						<g className="j-portfolio-1">
							<path
								className="k-portfolio-1"
								d="M.527.471V75.179h113.05c28.766,0,55.243-28.481,71.55-74.708Z"
								transform="translate(0.063 0.123)"
							/>
							<path
								className="k-portfolio-1"
								d="M71.851,747.92V713.612c0-40.767-21.59-77.244-55.02-92.936l-16.3-8.3V610.8l16.811,8.555c33.889,15.909,55.787,52.906,55.787,94.253V747.92Z"
								transform="translate(0.063 212.08)"
							/>
							<path
								className="l-portfolio-1"
								d="M.471.471V96.646H129.562c32.848,0,63.081-36.665,81.7-96.175Z"
								transform="translate(0.056 0.123)"
							/>
						</g>
					</g>
					<text
						className="m-portfolio-1"
						transform="translate(320 165.842)">
						<tspan x={-140.3} y={46}>
							{t('Portafolio ')}
						</tspan>
					</text>
					<g transform="translate(316.562 869.166)" onClick={onClose}>
						<path
							className="n-portfolio-1"
							d="M207.522,145.656V54.822H80.435C48.1,54.822,18.333,89.451,0,145.656Z"
							transform="translate(0 -54.822)"
						/>
						<g transform="translate(90.438 35.798)">
							<path
								className="c-portfolio-1"
								d="M0,0V19.012L16.462,9.505,8.6,4.965Z"
								transform="translate(16.462 19.012) rotate(180)"
							/>
							<text
								className="o-portfolio-1"
								transform="translate(72.852 15.238)">
								<tspan x={-46.928} y={0}>
									{t('Volver')}
								</tspan>
							</text>
						</g>
					</g>
					<g transform="translate(0 284)">
						<g className="p-portfolio-1" transform="translate(0)">
							<g transform="translate(62.754 33.544)">
								<g className="q-portfolio-1">
									<g transform="translate(0)">
										<g
											className="ac-portfolio-1"
											transform="matrix(1, 0, 0, 1, -62.75, -317.54)">
											<rect
												className="c-portfolio-1"
												width={144.484}
												height={285.272}
												rx={21}
												transform="translate(62.75 317.54)"
											/>
										</g>
										<path
											className="r-portfolio-1"
											d="M0,0V89.866H0q0,.033,0,.066v65.319c0,9.269,7.045,16.783,15.735,16.783H128.86c8.69,0,15.735-7.514,15.735-16.783V89.932l-.028-.066h.028L126.061,28.877C120.749,11.4,108.218,0,94.317,0Z"
											transform="translate(144.595 172.034) rotate(180)"
										/>
									</g>
									<text
										className="s-portfolio-1"
										transform="translate(72.297 208.235)">
										<tspan x={-41.827} y={0}>
											{t('Neurointervencionismo')}
										</tspan>
									</text>
								</g>
								<g
									className="q-portfolio-1"
									transform="translate(358.157)">
									<g transform="translate(0)">
										<g
											className="ab-portfolio-1"
											transform="matrix(1, 0, 0, 1, -420.91, -317.54)">
											<rect
												className="c-portfolio-1"
												width={144.484}
												height={285.272}
												rx={21}
												transform="translate(420.91 317.54)"
											/>
										</g>
										<path
											className="t-portfolio-1"
											d="M0,0V89.866H0q0,.033,0,.066v65.319c0,9.269,7.045,16.783,15.735,16.783H128.86c8.69,0,15.735-7.514,15.735-16.783V89.932l-.028-.066h.028L126.061,28.877C120.749,11.4,108.218,0,94.317,0Z"
											transform="translate(144.595 172.034) rotate(180)"
										/>
									</g>
									<text
										className="s-portfolio-1"
										transform="translate(71.47 211.235)">
										<tspan x={-20.466} y={0}>
											{t('Mantenimiento')}
										</tspan>
										<tspan x={-20.466} y={12}>
											{t('biomédico')}
										</tspan>
									</text>
								</g>
								<a href="/productos/logistica-hospitalaria">
									<g transform="translate(164.538)">
										<g
											className="aa-portfolio-1"
											transform="matrix(1, 0, 0, 1, -227.29, -317.54)">
											<rect
												className="c-portfolio-1"
												width={172.727}
												height={341.038}
												rx={35}
												transform="translate(227.29 317.54)"
											/>
										</g>
										<path
											className="u-portfolio-1"
											d="M0,0V107.433H0q0,.04,0,.079V185.6c0,11.081,8.422,20.064,18.811,20.064H154.049c10.389,0,18.811-8.983,18.811-20.064V107.512l-.034-.079h.034L150.7,34.522C144.353,13.628,129.373,0,112.754,0Z"
											transform="translate(172.893 205.664) rotate(180)"
										/>
										<text
											className="v-portfolio-1"
											transform="translate(75 268.095)">
											<tspan
												x={
													selectedLanguage === 'es'
														? -16.466
														: -9.466
												}
												y={0}>
												{t('Logística')}
											</tspan>
											<tspan
												x={
													selectedLanguage === 'es'
														? -27.261
														: -10.261
												}
												y={15}>
												{t('hospitalaria')}
											</tspan>
										</text>
									</g>
								</a>
							</g>
						</g>
						<g
							transform="translate(328.987 423.274)"
							onClick={() => setView(10)}>
							<g
								className="z-portfolio-1"
								transform="matrix(1, 0, 0, 1, -328.99, -707.27)">
								<path
									className="w-portfolio-1"
									d="M95.008,0H53.282a52.209,52.209,0,0,0-48.6,33.144L0,45.069H40.014A54.95,54.95,0,0,0,91.441,9.477Z"
									transform="translate(361.99 722.93)"
								/>
							</g>
							<path
								className="c-portfolio-1"
								d="M23.394,0V5.743H0V8.625H23.394v5.742l12.44-7.184Z"
								transform="translate(62.591 31.008)"
							/>
						</g>
						<g
							transform="translate(171 438.931)"
							onClick={() => setView(8)}>
							<g
								className="y-portfolio-1"
								transform="matrix(1, 0, 0, 1, -171, -722.93)">
								<path
									className="w-portfolio-1"
									d="M0,0H41.727a52.21,52.21,0,0,1,48.6,33.144l4.678,11.925H54.994A54.95,54.95,0,0,1,3.567,9.477Z"
									transform="translate(171 722.93)"
								/>
							</g>
							<path
								className="c-portfolio-1"
								d="M12.441,0V5.743H35.834V8.625H12.441v5.742L0,7.183Z"
								transform="translate(29.587 15.351)"
							/>
						</g>
						<ellipse
							className="x-portfolio-1"
							cx={97.5}
							cy={8}
							rx={97.5}
							ry={8}
							transform="translate(228.381 385.204)"
						/>
						<ellipse
							className="x-portfolio-1"
							cx={67.5}
							cy={6}
							rx={67.5}
							ry={6}
							transform="translate(70.743 328.917)"
						/>
						<ellipse
							className="x-portfolio-1"
							cx={67.5}
							cy={6}
							rx={67.5}
							ry={6}
							transform="translate(426.788 328.917)"
						/>
					</g>
				</svg>
			) : view === 10 ? (
				<svg
					viewBox="106 0 414 960"
					preserveAspectRatio="none"
					width="100%"
					height="100vh"
					onTouchEnd={(e) => {
						if (e.nativeEvent.changedTouches[0].clientX > initial) {
							setView((prevState: number) =>
								prevState === 0 ? 10 : prevState - 1
							)
						} else if (
							e.nativeEvent.changedTouches[0].clientX < initial
						) {
							setView((prevState: number) =>
								prevState === 10 ? 0 : prevState + 1
							)
						}
					}}
					onTouchStart={(e) =>
						setInitial(e.nativeEvent.changedTouches[0].clientX)
					}>
					<defs>
						<style>
							{
								".a-portfolio-1{fill:#d9dae4;}.b-portfolio-1,.l-portfolio-1{fill:none;}.c-portfolio-1,.o-portfolio-1{fill:#fff;}.d-portfolio-1{clip-path:url(#a-portfolio-1);}.e-portfolio-1{opacity:0.45;}.f-portfolio-1{fill:gray;}.g-portfolio-1{fill:#d3d3d3;}.h-portfolio-1{fill:#c1c1c1;}.i-portfolio-1{fill:#a4a4a4;}.j-portfolio-1{clip-path:url(#b-portfolio-1);}.k-portfolio-1{fill:#e40032;}.l-portfolio-1{stroke:#001f5f;stroke-miterlimit:10;stroke-width:0.942px;}.m-portfolio-1,.n-portfolio-1{fill:#001f5f;}.m-portfolio-1{font-size:46px;font-family:'Kiona-Bold';}.m-portfolio-1,.s-portfolio-1,.v-portfolio-1{font-weight:700;}.o-portfolio-1{font-size:16px;font-family:Silka-Medium, Silka;font-weight:500;}.p-portfolio-1{clip-path:url(#c-portfolio-1);}.q-portfolio-1{opacity:0.5;}.r-portfolio-1{fill:url(#f-portfolio-1);}.s-portfolio-1,.v-portfolio-1{fill:#182856;font-family:Silka-Bold, Silka;}.s-portfolio-1{font-size:9px;}.t-portfolio-1{fill:url(#i-portfolio-1);}.u-portfolio-1{fill:url(#l-portfolio-1);}.v-portfolio-1{font-size:13px;}.w-portfolio-1{fill:#c7c7cc;}.x-portfolio-1{opacity:0.36;mix-blend-mode:multiply;isolation:isolate;fill:url(#q-portfolio-1);}.y-portfolio-1{filter:url(#o-portfolio-1);}.z-portfolio-1{filter:url(#m-portfolio-1);}.aa-portfolio-1{filter:url(#j-portfolio-1);}.ab-portfolio-1{filter:url(#g-portfolio-1);}.ac-portfolio-1{filter:url(#d-portfolio-1);}"
							}
						</style>
						<clipPath id="a-portfolio-1">
							<rect
								className="a-portfolio-1"
								width={575.68}
								height={493.047}
							/>
						</clipPath>
						<clipPath id="b-portfolio-1">
							<rect
								className="b-portfolio-1"
								width={403.527}
								height={960}
							/>
						</clipPath>
						<clipPath id="c-portfolio-1">
							<rect
								className="c-portfolio-1"
								width={613}
								height={502}
								transform="translate(0)"
							/>
						</clipPath>
						<filter
							id="d-portfolio-1"
							x={53.754}
							y={311.543}
							width={162.484}
							height={303.272}
							filterUnits="userSpaceOnUse">
							<feOffset dy={3} />
							<feGaussianBlur stdDeviation={3} result="e" />
							<feFlood floodOpacity={0.161} />
							<feComposite operator="in" in2="e" />
							<feComposite in="SourceGraphic" />
						</filter>
						<pattern
							id="f-portfolio-1"
							width={1}
							height={1}
							patternTransform="translate(578 344.068) rotate(-180)"
							viewBox="0 2.304 140.722 167.426">
							<image
								preserveAspectRatio="none"
								width={170}
								height={172.034}
								xlinkHref="/images/services/Logistica-Hs.webp"
							/>
						</pattern>
						<filter
							id="g-portfolio-1"
							x={411.911}
							y={311.543}
							width={162.484}
							height={303.272}
							filterUnits="userSpaceOnUse">
							<feOffset dy={3} />
							<feGaussianBlur stdDeviation={3} result="h" />
							<feFlood floodOpacity={0.161} />
							<feComposite operator="in" in2="h" />
							<feComposite in="SourceGraphic" />
						</filter>
						<pattern
							id="i-portfolio-1"
							width={1}
							height={1}
							patternTransform="translate(620.103 344.068) rotate(-180)"
							viewBox="0 3.64 132.23 157.323">
							<image
								preserveAspectRatio="none"
								width={170}
								height={172.034}
								xlinkHref="/images/services/Medicamentos.webp"
							/>
						</pattern>
						<filter
							id="j-portfolio-1"
							x={218.292}
							y={311.543}
							width={190.727}
							height={359.038}
							filterUnits="userSpaceOnUse">
							<feOffset dy={3} />
							<feGaussianBlur stdDeviation={3} result="k" />
							<feFlood floodOpacity={0.161} />
							<feComposite operator="in" in2="k" />
							<feComposite in="SourceGraphic" />
						</filter>
						<pattern
							id="l-portfolio-1"
							width={1}
							height={1}
							patternTransform="translate(520.065 411.327) rotate(-180)"
							viewBox="0 3.464 164.537 195.761">
							<image
								preserveAspectRatio="none"
								width={170}
								height={205.664}
								xlinkHref="/images/biomedico-movil.jpg"
							/>
						</pattern>
						<filter
							id="m-portfolio-1"
							x={352.992}
							y={716.931}
							width={113.008}
							height={63.069}
							filterUnits="userSpaceOnUse">
							<feOffset dy={3} />
							<feGaussianBlur stdDeviation={3} result="n" />
							<feFlood floodOpacity={0.6} />
							<feComposite operator="in" in2="n" />
							<feComposite in="SourceGraphic" />
						</filter>
						<filter
							id="o-portfolio-1"
							x={162}
							y={716.931}
							width={113.008}
							height={63.069}
							filterUnits="userSpaceOnUse">
							<feOffset dy={3} />
							<feGaussianBlur stdDeviation={3} result="p" />
							<feFlood floodOpacity={0.6} />
							<feComposite operator="in" in2="p" />
							<feComposite in="SourceGraphic" />
						</filter>
						<radialGradient
							id="q-portfolio-1"
							cx={0.5}
							cy={0.5}
							r={0.538}
							gradientTransform="translate(0 0.113) scale(1 0.774)"
							gradientUnits="objectBoundingBox">
							<stop offset={0} stopColor="#9e9e9e" />
							<stop offset={1} stopColor="gray" stopOpacity={0} />
						</radialGradient>
					</defs>
					<rect
						className="c-portfolio-1"
						width={418}
						height={958.42}
						transform="translate(106.084)"
					/>
					<g
						className="d-portfolio-1"
						transform="translate(27.244 466.953)">
						<g
							className="e-portfolio-1"
							transform="translate(-114.213 15.386)">
							<path
								className="f-portfolio-1"
								d="M.595,362.454,148.249,493.466l-.595-303.659L0,58.795Z"
								transform="translate(0 22.179)"
							/>
							<path
								className="g-portfolio-1"
								d="M92.335,153.923l.595,303.659h504.5l-.593-303.659Z"
								transform="translate(55.319 58.063)"
							/>
							<path
								className="h-portfolio-1"
								d="M407.824,189.807l.595,303.659L572.566,362.453l-.593-303.659Z"
								transform="translate(244.333 22.179)"
							/>
							<path
								className="i-portfolio-1"
								d="M413.255,0,0,80.973,147.654,211.987h504.5L816.3,80.973Z"
								transform="translate(0)"
							/>
						</g>
					</g>
					<g transform="translate(106.084)">
						<g className="j-portfolio-1">
							<path
								className="k-portfolio-1"
								d="M.527.471V75.179h113.05c28.766,0,55.243-28.481,71.55-74.708Z"
								transform="translate(0.063 0.123)"
							/>
							<path
								className="k-portfolio-1"
								d="M71.851,747.92V713.612c0-40.767-21.59-77.244-55.02-92.936l-16.3-8.3V610.8l16.811,8.555c33.889,15.909,55.787,52.906,55.787,94.253V747.92Z"
								transform="translate(0.063 212.08)"
							/>
							<path
								className="l-portfolio-1"
								d="M.471.471V96.646H129.562c32.848,0,63.081-36.665,81.7-96.175Z"
								transform="translate(0.056 0.123)"
							/>
						</g>
					</g>
					<text
						className="m-portfolio-1"
						transform="translate(320 165.842)">
						<tspan x={-140.3} y={46}>
							{t('Portafolio ')}
						</tspan>
					</text>
					<g transform="translate(316.562 869.166)" onClick={onClose}>
						<path
							className="n-portfolio-1"
							d="M207.522,145.656V54.822H80.435C48.1,54.822,18.333,89.451,0,145.656Z"
							transform="translate(0 -54.822)"
						/>
						<g transform="translate(90.438 35.798)">
							<path
								className="c-portfolio-1"
								d="M0,0V19.012L16.462,9.505,8.6,4.965Z"
								transform="translate(16.462 19.012) rotate(180)"
							/>
							<text
								className="o-portfolio-1"
								transform="translate(72.852 15.238)">
								<tspan x={-46.928} y={0}>
									{t('Volver')}
								</tspan>
							</text>
						</g>
					</g>
					<g transform="translate(0 284)">
						<g className="p-portfolio-1" transform="translate(0)">
							<g transform="translate(62.754 33.544)">
								<g className="q-portfolio-1">
									<g transform="translate(0)">
										<g
											className="ac-portfolio-1"
											transform="matrix(1, 0, 0, 1, -62.75, -317.54)">
											<rect
												className="c-portfolio-1"
												width={144.484}
												height={285.272}
												rx={21}
												transform="translate(62.75 317.54)"
											/>
										</g>
										<path
											className="r-portfolio-1"
											d="M0,0V89.866H0q0,.033,0,.066v65.319c0,9.269,7.045,16.783,15.735,16.783H128.86c8.69,0,15.735-7.514,15.735-16.783V89.932l-.028-.066h.028L126.061,28.877C120.749,11.4,108.218,0,94.317,0Z"
											transform="translate(144.595 172.034) rotate(180)"
										/>
									</g>
									<text
										className="s-portfolio-1"
										transform="translate(72.297 208.235)">
										<tspan x={-41.827} y={0}>
											{t('Logística')}
										</tspan>
										<tspan x={-41.827} y={15}>
											{t('hospitalaria')}
										</tspan>
									</text>
								</g>
								<g
									className="q-portfolio-1"
									transform="translate(358.157)">
									<g transform="translate(0)">
										<g
											className="ab-portfolio-1"
											transform="matrix(1, 0, 0, 1, -420.91, -317.54)">
											<rect
												className="c-portfolio-1"
												width={144.484}
												height={285.272}
												rx={21}
												transform="translate(420.91 317.54)"
											/>
										</g>
										<path
											className="t-portfolio-1"
											d="M0,0V89.866H0q0,.033,0,.066v65.319c0,9.269,7.045,16.783,15.735,16.783H128.86c8.69,0,15.735-7.514,15.735-16.783V89.932l-.028-.066h.028L126.061,28.877C120.749,11.4,108.218,0,94.317,0Z"
											transform="translate(144.595 172.034) rotate(180)"
										/>
									</g>
									<text
										className="s-portfolio-1"
										transform="translate(71.47 211.235)">
										<tspan x={-20.466} y={0}>
											{t('Medicamentos')}
										</tspan>
									</text>
								</g>
								<a href="/biomedico">
									<g transform="translate(164.538)">
										<g
											className="aa-portfolio-1"
											transform="matrix(1, 0, 0, 1, -227.29, -317.54)">
											<rect
												className="c-portfolio-1"
												width={172.727}
												height={341.038}
												rx={35}
												transform="translate(227.29 317.54)"
											/>
										</g>
										<path
											className="u-portfolio-1"
											d="M0,0V107.433H0q0,.04,0,.079V185.6c0,11.081,8.422,20.064,18.811,20.064H154.049c10.389,0,18.811-8.983,18.811-20.064V107.512l-.034-.079h.034L150.7,34.522C144.353,13.628,129.373,0,112.754,0Z"
											transform="translate(172.893 205.664) rotate(180)"
										/>
										<text
											className="v-portfolio-1"
											transform="translate(75 268.095)">
											<tspan
												x={
													selectedLanguage === 'es'
														? -36.466
														: -25.466
												}
												y={0}>
												{t('Mantenimiento')}
											</tspan>
											<tspan
												x={
													selectedLanguage === 'es'
														? -18.261
														: -33.261
												}
												y={15}>
												{t('biomédico_2')}
											</tspan>
										</text>
									</g>
								</a>
							</g>
						</g>
						<g
							transform="translate(328.987 423.274)"
							onClick={() => setView(0)}>
							<g
								className="z-portfolio-1"
								transform="matrix(1, 0, 0, 1, -328.99, -707.27)">
								<path
									className="w-portfolio-1"
									d="M95.008,0H53.282a52.209,52.209,0,0,0-48.6,33.144L0,45.069H40.014A54.95,54.95,0,0,0,91.441,9.477Z"
									transform="translate(361.99 722.93)"
								/>
							</g>
							<path
								className="c-portfolio-1"
								d="M23.394,0V5.743H0V8.625H23.394v5.742l12.44-7.184Z"
								transform="translate(62.591 31.008)"
							/>
						</g>
						<g
							transform="translate(171 438.931)"
							onClick={() => setView(9)}>
							<g
								className="y-portfolio-1"
								transform="matrix(1, 0, 0, 1, -171, -722.93)">
								<path
									className="w-portfolio-1"
									d="M0,0H41.727a52.21,52.21,0,0,1,48.6,33.144l4.678,11.925H54.994A54.95,54.95,0,0,1,3.567,9.477Z"
									transform="translate(171 722.93)"
								/>
							</g>
							<path
								className="c-portfolio-1"
								d="M12.441,0V5.743H35.834V8.625H12.441v5.742L0,7.183Z"
								transform="translate(29.587 15.351)"
							/>
						</g>
						<ellipse
							className="x-portfolio-1"
							cx={97.5}
							cy={8}
							rx={97.5}
							ry={8}
							transform="translate(228.381 385.204)"
						/>
						<ellipse
							className="x-portfolio-1"
							cx={67.5}
							cy={6}
							rx={67.5}
							ry={6}
							transform="translate(70.743 328.917)"
						/>
						<ellipse
							className="x-portfolio-1"
							cx={67.5}
							cy={6}
							rx={67.5}
							ry={6}
							transform="translate(426.788 328.917)"
						/>
					</g>
				</svg>
			) : null}
		</React.Fragment>
	)
}

export default PortfolioCarousel
