import moment from 'moment'
import React from 'react'
import { useTranslation } from 'react-i18next'

interface JanuaryProps {
	next: () => void
	today: number
	month: number
	prev: () => void
	onChangeDay: (day: number) => void
	onChangeMonth: () => void
	onLessMonth: () => void
}

const January: React.FC<JanuaryProps> = ({
	next,
	prev,
	onChangeMonth,
	onLessMonth,
}): JSX.Element => {
	/** Variables */
	const day = moment().format('DD')
	const month = moment().format('MM')

	const { t } = useTranslation()

	React.useEffect(() => {
		if (month === '01') {
			const element = document.getElementById(`day-${day}`)

			if (element) element.style.display = 'block'
		}
	}, [day, month])

	return (
		<React.Fragment>
			<svg viewBox="-150 0 1920 778.106">
				<defs>
					<style>
						{
							'.a-january,.n-january{fill:none;}.b-january,.l-january,.o-january,.p-january{fill:#001f5f;}.c-january{fill:#c5dbf7;}.d-january,.j-january,.m-january{fill:#182856;}.d-january,.l-january{font-size:24px;}.d-january{font-family:Silka-Regular, Silka;}.e-january{fill:#e40032;}.f-january{fill:#c7c7cc;}.g-january,.h-january{fill:#fff;}.h-january,.m-january{font-size:42px;}.h-january,.j-january,.m-january{font-family:Silka-SemiBold, Silka;font-weight:600;}.i-january{clip-path:url(#e-january);}.j-january{font-size:32px;}.k-january{clip-path:url(#f-january);}.l-january{font-family:Silka-Medium, Silka;font-weight:500;}.n-january{stroke:#e40032;stroke-width:3px;}.o-january{font-size:55px;}.o-january,.p-january{font-family:Kiona-Bold, Kiona;font-weight:700;}.p-january{font-size:28px;}.q-january{clip-path:url(#k-january);}.r-january{filter:url(#i-january);}.s-january{filter:url(#g-january);}.t-january{filter:url(#c-january);}.u-january{filter:url(#a-january);}'
						}
					</style>
					<filter
						id="a-january"
						x={1220.857}
						y={858.904}
						width={145.48}
						height={78.473}
						filterUnits="userSpaceOnUse">
						<feOffset dy={3} />
						<feGaussianBlur stdDeviation={3} result="b" />
						<feFlood floodOpacity={0.6} />
						<feComposite operator="in" in2="b" />
						<feComposite in="SourceGraphic" />
					</filter>
					<filter
						id="c-january"
						x={1004.536}
						y={858.904}
						width={145.48}
						height={78.473}
						filterUnits="userSpaceOnUse">
						<feOffset dy={3} />
						<feGaussianBlur stdDeviation={3} result="d" />
						<feFlood floodOpacity={0.6} />
						<feComposite operator="in" in2="d" />
						<feComposite in="SourceGraphic" />
					</filter>
					<clipPath id="e-january">
						<rect className="a-january" width={567} height={40} />
					</clipPath>
					<clipPath id="f-january">
						<rect className="a-january" width={567} height={230} />
					</clipPath>
					<filter
						id="g-january"
						x={819}
						y={154.356}
						width={732.874}
						height={677.978}
						filterUnits="userSpaceOnUse">
						<feOffset dy={3} />
						<feGaussianBlur stdDeviation={3} result="h" />
						<feFlood floodOpacity={0.4} />
						<feComposite operator="in" in2="h" />
						<feComposite in="SourceGraphic" />
					</filter>
					<filter
						id="i-january"
						x={898.57}
						y={657.957}
						width={600.13}
						height={186.008}
						filterUnits="userSpaceOnUse">
						<feOffset dy={3} />
						<feGaussianBlur stdDeviation={3} result="j" />
						<feFlood floodOpacity={0.4} />
						<feComposite operator="in" in2="j" />
						<feComposite in="SourceGraphic" />
					</filter>
					<clipPath id="k-january">
						<rect
							className="a-january"
							width={492.426}
							height={137.787}
						/>
					</clipPath>
				</defs>
				<path
					className="b-january"
					d="M1136.187,0H50.372C18.5,0-5.357,24.843,1.043,51.375L39.612,842.591l5.914,121.316c4.8,19.905,25.417,34.2,49.329,34.2H1136.187Z"
					style={{
						transform:
							'scaleY(0.78) scaleX(1) translate(640px, 0px)',
					}}
				/>
				<g transform="translate(0 -150)">
					<g transform="translate(-140 -79.981)">
						<circle
							className="c-january"
							cx={17.5}
							cy={17.5}
							r={17.5}
							transform="translate(416 867)"
						/>
						<text
							className="d-january"
							transform="translate(458 893)">
							<tspan x={0} y={0}>
								{t('Fecha evento')}
							</tspan>
						</text>
					</g>
					<g transform="translate(-140 -79.981)">
						<circle
							className="e-january"
							cx={17.5}
							cy={17.5}
							r={17.5}
							transform="translate(140 867)"
						/>
						<text
							className="d-january"
							transform="translate(182 893)">
							<tspan x={0} y={0}>
								{t('Fecha de hoy')}
							</tspan>
						</text>
					</g>
					<g transform="translate(-140 -133.894)">
						<g className="i-january" transform="translate(140 557)">
							<g transform="translate(-120 -557)">
								<text
									className="j-january"
									transform="translate(140 557)">
									<tspan x={-21.712} y={30}>
										{t('Do')}
									</tspan>
								</text>
							</g>
							<g transform="translate(-34 -557)">
								<text
									className="j-january"
									transform="translate(140 557)">
									<tspan x={-17.92} y={30}>
										{t('Lu')}
									</tspan>
								</text>
							</g>
							<g transform="translate(52 -557)">
								<text
									className="j-january"
									transform="translate(140 557)">
									<tspan x={-24.576} y={30}>
										{t('Ma')}
									</tspan>
								</text>
							</g>
							<g transform="translate(138 -557)">
								<text
									className="j-january"
									transform="translate(140 557)">
									<tspan x={-18.528} y={30}>
										{t('Mi')}
									</tspan>
								</text>
							</g>
							<g transform="translate(224 -557)">
								<text
									className="j-january"
									transform="translate(140 557)">
									<tspan x={-19.072} y={30}>
										{t('Ju')}
									</tspan>
								</text>
							</g>
							<g transform="translate(310 -557)">
								<text
									className="j-january"
									transform="translate(140 557)">
									<tspan x={-15.264} y={30}>
										{t('Vi')}
									</tspan>
								</text>
							</g>
							<g transform="translate(396 -557)">
								<text
									className="j-january"
									transform="translate(140 557)">
									<tspan x={-19.888} y={30}>
										{t('Sa')}
									</tspan>
								</text>
							</g>
						</g>
						<g className="k-january" transform="translate(140 610)">
							<g transform="translate(-120 -557)">
								<circle
									className="b-item-1813"
									cx={22}
									cy={22}
									r={22}
									transform="translate(118 551)"
									style={{ fill: 'red', display: 'none' }}
								/>
								<text
									className="l-january"
									transform="translate(140 557)">
									<tspan x={-14.508} y={23}>
										{'29'}
									</tspan>
								</text>
							</g>
							<g transform="translate(-34 -557)">
								<circle
									className="b-item-1813"
									cx={22}
									cy={22}
									r={22}
									transform="translate(118 551)"
									style={{ fill: 'red', display: 'none' }}
								/>
								<text
									className="l-january"
									transform="translate(140 557)">
									<tspan x={-14.7} y={23}>
										{'30'}
									</tspan>
								</text>
							</g>
							<g transform="translate(52 -557)">
								<circle
									className="b-item-1813"
									cx={22}
									cy={22}
									r={22}
									transform="translate(118 551)"
									style={{ fill: 'red', display: 'none' }}
								/>
								<text
									className="l-january"
									transform="translate(140 557)">
									<tspan x={-12.756} y={23}>
										{'31'}
									</tspan>
								</text>
							</g>
							<g transform="translate(138 -557)">
								<circle
									className="b-item-1813"
									cx={22}
									cy={22}
									r={22}
									transform="translate(118 551)"
									id="day-01"
									style={{ fill: 'red', display: 'none' }}
								/>
								<text
									className="l-january"
									transform="translate(140 557)">
									<tspan x={-12.324} y={23}>
										{'01'}
									</tspan>
								</text>
							</g>
							<g transform="translate(224 -557)">
								<circle
									className="b-item-1813"
									cx={22}
									cy={22}
									r={22}
									transform="translate(118 551)"
									id="day-02"
									style={{ fill: 'red', display: 'none' }}
								/>
								<text
									className="l-january"
									transform="translate(140 557)">
									<tspan x={-14.448} y={23}>
										{'02'}
									</tspan>
								</text>
							</g>
							<g transform="translate(310 -557)">
								<circle
									className="b-item-1813"
									cx={22}
									cy={22}
									r={22}
									transform="translate(118 551)"
									id="day-03"
									style={{ fill: 'red', display: 'none' }}
								/>
								<text
									className="l-january"
									transform="translate(140 557)">
									<tspan x={-14.7} y={23}>
										{'03'}
									</tspan>
								</text>
							</g>
							<g transform="translate(396 -557)">
								<circle
									className="b-item-1813"
									cx={22}
									cy={22}
									r={22}
									transform="translate(118 551)"
									id="day-04"
									style={{ fill: 'red', display: 'none' }}
								/>
								<text
									className="l-january"
									transform="translate(140 557)">
									<tspan x={-14.844} y={23}>
										{'04'}
									</tspan>
								</text>
							</g>
							<g transform="translate(-120 -509)">
								<circle
									className="b-item-1813"
									cx={22}
									cy={22}
									r={22}
									transform="translate(118 551)"
									id="day-05"
									style={{ fill: 'red', display: 'none' }}
								/>
								<text
									className="l-january"
									transform="translate(140 557)">
									<tspan x={-14.64} y={23}>
										{'05'}
									</tspan>
								</text>
							</g>
							<g transform="translate(-34 -509)">
								<circle
									className="b-item-1813"
									cx={22}
									cy={22}
									r={22}
									transform="translate(118 551)"
									id="day-06"
									style={{ fill: 'red', display: 'none' }}
								/>
								<text
									className="l-january"
									transform="translate(140 557)">
									<tspan x={-14.892} y={23}>
										{'06'}
									</tspan>
								</text>
							</g>
							<g transform="translate(52 -509)">
								<circle
									className="b-item-1813"
									cx={22}
									cy={22}
									r={22}
									transform="translate(118 551)"
									id="day-07"
									style={{ fill: 'red', display: 'none' }}
								/>
								<text
									className="l-january"
									transform="translate(140 557)">
									<tspan x={-14.1} y={23}>
										{'07'}
									</tspan>
								</text>
							</g>
							<g transform="translate(138 -509)">
								<circle
									className="b-item-1813"
									cx={22}
									cy={22}
									r={22}
									transform="translate(118 551)"
									id="day-08"
									style={{ fill: 'red', display: 'none' }}
								/>
								<text
									className="l-january"
									transform="translate(140 557)">
									<tspan x={-14.892} y={23}>
										{'08'}
									</tspan>
								</text>
							</g>
							<g transform="translate(224 -509)">
								<circle
									className="b-item-1813"
									cx={22}
									cy={22}
									r={22}
									transform="translate(118 551)"
									id="day-09"
									style={{ fill: 'red', display: 'none' }}
								/>
								<text
									className="l-january"
									transform="translate(140 557)">
									<tspan x={-14.892} y={23}>
										{'09'}
									</tspan>
								</text>
							</g>
							<g transform="translate(310 -509)">
								<circle
									className="b-item-1813"
									cx={22}
									cy={22}
									r={22}
									transform="translate(118 551)"
									id="day-10"
									style={{ fill: 'red', display: 'none' }}
								/>
								<text
									className="l-january"
									transform="translate(140 557)">
									<tspan x={-12.888} y={23}>
										{'10'}
									</tspan>
								</text>
							</g>
							<g transform="translate(396 -509)">
								<circle
									className="b-item-1813"
									cx={22}
									cy={22}
									r={22}
									transform="translate(118 551)"
									id="day-11"
									style={{ fill: 'red', display: 'none' }}
								/>
								<text
									className="l-january"
									transform="translate(140 557)">
									<tspan x={-10.944} y={23}>
										{'11'}
									</tspan>
								</text>
							</g>
							<g transform="translate(-120 -461)">
								<circle
									className="b-item-1813"
									cx={22}
									cy={22}
									r={22}
									transform="translate(118 551)"
									id="day-12"
									style={{ fill: 'red', display: 'none' }}
								/>
								<text
									className="l-january"
									transform="translate(140 557)">
									<tspan x={-12.504} y={23}>
										{'12'}
									</tspan>
								</text>
							</g>
							<g transform="translate(-34 -461)">
								<circle
									className="b-item-1813"
									cx={22}
									cy={22}
									r={22}
									transform="translate(118 551)"
									id="day-13"
									style={{ fill: 'red', display: 'none' }}
								/>
								<text
									className="l-january"
									transform="translate(140 557)">
									<tspan x={-12.072} y={23}>
										{'13'}
									</tspan>
								</text>
							</g>
							<g transform="translate(52 -461)">
								<circle
									className="b-item-1813"
									cx={22}
									cy={22}
									r={22}
									transform="translate(118 551)"
									id="day-14"
									style={{ fill: 'red', display: 'none' }}
								/>
								<text
									className="l-january"
									transform="translate(140 557)">
									<tspan x={-12.528} y={23}>
										{'14'}
									</tspan>
								</text>
							</g>
							<g transform="translate(138 -461)">
								<circle
									className="b-item-1813"
									cx={22}
									cy={22}
									r={22}
									transform="translate(118 551)"
									id="day-15"
									style={{ fill: 'red', display: 'none' }}
								/>
								<text
									className="l-january"
									transform="translate(140 557)">
									<tspan x={-12.696} y={23}>
										{'15'}
									</tspan>
								</text>
							</g>
							<g transform="translate(224 -461)">
								<circle
									className="b-item-1813"
									cx={22}
									cy={22}
									r={22}
									transform="translate(118 551)"
									id="day-16"
									style={{ fill: 'red', display: 'none' }}
								/>
								<text
									className="l-january"
									transform="translate(140 557)">
									<tspan x={-12.948} y={23}>
										{'16'}
									</tspan>
								</text>
							</g>
							<g transform="translate(310 -461)">
								<circle
									className="b-item-1813"
									cx={22}
									cy={22}
									r={22}
									transform="translate(118 551)"
									id="day-17"
									style={{ fill: 'red', display: 'none' }}
								/>
								<text
									className="l-january"
									transform="translate(140 557)">
									<tspan x={-12.156} y={23}>
										{'17'}
									</tspan>
								</text>
							</g>
							<g transform="translate(396 -461)">
								<circle
									className="b-item-1813"
									cx={22}
									cy={22}
									r={22}
									transform="translate(118 551)"
									id="day-18"
									style={{ fill: 'red', display: 'none' }}
								/>
								<text
									className="l-january"
									transform="translate(140 557)">
									<tspan x={-12.948} y={23}>
										{'18'}
									</tspan>
								</text>
							</g>
							<g transform="translate(-120 -413)">
								<circle
									className="b-item-1813"
									cx={22}
									cy={22}
									r={22}
									transform="translate(118 551)"
									id="day-19"
									style={{ fill: 'red', display: 'none' }}
								/>
								<text
									className="l-january"
									transform="translate(140 557)">
									<tspan x={-12.456} y={23}>
										{'19'}
									</tspan>
								</text>
							</g>
							<g transform="translate(-34 -413)">
								<circle
									className="b-item-1813"
									cx={22}
									cy={22}
									r={22}
									transform="translate(118 551)"
									id="day-20"
									style={{ fill: 'red', display: 'none' }}
								/>
								<text
									className="l-january"
									transform="translate(140 557)">
									<tspan x={-14.448} y={23}>
										{'20'}
									</tspan>
								</text>
							</g>
							<g transform="translate(52 -413)">
								<circle
									className="b-item-1813"
									cx={22}
									cy={22}
									r={22}
									transform="translate(118 551)"
									id="day-21"
									style={{ fill: 'red', display: 'none' }}
								/>
								<text
									className="l-january"
									transform="translate(140 557)">
									<tspan x={-12.504} y={23}>
										{'21'}
									</tspan>
								</text>
							</g>
							<g transform="translate(138 -413)">
								<circle
									className="b-item-1813"
									cx={22}
									cy={22}
									r={22}
									transform="translate(118 551)"
									id="day-22"
									style={{ fill: 'red', display: 'none' }}
								/>
								<text
									className="l-january"
									transform="translate(140 557)">
									<tspan x={-14.064} y={23}>
										{'22'}
									</tspan>
								</text>
							</g>
							<g transform="translate(224 -413)">
								<circle
									className="b-item-1813"
									cx={22}
									cy={22}
									r={22}
									transform="translate(118 551)"
									id="day-23"
									style={{ fill: 'red', display: 'none' }}
								/>
								<text
									className="l-january"
									transform="translate(140 557)">
									<tspan x={-14.316} y={23}>
										{'23'}
									</tspan>
								</text>
							</g>
							<g transform="translate(310 -413)">
								<circle
									className="b-item-1813"
									cx={22}
									cy={22}
									r={22}
									transform="translate(118 551)"
									id="day-24"
									style={{ fill: 'red', display: 'none' }}
								/>
								<text
									className="l-january"
									transform="translate(140 557)">
									<tspan x={-13.596} y={23}>
										{'24'}
									</tspan>
								</text>
							</g>
							<g transform="translate(396 -413)">
								<circle
									className="b-item-1813"
									cx={22}
									cy={22}
									r={22}
									transform="translate(118 551)"
									id="day-25"
									style={{ fill: 'red', display: 'none' }}
								/>
								<text
									className="l-january"
									transform="translate(140 557)">
									<tspan x={-14.256} y={23}>
										{'25'}
									</tspan>
								</text>
							</g>
							<g transform="translate(-120 -365)">
								<circle
									className="b-item-1813"
									cx={22}
									cy={22}
									r={22}
									transform="translate(118 551)"
									id="day-26"
									style={{ fill: 'red', display: 'none' }}
								/>
								<text
									className="l-january"
									transform="translate(140 557)">
									<tspan x={-13.92} y={23}>
										{'26'}
									</tspan>
								</text>
							</g>
							<g transform="translate(-34 -365)">
								<circle
									className="b-item-1813"
									cx={22}
									cy={22}
									r={22}
									transform="translate(118 551)"
									id="day-27"
									style={{ fill: 'red', display: 'none' }}
								/>
								<text
									className="l-january"
									transform="translate(140 557)">
									<tspan x={-13.716} y={23}>
										{'27'}
									</tspan>
								</text>
							</g>
							<g transform="translate(52 -365)">
								<circle
									className="b-item-1813"
									cx={22}
									cy={22}
									r={22}
									transform="translate(118 551)"
									id="day-28"
									style={{ fill: 'red', display: 'none' }}
								/>
								<text
									className="l-january"
									transform="translate(140 557)">
									<tspan x={-14.508} y={23}>
										{'28'}
									</tspan>
								</text>
							</g>
							<g transform="translate(138 -365)">
								<circle
									className="b-item-1813"
									cx={22}
									cy={22}
									r={22}
									transform="translate(118 551)"
									id="day-29"
									style={{ fill: 'red', display: 'none' }}
								/>
								<text
									className="l-january"
									transform="translate(140 557)">
									<tspan x={-14.508} y={23}>
										{'29'}
									</tspan>
								</text>
							</g>
							<g transform="translate(224 -365)">
								<circle
									className="b-item-1813"
									cx={22}
									cy={22}
									r={22}
									transform="translate(118 551)"
									id="day-30"
									style={{ fill: 'red', display: 'none' }}
								/>
								<text
									className="l-january"
									transform="translate(140 557)">
									<tspan x={-14.7} y={23}>
										{'30'}
									</tspan>
								</text>
							</g>
							<g transform="translate(310 -365)">
								<circle
									className="b-item-1813"
									cx={22}
									cy={22}
									r={22}
									transform="translate(118 551)"
									id="day-31"
									style={{ fill: 'red', display: 'none' }}
								/>
								<text
									className="l-january"
									transform="translate(140 557)">
									<tspan x={-12.756} y={23}>
										{'31'}
									</tspan>
								</text>
							</g>
							<g transform="translate(396 -365)">
								<circle
									className="b-item-1813"
									cx={22}
									cy={22}
									r={22}
									transform="translate(118 551)"
									style={{ fill: 'red', display: 'none' }}
								/>
								<text
									className="l-january"
									transform="translate(140 557)">
									<tspan x={-12.324} y={23}>
										{'01'}
									</tspan>
								</text>
							</g>
						</g>
						<text
							className="m-january"
							transform="translate(140 525)">
							<tspan x={0} y={0}>
								{t('Enero 2025')}
							</tspan>
						</text>
						<line
							className="n-january"
							x2={567}
							transform="translate(140 546)"
						/>
						<path
							className="b-january"
							d="M13.947,0,27.893,23.908H0Z"
							transform="translate(616.338 532.048) rotate(-90)"
							onClick={onLessMonth}
						/>
						<path
							className="b-january"
							d="M13.947,0,27.893,23.908H0Z"
							transform="translate(698.246 504.155) rotate(90)"
							onClick={onChangeMonth}
						/>
					</g>
					<text
						className="o-january"
						transform="translate(0 185.019)">
						<tspan x={0} y={55}>
							{t('Prográmese con ')}
						</tspan>
						<tspan x={0} y={112}>
							{t('Grupo Amarey')}
						</tspan>
					</text>
				</g>
				<g transform="translate(-210.89 -251.981)">
					<g transform="translate(1440.747 906.884)" onClick={next}>
						<g
							className="u-january"
							transform="matrix(1, 0, 0, 1, -1229.86, -864.9)">
							<path
								className="f-january"
								d="M127.48,0H71.492A70.054,70.054,0,0,0,6.277,44.472L0,60.473H53.69a73.731,73.731,0,0,0,69-47.758Z"
								transform="translate(1229.86 864.9)"
							/>
						</g>
						<path
							className="g-january"
							d="M13.947,0,27.893,23.908H0Z"
							transform="translate(75.679 16.27) rotate(90)"
						/>
					</g>
					<g transform="translate(1224.426 906.884)" onClick={prev}>
						<g
							className="t-january"
							transform="matrix(1, 0, 0, 1, -1013.54, -864.9)">
							<path
								className="f-january"
								d="M0,0H55.988A70.054,70.054,0,0,1,121.2,44.472l6.277,16H73.791a73.731,73.731,0,0,1-69-47.758Z"
								transform="translate(1013.54 864.9)"
							/>
						</g>
						<path
							className="g-january"
							d="M13.947,0,27.893,23.908H0Z"
							transform="translate(51.802 44.164) rotate(-90)"
						/>
					</g>
				</g>
				<text
					className="h-january"
					transform="translate(1127.787 76.019)">
					<tspan x={0} y={0}>
						{t('Enero')}
					</tspan>
				</text>

				<g transform="translate(360 0) scale(0.7)">
					<g
						className="s-january"
						transform="matrix(1, 0, 0, 1, 0, 0)">
						<path
							className="g-january"
							d="M714.62,44.719,661.7,503.6H267.94c-77.71,0-147.5,49.025-175.88,123.546L79.57,659.978a44.438,44.438,0,0,1-8.89-22.931L.27,44.873C-2.18,21.1,12.35,0,31.16,0H683.71c18.77,0,33.28,20.995,30.91,44.719"
							transform="translate(828 160.36)"
						/>
					</g>
					<g
						className="r-january"
						transform="matrix(1, 0, 0, 1, 0, 0)">
						<path
							className="g-january"
							d="M661.7,488.86,646.33,622.152c-1.98,19.841-15.22,34.716-30.92,34.716H101.58c-8.54,0-16.36-4.409-22.01-11.63l12.49-32.831c28.38-74.521,98.17-123.546,175.88-123.546Z"
							transform="translate(828 175.1)"
						/>
					</g>
					<text
						className="p-january"
						transform="translate(1436 743.961)">
						<tspan x={-344.008} y={0}>
							{'Este mes no contamos'}
						</tspan>
						<tspan x={-201.936} y={30}>
							{'con eventos '}
						</tspan>
					</text>
					<g transform="translate(940.574 398.732)">
						<g className="q-january">
							<path
								className="e-january"
								d="M82.116,88.629l19.466,26.5a.725.725,0,0,1,.14.425l.108,20.746a.724.724,0,0,1-.72.728l-2.894.015a.724.724,0,0,1-.728-.72l-.038-7.359-10.467.055.038,7.359a.723.723,0,0,1-.72.728l-2.894.015a.723.723,0,0,1-.728-.72l-.1-19.06a.724.724,0,0,1,.72-.727L86.2,116.6a.724.724,0,0,1,.728.72l.038,7.359,10.467-.054-.041-7.871L79.709,92.685l-15.038.078L47.244,117.014l.041,7.87,10.467-.054-.038-7.359a.724.724,0,0,1,.72-.728l2.894-.015a.724.724,0,0,1,.728.72l.1,19.06a.724.724,0,0,1-.72.728l-2.894.015a.723.723,0,0,1-.727-.72l-.038-7.359-10.467.054.038,7.359a.724.724,0,0,1-.72.728l-2.894.015a.723.723,0,0,1-.728-.72L42.9,115.861a.722.722,0,0,1,.136-.426l19.189-26.7a.723.723,0,0,1,.584-.3l18.724-.1a.723.723,0,0,1,.587.3M51.966,66.964l-31.325-10a.722.722,0,0,0-.447,0L.5,63.482a.724.724,0,0,0-.46.914l.908,2.748a.724.724,0,0,0,.914.46l6.987-2.31,3.286,9.937-6.987,2.31a.724.724,0,0,0-.46.914L5.594,81.2a.723.723,0,0,0,.914.46l18.1-5.984a.724.724,0,0,0,.46-.914l-.908-2.749a.724.724,0,0,0-.915-.46l-6.987,2.31-3.286-9.937,7.472-2.471L48.89,70.54l4.721,14.277L36.184,109.068l-7.472,2.471L25.426,101.6l6.986-2.31a.723.723,0,0,0,.46-.914l-.908-2.749a.724.724,0,0,0-.914-.46l-18.1,5.984a.724.724,0,0,0-.46.914l.908,2.748a.723.723,0,0,0,.914.46l6.988-2.31L24.59,112.9l-6.987,2.31a.723.723,0,0,0-.46.914l.909,2.749a.724.724,0,0,0,.914.46l19.7-6.514a.721.721,0,0,0,.36-.264l19.189-26.7a.722.722,0,0,0,.1-.649L52.433,67.426a.723.723,0,0,0-.467-.462m38.626-4.9,31.22-10.324a.725.725,0,0,0,.361-.265l12.107-16.848a.724.724,0,0,0-.165-1.01l-2.35-1.689a.724.724,0,0,0-1.01.165l-4.3,5.977-8.5-6.108,4.294-5.976a.723.723,0,0,0-.165-1.01l-2.35-1.689a.723.723,0,0,0-1.01.165L107.605,38.934a.724.724,0,0,0,.165,1.01l2.351,1.689a.723.723,0,0,0,1.01-.165l4.294-5.976,8.5,6.108-4.593,6.391L90.98,57.367,78.768,48.592l-.155-29.863,4.592-6.391,8.5,6.108L87.41,24.422a.723.723,0,0,0,.165,1.01l2.351,1.69a.724.724,0,0,0,1.01-.165l11.122-15.479a.724.724,0,0,0-.165-1.01L99.543,8.778a.724.724,0,0,0-1.01.165L94.239,14.92l-8.5-6.107,4.3-5.976a.723.723,0,0,0-.165-1.01L87.518.137A.724.724,0,0,0,86.508.3L74.4,17.15a.722.722,0,0,0-.136.426l.171,32.881a.723.723,0,0,0,.3.584L89.943,61.969a.725.725,0,0,0,.649.1M143.161,66.4l.88-2.758a.723.723,0,0,0-.469-.909l-19.764-6.308a.722.722,0,0,0-.447,0L92.141,66.754a.724.724,0,0,0-.462.467L85.986,85.059a.723.723,0,0,0,.106.649l19.466,26.5a.725.725,0,0,0,.363.261l19.764,6.309a.723.723,0,0,0,.909-.469l.88-2.758a.723.723,0,0,0-.47-.909l-7.01-2.237,3.182-9.972,7.012,2.238a.724.724,0,0,0,.909-.47l.88-2.758a.724.724,0,0,0-.47-.909l-18.158-5.8a.724.724,0,0,0-.909.469l-.88,2.758a.723.723,0,0,0,.469.909l7.01,2.238-3.182,9.971-7.5-2.393L90.681,84.624,95.255,70.3l28.353-9.376,7.5,2.393-3.182,9.971-7.011-2.238a.724.724,0,0,0-.909.47l-.88,2.758a.724.724,0,0,0,.47.909l18.158,5.8a.724.724,0,0,0,.909-.47l.88-2.758a.723.723,0,0,0-.469-.909L132.057,74.6l3.183-9.97,7.012,2.238a.724.724,0,0,0,.909-.47M54.169,62.129,69.245,51.024a.724.724,0,0,0,.294-.587l-.217-32.881a.72.72,0,0,0-.141-.425L56.877.427A.724.724,0,0,0,55.865.273L53.534,1.99A.723.723,0,0,0,53.381,3l4.365,5.926-8.427,6.207L44.954,9.209a.724.724,0,0,0-1.012-.153l-2.331,1.717a.724.724,0,0,0-.153,1.012l11.3,15.346a.724.724,0,0,0,1.012.153l2.331-1.717a.723.723,0,0,0,.153-1.012l-4.364-5.925,8.427-6.207,4.668,6.336.2,29.862L53.078,57.541,24.616,48.5l-4.668-6.336,8.427-6.208L32.74,41.88a.724.724,0,0,0,1.012.153l2.331-1.717a.723.723,0,0,0,.153-1.012l-11.3-15.345a.723.723,0,0,0-1.012-.153l-2.33,1.717a.724.724,0,0,0-.153,1.012L25.8,32.46l-8.427,6.208-4.365-5.926A.724.724,0,0,0,12,32.588L9.667,34.3a.723.723,0,0,0-.153,1.012l12.3,16.7a.726.726,0,0,0,.363.261l31.34,9.955a.724.724,0,0,0,.648-.107"
								transform="translate(0 0)"
							/>
							<path
								className="b-january"
								d="M609.375,84.384H597.143a16.562,16.562,0,0,1-8.536-2.29,17.029,17.029,0,0,1-6.194-6.22,17.246,17.246,0,0,1,0-17.176,17.241,17.241,0,0,1,6.194-6.246,16.741,16.741,0,0,1,15.328-.859,17.106,17.106,0,0,1,5.648,4.06l-1.717,1.614a14.717,14.717,0,0,0-10.722-4.685,14.29,14.29,0,0,0-7.339,1.978,14.781,14.781,0,0,0-5.361,5.335,14.752,14.752,0,0,0,0,14.757,14.892,14.892,0,0,0,5.361,5.386,14.138,14.138,0,0,0,7.339,2h9.785V69.915H595.789V67.572h13.585Z"
								transform="translate(-347.714 -30.05)"
							/>
							<path
								className="b-january"
								d="M704.567,85.008,690.513,67.936h4.164a16.566,16.566,0,0,0,6.246-.99,8.335,8.335,0,0,0,3.071-2.525,5.964,5.964,0,0,0,1.3-3.722,6.143,6.143,0,0,0-1.093-3.461,8.087,8.087,0,0,0-3.123-2.68,10.123,10.123,0,0,0-4.684-1.042h-9.473V85.008h-2.343V51.175h11.816a13.054,13.054,0,0,1,4.476.755,10.992,10.992,0,0,1,3.644,2.16,9.59,9.59,0,0,1,2.316,3.071,8.371,8.371,0,0,1-.911,8.666,9.932,9.932,0,0,1-4.06,3.254,10.738,10.738,0,0,1-3.149.911,27.662,27.662,0,0,1-3.253.181L707.69,85.008Z"
								transform="translate(-410.323 -30.673)"
							/>
							<path
								className="b-january"
								d="M784.355,85.372a12.366,12.366,0,0,1-4.918-1.015,12.843,12.843,0,0,1-4.19-2.889,11.932,11.932,0,0,1-2.785-4.164,13.4,13.4,0,0,1-.963-5.049V51.175h2.342V72.256a10.907,10.907,0,0,0,.807,4.164,10.274,10.274,0,0,0,2.264,3.434,10.6,10.6,0,0,0,3.435,2.316,10.246,10.246,0,0,0,4.008.807,10.377,10.377,0,0,0,4.06-.807,10.613,10.613,0,0,0,3.435-2.316,10.307,10.307,0,0,0,2.264-3.434,10.921,10.921,0,0,0,.807-4.164V51.175h2.342V72.256A13.413,13.413,0,0,1,796.3,77.3a11.956,11.956,0,0,1-2.785,4.164,12.938,12.938,0,0,1-4.164,2.889,12.437,12.437,0,0,1-5,1.015"
								transform="translate(-462.422 -30.673)"
							/>
							<path
								className="b-january"
								d="M866.133,85.008l-.052-33.832h12.076a11.817,11.817,0,0,1,5.491,1.3,10.619,10.619,0,0,1,4.008,3.488,8.428,8.428,0,0,1,0,9.551,10.527,10.527,0,0,1-4.008,3.513,11.817,11.817,0,0,1-5.491,1.3h-9.681V85.008Zm2.342-17.124h9.681a9.733,9.733,0,0,0,4.32-.963,8.19,8.19,0,0,0,3.149-2.6,6.005,6.005,0,0,0,1.171-3.566,6.088,6.088,0,0,0-1.171-3.617,8.2,8.2,0,0,0-3.149-2.6,9.749,9.749,0,0,0-4.32-.963h-9.733Z"
								transform="translate(-519.112 -30.674)"
							/>
							<path
								className="b-january"
								d="M961.679,84.827a16.7,16.7,0,0,1-8.589-2.316,17.356,17.356,0,0,1,0-29.929,17.079,17.079,0,0,1,17.177,0,17.355,17.355,0,0,1,0,29.929,16.7,16.7,0,0,1-8.588,2.316m0-32.168a14.242,14.242,0,0,0-7.391,2,15.048,15.048,0,0,0-5.387,5.413,14.924,14.924,0,0,0,0,14.938,15.031,15.031,0,0,0,5.387,5.413,14.632,14.632,0,0,0,14.782,0,14.838,14.838,0,0,0,5.361-5.413,15.089,15.089,0,0,0,0-14.938,14.855,14.855,0,0,0-5.361-5.413,14.247,14.247,0,0,0-7.391-2"
								transform="translate(-566.148 -30.128)"
							/>
							<path
								className="b-january"
								d="M556.2,177.433h8.631a1.133,1.133,0,0,1,1.133,1.133v3.511c3.484-4.2,7.057-5.806,12.863-5.806,6.877,0,11.165,2.233,14.559,7.682,4.019-5.359,8.842-7.682,15.809-7.682,7.771,0,14.024,3.037,17.15,8.307,1.876,3.3,2.948,8.039,2.948,13.756v27.45a1.133,1.133,0,0,1-1.133,1.133h-9.615a1.133,1.133,0,0,1-1.133-1.133V199.764c0-5.091-.714-7.861-2.411-9.736a8.76,8.76,0,0,0-6.878-2.858,9.013,9.013,0,0,0-8.486,5c-1.072,2.233-1.518,5-1.518,10.361v23.252a1.133,1.133,0,0,1-1.133,1.133h-9.614a1.133,1.133,0,0,1-1.133-1.133V199.764c0-4.823-.715-7.771-2.233-9.647a9.534,9.534,0,0,0-7.324-2.948c-4.2,0-7.146,1.876-8.575,5.359-.8,1.965-1.161,5.27-1.161,10v23.252a1.133,1.133,0,0,1-1.133,1.133H556.2a1.133,1.133,0,0,1-1.133-1.133V178.566a1.133,1.133,0,0,1,1.133-1.133"
								transform="translate(-332.694 -105.654)"
							/>
							<path
								className="b-january"
								d="M809.3,226.917H800.67a1.133,1.133,0,0,1-1.133-1.133v-5.3c-4.734,5.449-9.468,7.593-16.435,7.593-14.47,0-24.921-10.808-24.921-25.724,0-15.1,10.54-26.082,25.189-26.082,7.145,0,12.058,2.323,16.167,7.771v-5.477a1.133,1.133,0,0,1,1.133-1.133H809.3a1.133,1.133,0,0,1,1.133,1.133v47.218a1.133,1.133,0,0,1-1.133,1.133m-39.151-24.3c0,8.665,5.984,14.559,14.649,14.559,8.575,0,14.381-5.984,14.381-14.827,0-8.932-6.074-15.185-14.738-15.185-8.307,0-14.291,6.52-14.291,15.452"
								transform="translate(-454.44 -105.654)"
							/>
							<path
								className="b-january"
								d="M913.827,177.433h8.632a1.133,1.133,0,0,1,1.133,1.133v3.69c3.126-4.645,5.627-5.985,10.719-5.985h.893v11.433c-7.146.178-10.629,4.019-10.629,11.7v26.378a1.133,1.133,0,0,1-1.133,1.133h-9.614a1.133,1.133,0,0,1-1.133-1.133V178.566a1.133,1.133,0,0,1,1.133-1.133"
								transform="translate(-547.051 -105.654)"
							/>
							<path
								className="b-january"
								d="M988.432,207.455c1.429,5.985,6.609,9.736,13.666,9.736,4.73,0,7.638-1.242,10.559-4.524a1.144,1.144,0,0,1,.849-.389h10.807a1.13,1.13,0,0,1,1.052,1.558,22.482,22.482,0,0,1-3.348,5.32c-5.18,6.074-11.522,8.932-19.651,8.932-15.246,0-27.03-11.481-26.792-26.16a26.3,26.3,0,0,1,28.633-25.531c13.415,1.221,22.991,12.041,22.991,26.5a19.208,19.208,0,0,1-.447,4.555ZM1015.5,197c-1.518-6.342-6.341-9.825-13.666-9.825-7.056,0-11.88,3.394-13.756,9.825Z"
								transform="translate(-584.738 -105.664)"
							/>
							<path
								className="b-january"
								d="M1124.284,224.01l-17.5-43.281a1.133,1.133,0,0,1,1.05-1.558h11.088a1.132,1.132,0,0,1,1.072.766l10.724,31.3,11.694-31.329a1.133,1.133,0,0,1,1.061-.737h11.155a1.133,1.133,0,0,1,1.04,1.583l-27.6,63.742a1.133,1.133,0,0,1-1.04.683h-10.3a1.133,1.133,0,0,1-1.037-1.588Z"
								transform="translate(-663.333 -107.392)"
							/>
							<path
								className="b-january"
								d="M417.6,137.923H407.95L395.8,167.085a1.133,1.133,0,0,0,1.046,1.568h10.372a1.133,1.133,0,0,0,1.068-.756l4.491-12.735,7.056,20.008h-19.59a11.72,11.72,0,0,0-10.818,7.211l-8.328,19.981a1.133,1.133,0,0,0,1.046,1.568H393.18a1.133,1.133,0,0,0,1.041-.686l7.029-16.375h23.492l6.767,16.361a1.132,1.132,0,0,0,1.047.7h11.026a1.133,1.133,0,0,0,1.045-1.571Z"
								transform="translate(-228.367 -82.668)"
							/>
						</g>
					</g>
				</g>
			</svg>
		</React.Fragment>
	)
}

export default January
