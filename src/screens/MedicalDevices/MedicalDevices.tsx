import React from 'react'
import useGeneral from 'hooks/general.hook'
import DevicesMedical from './Components/DevicesMedical'
import MedicalDevicesMOMobile from './MedicalDevicesMOMobile'
import { useTranslation } from 'react-i18next'
import useLayout from 'hooks/ancho.hook'

const MedicalDevices: React.FC = (): JSX.Element => {
	/** Hooks */
	const { width, height } = useGeneral()
	const [ShowModal, setShowModal] = React.useState(false)
	const [openShow, setOpenShow] = React.useState(false)

	const { t } = useTranslation()
	const { isSmallScreen, navbarHeight } = useLayout()

	return (
		<React.Fragment>
			{width > 1024 ? (
				<React.Fragment>
					{ShowModal ? (
						<DevicesMedical
							height={height}
							onClose={() =>
								setShowModal(false)
							}></DevicesMedical>
					) : (
						<div className="h-full" style={{ marginTop: navbarHeight }}>
							<svg
							width="100%"
							height="100%"
							preserveAspectRatio="none"
							viewBox="0 0 1920 768">
							<defs>
								<style>
									{
										'.a-medical-devices,.b-medical-devices{stroke:#707070;}.a-medical-devices{fill:url(#a-medical-devices);}.b-medical-devices{opacity:0.91;mix-blend-mode:multiply;isolation:isolate;fill:url(#b-medical-devices);}.c-medical-devices,.d-medical-devices,.f-medical-devices,.i-medical-devices,.j-medical-devices{fill:#fff;}.c-medical-devices{font-size:55px;}.c-medical-devices,.f-medical-devices{font-family:Kiona-Bold, Kiona;font-weight:700;}.d-medical-devices,.j-medical-devices{font-size:24px;}.d-medical-devices{font-family:Silka-Regular, Silka;}.e-medical-devices{fill:rgba(67,67,67,0.09);}.f-medical-devices{font-size:42px;}.g-medical-devices{opacity:1;}.h-medical-devices{fill:rgba(255,255,255,0.5);}.j-medical-devices{font-family:Silka-SemiBold, Silka;font-weight:600;}.k-medical-devices{stroke:none;}.l-medical-devices{fill:none;}.m-medical-devices{filter:url(#c-medical-devices);}'
									}
								</style>
								<pattern
									id="a-medical-devices"
									width={1}
									height={1}
									viewBox="178.204 146.717 1741.796 884.506">
									<image
										preserveAspectRatio="xMidYMid slice"
										width={1920}
										height={1077.895}
										xlinkHref="/images/products/background-medical-devices.webp"
									/>
								</pattern>
								<linearGradient
									id="b-medical-devices"
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
									id="c-medical-devices"
									x={0}
									y={0}
									width={1938}
									height={92}
									filterUnits="userSpaceOnUse">
									<feOffset dy={3} />
									<feGaussianBlur
										stdDeviation={3}
										result="d-medical-devices"
									/>
									<feFlood floodOpacity={0.302} />
									<feComposite
										operator="in"
										in2="d-medical-devices"
									/>
									<feComposite in="SourceGraphic" />
								</filter>
							</defs>
							<g>
								<g className="a-medical-devices">
									<rect
										className="k-medical-devices"
										width={1920}
										height={1080}
									/>
									<rect
										className="l-medical-devices"
										x={0.5}
										y={0.5}
										width={1919}
										height={1080}
									/>
								</g>
								<g className="b-medical-devices">
									<rect
										className="k-medical-devices"
										width={1920}
										height={1080}
									/>
									<rect
										className="l-medical-devices"
										x={0.5}
										y={0.5}
										width={1919}
										height={1080}
									/>
								</g>

								<g
									className="m-medical-devices"
									transform="matrix(1, 0, 0, 1, -9, -6)">
									<rect
										className="e-medical-devices"
										width={1920}
										height={74}
										transform="translate(9 6)"
									/>
								</g>
								<text
									className="f-medical-devices"
									transform="translate(960 54)">
									<tspan x={-125.412} y={0}>
										{t('SOLUCIONES EN SALUD')}
									</tspan>
								</text>
								<text
									className="c-medical-devices"
									transform={'translate(403 633)'
									}>
									<tspan x={-259.27} y={0}>
										{t('EQUIPOS M\xC9DICOS ')}
									</tspan>
								</text>
								<text
									className="d-medical-devices"
									transform={'translate(968 578)'}>
									<tspan x={0} y={23}>
										{t(
											'Ofrecemos a los especialistas equipos de la m\xE1s alta tecnolog\xEDa '
										)}
									</tspan>
									<tspan x={0} y={51}>
										{t(
											'para el servicio y asistencia de los pacientes.'
										)}
									</tspan>
								</text>
								<g
									onClick={() => setShowModal(true)}
									className="g-medical-devices"
									transform='translate(810 680.975)'>
									<defs>
										<style>
											{
												'.a-cococ{fill:rgba(255,255,255,0.5);}.b-cococ{fill:#fff;font-size:28px;font-family:Kiona-Bold, Kiona;font-weight:700;}.c{filter:url(#a-cococ);}'
											}
										</style>
										<filter
											id="a-cococ"
											x={0}
											y={0}
											width={299.362}
											height={72.775}
											filterUnits="userSpaceOnUse">
											<feOffset dy={3} />
											<feGaussianBlur
												stdDeviation={3}
												result="b-cococ"
											/>
											<feFlood floodOpacity={0.4} />
											<feComposite
												operator="in"
												in2="b-cococ"
											/>
											<feComposite in="SourceGraphic" />
										</filter>
									</defs>
									<g
										onMouseLeave={() => setOpenShow(false)}
										onMouseOver={() => setOpenShow(true)}>
										<g
											className="c-cococ cursor-pointer"
											transform="matrix(1, 0, 0, 1, 0, 0)">
											<path
												className="a-cococ cursor-pointer"
												d="M281.362,0H57.711C34.449,0,13.561,15.983,5.067,40.281L0,54.775H221.8c24.783,0,46.972-17.232,55.7-43.257Z"
												transform="translate(9 6)"
											/>
										</g>
										<text
											className="b-cococ cursor-pointer"
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
										className="i-medical-devices"
										d="M45.263,0V19.012L61.725,9.505l-7.863-4.54Z"
										transform="translate(201.725 50.773) rotate(180)"
									/>
									<text
										className="j-medical-devices"
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
				<MedicalDevicesMOMobile />
			)}
		</React.Fragment>
	)
}

export default MedicalDevices
