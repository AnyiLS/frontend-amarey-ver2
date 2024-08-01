import { useLanguage } from 'context/language'
import React from 'react'
import { useTranslation } from 'react-i18next'
/** Interfaces & Types */
import type { ISlide } from 'utils/models/Slide'
/** Styles */
import './styles/slide3.css'
import useLayout from 'hooks/ancho.hook'

const Slide3: React.FC<ISlide> = ({ onClick }): JSX.Element => {
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
				<clipPath id="a-sliders-1">
					<rect
						className="a-sliders-1"
						width={406.518}
						height={175.872}
					/>
				</clipPath>
				<clipPath id="b-sliders-1">
					<rect
						className="b-sliders-1"
						width={1307.603}
						height={1088}
					/>
				</clipPath>
				<pattern
					id="c-sliders-1"
					width={1}
					height={1}
					viewBox="0 900 1626.781 975">
					<image
						preserveAspectRatio="xMidYMid slice"
						width={2000}
						height={2000}
						xlinkHref="/images/slider3.webp"
					/>
				</pattern>
				<filter
					id="d-sliders-1"
					x={469.995}
					y={643.065}
					width={1464.005}
					height={458.172}
					filterUnits="userSpaceOnUse">
					<feOffset dx={-3} dy={-3} />
					<feGaussianBlur stdDeviation={6} result="e-sliders-1" />
					<feFlood floodOpacity={0.302} />
					<feComposite operator="in" in2="e-sliders-1" />
					<feComposite in="SourceGraphic" />
				</filter>
				<filter
					id="f-sliders-1"
					x={967}
					y={916}
					width={403}
					height={83.506}
					filterUnits="userSpaceOnUse">
					<feOffset dy={3} />
					<feGaussianBlur stdDeviation={3} result="g-sliders-1" />
					<feFlood floodOpacity={0.4} />
					<feComposite operator="in" in2="g-sliders-1" />
					<feComposite in="SourceGraphic" />
				</filter>
			</defs>
			<g transform="translate(0 1.406)">
				<rect
					className="c-sliders-1"
					width={1920}
					height={1084}
					transform="translate(0 2.594)"
				/>
				<g
					className="d-sliders-1"
					transform={
						isSmallScreen
							? 'translate(0 95.406)'
							: 'translate(0 0.406)'
					}>
					<path
						className="a-sliders-1"
						d="M267.257,175.872H0V0H406.518V45.533c0,71.985-62.349,130.339-139.261,130.339"
					/>
				</g>
			</g>
			<g transform="translate(58.607)">
				<g className="e-sliders-1">
					<path
						className="a-sliders-1"
						d="M597.5,846.975V126.916H529.28c-142.747,0-271.5,87.589-326.412,222.062L0,846.975Z"
						transform="translate(64.945 241.025)"
					/>
					<path
						className="f-sliders-1"
						d="M1193.109.5h-344.3C691.391.5,549.41,89.045,488.849,224.983L85.887,1131.747H1193.109Z"
						transform="translate(131.13 -42.341)"
					/>
					<path
						className="c-sliders-1"
						d="M45.263,0V72.661l62.912-36.333L78.125,18.976Z"
						transform="translate(232.399 718.305)"
						onClick={() => onClick(2)}
					/>
				</g>
			</g>
			<g transform="translate(328.902 2.165)">
				<path
					className="g-sliders-1"
					d="M1695.549,14.03H812.3c-149.253,0-254.9,23.292-341.291,224.057L107.8,1098.46H1695.549Z"
					transform="translate(-104.451 -14.03)"
				/>
				<g
					className="m-sliders-1"
					transform="matrix(1, 0, 0, 1, -328.9, 60.16)">
					<path
						className="c-sliders-1"
						d="M0,422.172,144.937,90.939C168.523,35.9,224.173,0,285.908,0H1428V422.172Z"
						transform="translate(491 664.06)"
					/>
				</g>
				<a href="/nuestros-aliados">
					<g transform="translate(700.098 920.835)">
						<g
							className="l-sliders-1"
							transform="matrix(1, 0, 0, 1, -976, -922)">
							<path
								className="h-sliders-1"
								d="M385,0H78.968C47.139,0,18.557,19.114,6.933,48.173L0,65.506H303.493c33.911,0,64.274-20.608,76.22-51.732Z"
								transform="translate(976 922)"
							/>
						</g>
						<text
							className="i-sliders-1"
							transform="translate(100 43.753)">
							<tspan x={0} y={0}>
								{t('Conoce M\xE1s')}
							</tspan>
						</text>
					</g>
				</a>
				<g transform='translate(90 30)'>
					<text
						className="j-sliders-1"
						transform="translate(841.098 805.835)">
						<tspan
							x={selectedLanguage === 'es' ? -450.927 : -350.927}
							y={51}>
							{t('desarrollo de tecnolog\xEDa en salud')}
						</tspan>
					</text>
					<text
						className="k-sliders-1"
						transform="translate(839.098 710.835)">
						<tspan
							x={selectedLanguage === 'es' ? -388.248 : -338.248}
							y={40}>
							{t('Representamos las marcas de mayor')}
						</tspan>
						<tspan
							x={selectedLanguage === 'es' ? -446.607 : -386.607}
							y={82}>
							{t(
								'prestigio a nivel mundial en investigaci\xF3n y'
							)}
						</tspan>
					</text>
				</g>
			</g>
		</svg>
	)
}

export default Slide3
