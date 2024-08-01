import React from 'react'
import { useTranslation } from 'react-i18next'

export interface IEtic {
	onNext: (number: number) => void
}

const View5: React.FC<IEtic> = ({ onNext }): JSX.Element => {
	const {t} = useTranslation()

	return (
		<svg viewBox="0 40 414 855">
			<defs>
				<style>
					{
						'.a-reward-2-mobile,.j-reward-2-mobile{fill:#e40032;}.b-reward-2-mobile,.e-reward-2-mobile,.m-reward-2-mobile,.n-reward-2-mobile,.p-reward-2-mobile,.q-reward-2-mobile,.r-reward-2-mobile{fill:#fff;}.c-reward-2-mobile{fill:none;}.d-reward-2-mobile,.k-reward-2-mobile,.l-reward-2-mobile{fill:#001f5f;}.d-reward-2-mobile{stroke:#001f5f;}.e-reward-2-mobile{font-size:18px;font-family:Kiona-Bold;}.e-reward-2-mobile,.j-reward-2-mobile,.p-reward-2-mobile,.r-reward-2-mobile{font-weight:700;}.f-reward-2-mobile{clip-path:url(#a-reward-2-mobile);}.g-reward-2-mobile{clip-path:url(#b-reward-2-mobile);}.h-reward-2-mobile{fill:url(#c-reward-2-mobile);}.i-reward-2-mobile{fill:rgba(67,67,67,0.3);}.j-reward-2-mobile{font-size:16px;}.j-reward-2-mobile,.p-reward-2-mobile{font-family:Silka-Bold, Silka;}.k-reward-2-mobile,.m-reward-2-mobile{font-size:14px;font-family:Silka-Regular, Silka;}.n-reward-2-mobile{opacity:0.56;}.o-reward-2-mobile{clip-path:url(#t-reward-2-mobile);}.p-reward-2-mobile{font-size:21px;}.q-reward-2-mobile{opacity:0.36;}.r-reward-2-mobile{font-size:25px;font-family:Helvetica-Bold, Helvetica;}.s-reward-2-mobile{filter:url(#u-reward-2-mobile);}.t-reward-2-mobile{filter:url(#r-reward-2-mobile);}.u-reward-2-mobile{filter:url(#p-reward-2-mobile);}.v-reward-2-mobile{filter:url(#n-reward-2-mobile);}.w-reward-2-mobile{filter:url(#l-reward-2-mobile);}.x-reward-2-mobile{filter:url(#j-reward-2-mobile);}.y-reward-2-mobile{filter:url(#h-reward-2-mobile);}.z-reward-2-mobile{filter:url(#f-reward-2-mobile);}.aa-reward-2-mobile{filter:url(#d-reward-2-mobile);}'
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
						xlinkHref="/images/mobile/etic/etic-1.png"
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
				<clipPath id="t-reward-2-mobile">
					<rect
						className="c-reward-2-mobile"
						width={341.08}
						height={492.379}
					/>
				</clipPath>
				<filter
					id="u-reward-2-mobile"
					x={338.58}
					y={239.5}
					width={43}
					height={43}
					filterUnits="userSpaceOnUse">
					<feOffset dy={1} />
					<feGaussianBlur stdDeviation={0.5} result="v" />
					<feFlood floodOpacity={0.4} />
					<feComposite operator="in" in2="v" />
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
						className="d-reward-2-mobile"
						d="M.614,0,35.543,74.077c9.754,20.682,32.439,34.046,57.793,34.046h214.87v.56H93.336A69.094,69.094,0,0,1,58.256,99.3a57.862,57.862,0,0,1-23.3-25.005L0,.153.614,0"
						transform="translate(456.394 -88)"
					/>
				</g>
				<text
					className="e-reward-2-mobile"
					transform="translate(207 65)">
					<tspan x={-95.733} y={0}>
						{'ÉTICA Y COMPLIANCE'}
					</tspan>
				</text>
				<g transform="translate(414 894.271) rotate(180)">
					<g className="f-reward-2-mobile" transform="translate(0)">
						<path
							className="a-reward-2-mobile"
							d="M259.753,0,243.078,31.531c-4.779,9.037-15.509,14.932-45.573,14.932H0V0Z"
							transform="translate(0 0.004)"
						/>
					</g>
				</g>
				<g transform="translate(0.525 0)">
					<g className="g-reward-2-mobile" transform="translate(0)">
						<path
							className="h-reward-2-mobile"
							d="M409.525,0,383.234,157.013c-7.534,45-24.452,74.347-71.849,74.347H0V0Z"
							transform="translate(0 0.004)"
						/>
					</g>
				</g>
				<g
					className="aa-reward-2-mobile"
					transform="matrix(1, 0, 0, 1, -9, 0)">
					<rect
						className="i-reward-2-mobile"
						width={414}
						height={38}
						transform="translate(9 39)"
					/>
				</g>
				<text
					className="e-reward-2-mobile"
					transform="translate(207 65)">
					<tspan x={-95.733} y={0}>
						{'ÉTICA Y COMPLIANCE'}
					</tspan>
				</text>
				<path
					className="b-reward-2-mobile"
					d="M7,0l7,11H0Z"
					transform="translate(36 65) rotate(-90)"
				/>
				<text
					className="j-reward-2-mobile"
					transform="translate(180 261)">
					<tspan x={-145.008} y={15}>
						{'¿Cuándo debo utilizar la línea ética?'}
					</tspan>
				</text>
				<text
					className="k-reward-2-mobile"
					transform="translate(37 291)">
					<tspan x={0} y={13}>
						{'Cuando identifique situaciones no éticas que '}
					</tspan>
					<tspan x={0} y={29}>
						{'puedan afectar los intereses del Grupo '}
					</tspan>
					<tspan x={0} y={45}>
						{'Amarey como:'}
					</tspan>
				</text>
				<g transform="translate(80 366)">
					<g
						className="z-reward-2-mobile"
						transform="matrix(1, 0, 0, 1, -89, -366)">
						<path
							className="l-reward-2-mobile"
							d="M200.4,48.772H9.513C4.259,48.772,0,45.481,0,41.42V7.351C0,3.292,4.259,0,9.513,0H244.487C249.741,0,254,3.292,254,7.351c0,22.876-24,41.421-53.6,41.421"
							transform="translate(89 366)"
						/>
					</g>
					<text
						className="m-reward-2-mobile"
						transform="translate(120 16.386)">
						<tspan x={-68.81} y={13}>
							{t('Conflicto de interés')}
						</tspan>
					</text>
				</g>
				<g transform="translate(80 573)">
					<g
						className="y-reward-2-mobile"
						transform="matrix(1, 0, 0, 1, -89, -573)">
						<path
							className="l-reward-2-mobile"
							d="M200.4,48.772H9.513C4.259,48.772,0,45.481,0,41.42V7.351C0,3.292,4.259,0,9.513,0H244.487C249.741,0,254,3.292,254,7.351c0,22.876-24,41.421-53.6,41.421"
							transform="translate(89 573)"
						/>
					</g>
					<text
						className="m-reward-2-mobile"
						transform="translate(120 16.386)">
						<tspan x={-63.266} y={13}>
							{t('Lavado de activos')}
						</tspan>
					</text>
				</g>
				<g transform="translate(80 435)">
					<g
						className="x-reward-2-mobile"
						transform="matrix(1, 0, 0, 1, -89, -435)">
						<path
							className="l-reward-2-mobile"
							d="M200.4,48.772H9.513C4.259,48.772,0,45.481,0,41.42V7.351C0,3.292,4.259,0,9.513,0H244.487C249.741,0,254,3.292,254,7.351c0,22.876-24,41.421-53.6,41.421"
							transform="translate(89 435)"
						/>
					</g>
					<text
						className="m-reward-2-mobile"
						transform="translate(120 8.386)">
						<tspan x={-63.973} y={13}>
							{'Incumplimiento de '}
						</tspan>
						<tspan x={-69.846} y={29}>
							{'leyes y regulaciones'}
						</tspan>
					</text>
				</g>
				<g transform="translate(80 642)">
					<g
						className="w-reward-2-mobile"
						transform="matrix(1, 0, 0, 1, -89, -642)">
						<path
							className="l-reward-2-mobile"
							d="M200.4,48.772H9.513C4.259,48.772,0,45.481,0,41.42V7.351C0,3.292,4.259,0,9.513,0H244.487C249.741,0,254,3.292,254,7.351c0,22.876-24,41.421-53.6,41.421"
							transform="translate(89 642)"
						/>
					</g>
					<text
						className="m-reward-2-mobile"
						transform="translate(34 16.386)">
						<tspan x={-88.725} y={13}>
							{t('Actividades inapropiadas')}
						</tspan>
					</text>
				</g>
				<g transform="translate(80 504)">
					<g
						className="v-reward-2-mobile"
						transform="matrix(1, 0, 0, 1, -89, -504)">
						<path
							className="l-reward-2-mobile"
							d="M200.4,48.772H9.513C4.259,48.772,0,45.481,0,41.42V7.351C0,3.292,4.259,0,9.513,0H244.487C249.741,0,254,3.292,254,7.351c0,22.876-24,41.421-53.6,41.421"
							transform="translate(89 504)"
						/>
					</g>
					<text
						className="m-reward-2-mobile"
						transform="translate(120 16.386)">
						<tspan x={-59.668} y={13}>
							{'Confidencialidad'}
						</tspan>
					</text>
				</g>
				<g transform="translate(80 711)">
					<g
						className="u-reward-2-mobile"
						transform="matrix(1, 0, 0, 1, -89, -711)">
						<path
							className="l-reward-2-mobile"
							d="M200.4,48.772H9.513C4.259,48.772,0,45.481,0,41.42V7.351C0,3.292,4.259,0,9.513,0H244.487C249.741,0,254,3.292,254,7.351c0,22.876-24,41.421-53.6,41.421"
							transform="translate(89 711)"
						/>
					</g>
					<text
						className="m-reward-2-mobile"
						transform="translate(120 8.386)">
						<tspan x={-77.224} y={13}>
						{t('Prácticas comerciales ')}
						</tspan>
						<tspan x={-45.213} y={29}>
							{t('inadecuadas')}
						</tspan>
					</text>
				</g>
				<g transform="translate(80 780)">
					<g
						className="t-reward-2-mobile"
						transform="matrix(1, 0, 0, 1, -89, -780)">
						<path
							className="l-reward-2-mobile"
							d="M200.4,48.772H9.513C4.259,48.772,0,45.481,0,41.42V7.351C0,3.292,4.259,0,9.513,0H244.487C249.741,0,254,3.292,254,7.351c0,22.876-24,41.421-53.6,41.421"
							transform="translate(89 780)"
						/>
					</g>
					<text
						className="m-reward-2-mobile"
						transform="translate(120 16.386)">
						<tspan x={-73.409} y={13}>
							{t('Dádivas o prebendas')}
						</tspan>
					</text>
				</g>
				<g transform="translate(752.999 -226.802)">
					<rect
						className="n-reward-2-mobile"
						width={414}
						height={894.983}
						transform="translate(-752.999 226.802)"
					/>
				</g>
				<g transform="translate(36 231.364)">
					<g className="o-reward-2-mobile" transform="translate(0)">
						<path
							className="l-reward-2-mobile"
							d="M341.08,441.7V13.955C341.08,6.248,334.534,0,326.459,0H14.621C6.546,0,0,6.248,0,13.955V478.419c0,8.834,8.49,15.445,17.557,13.671l311.837-36.715A14.131,14.131,0,0,0,341.08,441.7"
						/>
					</g>
					<text
						className="p-reward-2-mobile"
						transform="translate(160 134.636)">
						<tspan x={-104.643} y={20}>
							{t('Conflicto de interés')}
						</tspan>
					</text>
					<text
						className="m-reward-2-mobile"
						transform="translate(35 192.636)">
						<tspan x={0} y={13}>
							{t('La situación en virtud de la cual una ')}
						</tspan>
						<tspan x={0} y={29}>
							{t('persona, por su actividad o cargo, o ')}
						</tspan>
						<tspan x={0} y={45}>
							{t('por la información que posee, se ')}
						</tspan>
						<tspan x={0} y={61}>
							{t('enfrenta a distintas alternativas de ')}
						</tspan>
						<tspan x={0} y={77}>
							{t('conducta en relación con intereses ')}
						</tspan>
						<tspan x={0} y={93}>
							{t('incompatibles, siendo incorrecto ')}
						</tspan>
						<tspan x={0} y={109}>
							{t('privilegiar alguno de ellos, pues se ')}
						</tspan>
						<tspan x={0} y={125}>
							{t('vulneraría o debilitaría injustamente ')}
						</tspan>
						<tspan x={0} y={141}>
							{t('la posición del otro.')}
						</tspan>
					</text>
				</g>
				<g transform="translate(331.23 240.163)" onClick={() => onNext(3)}>
					<g
						className="s-reward-2-mobile"
						transform="matrix(1, 0, 0, 1, -340.23, -240.16)">
						<circle
							className="q-reward-2-mobile"
							cx={20}
							cy={20}
							r={20}
							transform="translate(340.08 240)"
						/>
					</g>
					<text
						className="r-reward-2-mobile"
						transform="translate(10.85 28.837)">
						<tspan x={0} y={0}>
							{'X'}
						</tspan>
					</text>
				</g>
			</g>
		</svg>
	)
}

export default View5
