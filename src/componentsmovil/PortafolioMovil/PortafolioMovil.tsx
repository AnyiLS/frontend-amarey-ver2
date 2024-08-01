import React from 'react'
import PortfolioCarousel from './components/PortfolioCarousel'
import { useTranslation } from 'react-i18next'
import { useLanguage } from 'context/language'

export const PortafolioMovil: React.FC = () => {
	/** States */
	const [isCarousel, setIsCarousel] = React.useState<boolean>(false)

	const {t} = useTranslation()

	const { selectedLanguage } = useLanguage(); 

	return (
		<React.Fragment>
			{!isCarousel ? (
				<svg viewBox="3 0 414 897">
					<defs>
						<style>
							{
								".a-portfolio,.g-portfolio{fill:#001f5f;}.b-portfolio{fill:#e40032;}.c-portfolio,.e-portfolio,.f-portfolio{fill:#fff;}.d-portfolio{fill:url(#a-portfolio);}.e-portfolio{font-size:14px;font-family:Silka-Regular, Silka;}.f-portfolio{font-size:46px;}.f-portfolio,.g-portfolio{font-family:'Kiona-Bold';font-weight:700;}.g-portfolio{font-size:18px;}.h-portfolio{filter:url(#d-portfolio);}.i-portfolio{filter:url(#b-portfolio);}"
							}
						</style>
						<pattern
							id="a-portfolio"
							width={1}
							height={1}
							viewBox="208.669 59.384 362.128 401.936">
							<image
								preserveAspectRatio="xMidYMid slice"
								width={693.355}
								height={461.32}
								xlinkHref="/images/maquinas_11zon.webp"
							/>
						</pattern>
						<filter
							id="b-portfolio"
							x={0}
							y={0}
							width={433.631}
							height={479.32}
							filterUnits="userSpaceOnUse">
							<feOffset dy={3}/>
							<feGaussianBlur stdDeviation={3} result="c" />
							<feFlood floodOpacity={0.4} />
							<feComposite operator="in" in2="c" />
							<feComposite in="SourceGraphic" />
						</filter>
						<filter
							id="d-portfolio"
							x={95}
							y={763.793}
							width={248}
							height={61.168}
							filterUnits="userSpaceOnUse">
							<feOffset dy={3}/>
							<feGaussianBlur stdDeviation={3} result="e" />
							<feFlood floodOpacity={0.4} />
							<feComposite operator="in" in2="e" />
							<feComposite in="SourceGraphic" />
						</filter>
					</defs>
					<g>
						<path
							className="a-portfolio"
							d="M0,0H414.916V882.841H0Z"
							transform="translate(2.084 14.315)"
						/>
						<path
							className="b-portfolio"
							d="M294.722,719.157V674.6l-136.232-1.543c-16.015,0-30.755,16.988-39.835,44.559Z"
							transform="translate(122.709 179.542)"
						/>
						<path
							className="c-portfolio"
							d="M362.084,470.261H333.953a82.34,82.34,0,0,1-76.2-50.808l-6.8-15.056h-1.291l7.015,15.525a83.511,83.511,0,0,0,77.284,51.516h28.131Z"
							transform="translate(54.916 14.508)"
						/>
						<g
							className="i-portfolio"
							transform="matrix(1, 0, 0, 1, -9, -6)">
							<path
								className="d-portfolio"
								d="M215.78,461.32,0,460.859V0H415.631V193.737l-91.4,201.579c-18.646,40.053-60.849,63.883-108.447,66"
								transform="translate(9 6)"
							/>
						</g>
						<text
							className="e-portfolio"
							transform="translate(210 654.159)">
							<tspan x={selectedLanguage === 'es' ? -149.093 : -130.093} y={13}>
								{t('Somos un grupo empresarial con una clara ')}
							</tspan>
							<tspan x={selectedLanguage === 'es' ? -166.887 : -156.887} y={29}>
								{
									t('inspiración profesional y humana; ofrecemos un ')
								}
							</tspan>
							<tspan x={selectedLanguage === 'es' ? -166.481 : -150.481} y={45}>
								{
									t('portafolio de soluciones en salud de la más alta ')
								}
							</tspan>
							<tspan x={selectedLanguage === 'es' ? -143.325 : -62.325} y={61}>
								{t('calidad para el cuidado de los pacientes. ')}
							</tspan>
						</text>
						<text
							className="f-portfolio"
							transform="translate(210 553.524)">
							<tspan x={selectedLanguage === 'es' ? -140.3 : -130.3} y={46}>
								{t('Portafolio')}
							</tspan>
						</text>
						<g
							transform="translate(3 -3550.207)"
							onClick={() => setIsCarousel(true)}>
							<g
								className="h-portfolio"
								transform="matrix(1, 0, 0, 1, -12, 3544.21)">
								<path
									className="c-portfolio"
									d="M230,0H47.176C28.161,0,11.086,12.6,4.142,31.746L0,43.169H181.308c20.259,0,38.4-13.581,45.534-34.092Z"
									transform="translate(104 769.79)"
								/>
							</g>
							<text
								className="g-portfolio"
								transform="translate(147.5 4342.584)">
								<tspan x={0} y={0}>
									{t('Conoce Más')}
								</tspan>
							</text>
						</g>
					</g>
				</svg>
			) : (
				<PortfolioCarousel onClose={() => setIsCarousel(false)} />
			)}
		</React.Fragment>
	)
}
