import useGeneral from 'hooks/general.hook'
import React from 'react'
import Detalle from './Detalle'
import { useTranslation } from 'react-i18next'

const Detalle1mobil = () => {
  const {width} = useGeneral()
  const { t } = useTranslation()

	return (
		<div>
			{
				width < 769 ? (
					<svg viewBox="5 100 414 1296">
				<defs>
					<style>
						{
							'.a-products-desktop,.e-products-desktop{fill:none;}.b-products-desktop{clip-path:url(#a-products-desktop);}.c-products-desktop{fill:#e7002a;stroke:#e40032;}.d-products-desktop,.f-products-desktop,.h-products-desktop,.i-products-desktop{fill:#001f5f;}.d-products-desktop,.e-products-desktop{stroke:#001f5f;}.g-products-desktop{fill:url(#b-products-desktop);}.h-products-desktop{font-size:22px;font-family:Silka-Bold, Silka;}.h-products-desktop,.i-products-desktop{font-weight:700;}.i-products-desktop{font-size:18px;font-family:Kiona-Bold, Kiona;}.j-products-desktop,.k-products-desktop{fill:#182856;}.j-products-desktop,.k-products-desktop,.l-products-desktop{font-size:14px;}.j-products-desktop{font-family:Silka-Regular, Silka;}.k-products-desktop,.l-products-desktop{font-family:Silka-SemiBold, Silka;font-weight:600;}.l-products-desktop{fill:#e40032;}'
						}
					</style>
					<clipPath id="a-products-desktop">
						<rect
							className="a-products-desktop"
							width={423}
							height={1423}
						/>
					</clipPath>
					<pattern
						id="b-products-desktop"
						width={1}
						height={1}
						viewBox="29.685 -4.719 230.726 161.46">
						<image
							preserveAspectRatio="xMidYMid slice"
							width={296.814}
							height={222.694}
							xlinkHref="/images/noticias-a.png"
						/>
					</pattern>
				</defs>
				<g className="b-products-desktop">
					<path
						className="c-products-desktop"
						d="M600.14,53.484v-.66h35.89v.024h36.4c17.543,0,33.239-15.725,39.988-40.061l.013-.047L715.965,0h.475l-3.615,13.04c-.127.459-.258.913-.392,1.366-3.37,11.427-8.793,21.106-15.729,28.058-7.211,7.226-15.6,11.044-24.272,11.044H612.51v-.024Z"
						transform="translate(-294.64 77.162)"
					/>
					<path
						className="d-products-desktop"
						d="M0,52.538v-.648H192.4v.023H261.37c33.235,0,62.972-15.446,75.758-39.352l.024-.046L343.843,0h.9l-6.849,12.809q-.36.677-.742,1.342c-6.385,11.225-16.658,20.733-29.8,27.561A100.047,100.047,0,0,1,261.37,52.561H147.843v-.024Z"
						transform="translate(582.152 78.176) rotate(90)"
					/>
					<path
						className="e-products-desktop"
						d="M119.027.016V.464H82.3V.448H45.039A44.224,44.224,0,0,0,4.114,27.605l-.013.032L.486,36.273H0l3.7-8.84c.13-.311.264-.619.4-.926.438-.984.91-1.949,1.447-2.953A44.813,44.813,0,0,1,45.039,0h61.328V.016Z"
						transform="translate(29.123 1301.299) rotate(90)"
					/>
					<path
						className="f-products-desktop"
						d="M0,0V46.877H75.485c15.666,0,29.934-18.183,37.424-46.877Z"
						transform="translate(260.746 100.39)"
					/>
					<path
						className="f-products-desktop"
						d="M0,0V46.877H75.485c15.666,0,29.934-18.183,37.424-46.877Z"
						transform="translate(419.5 1400.267) rotate(180)"
					/>
				</g>
				<path
					className="f-products-desktop"
					d="M0,0V210.934H246.424A15.378,15.378,0,0,0,261.293,198.2L300,0Z"
					transform="translate(5.5 92)"
				/>
				<path
					className="g-products-desktop"
					d="M0,0V207.707H244.056A15.142,15.142,0,0,0,258.7,195.171L296.814,0Z"
					transform="translate(5.5 92)"
				/>
				<text
					className="h-products-desktop"
					transform="translate(41.5 349)">
					<tspan x={0} y={21}>
						{t('GRUPO AMAREY EN SUS 40 ')}
					</tspan>
					<tspan x={0} y={45}>
						{t('AÑOS ESTRENA SEDES')}
					</tspan>
				</text>
				<text
					className="i-products-desktop"
					transform="translate(41.5 910)">
					<tspan x={0} y={18}>
						{t('LÍDERES EN DISTRIBUCIÓN')}
					</tspan>
				</text>
				<text
					className="j-products-desktop"
					transform="translate(41.5 494)">
					<tspan x={0} y={13}>
						{t('El Grupo Amarey, una institución emblemática en ')}
					</tspan>
					<tspan x={0} y={29}>
						{t('el ámbito de la salud en Colombia, está de ')}
					</tspan>
					<tspan x={0} y={45}>
						{t('celebración al cumplir 40 años de servicio ')}
					</tspan>
					<tspan x={0} y={61}>
						{t('dedicado a la comunidad médica del país. En ')}
					</tspan>
					<tspan x={0} y={77}>
						{t('este hito importante, nos complace anunciar la ')}
					</tspan>
					<tspan x={0} y={93}>
						{t('apertura de sus nuevas oficinas, ubicadas en ')}
					</tspan>
					<tspan x={0} y={109}>
						{t('uno de los lugares más exclusivos de Bogotá. ')}
					</tspan>
					<tspan x={0} y={125} />
					<tspan x={0} y={141}>
						{t('Como resultado de sus continuos esfuerzos y ')}
					</tspan>
					<tspan x={0} y={157}>
						{t('excelentes resultados, el Grupo Amarey marca el ')}
					</tspan>
					<tspan x={0} y={173}>
						{t('inicio de una nueva etapa en su desarrollo ')}
					</tspan>
					<tspan x={0} y={189}>
						{t('organizacional y su visión de expansión hacia el ')}
					</tspan>
					<tspan x={0} y={205}>
						{t('futuro. Por ello, la sección administrativa de la ')}
					</tspan>
					<tspan x={0} y={221}>
						{t('compañía estrena una nueva sede, que abarca ')}
					</tspan>
					<tspan x={0} y={237}>
						{t('más de 2.000 metros cuadrados en una torre ')}
					</tspan>
					<tspan x={0} y={253}>
						{t('empresarial ubicada en la calle 100 con carrera ')}
					</tspan>
					<tspan x={0} y={269}>
						{t('séptima en Bogotá. ')}
					</tspan>
					<tspan x={0} y={285} />
					<tspan x={0} y={301}>
						{t('Las nuevas instalaciones están diseñadas para ')}
					</tspan>
					<tspan x={0} y={317}>
						{t('proporcionar espacios modernos y funcionales, ')}
					</tspan>
					<tspan x={0} y={333}>
						{t('incluyendo oficinas, salas de reuniones, ')}
					</tspan>
					<tspan x={0} y={349}>
						{t('showroom, áreas sociales y espacios de ')}
					</tspan>
					<tspan x={0} y={365}>
						{t('coworking. Estas instalaciones refuerzan la ')}
					</tspan>
					<tspan x={0} y={381}>
						{t('nueva imagen del Grupo Amarey y su ')}
					</tspan>
					<tspan x={0} y={397}>
						{t('compromiso con la innovación y la excelencia. ')}
					</tspan>
				</text>
				<text
					className="j-products-desktop"
					transform="translate(41.5 952)">
					<tspan x={0} y={13}>
						{'Además de este traslado a sus nuevas oficinas '}
					</tspan>
					<tspan x={0} y={29}>
						{t('administrativas, la compañía unificó sus ')}
					</tspan>
					<tspan x={0} y={45}>
						{t('bodegas para brindar un servicio más eficiente y ')}
					</tspan>
					<tspan x={0} y={61}>
						{t('oportuno a sus clientes, con la apertura del ')}
					</tspan>
					<tspan x={0} y={77}>
						{t('Centro de Distribución Logística (CEDI), ubicado ')}
					</tspan>
					<tspan x={0} y={93}>
						{t('estratégicamente en la carrera 68 con calle 17, ')}
					</tspan>
					<tspan x={0} y={109}>
						{t('en la zona industrial de Montevideo en Bogotá. ')}
					</tspan>
					<tspan x={0} y={125} />
					<tspan x={0} y={141}>
						{t('El CEDI está dotado con la más alta tecnología y ')}
					</tspan>
					<tspan x={0} y={157}>
						{t('los más altos estándares operativos enfocados ')}
					</tspan>
					<tspan x={0} y={173}>
						{t('en optimizar los procesos de valor tanto para los ')}
					</tspan>
					<tspan x={0} y={189}>
						{t('clientes como para los pacientes. Este centro ')}
					</tspan>
					<tspan x={0} y={205}>
						{t('permite cumplir de manera más efectiva las ')}
					</tspan>
					<tspan x={0} y={221}>
						{t('promesas de entrega y mejorar la eficiencia en ')}
					</tspan>
					<tspan x={0} y={237}>
						{t('toda la cadena operativa. ')}
					</tspan>
					<tspan x={0} y={253} />
					<tspan x={0} y={269}>
						{t('Con el lanzamiento del CEDI, se reafirma una vez ')}
					</tspan>
					<tspan x={0} y={285}>
						{t('más el compromiso de liderar la logística en el ')}
					</tspan>
					<tspan x={0} y={301}>
						{t('sector, manteniendo un servicio operativo las 24 ')}
					</tspan>
					<tspan x={0} y={317}>
						{t('horas del día, los 7 días de la semana, los 365 ')}
					</tspan>
					<tspan x={0} y={333}>
						{t('días del año. Esto permitirá seguir sirviendo a ')}
					</tspan>
					<tspan x={0} y={349}>
						{t('instituciones y pacientes de manera ')}
					</tspan>
					<tspan x={0} y={365}>
						{t('ininterrumpida, garantizando la prontitud y ')}
					</tspan>
					<tspan x={0} y={381}>
						{t('calidad en cada entrega. ')}
					</tspan>
				</text>
				<text
					className="k-products-desktop"
					transform="translate(41.5 406)">
					<tspan x={0} y={13}>
						{t('Gracias a su actual y exitoso crecimiento, ')}
					</tspan>
					<tspan x={0} y={29}>
						{t('unificó sus bodegas en un gran centro de ')}
					</tspan>
					<tspan x={0} y={45}>
						{t('distribución logística, CEDI y trasladó su sede ')}
					</tspan>
					<tspan x={0} y={61}>
						{t('administrativa a una exclusiva torre empresarial ')}
					</tspan>
				</text>
				<text
					className="l-products-desktop"
					transform="translate(41.5 328)">
					<tspan x={0} y={13}>
						{'14-05-2024'}
					</tspan>
				</text>
			</svg>
				) : <Detalle/>
			}
		</div>
	)
}

export default Detalle1mobil
