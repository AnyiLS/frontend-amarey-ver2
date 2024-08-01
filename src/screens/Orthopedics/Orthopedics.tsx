import React from 'react'
import useGeneral from 'hooks/general.hook'
import SelectedImage from './components/SelectedImage'
import OrthopedicsMobile from './Ortopedics'
import { useTranslation } from 'react-i18next'
import useLayout from 'hooks/ancho.hook'

const Orthopedics: React.FC = (): JSX.Element => {
	/** Hooks */
	const { width, height } = useGeneral()
	const { navbarHeight } = useLayout()

	const [showModal, setShowModal] = React.useState(false)
	const [openShow, setOpenShow] = React.useState(false)

	const { t } = useTranslation()
	return (
		<React.Fragment>
			{width > 1024 ? (
				<React.Fragment>
					{showModal ? (
						<SelectedImage
							height={height}
							onClose={() => setShowModal(false)}></SelectedImage>
					) : (
						<div
							className="h-full"
							style={{ marginTop: navbarHeight }}>
							<svg
								width="100%"
								height="100%"
								preserveAspectRatio="none"
								viewBox="0 0 1920 768">
								<defs>
									<style>
										{
											'.a-products-desktop,.b-products-desktop{stroke:#707070;}.a-products-desktop{fill:url(#a-products-desktop);}.b-products-desktop{opacity:1;mix-blend-mode:multiply;isolation:isolate;fill:url(#b);}.c-products-desktop,.e-products-desktop,.f-products-desktop,.g-products-desktop,.i-products-desktop,.j-products-desktop{fill:#fff;}.c-products-desktop{font-size:55px;}.c-products-desktop,.e-products-desktop,.i-products-desktop{font-family:Kiona-Bold, Kiona;font-weight:700;}.d-products-desktop{fill:rgba(67,67,67,0.09);}.e-products-desktop{font-size:42px;}.g-products-desktop,.j-products-desktop{font-size:24px;}.g-products-desktop{font-family:Silka-SemiBold, Silka;font-weight:600;}.h-products-desktop{fill:rgba(255,255,255,0.5);}.i-products-desktop{font-size:28px;}.j-products-desktop{font-family:Silka-Regular, Silka;}.k-products-desktop{fill:#e40032;}.l-products-desktop{stroke:none;}.m-products-desktop{fill:none;}.n-products-desktop{filter:url(#e-products-desktop);}.o-products-desktop{filter:url(#c-products-desktop);}'
										}
									</style>
									1
									<pattern
										id="a-products-desktop"
										width={1}
										height={1}
										viewBox="333.886 135.659 1526.981 775.42">
										<image
											preserveAspectRatio="xMidYMid slice"
											width={1920}
											height={1080}
											xlinkHref="/images/products/background-desktop.webp"
										/>
									</pattern>
									<linearGradient
										id="b-products-desktop"
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
										id="c-products-desktop"
										x={0}
										y={0}
										width={1938}
										height={92}
										filterUnits="userSpaceOnUse">
										<feOffset dy={3} />
										<feGaussianBlur
											stdDeviation={3}
											result="d"
										/>
										<feFlood floodOpacity={0.302} />
										<feComposite operator="in" in2="d" />
										<feComposite in="SourceGraphic" />
									</filter>
									<filter
										id="e-products-desktop"
										x={819.319}
										y={889}
										width={299.362}
										height={72.775}
										filterUnits="userSpaceOnUse">
										<feOffset dy={3} />
										<feGaussianBlur
											stdDeviation={3}
											result="f"
										/>
										<feFlood floodOpacity={0.4} />
										<feComposite operator="in" in2="f" />
										<feComposite in="SourceGraphic" />
									</filter>
								</defs>
								<g>
									<g className="a-products-desktop">
										<rect
											className="l-products-desktop"
											width={1920}
											height={975}
										/>
										<rect
											className="m-products-desktop"
											x={0.5}
											y={0.5}
											width={1919}
											height={974}
										/>
									</g>
									<g className="b-products-desktop">
										<rect
											className="l-products-desktop"
											width={1920}
											height={975}
										/>
										<rect
											className="m-products-desktop"
											x={0.5}
											y={0.5}
											width={1919}
											height={974}
										/>
									</g>
									<text
										className="c-products-desktop"
										transform="translate(292 633)">
										<tspan x={-151.635} y={0}>
											{t('ORTOPEDIA')}
										</tspan>
									</text>
									<g
										className="o-products-desktop"
										transform="matrix(1, 0, 0, 1, -9, -6)">
										<rect
											className="d-products-desktop"
											width={1920}
											height={74}
											transform="translate(9 6)"
										/>
									</g>
									<text
										className="e-products-desktop"
										transform="translate(960 54)">
										<tspan
											x={-242.718}
											y={0}
											xmlSpace="preserve">
											{t(' SOLUCIONES EN SALUD')}
										</tspan>
									</text>

									<a href="/productos">
										<path
											className="f-products-desktop"
											d="M45.263,0V19.012L61.725,9.505l-7.863-4.54Z"
											transform="translate(201.725 50.773) rotate(180)"
										/>
										<text
											className="g-products-desktop"
											transform="translate(232.852 49.768)">
											<tspan x={-71.52} y={0}>
												{t('Volver')}
											</tspan>
										</text>
									</a>

									<g transform="translate(0 -200)">
										<g
											className="n-products-desktop"
											transform="matrix(1, 0, 0, 1, -9, -6)">
											<path
												className="h-products-desktop"
												d="M281.362,0H57.711C34.449,0,13.561,15.983,5.067,40.281L0,54.775H221.8c24.783,0,46.972-17.232,55.7-43.257Z"
												transform="translate(828.32 895)"
											/>
										</g>
										<text
											className="i-products-desktop cursor-pointer"
											transform="translate(867.5 927.388)"
											style={{
												fill: openShow
													? '#001f5f'
													: '#ffffff',
											}}
											onMouseLeave={() =>
												setOpenShow(false)
											}
											onMouseOver={() =>
												setOpenShow(true)
											}
											onClick={() => setShowModal(true)}>
											<tspan x={0} y={0}>
												{t('Conoce Más')}
											</tspan>
										</text>
									</g>

									<g transform="translate(0 -150)">
										<g transform="translate(968 543)">
											<text className="j-products-desktop">
												<tspan x={0} y={23}>
													{t(
														'Somos líderes con tecnología que aporta a los profesionales de la '
													)}
												</tspan>
												<tspan x={0} y={51}>
													{t(
														'salud y sus pacientes las herramientas en cirugías que permiten '
													)}
												</tspan>
												<tspan x={0} y={79}>
													{t(
														'alcanzar una calidad de vida más activa y satisfactoria mediante '
													)}
												</tspan>
												<tspan
													x={0}
													y={107}
													xmlSpace="preserve">
													{t('las líneas de:  ')}
												</tspan>
											</text>
											<text
												className="j-products-desktop"
												transform="translate(65 133)">
												<tspan x={0} y={23}>
													{t('Trauma ')}
												</tspan>
												<tspan x={0} y={51}>
													{t('Reemplazo articular ')}
												</tspan>
												<tspan x={0} y={79}>
													{t('Artroscopia ')}
												</tspan>
												<tspan x={0} y={107}>
													{t(
														'Cráneo y maxilofacial '
													)}
												</tspan>
											</text>
										</g>
										<g transform="translate(1033.569 686.978)">
											<circle
												className="k-products-desktop"
												cx={3}
												cy={3}
												r={3}
												transform="translate(-15.569 2.022)"
											/>
											<circle
												className="k-products-desktop"
												cx={3}
												cy={3}
												r={3}
												transform="translate(-15.569 30.023)"
											/>
											<circle
												className="k-products-desktop"
												cx={3}
												cy={3}
												r={3}
												transform="translate(-15.569 57.022)"
											/>
											<circle
												className="k-products-desktop"
												cx={3}
												cy={3}
												r={3}
												transform="translate(-15.569 85.022)"
											/>
										</g>
									</g>
								</g>
							</svg>
						</div>
					)}
				</React.Fragment>
			) : (
				<React.Fragment>
					<OrthopedicsMobile />
				</React.Fragment>
			)}
		</React.Fragment>
	)
}

export default Orthopedics
