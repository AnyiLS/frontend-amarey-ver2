import { notiicasMocks } from 'mocks/noticias.mocks'
import React from 'react'
import { useTranslation } from 'react-i18next'

import './notiicias.css'
import NoticiasMovil from './NoticiasMovil'
import useGeneral from 'hooks/general.hook'
import useLayout from 'hooks/ancho.hook'

const Noticias = () => {
	const [page, setPage] = React.useState(0)

	const { t } = useTranslation()
	const { width } = useGeneral()
	const { navbarHeight } = useLayout()

	return (
		<div>
			{width > 768 ? (
				<div className="h-full" style={{ marginTop: navbarHeight }}>
					<svg
						width="100%"
						height={'100%'}
						viewBox="5 92 1920 1250"
						preserveAspectRatio="none">
						<defs>
							<style>
								{
									'.a-products-desktop,.c-products-desktop,.d-products-desktop{fill:none;}.b-products-desktop{clip-path:url(#a-products-desktop);}.c-products-desktop{stroke:#e40032;}.d-products-desktop{stroke:#001f5f;}.e-products-desktop,.f-products-desktop,.g-products-desktop,.j-products-desktop,.k-products-desktop,.p-products-desktop{fill:#001f5f;}.f-products-desktop{stroke:#707070;}.g-products-desktop{font-size:42px;}.g-products-desktop,.t-products-desktop{font-family:Kiona-Bold, Kiona;font-weight:700;}.h-products-desktop,.l-products-desktop,.m-products-desktop,.r-products-desktop,.t-products-desktop{fill:#fff;}.i-products-desktop{fill:#838383;}.j-products-desktop,.l-products-desktop{font-size:24px;font-family:Silka-Regular, Silka;}.k-products-desktop,.m-products-desktop{font-size:18px;}.k-products-desktop,.m-products-desktop,.p-products-desktop{font-family:Silka-SemiBold, Silka;font-weight:600;}.n-products-desktop{fill:url(#l-products-desktop);}.o-products-desktop{fill:url(#p-products-desktop);}.p-products-desktop{font-size:40px;}.q-products-desktop{fill:#c7c7cc;}.r-products-desktop{opacity:0.5-products-desktop;}.s-products-desktop{fill:#e40032;}.t-products-desktop{font-size:28px;}.u-products-desktop{stroke:none;}.v-products-desktop{filter:url(#u-products-desktop);}.w-products-desktop{filter:url(#s-products-desktop);}.x-products-desktop{filter:url(#q-products-desktop);}.y-products-desktop{filter:url(#m-products-desktop);}.z-products-desktop{filter:url(#j-products-desktop);}.aa-products-desktop{filter:url(#h-products-desktop);}.ab-products-desktop{filter:url(#f-products-desktop);}.ac-products-desktop{filter:url(#d-products-desktop);}.ad-products-desktop{filter:url(#b-products-desktop);}'
								}
							</style>
							<clipPath id="a-products-desktop">
								<rect
									className="a-products-desktop"
									width={1925}
									height={1718}
								/>
							</clipPath>
							<filter
								id="b-products-desktop"
								x={1211.42}
								y={1017.33}
								width={301.409}
								height={276.96}
								filterUnits="userSpaceOnUse">
								<feOffset dy={3} />
								<feGaussianBlur stdDeviation={3} result="c" />
								<feFlood floodOpacity={0.502} />
								<feComposite operator="in" in2="c" />
								<feComposite in="SourceGraphic" />
							</filter>
							<filter
								id="d-products-desktop"
								x={1457.162}
								y={1017.33}
								width={283.102}
								height={276.96}
								filterUnits="userSpaceOnUse">
								<feOffset dy={3} />
								<feGaussianBlur stdDeviation={3} result="e" />
								<feFlood floodOpacity={0.502} />
								<feComposite operator="in" in2="e" />
								<feComposite in="SourceGraphic" />
							</filter>
							<filter
								id="f-products-desktop"
								x={700.581}
								y={1017.33}
								width={301.411}
								height={276.96}
								filterUnits="userSpaceOnUse">
								<feOffset dy={3} />
								<feGaussianBlur stdDeviation={3} result="g" />
								<feFlood floodOpacity={0.502} />
								<feComposite operator="in" in2="g" />
								<feComposite in="SourceGraphic" />
							</filter>
							<filter
								id="h-products-desktop"
								x={946.325}
								y={1017.33}
								width={283.093}
								height={276.96}
								filterUnits="userSpaceOnUse">
								<feOffset dy={3} />
								<feGaussianBlur stdDeviation={3} result="i" />
								<feFlood floodOpacity={0.502} />
								<feComposite operator="in" in2="i" />
								<feComposite in="SourceGraphic" />
							</filter>
							<filter
								id="j-products-desktop"
								x={189.736}
								y={1017.33}
								width={301.409}
								height={276.96}
								filterUnits="userSpaceOnUse">
								<feOffset dy={3} />
								<feGaussianBlur stdDeviation={3} result="k" />
								<feFlood floodOpacity={0.502} />
								<feComposite operator="in" in2="k" />
								<feComposite in="SourceGraphic" />
							</filter>
							<pattern
								id="l-products-desktop"
								preserveAspectRatio="xMidYMid slice"
								width="100%"
								height="100%"
								viewBox="0 0 1770 1328">
								<image
									width={1770}
									height={1328}
									xlinkHref={notiicasMocks(t)[page].image}
								/>
							</pattern>
							<filter
								id="m-products-desktop"
								x={435.478}
								y={1017.33}
								width={283.102}
								height={276.96}
								filterUnits="userSpaceOnUse">
								<feOffset dy={3} />
								<feGaussianBlur stdDeviation={3} result="n" />
								<feFlood floodOpacity={0.502} />
								<feComposite operator="in" in2="n" />
								<feComposite in="SourceGraphic" />
							</filter>
							<linearGradient
								id="p-products-desktop"
								x1={0.5}
								x2={0.5}
								y2={1}
								gradientUnits="objectBoundingBox">
								<stop
									offset={0}
									stopColor="#fff"
									stopOpacity={0}
								/>
								<stop
									offset={0.717}
									stopColor="#fff"
									stopOpacity={0.875}
								/>
								<stop offset={1} stopColor="#fff" />
							</linearGradient>
							<filter
								id="q-products-desktop"
								x={1667}
								y={440.038}
								width={125}
								height={109.057}
								filterUnits="userSpaceOnUse">
								<feOffset dy={3} />
								<feGaussianBlur stdDeviation={3} result="r" />
								<feFlood floodOpacity={0.6} />
								<feComposite operator="in" in2="r" />
								<feComposite in="SourceGraphic" />
							</filter>
							<filter
								id="s-products-desktop"
								x={138}
								y={440.038}
								width={125}
								height={109.057}
								filterUnits="userSpaceOnUse">
								<feOffset dy={3} />
								<feGaussianBlur stdDeviation={3} result="t" />
								<feFlood floodOpacity={0.6} />
								<feComposite operator="in" in2="t" />
								<feComposite in="SourceGraphic" />
							</filter>
							<filter
								id="u-products-desktop"
								x={801}
								y={698.921}
								width={329}
								height={83.309}
								filterUnits="userSpaceOnUse">
								<feOffset dy={3} />
								<feGaussianBlur stdDeviation={3} result="v" />
								<feFlood floodOpacity={0.4} />
								<feComposite operator="in" in2="v" />
								<feComposite in="SourceGraphic" />
							</filter>
						</defs>
						<g className="b-products-desktop">
							<path
								className="c-products-desktop"
								d="M0,63.443V62.66H63.657v.028h64.565a76.633,76.633,0,0,0,70.924-47.521l.023-.056L205.433,0h.843l-6.412,15.468c-.225.545-.457,1.084-.695,1.621a77.674,77.674,0,0,1-27.9,33.282,77.078,77.078,0,0,1-43.049,13.1H21.939v-.028Z"
								transform="translate(79.724 859)"
							/>
							<path
								className="d-products-desktop"
								d="M276.234,79.293v-.979H190.988v.035H104.526c-41.667,0-78.948-23.312-94.978-59.393l-.031-.07L1.129,0H0L8.587,19.332c.3.681.612,1.354.93,2.025,1.017,2.152,2.112,4.261,3.357,6.457a99.573,99.573,0,0,0,34,35.14,108.526,108.526,0,0,0,57.649,16.374H246.854v-.036Z"
								transform="translate(1925 1080.259) rotate(90)"
							/>
							<path
								className="e-products-desktop"
								d="M0,0V89.331H125.854c26.119,0,49.909-34.651,62.4-89.331Z"
								transform="translate(5 859)"
							/>
						</g>
						<g
							className="f-products-desktop"
							transform="translate(5 93)">
							<rect
								className="u-products-desktop"
								width={1920}
								height={800}
							/>
							<rect
								className="a-products-desktop"
								x={0.5}
								y={0.5}
								width={1919}
								height={799}
							/>
						</g>
						<text
							className="g-products-desktop"
							transform="translate(970 934)">
							<tspan x={-170.94} y={42}>
								{'Otras noticias '}
							</tspan>
						</text>
						{/* <g
							className="ad-products-desktop"
							transform="matrix(1, 0, 0, 1, 0, 0)">
							<path
								className="h-products-desktop"
								d="M1377.76,0H1132.018c-5.8,0-10.7,5.7-11.455,13.33L1094.45,241.66c-.906,9.16,4.481,17.3,11.455,17.3h245.742c-6.974,0-12.361-8.14-11.455-17.3L1366.3,13.33C1367.061,5.7,1371.962,0,1377.76,0"
								transform="translate(126.07 1023.33)"
							/>
						</g>
						<g
							className="ac-products-desktop"
							transform="matrix(1, 0, 0, 1, 0, 0)">
							<path
								className="i-products-desktop"
								d="M1622.578,241.72,1597.25,13.38C1596.512,5.74,1591.6,0,1585.785,0H1395.238c-5.8,0-10.7,5.7-11.455,13.33L1357.67,241.66c-.906,9.16,4.481,17.3,11.455,17.3h241.989c6.965,0,12.342-8.1,11.465-17.24"
								transform="translate(108.59 1023.33)"
							/>
						</g>
						<text
							className="j-products-desktop"
							transform="translate(1275 1075.31)">
							<tspan x={0} y={23}>
								{'Lorem ipsum '}
							</tspan>
							<tspan x={0} y={51}>
								{'dolor sit amet, '}
							</tspan>
							<tspan x={0} y={79}>
								{'consectetuer '}
							</tspan>
							<tspan x={0} y={107}>
								{'adipiscing elit, '}
							</tspan>
							<tspan x={0} y={135}>
								{'sed diam '}
							</tspan>
						</text>
						<text
							className="k-products-desktop"
							transform="translate(1450.5 1254.81)">
							<tspan x={-97.362} y={17}>
								{'14-05-2024'}
							</tspan>
						</text> */}
						{/* <g
							className="ab-products-desktop"
							transform="matrix(1, 0, 0, 1, 0, 0)">
							<path
								className="e-products-desktop"
								d="M830.59,258.96c-5.807,0-10.708-5.7-11.455-13.33L793.022,17.3C792.116,8.13,797.494,0,804.477,0H558.735c-6.983,0-12.37,8.13-11.455,17.3l26.113,228.33c.747,7.63,5.648,13.33,11.455,13.33Z"
								transform="translate(162.4 1023.33)"
							/>
						</g>
						<g
							className="aa-products-desktop"
							transform="matrix(1, 0, 0, 1, 0, 0)">
							<path
								className="i-products-desktop"
								d="M1063.944,0H821.955c-6.983,0-12.361,8.13-11.455,17.3l26.113,228.33c.747,7.63,5.648,13.33,11.455,13.33h190.548c5.816,0,10.727-5.74,11.455-13.39L1075.4,17.24c.878-9.15-4.5-17.24-11.455-17.24"
								transform="translate(144.92 1023.33)"
							/>
						</g>
						<text
							className="l-products-desktop"
							transform="translate(762 1075.31)">
							<tspan x={0} y={23}>
								{'Lorem ipsum '}
							</tspan>
							<tspan x={0} y={51}>
								{'dolor sit amet, '}
							</tspan>
							<tspan x={0} y={79}>
								{'consectetuer '}
							</tspan>
							<tspan x={0} y={107}>
								{'adipiscing elit, '}
							</tspan>
							<tspan x={0} y={135}>
								{'sed diam '}
							</tspan>
						</text>
						<text
							className="m-products-desktop"
							transform="translate(970 1254.81)">
							<tspan x={-97.362} y={17}>
								{'14-05-2024'}
							</tspan>
						</text> */}
						<g style={{ transform: 'translatex(511px)' }}>
							<a href="/noticias/detalle">
								<g
									className="z-products-desktop"
									transform="matrix(1, 0, 0, 1, 0, 0)">
									<path
										className="h-products-desktop"
										d="M283.41,0H37.668c-5.8,0-10.7,5.7-11.455,13.33L.1,241.66c-.906,9.16,4.481,17.3,11.455,17.3H257.3c-6.974,0-12.361-8.14-11.455-17.3L271.954,13.33C272.711,5.7,277.612,0,283.41,0"
										transform="translate(198.74 1023.33)"
									/>
								</g>
								<g
									className="y-products-desktop"
									transform="matrix(1, 0, 0, 1, 0, 0)">
									<path
										className="n-products-desktop"
										d="M528.229,241.72,502.9,13.38C502.162,5.74,497.252,0,491.435,0H300.888c-5.8,0-10.7,5.7-11.455,13.33L263.32,241.66c-.906,9.16,4.481,17.3,11.455,17.3H516.764c6.955,0,12.342-8.1,11.465-17.24"
										transform="translate(181.26 1023.33)"
									/>
								</g>
								<text
									className="j-products-desktop"
									transform="translate(254 1095.31)">
									<tspan x={0} y={23}>
										{t('Grupo ')}
									</tspan>
									<tspan x={0} y={51}>
										{t('amarey en ')}
									</tspan>
									<tspan x={0} y={79}>
										{t('sus 40 años ')}
									</tspan>
									<tspan x={0} y={107}>
										{t('estrena sedes ')}
									</tspan>
								</text>
								<text
									className="k-products-desktop"
									transform="translate(330 1254.81)">
									<tspan x={0} y={17}>
										{'14-05-2024'}
									</tspan>
								</text>
							</a>
						</g>

						<path
							className="n-products-desktop"
							d="M33.214,0h1303.32c20,0,35.464,20.889,32.943,44.5l-72.792,625.105c-2.108,19.744-16.221,34.543-32.944,34.543H108.265c-16.674,0-30.762-14.715-32.927-34.392L.287,44.657C-2.317,20.993,13.161,0,33.214,0"
							transform="translate(280.126 93.962)"
						/>
						<path
							className="o-products-desktop"
							d="M1327.313,388.343c-4.178,46.9-30.627,281.266-30.627,281.266-2.108,19.744-16.221,34.543-32.944,34.543H108.265c-16.674,0-30.762-14.715-32.927-34.392L42.419,388.343"
							transform="translate(278.691 93.962)"
						/>
						{notiicasMocks(t)[page].text()}
						<g
							transform="translate(1676 446.038)"
							onClick={() =>
								setPage(page + 1 > 2 ? 0 : page + 0)
							}>
							<g
								className="x-products-desktop"
								transform="matrix(1, 0, 0, 1, -1676, -446.04)">
								<path
									className="q-products-desktop"
									d="M107,0H60.007C35.82,0,14.1,26.57,5.268,66.963L0,91.057H45.064c25.769,0,48.841-28.646,57.919-71.911Z"
									transform="translate(1676 446.04)"
								/>
							</g>
							<path
								className="h-products-desktop"
								d="M21,0,42,36H0Z"
								transform="translate(78.489 24.499) rotate(90)"
							/>
						</g>
						<g
							transform="translate(147 446.038)"
							onClick={() => setPage(page > 0 ? page - 1 : 0)}>
							<g
								className="w-products-desktop"
								transform="matrix(1, 0, 0, 1, -147, -446.04)">
								<path
									className="q-products-desktop"
									d="M0,0H46.993C71.18,0,92.9,26.57,101.732,66.963L107,91.057H61.936c-25.769,0-48.841-28.646-57.919-71.911Z"
									transform="translate(147 446.04)"
								/>
							</g>
							<path
								className="h-products-desktop"
								d="M21,0,42,36H0Z"
								transform="translate(28.511 66.499) rotate(-90)"
							/>
						</g>
						<circle
							className={`r-products-desktop ${
								page === 1 ? 'selected' : ''
							}`}
							cx={14}
							cy={14}
							r={14}
							transform="translate(951 842)"
							onClick={() => setPage(0)}
						/>
						<circle
							className={`r-products-desktop ${
								page === 2 ? 'selected' : ''
							}`}
							cx={14}
							cy={14}
							r={14}
							transform="translate(1004 842)"
							onClick={() => setPage(0)}
						/>
						<circle
							className={`r-products-desktop ${
								page === 0 ? 'selected' : ''
							}`}
							cx={14}
							cy={14}
							r={14}
							transform="translate(898 842)"
							onClick={() => setPage(0)}
						/>
						<g
							transform="translate(810 704.921)"
							className="redireciona">
							<g
								className="v-products-desktop"
								transform="matrix(1, 0, 0, 1, -810, -704.92)">
								<path
									className="s-products-desktop"
									d="M311,0H63.79C38.078,0,14.99,19.057,5.6,48.028L0,65.309H245.159c27.393,0,51.92-20.546,61.57-51.577Z"
									transform="translate(810 704.92)"
								/>
							</g>
							<a href="/noticias/detalle">
								<text
									className="t-products-desktop"
									transform="translate(44.73 43.654)">
									<tspan x={0} y={0}>
										{t('Conoce Más')}
									</tspan>
								</text>
							</a>
							<path
								className="h-products-desktop"
								d="M45.263,0v19.72l17.089-9.86L54.189,5.15Z"
								transform="translate(196.727 24.795)"
							/>
						</g>
					</svg>
				</div>
			) : (
				<NoticiasMovil></NoticiasMovil>
			)}
		</div>
	)
}

export default Noticias
