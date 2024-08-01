import { notiicasMocksMobile } from 'mocks/noticias.mocks'
import React from 'react'
import { useTranslation } from 'react-i18next'

const NoticiasMovil = () => {
	const [page, setPage] = React.useState(0)

	console.log(page)

	const { t } = useTranslation()
	return (
		<div>
			<svg viewBox="3.4 0 414 1100.111">
				<defs>
					<style>
						{
							'.a-products-desktop{fill:none;}.b-products-desktop{clip-path:url(#a-products-desktop);}.c-products-desktop{fill:#e7002a;stroke:#e40032;}.d-products-desktop,.e-products-desktop,.f-products-desktop,.l-products-desktop,.p-products-desktop,.q-products-desktop,.u-products-desktop{fill:#001f5f;}.d-products-desktop{stroke:#001f5f;}.f-products-desktop{stroke:#707070;}.g-products-desktop{fill:#c7c7cc;}.h-products-desktop,.j-products-desktop,.n-products-desktop,.r-products-desktop,.t-products-desktop{fill:#fff;}.i-products-desktop{fill:url(#f-products-desktop);}.k-products-desktop{fill:url(#g-products-desktop);}.l-products-desktop{font-size:22px;}.l-products-desktop,.q-products-desktop,.t-products-desktop{font-family:Silka-Bold, Silka;}.l-products-desktop,.n-products-desktop,.q-products-desktop,.t-products-desktop,.u-products-desktop{font-weight:700;}.m-products-desktop{fill:#e40032;}.n-products-desktop,.u-products-desktop{font-size:18px;font-family:Kiona-Bold, Kiona;}.o-products-desktop{fill:url(#j-products-desktop);}.p-products-desktop,.r-products-desktop{font-size:14px;font-family:Silka-Regular, Silka;}.q-products-desktop,.t-products-desktop{font-size:12px;}.s-products-desktop{fill:#d9dae4;}.v-products-desktop{stroke:none;}.w-products-desktop{filter:url(#u-products-desktop);}.x-products-desktop{filter:url(#s-products-desktop);}.y-products-desktop{filter:url(#q-products-desktop);}.z-products-desktop{filter:url(#o-products-desktop);}.aa-products-desktop{filter:url(#m-products-desktop);}.ab-products-desktop{filter:url(#k-products-desktop);}.ac-products-desktop{filter:url(#h-products-desktop);}.ad-products-desktop{filter:url(#d-products-desktop);}.ae-products-desktop{filter:url(#b-products-desktop);}'
						}
					</style>
					<clipPath id="a-products-desktop">
						<rect
							className="a-products-desktop"
							width={423}
							height={1423}
						/>
					</clipPath>
					<filter
						id="b-products-desktop"
						x={63.5}
						y={702.262}
						width={97.653}
						height={55.785}
						filterUnits="userSpaceOnUse">
						<feOffset dy={3} />
						<feGaussianBlur stdDeviation={3} result="c" />
						<feFlood floodOpacity={0.6} />
						<feComposite operator="in" in2="c" />
						<feComposite in="SourceGraphic" />
					</filter>
					<filter
						id="d-products-desktop"
						x={259.846}
						y={702.262}
						width={97.653}
						height={55.785}
						filterUnits="userSpaceOnUse">
						<feOffset dy={3} />
						<feGaussianBlur stdDeviation={3} result="e" />
						<feFlood floodOpacity={0.6} />
						<feComposite operator="in" in2="e" />
						<feComposite in="SourceGraphic" />
					</filter>
					<pattern
						id="f-products-desktop"
						width={1}
						height={1}
						patternTransform="translate(2024 1341.39) rotate(-180)"
						viewBox="275.493 93.768 308.044 511.073">
						<image
							preserveAspectRatio="xMidYMid slice"
							width={893.923}
							height={670.695}
							xlinkHref={notiicasMocksMobile(t)[page].image}
						/>
					</pattern>
					<linearGradient
						id="g-products-desktop"
						x1={0.403}
						y1={0.657}
						x2={0.391}
						gradientUnits="objectBoundingBox">
						<stop offset={0} stopColor="#fff" stopOpacity={0} />
						<stop offset={1} stopColor="#fff" />
					</linearGradient>
					<filter
						id="h-products-desktop"
						x={86.5}
						y={600.527}
						width={248}
						height={61.169}
						filterUnits="userSpaceOnUse">
						<feOffset dy={3} />
						<feGaussianBlur stdDeviation={3} result="i" />
						<feFlood floodOpacity={0.4} />
						<feComposite operator="in" in2="i" />
						<feComposite in="SourceGraphic" />
					</filter>
					<pattern
						id="j-products-desktop"
						preserveAspectRatio="xMidYMid slice"
						width="100%"
						height="100%"
						viewBox="0 0 1770 1328">
						<image
							width={1770}
							height={1328}
							xlinkHref="/images/noticias-a.png"
						/>
					</pattern>
					<filter
						id="k-products-desktop"
						x={196.116}
						y={888.527}
						width={165.452}
						height={162.035}
						filterUnits="userSpaceOnUse">
						<feOffset dy={3} />
						<feGaussianBlur stdDeviation={3} result="l" />
						<feFlood floodOpacity={0.502} />
						<feComposite operator="in" in2="l" />
						<feComposite in="SourceGraphic" />
					</filter>
					<filter
						id="m-products-desktop"
						x={59.432}
						y={888.527}
						width={175.635}
						height={162.035}
						filterUnits="userSpaceOnUse">
						<feOffset dy={3} />
						<feGaussianBlur stdDeviation={3} result="n" />
						<feFlood floodOpacity={0.502} />
						<feComposite operator="in" in2="n" />
						<feComposite in="SourceGraphic" />
					</filter>
					<filter
						id="o-products-desktop"
						x={61.551}
						y={1047.527}
						width={173.287}
						height={159.889}
						filterUnits="userSpaceOnUse">
						<feOffset dy={3} />
						<feGaussianBlur stdDeviation={3} result="p" />
						<feFlood floodOpacity={0.502} />
						<feComposite operator="in" in2="p" />
						<feComposite in="SourceGraphic" />
					</filter>
					<filter
						id="q-products-desktop"
						x={196.199}
						y={1047.527}
						width={163.25}
						height={159.889}
						filterUnits="userSpaceOnUse">
						<feOffset dy={3} />
						<feGaussianBlur stdDeviation={3} result="r" />
						<feFlood floodOpacity={0.502} />
						<feComposite operator="in" in2="r" />
						<feComposite in="SourceGraphic" />
					</filter>
					<filter
						id="s-products-desktop"
						x={58.116}
						y={1205.856}
						width={177.096}
						height={163.37}
						filterUnits="userSpaceOnUse">
						<feOffset dy={3} />
						<feGaussianBlur stdDeviation={3} result="t" />
						<feFlood floodOpacity={0.502} />
						<feComposite operator="in" in2="t" />
						<feComposite in="SourceGraphic" />
					</filter>
					<filter
						id="u-products-desktop"
						x={196.066}
						y={1205.856}
						width={166.818}
						height={163.37}
						filterUnits="userSpaceOnUse">
						<feOffset dy={3} />
						<feGaussianBlur stdDeviation={3} result="v" />
						<feFlood floodOpacity={0.502} />
						<feComposite operator="in" in2="v" />
						<feComposite in="SourceGraphic" />
					</filter>
				</defs>
				<g
					className="b-products-desktop"
					transform="translate(0 615.111)">
					<path
						className="c-products-desktop"
						d="M600.14,53.484v-.66h35.89v.024h36.4c17.543,0,33.239-15.725,39.988-40.061l.013-.047L715.965,0h.475l-3.615,13.04c-.127.459-.258.913-.392,1.366-3.37,11.427-8.793,21.106-15.729,28.057-7.211,7.226-15.6,11.044-24.272,11.044H612.51v-.024Z"
						transform="translate(-510.94 147.895)"
					/>
					<path
						className="d-products-desktop"
						d="M0,.024V.672H192.4V.649H261.37C294.6.649,324.341,16.1,337.128,40l.024.046,6.691,12.514h.9l-6.849-12.809q-.36-.677-.742-1.342c-6.385-11.225-16.658-20.733-29.8-27.561A100.047,100.047,0,0,0,261.37,0H147.843V.024Z"
						transform="translate(-106.591 78.176) rotate(90)"
					/>
					<path
						className="c-products-desktop"
						d="M119.027,36.257V35.81H82.3v.016H45.039A44.224,44.224,0,0,1,4.114,8.668L4.1,8.636.486,0H0L3.7,8.84c.13.311.264.619.4.926.438.984.91,1.949,1.447,2.953A44.446,44.446,0,0,0,20.2,28.786a44.783,44.783,0,0,0,24.841,7.487h61.328v-.016Z"
						transform="translate(417.5 711.5) rotate(90)"
					/>
					<path
						className="e-products-desktop"
						d="M0,0V46.877H75.485c15.666,0,29.934-18.183,37.424-46.877Z"
						transform="translate(3.5 167.123)"
					/>
				</g>
				<g
					className="f-products-desktop"
					transform="translate(3.5 0.111)">
					<rect
						className="v-products-desktop"
						width={414}
						height={800}
					/>
					<rect
						className="a-products-desktop"
						x={0.5}
						y={0.5}
						width={413}
						height={799}
					/>
				</g>
				<g
					transform="translate(72.5 708.262)"
					onClick={() => setPage(page - 1 < 0 ? 0 : 0)}>
					<g
						className="ae-products-desktop"
						transform="matrix(1, 0, 0, 1, -72.5, -708.26)">
						<path
							className="g-products-desktop"
							d="M0,0H34.983A43.772,43.772,0,0,1,75.731,27.787l3.922,10H46.106A46.069,46.069,0,0,1,2.99,7.945Z"
							transform="translate(72.5 708.26)"
						/>
					</g>
					<path
						className="h-products-desktop"
						d="M8.714,0l8.714,14.939H0Z"
						transform="translate(32.367 27.595) rotate(-90)"
					/>
				</g>
				<g
					transform="translate(268.846 708.262)"
					onClick={() => setPage(page + 1 > 2 ? 0 :  0)}>
					<g
						className="ad-products-desktop"
						transform="matrix(1, 0, 0, 1, -268.85, -708.26)">
						<path
							className="g-products-desktop"
							d="M79.653,0H44.67A43.772,43.772,0,0,0,3.922,27.787L0,37.785H33.547A46.069,46.069,0,0,0,76.663,7.945Z"
							transform="translate(268.85 708.26)"
						/>
					</g>
					<path
						className="h-products-desktop"
						d="M8.714,0l8.714,14.939H0Z"
						transform="translate(47.286 10.166) rotate(90)"
					/>
				</g>
				<path
					className="i-products-desktop"
					d="M403.947,670.695H.775c0-39.394-.747-485.743-.747-555.7L38.678,8.722C39.8,3.737,47.292,0,56.171,0H346.949c8.853,0,16.334,3.716,17.483,8.684l39.85,106.271"
					transform="translate(412.497 670.695) rotate(180)"
				/>
				<circle
					className={`j-products-desktop ${
						page === 0 ? 'selected' : ''
					}`}
					cx={8}
					cy={8}
					r={8}
					transform="translate(175.5 724.111)"
					onClick={() => setPage(0)}
				/>
				<circle
					className={`j-products-desktop ${
						page === 1 ? 'selected' : ''
					}`}
					cx={8}
					cy={8}
					r={8}
					transform="translate(202.5 724.111)"
					onClick={() => setPage(0)}
				/>
				<circle
					className={`j-products-desktop ${
						page === 2 ? 'selected' : ''
					}`}
					cx={8}
					cy={8}
					r={8}
					transform="translate(229.5 724.111)"
					onClick={() => setPage(0)}
				/>
				<path
					className="k-products-desktop"
					d="M404.283,540.39H.029c0-39.394,0-355.438,0-425.4L38.678,8.722C39.8,3.737,47.292,0,56.171,0H346.949c8.853,0,16.334,3.716,17.483,8.684l39.85,106.271"
					transform="translate(412.497 670.695) rotate(180)"
				/>
				{notiicasMocksMobile(t)[page].text()}
				<g transform="translate(3.5 -158.473)">
					<g
						className="ac-products-desktop"
						transform="matrix(1, 0, 0, 1, -3.5, 158.47)">
						<path
							className="m-products-desktop"
							d="M230,0H47.176C28.161,0,11.086,12.6,4.142,31.746L0,43.169H181.308c20.259,0,38.4-13.581,45.534-34.092Z"
							transform="translate(95.5 606.53)"
						/>
					</g>
					<a href="/noticias/detalle">
						<text
							className="n-products-desktop"
							transform="translate(147.5 793.584)">
							<tspan x={0} y={0}>
								{t('Conoce Más')}
							</tspan>
						</text>
					</a>
				</g>
				<a href="/noticias/detalle">
					<g
						className="ab-products-desktop"
						transform="matrix(1, 0, 0, 1, 0, 0)">
						<path
							className="o-products-desktop"
							d="M410.62,134.446l-14.088-127C396.122,3.193,393.39,0,390.155,0H284.171c-3.225,0-5.951,3.17-6.371,7.414l-14.524,127c-.5,5.095,2.493,9.622,6.372,9.622h134.6c3.869,0,6.865-4.505,6.377-9.589"
							transform="translate(-58.1 894.53)"
						/>
					</g>
					<g
						className="aa-products-desktop"
						transform="matrix(1, 0, 0, 1, 0, 0)">
						<path
							className="h-products-desktop"
							d="M157.635,0H20.951C17.727,0,15,3.17,14.58,7.414l-14.524,127c-.5,5.095,2.493,9.622,6.372,9.622H143.111c-3.879,0-6.875-4.528-6.372-9.622l14.524-127C151.684,3.17,154.41,0,157.635,0"
							transform="translate(68.43 894.53)"
						/>
					</g>
					<text
						className="p-products-desktop"
						transform="translate(102.75 926.545)">
						<tspan x={0} y={13}>
							{t('Grupo ')}
						</tspan>
						<tspan x={0} y={29}>
							{t('amarey en ')}
						</tspan>
						<tspan x={0} y={45}>
							{t('sus 40 años ')}
						</tspan>
						<tspan x={0} y={61}>
							{t('estrena ')}
						</tspan>
						<tspan x={0} y={77}>
							{t('sedes ')}
						</tspan>
					</text>
					<text
						className="q-products-desktop"
						transform="translate(190.5 1021.087)">
						<tspan x={-65.28} y={11}>
							{'14-05-2024'}
						</tspan>
					</text>
				</a>
				{/* <g
					className="z-products-desktop"
					transform="matrix(1, 0, 0, 1, 0, 0)">
					<path
						className="e-products-desktop"
						d="M702.465,141.889c-3.182,0-5.867-3.123-6.276-7.3L681.881,9.479c-.5-5.024,2.45-9.479,6.277-9.479H553.51c-3.826,0-6.778,4.455-6.277,9.479l14.308,125.107c.409,4.181,3.095,7.3,6.277,7.3Z"
						transform="translate(-476.63 1053.53)"
					/>
				</g>
				<text
					className="r-products-desktop"
					transform="translate(95.5 1084.472)">
					<tspan x={0} y={13}>
						{'Lorem ipsum '}
					</tspan>
					<tspan x={0} y={29}>
						{'dolor sit amet, '}
					</tspan>
					<tspan x={0} y={45}>
						{'consectetuer '}
					</tspan>
					<tspan x={0} y={61}>
						{'adipiscing elit, '}
					</tspan>
					<tspan x={0} y={77}>
						{'sed diam '}
					</tspan>
				</text>
				<g
					className="y-products-desktop"
					transform="matrix(1, 0, 0, 1, 0, 0)">
					<path
						className="s-products-desktop"
						d="M949.322,0H816.731c-3.826,0-6.773,4.455-6.277,9.479l14.308,125.107c.409,4.181,3.095,7.3,6.277,7.3h104.4c3.187,0,5.878-3.145,6.276-7.337L955.6,9.446C956.079,4.433,953.133,0,949.322,0"
						transform="translate(-605.2 1053.53)"
					/>
				</g>
				<text
					className="t-products-desktop"
					transform="translate(190.5 1177.087)">
					<tspan x={-65.28} y={11}>
						{'14-05-2024'}
					</tspan>
				</text> */}
				{/* <g
					className="x-products-desktop"
					transform="matrix(1, 0, 0, 1, 0, 0)">
					<path
						className="h-products-desktop"
						d="M1253.446,0H1115.5c-3.255,0-6.006,3.2-6.431,7.483l-14.659,128.176c-.508,5.142,2.516,9.712,6.431,9.712h137.95c-3.915,0-6.939-4.569-6.431-9.712L1247.015,7.483C1247.44,3.2,1250.191,0,1253.446,0"
						transform="translate(-1027.23 1211.86)"
					/>
				</g>
				<g
					className="w-products-desktop"
					transform="matrix(1, 0, 0, 1, 0, 0)">
					<path
						className="s-products-desktop"
						d="M1506.336,135.693,1492.118,7.511C1491.7,3.222,1488.947,0,1485.682,0H1378.715c-3.255,0-6.006,3.2-6.431,7.483l-14.659,128.176c-.508,5.142,2.516,9.712,6.431,9.712H1499.9c3.91,0,6.928-4.547,6.436-9.678"
						transform="translate(-1152.5 1211.86)"
					/>
				</g>
				<text
					className="p-products-desktop"
					transform="translate(95.5 1244.542)">
					<tspan x={0} y={13}>
						{'Lorem ipsum '}
					</tspan>
					<tspan x={0} y={29}>
						{'dolor sit amet, '}
					</tspan>
					<tspan x={0} y={45}>
						{'consectetuer '}
					</tspan>
					<tspan x={0} y={61}>
						{'adipiscing elit, '}
					</tspan>
					<tspan x={0} y={77}>
						{'sed diam '}
					</tspan>
				</text>
				<text
					className="q-products-desktop"
					transform="translate(190.5 1340.087)">
					<tspan x={-65.28} y={11}>
						{'14-05-2024'}
					</tspan>
				</text> */}
				<text
					className="u-products-desktop"
					transform="translate(210.5 841.111)">
					<tspan x={-73.26} y={18}>
						{t('Otras noticias ')}
					</tspan>
				</text>
			</svg>
		</div>
	)
}

export default NoticiasMovil
