import React from 'react'
/** Mocks */
import { SiteMapMock } from 'mocks/navbar.mocks'
/** Contexts */
import { useLanguage } from 'context/language'
/** Hooks */
import useNavbarComponents from './components'
import useNavbar from './useNavbar'
/** Styles */
import './Navbar.css'
import { useTranslation } from 'react-i18next'

const Navbar: React.FC = () => {
	/** References */
	const subItemRef: React.MutableRefObject<SVGSVGElement | null> =
		React.useRef<SVGSVGElement | null>(null)

	/** Contexts */
	const { selectedLanguage, handleChangeSelectedLanguage } = useLanguage()

	/** States */
	const [hover, setHover] = React.useState<string>('')
	const [hover1, setHover1] = React.useState<string>('')
	const [showSearchable, setShowSearchable] = React.useState<boolean>(false)

	/** Hooks */
	const { results, handleSearchPage, active } = useNavbar()
	const { t } = useTranslation()
	const {
		SubmenuActualidad,
		SubmenuContact,
		SubmenuEtic,
		SubmenuSolution,
		SubmenuWay,
		SubmenuWorkUs,
	} = useNavbarComponents()

	return (
		<div
			className="navbar__estatic fixed top-0 w-full z-[1]"
			id="navbar__container">
			<svg
				viewBox="0 0 1920 105"
				width={window.screen.width}
				height="100%"
				className="shadow-[rgba(0,0,0,0.25)_0px_0.0625em_0.0625em,rgba(0,0,0,0.25)_0px_0.125em_0.5em,rgba(255,255,255,0.1)_0px_0px_0px_1px_inset]"
				preserveAspectRatio="none">
				<defs>
					<filter
						id="a"
						x={0}
						y={0}
						width={1938}
						height={122.012}
						filterUnits="userSpaceOnUse">
						<feOffset dy={3} />
						<feGaussianBlur stdDeviation={3} result="b" />
						<feFlood floodOpacity={0.302} />
						<feComposite operator="in" in2="b" />
						<feComposite in="SourceGraphic" />
					</filter>
					<filter
						id="c"
						x={1622}
						y={30}
						width={174}
						height={69}
						filterUnits="userSpaceOnUse">
						<feOffset dy={3} />
						<feGaussianBlur stdDeviation={3} result="d" />
						<feFlood floodOpacity={0.302} />
						<feComposite operator="in" in2="d" />
						<feComposite in="SourceGraphic" />
					</filter>
					<clipPath id="e">
						<rect className="a" width={204.2} height={57.138} />
					</clipPath>
				</defs>

				<g>
					<g className="k" transform="matrix(1, 0, 0, 1, -9, -6)">
						<path
							className="b"
							d="M0,0H1920V104.012H0Z"
							transform="translate(9 6)"
						/>
					</g>

					<g
						transform="translate(1680 31)"
						style={{ zIndex: 1 }}
						onClick={handleChangeSelectedLanguage}>
						<foreignObject x={0} y={0} width={51} height={51}>
							<img
								src={
									selectedLanguage === 'en'
										? '/images/logo-english.png'
										: '/images/logo-spanish.png'
								}
								alt=""
								className="h-full w-full"
							/>
						</foreignObject>
					</g>

					<g
						transform="translate(1575.944 36.252)"
						className="cursor-pointer"
						onClick={() => setShowSearchable(!showSearchable)}>
						<foreignObject x={0} y={0} width={37} height={37}>
							<img
								src="/images/lupa.svg"
								alt=""
								className="h-full w-full"
							/>
						</foreignObject>
					</g>
					<g
						onMouseOver={() => setHover1('contactenos')}
						onMouseLeave={() => setHover1('')}
						transform="translate(1388 27)"
						onClick={() =>
							setHover(
								hover === 'contactenos' ? '' : 'contactenos'
							)
						}>
						<rect
							className="contactenos-a"
							width={137}
							height={76}
							style={{
								fill:
									hover1 === 'contactenos'
										? '#001F5F'
										: 'transparent',
							}}
						/>
						<text
							className="contactenos-b cursor-pointer"
							transform={
								selectedLanguage === 'es'
									? 'translate(69 29)'
									: 'translate(79 35)'
							}
							style={{
								fill:
									hover1 !== 'contactenos'
										? '#001F5F'
										: '#fff',
							}}>
							<tspan x={-58.905} y={0}>
								{selectedLanguage === 'es'
									? t('Cont\xE1ctenos')
									: t('Cont\xE1ctenos')
											.split(' ')
											.slice(0, 3)
											.join(' ')}
							</tspan>
							{selectedLanguage === 'en' && (
								<tspan x={-34.905} y={20}>
									{t('Cont\xE1ctenos')
										.split(' ')
										.slice(3, 5)
										.join(' ')}
								</tspan>
							)}
						</text>
						{hover1 === 'contactenos' && (
							<line
								className="contactenos-c"
								x2={120}
								y1={1}
								y2={1}
								transform="translate(8.5 47)"
							/>
						)}
						{active
							.find((item) => item.label === 'Contactenos')
							?.path.includes(window.location.pathname) && (
							<line
								className="contactenos-c"
								x2={120}
								y1={1}
								y2={1}
								transform="translate(8.5 47)"
							/>
						)}
						ƒ
					</g>
					<g
						onMouseOver={() => setHover1('trabaje')}
						onMouseLeave={() => setHover1('')}
						transform="translate(1236.982 27)"
						onClick={() =>
							setHover(hover === 'trabaje' ? '' : 'trabaje')
						}>
						<path
							className="trabaje-a"
							d="M0,0H138.964V76H0Z"
							style={{
								fill:
									hover1 === 'trabaje'
										? '#001F5F'
										: 'transparent',
							}}
						/>
						<text
							className="trabaje-b cursor-pointer"
							transform="translate(68.982 22)"
							style={{
								fill: hover1 === 'trabaje' ? '#fff' : '#001F5F',
							}}>
							<tspan
								x={
									selectedLanguage === 'es'
										? -33.246
										: -21.246
								}
								y={0}>
								{t('Trabaje')}
							</tspan>
							<tspan
								x={
									selectedLanguage === 'es'
										? -58.725
										: -30.725
								}
								y={20}>
								{t('con nosotros')}
							</tspan>
						</text>
						{hover1 === 'trabaje' && (
							<line
								className="trabaje-c"
								x2={80}
								transform="translate(28.982 47)"
							/>
						)}

						{active
							.find((item) => item.label === 'Trabaje')
							?.path.includes(window.location.pathname) && (
							<line
								className="trabaje-c"
								x2={80}
								transform="translate(28.982 47)"
							/>
						)}
					</g>
					<g
						onMouseOver={() => setHover1('etica')}
						onMouseLeave={() => setHover1('')}
						transform="translate(1101 27)"
						onClick={() =>
							setHover(hover === 'etica' ? '' : 'etica')
						}>
						<rect
							className="etica-a"
							width={121}
							height={76}
							style={{
								fill:
									hover1 === 'etica'
										? '#001F5F'
										: 'transparent',
							}}
						/>
						<text
							className="etica-b cursor-pointer"
							transform="translate(60 22)"
							style={{
								fill: hover1 !== 'etica' ? '#001F5F' : '#fff',
							}}>
							<tspan
								x={
									selectedLanguage === 'es'
										? -30.114
										: -45.114
								}
								y={0}>
								{t('\xC9tica y')}
							</tspan>
							<tspan
								x={
									selectedLanguage === 'es'
										? -51.912
										: -51.912
								}
								y={20}>
								{t('compliance\u200B')}
							</tspan>
						</text>
						{hover1 === 'etica' && (
							<path
								className="etica-c"
								d="M0,0H107.463"
								transform="translate(6.268 47)"
							/>
						)}
						{active
							.find((item) => item.label === 'Etica')
							?.path.includes(window.location.pathname) && (
							<path
								className="etica-c"
								d="M0,0H107.463"
								transform="translate(6.268 47)"
							/>
						)}
					</g>
					<g
						onMouseOver={() => setHover1('actualidad')}
						onMouseLeave={() => setHover1('')}
						transform="translate(953 27)"
						onClick={() =>
							setHover(hover === 'actualidad' ? '' : 'actualidad')
						}>
						<path
							className="actu-a"
							d="M0,0H117V76H0Z"
							style={{
								fill:
									hover1 === 'actualidad'
										? '#001F5F'
										: 'transparent',
							}}
						/>
						<text
							className="actu-b cursor-pointer"
							transform={
								selectedLanguage === 'es'
									? 'translate(68 29)'
									: 'translate(68 22)'
							}
							style={{
								fill:
									hover1 === 'actualidad'
										? '#fff'
										: '#001F5F',
							}}>
							<tspan
								x={
									selectedLanguage === 'es'
										? -57.555
										: -40.555
								}
								y={0}>
								{selectedLanguage === 'es'
									? t('Actualidad\u200B')
									: t('Actualidad\u200B')
											.split(' ')
											.slice(0, 2)
											.join(' ')}
							</tspan>
							{selectedLanguage === 'en' && (
								<tspan x={-38.555} y={20}>
									{t('Actualidad\u200B')
										.split(' ')
										.slice(2, 3)
										.join(' ')}
								</tspan>
							)}
						</text>
						{hover1 === 'actualidad' && (
							<line
								className="actualidad-c"
								x2={97}
								y1={1}
								y2={1}
								transform="translate(10.5 47)"
							/>
						)}

						{active
							.find((item) => item.label === 'Actualidad')
							?.path.includes(window.location.pathname) && (
							<line
								className="actualidad-c"
								x2={97}
								y1={1}
								y2={1}
								transform="translate(10.5 47)"
							/>
						)}
					</g>
					<g
						onMouseOver={() => setHover1('solucion')}
						onMouseLeave={() => setHover1('')}
						transform="translate(712 27)"
						onClick={() =>
							setHover(hover === 'solucion' ? '' : 'solucion')
						}>
						<rect
							width={223}
							height={105}
							transform="translate(0 -20)"
							style={{
								fill:
									hover1 === 'solucion'
										? '#001F5F'
										: 'transparent',
							}}
						/>
						<text
							className="solucion-b cursor-pointer"
							transform="translate(61 4)"
							style={{
								fill:
									hover1 === 'solucion' ? '#fff' : '#001F5F',
							}}>
							<tspan
								x={selectedLanguage === 'es' ? -7.772 : -10}
								y={20}>
								{t('Soluciones y')}
							</tspan>
							<tspan x={selectedLanguage === 'es' ? -52.935 : -42.935} y={40}>
								{t('productos distribuidos')}
							</tspan>
						</text>
						{hover1 === 'solucion' && (
							<line
								className="solucion-c"
								x2={200}
								transform="translate(10.5 57)"
							/>
						)}

						{active
							.find((item) => item.label === 'Soluciones')
							?.path.includes(window.location.pathname) && (
							<line
								className="solucion-c"
								x2={95}
								transform="translate(14.5 57)"
							/>
						)}
					</g>
					<g
						onMouseOver={() => setHover1('trayectoria')}
						onMouseLeave={() => setHover1('')}
						transform="translate(554 27)"
						onClick={() =>
							setHover(
								hover === 'trayectoria' ? '' : 'trayectoria'
							)
						}>
						<rect
							className="trayectoria-a"
							width={121}
							height={76}
							style={{
								fill:
									hover1 !== 'trayectoria'
										? 'transparent'
										: '#001F5F',
							}}
						/>
						<text
							className="trayectoria-b cursor-pointer"
							transform="translate(60 29)"
							style={{
								fill:
									hover1 === 'trayectoria'
										? '#fff'
										: '#001F5F',
							}}>
							<tspan
								x={
									selectedLanguage === 'es'
										? -50.697
										: -42.697
								}
								y={0}>
								{t('Trayectoria')}
							</tspan>
						</text>
						{hover1 === 'trayectoria' && (
							<line
								className="trayectoria-c"
								x2={101}
								y1={1}
								y2={1}
								transform="translate(10.5 35.5)"
							/>
						)}

						{active
							.find((item) => item.label === 'Trayectoria')
							?.path.includes(window.location.pathname) && (
							<line
								className="trayectoria-c"
								x2={101}
								y1={1}
								y2={1}
								transform="translate(10.5 35.5)"
							/>
						)}
					</g>
					<a href="/">
						<g
							onMouseOver={() => setHover1('home')}
							onMouseLeave={() => setHover1('')}
							transform="translate(468 27)"
							onClick={() =>
								setHover(hover1 === 'home' ? '' : 'home')
							}>
							<rect
								className="a"
								width={78}
								height={76}
								style={{
									fill:
										hover1 === 'home'
											? '#001F5F'
											: 'transparent',
								}}
							/>
							<text
								className="home-menu-b"
								transform="translate(39 29)"
								style={{
									fill:
										hover1 === 'home' ? '#fff' : '#001F5F',
								}}>
								<tspan
									x={-26.262}
									y={0}
									style={{
										fill:
											hover1 === 'home'
												? '#fff'
												: '#001F5F',
									}}>
									{t('Home')}
								</tspan>
							</text>
							{hover1 === 'home' && (
								<line
									className="home-menu-c"
									x2={52}
									y1={1}
									y2={1}
									transform="translate(13.5 36)"
									height={10}
									style={{ stroke: '#e40032' }}
								/>
							)}

							{active
								.find((item) => item.label === 'Home')
								?.path.includes(window.location.pathname) && (
								<line
									className="home-menu-c"
									x2={52}
									y1={1}
									y2={1}
									transform="translate(13.5 36)"
									height={10}
									style={{ stroke: '#e40032' }}
								/>
							)}
						</g>
					</a>
					<a href="/">
						<g
							transform="translate(142 26.931)"
							className="cursor-pointer">
							<g
								className="h cursor-pointer"
								transform="translate(0 -5)">
								<foreignObject width={200} height={60}>
									<img src="/amarey-logo.webp" />
								</foreignObject>
							</g>
						</g>
					</a>
				</g>
			</svg>
			{showSearchable && (
				<React.Fragment>
					<svg
						style={{
							position: 'absolute',
							width: '100%',
							right: '19.7%',
							top: '94%',
							maxWidth: 495,
							height: 400,
							zIndex: 1,
						}}>
						<g transform="translate(-628.194 -836)">
							<foreignObject
								x={0}
								y={0}
								width={476}
								height={266}
								transform="translate(640.685 845.833)">
								<input
									type="text"
									className="w-full h-[46px] border-solid border-[3px] border-[#8593b1] px-[30px]"
									id="search-input"
									style={{
										borderTopLeftRadius: 100,
										borderBottomRightRadius: 100,
									}}
									onChange={handleSearchPage}
								/>
								{results.length > 0 && (
									<div className="w-full h-[200px] bg-white overflow-y-auto">
										{results.map(
											(
												item: SiteMapMock,
												index: number
											) => (
												<div
													className="h-[40px] w-[476px] flex items-center border-b-solid border-b-[1px] border-[#e6e6e6] px-[10px]"
													onClick={() =>
														(window.location.href =
															item.url)
													}>
													<span>{item.label}</span>
												</div>
											)
										)}
									</div>
								)}
							</foreignObject>
						</g>
					</svg>
				</React.Fragment>
			)}
			{hover === 'trayectoria' && <SubmenuWay ref={subItemRef} />}
			{hover === 'solucion' && <SubmenuSolution ref={subItemRef} />}
			{hover === 'contactenos' && <SubmenuContact ref={subItemRef} />}
			{hover === 'etica' && <SubmenuEtic ref={subItemRef} />}
			{hover === 'trabaje' && <SubmenuWorkUs ref={subItemRef} />}
			{hover === 'actualidad' && <SubmenuActualidad ref={subItemRef} />}
		</div>
	)
}

export default Navbar
