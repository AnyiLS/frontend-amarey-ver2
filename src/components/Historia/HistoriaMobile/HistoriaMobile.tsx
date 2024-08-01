import React from 'react'
import './HistoriaMobile.css'
import Component1984 from './components/1984'
import Component1999 from './components/1999'
import Component2000 from './components/2000'
import Component2007 from './components/2007'
import Component2009 from './components/2009'
import Component20111 from './components/20111'
import Component20112 from './components/20112'
import Component20121 from './components/20121'
import Component20122 from './components/20122'
import Component20141 from './components/20141'
import Component20142 from './components/20142'
import Component2016 from './components/2016'
import Component2017 from './components/2017'
import Component20231 from './components/20231'
import Component20232 from './components/20232'
import Component20233 from './components/20233'
import Component20234 from './components/20234'
import { useTranslation } from 'react-i18next'
import { useLanguage } from 'context/language'
import { TFunction } from 'i18next'

export interface TimeLine {
	onNext?: () => void
	onPrev?: () => void
	t: TFunction<"translation", undefined>
	selectedLanguage: 'es' | 'en'
}

const HistoriaMobile: React.FC = (): JSX.Element => {
	const [steps, setSteps] = React.useState<number>(0)

	const handleChangeStep = () => setSteps(steps + 1 > 16 ? 0 : steps + 1)
	const handleLessStep = () => setSteps(steps - 1 < 0 ? 16 : steps - 1)

	const { t } = useTranslation()
	const { selectedLanguage } = useLanguage()

	return (
		<React.Fragment>
			<svg viewBox="0 0 414 729" preserveAspectRatio="none">
				<defs>
					<filter
						id="a-history-mobile"
						x={0}
						y={0}
						width={432}
						height={405.298}
						filterUnits="userSpaceOnUse">
						<feOffset dy={3} />
						<feGaussianBlur stdDeviation={3} result="b" />
						<feFlood floodOpacity={0.302} />
						<feComposite operator="in" in2="b" />
						<feComposite in="SourceGraphic" />
					</filter>
					<pattern
						id="c-history-mobile"
						width={1}
						height={1}
						patternTransform="matrix(-1, 0, 0, 1, 823.933, 0)"
						viewBox="3.983 33.215 404 377.173">
						<image
							preserveAspectRatio="xMidYMid slice"
							width={411.966}
							height={617.95}
							xlinkHref="/images/mobile/history/reference.webp"
						/>
					</pattern>
				</defs>
				<g>
					<text
						className="a-history-mobile"
						transform="translate(36 674)">
						<tspan x={0} y={20}>
							{t('“un compromiso inquebrantable ')}
						</tspan>
						<tspan x={0} y={44} xmlSpace="preserve">
							{t('con la salud y la vida”.  ')}
						</tspan>
					</text>
					<text
						className="b-history-mobile"
						transform="translate(36 487)">
						<tspan x={0} y={13}>
							{t('Grupo Amarey es una compañía con más de 40 ')}
						</tspan>
						<tspan x={0} y={29}>
							{t('años de trayectoria, comprometida con ')}
						</tspan>
						<tspan x={0} y={45}>
							{t('acercar el conocimiento, la ciencia y la ')}
						</tspan>
						<tspan x={0} y={61}>
							{t('tecnología al sector de la salud en Colombia, ')}
						</tspan>
						<tspan x={0} y={77} xmlSpace="preserve">
							{t('Panamá y Costa Rica.  ')}
						</tspan>
						<tspan x={0} y={93} />
						<tspan x={0} y={109}>
							{t('Con 6 sedes en Colombia y operación ')}
						</tspan>
						<tspan x={0} y={125}>
							{t('internacional en Panamá y Costa Rica, el grupo ')}
						</tspan>
						<tspan x={0} y={141}>
							{t('empresarial cuenta con un equipo de ')}
						</tspan>
						<tspan x={0} y={157}>
							{t('colaboradores que trabajan bajo una única ')}
						</tspan>
						<tspan x={0} y={173}>
							{t('premisa, ')}
						</tspan>
					</text>
					<text
						className="c-history-mobile"
						transform="translate(36 424)">
						<tspan x={0} y={32}>
							{t('NUESTRA HISTORIA ')}
						</tspan>
					</text>
					<g
						className="f-history-mobile"
						transform="matrix(1, 0, 0, 1, -9, -6)">
						<path
							className="d-history-mobile"
							d="M413.784,28.1,389.345,220.92l-14.033,110.7c-7.762,33.695-26.081,55.674-46.4,55.674H0V0H391.15C405,0,415.667,13.237,413.784,28.1"
							transform="translate(9 6)"
						/>
					</g>
					<path
						className="e-history-mobile"
						d="M411.751,27.9,387.432,219.387,373.468,329.323c-7.724,33.461-25.953,55.288-46.175,55.288H0V0H389.228c13.782,0,24.4,13.145,22.523,27.9"
					/>
				</g>
			</svg>
			{steps === 0 ? (
				<Component1984 onNext={handleChangeStep} t={t}
					selectedLanguage={selectedLanguage} />
			) : steps === 1 ? (
				<Component1999
					onNext={handleChangeStep}
					onPrev={handleLessStep}
					t={t}
					selectedLanguage={selectedLanguage}
				/>
			) : steps === 2 ? (
				<Component2000
					onNext={handleChangeStep}
					onPrev={handleLessStep}
					t={t}
					selectedLanguage={selectedLanguage}
				/>
			) : steps === 3 ? (
				<Component2007
					onNext={handleChangeStep}
					onPrev={handleLessStep}
					t={t}
					selectedLanguage={selectedLanguage}
				/>
			) : steps === 4 ? (
				<Component2009
					onNext={handleChangeStep}
					onPrev={handleLessStep}
					t={t}
					selectedLanguage={selectedLanguage}
				/>
			) : steps === 5 ? (
				<Component20111
					onNext={handleChangeStep}
					onPrev={handleLessStep}
					t={t}
					selectedLanguage={selectedLanguage}
				/>
			) : steps === 6 ? (
				<Component20112
					onNext={handleChangeStep}
					onPrev={handleLessStep}
					t={t}
					selectedLanguage={selectedLanguage}
				/>
			) : steps === 7 ? (
				<Component20121
					onNext={handleChangeStep}
					onPrev={handleLessStep}
					t={t}
					selectedLanguage={selectedLanguage}
				/>
			) : steps === 8 ? (
				<Component20122
					onNext={handleChangeStep}
					onPrev={handleLessStep}
					t={t}
					selectedLanguage={selectedLanguage}
				/>
			) : steps === 9 ? (
				<Component20141
					onNext={handleChangeStep}
					onPrev={handleLessStep}
					t={t}
					selectedLanguage={selectedLanguage}
				/>
			) : steps === 10 ? (
				<Component20142
					onNext={handleChangeStep}
					onPrev={handleLessStep}
					t={t}
					selectedLanguage={selectedLanguage}
				/>
			) : steps === 11 ? (
				<Component2016
					onNext={handleChangeStep}
					onPrev={handleLessStep}
					t={t}
					selectedLanguage={selectedLanguage}
				/>
			) : steps === 12 ? (
				<Component2017
					onNext={handleChangeStep}
					onPrev={handleLessStep}
					t={t}
					selectedLanguage={selectedLanguage}
				/>
			) : steps === 13 ? (
				<Component20231
					onNext={handleChangeStep}
					onPrev={handleLessStep}
					t={t}
					selectedLanguage={selectedLanguage}
				/>
			) : steps === 14 ? (
				<Component20232
					onNext={handleChangeStep}
					onPrev={handleLessStep}
					t={t}
					selectedLanguage={selectedLanguage}
				/>
			) : steps === 15 ? (
				<Component20233
					onNext={handleChangeStep}
					onPrev={handleLessStep}
					t={t}
					selectedLanguage={selectedLanguage}
				/>
			) : steps === 16 ? (
				<Component20234
					onNext={handleChangeStep}
					onPrev={handleLessStep}
					t={t}
					selectedLanguage={selectedLanguage}
				/>
			) : null}
		</React.Fragment>
	)
}

export default HistoriaMobile
