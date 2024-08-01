import React from 'react'
import { useTranslation } from 'react-i18next'
import useLayout from 'hooks/ancho.hook'
/** Contexts */
import { useLanguage } from 'context/language'
/** Interfaces & Types */
import type { ISlide } from 'utils/models/Slide'
/** Styles */
import './styles/slide2.css'


const Slide2: React.FC<ISlide> = ({ onClick }): JSX.Element => {
	/** Hooks */
	const { t } = useTranslation()
	const { isSmallScreen } = useLayout()

	/** Contexts */
	const { selectedLanguage } = useLanguage()

	return (
		<svg
			viewBox="0 95 1920 975"
			width="100%"
			height="100%"
			preserveAspectRatio="none">
			<defs>
				<clipPath id="a-slide-2">
					<rect
						className="a-slide-2"
						width={406.518}
						height={175.872}
					/>
				</clipPath>
				<clipPath id="b-slide-2">
					<rect
						className="b-slide-2"
						width={1307.603}
						height={1088}
					/>
				</clipPath>
				<pattern
					id="c-slide-2"
					width={1}
					height={1}
					viewBox="0 -50 1401.53 957.242">
					<image
						preserveAspectRatio="none"
						width={1400}
						height={975}
						xlinkHref="/images/slider-2.webp"
					/>
				</pattern>
				<filter
					id="d-slide-2"
					x={467.648}
					y={643.064}
					width={1464.005}
					height={458.172}
					filterUnits="userSpaceOnUse">
					<feOffset dx={-3} dy={-3} />
					<feGaussianBlur stdDeviation={6} result="e-slide-2" />
					<feFlood floodOpacity={0.251} />
					<feComposite operator="in" in2="e-slide-2" />
					<feComposite in="SourceGraphic" />
				</filter>
				<filter
					id="f-slide-2"
					x={967}
					y={944}
					width={403}
					height={83.506}
					filterUnits="userSpaceOnUse">
					<feOffset dy={3} />
					<feGaussianBlur stdDeviation={3} result="g-slide-2" />
					<feFlood floodOpacity={0.4} />
					<feComposite operator="in" in2="g-slide-2" />
					<feComposite in="SourceGraphic" />
				</filter>
			</defs>
			<g transform="translate(0 95)">
				<rect
					className="c-slide-2"
					width={1920}
					height={1084}
					transform="translate(0 2.594)"
				/>
				<g
					className="d-slide-2"
					transform={
						isSmallScreen
							? 'translate(0 50.406)'
							: 'translate(0 -0.406)'
					}>
					<path
						className="a-slide-2"
						d="M267.257,175.872H0V0H406.518V45.533c0,71.985-62.349,130.339-139.261,130.339"
					/>
				</g>
			</g>
			<g transform="translate(58.607)">
				<g className="e-slide-2">
					<path
						className="a-slide-2"
						d="M597.5,846.975V126.916H529.28c-142.747,0-271.5,87.589-326.412,222.062L0,846.975Z"
						transform="translate(64.945 241.025)"
					/>
					<path
						className="f-slide-2"
						d="M1193.109.5h-344.3C691.391.5,549.41,89.045,488.849,224.983L85.887,1131.747H1193.109Z"
						transform="translate(131.13 -42.341)"
					/>
					<path
						className="c-slide-2"
						d="M45.263,0V72.661l62.912-36.333L78.125,18.976Z"
						transform="translate(232.399 718.305)"
						onClick={() => onClick(1)}
					/>
				</g>
			</g>
			<g transform="translate(325.555 2.165)">
				<path
					className="g-slide-2"
					d="M1695.549,14.03H812.3c-149.253,0-254.9,23.292-341.291,224.057L107.8,1098.459H1695.549Z"
					transform="translate(-104.451 -14.03)"
				/>
				<g
					className="p-slide-2"
					transform="matrix(1, 0, 0, 1, -325.55, 60.16)">
					<path
						className="c-slide-2"
						d="M0,422.172,144.937,90.939C168.523,35.9,224.173,0,285.908,0H1428V422.172Z"
						transform="translate(488.65 664.06)"
					/>
				</g>
				<g transform="translate(90 40)">
					<text
						className="h-slide-2"
						transform="translate(809.445 715.835)">
						<tspan
							x={selectedLanguage === 'es' ? -231.54 : -180.54}
							y={57}>
							{t('ROBOT DAVINCI')}
						</tspan>
					</text>
					<text
						className="n-slide-2"
						transform="translate(804.066 804.303)">
						<tspan
							x={selectedLanguage === 'es' ? -455.168 : -350.168}
							y={30}>
							{t(
								'Llevando la precisión quirúrgica más allá de los límites de'
							)}
						</tspan>
						<tspan
							x={selectedLanguage === 'es' ? -125.776 : 0}
							y={64}>
							{t('nuestras manos')}
						</tspan>
					</text>
				</g>
				<a href="/productos/cirugia-robotica">
					<g transform="translate(700.445 940.835)">
						<g
							className="o-slide-2"
							transform="matrix(1, 0, 0, 1, -976, -950)">
							<path
								className="l-slide-2"
								d="M385,0H78.968C47.139,0,18.557,19.114,6.933,48.173L0,65.506H303.493c33.911,0,64.274-20.608,76.22-51.732Z"
								transform="translate(976 950)"
							/>
						</g>
						<text
							className="m-slide-2"
							transform="translate(100 43.753)">
							<tspan x={0} y={0}>
								{t('Conoce Más')}
							</tspan>
						</text>
					</g>
				</a>
			</g>
		</svg>
	)
}

export default Slide2
