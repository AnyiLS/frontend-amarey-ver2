import React from 'react'
import { useTranslation } from 'react-i18next'
import { useLanguage } from "context/language";

export interface IEtic {
	onNext: (number: number) => void
}

const View4: React.FC<IEtic> = ({ onNext }): JSX.Element => {
	const {t} = useTranslation()
	const { selectedLanguage } = useLanguage();
	return (
		<svg viewBox="0 40 414 853">
			<defs>
				<style>
					{
						'.a-reward-2-mobile,.i-reward-2-mobile{fill:#e40032;}.b-reward-2-mobile,.h-reward-2-mobile,.l-reward-2-mobile{fill:#fff;}.c-reward-2-mobile,.j-reward-2-mobile,.k-reward-2-mobile{fill:#001f5f;}.c-reward-2-mobile{stroke:#001f5f;}.d-reward-2-mobile{clip-path:url(#a-reward-2-mobile);}.e-reward-2-mobile{clip-path:url(#b-reward-2-mobile);}.f-reward-2-mobile{fill:url(#c-reward-2-mobile);}.g-reward-2-mobile{fill:rgba(67,67,67,0.3);}.h-reward-2-mobile{font-size:18px;font-family:Kiona-Bold;}.h-reward-2-mobile,.i-reward-2-mobile{font-weight:700;}.i-reward-2-mobile{font-size:16px;font-family:Silka-Bold, Silka;}.j-reward-2-mobile,.l-reward-2-mobile{font-size:14px;font-family:Silka-Regular, Silka;}.m-reward-2-mobile{filter:url(#r-reward-2-mobile);}.n-reward-2-mobile{filter:url(#p-reward-2-mobile);}.o-reward-2-mobile{filter:url(#n-reward-2-mobile);}.p-reward-2-mobile{filter:url(#l-reward-2-mobile);}.q-reward-2-mobile{filter:url(#j-reward-2-mobile);}.r-reward-2-mobile{filter:url(#h-reward-2-mobile);}.s-reward-2-mobile{filter:url(#f-reward-2-mobile);}.t-reward-2-mobile{filter:url(#d-reward-2-mobile);}'
					}
				</style>
				<clipPath id="a-reward-2-mobile">
					<rect
						className="a-reward-2-mobile"
						width={259.753}
						height={46.466}
						transform="translate(0 0)"
					/>
				</clipPath>
				<clipPath id="b-reward-2-mobile">
					<rect
						className="b-reward-2-mobile"
						width={409.525}
						height={231.364}
						transform="translate(0 0)"
					/>
				</clipPath>
				<pattern
					id="c-reward-2-mobile"
					width={1}
					height={1}
					viewBox="32.174 92.573 345.176 195.009">
					<image
						preserveAspectRatio="xMidYMid slice"
						width={409.525}
						height={405.843}
						xlinkHref="/images/mobile/etic/etic-1.webp"
					/>
				</pattern>
				<filter
					id="d-reward-2-mobile"
					x={0}
					y={33}
					width={432}
					height={56}
					filterUnits="userSpaceOnUse">
					<feOffset dy={3} />
					<feGaussianBlur stdDeviation={3} result="e" />
					<feFlood floodOpacity={0.302} />
					<feComposite operator="in" in2="e" />
					<feComposite in="SourceGraphic" />
				</filter>
				<filter
					id="f-reward-2-mobile"
					x={80}
					y={360}
					width={272}
					height={66.772}
					filterUnits="userSpaceOnUse">
					<feOffset dy={3} />
					<feGaussianBlur stdDeviation={3} result="g" />
					<feFlood floodOpacity={0.4} />
					<feComposite operator="in" in2="g" />
					<feComposite in="SourceGraphic" />
				</filter>
				<filter
					id="h-reward-2-mobile"
					x={80}
					y={567}
					width={272}
					height={66.772}
					filterUnits="userSpaceOnUse">
					<feOffset dy={3} />
					<feGaussianBlur stdDeviation={3} result="i" />
					<feFlood floodOpacity={0.4} />
					<feComposite operator="in" in2="i" />
					<feComposite in="SourceGraphic" />
				</filter>
				<filter
					id="j-reward-2-mobile"
					x={80}
					y={429}
					width={272}
					height={66.772}
					filterUnits="userSpaceOnUse">
					<feOffset dy={3} />
					<feGaussianBlur stdDeviation={3} result="k" />
					<feFlood floodOpacity={0.4} />
					<feComposite operator="in" in2="k" />
					<feComposite in="SourceGraphic" />
				</filter>
				<filter
					id="l-reward-2-mobile"
					x={80}
					y={636}
					width={272}
					height={66.772}
					filterUnits="userSpaceOnUse">
					<feOffset dy={3} />
					<feGaussianBlur stdDeviation={3} result="m" />
					<feFlood floodOpacity={0.4} />
					<feComposite operator="in" in2="m" />
					<feComposite in="SourceGraphic" />
				</filter>
				<filter
					id="n-reward-2-mobile"
					x={80}
					y={498}
					width={272}
					height={66.772}
					filterUnits="userSpaceOnUse">
					<feOffset dy={3} />
					<feGaussianBlur stdDeviation={3} result="o" />
					<feFlood floodOpacity={0.4} />
					<feComposite operator="in" in2="o" />
					<feComposite in="SourceGraphic" />
				</filter>
				<filter
					id="p-reward-2-mobile"
					x={80}
					y={705}
					width={272}
					height={66.772}
					filterUnits="userSpaceOnUse">
					<feOffset dy={3} />
					<feGaussianBlur stdDeviation={3} result="q" />
					<feFlood floodOpacity={0.4} />
					<feComposite operator="in" in2="q" />
					<feComposite in="SourceGraphic" />
				</filter>
				<filter
					id="r-reward-2-mobile"
					x={80}
					y={774}
					width={272}
					height={66.772}
					filterUnits="userSpaceOnUse">
					<feOffset dy={3} />
					<feGaussianBlur stdDeviation={3} result="s" />
					<feFlood floodOpacity={0.4} />
					<feComposite operator="in" in2="s" />
					<feComposite in="SourceGraphic" />
				</filter>
			</defs>
			<g>
				<rect
					className="b-reward-2-mobile"
					width={414}
					height={896}
					transform="translate(0 0)"
				/>
				<g transform="translate(-166.394 220.82)">
					<path
						className="c-reward-2-mobile"
						d="M.614,0,35.543,74.077c9.754,20.682,32.439,34.046,57.793,34.046h214.87v.56H93.336A69.094,69.094,0,0,1,58.256,99.3a57.862,57.862,0,0,1-23.3-25.005L0,.153.614,0"
						transform="translate(456.394 -88)"
					/>
				</g>
				<g transform="translate(414 894.271) rotate(180)">
					<g className="d-reward-2-mobile" transform="translate(0)">
						<path
							className="a-reward-2-mobile"
							d="M259.753,0,243.078,31.531c-4.779,9.037-15.509,14.932-45.573,14.932H0V0Z"
							transform="translate(0 0.004)"
						/>
					</g>
				</g>
				<g transform="translate(0.525 0)">
					<g className="e-reward-2-mobile" transform="translate(0)">
						<path
							className="f-reward-2-mobile"
							d="M409.525,0,383.234,157.013c-7.534,45-24.452,74.347-71.849,74.347H0V0Z"
							transform="translate(0 0.004)"
						/>
					</g>
					<g
						className="t-reward-2-mobile"
						transform="matrix(1, 0, 0, 1, -9.52, 0)">
						<rect
							className="g-reward-2-mobile"
							width={414}
							height={38}
							transform="translate(9 39)"
						/>
					</g>
					<text
						className="h-reward-2-mobile"
						transform="translate(206.475 65)">
						<tspan x={-95.733} y={0}>
							{t('ÉTICA Y COMPLIANCE ')}
						</tspan>
					</text>
					<path
						className="b-reward-2-mobile"
						d="M7,0l7,11H0Z"
						transform="translate(35.475 65) rotate(-90)"
						onClick={() => onNext(2)}
					/>
				</g>
				<text
					className="i-reward-2-mobile"
					transform="translate(180 261)">
					<tspan x={-145.008} y={15}>
						{t('¿Cuándo debo utilizar la línea ética?')}
					</tspan>
				</text>
				<text
					className="j-reward-2-mobile"
					transform="translate(37 291)">
					<tspan x={0} y={13}>
						{t('Cuando identifique situaciones no éticas que ')}
					</tspan>
					<tspan x={0} y={29}>
						{t('puedan afectar los intereses del Grupo ')}
					</tspan>
					<tspan x={0} y={45}>
						{t('Amarey como: ')}
					</tspan>
				</text>
				<g transform="translate(80 366)" onClick={() => onNext(4)}>
					<g
						className="s-reward-2-mobile"
						transform="matrix(1, 0, 0, 1, -89, -366)">
						<path
							className="k-reward-2-mobile"
							d="M200.4,48.772H9.513C4.259,48.772,0,45.481,0,41.42V7.351C0,3.292,4.259,0,9.513,0H244.487C249.741,0,254,3.292,254,7.351c0,22.876-24,41.421-53.6,41.421"
							transform="translate(89 366)"
						/>
					</g>
					<text
						className="l-reward-2-mobile"
						transform="translate(120 16.386)">
						<tspan x={-68.81} y={13}>
							{t('Conflicto de interés')}
						</tspan>
					</text>
				</g>
				<g transform="translate(80 573)" onClick={() => onNext(5)}>
					<g
						className="r-reward-2-mobile"
						transform="matrix(1, 0, 0, 1, -89, -573)">
						<path
							className="k-reward-2-mobile"
							d="M200.4,48.772H9.513C4.259,48.772,0,45.481,0,41.42V7.351C0,3.292,4.259,0,9.513,0H244.487C249.741,0,254,3.292,254,7.351c0,22.876-24,41.421-53.6,41.421"
							transform="translate(89 573)"
						/>
					</g>
					<text
						className="l-reward-2-mobile"
						transform="translate(120 16.386)">
						<tspan x={-63.266} y={13}>
							{t('Lavado de activos')}
						</tspan>
					</text>
				</g>
				<g transform="translate(80 435)" onClick={() => onNext(6)}>
					<g
						className="q-reward-2-mobile"
						transform="matrix(1, 0, 0, 1, -89, -435)">
						<path
							className="k-reward-2-mobile"
							d="M200.4,48.772H9.513C4.259,48.772,0,45.481,0,41.42V7.351C0,3.292,4.259,0,9.513,0H244.487C249.741,0,254,3.292,254,7.351c0,22.876-24,41.421-53.6,41.421"
							transform="translate(89 435)"
						/>
					</g>
					<text
						className="l-reward-2-mobile"
						transform="translate(120 8.386)">
						<tspan x={selectedLanguage === 'es' ? -63.973 : -69.973} y={13}>
							{t('Incumplimiento de ')}
						</tspan>
						<tspan x={-69.846} y={29}>
							{t('leyes y regulaciones')}
						</tspan>
					</text>
				</g>
				<g transform="translate(80 642)" onClick={() => onNext(8)}>
					<g
						className="p-reward-2-mobile"
						transform="matrix(1, 0, 0, 1, -89, -642)">
						<path
							className="k-reward-2-mobile"
							d="M200.4,48.772H9.513C4.259,48.772,0,45.481,0,41.42V7.351C0,3.292,4.259,0,9.513,0H244.487C249.741,0,254,3.292,254,7.351c0,22.876-24,41.421-53.6,41.421"
							transform="translate(89 642)"
						/>
					</g>
					<text
						className="l-reward-2-mobile"
						transform="translate(120 16.386)">
						<tspan x={-88.725} y={13}>
							{t('Actividades inapropiadas')}
						</tspan>
					</text>
				</g>
				<g transform="translate(80 504)" onClick={() => onNext(7)}>
					<g
						className="o-reward-2-mobile"
						transform="matrix(1, 0, 0, 1, -89, -504)">
						<path
							className="k-reward-2-mobile"
							d="M200.4,48.772H9.513C4.259,48.772,0,45.481,0,41.42V7.351C0,3.292,4.259,0,9.513,0H244.487C249.741,0,254,3.292,254,7.351c0,22.876-24,41.421-53.6,41.421"
							transform="translate(89 504)"
						/>
					</g>
					<text
						className="l-reward-2-mobile"
						transform="translate(120 16.386)">
						<tspan x={-59.668} y={13}>
							{t('Confidencialidad')}
						</tspan>
					</text>
				</g>
				<g transform="translate(80 711)" onClick={() => onNext(9)}>
					<g
						className="n-reward-2-mobile"
						transform="matrix(1, 0, 0, 1, -89, -711)">
						<path
							className="k-reward-2-mobile"
							d="M200.4,48.772H9.513C4.259,48.772,0,45.481,0,41.42V7.351C0,3.292,4.259,0,9.513,0H244.487C249.741,0,254,3.292,254,7.351c0,22.876-24,41.421-53.6,41.421"
							transform="translate(89 711)"
						/>
					</g>
					<text
						className="l-reward-2-mobile"
						transform="translate(120 8.386)">
						<tspan x={selectedLanguage === 'es' ? -77.224 : -47.224} y={13}>
							{t('Prácticas comerciales ')}
						</tspan>
						<tspan x={selectedLanguage === 'es' ? -45.213 : -75.213} y={29}>
							{t('inadecuadas')}
						</tspan>
					</text>
				</g>
				<g transform="translate(80 780)" onClick={() => onNext(10)}>
					<g
						className="m-reward-2-mobile"
						transform="matrix(1, 0, 0, 1, -89, -780)">
						<path
							className="k-reward-2-mobile"
							d="M200.4,48.772H9.513C4.259,48.772,0,45.481,0,41.42V7.351C0,3.292,4.259,0,9.513,0H244.487C249.741,0,254,3.292,254,7.351c0,22.876-24,41.421-53.6,41.421"
							transform="translate(89 780)"
						/>
					</g>
					<text
						className="l-reward-2-mobile"
						transform="translate(120 16.386)">
						<tspan x={-73.409} y={13}>
							{t(t('Dádivas o prebendas'))}
						</tspan>
					</text>
				</g>
			</g>
		</svg>
	)
}

export default View4
