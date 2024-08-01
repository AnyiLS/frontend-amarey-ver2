import React from 'react'
import { Carousel } from 'flowbite-react'
import { useTranslation } from 'react-i18next'
import { useLanguage } from 'context/language'

export const CarouselMovil: React.FC = () => {
	/** Contexts */
	const { selectedLanguage } = useLanguage()
	/** States */
	const [height, setHeight] = React.useState<number>(0)
	const [selectedImage, setSelectedImage] = React.useState<string>('')
	const [step, setStep] = React.useState<number>(0)
	const [showPopup, setShowPopup] = React.useState<boolean>(false)
	const [mute] = React.useState(true)

	const { t } = useTranslation()

	React.useEffect(() => {
		if (document.getElementById('navbar__container')) {
			const navbar: HTMLElement = document.getElementById(
				'navbar__container'
			) as HTMLElement
			setHeight(navbar.clientHeight)
		}
	}, [])

	const [w, setW] = React.useState(window.outerWidth)
	const [to, setTo] = React.useState(0)

	React.useEffect(() => {
		const d = document.body.clientWidth
		console.log('d', d)
		console.log('w', w)

		console.log('total: ', (w * 100) / d)

		window.addEventListener('resize', () => setTo((w * 100) / d))

		return () => {
			window.removeEventListener('resize', () => setTo((w * 100) / d))
		}
	}, [])

	return (
		<React.Fragment>
			{selectedImage === '' ? (
				<Carousel
					style={{
						height: (window.innerWidth * 650.609) / 385.737,
						overflow: 'hidden',
						marginTop: 20,
					}}
					slide={false}
					slideInterval={20000}>
					<svg viewBox="0 0 375.737 650.609">
						<defs>
							<style>
								{
									'.a-mapa-servicios-desktop-1,.f-mapa-servicios-desktop-1{fill:#001f5f;}.b-mapa-servicios-desktop-1,.t-mapa-servicios-desktop-1{fill:#fff;}.c-mapa-servicios-desktop-1{clip-path:url(#a-mapa-servicios-desktop-1);}.d-mapa-servicios-desktop-1{fill:#e7002a;}.e-mapa-servicios-desktop-1{fill:url(#b-mapa-servicios-desktop-1);}.f-mapa-servicios-desktop-1{font-size:16px;font-family:Silka-Bold, Silka;}.f-mapa-servicios-desktop-1,.t-mapa-servicios-desktop-1{font-weight:700;}.g-mapa-servicios-desktop-1{font-size:22px;}.h-mapa-servicios-desktop-1{fill:#e80029;}.i-mapa-servicios-desktop-1{fill:#001f5b;}.j-mapa-servicios-desktop-1,.k-mapa-servicios-desktop-1,.l-mapa-servicios-desktop-1,.m-mapa-servicios-desktop-1,.n-mapa-servicios-desktop-1,.o-mapa-servicios-desktop-1,.p-mapa-servicios-desktop-1{stroke:#707070;stroke-miterlimit:10;stroke-width:0.54px-mapa-servicios-desktop-1;}.j-mapa-servicios-desktop-1{fill:url(#e-mapa-servicios-desktop-1);}.k-mapa-servicios-desktop-1{fill:url(#f-mapa-servicios-desktop-1);}.l-mapa-servicios-desktop-1{fill:url(#g-mapa-servicios-desktop-1);}.m-mapa-servicios-desktop-1{fill:url(#h-mapa-servicios-desktop-1);}.n-mapa-servicios-desktop-1{fill:url(#i-mapa-servicios-desktop-1);}.o-mapa-servicios-desktop-1{fill:url(#j-mapa-servicios-desktop-1);}.p-mapa-servicios-desktop-1{fill:url(#k-mapa-servicios-desktop-1);}.q-mapa-servicios-desktop-1{mix-blend-mode:multiply;isolation:isolate;}.r-mapa-servicios-desktop-1{fill:#d6d6d6;}.s-mapa-servicios-desktop-1{fill:#eeebeb;}.t-mapa-servicios-desktop-1{font-size:21px;font-family:Kiona-Bold, Kiona;}.u-mapa-servicios-desktop-1{filter:url(#c-mapa-servicios-desktop-1);}'
								}
							</style>
							<clipPath id="a-mapa-servicios-desktop-1">
								<rect
									className="a-mapa-servicios-desktop-1"
									width={122.857}
								/>
							</clipPath>
							<pattern
								id="b-mapa-servicios-desktop-1"
								width={1}
								height={1}
								viewBox="287.618 0 374.786 566.786">
								<image
									preserveAspectRatio="xMidYMid slice"
									width={850.178}
									height={566.786}
									xlinkHref="/images/movil.webp"
								/>
							</pattern>
							<filter
								id="c-mapa-servicios-desktop-1"
								x={0}
								y={410.262}
								width={410.737}
								height={268.348}
								filterUnits="userSpaceOnUse">
								<feOffset dx={-3} dy={-3} />
								<feGaussianBlur stdDeviation={6} result="d" />
								<feFlood floodOpacity={0.251} />
								<feComposite operator="in" in2="d" />
								<feComposite in="SourceGraphic" />
							</filter>
							<linearGradient
								id="e-mapa-servicios-desktop-1"
								y1={0.5}
								x2={1}
								y2={0.5}
								gradientUnits="objectBoundingBox">
								<stop offset={0} stopColor="#dfb663" />
								<stop offset={0.85} stopColor="#b2722c" />
							</linearGradient>
							<linearGradient
								id="f-mapa-servicios-desktop-1"
								x1={0}
								y1={0.5}
								x2={1}
								y2={0.5}
								xlinkHref="#e-mapa-servicios-desktop-1"
							/>
							<linearGradient
								id="g-mapa-servicios-desktop-1"
								x1={-0.001}
								y1={0.5}
								x2={0.999}
								y2={0.5}
								xlinkHref="#e-mapa-servicios-desktop-1"
							/>
							<linearGradient
								id="h-mapa-servicios-desktop-1"
								x1={0}
								y1={0.5}
								x2={1}
								y2={0.5}
								xlinkHref="#e-mapa-servicios-desktop-1"
							/>
							<linearGradient
								id="i-mapa-servicios-desktop-1"
								x1={0}
								y1={0.5}
								x2={0.999}
								y2={0.5}
								xlinkHref="#e-mapa-servicios-desktop-1"
							/>
							<linearGradient
								id="j-mapa-servicios-desktop-1"
								x1={0}
								y1={0.5}
								x2={1}
								y2={0.5}
								xlinkHref="#e-mapa-servicios-desktop-1"
							/>
							<linearGradient
								id="k-mapa-servicios-desktop-1"
								x1={0}
								y1={0.5}
								x2={1}
								y2={0.5}
								xlinkHref="#e-mapa-servicios-desktop-1"
							/>
						</defs>
						<g>
							<rect
								className="b-mapa-servicios-desktop-1"
								width={371}
								height={642.004}
								transform="translate(2 21.605)"
							/>
							<g
								className="c-mapa-servicios-desktop-1"
								transform="translate(2)">
								<path
									className="a-mapa-servicios-desktop-1"
									d="M80.77,0h0"
								/>
							</g>
							<path
								className="a-mapa-servicios-desktop-1"
								d="M199.116,54.823c-56.093,0-127.748,15.821-149.181,95.189L.03,317.789,0,663.61H377V54.823Z"
								transform="translate(0 0)"
							/>
							<path
								className="d-mapa-servicios-desktop-1"
								d="M258.421,0c-30.635,0-60.255,15.153-85.657,43.819-25.3,28.551-44.813,68.705-56.428,116.118L1.164,620.385H2.617v3l115.809-462.99c11.541-47.113,30.9-86.979,55.988-115.289C199.4,16.911,228.445,2.009,258.421,2.009H377V0Z"
								transform="translate(0 40.228)"
							/>
							<g transform="translate(2 134.249)">
								<path
									className="e-mapa-servicios-desktop-1"
									d="M224.672,96.824H377V663.61H2.214l112.773-444.7C133.34,145.018,176.638,96.824,224.672,96.824"
									transform="translate(-2 -134.25)"
								/>
								<g
									className="u-mapa-servicios-desktop-1"
									transform="matrix(1, 0, 0, 1, -21, -134.25)">
									<path
										className="b-mapa-servicios-desktop-1"
										d="M0,232.348l36.515-182.3C40.912,31.734,48.3,0,89.175,0H374.737V232.348Z"
										transform="translate(21 431.26)"
									/>
								</g>
								<g transform="translate(74.745 352.406)">
									<text
										className="f-mapa-servicios-desktop-1"
										transform="translate(-20.286 79.56)">
										<tspan
											x={
												selectedLanguage === 'es'
													? 20
													: 25
											}
											y={15}
											xmlSpace="preserve">
											{t('Un compromiso inquebrantable')}
										</tspan>
										<tspan
											className="g-mapa-servicios-desktop-1"
											x={
												selectedLanguage === 'es'
													? 30
													: 40
											}
											y={37}>
											{t('con la salud y la vida')}
										</tspan>
									</text>
									<g transform="translate(7.326)">
										<g transform="translate(-18)">
											<g transform="translate(0 0)">
												<path
													className="h-mapa-servicios-desktop-1"
													d="M104.244,392.763l7.546,10.352a.281.281,0,0,1,.054.165l.013,8.082a.283.283,0,0,1-.281.282h-1.128a.28.28,0,0,1-.282-.28l0-2.866-4.077.006,0,2.866a.283.283,0,0,1-.281.282h-1.128a.28.28,0,0,1-.282-.28l-.012-7.426a.283.283,0,0,1,.281-.282h1.128a.28.28,0,0,1,.282.28l0,2.867,4.077-.006,0-3.066-6.854-9.4-5.859.009-6.824,9.424,0,3.066,4.077-.006,0-2.866a.283.283,0,0,1,.281-.282H96.1a.28.28,0,0,1,.282.28l.012,7.426a.283.283,0,0,1-.281.282H94.989a.28.28,0,0,1-.282-.28l0-2.866-4.077.006,0,2.866a.283.283,0,0,1-.281.282H89.22a.28.28,0,0,1-.282-.28l-.013-8.082a.281.281,0,0,1,.054-.165l7.513-10.377a.283.283,0,0,1,.227-.116l7.294-.012a.286.286,0,0,1,.229.116Zm-11.716-8.484-12.19-3.94a.275.275,0,0,0-.174,0l-7.684,2.51a.282.282,0,0,0-.181.355l.351,1.072a.282.282,0,0,0,.355.181l2.726-.891L77,387.442l-2.726.891a.282.282,0,0,0-.181.355l.351,1.072a.282.282,0,0,0,.355.181l7.058-2.306a.282.282,0,0,0,.181-.355l-.351-1.072a.282.282,0,0,0-.355-.181l-2.726.891-1.266-3.876,2.914-.952,11.07,3.578,1.819,5.569-6.824,9.424-2.914.952-1.266-3.876,2.725-.891a.282.282,0,0,0,.181-.355l-.351-1.072a.282.282,0,0,0-.355-.181l-7.058,2.306a.282.282,0,0,0-.181.355l.351,1.072a.282.282,0,0,0,.355.181l2.726-.891,1.266,3.876-2.725.891a.282.282,0,0,0-.181.355l.351,1.072a.282.282,0,0,0,.355.181l7.683-2.51a.286.286,0,0,0,.14-.1l7.513-10.375a.277.277,0,0,0,.039-.253L92.7,384.459a.282.282,0,0,0-.181-.181Zm15.055-1.853,12.179-3.977a.286.286,0,0,0,.141-.1l4.741-6.547a.282.282,0,0,0-.062-.394l-.913-.662a.282.282,0,0,0-.394.062l-1.682,2.323-3.3-2.391,1.682-2.322a.282.282,0,0,0-.062-.394L119,367.36a.282.282,0,0,0-.394.062l-4.355,6.014a.282.282,0,0,0,.062.394l.914.662a.282.282,0,0,0,.394-.062l1.682-2.322,3.3,2.391-1.8,2.484-11.06,3.612L103,377.16l-.019-11.635,1.8-2.483,3.3,2.391-1.682,2.322a.282.282,0,0,0,.062.394l.914.662a.282.282,0,0,0,.394-.062l4.355-6.015a.282.282,0,0,0-.062-.394l-.914-.662a.282.282,0,0,0-.394.062l-1.682,2.322-3.3-2.391,1.682-2.322a.282.282,0,0,0-.062-.394l-.914-.662a.282.282,0,0,0-.394.062l-4.741,6.547a.281.281,0,0,0-.054.165l.02,12.81a.281.281,0,0,0,.116.227l5.908,4.279a.277.277,0,0,0,.253.039Zm20.475,1.763.346-1.073a.282.282,0,0,0-.181-.355l-7.691-2.486a.275.275,0,0,0-.174,0l-12.179,3.977a.282.282,0,0,0-.181.181l-2.244,6.941a.284.284,0,0,0,.041.253l7.546,10.352a.286.286,0,0,0,.14.1l7.691,2.486a.282.282,0,0,0,.355-.181l.346-1.073a.282.282,0,0,0-.181-.355l-2.727-.882,1.253-3.88,2.729.882a.282.282,0,0,0,.355-.181l.346-1.073a.282.282,0,0,0-.181-.355l-7.066-2.284a.282.282,0,0,0-.355.181l-.346,1.073a.282.282,0,0,0,.181.355l2.727.882-1.254,3.88-2.919-.943-6.854-9.4,1.8-5.575,11.059-3.612,2.917.943-1.254,3.88-2.729-.882a.282.282,0,0,0-.355.181l-.346,1.073a.282.282,0,0,0,.181.355l7.066,2.284a.282.282,0,0,0,.355-.181l.346-1.073a.282.282,0,0,0-.181-.355l-2.729-.882,1.254-3.88,2.729.882a.282.282,0,0,0,.355-.181ZM93.393,382.4l5.889-4.3a.284.284,0,0,0,.116-.229l-.038-12.81a.273.273,0,0,0-.055-.165l-4.77-6.525a.281.281,0,0,0-.394-.061l-.911.666a.281.281,0,0,0-.061.394l1.692,2.315-3.292,2.406-1.692-2.315a.281.281,0,0,0-.394-.061l-.911.666a.281.281,0,0,0-.061.394l4.383,6a.281.281,0,0,0,.394.061l.911-.666a.281.281,0,0,0,.061-.394l-1.692-2.315,3.292-2.406,1.809,2.475.035,11.634-4.729,3.457L81.9,377.048l-1.809-2.475,3.292-2.407,1.692,2.315a.281.281,0,0,0,.394.061l.911-.666a.281.281,0,0,0,.061-.394l-4.383-6a.281.281,0,0,0-.394-.061l-.91.666a.281.281,0,0,0-.061.394l1.692,2.315-3.292,2.407L77.4,370.892a.281.281,0,0,0-.394-.061l-.91.666a.281.281,0,0,0-.061.394l4.77,6.525a.273.273,0,0,0,.142.1l12.2,3.922a.28.28,0,0,0,.252-.041Z"
													transform="translate(-72.285 -358.239)"
												/>
												<g transform="translate(59.39 21.66)">
													<path
														className="i-mapa-servicios-desktop-1"
														d="M670.363,550.17l3.363.012a.443.443,0,0,1,.44.443l0,1.369a5.754,5.754,0,0,1,5.019-2.244,5.93,5.93,0,0,1,5.662,3.013,7.011,7.011,0,0,1,6.17-2.971c3.027.012,5.459,1.2,6.67,3.26a11.038,11.038,0,0,1,1.128,5.364l-.039,10.694a.443.443,0,0,1-.443.44l-3.746-.013a.443.443,0,0,1-.44-.443l.036-10.138c.007-1.983-.267-3.063-.926-3.8a3.414,3.414,0,0,0-2.675-1.124,3.51,3.51,0,0,0-3.313,1.937,9.116,9.116,0,0,0-.607,4.034l-.033,9.059a.443.443,0,0,1-.443.44l-3.746-.013a.443.443,0,0,1-.44-.443l.036-10.138c.007-1.879-.268-3.029-.856-3.762a3.716,3.716,0,0,0-2.849-1.159,3.323,3.323,0,0,0-3.349,2.076,11.431,11.431,0,0,0-.466,3.9l-.033,9.059a.443.443,0,0,1-.443.44l-3.746-.013a.443.443,0,0,1-.44-.443l.067-18.4a.443.443,0,0,1,.443-.44Z"
														transform="translate(-642.686 -543.67)"
													/>
													<path
														className="i-mapa-servicios-desktop-1"
														d="M908.842,570.318l-3.363-.012a.443.443,0,0,1-.44-.443l.007-2.064a7.664,7.664,0,0,1-6.414,2.935c-5.637-.02-9.693-4.245-9.673-10.058.022-5.881,4.143-10.146,9.851-10.126a7.164,7.164,0,0,1,6.288,3.05l.007-2.134a.443.443,0,0,1,.443-.44l3.363.012a.443.443,0,0,1,.44.443l-.067,18.4A.443.443,0,0,1,908.842,570.318ZM893.623,560.8a5.656,5.656,0,1,0,11.311-.064,5.583,5.583,0,0,0-5.72-5.937c-3.236-.012-5.576,2.52-5.59,6Z"
														transform="translate(-830.058 -544.355)"
													/>
													<path
														className="i-mapa-servicios-desktop-1"
														d="M1055.75,551.552l3.363.012a.443.443,0,0,1,.44.443l-.006,1.438c1.224-1.8,2.2-2.323,4.185-2.316h.348l-.016,4.455c-2.784.059-4.147,1.551-4.157,4.544l-.038,10.277a.443.443,0,0,1-.443.44l-3.746-.013a.443.443,0,0,1-.44-.443l.067-18.4A.443.443,0,0,1,1055.75,551.552Z"
														transform="translate(-972.254 -544.851)"
													/>
													<path
														className="i-mapa-servicios-desktop-1"
														d="M1128.221,563.558c.549,2.333,2.561,3.8,5.31,3.812a4.864,4.864,0,0,0,4.119-1.747.446.446,0,0,1,.332-.151l4.211.016a.44.44,0,0,1,.407.608,8.769,8.769,0,0,1-1.312,2.068,9.456,9.456,0,0,1-7.668,3.452,10.1,10.1,0,0,1-10.4-10.23,10.247,10.247,0,0,1,11.191-9.906c5.224.494,8.94,4.723,8.92,10.358a7.493,7.493,0,0,1-.181,1.774l-14.929-.054Zm10.559-4.032c-.582-2.472-2.457-3.837-5.31-3.847a5.1,5.1,0,0,0-5.374,3.808Z"
														transform="translate(-1030.384 -545.112)"
													/>
													<path
														className="i-mapa-servicios-desktop-1"
														d="M1271.54,572.3l-6.758-16.887a.441.441,0,0,1,.411-.605l4.319.016a.443.443,0,0,1,.417.3l4.134,12.21,4.6-12.189a.44.44,0,0,1,.414-.285l4.345.016a.441.441,0,0,1,.4.618l-10.843,24.795a.444.444,0,0,1-.406.265l-4.011-.014a.44.44,0,0,1-.4-.62l3.375-7.616Z"
														transform="translate(-1151.418 -547.998)"
													/>
													<path
														className="i-mapa-servicios-desktop-1"
														d="M496.656,507.793l-3.759-.013-4.777,11.344a.442.442,0,0,0,.406.613l4.041.014a.443.443,0,0,0,.417-.293l1.769-4.955,2.72,7.806-5.5-.02-2.134-.007a4.564,4.564,0,0,0-4.225,2.794l-3.272,7.772a.442.442,0,0,0,.406.613l4.3.016a.445.445,0,0,0,.407-.265l2.762-6.369,9.153.033,2.613,6.383a.441.441,0,0,0,.407.274l4.3.016a.442.442,0,0,0,.41-.611L496.659,507.8Z"
														transform="translate(-482.309 -507.78)"
													/>
												</g>
											</g>
											<g transform="translate(91.011 8.009)">
												<path
													className="i-mapa-servicios-desktop-1"
													d="M712.39,427.355l-4.932-.017a6.673,6.673,0,0,1-3.439-.936,6.879,6.879,0,0,1-2.488-2.517,6.953,6.953,0,0,1,.025-6.925,6.946,6.946,0,0,1,2.506-2.509,6.746,6.746,0,0,1,6.181-.323,6.89,6.89,0,0,1,2.271,1.645l-.7.647a5.929,5.929,0,0,0-4.315-1.9,5.753,5.753,0,0,0-2.962.786,5.967,5.967,0,0,0-2.17,2.144,5.946,5.946,0,0,0-.022,5.949,6.011,6.011,0,0,0,2.154,2.18,5.7,5.7,0,0,0,2.956.818l3.946.014.017-4.89-4.49-.016,0-.944,5.477.02-.025,6.779Z"
													transform="translate(-700.62 -413.53)"
												/>
												<path
													className="i-mapa-servicios-desktop-1"
													d="M817.749,428.579l-5.64-6.9,1.679.006a6.673,6.673,0,0,0,2.52-.39,3.336,3.336,0,0,0,1.241-1.014,2.4,2.4,0,0,0,.53-1.5,2.472,2.472,0,0,0-.436-1.4,3.255,3.255,0,0,0-1.256-1.085,4.077,4.077,0,0,0-1.887-.426l-3.82-.015-.046,12.7-.944,0,.049-13.64,4.764.017a5.25,5.25,0,0,1,1.8.311,4.434,4.434,0,0,1,1.466.876,3.876,3.876,0,0,1,.93,1.241,3.375,3.375,0,0,1-.38,3.492,3.99,3.99,0,0,1-1.641,1.305,4.294,4.294,0,0,1-1.27.362,10.832,10.832,0,0,1-1.312.068l4.91,6-1.259,0Z"
													transform="translate(-793.892 -414.71)"
												/>
												<path
													className="i-mapa-servicios-desktop-1"
													d="M904.673,429.037a4.993,4.993,0,0,1-1.981-.417,5.165,5.165,0,0,1-1.685-1.17,4.809,4.809,0,0,1-1.117-1.683,5.4,5.4,0,0,1-.381-2.037l.03-8.5.944,0-.03,8.5a4.427,4.427,0,0,0,.319,1.68,4.141,4.141,0,0,0,.908,1.389,4.282,4.282,0,0,0,1.382.939,4.158,4.158,0,0,0,1.615.332,4.217,4.217,0,0,0,1.638-.319,4.291,4.291,0,0,0,1.389-.928,4.15,4.15,0,0,0,.918-1.382,4.419,4.419,0,0,0,.332-1.677l.03-8.5.944,0-.032,8.5a5.411,5.411,0,0,1-.4,2.034,4.83,4.83,0,0,1-1.128,1.674,5.233,5.233,0,0,1-1.683,1.159,5,5,0,0,1-2.016.4Z"
													transform="translate(-870.701 -414.984)"
												/>
												<path
													className="i-mapa-servicios-desktop-1"
													d="M997.741,429.24l.029-13.64,4.868.017a4.763,4.763,0,0,1,2.212.533,4.27,4.27,0,0,1,1.611,1.412,3.4,3.4,0,0,1-.015,3.85,4.246,4.246,0,0,1-1.621,1.411,4.759,4.759,0,0,1-2.216.517l-3.9-.015-.022,5.918-.944,0Zm.969-6.9,3.9.014a3.9,3.9,0,0,0,1.742-.382,3.291,3.291,0,0,0,1.273-1.044,2.433,2.433,0,0,0,.478-1.435,2.458,2.458,0,0,0-.466-1.46,3.29,3.29,0,0,0-1.266-1.053,3.933,3.933,0,0,0-1.74-.4l-3.924-.014v5.771Z"
													transform="translate(-954.704 -415.3)"
												/>
												<path
													className="i-mapa-servicios-desktop-1"
													d="M1084.918,428.974a6.734,6.734,0,0,1-3.459-.946,7,7,0,0,1,.043-12.067,6.888,6.888,0,0,1,6.925.025,7,7,0,0,1-.043,12.067A6.738,6.738,0,0,1,1084.918,428.974Zm.046-12.968a5.743,5.743,0,0,0-2.982.8,6.078,6.078,0,0,0-2.18,2.174,6.019,6.019,0,0,0-.022,6.023,6.055,6.055,0,0,0,2.164,2.19,5.9,5.9,0,0,0,5.959.022,5.994,5.994,0,0,0,2.17-2.174,6.085,6.085,0,0,0,.022-6.023,5.983,5.983,0,0,0-2.154-2.19,5.737,5.737,0,0,0-2.977-.818Z"
													transform="translate(-1023.373 -414.821)"
												/>
											</g>
										</g>
										<g transform="translate(166.156 28.601)">
											<path
												className="j-mapa-servicios-desktop-1"
												d="M1436.354,633.38l-.02,5.459-6.542-.023.02-5.459-15.691-.056.019-5.313,16.817-25.517,5.508.02-.091,25.036,3.837.015-.022,5.853-3.837-.015Zm-6.47-19.9-9.1,13.986,9.05.033.051-14.018Z"
												transform="translate(-1414.12 -595.696)"
											/>
											<g transform="translate(34.477 15.727)">
												<path
													className="k-mapa-servicios-desktop-1"
													d="M1654.819,674.116l-.364-.888-1.221,0-.384.885-.7,0,1.443-3.426h.5l1.427,3.437-.7,0Zm-.979-2.539-.371,1.039.733,0-.364-1.041Z"
													transform="translate(-1652.15 -669.753)"
												/>
												<path
													className="l-mapa-servicios-desktop-1"
													d="M1686.31,668.657l-1.425-2.5-.009,2.493-.636,0,.013-3.431.724,0,1.412,2.5.009-2.5.636,0-.013,3.431-.71,0Zm-.335-3.747c-.111,0-.436-.117-.524-.117-.116,0-.149.013-.326.115l-.249-.372a.6.6,0,0,1,.479-.216c.111,0,.371.117.5.117a.391.391,0,0,0,.311-.156l.249.377a.542.542,0,0,1-.437.253Z"
													transform="translate(-1679.592 -664.28)"
												/>
												<path
													className="m-mapa-servicios-desktop-1"
													d="M1714.989,674.042a1.776,1.776,0,1,1,1.776-1.771A1.748,1.748,0,0,1,1714.989,674.042Zm.006-2.937a1.163,1.163,0,0,0-.009,2.326,1.116,1.116,0,0,0,1.137-1.151A1.138,1.138,0,0,0,1714.995,671.1Z"
													transform="translate(-1704.349 -669.591)"
												/>
												<path
													className="n-mapa-servicios-desktop-1"
													d="M1747.114,674.152a1.083,1.083,0,0,1-1.124-1.044l.663,0a.417.417,0,0,0,.462.429.424.424,0,0,0,.466-.416.439.439,0,0,0-.156-.349,2,2,0,0,0-.594-.267.981.981,0,1,1,1.3-.928l-.659,0a.347.347,0,0,0-.361-.364.331.331,0,0,0-.354.346.36.36,0,0,0,.19.311,2.214,2.214,0,0,0,.38.155c.7.262.885.565.884,1.03a1.083,1.083,0,0,1-1.1,1.1Z"
													transform="translate(-1732.398 -669.685)"
												/>
											</g>
											<path
												className="o-mapa-servicios-desktop-1"
												d="M1601.168,555.7a17.748,17.748,0,1,0,17.748,17.748A17.748,17.748,0,0,0,1601.168,555.7Zm.129,27.521a9.645,9.645,0,1,1,9.645-9.645A9.645,9.645,0,0,1,1601.3,583.22Z"
												transform="translate(-1558.898 -555.7)"
											/>
										</g>
										<path
											className="p-mapa-servicios-desktop-1"
											d="M1786.544,562.367a8.706,8.706,0,0,1-.975-3.352c-.035-.868-.055-1.808-.069-2.675a7.087,7.087,0,0,0-2.276-5.7,10.228,10.228,0,0,0-2.076-1.318,53.186,53.186,0,0,1-4.579-2.869l.054-.117c1.634.718,3.269,1.433,4.9,2.164a7.494,7.494,0,0,1,5.128,5.817,14.257,14.257,0,0,1,.117,2.693c-.014,1.784-.017,3.569-.091,5.353h-.129Z"
											transform="translate(-1557.915 -519.095)"
										/>
									</g>
								</g>
							</g>
							<path
								className="b-mapa-servicios-desktop-1"
								d="M0,0V15.318l13.275-7.66L6.934,4Z"
								transform="translate(68.643 240.95) rotate(-76)"
								onClick={() => setSelectedImage('d')}
							/>
							<text
								className="t-mapa-servicios-desktop-1"
								transform="translate(48.21 384.607) rotate(-76)"
								onClick={() => setSelectedImage('d')}>
								<tspan x={0} y={0}>
									{t('Conoce Más')}
								</tspan>
							</text>
						</g>
					</svg>
					<svg viewBox="0 0 375.737 650.609">
						<defs>
							<style>
								{
									'.a-mapa-servicios-desktop-2,.h-mapa-servicios-desktop-2,.i-mapa-servicios-desktop-2{fill:#001f5f;}.b-mapa-servicios-desktop-2,.g-mapa-servicios-desktop-2,.n-mapa-servicios-desktop-2{fill:#fff;}.c-mapa-servicios-desktop-2{clip-path:url(#a-mapa-servicios-desktop-2);}.d-mapa-servicios-desktop-2{fill:#e7002a;}.e-mapa-servicios-desktop-2{fill:url(#b-mapa-servicios-desktop-2);}.f-mapa-servicios-desktop-2{fill:#e40032;}.g-mapa-servicios-desktop-2{font-size:18px;}.g-mapa-servicios-desktop-2,.i-mapa-servicios-desktop-2,.n-mapa-servicios-desktop-2{font-family:Kiona-Bold, Kiona;font-weight:700;}.h-mapa-servicios-desktop-2{font-size:16px;font-family:Silka-Regular, Silka;}.i-mapa-servicios-desktop-2{font-size:32px;}.j-mapa-servicios-desktop-2{mix-blend-mode:multiply;isolation:isolate;}.k-mapa-servicios-desktop-2{fill:#e2e0e1;}.l-mapa-servicios-desktop-2{fill:#cccdcf;}.m-mapa-servicios-desktop-2{fill:#eeebeb;}.n-mapa-servicios-desktop-2{font-size:21px;}.o-mapa-servicios-desktop-2{filter:url(#e-mapa-servicios-desktop-2);}.p-mapa-servicios-desktop-2{filter:url(#c-mapa-servicios-desktop-2);}'
								}
							</style>
							<clipPath id="a-mapa-servicios-desktop-2">
								<rect
									className="a-mapa-servicios-desktop-2"
									width={122.857}
								/>
							</clipPath>
							<pattern
								id="b-mapa-servicios-desktop-2"
								width={1}
								height={1}
								viewBox="65.695 0 429.414 649.399">
								<image
									preserveAspectRatio="xMidYMid slice"
									width={850.178}
									height={566.786}
									xlinkHref="/images/product1.webp"
								/>
							</pattern>
							<filter
								id="c-mapa-servicios-desktop-2"
								x={0}
								y={410.262}
								width={410.737}
								height={268.348}
								filterUnits="userSpaceOnUse">
								<feOffset dx={-3} dy={-3} />
								<feGaussianBlur stdDeviation={6} result="d" />
								<feFlood floodOpacity={0.251} />
								<feComposite operator="in" in2="d" />
								<feComposite in="SourceGraphic" />
							</filter>
							<filter
								id="e-mapa-servicios-desktop-2"
								x={84.571}
								y={559.035}
								width={259.857}
								height={61.168}
								filterUnits="userSpaceOnUse">
								<feOffset dy={3} />
								<feGaussianBlur stdDeviation={3} result="f" />
								<feFlood floodOpacity={0.4} />
								<feComposite operator="in" in2="f" />
								<feComposite in="SourceGraphic" />
							</filter>
						</defs>
						<g>
							<rect
								className="b-mapa-servicios-desktop-2"
								width={371}
								height={642.004}
								transform="translate(2 21.605)"
							/>
							<g
								className="c-mapa-servicios-desktop-2"
								transform="translate(2)">
								<path
									className="a-mapa-servicios-desktop-2"
									d="M80.77,0h0"
								/>
							</g>
							<path
								className="a-mapa-servicios-desktop-2"
								d="M199.116,54.823c-56.093,0-127.748,15.821-149.181,95.189L.03,317.789,0,663.61H377V54.823Z"
								transform="translate(0 0)"
							/>
							<path
								className="d-mapa-servicios-desktop-2"
								d="M258.421,0c-30.635,0-60.255,15.153-85.657,43.819-25.3,28.551-44.813,68.705-56.428,116.118L1.164,620.385H2.617v3l115.809-462.99c11.541-47.113,30.9-86.979,55.988-115.289C199.4,16.911,228.445,2.009,258.421,2.009H377V0Z"
								transform="translate(0 40.228)"
							/>
							<g transform="translate(2 134.249)">
								<path
									className="e-mapa-servicios-desktop-2"
									d="M224.672,96.824H377V663.61H2.214l112.773-444.7C133.34,145.018,176.638,96.824,224.672,96.824"
									transform="translate(-2 -134.25)"
								/>
								<g
									className="p-mapa-servicios-desktop-2"
									transform="matrix(1, 0, 0, 1, -21, -134.25)">
									<path
										className="b-mapa-servicios-desktop-2"
										d="M0,232.348l36.515-182.3C40.912,31.734,48.3,0,89.175,0H374.737V232.348Z"
										transform="translate(21 431.26)"
									/>
								</g>
								<a href="/productos/cirugia-robotica">
									<g transform="translate(72.571 430.786)">
										<g
											className="o-mapa-servicios-desktop-2"
											transform="matrix(1, 0, 0, 1, -93.57, -565.03)">
											<path
												className="f-mapa-servicios-desktop-2"
												d="M241.857,0H49.608c-20,0-37.951,12.6-45.253,31.746L0,43.169H190.654c21.3,0,40.377-13.581,47.881-34.092Z"
												transform="translate(93.57 565.03)"
											/>
										</g>
										<text
											className="g-mapa-servicios-desktop-2"
											transform="translate(61.428 28.584)">
											<tspan x={0} y={0}>
												{t('Conoce Más')}
											</tspan>
										</text>
									</g>
								</a>
								<text
									className="h-mapa-servicios-desktop-2"
									transform="translate(45.071 379.786)">
									<tspan
										x={
											selectedLanguage === 'es'
												? 7.554
												: 35
										}
										y={15}>
										{t(
											'Llevando la precisión quirúrgica más allá '
										)}
									</tspan>
									<tspan
										x={
											selectedLanguage === 'es'
												? 7.554
												: 75
										}
										y={33}>
										{t('de los límites de nuestras manos')}
									</tspan>
								</text>
								<text
									className="i-mapa-servicios-desktop-2"
									transform="translate(51.072 333.786)">
									<tspan x={30} y={32}>
										{t('Robot davinci')}
									</tspan>
								</text>
							</g>
							<path
								className="b-mapa-servicios-desktop-2"
								d="M0,0V15.318l13.275-7.66L6.934,4Z"
								transform="translate(68.643 240.95) rotate(-76)"
								onClick={() => setSelectedImage('d')}
							/>
							<text
								className="n-mapa-servicios-desktop-2"
								transform="translate(48.21 384.607) rotate(-76)"
								onClick={() => setSelectedImage('d')}>
								<tspan x={0} y={0}>
									{t('Conoce Más')}
								</tspan>
							</text>
						</g>
					</svg>
					<svg viewBox="0 0 375.737 650.609">
						<defs>
							<style>
								{
									'.a-mapa-servicios-desktop-3,.f-mapa-servicios-desktop-3,.g-mapa-servicios-desktop-3{fill:#001f5f;}.b-mapa-servicios-desktop-3,.i-mapa-servicios-desktop-3,.n-mapa-servicios-desktop-3{fill:#fff;}.c-mapa-servicios-desktop-3{clip-path:url(#a-mapa-servicios-desktop-3);}.d-mapa-servicios-desktop-3{fill:#e7002a;}.e-mapa-servicios-desktop-3{fill:url(#b-mapa-servicios-desktop-3);}.f-mapa-servicios-desktop-3{font-size:22px;font-family:Silka-Bold, Silka;}.f-mapa-servicios-desktop-3,.i-mapa-servicios-desktop-3,.n-mapa-servicios-desktop-3{font-weight:700;}.g-mapa-servicios-desktop-3{font-size:16px;font-family:Silka-Regular, Silka;}.h-mapa-servicios-desktop-3{fill:#e40032;}.i-mapa-servicios-desktop-3{font-size:18px;}.i-mapa-servicios-desktop-3,.n-mapa-servicios-desktop-3{font-family:Kiona-Bold, Kiona;}.j-mapa-servicios-desktop-3{mix-blend-mode:multiply;isolation:isolate;}.k-mapa-servicios-desktop-3{fill:#eae8ea;}.l-mapa-servicios-desktop-3{fill:#eeebeb;}.m-mapa-servicios-desktop-3{fill:#d1d2d4;}.n-mapa-servicios-desktop-3{font-size:21px;}.o-mapa-servicios-desktop-3{filter:url(#e-mapa-servicios-desktop-3);}.p-mapa-servicios-desktop-3{filter:url(#c-mapa-servicios-desktop-3);}'
								}
							</style>
							<clipPath id="a-mapa-servicios-desktop-3">
								<rect
									className="a-mapa-servicios-desktop-3"
									width={122.857}
								/>
							</clipPath>
							<pattern
								id="b-mapa-servicios-desktop-3"
								width={1}
								height={1}
								viewBox="240.894 223.972 283.667 428.987">
								<image
									preserveAspectRatio="xMidYMid slice"
									width={850.178}
									height={566.786}
									xlinkHref="/images/slider3.webp"
								/>
							</pattern>
							<filter
								id="c-mapa-servicios-desktop-3"
								x={0}
								y={410.262}
								width={410.737}
								height={268.348}
								filterUnits="userSpaceOnUse">
								<feOffset dx={-3} dy={-3} />
								<feGaussianBlur stdDeviation={6} result="d" />
								<feFlood floodOpacity={0.251} />
								<feComposite operator="in" in2="d" />
								<feComposite in="SourceGraphic" />
							</filter>
							<filter
								id="e-mapa-servicios-desktop-3"
								x={77.571}
								y={564.312}
								width={259.857}
								height={61.168}
								filterUnits="userSpaceOnUse">
								<feOffset dy={3} />
								<feGaussianBlur stdDeviation={3} result="f" />
								<feFlood floodOpacity={0.4} />
								<feComposite operator="in" in2="f" />
								<feComposite in="SourceGraphic" />
							</filter>
						</defs>
						<g>
							<rect
								className="b-mapa-servicios-desktop-3"
								width={371}
								height={642.004}
								transform="translate(2 21.605)"
							/>
							<g
								className="c-mapa-servicios-desktop-3"
								transform="translate(2)">
								<path
									className="a-mapa-servicios-desktop-3"
									d="M80.77,0h0"
								/>
							</g>
							<path
								className="a-mapa-servicios-desktop-3"
								d="M199.116,54.823c-56.093,0-127.748,15.821-149.181,95.189L.03,317.789,0,663.61H377V54.823Z"
								transform="translate(0 0)"
							/>
							<path
								className="d-mapa-servicios-desktop-3"
								d="M258.421,0c-30.635,0-60.255,15.153-85.657,43.819-25.3,28.551-44.813,68.705-56.428,116.118L1.164,620.385H2.617v3l115.809-462.99c11.541-47.113,30.9-86.979,55.988-115.289C199.4,16.911,228.445,2.009,258.421,2.009H377V0Z"
								transform="translate(0 40.228)"
							/>
							<g transform="translate(2 134.249)">
								<path
									className="e-mapa-servicios-desktop-3"
									d="M224.672,96.824H377V663.61H2.214l112.773-444.7C133.34,145.018,176.638,96.824,224.672,96.824"
									transform="translate(-2 -134.25)"
								/>
								<g
									className="p-mapa-servicios-desktop-3"
									transform="matrix(1, 0, 0, 1, -21, -134.25)">
									<path
										className="b-mapa-servicios-desktop-3"
										d="M0,232.348l36.515-182.3C40.912,31.734,48.3,0,89.175,0H374.737V232.348Z"
										transform="translate(21 431.26)"
									/>
								</g>
								<text
									className="f-mapa-servicios-desktop-3"
									transform="translate(61.745 377.063)">
									<tspan
										x={selectedLanguage === 'es' ? 65 : 60}
										y={21}>
										{t('desarrollo de ')}
									</tspan>
									<tspan
										x={selectedLanguage === 'es' ? 30 : 60}
										y={45}>
										{t('tecnología en salud')}
									</tspan>
								</text>
								<text
									className="g-mapa-servicios-desktop-3"
									transform="translate(72.56 310.063)">
									<tspan
										x={
											selectedLanguage === 'es'
												? 25
												: 40.364
										}
										y={15}>
										{t('Representamos las marcas ')}
									</tspan>
									<tspan
										x={selectedLanguage === 'es' ? 30 : 12}
										y={33}>
										{t('de mayor prestigio a nivel ')}
									</tspan>
									<tspan
										x={
											selectedLanguage === 'es'
												? 27
												: 45.924
										}
										y={51}>
										{t('mundial en investigación y')}
									</tspan>
								</text>
								<a href="/nuestros-aliados">
									<g transform="translate(65.571 436.063)">
										<g
											className="o-mapa-servicios-desktop-3"
											transform="matrix(1, 0, 0, 1, -86.57, -570.31)">
											<path
												className="h-mapa-servicios-desktop-3"
												d="M241.857,0H49.608c-20,0-37.951,12.6-45.253,31.746L0,43.169H190.654c21.3,0,40.377-13.581,47.881-34.092Z"
												transform="translate(86.57 570.31)"
											/>
										</g>
										<text
											className="i-mapa-servicios-desktop-3"
											transform="translate(61.428 28.584)">
											<tspan x={0} y={0}>
												{t('Conoce Más')}
											</tspan>
										</text>
									</g>
								</a>
							</g>
							<path
								className="b-mapa-servicios-desktop-3"
								d="M0,0V15.318l13.275-7.66L6.934,4Z"
								transform="translate(68.643 240.95) rotate(-76)"
								onClick={() => setSelectedImage('d')}
							/>
							<text
								className="n-mapa-servicios-desktop-3"
								transform="translate(48.21 384.607) rotate(-76)"
								onClick={() => setSelectedImage('d')}>
								<tspan x={0} y={0}>
									{t('Conoce Más')}
								</tspan>
							</text>
						</g>
					</svg>
				</Carousel>
			) : (
				<React.Fragment>
					{step === 0 ? (
						<svg
							viewBox="0 40 414 700.293">
							<defs>
								<style>
									{
										'.a-pentagrama,.f-pentagrama,.h-pentagrama{fill:#001f5f;}.b-pentagrama,.i-pentagrama{fill:#fff;}.c-pentagrama{clip-path:url(#a-pentagrama);}.d-pentagrama{opacity:0.65;}.e-pentagrama{fill:#e7002a;}.f-pentagrama,.i-pentagrama{font-size:16px;}.f-pentagrama{font-family:Silka-Bold, Silka;}.f-pentagrama,.h-pentagrama{font-weight:700;}.g-pentagrama{fill:#e40032;}.h-pentagrama{font-size:18px;font-family:Kiona-Bold;}.i-pentagrama{font-family:Silka-Medium, Silka;font-weight:500;}.j-pentagrama{fill:url(#f-pentagrama);}.k-pentagrama{filter:url(#d-pentagrama);}.l-pentagrama{filter:url(#b-pentagrama);}'
									}
								</style>
								<clipPath id="a-pentagrama">
									<rect
										className="a-pentagrama"
										width={163.429}
										height={74.83}
									/>
								</clipPath>
								<filter
									id="b-pentagrama"
									x={242.271}
									y={596.293}
									width={117.729}
									height={120.968}
									filterUnits="userSpaceOnUse">
									<feOffset dy={3} />
									<feGaussianBlur
										stdDeviation={3}
										result="c"
									/>
									<feFlood floodOpacity={0.502} />
									<feComposite operator="in" in2="c" />
									<feComposite in="SourceGraphic" />
								</filter>
								<filter
									id="d-pentagrama"
									x={223.381}
									y={630.921}
									width={72.113}
									height={89.34}
									filterUnits="userSpaceOnUse">
									<feOffset dy={3} />
									<feGaussianBlur
										stdDeviation={3}
										result="e"
									/>
									<feFlood floodOpacity={0.502} />
									<feComposite operator="in" in2="e" />
									<feComposite in="SourceGraphic" />
								</filter>
								<pattern
									id="f-pentagrama"
									width={1}
									height={1}
									viewBox="0 -0.061 148.114 122.757">
									<image
										preserveAspectRatio="none"
										width={148.114}
										height={122.757}
										xlinkHref="/images/mobile/ComponentTMP_0-image2.webp"
									/>
								</pattern>
							</defs>
							<g transform="translate(0.472)">
								<rect
									className="b-pentagrama"
									width={413.428}
									height={894.293}
								/>
								<g
									className="c-pentagrama"
									transform="translate(-0.572)">
									<path
										className="a-pentagrama"
										d="M107.443,74.83H0V0H163.429V19.373c0,30.628-25.066,55.457-55.986,55.457"
									/>
								</g>
							</g>
							<g
								className="d-pentagrama"
								transform="translate(0 -1052.707)">
								<g
									className="l-pentagrama"
									transform="matrix(1, 0, 0, 1, 0, 892.71)">
									<path
										className="e-pentagrama"
										d="M45.96,102.908,97.722,85.791a1.2,1.2,0,0,0,.6-.439l20.073-27.934a1.2,1.2,0,0,0-.273-1.674l-3.9-2.8a1.2,1.2,0,0,0-1.674.274l-7.122,9.91L91.335,53l7.119-9.909a1.2,1.2,0,0,0-.274-1.674l-3.895-2.8a1.2,1.2,0,0,0-1.675.275L74.168,64.552a1.2,1.2,0,0,0,.273,1.675l3.9,2.8a1.2,1.2,0,0,0,1.674-.275l7.12-9.908,14.093,10.128-7.615,10.6L46.6,95.114,26.356,80.565,26.1,31.053l7.614-10.6L47.805,30.584l-7.12,9.907a1.2,1.2,0,0,0,.273,1.675l3.9,2.8a1.2,1.2,0,0,0,1.674-.275L64.972,19.03a1.2,1.2,0,0,0-.274-1.675l-3.9-2.8a1.2,1.2,0,0,0-1.674.274l-7.12,9.909L37.914,14.61,45.035,4.7a1.2,1.2,0,0,0-.275-1.674l-3.9-2.8A1.2,1.2,0,0,0,39.188.5L19.115,28.435a1.2,1.2,0,0,0-.225.706l.283,54.517a1.2,1.2,0,0,0,.5.968l25.21,18.117a1.2,1.2,0,0,0,1.077.165"
										transform="translate(232.38 602.29)"
									/>
								</g>
								<g
									className="k-pentagrama"
									transform="matrix(1, 0, 0, 1, 0, 892.71)">
									<path
										className="a-pentagrama"
										d="M52.8,76.989a5.445,5.445,0,0,0-5.952-1.515l.342-.342a5.6,5.6,0,0,0,.278-7.749,5.449,5.449,0,0,0-7.824-.121l.939-.939a5.6,5.6,0,0,0,.279-7.749,5.451,5.451,0,0,0-7.825-.121L47.4,44.094a5.6,5.6,0,0,0,.279-7.749,5.451,5.451,0,0,0-7.825-.12L18.083,57.992a33.216,33.216,0,0,0-1.1-12.478,5.124,5.124,0,0,0-7.569-2.98,5.306,5.306,0,0,0-2.222,6.028c2.579,9.332-2,19.137-5.612,27.565-1.74,4.052-3.722,12.364,4.16,20.246l4.639,4.639c10.546,10.546,24.285,1.336,26.572-.952l.894-.894L49.119,87.889l3.3-3.3a5.59,5.59,0,0,0,.385-7.6"
										transform="translate(232.38 602.29)"
									/>
								</g>
								<text
									className="f-pentagrama"
									transform="translate(50 1530)">
									<tspan x={0} y={15}>
										{t('Conoce más de ')}
									</tspan>
									<tspan x={0} y={33}>
										{t('Grupo Amarey dando')}
									</tspan>
									<tspan x={0} y={51}>
										{t('clic en cada uno ')}
									</tspan>
								</text>
							</g>
							<path
								className="g-pentagrama"
								d="M37.093,124.41C48.487,90.449,65.14,61.567,85.812,40.133,110,15.048,138.139,1.788,167.169,1.788H282.007V0H167.169C137.5,0,108.815,13.483,84.214,38.991,63.261,60.717,46.411,90,34.933,124.41Z"
								transform="translate(131.993 629.882)"
							/>
							<text
								className="h-pentagrama"
								transform="translate(210 90.557)">
								<tspan
									x={
										selectedLanguage === 'es'
											? -102.024
											: -77.024
									}
									y={18}>
									{t('El origen de nuestra ')}
								</tspan>
								<tspan
									x={
										selectedLanguage === 'es'
											? -129.438
											: -103.438
									}
									y={37}>
									{t('historia es hoy la esencia ')}
								</tspan>
								<tspan
									x={
										selectedLanguage === 'es'
											? -87.678
											: -46.678
									}
									y={56}>
									{t('de nuestra marca')}
								</tspan>
							</text>
							<g transform="translate(184.884 573.571)">
								<path
									className="a-pentagrama"
									d="M229.116,155.108V54.822H88.805C53.1,54.822,20.24,93.054,0,155.108Z"
									transform="translate(0 20.613)"
								/>
								<g
									transform="translate(118.116 115.959)"
									onClick={() => setSelectedImage('')}>
									<path
										className="b-pentagrama"
										d="M0,0V19.012L16.462,9.505,8.6,4.965Z"
										transform="translate(16.462 19.012) rotate(180)"
									/>
									<text
										className="i-pentagrama"
										transform="translate(72.852 15.238)">
										<tspan x={-46.928} y={0}>
											{t('Volver')}
										</tspan>
									</text>
								</g>
							</g>
							<g transform='translate(20 -60) scale(0.9)'>
								<g
									transform="translate(64.145 240.907)"
									onClick={() => setStep(1)}>
									<image
										width={144.8}
										height={125.545}
										transform="matrix(0.999, 0.035, -0.035, 0.999, 4.381, 0)"
										xlinkHref="/images/mobile/ComponentTMP_0-image.png"
									/>
								</g>
								<g
									transform="translate(207.677 247.877)"
									onClick={() => setStep(2)}>
									<rect
										className="j-pentagrama"
										width={148.114}
										height={122.757}
										transform="matrix(1, 0.017, -0.017, 1, 2.142, 0)"
									/>
								</g>
								<g
									transform="translate(228.315 343.523)"
									onClick={() => setStep(3)}>
									<image
										width={142.231}
										height={146.16}
										transform="translate(7.649) rotate(3)"
										xlinkHref="/images/mobile/ComponentTMP_0-image3.png"
									/>
								</g>
								<g
									transform="translate(36 340.862)"
									onClick={() => setStep(4)}>
									<image
										width={144.04}
										height={145.589}
										transform="matrix(0.999, 0.035, -0.035, 0.999, 5.081, 0)"
										xlinkHref="/images/mobile/ComponentTMP_0-image4.png"
									/>
								</g>
								<g
									transform="translate(123.941 407.523)"
									onClick={() => setStep(5)}>
									<image
										width={168.22}
										height={126.558}
										transform="matrix(1, 0.017, -0.017, 1, 2.209, 0)"
										xlinkHref="/images/mobile/ComponentTMP_0-image5.png"
									/>
								</g>
							</g>
						</svg>
					) : step === 1 ? (
						<svg viewBox="0 40 414 705.293">
							<defs>
								<style>
									{
										'.a-pentagrama,.g-pentagrama,.i-pentagrama{fill:#001f5f;}.b-pentagrama,.l-pentagrama{fill:none;}.c-pentagrama,.j-pentagrama,.m-pentagrama,.o-pentagrama{fill:#fff;}.d-pentagrama{clip-path:url(#c-pentagrama);}.e-pentagrama{opacity:0.65;}.f-pentagrama{fill:#e7002a;}.g-pentagrama,.j-pentagrama{font-size:16px;}.g-pentagrama{font-family:Silka-Bold, Silka;}.g-pentagrama,.i-pentagrama,.m-pentagrama,.o-pentagrama{font-weight:700;}.h-pentagrama{fill:#e40032;}.i-pentagrama,.m-pentagrama{font-size:18px;font-family:Kiona-Bold;}.j-pentagrama{font-family:Silka-Medium, Silka;font-weight:500;}.k-pentagrama{clip-path:url(#j-pentagrama);}.l-pentagrama{stroke:#e40032;stroke-miterlimit:10;stroke-width:0.979px;}.n-pentagrama{clip-path:url(#k-pentagrama);}.o-pentagrama{font-size:24px;font-family:Helvetica-Bold, Helvetica;}.p-pentagrama{fill:url(#n-pentagrama);}.q-pentagrama{filter:url(#l-pentagrama);}.r-pentagrama{filter:url(#h-pentagrama);}.s-pentagrama{filter:url(#f-pentagrama);}.t-pentagrama{filter:url(#d-pentagrama);}.u-pentagrama{filter:url(#a-pentagrama);}'
									}
								</style>
								<filter
									id="a-pentagrama"
									x={21.813}
									y={591.181}
									width={365.187}
									height={145.92}
									filterUnits="userSpaceOnUse">
									<feOffset dy={3} />
									<feGaussianBlur
										stdDeviation={3}
										result="b"
									/>
									<feFlood floodOpacity={0.502} />
									<feComposite operator="in" in2="b" />
									<feComposite in="SourceGraphic" />
								</filter>
								<clipPath id="c-pentagrama">
									<rect
										className="a-pentagrama"
										width={163.429}
										height={74.83}
									/>
								</clipPath>
								<filter
									id="d-pentagrama"
									x={242.271}
									y={596.293}
									width={117.729}
									height={120.968}
									filterUnits="userSpaceOnUse">
									<feOffset dy={3} />
									<feGaussianBlur
										stdDeviation={3}
										result="e"
									/>
									<feFlood floodOpacity={0.502} />
									<feComposite operator="in" in2="e" />
									<feComposite in="SourceGraphic" />
								</filter>
								<filter
									id="f-pentagrama"
									x={223.381}
									y={630.921}
									width={72.113}
									height={89.34}
									filterUnits="userSpaceOnUse">
									<feOffset dy={3} />
									<feGaussianBlur
										stdDeviation={3}
										result="g"
									/>
									<feFlood floodOpacity={0.502} />
									<feComposite operator="in" in2="g" />
									<feComposite in="SourceGraphic" />
								</filter>
								<filter
									id="h-pentagrama"
									x={21.813}
									y={591.181}
									width={365.187}
									height={145.92}
									filterUnits="userSpaceOnUse">
									<feOffset dy={3} />
									<feGaussianBlur
										stdDeviation={3}
										result="i"
									/>
									<feFlood floodOpacity={0.502} />
									<feComposite operator="in" in2="i" />
									<feComposite in="SourceGraphic" />
								</filter>
								<clipPath id="j-pentagrama">
									<g
										className="u-pentagrama"
										transform="matrix(1, 0, 0, 1, 0, 0)">
										<path
											className="a-pentagrama"
											d="M284.956,0H62.231V.026C44.578.7,28.824,14.4,22.09,35.111L0,127.92H284.956v-.026c17.653-.671,33.408-14.375,40.141-35.085L347.187,0Z"
											transform="translate(347.19 127.92) rotate(180)"
										/>
									</g>
								</clipPath>
								<clipPath id="k-pentagrama">
									<rect
										className="b-pentagrama"
										width={118.422}
										height={33.136}
									/>
								</clipPath>
								<filter
									id="l-pentagrama"
									x={344.5}
									y={567.793}
									width={39}
									height={39}
									filterUnits="userSpaceOnUse">
									<feOffset dy={1} />
									<feGaussianBlur
										stdDeviation={0.5}
										result="m"
									/>
									<feFlood floodOpacity={0.4} />
									<feComposite operator="in" in2="m" />
									<feComposite in="SourceGraphic" />
								</filter>
								<pattern
									id="n-pentagrama"
									width={1}
									height={1}
									viewBox="0 -0.061 148.114 122.757">
									<image
										preserveAspectRatio="none"
										width={148.114}
										height={122.757}
										xlinkHref="/images/mobile/ComponentTMP_0-image2.webp"
									/>
								</pattern>
							</defs>
							<g transform="translate(0.572)">
								<rect
									className="c-pentagrama"
									width={413.428}
									height={894.293}
								/>
								<g
									className="d-pentagrama"
									transform="translate(-0.572)">
									<path
										className="a-pentagrama"
										d="M107.443,74.83H0V0H163.429V19.373c0,30.628-25.066,55.457-55.986,55.457"
									/>
								</g>
							</g>
							<g
								className="e-pentagrama"
								transform="translate(0 -692.707)">
								<g
									className="t-pentagrama"
									transform="matrix(1, 0, 0, 1, 0, 892.71)">
									<path
										className="f-pentagrama"
										d="M45.96,102.908,97.722,85.791a1.2,1.2,0,0,0,.6-.439l20.073-27.934a1.2,1.2,0,0,0-.273-1.674l-3.9-2.8a1.2,1.2,0,0,0-1.674.274l-7.122,9.91L91.335,53l7.119-9.909a1.2,1.2,0,0,0-.274-1.674l-3.895-2.8a1.2,1.2,0,0,0-1.675.275L74.168,64.552a1.2,1.2,0,0,0,.273,1.675l3.9,2.8a1.2,1.2,0,0,0,1.674-.275l7.12-9.908,14.093,10.128-7.615,10.6L46.6,95.114,26.356,80.565,26.1,31.053l7.614-10.6L47.805,30.584l-7.12,9.907a1.2,1.2,0,0,0,.273,1.675l3.9,2.8a1.2,1.2,0,0,0,1.674-.275L64.972,19.03a1.2,1.2,0,0,0-.274-1.675l-3.9-2.8a1.2,1.2,0,0,0-1.674.274l-7.12,9.909L37.914,14.61,45.035,4.7a1.2,1.2,0,0,0-.275-1.674l-3.9-2.8A1.2,1.2,0,0,0,39.188.5L19.115,28.435a1.2,1.2,0,0,0-.225.706l.283,54.517a1.2,1.2,0,0,0,.5.968l25.21,18.117a1.2,1.2,0,0,0,1.077.165"
										transform="translate(232.38 602.29)"
									/>
								</g>
								<g
									className="s-pentagrama"
									transform="matrix(1, 0, 0, 1, 0, 892.71)">
									<path
										className="a-pentagrama"
										d="M52.8,76.989a5.445,5.445,0,0,0-5.952-1.515l.342-.342a5.6,5.6,0,0,0,.278-7.749,5.449,5.449,0,0,0-7.824-.121l.939-.939a5.6,5.6,0,0,0,.279-7.749,5.451,5.451,0,0,0-7.825-.121L47.4,44.094a5.6,5.6,0,0,0,.279-7.749,5.451,5.451,0,0,0-7.825-.12L18.083,57.992a33.216,33.216,0,0,0-1.1-12.478,5.124,5.124,0,0,0-7.569-2.98,5.306,5.306,0,0,0-2.222,6.028c2.579,9.332-2,19.137-5.612,27.565-1.74,4.052-3.722,12.364,4.16,20.246l4.639,4.639c10.546,10.546,24.285,1.336,26.572-.952l.894-.894L49.119,87.889l3.3-3.3a5.59,5.59,0,0,0,.385-7.6"
										transform="translate(232.38 602.29)"
									/>
								</g>
								<text
									className="g-pentagrama"
									transform="translate(71 1530)">
									<tspan x={0} y={15}>
										{t('Conoce más de')}
									</tspan>
									<tspan x={0} y={33}>
										{t('Amarey dando clic')}
									</tspan>
									<tspan x={0} y={51}>
										{t('en cada uno')}
									</tspan>
								</text>
							</g>
							<path
								className="h-pentagrama"
								d="M37.093,124.41C48.487,90.449,65.14,61.567,85.812,40.133,110,15.048,138.139,1.788,167.169,1.788H282.007V0H167.169C137.5,0,108.815,13.483,84.214,38.991,63.261,60.717,46.411,90,34.933,124.41Z"
								transform="translate(131.993 619.882)"
							/>
							<text
								className="i-pentagrama"
								transform="translate(210 90.557)">
								<tspan
									x={
										selectedLanguage === 'es'
											? -102.024
											: -77.024
									}
									y={18}>
									{t('El origen de nuestra ')}
								</tspan>
								<tspan
									x={
										selectedLanguage === 'es'
											? -129.438
											: -103.438
									}
									y={37}>
									{t('historia es hoy la esencia ')}
								</tspan>
								<tspan
									x={
										selectedLanguage === 'es'
											? -87.678
											: -46.678
									}
									y={56}>
									{t('de nuestra marca')}
								</tspan>
							</text>
							<g
								transform="translate(184.884 568.571)"
								onClick={() => setSelectedImage('')}>
								<path
									className="a-pentagrama"
									d="M229.116,155.108V54.822H88.805C53.1,54.822,20.24,93.054,0,155.108Z"
									transform="translate(0 20.613)"
								/>
								<g transform="translate(118.116 115.959)">
									<path
										className="c-pentagrama"
										d="M0,0V19.012L16.462,9.505,8.6,4.965Z"
										transform="translate(16.462 19.012) rotate(180)"
									/>
									<text
										className="j-pentagrama"
										transform="translate(72.852 15.238)">
										<tspan x={-46.928} y={0}>
											{t('Volver')}
										</tspan>
									</text>
								</g>
							</g>
							<g transform="translate(20 -58) scale(0.9)">
								<g
									transform="translate(30.813 308.437)"
									onClick={() => setStep(0)}>
									<image
										width={78.751}
										height={68.279}
										transform="matrix(0.999, 0.035, -0.035, 0.999, 100.877, 0)"
										xlinkHref="/images/mobile/ComponentTMP_0-image.png"
									/>
									<g
										transform="translate(-30.813 -1201.144)"
										onClick={() => {
											setShowPopup(true)
											const video: HTMLVideoElement =
												document.getElementById(
													'video-1'
												) as HTMLVideoElement

											if (video) {
												video.currentTime = 0
											}
										}}>
										<g transform="translate(30.813 1489.888)">
											<g
												className="r-pentagrama"
												transform="matrix(1, 0, 0, 1, -30.81, -597.18)">
												<path
													className="a-pentagrama"
													d="M284.956,0H62.231V.026C44.578.7,28.824,14.4,22.09,35.111L0,127.92H284.956v-.026c17.653-.671,33.408-14.375,40.141-35.085L347.187,0Z"
													transform="translate(378 725.1) rotate(180)"
												/>
											</g>
											<g
												className="k-pentagrama"
												transform="translate(0 0)">
												<path
													className="l-pentagrama"
													d="M108.4,0H23.674V.01C16.958.265,10.965,5.476,8.4,13.35L0,48.637H108.4v-.01c6.715-.255,12.709-5.466,15.27-13.34L132.076,0Z"
													transform="translate(237.919 158.05) rotate(180)"
												/>
											</g>
											<path
												className="c-pentagrama"
												d="M49.708,0H48.645V.026C34.845.7,22.531,14.4,17.267,35.111L0,127.92H117.228v-.026c13.8-.671,26.114-14.375,31.377-35.085L165.873,0Z"
												transform="translate(347.187 127.92) rotate(180)"
											/>
											<text
												className="m-pentagrama"
												transform="translate(15.74 56.229)">
												<tspan
													x={
														selectedLanguage ===
														'es'
															? 10.373
															: 35.373
													}
													y={18}>
													{t('Nuestro origen')}
												</tspan>
											</text>
										</g>
										<g transform="translate(235.132 1539.493)">
											<g
												className="n-pentagrama"
												transform="translate(0 0)">
												<path
													className="h-pentagrama"
													d="M19.748,21.314l4.682,6.373a.178.178,0,0,1,.033.1l.027,4.989a.175.175,0,0,1-.174.175l-.7,0a.174.174,0,0,1-.175-.173l-.009-1.769-2.517.013.009,1.77a.174.174,0,0,1-.174.175l-.7,0a.173.173,0,0,1-.174-.173l-.024-4.584a.173.173,0,0,1,.173-.175l.7,0a.175.175,0,0,1,.175.174l.009,1.769,2.517-.013-.01-1.893L19.17,22.289l-3.617.019L11.362,28.14l.009,1.892,2.518-.013L13.88,28.25a.173.173,0,0,1,.173-.175l.7,0a.174.174,0,0,1,.175.174l.024,4.584a.174.174,0,0,1-.173.175l-.7,0a.174.174,0,0,1-.175-.173l-.009-1.77-2.517.013.009,1.77a.175.175,0,0,1-.174.175l-.7,0a.174.174,0,0,1-.175-.173l-.026-4.989a.174.174,0,0,1,.033-.1l4.615-6.422a.176.176,0,0,1,.14-.072l4.5-.023a.173.173,0,0,1,.141.071M12.5,16.1,4.964,13.7a.168.168,0,0,0-.107,0L.12,15.266a.174.174,0,0,0-.11.22l.218.661a.174.174,0,0,0,.22.11l1.68-.555.791,2.39-1.68.555a.174.174,0,0,0-.11.22l.218.661a.175.175,0,0,0,.22.11L5.918,18.2a.174.174,0,0,0,.11-.22l-.218-.661a.175.175,0,0,0-.22-.11l-1.68.556-.79-2.39,1.8-.594,6.842,2.184.559,1.69.576,1.743L8.7,26.229l-1.8.594-.79-2.39,1.68-.555a.174.174,0,0,0,.11-.22L7.687,23a.174.174,0,0,0-.219-.11L3.115,24.325a.174.174,0,0,0-.11.22l.218.661a.174.174,0,0,0,.22.11l1.68-.556.791,2.39-1.68.556a.174.174,0,0,0-.111.22l.219.661a.174.174,0,0,0,.22.11L9.3,27.131a.174.174,0,0,0,.087-.064L14,20.646a.172.172,0,0,0,.024-.156L12.61,16.215A.174.174,0,0,0,12.5,16.1m9.289-1.177,7.508-2.483a.173.173,0,0,0,.086-.064l2.912-4.052a.174.174,0,0,0-.04-.243l-.565-.406a.174.174,0,0,0-.243.04L30.412,9.156,28.368,7.687,29.4,6.25a.174.174,0,0,0-.039-.243L28.8,5.6a.173.173,0,0,0-.243.04L25.878,9.362a.174.174,0,0,0,.039.243l.566.406a.174.174,0,0,0,.243-.04l1.033-1.437L29.8,10l-1.1,1.537L21.88,13.8l-2.937-2.111L18.906,4.5l1.1-1.537,2.044,1.469L21.021,5.873a.174.174,0,0,0,.04.243l.565.406a.174.174,0,0,0,.243-.04l2.675-3.722a.174.174,0,0,0-.04-.243l-.565-.406a.174.174,0,0,0-.243.04L22.663,3.587,20.62,2.119,21.653.681a.174.174,0,0,0-.04-.243L21.047.032a.173.173,0,0,0-.243.04L17.893,4.124a.177.177,0,0,0-.033.1l.041,7.908a.173.173,0,0,0,.072.14L21.631,14.9a.174.174,0,0,0,.156.024m12.642,1.043.211-.664a.174.174,0,0,0-.113-.219L29.775,13.57a.175.175,0,0,0-.108,0l-7.508,2.483a.172.172,0,0,0-.111.112l-1.369,4.29a.173.173,0,0,0,.025.156l4.681,6.374a.178.178,0,0,0,.088.063l4.752,1.517a.174.174,0,0,0,.219-.113l.211-.663a.173.173,0,0,0-.112-.219l-1.686-.539.765-2.4,1.686.538a.174.174,0,0,0,.219-.112l.211-.664a.174.174,0,0,0-.113-.219l-4.367-1.394a.173.173,0,0,0-.218.113l-.212.664a.173.173,0,0,0,.113.218l1.686.539-.765,2.4-1.8-.575L21.808,20.35l1.1-3.445,6.818-2.255,1.8.576-.765,2.4-1.686-.539a.175.175,0,0,0-.219.113l-.211.664a.173.173,0,0,0,.113.218l4.366,1.394a.174.174,0,0,0,.219-.112l.212-.664a.175.175,0,0,0-.113-.219l-1.686-.538.765-2.4,1.686.539a.175.175,0,0,0,.219-.113m-21.4-1.028,3.625-2.67a.175.175,0,0,0,.071-.142l-.053-7.908a.172.172,0,0,0-.034-.1L13.678.1a.173.173,0,0,0-.243-.037l-.561.413a.174.174,0,0,0-.037.243l1.05,1.425L11.861,3.639l-1.05-1.425a.174.174,0,0,0-.243-.037l-.561.413a.174.174,0,0,0-.037.243l2.718,3.691a.174.174,0,0,0,.243.037l.561-.413A.174.174,0,0,0,13.53,5.9L12.48,4.48l2.027-1.493,1.122,1.524.047,7.182-2.912,2.144L5.92,11.663,4.8,10.139,6.825,8.646l1.049,1.425a.174.174,0,0,0,.243.037l.561-.413a.175.175,0,0,0,.037-.243L6,5.762a.174.174,0,0,0-.243-.037l-.561.413a.174.174,0,0,0-.037.243L6.2,7.806,4.179,9.3,3.129,7.874a.174.174,0,0,0-.243-.037l-.561.413a.174.174,0,0,0-.037.243L5.247,12.51a.171.171,0,0,0,.087.063l7.537,2.395a.175.175,0,0,0,.156-.026"
													transform="translate(0 0)"
												/>
												<path
													className="a-pentagrama"
													d="M91.088,15.5H88.146a3.984,3.984,0,0,1-2.053-.551,4.094,4.094,0,0,1-1.49-1.5,4.149,4.149,0,0,1,0-4.131,4.151,4.151,0,0,1,1.49-1.5,4.028,4.028,0,0,1,3.687-.206,4.107,4.107,0,0,1,1.358.976l-.413.388a3.545,3.545,0,0,0-2.579-1.126,3.435,3.435,0,0,0-1.765.476,3.554,3.554,0,0,0-1.289,1.283,3.549,3.549,0,0,0,0,3.549,3.583,3.583,0,0,0,1.289,1.3,3.4,3.4,0,0,0,1.765.482H90.5V12.021H87.821v-.563h3.267Z"
													transform="translate(-28.161 -2.434)"
												/>
												<path
													className="a-pentagrama"
													d="M103.994,15.551l-3.38-4.105h1a3.992,3.992,0,0,0,1.5-.238,2.006,2.006,0,0,0,.739-.607,1.433,1.433,0,0,0,.313-.9,1.476,1.476,0,0,0-.263-.833,1.942,1.942,0,0,0-.751-.644,2.438,2.438,0,0,0-1.126-.251H99.75v7.573h-.563V7.415h2.842A3.132,3.132,0,0,1,103.1,7.6a2.646,2.646,0,0,1,.876.519,2.314,2.314,0,0,1,.557.739,2.011,2.011,0,0,1-.219,2.084,2.384,2.384,0,0,1-.976.783,2.575,2.575,0,0,1-.757.219,6.629,6.629,0,0,1-.782.044l2.941,3.568Z"
													transform="translate(-33.232 -2.484)"
												/>
												<path
													className="a-pentagrama"
													d="M114.872,15.639a2.982,2.982,0,0,1-1.183-.244,3.091,3.091,0,0,1-1.007-.695,2.865,2.865,0,0,1-.67-1,3.213,3.213,0,0,1-.232-1.214V7.415h.563v5.07a2.62,2.62,0,0,0,.194,1,2.476,2.476,0,0,0,.545.826,2.541,2.541,0,0,0,.826.557,2.468,2.468,0,0,0,.964.194,2.5,2.5,0,0,0,.976-.194,2.544,2.544,0,0,0,.827-.557,2.475,2.475,0,0,0,.545-.826,2.632,2.632,0,0,0,.194-1V7.415h.564v5.07a3.225,3.225,0,0,1-.232,1.214,2.874,2.874,0,0,1-.67,1,3.109,3.109,0,0,1-1,.695,3,3,0,0,1-1.2.244"
													transform="translate(-37.451 -2.484)"
												/>
												<path
													className="a-pentagrama"
													d="M125.5,15.551l-.013-8.136h2.9a2.837,2.837,0,0,1,1.321.313,2.555,2.555,0,0,1,.964.839,2.029,2.029,0,0,1,0,2.3,2.535,2.535,0,0,1-.964.844,2.837,2.837,0,0,1-1.321.313h-2.328v3.53Zm.563-4.118h2.328a2.344,2.344,0,0,0,1.039-.231,1.978,1.978,0,0,0,.757-.626,1.445,1.445,0,0,0,.281-.857,1.464,1.464,0,0,0-.281-.87,1.978,1.978,0,0,0-.757-.626,2.344,2.344,0,0,0-1.039-.231h-2.341Z"
													transform="translate(-42.043 -2.484)"
												/>
												<path
													className="a-pentagrama"
													d="M140.973,15.595a4.013,4.013,0,0,1-2.065-.557,4.193,4.193,0,0,1-1.5-5.683,4.084,4.084,0,0,1,1.5-1.515,4.106,4.106,0,0,1,4.131,0,4.193,4.193,0,0,1,1.5,5.683,4.084,4.084,0,0,1-1.5,1.515,4.013,4.013,0,0,1-2.065.557m0-7.736a3.425,3.425,0,0,0-1.777.482,3.625,3.625,0,0,0-1.3,1.3,3.591,3.591,0,0,0,0,3.592,3.62,3.62,0,0,0,1.3,1.3,3.518,3.518,0,0,0,3.555,0,3.565,3.565,0,0,0,1.289-1.3,3.63,3.63,0,0,0,0-3.592,3.571,3.571,0,0,0-1.289-1.3,3.427,3.427,0,0,0-1.777-.482"
													transform="translate(-45.852 -2.44)"
												/>
												<path
													className="a-pentagrama"
													d="M80.695,25.819h2.076a.272.272,0,0,1,.272.273v.844a3.552,3.552,0,0,1,3.093-1.4,3.659,3.659,0,0,1,3.5,1.847,4.328,4.328,0,0,1,3.8-1.847,4.584,4.584,0,0,1,4.124,2,6.812,6.812,0,0,1,.71,3.308v6.6a.273.273,0,0,1-.273.273H95.688a.272.272,0,0,1-.273-.273V31.189a3.311,3.311,0,0,0-.58-2.341,2.105,2.105,0,0,0-1.654-.688,2.167,2.167,0,0,0-2.041,1.2,5.622,5.622,0,0,0-.365,2.492v5.592a.273.273,0,0,1-.273.273H88.191a.273.273,0,0,1-.273-.273V31.189a3.636,3.636,0,0,0-.537-2.32,2.3,2.3,0,0,0-1.761-.709,2.05,2.05,0,0,0-2.062,1.289,7.039,7.039,0,0,0-.279,2.406v5.592a.273.273,0,0,1-.273.273H80.695a.273.273,0,0,1-.273-.273V26.092a.273.273,0,0,1,.273-.273"
													transform="translate(-26.945 -8.557)"
												/>
												<path
													className="a-pentagrama"
													d="M122.145,37.719h-2.075a.273.273,0,0,1-.273-.273V36.173A4.732,4.732,0,0,1,115.844,38a5.887,5.887,0,0,1-5.993-6.187,5.96,5.96,0,0,1,6.058-6.272,4.423,4.423,0,0,1,3.888,1.869V26.091a.272.272,0,0,1,.273-.272h2.075a.272.272,0,0,1,.273.272V37.447a.273.273,0,0,1-.273.273m-9.415-5.843a3.491,3.491,0,1,0,6.981-.065,3.5,3.5,0,1,0-6.981.065"
													transform="translate(-36.805 -8.557)"
												/>
												<path
													className="a-pentagrama"
													d="M132.511,25.819h2.076a.272.272,0,0,1,.272.273v.887a2.633,2.633,0,0,1,2.578-1.439h.215v2.75c-1.719.043-2.556.967-2.556,2.814v6.343a.273.273,0,0,1-.273.273h-2.312a.273.273,0,0,1-.273-.273V26.092a.273.273,0,0,1,.273-.273"
													transform="translate(-44.305 -8.557)"
												/>
												<path
													className="a-pentagrama"
													d="M144.442,33.037a3.134,3.134,0,0,0,3.286,2.341,3,3,0,0,0,2.539-1.087.275.275,0,0,1,.2-.094h2.6a.272.272,0,0,1,.253.374,5.394,5.394,0,0,1-.805,1.279A5.837,5.837,0,0,1,147.792,38a6.233,6.233,0,0,1-6.443-6.291,6.326,6.326,0,0,1,6.886-6.14,6.092,6.092,0,0,1,5.529,6.374,4.6,4.6,0,0,1-.108,1.1Zm6.509-2.514a3.04,3.04,0,0,0-3.286-2.363,3.149,3.149,0,0,0-3.308,2.363Z"
													transform="translate(-47.358 -8.558)"
												/>
												<path
													className="a-pentagrama"
													d="M164.576,36.743l-4.209-10.409a.272.272,0,0,1,.253-.374h2.667a.272.272,0,0,1,.257.184l2.579,7.527,2.812-7.534a.273.273,0,0,1,.255-.177h2.682a.272.272,0,0,1,.25.38L165.485,41.67a.273.273,0,0,1-.25.164h-2.476a.273.273,0,0,1-.249-.382Z"
													transform="translate(-53.723 -8.698)"
												/>
												<path
													className="a-pentagrama"
													d="M64,19.983h-2.32L58.761,27a.272.272,0,0,0,.251.377h2.494a.272.272,0,0,0,.257-.182l1.081-3.062,1.7,4.812H59.829a2.817,2.817,0,0,0-2.6,1.734l-2,4.8a.272.272,0,0,0,.251.377h2.656a.272.272,0,0,0,.25-.165l1.69-3.938h5.65l1.627,3.935a.272.272,0,0,0,.252.168h2.652a.272.272,0,0,0,.251-.378Z"
													transform="translate(-18.495 -6.695)"
												/>
											</g>
										</g>
									</g>
									<g onClick={() => setStep(0)}>
										<g
											className="q-pentagrama"
											transform="matrix(1, 0, 0, 1, -30.81, -308.44)">
											<circle
												className="h-pentagrama"
												cx={18}
												cy={18}
												r={18}
												transform="translate(346 568.29)"
											/>
										</g>
										<text
											className="o-pentagrama"
											transform="translate(325.187 286.856)">
											<tspan x={0} y={0}>
												{'X'}
											</tspan>
										</text>
									</g>
								</g>
								<g
									transform="translate(207.677 247.877)"
									onClick={() => setStep(2)}>
									<rect
										className="p-pentagrama"
										width={148.114}
										height={122.757}
										transform="matrix(1, 0.017, -0.017, 1, 2.142, 0)"
									/>
								</g>
								<g
									transform="translate(228.315 343.523)"
									onClick={() => setStep(3)}>
									<image
										width={142.231}
										height={146.16}
										transform="translate(7.649) rotate(3)"
										xlinkHref="/images/mobile/ComponentTMP_0-image3.png"
									/>
								</g>
								<g
									transform="translate(36 340.862)"
									onClick={() => setStep(4)}>
									<image
										width={144.04}
										height={145.589}
										transform="matrix(0.999, 0.035, -0.035, 0.999, 5.081, 0)"
										xlinkHref="/images/mobile/ComponentTMP_0-image4.png"
									/>
								</g>
								<g
									transform="translate(123.941 407.523)"
									onClick={() => setStep(5)}>
									<image
										width={168.22}
										height={126.558}
										transform="matrix(1, 0.017, -0.017, 1, 2.209, 0)"
										xlinkHref="/images/mobile/ComponentTMP_0-image5.png"
									/>
								</g>
							</g>
						</svg>
					) : step === 2 ? (
						<svg viewBox="0 40 414 705.293">
							<defs>
								<style>
									{
										'.a-pentagrama,.f-pentagrama,.h-pentagrama{fill:#001f5f;}.b-pentagrama,.i-pentagrama,.n-pentagrama,.o-pentagrama{fill:#fff;}.c-pentagrama{clip-path:url(#c-pentagrama);}.d-pentagrama{opacity:0.65;}.e-pentagrama{fill:#e7002a;}.f-pentagrama,.i-pentagrama{font-size:16px;}.f-pentagrama{font-family:Silka-Bold, Silka;}.f-pentagrama,.h-pentagrama,.n-pentagrama,.o-pentagrama{font-weight:700;}.g-pentagrama{fill:#e40032;}.h-pentagrama,.n-pentagrama{font-size:18px;font-family:Kiona-Bold;}.i-pentagrama{font-family:Silka-Medium, Silka;font-weight:500;}.j-pentagrama{fill:url(#h-pentagrama);}.k-pentagrama{clip-path:url(#k-pentagrama);}.l-pentagrama{fill:none;stroke:#e40032;stroke-miterlimit:10;stroke-width:0.979px;}.m-pentagrama{fill:url(#l-pentagrama);}.o-pentagrama{font-size:24px;font-family:Helvetica-Bold, Helvetica;}.p-pentagrama{filter:url(#m-pentagrama);}.q-pentagrama{filter:url(#i-pentagrama);}.r-pentagrama{filter:url(#f-pentagrama);}.s-pentagrama{filter:url(#d-pentagrama);}.t-pentagrama{filter:url(#a-pentagrama);}'
									}
								</style>
								<filter
									id="a-pentagrama"
									x={21.813}
									y={591.181}
									width={365.187}
									height={145.92}
									filterUnits="userSpaceOnUse">
									<feOffset dy={3} />
									<feGaussianBlur
										stdDeviation={3}
										result="b"
									/>
									<feFlood floodOpacity={0.502} />
									<feComposite operator="in" in2="b" />
									<feComposite in="SourceGraphic" />
								</filter>
								<clipPath id="c-pentagrama">
									<rect
										className="a-pentagrama"
										width={163.429}
										height={74.83}
									/>
								</clipPath>
								<filter
									id="d-pentagrama"
									x={242.271}
									y={596.293}
									width={117.729}
									height={120.968}
									filterUnits="userSpaceOnUse">
									<feOffset dy={3} />
									<feGaussianBlur
										stdDeviation={3}
										result="e"
									/>
									<feFlood floodOpacity={0.502} />
									<feComposite operator="in" in2="e" />
									<feComposite in="SourceGraphic" />
								</filter>
								<filter
									id="f-pentagrama"
									x={223.381}
									y={630.921}
									width={72.113}
									height={89.34}
									filterUnits="userSpaceOnUse">
									<feOffset dy={3} />
									<feGaussianBlur
										stdDeviation={3}
										result="g"
									/>
									<feFlood floodOpacity={0.502} />
									<feComposite operator="in" in2="g" />
									<feComposite in="SourceGraphic" />
								</filter>
								<pattern
									id="h-pentagrama"
									width={1}
									height={1}
									viewBox="0 -0.033 80.553 66.763">
									<image
										preserveAspectRatio="none"
										width={80.553}
										height={66.763}
										xlinkHref="/images/mobile/ComponentTMP_0-image2.webp"
									/>
								</pattern>
								<filter
									id="i-pentagrama"
									x={21.813}
									y={591.181}
									width={365.187}
									height={145.92}
									filterUnits="userSpaceOnUse">
									<feOffset dy={3} />
									<feGaussianBlur
										stdDeviation={3}
										result="j"
									/>
									<feFlood floodOpacity={0.502} />
									<feComposite operator="in" in2="j" />
									<feComposite in="SourceGraphic" />
								</filter>
								<clipPath id="k-pentagrama">
									<g
										className="t-pentagrama"
										transform="matrix(1, 0, 0, 1, 0, 0)">
										<path
											className="a-pentagrama"
											d="M284.956,0H62.231V.026C44.578.7,28.824,14.4,22.09,35.111L0,127.92H284.956v-.026c17.653-.671,33.408-14.375,40.141-35.085L347.187,0Z"
											transform="translate(347.19 127.92) rotate(180)"
										/>
									</g>
								</clipPath>
								<pattern
									id="l-pentagrama"
									width={1}
									height={1}
									patternTransform="translate(333.979 255.839) rotate(-180)"
									viewBox="0 3.552 159.601 123.083">
									<image
										preserveAspectRatio="xMidYMid slice"
										width={191.989}
										height={127.92}
										xlinkHref="/images/mobile/image-3.jpg"
									/>
								</pattern>
								<filter
									id="m-pentagrama"
									x={344.5}
									y={567.793}
									width={39}
									height={39}
									filterUnits="userSpaceOnUse">
									<feOffset dy={1} />
									<feGaussianBlur
										stdDeviation={0.5}
										result="n"
									/>
									<feFlood floodOpacity={0.4} />
									<feComposite operator="in" in2="n" />
									<feComposite in="SourceGraphic" />
								</filter>
							</defs>
							<g transform="translate(0.572)">
								<rect
									className="b-pentagrama"
									width={413.428}
									height={894.293}
								/>
								<g
									className="c-pentagrama"
									transform="translate(-0.572)">
									<path
										className="a-pentagrama"
										d="M107.443,74.83H0V0H163.429V19.373c0,30.628-25.066,55.457-55.986,55.457"
									/>
								</g>
							</g>
							<g
								className="d-pentagrama"
								transform="translate(0 -1052.707)">
								<g
									className="s-pentagrama"
									transform="matrix(1, 0, 0, 1, 0, 892.71)">
									<path
										className="e-pentagrama"
										d="M45.96,102.908,97.722,85.791a1.2,1.2,0,0,0,.6-.439l20.073-27.934a1.2,1.2,0,0,0-.273-1.674l-3.9-2.8a1.2,1.2,0,0,0-1.674.274l-7.122,9.91L91.335,53l7.119-9.909a1.2,1.2,0,0,0-.274-1.674l-3.895-2.8a1.2,1.2,0,0,0-1.675.275L74.168,64.552a1.2,1.2,0,0,0,.273,1.675l3.9,2.8a1.2,1.2,0,0,0,1.674-.275l7.12-9.908,14.093,10.128-7.615,10.6L46.6,95.114,26.356,80.565,26.1,31.053l7.614-10.6L47.805,30.584l-7.12,9.907a1.2,1.2,0,0,0,.273,1.675l3.9,2.8a1.2,1.2,0,0,0,1.674-.275L64.972,19.03a1.2,1.2,0,0,0-.274-1.675l-3.9-2.8a1.2,1.2,0,0,0-1.674.274l-7.12,9.909L37.914,14.61,45.035,4.7a1.2,1.2,0,0,0-.275-1.674l-3.9-2.8A1.2,1.2,0,0,0,39.188.5L19.115,28.435a1.2,1.2,0,0,0-.225.706l.283,54.517a1.2,1.2,0,0,0,.5.968l25.21,18.117a1.2,1.2,0,0,0,1.077.165"
										transform="translate(232.38 602.29)"
									/>
								</g>
								<g
									className="r-pentagrama"
									transform="matrix(1, 0, 0, 1, 0, 892.71)">
									<path
										className="a-pentagrama"
										d="M52.8,76.989a5.445,5.445,0,0,0-5.952-1.515l.342-.342a5.6,5.6,0,0,0,.278-7.749,5.449,5.449,0,0,0-7.824-.121l.939-.939a5.6,5.6,0,0,0,.279-7.749,5.451,5.451,0,0,0-7.825-.121L47.4,44.094a5.6,5.6,0,0,0,.279-7.749,5.451,5.451,0,0,0-7.825-.12L18.083,57.992a33.216,33.216,0,0,0-1.1-12.478,5.124,5.124,0,0,0-7.569-2.98,5.306,5.306,0,0,0-2.222,6.028c2.579,9.332-2,19.137-5.612,27.565-1.74,4.052-3.722,12.364,4.16,20.246l4.639,4.639c10.546,10.546,24.285,1.336,26.572-.952l.894-.894L49.119,87.889l3.3-3.3a5.59,5.59,0,0,0,.385-7.6"
										transform="translate(232.38 602.29)"
									/>
								</g>
								<text
									className="f-pentagrama"
									transform="translate(71 1530)">
									<tspan x={0} y={15}>
										{t('Conoce más de ')}
									</tspan>
									<tspan x={0} y={33}>
										{t('Amarey dando clic ')}
									</tspan>
									<tspan x={0} y={51}>
										{t('en cada uno ')}
									</tspan>
								</text>
							</g>
							<path
								className="g-pentagrama"
								d="M37.093,124.41C48.487,90.449,65.14,61.567,85.812,40.133,110,15.048,138.139,1.788,167.169,1.788H282.007V0H167.169C137.5,0,108.815,13.483,84.214,38.991,63.261,60.717,46.411,90,34.933,124.41Z"
								transform="translate(131.993 611.882)"
							/>
							<text
								className="h-pentagrama"
								transform="translate(210 90.557)">
								<tspan
									x={
										selectedLanguage === 'es'
											? -102.024
											: -77.024
									}
									y={18}>
									{t('El origen de nuestra ')}
								</tspan>
								<tspan
									x={
										selectedLanguage === 'es'
											? -129.438
											: -103.438
									}
									y={37}>
									{t('historia es hoy la esencia ')}
								</tspan>
								<tspan
									x={
										selectedLanguage === 'es'
											? -87.678
											: -46.678
									}
									y={56}>
									{t('de nuestra marca')}
								</tspan>
							</text>
							<g transform="translate(184.884 568.571)">
								<path
									className="a-pentagrama"
									d="M229.116,155.108V54.822H88.805C53.1,54.822,20.24,93.054,0,155.108Z"
									transform="translate(0 20.613)"
								/>
								<g transform="translate(118.116 115.959)">
									<path
										className="b-pentagrama"
										d="M0,0V19.012L16.462,9.505,8.6,4.965Z"
										transform="translate(16.462 19.012) rotate(180)"
									/>
									<text
										className="i-pentagrama"
										transform="translate(72.852 15.238)">
										<tspan x={-46.928} y={0}>
											{t('Volver')}
										</tspan>
									</text>
								</g>
							</g>
							<g transform="translate(20 -58) scale(0.9)">
								<g
									transform="translate(64.145 240.907)"
									onClick={() => setStep(1)}>
									<image
										width={144.8}
										height={125.545}
										transform="matrix(0.999, 0.035, -0.035, 0.999, 4.381, 0)"
										xlinkHref="/images/mobile/ComponentTMP_0-image.png"
									/>
								</g>
								<g
									transform="translate(30.813 312.227)"
									onClick={() => setStep(0)}>
									<rect
										className="j-pentagrama"
										width={80.553}
										height={66.763}
										transform="matrix(1, 0.017, -0.017, 1, 177.721, 0)"
									/>
									<g
										transform="translate(-30.813 -1204.934)"
										onClick={() =>
											(window.location.href = '/historia')
										}>
										<g transform="translate(30.813 1489.888)">
											<g
												className="q-pentagrama"
												transform="matrix(1, 0, 0, 1, -30.81, -597.18)">
												<path
													className="a-pentagrama"
													d="M284.956,0H62.231V.026C44.578.7,28.824,14.4,22.09,35.111L0,127.92H284.956v-.026c17.653-.671,33.408-14.375,40.141-35.085L347.187,0Z"
													transform="translate(378 725.1) rotate(180)"
												/>
											</g>
											<g
												className="k-pentagrama"
												transform="translate(0 0)">
												<path
													className="l-pentagrama"
													d="M108.4,0H23.674V.01C16.958.265,10.965,5.476,8.4,13.35L0,48.637H108.4v-.01c6.715-.255,12.709-5.466,15.27-13.34L132.076,0Z"
													transform="translate(237.919 158.05) rotate(180)"
												/>
											</g>
											<path
												className="m-pentagrama"
												d="M49.708,0H48.645V.026C34.845.7,22.531,14.4,17.267,35.111L0,127.92H117.228v-.026c13.8-.671,26.114-14.375,31.377-35.085L165.873,0Z"
												transform="translate(347.187 127.92) rotate(180)"
											/>
											<text
												className="n-pentagrama"
												transform="translate(18.74 57.229)">
												<tspan
													x={
														selectedLanguage ===
														'es'
															? 2.171
															: 32.171
													}
													y={18}>
													{t('Nuestra historia ')}
												</tspan>
											</text>
										</g>
									</g>
									<g
										transform="translate(0 -3.79)"
										onClick={() => setStep(0)}>
										<g
											className="p-pentagrama"
											transform="matrix(1, 0, 0, 1, -30.81, -308.44)">
											<circle
												className="g-pentagrama"
												cx={18}
												cy={18}
												r={18}
												transform="translate(346 568.29)"
											/>
										</g>
										<text
											className="o-pentagrama"
											transform="translate(325.187 286.856)">
											<tspan x={0} y={0}>
												{'X'}
											</tspan>
										</text>
									</g>
								</g>
								<g
									transform="translate(228.315 343.523)"
									onClick={() => setStep(3)}>
									<image
										width={142.231}
										height={146.16}
										transform="translate(7.649) rotate(3)"
										xlinkHref="/images/mobile/ComponentTMP_0-image3.png"
									/>
								</g>
								<g
									transform="translate(36 340.862)"
									onClick={() => setStep(4)}>
									<image
										width={144.04}
										height={145.589}
										transform="matrix(0.999, 0.035, -0.035, 0.999, 5.081, 0)"
										xlinkHref="/images/mobile/ComponentTMP_0-image4.png"
									/>
								</g>
								<g
									transform="translate(123.941 407.523)"
									onClick={() => setStep(5)}>
									<image
										width={168.22}
										height={126.558}
										transform="matrix(1, 0.017, -0.017, 1, 2.209, 0)"
										xlinkHref="/images/mobile/ComponentTMP_0-image5.png"
									/>
								</g>
							</g>
						</svg>
					) : step === 3 ? (
						<svg viewBox="0 40 414 705.293">
							<defs>
								<style>
									{
										'.a-pentagrama,.f-pentagrama,.h-pentagrama{fill:#001f5f;}.b-pentagrama,.i-pentagrama,.n-pentagrama,.o-pentagrama{fill:#fff;}.c-pentagrama{clip-path:url(#c-pentagrama);}.d-pentagrama{opacity:0.65;}.e-pentagrama{fill:#e7002a;}.f-pentagrama,.i-pentagrama{font-size:16px;}.f-pentagrama{font-family:Silka-Bold, Silka;}.f-pentagrama,.h-pentagrama,.n-pentagrama,.o-pentagrama{font-weight:700;}.g-pentagrama{fill:#e40032;}.h-pentagrama,.n-pentagrama{font-size:18px;font-family:Kiona-Bold;}.i-pentagrama{font-family:Silka-Medium, Silka;font-weight:500;}.j-pentagrama{fill:url(#h-pentagrama);}.k-pentagrama{clip-path:url(#k-pentagrama);}.l-pentagrama{fill:none;stroke:#e40032;stroke-miterlimit:10;stroke-width:0.979px;}.m-pentagrama{fill:url(#l-pentagrama);}.o-pentagrama{font-size:24px;font-family:Helvetica-Bold, Helvetica;}.p-pentagrama{filter:url(#m-pentagrama);}.q-pentagrama{filter:url(#i-pentagrama);}.r-pentagrama{filter:url(#f-pentagrama);}.s-pentagrama{filter:url(#d-pentagrama);}.t-pentagrama{filter:url(#a-pentagrama);}'
									}
								</style>
								<filter
									id="a-pentagrama"
									x={21.813}
									y={591.181}
									width={365.187}
									height={145.92}
									filterUnits="userSpaceOnUse">
									<feOffset dy={3} />
									<feGaussianBlur
										stdDeviation={3}
										result="b"
									/>
									<feFlood floodOpacity={0.502} />
									<feComposite operator="in" in2="b" />
									<feComposite in="SourceGraphic" />
								</filter>
								<clipPath id="c-pentagrama">
									<rect
										className="a-pentagrama"
										width={163.429}
										height={74.83}
									/>
								</clipPath>
								<filter
									id="d-pentagrama"
									x={242.271}
									y={596.293}
									width={117.729}
									height={120.968}
									filterUnits="userSpaceOnUse">
									<feOffset dy={3} />
									<feGaussianBlur
										stdDeviation={3}
										result="e"
									/>
									<feFlood floodOpacity={0.502} />
									<feComposite operator="in" in2="e" />
									<feComposite in="SourceGraphic" />
								</filter>
								<filter
									id="f-pentagrama"
									x={223.381}
									y={630.921}
									width={72.113}
									height={89.34}
									filterUnits="userSpaceOnUse">
									<feOffset dy={3} />
									<feGaussianBlur
										stdDeviation={3}
										result="g"
									/>
									<feFlood floodOpacity={0.502} />
									<feComposite operator="in" in2="g" />
									<feComposite in="SourceGraphic" />
								</filter>
								<pattern
									id="h-pentagrama"
									width={1}
									height={1}
									viewBox="0 -0.061 148.114 122.757">
									<image
										preserveAspectRatio="none"
										width={148.114}
										height={122.757}
										xlinkHref="/images/mobile/ComponentTMP_0-image2.webp"
									/>
								</pattern>
								<filter
									id="i-pentagrama"
									x={12.943}
									y={591.181}
									width={374.057}
									height={145.92}
									filterUnits="userSpaceOnUse">
									<feOffset dy={3} />
									<feGaussianBlur
										stdDeviation={3}
										result="j"
									/>
									<feFlood floodOpacity={0.502} />
									<feComposite operator="in" in2="j" />
									<feComposite in="SourceGraphic" />
								</filter>
								<clipPath id="k-pentagrama">
									<g
										className="t-pentagrama"
										transform="matrix(1, 0, 0, 1, 0, 0)">
										<path
											className="a-pentagrama"
											d="M284.956,0H62.231V.026C44.578.7,28.824,14.4,22.09,35.111L0,127.92H284.956v-.026c17.653-.671,33.408-14.375,40.141-35.085L347.187,0Z"
											transform="translate(347.19 127.92) rotate(180)"
										/>
									</g>
								</clipPath>
								<pattern
									id="l-pentagrama"
									width={1}
									height={1}
									patternTransform="translate(333.342 255.839) rotate(-180)"
									viewBox="50 24.13 125.265 96.603">
									<image
										preserveAspectRatio="xMidYMid slice"
										width={191.671}
										height={127.92}
										xlinkHref="/images/mobile/image-4.jpg"
									/>
								</pattern>
								<filter
									id="m-pentagrama"
									x={344.5}
									y={567.793}
									width={39}
									height={39}
									filterUnits="userSpaceOnUse">
									<feOffset dy={1} />
									<feGaussianBlur
										stdDeviation={0.5}
										result="n"
									/>
									<feFlood floodOpacity={0.4} />
									<feComposite operator="in" in2="n" />
									<feComposite in="SourceGraphic" />
								</filter>
							</defs>
							<g transform="translate(0.572)">
								<rect
									className="b-pentagrama"
									width={413.428}
									height={894.293}
								/>
								<g
									className="c-pentagrama"
									transform="translate(-0.572)">
									<path
										className="a-pentagrama"
										d="M107.443,74.83H0V0H163.429V19.373c0,30.628-25.066,55.457-55.986,55.457"
									/>
								</g>
							</g>
							<g
								className="d-pentagrama"
								transform="translate(0 -1052.707)">
								<g
									className="s-pentagrama"
									transform="matrix(1, 0, 0, 1, 0, 892.71)">
									<path
										className="e-pentagrama"
										d="M45.96,102.908,97.722,85.791a1.2,1.2,0,0,0,.6-.439l20.073-27.934a1.2,1.2,0,0,0-.273-1.674l-3.9-2.8a1.2,1.2,0,0,0-1.674.274l-7.122,9.91L91.335,53l7.119-9.909a1.2,1.2,0,0,0-.274-1.674l-3.895-2.8a1.2,1.2,0,0,0-1.675.275L74.168,64.552a1.2,1.2,0,0,0,.273,1.675l3.9,2.8a1.2,1.2,0,0,0,1.674-.275l7.12-9.908,14.093,10.128-7.615,10.6L46.6,95.114,26.356,80.565,26.1,31.053l7.614-10.6L47.805,30.584l-7.12,9.907a1.2,1.2,0,0,0,.273,1.675l3.9,2.8a1.2,1.2,0,0,0,1.674-.275L64.972,19.03a1.2,1.2,0,0,0-.274-1.675l-3.9-2.8a1.2,1.2,0,0,0-1.674.274l-7.12,9.909L37.914,14.61,45.035,4.7a1.2,1.2,0,0,0-.275-1.674l-3.9-2.8A1.2,1.2,0,0,0,39.188.5L19.115,28.435a1.2,1.2,0,0,0-.225.706l.283,54.517a1.2,1.2,0,0,0,.5.968l25.21,18.117a1.2,1.2,0,0,0,1.077.165"
										transform="translate(232.38 602.29)"
									/>
								</g>
								<g
									className="r-pentagrama"
									transform="matrix(1, 0, 0, 1, 0, 892.71)">
									<path
										className="a-pentagrama"
										d="M52.8,76.989a5.445,5.445,0,0,0-5.952-1.515l.342-.342a5.6,5.6,0,0,0,.278-7.749,5.449,5.449,0,0,0-7.824-.121l.939-.939a5.6,5.6,0,0,0,.279-7.749,5.451,5.451,0,0,0-7.825-.121L47.4,44.094a5.6,5.6,0,0,0,.279-7.749,5.451,5.451,0,0,0-7.825-.12L18.083,57.992a33.216,33.216,0,0,0-1.1-12.478,5.124,5.124,0,0,0-7.569-2.98,5.306,5.306,0,0,0-2.222,6.028c2.579,9.332-2,19.137-5.612,27.565-1.74,4.052-3.722,12.364,4.16,20.246l4.639,4.639c10.546,10.546,24.285,1.336,26.572-.952l.894-.894L49.119,87.889l3.3-3.3a5.59,5.59,0,0,0,.385-7.6"
										transform="translate(232.38 602.29)"
									/>
								</g>
								<text
									className="f-pentagrama"
									transform="translate(71 1530)">
									<tspan x={0} y={15}>
										{t('Conoce más de ')}
									</tspan>
									<tspan x={0} y={33}>
										{t('Amarey dando clic ')}
									</tspan>
									<tspan x={0} y={51}>
										{t('en cada uno ')}
									</tspan>
								</text>
							</g>
							<path
								className="g-pentagrama"
								d="M37.093,124.41C48.487,90.449,65.14,61.567,85.812,40.133,110,15.048,138.139,1.788,167.169,1.788H282.007V0H167.169C137.5,0,108.815,13.483,84.214,38.991,63.261,60.717,46.411,90,34.933,124.41Z"
								transform="translate(131.993 619.882)"
							/>
							<text
								className="h-pentagrama"
								transform="translate(210 90.557)">
								<tspan
									x={
										selectedLanguage === 'es'
											? -102.024
											: -77.024
									}
									y={18}>
									{t('El origen de nuestra ')}
								</tspan>
								<tspan
									x={
										selectedLanguage === 'es'
											? -129.438
											: -103.438
									}
									y={37}>
									{t('historia es hoy la esencia ')}
								</tspan>
								<tspan
									x={
										selectedLanguage === 'es'
											? -87.678
											: -46.678
									}
									y={56}>
									{t('de nuestra marca')}
								</tspan>
							</text>
							<g
								transform="translate(184.884 568.571)"
								onClick={() => setSelectedImage('')}>
								<path
									className="a-pentagrama"
									d="M229.116,155.108V54.822H88.805C53.1,54.822,20.24,93.054,0,155.108Z"
									transform="translate(0 20.613)"
								/>
								<g transform="translate(118.116 115.959)">
									<path
										className="b-pentagrama"
										d="M0,0V19.012L16.462,9.505,8.6,4.965Z"
										transform="translate(16.462 19.012) rotate(180)"
									/>
									<text
										className="i-pentagrama"
										transform="translate(72.852 15.238)">
										<tspan x={-46.928} y={0}>
											{t('Volver')}
										</tspan>
									</text>
								</g>
							</g>
							<g transform="translate(20 -58) scale(0.9)">
								<g
									transform="translate(64.145 240.907)"
									onClick={() => setStep(1)}>
									<image
										width={144.8}
										height={125.545}
										transform="matrix(0.999, 0.035, -0.035, 0.999, 4.381, 0)"
										xlinkHref="/images/mobile/ComponentTMP_0-image.png"
									/>
								</g>
								<g
									transform="translate(207.677 247.877)"
									onClick={() => setStep(2)}>
									<rect
										className="j-pentagrama"
										width={148.114}
										height={122.757}
										transform="matrix(1, 0.017, -0.017, 1, 2.142, 0)"
									/>
								</g>
								<g
									transform="translate(21.943 364.245)"
									onClick={() => setStep(0)}>
									<image
										width={77.354}
										height={79.49}
										transform="translate(200.81) rotate(3)"
										xlinkHref="/images/mobile/ComponentTMP_0-image3.png"
									/>
									<g
										transform="translate(-21.943 -1256.952)"
										onClick={() =>
											(window.location.href =
												'/nuestros-aliados')
										}>
										<g transform="translate(30.813 1489.888)">
											<g
												className="q-pentagrama"
												transform="matrix(1, 0, 0, 1, -30.81, -597.18)">
												<path
													className="a-pentagrama"
													d="M292.236,0H63.821V.026C45.717.7,29.561,14.4,22.654,35.111L0,127.92H292.236v-.026c18.1-.671,34.261-14.375,41.167-35.085L356.057,0Z"
													transform="translate(378 725.1) rotate(180)"
												/>
											</g>
											<g
												className="k-pentagrama"
												transform="translate(0 0)">
												<path
													className="l-pentagrama"
													d="M108.4,0H23.674V.01C16.958.265,10.965,5.476,8.4,13.35L0,48.637H108.4v-.01c6.715-.255,12.709-5.466,15.27-13.34L132.076,0Z"
													transform="translate(237.919 158.05) rotate(180)"
												/>
											</g>
											<path
												className="m-pentagrama"
												d="M49.708,0H48.645V.026C34.845.7,22.531,14.4,17.267,35.111L0,127.92H117.228v-.026c13.8-.671,26.114-14.375,31.377-35.085L165.873,0Z"
												transform="translate(347.187 127.92) rotate(180)"
											/>
											<text
												className="n-pentagrama"
												transform="translate(12.74 56.229)">
												<tspan
													x={
														selectedLanguage ===
														'es'
															? 0.117
															: 20.117
													}
													y={18}>
													{t('Nuestros aliados ')}
												</tspan>
											</text>
										</g>
									</g>
									<g
										transform="translate(8.87 -55.808)"
										onClick={() => setStep(0)}>
										<g
											className="p-pentagrama"
											transform="matrix(1, 0, 0, 1, -30.81, -308.44)">
											<circle
												className="g-pentagrama"
												cx={18}
												cy={18}
												r={18}
												transform="translate(346 568.29)"
											/>
										</g>
										<text
											className="o-pentagrama"
											transform="translate(325.187 286.856)">
											<tspan x={0} y={0}>
												{'X'}
											</tspan>
										</text>
									</g>
								</g>
								<g
									transform="translate(36 340.862)"
									onClick={() => setStep(4)}>
									<image
										width={144.04}
										height={145.589}
										transform="matrix(0.999, 0.035, -0.035, 0.999, 5.081, 0)"
										xlinkHref="/images/mobile/ComponentTMP_0-image4.png"
									/>
								</g>
								<g
									transform="translate(123.941 407.523)"
									onClick={() => setStep(5)}>
									<image
										width={168.22}
										height={126.558}
										transform="matrix(1, 0.017, -0.017, 1, 2.209, 0)"
										xlinkHref="/images/mobile/ComponentTMP_0-image5.png"
									/>
								</g>
							</g>
						</svg>
					) : step === 4 ? (
						<svg viewBox="0 40 414 705.293">
							<defs>
								<style>
									{
										'.a-pentagrama,.f-pentagrama,.h-pentagrama{fill:#001f5f;}.b-pentagrama,.i-pentagrama,.n-pentagrama,.o-pentagrama{fill:#fff;}.c-pentagrama{clip-path:url(#c-pentagrama);}.d-pentagrama{opacity:0.65;}.e-pentagrama{fill:#e7002a;}.f-pentagrama,.i-pentagrama{font-size:16px;}.f-pentagrama{font-family:Silka-Bold, Silka;}.f-pentagrama,.h-pentagrama,.n-pentagrama,.o-pentagrama{font-weight:700;}.g-pentagrama{fill:#e40032;}.h-pentagrama,.n-pentagrama{font-size:18px;font-family:Kiona-Bold;}.i-pentagrama{font-family:Silka-Medium, Silka;font-weight:500;}.j-pentagrama{fill:url(#h-pentagrama);}.k-pentagrama{clip-path:url(#k-pentagrama);}.l-pentagrama{fill:none;stroke:#e40032;stroke-miterlimit:10;stroke-width:0.979px;}.m-pentagrama{fill:url(#l-pentagrama);}.o-pentagrama{font-size:24px;font-family:Helvetica-Bold, Helvetica;}.p-pentagrama{filter:url(#m-pentagrama);}.q-pentagrama{filter:url(#i-pentagrama);}.r-pentagrama{filter:url(#f-pentagrama);}.s-pentagrama{filter:url(#d-pentagrama);}.t-pentagrama{filter:url(#a-pentagrama);}'
									}
								</style>
								<filter
									id="a-pentagrama"
									x={21.812}
									y={591.181}
									width={365.187}
									height={145.92}
									filterUnits="userSpaceOnUse">
									<feOffset dy={3} />
									<feGaussianBlur
										stdDeviation={3}
										result="b"
									/>
									<feFlood floodOpacity={0.502} />
									<feComposite operator="in" in2="b" />
									<feComposite in="SourceGraphic" />
								</filter>
								<clipPath id="c-pentagrama">
									<rect
										className="a-pentagrama"
										width={163.429}
										height={74.83}
									/>
								</clipPath>
								<filter
									id="d-pentagrama"
									x={242.271}
									y={596.293}
									width={117.729}
									height={120.968}
									filterUnits="userSpaceOnUse">
									<feOffset dy={3} />
									<feGaussianBlur
										stdDeviation={3}
										result="e"
									/>
									<feFlood floodOpacity={0.502} />
									<feComposite operator="in" in2="e" />
									<feComposite in="SourceGraphic" />
								</filter>
								<filter
									id="f-pentagrama"
									x={223.381}
									y={630.921}
									width={72.113}
									height={89.34}
									filterUnits="userSpaceOnUse">
									<feOffset dy={3} />
									<feGaussianBlur
										stdDeviation={3}
										result="g"
									/>
									<feFlood floodOpacity={0.502} />
									<feComposite operator="in" in2="g" />
									<feComposite in="SourceGraphic" />
								</filter>
								<pattern
									id="h-pentagrama"
									width={1}
									height={1}
									viewBox="0 -0.061 148.114 122.757">
									<image
										preserveAspectRatio="none"
										width={148.114}
										height={122.757}
										xlinkHref="/images/mobile/ComponentTMP_0-image2.webp"
									/>
								</pattern>
								<filter
									id="i-pentagrama"
									x={21.812}
									y={591.181}
									width={365.187}
									height={145.92}
									filterUnits="userSpaceOnUse">
									<feOffset dy={3} />
									<feGaussianBlur
										stdDeviation={3}
										result="j"
									/>
									<feFlood floodOpacity={0.502} />
									<feComposite operator="in" in2="j" />
									<feComposite in="SourceGraphic" />
								</filter>
								<clipPath id="k-pentagrama">
									<g
										className="t-pentagrama"
										transform="matrix(1, 0, 0, 1, 0, 0)">
										<path
											className="a-pentagrama"
											d="M284.956,0H62.231V.026C44.578.7,28.824,14.4,22.09,35.111L0,127.92H284.956v-.026c17.653-.671,33.408-14.375,40.141-35.085L347.187,0Z"
											transform="translate(347.19 127.92) rotate(180)"
										/>
									</g>
								</clipPath>
								<pattern
									id="l-pentagrama"
									width={1}
									height={1}
									patternTransform="translate(500 255.839) rotate(-180)"
									viewBox="18.276 12.221 147.179 113.503">
									<image
										preserveAspectRatio="xMidYMid slice"
										width={191.879}
										height={127.92}
										xlinkHref="/images/mobile/image-5.jpg"
									/>
								</pattern>
								<filter
									id="m-pentagrama"
									x={344.5}
									y={567.793}
									width={39}
									height={39}
									filterUnits="userSpaceOnUse">
									<feOffset dy={1} />
									<feGaussianBlur
										stdDeviation={0.5}
										result="n"
									/>
									<feFlood floodOpacity={0.4} />
									<feComposite operator="in" in2="n" />
									<feComposite in="SourceGraphic" />
								</filter>
							</defs>
							<g transform="translate(0.572)">
								<rect
									className="b-pentagrama"
									width={413.428}
									height={894.293}
								/>
								<g
									className="c-pentagrama"
									transform="translate(-0.572)">
									<path
										className="a-pentagrama"
										d="M107.443,74.83H0V0H163.429V19.373c0,30.628-25.066,55.457-55.986,55.457"
									/>
								</g>
							</g>
							<g
								className="d-pentagrama"
								transform="translate(0 -1052.707)">
								<g
									className="s-pentagrama"
									transform="matrix(1, 0, 0, 1, 0, 892.71)">
									<path
										className="e-pentagrama"
										d="M45.96,102.908,97.722,85.791a1.2,1.2,0,0,0,.6-.439l20.073-27.934a1.2,1.2,0,0,0-.273-1.674l-3.9-2.8a1.2,1.2,0,0,0-1.674.274l-7.122,9.91L91.335,53l7.119-9.909a1.2,1.2,0,0,0-.274-1.674l-3.895-2.8a1.2,1.2,0,0,0-1.675.275L74.168,64.552a1.2,1.2,0,0,0,.273,1.675l3.9,2.8a1.2,1.2,0,0,0,1.674-.275l7.12-9.908,14.093,10.128-7.615,10.6L46.6,95.114,26.356,80.565,26.1,31.053l7.614-10.6L47.805,30.584l-7.12,9.907a1.2,1.2,0,0,0,.273,1.675l3.9,2.8a1.2,1.2,0,0,0,1.674-.275L64.972,19.03a1.2,1.2,0,0,0-.274-1.675l-3.9-2.8a1.2,1.2,0,0,0-1.674.274l-7.12,9.909L37.914,14.61,45.035,4.7a1.2,1.2,0,0,0-.275-1.674l-3.9-2.8A1.2,1.2,0,0,0,39.188.5L19.115,28.435a1.2,1.2,0,0,0-.225.706l.283,54.517a1.2,1.2,0,0,0,.5.968l25.21,18.117a1.2,1.2,0,0,0,1.077.165"
										transform="translate(232.38 602.29)"
									/>
								</g>
								<g
									className="r-pentagrama"
									transform="matrix(1, 0, 0, 1, 0, 892.71)">
									<path
										className="a-pentagrama"
										d="M52.8,76.989a5.445,5.445,0,0,0-5.952-1.515l.342-.342a5.6,5.6,0,0,0,.278-7.749,5.449,5.449,0,0,0-7.824-.121l.939-.939a5.6,5.6,0,0,0,.279-7.749,5.451,5.451,0,0,0-7.825-.121L47.4,44.094a5.6,5.6,0,0,0,.279-7.749,5.451,5.451,0,0,0-7.825-.12L18.083,57.992a33.216,33.216,0,0,0-1.1-12.478,5.124,5.124,0,0,0-7.569-2.98,5.306,5.306,0,0,0-2.222,6.028c2.579,9.332-2,19.137-5.612,27.565-1.74,4.052-3.722,12.364,4.16,20.246l4.639,4.639c10.546,10.546,24.285,1.336,26.572-.952l.894-.894L49.119,87.889l3.3-3.3a5.59,5.59,0,0,0,.385-7.6"
										transform="translate(232.38 602.29)"
									/>
								</g>
								<text
									className="f-pentagrama"
									transform="translate(71 1530)">
									<tspan x={0} y={15}>
										{t('Conoce más de ')}
									</tspan>
									<tspan x={0} y={33}>
										{t('Amarey dando clic ')}
									</tspan>
									<tspan x={0} y={51}>
										{t('en cada uno ')}
									</tspan>
								</text>
							</g>
							<path
								className="g-pentagrama"
								d="M37.093,124.41C48.487,90.449,65.14,61.567,85.812,40.133,110,15.048,138.139,1.788,167.169,1.788H282.007V0H167.169C137.5,0,108.815,13.483,84.214,38.991,63.261,60.717,46.411,90,34.933,124.41Z"
								transform="translate(131.993 619.882)"
							/>
							<text
								className="h-pentagrama"
								transform="translate(210 90.557)">
								<tspan
									x={
										selectedLanguage === 'es'
											? -102.024
											: -77.024
									}
									y={18}>
									{t('El origen de nuestra ')}
								</tspan>
								<tspan
									x={
										selectedLanguage === 'es'
											? -129.438
											: -103.438
									}
									y={37}>
									{t('historia es hoy la esencia ')}
								</tspan>
								<tspan
									x={
										selectedLanguage === 'es'
											? -87.678
											: -46.678
									}
									y={56}>
									{t('de nuestra marca')}
								</tspan>
							</text>
							<g
								transform="translate(184.884 568.571)"
								onClick={() => setSelectedImage('')}>
								<path
									className="a-pentagrama"
									d="M229.116,155.108V54.822H88.805C53.1,54.822,20.24,93.054,0,155.108Z"
									transform="translate(0 20.613)"
								/>
								<g transform="translate(118.116 115.959)">
									<path
										className="b-pentagrama"
										d="M0,0V19.012L16.462,9.505,8.6,4.965Z"
										transform="translate(16.462 19.012) rotate(180)"
									/>
									<text
										className="i-pentagrama"
										transform="translate(72.852 15.238)">
										<tspan x={-46.928} y={0}>
											{t('Volver')}
										</tspan>
									</text>
								</g>
							</g>
							<g transform="translate(20 -58) scale(0.9)">
								<g
									transform="translate(64.145 240.907)"
									onClick={() => setStep(1)}>
									<image
										width={144.8}
										height={125.545}
										transform="matrix(0.999, 0.035, -0.035, 0.999, 4.381, 0)"
										xlinkHref="/images/mobile/ComponentTMP_0-image.png"
									/>
								</g>
								<g
									transform="translate(207.677 247.877)"
									onClick={() => setStep(2)}>
									<rect
										className="j-pentagrama"
										width={148.114}
										height={122.757}
										transform="matrix(1, 0.017, -0.017, 1, 2.142, 0)"
									/>
								</g>
								<g
									transform="translate(228.315 343.523)"
									onClick={() => setStep(3)}>
									<image
										width={142.231}
										height={146.16}
										transform="translate(7.649) rotate(3)"
										xlinkHref="/images/mobile/ComponentTMP_0-image3.png"
									/>
								</g>
								<g
									transform="translate(30.812 362.798)"
									onClick={() => setStep(0)}>
									<image
										width={78.338}
										height={79.18}
										transform="matrix(0.999, 0.035, -0.035, 0.999, 85.951, 0)"
										xlinkHref="/images/mobile/ComponentTMP_0-image4.png"
									/>
									<g
										transform="translate(-30.813 -1255.505)"
										onClick={() =>
											(window.location.href =
												'/filosofia')
										}>
										<g transform="translate(30.813 1489.888)">
											<g
												className="q-pentagrama"
												transform="matrix(1, 0, 0, 1, -30.81, -597.18)">
												<path
													className="a-pentagrama"
													d="M284.956,0H62.231V.026C44.578.7,28.824,14.4,22.09,35.111L0,127.92H284.956v-.026c17.653-.671,33.408-14.375,40.141-35.085L347.187,0Z"
													transform="translate(378 725.1) rotate(180)"
												/>
											</g>
											<g
												className="k-pentagrama"
												transform="translate(0 0)">
												<path
													className="l-pentagrama"
													d="M108.4,0H23.674V.01C16.958.265,10.965,5.476,8.4,13.35L0,48.637H108.4v-.01c6.715-.255,12.709-5.466,15.27-13.34L132.076,0Z"
													transform="translate(237.919 158.05) rotate(180)"
												/>
											</g>
											<path
												className="m-pentagrama"
												d="M49.708,0H48.645V.026C34.845.7,22.531,14.4,17.267,35.111L0,127.92H117.228v-.026c13.8-.671,26.114-14.375,31.377-35.085L165.873,0Z"
												transform="translate(347.187 127.92) rotate(180)"
											/>
											<text
												className="n-pentagrama"
												transform="translate(23.74 56.229)">
												<tspan
													x={
														selectedLanguage ===
														'es'
															? 35.3
															: 25
													}
													y={18}>
													{t('Filosofía ')}
												</tspan>
											</text>
										</g>
									</g>
									<g
										transform="translate(0 -54.361)"
										onClick={() => setStep(0)}>
										<g
											className="p-pentagrama"
											transform="matrix(1, 0, 0, 1, -30.81, -308.44)">
											<circle
												className="g-pentagrama"
												cx={18}
												cy={18}
												r={18}
												transform="translate(346 568.29)"
											/>
										</g>
										<text
											className="o-pentagrama"
											transform="translate(325.187 286.856)">
											<tspan x={0} y={0}>
												{'X'}
											</tspan>
										</text>
									</g>
								</g>
								<g transform="translate(123.941 407.523)">
									<image
										width={168.22}
										height={126.558}
										transform="matrix(1, 0.017, -0.017, 1, 2.209, 0)"
										xlinkHref="/images/mobile/ComponentTMP_0-image5.png"
									/>
								</g>
							</g>
						</svg>
					) : step === 5 ? (
						<svg viewBox="0 40 414 705.293">
							<defs>
								<style>
									{
										'.a-pentagrama,.f-pentagrama,.h-pentagrama{fill:#001f5f;}.b-pentagrama,.i-pentagrama,.n-pentagrama,.o-pentagrama{fill:#fff;}.c-pentagrama{clip-path:url(#c-pentagrama);}.d-pentagrama{opacity:0.65;}.e-pentagrama{fill:#e7002a;}.f-pentagrama,.i-pentagrama{font-size:16px;}.f-pentagrama{font-family:Silka-Bold, Silka;}.f-pentagrama,.h-pentagrama,.n-pentagrama,.o-pentagrama{font-weight:700;}.g-pentagrama{fill:#e40032;}.h-pentagrama,.n-pentagrama{font-size:18px;font-family:Kiona-Bold;}.i-pentagrama{font-family:Silka-Medium, Silka;font-weight:500;}.j-pentagrama{fill:url(#h-pentagrama);}.k-pentagrama{clip-path:url(#k-pentagrama);}.l-pentagrama{fill:none;stroke:#e40032;stroke-miterlimit:10;stroke-width:0.979px;}.m-pentagrama{fill:url(#l-pentagrama);}.o-pentagrama{font-size:24px;font-family:Helvetica-Bold, Helvetica;}.p-pentagrama{filter:url(#m-pentagrama);}.q-pentagrama{filter:url(#i-pentagrama);}.r-pentagrama{filter:url(#f-pentagrama);}.s-pentagrama{filter:url(#d-pentagrama);}.t-pentagrama{filter:url(#a-pentagrama);}'
									}
								</style>
								<filter
									id="a-pentagrama"
									x={21.813}
									y={591.181}
									width={365.187}
									height={145.92}
									filterUnits="userSpaceOnUse">
									<feOffset dy={3} />
									<feGaussianBlur
										stdDeviation={3}
										result="b"
									/>
									<feFlood floodOpacity={0.502} />
									<feComposite operator="in" in2="b" />
									<feComposite in="SourceGraphic" />
								</filter>
								<clipPath id="c-pentagrama">
									<rect
										className="a-pentagrama"
										width={163.429}
										height={74.83}
									/>
								</clipPath>
								<filter
									id="d-pentagrama"
									x={242.271}
									y={596.293}
									width={117.729}
									height={120.968}
									filterUnits="userSpaceOnUse">
									<feOffset dy={3} />
									<feGaussianBlur
										stdDeviation={3}
										result="e"
									/>
									<feFlood floodOpacity={0.502} />
									<feComposite operator="in" in2="e" />
									<feComposite in="SourceGraphic" />
								</filter>
								<filter
									id="f-pentagrama"
									x={223.381}
									y={630.921}
									width={72.113}
									height={89.34}
									filterUnits="userSpaceOnUse">
									<feOffset dy={3} />
									<feGaussianBlur
										stdDeviation={3}
										result="g"
									/>
									<feFlood floodOpacity={0.502} />
									<feComposite operator="in" in2="g" />
									<feComposite in="SourceGraphic" />
								</filter>
								<pattern
									id="h-pentagrama"
									width={1}
									height={1}
									viewBox="0 -0.061 148.114 122.757">
									<image
										preserveAspectRatio="none"
										width={148.114}
										height={122.757}
										xlinkHref="/images/mobile/ComponentTMP_0-image2.webp"
									/>
								</pattern>
								<filter
									id="i-pentagrama"
									x={21.813}
									y={591.181}
									width={365.187}
									height={145.92}
									filterUnits="userSpaceOnUse">
									<feOffset dy={3} />
									<feGaussianBlur
										stdDeviation={3}
										result="j"
									/>
									<feFlood floodOpacity={0.502} />
									<feComposite operator="in" in2="j" />
									<feComposite in="SourceGraphic" />
								</filter>
								<clipPath id="k-pentagrama">
									<g
										className="t-pentagrama"
										transform="matrix(1, 0, 0, 1, 0, 0)">
										<path
											className="a-pentagrama"
											d="M284.956,0H62.231V.026C44.578.7,28.824,14.4,22.09,35.111L0,127.92H284.956v-.026c17.653-.671,33.408-14.375,40.141-35.085L347.187,0Z"
											transform="translate(347.19 127.92) rotate(180)"
										/>
									</g>
								</clipPath>
								<pattern
									id="l-pentagrama"
									width={1}
									height={1}
									patternTransform="translate(500 255.839) rotate(-180)"
									viewBox="29.441 12.384 112.718 86.927">
									<image
										preserveAspectRatio="xMidYMid slice"
										width={191.879}
										height={127.92}
										xlinkHref="/images/mobile/rse.jpg"
									/>
								</pattern>
								<filter
									id="m-pentagrama"
									x={344.5}
									y={567.793}
									width={39}
									height={39}
									filterUnits="userSpaceOnUse">
									<feOffset dy={1} />
									<feGaussianBlur
										stdDeviation={0.5}
										result="n"
									/>
									<feFlood floodOpacity={0.4} />
									<feComposite operator="in" in2="n" />
									<feComposite in="SourceGraphic" />
								</filter>
							</defs>
							<g transform="translate(0.572)">
								<rect
									className="b-pentagrama"
									width={413.428}
									height={894.293}
								/>
								<g
									className="c-pentagrama"
									transform="translate(-0.572)">
									<path
										className="a-pentagrama"
										d="M107.443,74.83H0V0H163.429V19.373c0,30.628-25.066,55.457-55.986,55.457"
									/>
								</g>
							</g>
							<g
								className="d-pentagrama"
								transform="translate(0 -1052.707)">
								<g
									className="s-pentagrama"
									transform="matrix(1, 0, 0, 1, 0, 892.71)">
									<path
										className="e-pentagrama"
										d="M45.96,102.908,97.722,85.791a1.2,1.2,0,0,0,.6-.439l20.073-27.934a1.2,1.2,0,0,0-.273-1.674l-3.9-2.8a1.2,1.2,0,0,0-1.674.274l-7.122,9.91L91.335,53l7.119-9.909a1.2,1.2,0,0,0-.274-1.674l-3.895-2.8a1.2,1.2,0,0,0-1.675.275L74.168,64.552a1.2,1.2,0,0,0,.273,1.675l3.9,2.8a1.2,1.2,0,0,0,1.674-.275l7.12-9.908,14.093,10.128-7.615,10.6L46.6,95.114,26.356,80.565,26.1,31.053l7.614-10.6L47.805,30.584l-7.12,9.907a1.2,1.2,0,0,0,.273,1.675l3.9,2.8a1.2,1.2,0,0,0,1.674-.275L64.972,19.03a1.2,1.2,0,0,0-.274-1.675l-3.9-2.8a1.2,1.2,0,0,0-1.674.274l-7.12,9.909L37.914,14.61,45.035,4.7a1.2,1.2,0,0,0-.275-1.674l-3.9-2.8A1.2,1.2,0,0,0,39.188.5L19.115,28.435a1.2,1.2,0,0,0-.225.706l.283,54.517a1.2,1.2,0,0,0,.5.968l25.21,18.117a1.2,1.2,0,0,0,1.077.165"
										transform="translate(232.38 602.29)"
									/>
								</g>
								<g
									className="r-pentagrama"
									transform="matrix(1, 0, 0, 1, 0, 892.71)">
									<path
										className="a-pentagrama"
										d="M52.8,76.989a5.445,5.445,0,0,0-5.952-1.515l.342-.342a5.6,5.6,0,0,0,.278-7.749,5.449,5.449,0,0,0-7.824-.121l.939-.939a5.6,5.6,0,0,0,.279-7.749,5.451,5.451,0,0,0-7.825-.121L47.4,44.094a5.6,5.6,0,0,0,.279-7.749,5.451,5.451,0,0,0-7.825-.12L18.083,57.992a33.216,33.216,0,0,0-1.1-12.478,5.124,5.124,0,0,0-7.569-2.98,5.306,5.306,0,0,0-2.222,6.028c2.579,9.332-2,19.137-5.612,27.565-1.74,4.052-3.722,12.364,4.16,20.246l4.639,4.639c10.546,10.546,24.285,1.336,26.572-.952l.894-.894L49.119,87.889l3.3-3.3a5.59,5.59,0,0,0,.385-7.6"
										transform="translate(232.38 602.29)"
									/>
								</g>
								<text
									className="f-pentagrama"
									transform="translate(71 1530)">
									<tspan x={0} y={15}>
										{t('Conoce más de ')}
									</tspan>
									<tspan x={0} y={33}>
										{t('Amarey dando clic ')}
									</tspan>
									<tspan x={0} y={51}>
										{t('en cada uno ')}
									</tspan>
								</text>
							</g>
							<path
								className="g-pentagrama"
								d="M37.093,124.41C48.487,90.449,65.14,61.567,85.812,40.133,110,15.048,138.139,1.788,167.169,1.788H282.007V0H167.169C137.5,0,108.815,13.483,84.214,38.991,63.261,60.717,46.411,90,34.933,124.41Z"
								transform="translate(131.993 619.882)"
							/>
							<text
								className="h-pentagrama"
								transform="translate(210 90.557)">
								<tspan
									x={
										selectedLanguage === 'es'
											? -102.024
											: -77.024
									}
									y={18}>
									{t('El origen de nuestra ')}
								</tspan>
								<tspan
									x={
										selectedLanguage === 'es'
											? -129.438
											: -103.438
									}
									y={37}>
									{t('historia es hoy la esencia ')}
								</tspan>
								<tspan
									x={
										selectedLanguage === 'es'
											? -87.678
											: -46.678
									}
									y={56}>
									{t('de nuestra marca')}
								</tspan>
							</text>
							<g
								transform="translate(184.884 568.571)"
								onClick={() => setSelectedImage('')}>
								<path
									className="a-pentagrama"
									d="M229.116,155.108V54.822H88.805C53.1,54.822,20.24,93.054,0,155.108Z"
									transform="translate(0 20.613)"
								/>
								<g transform="translate(118.116 115.959)">
									<path
										className="b-pentagrama"
										d="M0,0V19.012L16.462,9.505,8.6,4.965Z"
										transform="translate(16.462 19.012) rotate(180)"
									/>
									<text
										className="i-pentagrama"
										transform="translate(72.852 15.238)">
										<tspan x={-46.928} y={0}>
											{t('Volver')}
										</tspan>
									</text>
								</g>
							</g>
							<g transform="translate(20 -58) scale(0.9)">
								<g
									transform="translate(64.145 240.907)"
									onClick={() => setStep(1)}>
									<image
										width={144.8}
										height={125.545}
										transform="matrix(0.999, 0.035, -0.035, 0.999, 4.381, 0)"
										xlinkHref="/images/mobile/ComponentTMP_0-image.png"
									/>
								</g>
								<g
									transform="translate(207.677 247.877)"
									onClick={() => setStep(2)}>
									<rect
										className="j-pentagrama"
										width={148.114}
										height={122.757}
										transform="matrix(1, 0.017, -0.017, 1, 2.142, 0)"
									/>
								</g>
								<g
									transform="translate(228.315 343.523)"
									onClick={() => setStep(3)}>
									<image
										width={142.231}
										height={146.16}
										transform="translate(7.649) rotate(3)"
										xlinkHref="/images/mobile/ComponentTMP_0-image3.png"
									/>
								</g>
								<g
									transform="translate(36 340.862)"
									onClick={() => setStep(4)}>
									<image
										width={144.04}
										height={145.589}
										transform="matrix(0.999, 0.035, -0.035, 0.999, 5.081, 0)"
										xlinkHref="/images/mobile/ComponentTMP_0-image4.png"
									/>
								</g>
								<g
									transform="translate(30.813 399.052)"
									onClick={() => setStep(0)}>
									<image
										width={91.488}
										height={68.83}
										transform="matrix(1, 0.017, -0.017, 1, 132.216, 0)"
										xlinkHref="/images/mobile/ComponentTMP_0-image5.png"
									/>
									<g
										transform="translate(-30.813 -1291.76)"
										onClick={() =>
											(window.location.href =
												'/responsabilidad')
										}>
										<g transform="translate(30.813 1489.888)">
											<g
												className="q-pentagrama"
												transform="matrix(1, 0, 0, 1, -30.81, -597.18)">
												<path
													className="a-pentagrama"
													d="M284.956,0H62.231V.026C44.578.7,28.824,14.4,22.09,35.111L0,127.92H284.956v-.026c17.653-.671,33.408-14.375,40.141-35.085L347.187,0Z"
													transform="translate(378 725.1) rotate(180)"
												/>
											</g>
											<g
												className="k-pentagrama"
												transform="translate(0 0)">
												<path
													className="l-pentagrama"
													d="M108.4,0H23.674V.01C16.958.265,10.965,5.476,8.4,13.35L0,48.637H108.4v-.01c6.715-.255,12.709-5.466,15.27-13.34L132.076,0Z"
													transform="translate(237.919 158.05) rotate(180)"
												/>
											</g>
											<path
												className="m-pentagrama"
												d="M49.708,0H48.645V.026C34.845.7,22.531,14.4,17.267,35.111L0,127.92H117.228v-.026c13.8-.671,26.114-14.375,31.377-35.085L165.873,0Z"
												transform="translate(347.187 127.92) rotate(180)"
											/>
											<text
												className="n-pentagrama"
												transform="translate(27.74 56.229)">
												<tspan x={64.685} y={18}>
													{t('RSE')}
												</tspan>
											</text>
										</g>
									</g>
									<g
										transform="translate(0 -90.616)"
										onClick={() => setStep(0)}>
										<g
											className="p-pentagrama"
											transform="matrix(1, 0, 0, 1, -30.81, -308.44)">
											<circle
												className="g-pentagrama"
												cx={18}
												cy={18}
												r={18}
												transform="translate(346 568.29)"
											/>
										</g>
										<text
											className="o-pentagrama"
											transform="translate(325.187 286.856)">
											<tspan x={0} y={0}>
												{'X'}
											</tspan>
										</text>
									</g>
								</g>
							</g>
						</svg>
					) : (
						<React.Fragment></React.Fragment>
					)}
				</React.Fragment>
			)}
			<div
				className="fixed h-screen w-screen top-0 left-0 z-[100] bg-[#e6e6e6]"
				style={{ display: showPopup ? 'flex' : 'none' }}>
				<video
					src={
						selectedLanguage === 'es' && showPopup
							? 'https://grupoamarey.com/pdf/video/Origen pentamero_1.mp4'
							: selectedLanguage === 'en' && showPopup
							? 'https://grupoamarey.com/videos/videos_inlges/Pentamero_ingles.mp4'
							: ''
					}
					controls
					className="w-full h-full"
					id="video-1"
					playsInline></video>

				<span
					className="absolute top-[5%] right-[5%] text-white text-[30px] text-center font-bold bg-[#00000050] w-[50px] h-[50px] rounded-[100%]"
					onClick={() => {
						setShowPopup(false)
						const video: HTMLVideoElement = document.getElementById(
							'video-1'
						) as HTMLVideoElement

						if (video) {
							video.currentTime = 0
							video.pause()
						}
					}}>
					X
				</span>
				{/* <img
					src={mute ? '/images/mute.png' : '/images/Button.png'}
					className="absolute w-[10%] left-[8%] bottom-[10px]"
					alt="Mute"
					onClick={() => setMute(!mute)}
				/> */}
			</div>
		</React.Fragment>
	)
}
