import React from 'react'
import { useTranslation } from 'react-i18next'
import { useLanguage } from "context/language";

export interface IEtic {
	onNext: (number: number) => void
}

const View3: React.FC<IEtic> = ({ onNext }): JSX.Element => {
	const {t} = useTranslation()
	const { selectedLanguage } = useLanguage();
	return (
		<svg viewBox="167 40 414 907.512">
			<defs>
				<style>
					{
						'.a-reward-2-mobile,.c-reward-2-mobile,.i-reward-2-mobile{fill:#e40032;}.b-reward-2-mobile,.l-reward-2-mobile{fill:#fff;}.c-reward-2-mobile{stroke:#e40032;}.d-reward-2-mobile,.h-reward-2-mobile,.j-reward-2-mobile,.k-reward-2-mobile{fill:#001f5f;}.d-reward-2-mobile{stroke:#001f5f;}.e-reward-2-mobile{clip-path:url(#a-reward-2-mobile);}.f-reward-2-mobile{clip-path:url(#b-reward-2-mobile);}.g-reward-2-mobile{fill:url(#c-reward-2-mobile);}.h-reward-2-mobile{font-size:14px;font-family:Silka-Regular, Silka;}.i-reward-2-mobile{font-family:Silka-Bold, Silka;}.i-reward-2-mobile,.j-reward-2-mobile,.l-reward-2-mobile{font-weight:700;}.j-reward-2-mobile{font-size:32px;}.j-reward-2-mobile,.l-reward-2-mobile{font-family:Kiona-Bold;}.l-reward-2-mobile{font-size:18px;}.m-reward-2-mobile{fill:rgba(67,67,67,0.3);}.n-reward-2-mobile{filter:url(#f-reward-2-mobile);}.o-reward-2-mobile{filter:url(#d-reward-2-mobile);}'
					}
				</style>
				<clipPath id="a-reward-2-mobile">
					<rect
						className="a-reward-2-mobile"
						width={413.475}
						height={301.615}
						transform="translate(0 0)"
					/>
				</clipPath>
				<clipPath id="b-reward-2-mobile">
					<rect
						className="b-reward-2-mobile"
						width={409.525}
						height={297.384}
						transform="translate(0 0)"
					/>
				</clipPath>
				<pattern
					id="c-reward-2-mobile"
					width={1}
					height={1}
					viewBox="31.188 86.549 366.094 265.846">
					<image
						preserveAspectRatio="xMidYMid slice"
						width={409.525}
						height={405.843}
						xlinkHref="/images/mobile/etic/etic-1.webp"
					/>
				</pattern>
				<filter
					id="d-reward-2-mobile"
					x={209.494}
					y={738.774}
					width={328.799}
					height={69.389}
					filterUnits="userSpaceOnUse">
					<feOffset dy={3} />
					<feGaussianBlur stdDeviation={3} result="e" />
					<feFlood floodOpacity={0.4} />
					<feComposite operator="in" in2="e" />
					<feComposite in="SourceGraphic" />
				</filter>
				<filter
					id="f-reward-2-mobile"
					x={157.894}
					y={33}
					width={432}
					height={56}
					filterUnits="userSpaceOnUse">
					<feOffset dy={3} />
					<feGaussianBlur stdDeviation={3} result="g" />
					<feFlood floodOpacity={0.302} />
					<feComposite operator="in" in2="g" />
					<feComposite in="SourceGraphic" />
				</filter>
			</defs>
			<g transform="translate(0.5)">
				<rect
					className="b-reward-2-mobile"
					width={414}
					height={896}
					transform="translate(166.394 0)"
				/>
				<g transform="translate(0 220.82)">
					<path
						className="c-reward-2-mobile"
						d="M520.633,106.024l-12.54-26.591C485.7,31.96,433.632,1.285,375.435,1.285H0V0H375.435a158.592,158.592,0,0,1,80.522,21.544,136.594,136.594,0,0,1,44.726,41.862,122.129,122.129,0,0,1,8.753,15.533l12.774,27.085Z"
						transform="translate(0 622.167)"
					/>
					<path
						className="d-reward-2-mobile"
						d="M1.225,0,70.893,147.751c19.455,41.252,64.7,67.908,115.273,67.908H614.74v1.117H186.166A137.812,137.812,0,0,1,116.2,198.054c-20.79-12.247-36.859-29.493-46.47-49.874L0,.306,1.225,0"
						transform="translate(109.862 443.954)"
					/>
					<path
						className="d-reward-2-mobile"
						d="M.614,0,35.543,74.077c9.754,20.682,32.439,34.046,57.793,34.046h214.87v.56H93.336A69.094,69.094,0,0,1,58.256,99.3a57.862,57.862,0,0,1-23.3-25.005L0,.153.614,0"
						transform="translate(356.209)"
					/>
				</g>
				<g transform="translate(166.394 0)">
					<g className="e-reward-2-mobile" transform="translate(0)">
						<path
							className="a-reward-2-mobile"
							d="M413.475,0,386.931,204.69c-7.607,58.661-24.688,96.922-72.542,96.922H0V0Z"
							transform="translate(0 0.004)"
						/>
					</g>
				</g>
				<g transform="translate(166.394 0)">
					<g className="f-reward-2-mobile" transform="translate(0)">
						<path
							className="g-reward-2-mobile"
							d="M409.525,0,383.234,201.818c-7.534,57.838-24.452,95.562-71.849,95.562H0V0Z"
							transform="translate(0 0.004)"
						/>
					</g>
				</g>
				<text
					className="h-reward-2-mobile"
					transform="translate(203.394 433)">
					<tspan x={0} y={13}>
						{t('La línea ética es un canal diseñado para que ')}
					</tspan>
					<tspan x={0} y={29}>
						{t('empleados, proveedores, aliados estratégicos y ')}
					</tspan>
					<tspan x={0} y={45}>
						{t('clientes puedan reportar de forma anónima y ')}
					</tspan>
					<tspan x={0} y={61}>
						{t('confidencial presuntas violaciones a nuestro ')}
					</tspan>
					<tspan x={0} y={77}>
						{t('Código de ética, así como posibles actos ')}
					</tspan>
					<tspan x={0} y={93}>
						{t('incorrectos, fraudes, corrupción, acoso y otros ')}
					</tspan>
					<tspan x={0} y={109}>
						{t('aspectos que afecten la imagen y buen nombre ')}
					</tspan>
					<tspan x={0} y={125}>
						{t('de la compañía.')}
					</tspan>
					<tspan x={0} y={141} />
					<tspan x={0} y={157}>
						{t('Las denuncias pueden realizarse a través del ')}
					</tspan>
					<tspan x={0} y={173}>
						{t('correo electrónico los 7 días de la semana, las ')}
					</tspan>
					<tspan x={0} y={189}>
						{t('24 horas del día.')}
					</tspan>
					<tspan x={0} y={205} />
					<tspan className="i-reward-2-mobile">
						<tspan x={0} y={221}>
							{t('¿Cómo puedo comunicarme con la línea ética? ')}
						</tspan>
					</tspan>
					<tspan x={0} y={237} />
					<tspan x={0} y={253}>
						{t('A través del correo electrónico: ')}
					</tspan>
					<tspan x={0} y={269}>
						{
							t('linea.etica@grupoamarey.com')
						}
					</tspan>
				</text>
				<text
					className="j-reward-2-mobile"
					transform={selectedLanguage === 'es' ? "translate(202.394 367)" : "translate(165.394 367)"}>
					<tspan x={75} y={32}>
						{t('Línea ética')}
					</tspan>
				</text>
				<g transform="translate(166.394 -3565.115)" onClick={() => onNext(3)}>
					<g
						className="o-reward-2-mobile"
						transform="matrix(1, 0, 0, 1, -166.89, 3565.12)">
						<path
							className="k-reward-2-mobile"
							d="M310.8,0H56.16C33.523,0,13.2,15,4.93,37.792L0,51.389H252.834c24.117,0,45.71-16.167,54.205-40.584Z"
							transform="translate(218.49 744.77)"
						/>
					</g>
					<text
						className="l-reward-2-mobile"
						transform="translate(207 4332.584)">
						<tspan x={selectedLanguage === 'es' ? -110.925 : -85.925} y={0}>
							{t('¿Cuándo debo utilizar')}
						</tspan>
						<tspan x={-72.801} y={20}>
							{t('la línea ética?')}
						</tspan>
					</text>
				</g>
				<g
					className="n-reward-2-mobile"
					transform="matrix(1, 0, 0, 1, -0.5, 0)">
					<rect
						className="m-reward-2-mobile"
						width={414}
						height={38}
						transform="translate(166.89 39)"
					/>
				</g>
				<text
					className="l-reward-2-mobile"
					transform="translate(373.394 65)">
					<tspan x={-95.733} y={0}>
						{t('ÉTICA Y COMPLIANCE ')}
					</tspan>
				</text>
				<path
					className="b-reward-2-mobile"
					d="M7,0l7,11H0Z"
					transform="translate(202.394 65) rotate(-90)"
					onClick={() => onNext(0)}
				/>
			</g>
		</svg>
	)
}

export default View3
