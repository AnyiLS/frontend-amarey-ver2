import useGeneral from 'hooks/general.hook'
import React from 'react'
import ProductosMobile from './ProductosMobile'
import { useTranslation } from 'react-i18next'
import { useLanguage } from 'context/language'

const Productos: React.FC = (): JSX.Element => {
	const { width } = useGeneral()
	/** Hooks */
	const [hover, setHover] = React.useState<number | null>(2)

	const { t } = useTranslation()
	const { selectedLanguage } = useLanguage()

	return (
		<React.Fragment>
			{width > 1024 ? (
				<div>
					<svg viewBox="0 100 1923 990">
						<defs>
							<style>
								{
									".a-products{fill:none;}.b-products{fill:#fff;stroke:#707070;}.c-products{clip-path:url(#a-products);}.d-products{fill:#e7002a;}.e-products,.q-products{fill:#001f5f;}.f-products{fill:url(#b-products);}.g-products{fill:#182856;font-size:24px;font-family:Silka-SemiBold, Silka;font-weight:600;}.h-products{fill:url(#e-products);}.i-products{fill:url(#h-products);}.j-products{fill:url(#k-products);}.k-products{fill:url(#n-products);}.l-products{fill:url(#q-products);}.m-products{fill:url(#t-products);}.n-products{fill:url(#w-products);}.o-products{fill:url(#z-products);}.p-products{fill:url(#ac-products);}.q-products{font-size:61px;font-family:'Kiona-Bold';font-weight:700;}.r-products{stroke:none;}.s-products{filter:url(#ad-products);}.t-products{filter:url(#aa-products);}.u-products{filter:url(#x-products);}.v-products{filter:url(#u-products);}.w-products{filter:url(#r-products);}.x-products{filter:url(#o-products);}.y-products{filter:url(#l-products);}.z-products{filter:url(#i-products);}.aa-products{filter:url(#f-products);}.ab-products{filter:url(#c-products);}"
								}
							</style>
							<clipPath id="a-products">
								<rect
									className="a-products"
									width={1923}
									height={1134.375}
								/>
							</clipPath>
							<pattern
								id="b-products"
								width={1}
								height={1}
								viewBox="134.156 23.948 224.054 151.196">
								<image
									preserveAspectRatio="xMidYMid slice"
									width={408.312}
									height={199.093}
									xlinkHref="/images/products05.webp"
								/>
							</pattern>
							<filter
								id="c-products"
								x={1440.168}
								y={720.156}
								width={313.032}
								height={217.093}
								filterUnits="userSpaceOnUse">
								<feOffset dy={3} />
								<feGaussianBlur stdDeviation={3} result="d" />
								<feFlood floodOpacity={0.6} />
								<feComposite operator="in" in2="d" />
								<feComposite in="SourceGraphic" />
							</filter>
							<pattern
								id="e-products"
								preserveAspectRatio="xMidYMid slice"
								width="100%"
								height="100%"
								viewBox="0 0 4199 2799">
								<image
									width={4199}
									height={2799}
									xlinkHref="/images/pie.webp"
								/>
							</pattern>
							<filter
								id="f-products"
								x={1111.249}
								y={674.104}
								width={337.461}
								height={217.814}
								filterUnits="userSpaceOnUse">
								<feOffset dy={3} />
								<feGaussianBlur stdDeviation={3} result="g" />
								<feFlood floodOpacity={0.6} />
								<feComposite operator="in" in2="g" />
								<feComposite in="SourceGraphic" />
							</filter>
							<pattern
								id="h-products"
								width={1}
								height={1}
								viewBox="0 58.371 239.299 149.675">
								<image
									preserveAspectRatio="xMidYMid slice"
									width={319.461}
									height={212.974}
									xlinkHref="/images/products03.webp"
								/>
							</pattern>
							<filter
								id="i-products"
								x={794.543}
								y={719.435}
								width={337.461}
								height={217.814}
								filterUnits="userSpaceOnUse">
								<feOffset dy={3} />
								<feGaussianBlur stdDeviation={3} result="j" />
								<feFlood floodOpacity={0.6} />
								<feComposite operator="in" in2="j" />
								<feComposite in="SourceGraphic" />
							</filter>
							<pattern
								id="k-products"
								width={1}
								height={1}
								viewBox="47.904 11.354 283.156 177.105">
								<image
									preserveAspectRatio="xMidYMid slice"
									width={355.224}
									height={199.814}
									xlinkHref="/images/produ2.webp"
								/>
							</pattern>
							<filter
								id="l-products"
								x={477.839}
								y={674.104}
								width={337.461}
								height={217.814}
								filterUnits="userSpaceOnUse">
								<feOffset dy={3} />
								<feGaussianBlur stdDeviation={3} result="m" />
								<feFlood floodOpacity={0.6} />
								<feComposite operator="in" in2="m" />
								<feComposite in="SourceGraphic" />
							</filter>
							<pattern
								id="n-products"
								width={1}
								height={1}
								viewBox="61.476 55.258 201.894 136.242">
								<image
									preserveAspectRatio="xMidYMid slice"
									width={298.668}
									height={199.093}
									xlinkHref="/images/quirurgicos.webp"
								/>
							</pattern>
							<filter
								id="o-products"
								x={173.348}
								y={720.156}
								width={313.032}
								height={217.093}
								filterUnits="userSpaceOnUse">
								<feOffset dy={3} />
								<feGaussianBlur stdDeviation={3} result="p" />
								<feFlood floodOpacity={0.6} />
								<feComposite operator="in" in2="p" />
								<feComposite in="SourceGraphic" />
							</filter>
							<pattern
								id="q-products"
								width={1}
								height={1}
								viewBox="9.031 11.001 262.428 177.091">
								<image
									preserveAspectRatio="xMidYMid slice"
									width={298.563}
									height={199.093}
									xlinkHref="/images/IMG_6337 GRIFOLS.webp"
								/>
							</pattern>
							<filter
								id="r-products"
								x={1440.168}
								y={340.285}
								width={313.032}
								height={217.093}
								filterUnits="userSpaceOnUse">
								<feOffset dy={3} />
								<feGaussianBlur stdDeviation={3} result="s" />
								<feFlood floodOpacity={0.6} />
								<feComposite operator="in" in2="s" />
								<feComposite in="SourceGraphic" />
							</filter>
							<pattern
								id="t-products"
								width={1}
								height={1}
								viewBox="112.83 11.931 238.237 149.01">
								<image
									preserveAspectRatio="xMidYMid slice"
									width={355.224}
									height={199.814}
									xlinkHref="/images/ortopedi.webp"
								/>
							</pattern>
							<filter
								id="u-products"
								x={1111}
								y={385.617}
								width={337.461}
								height={217.814}
								filterUnits="userSpaceOnUse">
								<feOffset dy={3} />
								<feGaussianBlur stdDeviation={3} result="v" />
								<feFlood floodOpacity={0.6} />
								<feComposite operator="in" in2="v" />
								<feComposite in="SourceGraphic" />
							</filter>
							<pattern
								id="w-products"
								width={1}
								height={1}
								viewBox="68.545 14.886 271.861 170.041">
								<image
									preserveAspectRatio="xMidYMid slice"
									width={355.918}
									height={199.814}
									xlinkHref="/images/product02.webp"
								/>
							</pattern>
							<filter
								id="x-products"
								x={794.544}
								y={340.286}
								width={337.462}
								height={217.814}
								filterUnits="userSpaceOnUse">
								<feOffset dy={3} />
								<feGaussianBlur stdDeviation={3} result="y" />
								<feFlood floodOpacity={0.6} />
								<feComposite operator="in" in2="y" />
								<feComposite in="SourceGraphic" />
							</filter>
							<pattern
								id="z-products"
								preserveAspectRatio="xMidYMid slice"
								width="100%"
								height="100%"
								viewBox="0 0 1920 1280">
								<image
									width={1920}
									height={1280}
									xlinkHref="/images/product1.webp"
								/>
							</pattern>
							<filter
								id="aa-products"
								x={477.837}
								y={385.617}
								width={337.461}
								height={217.814}
								filterUnits="userSpaceOnUse">
								<feOffset dy={3} />
								<feGaussianBlur stdDeviation={3} result="ab" />
								<feFlood floodOpacity={0.6} />
								<feComposite operator="in" in2="ab" />
								<feComposite in="SourceGraphic" />
							</filter>
							<pattern
								id="ac-products"
								preserveAspectRatio="xMidYMid slice"
								width="100%"
								height="100%"
								viewBox="0 0 6000 4000">
								<image
									width={6000}
									height={4000}
									xlinkHref="/images/productos.webp"
								/>
							</pattern>
							<filter
								id="ad-products"
								x={173.348}
								y={340.285}
								width={313.032}
								height={217.093}
								filterUnits="userSpaceOnUse">
								<feOffset dy={3} />
								<feGaussianBlur stdDeviation={3} result="ae" />
								<feFlood floodOpacity={0.6} />
								<feComposite operator="in" in2="ae" />
								<feComposite in="SourceGraphic" />
							</filter>
						</defs>
						<g transform="translate(3)">
							<g className="b-products">
								<rect
									className="r-products"
									width={1920}
									height={1080}
								/>
								<rect
									className="a-products"
									x={0.5}
									y={0.5}
									width={1919}
									height={1079}
								/>
							</g>
							<g
								className="c-products"
								transform="translate(-3 102.813)">
								<path
									className="d-products"
									d="M502.188,701.064q.475-1.148.978-2.278a109.3,109.3,0,0,1,99.923-65.2H752.78v.04h90.935a107.8,107.8,0,0,0,88.074-45.44h1.305a109.217,109.217,0,0,1-89.379,46.541H694.024v-.04H603.089a107.934,107.934,0,0,0-99.891,66.8l-.032.079-28.138,67.751v-2.859Z"
									transform="translate(1090.136 -46.985)"
								/>
								<path
									className="d-products"
									d="M348.428,409.432q-.748-1.81-1.542-3.589A172.23,172.23,0,0,0,189.435,303.1H0v1.8H46.146v-.063H189.435A170.074,170.074,0,0,1,346.835,410.1l.051.125,44.338,106.756v-4.5Z"
									transform="translate(0 -114.601)"
								/>
								<path
									className="e-products"
									d="M1925.864,98.615A131.184,131.184,0,0,0,1825.079,51.38H1645.036v.048H1535.662A129.636,129.636,0,0,1,1432.106,0h-1.612a131.443,131.443,0,0,0,32.243,30.6,130.739,130.739,0,0,0,72.925,22.152H1715.7V52.7h109.374a129.628,129.628,0,0,1,100.785,47.9Z"
									transform="translate(-2.863 102)"
								/>
								<path
									className="e-products"
									d="M764.159,612.541q.617,1.612,1.271,3.2c10.936,26.758,28.531,49.422,51.038,65.7A133.8,133.8,0,0,0,895.224,707.3h194.439v-.056h118.119c46.178,0,88.411,24.235,114.4,63.808h1.7a147.808,147.808,0,0,0-37.343-39.492,133.8,133.8,0,0,0-78.755-25.862H1013.342v.056H895.224c-56.921,0-107.853-36.821-129.752-93.807l-.042-.112L728.88,516.7v4.015Z"
									transform="translate(-904.88 221.677)"
								/>
							</g>
						</g>
						<a href="/productos/neurointervencionismo">
							<g transform="translate(3 -14.156)">
								<g
									className="ab-products"
									transform="matrix(1, 0, 0, 1, -3, 14.16)">
									<path
										className="f-products"
										d="M1423.459,449.334h230.458a13.688,13.688,0,0,1,13.942,13.418V635.008a13.689,13.689,0,0,1-13.942,13.418H1386.776c-8.826,0-15.431-7.792-13.659-16.113L1409.8,460.058a13.824,13.824,0,0,1,13.659-10.724"
										transform="translate(76.34 276.82)"
										onMouseOver={() => setHover(9)}
										onMouseLeave={() => setHover(null)}
									/>
									{hover === 9 && (
										<path
											fill="#001f5f50"
											d="M1423.459,449.334h230.458a13.688,13.688,0,0,1,13.942,13.418V635.008a13.689,13.689,0,0,1-13.942,13.418H1386.776c-8.826,0-15.431-7.792-13.659-16.113L1409.8,460.058a13.824,13.824,0,0,1,13.659-10.724"
											transform="translate(76.34 276.82)"
											onMouseOver={() => setHover(9)}
											onMouseLeave={() => setHover(null)}
										/>
									)}
								</g>
								<text
									className="g-products"
									transform="translate(1464.2 976.405)">
									<tspan x={0} y={0}>
										{t('Neurointervencionismo')}
									</tspan>
								</text>
							</g>
						</a>
						<a href="/productos/cuidado-avanzado-de-heridas">
							<g transform="translate(3 -14.156)">
								<g
									className="aa-products"
									transform="matrix(1, 0, 0, 1, -3, 14.16)">
									<path
										className="h-products"
										d="M1030.311,394.913H1321.92c8.386,0,14.87,8.349,13.813,17.788L1305.212,580.92c-.884,7.892-6.8,13.807-13.813,13.807h-229.62c-6.991,0-12.9-5.881-13.807-13.746L1016.5,412.762c-1.093-9.459,5.4-17.849,13.806-17.849"
										transform="translate(103.86 285.19)"
										onMouseOver={() => setHover(8)}
										onMouseLeave={() => setHover(null)}
									/>
									{hover === 8 && (
										<path
											fill="#001f5f50"
											d="M1030.311,394.913H1321.92c8.386,0,14.87,8.349,13.813,17.788L1305.212,580.92c-.884,7.892-6.8,13.807-13.813,13.807h-229.62c-6.991,0-12.9-5.881-13.807-13.746L1016.5,412.762c-1.093-9.459,5.4-17.849,13.806-17.849"
											transform="translate(103.86 285.19)"
											onMouseOver={() => setHover(8)}
											onMouseLeave={() => setHover(null)}
										/>
									)}
								</g>
								<text
									className="g-products"
									transform="translate(1282 932.405)">
									<tspan
										x={
											selectedLanguage === 'es'
												? -111.852
												: -61.852
										}
										y={0}>
										{t('Cuidado avanzado')}
									</tspan>
									<tspan
										x={
											selectedLanguage === 'es'
												? -62.784
												: -72.784
										}
										y={26}>
										{t('de heridas')}
									</tspan>
								</text>
							</g>
						</a>
						<a href="/productos/instrumental-y-estirilizacion">
							<g transform="translate(3 -14.156)">
								<g
									className="z-products"
									transform="matrix(1, 0, 0, 1, -3, 14.16)">
									<path
										className="i-products"
										d="M978.712,648.3H687.1c-8.386,0-14.87-8.35-13.813-17.788l30.521-168.219c.884-7.892,6.8-13.807,13.813-13.807h229.62c6.992,0,12.9,5.881,13.807,13.746l31.468,168.219c1.093,9.459-5.4,17.849-13.806,17.849"
										transform="translate(130.37 276.95)"
										onMouseOver={() => setHover(7)}
										onMouseLeave={() => setHover(null)}
									/>
									{hover === 7 && (
										<path
											fill="#001f5f50"
											d="M978.712,648.3H687.1c-8.386,0-14.87-8.35-13.813-17.788l30.521-168.219c.884-7.892,6.8-13.807,13.813-13.807h229.62c6.992,0,12.9,5.881,13.807,13.746l31.468,168.219c1.093,9.459-5.4,17.849-13.806,17.849"
											transform="translate(130.37 276.95)"
											onMouseOver={() => setHover(7)}
											onMouseLeave={() => setHover(null)}
										/>
									)}
								</g>
								<text
									className="g-products"
									transform="translate(789.773 976.405)">
									<tspan x={0} y={0}>
										{t('Instrumental y esterilización')}
									</tspan>
								</text>
							</g>
						</a>
						<a href="/productos/genomica-y-genetica">
							<g transform="translate(3 -14.156)">
								<g
									className="y-products"
									transform="matrix(1, 0, 0, 1, -3, 14.16)">
									<path
										className="j-products"
										d="M343.9,394.913H635.506c8.386,0,14.87,8.349,13.813,17.788L618.8,580.92c-.884,7.892-6.8,13.807-13.813,13.807H375.365c-6.992,0-12.9-5.881-13.807-13.746L330.091,412.762c-1.093-9.459,5.4-17.849,13.806-17.849"
										transform="translate(156.87 285.19)"
										onMouseOver={() => setHover(6)}
										onMouseLeave={() => setHover(null)}
									/>
									{hover === 6 && (
										<path
											fill="#001f5f50"
											d="M343.9,394.913H635.506c8.386,0,14.87,8.349,13.813,17.788L618.8,580.92c-.884,7.892-6.8,13.807-13.813,13.807H375.365c-6.992,0-12.9-5.881-13.807-13.746L330.091,412.762c-1.093-9.459,5.4-17.849,13.806-17.849"
											transform="translate(156.87 285.19)"
											onMouseOver={() => setHover(6)}
											onMouseLeave={() => setHover(null)}
										/>
									)}
								</g>
								<text
									className="g-products"
									transform={
										selectedLanguage === 'es'
											? 'translate(516 931.487)'
											: 'translate(502 931.487)'
									}>
									<tspan x={0} y={0}>
										{t('Genómica y genética')}
									</tspan>
								</text>
							</g>
						</a>
						<a href="/productos/dispositivos-medico-quirurgicos">
							<g transform="translate(3 -14.156)">
								<g
									className="x-products"
									transform="matrix(1, 0, 0, 1, -3, 14.16)">
									<path
										className="k-products"
										d="M244.4,449.334H13.943A13.688,13.688,0,0,0,0,462.752V635.008a13.689,13.689,0,0,0,13.943,13.418H281.084c8.826,0,15.431-7.792,13.659-16.113L258.06,460.058A13.824,13.824,0,0,0,244.4,449.334"
										transform="translate(182.35 276.82)"
										onMouseOver={() => setHover(5)}
										onMouseLeave={() => setHover(null)}
									/>
									{hover === 5 && (
										<path
											fill="#001f5f50"
											d="M244.4,449.334H13.943A13.688,13.688,0,0,0,0,462.752V635.008a13.689,13.689,0,0,0,13.943,13.418H281.084c8.826,0,15.431-7.792,13.659-16.113L258.06,460.058A13.824,13.824,0,0,0,244.4,449.334"
											transform="translate(182.35 276.82)"
											onMouseOver={() => setHover(5)}
											onMouseLeave={() => setHover(null)}
										/>
									)}
								</g>
								<text
									className="g-products"
									transform="translate(326.864 979.871)">
									<tspan
										x={
											selectedLanguage === 'es'
												? -71.928
												: -103.928
										}
										y={0}>
										{t('Dispositivos')}
									</tspan>
									<tspan
										x={
											selectedLanguage === 'es'
												? -116.52
												: -46.52
										}
										y={28}>
										{t('médico-quirúrgicos')}
									</tspan>
								</text>
							</g>
						</a>
						<a href="/productos/logistica-hospitalaria">
							<g transform="translate(3 -14.156)">
								<g
									className="w-products"
									transform="matrix(1, 0, 0, 1, -3, 14.16)">
									<path
										className="l-products"
										d="M1423.459,199.092h230.458a13.688,13.688,0,0,0,13.942-13.418V13.417A13.689,13.689,0,0,0,1653.917,0H1386.776c-8.826,0-15.431,7.792-13.659,16.113L1409.8,188.368a13.824,13.824,0,0,0,13.659,10.724"
										transform="translate(76.34 346.29)"
										onMouseOver={() => setHover(2)}
										onMouseLeave={() => setHover(null)}
									/>

									{hover === 2 && (
										<path
											fill="#001f5f50"
											d="M1423.459,199.092h230.458a13.688,13.688,0,0,0,13.942-13.418V13.417A13.689,13.689,0,0,0,1653.917,0H1386.776c-8.826,0-15.431,7.792-13.659,16.113L1409.8,188.368a13.824,13.824,0,0,0,13.659,10.724"
											transform="translate(76.34 346.29)"
											onMouseOver={() => setHover(2)}
											onMouseLeave={() => setHover(null)}
										/>
									)}
								</g>
								<text
									className="g-products"
									transform={
										selectedLanguage === 'es'
											? 'translate(1486 600)'
											: 'translate(1510 600)'
									}>
									<tspan x={0} y={0}>
										{t('Logística hospitalaria')}
									</tspan>
								</text>
							</g>
						</a>
						<a href="/productos/ortopedia">
							<g transform="translate(3 -14.156)">
								<g
									className="v-products"
									transform="matrix(1, 0, 0, 1, -3, 14.16)">
									<path
										className="m-products"
										d="M1321.92,253.383H1030.311c-8.386,0-14.87-8.349-13.813-17.788l30.521-168.219c.884-7.892,6.8-13.807,13.813-13.807h229.619c6.991,0,12.9,5.881,13.807,13.746l31.468,168.219c1.092,9.459-5.4,17.849-13.806,17.849"
										transform="translate(103.62 338.05)"
										onMouseOver={() => setHover(10)}
										onMouseLeave={() => setHover(null)}
									/>
									{hover === 10 && (
										<path
											fill="#001f5f50"
											d="M1321.92,253.383H1030.311c-8.386,0-14.87-8.349-13.813-17.788l30.521-168.219c.884-7.892,6.8-13.807,13.813-13.807h229.619c6.991,0,12.9,5.881,13.807,13.746l31.468,168.219c1.092,9.459-5.4,17.849-13.806,17.849"
											transform="translate(103.62 338.05)"
											onMouseOver={() => setHover(10)}
											onMouseLeave={() => setHover(null)}
										/>
									)}
								</g>
								<text
									className="g-products"
									transform={
										selectedLanguage === 'es'
											? 'translate(1281 644)'
											: 'translate(1266 644)'
									}>
									<tspan x={-61.824} y={0}>
										{t('Ortopedia')}
									</tspan>
								</text>
							</g>
						</a>
						<a href="/productos/equipos-medicos">
							<g transform="translate(3 -14.156)">
								<g
									className="u-products"
									transform="matrix(1, 0, 0, 1, -3, 14.16)">
									<path
										className="n-products"
										d="M687.1,0H978.713c8.386,0,14.87,8.35,13.813,17.788L962.005,186.007c-.884,7.892-6.8,13.807-13.813,13.807H718.572c-6.992,0-12.9-5.881-13.807-13.746L673.3,17.849C672.205,8.39,678.7,0,687.1,0"
										transform="translate(130.37 346.29)"
										onMouseOver={() => setHover(1)}
										onMouseLeave={() => setHover(null)}
									/>
									{hover === 1 && (
										<path
											fill="#001f5f50"
											d="M687.1,0H978.713c8.386,0,14.87,8.35,13.813,17.788L962.005,186.007c-.884,7.892-6.8,13.807-13.813,13.807H718.572c-6.992,0-12.9-5.881-13.807-13.746L673.3,17.849C672.205,8.39,678.7,0,687.1,0"
											transform="translate(130.37 346.29)"
											onMouseOver={() => setHover(1)}
											onMouseLeave={() => setHover(null)}
										/>
									)}
								</g>
								<text
									className="g-products"
									transform={
										selectedLanguage === 'es'
											? 'translate(860 600)'
											: 'translate(845 600)'
									}>
									<tspan x={0} y={0}>
										{t('Equipos médicos')}
									</tspan>
								</text>
							</g>
						</a>
						<a href="/productos/cirugia-robotica">
							<g transform="translate(3 -14.156)">
								<g
									className="t-products"
									transform="matrix(1, 0, 0, 1, -3, 14.16)">
									<path
										className="o-products"
										d="M635.5,253.383H343.9c-8.386,0-14.87-8.349-13.813-17.788L360.6,67.376c.884-7.892,6.8-13.807,13.813-13.807H604.036c6.992,0,12.9,5.881,13.807,13.746l31.468,168.219c1.093,9.459-5.4,17.849-13.806,17.849"
										transform="translate(156.87 338.05)"
										onMouseOver={() => setHover(3)}
										onMouseLeave={() => setHover(null)}
									/>

									{hover === 3 && (
										<path
											fill="#001f5f50"
											d="M635.5,253.383H343.9c-8.386,0-14.87-8.349-13.813-17.788L360.6,67.376c.884-7.892,6.8-13.807,13.813-13.807H604.036c6.992,0,12.9,5.881,13.807,13.746l31.468,168.219c1.093,9.459-5.4,17.849-13.806,17.849"
											transform="translate(156.87 338.05)"
											onMouseOver={() => setHover(3)}
											onMouseLeave={() => setHover(null)}
										/>
									)}
								</g>
								<text
									className="g-products"
									transform="translate(545 643)">
									<tspan x={0} y={0}>
										{t('Cirugía robótica')}
									</tspan>
								</text>
							</g>
						</a>
						<a href="/productos/medicamentos">
							<g transform="translate(3 -14.156)">
								<g
									className="s-products"
									transform="matrix(1, 0, 0, 1, -3, 14.16)">
									<path
										fill="url(#ac-products)"
										d="M244.4,199.092H13.943A13.688,13.688,0,0,1,0,185.673V13.417A13.689,13.689,0,0,1,13.943,0H281.084c8.826,0,15.431,7.792,13.659,16.113L258.06,188.368A13.824,13.824,0,0,1,244.4,199.092"
										transform="translate(182.35 346.29)"
										onMouseOver={() => setHover(0)}
										onMouseLeave={() => setHover(null)}
									/>
									{hover === 0 && (
										<path
											fill="#001f5f50"
											d="M244.4,199.092H13.943A13.688,13.688,0,0,1,0,185.673V13.417A13.689,13.689,0,0,1,13.943,0H281.084c8.826,0,15.431,7.792,13.659,16.113L258.06,188.368A13.824,13.824,0,0,1,244.4,199.092"
											transform="translate(182.35 346.47)"
											onMouseOver={() => setHover(0)}
											onMouseLeave={() => setHover(null)}
										/>
									)}
								</g>
								<text
									className="g-products"
									transform="translate(226 600)">
									<tspan x={0} y={0}>
										{t('Medicamentos')}
									</tspan>
								</text>
							</g>
						</a>
						<text
							className="q-products"
							transform="translate(320 200.384)">
							<tspan x={28.487} y={100} xmlSpace="preserve">
								{t('soluciones y productos distribuidos')}
							</tspan>
						</text>
					</svg>
				</div>
			) : (
				<ProductosMobile />
			)}
		</React.Fragment>
	)
}

export default Productos
