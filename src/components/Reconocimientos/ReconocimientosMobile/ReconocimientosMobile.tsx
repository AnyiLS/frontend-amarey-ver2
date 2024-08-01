import React from 'react'
import { carouselItemsMobile } from '../mocks/Mobile'
import { useTranslation } from 'react-i18next'
import { useLanguage } from 'context/language'

const ReconocimientosMobile: React.FC = (): JSX.Element => {
	const [carouselSlider, setCarouselSlider] = React.useState<number>(0)
	const [showVideo, setShowVideo] = React.useState<boolean>(false)

	const handleLessCarouselSlider = () =>
		setCarouselSlider(carouselSlider - 1 < 0 ? 3 : carouselSlider - 1)
	const handleAddCarouselSlider = () =>
		setCarouselSlider(carouselSlider + 1 > 3 ? 0 : carouselSlider + 1)

	const { t } = useTranslation()
	const { selectedLanguage } = useLanguage();

	const [initial, setInitial] = React.useState<number>(0)

	return (
		<React.Fragment>
			<svg viewBox="56 0 414 780" preserveAspectRatio="none">
				<defs>
					<style>
						{
							".a-reconocimientos-mobile-3{fill:#fff;}.b-reconocimientos-mobile-3,.h-reconocimientos-mobile-3,.j-reconocimientos-mobile-3,.m-reconocimientos-mobile-3,.r-reconocimientos-mobile-3{fill:#001f5f;}.c-reconocimientos-mobile-3{clip-path:url(#a-reconocimientos-mobile-3);}.d-reconocimientos-mobile-3{clip-path:url(#b-reconocimientos-mobile-3);}.e-reconocimientos-mobile-3{fill:#e7002a;}.f-reconocimientos-mobile-3{fill:#1c164e;}.g-reconocimientos-mobile-3{fill:#e40032;}.h-reconocimientos-mobile-3{font-size:32px;font-family:'Kiona-Bold';}.h-reconocimientos-mobile-3,.j-reconocimientos-mobile-3,.r-reconocimientos-mobile-3{font-weight:700;}.i-reconocimientos-mobile-3{fill:url(#e-reconocimientos-mobile-3);}.j-reconocimientos-mobile-3{font-size:12px;}.j-reconocimientos-mobile-3,.r-reconocimientos-mobile-3{font-family:Silka-Bold, Silka;}.k-reconocimientos-mobile-3,.q-reconocimientos-mobile-3{opacity:0.5;}.l-reconocimientos-mobile-3{fill:url(#h-reconocimientos-mobile-3);}.m-reconocimientos-mobile-3{font-size:9px;}.m-reconocimientos-mobile-3,.o-reconocimientos-mobile-3{font-family:Silka-SemiBold, Silka;font-weight:600;}.n-reconocimientos-mobile-3{fill:url(#k-reconocimientos-mobile-3);}.o-reconocimientos-mobile-3{fill:#182856;font-size:6px;}.p-reconocimientos-mobile-3,.q-reconocimientos-mobile-3{fill:#c7c7cc;}.r-reconocimientos-mobile-3{font-size:22px;}.s-reconocimientos-mobile-3{clip-path:url(#p-reconocimientos-mobile-3);}.t-reconocimientos-mobile-3{fill:url(#q-reconocimientos-mobile-3);}.u-reconocimientos-mobile-3{filter:url(#n-reconocimientos-mobile-3);}.v-reconocimientos-mobile-3{filter:url(#l-reconocimientos-mobile-3);}.w-reconocimientos-mobile-3{filter:url(#i-reconocimientos-mobile-3);}.x-reconocimientos-mobile-3{filter:url(#f-reconocimientos-mobile-3);}.y-reconocimientos-mobile-3{filter:url(#c-reconocimientos-mobile-3);}"
						}
					</style>
					<clipPath id="a-reconocimientos-mobile-3">
						<rect
							className="a-reconocimientos-mobile-3"
							width={414}
							height={2095}
							transform="translate(-187.5 -56)"
						/>
					</clipPath>
					<clipPath id="b-reconocimientos-mobile-3">
						<rect
							className="b-reconocimientos-mobile-3"
							width={414.499}
							height={2092.817}
						/>
					</clipPath>
					<filter
						id="c-reconocimientos-mobile-3"
						x={153.393}
						y={143.947}
						width={221.214}
						height={225.606}
						filterUnits="userSpaceOnUse">
						<feOffset dy={3} />
						<feGaussianBlur stdDeviation={3} result="d" />
						<feFlood floodOpacity={0.502} />
						<feComposite operator="in" in2="d" />
						<feComposite in="SourceGraphic" />
					</filter>
					<pattern
						id="e-reconocimientos-mobile-3"
						width={1}
						height={1}
						viewBox="-55.398 -100.145 428.138 437.391">
						<image
							preserveAspectRatio="xMidYMid slice"
							width={329.984}
							height={207.606}
							xlinkHref="ComponentTMP_0-image.png-reconocimientos-mobile-3"
						/>
					</pattern>
					<filter
						id="f-reconocimientos-mobile-3"
						x={364.227}
						y={179.816}
						width={162.739}
						height={165.867}
						filterUnits="userSpaceOnUse">
						<feOffset dy={3} />
						<feGaussianBlur stdDeviation={3} result="g" />
						<feFlood floodOpacity={0.502} />
						<feComposite operator="in" in2="g" />
						<feComposite in="SourceGraphic" />
					</filter>
					<pattern
						id="h-reconocimientos-mobile-3"
						width={1}
						height={1}
						patternTransform="translate(474.842 295.735) rotate(-180)"
						viewBox="-28.206 -114.859 312.316 319.066">
						<image
							preserveAspectRatio="xMidYMid slice"
							width={237.421}
							height={147.867}
							xlinkHref="ComponentTMP_0-image2.png-reconocimientos-mobile-3"
						/>
					</pattern>
					<filter
						id="i-reconocimientos-mobile-3"
						x={0}
						y={179.816}
						width={162.739}
						height={165.867}
						filterUnits="userSpaceOnUse">
						<feOffset dy={3} />
						<feGaussianBlur stdDeviation={3} result="j" />
						<feFlood floodOpacity={0.502} />
						<feComposite operator="in" in2="j" />
						<feComposite in="SourceGraphic" />
					</filter>
					<pattern
						id="k-reconocimientos-mobile-3"
						width={1}
						height={1}
						patternTransform="translate(865.593 295.735) rotate(-180)"
						viewBox="8.051 -204.827 406.279 415.059">
						<image
							preserveAspectRatio="xMidYMid slice"
							width={432.796}
							height={147.867}
							xlinkHref="ComponentTMP_0-image3.png-reconocimientos-mobile-3"
						/>
					</pattern>
					<filter
						id="l-reconocimientos-mobile-3"
						x={120.107}
						y={365.56}
						width={84.573}
						height={49.58}
						filterUnits="userSpaceOnUse">
						<feOffset dy={3} />
						<feGaussianBlur stdDeviation={3} result="m" />
						<feFlood floodOpacity={0.6} />
						<feComposite operator="in" in2="m" />
						<feComposite in="SourceGraphic" />
					</filter>
					<filter
						id="n-reconocimientos-mobile-3"
						x={323.32}
						y={365.56}
						width={84.573}
						height={49.58}
						filterUnits="userSpaceOnUse">
						<feOffset dy={3} />
						<feGaussianBlur stdDeviation={3} result="o" />
						<feFlood floodOpacity={0.6} />
						<feComposite operator="in" in2="o" />
						<feComposite in="SourceGraphic" />
					</filter>
					<clipPath id="p-reconocimientos-mobile-3">
						<rect
							className="a-reconocimientos-mobile-3"
							width={414}
							height={233}
							transform="translate(0 553)"
						/>
					</clipPath>
					<pattern
						id="q-reconocimientos-mobile-3"
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
				</defs>
				<g transform="translate(9)">
					<g
						className="c-reconocimientos-mobile-3"
						transform="translate(234.983 56)">
						<rect
							className="a-reconocimientos-mobile-3"
							width={414}
							height={2095}
							transform="translate(-187.5 -56)"
						/>
						<g transform="translate(-187.5 -53.595)">
							<g
								className="d-reconocimientos-mobile-3"
								transform="translate(-0.499 -2)">
								<path
									className="e-reconocimientos-mobile-3"
									d="M278,1953.27v193.312h72.081c-5.361-3.562-9.9-9.294-13.161-16.625a63.59,63.59,0,0,1-5.181-25.654v-86.936c0-18.541-7.377-35.13-18.793-42.263Z"
									transform="translate(-277.502 -1330.997)"
								/>
								<path
									className="e-reconocimientos-mobile-3"
									d="M1818.824,1992.6l-281.891-103.807-.089-.032c-45.5-16.76-74.9-55.738-74.9-99.3V1640.657h-1.234v148.806c0,21.524,7.139,42.365,20.648,60.273,13,17.225,31.09,30.691,52.454,39.06q1.269.5,2.554.973l281.976,103.839Z"
									transform="translate(-1461.819 -1178.021)"
								/>
								<path
									className="f-reconocimientos-mobile-3"
									d="M0,2135.375l364.517,134.234.115.042c58.833,21.672,96.848,72.075,96.848,128.406v192.422h1.6V2398.056c0-27.833-9.232-54.782-26.7-77.939-16.8-22.273-40.2-39.686-67.829-50.508q-1.641-.646-3.3-1.258L.618,2134.075Z"
									transform="translate(-255.827 -774.835)"
								/>
								<path
									className="f-reconocimientos-mobile-3"
									d="M1238,2428.531l87.774,37.264,32.02,13.594.038.016a52.591,52.591,0,0,1,31.828,48.651v72.905h.524v-72.905a53.783,53.783,0,0,0-8.775-29.53,52.348,52.348,0,0,0-22.291-19.137q-.539-.245-1.085-.477l-119.83-50.874Z"
									transform="translate(-1264.866 -1730.638)"
								/>
								<path
									className="e-reconocimientos-mobile-3"
									d="M1693.409,2333.659,1606.1,2518.83l-.027.058c-14.1,29.887-46.879,49.2-83.519,49.2H1397.4v0h-10.416a99.845,99.845,0,0,0-50.694,13.563c-15.062,8.874-26.7,21.369-33.668,36.134l-41.88,88.8L1238,2754.8l.845.311,21.469-45.526,43.147-91.486c14.1-29.886,46.877-49.2,83.517-49.2h135.574a99.835,99.835,0,0,0,50.694-13.564,83.955,83.955,0,0,0,32.852-34.456q.419-.833.818-1.677l87.337-185.226Z"
									transform="translate(-1258.879 -604.942)"
								/>
								<path
									className="e-reconocimientos-mobile-3"
									d="M1622.2,0,1504.738,249.123l-.036.079c-18.965,40.208-63.07,66.188-112.363,66.188H1223.957v0h-14.013a134.322,134.322,0,0,0-68.2,18.248c-20.264,11.939-35.926,28.749-45.3,48.613L1040.1,501.726l-30.588,64.858,1.137.419,28.884-61.249,58.047-123.081c18.965-40.208,63.066-66.192,112.359-66.192h182.395a134.312,134.312,0,0,0,68.2-18.248c19.491-11.484,34.728-27.475,44.2-46.356q.564-1.121,1.1-2.257L1623.337.426Z"
									transform="translate(-1098.563 110.069)"
								/>
								<path
									className="b-reconocimientos-mobile-3"
									d="M2202.014,1820.84H2115.7c-43.65,0-79.034-37.021-79.034-82.689V1590.77h89.585c41.843,0,75.763,35.489,75.763,79.267Z"
									transform="translate(-1762.335 -1005.255)"
								/>
								<path
									className="g-reconocimientos-mobile-3"
									d="M597.981,453.3l-8.16,17.3c-14.568,30.89-48.45,50.85-86.318,50.85H259.215v.836H503.5A103.193,103.193,0,0,0,555.9,508.271,88.879,88.879,0,0,0,585,481.032a79.465,79.465,0,0,0,5.7-10.107l8.312-17.624Z"
									transform="translate(-373.903 -499.776)"
								/>
								<path
									className="b-reconocimientos-mobile-3"
									d="M312.653,724.35,364.82,613.712c14.568-30.89,48.45-50.85,86.318-50.85H772.059v-.836H451.138a103.2,103.2,0,0,0-52.394,14.018c-15.567,9.171-27.6,22.085-34.8,37.346l-52.211,110.73.917.229"
									transform="translate(-347.227 -553.949)"
								/>
							</g>
						</g>
					</g>
					<text
						className="h-reconocimientos-mobile-3"
						transform="translate(83.483 36)">
						<tspan x={selectedLanguage === 'es' ? 19.464 : 55.464} y={32}>
							{t('RECONOCIMIENTOS')}
						</tspan>
					</text>
					<g transform="translate(47.483 -39)" onTouchEnd={(e) => {
						if (e.nativeEvent.changedTouches[0].clientX > initial) {
							setCarouselSlider((prevState: number) => prevState === 0 ? 3 : prevState - 1)
						} else if (e.nativeEvent.changedTouches[0].clientX < initial) {
							setCarouselSlider((prevState: number) => prevState === 3 ? 0 : prevState + 1)
						}
					}} onTouchStart={(e) => setInitial(e.nativeEvent.changedTouches[0].clientX)}>
						{carouselItemsMobile(t, selectedLanguage)[carouselSlider].text(
							handleAddCarouselSlider,
							handleLessCarouselSlider
						)}
						<text
							className="r-reconocimientos-mobile-3"
							transform="translate(42.813 137.21)">
							<tspan x={82.621} y={21}>
								{t('Certificaciones')}
							</tspan>
						</text>
					</g>
					<g transform="translate(82.983 -630.632)">
						<text
							className="r-reconocimientos-mobile-3"
							transform="translate(-25 1080.632)">
							<tspan x={selectedLanguage === 'es' ? 47.533 : 47.533} y={21}>
								{t('Premios y reconocimientos')}
							</tspan>
						</text>
					</g>
					<rect
						className="b-reconocimientos-mobile-3"
						width={414}
						height={233}
						transform="translate(47.483 520)"
					/>
					<g
						className="s-reconocimientos-mobile-3"
						transform="translate(47.483 -39)">
						<rect
							className="t-reconocimientos-mobile-3"
							width={414.222}
							height={233}
							transform="translate(-0.111 553)"
							onClick={() => setShowVideo(true)}
						/>
					</g>
				</g>
			</svg>
			<div
				className="fixed top-[0] left-[0] h-screen w-full bg-[#e6e6e6] z-[1]"
				style={{ display: showVideo ? 'flex' : 'none' }}>
				<video
					src={selectedLanguage === 'es' && showVideo ? "https://grupoamarey.com/pdf/video/Reconocimientos_1.mp4" : selectedLanguage === 'en' && showVideo ? "https://grupoamarey.com/videos/videos_inlges/Reconocimientos_ingles.mp4" : ''}
					width="100%"
					height="100%"
					controls
					id='video-cifras'
					playsInline
				/>
				<span
					className="absolute top-[5%] right-[5%] text-white text-[19px] text-center font-bold bg-[#00000050] w-[30px] h-[30px] rounded-[100%]"
					onClick={() => {
						setShowVideo(false)
						const video: HTMLVideoElement = document.getElementById('video-cifras') as HTMLVideoElement

							if (video) video.pause()
					}}>
					X
				</span>
			</div>
		</React.Fragment>
	)
}

export default ReconocimientosMobile
