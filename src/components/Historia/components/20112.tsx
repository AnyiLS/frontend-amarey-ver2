import { ILifeLine2000 } from './2000'

const LifeLine20112: React.FC<ILifeLine2000> = ({
	onClick,
	onLess,
	handleChangeStepForce,
	t,
	selectedLanguage,
}) => {
	return (
		<svg viewBox="0 0 1920 874.839">
			<defs>
				<style>
					{
						'.item-106-a,.item-106-m{fill:#fff;}.item-106-b{fill:#e7002a;}.item-106-c,.item-106-i,.item-106-o,.item-106-q{fill:#001f5f;}.item-106-d{opacity:0.5;fill:url(#item-106-a);}.item-106-e{opacity:0.75;fill:url(#item-106-b);}.item-106-f{fill:none;stroke:#fff;stroke-width:3px;}.item-106-f,.item-106-g{opacity:0.6;}.item-106-h{fill:url(#item-106-c);}.item-106-i{font-size:32px;}.item-106-i,.item-106-m,.item-106-o{font-family:Silka-Bold, Silka;font-weight:700;}.item-106-j{clip-path:url(#item-106-h);}.item-106-k{fill:#182856;font-size:24px;font-family:Silka-Regular, Silka;}.item-106-l{fill:#e40032;}.item-106-m{font-size:40px;}.item-106-n{fill:url(#item-106-k);}.item-106-o{font-size:60px;}.item-106-p{opacity:0.7;}.item-106-q{font-size:18px;font-family:Silka-SemiBold, Silka;font-weight:600;}.item-106-r{filter:url(#item-106-r);}.item-106-s{filter:url(#item-106-p);}.item-106-t{filter:url(#item-106-n);}.item-106-u{filter:url(#item-106-l);}.item-106-v{filter:url(#item-106-i);}.item-106-w{filter:url(#item-106-f);}.item-106-x{filter:url(#item-106-d);}'
					}
				</style>
				<linearGradient
					id="item-106-a"
					x1={0.5}
					x2={0.5}
					y2={0.624}
					gradientUnits="objectBoundingBox">
					<stop offset={0} stopColor="#001f5f" stopOpacity={0} />
					<stop
						offset={0.085}
						stopColor="#001f5f"
						stopOpacity={0.016}
					/>
					<stop offset={1} stopColor="#001f5f" />
				</linearGradient>
				<linearGradient
					id="item-106-b"
					x1={0.5}
					y1={0.053}
					x2={0.5}
					y2={0.376}
					gradientUnits="objectBoundingBox">
					<stop offset={0} stopColor="#001f5f" stopOpacity={0} />
					<stop offset={1} stopColor="#001f5f" />
				</linearGradient>
				<pattern
					id="item-106-c"
					preserveAspectRatio="xMidYMid slice"
					width="100%"
					height="100%"
					viewBox="0 0 1018 702">
					<image
						width={1018}
						height={702}
						xlinkHref="/images/ambiente.webp"
					/>
				</pattern>
				<filter
					id="item-106-d"
					x={931.954}
					y={44.471}
					width={320.286}
					height={168.046}
					filterUnits="userSpaceOnUse">
					<feOffset dy={3} />
					<feGaussianBlur stdDeviation={3} result="e" />
					<feFlood floodOpacity={0.502} />
					<feComposite operator="in" in2="e" />
					<feComposite in="SourceGraphic" />
				</filter>
				<filter
					id="item-106-f"
					x={948.694}
					y={159.825}
					width={281.522}
					height={133.735}
					filterUnits="userSpaceOnUse">
					<feOffset dy={3} />
					<feGaussianBlur stdDeviation={3} result="g" />
					<feFlood floodOpacity={0.502} />
					<feComposite operator="in" in2="g" />
					<feComposite in="SourceGraphic" />
				</filter>
				<clipPath id="h">
					<rect className="a" width={479.319} height={236.689} />
				</clipPath>
				<filter
					id="item-106-i"
					x={1489}
					y={694.332}
					width={298}
					height={98.849}
					filterUnits="userSpaceOnUse">
					<feOffset dy={3} />
					<feGaussianBlur stdDeviation={3} result="j" />
					<feFlood floodOpacity={0.4} />
					<feComposite operator="in" in2="j" />
					<feComposite in="SourceGraphic" />
				</filter>
				<pattern
					id="item-106-k"
					width={1}
					height={1}
					viewBox="0 69.525 475.286 235.918">
					<image
						preserveAspectRatio="xMidYMid slice"
						width={475.286}
						height={316.858}
						xlinkHref="/images/history/2011-1-1.webp"
					/>
				</pattern>
				<filter
					id="item-106-l"
					x={491.714}
					y={257.085}
					width={493.286}
					height={253.918}
					filterUnits="userSpaceOnUse">
					<feOffset dy={3} />
					<feGaussianBlur stdDeviation={3} result="m" />
					<feFlood floodOpacity={0.502} />
					<feComposite operator="in" in2="m" />
					<feComposite in="SourceGraphic" />
				</filter>
				<filter
					id="item-106-n"
					x={518.034}
					y={438.458}
					width={432.338}
					height={199.971}
					filterUnits="userSpaceOnUse">
					<feOffset dy={3} />
					<feGaussianBlur stdDeviation={3} result="o" />
					<feFlood floodOpacity={0.502} />
					<feComposite operator="in" in2="o" />
					<feComposite in="SourceGraphic" />
				</filter>
				<filter
					id="item-106-p"
					x={133}
					y={694.332}
					width={298}
					height={98.849}
					filterUnits="userSpaceOnUse">
					<feOffset dy={3} />
					<feGaussianBlur stdDeviation={3} result="q" />
					<feFlood floodOpacity={0.4} />
					<feComposite operator="in" in2="q" />
					<feComposite in="SourceGraphic" />
				</filter>
				<filter
					id="item-106-r"
					x={229}
					y={781.961}
					width={1424}
					height={97}
					filterUnits="userSpaceOnUse">
					<feOffset dy={3} />
					<feGaussianBlur stdDeviation={3} result="s" />
					<feFlood floodOpacity={0.4} />
					<feComposite operator="in" in2="s" />
					<feComposite in="SourceGraphic" />
				</filter>
			</defs>
			<path
				className="item-106-b"
				d="M600.14.063V1.795H741.7V1.733H885.271a170.418,170.418,0,0,1,157.716,105.125l.051.124,13.93,33.429h1.874l-14.259-34.218c-.5-1.205-1.016-2.4-1.545-3.585-1.688-3.808-3.507-7.543-5.575-11.429A172.618,172.618,0,0,0,885.271,0H648.927V.063Z"
				transform="translate(-600.14 257.914)"
			/>
			<path
				className="item-106-c"
				d="M1928,802.11l-33.267,12.017q-3.3,1.186-6.541,2.444c-54.718,21.025-101.061,54.854-134.344,98.125-34.6,44.988-52.883,97.344-52.883,151.416v373.827h3.161V1066.111c0-109.438,75.293-207.356,191.819-249.46l.228-.081,31.826-11.5Z"
				transform="translate(42 -716.48)"
			/>
			<g transform="translate(0 50.471)">
				<g transform="translate(0 -329.714)">
					<path
						className="item-106-d"
						d="M761.857,0,0,792.286H1920L1158.142,0Z"
						transform="translate(0 365.714)"
					/>
					<path
						className="item-106-e"
						d="M864.554,0,497.566,792.286h924.867L1055.446,0Z"
						transform="translate(0 365.714)"
					/>
				</g>
				<g style={{ transform: 'translateY(56px)' }}>
					<line
						className="item-106-f"
						x2={1465}
						transform="translate(227.5 591.786)"
					/>
					<path
						className="item-106-f"
						d="M0,0H802"
						transform="translate(559 243.786)"
					/>
					<g
						className="item-106-g"
						transform="translate(-471.046 -1559)">
						<g
							className="item-106-x"
							transform="matrix(1, 0, 0, 1, 471.05, 1508.53)">
							<path
								className="item-106-h"
								d="M302.18,18.354,280.263,150.046H74.386c-33.232,0-53.4-24.047-57.646-34.691L.115,18.415C-.925,8.662,5.223,0,13.177,0H289.109c7.936,0,14.066,8.618,13.071,18.354"
								transform="translate(940.95 50.47)"
							/>
						</g>
						<g
							className="item-106-w"
							transform="matrix(1, 0, 0, 1, 471.05, 1508.53)">
							<path
								className="item-106-a"
								d="M76.818,166.8c-33.233,0-53.4-24.047-57.646-34.691l13.149,76.638c.856,8.12,6.444,14.189,13.063,14.189h91.66l6.193,10.728,7.113,12.32a3.723,3.723,0,0,0,6.447,0l7.113-12.32,6.193-10.728h92.551c6.636,0,12.233-6.1,13.071-14.25l6.968-41.886Z"
								transform="translate(938.52 33.72)"
							/>
						</g>
						<text
							className="item-106-i"
							transform="translate(1528.046 1748.286)">
							<tspan x={0} y={0}>
								{'2012'}
							</tspan>
						</text>
					</g>
					<g
						className="item-106-j"
						transform="translate(960 261.521)">
						<path
							className="item-106-a"
							d="M448.414,236.689H30.913A30.9,30.9,0,0,1,.384,200.977L27.924,26.1A30.9,30.9,0,0,1,58.452,0H448.414a30.9,30.9,0,0,1,30.9,30.906V205.785a30.9,30.9,0,0,1-30.9,30.9"
							transform="translate(0)"
						/>
					</g>
					<text
						className="item-106-k"
						transform={
							selectedLanguage === 'es'
								? 'translate(1030 332.286)'
								: 'translate(1030 347.286)'
						}>
						<tspan x={0} y={0}>
							{t('Grupo Amarey obtiene la ')}
						</tspan>
						<tspan x={0} y={26}>
							{t('representación del sistema ')}
						</tspan>
						<tspan x={0} y={52}>
							{t('robótico da Vinci en Colombia ')}
						</tspan>
						<tspan x={0} y={78}>
							{t('para cirugía mínimamente ')}
						</tspan>
						<tspan x={0} y={104}>
							{t('invasiva.')}
						</tspan>
					</text>
					<g transform="translate(-911.287 -1346.386)">
						<g
							className="item-106-u"
							transform="matrix(1, 0, 0, 1, 911.29, 1295.92)">
							<path
								className="item-106-n"
								d="M475.12,28.858l-34.461,207.06h-323.7c-52.251,0-83.966-37.809-90.637-54.545L.181,28.954C-1.454,13.619,8.213,0,20.718,0h433.85c12.478,0,22.116,13.55,20.552,28.858"
								transform="translate(500.71 263.08)"
							/>
						</g>
						<g
							className="item-106-t"
							transform="matrix(1, 0, 0, 1, 911.29, 1295.92)">
							<path
								className="item-106-a"
								d="M109.809,186.655c-52.252,0-83.966-37.809-90.637-54.545l20.674,120.5c1.345,12.768,10.132,22.31,20.538,22.31H204.5l9.738,16.867,11.184,19.37a5.854,5.854,0,0,0,10.137,0l11.184-19.37,9.738-16.867H402c10.434,0,19.234-9.6,20.552-22.406l10.956-65.858Z"
								transform="translate(507.86 312.35)"
							/>
						</g>
						<text
							className="item-106-o"
							transform="translate(1580.287 1862.672)">
							<tspan x={0} y={0}>
								{'2011'}
							</tspan>
						</text>
					</g>
				</g>

				<g transform="translate(0 -329.714)" onClick={onClick}>
					<g
						className="item-106-v cursor-pointer"
						transform="matrix(1, 0, 0, 1, 0, 279.24)">
						<path
							className="item-106-l cursor-pointer"
							d="M280,0H57.432C34.283,0,13.5,23.591,5.042,59.456L0,80.849H220.722c24.663,0,46.745-25.435,55.433-63.849Z"
							transform="translate(1498 700.33)"
						/>
					</g>
					<path
						className="item-106-a cursor-pointer"
						d="M45.263,0V24.412L66.419,12.2,56.314,6.375Z"
						transform="translate(1673.737 1007.794)"
					/>
					<text
						className="item-106-m cursor-pointer"
						transform="translate(1539 1032)">
						<tspan x={0} y={0}>
							{t('Avanzar')}
						</tspan>
					</text>
				</g>

				<g transform="translate(142 649.861)" onClick={onLess}>
					<g
						className="item-106-s cursor-pointer"
						transform="matrix(1, 0, 0, 1, -142, -700.33)">
						<path
							className="item-106-l cursor-pointer"
							d="M0,0H222.568c23.149,0,43.936,23.591,52.389,59.456L280,80.849H59.278C34.615,80.849,12.533,55.415,3.845,17Z"
							transform="translate(142 700.33)"
						/>
					</g>
					<path
						className="item-106-a cursor-pointer"
						d="M66.419,0V24.412L45.263,12.2l10.105-5.83Z"
						transform="translate(-12.419 28.219)"
					/>
					<text
						className="item-106-m cursor-pointer"
						transform="translate(66 52.425)">
						<tspan x={0} y={0}>
							{t('Regresar')}
						</tspan>
					</text>
				</g>
				<g transform="translate(90.016 -322.349)">
					<g
						className="item-106-r"
						transform="matrix(1, 0, 0, 1, -90.02, 271.88)">
						<rect
							className="item-106-a"
							width={1406}
							height={79}
							rx={39.5}
							transform="translate(238 787.96)"
						/>
					</g>
					<g
						className="item-106-p"
						transform="translate(16.685 -769)">
						<path
							className="item-106-c"
							d="M4.29,13.933h0c-2.369,0-4.29-.717-4.29-1.6V1.6C0,.717,1.921,0,4.29,0S8.58.717,8.58,1.6v10.73c0,.884-1.921,1.6-4.29,1.6"
							transform="translate(199 1868.394)"
						/>
						<path
							className="item-106-c"
							d="M0,18.663H0a4.071,4.071,0,0,1,3.809-4.29H1262.286a4.071,4.071,0,0,1,3.809,4.29,4.071,4.071,0,0,1-3.809,4.29H3.809A4.071,4.071,0,0,1,0,18.663"
							transform="translate(199 1859.374)"
						/>
						<path
							className="item-106-c"
							d="M83.153,13.933h0c-2.369,0-4.29-.717-4.29-1.6V1.6c0-.885,1.921-1.6,4.29-1.6s4.29.717,4.29,1.6v10.73c0,.884-1.921,1.6-4.29,1.6"
							transform="translate(199 1868.394)"
						/>
						<path
							className="item-106-c"
							d="M162.016,13.933h0c-2.369,0-4.29-.717-4.29-1.6V1.6c0-.885,1.921-1.6,4.29-1.6s4.29.717,4.29,1.6v10.73c0,.884-1.921,1.6-4.29,1.6"
							transform="translate(199 1868.394)"
						/>
						<path
							className="item-106-c"
							d="M240.879,13.933h0c-2.369,0-4.29-.717-4.29-1.6V1.6c0-.885,1.921-1.6,4.29-1.6s4.29.717,4.29,1.6v10.73c0,.884-1.921,1.6-4.29,1.6"
							transform="translate(199 1868.394)"
						/>
						<path
							className="item-106-c"
							d="M319.742,13.933h0c-2.369,0-4.29-.717-4.29-1.6V1.6c0-.885,1.921-1.6,4.29-1.6s4.29.717,4.29,1.6v10.73c0,.884-1.921,1.6-4.29,1.6"
							transform="translate(199 1868.394)"
						/>
						<path
							className="item-106-c"
							d="M398.6,13.933h0c-2.369,0-4.29-.717-4.29-1.6V1.6c0-.885,1.921-1.6,4.29-1.6s4.29.717,4.29,1.6v10.73c0,.884-1.921,1.6-4.29,1.6"
							transform="translate(199 1868.394)"
						/>
						<path
							className="item-106-c"
							d="M477.467,13.933h0c-2.369,0-4.29-.717-4.29-1.6V1.6c0-.885,1.921-1.6,4.29-1.6s4.29.717,4.29,1.6v10.73c0,.884-1.921,1.6-4.29,1.6"
							transform="translate(199 1868.394)"
						/>
						<path
							className="item-106-c"
							d="M556.33,13.933h0c-2.369,0-4.29-.717-4.29-1.6V1.6c0-.885,1.921-1.6,4.29-1.6s4.29.717,4.29,1.6v10.73c0,.884-1.921,1.6-4.29,1.6"
							transform="translate(199 1868.394)"
						/>
						<path
							className="item-106-c"
							d="M635.193,13.933h0c-2.37,0-4.29-.717-4.29-1.6V1.6c0-.885,1.92-1.6,4.29-1.6s4.29.717,4.29,1.6v10.73c0,.884-1.921,1.6-4.29,1.6"
							transform="translate(199 1868.394)"
						/>
						<path
							className="item-106-c"
							d="M714.056,13.933h0c-2.369,0-4.29-.717-4.29-1.6V1.6c0-.885,1.921-1.6,4.29-1.6s4.29.717,4.29,1.6v10.73c0,.884-1.921,1.6-4.29,1.6"
							transform="translate(199 1868.394)"
						/>
						<path
							className="item-106-c"
							d="M792.919,13.933h0c-2.37,0-4.29-.717-4.29-1.6V1.6c0-.885,1.92-1.6,4.29-1.6s4.29.717,4.29,1.6v10.73c0,.884-1.921,1.6-4.29,1.6"
							transform="translate(199 1868.394)"
						/>
						<path
							className="item-106-c"
							d="M871.781,13.933h0c-2.369,0-4.29-.717-4.29-1.6V1.6c0-.885,1.921-1.6,4.29-1.6s4.29.717,4.29,1.6v10.73c0,.884-1.921,1.6-4.29,1.6"
							transform="translate(199 1868.394)"
						/>
						<path
							className="item-106-c"
							d="M950.644,13.933h0c-2.37,0-4.29-.717-4.29-1.6V1.6c0-.885,1.92-1.6,4.29-1.6s4.29.717,4.29,1.6v10.73c0,.884-1.921,1.6-4.29,1.6"
							transform="translate(199 1868.394)"
						/>
						<path
							className="item-106-c"
							d="M1029.507,13.933h0c-2.37,0-4.29-.717-4.29-1.6V1.6c0-.885,1.92-1.6,4.29-1.6s4.29.717,4.29,1.6v10.73c0,.884-1.921,1.6-4.29,1.6"
							transform="translate(199 1868.394)"
						/>
						<path
							className="item-106-c"
							d="M1108.37,13.933h0c-2.37,0-4.29-.717-4.29-1.6V1.6c0-.885,1.92-1.6,4.29-1.6s4.29.717,4.29,1.6v10.73c0,.884-1.92,1.6-4.29,1.6"
							transform="translate(199 1868.394)"
						/>
						<path
							className="item-106-c"
							d="M1187.233,13.933h0c-2.369,0-4.29-.717-4.29-1.6V1.6c0-.885,1.921-1.6,4.29-1.6s4.29.717,4.29,1.6v10.73c0,.884-1.92,1.6-4.29,1.6"
							transform="translate(199 1868.394)"
						/>
						<path
							className="item-106-c"
							d="M1266.095,13.933h0c-2.369,0-4.29-.717-4.29-1.6V1.6c0-.885,1.921-1.6,4.29-1.6s4.29.717,4.29,1.6v10.73c0,.884-1.92,1.6-4.29,1.6"
							transform="translate(199 1868.394)"
						/>
					</g>
					<path
						className="item-106-l"
						d="M20.633,22.269l4.892,6.658a.185.185,0,0,1,.035.107l.028,5.213a.183.183,0,0,1-.181.183l-.727,0a.182.182,0,0,1-.183-.181l-.01-1.849-2.63.013.01,1.849a.182.182,0,0,1-.181.183l-.727,0a.181.181,0,0,1-.182-.181l-.025-4.789a.181.181,0,0,1,.181-.183l.727,0a.183.183,0,0,1,.183.181l.01,1.849,2.63-.013-.01-1.978-4.442-6.047-3.779.019L11.871,29.4l.01,1.977,2.63-.014-.01-1.849a.181.181,0,0,1,.181-.183l.727,0a.182.182,0,0,1,.183.181l.025,4.789a.182.182,0,0,1-.181.183l-.727,0a.182.182,0,0,1-.183-.181l-.01-1.849-2.63.014.01,1.849a.183.183,0,0,1-.181.183l-.727,0a.182.182,0,0,1-.183-.181l-.027-5.213A.182.182,0,0,1,10.813,29l4.822-6.71a.184.184,0,0,1,.147-.076l4.7-.024a.181.181,0,0,1,.147.074m-7.576-5.444L5.186,14.313a.176.176,0,0,0-.112,0L.125,15.95a.182.182,0,0,0-.115.23l.228.691a.182.182,0,0,0,.23.115l1.755-.58.826,2.5-1.756.58a.182.182,0,0,0-.115.23l.228.691a.183.183,0,0,0,.23.115l4.547-1.5a.181.181,0,0,0,.115-.23l-.228-.691a.183.183,0,0,0-.23-.115l-1.756.581-.825-2.5,1.877-.621,7.148,2.282.584,1.766.6,1.821L9.092,27.4l-1.878.62-.825-2.5,1.756-.58a.182.182,0,0,0,.115-.23l-.229-.691a.182.182,0,0,0-.229-.115l-4.547,1.5a.182.182,0,0,0-.115.23l.228.691a.182.182,0,0,0,.23.115l1.756-.581.826,2.5-1.756.581a.182.182,0,0,0-.116.23l.229.691a.182.182,0,0,0,.23.115l4.949-1.637a.182.182,0,0,0,.091-.067l4.821-6.709a.18.18,0,0,0,.025-.163l-1.477-4.467a.182.182,0,0,0-.117-.117m9.706-1.23L30.607,13a.18.18,0,0,0,.09-.067L33.74,8.7a.182.182,0,0,0-.042-.254l-.591-.424a.181.181,0,0,0-.254.042l-1.08,1.5L29.639,8.031l1.079-1.5a.181.181,0,0,0-.041-.254l-.591-.424a.181.181,0,0,0-.254.042L27.038,9.782a.182.182,0,0,0,.041.254l.591.424a.182.182,0,0,0,.254-.042L29,8.918l2.136,1.535-1.154,1.606L22.86,14.414l-3.069-2.205-.039-7.5L20.907,3.1l2.136,1.535-1.079,1.5A.181.181,0,0,0,22,6.389l.591.424a.181.181,0,0,0,.254-.042l2.795-3.889a.181.181,0,0,0-.042-.254L25.012,2.2a.182.182,0,0,0-.254.042l-1.08,1.5L21.544,2.214l1.079-1.5a.182.182,0,0,0-.042-.254L21.99.034a.181.181,0,0,0-.254.042L18.694,4.309a.185.185,0,0,0-.034.107l.043,8.262a.181.181,0,0,0,.076.147L22.6,15.57a.182.182,0,0,0,.163.025m13.209,1.089.221-.693a.182.182,0,0,0-.118-.229l-4.965-1.585a.183.183,0,0,0-.113,0l-7.844,2.594a.18.18,0,0,0-.116.117l-1.43,4.482a.181.181,0,0,0,.026.163l4.891,6.659a.185.185,0,0,0,.092.065l4.965,1.585a.182.182,0,0,0,.229-.118l.221-.693a.181.181,0,0,0-.117-.229l-1.762-.563.8-2.505,1.762.562a.182.182,0,0,0,.229-.117l.221-.693a.182.182,0,0,0-.118-.229L28.481,23.8a.181.181,0,0,0-.228.118l-.222.693a.181.181,0,0,0,.118.228l1.761.563-.8,2.505-1.884-.6-4.442-6.048,1.149-3.6,7.124-2.356,1.883.6-.8,2.505-1.762-.563a.183.183,0,0,0-.229.118l-.221.693a.181.181,0,0,0,.118.228l4.562,1.456a.182.182,0,0,0,.229-.117l.222-.693a.183.183,0,0,0-.118-.229l-1.762-.562.8-2.505,1.762.563a.183.183,0,0,0,.229-.118M13.611,15.61,17.4,12.82a.183.183,0,0,0,.074-.148L17.418,4.41a.179.179,0,0,0-.035-.106L14.291.107a.181.181,0,0,0-.254-.039L13.451.5a.182.182,0,0,0-.038.254l1.1,1.489L12.392,3.8,11.3,2.313a.182.182,0,0,0-.254-.038l-.586.431a.182.182,0,0,0-.038.254l2.84,3.856a.182.182,0,0,0,.254.038l.586-.431a.182.182,0,0,0,.039-.254l-1.1-1.489,2.118-1.56L16.33,4.713l.049,7.5-3.042,2.241L6.185,12.186,5.013,10.593,7.13,9.034l1.1,1.489a.182.182,0,0,0,.254.038l.586-.431a.182.182,0,0,0,.039-.254L6.265,6.02a.181.181,0,0,0-.254-.039l-.586.431a.182.182,0,0,0-.038.254l1.1,1.489L4.366,9.715l-1.1-1.489a.182.182,0,0,0-.254-.039l-.586.431a.182.182,0,0,0-.038.254l3.092,4.2a.178.178,0,0,0,.091.065l7.874,2.5a.183.183,0,0,0,.163-.027"
						transform="translate(674.399 1064.889)"
					/>
					<text
						className="item-106-q cursor-pointer"
						transform="translate(199 1132)"
						onClick={() => handleChangeStepForce(0)}>
						<tspan x={0} y={0}>
							{'1984'}
						</tspan>
					</text>
					<text
						className="item-106-q cursor-pointer"
						transform="translate(279 1132)"
						onClick={() => handleChangeStepForce(1)}>
						<tspan x={0} y={0}>
							{'1999'}
						</tspan>
					</text>
					<text
						className="item-106-q cursor-pointer"
						transform="translate(358 1132)"
						onClick={() => handleChangeStepForce(2)}>
						<tspan x={0} y={0}>
							{'2000'}
						</tspan>
					</text>
					<text
						className="item-106-q cursor-pointer"
						transform="translate(441 1132)"
						onClick={() => handleChangeStepForce(3)}>
						<tspan x={0} y={0}>
							{'2007'}
						</tspan>
					</text>
					<text
						className="item-106-q cursor-pointer"
						transform="translate(522 1132)"
						onClick={() => handleChangeStepForce(4)}>
						<tspan x={0} y={0}>
							{'2009'}
						</tspan>
					</text>
					<text
						className="item-106-q cursor-pointer"
						transform="translate(605 1132)"
						onClick={() => handleChangeStepForce(5)}>
						<tspan x={0} y={0}>
							{'2011'}
						</tspan>
					</text>
					<text
						className="item-106-q cursor-pointer"
						transform="translate(681 1132)"
						onClick={() => handleChangeStepForce(6)}>
						<tspan x={0} y={0}>
							{'2011'}
						</tspan>
					</text>
					<text
						className="item-106-q cursor-pointer"
						transform="translate(758 1132)"
						onClick={() => handleChangeStepForce(7)}>
						<tspan x={0} y={0}>
							{'2012'}
						</tspan>
					</text>
					<text
						className="item-106-q cursor-pointer"
						transform="translate(836 1132)"
						onClick={() => handleChangeStepForce(8)}>
						<tspan x={0} y={0}>
							{'2012'}
						</tspan>
					</text>
					<text
						className="item-106-q cursor-pointer"
						transform="translate(915 1132)"
						onClick={() => handleChangeStepForce(9)}>
						<tspan x={0} y={0}>
							{'2014'}
						</tspan>
					</text>
					<text
						className="item-106-q cursor-pointer"
						transform="translate(993 1132)"
						onClick={() => handleChangeStepForce(10)}>
						<tspan x={0} y={0}>
							{'2014'}
						</tspan>
					</text>
					<text
						className="item-106-q cursor-pointer"
						transform="translate(1073 1132)"
						onClick={() => handleChangeStepForce(11)}>
						<tspan x={0} y={0}>
							{'2016'}
						</tspan>
					</text>
					<text
						className="item-106-q cursor-pointer"
						transform="translate(1150 1132)"
						onClick={() => handleChangeStepForce(12)}>
						<tspan x={0} y={0}>
							{'2017'}
						</tspan>
					</text>
					<text
						className="item-106-q cursor-pointer"
						transform="translate(1229 1132)"
						onClick={() => handleChangeStepForce(13)}>
						<tspan x={0} y={0}>
							{'2023'}
						</tspan>
					</text>
					<text
						className="item-106-q cursor-pointer"
						transform="translate(1307 1132)"
						onClick={() => handleChangeStepForce(14)}>
						<tspan x={0} y={0}>
							{'2023'}
						</tspan>
					</text>
					<text
						className="item-106-q cursor-pointer"
						transform="translate(1386 1132)"
						onClick={() => handleChangeStepForce(15)}>
						<tspan x={0} y={0}>
							{'2023'}
						</tspan>
					</text>
					<text
						className="item-106-q cursor-pointer"
						transform="translate(1464 1132)"
						onClick={() => handleChangeStepForce(16)}>
						<tspan x={0} y={0}>
							{'2023'}
						</tspan>
					</text>
				</g>
			</g>
		</svg>
	)
}

export default LifeLine20112
