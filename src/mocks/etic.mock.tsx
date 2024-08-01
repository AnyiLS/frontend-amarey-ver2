import { useLanguage as language } from 'context/language'
import React from 'react'

import { useTranslation } from 'react-i18next'

interface DataEtic {
	uno: () => JSX.Element
	[index: string]: () => JSX.Element
}

const TranslatedText = ({ textKey }: { textKey: string }) => {
	const { t } = useTranslation()
	return <>{t(textKey)}</>
}

export const dataEtic: DataEtic = {
	uno: (): JSX.Element => {
		return (
			<React.Fragment>
				<defs>
					<style>
						{
							'.a-text-1,.b-text-1{fill:#fff;}.a-text-1{font-size:40px;font-family:Silka-Bold, Silka;font-weight:700;}.b-text-1{font-size:24px;font-family:Silka-Regular, Silka;}'
						}
					</style>
				</defs>
				<g style={{ transform: 'translate(560px, 320px)' }}>
					<text className="a-text-1" transform="translate(70)">
						<tspan x={136.68} y={38}>
							<TranslatedText textKey="Conflicto de interés" />
						</tspan>
					</text>
					<text className="b-text-1" transform="translate(0 93.422)">
						<tspan x={0} y={23}>
							<TranslatedText textKey="La situación en virtud de la cual una persona, por su actividad o " />
						</tspan>
						<tspan x={0} y={51}>
							<TranslatedText textKey="cargo, o por la información que posee, se enfrenta a distintas " />
						</tspan>
						<tspan x={0} y={79}>
							<TranslatedText textKey="alternativas de conducta en relación con intereses incompatibles, " />
						</tspan>
						<tspan x={0} y={107}>
							<TranslatedText textKey="siendo incorrecto privilegiar alguno de ellos, pues se vulneraría o" />
						</tspan>
						<tspan x={0} y={135}>
							<TranslatedText textKey="debilitaría injustamente la posición del otro." />
						</tspan>
					</text>
				</g>
			</React.Fragment>
		)
	},
	dos: (): JSX.Element => {
		const { selectedLanguage } = language();
		return (
			<React.Fragment>
				<defs>
					<style>
						{
							'.a-text-1,.b-text-1{fill:#fff;}.a-text-1{font-size:40px;font-family:Silka-Bold, Silka;font-weight:700;}.b-text-1{font-size:24px;font-family:Silka-Regular, Silka;}'
						}
					</style>
				</defs>
				<g style={{ transform: 'translate(560px, 340px)' }}>
					<text className="a-text-1">
						<tspan x={selectedLanguage === 'es' ? 14.98 : -30.98} y={38}>
						<TranslatedText textKey='Incumplimiento de leyes y regulaciones' />
						</tspan>
					</text>
					<text className="b-text-1" transform={selectedLanguage === 'es' ? "translate(0 94.988)" : "translate(-60 94.988)"}>
						<tspan x={0} y={23}>
						<TranslatedText textKey='Negocios de la compañía que no se realicen dentro del marco legal ' />
						</tspan>
						<tspan x={0} y={51}>
						<TranslatedText textKey='y/o que sus colaboradores no obren dentro de este. Incumplimiento ' />
						</tspan>
						<tspan x={0} y={79}>
						<TranslatedText textKey='a lo dispuesto en el código de ética, reglamento interno de trabajo, ' />
						</tspan>
						<tspan x={0} y={107}>
						<TranslatedText textKey='políticas de contratación y pago a terceros, reglamentos, políticas ' />
						</tspan>
						<tspan x={0} y={135}>
						<TranslatedText textKey='y/o procedimientos específicos establecidos por el Grupo Amarey.' />
						</tspan>
					</text>
				</g>
			</React.Fragment>
		)
	},
	tres: (): JSX.Element => (
		<React.Fragment>
			<defs>
				<style>
					{
						'.a-text-1,.b-text-1{fill:#fff;}.a-text-1{font-size:40px;font-family:Silka-Bold, Silka;font-weight:700;}.b-text-1{font-size:24px;font-family:Silka-Regular, Silka;}'
					}
				</style>
			</defs>
			<g style={{ transform: 'translate(560px, 340px)' }}>
				<text className="a-text-1">
					<tspan x={234.42} y={38}>
					<TranslatedText textKey='Confidencialidad' />
					</tspan>
				</text>
				<text className="b-text-1" transform="translate(0 87.886)">
					<tspan x={0} y={23}>
					<TranslatedText textKey="Los empleados utilizarán la información no pública que sea de su" />
					</tspan>
					<tspan x={0} y={51}>
					<TranslatedText textKey="conocimiento, para realizar las actividades que desempeñen, de" />
					</tspan>
					<tspan x={0} y={79}>
					<TranslatedText textKey="manera confidencial y reservada, y se abstendrán en todo"/>
					</tspan>
					<tspan x={0} y={107}>
					<TranslatedText textKey='momento de obtener o recibir beneficios personales o provocar ' />
					</tspan>
					<tspan x={0} y={135}>
					<TranslatedText textKey="perjuicios a la empresa por su divulgación o utilización indebida." />
					</tspan>
				</text>
			</g>
		</React.Fragment>
	),
	cuatro: (): JSX.Element => (
		<React.Fragment>
			<defs>
				<style>
					{
						'.a-text-1,.b-text-1{fill:#fff;}.a-text-1{font-size:40px;font-family:Silka-Bold, Silka;font-weight:700;}.b-text-1{font-size:24px;font-family:Silka-Regular, Silka;}'
					}
				</style>
			</defs>
			<g style={{ transform: 'translate(560px, 380px)' }}>
				<text className="a-text-1">
					<tspan x={225.94} y={38}>
					<TranslatedText textKey='Lavado de activos' />
					</tspan>
				</text>
				<text className="b-text-1" transform="translate(0 87.886)">
					<tspan x={0} y={23}>
					<TranslatedText textKey='Son operaciones que busca dar apariencia de legalidad a recursos ' />
					</tspan>
					<tspan x={0} y={51}>
					<TranslatedText textKey='provenientes de actividades ilícitas, a través de diversas' />
					</tspan>
					<tspan x={0} y={79}>
					<TranslatedText textKey='transacciones ocultando así el origen y trayectoria de los recursos.' />
					</tspan>
				</text>
			</g>
		</React.Fragment>
	),
	cinco: (): JSX.Element => (
		<React.Fragment>
			<defs>
				<style>
					{
						'.a-text-1,.b-text-1{fill:#fff;}.a-text-1{font-size:40px;font-family:Silka-Bold, Silka;font-weight:700;}.b-text-1{font-size:24px;font-family:Silka-Regular, Silka;}'
					}
				</style>
			</defs>
			<g style={{ transform: 'translate(560px, 380px)' }}>
				<text className="a-text-1">
					<tspan x={151.68} y={38}>
					<TranslatedText textKey='Actividades inapropiadas' />
					</tspan>
				</text>
				<text className="b-text-1" transform="translate(0 87.886)">
					<tspan x={0} y={23}>
					<TranslatedText textKey='La relación entre los empleados del Grupo Amarey deberá estar' />
					</tspan>
					<tspan x={0} y={51}>
					<TranslatedText textKey='siempre basada en el debido y mutuo respeto, a fin de asegurar un' />
					</tspan>
					<tspan x={0} y={79}>
					<TranslatedText textKey='ambiente armonioso conducente al trabajo productivo.' />
					</tspan>
				</text>
			</g>
		</React.Fragment>
	),
	seis: (): JSX.Element => (
		<React.Fragment>
			<defs>
				<style>
					{
						'.a-text-1,.b-text-1{fill:#fff;}.a-text-1{font-size:40px;font-family:Silka-Bold, Silka;font-weight:700;}.b-text-1{font-size:24px;font-family:Silka-Regular, Silka;}'
					}
				</style>
			</defs>
			<g style={{ transform: 'translate(560px, 340px)' }}>
				<text className="a-text-1">
					<tspan x={49.08} y={38}>
					<TranslatedText textKey='Prácticas comerciales inadecuadas' />
					</tspan>
				</text>
				<text className="b-text-1" transform="translate(0 87.886)">
					<tspan x={0} y={23}>
					<TranslatedText textKey='En la relación con los clientes de Grupo Amarey, los empleados de la' />
					</tspan>
					<tspan x={0} y={51}>
					<TranslatedText textKey='organización siempre deberán actuar con objetividad,' />
					</tspan>
					<tspan x={0} y={79}>
					<TranslatedText textKey='imparcialidad, equidad, excelencia y de acuerdo con los objetivos' />
					</tspan>
					<tspan x={0} y={107}>
					<TranslatedText textKey='de imagen, crecimiento y rentabilidad de la empresa.' />
					</tspan>
				</text>
			</g>
		</React.Fragment>
	),
	siete: (): JSX.Element => (
		<React.Fragment>
			<defs>
				<style>
					{
						'.a-text-1,.b-text-1{fill:#fff;}.a-text-1{font-size:40px;font-family:Silka-Bold, Silka;font-weight:700;}.b-text-1{font-size:24px;font-family:Silka-Regular, Silka;}'
					}
				</style>
			</defs>
			<g style={{ transform: 'translate(560px, 340px)' }}>
				<text className="a-text-1">
					<tspan x={197.12} y={38}>
					<TranslatedText textKey='Dádivas o prebendas' />
					</tspan>
				</text>
				<text className="b-text-1" transform="translate(0 87.886)">
					<tspan x={0} y={23}>
					<TranslatedText textKey="Son todas aquellas ventajas, artículos o incentivos en dinero o" />
					</tspan>
					<tspan x={0} y={51}>
					<TranslatedText textKey='especie que se entregan a terceros (cualquier relacionado con ' />
					</tspan>
					<tspan x={0} y={79}>
					<TranslatedText textKey="compra, distribución, comercialización, prescripción y dispensación" />
					</tspan>
					<tspan x={0} y={107}>
					<TranslatedText textKey="de fármacos, dispositivos médicos o insumos de salud), con el" />
					</tspan>
					<tspan x={0} y={135}>
					<TranslatedText textKey='propósito de obtener beneficios comerciales que no se ajustan a' />
					</tspan>
					<tspan x={0} y={163}>
					<TranslatedText textKey='los principios de la promoción ética, de la competencia leal y del' />
					</tspan>
					<tspan x={0} y={191}>
					<TranslatedText textKey='respeto por los principios, la moral y el buen actuar.' />
					</tspan>
				</text>
			</g>
		</React.Fragment>
	),
}
