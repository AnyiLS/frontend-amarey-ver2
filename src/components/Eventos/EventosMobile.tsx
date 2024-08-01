import React from 'react'
import June from './componentsMobile/June'
import July from './componentsMobile/July'
import Agoust from './componentsMobile/Agoust'
import September from './componentsMobile/September'
import October from './componentsMobile/October'
import November from './componentsMobile/November'
import December from './componentsMobile/December'
import January from './componentsMobile/January'
import May02 from './componentsMobile/May02'
import May04 from './componentsMobile/May04'
import May16 from './componentsMobile/May16'
import May18 from './componentsMobile/May18'
import May22 from './componentsMobile/May22'
import May23 from './componentsMobile/May23'
import May24 from './componentsMobile/May24'
import May25 from './componentsMobile/May25'
import May30 from './componentsMobile/May30'
import May31 from './componentsMobile/May31'
import { useTranslation } from 'react-i18next'

const EventosMobile: React.FC = (): JSX.Element => {
	/** State */
	const [view, setView] = React.useState<string>('02-02')

	const {t} = useTranslation()

	return (
		<React.Fragment>
			{view === '02-02' ? (
				<svg viewBox="18 0 414 856.142">
					<defs>
						<style>
							{
								".a-pentagrama,.q-pentagrama{fill:none;}.b-pentagrama{clip-path:url(#a-pentagrama);}.c-pentagrama{fill:#e40032;}.d-pentagrama,.i-pentagrama,.j-pentagrama{fill:#001f5f;}.e-pentagrama{fill:#c5dbf7;}.f-pentagrama{fill:url(#b-pentagrama);}.g-pentagrama,.k-pentagrama,.s-pentagrama{fill:#fff;}.h-pentagrama{fill:#c7c7cc;}.i-pentagrama{font-size:12px;}.i-pentagrama,.s-pentagrama{font-family:'Kiona-Bold';}.i-pentagrama,.k-pentagrama,.s-pentagrama{font-weight:700;}.j-pentagrama{font-size:8px;}.j-pentagrama,.o-pentagrama,.r-pentagrama{font-family:Silka-Regular, Silka;}.k-pentagrama,.o-pentagrama{font-size:16px;}.k-pentagrama{font-family:Silka-Bold, Silka;}.l-pentagrama{clip-path:url(#k-pentagrama);}.m-pentagrama,.o-pentagrama,.p-pentagrama,.r-pentagrama{fill:#182856;}.m-pentagrama{font-size:20px;}.m-pentagrama,.p-pentagrama{font-family:Silka-SemiBold, Silka;font-weight:600;}.n-pentagrama{clip-path:url(#l-pentagrama);}.p-pentagrama{font-size:27px;}.q-pentagrama{stroke:#e40032;stroke-width:3px;}.r-pentagrama{font-size:15px;}.s-pentagrama{font-size:18px;}.t-pentagrama{filter:url(#i-pentagrama);}.u-pentagrama{filter:url(#g-pentagrama);}.v-pentagrama{filter:url(#e-pentagrama);}.w-pentagrama{filter:url(#c-pentagrama);}"
							}
						</style>
						<clipPath id="a-pentagrama">
							<rect
								className="a-pentagrama"
								width={414.551}
								height={856.141}
								transform="translate(0 0)"
							/>
						</clipPath>
						<pattern
							id="b-pentagrama"
							preserveAspectRatio="xMidYMid slice"
							width="100%"
							height="100%"
							viewBox="0 0 6000 3363">
							<image
								width={6000}
								height={3363}
								xlinkHref="/images/mobile/events/image-1.webp"
							/>
						</pattern>
						<filter
							id="c-pentagrama"
							x={59.595}
							y={94.511}
							width={326.422}
							height={302.738}
							filterUnits="userSpaceOnUse">
							<feOffset dy={3} />
							<feGaussianBlur stdDeviation={3} result="d" />
							<feFlood floodOpacity={0.4} />
							<feComposite operator="in" in2="d" />
							<feComposite in="SourceGraphic" />
						</filter>
						<filter
							id="e-pentagrama"
							x={93.924}
							y={311.783}
							width={269.152}
							height={90.485}
							filterUnits="userSpaceOnUse">
							<feOffset dy={3} />
							<feGaussianBlur stdDeviation={3} result="f" />
							<feFlood floodOpacity={0.4} />
							<feComposite operator="in" in2="f" />
							<feComposite in="SourceGraphic" />
						</filter>
						<filter
							id="g-pentagrama"
							x={232.97}
							y={409.209}
							width={73}
							height={44.09}
							filterUnits="userSpaceOnUse">
							<feOffset dy={3} />
							<feGaussianBlur stdDeviation={3} result="h" />
							<feFlood floodOpacity={0.6} />
							<feComposite operator="in" in2="h" />
							<feComposite in="SourceGraphic" />
						</filter>
						<filter
							id="i-pentagrama"
							x={139.642}
							y={409.209}
							width={73}
							height={44.09}
							filterUnits="userSpaceOnUse">
							<feOffset dy={3} />
							<feGaussianBlur stdDeviation={3} result="j" />
							<feFlood floodOpacity={0.6} />
							<feComposite operator="in" in2="j" />
							<feComposite in="SourceGraphic" />
						</filter>
						<clipPath id="k-pentagrama">
							<rect
								className="a-pentagrama"
								width={322}
								height={26}
							/>
						</clipPath>
						<clipPath id="l-pentagrama">
							<rect
								className="a-pentagrama"
								width={322}
								height={160}
							/>
						</clipPath>
					</defs>
					<g transform="translate(14.806 -24.602)">
						<g transform="translate(1 24.602)">
							<g
								className="b-pentagrama"
								transform="translate(0 0)">
								<g transform="translate(436.148 1627.226) rotate(180)">
									<path
										className="c-pentagrama"
										d="M597.981,453.3l-8.16,17.3c-14.568,30.89-48.45,50.85-86.318,50.85H259.215v.836H503.5A103.193,103.193,0,0,0,555.9,508.271,88.879,88.879,0,0,0,585,481.032a79.465,79.465,0,0,0,5.7-10.107l8.312-17.624Z"
										transform="translate(-355.401 281.84)"
									/>
									<path
										className="c-pentagrama"
										d="M505.963,503.55l-5.943-12.6c-10.611-22.5-35.29-37.038-62.872-37.038H259.215V453.3H437.148a75.163,75.163,0,0,1,38.162,10.21,64.737,64.737,0,0,1,21.2,19.84,57.881,57.881,0,0,1,4.148,7.362l6.054,12.837Z"
										transform="translate(-342.462 1153.097)"
									/>
									<path
										className="d-pentagrama"
										d="M312.653,724.35,364.82,613.712c14.568-30.89,48.45-50.85,86.318-50.85H772.059v-.836H451.138a103.2,103.2,0,0,0-52.394,14.018c-15.567,9.171-27.6,22.085-34.8,37.346l-52.211,110.73.917.229"
										transform="translate(-328.725 227.667)"
									/>
								</g>
							</g>
						</g>
					</g>
					<circle
						className="e-pentagrama"
						cx={14}
						cy={14}
						r={14}
						transform="translate(308.806 574.21)"
					/>
					<circle
						className="e-pentagrama"
						cx={14}
						cy={14}
						r={14}
						transform="translate(308.806 606.21)"
					/>
					<circle
						className="e-pentagrama"
						cx={14}
						cy={14}
						r={14}
						transform="translate(357.806 574.21)"
					/>
					<circle
						className="e-pentagrama"
						cx={14}
						cy={14}
						r={14}
						transform="translate(357.806 606.21)"
					/>
					<circle
						className="e-pentagrama"
						cx={14}
						cy={14}
						r={14}
						transform="translate(258.806 705.21)"
					/>
					<rect
						className="c-pentagrama"
						width={24}
						height={3}
						rx={1.5}
						transform="translate(310.806 599.21)"
					/>
					<path
						className="d-pentagrama"
						d="M432.355,0H21.3C7.82,0-2.265,11.674.441,24.144L20.452,453.02c2.03,9.355,10.746,16.072,20.855,16.072H432.355Z"
						transform="translate(0 0.003)"
					/>
					<g
						className="w-pentagrama"
						transform="matrix(1, 0, 0, 1, 0, 0)">
						<path
							className="f-pentagrama"
							d="M308.312,19.293,285.481,217.271H115.6c-33.527,0-63.637,21.151-75.881,53.3l-5.389,14.164a19.172,19.172,0,0,1-3.835-9.893L.116,19.36C-.941,9.1,5.328,0,13.443,0H294.977c8.1,0,14.358,9.058,13.336,19.293"
							transform="translate(68.59 100.51)"
						/>
					</g>
					<g
						className="v-pentagrama"
						transform="matrix(1, 0, 0, 1, 0, 0)">
						<path
							className="g-pentagrama"
							d="M330.722,488.86l-6.631,57.507c-.854,8.56-6.566,14.978-13.34,14.978H89.066a12.141,12.141,0,0,1-9.5-5.018l5.389-14.164c12.244-32.151,42.354-53.3,75.881-53.3Z"
							transform="translate(23.35 -171.08)"
						/>
					</g>
					<g transform="translate(148.642 415.209)">
						<g
							transform="translate(93.329 0)"
							onClick={() => setView('03-02')}>
							<g
								className="u-pentagrama"
								transform="matrix(1, 0, 0, 1, -241.97, -415.21)">
								<path
									className="h-pentagrama"
									d="M55,0H30.844A30.224,30.224,0,0,0,2.708,19.187L0,26.09H23.164a31.81,31.81,0,0,0,29.771-20.6Z"
									transform="translate(241.97 415.21)"
								/>
							</g>
							<path
								className="g-pentagrama"
								d="M6.017,0l6.017,10.315H0Z"
								transform="translate(32.651 7.02) rotate(90)"
							/>
						</g>
						<g
							transform="translate(0 0)"
							onClick={() => setView('01')}>
							<g
								className="t-pentagrama"
								transform="matrix(1, 0, 0, 1, -148.64, -415.21)">
								<path
									className="h-pentagrama"
									d="M0,0H24.155A30.224,30.224,0,0,1,52.292,19.187L55,26.09H31.836A31.81,31.81,0,0,1,2.065,5.486Z"
									transform="translate(148.64 415.21)"
								/>
							</g>
							<path
								className="g-pentagrama"
								d="M6.017,0l6.017,10.315H0Z"
								transform="translate(22.349 19.054) rotate(-90)"
							/>
						</g>
					</g>
					<text
						className="i-pentagrama"
						transform="translate(332.806 348.031)">
						<tspan x={-136.692} y={0}>
							{'Segundo Simposio de'}
						</tspan>
						<tspan x={-69.516} y={15}>
							{'Residentes'}
						</tspan>
					</text>
					<text
						className="j-pentagrama"
						transform="translate(112.806 368.031)">
						<tspan x={66.384} y={8}>
							{'Bogotá 2 y 3 de febrero HILTON Bogotá'}
						</tspan>
					</text>
					<text
						className="k-pentagrama"
						transform="translate(136.806 87.21)">
						<tspan x={0} y={0}>
							{t('02 de febrero de 2024')}
						</tspan>
					</text>
					<g transform="translate(47.281 494.018)">
						<g
							className="l-pentagrama"
							transform="translate(14.524 50.192)">
							<g transform="translate(-140 -557)">
								<text
									className="m-pentagrama"
									transform="translate(155 557)">
									<tspan x={-13.57} y={19}>
										{t('Do ')}
									</tspan>
								</text>
							</g>
							<g transform="translate(-91 -557)">
								<text
									className="m-pentagrama"
									transform="translate(155 557)">
									<tspan x={-11.2} y={19}>
										{t('Lu ')}
									</tspan>
								</text>
							</g>
							<g transform="translate(-42 -557)">
								<text
									className="m-pentagrama"
									transform="translate(155 557)">
									<tspan x={-15.36} y={19}>
										{t('Ma ')}
									</tspan>
								</text>
							</g>
							<g transform="translate(7 -557)">
								<text
									className="m-pentagrama"
									transform="translate(155 557)">
									<tspan x={-11.58} y={19}>
										{t('Mi ')}
									</tspan>
								</text>
							</g>
							<g transform="translate(56 -557)">
								<text
									className="m-pentagrama"
									transform="translate(155 557)">
									<tspan x={-11.92} y={19}>
										{t('Ju ')}
									</tspan>
								</text>
							</g>
							<g transform="translate(105 -557)">
								<text
									className="m-pentagrama"
									transform="translate(155 557)">
									<tspan x={-9.54} y={19}>
										{t('Vi ')}
									</tspan>
								</text>
							</g>
							<g transform="translate(154 -557)">
								<text
									className="m-pentagrama"
									transform="translate(155 557)">
									<tspan x={-12.43} y={19}>
										{t('Sa ')}
									</tspan>
								</text>
							</g>
						</g>
						<g
							className="n-pentagrama"
							transform="translate(14.524 81.192)">
							<g transform="translate(-140 -557)">
								<text
									className="o-pentagrama"
									transform="translate(155 561)">
									<tspan x={-9.712} y={15}>
										{'28'}
									</tspan>
								</text>
							</g>
							<g transform="translate(-91 -557)">
								<text
									className="o-pentagrama"
									transform="translate(155 561)">
									<tspan x={-9.712} y={15}>
										{'29'}
									</tspan>
								</text>
							</g>
							<g transform="translate(-42 -557)">
								<text
									className="o-pentagrama"
									transform="translate(155 561)">
									<tspan x={-9.856} y={15}>
										{'30'}
									</tspan>
								</text>
							</g>
							<g transform="translate(7 -557)">
								<text
									className="o-pentagrama"
									transform="translate(155 561)">
									<tspan x={-8.488} y={15}>
										{'31'}
									</tspan>
								</text>
							</g>
							<g transform="translate(56 -557)">
								<text
									className="o-pentagrama"
									transform="translate(155 561)">
									<tspan x={-8.096} y={15}>
										{'01'}
									</tspan>
								</text>
							</g>
							<g
								transform="translate(105 -557)"
								onClick={() => setView('02-02')}>
								<text
									className="o-pentagrama"
									transform="translate(155 561)">
									<tspan x={-9.664} y={15}>
										{'02'}
									</tspan>
								</text>
							</g>
							<g
								transform="translate(154 -557)"
								onClick={() => setView('03-02')}>
								<text
									className="o-pentagrama"
									transform="translate(155 561)">
									<tspan x={-9.856} y={15}>
										{'03'}
									</tspan>
								</text>
							</g>
							<g transform="translate(-140 -524)">
								<text
									className="o-pentagrama"
									transform="translate(155 561)">
									<tspan x={-9.832} y={15}>
										{'04'}
									</tspan>
								</text>
							</g>
							<g transform="translate(-91 -524)">
								<text
									className="o-pentagrama"
									transform="translate(155 561)">
									<tspan x={-9.84} y={15}>
										{'05'}
									</tspan>
								</text>
							</g>
							<g transform="translate(-42 -524)">
								<text
									className="o-pentagrama"
									transform="translate(155 561)">
									<tspan x={-10} y={15}>
										{'06'}
									</tspan>
								</text>
							</g>
							<g transform="translate(7 -524)">
								<text
									className="o-pentagrama"
									transform="translate(155 561)">
									<tspan x={-9.416} y={15}>
										{'07'}
									</tspan>
								</text>
							</g>
							<g transform="translate(56 -524)">
								<text
									className="o-pentagrama"
									transform="translate(155 561)">
									<tspan x={-10} y={15}>
										{'08'}
									</tspan>
								</text>
							</g>
							<g
								transform="translate(105 -524)"
								onClick={() => setView('09-02')}>
								<text
									className="o-pentagrama"
									transform="translate(155 561)">
									<tspan x={-10} y={15}>
										{'09'}
									</tspan>
								</text>
							</g>
							<g
								transform="translate(154 -524)"
								onClick={() => setView('10-02')}>
								<text
									className="o-pentagrama"
									transform="translate(155 561)">
									<tspan x={-8.584} y={15}>
										{'10'}
									</tspan>
								</text>
							</g>
							<g transform="translate(-140 -491)">
								<text
									className="o-pentagrama"
									transform="translate(155 561)">
									<tspan x={-7.216} y={15}>
										{'11'}
									</tspan>
								</text>
							</g>
							<g transform="translate(-91 -491)">
								<text
									className="o-pentagrama"
									transform="translate(155 561)">
									<tspan x={-8.296} y={15}>
										{'12'}
									</tspan>
								</text>
							</g>
							<g transform="translate(-42 -491)">
								<text
									className="o-pentagrama"
									transform="translate(155 561)">
									<tspan x={-8} y={15}>
										{'13'}
									</tspan>
								</text>
							</g>
							<g transform="translate(7 -491)">
								<text
									className="o-pentagrama"
									transform="translate(155 561)">
									<tspan x={-8.136} y={15}>
										{'14'}
									</tspan>
								</text>
							</g>
							<g transform="translate(56 -491)">
								<text
									className="o-pentagrama"
									transform="translate(155 561)">
									<tspan x={-8.472} y={15}>
										{'15'}
									</tspan>
								</text>
							</g>
							<g transform="translate(105 -491)">
								<text
									className="o-pentagrama"
									transform="translate(155 561)">
									<tspan x={-8.632} y={15}>
										{'16'}
									</tspan>
								</text>
							</g>
							<g transform="translate(154 -491)">
								<text
									className="o-pentagrama"
									transform="translate(155 561)">
									<tspan x={-8.048} y={15}>
										{'17'}
									</tspan>
								</text>
							</g>
							<g transform="translate(-140 -458)">
								<text
									className="o-pentagrama"
									transform="translate(155 561)">
									<tspan x={-8.632} y={15}>
										{'18'}
									</tspan>
								</text>
							</g>
							<g transform="translate(-91 -458)">
								<text
									className="o-pentagrama"
									transform="translate(155 561)">
									<tspan x={-8.304} y={15}>
										{'19'}
									</tspan>
								</text>
							</g>
							<g transform="translate(-42 -458)">
								<text
									className="o-pentagrama"
									transform="translate(155 561)">
									<tspan x={-9.664} y={15}>
										{'20'}
									</tspan>
								</text>
							</g>
							<g transform="translate(7 -458)">
								<text
									className="o-pentagrama"
									transform="translate(155 561)">
									<tspan x={-8.296} y={15}>
										{'21'}
									</tspan>
								</text>
							</g>
							<g transform="translate(56 -458)">
								<text
									className="o-pentagrama"
									transform="translate(155 561)">
									<tspan x={-9.376} y={15}>
										{'22'}
									</tspan>
								</text>
							</g>
							<g transform="translate(105 -458)">
								<text
									className="o-pentagrama"
									transform="translate(155 561)">
									<tspan x={-9.568} y={15}>
										{'23'}
									</tspan>
								</text>
							</g>
							<g transform="translate(154 -458)">
								<text
									className="o-pentagrama"
									transform="translate(155 561)">
									<tspan x={-8.888} y={15}>
										{'24'}
									</tspan>
								</text>
							</g>
							<g transform="translate(-140 -425)">
								<text
									className="o-pentagrama"
									transform="translate(155 561)">
									<tspan x={-9.552} y={15}>
										{'25'}
									</tspan>
								</text>
							</g>
							<g transform="translate(-91 -425)">
								<text
									className="o-pentagrama"
									transform="translate(155 561)">
									<tspan x={-9.304} y={15}>
										{'26'}
									</tspan>
								</text>
							</g>
							<g transform="translate(-42 -425)">
								<text
									className="o-pentagrama"
									transform="translate(155 561)">
									<tspan x={-9.128} y={15}>
										{'27'}
									</tspan>
								</text>
							</g>
							<g transform="translate(7 -425)">
								<text
									className="o-pentagrama"
									transform="translate(155 561)">
									<tspan x={-9.712} y={15}>
										{'28'}
									</tspan>
								</text>
							</g>
							<g
								transform="translate(56 -425)"
								onClick={() => setView('29-02')}>
								<text
									className="o-pentagrama"
									transform="translate(155 561)">
									<tspan x={-9.712} y={15}>
										{'29'}
									</tspan>
								</text>
							</g>
							<g transform="translate(105 -425)">
								<text
									className="o-pentagrama"
									transform="translate(155 561)">
									<tspan x={-8.096} y={15}>
										{'01'}
									</tspan>
								</text>
							</g>
							<g transform="translate(154 -425)">
								<text
									className="o-pentagrama"
									transform="translate(155 561)">
									<tspan x={-9.664} y={15}>
										{'02'}
									</tspan>
								</text>
							</g>
						</g>
						<text
							className="p-pentagrama"
							transform="translate(4.524 25.192)">
							<tspan x={0} y={0}>
								{t('Febrero 2024')}
							</tspan>
						</text>
						<line
							className="q-pentagrama"
							x2={342}
							transform="translate(4.524 40.192)"
						/>
						<path
							className="d-pentagrama"
							d="M9.095,0l9.095,15.591H0Z"
							transform="translate(293.111 30.68) rotate(-90)"
							onClick={() => setView('01')}
						/>
						<path
							className="d-pentagrama"
							d="M9.095,0l9.095,15.591H0Z"
							transform="translate(346.524 12.491) rotate(90)"
							onClick={() => setView('06-03')}
						/>
					</g>
					<g transform="translate(228.262 782.336)">
						<circle
							className="e-pentagrama"
							cx={11.5}
							cy={11.5}
							r={11.5}
							transform="translate(-0.457 -0.125)"
						/>
						<text
							className="r-pentagrama"
							transform="translate(27.543 15.875)">
							<tspan x={0} y={0}>
								{t('Fecha evento')}
							</tspan>
						</text>
					</g>
					<g transform="translate(52.281 782.336)">
						<circle
							className="c-pentagrama"
							cx={11.5}
							cy={11.5}
							r={11.5}
							transform="translate(-0.476 -0.125)"
						/>
						<text
							className="r-pentagrama"
							transform="translate(27.524 15.875)">
							<tspan x={0} y={0}>
								{t('Fecha de hoy')}
							</tspan>
						</text>
					</g>
					<text
						className="s-pentagrama"
						transform="translate(60 23.21)">
						<tspan x={11.368} y={32}>
							{t('Prográmese con Grupo Amarey ')}
						</tspan>
					</text>
				</svg>
			) : view === '03-02' ? (
				<svg viewBox="18 0 414 856.142">
					<defs>
						<style>
							{
								".a-pentagrama,.q-pentagrama{fill:none;}.b-pentagrama{clip-path:url(#a-pentagrama);}.c-pentagrama{fill:#e40032;}.d-pentagrama,.i-pentagrama,.j-pentagrama{fill:#001f5f;}.e-pentagrama{fill:#c5dbf7;}.f-pentagrama{fill:url(#b-pentagrama);}.g-pentagrama,.k-pentagrama,.s-pentagrama{fill:#fff;}.h-pentagrama{fill:#c7c7cc;}.i-pentagrama{font-size:12px;}.i-pentagrama,.s-pentagrama{font-family:'Kiona-Bold';}.i-pentagrama,.k-pentagrama,.s-pentagrama{font-weight:700;}.j-pentagrama{font-size:8px;}.j-pentagrama,.o-pentagrama,.r-pentagrama{font-family:Silka-Regular, Silka;}.k-pentagrama,.o-pentagrama{font-size:16px;}.k-pentagrama{font-family:Silka-Bold, Silka;}.l-pentagrama{clip-path:url(#k-pentagrama);}.m-pentagrama,.o-pentagrama,.p-pentagrama,.r-pentagrama{fill:#182856;}.m-pentagrama{font-size:20px;}.m-pentagrama,.p-pentagrama{font-family:Silka-SemiBold, Silka;font-weight:600;}.n-pentagrama{clip-path:url(#l-pentagrama);}.p-pentagrama{font-size:27px;}.q-pentagrama{stroke:#e40032;stroke-width:3px;}.r-pentagrama{font-size:15px;}.s-pentagrama{font-size:18px;}.t-pentagrama{filter:url(#i-pentagrama);}.u-pentagrama{filter:url(#g-pentagrama);}.v-pentagrama{filter:url(#e-pentagrama);}.w-pentagrama{filter:url(#c-pentagrama);}"
							}
						</style>
						<clipPath id="a-pentagrama">
							<rect
								className="a-pentagrama"
								width={414.551}
								height={856.141}
								transform="translate(0 0)"
							/>
						</clipPath>
						<pattern
							id="b-pentagrama"
							preserveAspectRatio="xMidYMid slice"
							width="100%"
							height="100%"
							viewBox="0 0 6000 3363">
							<image
								width={6000}
								height={3363}
								xlinkHref="/images/mobile/events/image-1.webp"
							/>
						</pattern>
						<filter
							id="c-pentagrama"
							x={59.595}
							y={94.511}
							width={326.422}
							height={302.738}
							filterUnits="userSpaceOnUse">
							<feOffset dy={3} />
							<feGaussianBlur stdDeviation={3} result="d" />
							<feFlood floodOpacity={0.4} />
							<feComposite operator="in" in2="d" />
							<feComposite in="SourceGraphic" />
						</filter>
						<filter
							id="e-pentagrama"
							x={93.924}
							y={311.783}
							width={269.152}
							height={90.485}
							filterUnits="userSpaceOnUse">
							<feOffset dy={3} />
							<feGaussianBlur stdDeviation={3} result="f" />
							<feFlood floodOpacity={0.4} />
							<feComposite operator="in" in2="f" />
							<feComposite in="SourceGraphic" />
						</filter>
						<filter
							id="g-pentagrama"
							x={232.97}
							y={409.209}
							width={73}
							height={44.09}
							filterUnits="userSpaceOnUse">
							<feOffset dy={3} />
							<feGaussianBlur stdDeviation={3} result="h" />
							<feFlood floodOpacity={0.6} />
							<feComposite operator="in" in2="h" />
							<feComposite in="SourceGraphic" />
						</filter>
						<filter
							id="i-pentagrama"
							x={139.642}
							y={409.209}
							width={73}
							height={44.09}
							filterUnits="userSpaceOnUse">
							<feOffset dy={3} />
							<feGaussianBlur stdDeviation={3} result="j" />
							<feFlood floodOpacity={0.6} />
							<feComposite operator="in" in2="j" />
							<feComposite in="SourceGraphic" />
						</filter>
						<clipPath id="k-pentagrama">
							<rect
								className="a-pentagrama"
								width={322}
								height={26}
							/>
						</clipPath>
						<clipPath id="l-pentagrama">
							<rect
								className="a-pentagrama"
								width={322}
								height={160}
							/>
						</clipPath>
					</defs>
					<g transform="translate(14.806 -24.602)">
						<g transform="translate(1 24.602)">
							<g
								className="b-pentagrama"
								transform="translate(0 0)">
								<g transform="translate(436.148 1627.226) rotate(180)">
									<path
										className="c-pentagrama"
										d="M597.981,453.3l-8.16,17.3c-14.568,30.89-48.45,50.85-86.318,50.85H259.215v.836H503.5A103.193,103.193,0,0,0,555.9,508.271,88.879,88.879,0,0,0,585,481.032a79.465,79.465,0,0,0,5.7-10.107l8.312-17.624Z"
										transform="translate(-355.401 281.84)"
									/>
									<path
										className="c-pentagrama"
										d="M505.963,503.55l-5.943-12.6c-10.611-22.5-35.29-37.038-62.872-37.038H259.215V453.3H437.148a75.163,75.163,0,0,1,38.162,10.21,64.737,64.737,0,0,1,21.2,19.84,57.881,57.881,0,0,1,4.148,7.362l6.054,12.837Z"
										transform="translate(-342.462 1153.097)"
									/>
									<path
										className="d-pentagrama"
										d="M312.653,724.35,364.82,613.712c14.568-30.89,48.45-50.85,86.318-50.85H772.059v-.836H451.138a103.2,103.2,0,0,0-52.394,14.018c-15.567,9.171-27.6,22.085-34.8,37.346l-52.211,110.73.917.229"
										transform="translate(-328.725 227.667)"
									/>
								</g>
							</g>
						</g>
					</g>
					<circle
						className="e-pentagrama"
						cx={14}
						cy={14}
						r={14}
						transform="translate(308.806 574.21)"
					/>
					<circle
						className="e-pentagrama"
						cx={14}
						cy={14}
						r={14}
						transform="translate(308.806 606.21)"
					/>
					<circle
						className="e-pentagrama"
						cx={14}
						cy={14}
						r={14}
						transform="translate(357.806 574.21)"
					/>
					<circle
						className="e-pentagrama"
						cx={14}
						cy={14}
						r={14}
						transform="translate(357.806 606.21)"
					/>
					<circle
						className="e-pentagrama"
						cx={14}
						cy={14}
						r={14}
						transform="translate(258.806 705.21)"
					/>
					<rect
						className="c-pentagrama"
						width={24}
						height={3}
						rx={1.5}
						transform="translate(359.806 599.21)"
					/>
					<path
						className="d-pentagrama"
						d="M432.355,0H21.3C7.82,0-2.265,11.674.441,24.144L20.452,453.02c2.03,9.355,10.746,16.072,20.855,16.072H432.355Z"
						transform="translate(0 0.003)"
					/>
					<g
						className="w-pentagrama"
						transform="matrix(1, 0, 0, 1, 0, 0)">
						<path
							className="f-pentagrama"
							d="M308.312,19.293,285.481,217.271H115.6c-33.527,0-63.637,21.151-75.881,53.3l-5.389,14.164a19.172,19.172,0,0,1-3.835-9.893L.116,19.36C-.941,9.1,5.328,0,13.443,0H294.977c8.1,0,14.358,9.058,13.336,19.293"
							transform="translate(68.59 100.51)"
						/>
					</g>
					<g
						className="v-pentagrama"
						transform="matrix(1, 0, 0, 1, 0, 0)">
						<path
							className="g-pentagrama"
							d="M330.722,488.86l-6.631,57.507c-.854,8.56-6.566,14.978-13.34,14.978H89.066a12.141,12.141,0,0,1-9.5-5.018l5.389-14.164c12.244-32.151,42.354-53.3,75.881-53.3Z"
							transform="translate(23.35 -171.08)"
						/>
					</g>
					<g transform="translate(148.642 415.209)">
						<g
							transform="translate(93.329 0)"
							onClick={() => setView('09-02')}>
							<g
								className="u-pentagrama"
								transform="matrix(1, 0, 0, 1, -241.97, -415.21)">
								<path
									className="h-pentagrama"
									d="M55,0H30.844A30.224,30.224,0,0,0,2.708,19.187L0,26.09H23.164a31.81,31.81,0,0,0,29.771-20.6Z"
									transform="translate(241.97 415.21)"
								/>
							</g>
							<path
								className="g-pentagrama"
								d="M6.017,0l6.017,10.315H0Z"
								transform="translate(32.651 7.02) rotate(90)"
							/>
						</g>
						<g
							transform="translate(0 0)"
							onClick={() => setView('02-02')}>
							<g
								className="t-pentagrama"
								transform="matrix(1, 0, 0, 1, -148.64, -415.21)">
								<path
									className="h-pentagrama"
									d="M0,0H24.155A30.224,30.224,0,0,1,52.292,19.187L55,26.09H31.836A31.81,31.81,0,0,1,2.065,5.486Z"
									transform="translate(148.64 415.21)"
								/>
							</g>
							<path
								className="g-pentagrama"
								d="M6.017,0l6.017,10.315H0Z"
								transform="translate(22.349 19.054) rotate(-90)"
							/>
						</g>
					</g>
					<text
						className="i-pentagrama"
						transform="translate(332.806 348.031)">
						<tspan x={-136.692} y={0}>
							{'Segundo Simposio de'}
						</tspan>
						<tspan x={-69.516} y={15}>
							{'Residentes'}
						</tspan>
					</text>
					<text
						className="j-pentagrama"
						transform="translate(112.806 368.031)">
						<tspan x={66.384} y={8}>
							{'Bogotá 2 y 3 de febrero HILTON Bogotá'}
						</tspan>
					</text>
					<text
						className="k-pentagrama"
						transform="translate(136.806 87.21)">
						<tspan x={0} y={0}>
							{t('03 de febrero de 2024')}
						</tspan>
					</text>
					<g transform="translate(47.281 494.018)">
						<g
							className="l-pentagrama"
							transform="translate(14.524 50.192)">
							<g transform="translate(-140 -557)">
								<text
									className="m-pentagrama"
									transform="translate(155 557)">
									<tspan x={-13.57} y={19}>
										{t('Do')}
									</tspan>
								</text>
							</g>
							<g transform="translate(-91 -557)">
								<text
									className="m-pentagrama"
									transform="translate(155 557)">
									<tspan x={-11.2} y={19}>
										{t('Lu ')}
									</tspan>
								</text>
							</g>
							<g transform="translate(-42 -557)">
								<text
									className="m-pentagrama"
									transform="translate(155 557)">
									<tspan x={-15.36} y={19}>
										{t('Ma ')}
									</tspan>
								</text>
							</g>
							<g transform="translate(7 -557)">
								<text
									className="m-pentagrama"
									transform="translate(155 557)">
									<tspan x={-11.58} y={19}>
										{t('Mi ')}
									</tspan>
								</text>
							</g>
							<g transform="translate(56 -557)">
								<text
									className="m-pentagrama"
									transform="translate(155 557)">
									<tspan x={-11.92} y={19}>
										{t('Ju ')}
									</tspan>
								</text>
							</g>
							<g transform="translate(105 -557)">
								<text
									className="m-pentagrama"
									transform="translate(155 557)">
									<tspan x={-9.54} y={19}>
										{t('Vi ')}
									</tspan>
								</text>
							</g>
							<g transform="translate(154 -557)">
								<text
									className="m-pentagrama"
									transform="translate(155 557)">
									<tspan x={-12.43} y={19}>
										{t('Sa ')}
									</tspan>
								</text>
							</g>
						</g>
						<g
							className="n-pentagrama"
							transform="translate(14.524 81.192)">
							<g transform="translate(-140 -557)">
								<text
									className="o-pentagrama"
									transform="translate(155 561)">
									<tspan x={-9.712} y={15}>
										{'28'}
									</tspan>
								</text>
							</g>
							<g transform="translate(-91 -557)">
								<text
									className="o-pentagrama"
									transform="translate(155 561)">
									<tspan x={-9.712} y={15}>
										{'29'}
									</tspan>
								</text>
							</g>
							<g transform="translate(-42 -557)">
								<text
									className="o-pentagrama"
									transform="translate(155 561)">
									<tspan x={-9.856} y={15}>
										{'30'}
									</tspan>
								</text>
							</g>
							<g transform="translate(7 -557)">
								<text
									className="o-pentagrama"
									transform="translate(155 561)">
									<tspan x={-8.488} y={15}>
										{'31'}
									</tspan>
								</text>
							</g>
							<g transform="translate(56 -557)">
								<text
									className="o-pentagrama"
									transform="translate(155 561)">
									<tspan x={-8.096} y={15}>
										{'01'}
									</tspan>
								</text>
							</g>
							<g
								transform="translate(105 -557)"
								onClick={() => setView('02-02')}>
								<text
									className="o-pentagrama"
									transform="translate(155 561)">
									<tspan x={-9.664} y={15}>
										{'02'}
									</tspan>
								</text>
							</g>
							<g
								transform="translate(154 -557)"
								onClick={() => setView('03-02')}>
								<text
									className="o-pentagrama"
									transform="translate(155 561)">
									<tspan x={-9.856} y={15}>
										{'03'}
									</tspan>
								</text>
							</g>
							<g transform="translate(-140 -524)">
								<text
									className="o-pentagrama"
									transform="translate(155 561)">
									<tspan x={-9.832} y={15}>
										{'04'}
									</tspan>
								</text>
							</g>
							<g transform="translate(-91 -524)">
								<text
									className="o-pentagrama"
									transform="translate(155 561)">
									<tspan x={-9.84} y={15}>
										{'05'}
									</tspan>
								</text>
							</g>
							<g transform="translate(-42 -524)">
								<text
									className="o-pentagrama"
									transform="translate(155 561)">
									<tspan x={-10} y={15}>
										{'06'}
									</tspan>
								</text>
							</g>
							<g transform="translate(7 -524)">
								<text
									className="o-pentagrama"
									transform="translate(155 561)">
									<tspan x={-9.416} y={15}>
										{'07'}
									</tspan>
								</text>
							</g>
							<g transform="translate(56 -524)">
								<text
									className="o-pentagrama"
									transform="translate(155 561)">
									<tspan x={-10} y={15}>
										{'08'}
									</tspan>
								</text>
							</g>
							<g
								transform="translate(105 -524)"
								onClick={() => setView('09-02')}>
								<text
									className="o-pentagrama"
									transform="translate(155 561)">
									<tspan x={-10} y={15}>
										{'09'}
									</tspan>
								</text>
							</g>
							<g
								transform="translate(154 -524)"
								onClick={() => setView('10-02')}>
								<text
									className="o-pentagrama"
									transform="translate(155 561)">
									<tspan x={-8.584} y={15}>
										{'10'}
									</tspan>
								</text>
							</g>
							<g transform="translate(-140 -491)">
								<text
									className="o-pentagrama"
									transform="translate(155 561)">
									<tspan x={-7.216} y={15}>
										{'11'}
									</tspan>
								</text>
							</g>
							<g transform="translate(-91 -491)">
								<text
									className="o-pentagrama"
									transform="translate(155 561)">
									<tspan x={-8.296} y={15}>
										{'12'}
									</tspan>
								</text>
							</g>
							<g transform="translate(-42 -491)">
								<text
									className="o-pentagrama"
									transform="translate(155 561)">
									<tspan x={-8} y={15}>
										{'13'}
									</tspan>
								</text>
							</g>
							<g transform="translate(7 -491)">
								<text
									className="o-pentagrama"
									transform="translate(155 561)">
									<tspan x={-8.136} y={15}>
										{'14'}
									</tspan>
								</text>
							</g>
							<g transform="translate(56 -491)">
								<text
									className="o-pentagrama"
									transform="translate(155 561)">
									<tspan x={-8.472} y={15}>
										{'15'}
									</tspan>
								</text>
							</g>
							<g transform="translate(105 -491)">
								<text
									className="o-pentagrama"
									transform="translate(155 561)">
									<tspan x={-8.632} y={15}>
										{'16'}
									</tspan>
								</text>
							</g>
							<g transform="translate(154 -491)">
								<text
									className="o-pentagrama"
									transform="translate(155 561)">
									<tspan x={-8.048} y={15}>
										{'17'}
									</tspan>
								</text>
							</g>
							<g transform="translate(-140 -458)">
								<text
									className="o-pentagrama"
									transform="translate(155 561)">
									<tspan x={-8.632} y={15}>
										{'18'}
									</tspan>
								</text>
							</g>
							<g transform="translate(-91 -458)">
								<text
									className="o-pentagrama"
									transform="translate(155 561)">
									<tspan x={-8.304} y={15}>
										{'19'}
									</tspan>
								</text>
							</g>
							<g transform="translate(-42 -458)">
								<text
									className="o-pentagrama"
									transform="translate(155 561)">
									<tspan x={-9.664} y={15}>
										{'20'}
									</tspan>
								</text>
							</g>
							<g transform="translate(7 -458)">
								<text
									className="o-pentagrama"
									transform="translate(155 561)">
									<tspan x={-8.296} y={15}>
										{'21'}
									</tspan>
								</text>
							</g>
							<g transform="translate(56 -458)">
								<text
									className="o-pentagrama"
									transform="translate(155 561)">
									<tspan x={-9.376} y={15}>
										{'22'}
									</tspan>
								</text>
							</g>
							<g transform="translate(105 -458)">
								<text
									className="o-pentagrama"
									transform="translate(155 561)">
									<tspan x={-9.568} y={15}>
										{'23'}
									</tspan>
								</text>
							</g>
							<g transform="translate(154 -458)">
								<text
									className="o-pentagrama"
									transform="translate(155 561)">
									<tspan x={-8.888} y={15}>
										{'24'}
									</tspan>
								</text>
							</g>
							<g transform="translate(-140 -425)">
								<text
									className="o-pentagrama"
									transform="translate(155 561)">
									<tspan x={-9.552} y={15}>
										{'25'}
									</tspan>
								</text>
							</g>
							<g transform="translate(-91 -425)">
								<text
									className="o-pentagrama"
									transform="translate(155 561)">
									<tspan x={-9.304} y={15}>
										{'26'}
									</tspan>
								</text>
							</g>
							<g transform="translate(-42 -425)">
								<text
									className="o-pentagrama"
									transform="translate(155 561)">
									<tspan x={-9.128} y={15}>
										{'27'}
									</tspan>
								</text>
							</g>
							<g transform="translate(7 -425)">
								<text
									className="o-pentagrama"
									transform="translate(155 561)">
									<tspan x={-9.712} y={15}>
										{'28'}
									</tspan>
								</text>
							</g>
							<g
								transform="translate(56 -425)"
								onClick={() => setView('29-02')}>
								<text
									className="o-pentagrama"
									transform="translate(155 561)">
									<tspan x={-9.712} y={15}>
										{'29'}
									</tspan>
								</text>
							</g>
							<g transform="translate(105 -425)">
								<text
									className="o-pentagrama"
									transform="translate(155 561)">
									<tspan x={-8.096} y={15}>
										{'01'}
									</tspan>
								</text>
							</g>
							<g transform="translate(154 -425)">
								<text
									className="o-pentagrama"
									transform="translate(155 561)">
									<tspan x={-9.664} y={15}>
										{'02'}
									</tspan>
								</text>
							</g>
						</g>
						<text
							className="p-pentagrama"
							transform="translate(4.524 25.192)">
							<tspan x={0} y={0}>
								{t('Febrero 2024')}
							</tspan>
						</text>
						<line
							className="q-pentagrama"
							x2={342}
							transform="translate(4.524 40.192)"
						/>
						<path
							className="d-pentagrama"
							d="M9.095,0l9.095,15.591H0Z"
							transform="translate(293.111 30.68) rotate(-90)"
							onClick={() => setView('02-05')}
						/>
						<path
							className="d-pentagrama"
							d="M9.095,0l9.095,15.591H0Z"
							transform="translate(346.524 12.491) rotate(90)"
							onClick={() => setView('06-03')}
						/>
					</g>
					<g transform="translate(228.262 782.336)">
						<circle
							className="e-pentagrama"
							cx={11.5}
							cy={11.5}
							r={11.5}
							transform="translate(-0.457 -0.125)"
						/>
						<text
							className="r-pentagrama"
							transform="translate(27.543 15.875)">
							<tspan x={0} y={0}>
								{t('Fecha evento')}
							</tspan>
						</text>
					</g>
					<g transform="translate(52.281 782.336)">
						<circle
							className="c-pentagrama"
							cx={11.5}
							cy={11.5}
							r={11.5}
							transform="translate(-0.476 -0.125)"
						/>
						<text
							className="r-pentagrama"
							transform="translate(27.524 15.875)">
							<tspan x={0} y={0}>
								{t('Fecha de hoy')}
							</tspan>
						</text>
					</g>
					<text
						className="s-pentagrama"
						transform="translate(60 23.21)">
						<tspan x={11.368} y={32}>
							{t('Prográmese con Grupo Amarey ')}
						</tspan>
					</text>
				</svg>
			) : view === '09-02' ? (
				<svg viewBox="18 0 414 856.142">
					<defs>
						<style>
							{
								".a-pentagrama,.q-pentagrama{fill:none;}.b-pentagrama{clip-path:url(#a-pentagrama);}.c-pentagrama{fill:#e40032;}.d-pentagrama,.i-pentagrama,.j-pentagrama{fill:#001f5f;}.e-pentagrama{fill:#c5dbf7;}.f-pentagrama{fill:url(#b-pentagrama);}.g-pentagrama,.k-pentagrama,.s-pentagrama{fill:#fff;}.h-pentagrama{fill:#c7c7cc;}.i-pentagrama{font-size:12px;}.i-pentagrama,.s-pentagrama{font-family:'Kiona-Bold';}.i-pentagrama,.k-pentagrama,.s-pentagrama{font-weight:700;}.j-pentagrama{font-size:8px;}.j-pentagrama,.o-pentagrama,.r-pentagrama{font-family:Silka-Regular, Silka;}.k-pentagrama,.o-pentagrama{font-size:16px;}.k-pentagrama{font-family:Silka-Bold, Silka;}.l-pentagrama{clip-path:url(#k-pentagrama);}.m-pentagrama,.o-pentagrama,.p-pentagrama,.r-pentagrama{fill:#182856;}.m-pentagrama{font-size:20px;}.m-pentagrama,.p-pentagrama{font-family:Silka-SemiBold, Silka;font-weight:600;}.n-pentagrama{clip-path:url(#l-pentagrama);}.p-pentagrama{font-size:27px;}.q-pentagrama{stroke:#e40032;stroke-width:3px;}.r-pentagrama{font-size:15px;}.s-pentagrama{font-size:18px;}.t-pentagrama{filter:url(#i-pentagrama);}.u-pentagrama{filter:url(#g-pentagrama);}.v-pentagrama{filter:url(#e-pentagrama);}.w-pentagrama{filter:url(#c-pentagrama);}"
							}
						</style>
						<clipPath id="a-pentagrama">
							<rect
								className="a-pentagrama"
								width={414.551}
								height={856.141}
								transform="translate(0 0)"
							/>
						</clipPath>
						<pattern
							id="b-pentagrama"
							preserveAspectRatio="xMidYMid slice"
							width="100%"
							height="100%"
							viewBox="0 0 6000 3363">
							<image
								width={6000}
								height={3363}
								xlinkHref="/images/mobile/events/image-2.webp"
							/>
						</pattern>
						<filter
							id="c-pentagrama"
							x={59.595}
							y={94.511}
							width={326.422}
							height={302.738}
							filterUnits="userSpaceOnUse">
							<feOffset dy={3} />
							<feGaussianBlur stdDeviation={3} result="d" />
							<feFlood floodOpacity={0.4} />
							<feComposite operator="in" in2="d" />
							<feComposite in="SourceGraphic" />
						</filter>
						<filter
							id="e-pentagrama"
							x={93.924}
							y={311.783}
							width={269.152}
							height={90.485}
							filterUnits="userSpaceOnUse">
							<feOffset dy={3} />
							<feGaussianBlur stdDeviation={3} result="f" />
							<feFlood floodOpacity={0.4} />
							<feComposite operator="in" in2="f" />
							<feComposite in="SourceGraphic" />
						</filter>
						<filter
							id="g-pentagrama"
							x={232.97}
							y={409.209}
							width={73}
							height={44.09}
							filterUnits="userSpaceOnUse">
							<feOffset dy={3} />
							<feGaussianBlur stdDeviation={3} result="h" />
							<feFlood floodOpacity={0.6} />
							<feComposite operator="in" in2="h" />
							<feComposite in="SourceGraphic" />
						</filter>
						<filter
							id="i-pentagrama"
							x={139.642}
							y={409.209}
							width={73}
							height={44.09}
							filterUnits="userSpaceOnUse">
							<feOffset dy={3} />
							<feGaussianBlur stdDeviation={3} result="j" />
							<feFlood floodOpacity={0.6} />
							<feComposite operator="in" in2="j" />
							<feComposite in="SourceGraphic" />
						</filter>
						<clipPath id="k-pentagrama">
							<rect
								className="a-pentagrama"
								width={322}
								height={26}
							/>
						</clipPath>
						<clipPath id="l-pentagrama">
							<rect
								className="a-pentagrama"
								width={322}
								height={160}
							/>
						</clipPath>
					</defs>
					<g transform="translate(14.806 -24.602)">
						<g transform="translate(1 24.602)">
							<g
								className="b-pentagrama"
								transform="translate(0 0)">
								<g transform="translate(436.148 1627.226) rotate(180)">
									<path
										className="c-pentagrama"
										d="M597.981,453.3l-8.16,17.3c-14.568,30.89-48.45,50.85-86.318,50.85H259.215v.836H503.5A103.193,103.193,0,0,0,555.9,508.271,88.879,88.879,0,0,0,585,481.032a79.465,79.465,0,0,0,5.7-10.107l8.312-17.624Z"
										transform="translate(-355.401 281.84)"
									/>
									<path
										className="c-pentagrama"
										d="M505.963,503.55l-5.943-12.6c-10.611-22.5-35.29-37.038-62.872-37.038H259.215V453.3H437.148a75.163,75.163,0,0,1,38.162,10.21,64.737,64.737,0,0,1,21.2,19.84,57.881,57.881,0,0,1,4.148,7.362l6.054,12.837Z"
										transform="translate(-342.462 1153.097)"
									/>
									<path
										className="d-pentagrama"
										d="M312.653,724.35,364.82,613.712c14.568-30.89,48.45-50.85,86.318-50.85H772.059v-.836H451.138a103.2,103.2,0,0,0-52.394,14.018c-15.567,9.171-27.6,22.085-34.8,37.346l-52.211,110.73.917.229"
										transform="translate(-328.725 227.667)"
									/>
								</g>
							</g>
						</g>
					</g>
					<circle
						className="e-pentagrama"
						cx={14}
						cy={14}
						r={14}
						transform="translate(308.806 574.21)"
					/>
					<circle
						className="e-pentagrama"
						cx={14}
						cy={14}
						r={14}
						transform="translate(308.806 606.21)"
					/>
					<circle
						className="e-pentagrama"
						cx={14}
						cy={14}
						r={14}
						transform="translate(357.806 574.21)"
					/>
					<circle
						className="e-pentagrama"
						cx={14}
						cy={14}
						r={14}
						transform="translate(357.806 606.21)"
					/>
					<circle
						className="e-pentagrama"
						cx={14}
						cy={14}
						r={14}
						transform="translate(258.806 705.21)"
					/>
					<rect
						className="c-pentagrama"
						width={24}
						height={3}
						rx={1.5}
						transform="translate(311 630.21)"
					/>
					<path
						className="d-pentagrama"
						d="M432.355,0H21.3C7.82,0-2.265,11.674.441,24.144L20.452,453.02c2.03,9.355,10.746,16.072,20.855,16.072H432.355Z"
						transform="translate(0 0.003)"
					/>
					<g
						className="w-pentagrama"
						transform="matrix(1, 0, 0, 1, 0, 0)">
						<path
							className="f-pentagrama"
							d="M308.312,19.293,285.481,217.271H115.6c-33.527,0-63.637,21.151-75.881,53.3l-5.389,14.164a19.172,19.172,0,0,1-3.835-9.893L.116,19.36C-.941,9.1,5.328,0,13.443,0H294.977c8.1,0,14.358,9.058,13.336,19.293"
							transform="translate(68.59 100.51)"
						/>
					</g>
					<g
						className="v-pentagrama"
						transform="matrix(1, 0, 0, 1, 0, 0)">
						<path
							className="g-pentagrama"
							d="M330.722,488.86l-6.631,57.507c-.854,8.56-6.566,14.978-13.34,14.978H89.066a12.141,12.141,0,0,1-9.5-5.018l5.389-14.164c12.244-32.151,42.354-53.3,75.881-53.3Z"
							transform="translate(23.35 -171.08)"
						/>
					</g>
					<g transform="translate(148.642 415.209)">
						<g
							transform="translate(93.329 0)"
							onClick={() => setView('10-02')}>
							<g
								className="u-pentagrama"
								transform="matrix(1, 0, 0, 1, -241.97, -415.21)">
								<path
									className="h-pentagrama"
									d="M55,0H30.844A30.224,30.224,0,0,0,2.708,19.187L0,26.09H23.164a31.81,31.81,0,0,0,29.771-20.6Z"
									transform="translate(241.97 415.21)"
								/>
							</g>
							<path
								className="g-pentagrama"
								d="M6.017,0l6.017,10.315H0Z"
								transform="translate(32.651 7.02) rotate(90)"
							/>
						</g>
						<g
							transform="translate(0 0)"
							onClick={() => setView('03-02')}>
							<g
								className="t-pentagrama"
								transform="matrix(1, 0, 0, 1, -148.64, -415.21)">
								<path
									className="h-pentagrama"
									d="M0,0H24.155A30.224,30.224,0,0,1,52.292,19.187L55,26.09H31.836A31.81,31.81,0,0,1,2.065,5.486Z"
									transform="translate(148.64 415.21)"
								/>
							</g>
							<path
								className="g-pentagrama"
								d="M6.017,0l6.017,10.315H0Z"
								transform="translate(22.349 19.054) rotate(-90)"
							/>
						</g>
					</g>
					<text
						className="i-pentagrama"
						transform="translate(228.806 348.031)">
						<tspan x={-69.516} y={15}>
							{'I congreso de oncología'}
						</tspan>
					</text>
					<text
						className="j-pentagrama"
						transform="translate(112.806 368.031)">
						<tspan x={66.384} y={8}>
							{'Cali 9 y 10 de febrero Hotel Marriott'}
						</tspan>
					</text>
					<text
						className="k-pentagrama"
						transform="translate(136.806 87.21)">
						<tspan x={0} y={0}>
							{t('09 de febrero de 2024')}
						</tspan>
					</text>
					<g transform="translate(47.281 494.018)">
						<g
							className="l-pentagrama"
							transform="translate(14.524 50.192)">
							<g transform="translate(-140 -557)">
								<text
									className="m-pentagrama"
									transform="translate(155 557)">
									<tspan x={-13.57} y={19}>
										{t('Do')}
									</tspan>
								</text>
							</g>
							<g transform="translate(-91 -557)">
								<text
									className="m-pentagrama"
									transform="translate(155 557)">
									<tspan x={-11.2} y={19}>
										{t('Lu ')}
									</tspan>
								</text>
							</g>
							<g transform="translate(-42 -557)">
								<text
									className="m-pentagrama"
									transform="translate(155 557)">
									<tspan x={-15.36} y={19}>
										{t('Ma ')}
									</tspan>
								</text>
							</g>
							<g transform="translate(7 -557)">
								<text
									className="m-pentagrama"
									transform="translate(155 557)">
									<tspan x={-11.58} y={19}>
										{t('Mi ')}
									</tspan>
								</text>
							</g>
							<g transform="translate(56 -557)">
								<text
									className="m-pentagrama"
									transform="translate(155 557)">
									<tspan x={-11.92} y={19}>
										{t('Ju ')}
									</tspan>
								</text>
							</g>
							<g transform="translate(105 -557)">
								<text
									className="m-pentagrama"
									transform="translate(155 557)">
									<tspan x={-9.54} y={19}>
										{t('Vi ')}
									</tspan>
								</text>
							</g>
							<g transform="translate(154 -557)">
								<text
									className="m-pentagrama"
									transform="translate(155 557)">
									<tspan x={-12.43} y={19}>
										{t('Sa ')}
									</tspan>
								</text>
							</g>
						</g>
						<g
							className="n-pentagrama"
							transform="translate(14.524 81.192)">
							<g transform="translate(-140 -557)">
								<text
									className="o-pentagrama"
									transform="translate(155 561)">
									<tspan x={-9.712} y={15}>
										{'28'}
									</tspan>
								</text>
							</g>
							<g transform="translate(-91 -557)">
								<text
									className="o-pentagrama"
									transform="translate(155 561)">
									<tspan x={-9.712} y={15}>
										{'29'}
									</tspan>
								</text>
							</g>
							<g transform="translate(-42 -557)">
								<text
									className="o-pentagrama"
									transform="translate(155 561)">
									<tspan x={-9.856} y={15}>
										{'30'}
									</tspan>
								</text>
							</g>
							<g transform="translate(7 -557)">
								<text
									className="o-pentagrama"
									transform="translate(155 561)">
									<tspan x={-8.488} y={15}>
										{'31'}
									</tspan>
								</text>
							</g>
							<g transform="translate(56 -557)">
								<text
									className="o-pentagrama"
									transform="translate(155 561)">
									<tspan x={-8.096} y={15}>
										{'01'}
									</tspan>
								</text>
							</g>
							<g
								transform="translate(105 -557)"
								onClick={() => setView('02-02')}>
								<text
									className="o-pentagrama"
									transform="translate(155 561)">
									<tspan x={-9.664} y={15}>
										{'02'}
									</tspan>
								</text>
							</g>
							<g
								transform="translate(154 -557)"
								onClick={() => setView('03-02')}>
								<text
									className="o-pentagrama"
									transform="translate(155 561)">
									<tspan x={-9.856} y={15}>
										{'03'}
									</tspan>
								</text>
							</g>
							<g transform="translate(-140 -524)">
								<text
									className="o-pentagrama"
									transform="translate(155 561)">
									<tspan x={-9.832} y={15}>
										{'04'}
									</tspan>
								</text>
							</g>
							<g transform="translate(-91 -524)">
								<text
									className="o-pentagrama"
									transform="translate(155 561)">
									<tspan x={-9.84} y={15}>
										{'05'}
									</tspan>
								</text>
							</g>
							<g transform="translate(-42 -524)">
								<text
									className="o-pentagrama"
									transform="translate(155 561)">
									<tspan x={-10} y={15}>
										{'06'}
									</tspan>
								</text>
							</g>
							<g transform="translate(7 -524)">
								<text
									className="o-pentagrama"
									transform="translate(155 561)">
									<tspan x={-9.416} y={15}>
										{'07'}
									</tspan>
								</text>
							</g>
							<g transform="translate(56 -524)">
								<text
									className="o-pentagrama"
									transform="translate(155 561)">
									<tspan x={-10} y={15}>
										{'08'}
									</tspan>
								</text>
							</g>
							<g
								transform="translate(105 -524)"
								onClick={() => setView('09-02')}>
								<text
									className="o-pentagrama"
									transform="translate(155 561)">
									<tspan x={-10} y={15}>
										{'09'}
									</tspan>
								</text>
							</g>
							<g
								transform="translate(154 -524)"
								onClick={() => setView('10-02')}>
								<text
									className="o-pentagrama"
									transform="translate(155 561)">
									<tspan x={-8.584} y={15}>
										{'10'}
									</tspan>
								</text>
							</g>
							<g transform="translate(-140 -491)">
								<text
									className="o-pentagrama"
									transform="translate(155 561)">
									<tspan x={-7.216} y={15}>
										{'11'}
									</tspan>
								</text>
							</g>
							<g transform="translate(-91 -491)">
								<text
									className="o-pentagrama"
									transform="translate(155 561)">
									<tspan x={-8.296} y={15}>
										{'12'}
									</tspan>
								</text>
							</g>
							<g transform="translate(-42 -491)">
								<text
									className="o-pentagrama"
									transform="translate(155 561)">
									<tspan x={-8} y={15}>
										{'13'}
									</tspan>
								</text>
							</g>
							<g transform="translate(7 -491)">
								<text
									className="o-pentagrama"
									transform="translate(155 561)">
									<tspan x={-8.136} y={15}>
										{'14'}
									</tspan>
								</text>
							</g>
							<g transform="translate(56 -491)">
								<text
									className="o-pentagrama"
									transform="translate(155 561)">
									<tspan x={-8.472} y={15}>
										{'15'}
									</tspan>
								</text>
							</g>
							<g transform="translate(105 -491)">
								<text
									className="o-pentagrama"
									transform="translate(155 561)">
									<tspan x={-8.632} y={15}>
										{'16'}
									</tspan>
								</text>
							</g>
							<g transform="translate(154 -491)">
								<text
									className="o-pentagrama"
									transform="translate(155 561)">
									<tspan x={-8.048} y={15}>
										{'17'}
									</tspan>
								</text>
							</g>
							<g transform="translate(-140 -458)">
								<text
									className="o-pentagrama"
									transform="translate(155 561)">
									<tspan x={-8.632} y={15}>
										{'18'}
									</tspan>
								</text>
							</g>
							<g transform="translate(-91 -458)">
								<text
									className="o-pentagrama"
									transform="translate(155 561)">
									<tspan x={-8.304} y={15}>
										{'19'}
									</tspan>
								</text>
							</g>
							<g transform="translate(-42 -458)">
								<text
									className="o-pentagrama"
									transform="translate(155 561)">
									<tspan x={-9.664} y={15}>
										{'20'}
									</tspan>
								</text>
							</g>
							<g transform="translate(7 -458)">
								<text
									className="o-pentagrama"
									transform="translate(155 561)">
									<tspan x={-8.296} y={15}>
										{'21'}
									</tspan>
								</text>
							</g>
							<g transform="translate(56 -458)">
								<text
									className="o-pentagrama"
									transform="translate(155 561)">
									<tspan x={-9.376} y={15}>
										{'22'}
									</tspan>
								</text>
							</g>
							<g transform="translate(105 -458)">
								<text
									className="o-pentagrama"
									transform="translate(155 561)">
									<tspan x={-9.568} y={15}>
										{'23'}
									</tspan>
								</text>
							</g>
							<g transform="translate(154 -458)">
								<text
									className="o-pentagrama"
									transform="translate(155 561)">
									<tspan x={-8.888} y={15}>
										{'24'}
									</tspan>
								</text>
							</g>
							<g transform="translate(-140 -425)">
								<text
									className="o-pentagrama"
									transform="translate(155 561)">
									<tspan x={-9.552} y={15}>
										{'25'}
									</tspan>
								</text>
							</g>
							<g transform="translate(-91 -425)">
								<text
									className="o-pentagrama"
									transform="translate(155 561)">
									<tspan x={-9.304} y={15}>
										{'26'}
									</tspan>
								</text>
							</g>
							<g transform="translate(-42 -425)">
								<text
									className="o-pentagrama"
									transform="translate(155 561)">
									<tspan x={-9.128} y={15}>
										{'27'}
									</tspan>
								</text>
							</g>
							<g transform="translate(7 -425)">
								<text
									className="o-pentagrama"
									transform="translate(155 561)">
									<tspan x={-9.712} y={15}>
										{'28'}
									</tspan>
								</text>
							</g>
							<g
								transform="translate(56 -425)"
								onClick={() => setView('29-02')}>
								<text
									className="o-pentagrama"
									transform="translate(155 561)">
									<tspan x={-9.712} y={15}>
										{'29'}
									</tspan>
								</text>
							</g>
							<g transform="translate(105 -425)">
								<text
									className="o-pentagrama"
									transform="translate(155 561)">
									<tspan x={-8.096} y={15}>
										{'01'}
									</tspan>
								</text>
							</g>
							<g transform="translate(154 -425)">
								<text
									className="o-pentagrama"
									transform="translate(155 561)">
									<tspan x={-9.664} y={15}>
										{'02'}
									</tspan>
								</text>
							</g>
						</g>
						<text
							className="p-pentagrama"
							transform="translate(4.524 25.192)">
							<tspan x={0} y={0}>
								{t('Febrero 2024')}
							</tspan>
						</text>
						<line
							className="q-pentagrama"
							x2={342}
							transform="translate(4.524 40.192)"
						/>
						<path
							className="d-pentagrama"
							d="M9.095,0l9.095,15.591H0Z"
							transform="translate(293.111 30.68) rotate(-90)"
							onClick={() => setView('02-05')}
						/>
						<path
							className="d-pentagrama"
							d="M9.095,0l9.095,15.591H0Z"
							transform="translate(346.524 12.491) rotate(90)"
							onClick={() => setView('06-03')}
						/>
					</g>
					<g transform="translate(228.262 782.336)">
						<circle
							className="e-pentagrama"
							cx={11.5}
							cy={11.5}
							r={11.5}
							transform="translate(-0.457 -0.125)"
						/>
						<text
							className="r-pentagrama"
							transform="translate(27.543 15.875)">
							<tspan x={0} y={0}>
								{t('Fecha evento')}
							</tspan>
						</text>
					</g>
					<g transform="translate(52.281 782.336)">
						<circle
							className="c-pentagrama"
							cx={11.5}
							cy={11.5}
							r={11.5}
							transform="translate(-0.476 -0.125)"
						/>
						<text
							className="r-pentagrama"
							transform="translate(27.524 15.875)">
							<tspan x={0} y={0}>
								{t('Fecha de hoy')}
							</tspan>
						</text>
					</g>
					<text
						className="s-pentagrama"
						transform="translate(60 23.21)">
						<tspan x={11.368} y={32}>
							{t('Prográmese con Grupo Amarey ')}
						</tspan>
					</text>
				</svg>
			) : view === '10-02' ? (
				<svg viewBox="18 0 414 856.142">
					<defs>
						<style>
							{
								".a-pentagrama,.q-pentagrama{fill:none;}.b-pentagrama{clip-path:url(#a-pentagrama);}.c-pentagrama{fill:#e40032;}.d-pentagrama,.i-pentagrama,.j-pentagrama{fill:#001f5f;}.e-pentagrama{fill:#c5dbf7;}.f-pentagrama{fill:url(#b-pentagrama);}.g-pentagrama,.k-pentagrama,.s-pentagrama{fill:#fff;}.h-pentagrama{fill:#c7c7cc;}.i-pentagrama{font-size:12px;}.i-pentagrama,.s-pentagrama{font-family:'Kiona-Bold';}.i-pentagrama,.k-pentagrama,.s-pentagrama{font-weight:700;}.j-pentagrama{font-size:8px;}.j-pentagrama,.o-pentagrama,.r-pentagrama{font-family:Silka-Regular, Silka;}.k-pentagrama,.o-pentagrama{font-size:16px;}.k-pentagrama{font-family:Silka-Bold, Silka;}.l-pentagrama{clip-path:url(#k-pentagrama);}.m-pentagrama,.o-pentagrama,.p-pentagrama,.r-pentagrama{fill:#182856;}.m-pentagrama{font-size:20px;}.m-pentagrama,.p-pentagrama{font-family:Silka-SemiBold, Silka;font-weight:600;}.n-pentagrama{clip-path:url(#l-pentagrama);}.p-pentagrama{font-size:27px;}.q-pentagrama{stroke:#e40032;stroke-width:3px;}.r-pentagrama{font-size:15px;}.s-pentagrama{font-size:18px;}.t-pentagrama{filter:url(#i-pentagrama);}.u-pentagrama{filter:url(#g-pentagrama);}.v-pentagrama{filter:url(#e-pentagrama);}.w-pentagrama{filter:url(#c-pentagrama);}"
							}
						</style>
						<clipPath id="a-pentagrama">
							<rect
								className="a-pentagrama"
								width={414.551}
								height={856.141}
								transform="translate(0 0)"
							/>
						</clipPath>
						<pattern
							id="b-pentagrama"
							preserveAspectRatio="xMidYMid slice"
							width="100%"
							height="100%"
							viewBox="0 0 6000 3363">
							<image
								width={6000}
								height={3363}
								xlinkHref="/images/mobile/events/image-2.webp"
							/>
						</pattern>
						<filter
							id="c-pentagrama"
							x={59.595}
							y={94.511}
							width={326.422}
							height={302.738}
							filterUnits="userSpaceOnUse">
							<feOffset dy={3} />
							<feGaussianBlur stdDeviation={3} result="d" />
							<feFlood floodOpacity={0.4} />
							<feComposite operator="in" in2="d" />
							<feComposite in="SourceGraphic" />
						</filter>
						<filter
							id="e-pentagrama"
							x={93.924}
							y={311.783}
							width={269.152}
							height={90.485}
							filterUnits="userSpaceOnUse">
							<feOffset dy={3} />
							<feGaussianBlur stdDeviation={3} result="f" />
							<feFlood floodOpacity={0.4} />
							<feComposite operator="in" in2="f" />
							<feComposite in="SourceGraphic" />
						</filter>
						<filter
							id="g-pentagrama"
							x={232.97}
							y={409.209}
							width={73}
							height={44.09}
							filterUnits="userSpaceOnUse">
							<feOffset dy={3} />
							<feGaussianBlur stdDeviation={3} result="h" />
							<feFlood floodOpacity={0.6} />
							<feComposite operator="in" in2="h" />
							<feComposite in="SourceGraphic" />
						</filter>
						<filter
							id="i-pentagrama"
							x={139.642}
							y={409.209}
							width={73}
							height={44.09}
							filterUnits="userSpaceOnUse">
							<feOffset dy={3} />
							<feGaussianBlur stdDeviation={3} result="j" />
							<feFlood floodOpacity={0.6} />
							<feComposite operator="in" in2="j" />
							<feComposite in="SourceGraphic" />
						</filter>
						<clipPath id="k-pentagrama">
							<rect
								className="a-pentagrama"
								width={322}
								height={26}
							/>
						</clipPath>
						<clipPath id="l-pentagrama">
							<rect
								className="a-pentagrama"
								width={322}
								height={160}
							/>
						</clipPath>
					</defs>
					<g transform="translate(14.806 -24.602)">
						<g transform="translate(1 24.602)">
							<g
								className="b-pentagrama"
								transform="translate(0 0)">
								<g transform="translate(436.148 1627.226) rotate(180)">
									<path
										className="c-pentagrama"
										d="M597.981,453.3l-8.16,17.3c-14.568,30.89-48.45,50.85-86.318,50.85H259.215v.836H503.5A103.193,103.193,0,0,0,555.9,508.271,88.879,88.879,0,0,0,585,481.032a79.465,79.465,0,0,0,5.7-10.107l8.312-17.624Z"
										transform="translate(-355.401 281.84)"
									/>
									<path
										className="c-pentagrama"
										d="M505.963,503.55l-5.943-12.6c-10.611-22.5-35.29-37.038-62.872-37.038H259.215V453.3H437.148a75.163,75.163,0,0,1,38.162,10.21,64.737,64.737,0,0,1,21.2,19.84,57.881,57.881,0,0,1,4.148,7.362l6.054,12.837Z"
										transform="translate(-342.462 1153.097)"
									/>
									<path
										className="d-pentagrama"
										d="M312.653,724.35,364.82,613.712c14.568-30.89,48.45-50.85,86.318-50.85H772.059v-.836H451.138a103.2,103.2,0,0,0-52.394,14.018c-15.567,9.171-27.6,22.085-34.8,37.346l-52.211,110.73.917.229"
										transform="translate(-328.725 227.667)"
									/>
								</g>
							</g>
						</g>
					</g>
					<circle
						className="e-pentagrama"
						cx={14}
						cy={14}
						r={14}
						transform="translate(308.806 574.21)"
					/>
					<circle
						className="e-pentagrama"
						cx={14}
						cy={14}
						r={14}
						transform="translate(308.806 606.21)"
					/>
					<circle
						className="e-pentagrama"
						cx={14}
						cy={14}
						r={14}
						transform="translate(357.806 574.21)"
					/>
					<circle
						className="e-pentagrama"
						cx={14}
						cy={14}
						r={14}
						transform="translate(357.806 606.21)"
					/>
					<circle
						className="e-pentagrama"
						cx={14}
						cy={14}
						r={14}
						transform="translate(258.806 705.21)"
					/>
					<rect
						className="c-pentagrama"
						width={24}
						height={3}
						rx={1.5}
						transform="translate(361 630.21)"
					/>
					<path
						className="d-pentagrama"
						d="M432.355,0H21.3C7.82,0-2.265,11.674.441,24.144L20.452,453.02c2.03,9.355,10.746,16.072,20.855,16.072H432.355Z"
						transform="translate(0 0.003)"
					/>
					<g
						className="w-pentagrama"
						transform="matrix(1, 0, 0, 1, 0, 0)">
						<path
							className="f-pentagrama"
							d="M308.312,19.293,285.481,217.271H115.6c-33.527,0-63.637,21.151-75.881,53.3l-5.389,14.164a19.172,19.172,0,0,1-3.835-9.893L.116,19.36C-.941,9.1,5.328,0,13.443,0H294.977c8.1,0,14.358,9.058,13.336,19.293"
							transform="translate(68.59 100.51)"
						/>
					</g>
					<g
						className="v-pentagrama"
						transform="matrix(1, 0, 0, 1, 0, 0)">
						<path
							className="g-pentagrama"
							d="M330.722,488.86l-6.631,57.507c-.854,8.56-6.566,14.978-13.34,14.978H89.066a12.141,12.141,0,0,1-9.5-5.018l5.389-14.164c12.244-32.151,42.354-53.3,75.881-53.3Z"
							transform="translate(23.35 -171.08)"
						/>
					</g>
					<g transform="translate(148.642 415.209)">
						<g
							transform="translate(93.329 0)"
							onClick={() => setView('29-02')}>
							<g
								className="u-pentagrama"
								transform="matrix(1, 0, 0, 1, -241.97, -415.21)">
								<path
									className="h-pentagrama"
									d="M55,0H30.844A30.224,30.224,0,0,0,2.708,19.187L0,26.09H23.164a31.81,31.81,0,0,0,29.771-20.6Z"
									transform="translate(241.97 415.21)"
								/>
							</g>
							<path
								className="g-pentagrama"
								d="M6.017,0l6.017,10.315H0Z"
								transform="translate(32.651 7.02) rotate(90)"
							/>
						</g>
						<g
							transform="translate(0 0)"
							onClick={() => setView('09-02')}>
							<g
								className="t-pentagrama"
								transform="matrix(1, 0, 0, 1, -148.64, -415.21)">
								<path
									className="h-pentagrama"
									d="M0,0H24.155A30.224,30.224,0,0,1,52.292,19.187L55,26.09H31.836A31.81,31.81,0,0,1,2.065,5.486Z"
									transform="translate(148.64 415.21)"
								/>
							</g>
							<path
								className="g-pentagrama"
								d="M6.017,0l6.017,10.315H0Z"
								transform="translate(22.349 19.054) rotate(-90)"
							/>
						</g>
					</g>
					<text
						className="i-pentagrama"
						transform="translate(228.806 348.031)">
						<tspan x={-69.516} y={15}>
							{'I congreso de oncología'}
						</tspan>
					</text>
					<text
						className="j-pentagrama"
						transform="translate(112.806 368.031)">
						<tspan x={66.384} y={8}>
							{'Cali 9 y 10 de febrero Hotel Marriott'}
						</tspan>
					</text>
					<text
						className="k-pentagrama"
						transform="translate(136.806 87.21)">
						<tspan x={0} y={0}>
							{t('10 de febrero de 2024')}
						</tspan>
					</text>
					<g transform="translate(47.281 494.018)">
						<g
							className="l-pentagrama"
							transform="translate(14.524 50.192)">
							<g transform="translate(-140 -557)">
								<text
									className="m-pentagrama"
									transform="translate(155 557)">
									<tspan x={-13.57} y={19}>
										{t('Do')}
									</tspan>
								</text>
							</g>
							<g transform="translate(-91 -557)">
								<text
									className="m-pentagrama"
									transform="translate(155 557)">
									<tspan x={-11.2} y={19}>
										{t('Lu ')}
									</tspan>
								</text>
							</g>
							<g transform="translate(-42 -557)">
								<text
									className="m-pentagrama"
									transform="translate(155 557)">
									<tspan x={-15.36} y={19}>
										{t('Ma ')}
									</tspan>
								</text>
							</g>
							<g transform="translate(7 -557)">
								<text
									className="m-pentagrama"
									transform="translate(155 557)">
									<tspan x={-11.58} y={19}>
										{t('Mi ')}
									</tspan>
								</text>
							</g>
							<g transform="translate(56 -557)">
								<text
									className="m-pentagrama"
									transform="translate(155 557)">
									<tspan x={-11.92} y={19}>
										{t('Ju ')}
									</tspan>
								</text>
							</g>
							<g transform="translate(105 -557)">
								<text
									className="m-pentagrama"
									transform="translate(155 557)">
									<tspan x={-9.54} y={19}>
										{t('Vi ')}
									</tspan>
								</text>
							</g>
							<g transform="translate(154 -557)">
								<text
									className="m-pentagrama"
									transform="translate(155 557)">
									<tspan x={-12.43} y={19}>
										{t('Sa ')}
									</tspan>
								</text>
							</g>
						</g>
						<g
							className="n-pentagrama"
							transform="translate(14.524 81.192)">
							<g transform="translate(-140 -557)">
								<text
									className="o-pentagrama"
									transform="translate(155 561)">
									<tspan x={-9.712} y={15}>
										{'28'}
									</tspan>
								</text>
							</g>
							<g transform="translate(-91 -557)">
								<text
									className="o-pentagrama"
									transform="translate(155 561)">
									<tspan x={-9.712} y={15}>
										{'29'}
									</tspan>
								</text>
							</g>
							<g transform="translate(-42 -557)">
								<text
									className="o-pentagrama"
									transform="translate(155 561)">
									<tspan x={-9.856} y={15}>
										{'30'}
									</tspan>
								</text>
							</g>
							<g transform="translate(7 -557)">
								<text
									className="o-pentagrama"
									transform="translate(155 561)">
									<tspan x={-8.488} y={15}>
										{'31'}
									</tspan>
								</text>
							</g>
							<g transform="translate(56 -557)">
								<text
									className="o-pentagrama"
									transform="translate(155 561)">
									<tspan x={-8.096} y={15}>
										{'01'}
									</tspan>
								</text>
							</g>
							<g
								transform="translate(105 -557)"
								onClick={() => setView('02-02')}>
								<text
									className="o-pentagrama"
									transform="translate(155 561)">
									<tspan x={-9.664} y={15}>
										{'02'}
									</tspan>
								</text>
							</g>
							<g
								transform="translate(154 -557)"
								onClick={() => setView('03-02')}>
								<text
									className="o-pentagrama"
									transform="translate(155 561)">
									<tspan x={-9.856} y={15}>
										{'03'}
									</tspan>
								</text>
							</g>
							<g transform="translate(-140 -524)">
								<text
									className="o-pentagrama"
									transform="translate(155 561)">
									<tspan x={-9.832} y={15}>
										{'04'}
									</tspan>
								</text>
							</g>
							<g transform="translate(-91 -524)">
								<text
									className="o-pentagrama"
									transform="translate(155 561)">
									<tspan x={-9.84} y={15}>
										{'05'}
									</tspan>
								</text>
							</g>
							<g transform="translate(-42 -524)">
								<text
									className="o-pentagrama"
									transform="translate(155 561)">
									<tspan x={-10} y={15}>
										{'06'}
									</tspan>
								</text>
							</g>
							<g transform="translate(7 -524)">
								<text
									className="o-pentagrama"
									transform="translate(155 561)">
									<tspan x={-9.416} y={15}>
										{'07'}
									</tspan>
								</text>
							</g>
							<g transform="translate(56 -524)">
								<text
									className="o-pentagrama"
									transform="translate(155 561)">
									<tspan x={-10} y={15}>
										{'08'}
									</tspan>
								</text>
							</g>
							<g
								transform="translate(105 -524)"
								onClick={() => setView('09-02')}>
								<text
									className="o-pentagrama"
									transform="translate(155 561)">
									<tspan x={-10} y={15}>
										{'09'}
									</tspan>
								</text>
							</g>
							<g
								transform="translate(154 -524)"
								onClick={() => setView('10-02')}>
								<text
									className="o-pentagrama"
									transform="translate(155 561)">
									<tspan x={-8.584} y={15}>
										{'10'}
									</tspan>
								</text>
							</g>
							<g transform="translate(-140 -491)">
								<text
									className="o-pentagrama"
									transform="translate(155 561)">
									<tspan x={-7.216} y={15}>
										{'11'}
									</tspan>
								</text>
							</g>
							<g transform="translate(-91 -491)">
								<text
									className="o-pentagrama"
									transform="translate(155 561)">
									<tspan x={-8.296} y={15}>
										{'12'}
									</tspan>
								</text>
							</g>
							<g transform="translate(-42 -491)">
								<text
									className="o-pentagrama"
									transform="translate(155 561)">
									<tspan x={-8} y={15}>
										{'13'}
									</tspan>
								</text>
							</g>
							<g transform="translate(7 -491)">
								<text
									className="o-pentagrama"
									transform="translate(155 561)">
									<tspan x={-8.136} y={15}>
										{'14'}
									</tspan>
								</text>
							</g>
							<g transform="translate(56 -491)">
								<text
									className="o-pentagrama"
									transform="translate(155 561)">
									<tspan x={-8.472} y={15}>
										{'15'}
									</tspan>
								</text>
							</g>
							<g transform="translate(105 -491)">
								<text
									className="o-pentagrama"
									transform="translate(155 561)">
									<tspan x={-8.632} y={15}>
										{'16'}
									</tspan>
								</text>
							</g>
							<g transform="translate(154 -491)">
								<text
									className="o-pentagrama"
									transform="translate(155 561)">
									<tspan x={-8.048} y={15}>
										{'17'}
									</tspan>
								</text>
							</g>
							<g transform="translate(-140 -458)">
								<text
									className="o-pentagrama"
									transform="translate(155 561)">
									<tspan x={-8.632} y={15}>
										{'18'}
									</tspan>
								</text>
							</g>
							<g transform="translate(-91 -458)">
								<text
									className="o-pentagrama"
									transform="translate(155 561)">
									<tspan x={-8.304} y={15}>
										{'19'}
									</tspan>
								</text>
							</g>
							<g transform="translate(-42 -458)">
								<text
									className="o-pentagrama"
									transform="translate(155 561)">
									<tspan x={-9.664} y={15}>
										{'20'}
									</tspan>
								</text>
							</g>
							<g transform="translate(7 -458)">
								<text
									className="o-pentagrama"
									transform="translate(155 561)">
									<tspan x={-8.296} y={15}>
										{'21'}
									</tspan>
								</text>
							</g>
							<g transform="translate(56 -458)">
								<text
									className="o-pentagrama"
									transform="translate(155 561)">
									<tspan x={-9.376} y={15}>
										{'22'}
									</tspan>
								</text>
							</g>
							<g transform="translate(105 -458)">
								<text
									className="o-pentagrama"
									transform="translate(155 561)">
									<tspan x={-9.568} y={15}>
										{'23'}
									</tspan>
								</text>
							</g>
							<g transform="translate(154 -458)">
								<text
									className="o-pentagrama"
									transform="translate(155 561)">
									<tspan x={-8.888} y={15}>
										{'24'}
									</tspan>
								</text>
							</g>
							<g transform="translate(-140 -425)">
								<text
									className="o-pentagrama"
									transform="translate(155 561)">
									<tspan x={-9.552} y={15}>
										{'25'}
									</tspan>
								</text>
							</g>
							<g transform="translate(-91 -425)">
								<text
									className="o-pentagrama"
									transform="translate(155 561)">
									<tspan x={-9.304} y={15}>
										{'26'}
									</tspan>
								</text>
							</g>
							<g transform="translate(-42 -425)">
								<text
									className="o-pentagrama"
									transform="translate(155 561)">
									<tspan x={-9.128} y={15}>
										{'27'}
									</tspan>
								</text>
							</g>
							<g transform="translate(7 -425)">
								<text
									className="o-pentagrama"
									transform="translate(155 561)">
									<tspan x={-9.712} y={15}>
										{'28'}
									</tspan>
								</text>
							</g>
							<g
								transform="translate(56 -425)"
								onClick={() => setView('29-02')}>
								<text
									className="o-pentagrama"
									transform="translate(155 561)">
									<tspan x={-9.712} y={15}>
										{'29'}
									</tspan>
								</text>
							</g>
							<g transform="translate(105 -425)">
								<text
									className="o-pentagrama"
									transform="translate(155 561)">
									<tspan x={-8.096} y={15}>
										{'01'}
									</tspan>
								</text>
							</g>
							<g transform="translate(154 -425)">
								<text
									className="o-pentagrama"
									transform="translate(155 561)">
									<tspan x={-9.664} y={15}>
										{'02'}
									</tspan>
								</text>
							</g>
						</g>
						<text
							className="p-pentagrama"
							transform="translate(4.524 25.192)">
							<tspan x={0} y={0}>
								{t('Febrero 2024')}
							</tspan>
						</text>
						<line
							className="q-pentagrama"
							x2={342}
							transform="translate(4.524 40.192)"
						/>
						<path
							className="d-pentagrama"
							d="M9.095,0l9.095,15.591H0Z"
							transform="translate(293.111 30.68) rotate(-90)"
							onClick={() => setView('02-05')}
						/>
						<path
							className="d-pentagrama"
							d="M9.095,0l9.095,15.591H0Z"
							transform="translate(346.524 12.491) rotate(90)"
							onClick={() => setView('06-03')}
						/>
					</g>
					<g transform="translate(228.262 782.336)">
						<circle
							className="e-pentagrama"
							cx={11.5}
							cy={11.5}
							r={11.5}
							transform="translate(-0.457 -0.125)"
						/>
						<text
							className="r-pentagrama"
							transform="translate(27.543 15.875)">
							<tspan x={0} y={0}>
								{t('Fecha evento')}
							</tspan>
						</text>
					</g>
					<g transform="translate(52.281 782.336)">
						<circle
							className="c-pentagrama"
							cx={11.5}
							cy={11.5}
							r={11.5}
							transform="translate(-0.476 -0.125)"
						/>
						<text
							className="r-pentagrama"
							transform="translate(27.524 15.875)">
							<tspan x={0} y={0}>
								{t('Fecha de hoy')}
							</tspan>
						</text>
					</g>
					<text
						className="s-pentagrama"
						transform="translate(60 23.21)">
						<tspan x={11.368} y={32}>
							{t('Prográmese con Grupo Amarey ')}
						</tspan>
					</text>
				</svg>
			) : view === '29-02' ? (
				<svg viewBox="18 0 414 856.142">
					<defs>
						<style>
							{
								".a-pentagrama,.q-pentagrama{fill:none;}.b-pentagrama{clip-path:url(#a-pentagrama);}.c-pentagrama{fill:#e40032;}.d-pentagrama,.i-pentagrama,.j-pentagrama{fill:#001f5f;}.e-pentagrama{fill:#c5dbf7;}.f-pentagrama{fill:url(#b-pentagrama);}.g-pentagrama,.k-pentagrama,.s-pentagrama{fill:#fff;}.h-pentagrama{fill:#c7c7cc;}.i-pentagrama{font-size:12px;}.i-pentagrama,.s-pentagrama{font-family:'Kiona-Bold';}.i-pentagrama,.k-pentagrama,.s-pentagrama{font-weight:700;}.j-pentagrama{font-size:8px;}.j-pentagrama,.o-pentagrama,.r-pentagrama{font-family:Silka-Regular, Silka;}.k-pentagrama,.o-pentagrama{font-size:16px;}.k-pentagrama{font-family:Silka-Bold, Silka;}.l-pentagrama{clip-path:url(#k-pentagrama);}.m-pentagrama,.o-pentagrama,.p-pentagrama,.r-pentagrama{fill:#182856;}.m-pentagrama{font-size:20px;}.m-pentagrama,.p-pentagrama{font-family:Silka-SemiBold, Silka;font-weight:600;}.n-pentagrama{clip-path:url(#l-pentagrama);}.p-pentagrama{font-size:27px;}.q-pentagrama{stroke:#e40032;stroke-width:3px;}.r-pentagrama{font-size:15px;}.s-pentagrama{font-size:18px;}.t-pentagrama{filter:url(#i-pentagrama);}.u-pentagrama{filter:url(#g-pentagrama);}.v-pentagrama{filter:url(#e-pentagrama);}.w-pentagrama{filter:url(#c-pentagrama);}"
							}
						</style>
						<clipPath id="a-pentagrama">
							<rect
								className="a-pentagrama"
								width={414.551}
								height={856.141}
								transform="translate(0 0)"
							/>
						</clipPath>
						<pattern
							id="b-pentagrama"
							preserveAspectRatio="xMidYMid slice"
							width="100%"
							height="100%"
							viewBox="0 0 6000 3363">
							<image
								width={6000}
								height={3363}
								xlinkHref="/images/mobile/events/image-3.webp"
							/>
						</pattern>
						<filter
							id="c-pentagrama"
							x={59.595}
							y={94.511}
							width={326.422}
							height={302.738}
							filterUnits="userSpaceOnUse">
							<feOffset dy={3} />
							<feGaussianBlur stdDeviation={3} result="d" />
							<feFlood floodOpacity={0.4} />
							<feComposite operator="in" in2="d" />
							<feComposite in="SourceGraphic" />
						</filter>
						<filter
							id="e-pentagrama"
							x={93.924}
							y={311.783}
							width={269.152}
							height={90.485}
							filterUnits="userSpaceOnUse">
							<feOffset dy={3} />
							<feGaussianBlur stdDeviation={3} result="f" />
							<feFlood floodOpacity={0.4} />
							<feComposite operator="in" in2="f" />
							<feComposite in="SourceGraphic" />
						</filter>
						<filter
							id="g-pentagrama"
							x={232.97}
							y={409.209}
							width={73}
							height={44.09}
							filterUnits="userSpaceOnUse">
							<feOffset dy={3} />
							<feGaussianBlur stdDeviation={3} result="h" />
							<feFlood floodOpacity={0.6} />
							<feComposite operator="in" in2="h" />
							<feComposite in="SourceGraphic" />
						</filter>
						<filter
							id="i-pentagrama"
							x={139.642}
							y={409.209}
							width={73}
							height={44.09}
							filterUnits="userSpaceOnUse">
							<feOffset dy={3} />
							<feGaussianBlur stdDeviation={3} result="j" />
							<feFlood floodOpacity={0.6} />
							<feComposite operator="in" in2="j" />
							<feComposite in="SourceGraphic" />
						</filter>
						<clipPath id="k-pentagrama">
							<rect
								className="a-pentagrama"
								width={322}
								height={26}
							/>
						</clipPath>
						<clipPath id="l-pentagrama">
							<rect
								className="a-pentagrama"
								width={322}
								height={160}
							/>
						</clipPath>
					</defs>
					<g transform="translate(14.806 -24.602)">
						<g transform="translate(1 24.602)">
							<g
								className="b-pentagrama"
								transform="translate(0 0)">
								<g transform="translate(436.148 1627.226) rotate(180)">
									<path
										className="c-pentagrama"
										d="M597.981,453.3l-8.16,17.3c-14.568,30.89-48.45,50.85-86.318,50.85H259.215v.836H503.5A103.193,103.193,0,0,0,555.9,508.271,88.879,88.879,0,0,0,585,481.032a79.465,79.465,0,0,0,5.7-10.107l8.312-17.624Z"
										transform="translate(-355.401 281.84)"
									/>
									<path
										className="c-pentagrama"
										d="M505.963,503.55l-5.943-12.6c-10.611-22.5-35.29-37.038-62.872-37.038H259.215V453.3H437.148a75.163,75.163,0,0,1,38.162,10.21,64.737,64.737,0,0,1,21.2,19.84,57.881,57.881,0,0,1,4.148,7.362l6.054,12.837Z"
										transform="translate(-342.462 1153.097)"
									/>
									<path
										className="d-pentagrama"
										d="M312.653,724.35,364.82,613.712c14.568-30.89,48.45-50.85,86.318-50.85H772.059v-.836H451.138a103.2,103.2,0,0,0-52.394,14.018c-15.567,9.171-27.6,22.085-34.8,37.346l-52.211,110.73.917.229"
										transform="translate(-328.725 227.667)"
									/>
								</g>
							</g>
						</g>
					</g>
					<circle
						className="e-pentagrama"
						cx={14}
						cy={14}
						r={14}
						transform="translate(308.806 574.21)"
					/>
					<circle
						className="e-pentagrama"
						cx={14}
						cy={14}
						r={14}
						transform="translate(308.806 606.21)"
					/>
					<circle
						className="e-pentagrama"
						cx={14}
						cy={14}
						r={14}
						transform="translate(357.806 574.21)"
					/>
					<circle
						className="e-pentagrama"
						cx={14}
						cy={14}
						r={14}
						transform="translate(357.806 606.21)"
					/>
					<circle
						className="e-pentagrama"
						cx={14}
						cy={14}
						r={14}
						transform="translate(258.806 705.21)"
					/>
					<rect
						className="c-pentagrama"
						width={24}
						height={3}
						rx={1.5}
						transform="translate(260 730)"
					/>
					<path
						className="d-pentagrama"
						d="M432.355,0H21.3C7.82,0-2.265,11.674.441,24.144L20.452,453.02c2.03,9.355,10.746,16.072,20.855,16.072H432.355Z"
						transform="translate(0 0.003)"
					/>
					<g
						className="w-pentagrama"
						transform="matrix(1, 0, 0, 1, 0, 0)">
						<path
							className="f-pentagrama"
							d="M308.312,19.293,285.481,217.271H115.6c-33.527,0-63.637,21.151-75.881,53.3l-5.389,14.164a19.172,19.172,0,0,1-3.835-9.893L.116,19.36C-.941,9.1,5.328,0,13.443,0H294.977c8.1,0,14.358,9.058,13.336,19.293"
							transform="translate(68.59 100.51)"
						/>
					</g>
					<g
						className="v-pentagrama"
						transform="matrix(1, 0, 0, 1, 0, 0)">
						<path
							className="g-pentagrama"
							d="M330.722,488.86l-6.631,57.507c-.854,8.56-6.566,14.978-13.34,14.978H89.066a12.141,12.141,0,0,1-9.5-5.018l5.389-14.164c12.244-32.151,42.354-53.3,75.881-53.3Z"
							transform="translate(23.35 -171.08)"
						/>
					</g>
					<g transform="translate(148.642 415.209)">
						<g
							transform="translate(93.329 0)"
							onClick={() => setView('06-03')}>
							<g
								className="u-pentagrama"
								transform="matrix(1, 0, 0, 1, -241.97, -415.21)">
								<path
									className="h-pentagrama"
									d="M55,0H30.844A30.224,30.224,0,0,0,2.708,19.187L0,26.09H23.164a31.81,31.81,0,0,0,29.771-20.6Z"
									transform="translate(241.97 415.21)"
								/>
							</g>
							<path
								className="g-pentagrama"
								d="M6.017,0l6.017,10.315H0Z"
								transform="translate(32.651 7.02) rotate(90)"
							/>
						</g>
						<g
							transform="translate(0 0)"
							onClick={() => setView('10-02')}>
							<g
								className="t-pentagrama"
								transform="matrix(1, 0, 0, 1, -148.64, -415.21)">
								<path
									className="h-pentagrama"
									d="M0,0H24.155A30.224,30.224,0,0,1,52.292,19.187L55,26.09H31.836A31.81,31.81,0,0,1,2.065,5.486Z"
									transform="translate(148.64 415.21)"
								/>
							</g>
							<path
								className="g-pentagrama"
								d="M6.017,0l6.017,10.315H0Z"
								transform="translate(22.349 19.054) rotate(-90)"
							/>
						</g>
					</g>
					<text
						className="i-pentagrama"
						transform="translate(332.806 345.525)">
						<tspan x={-179.328} y={0}>
							{'XIII Curso de Actualizaci\xF3n'}
						</tspan>
						<tspan x={-110.1} y={15}>
							{'en Reumatolog\xEDa'}
						</tspan>
					</text>
					<text
						className="j-pentagrama"
						transform="translate(112.806 364.525)">
						<tspan x={66.384} y={8}>
							{'Cali 29 de febrero Hotel Intercontinental'}
						</tspan>
					</text>
					<text
						className="k-pentagrama"
						transform="translate(136.806 87.21)">
						<tspan x={0} y={0}>
							{t('29 de febrero de 2024')}
						</tspan>
					</text>
					<g transform="translate(47.281 494.018)">
						<g
							className="l-pentagrama"
							transform="translate(14.524 50.192)">
							<g transform="translate(-140 -557)">
								<text
									className="m-pentagrama"
									transform="translate(155 557)">
									<tspan x={-13.57} y={19}>
										{t('Do')}
									</tspan>
								</text>
							</g>
							<g transform="translate(-91 -557)">
								<text
									className="m-pentagrama"
									transform="translate(155 557)">
									<tspan x={-11.2} y={19}>
										{t('Lu ')}
									</tspan>
								</text>
							</g>
							<g transform="translate(-42 -557)">
								<text
									className="m-pentagrama"
									transform="translate(155 557)">
									<tspan x={-15.36} y={19}>
										{t('Ma ')}
									</tspan>
								</text>
							</g>
							<g transform="translate(7 -557)">
								<text
									className="m-pentagrama"
									transform="translate(155 557)">
									<tspan x={-11.58} y={19}>
										{t('Mi ')}
									</tspan>
								</text>
							</g>
							<g transform="translate(56 -557)">
								<text
									className="m-pentagrama"
									transform="translate(155 557)">
									<tspan x={-11.92} y={19}>
										{t('Ju ')}
									</tspan>
								</text>
							</g>
							<g transform="translate(105 -557)">
								<text
									className="m-pentagrama"
									transform="translate(155 557)">
									<tspan x={-9.54} y={19}>
										{t('Vi ')}
									</tspan>
								</text>
							</g>
							<g transform="translate(154 -557)">
								<text
									className="m-pentagrama"
									transform="translate(155 557)">
									<tspan x={-12.43} y={19}>
										{t('Sa ')}
									</tspan>
								</text>
							</g>
						</g>
						<g
							className="n-pentagrama"
							transform="translate(14.524 81.192)">
							<g transform="translate(-140 -557)">
								<text
									className="o-pentagrama"
									transform="translate(155 561)">
									<tspan x={-9.712} y={15}>
										{'28'}
									</tspan>
								</text>
							</g>
							<g transform="translate(-91 -557)">
								<text
									className="o-pentagrama"
									transform="translate(155 561)">
									<tspan x={-9.712} y={15}>
										{'29'}
									</tspan>
								</text>
							</g>
							<g transform="translate(-42 -557)">
								<text
									className="o-pentagrama"
									transform="translate(155 561)">
									<tspan x={-9.856} y={15}>
										{'30'}
									</tspan>
								</text>
							</g>
							<g transform="translate(7 -557)">
								<text
									className="o-pentagrama"
									transform="translate(155 561)">
									<tspan x={-8.488} y={15}>
										{'31'}
									</tspan>
								</text>
							</g>
							<g transform="translate(56 -557)">
								<text
									className="o-pentagrama"
									transform="translate(155 561)">
									<tspan x={-8.096} y={15}>
										{'01'}
									</tspan>
								</text>
							</g>
							<g
								transform="translate(105 -557)"
								onClick={() => setView('02-02')}>
								<text
									className="o-pentagrama"
									transform="translate(155 561)">
									<tspan x={-9.664} y={15}>
										{'02'}
									</tspan>
								</text>
							</g>
							<g
								transform="translate(154 -557)"
								onClick={() => setView('03-02')}>
								<text
									className="o-pentagrama"
									transform="translate(155 561)">
									<tspan x={-9.856} y={15}>
										{'03'}
									</tspan>
								</text>
							</g>
							<g transform="translate(-140 -524)">
								<text
									className="o-pentagrama"
									transform="translate(155 561)">
									<tspan x={-9.832} y={15}>
										{'04'}
									</tspan>
								</text>
							</g>
							<g transform="translate(-91 -524)">
								<text
									className="o-pentagrama"
									transform="translate(155 561)">
									<tspan x={-9.84} y={15}>
										{'05'}
									</tspan>
								</text>
							</g>
							<g transform="translate(-42 -524)">
								<text
									className="o-pentagrama"
									transform="translate(155 561)">
									<tspan x={-10} y={15}>
										{'06'}
									</tspan>
								</text>
							</g>
							<g transform="translate(7 -524)">
								<text
									className="o-pentagrama"
									transform="translate(155 561)">
									<tspan x={-9.416} y={15}>
										{'07'}
									</tspan>
								</text>
							</g>
							<g transform="translate(56 -524)">
								<text
									className="o-pentagrama"
									transform="translate(155 561)">
									<tspan x={-10} y={15}>
										{'08'}
									</tspan>
								</text>
							</g>
							<g
								transform="translate(105 -524)"
								onClick={() => setView('09-02')}>
								<text
									className="o-pentagrama"
									transform="translate(155 561)">
									<tspan x={-10} y={15}>
										{'09'}
									</tspan>
								</text>
							</g>
							<g
								transform="translate(154 -524)"
								onClick={() => setView('10-02')}>
								<text
									className="o-pentagrama"
									transform="translate(155 561)">
									<tspan x={-8.584} y={15}>
										{'10'}
									</tspan>
								</text>
							</g>
							<g transform="translate(-140 -491)">
								<text
									className="o-pentagrama"
									transform="translate(155 561)">
									<tspan x={-7.216} y={15}>
										{'11'}
									</tspan>
								</text>
							</g>
							<g transform="translate(-91 -491)">
								<text
									className="o-pentagrama"
									transform="translate(155 561)">
									<tspan x={-8.296} y={15}>
										{'12'}
									</tspan>
								</text>
							</g>
							<g transform="translate(-42 -491)">
								<text
									className="o-pentagrama"
									transform="translate(155 561)">
									<tspan x={-8} y={15}>
										{'13'}
									</tspan>
								</text>
							</g>
							<g transform="translate(7 -491)">
								<text
									className="o-pentagrama"
									transform="translate(155 561)">
									<tspan x={-8.136} y={15}>
										{'14'}
									</tspan>
								</text>
							</g>
							<g transform="translate(56 -491)">
								<text
									className="o-pentagrama"
									transform="translate(155 561)">
									<tspan x={-8.472} y={15}>
										{'15'}
									</tspan>
								</text>
							</g>
							<g transform="translate(105 -491)">
								<text
									className="o-pentagrama"
									transform="translate(155 561)">
									<tspan x={-8.632} y={15}>
										{'16'}
									</tspan>
								</text>
							</g>
							<g transform="translate(154 -491)">
								<text
									className="o-pentagrama"
									transform="translate(155 561)">
									<tspan x={-8.048} y={15}>
										{'17'}
									</tspan>
								</text>
							</g>
							<g transform="translate(-140 -458)">
								<text
									className="o-pentagrama"
									transform="translate(155 561)">
									<tspan x={-8.632} y={15}>
										{'18'}
									</tspan>
								</text>
							</g>
							<g transform="translate(-91 -458)">
								<text
									className="o-pentagrama"
									transform="translate(155 561)">
									<tspan x={-8.304} y={15}>
										{'19'}
									</tspan>
								</text>
							</g>
							<g transform="translate(-42 -458)">
								<text
									className="o-pentagrama"
									transform="translate(155 561)">
									<tspan x={-9.664} y={15}>
										{'20'}
									</tspan>
								</text>
							</g>
							<g transform="translate(7 -458)">
								<text
									className="o-pentagrama"
									transform="translate(155 561)">
									<tspan x={-8.296} y={15}>
										{'21'}
									</tspan>
								</text>
							</g>
							<g transform="translate(56 -458)">
								<text
									className="o-pentagrama"
									transform="translate(155 561)">
									<tspan x={-9.376} y={15}>
										{'22'}
									</tspan>
								</text>
							</g>
							<g transform="translate(105 -458)">
								<text
									className="o-pentagrama"
									transform="translate(155 561)">
									<tspan x={-9.568} y={15}>
										{'23'}
									</tspan>
								</text>
							</g>
							<g transform="translate(154 -458)">
								<text
									className="o-pentagrama"
									transform="translate(155 561)">
									<tspan x={-8.888} y={15}>
										{'24'}
									</tspan>
								</text>
							</g>
							<g transform="translate(-140 -425)">
								<text
									className="o-pentagrama"
									transform="translate(155 561)">
									<tspan x={-9.552} y={15}>
										{'25'}
									</tspan>
								</text>
							</g>
							<g transform="translate(-91 -425)">
								<text
									className="o-pentagrama"
									transform="translate(155 561)">
									<tspan x={-9.304} y={15}>
										{'26'}
									</tspan>
								</text>
							</g>
							<g transform="translate(-42 -425)">
								<text
									className="o-pentagrama"
									transform="translate(155 561)">
									<tspan x={-9.128} y={15}>
										{'27'}
									</tspan>
								</text>
							</g>
							<g transform="translate(7 -425)">
								<text
									className="o-pentagrama"
									transform="translate(155 561)">
									<tspan x={-9.712} y={15}>
										{'28'}
									</tspan>
								</text>
							</g>
							<g
								transform="translate(56 -425)"
								onClick={() => setView('29-02')}>
								<text
									className="o-pentagrama"
									transform="translate(155 561)">
									<tspan x={-9.712} y={15}>
										{'29'}
									</tspan>
								</text>
							</g>
							<g transform="translate(105 -425)">
								<text
									className="o-pentagrama"
									transform="translate(155 561)">
									<tspan x={-8.096} y={15}>
										{'01'}
									</tspan>
								</text>
							</g>
							<g transform="translate(154 -425)">
								<text
									className="o-pentagrama"
									transform="translate(155 561)">
									<tspan x={-9.664} y={15}>
										{'02'}
									</tspan>
								</text>
							</g>
						</g>
						<text
							className="p-pentagrama"
							transform="translate(4.524 25.192)">
							<tspan x={0} y={0}>
								{t('Febrero 2024')}
							</tspan>
						</text>
						<line
							className="q-pentagrama"
							x2={342}
							transform="translate(4.524 40.192)"
						/>
						<path
							className="d-pentagrama"
							d="M9.095,0l9.095,15.591H0Z"
							transform="translate(293.111 30.68) rotate(-90)"
							onClick={() => setView('02-05')}
						/>
						<path
							className="d-pentagrama"
							d="M9.095,0l9.095,15.591H0Z"
							transform="translate(346.524 12.491) rotate(90)"
							onClick={() => setView('06-03')}
						/>
					</g>
					<g transform="translate(228.262 782.336)">
						<circle
							className="e-pentagrama"
							cx={11.5}
							cy={11.5}
							r={11.5}
							transform="translate(-0.457 -0.125)"
						/>
						<text
							className="r-pentagrama"
							transform="translate(27.543 15.875)">
							<tspan x={0} y={0}>
								{t('Fecha evento')}
							</tspan>
						</text>
					</g>
					<g transform="translate(52.281 782.336)">
						<circle
							className="c-pentagrama"
							cx={11.5}
							cy={11.5}
							r={11.5}
							transform="translate(-0.476 -0.125)"
						/>
						<text
							className="r-pentagrama"
							transform="translate(27.524 15.875)">
							<tspan x={0} y={0}>
								{t('Fecha de hoy')}
							</tspan>
						</text>
					</g>
					<text
						className="s-pentagrama"
						transform="translate(60 23.21)">
						<tspan x={11.368} y={32}>
							{t('Prográmese con Grupo Amarey ')}
						</tspan>
					</text>
				</svg>
			) : view === '06-03' ? (
				<svg viewBox="18 0 414 856.142">
					<defs>
						<style>
							{
								".a-pentagrama,.t-pentagrama{fill:none;}.b-pentagrama{clip-path:url(#a-pentagrama);}.c-pentagrama{fill:#e40032;}.d-pentagrama,.m-pentagrama,.n-pentagrama{fill:#001f5f;}.e-pentagrama{fill:#c5dbf7;}.f-pentagrama{fill:#c7c7cc;}.g-pentagrama,.h-pentagrama,.j-pentagrama{fill:#fff;}.h-pentagrama,.r-pentagrama{font-size:16px;}.h-pentagrama{font-family:Silka-Bold, Silka;}.h-pentagrama,.j-pentagrama,.m-pentagrama{font-weight:700;}.i-pentagrama,.p-pentagrama,.r-pentagrama,.s-pentagrama{fill:#182856;}.i-pentagrama{font-size:15px;}.i-pentagrama,.n-pentagrama,.r-pentagrama{font-family:Silka-Regular, Silka;}.j-pentagrama{font-size:18px;}.j-pentagrama,.m-pentagrama{font-family:'Kiona-Bold';}.k-pentagrama{fill:url(#f-pentagrama);}.l-pentagrama{fill:url(#g-pentagrama);}.m-pentagrama{font-size:12px;}.n-pentagrama{font-size:8px;}.o-pentagrama{clip-path:url(#h-pentagrama);}.p-pentagrama{font-size:20px;}.p-pentagrama,.s-pentagrama{font-family:Silka-SemiBold, Silka;font-weight:600;}.q-pentagrama{clip-path:url(#i-pentagrama);}.s-pentagrama{font-size:27px;}.t-pentagrama{stroke:#e40032;stroke-width:3px;}.u-pentagrama{filter:url(#d-pentagrama);}.v-pentagrama{filter:url(#b-pentagrama);}"
							}
						</style>
						<clipPath id="a-pentagrama">
							<rect
								className="a-pentagrama"
								width={414.551}
								height={856.141}
								transform="translate(0 0)"
							/>
						</clipPath>
						<filter
							id="b-pentagrama"
							x={232.97}
							y={409.209}
							width={73}
							height={44.09}
							filterUnits="userSpaceOnUse">
							<feOffset dy={3} />
							<feGaussianBlur stdDeviation={3} result="c" />
							<feFlood floodOpacity={0.6} />
							<feComposite operator="in" in2="c" />
							<feComposite in="SourceGraphic" />
						</filter>
						<filter
							id="d-pentagrama"
							x={139.642}
							y={409.209}
							width={73}
							height={44.09}
							filterUnits="userSpaceOnUse">
							<feOffset dy={3} />
							<feGaussianBlur stdDeviation={3} result="e" />
							<feFlood floodOpacity={0.6} />
							<feComposite operator="in" in2="e" />
							<feComposite in="SourceGraphic" />
						</filter>
						<pattern
							id="f-pentagrama"
							preserveAspectRatio="xMidYMid slice"
							width="100%"
							height="100%"
							viewBox="0 0 6000 3363">
							<image
								width={6000}
								height={3363}
								xlinkHref="/images/mobile/events/image-1.webp"
							/>
						</pattern>
						<pattern
							id="g-pentagrama"
							preserveAspectRatio="xMidYMid slice"
							width="100%"
							height="100%"
							viewBox="0 0 1500 1000">
							<image
								width={1500}
								height={1000}
								xlinkHref="/images/mobile/events/image-2.webp"
							/>
						</pattern>
						<clipPath id="h-pentagrama">
							<rect
								className="a-pentagrama"
								width={322}
								height={26}
							/>
						</clipPath>
						<clipPath id="i-pentagrama">
							<rect
								className="a-pentagrama"
								width={322}
								height={197}
							/>
						</clipPath>
					</defs>
					<g transform="translate(14.806 -24.602)">
						<g transform="translate(1 24.602)">
							<g
								className="b-pentagrama"
								transform="translate(0 0)">
								<g transform="translate(436.148 1627.226) rotate(180)">
									<path
										className="c-pentagrama"
										d="M597.981,453.3l-8.16,17.3c-14.568,30.89-48.45,50.85-86.318,50.85H259.215v.836H503.5A103.193,103.193,0,0,0,555.9,508.271,88.879,88.879,0,0,0,585,481.032a79.465,79.465,0,0,0,5.7-10.107l8.312-17.624Z"
										transform="translate(-355.401 281.84)"
									/>
									<path
										className="c-pentagrama"
										d="M505.963,503.55l-5.943-12.6c-10.611-22.5-35.29-37.038-62.872-37.038H259.215V453.3H437.148a75.163,75.163,0,0,1,38.162,10.21,64.737,64.737,0,0,1,21.2,19.84,57.881,57.881,0,0,1,4.148,7.362l6.054,12.837Z"
										transform="translate(-342.462 1153.097)"
									/>
									<path
										className="d-pentagrama"
										d="M312.653,724.35,364.82,613.712c14.568-30.89,48.45-50.85,86.318-50.85H772.059v-.836H451.138a103.2,103.2,0,0,0-52.394,14.018c-15.567,9.171-27.6,22.085-34.8,37.346l-52.211,110.73.917.229"
										transform="translate(-328.725 227.667)"
									/>
								</g>
							</g>
						</g>
					</g>
					<circle
						className="e-pentagrama"
						cx={14}
						cy={14}
						r={14}
						transform="translate(308.806 606.21)"
					/>
					<circle
						className="e-pentagrama"
						cx={14}
						cy={14}
						r={14}
						transform="translate(259.806 606.21)"
					/>
					<circle
						className="e-pentagrama"
						cx={14}
						cy={14}
						r={14}
						transform="translate(210.806 606.21)"
					/>
					<circle
						className="e-pentagrama"
						cx={14}
						cy={14}
						r={14}
						transform="translate(357.806 606.21)"
					/>
					<circle
						className="e-pentagrama"
						cx={14}
						cy={14}
						r={14}
						transform="translate(308.806 640.21)"
					/>
					<rect
						className="c-pentagrama"
						width={24}
						height={3}
						rx={1.5}
						transform="translate(212.806 632.21)"
					/>
					<path
						className="d-pentagrama"
						d="M432.355,0H21.3C7.82,0-2.265,11.674.441,24.144L20.452,453.02c2.03,9.355,10.746,16.072,20.855,16.072H432.355Z"
						transform="translate(0 0.003)"
					/>
					<g transform="translate(148.642 415.209)">
						<g
							transform="translate(93.329 0)"
							onClick={() => setView('07-03')}>
							<g
								className="v-pentagrama"
								transform="matrix(1, 0, 0, 1, -241.97, -415.21)">
								<path
									className="f-pentagrama"
									d="M55,0H30.844A30.224,30.224,0,0,0,2.708,19.187L0,26.09H23.164a31.81,31.81,0,0,0,29.771-20.6Z"
									transform="translate(241.97 415.21)"
								/>
							</g>
							<path
								className="g-pentagrama"
								d="M6.017,0l6.017,10.315H0Z"
								transform="translate(32.651 7.02) rotate(90)"
							/>
						</g>
						<g
							transform="translate(0 0)"
							onClick={() => setView('29-02')}>
							<g
								className="u-pentagrama"
								transform="matrix(1, 0, 0, 1, -148.64, -415.21)">
								<path
									className="f-pentagrama"
									d="M0,0H24.155A30.224,30.224,0,0,1,52.292,19.187L55,26.09H31.836A31.81,31.81,0,0,1,2.065,5.486Z"
									transform="translate(148.64 415.21)"
								/>
							</g>
							<path
								className="g-pentagrama"
								d="M6.017,0l6.017,10.315H0Z"
								transform="translate(22.349 19.054) rotate(-90)"
							/>
						</g>
					</g>
					<text
						className="h-pentagrama"
						transform="translate(136.806 87.21)">
						<tspan x={0} y={0}>
							{t('06 de marzo de 2024')}
						</tspan>
					</text>
					<g transform="translate(228.262 782.336)">
						<circle
							className="e-pentagrama"
							cx={11.5}
							cy={11.5}
							r={11.5}
							transform="translate(-0.457 -0.125)"
						/>
						<text
							className="i-pentagrama"
							transform="translate(27.543 15.875)">
							<tspan x={0} y={0}>
								{t('Fecha evento')}
							</tspan>
						</text>
					</g>
					<g transform="translate(52.281 782.336)">
						<circle
							className="c-pentagrama"
							cx={11.5}
							cy={11.5}
							r={11.5}
							transform="translate(-0.476 -0.125)"
						/>
						<text
							className="i-pentagrama"
							transform="translate(27.524 15.875)">
							<tspan x={0} y={0}>
								{t('Fecha de hoy')}
							</tspan>
						</text>
					</g>
					<text
						className="j-pentagrama"
						transform="translate(60 23.21)">
						<tspan x={11.368} y={32}>
							{t('Prográmese con Grupo Amarey ')}
						</tspan>
					</text>
					<g transform="translate(-850.194 -164.136)">
						<path
							className="k-pentagrama"
							d="M798.007,7.185l10.349,95.156c.3,3.187,2.308,5.579,4.685,5.579H937.053c-2.376,0-4.384-2.391-4.682-5.579L922.019,7.185C921.66,3.373,923.859,0,926.7,0H802.689c-2.842,0-5.042,3.373-4.682,7.185"
							transform="translate(104.988 303)"
						/>
						<path
							className="g-pentagrama"
							d="M.038,7.185,10.39,102.34c.3,3.187,2.306,5.579,4.682,5.579H201.637c2.371,0,4.373-2.377,4.682-5.554L216.99,7.21c.372-3.82-1.83-7.21-4.682-7.21H4.723C1.878,0-.321,3.373.038,7.185"
							transform="translate(1026.969 303)"
						/>
					</g>
					<g transform="translate(-850.194 -31.136)">
						<path
							className="l-pentagrama"
							d="M798.007,7.185l10.349,95.156c.3,3.187,2.308,5.579,4.685,5.579H937.053c-2.376,0-4.384-2.391-4.682-5.579L922.019,7.185C921.66,3.373,923.859,0,926.7,0H802.689c-2.842,0-5.042,3.373-4.682,7.185"
							transform="translate(104.988 303)"
						/>
						<path
							className="g-pentagrama"
							d="M.038,7.185,10.39,102.34c.3,3.187,2.306,5.579,4.682,5.579H201.637c2.371,0,4.373-2.377,4.682-5.554L216.99,7.21c.372-3.82-1.83-7.21-4.682-7.21H4.723C1.878,0-.321,3.373.038,7.185"
							transform="translate(1026.969 303)"
						/>
					</g>
					<text
						className="m-pentagrama"
						transform="translate(374.806 183.323)">
						<tspan x={-175.752} y={0}>
							{'XXV Congreso Colombiano'}
						</tspan>
						<tspan x={-137.436} y={15}>
							{'de Cirugía Pediátrica'}
						</tspan>
					</text>
					<text
						className="m-pentagrama"
						transform="translate(374.806 302.323)">
						<tspan x={-187.62} y={0}>
							{'XV INTERNATIONAL SYMPOSIUM'}
						</tspan>
						<tspan x={-161.028} y={15}>
							{'ON BACTERIAL RESISTANCE:'}
						</tspan>
						<tspan x={-159.9} y={30}>
							{'AN HOLISTIC APPROACH TO'}
						</tspan>
						<tspan x={-176.484} y={45}>
							{'ANTIMICROBIAL STEWARDSHIp'}
						</tspan>
					</text>
					<text
						className="n-pentagrama"
						transform="translate(154.806 202.323)">
						<tspan x={59.64} y={8}>
							{'Cali 29 de febrero Hotel Intercontinental'}
						</tspan>
					</text>
					<text
						className="n-pentagrama"
						transform="translate(154.806 351.323)">
						<tspan x={132} y={8}>
							{'Pereira 6 y 8 de marzo'}
						</tspan>
					</text>
					<g transform="translate(47.281 494.018)">
						<g
							className="o-pentagrama"
							transform="translate(14.524 50.192)">
							<g transform="translate(-140 -557)">
								<text
									className="p-pentagrama"
									transform="translate(155 557)">
									<tspan x={-13.57} y={19}>
										{t('Do')}
									</tspan>
								</text>
							</g>
							<g transform="translate(-91 -557)">
								<text
									className="p-pentagrama"
									transform="translate(155 557)">
									<tspan x={-11.2} y={19}>
										{t('Lu ')}
									</tspan>
								</text>
							</g>
							<g transform="translate(-42 -557)">
								<text
									className="p-pentagrama"
									transform="translate(155 557)">
									<tspan x={-15.36} y={19}>
										{t('Ma ')}
									</tspan>
								</text>
							</g>
							<g transform="translate(7 -557)">
								<text
									className="p-pentagrama"
									transform="translate(155 557)">
									<tspan x={-11.58} y={19}>
										{t('Mi ')}
									</tspan>
								</text>
							</g>
							<g transform="translate(56 -557)">
								<text
									className="p-pentagrama"
									transform="translate(155 557)">
									<tspan x={-11.92} y={19}>
										{t('Ju ')}
									</tspan>
								</text>
							</g>
							<g transform="translate(105 -557)">
								<text
									className="p-pentagrama"
									transform="translate(155 557)">
									<tspan x={-9.54} y={19}>
										{t('Vi ')}
									</tspan>
								</text>
							</g>
							<g transform="translate(154 -557)">
								<text
									className="p-pentagrama"
									transform="translate(155 557)">
									<tspan x={-12.43} y={19}>
										{t('Sa ')}
									</tspan>
								</text>
							</g>
						</g>
						<g
							className="q-pentagrama"
							transform="translate(14.524 81.192)">
							<g transform="translate(-140 -557)">
								<text
									className="r-pentagrama"
									transform="translate(155 561)">
									<tspan x={-9.552} y={15}>
										{'25'}
									</tspan>
								</text>
							</g>
							<g transform="translate(-91 -557)">
								<text
									className="r-pentagrama"
									transform="translate(155 561)">
									<tspan x={-9.304} y={15}>
										{'26'}
									</tspan>
								</text>
							</g>
							<g transform="translate(-42 -557)">
								<text
									className="r-pentagrama"
									transform="translate(155 561)">
									<tspan x={-9.128} y={15}>
										{'27'}
									</tspan>
								</text>
							</g>
							<g transform="translate(7 -557)">
								<text
									className="r-pentagrama"
									transform="translate(155 561)">
									<tspan x={-9.712} y={15}>
										{'28'}
									</tspan>
								</text>
							</g>
							<g transform="translate(56 -557)">
								<text
									className="r-pentagrama"
									transform="translate(155 561)">
									<tspan x={-9.712} y={15}>
										{'29'}
									</tspan>
								</text>
							</g>
							<g transform="translate(105 -557)">
								<text
									className="r-pentagrama"
									transform="translate(155 561)">
									<tspan x={-8.096} y={15}>
										{'01'}
									</tspan>
								</text>
							</g>
							<g transform="translate(154 -557)">
								<text
									className="r-pentagrama"
									transform="translate(155 561)">
									<tspan x={-9.664} y={15}>
										{'02'}
									</tspan>
								</text>
							</g>
							<g transform="translate(-140 -524)">
								<text
									className="r-pentagrama"
									transform="translate(155 561)">
									<tspan x={-9.856} y={15}>
										{'03'}
									</tspan>
								</text>
							</g>
							<g transform="translate(-91 -524)">
								<text
									className="r-pentagrama"
									transform="translate(155 561)">
									<tspan x={-9.832} y={15}>
										{'04'}
									</tspan>
								</text>
							</g>
							<g transform="translate(-42 -524)">
								<text
									className="r-pentagrama"
									transform="translate(155 561)">
									<tspan x={-9.84} y={15}>
										{'05'}
									</tspan>
								</text>
							</g>
							<g
								transform="translate(7 -524)"
								onClick={() => setView('06-03')}>
								<text
									className="r-pentagrama"
									transform="translate(155 561)">
									<tspan x={-10} y={15}>
										{'06'}
									</tspan>
								</text>
							</g>
							<g
								transform="translate(56 -524)"
								onClick={() => setView('07-03')}>
								<text
									className="r-pentagrama"
									transform="translate(155 561)">
									<tspan x={-9.416} y={15}>
										{'07'}
									</tspan>
								</text>
							</g>
							<g
								transform="translate(105 -524)"
								onClick={() => setView('08-03')}>
								<text
									className="r-pentagrama"
									transform="translate(155 561)">
									<tspan x={-10} y={15}>
										{'08'}
									</tspan>
								</text>
							</g>
							<g
								transform="translate(154 -524)"
								onClick={() => setView('09-03')}>
								<text
									className="r-pentagrama"
									transform="translate(155 561)">
									<tspan x={-10} y={15}>
										{'09'}
									</tspan>
								</text>
							</g>
							<g transform="translate(-140 -491)">
								<text
									className="r-pentagrama"
									transform="translate(155 561)">
									<tspan x={-8.584} y={15}>
										{'10'}
									</tspan>
								</text>
							</g>
							<g transform="translate(-91 -491)">
								<text
									className="r-pentagrama"
									transform="translate(155 561)">
									<tspan x={-7.216} y={15}>
										{'11'}
									</tspan>
								</text>
							</g>
							<g transform="translate(-42 -491)">
								<text
									className="r-pentagrama"
									transform="translate(155 561)">
									<tspan x={-8.296} y={15}>
										{'12'}
									</tspan>
								</text>
							</g>
							<g transform="translate(7 -491)">
								<text
									className="r-pentagrama"
									transform="translate(155 561)">
									<tspan x={-8} y={15}>
										{'13'}
									</tspan>
								</text>
							</g>
							<g transform="translate(56 -491)">
								<text
									className="r-pentagrama"
									transform="translate(155 561)">
									<tspan x={-8.136} y={15}>
										{'14'}
									</tspan>
								</text>
							</g>
							<g
								transform="translate(105 -491)"
								onClick={() => setView('15-03')}>
								<text
									className="r-pentagrama"
									transform="translate(155 561)">
									<tspan x={-8.472} y={15}>
										{'15'}
									</tspan>
								</text>
							</g>
							<g transform="translate(154 -491)">
								<text
									className="r-pentagrama"
									transform="translate(155 561)">
									<tspan x={-8.632} y={15}>
										{'16'}
									</tspan>
								</text>
							</g>
							<g transform="translate(-140 -458)">
								<text
									className="r-pentagrama"
									transform="translate(155 561)">
									<tspan x={-8.048} y={15}>
										{'17'}
									</tspan>
								</text>
							</g>
							<g transform="translate(-91 -458)">
								<text
									className="r-pentagrama"
									transform="translate(155 561)">
									<tspan x={-8.632} y={15}>
										{'18'}
									</tspan>
								</text>
							</g>
							<g transform="translate(-42 -458)">
								<text
									className="r-pentagrama"
									transform="translate(155 561)">
									<tspan x={-8.304} y={15}>
										{'19'}
									</tspan>
								</text>
							</g>
							<g transform="translate(7 -458)">
								<text
									className="r-pentagrama"
									transform="translate(155 561)">
									<tspan x={-9.664} y={15}>
										{'20'}
									</tspan>
								</text>
							</g>
							<g transform="translate(56 -458)">
								<text
									className="r-pentagrama"
									transform="translate(155 561)">
									<tspan x={-8.296} y={15}>
										{'21'}
									</tspan>
								</text>
							</g>
							<g transform="translate(105 -458)">
								<text
									className="r-pentagrama"
									transform="translate(155 561)">
									<tspan x={-9.376} y={15}>
										{'22'}
									</tspan>
								</text>
							</g>
							<g transform="translate(154 -458)">
								<text
									className="r-pentagrama"
									transform="translate(155 561)">
									<tspan x={-9.568} y={15}>
										{'23'}
									</tspan>
								</text>
							</g>
							<g transform="translate(-140 -425)">
								<text
									className="r-pentagrama"
									transform="translate(155 561)">
									<tspan x={-8.888} y={15}>
										{'24'}
									</tspan>
								</text>
							</g>
							<g transform="translate(-91 -425)">
								<text
									className="r-pentagrama"
									transform="translate(155 561)">
									<tspan x={-9.552} y={15}>
										{'25'}
									</tspan>
								</text>
							</g>
							<g transform="translate(-42 -425)">
								<text
									className="r-pentagrama"
									transform="translate(155 561)">
									<tspan x={-9.304} y={15}>
										{'26'}
									</tspan>
								</text>
							</g>
							<g transform="translate(7 -425)">
								<text
									className="r-pentagrama"
									transform="translate(155 561)">
									<tspan x={-9.128} y={15}>
										{'27'}
									</tspan>
								</text>
							</g>
							<g transform="translate(56 -425)">
								<text
									className="r-pentagrama"
									transform="translate(155 561)">
									<tspan x={-9.712} y={15}>
										{'28'}
									</tspan>
								</text>
							</g>
							<g transform="translate(105 -425)">
								<text
									className="r-pentagrama"
									transform="translate(155 561)">
									<tspan x={-9.712} y={15}>
										{'29'}
									</tspan>
								</text>
							</g>
							<g transform="translate(154 -425)">
								<text
									className="r-pentagrama"
									transform="translate(155 561)">
									<tspan x={-9.856} y={15}>
										{'30'}
									</tspan>
								</text>
							</g>
							<g transform="translate(-140 -392)">
								<text
									className="r-pentagrama"
									transform="translate(155 561)">
									<tspan x={-8.488} y={15}>
										{'31'}
									</tspan>
								</text>
							</g>
							<g transform="translate(-91 -392)">
								<text
									className="r-pentagrama"
									transform="translate(155 561)">
									<tspan x={-8.096} y={15}>
										{'01'}
									</tspan>
								</text>
							</g>
							<g transform="translate(-42 -392)">
								<text
									className="r-pentagrama"
									transform="translate(155 561)">
									<tspan x={-9.664} y={15}>
										{'02'}
									</tspan>
								</text>
							</g>
							<g transform="translate(7 -392)">
								<text
									className="r-pentagrama"
									transform="translate(155 561)">
									<tspan x={-9.856} y={15}>
										{'03'}
									</tspan>
								</text>
							</g>
							<g transform="translate(56 -392)">
								<text
									className="r-pentagrama"
									transform="translate(155 561)">
									<tspan x={-9.832} y={15}>
										{'04'}
									</tspan>
								</text>
							</g>
							<g transform="translate(105 -392)">
								<text
									className="r-pentagrama"
									transform="translate(155 561)">
									<tspan x={-9.84} y={15}>
										{'05'}
									</tspan>
								</text>
							</g>
							<g transform="translate(154 -392)">
								<text
									className="r-pentagrama"
									transform="translate(155 561)">
									<tspan x={-10} y={15}>
										{'06'}
									</tspan>
								</text>
							</g>
						</g>
						<text
							className="s-pentagrama"
							transform="translate(4.524 25.192)">
							<tspan x={0} y={0}>
								{t('Marzo 2024')}
							</tspan>
						</text>
						<line
							className="t-pentagrama"
							x2={342}
							transform="translate(4.524 40.192)"
						/>
						<path
							className="d-pentagrama"
							d="M9.095,0l9.095,15.591H0Z"
							transform="translate(293.111 30.68) rotate(-90)"
							onClick={() => setView('02-03')}
						/>
						<path
							className="d-pentagrama"
							d="M9.095,0l9.095,15.591H0Z"
							transform="translate(346.524 12.491) rotate(90)"
							onClick={() => setView('02-05')}
						/>
					</g>
				</svg>
			) : view === '07-03' ? (
				<svg viewBox="18 0 414 856.142">
					<defs>
						<style>
							{
								".a-pentagrama,.p-pentagrama{fill:none;}.b-pentagrama{clip-path:url(#a-pentagrama);}.c-pentagrama{fill:#e40032;}.d-pentagrama,.r-pentagrama,.s-pentagrama{fill:#001f5f;}.e-pentagrama{fill:#c5dbf7;}.f-pentagrama{fill:#c7c7cc;}.g-pentagrama,.h-pentagrama,.j-pentagrama{fill:#fff;}.h-pentagrama,.n-pentagrama{font-size:16px;}.h-pentagrama{font-family:Silka-Bold, Silka;}.h-pentagrama,.j-pentagrama,.r-pentagrama{font-weight:700;}.i-pentagrama,.l-pentagrama,.n-pentagrama,.o-pentagrama{fill:#182856;}.i-pentagrama{font-size:15px;}.i-pentagrama,.n-pentagrama,.s-pentagrama{font-family:Silka-Regular, Silka;}.j-pentagrama{font-size:18px;}.j-pentagrama,.r-pentagrama{font-family:'Kiona-Bold';}.k-pentagrama{clip-path:url(#f-pentagrama);}.l-pentagrama{font-size:20px;}.l-pentagrama,.o-pentagrama{font-family:Silka-SemiBold, Silka;font-weight:600;}.m-pentagrama{clip-path:url(#g-pentagrama);}.o-pentagrama{font-size:27px;}.p-pentagrama{stroke:#e40032;stroke-width:3px;}.q-pentagrama{fill:url(#h-pentagrama);}.r-pentagrama{font-size:11px;}.s-pentagrama{font-size:8px;}.t-pentagrama{filter:url(#k-pentagrama);}.u-pentagrama{filter:url(#i-pentagrama);}.v-pentagrama{filter:url(#d-pentagrama);}.w-pentagrama{filter:url(#b-pentagrama);}"
							}
						</style>
						<clipPath id="a-pentagrama">
							<rect
								className="a-pentagrama"
								width={414.551}
								height={856.141}
								transform="translate(0 0)"
							/>
						</clipPath>
						<filter
							id="b-pentagrama"
							x={232.97}
							y={409.209}
							width={73}
							height={44.09}
							filterUnits="userSpaceOnUse">
							<feOffset dy={3} />
							<feGaussianBlur stdDeviation={3} result="c" />
							<feFlood floodOpacity={0.6} />
							<feComposite operator="in" in2="c" />
							<feComposite in="SourceGraphic" />
						</filter>
						<filter
							id="d-pentagrama"
							x={139.642}
							y={409.209}
							width={73}
							height={44.09}
							filterUnits="userSpaceOnUse">
							<feOffset dy={3} />
							<feGaussianBlur stdDeviation={3} result="e" />
							<feFlood floodOpacity={0.6} />
							<feComposite operator="in" in2="e" />
							<feComposite in="SourceGraphic" />
						</filter>
						<clipPath id="f-pentagrama">
							<rect
								className="a-pentagrama"
								width={322}
								height={26}
							/>
						</clipPath>
						<clipPath id="g-pentagrama">
							<rect
								className="a-pentagrama"
								width={322}
								height={197}
							/>
						</clipPath>
						<pattern
							id="h-pentagrama"
							preserveAspectRatio="xMidYMid slice"
							width="100%"
							height="100%"
							viewBox="0 0 1500 841">
							<image
								width={1500}
								height={841}
								xlinkHref="/images/mobile/events/image-3.webp"
							/>
						</pattern>
						<filter
							id="i-pentagrama"
							x={59.595}
							y={94.511}
							width={326.422}
							height={302.738}
							filterUnits="userSpaceOnUse">
							<feOffset dy={3} />
							<feGaussianBlur stdDeviation={3} result="j" />
							<feFlood floodOpacity={0.4} />
							<feComposite operator="in" in2="j" />
							<feComposite in="SourceGraphic" />
						</filter>
						<filter
							id="k-pentagrama"
							x={93.924}
							y={311.783}
							width={269.152}
							height={90.485}
							filterUnits="userSpaceOnUse">
							<feOffset dy={3} />
							<feGaussianBlur stdDeviation={3} result="l" />
							<feFlood floodOpacity={0.4} />
							<feComposite operator="in" in2="l" />
							<feComposite in="SourceGraphic" />
						</filter>
					</defs>
					<g transform="translate(14.806 -24.602)">
						<g transform="translate(1 24.602)">
							<g
								className="b-pentagrama"
								transform="translate(0 0)">
								<g transform="translate(436.148 1627.226) rotate(180)">
									<path
										className="c-pentagrama"
										d="M597.981,453.3l-8.16,17.3c-14.568,30.89-48.45,50.85-86.318,50.85H259.215v.836H503.5A103.193,103.193,0,0,0,555.9,508.271,88.879,88.879,0,0,0,585,481.032a79.465,79.465,0,0,0,5.7-10.107l8.312-17.624Z"
										transform="translate(-355.401 281.84)"
									/>
									<path
										className="c-pentagrama"
										d="M505.963,503.55l-5.943-12.6c-10.611-22.5-35.29-37.038-62.872-37.038H259.215V453.3H437.148a75.163,75.163,0,0,1,38.162,10.21,64.737,64.737,0,0,1,21.2,19.84,57.881,57.881,0,0,1,4.148,7.362l6.054,12.837Z"
										transform="translate(-342.462 1153.097)"
									/>
									<path
										className="d-pentagrama"
										d="M312.653,724.35,364.82,613.712c14.568-30.89,48.45-50.85,86.318-50.85H772.059v-.836H451.138a103.2,103.2,0,0,0-52.394,14.018c-15.567,9.171-27.6,22.085-34.8,37.346l-52.211,110.73.917.229"
										transform="translate(-328.725 227.667)"
									/>
								</g>
							</g>
						</g>
					</g>
					<circle
						className="e-pentagrama"
						cx={14}
						cy={14}
						r={14}
						transform="translate(308.806 606.21)"
					/>
					<circle
						className="e-pentagrama"
						cx={14}
						cy={14}
						r={14}
						transform="translate(259.806 606.21)"
					/>
					<circle
						className="e-pentagrama"
						cx={14}
						cy={14}
						r={14}
						transform="translate(210.806 606.21)"
					/>
					<circle
						className="e-pentagrama"
						cx={14}
						cy={14}
						r={14}
						transform="translate(357.806 606.21)"
					/>
					<circle
						className="e-pentagrama"
						cx={14}
						cy={14}
						r={14}
						transform="translate(308.806 640.21)"
					/>
					<rect
						className="c-pentagrama"
						width={24}
						height={3}
						rx={1.5}
						transform="translate(261.806 632.21)"
					/>
					<path
						className="d-pentagrama"
						d="M432.355,0H21.3C7.82,0-2.265,11.674.441,24.144L20.452,453.02c2.03,9.355,10.746,16.072,20.855,16.072H432.355Z"
						transform="translate(0 0.003)"
					/>
					<g transform="translate(148.642 415.209)">
						<g
							transform="translate(93.329 0)"
							onClick={() => setView('08-03')}>
							<g
								className="w-pentagrama"
								transform="matrix(1, 0, 0, 1, -241.97, -415.21)">
								<path
									className="f-pentagrama"
									d="M55,0H30.844A30.224,30.224,0,0,0,2.708,19.187L0,26.09H23.164a31.81,31.81,0,0,0,29.771-20.6Z"
									transform="translate(241.97 415.21)"
								/>
							</g>
							<path
								className="g-pentagrama"
								d="M6.017,0l6.017,10.315H0Z"
								transform="translate(32.651 7.02) rotate(90)"
							/>
						</g>
						<g
							transform="translate(0 0)"
							onClick={() => setView('06-03')}>
							<g
								className="v-pentagrama"
								transform="matrix(1, 0, 0, 1, -148.64, -415.21)">
								<path
									className="f-pentagrama"
									d="M0,0H24.155A30.224,30.224,0,0,1,52.292,19.187L55,26.09H31.836A31.81,31.81,0,0,1,2.065,5.486Z"
									transform="translate(148.64 415.21)"
								/>
							</g>
							<path
								className="g-pentagrama"
								d="M6.017,0l6.017,10.315H0Z"
								transform="translate(22.349 19.054) rotate(-90)"
							/>
						</g>
					</g>
					<text
						className="h-pentagrama"
						transform="translate(134.806 87.21)">
						<tspan x={0} y={0}>
							{t('07 de marzo de 2024')}
						</tspan>
					</text>
					<g transform="translate(228.262 782.336)">
						<circle
							className="e-pentagrama"
							cx={11.5}
							cy={11.5}
							r={11.5}
							transform="translate(-0.457 -0.125)"
						/>
						<text
							className="i-pentagrama"
							transform="translate(27.543 15.875)">
							<tspan x={0} y={0}>
								{t('Fecha evento')}
							</tspan>
						</text>
					</g>
					<g transform="translate(52.281 782.336)">
						<circle
							className="c-pentagrama"
							cx={11.5}
							cy={11.5}
							r={11.5}
							transform="translate(-0.476 -0.125)"
						/>
						<text
							className="i-pentagrama"
							transform="translate(27.524 15.875)">
							<tspan x={0} y={0}>
								{t('Fecha de hoy')}
							</tspan>
						</text>
					</g>
					<text
						className="j-pentagrama"
						transform="translate(60 23.21)">
						<tspan x={11.368} y={32}>
							{t('Prográmese con Grupo Amarey ')}
						</tspan>
					</text>
					<g transform="translate(47.281 494.018)">
						<g
							className="k-pentagrama"
							transform="translate(14.524 50.192)">
							<g transform="translate(-140 -557)">
								<text
									className="l-pentagrama"
									transform="translate(155 557)">
									<tspan x={-13.57} y={19}>
										{t('Do')}
									</tspan>
								</text>
							</g>
							<g transform="translate(-91 -557)">
								<text
									className="l-pentagrama"
									transform="translate(155 557)">
									<tspan x={-11.2} y={19}>
										{t('Lu ')}
									</tspan>
								</text>
							</g>
							<g transform="translate(-42 -557)">
								<text
									className="l-pentagrama"
									transform="translate(155 557)">
									<tspan x={-15.36} y={19}>
										{t('Ma ')}
									</tspan>
								</text>
							</g>
							<g transform="translate(7 -557)">
								<text
									className="l-pentagrama"
									transform="translate(155 557)">
									<tspan x={-11.58} y={19}>
										{t('Mi ')}
									</tspan>
								</text>
							</g>
							<g transform="translate(56 -557)">
								<text
									className="l-pentagrama"
									transform="translate(155 557)">
									<tspan x={-11.92} y={19}>
										{t('Ju ')}
									</tspan>
								</text>
							</g>
							<g transform="translate(105 -557)">
								<text
									className="l-pentagrama"
									transform="translate(155 557)">
									<tspan x={-9.54} y={19}>
										{t('Vi ')}
									</tspan>
								</text>
							</g>
							<g transform="translate(154 -557)">
								<text
									className="l-pentagrama"
									transform="translate(155 557)">
									<tspan x={-12.43} y={19}>
										{t('Sa ')}
									</tspan>
								</text>
							</g>
						</g>
						<g
							className="m-pentagrama"
							transform="translate(14.524 81.192)">
							<g transform="translate(-140 -557)">
								<text
									className="n-pentagrama"
									transform="translate(155 561)">
									<tspan x={-9.552} y={15}>
										{'25'}
									</tspan>
								</text>
							</g>
							<g transform="translate(-91 -557)">
								<text
									className="n-pentagrama"
									transform="translate(155 561)">
									<tspan x={-9.304} y={15}>
										{'26'}
									</tspan>
								</text>
							</g>
							<g transform="translate(-42 -557)">
								<text
									className="n-pentagrama"
									transform="translate(155 561)">
									<tspan x={-9.128} y={15}>
										{'27'}
									</tspan>
								</text>
							</g>
							<g transform="translate(7 -557)">
								<text
									className="n-pentagrama"
									transform="translate(155 561)">
									<tspan x={-9.712} y={15}>
										{'28'}
									</tspan>
								</text>
							</g>
							<g transform="translate(56 -557)">
								<text
									className="n-pentagrama"
									transform="translate(155 561)">
									<tspan x={-9.712} y={15}>
										{'29'}
									</tspan>
								</text>
							</g>
							<g transform="translate(105 -557)">
								<text
									className="n-pentagrama"
									transform="translate(155 561)">
									<tspan x={-8.096} y={15}>
										{'01'}
									</tspan>
								</text>
							</g>
							<g transform="translate(154 -557)">
								<text
									className="n-pentagrama"
									transform="translate(155 561)">
									<tspan x={-9.664} y={15}>
										{'02'}
									</tspan>
								</text>
							</g>
							<g transform="translate(-140 -524)">
								<text
									className="n-pentagrama"
									transform="translate(155 561)">
									<tspan x={-9.856} y={15}>
										{'03'}
									</tspan>
								</text>
							</g>
							<g transform="translate(-91 -524)">
								<text
									className="n-pentagrama"
									transform="translate(155 561)">
									<tspan x={-9.832} y={15}>
										{'04'}
									</tspan>
								</text>
							</g>
							<g transform="translate(-42 -524)">
								<text
									className="n-pentagrama"
									transform="translate(155 561)">
									<tspan x={-9.84} y={15}>
										{'05'}
									</tspan>
								</text>
							</g>
							<g transform="translate(7 -524)">
								<text
									className="n-pentagrama"
									transform="translate(155 561)">
									<tspan x={-10} y={15}>
										{'06'}
									</tspan>
								</text>
							</g>
							<g transform="translate(56 -524)">
								<text
									className="n-pentagrama"
									transform="translate(155 561)">
									<tspan x={-9.416} y={15}>
										{'07'}
									</tspan>
								</text>
							</g>
							<g transform="translate(105 -524)">
								<text
									className="n-pentagrama"
									transform="translate(155 561)">
									<tspan x={-10} y={15}>
										{'08'}
									</tspan>
								</text>
							</g>
							<g transform="translate(154 -524)">
								<text
									className="n-pentagrama"
									transform="translate(155 561)">
									<tspan x={-10} y={15}>
										{'09'}
									</tspan>
								</text>
							</g>
							<g transform="translate(-140 -491)">
								<text
									className="n-pentagrama"
									transform="translate(155 561)">
									<tspan x={-8.584} y={15}>
										{'10'}
									</tspan>
								</text>
							</g>
							<g transform="translate(-91 -491)">
								<text
									className="n-pentagrama"
									transform="translate(155 561)">
									<tspan x={-7.216} y={15}>
										{'11'}
									</tspan>
								</text>
							</g>
							<g transform="translate(-42 -491)">
								<text
									className="n-pentagrama"
									transform="translate(155 561)">
									<tspan x={-8.296} y={15}>
										{'12'}
									</tspan>
								</text>
							</g>
							<g transform="translate(7 -491)">
								<text
									className="n-pentagrama"
									transform="translate(155 561)">
									<tspan x={-8} y={15}>
										{'13'}
									</tspan>
								</text>
							</g>
							<g transform="translate(56 -491)">
								<text
									className="n-pentagrama"
									transform="translate(155 561)">
									<tspan x={-8.136} y={15}>
										{'14'}
									</tspan>
								</text>
							</g>
							<g transform="translate(105 -491)">
								<text
									className="n-pentagrama"
									transform="translate(155 561)">
									<tspan x={-8.472} y={15}>
										{'15'}
									</tspan>
								</text>
							</g>
							<g transform="translate(154 -491)">
								<text
									className="n-pentagrama"
									transform="translate(155 561)">
									<tspan x={-8.632} y={15}>
										{'16'}
									</tspan>
								</text>
							</g>
							<g transform="translate(-140 -458)">
								<text
									className="n-pentagrama"
									transform="translate(155 561)">
									<tspan x={-8.048} y={15}>
										{'17'}
									</tspan>
								</text>
							</g>
							<g transform="translate(-91 -458)">
								<text
									className="n-pentagrama"
									transform="translate(155 561)">
									<tspan x={-8.632} y={15}>
										{'18'}
									</tspan>
								</text>
							</g>
							<g transform="translate(-42 -458)">
								<text
									className="n-pentagrama"
									transform="translate(155 561)">
									<tspan x={-8.304} y={15}>
										{'19'}
									</tspan>
								</text>
							</g>
							<g transform="translate(7 -458)">
								<text
									className="n-pentagrama"
									transform="translate(155 561)">
									<tspan x={-9.664} y={15}>
										{'20'}
									</tspan>
								</text>
							</g>
							<g transform="translate(56 -458)">
								<text
									className="n-pentagrama"
									transform="translate(155 561)">
									<tspan x={-8.296} y={15}>
										{'21'}
									</tspan>
								</text>
							</g>
							<g transform="translate(105 -458)">
								<text
									className="n-pentagrama"
									transform="translate(155 561)">
									<tspan x={-9.376} y={15}>
										{'22'}
									</tspan>
								</text>
							</g>
							<g transform="translate(154 -458)">
								<text
									className="n-pentagrama"
									transform="translate(155 561)">
									<tspan x={-9.568} y={15}>
										{'23'}
									</tspan>
								</text>
							</g>
							<g transform="translate(-140 -425)">
								<text
									className="n-pentagrama"
									transform="translate(155 561)">
									<tspan x={-8.888} y={15}>
										{'24'}
									</tspan>
								</text>
							</g>
							<g transform="translate(-91 -425)">
								<text
									className="n-pentagrama"
									transform="translate(155 561)">
									<tspan x={-9.552} y={15}>
										{'25'}
									</tspan>
								</text>
							</g>
							<g transform="translate(-42 -425)">
								<text
									className="n-pentagrama"
									transform="translate(155 561)">
									<tspan x={-9.304} y={15}>
										{'26'}
									</tspan>
								</text>
							</g>
							<g transform="translate(7 -425)">
								<text
									className="n-pentagrama"
									transform="translate(155 561)">
									<tspan x={-9.128} y={15}>
										{'27'}
									</tspan>
								</text>
							</g>
							<g transform="translate(56 -425)">
								<text
									className="n-pentagrama"
									transform="translate(155 561)">
									<tspan x={-9.712} y={15}>
										{'28'}
									</tspan>
								</text>
							</g>
							<g transform="translate(105 -425)">
								<text
									className="n-pentagrama"
									transform="translate(155 561)">
									<tspan x={-9.712} y={15}>
										{'29'}
									</tspan>
								</text>
							</g>
							<g transform="translate(154 -425)">
								<text
									className="n-pentagrama"
									transform="translate(155 561)">
									<tspan x={-9.856} y={15}>
										{'30'}
									</tspan>
								</text>
							</g>
							<g transform="translate(-140 -392)">
								<text
									className="n-pentagrama"
									transform="translate(155 561)">
									<tspan x={-8.488} y={15}>
										{'31'}
									</tspan>
								</text>
							</g>
							<g transform="translate(-91 -392)">
								<text
									className="n-pentagrama"
									transform="translate(155 561)">
									<tspan x={-8.096} y={15}>
										{'01'}
									</tspan>
								</text>
							</g>
							<g transform="translate(-42 -392)">
								<text
									className="n-pentagrama"
									transform="translate(155 561)">
									<tspan x={-9.664} y={15}>
										{'02'}
									</tspan>
								</text>
							</g>
							<g transform="translate(7 -392)">
								<text
									className="n-pentagrama"
									transform="translate(155 561)">
									<tspan x={-9.856} y={15}>
										{'03'}
									</tspan>
								</text>
							</g>
							<g transform="translate(56 -392)">
								<text
									className="n-pentagrama"
									transform="translate(155 561)">
									<tspan x={-9.832} y={15}>
										{'04'}
									</tspan>
								</text>
							</g>
							<g transform="translate(105 -392)">
								<text
									className="n-pentagrama"
									transform="translate(155 561)">
									<tspan x={-9.84} y={15}>
										{'05'}
									</tspan>
								</text>
							</g>
							<g transform="translate(154 -392)">
								<text
									className="n-pentagrama"
									transform="translate(155 561)">
									<tspan x={-10} y={15}>
										{'06'}
									</tspan>
								</text>
							</g>
						</g>
						<text
							className="o-pentagrama"
							transform="translate(4.524 25.192)">
							<tspan x={0} y={0}>
								{t('Marzo 2024')}
							</tspan>
						</text>
						<line
							className="p-pentagrama"
							x2={342}
							transform="translate(4.524 40.192)"
						/>
						<path
							className="d-pentagrama"
							d="M9.095,0l9.095,15.591H0Z"
							transform="translate(293.111 30.68) rotate(-90)"
							onClick={() => setView('02-02')}
						/>
						<path
							className="d-pentagrama"
							d="M9.095,0l9.095,15.591H0Z"
							transform="translate(346.524 12.491) rotate(90)"
						/>
					</g>
					<g
						className="u-pentagrama"
						transform="matrix(1, 0, 0, 1, 0, 0)">
						<path
							className="q-pentagrama"
							d="M308.312,19.293,285.481,217.271H115.6c-33.527,0-63.637,21.151-75.881,53.3l-5.389,14.164a19.172,19.172,0,0,1-3.835-9.893L.116,19.36C-.941,9.1,5.328,0,13.443,0H294.977c8.1,0,14.358,9.058,13.336,19.293"
							transform="translate(68.59 100.51)"
						/>
					</g>
					<g
						className="t-pentagrama"
						transform="matrix(1, 0, 0, 1, 0, 0)">
						<path
							className="g-pentagrama"
							d="M330.722,488.86l-6.631,57.507c-.854,8.56-6.566,14.978-13.34,14.978H89.066a12.141,12.141,0,0,1-9.5-5.018l5.389-14.164c12.244-32.151,42.354-53.3,75.881-53.3Z"
							transform="translate(23.35 -171.08)"
						/>
					</g>
					<text
						className="r-pentagrama"
						transform="translate(332.806 340.525)">
						<tspan x={-77.539} y={0}>
							{'XVI Simposio:'}
						</tspan>
						<tspan x={-201.641} y={12}>
							{'"Transformación de los modelos'}
						</tspan>
						<tspan x={-195.261} y={24}>
							{'integrados de gestión en salud"'}
						</tspan>
					</text>
					<text
						className="s-pentagrama"
						transform="translate(112.806 368.525)">
						<tspan x={59.64} y={8}>
							{'Cali 29 de febrero Hotel Intercontinental'}
						</tspan>
					</text>
				</svg>
			) : view === '08-03' ? (
				<svg viewBox="18 0 414 856.142">
					<defs>
						<style>
							{
								".a-pentagrama,.u-pentagrama{fill:none;}.b-pentagrama{clip-path:url(#a-pentagrama);}.c-pentagrama{fill:#e40032;}.d-pentagrama,.n-pentagrama,.o-pentagrama{fill:#001f5f;}.e-pentagrama{fill:#c5dbf7;}.f-pentagrama{fill:#c7c7cc;}.g-pentagrama,.h-pentagrama,.j-pentagrama{fill:#fff;}.h-pentagrama,.s-pentagrama{font-size:16px;}.h-pentagrama{font-family:Silka-Bold, Silka;}.h-pentagrama,.j-pentagrama,.n-pentagrama{font-weight:700;}.i-pentagrama,.q-pentagrama,.s-pentagrama,.t-pentagrama{fill:#182856;}.i-pentagrama{font-size:15px;}.i-pentagrama,.o-pentagrama,.s-pentagrama{font-family:Silka-Regular, Silka;}.j-pentagrama{font-size:18px;}.j-pentagrama,.n-pentagrama{font-family:'Kiona-Bold';}.k-pentagrama{fill:url(#f-pentagrama);}.l-pentagrama{fill:url(#g-pentagrama);}.m-pentagrama{fill:url(#h-pentagrama);}.n-pentagrama{font-size:12px;}.o-pentagrama{font-size:8px;}.p-pentagrama{clip-path:url(#i-pentagrama);}.q-pentagrama{font-size:20px;}.q-pentagrama,.t-pentagrama{font-family:Silka-SemiBold, Silka;font-weight:600;}.r-pentagrama{clip-path:url(#j-pentagrama);}.t-pentagrama{font-size:27px;}.u-pentagrama{stroke:#e40032;stroke-width:3px;}.v-pentagrama{filter:url(#d-pentagrama);}.w-pentagrama{filter:url(#b-pentagrama);}"
							}
						</style>
						<clipPath id="a-pentagrama">
							<rect
								className="a-pentagrama"
								width={414.551}
								height={856.141}
								transform="translate(0 0)"
							/>
						</clipPath>
						<filter
							id="b-pentagrama"
							x={232.97}
							y={409.209}
							width={73}
							height={44.09}
							filterUnits="userSpaceOnUse">
							<feOffset dy={3} />
							<feGaussianBlur stdDeviation={3} result="c" />
							<feFlood floodOpacity={0.6} />
							<feComposite operator="in" in2="c" />
							<feComposite in="SourceGraphic" />
						</filter>
						<filter
							id="d-pentagrama"
							x={139.642}
							y={409.209}
							width={73}
							height={44.09}
							filterUnits="userSpaceOnUse">
							<feOffset dy={3} />
							<feGaussianBlur stdDeviation={3} result="e" />
							<feFlood floodOpacity={0.6} />
							<feComposite operator="in" in2="e" />
							<feComposite in="SourceGraphic" />
						</filter>
						<pattern
							id="f-pentagrama"
							preserveAspectRatio="xMidYMid slice"
							width="100%"
							height="100%"
							viewBox="0 0 1500 1000">
							<image
								width={1500}
								height={1000}
								xlinkHref="/images/mobile/events/image-1.webp"
							/>
						</pattern>
						<pattern
							id="g-pentagrama"
							preserveAspectRatio="xMidYMid slice"
							width="100%"
							height="100%"
							viewBox="0 0 6000 3363">
							<image
								width={6000}
								height={3363}
								xlinkHref="/images/mobile/events/image-2.webp"
							/>
						</pattern>
						<pattern
							id="h-pentagrama"
							preserveAspectRatio="xMidYMid slice"
							width="100%"
							height="100%"
							viewBox="0 0 1500 841">
							<image
								width={1500}
								height={841}
								xlinkHref="/images/mobile/events/image-3.webp"
							/>
						</pattern>
						<clipPath id="i-pentagrama">
							<rect
								className="a-pentagrama"
								width={322}
								height={26}
							/>
						</clipPath>
						<clipPath id="j-pentagrama">
							<rect
								className="a-pentagrama"
								width={322}
								height={197}
							/>
						</clipPath>
					</defs>
					<g transform="translate(14.806 -24.602)">
						<g transform="translate(1 24.602)">
							<g
								className="b-pentagrama"
								transform="translate(0 0)">
								<g transform="translate(436.148 1627.226) rotate(180)">
									<path
										className="c-pentagrama"
										d="M597.981,453.3l-8.16,17.3c-14.568,30.89-48.45,50.85-86.318,50.85H259.215v.836H503.5A103.193,103.193,0,0,0,555.9,508.271,88.879,88.879,0,0,0,585,481.032a79.465,79.465,0,0,0,5.7-10.107l8.312-17.624Z"
										transform="translate(-355.401 281.84)"
									/>
									<path
										className="c-pentagrama"
										d="M505.963,503.55l-5.943-12.6c-10.611-22.5-35.29-37.038-62.872-37.038H259.215V453.3H437.148a75.163,75.163,0,0,1,38.162,10.21,64.737,64.737,0,0,1,21.2,19.84,57.881,57.881,0,0,1,4.148,7.362l6.054,12.837Z"
										transform="translate(-342.462 1153.097)"
									/>
									<path
										className="d-pentagrama"
										d="M312.653,724.35,364.82,613.712c14.568-30.89,48.45-50.85,86.318-50.85H772.059v-.836H451.138a103.2,103.2,0,0,0-52.394,14.018c-15.567,9.171-27.6,22.085-34.8,37.346l-52.211,110.73.917.229"
										transform="translate(-328.725 227.667)"
									/>
								</g>
							</g>
						</g>
					</g>
					<circle
						className="e-pentagrama"
						cx={14}
						cy={14}
						r={14}
						transform="translate(308.806 606.21)"
					/>
					<circle
						className="e-pentagrama"
						cx={14}
						cy={14}
						r={14}
						transform="translate(259.806 606.21)"
					/>
					<circle
						className="e-pentagrama"
						cx={14}
						cy={14}
						r={14}
						transform="translate(210.806 606.21)"
					/>
					<circle
						className="e-pentagrama"
						cx={14}
						cy={14}
						r={14}
						transform="translate(357.806 606.21)"
					/>
					<circle
						className="e-pentagrama"
						cx={14}
						cy={14}
						r={14}
						transform="translate(308.806 640.21)"
					/>
					<rect
						className="c-pentagrama"
						width={24}
						height={3}
						rx={1.5}
						transform="translate(310.806 632.21)"
					/>
					<path
						className="d-pentagrama"
						d="M432.355,0H21.3C7.82,0-2.265,11.674.441,24.144L20.452,453.02c2.03,9.355,10.746,16.072,20.855,16.072H432.355Z"
						transform="translate(0 0.003)"
					/>
					<g transform="translate(148.642 415.209)">
						<g
							transform="translate(93.329 0)"
							onClick={() => setView('09-03')}>
							<g
								className="w-pentagrama"
								transform="matrix(1, 0, 0, 1, -241.97, -415.21)">
								<path
									className="f-pentagrama"
									d="M55,0H30.844A30.224,30.224,0,0,0,2.708,19.187L0,26.09H23.164a31.81,31.81,0,0,0,29.771-20.6Z"
									transform="translate(241.97 415.21)"
								/>
							</g>
							<path
								className="g-pentagrama"
								d="M6.017,0l6.017,10.315H0Z"
								transform="translate(32.651 7.02) rotate(90)"
							/>
						</g>
						<g
							transform="translate(0 0)"
							onClick={() => setView('07-03')}>
							<g
								className="v-pentagrama"
								transform="matrix(1, 0, 0, 1, -148.64, -415.21)">
								<path
									className="f-pentagrama"
									d="M0,0H24.155A30.224,30.224,0,0,1,52.292,19.187L55,26.09H31.836A31.81,31.81,0,0,1,2.065,5.486Z"
									transform="translate(148.64 415.21)"
								/>
							</g>
							<path
								className="g-pentagrama"
								d="M6.017,0l6.017,10.315H0Z"
								transform="translate(22.349 19.054) rotate(-90)"
							/>
						</g>
					</g>
					<text
						className="h-pentagrama"
						transform="translate(155.806 87.21)">
						<tspan x={0} y={0}>
							{t('08 de marzo de 2024')}
						</tspan>
					</text>
					<g transform="translate(228.262 782.336)">
						<circle
							className="e-pentagrama"
							cx={11.5}
							cy={11.5}
							r={11.5}
							transform="translate(-0.457 -0.125)"
						/>
						<text
							className="i-pentagrama"
							transform="translate(27.543 15.875)">
							<tspan x={0} y={0}>
								{t('Fecha evento')}
							</tspan>
						</text>
					</g>
					<g transform="translate(52.281 782.336)">
						<circle
							className="c-pentagrama"
							cx={11.5}
							cy={11.5}
							r={11.5}
							transform="translate(-0.476 -0.125)"
						/>
						<text
							className="i-pentagrama"
							transform="translate(27.524 15.875)">
							<tspan x={0} y={0}>
								{t('Fecha de hoy')}
							</tspan>
						</text>
					</g>
					<text
						className="j-pentagrama"
						transform="translate(60 23.21)">
						<tspan x={11.368} y={32}>
							{t('Prográmese con Grupo Amarey ')}
						</tspan>
					</text>
					<g transform="translate(-850.194 -191.966)">
						<path
							className="k-pentagrama"
							d="M798.007,5.963l10.349,78.969a4.949,4.949,0,0,0,4.685,4.63H937.053a4.945,4.945,0,0,1-4.682-4.63L922.019,5.963C921.66,2.8,923.859,0,926.7,0H802.689c-2.842,0-5.042,2.8-4.682,5.963"
							transform="translate(104.988 303)"
						/>
						<path
							className="g-pentagrama"
							d="M.038,5.963,10.39,84.931a4.945,4.945,0,0,0,4.682,4.63H201.637a4.944,4.944,0,0,0,4.682-4.609L216.99,5.983C217.362,2.813,215.16,0,212.308,0H4.723C1.878,0-.321,2.8.038,5.963"
							transform="translate(1026.969 303)"
						/>
					</g>
					<g transform="translate(-850.194 -89.966)">
						<path
							className="l-pentagrama"
							d="M798.007,5.963l10.349,78.969a4.949,4.949,0,0,0,4.685,4.63H937.053a4.945,4.945,0,0,1-4.682-4.63L922.019,5.963C921.66,2.8,923.859,0,926.7,0H802.689c-2.842,0-5.042,2.8-4.682,5.963"
							transform="translate(104.988 303)"
						/>
						<path
							className="g-pentagrama"
							d="M.038,5.963,10.39,84.931a4.945,4.945,0,0,0,4.682,4.63H201.637a4.944,4.944,0,0,0,4.682-4.609L216.99,5.983C217.362,2.813,215.16,0,212.308,0H4.723C1.878,0-.321,2.8.038,5.963"
							transform="translate(1026.969 303)"
						/>
					</g>
					<g transform="translate(-850.194 12.034)">
						<path
							className="m-pentagrama"
							d="M798.007,5.963l10.349,78.969a4.949,4.949,0,0,0,4.685,4.63H937.053a4.945,4.945,0,0,1-4.682-4.63L922.019,5.963C921.66,2.8,923.859,0,926.7,0H802.689c-2.842,0-5.042,2.8-4.682,5.963"
							transform="translate(104.988 303)"
						/>
						<path
							className="g-pentagrama"
							d="M.038,5.963,10.39,84.931a4.945,4.945,0,0,0,4.682,4.63H201.637a4.944,4.944,0,0,0,4.682-4.609L216.99,5.983C217.362,2.813,215.16,0,212.308,0H4.723C1.878,0-.321,2.8.038,5.963"
							transform="translate(1026.969 303)"
						/>
					</g>
					<text
						className="n-pentagrama"
						transform="translate(371.806 131.314)">
						<tspan x={-187.62} y={0}>
							{'XV INTERNATIONAL SYMPOSIUM'}
						</tspan>
						<tspan x={-161.028} y={15}>
							{'ON BACTERIAL RESISTANCE:'}
						</tspan>
						<tspan x={-159.9} y={30}>
							{'AN HOLISTIC APPROACH TO'}
						</tspan>
						<tspan x={-176.484} y={45}>
							{'ANTIMICROBIAL STEWARDSHIp'}
						</tspan>
					</text>
					<text
						className="n-pentagrama"
						transform="translate(371.806 243.493)">
						<tspan x={-165.24} y={0}>
							{'XXIX CURSO DE POSTGRADO'}
						</tspan>
						<tspan x={-110.1} y={15}>
							{'EN REUMATOLOGIA'}
						</tspan>
						<tspan x={-121.452} y={30}>
							{'“Ruta Panlar 2024”'}
						</tspan>
					</text>
					<text
						className="n-pentagrama"
						transform="translate(371.806 338.493)">
						<tspan x={-84.588} y={0}>
							{'XVI Simposio:'}
						</tspan>
						<tspan x={-132.984} y={15}>
							{'"Transformación de'}
						</tspan>
						<tspan x={-161.7} y={30}>
							{'los modelos integrados'}
						</tspan>
						<tspan x={-134.7} y={45}>
							{'de gestión en salud"'}
						</tspan>
					</text>
					<text
						className="o-pentagrama"
						transform="translate(151.806 180.314)">
						<tspan x={132} y={8}>
							{'Pereira 6 y 8 de marzo'}
						</tspan>
					</text>
					<text
						className="o-pentagrama"
						transform="translate(151.806 276.493)">
						<tspan x={56.6} y={8}>
							{'Barranquilla 8 de marzo Combarranquilla '}
						</tspan>
					</text>
					<text
						className="o-pentagrama"
						transform="translate(151.806 387.493)">
						<tspan x={80.16} y={8}>
							{'Bogotá 7 y 8 de marzo Cosmos 100'}
						</tspan>
					</text>
					<g transform="translate(47.281 494.018)">
						<g
							className="p-pentagrama"
							transform="translate(14.524 50.192)">
							<g transform="translate(-140 -557)">
								<text
									className="q-pentagrama"
									transform="translate(155 557)">
									<tspan x={-13.57} y={19}>
										{t('Do')}
									</tspan>
								</text>
							</g>
							<g transform="translate(-91 -557)">
								<text
									className="q-pentagrama"
									transform="translate(155 557)">
									<tspan x={-11.2} y={19}>
										{t('Lu ')}
									</tspan>
								</text>
							</g>
							<g transform="translate(-42 -557)">
								<text
									className="q-pentagrama"
									transform="translate(155 557)">
									<tspan x={-15.36} y={19}>
										{t('Ma ')}
									</tspan>
								</text>
							</g>
							<g transform="translate(7 -557)">
								<text
									className="q-pentagrama"
									transform="translate(155 557)">
									<tspan x={-11.58} y={19}>
										{t('Mi ')}
									</tspan>
								</text>
							</g>
							<g transform="translate(56 -557)">
								<text
									className="q-pentagrama"
									transform="translate(155 557)">
									<tspan x={-11.92} y={19}>
										{t('Ju ')}
									</tspan>
								</text>
							</g>
							<g transform="translate(105 -557)">
								<text
									className="q-pentagrama"
									transform="translate(155 557)">
									<tspan x={-9.54} y={19}>
										{t('Vi ')}
									</tspan>
								</text>
							</g>
							<g transform="translate(154 -557)">
								<text
									className="q-pentagrama"
									transform="translate(155 557)">
									<tspan x={-12.43} y={19}>
										{t('Sa ')}
									</tspan>
								</text>
							</g>
						</g>
						<g
							className="r-pentagrama"
							transform="translate(14.524 81.192)">
							<g transform="translate(-140 -557)">
								<text
									className="s-pentagrama"
									transform="translate(155 561)">
									<tspan x={-9.552} y={15}>
										{'25'}
									</tspan>
								</text>
							</g>
							<g transform="translate(-91 -557)">
								<text
									className="s-pentagrama"
									transform="translate(155 561)">
									<tspan x={-9.304} y={15}>
										{'26'}
									</tspan>
								</text>
							</g>
							<g transform="translate(-42 -557)">
								<text
									className="s-pentagrama"
									transform="translate(155 561)">
									<tspan x={-9.128} y={15}>
										{'27'}
									</tspan>
								</text>
							</g>
							<g transform="translate(7 -557)">
								<text
									className="s-pentagrama"
									transform="translate(155 561)">
									<tspan x={-9.712} y={15}>
										{'28'}
									</tspan>
								</text>
							</g>
							<g transform="translate(56 -557)">
								<text
									className="s-pentagrama"
									transform="translate(155 561)">
									<tspan x={-9.712} y={15}>
										{'29'}
									</tspan>
								</text>
							</g>
							<g transform="translate(105 -557)">
								<text
									className="s-pentagrama"
									transform="translate(155 561)">
									<tspan x={-8.096} y={15}>
										{'01'}
									</tspan>
								</text>
							</g>
							<g transform="translate(154 -557)">
								<text
									className="s-pentagrama"
									transform="translate(155 561)">
									<tspan x={-9.664} y={15}>
										{'02'}
									</tspan>
								</text>
							</g>
							<g transform="translate(-140 -524)">
								<text
									className="s-pentagrama"
									transform="translate(155 561)">
									<tspan x={-9.856} y={15}>
										{'03'}
									</tspan>
								</text>
							</g>
							<g transform="translate(-91 -524)">
								<text
									className="s-pentagrama"
									transform="translate(155 561)">
									<tspan x={-9.832} y={15}>
										{'04'}
									</tspan>
								</text>
							</g>
							<g transform="translate(-42 -524)">
								<text
									className="s-pentagrama"
									transform="translate(155 561)">
									<tspan x={-9.84} y={15}>
										{'05'}
									</tspan>
								</text>
							</g>
							<g
								transform="translate(7 -524)"
								onClick={() => setView('06-03')}>
								<text
									className="s-pentagrama"
									transform="translate(155 561)">
									<tspan x={-10} y={15}>
										{'06'}
									</tspan>
								</text>
							</g>
							<g
								transform="translate(56 -524)"
								onClick={() => setView('07-03')}>
								<text
									className="s-pentagrama"
									transform="translate(155 561)">
									<tspan x={-9.416} y={15}>
										{'07'}
									</tspan>
								</text>
							</g>
							<g
								transform="translate(105 -524)"
								onClick={() => setView('08-03')}>
								<text
									className="s-pentagrama"
									transform="translate(155 561)">
									<tspan x={-10} y={15}>
										{'08'}
									</tspan>
								</text>
							</g>
							<g
								transform="translate(154 -524)"
								onClick={() => setView('09-03')}>
								<text
									className="s-pentagrama"
									transform="translate(155 561)">
									<tspan x={-10} y={15}>
										{'09'}
									</tspan>
								</text>
							</g>
							<g transform="translate(-140 -491)">
								<text
									className="s-pentagrama"
									transform="translate(155 561)">
									<tspan x={-8.584} y={15}>
										{'10'}
									</tspan>
								</text>
							</g>
							<g transform="translate(-91 -491)">
								<text
									className="s-pentagrama"
									transform="translate(155 561)">
									<tspan x={-7.216} y={15}>
										{'11'}
									</tspan>
								</text>
							</g>
							<g transform="translate(-42 -491)">
								<text
									className="s-pentagrama"
									transform="translate(155 561)">
									<tspan x={-8.296} y={15}>
										{'12'}
									</tspan>
								</text>
							</g>
							<g transform="translate(7 -491)">
								<text
									className="s-pentagrama"
									transform="translate(155 561)">
									<tspan x={-8} y={15}>
										{'13'}
									</tspan>
								</text>
							</g>
							<g transform="translate(56 -491)">
								<text
									className="s-pentagrama"
									transform="translate(155 561)">
									<tspan x={-8.136} y={15}>
										{'14'}
									</tspan>
								</text>
							</g>
							<g
								transform="translate(105 -491)"
								onClick={() => setView('15-03')}>
								<text
									className="s-pentagrama"
									transform="translate(155 561)">
									<tspan x={-8.472} y={15}>
										{'15'}
									</tspan>
								</text>
							</g>
							<g transform="translate(154 -491)">
								<text
									className="s-pentagrama"
									transform="translate(155 561)">
									<tspan x={-8.632} y={15}>
										{'16'}
									</tspan>
								</text>
							</g>
							<g transform="translate(-140 -458)">
								<text
									className="s-pentagrama"
									transform="translate(155 561)">
									<tspan x={-8.048} y={15}>
										{'17'}
									</tspan>
								</text>
							</g>
							<g transform="translate(-91 -458)">
								<text
									className="s-pentagrama"
									transform="translate(155 561)">
									<tspan x={-8.632} y={15}>
										{'18'}
									</tspan>
								</text>
							</g>
							<g transform="translate(-42 -458)">
								<text
									className="s-pentagrama"
									transform="translate(155 561)">
									<tspan x={-8.304} y={15}>
										{'19'}
									</tspan>
								</text>
							</g>
							<g transform="translate(7 -458)">
								<text
									className="s-pentagrama"
									transform="translate(155 561)">
									<tspan x={-9.664} y={15}>
										{'20'}
									</tspan>
								</text>
							</g>
							<g transform="translate(56 -458)">
								<text
									className="s-pentagrama"
									transform="translate(155 561)">
									<tspan x={-8.296} y={15}>
										{'21'}
									</tspan>
								</text>
							</g>
							<g transform="translate(105 -458)">
								<text
									className="s-pentagrama"
									transform="translate(155 561)">
									<tspan x={-9.376} y={15}>
										{'22'}
									</tspan>
								</text>
							</g>
							<g transform="translate(154 -458)">
								<text
									className="s-pentagrama"
									transform="translate(155 561)">
									<tspan x={-9.568} y={15}>
										{'23'}
									</tspan>
								</text>
							</g>
							<g transform="translate(-140 -425)">
								<text
									className="s-pentagrama"
									transform="translate(155 561)">
									<tspan x={-8.888} y={15}>
										{'24'}
									</tspan>
								</text>
							</g>
							<g transform="translate(-91 -425)">
								<text
									className="s-pentagrama"
									transform="translate(155 561)">
									<tspan x={-9.552} y={15}>
										{'25'}
									</tspan>
								</text>
							</g>
							<g transform="translate(-42 -425)">
								<text
									className="s-pentagrama"
									transform="translate(155 561)">
									<tspan x={-9.304} y={15}>
										{'26'}
									</tspan>
								</text>
							</g>
							<g transform="translate(7 -425)">
								<text
									className="s-pentagrama"
									transform="translate(155 561)">
									<tspan x={-9.128} y={15}>
										{'27'}
									</tspan>
								</text>
							</g>
							<g transform="translate(56 -425)">
								<text
									className="s-pentagrama"
									transform="translate(155 561)">
									<tspan x={-9.712} y={15}>
										{'28'}
									</tspan>
								</text>
							</g>
							<g transform="translate(105 -425)">
								<text
									className="s-pentagrama"
									transform="translate(155 561)">
									<tspan x={-9.712} y={15}>
										{'29'}
									</tspan>
								</text>
							</g>
							<g transform="translate(154 -425)">
								<text
									className="s-pentagrama"
									transform="translate(155 561)">
									<tspan x={-9.856} y={15}>
										{'30'}
									</tspan>
								</text>
							</g>
							<g transform="translate(-140 -392)">
								<text
									className="s-pentagrama"
									transform="translate(155 561)">
									<tspan x={-8.488} y={15}>
										{'31'}
									</tspan>
								</text>
							</g>
							<g transform="translate(-91 -392)">
								<text
									className="s-pentagrama"
									transform="translate(155 561)">
									<tspan x={-8.096} y={15}>
										{'01'}
									</tspan>
								</text>
							</g>
							<g transform="translate(-42 -392)">
								<text
									className="s-pentagrama"
									transform="translate(155 561)">
									<tspan x={-9.664} y={15}>
										{'02'}
									</tspan>
								</text>
							</g>
							<g transform="translate(7 -392)">
								<text
									className="s-pentagrama"
									transform="translate(155 561)">
									<tspan x={-9.856} y={15}>
										{'03'}
									</tspan>
								</text>
							</g>
							<g transform="translate(56 -392)">
								<text
									className="s-pentagrama"
									transform="translate(155 561)">
									<tspan x={-9.832} y={15}>
										{'04'}
									</tspan>
								</text>
							</g>
							<g transform="translate(105 -392)">
								<text
									className="s-pentagrama"
									transform="translate(155 561)">
									<tspan x={-9.84} y={15}>
										{'05'}
									</tspan>
								</text>
							</g>
							<g transform="translate(154 -392)">
								<text
									className="s-pentagrama"
									transform="translate(155 561)">
									<tspan x={-10} y={15}>
										{'06'}
									</tspan>
								</text>
							</g>
						</g>
						<text
							className="t-pentagrama"
							transform="translate(4.524 25.192)">
							<tspan x={0} y={0}>
								{t('Marzo 2024')}
							</tspan>
						</text>
						<line
							className="u-pentagrama"
							x2={342}
							transform="translate(4.524 40.192)"
						/>
						<path
							className="d-pentagrama"
							d="M9.095,0l9.095,15.591H0Z"
							transform="translate(293.111 30.68) rotate(-90)"
							onClick={() => setView('02-02')}
						/>
						<path
							className="d-pentagrama"
							d="M9.095,0l9.095,15.591H0Z"
							transform="translate(346.524 12.491) rotate(90)"
						/>
					</g>
				</svg>
			) : view === '09-03' ? (
				<svg viewBox="18 0 414 856.142">
					<defs>
						<style>
							{
								".a-pentagrama,.p-pentagrama{fill:none;}.b-pentagrama{clip-path:url(#a-pentagrama);}.c-pentagrama{fill:#e40032;}.d-pentagrama,.r-pentagrama,.s-pentagrama{fill:#001f5f;}.e-pentagrama{fill:#c5dbf7;}.f-pentagrama{fill:#c7c7cc;}.g-pentagrama,.h-pentagrama,.j-pentagrama{fill:#fff;}.h-pentagrama,.n-pentagrama{font-size:16px;}.h-pentagrama{font-family:Silka-Bold, Silka;}.h-pentagrama,.j-pentagrama,.r-pentagrama{font-weight:700;}.i-pentagrama,.l-pentagrama,.n-pentagrama,.o-pentagrama{fill:#182856;}.i-pentagrama{font-size:15px;}.i-pentagrama,.n-pentagrama,.s-pentagrama{font-family:Silka-Regular, Silka;}.j-pentagrama{font-size:18px;}.j-pentagrama,.r-pentagrama{font-family:'Kiona-Bold';}.k-pentagrama{clip-path:url(#f-pentagrama);}.l-pentagrama{font-size:20px;}.l-pentagrama,.o-pentagrama{font-family:Silka-SemiBold, Silka;font-weight:600;}.m-pentagrama{clip-path:url(#g-pentagrama);}.o-pentagrama{font-size:27px;}.p-pentagrama{stroke:#e40032;stroke-width:3px;}.q-pentagrama{fill:url(#h-pentagrama);}.r-pentagrama{font-size:11px;}.s-pentagrama{font-size:8px;}.t-pentagrama{filter:url(#k-pentagrama);}.u-pentagrama{filter:url(#i-pentagrama);}.v-pentagrama{filter:url(#d-pentagrama);}.w-pentagrama{filter:url(#b-pentagrama);}"
							}
						</style>
						<clipPath id="a-pentagrama">
							<rect
								className="a-pentagrama"
								width={414.551}
								height={856.141}
								transform="translate(0 0)"
							/>
						</clipPath>
						<filter
							id="b-pentagrama"
							x={232.97}
							y={409.209}
							width={73}
							height={44.09}
							filterUnits="userSpaceOnUse">
							<feOffset dy={3} />
							<feGaussianBlur stdDeviation={3} result="c" />
							<feFlood floodOpacity={0.6} />
							<feComposite operator="in" in2="c" />
							<feComposite in="SourceGraphic" />
						</filter>
						<filter
							id="d-pentagrama"
							x={139.642}
							y={409.209}
							width={73}
							height={44.09}
							filterUnits="userSpaceOnUse">
							<feOffset dy={3} />
							<feGaussianBlur stdDeviation={3} result="e" />
							<feFlood floodOpacity={0.6} />
							<feComposite operator="in" in2="e" />
							<feComposite in="SourceGraphic" />
						</filter>
						<clipPath id="f-pentagrama">
							<rect
								className="a-pentagrama"
								width={322}
								height={26}
							/>
						</clipPath>
						<clipPath id="g-pentagrama">
							<rect
								className="a-pentagrama"
								width={322}
								height={197}
							/>
						</clipPath>
						<pattern
							id="h-pentagrama"
							preserveAspectRatio="xMidYMid slice"
							width="100%"
							height="100%"
							viewBox="0 0 6000 3363">
							<image
								width={6000}
								height={3363}
								xlinkHref="/images/mobile/events/image-1.webp"
							/>
						</pattern>
						<filter
							id="i-pentagrama"
							x={59.595}
							y={94.511}
							width={326.422}
							height={302.738}
							filterUnits="userSpaceOnUse">
							<feOffset dy={3} />
							<feGaussianBlur stdDeviation={3} result="j" />
							<feFlood floodOpacity={0.4} />
							<feComposite operator="in" in2="j" />
							<feComposite in="SourceGraphic" />
						</filter>
						<filter
							id="k-pentagrama"
							x={93.924}
							y={311.783}
							width={269.152}
							height={90.485}
							filterUnits="userSpaceOnUse">
							<feOffset dy={3} />
							<feGaussianBlur stdDeviation={3} result="l" />
							<feFlood floodOpacity={0.4} />
							<feComposite operator="in" in2="l" />
							<feComposite in="SourceGraphic" />
						</filter>
					</defs>
					<g transform="translate(14.806 -24.602)">
						<g transform="translate(1 24.602)">
							<g
								className="b-pentagrama"
								transform="translate(0 0)">
								<g transform="translate(436.148 1627.226) rotate(180)">
									<path
										className="c-pentagrama"
										d="M597.981,453.3l-8.16,17.3c-14.568,30.89-48.45,50.85-86.318,50.85H259.215v.836H503.5A103.193,103.193,0,0,0,555.9,508.271,88.879,88.879,0,0,0,585,481.032a79.465,79.465,0,0,0,5.7-10.107l8.312-17.624Z"
										transform="translate(-355.401 281.84)"
									/>
									<path
										className="c-pentagrama"
										d="M505.963,503.55l-5.943-12.6c-10.611-22.5-35.29-37.038-62.872-37.038H259.215V453.3H437.148a75.163,75.163,0,0,1,38.162,10.21,64.737,64.737,0,0,1,21.2,19.84,57.881,57.881,0,0,1,4.148,7.362l6.054,12.837Z"
										transform="translate(-342.462 1153.097)"
									/>
									<path
										className="d-pentagrama"
										d="M312.653,724.35,364.82,613.712c14.568-30.89,48.45-50.85,86.318-50.85H772.059v-.836H451.138a103.2,103.2,0,0,0-52.394,14.018c-15.567,9.171-27.6,22.085-34.8,37.346l-52.211,110.73.917.229"
										transform="translate(-328.725 227.667)"
									/>
								</g>
							</g>
						</g>
					</g>
					<circle
						className="e-pentagrama"
						cx={14}
						cy={14}
						r={14}
						transform="translate(308.806 606.21)"
					/>
					<circle
						className="e-pentagrama"
						cx={14}
						cy={14}
						r={14}
						transform="translate(259.806 606.21)"
					/>
					<circle
						className="e-pentagrama"
						cx={14}
						cy={14}
						r={14}
						transform="translate(210.806 606.21)"
					/>
					<circle
						className="e-pentagrama"
						cx={14}
						cy={14}
						r={14}
						transform="translate(357.806 606.21)"
					/>
					<circle
						className="e-pentagrama"
						cx={14}
						cy={14}
						r={14}
						transform="translate(308.806 640.21)"
					/>
					<rect
						className="c-pentagrama"
						width={24}
						height={3}
						rx={1.5}
						transform="translate(359.806 632.21)"
					/>
					<path
						className="d-pentagrama"
						d="M432.355,0H21.3C7.82,0-2.265,11.674.441,24.144L20.452,453.02c2.03,9.355,10.746,16.072,20.855,16.072H432.355Z"
						transform="translate(0 0.003)"
					/>
					<g transform="translate(148.642 415.209)">
						<g
							transform="translate(93.329 0)"
							onClick={() => setView('15-03')}>
							<g
								className="w-pentagrama"
								transform="matrix(1, 0, 0, 1, -241.97, -415.21)">
								<path
									className="f-pentagrama"
									d="M55,0H30.844A30.224,30.224,0,0,0,2.708,19.187L0,26.09H23.164a31.81,31.81,0,0,0,29.771-20.6Z"
									transform="translate(241.97 415.21)"
								/>
							</g>
							<path
								className="g-pentagrama"
								d="M6.017,0l6.017,10.315H0Z"
								transform="translate(32.651 7.02) rotate(90)"
							/>
						</g>
						<g
							transform="translate(0 0)"
							onClick={() => setView('08	-03')}>
							<g
								className="v-pentagrama"
								transform="matrix(1, 0, 0, 1, -148.64, -415.21)">
								<path
									className="f-pentagrama"
									d="M0,0H24.155A30.224,30.224,0,0,1,52.292,19.187L55,26.09H31.836A31.81,31.81,0,0,1,2.065,5.486Z"
									transform="translate(148.64 415.21)"
								/>
							</g>
							<path
								className="g-pentagrama"
								d="M6.017,0l6.017,10.315H0Z"
								transform="translate(22.349 19.054) rotate(-90)"
							/>
						</g>
					</g>
					<text
						className="h-pentagrama"
						transform="translate(134.806 87.21)">
						<tspan x={0} y={0}>
							{t('09 de marzo de 2024')}
						</tspan>
					</text>
					<g transform="translate(228.262 782.336)">
						<circle
							className="e-pentagrama"
							cx={11.5}
							cy={11.5}
							r={11.5}
							transform="translate(-0.457 -0.125)"
						/>
						<text
							className="i-pentagrama"
							transform="translate(27.543 15.875)">
							<tspan x={0} y={0}>
								{t('Fecha evento')}
							</tspan>
						</text>
					</g>
					<g transform="translate(52.281 782.336)">
						<circle
							className="c-pentagrama"
							cx={11.5}
							cy={11.5}
							r={11.5}
							transform="translate(-0.476 -0.125)"
						/>
						<text
							className="i-pentagrama"
							transform="translate(27.524 15.875)">
							<tspan x={0} y={0}>
								{t('Fecha de hoy')}
							</tspan>
						</text>
					</g>
					<text
						className="j-pentagrama"
						transform="translate(60 23.21)">
						<tspan x={11.368} y={32}>
							{t('Prográmese con Grupo Amarey ')}
						</tspan>
					</text>
					<g transform="translate(47.281 494.018)">
						<g
							className="k-pentagrama"
							transform="translate(14.524 50.192)">
							<g transform="translate(-140 -557)">
								<text
									className="l-pentagrama"
									transform="translate(155 557)">
									<tspan x={-13.57} y={19}>
										{t('Do')}
									</tspan>
								</text>
							</g>
							<g transform="translate(-91 -557)">
								<text
									className="l-pentagrama"
									transform="translate(155 557)">
									<tspan x={-11.2} y={19}>
										{t('Lu ')}
									</tspan>
								</text>
							</g>
							<g transform="translate(-42 -557)">
								<text
									className="l-pentagrama"
									transform="translate(155 557)">
									<tspan x={-15.36} y={19}>
										{t('Ma ')}
									</tspan>
								</text>
							</g>
							<g transform="translate(7 -557)">
								<text
									className="l-pentagrama"
									transform="translate(155 557)">
									<tspan x={-11.58} y={19}>
										{t('Mi ')}
									</tspan>
								</text>
							</g>
							<g transform="translate(56 -557)">
								<text
									className="l-pentagrama"
									transform="translate(155 557)">
									<tspan x={-11.92} y={19}>
										{t('Ju ')}
									</tspan>
								</text>
							</g>
							<g transform="translate(105 -557)">
								<text
									className="l-pentagrama"
									transform="translate(155 557)">
									<tspan x={-9.54} y={19}>
										{t('Vi ')}
									</tspan>
								</text>
							</g>
							<g transform="translate(154 -557)">
								<text
									className="l-pentagrama"
									transform="translate(155 557)">
									<tspan x={-12.43} y={19}>
										{t('Sa ')}
									</tspan>
								</text>
							</g>
						</g>
						<g
							className="m-pentagrama"
							transform="translate(14.524 81.192)">
							<g transform="translate(-140 -557)">
								<text
									className="n-pentagrama"
									transform="translate(155 561)">
									<tspan x={-9.552} y={15}>
										{'25'}
									</tspan>
								</text>
							</g>
							<g transform="translate(-91 -557)">
								<text
									className="n-pentagrama"
									transform="translate(155 561)">
									<tspan x={-9.304} y={15}>
										{'26'}
									</tspan>
								</text>
							</g>
							<g transform="translate(-42 -557)">
								<text
									className="n-pentagrama"
									transform="translate(155 561)">
									<tspan x={-9.128} y={15}>
										{'27'}
									</tspan>
								</text>
							</g>
							<g transform="translate(7 -557)">
								<text
									className="n-pentagrama"
									transform="translate(155 561)">
									<tspan x={-9.712} y={15}>
										{'28'}
									</tspan>
								</text>
							</g>
							<g transform="translate(56 -557)">
								<text
									className="n-pentagrama"
									transform="translate(155 561)">
									<tspan x={-9.712} y={15}>
										{'29'}
									</tspan>
								</text>
							</g>
							<g transform="translate(105 -557)">
								<text
									className="n-pentagrama"
									transform="translate(155 561)">
									<tspan x={-8.096} y={15}>
										{'01'}
									</tspan>
								</text>
							</g>
							<g transform="translate(154 -557)">
								<text
									className="n-pentagrama"
									transform="translate(155 561)">
									<tspan x={-9.664} y={15}>
										{'02'}
									</tspan>
								</text>
							</g>
							<g transform="translate(-140 -524)">
								<text
									className="n-pentagrama"
									transform="translate(155 561)">
									<tspan x={-9.856} y={15}>
										{'03'}
									</tspan>
								</text>
							</g>
							<g transform="translate(-91 -524)">
								<text
									className="n-pentagrama"
									transform="translate(155 561)">
									<tspan x={-9.832} y={15}>
										{'04'}
									</tspan>
								</text>
							</g>
							<g transform="translate(-42 -524)">
								<text
									className="n-pentagrama"
									transform="translate(155 561)">
									<tspan x={-9.84} y={15}>
										{'05'}
									</tspan>
								</text>
							</g>
							<g
								transform="translate(7 -524)"
								onClick={() => setView('06-03')}>
								<text
									className="n-pentagrama"
									transform="translate(155 561)">
									<tspan x={-10} y={15}>
										{'06'}
									</tspan>
								</text>
							</g>
							<g
								transform="translate(56 -524)"
								onClick={() => setView('07-03')}>
								<text
									className="n-pentagrama"
									transform="translate(155 561)">
									<tspan x={-9.416} y={15}>
										{'07'}
									</tspan>
								</text>
							</g>
							<g
								transform="translate(105 -524)"
								onClick={() => setView('08-03')}>
								<text
									className="n-pentagrama"
									transform="translate(155 561)">
									<tspan x={-10} y={15}>
										{'08'}
									</tspan>
								</text>
							</g>
							<g
								transform="translate(154 -524)"
								onClick={() => setView('09-03')}>
								<text
									className="n-pentagrama"
									transform="translate(155 561)">
									<tspan x={-10} y={15}>
										{'09'}
									</tspan>
								</text>
							</g>
							<g transform="translate(-140 -491)">
								<text
									className="n-pentagrama"
									transform="translate(155 561)">
									<tspan x={-8.584} y={15}>
										{'10'}
									</tspan>
								</text>
							</g>
							<g transform="translate(-91 -491)">
								<text
									className="n-pentagrama"
									transform="translate(155 561)">
									<tspan x={-7.216} y={15}>
										{'11'}
									</tspan>
								</text>
							</g>
							<g transform="translate(-42 -491)">
								<text
									className="n-pentagrama"
									transform="translate(155 561)">
									<tspan x={-8.296} y={15}>
										{'12'}
									</tspan>
								</text>
							</g>
							<g transform="translate(7 -491)">
								<text
									className="n-pentagrama"
									transform="translate(155 561)">
									<tspan x={-8} y={15}>
										{'13'}
									</tspan>
								</text>
							</g>
							<g transform="translate(56 -491)">
								<text
									className="n-pentagrama"
									transform="translate(155 561)">
									<tspan x={-8.136} y={15}>
										{'14'}
									</tspan>
								</text>
							</g>
							<g
								transform="translate(105 -491)"
								onClick={() => setView('15-03')}>
								<text
									className="n-pentagrama"
									transform="translate(155 561)">
									<tspan x={-8.472} y={15}>
										{'15'}
									</tspan>
								</text>
							</g>
							<g transform="translate(154 -491)">
								<text
									className="n-pentagrama"
									transform="translate(155 561)">
									<tspan x={-8.632} y={15}>
										{'16'}
									</tspan>
								</text>
							</g>
							<g transform="translate(-140 -458)">
								<text
									className="n-pentagrama"
									transform="translate(155 561)">
									<tspan x={-8.048} y={15}>
										{'17'}
									</tspan>
								</text>
							</g>
							<g transform="translate(-91 -458)">
								<text
									className="n-pentagrama"
									transform="translate(155 561)">
									<tspan x={-8.632} y={15}>
										{'18'}
									</tspan>
								</text>
							</g>
							<g transform="translate(-42 -458)">
								<text
									className="n-pentagrama"
									transform="translate(155 561)">
									<tspan x={-8.304} y={15}>
										{'19'}
									</tspan>
								</text>
							</g>
							<g transform="translate(7 -458)">
								<text
									className="n-pentagrama"
									transform="translate(155 561)">
									<tspan x={-9.664} y={15}>
										{'20'}
									</tspan>
								</text>
							</g>
							<g transform="translate(56 -458)">
								<text
									className="n-pentagrama"
									transform="translate(155 561)">
									<tspan x={-8.296} y={15}>
										{'21'}
									</tspan>
								</text>
							</g>
							<g transform="translate(105 -458)">
								<text
									className="n-pentagrama"
									transform="translate(155 561)">
									<tspan x={-9.376} y={15}>
										{'22'}
									</tspan>
								</text>
							</g>
							<g transform="translate(154 -458)">
								<text
									className="n-pentagrama"
									transform="translate(155 561)">
									<tspan x={-9.568} y={15}>
										{'23'}
									</tspan>
								</text>
							</g>
							<g transform="translate(-140 -425)">
								<text
									className="n-pentagrama"
									transform="translate(155 561)">
									<tspan x={-8.888} y={15}>
										{'24'}
									</tspan>
								</text>
							</g>
							<g transform="translate(-91 -425)">
								<text
									className="n-pentagrama"
									transform="translate(155 561)">
									<tspan x={-9.552} y={15}>
										{'25'}
									</tspan>
								</text>
							</g>
							<g transform="translate(-42 -425)">
								<text
									className="n-pentagrama"
									transform="translate(155 561)">
									<tspan x={-9.304} y={15}>
										{'26'}
									</tspan>
								</text>
							</g>
							<g transform="translate(7 -425)">
								<text
									className="n-pentagrama"
									transform="translate(155 561)">
									<tspan x={-9.128} y={15}>
										{'27'}
									</tspan>
								</text>
							</g>
							<g transform="translate(56 -425)">
								<text
									className="n-pentagrama"
									transform="translate(155 561)">
									<tspan x={-9.712} y={15}>
										{'28'}
									</tspan>
								</text>
							</g>
							<g transform="translate(105 -425)">
								<text
									className="n-pentagrama"
									transform="translate(155 561)">
									<tspan x={-9.712} y={15}>
										{'29'}
									</tspan>
								</text>
							</g>
							<g transform="translate(154 -425)">
								<text
									className="n-pentagrama"
									transform="translate(155 561)">
									<tspan x={-9.856} y={15}>
										{'30'}
									</tspan>
								</text>
							</g>
							<g transform="translate(-140 -392)">
								<text
									className="n-pentagrama"
									transform="translate(155 561)">
									<tspan x={-8.488} y={15}>
										{'31'}
									</tspan>
								</text>
							</g>
							<g transform="translate(-91 -392)">
								<text
									className="n-pentagrama"
									transform="translate(155 561)">
									<tspan x={-8.096} y={15}>
										{'01'}
									</tspan>
								</text>
							</g>
							<g transform="translate(-42 -392)">
								<text
									className="n-pentagrama"
									transform="translate(155 561)">
									<tspan x={-9.664} y={15}>
										{'02'}
									</tspan>
								</text>
							</g>
							<g transform="translate(7 -392)">
								<text
									className="n-pentagrama"
									transform="translate(155 561)">
									<tspan x={-9.856} y={15}>
										{'03'}
									</tspan>
								</text>
							</g>
							<g transform="translate(56 -392)">
								<text
									className="n-pentagrama"
									transform="translate(155 561)">
									<tspan x={-9.832} y={15}>
										{'04'}
									</tspan>
								</text>
							</g>
							<g transform="translate(105 -392)">
								<text
									className="n-pentagrama"
									transform="translate(155 561)">
									<tspan x={-9.84} y={15}>
										{'05'}
									</tspan>
								</text>
							</g>
							<g transform="translate(154 -392)">
								<text
									className="n-pentagrama"
									transform="translate(155 561)">
									<tspan x={-10} y={15}>
										{'06'}
									</tspan>
								</text>
							</g>
						</g>
						<text
							className="o-pentagrama"
							transform="translate(4.524 25.192)">
							<tspan x={0} y={0}>
								{t('Marzo 2024')}
							</tspan>
						</text>
						<line
							className="p-pentagrama"
							x2={342}
							transform="translate(4.524 40.192)"
						/>
						<path
							className="d-pentagrama"
							d="M9.095,0l9.095,15.591H0Z"
							transform="translate(293.111 30.68) rotate(-90)"
							onClick={() => setView('02-02')}
						/>
						<path
							className="d-pentagrama"
							d="M9.095,0l9.095,15.591H0Z"
							transform="translate(346.524 12.491) rotate(90)"
							onClick={() => setView('02-05')}
						/>
					</g>
					<g
						className="u-pentagrama"
						transform="matrix(1, 0, 0, 1, 0, 0)">
						<path
							className="q-pentagrama"
							d="M308.312,19.293,285.481,217.271H115.6c-33.527,0-63.637,21.151-75.881,53.3l-5.389,14.164a19.172,19.172,0,0,1-3.835-9.893L.116,19.36C-.941,9.1,5.328,0,13.443,0H294.977c8.1,0,14.358,9.058,13.336,19.293"
							transform="translate(68.59 100.51)"
						/>
					</g>
					<g
						className="t-pentagrama"
						transform="matrix(1, 0, 0, 1, 0, 0)">
						<path
							className="g-pentagrama"
							d="M330.722,488.86l-6.631,57.507c-.854,8.56-6.566,14.978-13.34,14.978H89.066a12.141,12.141,0,0,1-9.5-5.018l5.389-14.164c12.244-32.151,42.354-53.3,75.881-53.3Z"
							transform="translate(23.35 -171.08)"
						/>
					</g>
					<text
						className="r-pentagrama"
						transform="translate(332.806 344.525)">
						<tspan x={-161.106} y={0}>
							{'XXV Congreso Colombiano'}
						</tspan>
						<tspan x={-125.983} y={12}>
							{'de Cirugía Pediátrica'}
						</tspan>
					</text>
					<text
						className="s-pentagrama"
						transform="translate(112.806 362.525)">
						<tspan x={27.944} y={8}>
							{'Santa Marta 6 y 9 de marzo Estelar Santa Marta'}
						</tspan>
					</text>
				</svg>
			) : view === '15-03' ? (
				<svg viewBox="18 0 414 856.142">
					<defs>
						<style>
							{
								".a-pentagrama,.p-pentagrama{fill:none;}.b-pentagrama{clip-path:url(#a-pentagrama);}.c-pentagrama{fill:#e40032;}.d-pentagrama,.r-pentagrama,.s-pentagrama{fill:#001f5f;}.e-pentagrama{fill:#c5dbf7;}.f-pentagrama{fill:#c7c7cc;}.g-pentagrama,.h-pentagrama,.j-pentagrama{fill:#fff;}.h-pentagrama,.n-pentagrama{font-size:16px;}.h-pentagrama{font-family:Silka-Bold, Silka;}.h-pentagrama,.j-pentagrama,.r-pentagrama{font-weight:700;}.i-pentagrama,.l-pentagrama,.n-pentagrama,.o-pentagrama{fill:#182856;}.i-pentagrama{font-size:15px;}.i-pentagrama,.n-pentagrama,.s-pentagrama{font-family:Silka-Regular, Silka;}.j-pentagrama{font-size:18px;}.j-pentagrama,.r-pentagrama{font-family:'Kiona-Bold';}.k-pentagrama{clip-path:url(#f-pentagrama);}.l-pentagrama{font-size:20px;}.l-pentagrama,.o-pentagrama{font-family:Silka-SemiBold, Silka;font-weight:600;}.m-pentagrama{clip-path:url(#g-pentagrama);}.o-pentagrama{font-size:27px;}.p-pentagrama{stroke:#e40032;stroke-width:3px;}.q-pentagrama{fill:url(#h-pentagrama);}.r-pentagrama{font-size:11px;}.s-pentagrama{font-size:8px;}.t-pentagrama{filter:url(#k-pentagrama);}.u-pentagrama{filter:url(#i-pentagrama);}.v-pentagrama{filter:url(#d-pentagrama);}.w-pentagrama{filter:url(#b-pentagrama);}"
							}
						</style>
						<clipPath id="a-pentagrama">
							<rect
								className="a-pentagrama"
								width={414.551}
								height={856.141}
								transform="translate(0 0)"
							/>
						</clipPath>
						<filter
							id="b-pentagrama"
							x={232.97}
							y={409.209}
							width={73}
							height={44.09}
							filterUnits="userSpaceOnUse">
							<feOffset dy={3} />
							<feGaussianBlur stdDeviation={3} result="c" />
							<feFlood floodOpacity={0.6} />
							<feComposite operator="in" in2="c" />
							<feComposite in="SourceGraphic" />
						</filter>
						<filter
							id="d-pentagrama"
							x={139.642}
							y={409.209}
							width={73}
							height={44.09}
							filterUnits="userSpaceOnUse">
							<feOffset dy={3} />
							<feGaussianBlur stdDeviation={3} result="e" />
							<feFlood floodOpacity={0.6} />
							<feComposite operator="in" in2="e" />
							<feComposite in="SourceGraphic" />
						</filter>
						<clipPath id="f-pentagrama">
							<rect
								className="a-pentagrama"
								width={322}
								height={26}
							/>
						</clipPath>
						<clipPath id="g-pentagrama">
							<rect
								className="a-pentagrama"
								width={322}
								height={197}
							/>
						</clipPath>
						<pattern
							id="h-pentagrama"
							preserveAspectRatio="xMidYMid slice"
							width="100%"
							height="100%"
							viewBox="0 0 1500 841">
							<image
								width={1500}
								height={841}
								xlinkHref="/images/mobile/events/image-1.webp"
							/>
						</pattern>
						<filter
							id="i-pentagrama"
							x={59.595}
							y={94.511}
							width={326.422}
							height={302.738}
							filterUnits="userSpaceOnUse">
							<feOffset dy={3} />
							<feGaussianBlur stdDeviation={3} result="j" />
							<feFlood floodOpacity={0.4} />
							<feComposite operator="in" in2="j" />
							<feComposite in="SourceGraphic" />
						</filter>
						<filter
							id="k-pentagrama"
							x={93.924}
							y={311.783}
							width={269.152}
							height={90.485}
							filterUnits="userSpaceOnUse">
							<feOffset dy={3} />
							<feGaussianBlur stdDeviation={3} result="l" />
							<feFlood floodOpacity={0.4} />
							<feComposite operator="in" in2="l" />
							<feComposite in="SourceGraphic" />
						</filter>
					</defs>
					<g transform="translate(14.806 -24.602)">
						<g transform="translate(1 24.602)">
							<g
								className="b-pentagrama"
								transform="translate(0 0)">
								<g transform="translate(436.148 1627.226) rotate(180)">
									<path
										className="c-pentagrama"
										d="M597.981,453.3l-8.16,17.3c-14.568,30.89-48.45,50.85-86.318,50.85H259.215v.836H503.5A103.193,103.193,0,0,0,555.9,508.271,88.879,88.879,0,0,0,585,481.032a79.465,79.465,0,0,0,5.7-10.107l8.312-17.624Z"
										transform="translate(-355.401 281.84)"
									/>
									<path
										className="c-pentagrama"
										d="M505.963,503.55l-5.943-12.6c-10.611-22.5-35.29-37.038-62.872-37.038H259.215V453.3H437.148a75.163,75.163,0,0,1,38.162,10.21,64.737,64.737,0,0,1,21.2,19.84,57.881,57.881,0,0,1,4.148,7.362l6.054,12.837Z"
										transform="translate(-342.462 1153.097)"
									/>
									<path
										className="d-pentagrama"
										d="M312.653,724.35,364.82,613.712c14.568-30.89,48.45-50.85,86.318-50.85H772.059v-.836H451.138a103.2,103.2,0,0,0-52.394,14.018c-15.567,9.171-27.6,22.085-34.8,37.346l-52.211,110.73.917.229"
										transform="translate(-328.725 227.667)"
									/>
								</g>
							</g>
						</g>
					</g>
					<circle
						className="e-pentagrama"
						cx={14}
						cy={14}
						r={14}
						transform="translate(308.806 606.21)"
					/>
					<circle
						className="e-pentagrama"
						cx={14}
						cy={14}
						r={14}
						transform="translate(259.806 606.21)"
					/>
					<circle
						className="e-pentagrama"
						cx={14}
						cy={14}
						r={14}
						transform="translate(210.806 606.21)"
					/>
					<circle
						className="e-pentagrama"
						cx={14}
						cy={14}
						r={14}
						transform="translate(357.806 606.21)"
					/>
					<circle
						className="e-pentagrama"
						cx={14}
						cy={14}
						r={14}
						transform="translate(308.806 640.21)"
					/>
					<rect
						className="c-pentagrama"
						width={24}
						height={3}
						rx={1.5}
						transform="translate(310.806 665.21)"
					/>
					<path
						className="d-pentagrama"
						d="M432.355,0H21.3C7.82,0-2.265,11.674.441,24.144L20.452,453.02c2.03,9.355,10.746,16.072,20.855,16.072H432.355Z"
						transform="translate(0 0.003)"
					/>
					<g transform="translate(148.642 415.209)">
						<g
							transform="translate(93.329 0)"
							onClick={() => setView('02-05')}>
							<g
								className="w-pentagrama"
								transform="matrix(1, 0, 0, 1, -241.97, -415.21)">
								<path
									className="f-pentagrama"
									d="M55,0H30.844A30.224,30.224,0,0,0,2.708,19.187L0,26.09H23.164a31.81,31.81,0,0,0,29.771-20.6Z"
									transform="translate(241.97 415.21)"
								/>
							</g>
							<path
								className="g-pentagrama"
								d="M6.017,0l6.017,10.315H0Z"
								transform="translate(32.651 7.02) rotate(90)"
							/>
						</g>
						<g
							transform="translate(0 0)"
							onClick={() => setView('09-03')}>
							<g
								className="v-pentagrama"
								transform="matrix(1, 0, 0, 1, -148.64, -415.21)">
								<path
									className="f-pentagrama"
									d="M0,0H24.155A30.224,30.224,0,0,1,52.292,19.187L55,26.09H31.836A31.81,31.81,0,0,1,2.065,5.486Z"
									transform="translate(148.64 415.21)"
								/>
							</g>
							<path
								className="g-pentagrama"
								d="M6.017,0l6.017,10.315H0Z"
								transform="translate(22.349 19.054) rotate(-90)"
							/>
						</g>
					</g>
					<text
						className="h-pentagrama"
						transform="translate(134.806 87.21)">
						<tspan x={0} y={0}>
							{t('15 de marzo de 2024')}
						</tspan>
					</text>
					<g transform="translate(228.262 782.336)">
						<circle
							className="e-pentagrama"
							cx={11.5}
							cy={11.5}
							r={11.5}
							transform="translate(-0.457 -0.125)"
						/>
						<text
							className="i-pentagrama"
							transform="translate(27.543 15.875)">
							<tspan x={0} y={0}>
								{t('Fecha evento')}
							</tspan>
						</text>
					</g>
					<g transform="translate(52.281 782.336)">
						<circle
							className="c-pentagrama"
							cx={11.5}
							cy={11.5}
							r={11.5}
							transform="translate(-0.476 -0.125)"
						/>
						<text
							className="i-pentagrama"
							transform="translate(27.524 15.875)">
							<tspan x={0} y={0}>
								{t('Fecha de hoy')}
							</tspan>
						</text>
					</g>
					<text
						className="j-pentagrama"
						transform="translate(60 23.21)">
						<tspan x={11.368} y={32}>
							{t('Prográmese con Grupo Amarey ')}
						</tspan>
					</text>
					<g transform="translate(47.281 494.018)">
						<g
							className="k-pentagrama"
							transform="translate(14.524 50.192)">
							<g transform="translate(-140 -557)">
								<text
									className="l-pentagrama"
									transform="translate(155 557)">
									<tspan x={-13.57} y={19}>
										{t('Do')}
									</tspan>
								</text>
							</g>
							<g transform="translate(-91 -557)">
								<text
									className="l-pentagrama"
									transform="translate(155 557)">
									<tspan x={-11.2} y={19}>
										{t('Lu ')}
									</tspan>
								</text>
							</g>
							<g transform="translate(-42 -557)">
								<text
									className="l-pentagrama"
									transform="translate(155 557)">
									<tspan x={-15.36} y={19}>
										{t('Ma ')}
									</tspan>
								</text>
							</g>
							<g transform="translate(7 -557)">
								<text
									className="l-pentagrama"
									transform="translate(155 557)">
									<tspan x={-11.58} y={19}>
										{t('Mi ')}
									</tspan>
								</text>
							</g>
							<g transform="translate(56 -557)">
								<text
									className="l-pentagrama"
									transform="translate(155 557)">
									<tspan x={-11.92} y={19}>
										{t('Ju ')}
									</tspan>
								</text>
							</g>
							<g transform="translate(105 -557)">
								<text
									className="l-pentagrama"
									transform="translate(155 557)">
									<tspan x={-9.54} y={19}>
										{t('Vi ')}
									</tspan>
								</text>
							</g>
							<g transform="translate(154 -557)">
								<text
									className="l-pentagrama"
									transform="translate(155 557)">
									<tspan x={-12.43} y={19}>
										{t('Sa ')}
									</tspan>
								</text>
							</g>
						</g>
						<g
							className="m-pentagrama"
							transform="translate(14.524 81.192)">
							<g transform="translate(-140 -557)">
								<text
									className="n-pentagrama"
									transform="translate(155 561)">
									<tspan x={-9.552} y={15}>
										{'25'}
									</tspan>
								</text>
							</g>
							<g transform="translate(-91 -557)">
								<text
									className="n-pentagrama"
									transform="translate(155 561)">
									<tspan x={-9.304} y={15}>
										{'26'}
									</tspan>
								</text>
							</g>
							<g transform="translate(-42 -557)">
								<text
									className="n-pentagrama"
									transform="translate(155 561)">
									<tspan x={-9.128} y={15}>
										{'27'}
									</tspan>
								</text>
							</g>
							<g transform="translate(7 -557)">
								<text
									className="n-pentagrama"
									transform="translate(155 561)">
									<tspan x={-9.712} y={15}>
										{'28'}
									</tspan>
								</text>
							</g>
							<g transform="translate(56 -557)">
								<text
									className="n-pentagrama"
									transform="translate(155 561)">
									<tspan x={-9.712} y={15}>
										{'29'}
									</tspan>
								</text>
							</g>
							<g transform="translate(105 -557)">
								<text
									className="n-pentagrama"
									transform="translate(155 561)">
									<tspan x={-8.096} y={15}>
										{'01'}
									</tspan>
								</text>
							</g>
							<g transform="translate(154 -557)">
								<text
									className="n-pentagrama"
									transform="translate(155 561)">
									<tspan x={-9.664} y={15}>
										{'02'}
									</tspan>
								</text>
							</g>
							<g transform="translate(-140 -524)">
								<text
									className="n-pentagrama"
									transform="translate(155 561)">
									<tspan x={-9.856} y={15}>
										{'03'}
									</tspan>
								</text>
							</g>
							<g transform="translate(-91 -524)">
								<text
									className="n-pentagrama"
									transform="translate(155 561)">
									<tspan x={-9.832} y={15}>
										{'04'}
									</tspan>
								</text>
							</g>
							<g transform="translate(-42 -524)">
								<text
									className="n-pentagrama"
									transform="translate(155 561)">
									<tspan x={-9.84} y={15}>
										{'05'}
									</tspan>
								</text>
							</g>
							<g
								transform="translate(7 -524)"
								onClick={() => setView('06-03')}>
								<text
									className="n-pentagrama"
									transform="translate(155 561)">
									<tspan x={-10} y={15}>
										{'06'}
									</tspan>
								</text>
							</g>
							<g
								transform="translate(56 -524)"
								onClick={() => setView('07-03')}>
								<text
									className="n-pentagrama"
									transform="translate(155 561)">
									<tspan x={-9.416} y={15}>
										{'07'}
									</tspan>
								</text>
							</g>
							<g
								transform="translate(105 -524)"
								onClick={() => setView('08-03')}>
								<text
									className="n-pentagrama"
									transform="translate(155 561)">
									<tspan x={-10} y={15}>
										{'08'}
									</tspan>
								</text>
							</g>
							<g
								transform="translate(154 -524)"
								onClick={() => setView('09-03')}>
								<text
									className="n-pentagrama"
									transform="translate(155 561)">
									<tspan x={-10} y={15}>
										{'09'}
									</tspan>
								</text>
							</g>
							<g transform="translate(-140 -491)">
								<text
									className="n-pentagrama"
									transform="translate(155 561)">
									<tspan x={-8.584} y={15}>
										{'10'}
									</tspan>
								</text>
							</g>
							<g transform="translate(-91 -491)">
								<text
									className="n-pentagrama"
									transform="translate(155 561)">
									<tspan x={-7.216} y={15}>
										{'11'}
									</tspan>
								</text>
							</g>
							<g transform="translate(-42 -491)">
								<text
									className="n-pentagrama"
									transform="translate(155 561)">
									<tspan x={-8.296} y={15}>
										{'12'}
									</tspan>
								</text>
							</g>
							<g transform="translate(7 -491)">
								<text
									className="n-pentagrama"
									transform="translate(155 561)">
									<tspan x={-8} y={15}>
										{'13'}
									</tspan>
								</text>
							</g>
							<g transform="translate(56 -491)">
								<text
									className="n-pentagrama"
									transform="translate(155 561)">
									<tspan x={-8.136} y={15}>
										{'14'}
									</tspan>
								</text>
							</g>
							<g
								transform="translate(105 -491)"
								onClick={() => setView('15-03')}>
								<text
									className="n-pentagrama"
									transform="translate(155 561)">
									<tspan x={-8.472} y={15}>
										{'15'}
									</tspan>
								</text>
							</g>
							<g transform="translate(154 -491)">
								<text
									className="n-pentagrama"
									transform="translate(155 561)">
									<tspan x={-8.632} y={15}>
										{'16'}
									</tspan>
								</text>
							</g>
							<g transform="translate(-140 -458)">
								<text
									className="n-pentagrama"
									transform="translate(155 561)">
									<tspan x={-8.048} y={15}>
										{'17'}
									</tspan>
								</text>
							</g>
							<g transform="translate(-91 -458)">
								<text
									className="n-pentagrama"
									transform="translate(155 561)">
									<tspan x={-8.632} y={15}>
										{'18'}
									</tspan>
								</text>
							</g>
							<g transform="translate(-42 -458)">
								<text
									className="n-pentagrama"
									transform="translate(155 561)">
									<tspan x={-8.304} y={15}>
										{'19'}
									</tspan>
								</text>
							</g>
							<g transform="translate(7 -458)">
								<text
									className="n-pentagrama"
									transform="translate(155 561)">
									<tspan x={-9.664} y={15}>
										{'20'}
									</tspan>
								</text>
							</g>
							<g transform="translate(56 -458)">
								<text
									className="n-pentagrama"
									transform="translate(155 561)">
									<tspan x={-8.296} y={15}>
										{'21'}
									</tspan>
								</text>
							</g>
							<g transform="translate(105 -458)">
								<text
									className="n-pentagrama"
									transform="translate(155 561)">
									<tspan x={-9.376} y={15}>
										{'22'}
									</tspan>
								</text>
							</g>
							<g transform="translate(154 -458)">
								<text
									className="n-pentagrama"
									transform="translate(155 561)">
									<tspan x={-9.568} y={15}>
										{'23'}
									</tspan>
								</text>
							</g>
							<g transform="translate(-140 -425)">
								<text
									className="n-pentagrama"
									transform="translate(155 561)">
									<tspan x={-8.888} y={15}>
										{'24'}
									</tspan>
								</text>
							</g>
							<g transform="translate(-91 -425)">
								<text
									className="n-pentagrama"
									transform="translate(155 561)">
									<tspan x={-9.552} y={15}>
										{'25'}
									</tspan>
								</text>
							</g>
							<g transform="translate(-42 -425)">
								<text
									className="n-pentagrama"
									transform="translate(155 561)">
									<tspan x={-9.304} y={15}>
										{'26'}
									</tspan>
								</text>
							</g>
							<g transform="translate(7 -425)">
								<text
									className="n-pentagrama"
									transform="translate(155 561)">
									<tspan x={-9.128} y={15}>
										{'27'}
									</tspan>
								</text>
							</g>
							<g transform="translate(56 -425)">
								<text
									className="n-pentagrama"
									transform="translate(155 561)">
									<tspan x={-9.712} y={15}>
										{'28'}
									</tspan>
								</text>
							</g>
							<g transform="translate(105 -425)">
								<text
									className="n-pentagrama"
									transform="translate(155 561)">
									<tspan x={-9.712} y={15}>
										{'29'}
									</tspan>
								</text>
							</g>
							<g transform="translate(154 -425)">
								<text
									className="n-pentagrama"
									transform="translate(155 561)">
									<tspan x={-9.856} y={15}>
										{'30'}
									</tspan>
								</text>
							</g>
							<g transform="translate(-140 -392)">
								<text
									className="n-pentagrama"
									transform="translate(155 561)">
									<tspan x={-8.488} y={15}>
										{'31'}
									</tspan>
								</text>
							</g>
							<g transform="translate(-91 -392)">
								<text
									className="n-pentagrama"
									transform="translate(155 561)">
									<tspan x={-8.096} y={15}>
										{'01'}
									</tspan>
								</text>
							</g>
							<g transform="translate(-42 -392)">
								<text
									className="n-pentagrama"
									transform="translate(155 561)">
									<tspan x={-9.664} y={15}>
										{'02'}
									</tspan>
								</text>
							</g>
							<g transform="translate(7 -392)">
								<text
									className="n-pentagrama"
									transform="translate(155 561)">
									<tspan x={-9.856} y={15}>
										{'03'}
									</tspan>
								</text>
							</g>
							<g transform="translate(56 -392)">
								<text
									className="n-pentagrama"
									transform="translate(155 561)">
									<tspan x={-9.832} y={15}>
										{'04'}
									</tspan>
								</text>
							</g>
							<g transform="translate(105 -392)">
								<text
									className="n-pentagrama"
									transform="translate(155 561)">
									<tspan x={-9.84} y={15}>
										{'05'}
									</tspan>
								</text>
							</g>
							<g transform="translate(154 -392)">
								<text
									className="n-pentagrama"
									transform="translate(155 561)">
									<tspan x={-10} y={15}>
										{'06'}
									</tspan>
								</text>
							</g>
						</g>
						<text
							className="o-pentagrama"
							transform="translate(4.524 25.192)">
							<tspan x={0} y={0}>
								{t('Marzo 2024')}
							</tspan>
						</text>
						<line
							className="p-pentagrama"
							x2={342}
							transform="translate(4.524 40.192)"
						/>
						<path
							className="d-pentagrama"
							d="M9.095,0l9.095,15.591H0Z"
							transform="translate(293.111 30.68) rotate(-90)"
							onClick={() => setView('02-02')}
						/>
						<path
							className="d-pentagrama"
							d="M9.095,0l9.095,15.591H0Z"
							transform="translate(346.524 12.491) rotate(90)"
							onClick={() => setView('02-05')}
						/>
					</g>
					<g
						className="u-pentagrama"
						transform="matrix(1, 0, 0, 1, 0, 0)">
						<path
							className="q-pentagrama"
							d="M308.312,19.293,285.481,217.271H115.6c-33.527,0-63.637,21.151-75.881,53.3l-5.389,14.164a19.172,19.172,0,0,1-3.835-9.893L.116,19.36C-.941,9.1,5.328,0,13.443,0H294.977c8.1,0,14.358,9.058,13.336,19.293"
							transform="translate(68.59 100.51)"
						/>
					</g>
					<g
						className="t-pentagrama"
						transform="matrix(1, 0, 0, 1, 0, 0)">
						<path
							className="g-pentagrama"
							d="M330.722,488.86l-6.631,57.507c-.854,8.56-6.566,14.978-13.34,14.978H89.066a12.141,12.141,0,0,1-9.5-5.018l5.389-14.164c12.244-32.151,42.354-53.3,75.881-53.3Z"
							transform="translate(23.35 -171.08)"
						/>
					</g>
					<text
						className="r-pentagrama"
						transform="translate(332.806 344.525)">
						<tspan x={-170.797} y={0}>
							{'XI Simposio de Enfermedades'}
						</tspan>
						<tspan x={-144.254} y={12}>
							{'Reumáticas Funinderma '}
						</tspan>
					</text>
					<text
						className="s-pentagrama"
						transform="translate(112.806 362.525)">
						<tspan x={86.24} y={8}>
							{'Bogotá 15 de Marzo Bogotá Plaza'}
						</tspan>
					</text>
				</svg>
			) : view === '02-05' ? (
				<May02
					onNext={() => setView('04-05')}
					onPrev={() => setView('15-03')}
					onNextMonth={() => setView('06')}
					onPrevMonth={() => setView('06-03')}
					setView={setView}
				/>
			) : view === '04-05' ? (
				<May04
					onNext={() => setView('16-05')}
					onPrev={() => setView('02-05')}
					onNextMonth={() => setView('06')}
					onPrevMonth={() => setView('06-03')}
					setView={setView}
				/>
			) : view === '16-05' ? (
				<May16
					onNext={() => setView('18-05')}
					onPrev={() => setView('04-05')}
					onNextMonth={() => setView('06')}
					onPrevMonth={() => setView('06-03')}
					setView={setView}
				/>
			) : view === '18-05' ? (
				<May18
					onNext={() => setView('22-05')}
					onPrev={() => setView('16-05')}
					onNextMonth={() => setView('06')}
					onPrevMonth={() => setView('06-03')}
					setView={setView}
				/>
			) : view === '22-05' ? (
				<May22
					onNext={() => setView('23-05')}
					onPrev={() => setView('18-05')}
					onNextMonth={() => setView('06')}
					onPrevMonth={() => setView('06-03')}
					setView={setView}
				/>
			) : view === '23-05' ? (
				<May23
					onNext={() => setView('24-05')}
					onPrev={() => setView('22-05')}
					onNextMonth={() => setView('06')}
					onPrevMonth={() => setView('06-03')}
					setView={setView}
				/>
			) : view === '24-05' ? (
				<May24
				onNext={() => setView('25-05')}
				onPrev={() => setView('23-05')}
				onNextMonth={() => setView('06')}
				onPrevMonth={() => setView('06-03')}
				setView={setView}
			/>
			) : view === '25-05' ? (
				<May25
				onNext={() => setView('30-05')}
				onPrev={() => setView('24-05')}
				onNextMonth={() => setView('06')}
				onPrevMonth={() => setView('06-03')}
				setView={setView}
			/>
			) : view === '30-05' ? (
				<May30
				onNext={() => setView('31-05')}
				onPrev={() => setView('25-05')}
				onNextMonth={() => setView('06')}
				onPrevMonth={() => setView('06-03')}
				setView={setView}
			/>
			) : view === '31-05' ? (
				<May31
				onNext={() => setView('06')}
				onPrev={() => setView('30-05')}
				onNextMonth={() => setView('06')}
				onPrevMonth={() => setView('06-03')}
				setView={setView}
			/>
			) : view === '06' ? (
				<June
					onNext={() => setView('07')}
					onPrev={() => setView('31-05')}
					onPrevMonth={() => setView('02-05')}
					onNextMonth={() => setView('07')}
				/>
			) : view === '07' ? (
				<July
					onNext={() => setView('08')}
					onPrev={() => setView('06')}
					onPrevMonth={() => setView('06')}
					onNextMonth={() => setView('08')}
				/>
			) : view === '08' ? (
				<Agoust
					onNext={() => setView('09')}
					onPrev={() => setView('07')}
					onPrevMonth={() => setView('07')}
					onNextMonth={() => setView('09')}
				/>
			) : view === '09' ? (
				<September
					onNext={() => setView('10')}
					onPrev={() => setView('08')}
					onPrevMonth={() => setView('08')}
					onNextMonth={() => setView('10')}
				/>
			) : view === '10' ? (
				<October
					onNext={() => setView('11')}
					onPrev={() => setView('09')}
					onPrevMonth={() => setView('09')}
					onNextMonth={() => setView('11')}
				/>
			) : view === '11' ? (
				<November
					onNext={() => setView('12')}
					onPrev={() => setView('10')}
					onPrevMonth={() => setView('10')}
					onNextMonth={() => setView('12')}
				/>
			) : view === '12' ? (
				<December
					onNext={() => setView('01')}
					onPrev={() => setView('11')}
					onPrevMonth={() => setView('11')}
					onNextMonth={() => setView('01')}
				/>
			) : view === '01' ? (
				<January
					onNext={() => setView('02-02')}
					onPrev={() => setView('12')}
					onPrevMonth={() => setView('12')}
					onNextMonth={() => setView('02-02')}
				/>
			) : null}
		</React.Fragment>
	)
}

export default EventosMobile
