import { Carousel } from 'flowbite-react'
import React from 'react'
import './Servcios.css'
import { useTranslation } from 'react-i18next'
import { useLanguage } from 'context/language'

export const ServiciosMovil: React.FC = () => {
	const [open4Tag, setOpen4Tag] = React.useState<boolean>(true)
	const [open2Tag, setOpen2Tag] = React.useState<boolean>(true)
	const [changeTo2, setChangeTo2] = React.useState<boolean>(false)
	const [doHover, setDoHover] = React.useState<boolean>(true)
	const [openVideo, setOpenVideo] = React.useState(false)

	const {t} = useTranslation()

	const handleChangeSlide = () => {
		setChangeTo2(true)
		const carousel: any = document.querySelector('.next-button')
		carousel!.click()
	}

	const { selectedLanguage } = useLanguage();

	React.useEffect(() => {
		if (changeTo2)
			setTimeout(() => {
				setDoHover(true)
			}, 2000)
	}, [changeTo2])

	return (
		<div style={{ height: '896px' }}>
			<Carousel
				slide={false}
				rightControl={<button className="next-button"></button>}>
				<svg
					viewBox="0 0 414 896"
					width="100%"
					height="100%"
					preserveAspectRatio="none">
					<defs>
						<style>
							{
								".a-servicios-1-mobile{fill:none;}.b-servicios-1-mobile,.h-servicios-1-mobile{fill:#fff;}.c-servicios-1-mobile,.e-servicios-1-mobile,.f-servicios-1-mobile,.g-servicios-1-mobile{fill:#001f5f;}.d-servicios-1-mobile{clip-path:url(#a-servicios-1-mobile);}.e-servicios-1-mobile{font-size:14px;font-family:Silka-Regular, Silka;}.f-servicios-1-mobile{font-size:16px;font-family:Silka-Bold, Silka;}.f-servicios-1-mobile,.g-servicios-1-mobile,.h-servicios-1-mobile{font-weight:700;}.g-servicios-1-mobile{font-size:55px;}.g-servicios-1-mobile,.h-servicios-1-mobile{font-family:'Kiona-Bold';}.h-servicios-1-mobile{font-size:18px;}.i-servicios-1-mobile{clip-path:url(#d-servicios-1-mobile);}.j-servicios-1-mobile{fill:#e40032;}.k-servicios-1-mobile{clip-path:url(#e-servicios-1-mobile);}.l-servicios-1-mobile{fill:#e7002a;}.m-servicios-1-mobile{mix-blend-mode:multiply;isolation:isolate;}.n-servicios-1-mobile{fill:#d6d6d6;}.o-servicios-1-mobile{fill:#eeebeb;}.p-servicios-1-mobile{filter:url(#b-servicios-1-mobile);}"
							}
						</style>
						<clipPath id="a-servicios-1-mobile">
							<rect
								className="c-servicios-1-mobile"
								width={175}
								height={80.893}
							/>
						</clipPath>
						<filter
							id="b-servicios-1-mobile"
							x={83}
							y={620.007}
							width={248}
							height={61.168}
							filterUnits="userSpaceOnUse">
							<feOffset dy={3} />
							<feGaussianBlur stdDeviation={3} result="c" />
							<feFlood floodOpacity={0.4} />
							<feComposite operator="in" in2="c" />
							<feComposite in="SourceGraphic" />
						</filter>
						<clipPath id="d-servicios-1-mobile">
							<rect
								className="b-servicios-1-mobile"
								width={176}
								height={257}
								transform="translate(0)"
							/>
						</clipPath>
						<clipPath id="e-servicios-1-mobile">
							<rect
								className="a-servicios-1-mobile"
								width={1773.958}
								height={802}
							/>
						</clipPath>
					</defs>
					<rect
						className="b-servicios-1-mobile"
						width={414}
						height={896}
					/>
					<g className="d-servicios-1-mobile">
						<path
							className="c-servicios-1-mobile"
							d="M115.05,80.893H0V0H175V20.943a59.95,59.95,0,0,1-59.95,59.95"
						/>
					</g>
					<text
						className="e-servicios-1-mobile"
						transform="translate(210 380.681)">
						<tspan x={selectedLanguage === 'es' ? -143.542 : -163.542} y={13}>
							{t('El servicio es uno de los pilares del Grupo ')}
						</tspan>
						<tspan x={selectedLanguage === 'es' ? -151.844 : -175.844} y={29}>
							{t('Amarey, una misión que se ha convertido en ')}
						</tspan>
						<tspan x={selectedLanguage === 'es' ? -149.541 : -160.541} y={45}>
							{t('la vocación de la compañía para cumplir el ')}
						</tspan>
						<tspan x={selectedLanguage === 'es' ? -147.826 : -160.826} y={61}>
							{t('compromiso de ser un actor determinante ')}
						</tspan>
						<tspan x={-122.507} y={77}>
							{t('en la labor de cuidar y salvar vidas.')}
						</tspan>
					</text>
					<text
						className="f-servicios-1-mobile"
						transform="translate(210 509.681)">
						<tspan x={selectedLanguage === 'es' ? -117.296 : -100.296} y={15}>
							{t('Grupo Amarey, la cadena que ')}
						</tspan>
						<tspan x={selectedLanguage === 'es' ? -46.16 : -63.16} y={33}>
							{t('salva vidas. ')}
						</tspan>
					</text>
					<text
						className="g-servicios-1-mobile"
						transform="translate(210 300.076)">
						<tspan x={selectedLanguage === 'es' ? -125.263 : -115.263} y={55}>
							{t('Servicio')}
						</tspan>
					</text>
					<g transform="translate(92 626.007)" onClick={handleChangeSlide}>
						<g
							className="p-servicios-1-mobile"
							transform="matrix(1, 0, 0, 1, -92, -626.01)">
							<path
								className="c-servicios-1-mobile"
								d="M230,0H47.176C28.161,0,11.086,12.6,4.142,31.746L0,43.169H181.308c20.259,0,38.4-13.581,45.534-34.092Z"
								transform="translate(92 626.01)"
							/>
						</g>
						<text
							className="h-servicios-1-mobile"
							transform="translate(55.5 28.584)"
							onClick={handleChangeSlide}>
							<tspan x={0} y={0}>
								{t('Conoce Más')}
							</tspan>
						</text>
					</g>
					<g
						className="i-servicios-1-mobile"
						transform="translate(238)">
						<path
							className="j-servicios-1-mobile"
							d="M170.7,184.238l40.47,55.087a1.534,1.534,0,0,1,.287.885l.23,43.126a1.511,1.511,0,0,1-1.5,1.512l-6.018.029a1.5,1.5,0,0,1-1.512-1.494l-.08-15.295-21.756.109.08,15.3a1.5,1.5,0,0,1-1.5,1.512l-6.018.029a1.494,1.494,0,0,1-1.506-1.494l-.207-39.62a1.5,1.5,0,0,1,1.494-1.512l6.018-.035a1.511,1.511,0,0,1,1.512,1.5l.081,15.295,21.756-.109-.086-16.364L165.7,192.671l-31.262.161L98.211,243.246l.08,16.358,21.761-.115-.08-15.295a1.5,1.5,0,0,1,1.494-1.512l6.018-.034a1.5,1.5,0,0,1,1.512,1.5l.207,39.62a1.506,1.506,0,0,1-1.494,1.512l-6.018.029a1.5,1.5,0,0,1-1.512-1.494l-.08-15.3-21.756.115.08,15.3a1.511,1.511,0,0,1-1.5,1.512l-6.018.029a1.506,1.506,0,0,1-1.512-1.495l-.224-43.126a1.5,1.5,0,0,1,.282-.885l39.89-55.513a1.519,1.519,0,0,1,1.213-.626l38.924-.2a1.5,1.5,0,0,1,1.219.615M108.022,139.2,42.9,118.42a1.456,1.456,0,0,0-.925.006L1.032,131.962a1.506,1.506,0,0,0-.954,1.9l1.885,5.713a1.5,1.5,0,0,0,1.9.954l14.519-4.8,6.834,20.658-14.525,4.8a1.506,1.506,0,0,0-.954,1.9l1.885,5.713a1.51,1.51,0,0,0,1.9.954l37.619-12.438a1.5,1.5,0,0,0,.954-1.9l-1.885-5.713a1.51,1.51,0,0,0-1.9-.954l-14.525,4.805L26.96,132.9l15.531-5.139,59.139,18.876,4.831,14.611,4.981,15.065L75.219,226.726l-15.536,5.133L52.854,211.2l14.525-4.8a1.506,1.506,0,0,0,.954-1.9l-1.891-5.713a1.5,1.5,0,0,0-1.9-.954L26.926,210.27a1.506,1.506,0,0,0-.954,1.9l1.885,5.713a1.506,1.506,0,0,0,1.9.954l14.525-4.805,6.834,20.658L36.594,239.5a1.5,1.5,0,0,0-.96,1.9l1.891,5.713a1.506,1.506,0,0,0,1.9.954l40.942-13.542a1.506,1.506,0,0,0,.753-.552l39.884-55.507a1.49,1.49,0,0,0,.207-1.351l-12.22-36.953a1.507,1.507,0,0,0-.971-.966m80.3-10.174,64.9-21.462a1.491,1.491,0,0,0,.747-.552l25.17-35.022a1.507,1.507,0,0,0-.345-2.1L273.9,66.379a1.5,1.5,0,0,0-2.1.345l-8.932,12.421-17.669-12.7,8.926-12.421a1.5,1.5,0,0,0-.339-2.1l-4.886-3.512a1.5,1.5,0,0,0-2.1.345L223.686,80.933a1.507,1.507,0,0,0,.339,2.1l4.891,3.512a1.507,1.507,0,0,0,2.1-.345l8.926-12.421,17.669,12.7-9.547,13.283-58.938,19.491L163.736,101.01l-.322-62.077,9.547-13.283,17.669,12.7L181.7,50.768a1.5,1.5,0,0,0,.345,2.1l4.886,3.512a1.5,1.5,0,0,0,2.1-.345l23.124-32.176a1.5,1.5,0,0,0-.345-2.1l-4.886-3.512a1.507,1.507,0,0,0-2.1.345l-8.932,12.421L178.232,18.322l8.926-12.427a1.506,1.506,0,0,0-.345-2.1L181.928.285a1.5,1.5,0,0,0-2.1.345L154.66,35.651a1.529,1.529,0,0,0-.282.885l.356,68.353a1.5,1.5,0,0,0,.626,1.213l31.607,22.715a1.508,1.508,0,0,0,1.351.207M297.6,138.037l1.828-5.736a1.506,1.506,0,0,0-.977-1.891L257.368,117.3a1.515,1.515,0,0,0-.931.006l-64.9,21.462a1.486,1.486,0,0,0-.96.971l-11.835,37.079a1.5,1.5,0,0,0,.218,1.345l40.465,55.093a1.535,1.535,0,0,0,.759.54l41.08,13.117a1.5,1.5,0,0,0,1.891-.977l1.828-5.731a1.493,1.493,0,0,0-.971-1.891l-14.576-4.656,6.616-20.727,14.577,4.65a1.507,1.507,0,0,0,1.891-.971l1.828-5.736a1.506,1.506,0,0,0-.977-1.891l-37.746-12.047a1.5,1.5,0,0,0-1.885.977l-1.834,5.736a1.5,1.5,0,0,0,.977,1.885l14.571,4.656-6.61,20.727-15.588-4.972L188.5,175.91l9.507-29.779,58.938-19.491,15.582,4.978-6.61,20.727-14.576-4.656a1.513,1.513,0,0,0-1.891.977l-1.828,5.736a1.5,1.5,0,0,0,.977,1.885l37.74,12.047a1.5,1.5,0,0,0,1.891-.971l1.833-5.736a1.51,1.51,0,0,0-.977-1.891l-14.577-4.65,6.616-20.727,14.576,4.656a1.513,1.513,0,0,0,1.891-.977M112.6,129.151l31.337-23.083a1.514,1.514,0,0,0,.615-1.224L144.1,36.491a1.483,1.483,0,0,0-.293-.879L118.23.889a1.5,1.5,0,0,0-2.1-.322l-4.845,3.569a1.505,1.505,0,0,0-.316,2.1l9.076,12.318-17.519,12.9L93.446,19.144a1.5,1.5,0,0,0-2.1-.316L86.5,22.4a1.5,1.5,0,0,0-.316,2.1l23.5,31.9a1.505,1.505,0,0,0,2.1.316l4.845-3.569a1.505,1.505,0,0,0,.322-2.1l-9.076-12.318,17.519-12.9L135.094,39l.408,62.076-25.17,18.537L51.17,100.82l-9.7-13.174,17.519-12.9,9.07,12.318a1.505,1.505,0,0,0,2.1.316l4.845-3.569a1.51,1.51,0,0,0,.322-2.1l-23.5-31.895a1.5,1.5,0,0,0-2.1-.322l-4.845,3.569a1.5,1.5,0,0,0-.316,2.1l9.07,12.318-17.514,12.9L27.041,68.063a1.506,1.506,0,0,0-2.1-.322l-4.845,3.569a1.505,1.505,0,0,0-.316,2.1l25.578,34.723a1.475,1.475,0,0,0,.753.54l65.146,20.7a1.51,1.51,0,0,0,1.351-.224"
							transform="translate(347.833 -10.609) rotate(105)"
						/>
					</g>
					<g
						className="k-servicios-1-mobile"
						transform="translate(0 87)">
						<path
							className="c-servicios-1-mobile"
							d="M171.706,423.276c-48.188,0-91.3,27.387-109.842,69.773L0,634.5v4.142L63.407,493.662c18.278-41.789,60.789-68.792,108.3-68.792H445.68v-1.594Z"
							transform="translate(0 71.85)"
						/>
						<path
							className="c-servicios-1-mobile"
							d="M521.828,293.986c-20.513,0-41.2-.173-61.586-.346-32.51-.274-66.129-.557-97.154-.092l-.028-1.782c31.046-.468,64.677-.184,97.2.091,45.453.383,92.455.779,135.5-.776a118.065,118.065,0,0,0,31.217-5.2c34.227-10.79,62.04-33.19,76.307-61.457,26.869-58.877,52.656-118.745,77.593-176.642Q791.172,23.884,801.489,0l1.719.683Q792.876,24.565,782.6,48.463c-24.94,57.9-50.73,117.783-77.622,176.708-14.5,28.73-42.714,51.465-77.416,62.4a120.008,120.008,0,0,1-31.729,5.287c-23.775.859-48.754,1.123-74,1.123"
							transform="translate(83.771)"
						/>
						<path
							className="c-servicios-1-mobile"
							d="M1242.78,293.986c-20.636,0-41.45-.173-61.956-.346-32.706-.274-66.526-.557-97.737-.092l-.028-1.782c31.232-.468,65.067-.184,97.783.091,45.727.383,93.009.779,136.316-.776a119.423,119.423,0,0,0,31.4-5.2c34.432-10.79,62.412-33.19,76.765-61.457,27.03-58.877,52.972-118.745,78.059-176.642Q1513.74,23.884,1524.119,0l1.729.683q-10.394,23.882-20.734,47.78c-25.09,57.9-51.035,117.783-78.088,176.708-14.588,28.73-42.97,51.465-77.881,62.4a121.389,121.389,0,0,1-31.92,5.287c-23.917.859-49.046,1.123-74.446,1.123"
							transform="translate(246.43)"
						/>
						<path
							className="c-servicios-1-mobile"
							d="M817.537,437.927c46.717-.414,95.021-.845,142.142,1.258,43.015,7.471,78.99,32.207,96.225,66.146,27.04,58.9,52.978,118.757,78.06,176.645q9.981,23.031,19.983,46.048h2.026q-10.164-23.357-20.278-46.729c-25.087-57.9-51.028-117.763-78.092-176.71-17.517-34.5-54.021-59.606-97.649-67.165l-.124-.013c-47.2-2.107-95.551-1.679-142.311-1.262-31.037.275-63.13.559-94.432.095l-.029,1.782c31.324.467,63.429.18,94.479-.094"
							transform="translate(164.518 73.976)"
						/>
						<path
							className="l-servicios-1-mobile"
							d="M296.517,582.057H3.07V580.35H296.517c50.887,0,96.419-28.922,115.994-73.681l146.4-308.747,1.633.7L414.155,507.348c-19.846,45.374-66.024,74.708-117.638,74.708"
							transform="translate(-3.07 33.597)"
						/>
						<path
							className="l-servicios-1-mobile"
							d="M1505.487,334.592h-197.23c-50.887,0-96.417-28.922-116.005-73.7l-10.357-21.84h-1.965l10.678,22.52c19.858,45.4,66.037,74.732,117.649,74.732h197.23Z"
							transform="translate(268.471 40.578)"
						/>
						<path
							className="l-servicios-1-mobile"
							d="M1440.429,694.173h2.1c-22.789-36.3-63.941-58.956-109.3-58.956H1039.782v1.707h293.446c44.343,0,84.615,21.967,107.2,57.25"
							transform="translate(236.582 107.827)"
						/>
					</g>
				</svg>

				<svg
					viewBox="0 0 417 894.481"
					className="mt-[0]"
					width="100%"
					height="100%"
					preserveAspectRatio="none">
					<defs>
						<style>
							{
								'.a-servicios-2-mobile,.b-servicios-2-mobile{fill:none;}.b-servicios-2-mobile{stroke:#001f5f;stroke-width:2px;}.c-servicios-2-mobile,.u-servicios-2-mobile,.w-servicios-2-mobile{fill:#fff;}.d-servicios-2-mobile{clip-path:url(#a-servicios-2-mobile);}.e-servicios-2-mobile,.o-servicios-2-mobile,.r-servicios-2-mobile,.t-servicios-2-mobile{fill:#001f5f;}.f-servicios-2-mobile{fill:#e7002a;}.g-servicios-2-mobile{clip-path:url(#b-servicios-2-mobile);}.h-servicios-2-mobile,.t-servicios-2-mobile{mix-blend-mode:multiply;isolation:isolate;}.i-servicios-2-mobile{fill:#eeebeb;}.j-servicios-2-mobile{fill:#d6d6d6;}.k-servicios-2-mobile{clip-path:url(#c-servicios-2-mobile);}.l-servicios-2-mobile{fill:#e40032;}.m-servicios-2-mobile{clip-path:url(#d-servicios-2-mobile);}.n-servicios-2-mobile{fill:url(#e-servicios-2-mobile);}.o-servicios-2-mobile{font-size:32px;}.o-servicios-2-mobile,.u-servicios-2-mobile,.w-servicios-2-mobile{font-family:Silka-SemiBold, Silka;font-weight:600;}.p-servicios-2-mobile{fill:#182856;font-size:16px;font-family:Silka-Regular, Silka;}.q-servicios-2-mobile,.r-servicios-2-mobile{font-family:Silka-Bold, Silka;font-weight:700;}.r-servicios-2-mobile{font-size:12px;}.s-servicios-2-mobile{fill:url(#f-servicios-2-mobile);}.t-servicios-2-mobile{opacity:0.65;}.u-servicios-2-mobile{font-size:50px;}.v-servicios-2-mobile{fill:url(#g-servicios-2-mobile);}.w-servicios-2-mobile{font-size:23px;}.x-servicios-2-mobile{font-size:40px;}'
							}
						</style>
						<clipPath id="a-servicios-2-mobile">
							<rect
								className="a-servicios-2-mobile"
								width={414}
								height={760.481}
								transform="translate(367.479 -87.481)"
							/>
						</clipPath>
						<clipPath id="b-servicios-2-mobile">
							<rect
								className="b-servicios-2-mobile"
								width={428.574}
								height={263.01}
								transform="translate(0 115.304)"
							/>
						</clipPath>
						<clipPath id="c-servicios-2-mobile">
							<rect
								className="c-servicios-2-mobile"
								width={70}
								height={146}
								transform="translate(0.048 -0.487)"
							/>
						</clipPath>
						<clipPath id="d-servicios-2-mobile">
							<rect
								className="a-servicios-2-mobile"
								width={210}
								height={95.931}
							/>
						</clipPath>
						<pattern
							id="e-servicios-2-mobile"
							width={1}
							height={1}
							viewBox="0 12.078 210 95.931">
							<image
								preserveAspectRatio="xMidYMid slice"
								width={210}
								height={139.919}
								xlinkHref="/images/services/ComponentTMP_0-image3.webp"
							/>
						</pattern>
						<pattern
							id="f-servicios-2-mobile"
							width={1}
							height={1}
							patternTransform="matrix(1, 0, 0, -1, 0, 373.175)"
							viewBox="4.941 19.084 275.099 120.92">
							<image
								preserveAspectRatio="xMidYMid slice"
								width={282.83}
								height={159.088}
								xlinkHref="/images/services/ComponentTMP_0-image4.webp"
							/>
						</pattern>
						<pattern
							id="g-servicios-2-mobile"
							width={1}
							height={1}
							patternTransform="matrix(-1, 0, 0, 1, 565.66, 0)"
							viewBox="4.179 33.955 274.472 120.644">
							<image
								preserveAspectRatio="xMidYMid slice"
								width={282.83}
								height={188.553}
								xlinkHref="/images/services/ComponentTMP_0-image5.webp"
							/>
						</pattern>
						<clipPath id="bla-servicios-1">
							<rect
								style={{ fill: 'none' }}
								width={420}
								height={270.931}
							/>
						</clipPath>
					</defs>
					<g transform="translate(3 0.481)">
						<rect
							className="c-servicios-2-mobile"
							width={414}
							height={894}
						/>
					</g>
					<g
						className="d-servicios-2-mobile"
						transform="translate(-364.479 87.481)">
						<path
							className="e-servicios-2-mobile"
							d="M142.668,423.276c-40.039,0-75.863,22.982-91.266,58.55L0,600.523V604L52.684,482.341c15.187-35.068,50.508-57.727,89.984-57.727H370.309v-1.338Z"
							transform="translate(0 -7.79)"
						/>
						<path
							className="e-servicios-2-mobile"
							d="M1215.769,246.7c-17.146,0-34.44-.145-51.478-.291-27.175-.23-55.276-.467-81.208-.078l-.023-1.495c25.95-.393,54.063-.154,81.246.077,37.994.321,77.28.654,113.263-.651a98.338,98.338,0,0,0,26.093-4.363c28.609-9.054,51.857-27.852,63.783-51.572,22.459-49.407,44.013-99.645,64.858-148.23q8.6-20.054,17.228-40.1l1.437.573q-8.636,20.041-17.227,40.094c-20.847,48.591-42.4,98.838-64.883,148.285-12.121,24.109-35.7,43.187-64.71,52.367a99.957,99.957,0,0,1-26.522,4.437c-19.872.721-40.751.942-61.856.942"
							transform="translate(21.595)"
						/>
						<path
							className="f-servicios-2-mobile"
							d="M246.892,526.313H3.07v-1.459H246.892c42.282,0,80.113-24.725,96.378-62.989L441.287,249.4H442.8l-98.16,213.044c-16.489,38.79-54.858,63.867-97.744,63.867"
							transform="translate(-39.317 -79)"
						/>
						<path
							className="f-servicios-2-mobile"
							d="M1450.431,319.224H1286.555c-42.281,0-80.112-24.27-96.387-61.849l-8.605-18.327h-1.633l8.872,18.9c16.5,38.1,54.869,62.711,97.753,62.711h163.876Z"
							transform="translate(23.527 -4.399)"
						/>
						<path
							className="f-servicios-2-mobile"
							d="M1372.674,684.69h1.741c-18.935-30.461-53.128-49.473-90.813-49.473h-243.82v1.432H1283.6c36.844,0,70.306,18.433,89.071,48.041"
							transform="translate(20.732 -11.69)"
						/>
						<g transform="translate(364.479 -202.785)">
							<g className="g-servicios-2-mobile">
								<path
									className="b-servicios-2-mobile"
									d="M275.577,259.01H0V0H422.481L368.327,175.78c-15.52,50.375-52.133,83.23-92.75,83.23"
									transform="translate(0 115.304)"
								/>
							</g>
						</g>
					</g>
					<g
						className="k-servicios-2-mobile"
						transform="translate(346.952 725.968)">
						<path
							className="l-servicios-2-mobile"
							d="M79.983,86.328,98.946,112.14a.719.719,0,0,1,.135.415l.108,20.207a.708.708,0,0,1-.7.708l-2.82.013a.7.7,0,0,1-.708-.7l-.038-7.167-10.194.051.038,7.169a.7.7,0,0,1-.7.708l-2.82.013a.7.7,0,0,1-.706-.7l-.1-18.564a.7.7,0,0,1,.7-.708l2.82-.016a.708.708,0,0,1,.708.7l.038,7.167,10.194-.051-.04-7.668L77.639,90.279l-14.649.075L46.018,113.977l.038,7.665,10.2-.054-.038-7.167a.7.7,0,0,1,.7-.708l2.82-.016a.7.7,0,0,1,.708.7l.1,18.564a.706.706,0,0,1-.7.708l-2.82.013a.7.7,0,0,1-.708-.7l-.038-7.169-10.194.054.038,7.169a.708.708,0,0,1-.7.708l-2.82.013a.706.706,0,0,1-.708-.7l-.105-20.207a.7.7,0,0,1,.132-.415L60.6,86.428a.712.712,0,0,1,.568-.294l18.239-.094a.7.7,0,0,1,.571.288m-29.367-21.1L20.1,55.488a.682.682,0,0,0-.434,0L.484,61.833a.706.706,0,0,0-.447.891L.92,65.4a.7.7,0,0,0,.891.447l6.8-2.249,3.2,9.68L5.011,75.528a.705.705,0,0,0-.447.891L5.447,79.1a.708.708,0,0,0,.891.447l17.627-5.828a.7.7,0,0,0,.447-.891l-.883-2.677a.708.708,0,0,0-.891-.447l-6.806,2.252-3.2-9.68,7.277-2.408,27.711,8.845,2.263,6.846,2.334,7.059L35.245,106.236l-7.28,2.405-3.2-9.68,6.806-2.249a.705.705,0,0,0,.447-.891l-.886-2.677a.7.7,0,0,0-.889-.447L12.617,98.526a.706.706,0,0,0-.447.891l.883,2.677a.705.705,0,0,0,.891.447l6.806-2.252,3.2,9.68-6.806,2.252a.7.7,0,0,0-.45.891l.886,2.677a.706.706,0,0,0,.891.447l19.184-6.345a.706.706,0,0,0,.353-.259L56.7,83.624a.7.7,0,0,0,.1-.633L51.071,65.676a.706.706,0,0,0-.455-.452M88.24,60.457,118.649,50.4a.7.7,0,0,0,.35-.259l11.794-16.41a.706.706,0,0,0-.162-.983L128.342,31.1a.7.7,0,0,0-.983.162l-4.185,5.82L114.9,31.135l4.183-5.82a.7.7,0,0,0-.159-.983l-2.289-1.646a.7.7,0,0,0-.983.162L104.812,37.922a.706.706,0,0,0,.159.986l2.292,1.646a.706.706,0,0,0,.983-.162l4.183-5.82,8.279,5.949-4.473,6.224L88.617,55.878l-11.9-8.548L76.57,18.243l4.473-6.224,8.279,5.949-4.183,5.82a.7.7,0,0,0,.162.983l2.289,1.646a.7.7,0,0,0,.983-.162L99.409,11.179a.7.7,0,0,0-.162-.983L96.958,8.55a.706.706,0,0,0-.983.162l-4.185,5.82L83.513,8.585,87.7,2.762a.706.706,0,0,0-.162-.983L85.245.134A.7.7,0,0,0,84.262.3L72.468,16.705a.716.716,0,0,0-.132.415L72.5,49.148a.7.7,0,0,0,.294.568L87.607,60.36a.706.706,0,0,0,.633.1m51.2,4.223.856-2.688a.706.706,0,0,0-.458-.886l-19.249-6.143a.71.71,0,0,0-.436,0L89.748,65.022a.7.7,0,0,0-.45.455L83.753,82.851a.7.7,0,0,0,.1.63l18.96,25.815a.719.719,0,0,0,.356.253L122.42,115.7a.7.7,0,0,0,.886-.458l.856-2.685a.7.7,0,0,0-.455-.886l-6.83-2.182,3.1-9.712,6.83,2.179a.706.706,0,0,0,.886-.455l.856-2.688a.706.706,0,0,0-.458-.886l-17.687-5.645a.7.7,0,0,0-.883.458l-.859,2.688a.7.7,0,0,0,.458.883l6.827,2.182-3.1,9.712-7.3-2.33L88.326,82.425l4.455-13.954L120.4,59.339l7.3,2.332-3.1,9.712-6.83-2.182a.709.709,0,0,0-.886.458l-.856,2.688a.7.7,0,0,0,.458.883l17.684,5.645a.705.705,0,0,0,.886-.455l.859-2.688a.708.708,0,0,0-.458-.886l-6.83-2.179,3.1-9.712,6.83,2.182a.709.709,0,0,0,.886-.458M52.762,60.516,67.446,49.7a.709.709,0,0,0,.288-.574L67.521,17.1a.7.7,0,0,0-.137-.412L55.4.416a.7.7,0,0,0-.986-.151l-2.27,1.673a.705.705,0,0,0-.148.986L56.247,8.7l-8.209,6.046L43.785,8.97a.7.7,0,0,0-.986-.148l-2.27,1.672a.7.7,0,0,0-.148.986l11.01,14.947a.705.705,0,0,0,.986.148l2.27-1.673a.705.705,0,0,0,.151-.986l-4.253-5.772L58.754,12.1,63.3,18.273l.191,29.087L51.7,56.045l-27.722-8.8-4.546-6.173,8.209-6.046,4.25,5.772a.705.705,0,0,0,.986.148l2.27-1.673a.707.707,0,0,0,.151-.986L24.284,23.339a.7.7,0,0,0-.986-.151l-2.27,1.673a.7.7,0,0,0-.148.986l4.25,5.772-8.206,6.046L12.67,31.892a.706.706,0,0,0-.986-.151l-2.27,1.672a.705.705,0,0,0-.148.986l11.985,16.27a.691.691,0,0,0,.353.253l30.525,9.7a.708.708,0,0,0,.633-.105"
							transform="translate(160.871 28.07) rotate(105)"
						/>
					</g>
					{doHover ? (
						<g transform="translate(3 -13.852)">
							<g clipPath="url(#bla-servicios-1)">
								<path
									className="n-servicios-2-mobile"
									d="M273.959,270.931H0V0H420L366.164,183.87c-15.428,52.694-51.826,87.061-92.206,87.061"
								/>
							</g>
						</g>
					) : (
						<g transform="translate(3 -13.852)">
							<g className="m-servicios-2-mobile">
								<path
									className="n-servicios-2-mobile"
									d="M136.979,95.931H0V0H210L183.082,65.1a49.888,49.888,0,0,1-46.1,30.826"
								/>
							</g>
						</g>
					)}
					<text
						className="o-servicios-2-mobile"
						transform="translate(210 272.186)">
						<tspan x={selectedLanguage === 'es' ? -167.248 : -123.248} y={30}>
							{t('NUESTROS CLIENTES, ')}
						</tspan>
						<tspan x={selectedLanguage === 'es' ? -132.688 : -142.688} y={64} xmlSpace="preserve">
							{t('NUESTRA RAZÓN    ')}
						</tspan>
						<tspan x={-53.52} y={98}>
							{t('DE SER')}
						</tspan>
					</text>
					<text
						className="p-servicios-2-mobile"
						transform="translate(39 386.258)">
						<tspan x={selectedLanguage === 'es' ? 20.504 : 78.504} y={15}>
							{t('Resultados medición de')}
						</tspan>
						<tspan
							className="q-servicios-2-mobile"
							y={15}
							xmlSpace="preserve">
							{t(' experiencia y ')}
						</tspan>
						<tspan
							className="q-servicios-2-mobile"
							x={selectedLanguage === 'es' ? 93.768 : 77.768}
							y={33}>
							{t('lealtad (NPS) 2023:')}
						</tspan>
						<tspan y={33} />
					</text>
					<text
						className="r-servicios-2-mobile"
						transform="translate(41 785.481)">
						<tspan x={94.666} y={11}>
							{t('NPS: Net Promoter Score ')}
						</tspan>
					</text>
					<g transform="translate(-181.942 -3193.069)">
						<g
							transform="translate(246.844 3656.257)"
							onClick={() => setOpen2Tag(true)}>
							<path
								className="e-servicios-2-mobile"
								d="M282.934,130.424H7.263c-4.374,0-7.755-4.748-7.2-10.116L15.976,7.852C16.436,3.364,19.522,0,23.179,0H266.524c3.646,0,6.726,3.345,7.2,7.817l16.411,112.456c.569,5.379-2.815,10.15-7.2,10.15"
								transform="translate(290.197 130.424) rotate(180)"
							/>
							<path
								className="s-servicios-2-mobile"
								d="M275.752,124.318H7.078c-4.263,0-7.558-4.526-7.021-9.642L15.57,7.484C16.019,3.206,19.027,0,22.591,0H259.758c3.553,0,6.555,3.188,7.017,7.451l15.994,107.191c.555,5.127-2.744,9.675-7.017,9.675"
								transform="translate(286.746 127.371) rotate(180)"
							/>
							{open2Tag && (
								<g>
									<path
										className="t-servicios-2-mobile"
										d="M275.752,124.318H7.078c-4.263,0-7.558-4.526-7.021-9.642L15.57,7.484C16.019,3.206,19.027,0,22.591,0H259.758c3.553,0,6.555,3.188,7.017,7.451l15.994,107.191c.555,5.127-2.744,9.675-7.017,9.675"
										transform="translate(286.746 127.371) rotate(180)"
									/>
									<text
										className="u-servicios-2-mobile"
										transform="translate(22.17 38.804)">
										<tspan x={17.327} y={47}>
											{'NPS 86%'}
										</tspan>
									</text>
								</g>
							)}
						</g>
						<g
							transform="translate(246.844 3828.8)"
							onClick={() => setOpen4Tag(true)}>
							<path
								className="e-servicios-2-mobile"
								d="M282.935,130.424H7.263c-4.374,0-7.755-4.748-7.2-10.116L15.976,7.852C16.436,3.364,19.523,0,23.179,0H266.524c3.646,0,6.726,3.345,7.2,7.817l16.411,112.456c.569,5.379-2.815,10.15-7.2,10.15"
								transform="translate(0)"
							/>
							<path
								className="v-servicios-2-mobile"
								d="M275.752,124.318H7.078c-4.263,0-7.558-4.526-7.021-9.642L15.57,7.484C16.019,3.206,19.027,0,22.591,0H259.758c3.553,0,6.555,3.188,7.017,7.451l15.994,107.191c.555,5.127-2.744,9.675-7.017,9.675"
								transform="translate(3.683 3.053)"
							/>
							{open4Tag && (
								<React.Fragment>
									<path
										className="t-servicios-2-mobile"
										d="M275.752,124.318H7.078c-4.263,0-7.558-4.526-7.021-9.642L15.57,7.484C16.019,3.206,19.027,0,22.591,0H259.758c3.553,0,6.555,3.188,7.017,7.451l15.994,107.191c.555,5.127-2.744,9.675-7.017,9.675"
										transform="translate(3.683 3.053)"
									/>
									<text
										className="w-servicios-2-mobile"
										transform="translate(55.651 33.683)">
										<tspan x={selectedLanguage === 'es' ? 7.05 : 27.05} y={22}>
											{t('SATISFACCIÓN ')}
										</tspan>
										<tspan className="x-servicios-2-mobile">
											<tspan x={48.167} y={62}>
												{'89%'}
											</tspan>
										</tspan>
									</text>
								</React.Fragment>
							)}
						</g>
					</g>
				</svg>

				<svg
					viewBox="0 0 417 896"
					width="100%"
					height="100%"
					preserveAspectRatio="none">
					<defs>
						<style>
							{
								'.a-services2-hover-2,.h-services2-hover-2,.t-services2-hover-2,.u-services2-hover-2,.v-services2-hover-2{fill:#001f5f;}.b-services2-hover-2,.l-services2-hover-2,.n-services2-hover-2,.o-services2-hover-2,.p-services2-hover-2{fill:none;}.c-services2-hover-2{fill:#fff;}.d-services2-hover-2{clip-path:url(#a-services2-hover-2);}.e-services2-hover-2{clip-path:url(#b-services2-hover-2);}.f-services2-hover-2{clip-path:url(#c-services2-hover-2);}.g-services2-hover-2,.q-services2-hover-2{fill:#e7002a;}.g-services2-hover-2{stroke:#e40032;}.h-services2-hover-2,.l-services2-hover-2,.n-services2-hover-2,.o-services2-hover-2,.p-services2-hover-2{stroke:#001f5f;}.i-services2-hover-2{clip-path:url(#d-services2-hover-2);}.j-services2-hover-2{fill:#f2f2f2;}.k-services2-hover-2{fill:#c5dbf7;}.l-services2-hover-2,.o-services2-hover-2{stroke-miterlimit:3.864;}.l-services2-hover-2{stroke-width:0.891px;}.m-services2-hover-2{fill:#4899d5;}.n-services2-hover-2{stroke-linecap:round;stroke-linejoin:round;}.n-services2-hover-2,.p-services2-hover-2{stroke-width:1.169px;}.o-services2-hover-2{stroke-width:0.292px;}.p-services2-hover-2{stroke-miterlimit:10;}.r-services2-hover-2{clip-path:url(#e-services2-hover-2);}.s-services2-hover-2,.w-services2-hover-2{fill:#e40032;}.t-services2-hover-2{font-size:32px;}.t-services2-hover-2,.v-services2-hover-2{font-family:Silka-Bold, Silka;font-weight:700;}.u-services2-hover-2{font-size:14px;font-family:Silka-Regular, Silka;}.v-services2-hover-2,.w-services2-hover-2{font-size:16px;}.w-services2-hover-2{font-family:Silka-SemiBold, Silka;font-weight:600;}.x-services2-hover-2{mix-blend-mode:multiply;isolation:isolate;}.y-services2-hover-2{fill:#eeebeb;}.z-services2-hover-2{fill:#d6d6d6;}'
							}
						</style>
						<clipPath id="a-services2-hover-2">
							<rect
								className="a-services2-hover-2"
								width={124}
								height={57.318}
							/>
						</clipPath>
						<clipPath id="b-services2-hover-2">
							<rect
								className="b-services2-hover-2"
								width={414}
								height={894}
								transform="translate(727.479 -85)"
							/>
						</clipPath>
						<clipPath id="c-services2-hover-2">
							<rect
								className="b-services2-hover-2"
								width={784.039}
								height={456.505}
							/>
						</clipPath>
						<clipPath id="d-services2-hover-2">
							<rect
								className="b-services2-hover-2"
								width={612.485}
								height={457.012}
							/>
						</clipPath>
						<clipPath id="e-services2-hover-2">
							<rect
								className="c-services2-hover-2"
								width={82}
								height={172}
							/>
						</clipPath>
					</defs>
					<g>
						<rect
							className="c-services2-hover-2"
							width={414}
							height={895}
						/>
						<g className="d-services2-hover-2">
							<path
								className="a-services2-hover-2"
								d="M81.521,57.318H0V0H124V14.84A42.479,42.479,0,0,1,81.521,57.318"
							/>
						</g>
					</g>
					<g
						className="e-services2-hover-2"
						transform="translate(-725.979 87)">
						<g transform="translate(420.182 266.229)">
							<g
								className="f-services2-hover-2"
								transform="translate(2 87.266)">
								<path
									className="g-services2-hover-2"
									d="M57.307,0H56.6V57.8h.025v58.625a69.586,69.586,0,0,1-42.925,64.4l-.051.021L0,186.533v.765l13.972-5.822c.492-.2.979-.415,1.464-.631A70.253,70.253,0,0,0,45.5,155.514a70.246,70.246,0,0,0,11.834-39.089v-96.5h-.026Z"
								/>
								<path
									className="h-services2-hover-2"
									d="M113.857.143l-42.02,17.51c-.492.2-.979.415-1.464.631a70.474,70.474,0,0,0-41.9,64.42v96.5H28.5v58.625A69.561,69.561,0,0,1,0,294.1v.851a70.316,70.316,0,0,0,17.375-18.032,70.243,70.243,0,0,0,11.834-39.089v-96.5h-.025V82.7A69.586,69.586,0,0,1,72.109,18.3l.051-.021L115.693.143Z"
									transform="translate(0 -0.085)"
								/>
							</g>
							<g transform='translate(302 116.759)'>
								<image xlinkHref='/images/mapa-servicios-mobile.png' width={423}/>
							</g>
						</g>
						<path
							className="a-services2-hover-2"
							d="M143.83,423.276c-40.365,0-76.481,22.982-92.009,58.55L0,600.523V604L53.113,482.341c15.311-35.068,50.92-57.727,90.717-57.727H373.324v-1.338Z"
							transform="translate(0 -7.79)"
						/>
						<path
							className="a-services2-hover-2"
							d="M496.052,246.7c-17.183,0-34.514-.145-51.588-.291-27.232-.23-55.393-.467-81.381-.078l-.023-1.495c26.006-.393,54.177-.154,81.419.077,38.074.321,77.445.654,113.5-.651a98.737,98.737,0,0,0,26.149-4.363c28.67-9.054,51.968-27.852,63.919-51.572,22.507-49.407,44.107-99.645,65-148.23Q721.669,20.042,730.311,0l1.44.573Q723.1,20.614,714.486,40.668c-20.891,48.591-42.494,98.838-65.02,148.285-12.147,24.109-35.779,43.187-64.848,52.367a100.361,100.361,0,0,1-26.578,4.437c-19.915.72-40.839.942-61.988.942"
							transform="translate(-4.272)"
						/>
						<path
							className="a-services2-hover-2"
							d="M1435.146,40.1q8.674-20.054,17.368-40.1l1.449.573q-8.706,20.041-17.368,40.094c-21.016,48.591-42.749,98.838-65.411,148.285-12.22,24.109-35.994,43.187-65.237,52.367a101.515,101.515,0,0,1-26.737,4.437c-20.034.72-41.083.942-62.36.942"
							transform="translate(30.589)"
						/>
						<path
							className="a-services2-hover-2"
							d="M802.2,437.586c39.133-.347,79.594-.709,119.065,1.055,36.032,6.269,66.166,27.026,80.6,55.506,22.65,49.425,44.377,99.656,65.387,148.232,5.574,12.884,11.493,26.5,11.493,26.5l6.942,12.141s-11.33-26.138-16.986-39.213c-21.014-48.583-42.744-98.821-65.414-148.287-14.673-28.948-45.251-50.018-81.8-56.361l-.1-.011c-39.535-1.768-80.038-1.409-119.207-1.059-26,.231-52.88.469-79.1.079l-.025,1.495c26.239.392,53.131.151,79.141-.079"
							transform="translate(-68.211 264.98)"
						/>
						<path
							className="q-services2-hover-2"
							d="M248.877,520.269H3.07v-1.432H248.877c42.626,0,80.765-24.27,97.163-61.83L468.675,197.922l1.368.591L347.416,457.578c-16.624,38.076-55.305,62.692-98.54,62.692"
							transform="translate(-3.07 -3.643)"
						/>
						<path
							className="q-services2-hover-2"
							d="M1452.633,319.224h-165.21c-42.626,0-80.764-24.27-97.172-61.849l-8.675-18.327h-1.646l8.945,18.9c16.634,38.1,55.316,62.711,98.549,62.711h165.21Z"
							transform="translate(33.324 -4.399)"
						/>
						<path
							className="g-services2-hover-2"
							d="M1055.878,668.572h-.851c9.251-20.537,25.957-33.355,44.369-33.355l111.58.053-.307.979-111.273-.067c-18,0-34.349,12.428-43.518,32.39"
							transform="translate(1942.065 583.572) rotate(180)"
						/>
						<g
							className="r-services2-hover-2"
							transform="translate(889.479 726) rotate(90)">
							<path
								className="s-services2-hover-2"
								d="M93.65,55.539l22.2-30.223a.842.842,0,0,0,.158-.486l.126-23.66a.829.829,0,0,0-.823-.829l-3.3-.016a.824.824,0,0,0-.829.82l-.044,8.391L99.2,9.476l.044-8.395a.825.825,0,0,0-.823-.829l-3.3-.016a.82.82,0,0,0-.826.82l-.114,21.737a.822.822,0,0,0,.82.829l3.3.019a.829.829,0,0,0,.829-.823l.044-8.391,11.936.06-.047,8.978L90.907,50.913l-17.152-.088L53.882,23.165l.044-8.975,11.939.063-.044,8.391a.822.822,0,0,0,.82.829l3.3.019a.825.825,0,0,0,.829-.823L70.885.933A.826.826,0,0,0,70.065.1l-3.3-.016a.824.824,0,0,0-.829.82L65.89,9.3,53.954,9.24,54,.845a.829.829,0,0,0-.823-.829L49.874,0a.826.826,0,0,0-.829.82l-.123,23.66a.825.825,0,0,0,.155.486L70.961,55.422a.834.834,0,0,0,.665.344l21.355.11a.82.82,0,0,0,.669-.337M59.265,80.249l-35.726,11.4a.8.8,0,0,1-.508,0L.566,84.22a.826.826,0,0,1-.523-1.044l1.034-3.135a.825.825,0,0,1,1.044-.523l7.966,2.633,3.749-11.334L5.867,68.184a.826.826,0,0,1-.523-1.044l1.034-3.135a.829.829,0,0,1,1.044-.523l20.639,6.824a.824.824,0,0,1,.523,1.044L27.55,74.485a.829.829,0,0,1-1.044.523l-7.969-2.636L14.791,83.706l8.521,2.819L55.758,76.169l2.65-8.016,2.733-8.265L41.268,32.228l-8.524-2.816L29,40.746l7.969,2.633a.826.826,0,0,1,.523,1.044l-1.037,3.135a.824.824,0,0,1-1.041.523L14.773,41.257a.826.826,0,0,1-.523-1.044l1.034-3.135a.826.826,0,0,1,1.044-.523L24.3,39.191l3.749-11.334-7.969-2.636a.825.825,0,0,1-.527-1.044l1.037-3.135a.826.826,0,0,1,1.044-.523l22.462,7.43a.826.826,0,0,1,.413.3L66.388,58.7a.818.818,0,0,1,.114.741L59.8,79.72a.827.827,0,0,1-.533.53m44.054,5.582,35.606,11.775a.818.818,0,0,1,.41.3l13.809,19.214a.827.827,0,0,1-.189,1.151l-2.68,1.927a.824.824,0,0,1-1.151-.189l-4.9-6.815-9.694,6.966,4.9,6.815a.823.823,0,0,1-.186,1.151l-2.68,1.927a.821.821,0,0,1-1.151-.189l-12.686-17.65a.827.827,0,0,1,.186-1.154l2.684-1.927a.827.827,0,0,1,1.151.189l4.9,6.815,9.694-6.966-5.238-7.288L103.76,91.192,89.831,101.2l-.177,34.057,5.238,7.288,9.694-6.966-4.9-6.815a.824.824,0,0,1,.189-1.151l2.68-1.927a.824.824,0,0,1,1.151.189L116.4,143.53a.824.824,0,0,1-.189,1.151l-2.68,1.927a.827.827,0,0,1-1.151-.189l-4.9-6.815-9.691,6.963,4.9,6.818a.827.827,0,0,1-.189,1.151l-2.68,1.927a.82.82,0,0,1-1.151-.189L84.852,137.059a.839.839,0,0,1-.155-.486l.2-37.5a.82.82,0,0,1,.344-.665l17.341-12.462a.827.827,0,0,1,.741-.114m59.954-4.945,1,3.147a.826.826,0,0,1-.536,1.038L141.2,92.264a.831.831,0,0,1-.511,0L105.085,80.486a.815.815,0,0,1-.527-.533L98.065,59.61a.821.821,0,0,1,.12-.738l22.2-30.226a.842.842,0,0,1,.416-.3l22.538-7.2a.825.825,0,0,1,1.038.536l1,3.144a.819.819,0,0,1-.533,1.037l-8,2.554,3.63,11.371,8-2.551a.827.827,0,0,1,1.037.533l1,3.147a.826.826,0,0,1-.536,1.037l-20.709,6.61a.822.822,0,0,1-1.034-.536l-1.006-3.147a.821.821,0,0,1,.536-1.034l7.994-2.554L132.135,29.93l-8.552,2.728L103.42,60.108l5.216,16.338L140.971,87.14l8.549-2.731-3.626-11.371-8,2.554a.83.83,0,0,1-1.037-.536l-1-3.147a.823.823,0,0,1,.536-1.034l20.706-6.61a.826.826,0,0,1,1.037.533l1.006,3.147a.829.829,0,0,1-.536,1.037l-8,2.551,3.63,11.371,8-2.554a.83.83,0,0,1,1.037.536M61.778,85.762,78.971,98.426a.831.831,0,0,1,.337.672l-.249,37.5a.814.814,0,0,1-.161.482l-14.033,19.05a.823.823,0,0,1-1.154.177l-2.658-1.958a.826.826,0,0,1-.173-1.154l4.979-6.758-9.612-7.08-4.979,6.758a.825.825,0,0,1-1.154.173l-2.658-1.958a.825.825,0,0,1-.173-1.154l12.891-17.5a.826.826,0,0,1,1.154-.173l2.658,1.958a.826.826,0,0,1,.177,1.154l-4.979,6.758,9.612,7.08,5.323-7.228.224-34.057L60.532,91,28.074,101.305l-5.323,7.228,9.612,7.08,4.976-6.758a.826.826,0,0,1,1.154-.173l2.658,1.958a.828.828,0,0,1,.177,1.154l-12.895,17.5a.824.824,0,0,1-1.154.177l-2.658-1.958a.825.825,0,0,1-.173-1.154l4.976-6.758-9.609-7.08-4.979,6.758a.826.826,0,0,1-1.154.177l-2.658-1.958a.826.826,0,0,1-.173-1.154l14.033-19.05a.809.809,0,0,1,.413-.3L61.037,85.639a.829.829,0,0,1,.741.123"
								transform="matrix(-0.259, -0.966, 0.966, -0.259, 36.528, 190.918)"
							/>
						</g>
					</g>
					<text
						className="t-services2-hover-2"
						transform="translate(210 87.302)">
						<tspan x={-84.048} y={30}>
							{t('Cobertura')}
						</tspan>
					</text>
					<text
						className="u-services2-hover-2"
						transform="translate(169.289 187.658)">
						<tspan x={0} y={13}>
							{'Bogotá'}
						</tspan>
						<tspan x={0} y={29}>
							{'Medellín '}
						</tspan>
						<tspan x={0} y={45}>
							{'Cali'}
						</tspan>
					</text>
					<text
						className="u-services2-hover-2"
						transform="translate(169.289 258.658)">
						<tspan x={0} y={13}>
							{'Ciudad de Panamá'}
						</tspan>
					</text>
					<text
						className="u-services2-hover-2"
						transform="translate(169.289 296.658)">
						<tspan x={0} y={13}>
							{'San José de Costa Rica'}
						</tspan>
					</text>
					<text
						className="u-services2-hover-2"
						transform="translate(258.789 187.658)">
						<tspan x={0} y={13}>
							{'Pereira '}
						</tspan>
						<tspan x={0} y={29}>
							{'Barranquilla '}
						</tspan>
					</text>
					<text
						className="v-services2-hover-2"
						transform="translate(37.5 143.982)">
						<tspan x={0} y={15}>
							{t('CEDIS en ciudades principales')}
						</tspan>
					</text>
					<text
						className="w-services2-hover-2"
						transform="translate(48.5 214.982)">
						<tspan x={0} y={0}>
							{'Colombia'}
						</tspan>
					</text>
					<text
						className="w-services2-hover-2"
						transform="translate(48.5 271.482)">
						<tspan x={0} y={0}>
							{'Panamá'}
						</tspan>
					</text>
					<text
						className="w-services2-hover-2"
						transform="translate(48.711 309.658)">
						<tspan x={0} y={0}>
							{'Costa Rica'}
						</tspan>
					</text>
					<text
						className="v-services2-hover-2"
						transform="translate(37.5 342.322)">
						<tspan x={0} y={15}>
							{t('CEDIS en ciudades intermedias')}
						</tspan>
					</text>
					<text
						className="u-services2-hover-2"
						transform="translate(248.789 379.665)">
						<tspan x={0} y={13}>
							{'Bucaramanga '}
						</tspan>
						<tspan x={0} y={29}>
							{'Neiva '}
						</tspan>
						<tspan x={0} y={45}>
							{'Ibagué '}
						</tspan>
						<tspan x={0} y={61}>
							{'Cúcuta '}
						</tspan>
					</text>
					<text
						className="u-services2-hover-2"
						transform="translate(115.5 379.665)">
						<tspan x={0} y={13}>
							{'Cartagena '}
						</tspan>
						<tspan x={0} y={29}>
							{'Valledupar '}
						</tspan>
						<tspan x={0} y={45}>
							{'Montería '}
						</tspan>
						<tspan x={0} y={61}>
							{'Pasto '}
						</tspan>
						<tspan x={0} y={77}>
							{'Villavicencio'}
						</tspan>
					</text>
					<circle
						className="s-services2-hover-2"
						cx={3}
						cy={3}
						r={3}
						transform="translate(249.789 191.982)"
					/>
					<circle
						className="s-services2-hover-2"
						cx={3}
						cy={3}
						r={3}
						transform="translate(160 191.982)"
					/>
					<circle
						className="s-services2-hover-2"
						cx={3}
						cy={3}
						r={3}
						transform="translate(160 262.982)"
					/>
					<circle
						className="s-services2-hover-2"
						cx={3}
						cy={3}
						r={3}
						transform="translate(160 300.982)"
					/>
					<circle
						className="s-services2-hover-2"
						cx={3}
						cy={3}
						r={3}
						transform="translate(104.711 384.982)"
					/>
					<circle
						className="s-services2-hover-2"
						cx={3}
						cy={3}
						r={3}
						transform="translate(238.711 384.982)"
					/>
					<circle
						className="s-services2-hover-2"
						cx={3}
						cy={3}
						r={3}
						transform="translate(249.789 208.982)"
					/>
					<circle
						className="s-services2-hover-2"
						cx={3}
						cy={3}
						r={3}
						transform="translate(160 208.982)"
					/>
					<circle
						className="s-services2-hover-2"
						cx={3}
						cy={3}
						r={3}
						transform="translate(160 224.982)"
					/>
					<circle
						className="s-services2-hover-2"
						cx={3}
						cy={3}
						r={3}
						transform="translate(104.711 400.982)"
					/>
					<circle
						className="s-services2-hover-2"
						cx={3}
						cy={3}
						r={3}
						transform="translate(238.711 400.982)"
					/>
					<circle
						className="s-services2-hover-2"
						cx={3}
						cy={3}
						r={3}
						transform="translate(104.711 416.982)"
					/>
					<circle
						className="s-services2-hover-2"
						cx={3}
						cy={3}
						r={3}
						transform="translate(238.711 416.982)"
					/>
					<circle
						className="s-services2-hover-2"
						cx={3}
						cy={3}
						r={3}
						transform="translate(104.711 432.982)"
					/>
					<circle
						className="s-services2-hover-2"
						cx={3}
						cy={3}
						r={3}
						transform="translate(238.711 432.982)"
					/>
					<circle
						className="s-services2-hover-2"
						cx={3}
						cy={3}
						r={3}
						transform="translate(105.711 448.982)"
					/>
				</svg>
				<svg
					viewBox="1090 0 414 897.134"
					width="100%"
					height="100%"
					preserveAspectRatio="none">
					<defs>
						<style>
							{
								".a-services2-hover-80,.e-services2-hover-80,.f-services2-hover-80,.p-services2-hover-80{fill:#001f5f;}.b-services2-hover-80,.g-services2-hover-80{fill:#fff;}.c-services2-hover-80{fill:none;}.d-services2-hover-80{clip-path:url(#a-services2-hover-80);}.e-services2-hover-80,.r-services2-hover-80,.t-services2-hover-80{font-size:14px;}.e-services2-hover-80,.s-services2-hover-80,.t-services2-hover-80{font-family:Silka-Regular, Silka;}.f-services2-hover-80{font-size:55px;}.f-services2-hover-80,.g-services2-hover-80{font-family:'Kiona-Bold';font-weight:700;}.g-services2-hover-80{font-size:18px;}.h-services2-hover-80{clip-path:url(#d-services2-hover-80);}.i-services2-hover-80{fill:#e40032;}.j-services2-hover-80{clip-path:url(#e-services2-hover-80);}.k-services2-hover-80{fill:#e7002a;}.l-services2-hover-80{clip-path:url(#f-services2-hover-80);}.m-services2-hover-80{mix-blend-mode:multiply;isolation:isolate;}.n-services2-hover-80{fill:#eeebeb;}.o-services2-hover-80{fill:#d6d6d6;}.p-services2-hover-80{font-size:32px;}.p-services2-hover-80,.q-services2-hover-80,.r-services2-hover-80{font-family:Silka-SemiBold, Silka;font-weight:600;}.r-services2-hover-80,.s-services2-hover-80,.t-services2-hover-80{fill:#182856;}.s-services2-hover-80{font-size:12px;}.u-services2-hover-80{clip-path:url(#s-services2-hover-80);}.v-services2-hover-80{clip-path:url(#t-services2-hover-80);}.w-services2-hover-80{clip-path:url(#u-services2-hover-80);}.x-services2-hover-80{fill:url(#v-services2-hover-80);}.y-services2-hover-80{filter:url(#q-services2-hover-80);}.z-services2-hover-80{filter:url(#o-services2-hover-80);}.aa-services2-hover-80{filter:url(#m-services2-hover-80);}.ab-services2-hover-80{filter:url(#k-services2-hover-80);}.ac-services2-hover-80{filter:url(#i-services2-hover-80);}.ad-services2-hover-80{filter:url(#g-services2-hover-80);}.ae-services2-hover-80{filter:url(#b-services2-hover-80);}"
							}
						</style>
						<clipPath id="a-services2-hover-80">
							<rect
								className="a-services2-hover-80"
								width={175}
								height={80.893}
							/>
						</clipPath>
						<filter
							id="b-services2-hover-80"
							x={56}
							y={642.922}
							width={248}
							height={61.168}
							filterUnits="userSpaceOnUse">
							<feOffset dy={3} />
							<feGaussianBlur stdDeviation={3} result="c" />
							<feFlood floodOpacity={0.4} />
							<feComposite operator="in" in2="c" />
							<feComposite in="SourceGraphic" />
						</filter>
						<clipPath id="d-services2-hover-80">
							<rect
								className="b-services2-hover-80"
								width={176}
								height={257}
							/>
						</clipPath>
						<clipPath id="e-services2-hover-80">
							<rect
								className="c-services2-hover-80"
								width={414}
								height={896.831}
								transform="translate(1091.958 -89.134)"
							/>
						</clipPath>
						<clipPath id="f-services2-hover-80">
							<rect
								className="b-services2-hover-80"
								width={36}
								height={74}
								transform="translate(0 0.204)"
							/>
						</clipPath>
						<filter
							id="g-services2-hover-80"
							x={1120.458}
							y={369.294}
							width={191}
							height={141.261}
							filterUnits="userSpaceOnUse">
							<feOffset dy={5} />
							<feGaussianBlur stdDeviation={2.5} result="h" />
							<feFlood floodOpacity={0.4} />
							<feComposite operator="in" in2="h" />
							<feComposite in="SourceGraphic" />
						</filter>
						<filter
							id="i-services2-hover-80"
							x={1120.458}
							y={525.294}
							width={191}
							height={141.261}
							filterUnits="userSpaceOnUse">
							<feOffset dy={5} />
							<feGaussianBlur stdDeviation={2.5} result="j" />
							<feFlood floodOpacity={0.4} />
							<feComposite operator="in" in2="j" />
							<feComposite in="SourceGraphic" />
						</filter>
						<filter
							id="k-services2-hover-80"
							x={1120.458}
							y={681.294}
							width={191}
							height={141.261}
							filterUnits="userSpaceOnUse">
							<feOffset dy={5} />
							<feGaussianBlur stdDeviation={2.5} result="l" />
							<feFlood floodOpacity={0.4} />
							<feComposite operator="in" in2="l" />
							<feComposite in="SourceGraphic" />
						</filter>
						<filter
							id="m-services2-hover-80"
							x={1290.284}
							y={378.921}
							width={188.674}
							height={144.744}
							filterUnits="userSpaceOnUse">
							<feOffset dy={3} />
							<feGaussianBlur stdDeviation={3} result="n" />
							<feFlood floodOpacity={0.302} />
							<feComposite operator="in" in2="n" />
							<feComposite in="SourceGraphic" />
						</filter>
						<filter
							id="o-services2-hover-80"
							x={1290.284}
							y={534.921}
							width={188.674}
							height={144.744}
							filterUnits="userSpaceOnUse">
							<feOffset dy={3} />
							<feGaussianBlur stdDeviation={3} result="p" />
							<feFlood floodOpacity={0.302} />
							<feComposite operator="in" in2="p" />
							<feComposite in="SourceGraphic" />
						</filter>
						<filter
							id="q-services2-hover-80"
							x={1290.284}
							y={690.921}
							width={188.674}
							height={144.744}
							filterUnits="userSpaceOnUse">
							<feOffset dy={3} />
							<feGaussianBlur stdDeviation={3} result="r" />
							<feFlood floodOpacity={0.302} />
							<feComposite operator="in" in2="r" />
							<feComposite in="SourceGraphic" />
						</filter>
						<clipPath id="s-services2-hover-80">
							<rect
								className="c-services2-hover-80"
								width={418}
								height={236}
								transform="translate(-0.38 0)"
							/>
						</clipPath>
						<clipPath id="t-services2-hover-80">
							<rect
								className="b-services2-hover-80"
								width={414}
								height={232}
								transform="translate(0 0)"
							/>
						</clipPath>
						<clipPath id="u-services2-hover-80">
							<path
								className="b-services2-hover-80"
								d="M0,0,8.572,157.77c7.646,45.213,24.814,74.7,72.911,74.7h331.8V0Z"
								transform="translate(0.358 -0.239)"
							/>
						</clipPath>

						<pattern
							id="v-services2-hover-80"
							preserveAspectRatio="xMidYMid slice"
							width="100%"
							height="100%"
							viewBox="0 0 1920 1080">
							<image
								width={1920}
								height={1080}
								xlinkHref="ComponentTMP_0-image.jpg-services2-hover-80"
							/>
						</pattern>
						<clipPath id="b-5">
							<path
								className="b-services2-hover-80"
								d="M0,0,8.572,157.77c7.646,45.213,24.814,74.7,72.911,74.7h331.8V0Z"
								transform="translate(0.358 -0.239)"
							/>
						</clipPath>
					</defs>
					<g transform="translate(0 2.134)">
						<rect
							className="b-services2-hover-80"
							width={414}
							height={895}
							transform="translate(1091.958 0)"
						/>
					</g>
					<g
						className="j-services2-hover-80"
						transform="translate(0 89.134)">
						<path
							className="a-services2-hover-80"
							d="M145.765,423.276c-40.908,0-77.51,27.582-93.248,70.269L0,636v4.172L53.828,494.162c15.517-42.086,51.6-69.28,91.938-69.28H378.349v-1.606Z"
							transform="translate(0 75.367)"
						/>
						<path
							className="a-services2-hover-80"
							d="M497.842,296.074c-17.414,0-34.978-.174-52.282-.349-27.6-.276-56.139-.561-82.477-.093l-.024-1.794c26.356-.471,54.906-.185,82.515.092,38.586.385,78.488.785,115.032-.781a86.044,86.044,0,0,0,26.5-5.236,114.1,114.1,0,0,0,64.779-61.894c22.81-59.3,44.7-119.588,65.871-177.9Q726.5,24.054,735.254,0l1.46.688q-8.771,24.052-17.5,48.119c-21.172,58.316-43.066,118.62-65.9,177.963A115.785,115.785,0,0,1,587.6,289.618a87.462,87.462,0,0,1-26.936,5.325c-20.183.865-41.388,1.131-62.822,1.131"
							transform="translate(16.266)"
						/>
						<path
							className="a-services2-hover-80"
							d="M803.264,437.942c39.659-.417,80.665-.851,120.668,1.266a113.848,113.848,0,0,1,81.688,66.616c22.955,59.318,44.974,119.6,66.268,177.9q8.473,23.195,16.964,46.375h1.719q-8.629-23.523-17.214-47.061c-21.3-58.307-43.319-118.6-66.294-177.965a115.486,115.486,0,0,0-82.9-67.642l-.105-.013c-40.067-2.122-81.116-1.69-120.812-1.271-26.348.277-53.592.563-80.165.1l-.025,1.794c26.592.47,53.846.181,80.206-.094"
							transform="translate(30.428 77.598)"
						/>
						<path
							className="k-services2-hover-80"
							d="M252.185,584.785H3.07v-1.719H252.185c43.2,0,81.852-29.127,98.471-74.2l124.286-310.94,1.386.709L352.051,509.546c-16.847,45.7-56.049,75.239-99.866,75.239"
							transform="translate(-3.07 35.241)"
						/>
						<path
							className="k-services2-hover-80"
							d="M1455.574,327.108H1288.14c-43.2,0-68.984-2.174-85.613-47.275h-1.77c16.858,45.72,43.568,48.994,87.382,48.994h167.433Z"
							transform="translate(197.2 -350.781)"
						/>
						<path
							className="k-services2-hover-80"
							d="M1379.9,694.592h1.779c-19.346-36.557-54.281-59.375-92.784-59.375H1039.782v1.719H1288.9c37.644,0,71.832,22.123,91.005,57.656"
							transform="translate(43.756 113.105)"
						/>
					</g>
					<g
						className="l-services2-hover-80"
						transform="translate(1127.958 297.338) rotate(180)">
						<path
							className="i-services2-hover-80"
							d="M40.925,44.172l9.7,13.207a.368.368,0,0,1,.069.212l.055,10.34a.362.362,0,0,1-.36.362L48.95,68.3a.36.36,0,0,1-.362-.358l-.019-3.667-5.216.026.019,3.668a.36.36,0,0,1-.36.362l-1.443.007a.358.358,0,0,1-.361-.358l-.05-9.5a.359.359,0,0,1,.358-.362l1.443-.008a.362.362,0,0,1,.362.36l.019,3.667,5.216-.026-.021-3.923-8.81-11.995-7.5.039L23.546,58.319l.019,3.922,5.217-.028-.019-3.667a.359.359,0,0,1,.358-.362l1.443-.008a.361.361,0,0,1,.362.36l.05,9.5a.361.361,0,0,1-.358.362l-1.443.007a.36.36,0,0,1-.362-.358l-.019-3.668-5.216.028.019,3.668a.362.362,0,0,1-.36.362l-1.443.007a.361.361,0,0,1-.362-.358l-.054-10.34a.36.36,0,0,1,.068-.212L31.01,44.223a.364.364,0,0,1,.291-.15l9.332-.048a.359.359,0,0,1,.292.147M25.9,33.374,10.287,28.392a.349.349,0,0,0-.222,0L.247,31.639a.361.361,0,0,0-.229.456l.452,1.37a.36.36,0,0,0,.456.229l3.481-1.151L6.046,37.5,2.564,38.646a.361.361,0,0,0-.229.456l.452,1.37a.362.362,0,0,0,.456.229l9.019-2.982a.36.36,0,0,0,.229-.456l-.452-1.37a.362.362,0,0,0-.456-.229L8.1,36.816,6.464,31.863l3.724-1.232,14.179,4.526,1.158,3.5,1.194,3.612L18.034,54.359l-3.725,1.231-1.637-4.953,3.482-1.151a.361.361,0,0,0,.229-.456l-.453-1.37a.36.36,0,0,0-.455-.229L6.456,50.413a.361.361,0,0,0-.229.456l.452,1.37a.361.361,0,0,0,.456.229l3.482-1.152,1.639,4.953L8.774,57.421a.361.361,0,0,0-.23.456L9,59.247a.361.361,0,0,0,.456.229l9.816-3.247a.361.361,0,0,0,.181-.132l9.562-13.308a.357.357,0,0,0,.05-.324l-2.93-8.86a.361.361,0,0,0-.233-.232M45.15,30.934l15.56-5.146a.358.358,0,0,0,.179-.132l6.035-8.4a.361.361,0,0,0-.083-.5l-1.171-.842a.36.36,0,0,0-.5.083l-2.142,2.978-4.236-3.044,2.14-2.978a.36.36,0,0,0-.081-.5l-1.171-.842a.359.359,0,0,0-.5.083L53.63,19.4a.361.361,0,0,0,.081.5l1.173.842a.361.361,0,0,0,.5-.083l2.14-2.978,4.236,3.044-2.289,3.185L45.343,28.592l-6.087-4.374L39.179,9.334,41.468,6.15,45.7,9.194l-2.14,2.978a.36.36,0,0,0,.083.5l1.171.842a.36.36,0,0,0,.5-.083L50.865,5.72a.36.36,0,0,0-.083-.5l-1.171-.842a.361.361,0,0,0-.5.083L46.967,7.436,42.732,4.393l2.14-2.979a.361.361,0,0,0-.083-.5L43.618.068a.359.359,0,0,0-.5.083l-6.035,8.4a.367.367,0,0,0-.068.212L37.1,25.148a.359.359,0,0,0,.15.291l7.578,5.446a.362.362,0,0,0,.324.05M71.35,33.1l.438-1.375a.361.361,0,0,0-.234-.453l-9.849-3.143a.363.363,0,0,0-.223,0L45.922,33.27a.356.356,0,0,0-.23.233l-2.837,8.89a.359.359,0,0,0,.052.322l9.7,13.209a.368.368,0,0,0,.182.13L62.64,59.2a.36.36,0,0,0,.453-.234l.438-1.374a.358.358,0,0,0-.233-.453L59.8,56.021l1.586-4.969,3.495,1.115a.361.361,0,0,0,.453-.233l.438-1.375a.361.361,0,0,0-.234-.453l-9.05-2.888a.359.359,0,0,0-.452.234l-.44,1.375a.359.359,0,0,0,.234.452l3.493,1.116-1.585,4.969-3.737-1.192-8.811-12,2.279-7.14L61.6,30.362l3.736,1.193-1.585,4.969-3.495-1.116a.363.363,0,0,0-.453.234l-.438,1.375a.36.36,0,0,0,.234.452l9.048,2.888a.361.361,0,0,0,.453-.233l.44-1.375a.362.362,0,0,0-.234-.453l-3.495-1.115L67.4,32.213,70.9,33.329a.363.363,0,0,0,.453-.234M27,30.965,34.51,25.43a.363.363,0,0,0,.147-.294L34.549,8.749a.356.356,0,0,0-.07-.211L28.346.213a.36.36,0,0,0-.5-.077L26.68.992a.361.361,0,0,0-.076.5L28.78,4.449l-4.2,3.094L22.4,4.59a.361.361,0,0,0-.5-.076l-1.162.856a.361.361,0,0,0-.076.5L26.3,13.522a.361.361,0,0,0,.5.076l1.162-.856a.361.361,0,0,0,.077-.5L25.863,9.285l4.2-3.094L32.39,9.35l.1,14.883-6.035,4.444-14.184-4.5L9.942,21.014l4.2-3.094,2.175,2.953a.361.361,0,0,0,.5.076l1.162-.856a.362.362,0,0,0,.077-.5l-5.635-7.647a.36.36,0,0,0-.5-.077l-1.162.856a.361.361,0,0,0-.076.5l2.175,2.953-4.2,3.094L6.483,16.319a.361.361,0,0,0-.5-.077L4.817,17.1a.361.361,0,0,0-.076.5l6.132,8.325a.354.354,0,0,0,.181.13l15.619,4.962A.362.362,0,0,0,27,30.965"
							transform="translate(82.472 14.111) rotate(105)"
						/>
					</g>
					<text
						className="p-services2-hover-80"
						transform="translate(1127.958 274.134)">
						<tspan x={6.584} y={30}>
							{t('SERVICIO LOGÍSTICO')}
						</tspan>
						<tspan x={selectedLanguage === 'es' ? 18.312 : 10.312} y={64}>
							{t('DE CLASE MUNDIAL')}
						</tspan>
					</text>
					<g
						transform="translate(1127.958 371.794)"
						className="hover-hover-80">
						<g
							className="ad-services2-hover-80"
							transform="matrix(1, 0, 0, 1, -1127.96, -371.79)">
							<path
								className="b-services2-hover-80 card"
								d="M157.886,126.26H4.988A5.214,5.214,0,0,1,0,120.848V5.412A5.214,5.214,0,0,1,4.988,0H171.01c3.158,0,5.521,3.143,4.887,6.5L162.773,121.934a5.107,5.107,0,0,1-4.887,4.326"
								transform="translate(1127.96 371.79)"
							/>
						</g>
						<text
							className="e-services2-hover-80 text"
							transform="translate(85 15.436)">
							<tspan x={-51.086} y={13}>
								{t('Nuestra red en ')}
							</tspan>
							<tspan x={selectedLanguage === 'es' ? -67.109 : -57.109} y={29}>
								{t('distribución incluye ')}
							</tspan>
							<tspan
								className="q-services2-hover-80"
								x={selectedLanguage === 'es' ? -67.263 : -52.263}
								y={45}>
								{t('18 transportadoras')}
							</tspan>
							<tspan y={45} />
							<tspan x={selectedLanguage === 'es' ? -60.823 : -52.04} y={61}>
								{t('que nos permiten ')}
							</tspan>
							<tspan x={-61.04} y={77}>
								{t('llegar a ')}
							</tspan>
							<tspan className="q-services2-hover-80" y={77}>
								{t('cualquier ')}
							</tspan>
							<tspan
								className="q-services2-hover-80"
								x={selectedLanguage === 'es' ? -48.517 : -27.517}
								y={93}>
								{t('parte del país')}
							</tspan>
						</text>
					</g>
					<g
						transform="translate(1127.958 527.794)"
						className="hover-hover-80">
						<g
							className="ac-services2-hover-80"
							transform="matrix(1, 0, 0, 1, -1127.96, -527.79)">
							<path
								className="b-services2-hover-80 card"
								d="M157.886,126.26H4.988A5.214,5.214,0,0,1,0,120.848V5.412A5.214,5.214,0,0,1,4.988,0H171.01c3.158,0,5.521,3.143,4.887,6.5L162.773,121.934a5.107,5.107,0,0,1-4.887,4.326"
								transform="translate(1127.96 527.79)"
							/>
						</g>
						<g transform="translate(57.764 56.357)">
							<text
								className="r-services2-hover-80 text"
								transform="translate(-42.764 -17.422)">
								<tspan x={0} y={13}>
									{t('Pedidos electrónicos ')}
								</tspan>
							</text>
							<text
								className="s-services2-hover-80 text"
								transform="translate(-9.264 2.969)">
								<tspan x={0} y={11}>
									{t('CRM Salesforce ')}
								</tspan>
								<tspan x={0} y={25}>
									{t('SAP S/4HANA ')}
								</tspan>
							</text>
							<circle
								className="i-services2-hover-80"
								cx={3}
								cy={3}
								r={3}
								transform="translate(-19.264 5.969)"
							/>
							<circle
								className="i-services2-hover-80"
								cx={3}
								cy={3}
								r={3}
								transform="translate(-19.264 20.969)"
							/>
						</g>
					</g>
					<g
						transform="translate(1127.958 683.794)"
						className="hover-hover-80">
						<g
							className="ab-services2-hover-80"
							transform="matrix(1, 0, 0, 1, -1127.96, -683.79)">
							<path
								className="b-services2-hover-80 card"
								d="M157.886,126.26H4.988A5.214,5.214,0,0,1,0,120.848V5.412A5.214,5.214,0,0,1,4.988,0H171.01c3.158,0,5.521,3.143,4.887,6.5L162.773,121.934a5.107,5.107,0,0,1-4.887,4.326"
								transform="translate(1127.96 683.79)"
							/>
						</g>
						<text
							className="t-services2-hover-80 text"
							transform="translate(85 39.131)">
							<tspan x={selectedLanguage === 'es' ? -57.015 : -39.015} y={13}>
								{t('Seguimiento por ')}
							</tspan>
							<tspan
								className="q-services2-hover-80"
								x={selectedLanguage === 'es' ? -70.497 : -41.497}
								y={29}>
								{t('GPS para garantizar ')}
							</tspan>
							<tspan
								className="q-services2-hover-80"
								x={selectedLanguage === 'es' ? -35.861 : -28.861}
								y={45}>
								{t('la entrega')}
							</tspan>
						</text>
					</g>
					<g
						transform="translate(1299.284 384.921)"
						className="hover-hover-80">
						<g
							className="aa-services2-hover-80"
							transform="matrix(1, 0, 0, 1, -1299.28, -384.92)">
							<path
								className="b-services2-hover-80 card"
								d="M896.994,23.531h148.271c2.671,0,4.837,2.433,4.837,5.433V144.842c0,3-2.166,5.433-4.837,5.433h-161c-3.062,0-5.354-3.155-4.739-6.524L892.256,27.873a5.013,5.013,0,0,1,4.739-4.342"
								transform="translate(419.86 361.39)"
							/>
						</g>
						<text
							className="e-services2-hover-80 text"
							transform="translate(90 39.372)"
							style={{ fontSize: 12 }}>
							<tspan x={selectedLanguage === 'es' ? -66.759 : -64.759} y={13}>
								{t('Entregas de urgencias ')}
							</tspan>
							<tspan x={selectedLanguage === 'es' ? -58.842 : -78.842} y={selectedLanguage === 'es' ? 29 : 26}>
								{t('en ')}
							</tspan>
							<tspan className="q-services2-hover-80" y={29}>
								{t('4 horas')}
							</tspan>
							<tspan y={selectedLanguage === 'es' ? 29 : 26} xmlSpace="preserve">
								{t(' en las ')}
							</tspan>
							<tspan
								className="q-services2-hover-80"
								x={selectedLanguage === 'es' ? -72.485 : -75.485}
								y={selectedLanguage === 'es' ? 45 : 40}>
								{t('principales ciudades')}
							</tspan>
						</text>
					</g>
					<g
						transform="translate(1299.284 540.921)"
						className="hover-hover-80">
						<g
							className="z-services2-hover-80 "
							transform="matrix(1, 0, 0, 1, -1299.28, -540.92)">
							<path
								className="b-services2-hover-80 card"
								d="M896.994,23.531h148.271c2.671,0,4.837,2.433,4.837,5.433V144.842c0,3-2.166,5.433-4.837,5.433h-161c-3.062,0-5.354-3.155-4.739-6.524L892.256,27.873a5.013,5.013,0,0,1,4.739-4.342"
								transform="translate(419.86 517.39)"
							/>
						</g>
						<text
							className="e-services2-hover-80 text"
							transform="translate(90 39.372)">
							<tspan x={selectedLanguage === 'es' ? -48.111 : -38.111} y={13}>
								{t('Trazabilidad y ')}
							</tspan>
							<tspan x={selectedLanguage === 'es' ? -54.824 : -40.824} y={29}>
								{t('monitoreo de la ')}
							</tspan>
							<tspan
								className="q-services2-hover-80"
								x={selectedLanguage === 'es' ? -51.037 : -55.037}
								y={45}>
								{t('cadena de frío')}
							</tspan>
						</text>
					</g>
					<g
						transform="translate(1299.284 696.921)"
						className="hover-hover-80">
						<g
							className="y-services2-hover-80"
							transform="matrix(1, 0, 0, 1, -1299.28, -696.92)">
							<path
								className="b-services2-hover-80 card"
								d="M896.994,23.531h148.271c2.671,0,4.837,2.433,4.837,5.433V144.842c0,3-2.166,5.433-4.837,5.433h-161c-3.062,0-5.354-3.155-4.739-6.524L892.256,27.873a5.013,5.013,0,0,1,4.739-4.342"
								transform="translate(419.86 673.39)"
							/>
						</g>
						<text
							className="e-services2-hover-80 text"
							transform="translate(90 31.372)">
							<tspan x={selectedLanguage === 'es' ? -66.038 : -72.038} y={13} xmlSpace="preserve">
								{t('Equipo logístico de      ')}
							</tspan>
							<tspan
								className="q-services2-hover-80"
								x={selectedLanguage === 'es' ? -52.199 : -60.199}
								y={29}>
								{t('91 personas en ')}
							</tspan>
							<tspan
								className="q-services2-hover-80"
								x={selectedLanguage === 'es' ? -65.429 : -70.429}
								y={45}>
								{t('Colombia, Panamá ')}
							</tspan>
							<tspan
								className="q-services2-hover-80"
								x={selectedLanguage === 'es' ? -44.275 : -55.275}
								y={61}>
								{t('y Costa Rica ')}
							</tspan>
						</text>
					</g>
					<g transform="translate(1090.452 1.928)">
						<svg viewBox="0 335 418 236"
						onClick={() =>  setOpenVideo(true)}
						>
							<defs>
								<style>
									{
										'.a{fill:none;}.b{fill:#fff;}.c{clip-path:url(#a);}.d{fill:#001f5f;}.e{clip-path:url(#b);}.f{clip-path:url(#c);}.g{fill:url(#d);}'
									}
								</style>
								<clipPath id="a">
									<rect
										className="a"
										width={418}
										height={236}
										transform="translate(-0.38 0)"
									/>
								</clipPath>
								<clipPath id="b">
									<rect
										className="b"
										width={414}
										height={232}
										transform="translate(0 0)"
									/>
								</clipPath>
								<clipPath id="c">
									<path
										className="b"
										d="M0,0,8.572,157.77c7.646,45.213,24.814,74.7,72.911,74.7h331.8V0Z"
										transform="translate(0.358 -0.239)"
									/>
								</clipPath>
								<pattern
									id="d"
									preserveAspectRatio="xMidYMid slice"
									width="100%"
									height="100%"
									viewBox="0 0 1920 1080">
									<image
										width={1920}
										height={1080}
										xlinkHref="/images/fondovideobak.jpg"
									/>
								</pattern>
							</defs>
							<g transform="translate(0 0)">
								<g transform="translate(-2.506 -0.206)">
									<g
										className="c"
										transform="translate(2.886 0.206)">
										<path
											className="d"
											d="M0,0,8.647,160.424c7.712,45.974,25.031,75.96,73.549,75.96H416.9V0Z"
											transform="translate(0.361 -0.243)"
										/>
									</g>
								</g>
								<g transform="translate(4.459 -0.206)">
									<g
										className="e"
										transform="translate(-0.459 0.206)">
										<g className="f">
											<rect
												className="g"
												width={413.284}
												height={232.472}
												transform="translate(0.358 -0.238)"
											/>
										</g>
									</g>
								</g>
								<g transform="translate(-12 -2686)">
									<circle
										className="d"
										cx={22}
										cy={22}
										r={22}
										transform="translate(250 2815) rotate(180)"
									/>
									<path
										className="b"
										d="M0,0V17.12l14.824-8.56L7.743,4.471Z"
										transform="translate(223.341 2784.44)"
									/>
								</g>
							</g>
						</svg>
					</g>
				</svg>
			</Carousel>

			{openVideo && (
				<div className="fixed w-[100vw] h-[100vh] top-[0] right-[0] z-[1] bg-[#e6e6e6]">
					<video
						src="https://grupoamarey.com/pdf/video/tinywow_CEDICONOFC (1).mp4"
						width="100%"
						height="100%"
						controls
						id="video-cifras"
						playsInline
						style={{
							height: '100vh',
							width: '100vw',
						}}></video>
					{/* <img
						src={!mute ? Mute : Mute2}
						className="absolute w-[11%] left-[3%] top-[3%]"
						alt="Mute"
						onClick={() => {
							setMute(!mute)
						}}
					/> */}
					<svg
						viewBox="0 0 48 50"
						className="w-[30px] right-[20px] absolute top-[20px]"
						onClick={() => {
							setOpenVideo(false)
							document.body.style.overflow = 'auto'
							const video: HTMLVideoElement =
								document.getElementById(
									'video-cifras'
								) as HTMLVideoElement

							if (video) {
								video.pause()
								video.currentTime = 0
							}
						}}>
						<defs>
							<style>
								{
									'.a-cifras-video-close,.b-cifras-video-close{fill:#fff;}.a-cifras-video-close{opacity:0.36;}.b-cifras-video-close{font-size:30px;font-family:Helvetica-Bold, Helvetica;font-weight:700;}.c-cifras-video-close{filter:url(#a-cifras-video-close);}'
								}
							</style>
							<filter
								id="a-cifras-video-close"
								x={0}
								y={0}
								width={48}
								height={50}
								filterUnits="userSpaceOnUse">
								<feOffset dy={1} />
								<feGaussianBlur stdDeviation={0.5} result="b" />
								<feFlood floodOpacity={0.4} />
								<feComposite operator="in" in2="b" />
								<feComposite in="SourceGraphic" />
							</filter>
						</defs>
						<g transform="translate(1.5 0.5)">
							<g
								className="c-cifras-video-close"
								transform="matrix(1, 0, 0, 1, -1.5, -0.5)">
								<ellipse
									className="a-cifras-video-close"
									cx={22.5}
									cy={23.5}
									rx={22.5}
									ry={23.5}
									transform="translate(1.5 0.5)"
								/>
							</g>
							<text
								className="b-cifras-video-close"
								transform="translate(13 35)">
								<tspan x={0} y={0}>
									{'X'}
								</tspan>
							</text>
						</g>
					</svg>
				</div>
			)}
		</div>
	)
}
