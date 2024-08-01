import React from 'react'
import useGeneral from 'hooks/general.hook'
import FilosofiaMobile from './FilosofiaMobile'
import { useTranslation } from 'react-i18next'
import useLayout from 'hooks/ancho.hook'

const Filosofia: React.FC = () => {
	/** Hooks */
	const { width } = useGeneral()

	const {t} = useTranslation()

	const { navbarHeight } = useLayout()

	return (
		<div>
			{width > 767 ? (
				<div className='h-full' style={{ marginTop: navbarHeight }}>
					<svg viewBox="1 10 1920 3650" width='100%' preserveAspectRatio='none'>
						<defs>
							<style>
								{
									'.a-reconocimientos-mobile-3{fill:none;}.b-reconocimientos-mobile-3{clip-path:url(#a-reconocimientos-mobile-3);}.c-reconocimientos-mobile-3{fill:#e7002a;stroke:#e40032;}.d-reconocimientos-mobile-3,.e-reconocimientos-mobile-3,.k-reconocimientos-mobile-3,.m-reconocimientos-mobile-3,.t-reconocimientos-mobile-3,.w-reconocimientos-mobile-3{fill:#001f5f;}.d-reconocimientos-mobile-3{stroke:#001f5f;}.f-reconocimientos-mobile-3,.v-reconocimientos-mobile-3{fill:#e40032;}.g-reconocimientos-mobile-3,.u-reconocimientos-mobile-3,.x-reconocimientos-mobile-3{fill:#fff;}.h-reconocimientos-mobile-3{fill:url(#f-reconocimientos-mobile-3);}.i-reconocimientos-mobile-3{fill:url(#m-reconocimientos-mobile-3);}.j-reconocimientos-mobile-3{fill:#182856;}.j-reconocimientos-mobile-3,.w-reconocimientos-mobile-3,.x-reconocimientos-mobile-3{font-size:24px;font-family:Silka-Regular, Silka;}.k-reconocimientos-mobile-3{font-size:70px;}.k-reconocimientos-mobile-3,.m-reconocimientos-mobile-3{font-family:Kiona-Bold;font-weight:700;}.l-reconocimientos-mobile-3{fill:rgba(67,67,67,0.09);}.m-reconocimientos-mobile-3{font-size:42px;}.n-reconocimientos-mobile-3{fill:url(#z-reconocimientos-mobile-3);}.o-reconocimientos-mobile-3{fill:url(#ac-reconocimientos-mobile-3);}.p-reconocimientos-mobile-3{fill:url(#af-reconocimientos-mobile-3);}.q-reconocimientos-mobile-3{fill:url(#ai-reconocimientos-mobile-3);}.r-reconocimientos-mobile-3{fill:url(#al-reconocimientos-mobile-3);}.s-reconocimientos-mobile-3{fill:url(#ao-reconocimientos-mobile-3);}.t-reconocimientos-mobile-3,.u-reconocimientos-mobile-3,.v-reconocimientos-mobile-3{font-size:32px;font-family:Silka-SemiBold, Silka;font-weight:600;}.y-reconocimientos-mobile-3{filter:url(#am-reconocimientos-mobile-3);}.z-reconocimientos-mobile-3{filter:url(#aj-reconocimientos-mobile-3);}.aa-reconocimientos-mobile-3{filter:url(#ag-reconocimientos-mobile-3);}.ab-reconocimientos-mobile-3{filter:url(#ad-reconocimientos-mobile-3);}.ac-reconocimientos-mobile-3{filter:url(#aa-reconocimientos-mobile-3);}.ad-reconocimientos-mobile-3{filter:url(#x-reconocimientos-mobile-3);}.ae-reconocimientos-mobile-3{filter:url(#v-reconocimientos-mobile-3);}.af-reconocimientos-mobile-3{filter:url(#t-reconocimientos-mobile-3);}.ag-reconocimientos-mobile-3{filter:url(#r-reconocimientos-mobile-3);}.ah-reconocimientos-mobile-3{filter:url(#p-reconocimientos-mobile-3);}.ai-reconocimientos-mobile-3{filter:url(#n-reconocimientos-mobile-3);}.aj-reconocimientos-mobile-3{filter:url(#k-reconocimientos-mobile-3);}.ak-reconocimientos-mobile-3{filter:url(#i-reconocimientos-mobile-3);}.al-reconocimientos-mobile-3{filter:url(#g-reconocimientos-mobile-3);}.am-reconocimientos-mobile-3{filter:url(#d-reconocimientos-mobile-3);}.an-reconocimientos-mobile-3{filter:url(#b-reconocimientos-mobile-3);}'
								}
							</style>
							<clipPath id="a-reconocimientos-mobile-3">
								<rect
									className="a-reconocimientos-mobile-3"
									width={1920}
									height={3643}
									transform="translate(21 -1862)"
								/>
							</clipPath>
							<filter
								id="b-reconocimientos-mobile-3"
								x={706.668}
								y={13.012}
								width={1246}
								height={663.275}
								filterUnits="userSpaceOnUse">
								<feOffset dx={4} dy={4} />
								<feGaussianBlur stdDeviation={4} result="c" />
								<feFlood floodOpacity={0.251} />
								<feComposite operator="in" in2="c" />
								<feComposite in="SourceGraphic" />
							</filter>
							<filter
								id="d-reconocimientos-mobile-3"
								x={7.668}
								y={15.27}
								width={855}
								height={801.232}
								filterUnits="userSpaceOnUse">
								<feOffset dy={3} />
								<feGaussianBlur stdDeviation={3} result="e" />
								<feFlood floodOpacity={0.4} />
								<feComposite operator="in" in2="e" />
								<feComposite in="SourceGraphic" />
							</filter>
							<pattern
								id="f-reconocimientos-mobile-3"
								width={1}
								height={1}
								viewBox="175.069 0 718.525 671.002">
								<image
									preserveAspectRatio="xMidYMid slice"
									width={1163.175}
									height={773.86}
									xlinkHref="/images/mobile/filosophy/ComponentTMP_0-image.webp"
								/>
							</pattern>
							<filter
								id="g-reconocimientos-mobile-3"
								x={7}
								y={12.642}
								width={846.668}
								height={791.86}
								filterUnits="userSpaceOnUse">
								<feOffset dy={3} />
								<feGaussianBlur stdDeviation={3} result="h" />
								<feFlood floodOpacity={0.4} />
								<feComposite operator="in" in2="h" />
								<feComposite in="SourceGraphic" />
							</filter>
							<filter
								id="i-reconocimientos-mobile-3"
								x={0}
								y={837.725}
								width={1246}
								height={663.275}
								filterUnits="userSpaceOnUse">
								<feOffset dx={-4} dy={-4} />
								<feGaussianBlur stdDeviation={4} result="j" />
								<feFlood floodOpacity={0.251} />
								<feComposite operator="in" in2="j" />
								<feComposite in="SourceGraphic" />
							</filter>
							<filter
								id="k-reconocimientos-mobile-3"
								x={1058.697}
								y={697.509}
								width={886.303}
								height={801.232}
								filterUnits="userSpaceOnUse">
								<feOffset dy={-3} />
								<feGaussianBlur stdDeviation={3} result="l" />
								<feFlood floodOpacity={0.4} />
								<feComposite operator="in" in2="l" />
								<feComposite in="SourceGraphic" />
							</filter>
							<pattern
								id="m-reconocimientos-mobile-3"
								width={1}
								height={1}
								patternTransform="translate(2580.04 1542.465) rotate(-180)"
								viewBox="91.053 7.251 848.584 761.021">
								<image
									preserveAspectRatio="xMidYMid slice"
									width={1044.52}
									height={771.232}
									xlinkHref="/images/mobile/filosophy/ComponentTMP_0-image2.webp"
								/>
							</pattern>
							<filter
								id="n-reconocimientos-mobile-3"
								x={7.668}
								y={0}
								width={1938}
								height={92}
								filterUnits="userSpaceOnUse">
								<feOffset dy={3} />
								<feGaussianBlur stdDeviation={3} result="o" />
								<feFlood floodOpacity={0.6} />
								<feComposite operator="in" in2="o" />
								<feComposite in="SourceGraphic" />
							</filter>
							<filter
								id="p-reconocimientos-mobile-3"
								x={149.668}
								y={1717}
								width={542.363}
								height={330.139}
								filterUnits="userSpaceOnUse">
								<feOffset dy={3} />
								<feGaussianBlur stdDeviation={3} result="q" />
								<feFlood floodOpacity={0.4} />
								<feComposite operator="in" in2="q" />
								<feComposite in="SourceGraphic" />
							</filter>
							<filter
								id="r-reconocimientos-mobile-3"
								x={149.668}
								y={2063.139}
								width={542.363}
								height={330.139}
								filterUnits="userSpaceOnUse">
								<feOffset dy={3} />
								<feGaussianBlur stdDeviation={3} result="s" />
								<feFlood floodOpacity={0.4} />
								<feComposite operator="in" in2="s" />
								<feComposite in="SourceGraphic" />
							</filter>
							<filter
								id="t-reconocimientos-mobile-3"
								x={967.668}
								y={1717}
								width={542.363}
								height={330.139}
								filterUnits="userSpaceOnUse">
								<feOffset dy={3} />
								<feGaussianBlur stdDeviation={3} result="u" />
								<feFlood floodOpacity={0.4} />
								<feComposite operator="in" in2="u" />
								<feComposite in="SourceGraphic" />
							</filter>
							<filter
								id="v-reconocimientos-mobile-3"
								x={525.167}
								y={2409.277}
								width={609.363}
								height={330.139}
								filterUnits="userSpaceOnUse">
								<feOffset dy={3} />
								<feGaussianBlur stdDeviation={3} result="w" />
								<feFlood floodOpacity={0.4} />
								<feComposite operator="in" in2="w" />
								<feComposite in="SourceGraphic" />
							</filter>
							<filter
								id="x-reconocimientos-mobile-3"
								x={967.668}
								y={2063.139}
								width={542.363}
								height={330.139}
								filterUnits="userSpaceOnUse">
								<feOffset dy={3} />
								<feGaussianBlur stdDeviation={3} result="y" />
								<feFlood floodOpacity={0.4} />
								<feComposite operator="in" in2="y" />
								<feComposite in="SourceGraphic" />
							</filter>
							<pattern
								id="z-reconocimientos-mobile-3"
								width={1}
								height={1}
								viewBox="136.295 14.959 325.866 297.179">
								<image
									preserveAspectRatio="xMidYMid slice"
									width={468.208}
									height={312.139}
									xlinkHref="/images/mobile/filosophy/ComponentTMP_0-image3.webp"
								/>
							</pattern>
							<filter
								id="aa-reconocimientos-mobile-3"
								x={625.398}
								y={1717}
								width={360.27}
								height={330.139}
								filterUnits="userSpaceOnUse">
								<feOffset dy={3} />
								<feGaussianBlur stdDeviation={3} result="ab" />
								<feFlood floodOpacity={0.4} />
								<feComposite operator="in" in2="ab" />
								<feComposite in="SourceGraphic" />
							</filter>
							<pattern
								id="ac-reconocimientos-mobile-3"
								width={1}
								height={1}
								viewBox="99.125 49.14 288.386 262.999">
								<image
									preserveAspectRatio="xMidYMid slice"
									width={468.208}
									height={312.139}
									xlinkHref="/images/mobile/filosophy/ComponentTMP_0-image4.webp"
								/>
							</pattern>
							<filter
								id="ad-reconocimientos-mobile-3"
								x={625.398}
								y={2063.139}
								width={360.27}
								height={330.139}
								filterUnits="userSpaceOnUse">
								<feOffset dy={3} />
								<feGaussianBlur stdDeviation={3} result="ae" />
								<feFlood floodOpacity={0.4} />
								<feComposite operator="in" in2="ae" />
								<feComposite in="SourceGraphic" />
							</filter>
							<pattern
								id="af-reconocimientos-mobile-3"
								width={1}
								height={1}
								viewBox="105.789 38.891 299.625 273.248">
								<image
									preserveAspectRatio="xMidYMid slice"
									width={468.208}
									height={312.139}
									xlinkHref="/images/mobile/filosophy/ComponentTMP_0-image5.webp"
								/>
							</pattern>
							<filter
								id="ag-reconocimientos-mobile-3"
								x={1443.398}
								y={1717}
								width={360.27}
								height={330.139}
								filterUnits="userSpaceOnUse">
								<feOffset dy={3} />
								<feGaussianBlur stdDeviation={3} result="ah" />
								<feFlood floodOpacity={0.4} />
								<feComposite operator="in" in2="ah" />
								<feComposite in="SourceGraphic" />
							</filter>
							<pattern
								id="ai-reconocimientos-mobile-3"
								width={1}
								height={1}
								viewBox="151.076 0 302.806 276.149">
								<image
									preserveAspectRatio="xMidYMid slice"
									width={453.882}
									height={312.139}
									xlinkHref="/images/mobile/filosophy/ComponentTMP_0-image6.webp"
								/>
							</pattern>
							<filter
								id="aj-reconocimientos-mobile-3"
								x={1067.898}
								y={2409.277}
								width={360.27}
								height={330.139}
								filterUnits="userSpaceOnUse">
								<feOffset dy={3} />
								<feGaussianBlur stdDeviation={3} result="ak" />
								<feFlood floodOpacity={0.4} />
								<feComposite operator="in" in2="ak" />
								<feComposite in="SourceGraphic" />
							</filter>
							<pattern
								id="al-reconocimientos-mobile-3"
								width={1}
								height={1}
								viewBox="66.465 0 325.114 296.494">
								<image
									preserveAspectRatio="xMidYMid slice"
									width={468.248}
									height={312.139}
									xlinkHref="/images/mobile/filosophy/ComponentTMP_0-image7.webp"
								/>
							</pattern>
							<filter
								id="am-reconocimientos-mobile-3"
								x={1443.398}
								y={2063.139}
								width={360.27}
								height={330.139}
								filterUnits="userSpaceOnUse">
								<feOffset dy={3} />
								<feGaussianBlur stdDeviation={3} result="an" />
								<feFlood floodOpacity={0.4} />
								<feComposite operator="in" in2="an" />
								<feComposite in="SourceGraphic" />
							</filter>
							<pattern
								id="ao-reconocimientos-mobile-3"
								width={1}
								height={1}
								viewBox="166.162 0 786.581 804.018">
								<image
									preserveAspectRatio="xMidYMid slice"
									width={1139.478}
									height={854.608}
									xlinkHref="/images/mobile/filosophy/ComponentTMP_0-image8.webp"
								/>
							</pattern>
						</defs>
						<g>
							<g transform="translate(550.668 1740)">
								<g
									className="b-reconocimientos-mobile-3"
									transform="translate(-571 143)">
									<path
										className="c-reconocimientos-mobile-3"
										d="M600.14,182.416v-2.251H730.378v.081h132.1c63.658,0,120.615-53.631,145.106-136.635l.047-.161L1020.444,0h1.724l-13.119,44.474c-.46,1.566-.935,3.115-1.422,4.66C995.4,88.109,975.72,121.12,950.551,144.829c-26.169,24.644-56.623,37.669-88.076,37.669H645.027v-.082Z"
										transform="translate(-827.154 -1091.417)"
									/>
									<path
										className="d-reconocimientos-mobile-3"
										d="M1851.14,179.187v-2.211H1152.947v.079H902.685c-120.6,0-228.51-52.682-274.909-134.217l-.089-.158L603.406,0H600.14l24.854,43.687Q626.3,46,627.688,48.264c23.169,38.286,60.449,70.712,108.134,94,49.578,24.208,107.275,37,166.863,37h411.963v-.08Z"
										transform="translate(624.86 -426.268)"
									/>
									<path
										className="e-reconocimientos-mobile-3"
										d="M600.14,179.187v-2.211h698.193v.079h250.262c120.6,0,228.51-52.682,274.909-134.217l.089-.158L1847.874,0h3.266l-24.854,43.687q-1.307,2.308-2.693,4.577c-23.169,38.285-60.449,70.712-108.134,94-49.578,24.208-107.275,37-166.863,37H1136.632v-.08Z"
										transform="translate(-620.14 -1337.268)"
									/>
									<path
										className="c-reconocimientos-mobile-3"
										d="M0,79.086V78.11H85.246v.035h86.463c41.667,0,78.948-23.252,94.978-59.238l.031-.07L275.105,0h1.129l-8.587,19.282c-.3.679-.612,1.351-.93,2.02-1.017,2.146-2.112,4.25-3.357,6.44a99.43,99.43,0,0,1-34,35.048,108.736,108.736,0,0,1-57.649,16.331H29.38v-.035Z"
										transform="translate(21 487.814)"
									/>
									<path
										className="e-reconocimientos-mobile-3"
										d="M1928,802.11l-33.267,11.244q-3.3,1.11-6.541,2.287c-54.718,19.674-101.061,51.328-134.344,91.818-34.6,42.1-52.883,91.087-52.883,141.683v349.8h3.161v-349.8c0-102.4,75.293-194.028,191.819-233.426l.228-.076L1928,804.884Z"
										transform="translate(22 412.61)"
									/>
									<path
										className="e-reconocimientos-mobile-3"
										d="M385.091,170.106V0H127.639C74.208,0,25.543,65.982,0,170.106Z"
										transform="translate(191.106 1395.973) rotate(90)"
									/>
									<path
										className="f-reconocimientos-mobile-3"
										d="M385.091,0V170.106H127.639C74.208,170.106,25.543,104.123,0,0Z"
										transform="translate(1941 700.973) rotate(90)"
									/>
								</g>
							</g>
							<g transform="translate(0.668 -89)">
								<g
									className="an-reconocimientos-mobile-3"
									transform="matrix(1, 0, 0, 1, -16.67, 83)">
									<path
										className="g-reconocimientos-mobile-3"
										d="M1912.489,0,1809.395,433.854c-29.537,124.329-95.888,205.422-281.736,205.422H690.489L813.172,0Z"
										transform="translate(24.18 21.01)"
									/>
								</g>
								<g
									className="am-reconocimientos-mobile-3"
									transform="matrix(1, 0, 0, 1, -16.67, 83)">
									<path
										className="e-reconocimientos-mobile-3"
										d="M0,.286V783.518H640.728c27.291,0,50.335-17.363,53.794-40.5l29.387-170.822L837,.286Z"
										transform="translate(16.67 20.98)"
									/>
								</g>
								<g
									className="al-reconocimientos-mobile-3"
									transform="matrix(1, 0, 0, 1, -16.67, 83)">
									<path
										className="h-reconocimientos-mobile-3"
										d="M0,.286v773.86H634.349c27.019,0,50.316-11.871,53.259-40.02L716.7,565.349,828.668.286Z"
										transform="translate(16 18.36)"
									/>
								</g>
							</g>
							<g transform="translate(1920 1591.012) rotate(180)">
								<g
									className="ak-reconocimientos-mobile-3"
									transform="matrix(-1, 0, 0, -1, 1936, 1597.01)">
									<path
										className="g-reconocimientos-mobile-3"
										d="M1912.489,0,1809.395,433.854c-29.537,124.329-95.888,205.422-281.736,205.422H690.489L813.172,0Z"
										transform="translate(1928.49 1493) rotate(180)"
									/>
								</g>
								<g
									className="aj-reconocimientos-mobile-3"
									transform="matrix(-1, 0, 0, -1, 1936, 1597.01)">
									<path
										className="f-reconocimientos-mobile-3"
										d="M0,.286V783.518H664.691c28.312,0,52.217-17.363,55.806-40.5l30.486-170.822L868.3.286Z"
										transform="translate(1936 1493.03) rotate(180)"
									/>
								</g>
								<path
									className="i-reconocimientos-mobile-3"
									d="M0,.286V771.518H658.312c28.04,0,52.217-11.83,55.271-39.884l30.193-168.2L859.971.286Z"
									transform="translate(-0.668 103.985)"
								/>
							</g>
							<text
								className="j-reconocimientos-mobile-3"
								transform="translate(944.668 306)">
								<tspan x={0} y={23}>
									{
										t('Somos un grupo empresarial orgullosamente colombiano ') 
									}
								</tspan>
								<tspan x={0} y={49}>
									{
										t('que representa productos y servicios de calidad guiados ')
									}
								</tspan>
								<tspan x={0} y={75}>
									{
										t('por nuestra filosofía SER (Servicio, Educación, ')
									}
								</tspan>
								<tspan x={0} y={101}>
									{t('Relacionamiento).')}
								</tspan>
								<tspan x={0} y={127} />
								<tspan x={0} y={153}>
									{
										t('Generamos valor a los pacientes, sus familias, instituciones ')
									}
								</tspan>
								<tspan x={0} y={179}>
									{
										t('de salud y accionistas con un talento humano excepcional, ')
									}
								</tspan>
								<tspan x={0} y={205}>
									{
										t('con sentido ético y altamente comprometido con la salud ')
									}
								</tspan>
								<tspan x={0} y={231}>
									{t('y la vida.')}
								</tspan>
							</text>
							<text
								className="j-reconocimientos-mobile-3"
								transform="translate(281.668 1129.866)">
								<tspan x={0} y={23}>
									{
										t('En el 2025 el Grupo Amarey será el aliado preferido de ')
									}
								</tspan>
								<tspan x={0} y={49}>
									{
										t('las instituciones de salud y de los fabricantes de ')
									}
								</tspan>
								<tspan x={0} y={75}>
									{
										t('productos especializados, en Colombia y los países del ')
									}
								</tspan>
								<tspan x={0} y={101}>
									{t('área andina y Centroamérica.')}
								</tspan>
								<tspan x={0} y={127} />
								<tspan x={0} y={153}>
									{
										t('Esto será posible por nuestra trayectoria, reputación, por ')
									}
								</tspan>
								<tspan x={0} y={179}>
									{
										t('cumplir lo que prometemos y por la capacidad para ')
									}
								</tspan>
								<tspan x={0} y={205}>
									{
										t('ofrecer soluciones integrales innovadoras.')
									}
								</tspan>
							</text>
							<text
								className="j-reconocimientos-mobile-3"
								transform="translate(281.668 2986.067)">
								<tspan x={0} y={23}>
									{
										t('El Grupo Amarey trabaja bajo una única premisa: la filosofía SER ')
									}
								</tspan>
								<tspan x={0} y={49}>
									{
										t('(Servicio, Educación y Relacionamiento), pilares que marcan la ')
									}
								</tspan>
								<tspan x={0} y={75}>
									{
										t('diferencia de la compañía en la industria.')
									}
								</tspan>
							</text>
							<text
								className="j-reconocimientos-mobile-3"
								transform="translate(281.668 3132.866)">
								<tspan x={0} y={23}>
									{
										t('Una compañía con sentido humano, que ofrece un servicio que ')
									}
								</tspan>
								<tspan x={0} y={49}>
									{
										t('trasciende hacia brindar más oportunidades para la vida. ')
									}
								</tspan>
							</text>
							<text
								className="j-reconocimientos-mobile-3"
								transform="translate(281.668 3249)">
								<tspan x={0} y={23}>
									{
										t('Representa el compromiso del Grupo Amarey con la generación de ')
									}
								</tspan>
								<tspan x={0} y={49}>
									{
										t('conocimiento para el personal de la salud, contribuyendo a la ')
									}
								</tspan>
								<tspan x={0} y={75}>
									{
										t('construcción de un país que ofrezca mayores beneficios para la ')
									}
								</tspan>
								<tspan x={0} y={101}>
									{t('calidad de vida de los pacientes. ')}
								</tspan>
							</text>
							<text
								className="j-reconocimientos-mobile-3"
								transform="translate(281.668 3429)">
								<tspan x={0} y={23}>
									{
										t('Ha permitido construir la base de confianza y reputación del ')
									}
								</tspan>
								<tspan x={0} y={49}>
									{
										t('Grupo Amarey frente a sus públicos de interés. Hoy la compañía es ')
									}
								</tspan>
								<tspan x={0} y={75}>
									{
										t('reconocida por su integridad, compromiso, excelencia, humanidad ')
									}
								</tspan>
								<tspan x={0} y={101}>
									{t('e innovación. ')}
								</tspan>
							</text>
							<text
								className="k-reconocimientos-mobile-3"
								transform="translate(944.668 258)">
								<tspan x={0} y={0}>
									{t('Misión')}
								</tspan>
							</text>
							<text
								className="k-reconocimientos-mobile-3"
								transform="translate(281.668 1081.866)">
								<tspan x={0} y={0}>
									{'Visión'}
								</tspan>
							</text>
							<text
								className="k-reconocimientos-mobile-3"
								transform="translate(961.168 1628.866)">
								<tspan x={-151.27} y={0}>
									{t('Valores')}
								</tspan>
							</text>
							<text
								className="k-reconocimientos-mobile-3"
								transform="translate(533.668 2948.866)">
								<tspan x={-251.79} y={0}>
									{t('Filosofía SER')}
								</tspan>
							</text>
							<g
								className="ai-reconocimientos-mobile-3"
								transform="matrix(1, 0, 0, 1, -16, -6)">
								<rect
									className="l-reconocimientos-mobile-3"
									width={1920}
									height={74}
									transform="translate(16.67 6)"
								/>
							</g>
							<text
								className="m-reconocimientos-mobile-3"
								transform="translate(960.668 60)">
								<tspan x={-106.722} y={0}>
									{t('FILOSOFÍA')}
								</tspan>
							</text>
							<g
								className="ah-reconocimientos-mobile-3"
								transform="matrix(1, 0, 0, 1, -16, -6)">
								<path
									className="g-reconocimientos-mobile-3"
									d="M524.363,0H48.632c-7.485,0-13.813,6.87-14.79,16.068L.128,291.286c-1.169,11.041,5.785,20.852,14.789,20.852H490.649c-9,0-15.959-9.812-14.789-20.852L509.573,16.068C510.549,6.87,516.877,0,524.363,0"
									transform="translate(158.67 1723)"
								/>
							</g>
							<g
								className="ag-reconocimientos-mobile-3"
								transform="matrix(1, 0, 0, 1, -16, -6)">
								<path
									className="e-reconocimientos-mobile-3"
									d="M524.363,312.139H48.632c-7.485,0-13.813-6.87-14.79-16.068L.128,20.852C-1.041,9.812,5.914,0,14.918,0H490.649c-9,0-15.959,9.812-14.789,20.852l33.714,275.219c.976,9.2,7.3,16.068,14.789,16.068"
									transform="translate(158.67 2069.14)"
								/>
							</g>
							<g
								className="af-reconocimientos-mobile-3"
								transform="matrix(1, 0, 0, 1, -16, -6)">
								<path
									className="e-reconocimientos-mobile-3"
									d="M524.363,312.139H48.632c-7.485,0-13.813-6.87-14.79-16.068L.128,20.852C-1.041,9.812,5.914,0,14.918,0H490.649c-9,0-15.959,9.812-14.789,20.852l33.714,275.219c.976,9.2,7.3,16.068,14.789,16.068"
									transform="translate(976.67 1723)"
								/>
							</g>
							<g
								className="ae-reconocimientos-mobile-3"
								transform="matrix(1, 0, 0, 1, -16, -6)">
								<path
									className="g-reconocimientos-mobile-3"
									d="M524.363,312.139H-18.368c-7.485,0-13.813-6.87-14.79-16.068L-66.872,20.852C-68.041,9.812-61.086,0-52.082,0H490.649c-9,0-15.959,9.812-14.789,20.852l33.714,275.219c.976,9.2,7.3,16.068,14.789,16.068"
									transform="translate(601.17 2415.28)"
								/>
							</g>
							<g
								className="ad-reconocimientos-mobile-3"
								transform="matrix(1, 0, 0, 1, -16, -6)">
								<path
									className="g-reconocimientos-mobile-3"
									d="M524.363,0H48.632c-7.485,0-13.813,6.87-14.79,16.068L.128,291.286c-1.169,11.041,5.785,20.852,14.789,20.852H490.649c-9,0-15.959-9.812-14.789-20.852L509.573,16.068C510.549,6.87,516.878,0,524.363,0"
									transform="translate(976.67 2069.14)"
								/>
							</g>
							<g
								className="ac-reconocimientos-mobile-3"
								transform="matrix(1, 0, 0, 1, -16, -6)">
								<path
									className="n-reconocimientos-mobile-3"
									d="M927.558,291.359l-32.7-275.231C893.9,6.919,887.565,0,880.055,0H634.042c-7.485,0-13.813,6.871-14.789,16.068L585.538,291.286c-1.169,11.041,5.786,20.852,14.79,20.852H912.757c8.98,0,15.934-9.763,14.8-20.78"
									transform="translate(48.99 1723)"
								/>
							</g>
							<g
								className="ab-reconocimientos-mobile-3"
								transform="matrix(1, 0, 0, 1, -16, -6)">
								<path
									className="o-reconocimientos-mobile-3"
									d="M927.558,20.78l-32.7,275.231c-.952,9.209-7.293,16.128-14.8,16.128H634.042c-7.485,0-13.813-6.871-14.789-16.068L585.538,20.852C584.369,9.811,591.324,0,600.329,0H912.757c8.98,0,15.934,9.763,14.8,20.78"
									transform="translate(48.99 2069.14)"
								/>
							</g>
							<g
								className="aa-reconocimientos-mobile-3"
								transform="matrix(1, 0, 0, 1, -16, -6)">
								<path
									className="p-reconocimientos-mobile-3"
									d="M927.558,20.78l-32.7,275.231c-.952,9.209-7.293,16.128-14.8,16.128H634.042c-7.485,0-13.813-6.871-14.789-16.068L585.538,20.852C584.369,9.811,591.324,0,600.328,0H912.757c8.98,0,15.934,9.763,14.8,20.78"
									transform="translate(866.99 1723)"
								/>
							</g>
							<g
								className="z-reconocimientos-mobile-3"
								transform="matrix(1, 0, 0, 1, -16, -6)">
								<path
									className="q-reconocimientos-mobile-3"
									d="M927.558,20.78l-32.7,275.231c-.952,9.209-7.293,16.128-14.8,16.128H634.042c-7.485,0-13.813-6.871-14.789-16.068L585.538,20.852C584.369,9.811,591.324,0,600.328,0H912.757c8.98,0,15.934,9.763,14.8,20.78"
									transform="translate(491.49 2415.28)"
								/>
							</g>
							<g
								className="y-reconocimientos-mobile-3"
								transform="matrix(1, 0, 0, 1, -16, -6)">
								<path
									className="r-reconocimientos-mobile-3"
									d="M927.558,291.359l-32.7-275.231C893.905,6.919,887.565,0,880.055,0H634.042c-7.485,0-13.813,6.871-14.789,16.068L585.538,291.286c-1.169,11.041,5.786,20.852,14.79,20.852H912.757c8.98,0,15.934-9.763,14.8-20.78"
									transform="translate(866.99 2069.14)"
								/>
							</g>
							<g transform="translate(111.668 2779)">
								<g transform="translate(1004)">
									<path
										className="e-reconocimientos-mobile-3"
										d="M843.538,1.723V863.107H249.853C194.267,852.9,146.232,807.072,124.338,741.135L79.235,494.3.694,64.376C-5.357,31.237,28.925,1.723,73.438,1.723Z"
										transform="translate(0 -0.115)"
									/>
									<path
										className="s-reconocimientos-mobile-3"
										d="M836.074,1.723V856.331H247.642c-55.094-10.128-102.7-55.594-124.4-121.013l-44.7-244.892L.688,63.883c-6-32.878,27.981-62.16,72.1-62.16Z"
										transform="translate(7.464 -1.723)"
									/>
								</g>
							</g>
							<text
								className="t-reconocimientos-mobile-3"
								transform="translate(212.668 1814)">
								<tspan x={0} y={0}>
									{t('Respeto y calidez')}
								</tspan>
							</text>
							<text
								className="t-reconocimientos-mobile-3"
								transform="translate(1041.668 2149)">
								<tspan x={0} y={0}>
									{t('Transparencia')}
								</tspan>
							</text>
							<text
								className="t-reconocimientos-mobile-3"
								transform="translate(593.168 2511)">
								<tspan x={0} y={0}>
									{t('Sentido de responsabilidad')}
								</tspan>
								<tspan x={0} y={34}>
									{t('con otros')}
								</tspan>
							</text>
							<text
								className="u-reconocimientos-mobile-3"
								transform="translate(1041.668 1804)">
								<tspan x={0} y={0}>
									{t('Excelencia en calidad')}
								</tspan>
							</text>
							<text
								className="u-reconocimientos-mobile-3"
								transform="translate(212.668 2160)">
								<tspan x={0} y={0}>
									{t('Convicción')}
								</tspan>
							</text>
							<text
								className="v-reconocimientos-mobile-3"
								transform="translate(281.668 3120)">
								<tspan x={0} y={0}>
									{t('Servicio ')}
								</tspan>
							</text>
							<text
								className="v-reconocimientos-mobile-3"
								transform="translate(281.668 3241)">
								<tspan x={0} y={0}>
									{t('Educación ')}
								</tspan>
							</text>
							<text
								className="v-reconocimientos-mobile-3"
								transform="translate(281.668 3416.134)">
								<tspan x={0} y={0}>
									{t('Relacionamiento ')}
								</tspan>
							</text>
							<text
								className="w-reconocimientos-mobile-3"
								transform="translate(212.668 1837)">
								<tspan x={0} y={23}>
									{t('Valoramos y respetamos el ')}
								</tspan>
								<tspan x={0} y={49}>
									{t('punto de vista, el saber y el ')}
								</tspan>
								<tspan x={0} y={75}>
									{t('quehacer de otros. Nos ')}
								</tspan>
								<tspan x={0} y={101}>
									{t('caracteriza el relacionamiento ')}
								</tspan>
								<tspan x={0} y={127}>
									{t('basado en las buenas maneras.')}
								</tspan>
							</text>
							<text
								className="w-reconocimientos-mobile-3"
								transform="translate(1041.668 2172)">
								<tspan x={0} y={23}>
									{t('Nuestras actuaciones siempre ')}
								</tspan>
								<tspan x={0} y={49}>
									{t('se realizan a la luz pública y ')}
								</tspan>
								<tspan x={0} y={75}>
									{t('están regidas siempre por la ')}
								</tspan>
								<tspan x={0} y={101}>
									{t('buena voluntad, la buena fe y ')}
								</tspan>
								<tspan x={0} y={127}>
									{t('la orientación a los resultados ')}
								</tspan>
								<tspan x={0} y={153}>
									{t('éticos y morales.')}
								</tspan>
							</text>
							<text
								className="w-reconocimientos-mobile-3"
								transform="translate(593.168 2559)">
								<tspan x={0} y={23}>
									{t('Somos sensibles a las necesidades ')}
								</tspan>
								<tspan x={0} y={49}>
									{t('de los demás comprometiéndonos ')}
								</tspan>
								<tspan x={0} y={75}>
									{t('con el mejoramiento de su calidad ')}
								</tspan>
								<tspan x={0} y={101}>
									{t('de vida y bienestar.')}
								</tspan>
							</text>
							<text
								className="x-reconocimientos-mobile-3"
								transform="translate(1041.668 1827)">
								<tspan x={0} y={23}>
									{t('Realizamos las cosas con ')}
								</tspan>
								<tspan x={0} y={49}>
									{t('calidad, oportunidad y actitud ')}
								</tspan>
								<tspan x={0} y={75}>
									{t('desde el principio, cumpliendo ')}
								</tspan>
								<tspan x={0} y={101}>
									{t('con la promesa de valor a ')}
								</tspan>
								<tspan x={0} y={127}>
									{t('nuestros clientes y propendiendo ')}
								</tspan>
								<tspan x={0} y={153}>
									{t('con el mejoramiento continuo.')}
								</tspan>
							</text>
							<text
								className="x-reconocimientos-mobile-3"
								transform="translate(212.668 2183)">
								<tspan x={0} y={23}>
									{t('Actuamos con conocimiento ')}
								</tspan>
								<tspan x={0} y={49}>
									{t('profundo sobre los bienes y ')}
								</tspan>
								<tspan x={0} y={75}>
									{t('servicios que le brindamos a la ')}
								</tspan>
								<tspan x={0} y={101}>
									{t('comunidad, identificándonos ')}
								</tspan>
								<tspan x={0} y={127}>
									{t('con la filosofía corporativa.')}
								</tspan>
							</text>
						</g>
					</svg>
				</div>
			) : (
				<React.Fragment>
					<FilosofiaMobile />
				</React.Fragment>
			)}
		</div>
	)
}

export default Filosofia
