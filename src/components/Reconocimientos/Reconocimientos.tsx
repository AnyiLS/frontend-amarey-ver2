import React from 'react'
import { mocksRewards } from './mocks/Rewards.mocks'
import useGeneral from 'hooks/general.hook'
import ReconocimientosMobile from './ReconocimientosMobile/ReconocimientosMobile'
import { useTranslation } from 'react-i18next'
import { useLanguage } from 'context/language'
import useLayout from 'hooks/ancho.hook'

const Reconocimientos: React.FC = (): JSX.Element => {
	/** Hooks */
	const {t} = useTranslation()
	const { width } = useGeneral()

	/** Contexts */
	const { selectedLanguage } = useLanguage()

	/** States */
	const [slide, setSlide] = React.useState<number>(0)
	const [showVideo, setShowVideo] = React.useState<boolean>(false)

	const handleLessSlide = () => setSlide(slide - 1 < 0 ? 3 : slide - 1)

	const handleAddSlide = () => setSlide(slide + 1 > 3 ? 0 : slide + 1)

	const { navbarHeight } = useLayout()

	return (
		<React.Fragment>
			{width > 767 ? (
				<div className='h-full' style={{ marginTop: navbarHeight }}>
					<svg viewBox="300 200 1920 1970">
						<defs>
							<style>
								{
									".a-pentagrama,.f-pentagrama,.i-pentagrama,.l-pentagrama,.q-pentagrama{fill:#001f5f;}.b-pentagrama{fill:#e40032;}.c-pentagrama{clip-path:url(#a-pentagrama);}.d-pentagrama{fill:#e7002a;}.e-pentagrama{fill:#1c164e;}.f-pentagrama{font-size:40px;font-family:Silka-Bold, Silka;}.f-pentagrama,.q-pentagrama{font-weight:700;}.g-pentagrama{fill:#fff;}.h-pentagrama{fill:url(#d-pentagrama);}.i-pentagrama{font-size:24px;}.i-pentagrama,.l-pentagrama,.n-pentagrama{font-family:Silka-SemiBold, Silka;font-weight:600;}.j-pentagrama,.p-pentagrama{opacity:0.5;}.k-pentagrama{fill:url(#g-pentagrama);}.l-pentagrama{font-size:18px;}.m-pentagrama{fill:url(#j-pentagrama);}.n-pentagrama{fill:#182856;font-size:12px;}.o-pentagrama,.p-pentagrama{fill:#c7c7cc;}.q-pentagrama{font-size:70px;font-family:'Kiona-Bold';}.r-pentagrama{clip-path:url(#o-pentagrama);}.s-pentagrama{fill:url(#p-pentagrama);}.t-pentagrama{filter:url(#m-pentagrama);}.u-pentagrama{filter:url(#k-pentagrama);}.v-pentagrama{filter:url(#h-pentagrama);}.w-pentagrama{filter:url(#e-pentagrama);}.x-pentagrama{filter:url(#b-pentagrama);}"
								}
							</style>
							<clipPath id="a-pentagrama">
								<rect
									className="a-pentagrama"
									width={2599.809}
									height={4224.538}
								/>
							</clipPath>
							<filter
								id="b-pentagrama"
								x={958.973}
								y={477.497}
								width={603.939}
								height={417.65}
								filterUnits="userSpaceOnUse">
								<feOffset dy={3} />
								<feGaussianBlur stdDeviation={3} result="c" />
								<feFlood floodOpacity={0.502} />
								<feComposite operator="in" in2="c" />
								<feComposite in="SourceGraphic" />
							</filter>
							<pattern
								id="d-pentagrama"
								width={1}
								height={1}
								viewBox="-181.516 -74.52 953.561 650.393">
								<image
									preserveAspectRatio="xMidYMid slice"
									width={635.234}
									height={399.65}
									xlinkHref="ComponentTMP_0-image.png-pentagrama"
								/>
							</pattern>
							<filter
								id="e-pentagrama"
								x={1591.638}
								y={550.71}
								width={389.26}
								height={271.223}
								filterUnits="userSpaceOnUse">
								<feOffset dy={3} />
								<feGaussianBlur stdDeviation={3} result="f" />
								<feFlood floodOpacity={0.502} />
								<feComposite operator="in" in2="f" />
								<feComposite in="SourceGraphic" />
							</filter>
							<pattern
								id="g-pentagrama"
								width={1}
								height={1}
								viewBox="-124.765 -48.997 625.315 426.506">
								<image
									preserveAspectRatio="xMidYMid slice"
									width={406.584}
									height={253.223}
									xlinkHref="ComponentTMP_0-image2.png-pentagrama"
								/>
							</pattern>
							<filter
								id="h-pentagrama"
								x={540.989}
								y={550.71}
								width={389.259}
								height={271.223}
								filterUnits="userSpaceOnUse">
								<feOffset dy={3} />
								<feGaussianBlur stdDeviation={3} result="i" />
								<feFlood floodOpacity={0.502} />
								<feComposite operator="in" in2="i" />
								<feComposite in="SourceGraphic" />
							</filter>
							<pattern
								id="j-pentagrama"
								width={1}
								height={1}
								viewBox="-15.936 -60.477 757.102 516.393">
								<image
									preserveAspectRatio="xMidYMid slice"
									width={741.165}
									height={253.223}
									xlinkHref="ComponentTMP_0-image3.png-pentagrama"
								/>
							</pattern>
							<filter
								id="k-pentagrama"
								x={766.036}
								y={856.884}
								width={209.953}
								height={109.057}
								filterUnits="userSpaceOnUse">
								<feOffset dy={3} />
								<feGaussianBlur stdDeviation={3} result="l" />
								<feFlood floodOpacity={0.6} />
								<feComposite operator="in" in2="l" />
								<feComposite in="SourceGraphic" />
							</filter>
							<filter
								id="m-pentagrama"
								x={1545.989}
								y={856.884}
								width={209.953}
								height={109.057}
								filterUnits="userSpaceOnUse">
								<feOffset dy={3} />
								<feGaussianBlur stdDeviation={3} result="n" />
								<feFlood floodOpacity={0.6} />
								<feComposite operator="in" in2="n" />
								<feComposite in="SourceGraphic" />
							</filter>
							<clipPath id="o-pentagrama">
								<rect
									className="b-pentagrama"
									width={1620}
									height={912}
									transform="translate(150 1078)"
								/>
							</clipPath>
							<pattern
								id="p-pentagrama"
								preserveAspectRatio="xMidYMid slice"
								width="100%"
								height="100%"
								viewBox="0 0 1280 720">
								<image
									width={1280}
									height={720}
									xlinkHref="/images/fondo-video.webp"
								/>
							</pattern>
							<style>
								{
									".a-lin{fill:#e7002a;}.b-lin,.f-lin,.i-lin,.n-lin,.o-lin{fill:#001f5f;}.c-lin{fill:#e40032;}.d-lin{fill:#fff;}.e-lin{fill:url(#c-lin);}.f-lin{font-size:24px;}.f-lin,.i-lin,.k-lin{font-family:Silka-SemiBold, Silka;font-weight:600;}.g-lin,.m-lin{opacity:0.5;}.h-lin{fill:url(#f-lin);}.i-lin{font-size:18px;}.j-lin{fill:url(#i-lin);}.k-lin{fill:#182856;font-size:12px;}.l,.m-lin{fill:#c7c7cc;}.n-lin{font-size:40px;font-family:Silka-Bold, Silka;}.n-lin,.o-lin{font-weight:700;}.o-lin{font-size:70px;font-family:'Kiona-Bold';}.p-lin{filter:url(#l-lin);}.l-lin{fill:#C7C7CC;}.q-lin{filter:url(#j-lin);}.r-lin{filter:url(#g-lin);}.s-lin{filter:url(#d-lin);}.t-lin{filter:url(#a-lin);}"
								}
							</style>
							<filter
								id="a-lin"
								x={657.984}
								y={280.622}
								width={603.939}
								height={417.65}
								filterUnits="userSpaceOnUse">
								<feOffset dy={3} />
								<feGaussianBlur
									stdDeviation={3}
									result="b-lin"
								/>
								<feFlood floodOpacity={0.502} />
								<feComposite operator="in" in2="b-lin" />
								<feComposite in="SourceGraphic" />
							</filter>
							<pattern
								id="c-lin"
								width={1}
								height={1}
								viewBox="-181.516 -74.52 953.561 650.393">
								<image
									preserveAspectRatio="xMidYMid slice"
									width={635.234}
									height={399.65}
									xlinkHref="/images/logo1.webp"
								/>
							</pattern>
							<filter
								id="d-lin"
								x={1290.648}
								y={353.835}
								width={389.26}
								height={271.223}
								filterUnits="userSpaceOnUse">
								<feOffset dy={3} />
								<feGaussianBlur
									stdDeviation={3}
									result="e-lin"
								/>
								<feFlood floodOpacity={0.502} />
								<feComposite operator="in" in2="e-lin" />
								<feComposite in="SourceGraphic" />
							</filter>
							<pattern
								id="f-lin"
								width={1}
								height={1}
								viewBox="-124.765 -48.997 625.315 426.506">
								<image
									preserveAspectRatio="xMidYMid slice"
									width={406.584}
									height={253.223}
									xlinkHref="/images/logo2.webp"
								/>
							</pattern>
							<filter
								id="g-lin"
								x={240}
								y={353.835}
								width={389.259}
								height={271.223}
								filterUnits="userSpaceOnUse">
								<feOffset dy={3} />
								<feGaussianBlur
									stdDeviation={3}
									result="h-lin"
								/>
								<feFlood floodOpacity={0.502} />
								<feComposite operator="in" in2="h-lin" />
								<feComposite in="SourceGraphic" />
							</filter>
							<pattern
								id="i-lin"
								width={1}
								height={1}
								viewBox="-15.936 -60.477 757.102 516.393">
								<image
									preserveAspectRatio="xMidYMid slice"
									width={741.165}
									height={253.223}
									xlinkHref="/images/logo3.webp"
								/>
							</pattern>
							<filter
								id="j-lin"
								x={465.047}
								y={660.009}
								width={209.953}
								height={109.057}
								filterUnits="userSpaceOnUse">
								<feOffset dy={3} />
								<feGaussianBlur
									stdDeviation={3}
									result="k-lin"
								/>
								<feFlood floodOpacity={0.6} />
								<feComposite operator="in" in2="k-lin" />
								<feComposite in="SourceGraphic" />
							</filter>
							<filter
								id="l-lin"
								x={1245}
								y={660.009}
								width={209.953}
								height={109.057}
								filterUnits="userSpaceOnUse">
								<feOffset dy={3} />
								<feGaussianBlur
									stdDeviation={3}
									result="m-lin"
								/>
								<feFlood floodOpacity={0.6} />
								<feComposite operator="in" in2="m-lin" />
								<feComposite in="SourceGraphic" />
							</filter>
						</defs>
						<g transform="translate(8 -3.004)">
							<g
								className="c-pentagrama"
								transform="translate(-8 3.004)">
								<path
									className="d-pentagrama"
									d="M278,1953.27v184.893h90.484a40.419,40.419,0,0,1-16.522-15.9,48.67,48.67,0,0,1-6.5-24.536v-83.15c0-17.734-9.261-33.6-23.591-40.422Z"
									transform="translate(22.988 32.487)"
								/>
								<path
									className="d-pentagrama"
									d="M2295.819,2701.41l-657.365-312.871-.208-.1c-106.1-50.515-174.654-167.992-174.654-299.289v-448.5h-2.879v448.5c0,64.873,16.648,127.686,48.151,181.66,30.3,51.916,72.5,92.5,122.322,117.725q2.959,1.5,5.955,2.933l657.563,312.967Z"
									transform="translate(-51.915 1231.8)"
								/>
								<path
									className="e-pentagrama"
									d="M0,2137.1l657.365,312.871.208.1c106.1,50.514,174.654,167.991,174.654,299.289v448.5h2.878v-448.5c0-64.873-16.648-127.686-48.151-181.66-30.3-51.915-72.5-92.5-122.322-117.725q-2.959-1.5-5.955-2.932L1.114,2134.075Z"
									transform="translate(-417.553 -1027.208)"
								/>
								<path
									className="e-pentagrama"
									d="M1238,2431.3l449.73,246.774,164.061,90.023.194.1c99.066,54.377,163.077,180.837,163.077,322.176v482.793h2.688V3090.376c0-69.834-15.545-137.45-44.959-195.552-28.3-55.885-67.7-99.574-114.214-126.728q-2.763-1.619-5.561-3.157l-613.976-336.9Z"
									transform="translate(-1151.05 5192.326) rotate(-90)"
								/>
								<path
									className="d-pentagrama"
									d="M2666.768,2333.66l-273.92,750.84-.085.237c-44.225,121.186-147.077,199.49-262.028,199.49H1738.073v.01h-32.679c-56.787,0-111.79,19.016-159.044,55s-83.778,86.648-105.627,146.518L1309.331,3845.84,1238,4041.32l2.652,1.26,67.357-184.6,135.365-370.962c44.225-121.186,147.068-199.5,262.019-199.5h425.341c56.8,0,111.79-19.015,159.044-55,45.452-34.614,80.985-82.81,103.069-139.716q1.316-3.379,2.567-6.8l274.005-751.067Z"
									transform="translate(-247.301 -1509.633)"
								/>
								<path
									className="d-pentagrama"
									d="M2438.283,0l-273.92,750.84-.085.237c-44.225,121.186-147.077,199.49-262.029,199.49H1509.588v.011h-32.679c-56.787,0-111.79,19.015-159.044,55s-83.779,86.647-105.627,146.518l-131.392,360.086-71.33,195.479,2.652,1.261,67.357-184.6,135.365-370.963c44.225-121.186,147.068-199.5,262.019-199.5H1902.25c56.8,0,111.79-19.016,159.044-55,45.452-34.614,80.985-82.81,103.069-139.716q1.316-3.379,2.567-6.8L2440.935,1.276Z"
									transform="translate(-93.456 217.874)"
								/>
								<path
									className="a-pentagrama"
									d="M215.541,0H103.026C46.126,0,0,52.685,0,117.676v209.74H116.779c54.545,0,98.762-50.5,98.762-112.805Z"
									transform="translate(2220.989 1985.757) rotate(90)"
								/>
								<path
									className="a-pentagrama"
									d="M411.543,0V170.106H136.407C79.306,170.106,27.3,104.123,0,0Z"
									transform="translate(1809.446 196.875)"
								/>
								<path
									className="b-pentagrama"
									d="M1049.21,453.3l-19.028,52.148C996.21,598.551,917.2,658.71,828.889,658.71H259.215v2.519H828.889c43.63,0,85.879-14.61,122.182-42.25s64.363-66.563,81.147-112.56L1051.6,453.3Z"
									transform="translate(-168.971 -357.301)"
								/>
								<path
									className="a-pentagrama"
									d="M313.875,1051.266,435.529,717.807C469.5,624.7,548.512,564.546,636.82,564.546h508.189v-2.52H636.82c-43.629,0-85.878,14.611-122.182,42.251s-64.363,66.563-81.147,112.561L311.735,1050.576q1.07.343,2.14.69"
									transform="translate(-79.309 -318.304)"
								/>
								<path
									className="a-pentagrama"
									d="M118.6,1246.207a205.157,205.157,0,0,0,82.608-38.175c36.3-27.642,64.363-66.563,81.147-112.562L405.809,757.079l13.3-36.445c-.729-.188-1.457-.376-2.187-.56L280.318,1094.5c-28.8,78.924-89.963,134.164-161.718,149.163Z"
									transform="translate(1391.451 562.876) rotate(71)"
								/>
								<path
									className="a-pentagrama"
									d="M1589.835,453.3c-39.363,72.278-108.724,117.2-185.031,117.2h-366.36v2.519H1404.8c43.63,0,85.881-14.61,122.183-42.25,26.655-20.294,48.859-46.677,65.425-77.471Z"
									transform="translate(-120.171 -326.782)"
								/>
							</g>
						</g>
						<g transform="translate(300.989 96)">
							<text
								className="f-pentagrama"
								transform="translate(474 986.632)">
								<tspan x={216.06} y={38}>
									{t('Premios y reconocimientos')}
								</tspan>
							</text>
						</g>
						<g transform="translate(300.989 96)">
							<g transform="translate(0 106.497)">
								<g transform="translate(0 -100.875)">
									{mocksRewards(t, selectedLanguage).map((item, index) => (
										<React.Fragment>
											{index === slide &&
												item.component(
													() => setSlide(index),
													handleLessSlide,
													handleAddSlide
												)}
										</React.Fragment>
									))}
								</g>
							</g>
							<text
								className="f-pentagrama"
								transform="translate(474 295.988)">
								<tspan x={329.76} y={38}>
									{t('Certificaciones')}
								</tspan>
							</text>
						</g>
						<text
							className="q-pentagrama"
							transform={selectedLanguage === 'es' ? "translate(774.989 281)" : "translate(844.989 281)"}>
							<tspan x={154.515} y={70}>
								{t('RECONOCIMIENTOS')}
							</tspan>
						</text>
						<rect
							className="a-pentagrama"
							width={1636}
							height={910}
							transform="translate(442.989 1184)"
						/>
						<g
							className="r-pentagrama"
							transform="translate(300.989 96)">
							<rect
								className="s-pentagrama"
								width={1621.333}
								height={912}
								transform="translate(149.333 1078)"
								onClick={() => setShowVideo(true)}
							/>
						</g>
					</svg>
					<div className="fixed top-[0] left-[0] h-screen w-full bg-[#e6e6e6] z-[1]" style={{ display: showVideo ? 'flex' : 'none' }}>
						<video
							src={selectedLanguage === 'es' && showVideo ? "https://grupoamarey.com/pdf/video/Reconocimientos_1.mp4" : selectedLanguage === 'en' && showVideo ? "https://grupoamarey.com/videos/videos_inlges/Reconocimientos_ingles.mp4" : ''}
							width="100%"
							height="100%"
							controls
							id='video-cifras'
							autoPlay
						/>
						<span
							className="absolute top-[5%] right-[5%] text-white text-[30px] text-center font-bold bg-[#00000050] w-[50px] h-[50px] rounded-[100%]"
							onClick={() => {
								setShowVideo(false)
								const video: HTMLVideoElement = document.getElementById('video-cifras') as HTMLVideoElement

							if (video) video.pause()
							}}>
							X
						</span>
					</div>
				</div>
			) : (
				<ReconocimientosMobile />
			)}
		</React.Fragment>
	)
}

export default Reconocimientos
