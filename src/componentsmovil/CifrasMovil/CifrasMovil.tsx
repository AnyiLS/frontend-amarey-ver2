import { useLanguage } from 'context/language';
import React from 'react'
import { useTranslation } from 'react-i18next';

export const CifrasMovil: React.FC = () => {
	/** States */
	const [openVideo, setOpenVideo] = React.useState<boolean>(false)
	const [numberVideo, setNumberVideo] = React.useState<number>(0)
	const [mute, setMute] = React.useState(false);

	const {t} = useTranslation()

	/** Contexts */
	const { selectedLanguage } = useLanguage();

	const handlePlayVideo = () => {
		if(mute){
			const video: HTMLVideoElement = document.getElementById('video-cifras') as HTMLVideoElement;

			video.pause()
			setMute(false)
		} else {
			const video: HTMLVideoElement = document.getElementById('video-cifras') as HTMLVideoElement;

			video.play()
			setMute(true)
		}
	}

	const video = [
		{ url: openVideo && selectedLanguage === 'en' ? 'https://grupoamarey.com/videos/videos_inlges/Trainning_Vertical.mp4' :'https://grupoamarey.com/pdf/video/Cifras educacion vertical_1.mp4' },
		{ url: openVideo && selectedLanguage === 'en' ? 'https://grupoamarey.com/videos/videos_inlges/Robotics_vertical.mp4' : 'https://grupoamarey.com/pdf/video/Cifras robotica vertical_1.mp4' },
		{ url: openVideo && selectedLanguage === 'en' ? 'https://grupoamarey.com/videos/videos_inlges/Logistics_vertical.mp4' : 'https://grupoamarey.com/pdf/video/Cifras logistica vertical_1.mp4' },
		{ url: openVideo && selectedLanguage === 'en' ? 'https://grupoamarey.com/videos/videos_inlges/Orthopedics_vertical.mp4' : 'https://grupoamarey.com/pdf/video/Cifras ortopedia vertical_1.mp4' },
	]


	return (
		<div className="relative">
			<svg
				viewBox="14 0 412 805"
				width="100%"
				height="100%"
				preserveAspectRatio="none">
				<defs>
					<style>
						{
							".a-cifras-impacto,.f-cifras-impacto,.g-cifras-impacto,.h-cifras-impacto{fill:none;}.b-cifras-impacto{fill:#e40032;}.c-cifras-impacto,.l-cifras-impacto{fill:#001f5f;}.d-cifras-impacto{opacity:0.52;}.e-cifras-impacto{clip-path:url(#a-cifras-impacto);}.f-cifras-impacto{stroke:#fff;}.f-cifras-impacto,.g-cifras-impacto,.h-cifras-impacto{stroke-miterlimit:10;stroke-width:1.074px;}.g-cifras-impacto{stroke:#db032e;}.h-cifras-impacto{stroke:#e40032;}.i-cifras-impacto,.j-cifras-impacto{fill:#fff;}.i-cifras-impacto{font-size:45px;}.i-cifras-impacto,.l-cifras-impacto{font-family:Kiona-Bold;font-weight:700;}.k-cifras-impacto{fill:url(#d-cifras-impacto);}.l-cifras-impacto{font-size:25px;}.m-cifras-impacto{font-size:11px;}.ac-cifras-impacto,.n-cifras-impacto,.p-cifras-impacto,.w-cifras-impacto,.z-cifras-impacto{isolation:isolate;}.o-cifras-impacto{clip-path:url(#e-cifras-impacto);}.p-cifras-impacto,.t-cifras-impacto{opacity:0.7;fill:url(#f-cifras-impacto);}.ac-cifras-impacto,.p-cifras-impacto,.w-cifras-impacto,.z-cifras-impacto{mix-blend-mode:multiply;}.q-cifras-impacto{opacity:0.8;}.r-cifras-impacto{clip-path:url(#i-cifras-impacto);}.s-cifras-impacto{fill:url(#j-cifras-impacto);}.u-cifras-impacto{fill:url(#s-cifras-impacto);}.v-cifras-impacto{fill:url(#aa-cifras-impacto);}.w-cifras-impacto{filter:url(#ae-cifras-impacto);}.x-cifras-impacto{filter:url(#ab-cifras-impacto);}.y-cifras-impacto{filter:url(#y-cifras-impacto);}.z-cifras-impacto{filter:url(#w-cifras-impacto);}.aa-cifras-impacto{filter:url(#t-cifras-impacto);}.ab-cifras-impacto{filter:url(#p-cifras-impacto);}.ac-cifras-impacto{filter:url(#n-cifras-impacto);}.ad-cifras-impacto{filter:url(#k-cifras-impacto);}.ae-cifras-impacto{filter:url(#g-cifras-impacto);}.af-cifras-impacto{filter:url(#b-cifras-impacto);}"
						}
					</style>
					<clipPath id="a-cifras-impacto">
						<rect
							className="a-cifras-impacto"
							width={416}
							height={895}
						/>
					</clipPath>
					<filter
						id="b-cifras-impacto"
						x={12.381}
						y={0.119}
						width={445.25}
						height={327.217}
						filterUnits="userSpaceOnUse">
						<feOffset dy={-3} />
						<feGaussianBlur stdDeviation={3} result="c" />
						<feFlood floodOpacity={0.349} />
						<feComposite operator="in" in2="c" />
						<feComposite in="SourceGraphic" />
					</filter>
					<pattern
						id="d-cifras-impacto"
						preserveAspectRatio="xMidYMid slice"
						width="100%"
						height="100%"
						viewBox="0 0 1920 1280">
						<image
							width={1920}
							height={1280}
							xlinkHref="/images/mobile/cifras/cifras-2.webp"
						/>
					</pattern>
					<clipPath id="e-cifras-impacto">
						<rect
							className="b-cifras-impacto"
							width={16.289}
							height={16.531}
						/>
					</clipPath>
					<linearGradient
						id="f-cifras-impacto"
						x1={0.5}
						x2={0.5}
						y2={1}
						gradientUnits="objectBoundingBox">
						<stop offset={0} stopColor="#001f5f" stopOpacity={0} />
						<stop offset={1} stopColor="#001f5f" />
					</linearGradient>
					<filter
						id="g-cifras-impacto"
						x={0}
						y={586.902}
						width={445.25}
						height={327.217}
						filterUnits="userSpaceOnUse">
						<feOffset dy={-3} />
						<feGaussianBlur stdDeviation={3} result="h" />
						<feFlood floodOpacity={0.349} />
						<feComposite operator="in" in2="h" />
						<feComposite in="SourceGraphic" />
					</filter>
					<clipPath id="i-cifras-impacto">
						<rect
							className="b-cifras-impacto"
							width={20.746}
							height={21.054}
						/>
					</clipPath>
					<pattern
						id="j-cifras-impacto"
						width={1}
						height={1}
						patternTransform="translate(832 770) rotate(-180)"
						viewBox="4.809 34.019 293.448 180.686">
						<image
							preserveAspectRatio="xMidYMid slice"
							width={416}
							height={277.333}
							xlinkHref="/images/mobile/cifras/cifras-3.webp"
						/>
					</pattern>
					<filter
						id="k-cifras-impacto"
						x={12.381}
						y={639.973}
						width={434}
						height={274.146}
						filterUnits="userSpaceOnUse">
						<feOffset dy={-3} />
						<feGaussianBlur stdDeviation={3} result="l" />
						<feFlood floodOpacity={0.349} />
						<feComposite operator="in" in2="l" />
						<feComposite in="SourceGraphic" />
					</filter>
					<filter
						id="n-cifras-impacto"
						x={12.381}
						y={639.973}
						width={434}
						height={274.146}
						filterUnits="userSpaceOnUse">
						<feOffset dy={-3} />
						<feGaussianBlur stdDeviation={3} result="o" />
						<feFlood floodOpacity={0.349} />
						<feComposite operator="in" in2="o" />
						<feComposite in="SourceGraphic" />
					</filter>
					<filter
						id="p-cifras-impacto"
						x={12.381}
						y={0}
						width={309}
						height={225.118}
						filterUnits="userSpaceOnUse">
						<feOffset dy={-3} />
						<feGaussianBlur stdDeviation={3} result="q" />
						<feFlood floodOpacity={0.349} />
						<feComposite operator="in" in2="q" />
						<feComposite in="SourceGraphic" />
					</filter>
					<pattern
						id="s-cifras-impacto"
						width={1}
						height={1}
						patternTransform="matrix(-1, 0, 0, 1, 556.658, 0)"
						viewBox="0 10.327 278.329 165.1">
						<image
							preserveAspectRatio="xMidYMid slice"
							width={278.329}
							height={185.754}
							xlinkHref="/images/mobile/cifras/cifras-1.webp"
						/>
					</pattern>
					<filter
						id="t-cifras-impacto"
						x={12.381}
						y={0}
						width={296.329}
						height={183.099}
						filterUnits="userSpaceOnUse">
						<feOffset dy={-3} />
						<feGaussianBlur stdDeviation={3} result="u" />
						<feFlood floodOpacity={0.349} />
						<feComposite operator="in" in2="u" />
						<feComposite in="SourceGraphic" />
					</filter>
					<filter
						id="w-cifras-impacto"
						x={12.381}
						y={0}
						width={296.329}
						height={183.099}
						filterUnits="userSpaceOnUse">
						<feOffset dy={-3} />
						<feGaussianBlur stdDeviation={3} result="x" />
						<feFlood floodOpacity={0.349} />
						<feComposite operator="in" in2="x" />
						<feComposite in="SourceGraphic" />
					</filter>
					<filter
						id="y-cifras-impacto"
						x={136.381}
						y={689}
						width={309}
						height={225.118}
						filterUnits="userSpaceOnUse">
						<feOffset dy={-3} />
						<feGaussianBlur stdDeviation={3} result="z" />
						<feFlood floodOpacity={0.349} />
						<feComposite operator="in" in2="z" />
						<feComposite in="SourceGraphic" />
					</filter>
					<pattern
						id="aa-cifras-impacto"
						width={1}
						height={1}
						patternTransform="translate(556.658 495) rotate(-180)"
						viewBox="8.568 15.309 261.193 154.935">
						<image
							preserveAspectRatio="xMidYMid slice"
							width={278.329}
							height={185.553}
							xlinkHref="/images/mobile/cifras/cifras-4.webp"
						/>
					</pattern>
					<filter
						id="ab-cifras-impacto"
						x={150.052}
						y={731.019}
						width={296.329}
						height={183.1}
						filterUnits="userSpaceOnUse">
						<feOffset dy={-3} />
						<feGaussianBlur stdDeviation={3} result="ac" />
						<feFlood floodOpacity={0.349} />
						<feComposite operator="in" in2="ac" />
						<feComposite in="SourceGraphic" />
					</filter>
					<filter
						id="ae-cifras-impacto"
						x={150.052}
						y={731.019}
						width={296.329}
						height={183.1}
						filterUnits="userSpaceOnUse">
						<feOffset dy={-3} />
						<feGaussianBlur stdDeviation={3} result="af" />
						<feFlood floodOpacity={0.349} />
						<feComposite operator="in" in2="af" />
						<feComposite in="SourceGraphic" />
					</filter>
				</defs>
				<g>
					<g
						transform="translate(12.381 0.119)"
						onClick={() => {
							setOpenVideo(true)
							setNumberVideo(1)
							document.body.style.overflow = 'hidden'
						}}>
						<path
							className="c-cifras-impacto"
							d="M0,0H413V895H0Z"
							transform="translate(1)"
						/>
						<g
							className="d-cifras-impacto"
							transform="translate(0 1)">
							<g
								className="e-cifras-impacto"
								transform="translate(0 0)">
								<path
									className="f-cifras-impacto"
									d="M1482.54.21,1335.379,357.187a135.235,135.235,0,0,1-124.843,83.933H928.484a135.247,135.247,0,0,0-124.843,83.931L679.394,826.383a135.238,135.238,0,0,1-124.843,83.933H272.5a135.245,135.245,0,0,0-124.843,83.933L.5,1351.226"
									transform="translate(-1081.448 -1013.754)"
								/>
								<path
									className="g-cifras-impacto"
									d="M1548.016,65.685,1400.855,422.662a135.235,135.235,0,0,1-124.843,83.933H993.96a135.247,135.247,0,0,0-124.843,83.931L744.87,891.858a135.239,135.239,0,0,1-124.843,83.933H337.975a135.245,135.245,0,0,0-124.843,83.933L65.971,1416.7"
									transform="translate(-1003.378 -934.457)"
								/>
								<path
									className="f-cifras-impacto"
									d="M1613.492,131.16,1466.33,488.137a135.235,135.235,0,0,1-124.843,83.933H1059.435A135.247,135.247,0,0,0,934.592,656L810.345,957.333A135.238,135.238,0,0,1,685.5,1041.266H403.45A135.245,135.245,0,0,0,278.607,1125.2L131.446,1482.176"
									transform="translate(-925.309 -855.161)"
								/>
								<path
									className="h-cifras-impacto"
									d="M1678.966,196.635,1531.805,553.612a135.234,135.234,0,0,1-124.843,83.935H1124.91a135.247,135.247,0,0,0-124.843,83.931L875.82,1022.808a135.241,135.241,0,0,1-124.843,83.936H468.925a135.246,135.246,0,0,0-124.843,83.933L196.921,1547.653"
									transform="translate(-847.24 -775.865)"
								/>
								<path
									className="f-cifras-impacto"
									d="M1744.442,262.111,1597.281,619.088a135.235,135.235,0,0,1-124.843,83.933H1190.386a135.247,135.247,0,0,0-124.843,83.931L941.3,1088.284a135.239,135.239,0,0,1-124.843,83.933H534.4a135.245,135.245,0,0,0-124.843,83.933L262.4,1613.127"
									transform="translate(-769.17 -696.567)"
								/>
								<path
									className="g-cifras-impacto"
									d="M1809.917,327.586,1662.756,684.563A135.235,135.235,0,0,1,1537.913,768.5H1255.861a135.246,135.246,0,0,0-124.843,83.931l-124.247,301.332a135.239,135.239,0,0,1-124.843,83.933H599.876a135.245,135.245,0,0,0-124.843,83.933L327.872,1678.6"
									transform="translate(-691.101 -617.27)"
								/>
								<path
									className="f-cifras-impacto"
									d="M1875.392,393.061,1728.231,750.037a135.236,135.236,0,0,1-124.843,83.933H1321.336A135.247,135.247,0,0,0,1196.493,917.9l-124.247,301.332A135.238,135.238,0,0,1,947.4,1303.167H665.351A135.246,135.246,0,0,0,540.508,1387.1L393.347,1744.077"
									transform="translate(-613.032 -537.974)"
								/>
								<path
									className="g-cifras-impacto"
									d="M1940.868,458.537,1793.708,815.514a135.238,135.238,0,0,1-124.844,83.933H1386.812a135.247,135.247,0,0,0-124.843,83.931L1137.722,1284.71a135.241,135.241,0,0,1-124.843,83.933H730.827a135.245,135.245,0,0,0-124.843,83.933L458.823,1809.553"
									transform="translate(-534.962 -458.677)"
								/>
								<path
									className="f-cifras-impacto"
									d="M2006.344,524.012,1859.182,880.989a135.235,135.235,0,0,1-124.843,83.933H1452.288a135.247,135.247,0,0,0-124.843,83.931L1203.2,1350.185a135.239,135.239,0,0,1-124.843,83.933H796.3a135.246,135.246,0,0,0-124.843,83.933L524.3,1875.028"
									transform="translate(-456.893 -379.38)"
								/>
							</g>
						</g>
					</g>
					<text
						className="i-cifras-impacto"
						transform="translate(220 348.119)">
						<tspan x={selectedLanguage === 'es' ? -112.567 : -86.567} y={45}>
							{t('Cifras de')}
						</tspan>
						<tspan x={-97.897} y={92}>
							{t('impacto')}
						</tspan>
					</text>
					<g transform="translate(12.381 0.119)">
						<g
							className="af-cifras-impacto"
							transform="matrix(1, 0, 0, 1, -21.38, -12.12)">
							<path
								className="j-cifras-impacto"
								d="M78.132,4.465V309.217l251.605-.465c89.868,1.351,99.7-45.327,119.738-114.825L505.381,0Z"
								transform="translate(-56.75 12.12)"
							/>
						</g>
						<path
							className="k-cifras-impacto"
							d="M0,0V254.146H271.42c45.984-1.27,73.646-1.532,98.561-94.517L416,0Z"
						/>
						<text
							className="l-cifras-impacto"
							transform="translate(293 283)"
							onClick={() => {
								setOpenVideo(true)
								setNumberVideo(1)
								document.body.style.overflow = 'hidden'
							}}>
							<tspan x={-70.575} y={0}>
								{'+3000'}
							</tspan>
							<tspan className="m-cifras-impacto">
								<tspan x={selectedLanguage === 'es' ? -184.371 : -210.371} y={13}>
									{t('cirugías robóticas realizadas')}
								</tspan>
							</tspan>
						</text>
						<g
							className="n-cifras-impacto"
							transform="translate(-73.953 146.357)"
							onClick={() => {
								setOpenVideo(true)
								setNumberVideo(1)
							}}>
							<g
								className="n-cifras-impacto"
								transform="translate(371.953 120.175)">
								<g className="o-cifras-impacto">
									<path
										className="b-cifras-impacto"
										d="M6.274,0a1.039,1.039,0,0,1,.643.651.885.885,0,0,1-.928,1.11c-1.261.009-2.522,0-3.783,0H1.775V14.745H14.549c0-.159,0-.3,0-.446,0-1.285,0-2.571.007-3.856a.858.858,0,0,1,1.57-.482,1.047,1.047,0,0,1,.154.513q.017,2.571,0,5.142a.891.891,0,0,1-.9.913c-.073,0-.147,0-.22,0H1.132C.3,16.53.008,16.237.007,15.4.007,10.64.013,5.878,0,1.116A1.043,1.043,0,0,1,.691,0Z"
										transform="translate(0)"
									/>
									<path
										className="b-cifras-impacto"
										d="M98.3,6.823c-1.2,0-2.315,0-3.428,0a.886.886,0,1,1-.012-1.755q2.753-.005,5.506,0c.726,0,.942.209.945.941q.014,2.772,0,5.543a.877.877,0,0,1-.862.979.886.886,0,0,1-.877-1c0-1.122,0-2.243,0-3.365l-.161-.133a1.285,1.285,0,0,1-.178.357q-2.77,2.785-5.555,5.555a1.507,1.507,0,0,1-.535.363.865.865,0,0,1-.843-1.453c.753-.77,1.519-1.526,2.28-2.288q1.726-1.726,3.452-3.453c.074-.074.141-.155.264-.291"
										transform="translate(-85.238 -4.691)"
									/>
								</g>
							</g>
						</g>
						<path
							className="p-cifras-impacto"
							d="M0,0V254.146H271.42c45.984-1.27,73.646-1.532,98.561-94.517L416,0Z"
							onClick={() => {
								setOpenVideo(true)
								setNumberVideo(1)
								document.body.style.overflow = 'hidden'
							}}
						/>
					</g>
					<g
						transform="translate(12.381 550.973)"
						onClick={() => {
							setOpenVideo(true)
							setNumberVideo(2)
							document.body.style.overflow = 'hidden'
						}}>
						<g
							className="ae-cifras-impacto"
							transform="matrix(1, 0, 0, 1, -21.38, -653.97)">
							<path
								className="j-cifras-impacto"
								d="M78.132,4.465V309.217l251.605-.465c89.868,1.351,99.7-45.327,119.738-114.825L505.381,0Z"
								transform="translate(514.38 908.12) rotate(180)"
							/>
						</g>
						<text
							className="l-cifras-impacto"
							transform="translate(137.711 -21.854)">
							<tspan x={0} y={0}>
								{t('10 instituciones')}
							</tspan>
							<tspan className="m-cifras-impacto">
								<tspan x={0} y={13}>
									{t('con el modelo de logística hospitalaria')}
								</tspan>
							</tspan>
						</text>
						<g
							className="n-cifras-impacto"
							transform="translate(112 -39.323)">
							<g
								className="q-cifras-impacto"
								transform="translate(0 0)">
								<g className="r-cifras-impacto">
									<path
										className="b-cifras-impacto"
										d="M12.755,0a1.324,1.324,0,0,0-.819.829,1.127,1.127,0,0,0,1.182,1.413c1.606.012,3.212,0,4.818,0h.549V18.779H2.216c0-.2,0-.385,0-.568,0-1.637,0-3.274-.009-4.911a1.054,1.054,0,0,0-.771-1.047,1.05,1.05,0,0,0-1.228.433,1.333,1.333,0,0,0-.2.654Q-.01,16.614.006,19.889a1.135,1.135,0,0,0,1.149,1.163c.093,0,.187,0,.281,0H19.3c1.058,0,1.432-.373,1.432-1.436,0-6.065-.006-12.13.01-18.2A1.329,1.329,0,0,0,19.866,0Z"
										transform="translate(0)"
									/>
									<path
										className="b-cifras-impacto"
										d="M95.873,7.3c1.531,0,2.949,0,4.366,0a1.128,1.128,0,1,0,.015-2.236q-3.507-.007-7.013,0c-.925,0-1.2.266-1.2,1.2q-.017,3.53,0,7.06a1.117,1.117,0,0,0,1.1,1.247A1.129,1.129,0,0,0,94.247,13.3c0-1.429,0-2.857,0-4.286l.206-.169a1.637,1.637,0,0,0,.227.455q3.527,3.547,7.074,7.075a1.919,1.919,0,0,0,.681.463,1.1,1.1,0,0,0,1.073-1.851c-.959-.98-1.935-1.944-2.9-2.914q-2.2-2.2-4.4-4.4c-.094-.094-.18-.2-.336-.371"
										transform="translate(-91.766 -4.588)"
									/>
								</g>
							</g>
						</g>
						<g
							className="ad-cifras-impacto"
							transform="matrix(1, 0, 0, 1, -21.38, -653.97)">
							<path
								className="s-cifras-impacto"
								d="M0,0,2.268,256.146H0l271.42-2c67.028,0,70.876-7.528,98.561-94.517L416,0Z"
								transform="translate(437.38 908.12) rotate(180)"
							/>
						</g>
						<g
							className="ac-cifras-impacto"
							transform="matrix(1, 0, 0, 1, -21.38, -653.97)">
							<path
								className="t-cifras-impacto"
								d="M0,0,2.268,256.146H0l271.42-2c67.028,0,70.876-7.528,98.561-94.517L416,0Z"
								transform="translate(437.38 908.12) rotate(180)"
							/>
						</g>
					</g>
					<g
						transform="translate(-3.619 -8.881)"
						onClick={() => {
							setOpenVideo(true)
							setNumberVideo(0)
							document.body.style.overflow = 'hidden'
						}}>
						<g
							className="ab-cifras-impacto"
							transform="matrix(1, 0, 0, 1, -5.38, -3.12)">
							<path
								className="j-cifras-impacto"
								d="M58,0V207.111H216.626c66.919.372,71.34-12.89,104.771-106.047L349,0Z"
								transform="translate(-36.62 12)"
							/>
						</g>
						<text
							className="l-cifras-impacto"
							transform="translate(212.711 196)">
							<tspan x={-79.025} y={0}>
								{'+17300'}
							</tspan>
							<tspan className="m-cifras-impacto">
								<tspan x={selectedLanguage === 'es' ? -164.846 : -136.846} y={13}>
									{t('profesionales capacitados')}
								</tspan>
							</tspan>
						</text>
						<g
							className="n-cifras-impacto"
							transform="translate(-158.242 62.357)">
							<g
								className="n-cifras-impacto"
								transform="translate(373.953 117.175)">
								<g className="o-cifras-impacto">
									<path
										className="b-cifras-impacto"
										d="M6.274,0a1.039,1.039,0,0,1,.643.651.885.885,0,0,1-.928,1.11c-1.261.009-2.522,0-3.783,0H1.775V14.745H14.549c0-.159,0-.3,0-.446,0-1.285,0-2.571.007-3.856a.858.858,0,0,1,1.57-.482,1.047,1.047,0,0,1,.154.513q.017,2.571,0,5.142a.891.891,0,0,1-.9.913c-.073,0-.147,0-.22,0H1.132C.3,16.53.008,16.237.007,15.4.007,10.64.013,5.878,0,1.116A1.043,1.043,0,0,1,.691,0Z"
										transform="translate(0)"
									/>
									<path
										className="b-cifras-impacto"
										d="M98.3,6.823c-1.2,0-2.315,0-3.428,0a.886.886,0,1,1-.012-1.755q2.753-.005,5.506,0c.726,0,.942.209.945.941q.014,2.772,0,5.543a.877.877,0,0,1-.862.979.886.886,0,0,1-.877-1c0-1.122,0-2.243,0-3.365l-.161-.133a1.285,1.285,0,0,1-.178.357q-2.77,2.785-5.555,5.555a1.507,1.507,0,0,1-.535.363.865.865,0,0,1-.843-1.453c.753-.77,1.519-1.526,2.28-2.288q1.726-1.726,3.452-3.453c.074-.074.141-.155.264-.291"
										transform="translate(-85.238 -4.691)"
									/>
								</g>
							</g>
						</g>
						<g
							className="aa-cifras-impacto"
							transform="matrix(1, 0, 0, 1, -5.38, -3.12)">
							<path
								className="u-cifras-impacto"
								d="M0,0V165.1H174.4c36.023,0,68.494-33.371,82.259-84.536L278.329,0Z"
								transform="translate(21.38 12)"
							/>
						</g>
						<g
							className="z-cifras-impacto"
							transform="matrix(1, 0, 0, 1, -5.38, -3.12)">
							<path
								className="t-cifras-impacto"
								d="M0,0V165.1H174.4c36.023,0,68.494-33.371,82.259-84.536L278.329,0Z"
								transform="translate(21.38 12)"
							/>
						</g>
					</g>
					<g
						transform="translate(139.786 620.526)"
						onClick={() => {
							setOpenVideo(true)
							setNumberVideo(3)
							document.body.style.overflow = 'hidden'
						}}>
						<g
							className="y-cifras-impacto"
							transform="matrix(1, 0, 0, 1, -148.79, -723.53)">
							<path
								className="j-cifras-impacto"
								d="M58,0V207.111H216.626c66.919.372,71.34-12.89,104.771-106.047L349,0Z"
								transform="translate(494.38 908.12) rotate(180)"
							/>
						</g>
						<g
							className="x-cifras-impacto"
							transform="matrix(1, 0, 0, 1, -148.79, -723.53)">
							<path
								className="v-cifras-impacto"
								d="M0,0V165.1H174.4c36.023,0,68.494-33.371,82.259-84.536L278.329,0Z"
								transform="translate(437.38 908.12) rotate(180)"
							/>
						</g>
						<g
							className="w-cifras-impacto"
							transform="matrix(1, 0, 0, 1, -148.79, -723.53)">
							<path
								className="t-cifras-impacto"
								d="M0,0V165.1H174.4c36.023,0,68.494-33.371,82.259-84.536L278.329,0Z"
								transform="translate(437.38 908.12) rotate(180)"
							/>
						</g>
						<text
							className="l-cifras-impacto"
							transform="translate(103.307 2.125)">
							<tspan x={0} y={0}>
								{'+45600 '}
							</tspan>
							<tspan className="m-cifras-impacto">
								<tspan x={0} y={13}>
									{t('pacientes atendidos')}
								</tspan>
							</tspan>
						</text>
						<g
							className="n-cifras-impacto"
							transform="translate(84.595 -14.875)">
							<g
								className="n-cifras-impacto"
								transform="translate(0 0)">
								<g className="o-cifras-impacto">
									<path
										className="b-cifras-impacto"
										d="M10.015,0a1.039,1.039,0,0,0-.643.651.885.885,0,0,0,.928,1.11c1.261.009,2.522,0,3.783,0h.431V14.745H1.74c0-.159,0-.3,0-.446,0-1.285,0-2.571-.007-3.856a.828.828,0,0,0-.606-.822.824.824,0,0,0-.964.34,1.047,1.047,0,0,0-.154.513q-.017,2.571,0,5.142a.891.891,0,0,0,.9.913c.073,0,.147,0,.22,0h14.03c.831,0,1.124-.293,1.124-1.127,0-4.762-.005-9.524.008-14.287A1.043,1.043,0,0,0,15.6,0Z"
										transform="translate(0)"
									/>
									<path
										className="b-cifras-impacto"
										d="M95.047,6.823c1.2,0,2.315,0,3.428,0a.886.886,0,1,0,.012-1.755q-2.753-.005-5.506,0c-.726,0-.942.209-.945.941q-.014,2.772,0,5.543a.877.877,0,0,0,.862.979.886.886,0,0,0,.877-1c0-1.122,0-2.243,0-3.365l.161-.133a1.285,1.285,0,0,0,.178.357q2.77,2.785,5.555,5.555a1.507,1.507,0,0,0,.535.363.865.865,0,0,0,.843-1.453c-.753-.77-1.519-1.526-2.28-2.288q-1.726-1.726-3.452-3.453c-.074-.074-.141-.155-.264-.291"
										transform="translate(-91.823 -4.691)"
									/>
								</g>
							</g>
						</g>
					</g>
				</g>
			</svg>
			{openVideo && (
				<div className="h-full w-full fixed	 top-0 bg-[#959192] flex items-center ">
					<svg
						viewBox="0 0 48 50"
						className="w-[8%] h-[6%] right-[20px] absolute top-[20px] z-[1]"
						onClick={() => {
							setOpenVideo(false)
							document.body.style.overflow = 'auto'
							const video: HTMLVideoElement = document.getElementById('video-cifras') as HTMLVideoElement

							if (video) video.pause()
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
						<g transform="translate(1.5 8.5)">
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
					<video
						src={video[numberVideo].url}
						className="object-cover h-[100%] w-full"
						id="video-cifras"
						controls
						playsInline
						></video>
					{/* <img
						src={mute ? '/images/Button.png' : '/images/mute.png'}
						className="absolute w-[10%] left-[2%] bottom-[10px]"
						alt="Mute"
						onClick={handlePlayVideo}
					/> */}
				</div>
			)}
		</div>
	)
}
