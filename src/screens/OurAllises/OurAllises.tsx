import React from 'react'
import useGeneral from 'hooks/general.hook'
import America from './components/America'
import Asia from './components/Asia'
import Europa from './components/Europa'
import OurAllisesMobile from './OurAllisesMobile'
import { useTranslation } from 'react-i18next'

const OurAllises: React.FC = (): JSX.Element => {
	/** Hooks */
	const { width, height } = useGeneral()

	const [showAmerica, setShowAmerica] = React.useState<boolean>(false)
	const [showAsia, setShowAsia] = React.useState<boolean>(false)
	const [showEuropa, setShowEuropa] = React.useState<boolean>(false)

	const {t} = useTranslation()
	return (
		<React.Fragment>
			{width > 1024 ? (
				<React.Fragment>
					{!showAmerica && !showAsia && !showEuropa && (
						<svg
							width="100%"
							height="100%"
							viewBox="0 0 1920 975"
							preserveAspectRatio="none">
							<defs>
								<style>
									{
										'.a-allises,.i-allises{fill:none;}.b-allises,.c-allises,.d-allises{fill:#001f5f;}.c-allises{filter:url(#e-allises);}.d-allises{font-size:80px;font-family:Kiona-Bold, Kiona;font-weight:700;}.e-allises{font-size:170px;}.f-allises{clip-path:url(#g-allises);}.g-allises{fill:#e40032;}.g-allises:hover{fill: #001F5F}.h-allises{clip-path:url(#j-allises);}.i-allises{stroke:#001f5f;stroke-miterlimit:10;stroke-width:0.979px;}.j-allises{fill:#fff;font-size:32px;font-family:Silka-SemiBold, Silka;font-weight:600;}.k-allises{fill:url(#k-allises);}.l-allises{clip-path:url(#n-allises);}.m-allises{fill:url(#o-allises);}.n-allises{fill:url(#s-allises);}.o-allises{clip-path:url(#t-allises);}.p-allises{fill:#e7002a;}.q-allises{filter:url(#p-allises);}.r-allises{filter:url(#l-allises);}.s-allises{filter:url(#h-allises);}.t-allises{filter:url(#c-allises);}.u-allises{filter:url(#a-allises);}'
									}
								</style>
								<filter
									id="a-allises"
									x={304.686}
									y={619.783}
									width={402.312}
									height={106.492}
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
								<filter
									id="c-allises"
									x={754.951}
									y={617.829}
									width={410.797}
									height={108.446}
									filterUnits="userSpaceOnUse">
									<feOffset dy={3} />
									<feGaussianBlur
										stdDeviation={3}
										result="d"
									/>
									<feFlood floodOpacity={0.502} />
									<feComposite operator="in" in2="d" />
									<feComposite in="SourceGraphic" />
								</filter>
								<filter
									id="e-allises"
									x={1213.686}
									y={619.783}
									width={402.312}
									height={106.492}
									filterUnits="userSpaceOnUse">
									<feOffset dy={3} />
									<feGaussianBlur
										stdDeviation={3}
										result="f"
									/>
									<feFlood floodOpacity={0.502} />
									<feComposite operator="in" in2="f" />
									<feComposite in="SourceGraphic" />
								</filter>
								<clipPath id="g-allises">
									<rect
										className="a-allises"
										width={451.784}
										height={126.415}
									/>
								</clipPath>
								<filter
									id="h-allises"
									x={304.686}
									y={619.783}
									width={402.313}
									height={106.493}
									filterUnits="userSpaceOnUse">
									<feOffset dy={3} />
									<feGaussianBlur
										stdDeviation={3}
										result="i"
									/>
									<feFlood floodOpacity={0.302} />
									<feComposite operator="in" in2="i" />
									<feComposite in="SourceGraphic" />
								</filter>
								<clipPath id="j-allises">
									<g
										className="u-allises"
										transform="matrix(1, 0, 0, 1, 0, 0)">
										<path
											className="b-allises"
											d="M315.427,88.492H68.885v-.018C49.344,88.01,31.906,78.53,24.452,64.2L0,0H315.427V.018c19.54.464,36.98,9.945,44.433,24.271l24.452,64.2Z"
										/>
									</g>
								</clipPath>
								<pattern
									id="k-allises"
									preserveAspectRatio="xMidYMid slice"
									width="100%"
									height="100%"
									viewBox="0 0 4000 2250">
									<image
										width={4000}
										height={2250}
										xlinkHref="/images/our-allises/allises-1.webp"
									/>
								</pattern>
								<filter
									id="l-allises"
									x={754.951}
									y={617.829}
									width={410.798}
									height={108.447}
									filterUnits="userSpaceOnUse">
									<feOffset dy={3} />
									<feGaussianBlur
										stdDeviation={3}
										result="m"
									/>
									<feFlood floodOpacity={0.302} />
									<feComposite operator="in" in2="m" />
									<feComposite in="SourceGraphic" />
								</filter>
								<clipPath id="n-allises">
									<g
										className="t-allises"
										transform="matrix(1, 0, 0, 1, 0, 0)">
										<path
											className="b-allises"
											d="M322.391,90.446H70.406v-.018c-19.972-.475-37.8-10.164-45.414-24.807L0,0H322.391V.018c19.972.475,37.8,10.164,45.414,24.807L392.8,90.446Z"
										/>
									</g>
								</clipPath>
								<pattern
									id="o-allises"
									preserveAspectRatio="xMidYMid slice"
									width="100%"
									height="100%"
									viewBox="0 0 4000 2250">
									<image
										width={4000}
										height={2250}
										xlinkHref="/images/our-allises/allises-2.webp"
									/>
								</pattern>
								<filter
									id="p-allises"
									x={1213.686}
									y={619.783}
									width={402.313}
									height={106.493}
									filterUnits="userSpaceOnUse">
									<feOffset dy={3} />
									<feGaussianBlur
										stdDeviation={3}
										result="q"
									/>
									<feFlood floodOpacity={0.302} />
									<feComposite operator="in" in2="q" />
									<feComposite in="SourceGraphic" />
								</filter>
								<pattern
									id="s-allises"
									preserveAspectRatio="xMidYMid slice"
									width="100%"
									height="100%"
									viewBox="0 0 4000 2250">
									<image
										width={4000}
										height={2250}
										xlinkHref="/images/our-allises/allises-3.webp"
									/>
								</pattern>
								<clipPath id="t-allises">
									<rect
										className="a-allises"
										width={1920}
										height={975}
										transform="translate(0)"
									/>
								</clipPath>
							</defs>
							<text
								className="d-allises"
								transform="translate(557.407 154.245)">
								<tspan x={197.913} y={80}>
									{t('NUESTROS')}
								</tspan>
								<tspan className="e-allises">
									<tspan x={36.838} y={210}>
										{t('ALIADOS')}
									</tspan>
								</tspan>
							</text>
							<g transform="translate(734.108 388.912)">
								<g
									className="f-allises"
									transform="translate(0 0)">
									<path
										className="g-allises"
										d="M75.338,81.314,93.2,105.627a.677.677,0,0,1,.127.391l.1,19.034a.667.667,0,0,1-.662.667l-2.656.013a.663.663,0,0,1-.667-.66l-.036-6.751-9.6.048.036,6.753a.664.664,0,0,1-.662.667l-2.656.013a.659.659,0,0,1-.665-.66l-.091-17.486a.662.662,0,0,1,.66-.667l2.656-.015a.667.667,0,0,1,.667.662l.036,6.75,9.6-.048-.038-7.222L73.131,85.035l-13.8.071L43.346,107.357l.036,7.22,9.6-.051-.036-6.751a.662.662,0,0,1,.66-.667l2.656-.015a.664.664,0,0,1,.667.662l.091,17.486a.665.665,0,0,1-.66.667l-2.656.013a.663.663,0,0,1-.667-.66l-.036-6.753-9.6.051.036,6.753a.667.667,0,0,1-.662.667l-2.656.013a.665.665,0,0,1-.667-.66l-.1-19.034a.663.663,0,0,1,.124-.391l17.606-24.5a.671.671,0,0,1,.535-.277L74.8,81.042a.66.66,0,0,1,.538.271M47.676,61.435l-28.74-9.171a.643.643,0,0,0-.408,0L.456,58.241a.665.665,0,0,0-.421.84L.867,61.6a.663.663,0,0,0,.84.421l6.408-2.118,3.016,9.117L4.72,71.141a.665.665,0,0,0-.421.84L5.131,74.5a.667.667,0,0,0,.84.421l16.6-5.49a.662.662,0,0,0,.421-.84l-.832-2.522a.667.667,0,0,0-.84-.421l-6.411,2.121L11.9,58.655l6.855-2.268,26.1,8.331,2.132,6.448,2.2,6.649L33.2,100.066l-6.857,2.265-3.014-9.117L29.739,91.1a.665.665,0,0,0,.421-.84l-.835-2.522a.663.663,0,0,0-.837-.421l-16.6,5.49a.665.665,0,0,0-.421.84l.832,2.522a.665.665,0,0,0,.84.421l6.411-2.121,3.016,9.117L16.151,105.7a.664.664,0,0,0-.424.84l.835,2.522a.665.665,0,0,0,.84.421l18.07-5.977a.665.665,0,0,0,.332-.244l17.6-24.5a.658.658,0,0,0,.091-.6L48.105,61.861a.665.665,0,0,0-.429-.426m35.439-4.49,28.643-9.473a.658.658,0,0,0,.33-.244L123.2,31.772a.665.665,0,0,0-.152-.926l-2.156-1.55a.663.663,0,0,0-.926.152l-3.942,5.482-7.8-5.6,3.94-5.482a.662.662,0,0,0-.15-.926l-2.156-1.55a.66.66,0,0,0-.926.152l-10.206,14.2a.665.665,0,0,0,.15.928l2.159,1.55a.665.665,0,0,0,.926-.152l3.94-5.482,7.8,5.6-4.214,5.863-26.013,8.6L72.266,44.581l-.142-27.4,4.214-5.863,7.8,5.6L80.2,22.406a.663.663,0,0,0,.152.926l2.156,1.55a.663.663,0,0,0,.926-.152l10.206-14.2a.663.663,0,0,0-.152-.926l-2.156-1.55a.665.665,0,0,0-.926.152l-3.942,5.482-7.8-5.6L82.6,2.6a.665.665,0,0,0-.152-.926L80.295.125a.66.66,0,0,0-.926.152L68.26,15.734a.675.675,0,0,0-.124.391l.157,30.168a.66.66,0,0,0,.277.535L82.52,56.854a.665.665,0,0,0,.6.091m48.23,3.978.807-2.532a.665.665,0,0,0-.431-.835L113.591,51.77a.669.669,0,0,0-.411,0L84.537,61.245a.656.656,0,0,0-.424.429L78.89,78.039a.661.661,0,0,0,.1.594l17.859,24.316a.677.677,0,0,0,.335.238l18.131,5.789a.664.664,0,0,0,.835-.431l.807-2.529a.659.659,0,0,0-.429-.835l-6.433-2.055,2.92-9.148,6.433,2.052a.665.665,0,0,0,.835-.429l.807-2.532a.665.665,0,0,0-.431-.835l-16.659-5.317a.661.661,0,0,0-.832.431l-.809,2.532a.661.661,0,0,0,.431.832l6.431,2.055-2.917,9.148-6.88-2.194L83.2,77.638l4.2-13.143,26.013-8.6,6.877,2.2-2.917,9.148-6.433-2.055a.668.668,0,0,0-.835.431l-.807,2.532a.662.662,0,0,0,.431.832l16.657,5.317a.664.664,0,0,0,.835-.429l.809-2.532a.667.667,0,0,0-.431-.835l-6.433-2.052,2.92-9.148,6.433,2.055a.668.668,0,0,0,.835-.431M49.7,57,63.529,46.813a.668.668,0,0,0,.271-.54L63.6,16.1a.654.654,0,0,0-.129-.388L52.182.392A.662.662,0,0,0,51.253.25L49.115,1.825a.664.664,0,0,0-.14.928L52.981,8.19l-7.732,5.7L41.243,8.449a.664.664,0,0,0-.928-.14L38.176,9.884a.664.664,0,0,0-.14.928L48.407,24.892a.664.664,0,0,0,.928.14l2.139-1.575a.664.664,0,0,0,.142-.928L47.61,17.092l7.732-5.7,4.282,5.814.18,27.4L48.7,52.79,22.585,44.5,18.3,38.682l7.732-5.7,4,5.436a.664.664,0,0,0,.928.14L33.1,36.988a.666.666,0,0,0,.142-.928L22.874,21.983a.663.663,0,0,0-.928-.142l-2.139,1.575a.664.664,0,0,0-.14.928l4,5.436-7.73,5.7-4.006-5.436a.665.665,0,0,0-.928-.142L8.868,31.473a.664.664,0,0,0-.14.928L20.017,47.726a.651.651,0,0,0,.332.238L49.1,57.1a.667.667,0,0,0,.6-.1"
										transform="translate(0.001 -0.001)"
									/>
									<path
										className="b-allises"
										d="M110.89,38.686H99.667a15.2,15.2,0,0,1-7.831-2.1,15.621,15.621,0,0,1-5.682-5.708,15.415,15.415,0,0,1-2.1-7.9,15.337,15.337,0,0,1,2.1-7.857,15.838,15.838,0,0,1,5.682-5.731A15.369,15.369,0,0,1,105.9,8.6a15.669,15.669,0,0,1,5.18,3.724L109.5,13.8a13.524,13.524,0,0,0-9.838-4.3,13.106,13.106,0,0,0-6.733,1.816,13.559,13.559,0,0,0-4.919,4.894,13.54,13.54,0,0,0,0,13.539A13.67,13.67,0,0,0,92.934,34.7a12.958,12.958,0,0,0,6.733,1.839h8.978V25.411H98.427V23.262H110.89Z"
										transform="translate(129.175 11.165)"
									/>
									<path
										className="b-allises"
										d="M117.526,38.456,104.631,22.793h3.82a15.228,15.228,0,0,0,5.731-.908A7.654,7.654,0,0,0,117,19.569a5.467,5.467,0,0,0,1.192-3.415,5.63,5.63,0,0,0-1-3.176,7.41,7.41,0,0,0-2.864-2.458,9.3,9.3,0,0,0-4.3-.956h-8.694V38.456H99.187V7.415h10.842a11.948,11.948,0,0,1,4.1.693,10.094,10.094,0,0,1,3.344,1.981,8.828,8.828,0,0,1,2.126,2.818,7.673,7.673,0,0,1-.837,7.95,9.1,9.1,0,0,1-3.724,2.986,9.824,9.824,0,0,1-2.889.835,25.288,25.288,0,0,1-2.983.167l11.22,13.61Z"
										transform="translate(152.433 11.396)"
									/>
									<path
										className="b-allises"
										d="M123.576,38.79a11.375,11.375,0,0,1-4.513-.931,11.792,11.792,0,0,1-3.843-2.651,10.929,10.929,0,0,1-2.555-3.82,12.257,12.257,0,0,1-.885-4.632V7.415h2.149V26.756a10,10,0,0,0,.741,3.82,9.446,9.446,0,0,0,2.078,3.151,9.7,9.7,0,0,0,3.151,2.126,9.415,9.415,0,0,0,3.678.741,9.52,9.52,0,0,0,3.724-.741,9.707,9.707,0,0,0,3.153-2.126,9.443,9.443,0,0,0,2.078-3.151,10.043,10.043,0,0,0,.738-3.82V7.415h2.151V26.756a12.3,12.3,0,0,1-.885,4.632,10.962,10.962,0,0,1-2.555,3.82,11.86,11.86,0,0,1-3.82,2.651,11.436,11.436,0,0,1-4.584.931"
										transform="translate(171.787 11.396)"
									/>
									<path
										className="b-allises"
										d="M125.533,38.456l-.048-31.041h11.078A10.824,10.824,0,0,1,141.6,8.61a9.747,9.747,0,0,1,3.678,3.2,7.742,7.742,0,0,1,0,8.765A9.672,9.672,0,0,1,141.6,23.8a10.824,10.824,0,0,1-5.038,1.195h-8.882V38.456Zm2.149-15.711h8.882a8.943,8.943,0,0,0,3.965-.883,7.545,7.545,0,0,0,2.89-2.39,5.514,5.514,0,0,0,1.073-3.27,5.584,5.584,0,0,0-1.073-3.318,7.545,7.545,0,0,0-2.89-2.39,8.943,8.943,0,0,0-3.965-.883h-8.93Z"
										transform="translate(192.849 11.396)"
									/>
									<path
										className="b-allises"
										d="M152.566,38.993a15.31,15.31,0,0,1-7.879-2.126,15.824,15.824,0,0,1-7.831-13.729,15.824,15.824,0,0,1,7.831-13.729,15.665,15.665,0,0,1,15.759,0,15.825,15.825,0,0,1,7.831,13.729,15.825,15.825,0,0,1-7.831,13.729,15.31,15.31,0,0,1-7.879,2.126m0-29.513a13.067,13.067,0,0,0-6.781,1.839,13.829,13.829,0,0,0-4.944,4.967,13.7,13.7,0,0,0,0,13.7,13.809,13.809,0,0,0,4.944,4.967,13.42,13.42,0,0,0,13.562,0,13.6,13.6,0,0,0,4.919-4.967,13.4,13.4,0,0,0,1.814-6.852,13.407,13.407,0,0,0-1.814-6.852,13.622,13.622,0,0,0-4.919-4.967,13.073,13.073,0,0,0-6.781-1.839"
										transform="translate(210.322 11.193)"
									/>
									<path
										className="b-allises"
										d="M81.462,26.605h7.92a1.039,1.039,0,0,1,1.038,1.04v3.222c3.2-3.853,6.474-5.327,11.8-5.327,6.312,0,10.244,2.047,13.359,7.047,3.686-4.916,8.11-7.047,14.5-7.047,7.131,0,12.867,2.785,15.733,7.621,1.723,3.034,2.707,7.377,2.707,12.621V70.964a1.04,1.04,0,0,1-1.04,1.04h-8.821a1.038,1.038,0,0,1-1.04-1.04V47.093c0-4.673-.655-7.212-2.212-8.932a8.031,8.031,0,0,0-6.309-2.623,8.265,8.265,0,0,0-7.786,4.589c-.984,2.05-1.393,4.589-1.393,9.505V70.964a1.04,1.04,0,0,1-1.04,1.04h-8.821a1.04,1.04,0,0,1-1.04-1.04V47.093c0-4.424-.654-7.131-2.047-8.851a8.756,8.756,0,0,0-6.72-2.7c-3.853,0-6.558,1.72-7.867,4.916-.738,1.8-1.066,4.835-1.066,9.178V70.964A1.04,1.04,0,0,1,90.283,72H81.462a1.04,1.04,0,0,1-1.04-1.04V27.646a1.042,1.042,0,0,1,1.04-1.04"
										transform="translate(123.595 39.251)"
									/>
									<path
										className="b-allises"
										d="M156.752,72h-7.917a1.04,1.04,0,0,1-1.04-1.04V66.1c-4.343,5-8.686,6.966-15.079,6.966-13.275,0-22.864-9.916-22.864-23.6,0-13.849,9.67-23.927,23.11-23.927,6.555,0,11.063,2.131,14.833,7.128V27.643a1.038,1.038,0,0,1,1.04-1.038h7.917a1.038,1.038,0,0,1,1.04,1.038V70.964a1.04,1.04,0,0,1-1.04,1.04M120.833,49.713c0,7.95,5.49,13.359,13.44,13.359,7.867,0,13.194-5.492,13.194-13.605,0-8.194-5.573-13.932-13.521-13.932-7.623,0-13.113,5.984-13.113,14.178"
										transform="translate(168.822 39.251)"
									/>
									<path
										className="b-allises"
										d="M133.278,26.605h7.92a1.039,1.039,0,0,1,1.038,1.04V31.03c2.869-4.262,5.163-5.49,9.835-5.49h.819V36.03c-6.558.165-9.752,3.689-9.752,10.736v24.2A1.04,1.04,0,0,1,142.1,72h-8.821a1.04,1.04,0,0,1-1.04-1.04V27.646a1.042,1.042,0,0,1,1.04-1.04"
										transform="translate(203.227 39.251)"
									/>
									<path
										className="b-allises"
										d="M153.148,54.137c1.312,5.49,6.063,8.93,12.537,8.93,4.341,0,7.009-1.139,9.688-4.148a1.049,1.049,0,0,1,.779-.358h9.917a1.036,1.036,0,0,1,.964,1.428,20.577,20.577,0,0,1-3.072,4.881,22.269,22.269,0,0,1-18.029,8.2c-13.986,0-24.8-10.535-24.579-24a24.132,24.132,0,0,1,26.269-23.425c12.309,1.121,21.094,11.048,21.094,24.315a17.557,17.557,0,0,1-.411,4.181Zm24.831-9.589c-1.393-5.819-5.817-9.013-12.537-9.013-6.474,0-10.9,3.113-12.621,9.013Z"
										transform="translate(217.229 39.254)"
									/>
									<path
										className="b-allises"
										d="M176.482,67.1,160.424,27.388a1.038,1.038,0,0,1,.964-1.428H171.56a1.036,1.036,0,0,1,.982.7l9.84,28.717,10.728-28.742a1.04,1.04,0,0,1,.974-.675h10.234a1.039,1.039,0,0,1,.954,1.451L179.95,85.893a1.041,1.041,0,0,1-.954.627h-9.447a1.041,1.041,0,0,1-.951-1.459Z"
										transform="translate(246.425 39.896)"
									/>
									<path
										className="b-allises"
										d="M88.775,19.983H79.924L68.775,46.739a1.039,1.039,0,0,0,.959,1.438h9.516a1.039,1.039,0,0,0,.979-.7L84.351,35.8l6.471,18.357H72.849a10.748,10.748,0,0,0-9.924,6.616L55.284,79.1a1.039,1.039,0,0,0,.959,1.438H66.375a1.039,1.039,0,0,0,.954-.629L73.777,64.89H95.33l6.208,15.01a1.038,1.038,0,0,0,.961.642h10.117a1.039,1.039,0,0,0,.959-1.441Z"
										transform="translate(84.838 30.711)"
									/>
								</g>
							</g>
							<g
								transform="translate(312.999 625.783)"
								onClick={() => setShowAmerica(true)}>
								<g
									className="s-allises cursor-pointer"
									transform="matrix(1, 0, 0, 1, -313, -625.78)">
									<path
										className="g-allises cursor-pointer"
										d="M315.428,88.493H68.886v-.018C49.345,88.011,31.907,78.53,24.452,64.2L0,0H315.428V.018c19.541.464,36.979,9.945,44.434,24.272l24.452,64.2Z"
										transform="translate(313.69 625.78)"
									/>
								</g>
								<g
									className="h-allises cursor-pointer"
									transform="translate(0.687)">
									<path
										className="i-allises cursor-pointer"
										d="M205.558,78.459H44.891v-.016c-12.735-.412-24.1-8.817-28.956-21.519L0,0H205.558V.016c12.734.412,24.1,8.817,28.956,21.519l15.935,56.923Z"
										transform="translate(-58.293 22.903)"
									/>
								</g>
								<text
									className="j-allises cursor-pointer"
									transform="translate(192.843 55.246)">
									<tspan x={0} y={0}>
										{'América'}
									</tspan>
								</text>
								<path
									className="k-allises"
									d="M64.9,88.493c-11.577,0-35.8-8.424-40.2-23.115L0,0H115.467c11.577,0,32.761,10.06,35.982,29.394l14.884,59.1Z"
								/>
							</g>
							<g
								transform="translate(763.249 623.829)"
								onClick={() => setShowEuropa(true)}>
								<g
									className="r-allises cursor-pointer"
									transform="matrix(1, 0, 0, 1, -763.25, -623.83)"
									onClick={() => setShowEuropa(true)}>
									<path
										className="g-allises cursor-pointer"
										d="M322.392,90.447H70.407v-.018c-19.972-.475-37.8-10.164-45.415-24.808L0,0H322.392V.018c19.972.475,37.8,10.164,45.415,24.808L392.8,90.447Z"
										transform="translate(763.95 623.83)"
										onClick={() => setShowEuropa(true)}
									/>
								</g>
								<g
									className="l-allises cursor-pointer"
									transform="translate(0.702)"
									onClick={() => setShowEuropa(true)}>
									<path
										className="i-allises cursor-pointer"
										d="M210.1,80.191H45.882v-.016c-13.016-.421-24.631-9.012-29.6-21.994L0,0H210.1V.016c13.015.421,24.631,9.012,29.6,21.994l16.287,58.18Z"
										transform="translate(-59.58 23.409)"
										onClick={() => setShowEuropa(true)}
									/>
								</g>
								<text
									className="j-allises cursor-pointer"
									transform="translate(212.75 57.223)"
									onClick={() => setShowEuropa(true)}>
									<tspan x={0} y={0}>
										{t('Europa')}
									</tspan>
								</text>
								<path
									className="m-allises"
									d="M66.336,90.447c-11.832,0-36.6-8.61-41.086-23.626L0,0H118.017c11.832,0,33.484,10.282,36.776,30.043l15.213,60.4Z"
								/>
							</g>
							<g
								transform="translate(1221.999 625.783)"
								onClick={() => setShowAsia(true)}>
								<g
									className="q-allises cursor-pointer"
									transform="matrix(1, 0, 0, 1, -1222, -625.78)">
									<path
										className="g-allises cursor-pointer"
										d="M315.428,88.493H68.886v-.018C49.345,88.011,31.907,78.53,24.452,64.2L0,0H315.428V.018c19.541.464,36.979,9.945,44.434,24.272l24.452,64.2Z"
										transform="translate(1222.69 625.78)"
									/>
								</g>
								<g
									className="h-allises cursor-pointer"
									transform="translate(0.687)">
									<path
										className="i-allises cursor-pointer"
										d="M205.558,78.459H44.891v-.016c-12.735-.412-24.1-8.817-28.956-21.519L0,0H205.558V.016c12.734.412,24.1,8.817,28.956,21.519l15.935,56.923Z"
										transform="translate(-58.293 22.903)"
									/>
								</g>
								<text
									className="j-allises cursor-pointer"
									transform="translate(227.184 55.246)">
									<tspan x={0} y={0}>
										{'Asia'}
									</tspan>
								</text>
								<path
									className="n-allises"
									d="M64.9,88.493c-11.577,0-35.8-8.424-40.2-23.115L0,0H115.467c11.577,0,32.761,10.06,35.982,29.394l14.884,59.1Z"
								/>
							</g>
							<g transform="translate(-109.858 -60.146)">
								<g
									className="o-allises"
									transform="translate(109.858 60.146)">
									<path
										className="b-allises"
										d="M0,149.373V0H342.185c71.015,0,135.7,57.941,169.647,149.373Z"
										transform="translate(149.373 -104.012) rotate(90)"
									/>
									<path
										className="b-allises"
										d="M1970.837,472.166c-46.4,8.623-84.495,42.288-117.99,133.092l-117.99,288.727h235.98Z"
										transform="translate(-50.838 81.475)"
									/>
									<path
										className="p-allises"
										d="M1600.423,620.283l-86.136,186.792c-24.054,52.153-80,85.851-142.523,85.851H1011.946v1.412h359.818a167.518,167.518,0,0,0,86.51-23.668c25.7-15.483,45.572-37.286,57.455-63.053l86.208-186.948-1.515-.386"
										transform="translate(189.004 15.47)"
									/>
									<path
										className="p-allises"
										d="M1982.361,428.01a165.223,165.223,0,0,0-58.49,21.385c-25.7,15.483-45.572,37.286-57.456,63.053l-96.824,209.971c.516.1,1.032.21,1.548.313l96.719-209.741c20.39-44.21,63.7-75.154,114.5-83.555Z"
										transform="translate(-62.361 91.641)"
									/>
									<path
										className="p-allises"
										d="M583.009,1138.862c27.871-40.488,76.98-65.652,131.008-65.652h259.4V1071.8h-259.4a167.521,167.521,0,0,0-86.51,23.667,148.063,148.063,0,0,0-46.323,43.4Z"
										transform="translate(331.918 -163.401)"
									/>
								</g>
							</g>
						</svg>
					)}
					{showAmerica && (
						<America
							height={height}
							onClose={() => setShowAmerica(false)}
						/>
					)}
					{showAsia && (
						<Asia
							height={height}
							onClose={() => setShowAsia(false)}
						/>
					)}
					{showEuropa && (
						<Europa
							height={height}
							onClose={() => setShowEuropa(false)}
						/>
					)}
				</React.Fragment>
			) : (
				<React.Fragment>
					<OurAllisesMobile />
				</React.Fragment>
			)}
		</React.Fragment>
	)
}

export default OurAllises
