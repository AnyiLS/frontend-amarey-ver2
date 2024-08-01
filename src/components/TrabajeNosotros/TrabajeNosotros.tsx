import useGeneral from 'hooks/general.hook'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { useLanguage } from 'context/language'
import useLayout from 'hooks/ancho.hook'

const TrabajeNosotros = () => {
	const { width: fullWidth, height } = useLayout()
	const { width } = useGeneral()
	const { t } = useTranslation()
	const { selectedLanguage } = useLanguage()

	console.log()

	return (
		<div className="h-full w-full">
			{width > 768 ? (
				<svg
					viewBox="0 50 1925 1300"
					id="desktop-container"
					height="auto">
					<defs>
						<style>
							{
								'h-trabajo .k-trabajo{fill: #e40032 !important}.a-trabajo,.c-trabajo{fill:none;}.b-trabajo{clip-path:url(#a-trabajo);}.c-trabajo{stroke:#e40032;}.d-trabajo,.g-trabajo,.l-trabajo{fill:#001f5f;}.e-trabajo{fill:url(#b-trabajo);}.f-trabajo,.k-trabajo{fill:#e40032;}.f-trabajo,.g-trabajo{font-size:42px;font-family:Kiona-Bold, Kiona;}.f-trabajo,.g-trabajo,.i-trabajo,.l-trabajo{font-weight:700;}.h-trabajo,.o-trabajo{fill:#182856;font-size:24px;}.h-trabajo{font-family:Silka-Regular, Silka;}.i-trabajo,.l-trabajo{font-family:Silka-Bold, Silka;}.j-trabajo,.n-trabajo,.o-trabajo{font-family:Silka-SemiBold, Silka;font-weight:600;}.l-trabajo{font-size:40px;}.m-trabajo{fill:url(#c-trabajo);}.n-trabajo{fill:#fff;}'
							}
						</style>
						<clipPath id="a-trabajo">
							<rect
								className="a-trabajo"
								width={1925}
								height={1718}
							/>
						</clipPath>
						<pattern
							id="b-trabajo"
							width={1}
							height={1}
							viewBox="41 0 1044.043 912">
							<image
								preserveAspectRatio="none"
								width={1424.462}
								height={950}
								xlinkHref="/images/trabajecnosotros.webp"
							/>
						</pattern>
						<pattern
							id="c-trabajo"
							width={1}
							height={1}
							patternTransform="matrix(-1, 0, 0, 1, 1489.036, 0)"
							viewBox="0 0.994 568.66 544.677">
							<image
								preserveAspectRatio="xMidYMid slice"
								width={718.018}
								height={478.714}
								xlinkHref="/images/trabajecn.webp"
							/>
						</pattern>
					</defs>
					<g transform="translate(0 11)">
						<g className="b-trabajo" transform="translate(0 0)">
							<path
								className="c-trabajo"
								d="M206.276,63.443V62.66H142.619v.028H78.054A76.633,76.633,0,0,1,7.13,15.167l-.023-.056L.843,0H0L6.412,15.468c.225.545.457,1.084.695,1.621A77.674,77.674,0,0,0,35,50.37a77.078,77.078,0,0,0,43.049,13.1H184.337v-.028Z"
								transform="translate(1459.724 616.606)"
							/>
							<path
								className="c-trabajo"
								d="M276.234,79.293v-.979H190.988v.035H104.526c-41.667,0-78.948-23.312-94.978-59.393l-.031-.07L1.129,0H0L8.587,19.332c.3.681.612,1.354.93,2.025,1.017,2.152,2.112,4.261,3.357,6.457a99.573,99.573,0,0,0,34,35.14,108.526,108.526,0,0,0,57.649,16.374H246.854v-.036Z"
								transform="translate(1925 1080.259) rotate(90)"
							/>
							<path
								className="d-trabajo"
								d="M0,0,23.877,8.091q2.366.8,4.694,1.646C67.845,23.894,101.108,46.673,125,75.811c24.833,30.293,37.957,65.547,37.957,101.957v251.72h-2.269V177.768c0-73.691-54.041-139.625-137.677-167.976l-.164-.054L0,2Z"
								transform="translate(407.993 36.618) rotate(90)"
							/>
							<path
								className="d-trabajo"
								d="M358.468,0V170.105H118.815C69.078,170.105,23.777,104.123,0,0Z"
								transform="translate(1566.532 549.519)"
							/>
							<path
								className="d-trabajo"
								d="M174.009,0V82.573H57.676C33.532,82.573,11.542,50.544,0,0Z"
								transform="translate(174.009 986.039) rotate(180)"
							/>
							<path
								className="d-trabajo"
								d="M321.465,107.578V0H106.55C61.947,0,21.323,41.729,0,107.578Z"
								transform="translate(1812.409 310.465) rotate(-90)"
							/>
						</g>
					</g>
					<g transform="translate(15 0)">
						<path
							className="d-trabajo"
							d="M662.461,0H31.215C11.463,0-3.32,15.792.646,32.659l82.1,580.121c2.975,12.654,15.751,21.74,30.57,21.74H662.461Z"
							transform="translate(1244 3.542)"
						/>
						<path
							className="e-trabajo"
							d="M662.461,0H31.215C11.463,0-3.32,15.792.646,32.659l82.1,580.121c2.975,12.654,15.751,21.74,30.57,21.74H662.461Z"
							transform="translate(1247.538 0.003)"
						/>
						<g transform='translate(0 -20)'>
							<text
								className="f-trabajo"
								transform="translate(281 488)">
								<tspan x={0} y={42}>
									{t('¿Por qué unirte a nosotros?')}
								</tspan>
							</text>
							<text
								className="f-trabajo"
								transform="translate(559 997)">
								<tspan x={0} y={42}>
									{t('¿Cómo unirse?')}
								</tspan>
							</text>
							<text
								className="g-trabajo"
								transform="translate(960 1216)">
								<tspan x={-357.042} y={42}>
									{t('\xA1Esperamos conocerte pronto!')}
								</tspan>
							</text>
							<text
								className="h-trabajo"
								transform="translate(281 571)">
								<tspan x={0} y={23}>
									{t(
										'Cada d\xEDa nos esforzamos por el bienestar de nuestros colaboradores. Somos '
									)}
								</tspan>
								<tspan x={0} y={49}>
									{t('una empresa de ')}
								</tspan>
								<tspan className="i-trabajo" y={49}>
									{t('capital colombiano')}
								</tspan>
								<tspan y={49}>
									{t(
										', comprometida con la salud y dedicada a '
									)}
								</tspan>
								<tspan x={0} y={75}>
									{t('ampliar las oportunidades de vida.')}
								</tspan>
							</text>
							<text
								className="h-trabajo"
								transform="translate(281 677)">
								<tspan x={0} y={23}>
									{t(
										'En Grupo Amarey, sabemos que el talento excepcional es la clave para hacer '
									)}
								</tspan>
								<tspan className="j-trabajo" y={23}>
									{t('cosas incre\xEDbles y ')}
								</tspan>
								<tspan className="j-trabajo" x={0} y={49}>
									{t('alcanzar resultados extraordinarios. ')}
								</tspan>
								<tspan y={49}>{t('Generamos ')}</tspan>
								<tspan className="j-trabajo" y={49}>
									{t(
										'entornos de trabajo inclusivos, colaborativos, '
									)}
								</tspan>
								<tspan className="j-trabajo" x={0} y={75}>
									{t('retadores y estimulantes')}
								</tspan>
								<tspan y={75} xmlSpace="preserve">
									{t(
										' donde cada colaborador puede aportar, crecer y contribuir de manera '
									)}
								</tspan>
								<tspan x={0} y={101}>
									{t('significativa al')}
								</tspan>
								<tspan
									className="j-trabajo"
									y={101}
									xmlSpace="preserve">
									{t(' logro de nuestros objetivos.')}
								</tspan>
							</text>
							<text
								className="h-trabajo"
								transform="translate(559 1092)">
								<tspan x={0} y={23}>
									{t(
										'Si est\xE1s interesado en formar parte del Grupo Amarey, te invitamos a enviar tu hoja de '
									)}
								</tspan>
								<tspan x={0} y={49}>
									{t('vida a ')}
								</tspan>
								<a href="mailto:atracciondetalento@grupoamarey.com">
									<tspan
										className="k-trabajo"
										y={49}
										style={{ fill: '#e40032' }}>
										{t(
											'atracciondetalento@grupoamarey.com'
										)}
									</tspan>
								</a>
								<tspan y={49}>
									{t(', indicando la ciudad donde vives.')}
								</tspan>
							</text>
							<text
								className="l-trabajo"
								transform="translate(281 294)">
								<tspan x={0} y={38}>
									{t('Juntos trabajamos por alcanzar ')}
								</tspan>
								<tspan x={0} y={84}>
									{t(
										'nuestro prop\xF3sito de un compromiso '
									)}
								</tspan>
								<tspan x={0} y={130}>
									{t(
										'inquebrantable con la salud y la vida.'
									)}
								</tspan>
							</text>
						</g>
						<path
							className="d-trabajo"
							d="M0,478.714H476.242c14.9,0,26.055-11.917,23.063-24.642L437.364,16.4C435.119,6.854,425.481,0,414.3,0H0Z"
							transform="translate(-70.455 975)"
						/>
						<path
							className="m-trabajo"
							d="M0,478.714H476.242c14.9,0,26.055-11.917,23.063-24.642L437.364,16.4C435.119,6.854,425.481,0,414.3,0H0Z"
							transform="translate(-15 978.67)"
						/>
						<text
							className="h-trabajo"
							transform="translate(281 823)">
							<tspan x={0} y={23}>
								{t('Estamos en b\xFAsqueda de personas ')}
							</tspan>
							<tspan className="j-trabajo" y={23}>
								{t('apasionadas y comprometidas,')}
							</tspan>
							<tspan y={23} xmlSpace="preserve">
								{t(' que ')}
							</tspan>
							<tspan className="j-trabajo" y={23}>
								{t('compartan y reflejen ')}
							</tspan>
							<tspan className="j-trabajo" x={0} y={49}>
								{t('nuestros valores,')}
							</tspan>
							<tspan y={49} xmlSpace="preserve">
								{t(' alineados con ')}
							</tspan>

							<tspan className="j-trabajo" y={49}>
								{t('la ')}
							</tspan>
							<tspan className="n-trabajo" y={49}>
								{t('filosofia\xEDa SER')}
							</tspan>
							<tspan
								className="j-trabajo"
								y={49}
								xmlSpace="preserve">
								{t(
									' (Servicio, Educaci\xF3n y Relacionamiento)'
								)}
							</tspan>
							<tspan y={49} xmlSpace="preserve">
								{t(' y est\xE9n ')}
							</tspan>
							<tspan x={0} y={75}>
								{t(
									'dispuestos a asumir retos diarios y llevar la Organizaci\xF3n a otros niveles. '
								)}
							</tspan>
						</text>
						{selectedLanguage === 'es' && (
							<g transform="translate(703 849)">
								<text className="o-trabajo">
									<tspan x={0} y={23}>
										{'filosof\xEDa SER '}
									</tspan>
								</text>
							</g>
						)}
					</g>
				</svg>
			) : (
				<svg viewBox="36 0 414 1215">
					<defs>
						<style>
							{
								'.a-trabajo{fill:none;}.b-trabajo{clip-path:url(#a-trabajo);}.c-trabajo{fill:#e7002a;stroke:#e40032;}.d-trabajo,.e-trabajo,.h-trabajo,.o-trabajo{fill:#001f5f;}.d-trabajo{stroke:#001f5f;}.f-trabajo{fill:url(#b-trabajo);}.g-trabajo{fill:url(#c-trabajo);}.h-trabajo{font-size:22px;}.h-trabajo,.k-trabajo{font-family:Silka-Bold, Silka;}.h-trabajo,.i-trabajo,.k-trabajo,.o-trabajo{font-weight:700;}.i-trabajo,.n-trabajo{fill:#e40032;}.i-trabajo,.o-trabajo{font-size:18px;font-family:Kiona-Bold, Kiona;}.j-trabajo,.p-trabajo{fill:#182856;font-size:14px;}.j-trabajo{font-family:Silka-Regular, Silka;}.l-trabajo,.m-trabajo,.p-trabajo{font-family:Silka-SemiBold, Silka;font-weight:600;}.m-trabajo{fill:#fff;}'
							}
						</style>
						<clipPath id="a-trabajo">
							<rect
								className="a-trabajo"
								width={423}
								height={1423}
							/>
						</clipPath>
						<pattern
							id="b-trabajo"
							width={1}
							height={1}
							viewBox="16.591 150.675 331.158 231.741">
							<image
								preserveAspectRatio="xMidYMid slice"
								width={383.462}
								height={511.283}
								xlinkHref="/images/trabajecnosotros.webp"
							/>
						</pattern>
						<pattern
							id="c-trabajo"
							width={1}
							height={1}
							patternTransform="matrix(1, 0, 0, -1, 0, 401.567)"
							viewBox="-4.613 -32.038 302.392 211.611">
							<image
								preserveAspectRatio="xMidYMid slice"
								width={301.153}
								height={200.784}
								xlinkHref="/images/trabajecn.webp"
							/>
						</pattern>
					</defs>
					<g transform="translate(33.5 4.21)">
						<g className="b-trabajo">
							<path
								className="c-trabajo"
								d="M716.44,53.484v-.66H680.55v.024h-36.4c-17.543,0-33.239-15.725-39.988-40.061l-.013-.047L600.615,0h-.475l3.615,13.04c.127.459.258.913.392,1.366,3.37,11.427,8.793,21.106,15.729,28.058,7.211,7.226,15.6,11.044,24.272,11.044H704.07v-.024Z"
								transform="translate(-384.64 234.162)"
							/>
							<path
								className="d-trabajo"
								d="M0,.024V.672H192.4V.649H261.37C294.6.649,324.341,16.1,337.128,40l.024.046,6.691,12.514h.9l-6.849-12.809q-.36-.677-.742-1.342c-6.385-11.225-16.658-20.733-29.8-27.561A100.047,100.047,0,0,0,261.37,0H147.843V.024Z"
								transform="translate(-106.591 78.176) rotate(90)"
							/>
							<path
								className="c-trabajo"
								d="M119.027,36.257V35.81H82.3v.016H45.039A44.224,44.224,0,0,1,4.114,8.668L4.1,8.636.486,0H0L3.7,8.84c.13.311.264.619.4.926.438.984.91,1.949,1.447,2.953A44.446,44.446,0,0,0,20.2,28.786a44.783,44.783,0,0,0,24.841,7.487h61.328v-.016Z"
								transform="translate(344.962 1210.949) rotate(180)"
							/>
							<path
								className="e-trabajo"
								d="M112.908,0V46.877H37.424C21.758,46.877,7.489,28.694,0,0Z"
								transform="translate(304.592 253.39)"
							/>
						</g>
					</g>
					<path
						className="e-trabajo"
						d="M387.579,0V272.512H69.217c-9.312,0-17.34-6.874-19.21-16.448L0,0Z"
						transform="translate(63.421)"
					/>
					<path
						className="e-trabajo"
						d="M290,0V203.9H51.791A14.865,14.865,0,0,1,37.417,191.6L0,0Z"
						transform="translate(290 1218.903) rotate(180)"
					/>
					<path
						className="f-trabajo"
						d="M383.462,0V268.343H68.159c-9.169,0-17.075-6.768-18.916-16.2L0,0Z"
						transform="translate(67.538)"
					/>
					<path
						className="g-trabajo"
						d="M286.92,0V200.784H51a14.637,14.637,0,0,1-14.153-12.119L0,0Z"
						transform="translate(286.92 1218.903) rotate(180)"
					/>
					<text
						className="h-trabajo"
						transform="translate(73 324.21)">
						<tspan x={0} y={21}>
							{t('Juntos trabajamos por ')}
						</tspan>
						<tspan x={0} y={45}>
							{t('alcanzar nuestro prop\xF3sito de ')}
						</tspan>
						<tspan x={0} y={69}>
							{t('un compromiso inquebrantable ')}
						</tspan>
						<tspan x={0} y={93}>
							{t('con la salud y la vida.')}
						</tspan>
					</text>
					<text
						className="i-trabajo"
						transform="translate(69 453.21)">
						<tspan x={0} y={18}>
							{t('\xBFPor qu\xE9 unirte a nosotros?')}
						</tspan>
					</text>
					<text
						className="i-trabajo"
						transform="translate(73 832.21)">
						<tspan x={0} y={18}>
							{t('\xBFC\xF3mo unirse?')}
						</tspan>
					</text>
					<text
						className="j-trabajo"
						transform="translate(73 495.21)">
						<tspan x={0} y={13}>
							{t(
								'Cada d\xEDa nos esforzamos por el bienestar de '
							)}
						</tspan>
						<tspan x={0} y={29}>
							{t('nuestros colaboradores. Somos una empresa de ')}
						</tspan>
						<tspan className="k-trabajo" x={0} y={45}>
							{t('capital colombiano ')}
						</tspan>
						<tspan y={45}>
							{t(', comprometida con la salud ')}
						</tspan>
						<tspan x={0} y={61}>
							{t(
								'y dedicada a ampliar las oportunidades de vida.'
							)}
						</tspan>
					</text>
					<text
						className="j-trabajo"
						transform="translate(73 570.21)">
						<tspan x={0} y={13}>
							{t('En Grupo Amarey, sabemos que el talento ')}
						</tspan>
						<tspan x={0} y={29}>
							{t('excepcional es la clave para hacer ')}
						</tspan>
						<tspan className="l-trabajo" y={29}>
							{t('cosas ')}
						</tspan>
						<tspan className="l-trabajo" x={0} y={45}>
							{t(
								'incre\xEDbles y alcanzar resultados extraordinarios. '
							)}
						</tspan>
						<tspan x={0} y={61}>
							{t('Generamos')}
						</tspan>
						<tspan className="l-trabajo" y={61}>
							{t('entornos de trabajo inclusivos, ')}
						</tspan>
						<tspan className="l-trabajo" x={0} y={77}>
							{t('colaborativos, retadores y estimulantes')}
						</tspan>
						<tspan y={77} xmlSpace="preserve">
							{t(' donde ')}
						</tspan>
						<tspan x={0} y={93}>
							{t('cada colaborador puede aportar, crecer y ')}
						</tspan>
						<tspan x={0} y={109}>
							{t('contribuir de manera significativa al')}
						</tspan>
						<tspan
							className="l-trabajo"
							y={109}
							xmlSpace="preserve">
							{t(' logro de ')}
						</tspan>
						<tspan className="l-trabajo" x={0} y={125}>
							{t('nuestros objetivos.')}
						</tspan>
					</text>
					<text
						className="j-trabajo"
						transform="translate(73 708.21)">
						<tspan x={0} y={13}>
							{t('Estamos en b\xFAsqueda de personas')}
						</tspan>
						<tspan className="l-trabajo" y={13}>
							{t('apasionadas ')}
						</tspan>
						<tspan className="l-trabajo" x={0} y={29}>
							{t('y comprometidas,')}
						</tspan>
						<tspan y={29} xmlSpace="preserve">
							{t('que ')}
						</tspan>
						<tspan className="l-trabajo" y={29}>
							{t('compartan y reflejen')}
						</tspan>
						<tspan className="l-trabajo" x={0} y={45}>
							{t('nuestros valores, ')}
						</tspan>
						<tspan y={45} xmlSpace="preserve">
							{t(' alineados con')}
						</tspan>
						<tspan className="l-trabajo" y={45}>
							{t(' la')}
						</tspan>
						<tspan className="m-trabajo" y={45}>
							{t('Filosofia ser')}
						</tspan>
						<tspan className="l-trabajo" x={0} y={61}>
							{t('(Servicio, Educaci\xF3n y Relacionamiento)')}
						</tspan>
						<tspan y={61} xmlSpace="preserve">
							{t(' y est\xE9n ')}
						</tspan>
						<tspan x={0} y={77}>
							{t(
								'dispuestos a asumir retos diarios y llevar la '
							)}
						</tspan>
						<tspan x={0} y={93}>
							{t('Organizaci\xF3n a otros niveles. ')}
						</tspan>
					</text>
					<text
						className="j-trabajo"
						transform="translate(73 864.21)">
						<tspan x={0} y={13}>
							{t(
								'Si est\xE1s interesado en formar parte del Grupo '
							)}
						</tspan>
						<tspan x={0} y={29}>
							{t(
								'Amarey, te invitamos a enviar tu hoja de vida a '
							)}
						</tspan>
						<a href="mailto:atracciondetalento@grupoamarey.com">
							<tspan className="n-trabajo" x={0} y={45}>
								{t('atracciondetalento@grupoamarey.com ')}
							</tspan>
						</a>
						<tspan y={45}>{t(',')}</tspan>
						<tspan x={0} y={61}>
							{t('indicando la ciudad donde vives.')}
						</tspan>
					</text>
					<text
						className="o-trabajo"
						transform="translate(245 958.21)">
						<tspan x={-153.018} y={18}>
							{t('¡Esperamos conocerte pronto!')}
						</tspan>
					</text>
					<g transform="translate(314 740.21)">
						<text className="p-trabajo">
							<tspan x={0} y={13}>
								{t('Filosofia ser')}
							</tspan>
						</text>
					</g>
				</svg>
			)}
		</div>
	)
}

export default TrabajeNosotros
