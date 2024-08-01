import React from 'react'
import useGeneral from 'hooks/general.hook'
import Medical from './Components/Medical'
import MedicalDevicesMobile from './MedicalDevicesSurgicalMobile'
import { useTranslation } from 'react-i18next'
import useLayout from 'hooks/ancho.hook'

const MedicalSurgicalDevices: React.FC = (): JSX.Element => {
	/** Hooks */
	const { width, height } = useGeneral()
	const { navbarHeight } = useLayout()
	const [ShowModal, setShowModal] = React.useState(false)
	const [openShow, setOpenShow] = React.useState(false)

	const { t } = useTranslation()
	return (
		<React.Fragment>
			{width > 1024 ? (
				<React.Fragment>
					{ShowModal ? (
						<Medical
							height={height}
							onClose={() => setShowModal(false)}></Medical>
					) : (
						<div
							className="h-full"
							style={{ marginTop: navbarHeight }}>
							<svg
								viewBox="0 0 1920 768"
								width="100%"
								height="100%"
								preserveAspectRatio="none">
								<defs>
									<style>
										{
											'.a-medical-survery,.b-medical-survery{stroke:#707070;}.a-medical-survery{fill:url(#a-medical-survery);}.b-medical-survery{opacity:0.91;mix-blend-mode:multiply;isolation:isolate;fill:url(#b-medical-survery);}.c-medical-survery,.d-medical-survery,.f-medical-survery,.i-medical-survery,.j-medical-survery{fill:#fff;}.c-medical-survery{font-size:55px;}.c-medical-survery,.f-medical-survery{font-family:Kiona-Bold, Kiona;font-weight:700;}.d-medical-survery,.j-medical-survery{font-size:24px;}.d-medical-survery{font-family:Silka-Regular, Silka;}.e-medical-survery{fill:rgba(67,67,67,0.09);}.f-medical-survery{font-size:42px;}.g-medical-survery{opacity:1;}.h-medical-survery{fill:rgba(255,255,255,0.5);}.j-medical-survery{font-family:Silka-SemiBold, Silka;font-weight:600;}.k-medical-survery{stroke:none;}.l-medical-survery{fill:none;}.m-medical-survery{filter:url(#c-medical-survery);}'
										}
									</style>
									<pattern
										id="a-medical-survery"
										preserveAspectRatio="xMidYMid slice"
										width="100%"
										height="100%"
										viewBox="238.241 500.763 1426.301 724.293">
										<image
											width={1920}
											height={1279.875}
											xlinkHref="/images/products/background-medical.webp"
										/>
									</pattern>
									<linearGradient
										id="b-medical-survery"
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
										id="c-medical-survery"
										x={0}
										y={0}
										width={1938}
										height={92}
										filterUnits="userSpaceOnUse">
										<feOffset dy={3} />
										<feGaussianBlur
											stdDeviation={3}
											result="d-medical-survery"
										/>
										<feFlood floodOpacity={0.302} />
										<feComposite
											operator="in"
											in2="d-medical-survery"
										/>
										<feComposite in="SourceGraphic" />
									</filter>
								</defs>
								<g>
									<g className="a-medical-survery">
										<rect
											className="k-medical-survery"
											width={1920}
											height={1080}
										/>
										<rect
											className="l-medical-survery"
											x={0.5}
											y={0.5}
											width={1919}
											height={1080}
										/>
									</g>
									<g className="b-medical-survery">
										<rect
											className="k-medical-survery"
											width={1920}
											height={1080}
										/>
										<rect
											className="l-medical-survery"
											x={0.5}
											y={0.5}
											width={1919}
											height={1080}
										/>
									</g>
									<g transform="translate(0 -250)">
										<text
											className="c-medical-survery"
											transform="translate(140 776)">
											<tspan x={0} y={0}>
												{t('Dispositivos')}
											</tspan>
											<tspan x={0} y={57}>
												{t('médico-quirúrgicos')}
											</tspan>
										</text>
										<text
											className="d-medical-survery"
											transform="translate(968 757)">
											<tspan x={0} y={23}>
												{t(
													'Somos un aliado estrat\xE9gico para los profesionales que realizan '
												)}
											</tspan>
											<tspan x={0} y={51}>
												{t(
													'procedimientos quir\xFArgicos con equipos y dispositivos m\xE9dicos que '
												)}
											</tspan>
											<tspan x={0} y={79}>
												{
													'mejoran los resultados del paciente en una intervenci\xF3n.'
												}
											</tspan>
										</text>
									</g>
									<g
										className="m-medical-survery"
										transform="matrix(1, 0, 0, 1, -9, -6)">
										<rect
											className="e-medical-survery"
											width={1920}
											height={74}
											transform="translate(9 6)"
										/>
									</g>
									<text
										className="f-medical-survery"
										transform="translate(960 54)">
										<tspan x={-125.412} y={0}>
											{t('SOLUCIONES EN SALUD')}
										</tspan>
									</text>
									<g
										onClick={() => setShowModal(true)}
										className="g-medical-survery"
										transform="translate(807 680.975)">
										<defs>
											<style>
												{
													'.a-boton-pequena{fill:rgba(255,255,255,0.5);}.b-boton-pequena{fill:#fff;font-size:28px;font-family:Kiona-Bold, Kiona;font-weight:700;}.c-boton-pequena{filter:url(#a-boton-pequena);}'
												}
											</style>
											<filter
												id="a-boton-pequena"
												x={0}
												y={0}
												width={299.362}
												height={72.775}
												filterUnits="userSpaceOnUse">
												<feOffset dy={3} />
												<feGaussianBlur
													stdDeviation={3}
													result="b-boton-pequena"
												/>
												<feFlood floodOpacity={0.4} />
												<feComposite
													operator="in"
													in2="b-boton-pequena"
												/>
												<feComposite in="SourceGraphic" />
											</filter>
										</defs>
										<g
											onMouseLeave={() =>
												setOpenShow(false)
											}
											onMouseOver={() =>
												setOpenShow(true)
											}>
											<g
												className="c-boton-pequena cursor-pointer"
												transform="matrix(1, 0, 0, 1, 0, 0)">
												<path
													className="a-boton-pequena cursor-pointer"
													d="M281.362,0H57.711C34.449,0,13.561,15.983,5.067,40.281L0,54.775H221.8c24.783,0,46.972-17.232,55.7-43.257Z"
													transform="translate(9 6)"
												/>
											</g>
											<text
												className="b-boton-pequena cursor-pointer"
												transform="translate(55 42)"
												style={{
													fill: openShow
														? '#001f5f'
														: '#ffffff',
												}}>
												<tspan x={0} y={0}>
													{t('Conoce M\xE1s')}
												</tspan>
											</text>
										</g>
									</g>
									<a href="/productos">
										<path
											className="i-medical-survery"
											d="M45.263,0V19.012L61.725,9.505l-7.863-4.54Z"
											transform="translate(201.725 50.773) rotate(180)"
										/>
										<text
											className="j-medical-survery"
											transform="translate(232.852 49.768)">
											<tspan x={-71.52} y={0}>
												{t('Volver')}
											</tspan>
										</text>
									</a>
								</g>
							</svg>
						</div>
					)}
				</React.Fragment>
			) : (
				<React.Fragment>
					<MedicalDevicesMobile />
				</React.Fragment>
			)}
		</React.Fragment>
	)
}

export default MedicalSurgicalDevices
