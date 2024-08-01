import axios from 'axios'
import useNavbar from 'components/Navbar/useNavbar'
import { SiteMapMock } from 'mocks/navbar.mocks'
import React from 'react'
import { useForm } from 'react-hook-form'
import Swal from 'sweetalert2'
import './Nav.css'
import { useTranslation } from 'react-i18next'
import { useLanguage } from 'context/language'

export const NavbarMovil: React.FC = () => {
	/** States */
	const [openMenu, setOpenMenu] = React.useState<boolean>(false)
	const [openContact, setOpenContact] = React.useState<boolean>(false)
	const [step, setStep] = React.useState<number>(3)
	const [accept, setAccept] = React.useState<boolean>(false)

	const {
		handleSubmit,
		formState: { isValid },
		register,
		reset,
	} = useForm({ mode: 'onChange' })

	const { t } = useTranslation()

	const handleSentContact = (data: any) => {
		if (isValid && accept) {
			axios
				.post(
					'http://apiamarey.grupoamarey.com/api/guardar-formulario',
					data
				)
				.then((res: any) => {
					reset({
						nombre_completo: undefined,
						email: undefined,
						asunto: undefined,
						telefono: undefined,
						mensaje: undefined,
						institucion: undefined,
						pais: undefined,
					})

					Swal.fire({
						icon: 'success',
						title: 'Mensaje enviado exitosamente',
					})

					setOpenContact(false)
				})
				.catch((error: any) => {
					reset({
						nombre_completo: undefined,
						email: undefined,
						asunto: undefined,
						telefono: undefined,
						mensaje: undefined,
						institucion: undefined,
						pais: undefined,
					})

					Swal.fire({
						icon: 'error',
						title: 'Ocurrio un problema al enviar el correo!',
						text: 'Intentalo nuevamente',
					})
				})
		} else {
			if (isValid && !accept) {
				Swal.fire({
					icon: 'warning',
					title: 'Debes aceptar los terminos de tratamiento de datos personales',
				})
			}
		}
	}

	React.useEffect(() => {
		if (!openMenu) setStep(0)
	}, [openMenu])
	const [image, setImage] = React.useState<string>(
		'/images/spanish-movil.png'
	)

	/** Hooks */
	const { results, handleSearchPage } = useNavbar()
	const { handleChangeSelectedLanguage, selectedLanguage } = useLanguage()

	return (
		<React.Fragment>
			{openMenu ? (
				<React.Fragment>
					{step === 0 ? (
						<svg
							viewBox="5 0 414 902"
							className="absolute z-[1] top-0">
							<defs>
								<style>
									{
										'.a-navbar-mobile,.f-navbar-mobile{fill:none;}.b-navbar-mobile,.l-navbar-mobile{fill:#001f5f;}.c-navbar-mobile,.j-navbar-mobile,.k-navbar-mobile{fill:#fff;}.d-navbar-mobile{clip-path:url(#c-navbar-mobile);}.e-navbar-mobile,.i-navbar-mobile{fill:#e40032;}.f-navbar-mobile,.i-navbar-mobile,.k-navbar-mobile{stroke:#001f5f;}.g-navbar-mobile{clip-path:url(#f-navbar-mobile);}.h-navbar-mobile{clip-path:url(#g-navbar-mobile);}.j-navbar-mobile,.l-navbar-mobile{font-size:16px;font-family:Silka-SemiBold, Silka;font-weight:600;}.m-navbar-mobile{stroke:none;}.n-navbar-mobile{filter:url(#v-navbar-mobile);}.o-navbar-mobile{filter:url(#t-navbar-mobile);}.p-navbar-mobile{filter:url(#r-navbar-mobile);}.q-navbar-mobile{filter:url(#p-navbar-mobile);}.r-navbar-mobile{filter:url(#n-navbar-mobile);}.s-navbar-mobile{filter:url(#l-navbar-mobile);}.t-navbar-mobile{filter:url(#j-navbar-mobile);}.u-navbar-mobile{filter:url(#h-navbar-mobile);}.v-navbar-mobile{filter:url(#d-navbar-mobile);}.w-navbar-mobile{filter:url(#a-navbar-mobile);}'
									}
								</style>
								<filter
									id="a-navbar-mobile"
									x={2}
									y={0}
									width={433.878}
									height={56.79}
									filterUnits="userSpaceOnUse">
									<feOffset dy={3} />
									<feGaussianBlur
										stdDeviation={3}
										result="b"
									/>
									<feFlood floodOpacity={0.302} />
									<feComposite operator="in" in2="b" />
									<feComposite in="SourceGraphic" />
								</filter>
								<clipPath id="c-navbar-mobile">
									<rect
										className="a-navbar-mobile"
										width={108.286}
										height={30.3}
									/>
								</clipPath>
								<filter
									id="d-navbar-mobile"
									x={43.862}
									y={189.188}
									width={351.004}
									height={64.541}
									filterUnits="userSpaceOnUse">
									<feOffset dy={3} />
									<feGaussianBlur
										stdDeviation={3}
										result="e"
									/>
									<feFlood floodOpacity={0.502} />
									<feComposite operator="in" in2="e" />
									<feComposite in="SourceGraphic" />
								</filter>
								<clipPath id="f-navbar-mobile">
									<rect
										className="a-navbar-mobile"
										width={193.23}
										height={55.733}
									/>
								</clipPath>
								<clipPath id="g-navbar-mobile">
									<rect
										className="b-navbar-mobile"
										width={139.029}
										height={58.623}
									/>
								</clipPath>
								<filter
									id="h-navbar-mobile"
									x={0}
									y={569}
									width={438}
									height={61}
									filterUnits="userSpaceOnUse">
									<feOffset dy={3} />
									<feGaussianBlur
										stdDeviation={3}
										result="i"
									/>
									<feFlood floodOpacity={0.251} />
									<feComposite operator="in" in2="i" />
									<feComposite in="SourceGraphic" />
								</filter>
								<filter
									id="j-navbar-mobile"
									x={0}
									y={525}
									width={438}
									height={63}
									filterUnits="userSpaceOnUse">
									<feOffset dy={3} />
									<feGaussianBlur
										stdDeviation={3}
										result="k"
									/>
									<feFlood floodOpacity={0.251} />
									<feComposite operator="in" in2="k" />
									<feComposite in="SourceGraphic" />
								</filter>
								<filter
									id="l-navbar-mobile"
									x={0}
									y={483}
									width={438}
									height={61}
									filterUnits="userSpaceOnUse">
									<feOffset dy={3} />
									<feGaussianBlur
										stdDeviation={3}
										result="m"
									/>
									<feFlood floodOpacity={0.251} />
									<feComposite operator="in" in2="m" />
									<feComposite in="SourceGraphic" />
								</filter>
								<filter
									id="n-navbar-mobile"
									x={0}
									y={441}
									width={438}
									height={61}
									filterUnits="userSpaceOnUse">
									<feOffset dy={3} />
									<feGaussianBlur
										stdDeviation={3}
										result="o"
									/>
									<feFlood floodOpacity={0.251} />
									<feComposite operator="in" in2="o" />
									<feComposite in="SourceGraphic" />
								</filter>
								<filter
									id="p-navbar-mobile"
									x={0}
									y={399}
									width={438}
									height={62}
									filterUnits="userSpaceOnUse">
									<feOffset dy={3} />
									<feGaussianBlur
										stdDeviation={3}
										result="q"
									/>
									<feFlood floodOpacity={0.251} />
									<feComposite operator="in" in2="q" />
									<feComposite in="SourceGraphic" />
								</filter>
								<filter
									id="r-navbar-mobile"
									x={0}
									y={356}
									width={438}
									height={62}
									filterUnits="userSpaceOnUse">
									<feOffset dy={3} />
									<feGaussianBlur
										stdDeviation={3}
										result="s"
									/>
									<feFlood floodOpacity={0.251} />
									<feComposite operator="in" in2="s" />
									<feComposite in="SourceGraphic" />
								</filter>
								<filter
									id="t-navbar-mobile"
									x={0}
									y={314}
									width={438}
									height={61}
									filterUnits="userSpaceOnUse">
									<feOffset dy={3} />
									<feGaussianBlur
										stdDeviation={3}
										result="u"
									/>
									<feFlood floodOpacity={0.251} />
									<feComposite operator="in" in2="u" />
									<feComposite in="SourceGraphic" />
								</filter>
								<filter
									id="v-navbar-mobile"
									x={0}
									y={273}
									width={438}
									height={60}
									filterUnits="userSpaceOnUse">
									<feOffset dy={3} />
									<feGaussianBlur
										stdDeviation={3}
										result="w"
									/>
									<feFlood floodOpacity={0.2} />
									<feComposite operator="in" in2="w" />
									<feComposite in="SourceGraphic" />
								</filter>
								<filter
									id="k-mapa-servicios-desktop"
									x={0}
									y={0}
									width={414}
									height={52.967}
									filterUnits="userSpaceOnUse">
									<feOffset dy={3} />
									<feGaussianBlur
										stdDeviation={3}
										result="l"
									/>
									<feFlood floodOpacity={0.302} />
									<feComposite operator="in" in2="l" />
									<feComposite in="SourceGraphic" />
								</filter>
							</defs>
							<g>
								<g transform="translate(358.487 10.743)">
									<rect
										className="b-navbar-mobile"
										width={24.686}
										height={4.377}
										rx={2.189}
									/>
									<rect
										className="b-navbar-mobile"
										width={24.686}
										height={4.377}
										rx={2.189}
										transform="translate(0 7.296)"
									/>
									<rect
										className="b-navbar-mobile"
										width={24.686}
										height={4.377}
										rx={2.189}
										transform="translate(0 14.592)"
									/>
								</g>
								<g transform="translate(318.579 9.941)">
									<path
										className="b-navbar-mobile"
										d="M37.159,44.643a16.6,16.6,0,0,0,3.342,1.73c.17.063.242.246.353.378a4.958,4.958,0,0,0,2.972,1.956,3.283,3.283,0,0,0,2.293-.529,6.708,6.708,0,0,0,2-1.987,14.165,14.165,0,0,0,2.239-5.849c.052-.314-.072-.375-.335-.388a15.339,15.339,0,0,1-3.48-.458,12.4,12.4,0,0,1-4.949-2.827c-.274-.249-.373-.188-.56.084a6.5,6.5,0,0,1-2.7,2.4c-.266.117-.234.291-.212.5a15.831,15.831,0,0,0,.946,3.95l.132.352a11.252,11.252,0,0,1-1.675-.991.3.3,0,0,1-.081-.154,12.5,12.5,0,0,1-.407-6.392A6.2,6.2,0,0,1,42.5,31.456a10.191,10.191,0,0,1,5,.371A6.138,6.138,0,0,1,51.65,37.1a12.857,12.857,0,0,1-.464,5.4,1.418,1.418,0,0,0,0,.811,5.68,5.68,0,0,1-.033,3.365,2.456,2.456,0,0,1-2.808,1.853,1.065,1.065,0,0,0-.891.27,4.612,4.612,0,0,1-6.416-.041.892.892,0,0,0-.733-.241,2.527,2.527,0,0,1-3-2.161,4.882,4.882,0,0,1-.137-.785c-.023-.279-.005-.561-.005-.931"
										transform="translate(-33.614 -29.506)"
									/>
									<path
										className="b-navbar-mobile"
										d="M36.3,25.2A9.645,9.645,0,0,1,43.8,28.512a7.3,7.3,0,0,1,1.646,3.415.743.743,0,0,0,.393.572,2.159,2.159,0,0,1,1.026,1.518,5.837,5.837,0,0,1-.339,3.562,2.189,2.189,0,0,1-2.158,1.389c-.225,0-.284-.052-.255-.3.182-1.543.332-3.088.386-4.644a6.626,6.626,0,0,0-3.907-6.618,8.845,8.845,0,0,0-9.909.92,6.316,6.316,0,0,0-2.5,5.342,45.635,45.635,0,0,0,.334,4.559.523.523,0,0,0,.219.4,13.876,13.876,0,0,0,5.629,2.7,1.167,1.167,0,0,0,.759-.124,2.527,2.527,0,0,1,1.916-.019.663.663,0,0,1,.353.821.683.683,0,0,1-.65.6c-.442.025-.886.009-1.329,0a.488.488,0,0,1-.441-.236c-.157-.316-.429-.339-.71-.392a13.981,13.981,0,0,1-5.831-2.764,1.462,1.462,0,0,0-.648-.308A2.041,2.041,0,0,1,26.2,37.68a5.7,5.7,0,0,1-.346-3.808,2.126,2.126,0,0,1,1.072-1.428.49.49,0,0,0,.269-.362c.86-3.812,3.4-5.76,6.894-6.629a7.615,7.615,0,0,1,1.015-.17c.412-.044.827-.058,1.2-.083"
										transform="translate(-25.675 -25.199)"
									/>
								</g>
								<g transform="translate(5)">
									<g
										className="w-navbar-mobile"
										transform="matrix(1, 0, 0, 1, -11, -6)">
										<path
											className="c-navbar-mobile"
											d="M0,0H415.878V38.79H0Z"
											transform="translate(11 6)"
										/>
									</g>
									<g
										transform="translate(280 10)"
										onClick={handleChangeSelectedLanguage}>
										<foreignObject
											x={0}
											y={0}
											width={38}
											height={38}>
											{selectedLanguage === 'es' ? (
												<svg
													xmlns="http://www.w3.org/2000/svg"
													id="Componente_38_3"
													data-name="Componente 38 – 3"
													width="25"
													height="25"
													viewBox="0 0 25 25">
													<g
														id="Grupo_5836"
														data-name="Grupo 5836">
														<path
															id="Trazado_68877"
															data-name="Trazado 68877"
															d="M1409.679,47.929a9.753,9.753,0,1,1-9.753-9.753,9.753,9.753,0,0,1,9.753,9.753"
															transform="translate(-1390.173 -38.176)"
															fill="#001f5f"
														/>
														<path
															id="Trazado_68878"
															data-name="Trazado 68878"
															d="M1479.116,60.531H1464.3a8.906,8.906,0,0,1,14.813,0"
															transform="translate(-1461.956 -55.722)"
															fill="#fd0002"
														/>
														<path
															id="Trazado_68879"
															data-name="Trazado 68879"
															d="M1479.116,571.931a8.906,8.906,0,0,1-14.812,0Z"
															transform="translate(-1461.956 -557.234)"
															fill="#fd0002"
														/>
														<path
															id="Trazado_68880"
															data-name="Trazado 68880"
															d="M1426.371,208.875a8.862,8.862,0,0,1-1.5,4.944h-14.812a8.909,8.909,0,0,1,0-9.888h14.812a8.862,8.862,0,0,1,1.5,4.944"
															transform="translate(-1407.714 -199.122)"
															fill="#ff0"
														/>
													</g>
												</svg>
											) : (
												<svg
													xmlns="http://www.w3.org/2000/svg"
													xmlnsXlink="http://www.w3.org/1999/xlink"
													id="Componente_38_3"
													data-name="Componente 38 – 3"
													width="25"
													height="25"
													viewBox="0 0 25 25">
													<defs>
														<clipPath id="clip-path">
															<path
																id="Trazado_68887"
																data-name="Trazado 68887"
																d="M321.584,78.464a8.877,8.877,0,1,0,8.877-8.877,8.877,8.877,0,0,0-8.877,8.877"
																transform="translate(-321.584 -69.587)"
																fill="none"
															/>
														</clipPath>
													</defs>
													<g
														id="Grupo_5837"
														data-name="Grupo 5837">
														<path
															id="Trazado_68882"
															data-name="Trazado 68882"
															d="M309.679,47.929a9.753,9.753,0,1,1-9.753-9.753,9.753,9.753,0,0,1,9.753,9.753"
															transform="translate(-290.173 -38.176)"
															fill="#001f5f"
														/>
														<g
															id="Grupo_5836"
															data-name="Grupo 5836"
															transform="translate(0.876 0.876)"
															clipPath="url(#clip-path)">
															<path
																id="Trazado_68883"
																data-name="Trazado 68883"
																d="M35.689,21.13,4.668,0H0V1.552L29.482,21.635h6.207Z"
																transform="translate(-8.967 -1.94)"
																fill="#feffff"
															/>
															<path
																id="Trazado_68884"
																data-name="Trazado 68884"
																d="M35.689,0H31.034L0,21.14v.495H6.221L35.689,1.562Z"
																transform="translate(-8.967 -1.94)"
																fill="#feffff"
															/>
															<rect
																id="Rectángulo_1963"
																data-name="Rectángulo 1963"
																width="5.222"
																height="21.635"
																transform="translate(6.242 -1.94)"
																fill="#feffff"
															/>
															<rect
																id="Rectángulo_1964"
																data-name="Rectángulo 1964"
																width="35.491"
																height="5.104"
																transform="translate(-8.835 6.538)"
																fill="#feffff"
															/>
															<rect
																id="Rectángulo_1965"
																data-name="Rectángulo 1965"
																width="35.491"
																height="3.899"
																transform="translate(-8.835 7.074)"
																fill="#fd0002"
															/>
															<rect
																id="Rectángulo_1966"
																data-name="Rectángulo 1966"
																width="3.365"
																height="21.635"
																transform="translate(7.201 -1.94)"
																fill="#fd0002"
															/>
															<path
																id="Trazado_68885"
																data-name="Trazado 68885"
																d="M35.409,21.635,67.17,0H64.832L33.071,21.635Z"
																transform="translate(-41.116 -1.94)"
																fill="#fd0002"
															/>
															<path
																id="Trazado_68886"
																data-name="Trazado 68886"
																d="M58.533,21.635,26.772,0H24.433L56.195,21.635Z"
																transform="translate(-32.72 -1.94)"
																fill="#fd0002"
															/>
														</g>
													</g>
												</svg>
											)}
										</foreignObject>
									</g>
									<g transform="translate(37 4.493)">
										<g className="d-navbar-mobile">
											<a href="/">
												<foreignObject
													width={90}
													height={42}>
													<img src="/amarey-logo.webp" />
												</foreignObject>
											</a>
										</g>
									</g>
								</g>
								<path
									className="c-navbar-mobile"
									d="M0,0H415.878V254.789H0Z"
									transform="translate(5 38.79)"
								/>
								<foreignObject
									x={0}
									y={0}
									width="100%"
									height={266}
									transform="translate(5 189.188)">
									<div
										className="w-full flex justify-between mx-[auto] h-[46px] max-w-[331px] border-solid border-[3px] border-[#001f5f]"
										style={{
											borderTopLeftRadius: 100,
											borderBottomRightRadius: 100,
										}}>
										<input
											type="text"
											className="w-[80%] border-[transparent] bg-[transparent] pl-[30px]"
											id="search-input"
											onChange={handleSearchPage}
											style={{ outline: 'none' }}
										/>
										<img
											src="/images/lupa.svg"
											className="mr-[30px]"
											alt=""
											width={25}
											height={25}
										/>
									</div>
									{results.length > 0 && (
										<div className="w-full h-[200px] bg-white overflow-y-auto">
											{results.map(
												(
													item: SiteMapMock,
													index: number
												) => (
													<div
														className="h-[40px] w-full flex items-center border-b-solid border-b-[1px] border-[#e6e6e6] px-[10px]"
														key={index}
														onClick={() =>
															(window.location.href =
																item.url)
														}>
														<span>
															{item.label}
														</span>
													</div>
												)
											)}
										</div>
									)}
								</foreignObject>
								<g transform="translate(5.771 541.513)">
									<line
										className="f-navbar-mobile"
										x2={415.661}
										transform="translate(0)"
									/>
								</g>
								<g transform="translate(116.783 116.835)">
									<g
										className="g-navbar-mobile"
										transform="translate(0 0)">
										<path
											className="e-navbar-mobile"
											d="M32.223,35.849l7.64,10.719a.3.3,0,0,1,.054.172l.043,8.391a.29.29,0,0,1-.283.294l-1.136.006a.288.288,0,0,1-.285-.291l-.015-2.976-4.107.021.015,2.977a.288.288,0,0,1-.283.294l-1.136.006a.286.286,0,0,1-.284-.291l-.039-7.709a.288.288,0,0,1,.282-.294l1.136-.007a.29.29,0,0,1,.285.292l.015,2.976,4.107-.021-.016-3.184-6.937-9.735-5.9.031L18.54,47.33l.015,3.183,4.108-.022-.015-2.976a.288.288,0,0,1,.282-.294l1.136-.007a.288.288,0,0,1,.285.292l.039,7.709a.289.289,0,0,1-.282.294l-1.136.006a.288.288,0,0,1-.285-.291l-.015-2.977-4.107.022.015,2.977a.29.29,0,0,1-.283.294l-1.136.006a.289.289,0,0,1-.285-.291l-.042-8.391a.3.3,0,0,1,.053-.172l7.53-10.8a.284.284,0,0,1,.229-.122l7.348-.039a.28.28,0,0,1,.23.12M20.392,27.085,8.1,23.042a.267.267,0,0,0-.175,0L.2,25.677a.3.3,0,0,0-.18.37l.356,1.112a.282.282,0,0,0,.359.186l2.741-.934,1.29,4.02-2.742.934a.3.3,0,0,0-.18.37l.356,1.112a.283.283,0,0,0,.359.186l7.1-2.42a.294.294,0,0,0,.18-.37L9.48,29.129a.283.283,0,0,0-.359-.186l-2.742.935L5.09,25.859l2.932-1,11.164,3.673.912,2.843.94,2.931L14.2,44.116l-2.933,1L9.978,41.1l2.742-.934a.3.3,0,0,0,.18-.37l-.357-1.112a.282.282,0,0,0-.358-.186l-7.1,2.42a.3.3,0,0,0-.18.37L5.259,42.4a.282.282,0,0,0,.359.186l2.742-.935,1.29,4.02L6.908,46.6a.3.3,0,0,0-.181.37l.357,1.112a.282.282,0,0,0,.359.186l7.729-2.635a.285.285,0,0,0,.142-.107l7.529-10.8a.3.3,0,0,0,.039-.263l-2.307-7.19a.289.289,0,0,0-.183-.188m15.158-1.98L47.8,20.929a.282.282,0,0,0,.141-.107l4.751-6.815a.3.3,0,0,0-.065-.408l-.922-.683a.278.278,0,0,0-.4.067L49.623,15.4l-3.335-2.471,1.685-2.417a.3.3,0,0,0-.064-.408l-.922-.683a.277.277,0,0,0-.4.067l-4.365,6.26a.3.3,0,0,0,.064.409l.923.683a.279.279,0,0,0,.4-.067l1.685-2.417,3.335,2.471-1.8,2.585L35.7,23.2l-4.793-3.55L30.848,7.575l1.8-2.585,3.335,2.471L34.3,9.878a.3.3,0,0,0,.065.408l.922.683a.278.278,0,0,0,.4-.067l4.365-6.261a.3.3,0,0,0-.065-.408l-.922-.683a.279.279,0,0,0-.4.067L36.979,6.034,33.645,3.564,35.33,1.146a.3.3,0,0,0-.065-.408L34.343.055a.277.277,0,0,0-.4.067L29.2,6.936a.3.3,0,0,0-.053.172l.067,13.3a.294.294,0,0,0,.118.236l5.967,4.42a.278.278,0,0,0,.255.04m20.628,1.754.345-1.116a.3.3,0,0,0-.184-.368l-7.755-2.551a.278.278,0,0,0-.176,0L36.157,27a.285.285,0,0,0-.181.189L33.742,34.4a.3.3,0,0,0,.041.262l7.639,10.72a.29.29,0,0,0,.143.105l7.755,2.552a.282.282,0,0,0,.357-.19l.345-1.115a.292.292,0,0,0-.183-.368l-2.752-.906,1.249-4.033,2.752.9a.283.283,0,0,0,.357-.189l.345-1.116a.3.3,0,0,0-.184-.368l-7.125-2.344a.281.281,0,0,0-.356.19l-.346,1.116a.293.293,0,0,0,.184.367l2.751.906-1.248,4.033-2.943-.967-6.938-9.736,1.795-5.795L48.5,24.641l2.941.969L50.2,29.643l-2.752-.906a.284.284,0,0,0-.357.19l-.345,1.116a.294.294,0,0,0,.184.367l7.124,2.344a.282.282,0,0,0,.357-.189l.346-1.116a.3.3,0,0,0-.184-.368l-2.752-.9,1.249-4.033,2.752.906a.284.284,0,0,0,.357-.19M21.257,25.13l5.916-4.492a.3.3,0,0,0,.116-.238L27.2,7.1a.294.294,0,0,0-.055-.171L22.319.172a.278.278,0,0,0-.4-.063L21.007.8a.3.3,0,0,0-.06.409l1.713,2.4L19.353,6.121l-1.713-2.4a.278.278,0,0,0-.4-.062l-.915.695a.3.3,0,0,0-.06.409L20.7,10.974a.279.279,0,0,0,.4.062l.915-.695a.3.3,0,0,0,.061-.409l-1.713-2.4,3.307-2.511L25.5,7.587l.077,12.079-4.751,3.607L9.66,19.617,7.828,17.054l3.307-2.511,1.712,2.4a.279.279,0,0,0,.4.062l.915-.695a.3.3,0,0,0,.061-.409L9.784,9.691a.278.278,0,0,0-.4-.063l-.915.695a.3.3,0,0,0-.06.409l1.712,2.4L6.818,15.64,5.1,13.243a.279.279,0,0,0-.4-.063l-.915.695a.3.3,0,0,0-.06.409l4.828,6.756a.279.279,0,0,0,.142.105L21,25.173a.278.278,0,0,0,.255-.044"
											transform="translate(0 0)"
										/>
										<path
											className="b-navbar-mobile"
											d="M95.531,21.118h-4.8a6.353,6.353,0,0,1-3.349-.926,6.789,6.789,0,0,1-2.43-2.516,7.165,7.165,0,0,1,0-6.948A6.885,6.885,0,0,1,87.382,8.2,6.4,6.4,0,0,1,93.4,7.854,6.712,6.712,0,0,1,95.613,9.5l-.674.652a5.714,5.714,0,0,0-1.92-1.4,5.556,5.556,0,0,0-5.167.305,5.946,5.946,0,0,0-2.88,5.137,6.016,6.016,0,0,0,2.88,5.168,5.417,5.417,0,0,0,2.88.811h3.84V15.265H90.2v-.947h5.331Z"
											transform="translate(7.146 0.86)"
										/>
										<path
											className="b-navbar-mobile"
											d="M107.031,21.1l-5.515-6.905h1.634a6.338,6.338,0,0,0,2.451-.4,3.3,3.3,0,0,0,1.205-1.021,2.457,2.457,0,0,0,.51-1.505,2.535,2.535,0,0,0-.429-1.4,3.2,3.2,0,0,0-1.225-1.084,3.879,3.879,0,0,0-1.838-.422h-3.718V21.1h-.919V7.415h4.637a4.973,4.973,0,0,1,1.756.305,4.292,4.292,0,0,1,1.43.873,3.884,3.884,0,0,1,.909,1.243,3.47,3.47,0,0,1-.358,3.505,3.913,3.913,0,0,1-1.593,1.316,4.107,4.107,0,0,1-1.236.368,10.5,10.5,0,0,1-1.276.074l4.8,6Z"
											transform="translate(8.432 0.878)"
										/>
										<path
											className="b-navbar-mobile"
											d="M116.825,21.248a4.74,4.74,0,0,1-1.93-.41,5.042,5.042,0,0,1-1.644-1.169,4.831,4.831,0,0,1-1.093-1.684,5.55,5.55,0,0,1-.379-2.042V7.415h.919v8.527a4.527,4.527,0,0,0,.317,1.684,4.2,4.2,0,0,0,2.236,2.326,3.923,3.923,0,0,0,1.573.327,3.966,3.966,0,0,0,1.593-.327,4.2,4.2,0,0,0,2.237-2.326,4.547,4.547,0,0,0,.316-1.684V7.415h.92v8.527a5.571,5.571,0,0,1-.379,2.042,4.845,4.845,0,0,1-1.093,1.684,5.072,5.072,0,0,1-1.634,1.169,4.766,4.766,0,0,1-1.961.41"
											transform="translate(9.503 0.878)"
										/>
										<path
											className="b-navbar-mobile"
											d="M125.506,21.1l-.021-13.685h4.738a4.518,4.518,0,0,1,2.155.527,4.21,4.21,0,0,1,1.573,1.41,3.5,3.5,0,0,1,0,3.864,4.179,4.179,0,0,1-1.573,1.42,4.518,4.518,0,0,1-2.155.527h-3.8V21.1Zm.919-6.926h3.8a3.73,3.73,0,0,0,1.7-.389,3.252,3.252,0,0,0,1.236-1.054,2.482,2.482,0,0,0,.459-1.442,2.513,2.513,0,0,0-.459-1.463,3.252,3.252,0,0,0-1.236-1.054,3.73,3.73,0,0,0-1.7-.389H126.4Z"
											transform="translate(10.668 0.878)"
										/>
										<path
											className="b-navbar-mobile"
											d="M143.575,21.263a6.4,6.4,0,0,1-3.37-.937,6.773,6.773,0,0,1-2.451-2.548,7.287,7.287,0,0,1,0-7.01A6.773,6.773,0,0,1,140.2,8.22a6.528,6.528,0,0,1,6.74,0,6.772,6.772,0,0,1,2.451,2.548,7.287,7.287,0,0,1,0,7.01,6.772,6.772,0,0,1-2.451,2.548,6.4,6.4,0,0,1-3.37.937m0-13.012a5.462,5.462,0,0,0-2.9.811,6.153,6.153,0,0,0-2.115,8.232,6,6,0,0,0,2.115,2.19,5.592,5.592,0,0,0,5.8,0,5.913,5.913,0,0,0,2.1-2.19,6.269,6.269,0,0,0,0-6.042,5.922,5.922,0,0,0-2.1-2.19,5.465,5.465,0,0,0-2.9-.811"
											transform="translate(11.635 0.863)"
										/>
										<path
											className="b-navbar-mobile"
											d="M80.867,26.01h3.387a.452.452,0,0,1,.444.459v1.42a5.727,5.727,0,0,1,5.047-2.349,5.929,5.929,0,0,1,5.714,3.107,6.992,6.992,0,0,1,6.2-3.107c3.05,0,5.5,1.228,6.729,3.36a11.751,11.751,0,0,1,1.158,5.564v11.1a.452.452,0,0,1-.445.459h-3.773a.451.451,0,0,1-.445-.459V35.042c0-2.06-.28-3.18-.946-3.938a3.386,3.386,0,0,0-2.7-1.156,3.522,3.522,0,0,0-3.33,2.023,9.717,9.717,0,0,0-.6,4.191v9.4a.452.452,0,0,1-.445.459H93.1a.452.452,0,0,1-.445-.459V35.042c0-1.951-.28-3.144-.876-3.9A3.69,3.69,0,0,0,88.9,29.948a3.341,3.341,0,0,0-3.365,2.167,12.182,12.182,0,0,0-.456,4.046v9.4a.452.452,0,0,1-.445.459H80.867a.452.452,0,0,1-.445-.459v-19.1a.452.452,0,0,1,.445-.459"
											transform="translate(6.837 3.024)"
										/>
										<path
											className="b-navbar-mobile"
											d="M129.911,46.025h-3.386a.452.452,0,0,1-.445-.459V43.423a7.63,7.63,0,0,1-6.449,3.071c-5.678,0-9.779-4.372-9.779-10.406,0-6.105,4.136-10.549,9.884-10.549a7.144,7.144,0,0,1,6.344,3.143V26.467a.451.451,0,0,1,.445-.457h3.386a.451.451,0,0,1,.445.457v19.1a.452.452,0,0,1-.445.459M114.548,36.2a5.54,5.54,0,0,0,5.748,5.89c3.365,0,5.643-2.421,5.643-6,0-3.612-2.384-6.142-5.783-6.142-3.26,0-5.608,2.638-5.608,6.251"
											transform="translate(9.339 3.024)"
										/>
										<path
											className="b-navbar-mobile"
											d="M132.683,26.01h3.387a.452.452,0,0,1,.444.459V27.96c1.227-1.879,2.208-2.42,4.207-2.42h.35v4.625c-2.8.073-4.171,1.626-4.171,4.733V45.566a.452.452,0,0,1-.445.459h-3.773a.452.452,0,0,1-.445-.459v-19.1a.452.452,0,0,1,.445-.459"
											transform="translate(11.242 3.024)"
										/>
										<path
											className="b-navbar-mobile"
											d="M146.4,38.149a5.133,5.133,0,0,0,5.362,3.937,4.837,4.837,0,0,0,4.144-1.829.443.443,0,0,1,.333-.158h4.241a.456.456,0,0,1,.412.63,9.118,9.118,0,0,1-1.314,2.152,9.409,9.409,0,0,1-7.711,3.614A10.324,10.324,0,0,1,141.35,35.913a10.441,10.441,0,0,1,11.235-10.327c5.265.494,9.022,4.871,9.022,10.72a7.97,7.97,0,0,1-.176,1.843Zm10.62-4.228c-.6-2.566-2.488-3.974-5.362-3.974a5.156,5.156,0,0,0-5.4,3.974Z"
											transform="translate(12.017 3.025)"
										/>
										<path
											className="b-navbar-mobile"
											d="M167.248,44.1,160.38,26.59a.456.456,0,0,1,.412-.63h4.351a.444.444,0,0,1,.42.309l4.209,12.66,4.589-12.672a.446.446,0,0,1,.417-.3h4.377a.457.457,0,0,1,.408.64L168.731,52.383a.445.445,0,0,1-.408.276h-4.041a.458.458,0,0,1-.407-.643Z"
											transform="translate(13.632 3.074)"
										/>
										<path
											className="b-navbar-mobile"
											d="M69.562,19.983H65.776l-4.769,11.8a.457.457,0,0,0,.41.634h4.07a.445.445,0,0,0,.419-.306l1.763-5.15,2.768,8.093H62.75a4.6,4.6,0,0,0-4.245,2.917l-3.268,8.082a.457.457,0,0,0,.41.634h4.334a.444.444,0,0,0,.408-.277l2.758-6.623h9.218L75.021,46.4a.444.444,0,0,0,.411.283h4.327a.457.457,0,0,0,.41-.635Z"
											transform="translate(4.693 2.366)"
										/>
									</g>
								</g>
								<g
									className="h-navbar-mobile"
									transform="translate(5.217 39.241)">
									<path
										className="b-navbar-mobile"
										d="M91.4,43.724H0V0H139.029V11.32c0,17.9-21.323,32.4-47.627,32.4"
									/>
								</g>
								<g
									transform={
										results.length > 0
											? 'translate(0 161)'
											: 'translate(0 0)'
									}>
									{/* <g transform="translate(3 568.613)">
										<g
											className="u-navbar-mobile"
											transform="matrix(1, 0, 0, 1, -9, -574.61)">
											<g
												className="i-navbar-mobile"
												transform="translate(9 575)">
												<rect
													className="m-navbar-mobile"
													width={420}
													height={43}
												/>
												<rect
													className="a-navbar-mobile"
													x={0.5}
													y={0.5}
													width={419}
													height={42}
												/>
											</g>
										</g>
										<text
											className="j-navbar-mobile"
											transform="translate(40 10.387)">
											<tspan x={0} y={15}>
												{'Ucitech'}
											</tspan>
										</text>
									</g> */}
									<g transform="translate(3 461.534)">
										<g
											onClick={() =>
												(window.location.href =
													'/contactenos')
											}>
											<g
												className="t-navbar-mobile"
												transform="matrix(1, 0, 0, 1, -9, -467.53)">
												<g
													className="k-navbar-mobile"
													transform="translate(9 531)">
													<rect
														className="m-navbar-mobile"
														width={420}
														height={45}
													/>
													<rect
														className="a-navbar-mobile"
														x={0.5}
														y={0.5}
														width={419}
														height={44}
													/>
												</g>
											</g>
											<text
												className="l-navbar-mobile"
												transform="translate(40 74.466)">
												<tspan x={0} y={15}>
													{t('Contáctenos')}
												</tspan>
											</text>
											<g transform="translate(192.696 0)">
												<path
													className="b-navbar-mobile"
													d="M37.161,44.643a16.71,16.71,0,0,0,3.358,1.73c.171.063.243.246.355.378a4.984,4.984,0,0,0,2.987,1.956,3.312,3.312,0,0,0,2.3-.529,6.725,6.725,0,0,0,2-1.987,14.125,14.125,0,0,0,2.25-5.849c.052-.314-.073-.375-.337-.388a15.483,15.483,0,0,1-3.5-.458,12.478,12.478,0,0,1-4.973-2.827c-.275-.249-.375-.188-.562.084a6.522,6.522,0,0,1-2.715,2.4c-.267.117-.235.291-.213.5a15.768,15.768,0,0,0,.95,3.95l.133.352a11.318,11.318,0,0,1-1.683-.991.3.3,0,0,1-.081-.154,12.447,12.447,0,0,1-.409-6.392,6.221,6.221,0,0,1,5.5-4.954,10.287,10.287,0,0,1,5.025.371A6.144,6.144,0,0,1,51.722,37.1a12.8,12.8,0,0,1-.466,5.4,1.411,1.411,0,0,0,0,.811,5.654,5.654,0,0,1-.033,3.365A2.468,2.468,0,0,1,48.4,48.531a1.074,1.074,0,0,0-.9.27,4.65,4.65,0,0,1-6.447-.041.9.9,0,0,0-.737-.241A2.537,2.537,0,0,1,37.3,46.359a4.861,4.861,0,0,1-.138-.785c-.023-.279-.005-.561-.005-.931"
													transform="translate(-33.598 -29.506)"
												/>
												<path
													className="b-navbar-mobile"
													d="M36.353,25.2a9.713,9.713,0,0,1,7.53,3.313,7.287,7.287,0,0,1,1.654,3.415.743.743,0,0,0,.395.572,2.159,2.159,0,0,1,1.031,1.518,5.811,5.811,0,0,1-.341,3.562,2.2,2.2,0,0,1-2.169,1.389c-.226,0-.286-.052-.256-.3.182-1.543.334-3.088.388-4.644a6.622,6.622,0,0,0-3.926-6.618,8.922,8.922,0,0,0-9.957.92,6.3,6.3,0,0,0-2.515,5.342,45.419,45.419,0,0,0,.336,4.559.522.522,0,0,0,.22.4,13.972,13.972,0,0,0,5.656,2.7,1.177,1.177,0,0,0,.762-.124,2.55,2.55,0,0,1,1.925-.019.662.662,0,0,1,.355.821.685.685,0,0,1-.653.6c-.444.025-.89.009-1.336,0a.491.491,0,0,1-.443-.236c-.158-.316-.431-.339-.713-.392a14.078,14.078,0,0,1-5.859-2.764,1.472,1.472,0,0,0-.651-.308A2.049,2.049,0,0,1,26.2,37.68a5.672,5.672,0,0,1-.348-3.808,2.128,2.128,0,0,1,1.077-1.428.49.49,0,0,0,.27-.362c.864-3.812,3.413-5.76,6.928-6.629a7.686,7.686,0,0,1,1.02-.17c.414-.044.831-.058,1.2-.083"
													transform="translate(-25.675 -25.199)"
												/>
											</g>
											<g transform="translate(192.696 0)">
												<path
													className="b-navbar-mobile"
													d="M37.161,44.643a16.71,16.71,0,0,0,3.358,1.73c.171.063.243.246.355.378a4.984,4.984,0,0,0,2.987,1.956,3.312,3.312,0,0,0,2.3-.529,6.725,6.725,0,0,0,2-1.987,14.125,14.125,0,0,0,2.25-5.849c.052-.314-.073-.375-.337-.388a15.483,15.483,0,0,1-3.5-.458,12.478,12.478,0,0,1-4.973-2.827c-.275-.249-.375-.188-.562.084a6.522,6.522,0,0,1-2.715,2.4c-.267.117-.235.291-.213.5a15.768,15.768,0,0,0,.95,3.95l.133.352a11.318,11.318,0,0,1-1.683-.991.3.3,0,0,1-.081-.154,12.447,12.447,0,0,1-.409-6.392,6.221,6.221,0,0,1,5.5-4.954,10.287,10.287,0,0,1,5.025.371A6.144,6.144,0,0,1,51.722,37.1a12.8,12.8,0,0,1-.466,5.4,1.411,1.411,0,0,0,0,.811,5.654,5.654,0,0,1-.033,3.365A2.468,2.468,0,0,1,48.4,48.531a1.074,1.074,0,0,0-.9.27,4.65,4.65,0,0,1-6.447-.041.9.9,0,0,0-.737-.241A2.537,2.537,0,0,1,37.3,46.359a4.861,4.861,0,0,1-.138-.785c-.023-.279-.005-.561-.005-.931"
													transform="translate(-33.598 -29.506)"
												/>
												<path
													className="b-navbar-mobile"
													d="M36.353,25.2a9.713,9.713,0,0,1,7.53,3.313,7.287,7.287,0,0,1,1.654,3.415.743.743,0,0,0,.395.572,2.159,2.159,0,0,1,1.031,1.518,5.811,5.811,0,0,1-.341,3.562,2.2,2.2,0,0,1-2.169,1.389c-.226,0-.286-.052-.256-.3.182-1.543.334-3.088.388-4.644a6.622,6.622,0,0,0-3.926-6.618,8.922,8.922,0,0,0-9.957.92,6.3,6.3,0,0,0-2.515,5.342,45.419,45.419,0,0,0,.336,4.559.522.522,0,0,0,.22.4,13.972,13.972,0,0,0,5.656,2.7,1.177,1.177,0,0,0,.762-.124,2.55,2.55,0,0,1,1.925-.019.662.662,0,0,1,.355.821.685.685,0,0,1-.653.6c-.444.025-.89.009-1.336,0a.491.491,0,0,1-.443-.236c-.158-.316-.431-.339-.713-.392a14.078,14.078,0,0,1-5.859-2.764,1.472,1.472,0,0,0-.651-.308A2.049,2.049,0,0,1,26.2,37.68a5.672,5.672,0,0,1-.348-3.808,2.128,2.128,0,0,1,1.077-1.428.49.49,0,0,0,.27-.362c.864-3.812,3.413-5.76,6.928-6.629a7.686,7.686,0,0,1,1.02-.17c.414-.044.831-.058,1.2-.083"
													transform="translate(-25.675 -25.199)"
												/>
											</g>
										</g>
									</g>
									<g
										transform="translate(3 483.058)"
										onClick={() =>
											(window.location.href =
												'/trabaje-nosotros')
										}>
										<g
											className="s-navbar-mobile"
											transform="matrix(1, 0, 0, 1, -9, -489.06)">
											<g
												className="k-navbar-mobile"
												transform="translate(9 489)">
												<rect
													className="m-navbar-mobile"
													width={420}
													height={43}
												/>
												<rect
													className="a-navbar-mobile"
													x={0.5}
													y={0.5}
													width={419}
													height={42}
												/>
											</g>
										</g>
										<text
											className="l-navbar-mobile"
											transform="translate(40 9.942)">
											<tspan x={0} y={15}>
												{t('Trabaje con nosotros')}
											</tspan>
										</text>
									</g>
									<g
										transform="translate(3 440.796)"
										onClick={() =>
											(window.location.href =
												'/codigo-linea-etica')
										}>
										<g
											className="r-navbar-mobile"
											transform="matrix(1, 0, 0, 1, -9, -446.8)">
											<g
												className="k-navbar-mobile"
												transform="translate(9 447)">
												<rect
													className="m-navbar-mobile"
													width={420}
													height={43}
												/>
												<rect
													className="a-navbar-mobile"
													x={0.5}
													y={0.5}
													width={419}
													height={42}
												/>
											</g>
										</g>
										<text
											className="l-navbar-mobile"
											transform="translate(40 10.204)">
											<tspan x={0} y={15}>
												{t('Ética y compliance​')}
											</tspan>
										</text>
									</g>
									<g
										transform="translate(3 398.534)"
										onClick={() => setStep(3)}>
										<g
											className="q-navbar-mobile"
											transform="matrix(1, 0, 0, 1, -9, -404.53)">
											<g
												className="k-navbar-mobile"
												transform="translate(9 405)">
												<rect
													className="m-navbar-mobile"
													width={420}
													height={44}
												/>
												<rect
													className="a-navbar-mobile"
													x={0.5}
													y={0.5}
													width={419}
													height={43}
												/>
											</g>
										</g>
										<text
											className="l-navbar-mobile"
											transform="translate(40 10.467)">
											<tspan x={0} y={15}>
												{t('Actualidad​')}
											</tspan>
										</text>
									</g>
									<g
										transform="translate(3 356.271)"
										onClick={() => setStep(2)}>
										<g
											className="p-navbar-mobile"
											transform="matrix(1, 0, 0, 1, -9, -362.27)">
											<g
												className="k-navbar-mobile"
												transform="translate(9 362)">
												<rect
													className="m-navbar-mobile"
													width={420}
													height={44}
												/>
												<rect
													className="a-navbar-mobile"
													x={0.5}
													y={0.5}
													width={419}
													height={43}
												/>
											</g>
										</g>
										<text
											className="l-navbar-mobile"
											transform="translate(40 10.729)">
											<tspan x={0} y={15}>
												{t('Soluciones en salud')}
											</tspan>
										</text>
									</g>
									<g
										transform="translate(3 314.009)"
										onClick={() => setStep(1)}>
										<g
											className="o-navbar-mobile"
											transform="matrix(1, 0, 0, 1, -9, -320.01)">
											<g
												className="k-navbar-mobile"
												transform="translate(9 320)">
												<rect
													className="m-navbar-mobile"
													width={420}
													height={43}
												/>
												<rect
													className="a-navbar-mobile"
													x={0.5}
													y={0.5}
													width={419}
													height={42}
												/>
											</g>
										</g>
										<text
											className="l-navbar-mobile"
											transform="translate(40 9.991)">
											<tspan x={0} y={15}>
												{t('Trayectoria')}
											</tspan>
										</text>
									</g>
									<g
										transform="translate(3 272.778)"
										onClick={() =>
											(window.location.href = '/')
										}>
										<g
											className="n-navbar-mobile"
											transform="matrix(1, 0, 0, 1, -9, -278.78)">
											<g
												className="k-navbar-mobile"
												transform="translate(9 279)">
												<rect
													className="m-navbar-mobile"
													width={420}
													height={42}
												/>
												<rect
													className="a-navbar-mobile"
													x={0.5}
													y={0.5}
													width={419}
													height={41}
												/>
											</g>
										</g>
										<text
											className="l-navbar-mobile"
											transform="translate(40 9.222)">
											<tspan x={0} y={15}>
												{t('Home')}
											</tspan>
										</text>
									</g>
								</g>
								<path
									className="e-navbar-mobile"
									d="M955.324-45.344,948.263-52.4l-6.929,6.929a3.1,3.1,0,0,1-4.382,0,3.1,3.1,0,0,1,0-4.381l6.929-6.929-7.061-7.061a2.911,2.911,0,0,1,0-4.117,2.912,2.912,0,0,1,4.117,0L948-60.9l7.193-7.193a3.1,3.1,0,0,1,4.382,0,3.1,3.1,0,0,1,0,4.381l-7.194,7.194,7.061,7.061a2.911,2.911,0,0,1,0,4.117,2.9,2.9,0,0,1-2.059.853A2.9,2.9,0,0,1,955.324-45.344Z"
									transform="translate(-577.481 76.722)"
									onClick={() => setOpenMenu(false)}
								/>
								<g
									transform="translate(320.094 9.941)"
									onClick={() => {
										setOpenMenu(false)
										setOpenContact(true)
										setStep(0)
									}}>
									<path
										className="b-navbar-mobile"
										d="M37.161,44.643a16.71,16.71,0,0,0,3.358,1.73c.171.063.243.246.355.378a4.984,4.984,0,0,0,2.987,1.956,3.312,3.312,0,0,0,2.3-.529,6.725,6.725,0,0,0,2-1.987,14.125,14.125,0,0,0,2.25-5.849c.052-.314-.073-.375-.337-.388a15.483,15.483,0,0,1-3.5-.458,12.478,12.478,0,0,1-4.973-2.827c-.275-.249-.375-.188-.562.084a6.522,6.522,0,0,1-2.715,2.4c-.267.117-.235.291-.213.5a15.768,15.768,0,0,0,.95,3.95l.133.352a11.318,11.318,0,0,1-1.683-.991.3.3,0,0,1-.081-.154,12.447,12.447,0,0,1-.409-6.392,6.221,6.221,0,0,1,5.5-4.954,10.287,10.287,0,0,1,5.025.371A6.144,6.144,0,0,1,51.722,37.1a12.8,12.8,0,0,1-.466,5.4,1.411,1.411,0,0,0,0,.811,5.654,5.654,0,0,1-.033,3.365A2.468,2.468,0,0,1,48.4,48.531a1.074,1.074,0,0,0-.9.27,4.65,4.65,0,0,1-6.447-.041.9.9,0,0,0-.737-.241A2.537,2.537,0,0,1,37.3,46.359a4.861,4.861,0,0,1-.138-.785c-.023-.279-.005-.561-.005-.931"
										transform="translate(-33.598 -29.506)"
									/>
									<path
										className="b-navbar-mobile"
										d="M36.353,25.2a9.713,9.713,0,0,1,7.53,3.313,7.287,7.287,0,0,1,1.654,3.415.743.743,0,0,0,.395.572,2.159,2.159,0,0,1,1.031,1.518,5.811,5.811,0,0,1-.341,3.562,2.2,2.2,0,0,1-2.169,1.389c-.226,0-.286-.052-.256-.3.182-1.543.334-3.088.388-4.644a6.622,6.622,0,0,0-3.926-6.618,8.922,8.922,0,0,0-9.957.92,6.3,6.3,0,0,0-2.515,5.342,45.419,45.419,0,0,0,.336,4.559.522.522,0,0,0,.22.4,13.972,13.972,0,0,0,5.656,2.7,1.177,1.177,0,0,0,.762-.124,2.55,2.55,0,0,1,1.925-.019.662.662,0,0,1,.355.821.685.685,0,0,1-.653.6c-.444.025-.89.009-1.336,0a.491.491,0,0,1-.443-.236c-.158-.316-.431-.339-.713-.392a14.078,14.078,0,0,1-5.859-2.764,1.472,1.472,0,0,0-.651-.308A2.049,2.049,0,0,1,26.2,37.68a5.672,5.672,0,0,1-.348-3.808,2.128,2.128,0,0,1,1.077-1.428.49.49,0,0,0,.27-.362c.864-3.812,3.413-5.76,6.928-6.629a7.686,7.686,0,0,1,1.02-.17c.414-.044.831-.058,1.2-.083"
										transform="translate(-25.675 -25.199)"
									/>
								</g>
							</g>
						</svg>
					) : step === 1 ? (
						<svg
							viewBox="3 0 414 902"
							className="absolute z-[1] top-0">
							<defs>
								<style>
									{
										'.a-navbar-mobile,.d-navbar-mobile,.h-navbar-mobile{fill:none;}.b-navbar-mobile,.n-navbar-mobile{fill:#001f5f;}.c-navbar-mobile,.e-navbar-mobile,.l-navbar-mobile,.m-navbar-mobile{fill:#fff;}.c-navbar-mobile{font-size:12px;font-family:Silka-Medium, Silka;font-weight:500;}.d-navbar-mobile{stroke:#fff;}.f-navbar-mobile{clip-path:url(#c-navbar-mobile);}.g-navbar-mobile,.k-navbar-mobile{fill:#e40032;}.h-navbar-mobile,.k-navbar-mobile,.m-navbar-mobile{stroke:#001f5f;}.i-navbar-mobile{clip-path:url(#f-navbar-mobile);}.j-navbar-mobile{clip-path:url(#g-navbar-mobile);}.l-navbar-mobile,.n-navbar-mobile{font-size:16px;font-family:Silka-SemiBold, Silka;font-weight:600;}.o-navbar-mobile{stroke:none;}.p-navbar-mobile{filter:url(#v-navbar-mobile);}.q-navbar-mobile{filter:url(#t-navbar-mobile);}.r-navbar-mobile{filter:url(#r-navbar-mobile);}.s-navbar-mobile{filter:url(#p-navbar-mobile);}.t-navbar-mobile{filter:url(#n-navbar-mobile);}.u-navbar-mobile{filter:url(#l-navbar-mobile);}.v-navbar-mobile{filter:url(#j-navbar-mobile);}.w-navbar-mobile{filter:url(#h-navbar-mobile);}.x-navbar-mobile{filter:url(#d-navbar-mobile);}.y-navbar-mobile{filter:url(#a-navbar-mobile);}'
									}
								</style>
								<filter
									id="a-navbar-mobile"
									x={2}
									y={0}
									width={433.878}
									height={56.79}
									filterUnits="userSpaceOnUse">
									<feOffset dy={3} />
									<feGaussianBlur
										stdDeviation={3}
										result="b"
									/>
									<feFlood floodOpacity={0.302} />
									<feComposite operator="in" in2="b" />
									<feComposite in="SourceGraphic" />
								</filter>
								<clipPath id="c-navbar-mobile">
									<rect
										className="a-navbar-mobile"
										width={108.286}
										height={30.3}
									/>
								</clipPath>
								<filter
									id="d-navbar-mobile"
									x={43.862}
									y={189.188}
									width={351.004}
									height={64.541}
									filterUnits="userSpaceOnUse">
									<feOffset dy={3} />
									<feGaussianBlur
										stdDeviation={3}
										result="e"
									/>
									<feFlood floodOpacity={0.502} />
									<feComposite operator="in" in2="e" />
									<feComposite in="SourceGraphic" />
								</filter>
								<clipPath id="f-navbar-mobile">
									<rect
										className="a-navbar-mobile"
										width={193.23}
										height={55.733}
									/>
								</clipPath>
								<clipPath id="g-navbar-mobile">
									<rect
										className="b-navbar-mobile"
										width={139.029}
										height={58.623}
									/>
								</clipPath>
								<filter
									id="h-navbar-mobile"
									x={0}
									y={725}
									width={438}
									height={61}
									filterUnits="userSpaceOnUse">
									<feOffset dy={3} />
									<feGaussianBlur
										stdDeviation={3}
										result="i"
									/>
									<feFlood floodOpacity={0.251} />
									<feComposite operator="in" in2="i" />
									<feComposite in="SourceGraphic" />
								</filter>
								<filter
									id="j-navbar-mobile"
									x={0}
									y={681}
									width={438}
									height={63}
									filterUnits="userSpaceOnUse">
									<feOffset dy={3} />
									<feGaussianBlur
										stdDeviation={3}
										result="k"
									/>
									<feFlood floodOpacity={0.251} />
									<feComposite operator="in" in2="k" />
									<feComposite in="SourceGraphic" />
								</filter>
								<filter
									id="l-navbar-mobile"
									x={0}
									y={639}
									width={438}
									height={61}
									filterUnits="userSpaceOnUse">
									<feOffset dy={3} />
									<feGaussianBlur
										stdDeviation={3}
										result="m"
									/>
									<feFlood floodOpacity={0.251} />
									<feComposite operator="in" in2="m" />
									<feComposite in="SourceGraphic" />
								</filter>
								<filter
									id="n-navbar-mobile"
									x={0}
									y={597}
									width={438}
									height={61}
									filterUnits="userSpaceOnUse">
									<feOffset dy={3} />
									<feGaussianBlur
										stdDeviation={3}
										result="o"
									/>
									<feFlood floodOpacity={0.251} />
									<feComposite operator="in" in2="o" />
									<feComposite in="SourceGraphic" />
								</filter>
								<filter
									id="p-navbar-mobile"
									x={0}
									y={555}
									width={438}
									height={62}
									filterUnits="userSpaceOnUse">
									<feOffset dy={3} />
									<feGaussianBlur
										stdDeviation={3}
										result="q"
									/>
									<feFlood floodOpacity={0.251} />
									<feComposite operator="in" in2="q" />
									<feComposite in="SourceGraphic" />
								</filter>
								<filter
									id="r-navbar-mobile"
									x={0}
									y={512}
									width={438}
									height={62}
									filterUnits="userSpaceOnUse">
									<feOffset dy={3} />
									<feGaussianBlur
										stdDeviation={3}
										result="s"
									/>
									<feFlood floodOpacity={0.251} />
									<feComposite operator="in" in2="s" />
									<feComposite in="SourceGraphic" />
								</filter>
								<filter
									id="t-navbar-mobile"
									x={0}
									y={314}
									width={438}
									height={61}
									filterUnits="userSpaceOnUse">
									<feOffset dy={3} />
									<feGaussianBlur
										stdDeviation={3}
										result="u"
									/>
									<feFlood floodOpacity={0.251} />
									<feComposite operator="in" in2="u" />
									<feComposite in="SourceGraphic" />
								</filter>
								<filter
									id="v-navbar-mobile"
									x={0}
									y={273}
									width={438}
									height={60}
									filterUnits="userSpaceOnUse">
									<feOffset dy={3} />
									<feGaussianBlur
										stdDeviation={3}
										result="w"
									/>
									<feFlood floodOpacity={0.2} />
									<feComposite operator="in" in2="w" />
									<feComposite in="SourceGraphic" />
								</filter>
							</defs>
							<g>
								<line
									className="d-navbar-mobile"
									x2={311}
									transform="translate(73 400)"
								/>
								<line
									className="d-navbar-mobile"
									x2={311}
									transform="translate(73 436)"
								/>
								<line
									className="d-navbar-mobile"
									x2={311}
									transform="translate(73 472)"
								/>
								<g transform="translate(357.487 10.743)">
									<rect
										className="b-navbar-mobile"
										width={24.686}
										height={4.377}
										rx={2.189}
									/>
									<rect
										className="b-navbar-mobile"
										width={24.686}
										height={4.377}
										rx={2.189}
										transform="translate(0 7.296)"
									/>
									<rect
										className="b-navbar-mobile"
										width={24.686}
										height={4.377}
										rx={2.189}
										transform="translate(0 14.592)"
									/>
								</g>
								<g transform="translate(317.579 9.941)">
									<path
										className="b-navbar-mobile"
										d="M37.159,44.643a16.6,16.6,0,0,0,3.342,1.73c.17.063.242.246.353.378a4.958,4.958,0,0,0,2.972,1.956,3.283,3.283,0,0,0,2.293-.529,6.708,6.708,0,0,0,2-1.987,14.165,14.165,0,0,0,2.239-5.849c.052-.314-.072-.375-.335-.388a15.339,15.339,0,0,1-3.48-.458,12.4,12.4,0,0,1-4.949-2.827c-.274-.249-.373-.188-.56.084a6.5,6.5,0,0,1-2.7,2.4c-.266.117-.234.291-.212.5a15.831,15.831,0,0,0,.946,3.95l.132.352a11.252,11.252,0,0,1-1.675-.991.3.3,0,0,1-.081-.154,12.5,12.5,0,0,1-.407-6.392A6.2,6.2,0,0,1,42.5,31.456a10.191,10.191,0,0,1,5,.371A6.138,6.138,0,0,1,51.65,37.1a12.857,12.857,0,0,1-.464,5.4,1.418,1.418,0,0,0,0,.811,5.68,5.68,0,0,1-.033,3.365,2.456,2.456,0,0,1-2.808,1.853,1.065,1.065,0,0,0-.891.27,4.612,4.612,0,0,1-6.416-.041.892.892,0,0,0-.733-.241,2.527,2.527,0,0,1-3-2.161,4.882,4.882,0,0,1-.137-.785c-.023-.279-.005-.561-.005-.931"
										transform="translate(-33.614 -29.506)"
									/>
									<path
										className="b-navbar-mobile"
										d="M36.3,25.2A9.645,9.645,0,0,1,43.8,28.512a7.3,7.3,0,0,1,1.646,3.415.743.743,0,0,0,.393.572,2.159,2.159,0,0,1,1.026,1.518,5.837,5.837,0,0,1-.339,3.562,2.189,2.189,0,0,1-2.158,1.389c-.225,0-.284-.052-.255-.3.182-1.543.332-3.088.386-4.644a6.626,6.626,0,0,0-3.907-6.618,8.845,8.845,0,0,0-9.909.92,6.316,6.316,0,0,0-2.5,5.342,45.635,45.635,0,0,0,.334,4.559.523.523,0,0,0,.219.4,13.876,13.876,0,0,0,5.629,2.7,1.167,1.167,0,0,0,.759-.124,2.527,2.527,0,0,1,1.916-.019.663.663,0,0,1,.353.821.683.683,0,0,1-.65.6c-.442.025-.886.009-1.329,0a.488.488,0,0,1-.441-.236c-.157-.316-.429-.339-.71-.392a13.981,13.981,0,0,1-5.831-2.764,1.462,1.462,0,0,0-.648-.308A2.041,2.041,0,0,1,26.2,37.68a5.7,5.7,0,0,1-.346-3.808,2.126,2.126,0,0,1,1.072-1.428.49.49,0,0,0,.269-.362c.86-3.812,3.4-5.76,6.894-6.629a7.615,7.615,0,0,1,1.015-.17c.412-.044.827-.058,1.2-.083"
										transform="translate(-25.675 -25.199)"
									/>
								</g>

								<g transform="translate(4)">
									<g
										className="y-navbar-mobile"
										transform="matrix(1, 0, 0, 1, -11, -6)">
										<path
											className="e-navbar-mobile"
											d="M0,0H415.878V38.79H0Z"
											transform="translate(11 6)"
										/>
									</g>
									<g
										transform="translate(280 10)"
										onClick={handleChangeSelectedLanguage}>
										<foreignObject
											x={0}
											y={0}
											width={38}
											height={38}>
											{selectedLanguage === 'es' ? (
												<svg
													xmlns="http://www.w3.org/2000/svg"
													id="Componente_38_3"
													data-name="Componente 38 – 3"
													width="25"
													height="25"
													viewBox="0 0 25 25">
													<g
														id="Grupo_5836"
														data-name="Grupo 5836">
														<path
															id="Trazado_68877"
															data-name="Trazado 68877"
															d="M1409.679,47.929a9.753,9.753,0,1,1-9.753-9.753,9.753,9.753,0,0,1,9.753,9.753"
															transform="translate(-1390.173 -38.176)"
															fill="#001f5f"
														/>
														<path
															id="Trazado_68878"
															data-name="Trazado 68878"
															d="M1479.116,60.531H1464.3a8.906,8.906,0,0,1,14.813,0"
															transform="translate(-1461.956 -55.722)"
															fill="#fd0002"
														/>
														<path
															id="Trazado_68879"
															data-name="Trazado 68879"
															d="M1479.116,571.931a8.906,8.906,0,0,1-14.812,0Z"
															transform="translate(-1461.956 -557.234)"
															fill="#fd0002"
														/>
														<path
															id="Trazado_68880"
															data-name="Trazado 68880"
															d="M1426.371,208.875a8.862,8.862,0,0,1-1.5,4.944h-14.812a8.909,8.909,0,0,1,0-9.888h14.812a8.862,8.862,0,0,1,1.5,4.944"
															transform="translate(-1407.714 -199.122)"
															fill="#ff0"
														/>
													</g>
												</svg>
											) : (
												<svg
													xmlns="http://www.w3.org/2000/svg"
													xmlnsXlink="http://www.w3.org/1999/xlink"
													id="Componente_38_3"
													data-name="Componente 38 – 3"
													width="25"
													height="25"
													viewBox="0 0 25 25">
													<defs>
														<clipPath id="clip-path">
															<path
																id="Trazado_68887"
																data-name="Trazado 68887"
																d="M321.584,78.464a8.877,8.877,0,1,0,8.877-8.877,8.877,8.877,0,0,0-8.877,8.877"
																transform="translate(-321.584 -69.587)"
																fill="none"
															/>
														</clipPath>
													</defs>
													<g
														id="Grupo_5837"
														data-name="Grupo 5837">
														<path
															id="Trazado_68882"
															data-name="Trazado 68882"
															d="M309.679,47.929a9.753,9.753,0,1,1-9.753-9.753,9.753,9.753,0,0,1,9.753,9.753"
															transform="translate(-290.173 -38.176)"
															fill="#001f5f"
														/>
														<g
															id="Grupo_5836"
															data-name="Grupo 5836"
															transform="translate(0.876 0.876)"
															clipPath="url(#clip-path)">
															<path
																id="Trazado_68883"
																data-name="Trazado 68883"
																d="M35.689,21.13,4.668,0H0V1.552L29.482,21.635h6.207Z"
																transform="translate(-8.967 -1.94)"
																fill="#feffff"
															/>
															<path
																id="Trazado_68884"
																data-name="Trazado 68884"
																d="M35.689,0H31.034L0,21.14v.495H6.221L35.689,1.562Z"
																transform="translate(-8.967 -1.94)"
																fill="#feffff"
															/>
															<rect
																id="Rectángulo_1963"
																data-name="Rectángulo 1963"
																width="5.222"
																height="21.635"
																transform="translate(6.242 -1.94)"
																fill="#feffff"
															/>
															<rect
																id="Rectángulo_1964"
																data-name="Rectángulo 1964"
																width="35.491"
																height="5.104"
																transform="translate(-8.835 6.538)"
																fill="#feffff"
															/>
															<rect
																id="Rectángulo_1965"
																data-name="Rectángulo 1965"
																width="35.491"
																height="3.899"
																transform="translate(-8.835 7.074)"
																fill="#fd0002"
															/>
															<rect
																id="Rectángulo_1966"
																data-name="Rectángulo 1966"
																width="3.365"
																height="21.635"
																transform="translate(7.201 -1.94)"
																fill="#fd0002"
															/>
															<path
																id="Trazado_68885"
																data-name="Trazado 68885"
																d="M35.409,21.635,67.17,0H64.832L33.071,21.635Z"
																transform="translate(-41.116 -1.94)"
																fill="#fd0002"
															/>
															<path
																id="Trazado_68886"
																data-name="Trazado 68886"
																d="M58.533,21.635,26.772,0H24.433L56.195,21.635Z"
																transform="translate(-32.72 -1.94)"
																fill="#fd0002"
															/>
														</g>
													</g>
												</svg>
											)}
										</foreignObject>
									</g>
									<g transform="translate(37 4.493)">
										<g className="f-navbar-mobile">
											<a href="/">
												<foreignObject
													width={90}
													height={42}>
													<img src="/amarey-logo.webp" />
												</foreignObject>
											</a>
										</g>
									</g>
								</g>
								<path
									className="e-navbar-mobile"
									d="M0,0H415.878V254.789H0Z"
									transform="translate(4 38.79)"
								/>
								<foreignObject
									x={0}
									y={0}
									width="100%"
									height={266}
									transform="translate(5 189.188)">
									<div
										className="w-full flex justify-between mx-[auto] h-[46px] max-w-[331px] border-solid border-[3px] border-[#001f5f]"
										style={{
											borderTopLeftRadius: 100,
											borderBottomRightRadius: 100,
										}}>
										<input
											type="text"
											className="w-[80%] border-[transparent] bg-[transparent] pl-[30px]"
											id="search-input"
											onChange={handleSearchPage}
											style={{ outline: 'none' }}
										/>
										<img
											src="/images/lupa.svg"
											className="mr-[30px]"
											alt=""
											width={25}
											height={25}
										/>
									</div>
									{results.length > 0 && (
										<div className="w-full h-[200px] bg-white overflow-y-auto">
											{results.map(
												(
													item: SiteMapMock,
													index: number
												) => (
													<div
														className="h-[40px] w-full flex items-center border-b-solid border-b-[1px] border-[#e6e6e6] px-[10px]"
														key={index}
														onClick={() =>
															(window.location.href =
																item.url)
														}>
														<span>
															{item.label}
														</span>
													</div>
												)
											)}
										</div>
									)}
								</foreignObject>

								<g transform="translate(4.771 541.513)">
									<line
										className="h-navbar-mobile"
										x2={415.661}
										transform="translate(0)"
									/>
								</g>
								<g transform="translate(115.783 116.835)">
									<g
										className="i-navbar-mobile"
										transform="translate(0 0)">
										<path
											className="g-navbar-mobile"
											d="M32.223,35.849l7.64,10.719a.3.3,0,0,1,.054.172l.043,8.391a.29.29,0,0,1-.283.294l-1.136.006a.288.288,0,0,1-.285-.291l-.015-2.976-4.107.021.015,2.977a.288.288,0,0,1-.283.294l-1.136.006a.286.286,0,0,1-.284-.291l-.039-7.709a.288.288,0,0,1,.282-.294l1.136-.007a.29.29,0,0,1,.285.292l.015,2.976,4.107-.021-.016-3.184-6.937-9.735-5.9.031L18.54,47.33l.015,3.183,4.108-.022-.015-2.976a.288.288,0,0,1,.282-.294l1.136-.007a.288.288,0,0,1,.285.292l.039,7.709a.289.289,0,0,1-.282.294l-1.136.006a.288.288,0,0,1-.285-.291l-.015-2.977-4.107.022.015,2.977a.29.29,0,0,1-.283.294l-1.136.006a.289.289,0,0,1-.285-.291l-.042-8.391a.3.3,0,0,1,.053-.172l7.53-10.8a.284.284,0,0,1,.229-.122l7.348-.039a.28.28,0,0,1,.23.12M20.392,27.085,8.1,23.042a.267.267,0,0,0-.175,0L.2,25.677a.3.3,0,0,0-.18.37l.356,1.112a.282.282,0,0,0,.359.186l2.741-.934,1.29,4.02-2.742.934a.3.3,0,0,0-.18.37l.356,1.112a.283.283,0,0,0,.359.186l7.1-2.42a.294.294,0,0,0,.18-.37L9.48,29.129a.283.283,0,0,0-.359-.186l-2.742.935L5.09,25.859l2.932-1,11.164,3.673.912,2.843.94,2.931L14.2,44.116l-2.933,1L9.978,41.1l2.742-.934a.3.3,0,0,0,.18-.37l-.357-1.112a.282.282,0,0,0-.358-.186l-7.1,2.42a.3.3,0,0,0-.18.37L5.259,42.4a.282.282,0,0,0,.359.186l2.742-.935,1.29,4.02L6.908,46.6a.3.3,0,0,0-.181.37l.357,1.112a.282.282,0,0,0,.359.186l7.729-2.635a.285.285,0,0,0,.142-.107l7.529-10.8a.3.3,0,0,0,.039-.263l-2.307-7.19a.289.289,0,0,0-.183-.188m15.158-1.98L47.8,20.929a.282.282,0,0,0,.141-.107l4.751-6.815a.3.3,0,0,0-.065-.408l-.922-.683a.278.278,0,0,0-.4.067L49.623,15.4l-3.335-2.471,1.685-2.417a.3.3,0,0,0-.064-.408l-.922-.683a.277.277,0,0,0-.4.067l-4.365,6.26a.3.3,0,0,0,.064.409l.923.683a.279.279,0,0,0,.4-.067l1.685-2.417,3.335,2.471-1.8,2.585L35.7,23.2l-4.793-3.55L30.848,7.575l1.8-2.585,3.335,2.471L34.3,9.878a.3.3,0,0,0,.065.408l.922.683a.278.278,0,0,0,.4-.067l4.365-6.261a.3.3,0,0,0-.065-.408l-.922-.683a.279.279,0,0,0-.4.067L36.979,6.034,33.645,3.564,35.33,1.146a.3.3,0,0,0-.065-.408L34.343.055a.277.277,0,0,0-.4.067L29.2,6.936a.3.3,0,0,0-.053.172l.067,13.3a.294.294,0,0,0,.118.236l5.967,4.42a.278.278,0,0,0,.255.04m20.628,1.754.345-1.116a.3.3,0,0,0-.184-.368l-7.755-2.551a.278.278,0,0,0-.176,0L36.157,27a.285.285,0,0,0-.181.189L33.742,34.4a.3.3,0,0,0,.041.262l7.639,10.72a.29.29,0,0,0,.143.105l7.755,2.552a.282.282,0,0,0,.357-.19l.345-1.115a.292.292,0,0,0-.183-.368l-2.752-.906,1.249-4.033,2.752.9a.283.283,0,0,0,.357-.189l.345-1.116a.3.3,0,0,0-.184-.368l-7.125-2.344a.281.281,0,0,0-.356.19l-.346,1.116a.293.293,0,0,0,.184.367l2.751.906-1.248,4.033-2.943-.967-6.938-9.736,1.795-5.795L48.5,24.641l2.941.969L50.2,29.643l-2.752-.906a.284.284,0,0,0-.357.19l-.345,1.116a.294.294,0,0,0,.184.367l7.124,2.344a.282.282,0,0,0,.357-.189l.346-1.116a.3.3,0,0,0-.184-.368l-2.752-.9,1.249-4.033,2.752.906a.284.284,0,0,0,.357-.19M21.257,25.13l5.916-4.492a.3.3,0,0,0,.116-.238L27.2,7.1a.294.294,0,0,0-.055-.171L22.319.172a.278.278,0,0,0-.4-.063L21.007.8a.3.3,0,0,0-.06.409l1.713,2.4L19.353,6.121l-1.713-2.4a.278.278,0,0,0-.4-.062l-.915.695a.3.3,0,0,0-.06.409L20.7,10.974a.279.279,0,0,0,.4.062l.915-.695a.3.3,0,0,0,.061-.409l-1.713-2.4,3.307-2.511L25.5,7.587l.077,12.079-4.751,3.607L9.66,19.617,7.828,17.054l3.307-2.511,1.712,2.4a.279.279,0,0,0,.4.062l.915-.695a.3.3,0,0,0,.061-.409L9.784,9.691a.278.278,0,0,0-.4-.063l-.915.695a.3.3,0,0,0-.06.409l1.712,2.4L6.818,15.64,5.1,13.243a.279.279,0,0,0-.4-.063l-.915.695a.3.3,0,0,0-.06.409l4.828,6.756a.279.279,0,0,0,.142.105L21,25.173a.278.278,0,0,0,.255-.044"
											transform="translate(0 0)"
										/>
										<path
											className="b-navbar-mobile"
											d="M95.531,21.118h-4.8a6.353,6.353,0,0,1-3.349-.926,6.789,6.789,0,0,1-2.43-2.516,7.165,7.165,0,0,1,0-6.948A6.885,6.885,0,0,1,87.382,8.2,6.4,6.4,0,0,1,93.4,7.854,6.712,6.712,0,0,1,95.613,9.5l-.674.652a5.714,5.714,0,0,0-1.92-1.4,5.556,5.556,0,0,0-5.167.305,5.946,5.946,0,0,0-2.88,5.137,6.016,6.016,0,0,0,2.88,5.168,5.417,5.417,0,0,0,2.88.811h3.84V15.265H90.2v-.947h5.331Z"
											transform="translate(7.146 0.86)"
										/>
										<path
											className="b-navbar-mobile"
											d="M107.031,21.1l-5.515-6.905h1.634a6.338,6.338,0,0,0,2.451-.4,3.3,3.3,0,0,0,1.205-1.021,2.457,2.457,0,0,0,.51-1.505,2.535,2.535,0,0,0-.429-1.4,3.2,3.2,0,0,0-1.225-1.084,3.879,3.879,0,0,0-1.838-.422h-3.718V21.1h-.919V7.415h4.637a4.973,4.973,0,0,1,1.756.305,4.292,4.292,0,0,1,1.43.873,3.884,3.884,0,0,1,.909,1.243,3.47,3.47,0,0,1-.358,3.505,3.913,3.913,0,0,1-1.593,1.316,4.107,4.107,0,0,1-1.236.368,10.5,10.5,0,0,1-1.276.074l4.8,6Z"
											transform="translate(8.432 0.878)"
										/>
										<path
											className="b-navbar-mobile"
											d="M116.825,21.248a4.74,4.74,0,0,1-1.93-.41,5.042,5.042,0,0,1-1.644-1.169,4.831,4.831,0,0,1-1.093-1.684,5.55,5.55,0,0,1-.379-2.042V7.415h.919v8.527a4.527,4.527,0,0,0,.317,1.684,4.2,4.2,0,0,0,2.236,2.326,3.923,3.923,0,0,0,1.573.327,3.966,3.966,0,0,0,1.593-.327,4.2,4.2,0,0,0,2.237-2.326,4.547,4.547,0,0,0,.316-1.684V7.415h.92v8.527a5.571,5.571,0,0,1-.379,2.042,4.845,4.845,0,0,1-1.093,1.684,5.072,5.072,0,0,1-1.634,1.169,4.766,4.766,0,0,1-1.961.41"
											transform="translate(9.503 0.878)"
										/>
										<path
											className="b-navbar-mobile"
											d="M125.506,21.1l-.021-13.685h4.738a4.518,4.518,0,0,1,2.155.527,4.21,4.21,0,0,1,1.573,1.41,3.5,3.5,0,0,1,0,3.864,4.179,4.179,0,0,1-1.573,1.42,4.518,4.518,0,0,1-2.155.527h-3.8V21.1Zm.919-6.926h3.8a3.73,3.73,0,0,0,1.7-.389,3.252,3.252,0,0,0,1.236-1.054,2.482,2.482,0,0,0,.459-1.442,2.513,2.513,0,0,0-.459-1.463,3.252,3.252,0,0,0-1.236-1.054,3.73,3.73,0,0,0-1.7-.389H126.4Z"
											transform="translate(10.668 0.878)"
										/>
										<path
											className="b-navbar-mobile"
											d="M143.575,21.263a6.4,6.4,0,0,1-3.37-.937,6.773,6.773,0,0,1-2.451-2.548,7.287,7.287,0,0,1,0-7.01A6.773,6.773,0,0,1,140.2,8.22a6.528,6.528,0,0,1,6.74,0,6.772,6.772,0,0,1,2.451,2.548,7.287,7.287,0,0,1,0,7.01,6.772,6.772,0,0,1-2.451,2.548,6.4,6.4,0,0,1-3.37.937m0-13.012a5.462,5.462,0,0,0-2.9.811,6.153,6.153,0,0,0-2.115,8.232,6,6,0,0,0,2.115,2.19,5.592,5.592,0,0,0,5.8,0,5.913,5.913,0,0,0,2.1-2.19,6.269,6.269,0,0,0,0-6.042,5.922,5.922,0,0,0-2.1-2.19,5.465,5.465,0,0,0-2.9-.811"
											transform="translate(11.635 0.863)"
										/>
										<path
											className="b-navbar-mobile"
											d="M80.867,26.01h3.387a.452.452,0,0,1,.444.459v1.42a5.727,5.727,0,0,1,5.047-2.349,5.929,5.929,0,0,1,5.714,3.107,6.992,6.992,0,0,1,6.2-3.107c3.05,0,5.5,1.228,6.729,3.36a11.751,11.751,0,0,1,1.158,5.564v11.1a.452.452,0,0,1-.445.459h-3.773a.451.451,0,0,1-.445-.459V35.042c0-2.06-.28-3.18-.946-3.938a3.386,3.386,0,0,0-2.7-1.156,3.522,3.522,0,0,0-3.33,2.023,9.717,9.717,0,0,0-.6,4.191v9.4a.452.452,0,0,1-.445.459H93.1a.452.452,0,0,1-.445-.459V35.042c0-1.951-.28-3.144-.876-3.9A3.69,3.69,0,0,0,88.9,29.948a3.341,3.341,0,0,0-3.365,2.167,12.182,12.182,0,0,0-.456,4.046v9.4a.452.452,0,0,1-.445.459H80.867a.452.452,0,0,1-.445-.459v-19.1a.452.452,0,0,1,.445-.459"
											transform="translate(6.837 3.024)"
										/>
										<path
											className="b-navbar-mobile"
											d="M129.911,46.025h-3.386a.452.452,0,0,1-.445-.459V43.423a7.63,7.63,0,0,1-6.449,3.071c-5.678,0-9.779-4.372-9.779-10.406,0-6.105,4.136-10.549,9.884-10.549a7.144,7.144,0,0,1,6.344,3.143V26.467a.451.451,0,0,1,.445-.457h3.386a.451.451,0,0,1,.445.457v19.1a.452.452,0,0,1-.445.459M114.548,36.2a5.54,5.54,0,0,0,5.748,5.89c3.365,0,5.643-2.421,5.643-6,0-3.612-2.384-6.142-5.783-6.142-3.26,0-5.608,2.638-5.608,6.251"
											transform="translate(9.339 3.024)"
										/>
										<path
											className="b-navbar-mobile"
											d="M132.683,26.01h3.387a.452.452,0,0,1,.444.459V27.96c1.227-1.879,2.208-2.42,4.207-2.42h.35v4.625c-2.8.073-4.171,1.626-4.171,4.733V45.566a.452.452,0,0,1-.445.459h-3.773a.452.452,0,0,1-.445-.459v-19.1a.452.452,0,0,1,.445-.459"
											transform="translate(11.242 3.024)"
										/>
										<path
											className="b-navbar-mobile"
											d="M146.4,38.149a5.133,5.133,0,0,0,5.362,3.937,4.837,4.837,0,0,0,4.144-1.829.443.443,0,0,1,.333-.158h4.241a.456.456,0,0,1,.412.63,9.118,9.118,0,0,1-1.314,2.152,9.409,9.409,0,0,1-7.711,3.614A10.324,10.324,0,0,1,141.35,35.913a10.441,10.441,0,0,1,11.235-10.327c5.265.494,9.022,4.871,9.022,10.72a7.97,7.97,0,0,1-.176,1.843Zm10.62-4.228c-.6-2.566-2.488-3.974-5.362-3.974a5.156,5.156,0,0,0-5.4,3.974Z"
											transform="translate(12.017 3.025)"
										/>
										<path
											className="b-navbar-mobile"
											d="M167.248,44.1,160.38,26.59a.456.456,0,0,1,.412-.63h4.351a.444.444,0,0,1,.42.309l4.209,12.66,4.589-12.672a.446.446,0,0,1,.417-.3h4.377a.457.457,0,0,1,.408.64L168.731,52.383a.445.445,0,0,1-.408.276h-4.041a.458.458,0,0,1-.407-.643Z"
											transform="translate(13.632 3.074)"
										/>
										<path
											className="b-navbar-mobile"
											d="M69.562,19.983H65.776l-4.769,11.8a.457.457,0,0,0,.41.634h4.07a.445.445,0,0,0,.419-.306l1.763-5.15,2.768,8.093H62.75a4.6,4.6,0,0,0-4.245,2.917l-3.268,8.082a.457.457,0,0,0,.41.634h4.334a.444.444,0,0,0,.408-.277l2.758-6.623h9.218L75.021,46.4a.444.444,0,0,0,.411.283h4.327a.457.457,0,0,0,.41-.635Z"
											transform="translate(4.693 2.366)"
										/>
									</g>
								</g>
								<g
									className="j-navbar-mobile"
									transform="translate(4.217 39.241)">
									<path
										className="b-navbar-mobile"
										d="M91.4,43.724H0V0H139.029V11.32c0,17.9-21.323,32.4-47.627,32.4"
									/>
								</g>

								<g
									transform={
										results.length > 0
											? 'translate(0 161)'
											: 'translate(0 0)'
									}>
									<rect
										className="b-navbar-mobile"
										width={420}
										height={47}
										transform="translate(2 353)"
										onClick={() =>
											(window.location.href = '/historia')
										}
									/>
									<rect
										className="b-navbar-mobile"
										width={420}
										height={37}
										transform="translate(2 399)"
										onClick={() =>
											(window.location.href =
												'/filosofia')
										}
									/>
									<rect
										className="b-navbar-mobile"
										width={420}
										height={37}
										transform="translate(2 435)"
										onClick={() =>
											(window.location.href =
												'/reconocimientos')
										}
									/>
									<rect
										className="b-navbar-mobile"
										width={420}
										height={43}
										transform="translate(2 469)"
										onClick={() =>
											(window.location.href =
												'/responsabilidad')
										}
									/>
									<text
										className="c-navbar-mobile"
										transform="translate(77 385)"
										onClick={() =>
											(window.location.href = '/historia')
										}>
										<tspan x={0} y={0}>
											{t('Nuestra Historia')}
										</tspan>
									</text>
									<text
										className="c-navbar-mobile"
										transform="translate(77 421)"
										onClick={() =>
											(window.location.href =
												'/filosofia')
										}>
										<tspan x={0} y={0}>
											{t('Filosofía')}
										</tspan>
									</text>
									<text
										className="c-navbar-mobile"
										transform="translate(77 457)"
										onClick={() =>
											(window.location.href =
												'/reconocimientos')
										}>
										<tspan x={0} y={0}>
											{t('Reconocimientos')}
										</tspan>
									</text>
									<text
										className="c-navbar-mobile"
										transform="translate(77 492)"
										onClick={() =>
											(window.location.href =
												'/responsabilidad')
										}>
										<tspan x={0} y={0}>
											{t('RSE')}
										</tspan>
									</text>
									<g transform="translate(2 724.613)">
										<g
											className="w-navbar-mobile"
											transform="matrix(1, 0, 0, 1, -9, -730.61)">
											<g
												className="k-navbar-mobile"
												transform="translate(9 731)">
												<rect
													className="o-navbar-mobile"
													width={420}
													height={43}
												/>
												<rect
													className="a-navbar-mobile"
													x={0.5}
													y={0.5}
													width={419}
													height={42}
												/>
											</g>
										</g>
										<text
											className="l-navbar-mobile"
											transform="translate(40 10.387)">
											<tspan x={0} y={15}>
												{'Ucitech'}
											</tspan>
										</text>
									</g>
									<g transform="translate(2 617.534)">
										<g
											className="v-navbar-mobile"
											transform="matrix(1, 0, 0, 1, -9, -623.53)">
											<g
												className="m-navbar-mobile"
												transform="translate(9 687)"
												onClick={() =>
													(window.location.href =
														'/contactenos')
												}>
												<rect
													className="o-navbar-mobile"
													width={420}
													height={45}
												/>
												<rect
													className="a-navbar-mobile"
													x={0.5}
													y={0.5}
													width={419}
													height={44}
												/>
											</g>
										</g>
										<text
											className="n-navbar-mobile"
											transform="translate(40 74.466)">
											<tspan x={0} y={15}>
												{t('Contáctenos')}
											</tspan>
										</text>
										<g transform="translate(192.696 0)">
											<path
												className="b-navbar-mobile"
												d="M37.161,44.643a16.71,16.71,0,0,0,3.358,1.73c.171.063.243.246.355.378a4.984,4.984,0,0,0,2.987,1.956,3.312,3.312,0,0,0,2.3-.529,6.725,6.725,0,0,0,2-1.987,14.125,14.125,0,0,0,2.25-5.849c.052-.314-.073-.375-.337-.388a15.483,15.483,0,0,1-3.5-.458,12.478,12.478,0,0,1-4.973-2.827c-.275-.249-.375-.188-.562.084a6.522,6.522,0,0,1-2.715,2.4c-.267.117-.235.291-.213.5a15.768,15.768,0,0,0,.95,3.95l.133.352a11.318,11.318,0,0,1-1.683-.991.3.3,0,0,1-.081-.154,12.447,12.447,0,0,1-.409-6.392,6.221,6.221,0,0,1,5.5-4.954,10.287,10.287,0,0,1,5.025.371A6.144,6.144,0,0,1,51.722,37.1a12.8,12.8,0,0,1-.466,5.4,1.411,1.411,0,0,0,0,.811,5.654,5.654,0,0,1-.033,3.365A2.468,2.468,0,0,1,48.4,48.531a1.074,1.074,0,0,0-.9.27,4.65,4.65,0,0,1-6.447-.041.9.9,0,0,0-.737-.241A2.537,2.537,0,0,1,37.3,46.359a4.861,4.861,0,0,1-.138-.785c-.023-.279-.005-.561-.005-.931"
												transform="translate(-33.598 -29.506)"
											/>
											<path
												className="b-navbar-mobile"
												d="M36.353,25.2a9.713,9.713,0,0,1,7.53,3.313,7.287,7.287,0,0,1,1.654,3.415.743.743,0,0,0,.395.572,2.159,2.159,0,0,1,1.031,1.518,5.811,5.811,0,0,1-.341,3.562,2.2,2.2,0,0,1-2.169,1.389c-.226,0-.286-.052-.256-.3.182-1.543.334-3.088.388-4.644a6.622,6.622,0,0,0-3.926-6.618,8.922,8.922,0,0,0-9.957.92,6.3,6.3,0,0,0-2.515,5.342,45.419,45.419,0,0,0,.336,4.559.522.522,0,0,0,.22.4,13.972,13.972,0,0,0,5.656,2.7,1.177,1.177,0,0,0,.762-.124,2.55,2.55,0,0,1,1.925-.019.662.662,0,0,1,.355.821.685.685,0,0,1-.653.6c-.444.025-.89.009-1.336,0a.491.491,0,0,1-.443-.236c-.158-.316-.431-.339-.713-.392a14.078,14.078,0,0,1-5.859-2.764,1.472,1.472,0,0,0-.651-.308A2.049,2.049,0,0,1,26.2,37.68a5.672,5.672,0,0,1-.348-3.808,2.128,2.128,0,0,1,1.077-1.428.49.49,0,0,0,.27-.362c.864-3.812,3.413-5.76,6.928-6.629a7.686,7.686,0,0,1,1.02-.17c.414-.044.831-.058,1.2-.083"
												transform="translate(-25.675 -25.199)"
											/>
										</g>
										<g transform="translate(192.696 0)">
											<path
												className="b-navbar-mobile"
												d="M37.161,44.643a16.71,16.71,0,0,0,3.358,1.73c.171.063.243.246.355.378a4.984,4.984,0,0,0,2.987,1.956,3.312,3.312,0,0,0,2.3-.529,6.725,6.725,0,0,0,2-1.987,14.125,14.125,0,0,0,2.25-5.849c.052-.314-.073-.375-.337-.388a15.483,15.483,0,0,1-3.5-.458,12.478,12.478,0,0,1-4.973-2.827c-.275-.249-.375-.188-.562.084a6.522,6.522,0,0,1-2.715,2.4c-.267.117-.235.291-.213.5a15.768,15.768,0,0,0,.95,3.95l.133.352a11.318,11.318,0,0,1-1.683-.991.3.3,0,0,1-.081-.154,12.447,12.447,0,0,1-.409-6.392,6.221,6.221,0,0,1,5.5-4.954,10.287,10.287,0,0,1,5.025.371A6.144,6.144,0,0,1,51.722,37.1a12.8,12.8,0,0,1-.466,5.4,1.411,1.411,0,0,0,0,.811,5.654,5.654,0,0,1-.033,3.365A2.468,2.468,0,0,1,48.4,48.531a1.074,1.074,0,0,0-.9.27,4.65,4.65,0,0,1-6.447-.041.9.9,0,0,0-.737-.241A2.537,2.537,0,0,1,37.3,46.359a4.861,4.861,0,0,1-.138-.785c-.023-.279-.005-.561-.005-.931"
												transform="translate(-33.598 -29.506)"
											/>
											<path
												className="b-navbar-mobile"
												d="M36.353,25.2a9.713,9.713,0,0,1,7.53,3.313,7.287,7.287,0,0,1,1.654,3.415.743.743,0,0,0,.395.572,2.159,2.159,0,0,1,1.031,1.518,5.811,5.811,0,0,1-.341,3.562,2.2,2.2,0,0,1-2.169,1.389c-.226,0-.286-.052-.256-.3.182-1.543.334-3.088.388-4.644a6.622,6.622,0,0,0-3.926-6.618,8.922,8.922,0,0,0-9.957.92,6.3,6.3,0,0,0-2.515,5.342,45.419,45.419,0,0,0,.336,4.559.522.522,0,0,0,.22.4,13.972,13.972,0,0,0,5.656,2.7,1.177,1.177,0,0,0,.762-.124,2.55,2.55,0,0,1,1.925-.019.662.662,0,0,1,.355.821.685.685,0,0,1-.653.6c-.444.025-.89.009-1.336,0a.491.491,0,0,1-.443-.236c-.158-.316-.431-.339-.713-.392a14.078,14.078,0,0,1-5.859-2.764,1.472,1.472,0,0,0-.651-.308A2.049,2.049,0,0,1,26.2,37.68a5.672,5.672,0,0,1-.348-3.808,2.128,2.128,0,0,1,1.077-1.428.49.49,0,0,0,.27-.362c.864-3.812,3.413-5.76,6.928-6.629a7.686,7.686,0,0,1,1.02-.17c.414-.044.831-.058,1.2-.083"
												transform="translate(-25.675 -25.199)"
											/>
										</g>
									</g>
									<g transform="translate(2 639.058)">
										<g
											className="u-navbar-mobile"
											transform="matrix(1, 0, 0, 1, -9, -645.06)">
											<g
												className="m-navbar-mobile"
												transform="translate(9 645)">
												<rect
													className="o-navbar-mobile"
													width={420}
													height={43}
												/>
												<rect
													className="a-navbar-mobile"
													x={0.5}
													y={0.5}
													width={419}
													height={42}
												/>
											</g>
										</g>
										<text
											className="n-navbar-mobile"
											transform="translate(40 9.942)">
											<tspan x={0} y={15}>
												{t('Trabaje con nosotros')}
											</tspan>
										</text>
									</g>
									<g
										transform="translate(2 596.796)"
										onClick={() =>
											(window.location.href =
												'/codigo-linea-etica')
										}>
										<g
											className="t-navbar-mobile"
											transform="matrix(1, 0, 0, 1, -9, -602.8)">
											<g
												className="m-navbar-mobile"
												transform="translate(9 603)">
												<rect
													className="o-navbar-mobile"
													width={420}
													height={43}
												/>
												<rect
													className="a-navbar-mobile"
													x={0.5}
													y={0.5}
													width={419}
													height={42}
												/>
											</g>
										</g>
										<text
											className="n-navbar-mobile"
											transform="translate(40 10.204)">
											<tspan x={0} y={15}>
												{t('Ética y compliance​')}
											</tspan>
										</text>
									</g>
									<g
										transform="translate(2 554.534)"
										onClick={() => setStep(3)}>
										<g
											className="s-navbar-mobile"
											transform="matrix(1, 0, 0, 1, -9, -560.53)">
											<g
												className="m-navbar-mobile"
												transform="translate(9 561)">
												<rect
													className="o-navbar-mobile"
													width={420}
													height={44}
												/>
												<rect
													className="a-navbar-mobile"
													x={0.5}
													y={0.5}
													width={419}
													height={43}
												/>
											</g>
										</g>
										<text
											className="n-navbar-mobile"
											transform="translate(40 10.467)">
											<tspan x={0} y={15}>
												{t('Actualidad​')}
											</tspan>
										</text>
									</g>
									<g
										transform="translate(2 512.271)"
										onClick={() => setStep(2)}>
										<g
											className="r-navbar-mobile"
											transform="matrix(1, 0, 0, 1, -9, -518.27)">
											<g
												className="m-navbar-mobile"
												transform="translate(9 518)">
												<rect
													className="o-navbar-mobile"
													width={420}
													height={44}
												/>
												<rect
													className="a-navbar-mobile"
													x={0.5}
													y={0.5}
													width={419}
													height={43}
												/>
											</g>
										</g>
										<text
											className="n-navbar-mobile"
											transform="translate(40 10.729)">
											<tspan x={0} y={15}>
												{t('Soluciones en salud')}
											</tspan>
										</text>
									</g>
									<g
										transform="translate(2 314.009)"
										onClick={() => setStep(0)}>
										<g
											className="q-navbar-mobile"
											transform="matrix(1, 0, 0, 1, -9, -320.01)">
											<g
												className="m-navbar-mobile"
												transform="translate(9 320)">
												<rect
													className="o-navbar-mobile"
													width={420}
													height={43}
												/>
												<rect
													className="a-navbar-mobile"
													x={0.5}
													y={0.5}
													width={419}
													height={42}
												/>
											</g>
										</g>
										<text
											className="n-navbar-mobile"
											transform="translate(40 9.991)">
											<tspan x={0} y={15}>
												{t('Trayectoria')}
											</tspan>
										</text>
									</g>
									<g
										transform="translate(2 272.778)"
										onClick={() =>
											(window.location.href = '/')
										}>
										<g
											className="p-navbar-mobile"
											transform="matrix(1, 0, 0, 1, -9, -278.78)">
											<g
												className="m-navbar-mobile"
												transform="translate(9 279)">
												<rect
													className="o-navbar-mobile"
													width={420}
													height={42}
												/>
												<rect
													className="a-navbar-mobile"
													x={0.5}
													y={0.5}
													width={419}
													height={41}
												/>
											</g>
										</g>
										<text
											className="n-navbar-mobile"
											transform="translate(40 9.222)">
											<tspan x={0} y={15}>
												{'Home'}
											</tspan>
										</text>
									</g>
								</g>
								<path
									className="g-navbar-mobile"
									d="M955.324-45.344,948.263-52.4l-6.929,6.929a3.1,3.1,0,0,1-4.382,0,3.1,3.1,0,0,1,0-4.381l6.929-6.929-7.061-7.061a2.911,2.911,0,0,1,0-4.117,2.912,2.912,0,0,1,4.117,0L948-60.9l7.193-7.193a3.1,3.1,0,0,1,4.382,0,3.1,3.1,0,0,1,0,4.381l-7.194,7.194,7.061,7.061a2.911,2.911,0,0,1,0,4.117,2.9,2.9,0,0,1-2.059.853A2.9,2.9,0,0,1,955.324-45.344Z"
									transform="translate(-578.481 76.722)"
									onClick={() => setOpenMenu(false)}
								/>
								<g
									transform="translate(319.094 9.941)"
									onClick={() => {
										setOpenMenu(false)
										setOpenContact(true)
										setStep(0)
									}}>
									<path
										className="b-navbar-mobile"
										d="M37.161,44.643a16.71,16.71,0,0,0,3.358,1.73c.171.063.243.246.355.378a4.984,4.984,0,0,0,2.987,1.956,3.312,3.312,0,0,0,2.3-.529,6.725,6.725,0,0,0,2-1.987,14.125,14.125,0,0,0,2.25-5.849c.052-.314-.073-.375-.337-.388a15.483,15.483,0,0,1-3.5-.458,12.478,12.478,0,0,1-4.973-2.827c-.275-.249-.375-.188-.562.084a6.522,6.522,0,0,1-2.715,2.4c-.267.117-.235.291-.213.5a15.768,15.768,0,0,0,.95,3.95l.133.352a11.318,11.318,0,0,1-1.683-.991.3.3,0,0,1-.081-.154,12.447,12.447,0,0,1-.409-6.392,6.221,6.221,0,0,1,5.5-4.954,10.287,10.287,0,0,1,5.025.371A6.144,6.144,0,0,1,51.722,37.1a12.8,12.8,0,0,1-.466,5.4,1.411,1.411,0,0,0,0,.811,5.654,5.654,0,0,1-.033,3.365A2.468,2.468,0,0,1,48.4,48.531a1.074,1.074,0,0,0-.9.27,4.65,4.65,0,0,1-6.447-.041.9.9,0,0,0-.737-.241A2.537,2.537,0,0,1,37.3,46.359a4.861,4.861,0,0,1-.138-.785c-.023-.279-.005-.561-.005-.931"
										transform="translate(-33.598 -29.506)"
									/>
									<path
										className="b-navbar-mobile"
										d="M36.353,25.2a9.713,9.713,0,0,1,7.53,3.313,7.287,7.287,0,0,1,1.654,3.415.743.743,0,0,0,.395.572,2.159,2.159,0,0,1,1.031,1.518,5.811,5.811,0,0,1-.341,3.562,2.2,2.2,0,0,1-2.169,1.389c-.226,0-.286-.052-.256-.3.182-1.543.334-3.088.388-4.644a6.622,6.622,0,0,0-3.926-6.618,8.922,8.922,0,0,0-9.957.92,6.3,6.3,0,0,0-2.515,5.342,45.419,45.419,0,0,0,.336,4.559.522.522,0,0,0,.22.4,13.972,13.972,0,0,0,5.656,2.7,1.177,1.177,0,0,0,.762-.124,2.55,2.55,0,0,1,1.925-.019.662.662,0,0,1,.355.821.685.685,0,0,1-.653.6c-.444.025-.89.009-1.336,0a.491.491,0,0,1-.443-.236c-.158-.316-.431-.339-.713-.392a14.078,14.078,0,0,1-5.859-2.764,1.472,1.472,0,0,0-.651-.308A2.049,2.049,0,0,1,26.2,37.68a5.672,5.672,0,0,1-.348-3.808,2.128,2.128,0,0,1,1.077-1.428.49.49,0,0,0,.27-.362c.864-3.812,3.413-5.76,6.928-6.629a7.686,7.686,0,0,1,1.02-.17c.414-.044.831-.058,1.2-.083"
										transform="translate(-25.675 -25.199)"
									/>
								</g>
							</g>
						</svg>
					) : step === 2 ? (
						<svg
							viewBox="3 0 414 902"
							className="absolute z-[1] top-0">
							<defs>
								<style>
									{
										'.a-navbar-mobile,.d-navbar-mobile{fill:none;}.b-navbar-mobile,.m-navbar-mobile{fill:#001f5f;}.c-navbar-mobile,.e-navbar-mobile,.k-navbar-mobile,.l-navbar-mobile{fill:#fff;}.c-navbar-mobile{font-size:12px;font-family:Silka-Medium, Silka;font-weight:500;}.d-navbar-mobile{stroke:#fff;}.f-navbar-mobile{clip-path:url(#c-navbar-mobile);}.g-navbar-mobile,.j-navbar-mobile{fill:#e40032;}.h-navbar-mobile{clip-path:url(#f-navbar-mobile);}.i-navbar-mobile{clip-path:url(#g-navbar-mobile);}.j-navbar-mobile,.l-navbar-mobile{stroke:#001f5f;}.k-navbar-mobile,.m-navbar-mobile{font-size:16px;font-family:Silka-SemiBold, Silka;font-weight:600;}.n-navbar-mobile{stroke:none;}.o-navbar-mobile{filter:url(#v-navbar-mobile);}.p-navbar-mobile{filter:url(#t-navbar-mobile);}.q-navbar-mobile{filter:url(#r-navbar-mobile);}.r-navbar-mobile{filter:url(#p-navbar-mobile);}.s-navbar-mobile{filter:url(#n-navbar-mobile);}.t-navbar-mobile{filter:url(#l-navbar-mobile);}.u-navbar-mobile{filter:url(#j-navbar-mobile);}.v-navbar-mobile{filter:url(#h-navbar-mobile);}.w-navbar-mobile{filter:url(#d-navbar-mobile);}.x-navbar-mobile{filter:url(#a-navbar-mobile);}'
									}
								</style>
								<filter
									id="a-navbar-mobile"
									x={2}
									y={0}
									width={433.878}
									height={56.79}
									filterUnits="userSpaceOnUse">
									<feOffset dy={3} />
									<feGaussianBlur
										stdDeviation={3}
										result="b"
									/>
									<feFlood floodOpacity={0.302} />
									<feComposite operator="in" in2="b" />
									<feComposite in="SourceGraphic" />
								</filter>
								<clipPath id="c-navbar-mobile">
									<rect
										className="a-navbar-mobile"
										width={108.286}
										height={30.3}
									/>
								</clipPath>
								<filter
									id="d-navbar-mobile"
									x={43.862}
									y={189.188}
									width={351.004}
									height={64.541}
									filterUnits="userSpaceOnUse">
									<feOffset dy={3} />
									<feGaussianBlur
										stdDeviation={3}
										result="e"
									/>
									<feFlood floodOpacity={0.502} />
									<feComposite operator="in" in2="e" />
									<feComposite in="SourceGraphic" />
								</filter>
								<clipPath id="f-navbar-mobile">
									<rect
										className="a-navbar-mobile"
										width={193.23}
										height={55.733}
									/>
								</clipPath>
								<clipPath id="g-navbar-mobile">
									<rect
										className="b-navbar-mobile"
										width={139.029}
										height={58.623}
									/>
								</clipPath>
								<filter
									id="h-navbar-mobile"
									x={0}
									y={694}
									width={438}
									height={61}
									filterUnits="userSpaceOnUse">
									<feOffset dy={3} />
									<feGaussianBlur
										stdDeviation={3}
										result="i"
									/>
									<feFlood floodOpacity={0.251} />
									<feComposite operator="in" in2="i" />
									<feComposite in="SourceGraphic" />
								</filter>
								<filter
									id="j-navbar-mobile"
									x={0}
									y={650}
									width={438}
									height={63}
									filterUnits="userSpaceOnUse">
									<feOffset dy={3} />
									<feGaussianBlur
										stdDeviation={3}
										result="k"
									/>
									<feFlood floodOpacity={0.251} />
									<feComposite operator="in" in2="k" />
									<feComposite in="SourceGraphic" />
								</filter>
								<filter
									id="l-navbar-mobile"
									x={0}
									y={608}
									width={438}
									height={61}
									filterUnits="userSpaceOnUse">
									<feOffset dy={3} />
									<feGaussianBlur
										stdDeviation={3}
										result="m"
									/>
									<feFlood floodOpacity={0.251} />
									<feComposite operator="in" in2="m" />
									<feComposite in="SourceGraphic" />
								</filter>
								<filter
									id="n-navbar-mobile"
									x={0}
									y={566}
									width={438}
									height={61}
									filterUnits="userSpaceOnUse">
									<feOffset dy={3} />
									<feGaussianBlur
										stdDeviation={3}
										result="o"
									/>
									<feFlood floodOpacity={0.251} />
									<feComposite operator="in" in2="o" />
									<feComposite in="SourceGraphic" />
								</filter>
								<filter
									id="p-navbar-mobile"
									x={0}
									y={524}
									width={438}
									height={62}
									filterUnits="userSpaceOnUse">
									<feOffset dy={3} />
									<feGaussianBlur
										stdDeviation={3}
										result="q"
									/>
									<feFlood floodOpacity={0.251} />
									<feComposite operator="in" in2="q" />
									<feComposite in="SourceGraphic" />
								</filter>
								<filter
									id="r-navbar-mobile"
									x={0}
									y={356}
									width={438}
									height={62}
									filterUnits="userSpaceOnUse">
									<feOffset dy={3} />
									<feGaussianBlur
										stdDeviation={3}
										result="s"
									/>
									<feFlood floodOpacity={0.251} />
									<feComposite operator="in" in2="s" />
									<feComposite in="SourceGraphic" />
								</filter>
								<filter
									id="t-navbar-mobile"
									x={0}
									y={314}
									width={438}
									height={61}
									filterUnits="userSpaceOnUse">
									<feOffset dy={3} />
									<feGaussianBlur
										stdDeviation={3}
										result="u"
									/>
									<feFlood floodOpacity={0.251} />
									<feComposite operator="in" in2="u" />
									<feComposite in="SourceGraphic" />
								</filter>
								<filter
									id="v-navbar-mobile"
									x={0}
									y={273}
									width={438}
									height={60}
									filterUnits="userSpaceOnUse">
									<feOffset dy={3} />
									<feGaussianBlur
										stdDeviation={3}
										result="w"
									/>
									<feFlood floodOpacity={0.2} />
									<feComposite operator="in" in2="w" />
									<feComposite in="SourceGraphic" />
								</filter>
							</defs>
							<g>
								<g transform="translate(355.487 10.743)">
									<rect
										className="b-navbar-mobile"
										width={24.686}
										height={4.377}
										rx={2.189}
									/>
									<rect
										className="b-navbar-mobile"
										width={24.686}
										height={4.377}
										rx={2.189}
										transform="translate(0 7.296)"
									/>
									<rect
										className="b-navbar-mobile"
										width={24.686}
										height={4.377}
										rx={2.189}
										transform="translate(0 14.592)"
									/>
								</g>
								<g transform="translate(315.579 9.941)">
									<path
										className="b-navbar-mobile"
										d="M37.159,44.643a16.6,16.6,0,0,0,3.342,1.73c.17.063.242.246.353.378a4.958,4.958,0,0,0,2.972,1.956,3.283,3.283,0,0,0,2.293-.529,6.708,6.708,0,0,0,2-1.987,14.165,14.165,0,0,0,2.239-5.849c.052-.314-.072-.375-.335-.388a15.339,15.339,0,0,1-3.48-.458,12.4,12.4,0,0,1-4.949-2.827c-.274-.249-.373-.188-.56.084a6.5,6.5,0,0,1-2.7,2.4c-.266.117-.234.291-.212.5a15.831,15.831,0,0,0,.946,3.95l.132.352a11.252,11.252,0,0,1-1.675-.991.3.3,0,0,1-.081-.154,12.5,12.5,0,0,1-.407-6.392A6.2,6.2,0,0,1,42.5,31.456a10.191,10.191,0,0,1,5,.371A6.138,6.138,0,0,1,51.65,37.1a12.857,12.857,0,0,1-.464,5.4,1.418,1.418,0,0,0,0,.811,5.68,5.68,0,0,1-.033,3.365,2.456,2.456,0,0,1-2.808,1.853,1.065,1.065,0,0,0-.891.27,4.612,4.612,0,0,1-6.416-.041.892.892,0,0,0-.733-.241,2.527,2.527,0,0,1-3-2.161,4.882,4.882,0,0,1-.137-.785c-.023-.279-.005-.561-.005-.931"
										transform="translate(-33.614 -29.506)"
									/>
									<path
										className="b-navbar-mobile"
										d="M36.3,25.2A9.645,9.645,0,0,1,43.8,28.512a7.3,7.3,0,0,1,1.646,3.415.743.743,0,0,0,.393.572,2.159,2.159,0,0,1,1.026,1.518,5.837,5.837,0,0,1-.339,3.562,2.189,2.189,0,0,1-2.158,1.389c-.225,0-.284-.052-.255-.3.182-1.543.332-3.088.386-4.644a6.626,6.626,0,0,0-3.907-6.618,8.845,8.845,0,0,0-9.909.92,6.316,6.316,0,0,0-2.5,5.342,45.635,45.635,0,0,0,.334,4.559.523.523,0,0,0,.219.4,13.876,13.876,0,0,0,5.629,2.7,1.167,1.167,0,0,0,.759-.124,2.527,2.527,0,0,1,1.916-.019.663.663,0,0,1,.353.821.683.683,0,0,1-.65.6c-.442.025-.886.009-1.329,0a.488.488,0,0,1-.441-.236c-.157-.316-.429-.339-.71-.392a13.981,13.981,0,0,1-5.831-2.764,1.462,1.462,0,0,0-.648-.308A2.041,2.041,0,0,1,26.2,37.68a5.7,5.7,0,0,1-.346-3.808,2.126,2.126,0,0,1,1.072-1.428.49.49,0,0,0,.269-.362c.86-3.812,3.4-5.76,6.894-6.629a7.615,7.615,0,0,1,1.015-.17c.412-.044.827-.058,1.2-.083"
										transform="translate(-25.675 -25.199)"
									/>
								</g>

								<path
									className="d-navbar-mobile"
									d="M311,0"
									transform="translate(71 541)"
								/>
								<g transform="translate(2)">
									<g
										className="x-navbar-mobile"
										transform="matrix(1, 0, 0, 1, -11, -6)">
										<path
											className="e-navbar-mobile"
											d="M0,0H415.878V38.79H0Z"
											transform="translate(11 6)"
										/>
									</g>
									<g
										transform="translate(280 10)"
										onClick={handleChangeSelectedLanguage}>
										<foreignObject
											x={0}
											y={0}
											width={38}
											height={38}>
											{selectedLanguage === 'es' ? (
												<svg
													xmlns="http://www.w3.org/2000/svg"
													id="Componente_38_3"
													data-name="Componente 38 – 3"
													width="25"
													height="25"
													viewBox="0 0 25 25">
													<g
														id="Grupo_5836"
														data-name="Grupo 5836">
														<path
															id="Trazado_68877"
															data-name="Trazado 68877"
															d="M1409.679,47.929a9.753,9.753,0,1,1-9.753-9.753,9.753,9.753,0,0,1,9.753,9.753"
															transform="translate(-1390.173 -38.176)"
															fill="#001f5f"
														/>
														<path
															id="Trazado_68878"
															data-name="Trazado 68878"
															d="M1479.116,60.531H1464.3a8.906,8.906,0,0,1,14.813,0"
															transform="translate(-1461.956 -55.722)"
															fill="#fd0002"
														/>
														<path
															id="Trazado_68879"
															data-name="Trazado 68879"
															d="M1479.116,571.931a8.906,8.906,0,0,1-14.812,0Z"
															transform="translate(-1461.956 -557.234)"
															fill="#fd0002"
														/>
														<path
															id="Trazado_68880"
															data-name="Trazado 68880"
															d="M1426.371,208.875a8.862,8.862,0,0,1-1.5,4.944h-14.812a8.909,8.909,0,0,1,0-9.888h14.812a8.862,8.862,0,0,1,1.5,4.944"
															transform="translate(-1407.714 -199.122)"
															fill="#ff0"
														/>
													</g>
												</svg>
											) : (
												<svg
													xmlns="http://www.w3.org/2000/svg"
													xmlnsXlink="http://www.w3.org/1999/xlink"
													id="Componente_38_3"
													data-name="Componente 38 – 3"
													width="25"
													height="25"
													viewBox="0 0 25 25">
													<defs>
														<clipPath id="clip-path">
															<path
																id="Trazado_68887"
																data-name="Trazado 68887"
																d="M321.584,78.464a8.877,8.877,0,1,0,8.877-8.877,8.877,8.877,0,0,0-8.877,8.877"
																transform="translate(-321.584 -69.587)"
																fill="none"
															/>
														</clipPath>
													</defs>
													<g
														id="Grupo_5837"
														data-name="Grupo 5837">
														<path
															id="Trazado_68882"
															data-name="Trazado 68882"
															d="M309.679,47.929a9.753,9.753,0,1,1-9.753-9.753,9.753,9.753,0,0,1,9.753,9.753"
															transform="translate(-290.173 -38.176)"
															fill="#001f5f"
														/>
														<g
															id="Grupo_5836"
															data-name="Grupo 5836"
															transform="translate(0.876 0.876)"
															clipPath="url(#clip-path)">
															<path
																id="Trazado_68883"
																data-name="Trazado 68883"
																d="M35.689,21.13,4.668,0H0V1.552L29.482,21.635h6.207Z"
																transform="translate(-8.967 -1.94)"
																fill="#feffff"
															/>
															<path
																id="Trazado_68884"
																data-name="Trazado 68884"
																d="M35.689,0H31.034L0,21.14v.495H6.221L35.689,1.562Z"
																transform="translate(-8.967 -1.94)"
																fill="#feffff"
															/>
															<rect
																id="Rectángulo_1963"
																data-name="Rectángulo 1963"
																width="5.222"
																height="21.635"
																transform="translate(6.242 -1.94)"
																fill="#feffff"
															/>
															<rect
																id="Rectángulo_1964"
																data-name="Rectángulo 1964"
																width="35.491"
																height="5.104"
																transform="translate(-8.835 6.538)"
																fill="#feffff"
															/>
															<rect
																id="Rectángulo_1965"
																data-name="Rectángulo 1965"
																width="35.491"
																height="3.899"
																transform="translate(-8.835 7.074)"
																fill="#fd0002"
															/>
															<rect
																id="Rectángulo_1966"
																data-name="Rectángulo 1966"
																width="3.365"
																height="21.635"
																transform="translate(7.201 -1.94)"
																fill="#fd0002"
															/>
															<path
																id="Trazado_68885"
																data-name="Trazado 68885"
																d="M35.409,21.635,67.17,0H64.832L33.071,21.635Z"
																transform="translate(-41.116 -1.94)"
																fill="#fd0002"
															/>
															<path
																id="Trazado_68886"
																data-name="Trazado 68886"
																d="M58.533,21.635,26.772,0H24.433L56.195,21.635Z"
																transform="translate(-32.72 -1.94)"
																fill="#fd0002"
															/>
														</g>
													</g>
												</svg>
											)}
										</foreignObject>
									</g>
									<g transform="translate(37 4.493)">
										<g className="f-navbar-mobile">
											<a href="/">
												<foreignObject
													width={90}
													height={42}>
													<img src="/amarey-logo.webp" />
												</foreignObject>
											</a>
										</g>
									</g>
								</g>
								<path
									className="e-navbar-mobile"
									d="M0,0H415.878V254.789H0Z"
									transform="translate(2 38.79)"
								/>
								<foreignObject
									x={0}
									y={0}
									width="100%"
									height={266}
									transform="translate(5 189.188)">
									<div
										className="w-full flex justify-between mx-[auto] h-[46px] max-w-[331px] border-solid border-[3px] border-[#001f5f]"
										style={{
											borderTopLeftRadius: 100,
											borderBottomRightRadius: 100,
										}}>
										<input
											type="text"
											className="w-[80%] border-[transparent] bg-[transparent] pl-[30px]"
											id="search-input"
											onChange={handleSearchPage}
											style={{ outline: 'none' }}
										/>
										<img
											src="/images/lupa.svg"
											className="mr-[30px]"
											alt=""
											width={25}
											height={25}
										/>
									</div>
									{results.length > 0 && (
										<div className="w-full h-[200px] bg-white overflow-y-auto">
											{results.map(
												(
													item: SiteMapMock,
													index: number
												) => (
													<div
														className="h-[40px] w-full flex items-center border-b-solid border-b-[1px] border-[#e6e6e6] px-[10px]"
														key={index}
														onClick={() =>
															(window.location.href =
																item.url)
														}>
														<span>
															{item.label}
														</span>
													</div>
												)
											)}
										</div>
									)}
								</foreignObject>

								<g transform="translate(113.783 116.835)">
									<g
										className="h-navbar-mobile"
										transform="translate(0 0)">
										<path
											className="g-navbar-mobile"
											d="M32.223,35.849l7.64,10.719a.3.3,0,0,1,.054.172l.043,8.391a.29.29,0,0,1-.283.294l-1.136.006a.288.288,0,0,1-.285-.291l-.015-2.976-4.107.021.015,2.977a.288.288,0,0,1-.283.294l-1.136.006a.286.286,0,0,1-.284-.291l-.039-7.709a.288.288,0,0,1,.282-.294l1.136-.007a.29.29,0,0,1,.285.292l.015,2.976,4.107-.021-.016-3.184-6.937-9.735-5.9.031L18.54,47.33l.015,3.183,4.108-.022-.015-2.976a.288.288,0,0,1,.282-.294l1.136-.007a.288.288,0,0,1,.285.292l.039,7.709a.289.289,0,0,1-.282.294l-1.136.006a.288.288,0,0,1-.285-.291l-.015-2.977-4.107.022.015,2.977a.29.29,0,0,1-.283.294l-1.136.006a.289.289,0,0,1-.285-.291l-.042-8.391a.3.3,0,0,1,.053-.172l7.53-10.8a.284.284,0,0,1,.229-.122l7.348-.039a.28.28,0,0,1,.23.12M20.392,27.085,8.1,23.042a.267.267,0,0,0-.175,0L.2,25.677a.3.3,0,0,0-.18.37l.356,1.112a.282.282,0,0,0,.359.186l2.741-.934,1.29,4.02-2.742.934a.3.3,0,0,0-.18.37l.356,1.112a.283.283,0,0,0,.359.186l7.1-2.42a.294.294,0,0,0,.18-.37L9.48,29.129a.283.283,0,0,0-.359-.186l-2.742.935L5.09,25.859l2.932-1,11.164,3.673.912,2.843.94,2.931L14.2,44.116l-2.933,1L9.978,41.1l2.742-.934a.3.3,0,0,0,.18-.37l-.357-1.112a.282.282,0,0,0-.358-.186l-7.1,2.42a.3.3,0,0,0-.18.37L5.259,42.4a.282.282,0,0,0,.359.186l2.742-.935,1.29,4.02L6.908,46.6a.3.3,0,0,0-.181.37l.357,1.112a.282.282,0,0,0,.359.186l7.729-2.635a.285.285,0,0,0,.142-.107l7.529-10.8a.3.3,0,0,0,.039-.263l-2.307-7.19a.289.289,0,0,0-.183-.188m15.158-1.98L47.8,20.929a.282.282,0,0,0,.141-.107l4.751-6.815a.3.3,0,0,0-.065-.408l-.922-.683a.278.278,0,0,0-.4.067L49.623,15.4l-3.335-2.471,1.685-2.417a.3.3,0,0,0-.064-.408l-.922-.683a.277.277,0,0,0-.4.067l-4.365,6.26a.3.3,0,0,0,.064.409l.923.683a.279.279,0,0,0,.4-.067l1.685-2.417,3.335,2.471-1.8,2.585L35.7,23.2l-4.793-3.55L30.848,7.575l1.8-2.585,3.335,2.471L34.3,9.878a.3.3,0,0,0,.065.408l.922.683a.278.278,0,0,0,.4-.067l4.365-6.261a.3.3,0,0,0-.065-.408l-.922-.683a.279.279,0,0,0-.4.067L36.979,6.034,33.645,3.564,35.33,1.146a.3.3,0,0,0-.065-.408L34.343.055a.277.277,0,0,0-.4.067L29.2,6.936a.3.3,0,0,0-.053.172l.067,13.3a.294.294,0,0,0,.118.236l5.967,4.42a.278.278,0,0,0,.255.04m20.628,1.754.345-1.116a.3.3,0,0,0-.184-.368l-7.755-2.551a.278.278,0,0,0-.176,0L36.157,27a.285.285,0,0,0-.181.189L33.742,34.4a.3.3,0,0,0,.041.262l7.639,10.72a.29.29,0,0,0,.143.105l7.755,2.552a.282.282,0,0,0,.357-.19l.345-1.115a.292.292,0,0,0-.183-.368l-2.752-.906,1.249-4.033,2.752.9a.283.283,0,0,0,.357-.189l.345-1.116a.3.3,0,0,0-.184-.368l-7.125-2.344a.281.281,0,0,0-.356.19l-.346,1.116a.293.293,0,0,0,.184.367l2.751.906-1.248,4.033-2.943-.967-6.938-9.736,1.795-5.795L48.5,24.641l2.941.969L50.2,29.643l-2.752-.906a.284.284,0,0,0-.357.19l-.345,1.116a.294.294,0,0,0,.184.367l7.124,2.344a.282.282,0,0,0,.357-.189l.346-1.116a.3.3,0,0,0-.184-.368l-2.752-.9,1.249-4.033,2.752.906a.284.284,0,0,0,.357-.19M21.257,25.13l5.916-4.492a.3.3,0,0,0,.116-.238L27.2,7.1a.294.294,0,0,0-.055-.171L22.319.172a.278.278,0,0,0-.4-.063L21.007.8a.3.3,0,0,0-.06.409l1.713,2.4L19.353,6.121l-1.713-2.4a.278.278,0,0,0-.4-.062l-.915.695a.3.3,0,0,0-.06.409L20.7,10.974a.279.279,0,0,0,.4.062l.915-.695a.3.3,0,0,0,.061-.409l-1.713-2.4,3.307-2.511L25.5,7.587l.077,12.079-4.751,3.607L9.66,19.617,7.828,17.054l3.307-2.511,1.712,2.4a.279.279,0,0,0,.4.062l.915-.695a.3.3,0,0,0,.061-.409L9.784,9.691a.278.278,0,0,0-.4-.063l-.915.695a.3.3,0,0,0-.06.409l1.712,2.4L6.818,15.64,5.1,13.243a.279.279,0,0,0-.4-.063l-.915.695a.3.3,0,0,0-.06.409l4.828,6.756a.279.279,0,0,0,.142.105L21,25.173a.278.278,0,0,0,.255-.044"
											transform="translate(0 0)"
										/>
										<path
											className="b-navbar-mobile"
											d="M95.531,21.118h-4.8a6.353,6.353,0,0,1-3.349-.926,6.789,6.789,0,0,1-2.43-2.516,7.165,7.165,0,0,1,0-6.948A6.885,6.885,0,0,1,87.382,8.2,6.4,6.4,0,0,1,93.4,7.854,6.712,6.712,0,0,1,95.613,9.5l-.674.652a5.714,5.714,0,0,0-1.92-1.4,5.556,5.556,0,0,0-5.167.305,5.946,5.946,0,0,0-2.88,5.137,6.016,6.016,0,0,0,2.88,5.168,5.417,5.417,0,0,0,2.88.811h3.84V15.265H90.2v-.947h5.331Z"
											transform="translate(7.146 0.86)"
										/>
										<path
											className="b-navbar-mobile"
											d="M107.031,21.1l-5.515-6.905h1.634a6.338,6.338,0,0,0,2.451-.4,3.3,3.3,0,0,0,1.205-1.021,2.457,2.457,0,0,0,.51-1.505,2.535,2.535,0,0,0-.429-1.4,3.2,3.2,0,0,0-1.225-1.084,3.879,3.879,0,0,0-1.838-.422h-3.718V21.1h-.919V7.415h4.637a4.973,4.973,0,0,1,1.756.305,4.292,4.292,0,0,1,1.43.873,3.884,3.884,0,0,1,.909,1.243,3.47,3.47,0,0,1-.358,3.505,3.913,3.913,0,0,1-1.593,1.316,4.107,4.107,0,0,1-1.236.368,10.5,10.5,0,0,1-1.276.074l4.8,6Z"
											transform="translate(8.432 0.878)"
										/>
										<path
											className="b-navbar-mobile"
											d="M116.825,21.248a4.74,4.74,0,0,1-1.93-.41,5.042,5.042,0,0,1-1.644-1.169,4.831,4.831,0,0,1-1.093-1.684,5.55,5.55,0,0,1-.379-2.042V7.415h.919v8.527a4.527,4.527,0,0,0,.317,1.684,4.2,4.2,0,0,0,2.236,2.326,3.923,3.923,0,0,0,1.573.327,3.966,3.966,0,0,0,1.593-.327,4.2,4.2,0,0,0,2.237-2.326,4.547,4.547,0,0,0,.316-1.684V7.415h.92v8.527a5.571,5.571,0,0,1-.379,2.042,4.845,4.845,0,0,1-1.093,1.684,5.072,5.072,0,0,1-1.634,1.169,4.766,4.766,0,0,1-1.961.41"
											transform="translate(9.503 0.878)"
										/>
										<path
											className="b-navbar-mobile"
											d="M125.506,21.1l-.021-13.685h4.738a4.518,4.518,0,0,1,2.155.527,4.21,4.21,0,0,1,1.573,1.41,3.5,3.5,0,0,1,0,3.864,4.179,4.179,0,0,1-1.573,1.42,4.518,4.518,0,0,1-2.155.527h-3.8V21.1Zm.919-6.926h3.8a3.73,3.73,0,0,0,1.7-.389,3.252,3.252,0,0,0,1.236-1.054,2.482,2.482,0,0,0,.459-1.442,2.513,2.513,0,0,0-.459-1.463,3.252,3.252,0,0,0-1.236-1.054,3.73,3.73,0,0,0-1.7-.389H126.4Z"
											transform="translate(10.668 0.878)"
										/>
										<path
											className="b-navbar-mobile"
											d="M143.575,21.263a6.4,6.4,0,0,1-3.37-.937,6.773,6.773,0,0,1-2.451-2.548,7.287,7.287,0,0,1,0-7.01A6.773,6.773,0,0,1,140.2,8.22a6.528,6.528,0,0,1,6.74,0,6.772,6.772,0,0,1,2.451,2.548,7.287,7.287,0,0,1,0,7.01,6.772,6.772,0,0,1-2.451,2.548,6.4,6.4,0,0,1-3.37.937m0-13.012a5.462,5.462,0,0,0-2.9.811,6.153,6.153,0,0,0-2.115,8.232,6,6,0,0,0,2.115,2.19,5.592,5.592,0,0,0,5.8,0,5.913,5.913,0,0,0,2.1-2.19,6.269,6.269,0,0,0,0-6.042,5.922,5.922,0,0,0-2.1-2.19,5.465,5.465,0,0,0-2.9-.811"
											transform="translate(11.635 0.863)"
										/>
										<path
											className="b-navbar-mobile"
											d="M80.867,26.01h3.387a.452.452,0,0,1,.444.459v1.42a5.727,5.727,0,0,1,5.047-2.349,5.929,5.929,0,0,1,5.714,3.107,6.992,6.992,0,0,1,6.2-3.107c3.05,0,5.5,1.228,6.729,3.36a11.751,11.751,0,0,1,1.158,5.564v11.1a.452.452,0,0,1-.445.459h-3.773a.451.451,0,0,1-.445-.459V35.042c0-2.06-.28-3.18-.946-3.938a3.386,3.386,0,0,0-2.7-1.156,3.522,3.522,0,0,0-3.33,2.023,9.717,9.717,0,0,0-.6,4.191v9.4a.452.452,0,0,1-.445.459H93.1a.452.452,0,0,1-.445-.459V35.042c0-1.951-.28-3.144-.876-3.9A3.69,3.69,0,0,0,88.9,29.948a3.341,3.341,0,0,0-3.365,2.167,12.182,12.182,0,0,0-.456,4.046v9.4a.452.452,0,0,1-.445.459H80.867a.452.452,0,0,1-.445-.459v-19.1a.452.452,0,0,1,.445-.459"
											transform="translate(6.837 3.024)"
										/>
										<path
											className="b-navbar-mobile"
											d="M129.911,46.025h-3.386a.452.452,0,0,1-.445-.459V43.423a7.63,7.63,0,0,1-6.449,3.071c-5.678,0-9.779-4.372-9.779-10.406,0-6.105,4.136-10.549,9.884-10.549a7.144,7.144,0,0,1,6.344,3.143V26.467a.451.451,0,0,1,.445-.457h3.386a.451.451,0,0,1,.445.457v19.1a.452.452,0,0,1-.445.459M114.548,36.2a5.54,5.54,0,0,0,5.748,5.89c3.365,0,5.643-2.421,5.643-6,0-3.612-2.384-6.142-5.783-6.142-3.26,0-5.608,2.638-5.608,6.251"
											transform="translate(9.339 3.024)"
										/>
										<path
											className="b-navbar-mobile"
											d="M132.683,26.01h3.387a.452.452,0,0,1,.444.459V27.96c1.227-1.879,2.208-2.42,4.207-2.42h.35v4.625c-2.8.073-4.171,1.626-4.171,4.733V45.566a.452.452,0,0,1-.445.459h-3.773a.452.452,0,0,1-.445-.459v-19.1a.452.452,0,0,1,.445-.459"
											transform="translate(11.242 3.024)"
										/>
										<path
											className="b-navbar-mobile"
											d="M146.4,38.149a5.133,5.133,0,0,0,5.362,3.937,4.837,4.837,0,0,0,4.144-1.829.443.443,0,0,1,.333-.158h4.241a.456.456,0,0,1,.412.63,9.118,9.118,0,0,1-1.314,2.152,9.409,9.409,0,0,1-7.711,3.614A10.324,10.324,0,0,1,141.35,35.913a10.441,10.441,0,0,1,11.235-10.327c5.265.494,9.022,4.871,9.022,10.72a7.97,7.97,0,0,1-.176,1.843Zm10.62-4.228c-.6-2.566-2.488-3.974-5.362-3.974a5.156,5.156,0,0,0-5.4,3.974Z"
											transform="translate(12.017 3.025)"
										/>
										<path
											className="b-navbar-mobile"
											d="M167.248,44.1,160.38,26.59a.456.456,0,0,1,.412-.63h4.351a.444.444,0,0,1,.42.309l4.209,12.66,4.589-12.672a.446.446,0,0,1,.417-.3h4.377a.457.457,0,0,1,.408.64L168.731,52.383a.445.445,0,0,1-.408.276h-4.041a.458.458,0,0,1-.407-.643Z"
											transform="translate(13.632 3.074)"
										/>
										<path
											className="b-navbar-mobile"
											d="M69.562,19.983H65.776l-4.769,11.8a.457.457,0,0,0,.41.634h4.07a.445.445,0,0,0,.419-.306l1.763-5.15,2.768,8.093H62.75a4.6,4.6,0,0,0-4.245,2.917l-3.268,8.082a.457.457,0,0,0,.41.634h4.334a.444.444,0,0,0,.408-.277l2.758-6.623h9.218L75.021,46.4a.444.444,0,0,0,.411.283h4.327a.457.457,0,0,0,.41-.635Z"
											transform="translate(4.693 2.366)"
										/>
									</g>
								</g>
								<g
									className="i-navbar-mobile"
									transform="translate(2.217 39.241)">
									<path
										className="b-navbar-mobile"
										d="M91.4,43.724H0V0H139.029V11.32c0,17.9-21.323,32.4-47.627,32.4"
									/>
								</g>
								<g
									transform={
										results.length > 0
											? 'translate(0 161)'
											: 'translate(0 0)'
									}>
									<rect
										className="b-navbar-mobile"
										width={420}
										height={48}
										transform="translate(0 397)"
										onClick={() =>
											(window.location.href =
												'/nuestros-aliados')
										}
									/>
									<rect
										className="b-navbar-mobile"
										width={420}
										height={38}
										transform="translate(0 443)"
										onClick={() =>
											(window.location.href =
												'/biomedico')
										}
									/>
									<rect
										className="b-navbar-mobile"
										width={420}
										height={49}
										transform="translate(0 481)"
										onClick={() =>
											(window.location.href =
												'/productos')
										}
									/>
									<text
										className="c-navbar-mobile"
										transform="translate(75 430)"
										onClick={() =>
											(window.location.href =
												'/nuestros-aliados')
										}>
										<tspan x={0} y={0}>
											{t('Nuestros aliados')}
										</tspan>
									</text>
									<text
										className="c-navbar-mobile"
										transform="translate(75 466)"
										onClick={() =>
											(window.location.href =
												'/biomedico')
										}>
										<tspan x={0} y={0}>
											{t('Mantenimiento Biomédico')}
										</tspan>
									</text>
									<text
										className="c-navbar-mobile"
										transform="translate(75 502)"
										onClick={() =>
											(window.location.href =
												'/productos')
										}
										style={{ textTransform: selectedLanguage === 'en' ? 'uppercase' : 'initial' }}>
										<tspan x={0} y={0}>
											{t('Soluciones en salud')}
										</tspan>
									</text>
									<line
										className="d-navbar-mobile"
										x2={311}
										transform="translate(71 445)"
									/>
									<line
										className="d-navbar-mobile"
										x2={311}
										transform="translate(71 481)"
									/>
									<g transform="translate(0 693.613)">
										<g
											className="v-navbar-mobile"
											transform="matrix(1, 0, 0, 1, -9, -699.61)">
											<g
												className="j-navbar-mobile"
												transform="translate(9 700)">
												<rect
													className="n-navbar-mobile"
													width={420}
													height={43}
												/>
												<rect
													className="a-navbar-mobile"
													x={0.5}
													y={0.5}
													width={419}
													height={42}
												/>
											</g>
										</g>
										<text
											className="k-navbar-mobile"
											transform="translate(40 10.387)">
											<tspan x={0} y={15}>
												{'Ucitech'}
											</tspan>
										</text>
									</g>
									<g transform="translate(0 586.534)">
										<g
											onClick={() =>
												(window.location.href =
													'/contactenos')
											}>
											<g
												className="u-navbar-mobile"
												transform="matrix(1, 0, 0, 1, -9, -592.53)">
												<g
													className="l-navbar-mobile"
													transform="translate(9 656)">
													<rect
														className="n-navbar-mobile"
														width={420}
														height={45}
													/>
													<rect
														className="a-navbar-mobile"
														x={0.5}
														y={0.5}
														width={419}
														height={44}
													/>
												</g>
											</g>
											<text
												className="m-navbar-mobile"
												transform="translate(40 74.466)">
												<tspan x={0} y={15}>
													{t('Contáctenos')}
												</tspan>
											</text>
											<g transform="translate(192.696 0)">
												<path
													className="b-navbar-mobile"
													d="M37.161,44.643a16.71,16.71,0,0,0,3.358,1.73c.171.063.243.246.355.378a4.984,4.984,0,0,0,2.987,1.956,3.312,3.312,0,0,0,2.3-.529,6.725,6.725,0,0,0,2-1.987,14.125,14.125,0,0,0,2.25-5.849c.052-.314-.073-.375-.337-.388a15.483,15.483,0,0,1-3.5-.458,12.478,12.478,0,0,1-4.973-2.827c-.275-.249-.375-.188-.562.084a6.522,6.522,0,0,1-2.715,2.4c-.267.117-.235.291-.213.5a15.768,15.768,0,0,0,.95,3.95l.133.352a11.318,11.318,0,0,1-1.683-.991.3.3,0,0,1-.081-.154,12.447,12.447,0,0,1-.409-6.392,6.221,6.221,0,0,1,5.5-4.954,10.287,10.287,0,0,1,5.025.371A6.144,6.144,0,0,1,51.722,37.1a12.8,12.8,0,0,1-.466,5.4,1.411,1.411,0,0,0,0,.811,5.654,5.654,0,0,1-.033,3.365A2.468,2.468,0,0,1,48.4,48.531a1.074,1.074,0,0,0-.9.27,4.65,4.65,0,0,1-6.447-.041.9.9,0,0,0-.737-.241A2.537,2.537,0,0,1,37.3,46.359a4.861,4.861,0,0,1-.138-.785c-.023-.279-.005-.561-.005-.931"
													transform="translate(-33.598 -29.506)"
												/>
												<path
													className="b-navbar-mobile"
													d="M36.353,25.2a9.713,9.713,0,0,1,7.53,3.313,7.287,7.287,0,0,1,1.654,3.415.743.743,0,0,0,.395.572,2.159,2.159,0,0,1,1.031,1.518,5.811,5.811,0,0,1-.341,3.562,2.2,2.2,0,0,1-2.169,1.389c-.226,0-.286-.052-.256-.3.182-1.543.334-3.088.388-4.644a6.622,6.622,0,0,0-3.926-6.618,8.922,8.922,0,0,0-9.957.92,6.3,6.3,0,0,0-2.515,5.342,45.419,45.419,0,0,0,.336,4.559.522.522,0,0,0,.22.4,13.972,13.972,0,0,0,5.656,2.7,1.177,1.177,0,0,0,.762-.124,2.55,2.55,0,0,1,1.925-.019.662.662,0,0,1,.355.821.685.685,0,0,1-.653.6c-.444.025-.89.009-1.336,0a.491.491,0,0,1-.443-.236c-.158-.316-.431-.339-.713-.392a14.078,14.078,0,0,1-5.859-2.764,1.472,1.472,0,0,0-.651-.308A2.049,2.049,0,0,1,26.2,37.68a5.672,5.672,0,0,1-.348-3.808,2.128,2.128,0,0,1,1.077-1.428.49.49,0,0,0,.27-.362c.864-3.812,3.413-5.76,6.928-6.629a7.686,7.686,0,0,1,1.02-.17c.414-.044.831-.058,1.2-.083"
													transform="translate(-25.675 -25.199)"
												/>
											</g>
											<g transform="translate(192.696 0)">
												<path
													className="b-navbar-mobile"
													d="M37.161,44.643a16.71,16.71,0,0,0,3.358,1.73c.171.063.243.246.355.378a4.984,4.984,0,0,0,2.987,1.956,3.312,3.312,0,0,0,2.3-.529,6.725,6.725,0,0,0,2-1.987,14.125,14.125,0,0,0,2.25-5.849c.052-.314-.073-.375-.337-.388a15.483,15.483,0,0,1-3.5-.458,12.478,12.478,0,0,1-4.973-2.827c-.275-.249-.375-.188-.562.084a6.522,6.522,0,0,1-2.715,2.4c-.267.117-.235.291-.213.5a15.768,15.768,0,0,0,.95,3.95l.133.352a11.318,11.318,0,0,1-1.683-.991.3.3,0,0,1-.081-.154,12.447,12.447,0,0,1-.409-6.392,6.221,6.221,0,0,1,5.5-4.954,10.287,10.287,0,0,1,5.025.371A6.144,6.144,0,0,1,51.722,37.1a12.8,12.8,0,0,1-.466,5.4,1.411,1.411,0,0,0,0,.811,5.654,5.654,0,0,1-.033,3.365A2.468,2.468,0,0,1,48.4,48.531a1.074,1.074,0,0,0-.9.27,4.65,4.65,0,0,1-6.447-.041.9.9,0,0,0-.737-.241A2.537,2.537,0,0,1,37.3,46.359a4.861,4.861,0,0,1-.138-.785c-.023-.279-.005-.561-.005-.931"
													transform="translate(-33.598 -29.506)"
												/>
												<path
													className="b-navbar-mobile"
													d="M36.353,25.2a9.713,9.713,0,0,1,7.53,3.313,7.287,7.287,0,0,1,1.654,3.415.743.743,0,0,0,.395.572,2.159,2.159,0,0,1,1.031,1.518,5.811,5.811,0,0,1-.341,3.562,2.2,2.2,0,0,1-2.169,1.389c-.226,0-.286-.052-.256-.3.182-1.543.334-3.088.388-4.644a6.622,6.622,0,0,0-3.926-6.618,8.922,8.922,0,0,0-9.957.92,6.3,6.3,0,0,0-2.515,5.342,45.419,45.419,0,0,0,.336,4.559.522.522,0,0,0,.22.4,13.972,13.972,0,0,0,5.656,2.7,1.177,1.177,0,0,0,.762-.124,2.55,2.55,0,0,1,1.925-.019.662.662,0,0,1,.355.821.685.685,0,0,1-.653.6c-.444.025-.89.009-1.336,0a.491.491,0,0,1-.443-.236c-.158-.316-.431-.339-.713-.392a14.078,14.078,0,0,1-5.859-2.764,1.472,1.472,0,0,0-.651-.308A2.049,2.049,0,0,1,26.2,37.68a5.672,5.672,0,0,1-.348-3.808,2.128,2.128,0,0,1,1.077-1.428.49.49,0,0,0,.27-.362c.864-3.812,3.413-5.76,6.928-6.629a7.686,7.686,0,0,1,1.02-.17c.414-.044.831-.058,1.2-.083"
													transform="translate(-25.675 -25.199)"
												/>
											</g>
										</g>
									</g>
									<g transform="translate(0 608.058)">
										<g
											className="t-navbar-mobile"
											transform="matrix(1, 0, 0, 1, -9, -614.06)">
											<g
												className="l-navbar-mobile"
												transform="translate(9 614)">
												<rect
													className="n-navbar-mobile"
													width={420}
													height={43}
												/>
												<rect
													className="a-navbar-mobile"
													x={0.5}
													y={0.5}
													width={419}
													height={42}
												/>
											</g>
										</g>
										<text
											className="m-navbar-mobile"
											transform="translate(40 9.942)">
											<tspan x={0} y={15}>
												{t('Trabaje con nosotros')}
											</tspan>
										</text>
									</g>
									<g
										transform="translate(0 565.796)"
										onClick={() =>
											(window.location.href =
												'/codigo-linea-etica')
										}>
										<g
											className="s-navbar-mobile"
											transform="matrix(1, 0, 0, 1, -9, -571.8)">
											<g
												className="l-navbar-mobile"
												transform="translate(9 572)">
												<rect
													className="n-navbar-mobile"
													width={420}
													height={43}
												/>
												<rect
													className="a-navbar-mobile"
													x={0.5}
													y={0.5}
													width={419}
													height={42}
												/>
											</g>
										</g>
										<text
											className="m-navbar-mobile"
											transform="translate(40 10.204)">
											<tspan x={0} y={15}>
												{t('Ética y compliance​')}
											</tspan>
										</text>
									</g>
									<g
										transform="translate(0 523.534)"
										onClick={() => setStep(3)}>
										<g
											className="r-navbar-mobile"
											transform="matrix(1, 0, 0, 1, -9, -529.53)">
											<g
												className="l-navbar-mobile"
												transform="translate(9 530)">
												<rect
													className="n-navbar-mobile"
													width={420}
													height={44}
												/>
												<rect
													className="a-navbar-mobile"
													x={0.5}
													y={0.5}
													width={419}
													height={43}
												/>
											</g>
										</g>
										<text
											className="m-navbar-mobile"
											transform="translate(40 10.467)">
											<tspan x={0} y={15}>
												{t('Actualidad​')}
											</tspan>
										</text>
									</g>
									<g
										transform="translate(0 356.271)"
										onClick={() => setStep(0)}>
										<g
											className="q-navbar-mobile"
											transform="matrix(1, 0, 0, 1, -9, -362.27)">
											<g
												className="l-navbar-mobile"
												transform="translate(9 362)">
												<rect
													className="n-navbar-mobile"
													width={420}
													height={44}
												/>
												<rect
													className="a-navbar-mobile"
													x={0.5}
													y={0.5}
													width={419}
													height={43}
												/>
											</g>
										</g>
										<text
											className="m-navbar-mobile"
											transform="translate(40 10.729)">
											<tspan x={0} y={15}>
												{t('Soluciones en salud')}
											</tspan>
										</text>
									</g>
									<g
										transform="translate(0 314.009)"
										onClick={() => setStep(1)}>
										<g
											className="p-navbar-mobile"
											transform="matrix(1, 0, 0, 1, -9, -320.01)">
											<g
												className="l-navbar-mobile"
												transform="translate(9 320)">
												<rect
													className="n-navbar-mobile"
													width={420}
													height={43}
												/>
												<rect
													className="a-navbar-mobile"
													x={0.5}
													y={0.5}
													width={419}
													height={42}
												/>
											</g>
										</g>
										<text
											className="m-navbar-mobile"
											transform="translate(40 9.991)">
											<tspan x={0} y={15}>
												{t('Trayectoria')}
											</tspan>
										</text>
									</g>
									<g
										transform="translate(0 272.778)"
										onClick={() =>
											(window.location.href = '/')
										}>
										<g
											className="o-navbar-mobile"
											transform="matrix(1, 0, 0, 1, -9, -278.78)">
											<g
												className="l-navbar-mobile"
												transform="translate(9 279)">
												<rect
													className="n-navbar-mobile"
													width={420}
													height={42}
												/>
												<rect
													className="a-navbar-mobile"
													x={0.5}
													y={0.5}
													width={419}
													height={41}
												/>
											</g>
										</g>
										<text
											className="m-navbar-mobile"
											transform="translate(40 9.222)">
											<tspan x={0} y={15}>
												{'Home'}
											</tspan>
										</text>
									</g>
								</g>

								<path
									className="g-navbar-mobile"
									d="M955.324-45.344,948.263-52.4l-6.929,6.929a3.1,3.1,0,0,1-4.382,0,3.1,3.1,0,0,1,0-4.381l6.929-6.929-7.061-7.061a2.911,2.911,0,0,1,0-4.117,2.912,2.912,0,0,1,4.117,0L948-60.9l7.193-7.193a3.1,3.1,0,0,1,4.382,0,3.1,3.1,0,0,1,0,4.381l-7.194,7.194,7.061,7.061a2.911,2.911,0,0,1,0,4.117,2.9,2.9,0,0,1-2.059.853A2.9,2.9,0,0,1,955.324-45.344Z"
									transform="translate(-580.481 76.722)"
									onClick={() => setOpenMenu(false)}
								/>
								<g
									transform="translate(317.094 9.941)"
									onClick={() => {
										setOpenMenu(false)
										setOpenContact(true)
										setStep(0)
									}}>
									<path
										className="b-navbar-mobile"
										d="M37.161,44.643a16.71,16.71,0,0,0,3.358,1.73c.171.063.243.246.355.378a4.984,4.984,0,0,0,2.987,1.956,3.312,3.312,0,0,0,2.3-.529,6.725,6.725,0,0,0,2-1.987,14.125,14.125,0,0,0,2.25-5.849c.052-.314-.073-.375-.337-.388a15.483,15.483,0,0,1-3.5-.458,12.478,12.478,0,0,1-4.973-2.827c-.275-.249-.375-.188-.562.084a6.522,6.522,0,0,1-2.715,2.4c-.267.117-.235.291-.213.5a15.768,15.768,0,0,0,.95,3.95l.133.352a11.318,11.318,0,0,1-1.683-.991.3.3,0,0,1-.081-.154,12.447,12.447,0,0,1-.409-6.392,6.221,6.221,0,0,1,5.5-4.954,10.287,10.287,0,0,1,5.025.371A6.144,6.144,0,0,1,51.722,37.1a12.8,12.8,0,0,1-.466,5.4,1.411,1.411,0,0,0,0,.811,5.654,5.654,0,0,1-.033,3.365A2.468,2.468,0,0,1,48.4,48.531a1.074,1.074,0,0,0-.9.27,4.65,4.65,0,0,1-6.447-.041.9.9,0,0,0-.737-.241A2.537,2.537,0,0,1,37.3,46.359a4.861,4.861,0,0,1-.138-.785c-.023-.279-.005-.561-.005-.931"
										transform="translate(-33.598 -29.506)"
									/>
									<path
										className="b-navbar-mobile"
										d="M36.353,25.2a9.713,9.713,0,0,1,7.53,3.313,7.287,7.287,0,0,1,1.654,3.415.743.743,0,0,0,.395.572,2.159,2.159,0,0,1,1.031,1.518,5.811,5.811,0,0,1-.341,3.562,2.2,2.2,0,0,1-2.169,1.389c-.226,0-.286-.052-.256-.3.182-1.543.334-3.088.388-4.644a6.622,6.622,0,0,0-3.926-6.618,8.922,8.922,0,0,0-9.957.92,6.3,6.3,0,0,0-2.515,5.342,45.419,45.419,0,0,0,.336,4.559.522.522,0,0,0,.22.4,13.972,13.972,0,0,0,5.656,2.7,1.177,1.177,0,0,0,.762-.124,2.55,2.55,0,0,1,1.925-.019.662.662,0,0,1,.355.821.685.685,0,0,1-.653.6c-.444.025-.89.009-1.336,0a.491.491,0,0,1-.443-.236c-.158-.316-.431-.339-.713-.392a14.078,14.078,0,0,1-5.859-2.764,1.472,1.472,0,0,0-.651-.308A2.049,2.049,0,0,1,26.2,37.68a5.672,5.672,0,0,1-.348-3.808,2.128,2.128,0,0,1,1.077-1.428.49.49,0,0,0,.27-.362c.864-3.812,3.413-5.76,6.928-6.629a7.686,7.686,0,0,1,1.02-.17c.414-.044.831-.058,1.2-.083"
										transform="translate(-25.675 -25.199)"
									/>
								</g>
							</g>
						</svg>
					) : step === 3 ? (
						<svg
							viewBox="3 0 414 902"
							className="absolute z-[1] top-0">
							<defs>
								<style>
									{
										'.a-navbar-mobile,.d-navbar-mobile{fill:none;}.b-navbar-mobile,.m-navbar-mobile{fill:#001f5f;}.c-navbar-mobile,.e-navbar-mobile,.k-navbar-mobile,.l-navbar-mobile{fill:#fff;}.c-navbar-mobile{font-size:12px;font-family:Silka-Medium, Silka;font-weight:500;}.d-navbar-mobile{stroke:#fff;}.f-navbar-mobile{clip-path:url(#c-navbar-mobile);}.g-navbar-mobile,.j-navbar-mobile{fill:#e40032;}.h-navbar-mobile{clip-path:url(#f-navbar-mobile);}.i-navbar-mobile{clip-path:url(#g-navbar-mobile);}.j-navbar-mobile,.l-navbar-mobile{stroke:#001f5f;}.k-navbar-mobile,.m-navbar-mobile{font-size:16px;font-family:Silka-SemiBold, Silka;font-weight:600;}.n-navbar-mobile{stroke:none;}.o-navbar-mobile{filter:url(#v-navbar-mobile);}.p-navbar-mobile{filter:url(#t-navbar-mobile);}.q-navbar-mobile{filter:url(#r-navbar-mobile);}.r-navbar-mobile{filter:url(#p-navbar-mobile);}.s-navbar-mobile{filter:url(#n-navbar-mobile);}.t-navbar-mobile{filter:url(#l-navbar-mobile);}.u-navbar-mobile{filter:url(#j-navbar-mobile);}.v-navbar-mobile{filter:url(#h-navbar-mobile);}.w-navbar-mobile{filter:url(#d-navbar-mobile);}.x-navbar-mobile{filter:url(#a-navbar-mobile);}'
									}
								</style>
								<filter
									id="a-navbar-mobile"
									x={2}
									y={0}
									width={433.878}
									height={56.79}
									filterUnits="userSpaceOnUse">
									<feOffset dy={3} />
									<feGaussianBlur
										stdDeviation={3}
										result="b"
									/>
									<feFlood floodOpacity={0.302} />
									<feComposite operator="in" in2="b" />
									<feComposite in="SourceGraphic" />
								</filter>
								<clipPath id="c-navbar-mobile">
									<rect
										className="a-navbar-mobile"
										width={108.286}
										height={30.3}
									/>
								</clipPath>
								<filter
									id="d-navbar-mobile"
									x={43.862}
									y={189.188}
									width={351.004}
									height={64.541}
									filterUnits="userSpaceOnUse">
									<feOffset dy={3} />
									<feGaussianBlur
										stdDeviation={3}
										result="e"
									/>
									<feFlood floodOpacity={0.502} />
									<feComposite operator="in" in2="e" />
									<feComposite in="SourceGraphic" />
								</filter>
								<clipPath id="f-navbar-mobile">
									<rect
										className="a-navbar-mobile"
										width={193.23}
										height={55.733}
									/>
								</clipPath>
								<clipPath id="g-navbar-mobile">
									<rect
										className="b-navbar-mobile"
										width={139.029}
										height={58.623}
									/>
								</clipPath>
								<filter
									id="h-navbar-mobile"
									x={0}
									y={655}
									width={438}
									height={61}
									filterUnits="userSpaceOnUse">
									<feOffset dy={3} />
									<feGaussianBlur
										stdDeviation={3}
										result="i"
									/>
									<feFlood floodOpacity={0.251} />
									<feComposite operator="in" in2="i" />
									<feComposite in="SourceGraphic" />
								</filter>
								<filter
									id="j-navbar-mobile"
									x={0}
									y={611}
									width={438}
									height={63}
									filterUnits="userSpaceOnUse">
									<feOffset dy={3} />
									<feGaussianBlur
										stdDeviation={3}
										result="k"
									/>
									<feFlood floodOpacity={0.251} />
									<feComposite operator="in" in2="k" />
									<feComposite in="SourceGraphic" />
								</filter>
								<filter
									id="l-navbar-mobile"
									x={0}
									y={569}
									width={438}
									height={61}
									filterUnits="userSpaceOnUse">
									<feOffset dy={3} />
									<feGaussianBlur
										stdDeviation={3}
										result="m"
									/>
									<feFlood floodOpacity={0.251} />
									<feComposite operator="in" in2="m" />
									<feComposite in="SourceGraphic" />
								</filter>
								<filter
									id="n-navbar-mobile"
									x={0}
									y={527}
									width={438}
									height={61}
									filterUnits="userSpaceOnUse">
									<feOffset dy={3} />
									<feGaussianBlur
										stdDeviation={3}
										result="o"
									/>
									<feFlood floodOpacity={0.251} />
									<feComposite operator="in" in2="o" />
									<feComposite in="SourceGraphic" />
								</filter>
								<filter
									id="p-navbar-mobile"
									x={0}
									y={399}
									width={438}
									height={62}
									filterUnits="userSpaceOnUse">
									<feOffset dy={3} />
									<feGaussianBlur
										stdDeviation={3}
										result="q"
									/>
									<feFlood floodOpacity={0.251} />
									<feComposite operator="in" in2="q" />
									<feComposite in="SourceGraphic" />
								</filter>
								<filter
									id="r-navbar-mobile"
									x={0}
									y={356}
									width={438}
									height={62}
									filterUnits="userSpaceOnUse">
									<feOffset dy={3} />
									<feGaussianBlur
										stdDeviation={3}
										result="s"
									/>
									<feFlood floodOpacity={0.251} />
									<feComposite operator="in" in2="s" />
									<feComposite in="SourceGraphic" />
								</filter>
								<filter
									id="t-navbar-mobile"
									x={0}
									y={314}
									width={438}
									height={61}
									filterUnits="userSpaceOnUse">
									<feOffset dy={3} />
									<feGaussianBlur
										stdDeviation={3}
										result="u"
									/>
									<feFlood floodOpacity={0.251} />
									<feComposite operator="in" in2="u" />
									<feComposite in="SourceGraphic" />
								</filter>
								<filter
									id="v-navbar-mobile"
									x={0}
									y={273}
									width={438}
									height={60}
									filterUnits="userSpaceOnUse">
									<feOffset dy={3} />
									<feGaussianBlur
										stdDeviation={3}
										result="w"
									/>
									<feFlood floodOpacity={0.2} />
									<feComposite operator="in" in2="w" />
									<feComposite in="SourceGraphic" />
								</filter>
							</defs>
							<g>
								<g transform="translate(357.487 10.743)">
									<rect
										className="b-navbar-mobile"
										width={24.686}
										height={4.377}
										rx={2.189}
									/>
									<rect
										className="b-navbar-mobile"
										width={24.686}
										height={4.377}
										rx={2.189}
										transform="translate(0 7.296)"
									/>
									<rect
										className="b-navbar-mobile"
										width={24.686}
										height={4.377}
										rx={2.189}
										transform="translate(0 14.592)"
									/>
								</g>
								<g transform="translate(317.579 9.941)">
									<path
										className="b-navbar-mobile"
										d="M37.159,44.643a16.6,16.6,0,0,0,3.342,1.73c.17.063.242.246.353.378a4.958,4.958,0,0,0,2.972,1.956,3.283,3.283,0,0,0,2.293-.529,6.708,6.708,0,0,0,2-1.987,14.165,14.165,0,0,0,2.239-5.849c.052-.314-.072-.375-.335-.388a15.339,15.339,0,0,1-3.48-.458,12.4,12.4,0,0,1-4.949-2.827c-.274-.249-.373-.188-.56.084a6.5,6.5,0,0,1-2.7,2.4c-.266.117-.234.291-.212.5a15.831,15.831,0,0,0,.946,3.95l.132.352a11.252,11.252,0,0,1-1.675-.991.3.3,0,0,1-.081-.154,12.5,12.5,0,0,1-.407-6.392A6.2,6.2,0,0,1,42.5,31.456a10.191,10.191,0,0,1,5,.371A6.138,6.138,0,0,1,51.65,37.1a12.857,12.857,0,0,1-.464,5.4,1.418,1.418,0,0,0,0,.811,5.68,5.68,0,0,1-.033,3.365,2.456,2.456,0,0,1-2.808,1.853,1.065,1.065,0,0,0-.891.27,4.612,4.612,0,0,1-6.416-.041.892.892,0,0,0-.733-.241,2.527,2.527,0,0,1-3-2.161,4.882,4.882,0,0,1-.137-.785c-.023-.279-.005-.561-.005-.931"
										transform="translate(-33.614 -29.506)"
									/>
									<path
										className="b-navbar-mobile"
										d="M36.3,25.2A9.645,9.645,0,0,1,43.8,28.512a7.3,7.3,0,0,1,1.646,3.415.743.743,0,0,0,.393.572,2.159,2.159,0,0,1,1.026,1.518,5.837,5.837,0,0,1-.339,3.562,2.189,2.189,0,0,1-2.158,1.389c-.225,0-.284-.052-.255-.3.182-1.543.332-3.088.386-4.644a6.626,6.626,0,0,0-3.907-6.618,8.845,8.845,0,0,0-9.909.92,6.316,6.316,0,0,0-2.5,5.342,45.635,45.635,0,0,0,.334,4.559.523.523,0,0,0,.219.4,13.876,13.876,0,0,0,5.629,2.7,1.167,1.167,0,0,0,.759-.124,2.527,2.527,0,0,1,1.916-.019.663.663,0,0,1,.353.821.683.683,0,0,1-.65.6c-.442.025-.886.009-1.329,0a.488.488,0,0,1-.441-.236c-.157-.316-.429-.339-.71-.392a13.981,13.981,0,0,1-5.831-2.764,1.462,1.462,0,0,0-.648-.308A2.041,2.041,0,0,1,26.2,37.68a5.7,5.7,0,0,1-.346-3.808,2.126,2.126,0,0,1,1.072-1.428.49.49,0,0,0,.269-.362c.86-3.812,3.4-5.76,6.894-6.629a7.615,7.615,0,0,1,1.015-.17c.412-.044.827-.058,1.2-.083"
										transform="translate(-25.675 -25.199)"
									/>
								</g>

								<path
									className="d-navbar-mobile"
									d="M311,0"
									transform="translate(73 541)"
								/>
								<g transform="translate(4)">
									<g
										className="x-navbar-mobile"
										transform="matrix(1, 0, 0, 1, -11, -6)">
										<path
											className="e-navbar-mobile"
											d="M0,0H415.878V38.79H0Z"
											transform="translate(11 6)"
										/>
									</g>
									<g
										transform="translate(280 10)"
										onClick={handleChangeSelectedLanguage}>
										<foreignObject
											x={0}
											y={0}
											width={38}
											height={38}>
											{selectedLanguage === 'es' ? (
												<svg
													xmlns="http://www.w3.org/2000/svg"
													id="Componente_38_3"
													data-name="Componente 38 – 3"
													width="25"
													height="25"
													viewBox="0 0 25 25">
													<g
														id="Grupo_5836"
														data-name="Grupo 5836">
														<path
															id="Trazado_68877"
															data-name="Trazado 68877"
															d="M1409.679,47.929a9.753,9.753,0,1,1-9.753-9.753,9.753,9.753,0,0,1,9.753,9.753"
															transform="translate(-1390.173 -38.176)"
															fill="#001f5f"
														/>
														<path
															id="Trazado_68878"
															data-name="Trazado 68878"
															d="M1479.116,60.531H1464.3a8.906,8.906,0,0,1,14.813,0"
															transform="translate(-1461.956 -55.722)"
															fill="#fd0002"
														/>
														<path
															id="Trazado_68879"
															data-name="Trazado 68879"
															d="M1479.116,571.931a8.906,8.906,0,0,1-14.812,0Z"
															transform="translate(-1461.956 -557.234)"
															fill="#fd0002"
														/>
														<path
															id="Trazado_68880"
															data-name="Trazado 68880"
															d="M1426.371,208.875a8.862,8.862,0,0,1-1.5,4.944h-14.812a8.909,8.909,0,0,1,0-9.888h14.812a8.862,8.862,0,0,1,1.5,4.944"
															transform="translate(-1407.714 -199.122)"
															fill="#ff0"
														/>
													</g>
												</svg>
											) : (
												<svg
													xmlns="http://www.w3.org/2000/svg"
													xmlnsXlink="http://www.w3.org/1999/xlink"
													id="Componente_38_3"
													data-name="Componente 38 – 3"
													width="25"
													height="25"
													viewBox="0 0 25 25">
													<defs>
														<clipPath id="clip-path">
															<path
																id="Trazado_68887"
																data-name="Trazado 68887"
																d="M321.584,78.464a8.877,8.877,0,1,0,8.877-8.877,8.877,8.877,0,0,0-8.877,8.877"
																transform="translate(-321.584 -69.587)"
																fill="none"
															/>
														</clipPath>
													</defs>
													<g
														id="Grupo_5837"
														data-name="Grupo 5837">
														<path
															id="Trazado_68882"
															data-name="Trazado 68882"
															d="M309.679,47.929a9.753,9.753,0,1,1-9.753-9.753,9.753,9.753,0,0,1,9.753,9.753"
															transform="translate(-290.173 -38.176)"
															fill="#001f5f"
														/>
														<g
															id="Grupo_5836"
															data-name="Grupo 5836"
															transform="translate(0.876 0.876)"
															clipPath="url(#clip-path)">
															<path
																id="Trazado_68883"
																data-name="Trazado 68883"
																d="M35.689,21.13,4.668,0H0V1.552L29.482,21.635h6.207Z"
																transform="translate(-8.967 -1.94)"
																fill="#feffff"
															/>
															<path
																id="Trazado_68884"
																data-name="Trazado 68884"
																d="M35.689,0H31.034L0,21.14v.495H6.221L35.689,1.562Z"
																transform="translate(-8.967 -1.94)"
																fill="#feffff"
															/>
															<rect
																id="Rectángulo_1963"
																data-name="Rectángulo 1963"
																width="5.222"
																height="21.635"
																transform="translate(6.242 -1.94)"
																fill="#feffff"
															/>
															<rect
																id="Rectángulo_1964"
																data-name="Rectángulo 1964"
																width="35.491"
																height="5.104"
																transform="translate(-8.835 6.538)"
																fill="#feffff"
															/>
															<rect
																id="Rectángulo_1965"
																data-name="Rectángulo 1965"
																width="35.491"
																height="3.899"
																transform="translate(-8.835 7.074)"
																fill="#fd0002"
															/>
															<rect
																id="Rectángulo_1966"
																data-name="Rectángulo 1966"
																width="3.365"
																height="21.635"
																transform="translate(7.201 -1.94)"
																fill="#fd0002"
															/>
															<path
																id="Trazado_68885"
																data-name="Trazado 68885"
																d="M35.409,21.635,67.17,0H64.832L33.071,21.635Z"
																transform="translate(-41.116 -1.94)"
																fill="#fd0002"
															/>
															<path
																id="Trazado_68886"
																data-name="Trazado 68886"
																d="M58.533,21.635,26.772,0H24.433L56.195,21.635Z"
																transform="translate(-32.72 -1.94)"
																fill="#fd0002"
															/>
														</g>
													</g>
												</svg>
											)}
										</foreignObject>
									</g>

									<g transform="translate(37 4.493)">
										<g className="f-navbar-mobile">
											<a href="/">
												<foreignObject
													width={90}
													height={42}>
													<img src="/amarey-logo.webp" />
												</foreignObject>
											</a>
										</g>
									</g>
								</g>
								<path
									className="e-navbar-mobile"
									d="M0,0H415.878V254.789H0Z"
									transform="translate(4 38.79)"
								/>
								<foreignObject
									x={0}
									y={0}
									width="100%"
									height={266}
									transform="translate(5 189.188)">
									<div
										className="w-full flex justify-between mx-[auto] h-[46px] max-w-[331px] border-solid border-[3px] border-[#001f5f]"
										style={{
											borderTopLeftRadius: 100,
											borderBottomRightRadius: 100,
										}}>
										<input
											type="text"
											className="w-[80%] border-[transparent] bg-[transparent] pl-[30px]"
											id="search-input"
											onChange={handleSearchPage}
											style={{ outline: 'none' }}
										/>
										<img
											src="/images/lupa.svg"
											className="mr-[30px]"
											alt=""
											width={25}
											height={25}
										/>
									</div>
									{results.length > 0 && (
										<div className="w-full h-[200px] bg-white overflow-y-auto">
											{results.map(
												(
													item: SiteMapMock,
													index: number
												) => (
													<div
														className="h-[40px] w-full flex items-center border-b-solid border-b-[1px] border-[#e6e6e6] px-[10px]"
														key={index}
														onClick={() =>
															(window.location.href =
																item.url)
														}>
														<span>
															{item.label}
														</span>
													</div>
												)
											)}
										</div>
									)}
								</foreignObject>
								<g
									transform={
										results.length > 0
											? 'translate(0 161)'
											: 'translate(0 0)'
									}>
									<rect
										className="b-navbar-mobile"
										width={420}
										height={40}
										transform="translate(2 489)"
										onClick={() =>
											(window.location.href = '/eventos')
										}
									/>
									<rect
										className="b-navbar-mobile"
										width={420}
										height={47}
										transform="translate(2 442)"
									/>
									<text
										className="c-navbar-mobile"
										transform="translate(77 510)"
										onClick={() =>
											(window.location.href = '/eventos')
										}>
										<tspan x={0} y={0}>
											{t('Eventos')}
										</tspan>
									</text>
									<a href="/noticias">
										<text
											className="c-navbar-mobile"
											transform="translate(77 474)">
											<tspan x={0} y={0}>
												{t('Noticias')}
											</tspan>
										</text>
									</a>

									<line
										className="d-navbar-mobile"
										x2={311}
										transform="translate(73 489)"
									/>
									<g transform="translate(2 654.613)">
										<g
											className="v-navbar-mobile"
											transform="matrix(1, 0, 0, 1, -9, -660.61)">
											<g
												className="j-navbar-mobile"
												transform="translate(9 661)">
												<rect
													className="n-navbar-mobile"
													width={420}
													height={43}
												/>
												<rect
													className="a-navbar-mobile"
													x={0.5}
													y={0.5}
													width={419}
													height={42}
												/>
											</g>
										</g>
										<text
											className="k-navbar-mobile"
											transform="translate(40 10.387)">
											<tspan x={0} y={15}>
												{'Ucitech'}
											</tspan>
										</text>
									</g>
									<g
										transform="translate(2 547.534)"
										onClick={() =>
											(window.location.href =
												'/contactenos')
										}>
										<g
											className="u-navbar-mobile"
											transform="matrix(1, 0, 0, 1, -9, -553.53)">
											<g
												className="l-navbar-mobile"
												transform="translate(9 617)">
												<rect
													className="n-navbar-mobile"
													width={420}
													height={45}
												/>
												<rect
													className="a-navbar-mobile"
													x={0.5}
													y={0.5}
													width={419}
													height={44}
												/>
											</g>
										</g>
										<text
											className="m-navbar-mobile"
											transform="translate(40 74.466)">
											<tspan x={0} y={15}>
												{t('Contáctenos')}
											</tspan>
										</text>
										<g transform="translate(192.696 0)">
											<path
												className="b-navbar-mobile"
												d="M37.161,44.643a16.71,16.71,0,0,0,3.358,1.73c.171.063.243.246.355.378a4.984,4.984,0,0,0,2.987,1.956,3.312,3.312,0,0,0,2.3-.529,6.725,6.725,0,0,0,2-1.987,14.125,14.125,0,0,0,2.25-5.849c.052-.314-.073-.375-.337-.388a15.483,15.483,0,0,1-3.5-.458,12.478,12.478,0,0,1-4.973-2.827c-.275-.249-.375-.188-.562.084a6.522,6.522,0,0,1-2.715,2.4c-.267.117-.235.291-.213.5a15.768,15.768,0,0,0,.95,3.95l.133.352a11.318,11.318,0,0,1-1.683-.991.3.3,0,0,1-.081-.154,12.447,12.447,0,0,1-.409-6.392,6.221,6.221,0,0,1,5.5-4.954,10.287,10.287,0,0,1,5.025.371A6.144,6.144,0,0,1,51.722,37.1a12.8,12.8,0,0,1-.466,5.4,1.411,1.411,0,0,0,0,.811,5.654,5.654,0,0,1-.033,3.365A2.468,2.468,0,0,1,48.4,48.531a1.074,1.074,0,0,0-.9.27,4.65,4.65,0,0,1-6.447-.041.9.9,0,0,0-.737-.241A2.537,2.537,0,0,1,37.3,46.359a4.861,4.861,0,0,1-.138-.785c-.023-.279-.005-.561-.005-.931"
												transform="translate(-33.598 -29.506)"
											/>
											<path
												className="b-navbar-mobile"
												d="M36.353,25.2a9.713,9.713,0,0,1,7.53,3.313,7.287,7.287,0,0,1,1.654,3.415.743.743,0,0,0,.395.572,2.159,2.159,0,0,1,1.031,1.518,5.811,5.811,0,0,1-.341,3.562,2.2,2.2,0,0,1-2.169,1.389c-.226,0-.286-.052-.256-.3.182-1.543.334-3.088.388-4.644a6.622,6.622,0,0,0-3.926-6.618,8.922,8.922,0,0,0-9.957.92,6.3,6.3,0,0,0-2.515,5.342,45.419,45.419,0,0,0,.336,4.559.522.522,0,0,0,.22.4,13.972,13.972,0,0,0,5.656,2.7,1.177,1.177,0,0,0,.762-.124,2.55,2.55,0,0,1,1.925-.019.662.662,0,0,1,.355.821.685.685,0,0,1-.653.6c-.444.025-.89.009-1.336,0a.491.491,0,0,1-.443-.236c-.158-.316-.431-.339-.713-.392a14.078,14.078,0,0,1-5.859-2.764,1.472,1.472,0,0,0-.651-.308A2.049,2.049,0,0,1,26.2,37.68a5.672,5.672,0,0,1-.348-3.808,2.128,2.128,0,0,1,1.077-1.428.49.49,0,0,0,.27-.362c.864-3.812,3.413-5.76,6.928-6.629a7.686,7.686,0,0,1,1.02-.17c.414-.044.831-.058,1.2-.083"
												transform="translate(-25.675 -25.199)"
											/>
										</g>
										<g transform="translate(192.696 0)">
											<path
												className="b-navbar-mobile"
												d="M37.161,44.643a16.71,16.71,0,0,0,3.358,1.73c.171.063.243.246.355.378a4.984,4.984,0,0,0,2.987,1.956,3.312,3.312,0,0,0,2.3-.529,6.725,6.725,0,0,0,2-1.987,14.125,14.125,0,0,0,2.25-5.849c.052-.314-.073-.375-.337-.388a15.483,15.483,0,0,1-3.5-.458,12.478,12.478,0,0,1-4.973-2.827c-.275-.249-.375-.188-.562.084a6.522,6.522,0,0,1-2.715,2.4c-.267.117-.235.291-.213.5a15.768,15.768,0,0,0,.95,3.95l.133.352a11.318,11.318,0,0,1-1.683-.991.3.3,0,0,1-.081-.154,12.447,12.447,0,0,1-.409-6.392,6.221,6.221,0,0,1,5.5-4.954,10.287,10.287,0,0,1,5.025.371A6.144,6.144,0,0,1,51.722,37.1a12.8,12.8,0,0,1-.466,5.4,1.411,1.411,0,0,0,0,.811,5.654,5.654,0,0,1-.033,3.365A2.468,2.468,0,0,1,48.4,48.531a1.074,1.074,0,0,0-.9.27,4.65,4.65,0,0,1-6.447-.041.9.9,0,0,0-.737-.241A2.537,2.537,0,0,1,37.3,46.359a4.861,4.861,0,0,1-.138-.785c-.023-.279-.005-.561-.005-.931"
												transform="translate(-33.598 -29.506)"
											/>
											<path
												className="b-navbar-mobile"
												d="M36.353,25.2a9.713,9.713,0,0,1,7.53,3.313,7.287,7.287,0,0,1,1.654,3.415.743.743,0,0,0,.395.572,2.159,2.159,0,0,1,1.031,1.518,5.811,5.811,0,0,1-.341,3.562,2.2,2.2,0,0,1-2.169,1.389c-.226,0-.286-.052-.256-.3.182-1.543.334-3.088.388-4.644a6.622,6.622,0,0,0-3.926-6.618,8.922,8.922,0,0,0-9.957.92,6.3,6.3,0,0,0-2.515,5.342,45.419,45.419,0,0,0,.336,4.559.522.522,0,0,0,.22.4,13.972,13.972,0,0,0,5.656,2.7,1.177,1.177,0,0,0,.762-.124,2.55,2.55,0,0,1,1.925-.019.662.662,0,0,1,.355.821.685.685,0,0,1-.653.6c-.444.025-.89.009-1.336,0a.491.491,0,0,1-.443-.236c-.158-.316-.431-.339-.713-.392a14.078,14.078,0,0,1-5.859-2.764,1.472,1.472,0,0,0-.651-.308A2.049,2.049,0,0,1,26.2,37.68a5.672,5.672,0,0,1-.348-3.808,2.128,2.128,0,0,1,1.077-1.428.49.49,0,0,0,.27-.362c.864-3.812,3.413-5.76,6.928-6.629a7.686,7.686,0,0,1,1.02-.17c.414-.044.831-.058,1.2-.083"
												transform="translate(-25.675 -25.199)"
											/>
										</g>
									</g>
									<g transform="translate(2 569.058)">
										<g
											className="t-navbar-mobile"
											transform="matrix(1, 0, 0, 1, -9, -575.06)">
											<g
												className="l-navbar-mobile"
												transform="translate(9 575)">
												<rect
													className="n-navbar-mobile"
													width={420}
													height={43}
												/>
												<rect
													className="a-navbar-mobile"
													x={0.5}
													y={0.5}
													width={419}
													height={42}
												/>
											</g>
										</g>
										<text
											className="m-navbar-mobile"
											transform="translate(40 9.942)">
											<tspan x={0} y={15}>
												{t('Trabaje con nosotros')}
											</tspan>
										</text>
									</g>
									<g
										transform="translate(2 526.796)"
										onClick={() =>
											(window.location.href =
												'codigo-linea-etica')
										}>
										<g
											className="s-navbar-mobile"
											transform="matrix(1, 0, 0, 1, -9, -532.8)">
											<g
												className="l-navbar-mobile"
												transform="translate(9 533)">
												<rect
													className="n-navbar-mobile"
													width={420}
													height={43}
												/>
												<rect
													className="a-navbar-mobile"
													x={0.5}
													y={0.5}
													width={419}
													height={42}
												/>
											</g>
										</g>
										<text
											className="m-navbar-mobile"
											transform="translate(40 10.204)">
											<tspan x={0} y={15}>
												{t('Ética y compliance​')}
											</tspan>
										</text>
									</g>
									<g
										transform="translate(2 398.534)"
										onClick={() => setStep(0)}>
										<g
											className="r-navbar-mobile"
											transform="matrix(1, 0, 0, 1, -9, -404.53)">
											<g
												className="l-navbar-mobile"
												transform="translate(9 405)">
												<rect
													className="n-navbar-mobile"
													width={420}
													height={44}
												/>
												<rect
													className="a-navbar-mobile"
													x={0.5}
													y={0.5}
													width={419}
													height={43}
												/>
											</g>
										</g>
										<text
											className="m-navbar-mobile"
											transform="translate(40 10.467)">
											<tspan x={0} y={15}>
												{t('Actualidad​')}
											</tspan>
										</text>
									</g>
									<g
										transform="translate(2 356.271)"
										onClick={() => setStep(2)}>
										<g
											className="q-navbar-mobile"
											transform="matrix(1, 0, 0, 1, -9, -362.27)">
											<g
												className="l-navbar-mobile"
												transform="translate(9 362)">
												<rect
													className="n-navbar-mobile"
													width={420}
													height={44}
												/>
												<rect
													className="a-navbar-mobile"
													x={0.5}
													y={0.5}
													width={419}
													height={43}
												/>
											</g>
										</g>
										<text
											className="m-navbar-mobile"
											transform="translate(40 10.729)">
											<tspan x={0} y={15}>
												{t('Soluciones en salud')}
											</tspan>
										</text>
									</g>
									<g
										transform="translate(2 314.009)"
										onClick={() => setStep(1)}>
										<g
											className="p-navbar-mobile"
											transform="matrix(1, 0, 0, 1, -9, -320.01)">
											<g
												className="l-navbar-mobile"
												transform="translate(9 320)">
												<rect
													className="n-navbar-mobile"
													width={420}
													height={43}
												/>
												<rect
													className="a-navbar-mobile"
													x={0.5}
													y={0.5}
													width={419}
													height={42}
												/>
											</g>
										</g>
										<text
											className="m-navbar-mobile"
											transform="translate(40 9.991)">
											<tspan x={0} y={15}>
												{t('Trayectoria')}
											</tspan>
										</text>
									</g>
									<g
										transform="translate(2 272.778)"
										onClick={() =>
											(window.location.href = '/')
										}>
										<g
											className="o-navbar-mobile"
											transform="matrix(1, 0, 0, 1, -9, -278.78)">
											<g
												className="l-navbar-mobile"
												transform="translate(9 279)">
												<rect
													className="n-navbar-mobile"
													width={420}
													height={42}
												/>
												<rect
													className="a-navbar-mobile"
													x={0.5}
													y={0.5}
													width={419}
													height={41}
												/>
											</g>
										</g>
										<text
											className="m-navbar-mobile"
											transform="translate(40 9.222)">
											<tspan x={0} y={15}>
												{'Home'}
											</tspan>
										</text>
									</g>
								</g>
								<g transform="translate(115.783 116.835)">
									<g
										className="h-navbar-mobile"
										transform="translate(0 0)">
										<path
											className="g-navbar-mobile"
											d="M32.223,35.849l7.64,10.719a.3.3,0,0,1,.054.172l.043,8.391a.29.29,0,0,1-.283.294l-1.136.006a.288.288,0,0,1-.285-.291l-.015-2.976-4.107.021.015,2.977a.288.288,0,0,1-.283.294l-1.136.006a.286.286,0,0,1-.284-.291l-.039-7.709a.288.288,0,0,1,.282-.294l1.136-.007a.29.29,0,0,1,.285.292l.015,2.976,4.107-.021-.016-3.184-6.937-9.735-5.9.031L18.54,47.33l.015,3.183,4.108-.022-.015-2.976a.288.288,0,0,1,.282-.294l1.136-.007a.288.288,0,0,1,.285.292l.039,7.709a.289.289,0,0,1-.282.294l-1.136.006a.288.288,0,0,1-.285-.291l-.015-2.977-4.107.022.015,2.977a.29.29,0,0,1-.283.294l-1.136.006a.289.289,0,0,1-.285-.291l-.042-8.391a.3.3,0,0,1,.053-.172l7.53-10.8a.284.284,0,0,1,.229-.122l7.348-.039a.28.28,0,0,1,.23.12M20.392,27.085,8.1,23.042a.267.267,0,0,0-.175,0L.2,25.677a.3.3,0,0,0-.18.37l.356,1.112a.282.282,0,0,0,.359.186l2.741-.934,1.29,4.02-2.742.934a.3.3,0,0,0-.18.37l.356,1.112a.283.283,0,0,0,.359.186l7.1-2.42a.294.294,0,0,0,.18-.37L9.48,29.129a.283.283,0,0,0-.359-.186l-2.742.935L5.09,25.859l2.932-1,11.164,3.673.912,2.843.94,2.931L14.2,44.116l-2.933,1L9.978,41.1l2.742-.934a.3.3,0,0,0,.18-.37l-.357-1.112a.282.282,0,0,0-.358-.186l-7.1,2.42a.3.3,0,0,0-.18.37L5.259,42.4a.282.282,0,0,0,.359.186l2.742-.935,1.29,4.02L6.908,46.6a.3.3,0,0,0-.181.37l.357,1.112a.282.282,0,0,0,.359.186l7.729-2.635a.285.285,0,0,0,.142-.107l7.529-10.8a.3.3,0,0,0,.039-.263l-2.307-7.19a.289.289,0,0,0-.183-.188m15.158-1.98L47.8,20.929a.282.282,0,0,0,.141-.107l4.751-6.815a.3.3,0,0,0-.065-.408l-.922-.683a.278.278,0,0,0-.4.067L49.623,15.4l-3.335-2.471,1.685-2.417a.3.3,0,0,0-.064-.408l-.922-.683a.277.277,0,0,0-.4.067l-4.365,6.26a.3.3,0,0,0,.064.409l.923.683a.279.279,0,0,0,.4-.067l1.685-2.417,3.335,2.471-1.8,2.585L35.7,23.2l-4.793-3.55L30.848,7.575l1.8-2.585,3.335,2.471L34.3,9.878a.3.3,0,0,0,.065.408l.922.683a.278.278,0,0,0,.4-.067l4.365-6.261a.3.3,0,0,0-.065-.408l-.922-.683a.279.279,0,0,0-.4.067L36.979,6.034,33.645,3.564,35.33,1.146a.3.3,0,0,0-.065-.408L34.343.055a.277.277,0,0,0-.4.067L29.2,6.936a.3.3,0,0,0-.053.172l.067,13.3a.294.294,0,0,0,.118.236l5.967,4.42a.278.278,0,0,0,.255.04m20.628,1.754.345-1.116a.3.3,0,0,0-.184-.368l-7.755-2.551a.278.278,0,0,0-.176,0L36.157,27a.285.285,0,0,0-.181.189L33.742,34.4a.3.3,0,0,0,.041.262l7.639,10.72a.29.29,0,0,0,.143.105l7.755,2.552a.282.282,0,0,0,.357-.19l.345-1.115a.292.292,0,0,0-.183-.368l-2.752-.906,1.249-4.033,2.752.9a.283.283,0,0,0,.357-.189l.345-1.116a.3.3,0,0,0-.184-.368l-7.125-2.344a.281.281,0,0,0-.356.19l-.346,1.116a.293.293,0,0,0,.184.367l2.751.906-1.248,4.033-2.943-.967-6.938-9.736,1.795-5.795L48.5,24.641l2.941.969L50.2,29.643l-2.752-.906a.284.284,0,0,0-.357.19l-.345,1.116a.294.294,0,0,0,.184.367l7.124,2.344a.282.282,0,0,0,.357-.189l.346-1.116a.3.3,0,0,0-.184-.368l-2.752-.9,1.249-4.033,2.752.906a.284.284,0,0,0,.357-.19M21.257,25.13l5.916-4.492a.3.3,0,0,0,.116-.238L27.2,7.1a.294.294,0,0,0-.055-.171L22.319.172a.278.278,0,0,0-.4-.063L21.007.8a.3.3,0,0,0-.06.409l1.713,2.4L19.353,6.121l-1.713-2.4a.278.278,0,0,0-.4-.062l-.915.695a.3.3,0,0,0-.06.409L20.7,10.974a.279.279,0,0,0,.4.062l.915-.695a.3.3,0,0,0,.061-.409l-1.713-2.4,3.307-2.511L25.5,7.587l.077,12.079-4.751,3.607L9.66,19.617,7.828,17.054l3.307-2.511,1.712,2.4a.279.279,0,0,0,.4.062l.915-.695a.3.3,0,0,0,.061-.409L9.784,9.691a.278.278,0,0,0-.4-.063l-.915.695a.3.3,0,0,0-.06.409l1.712,2.4L6.818,15.64,5.1,13.243a.279.279,0,0,0-.4-.063l-.915.695a.3.3,0,0,0-.06.409l4.828,6.756a.279.279,0,0,0,.142.105L21,25.173a.278.278,0,0,0,.255-.044"
											transform="translate(0 0)"
										/>
										<path
											className="b-navbar-mobile"
											d="M95.531,21.118h-4.8a6.353,6.353,0,0,1-3.349-.926,6.789,6.789,0,0,1-2.43-2.516,7.165,7.165,0,0,1,0-6.948A6.885,6.885,0,0,1,87.382,8.2,6.4,6.4,0,0,1,93.4,7.854,6.712,6.712,0,0,1,95.613,9.5l-.674.652a5.714,5.714,0,0,0-1.92-1.4,5.556,5.556,0,0,0-5.167.305,5.946,5.946,0,0,0-2.88,5.137,6.016,6.016,0,0,0,2.88,5.168,5.417,5.417,0,0,0,2.88.811h3.84V15.265H90.2v-.947h5.331Z"
											transform="translate(7.146 0.86)"
										/>
										<path
											className="b-navbar-mobile"
											d="M107.031,21.1l-5.515-6.905h1.634a6.338,6.338,0,0,0,2.451-.4,3.3,3.3,0,0,0,1.205-1.021,2.457,2.457,0,0,0,.51-1.505,2.535,2.535,0,0,0-.429-1.4,3.2,3.2,0,0,0-1.225-1.084,3.879,3.879,0,0,0-1.838-.422h-3.718V21.1h-.919V7.415h4.637a4.973,4.973,0,0,1,1.756.305,4.292,4.292,0,0,1,1.43.873,3.884,3.884,0,0,1,.909,1.243,3.47,3.47,0,0,1-.358,3.505,3.913,3.913,0,0,1-1.593,1.316,4.107,4.107,0,0,1-1.236.368,10.5,10.5,0,0,1-1.276.074l4.8,6Z"
											transform="translate(8.432 0.878)"
										/>
										<path
											className="b-navbar-mobile"
											d="M116.825,21.248a4.74,4.74,0,0,1-1.93-.41,5.042,5.042,0,0,1-1.644-1.169,4.831,4.831,0,0,1-1.093-1.684,5.55,5.55,0,0,1-.379-2.042V7.415h.919v8.527a4.527,4.527,0,0,0,.317,1.684,4.2,4.2,0,0,0,2.236,2.326,3.923,3.923,0,0,0,1.573.327,3.966,3.966,0,0,0,1.593-.327,4.2,4.2,0,0,0,2.237-2.326,4.547,4.547,0,0,0,.316-1.684V7.415h.92v8.527a5.571,5.571,0,0,1-.379,2.042,4.845,4.845,0,0,1-1.093,1.684,5.072,5.072,0,0,1-1.634,1.169,4.766,4.766,0,0,1-1.961.41"
											transform="translate(9.503 0.878)"
										/>
										<path
											className="b-navbar-mobile"
											d="M125.506,21.1l-.021-13.685h4.738a4.518,4.518,0,0,1,2.155.527,4.21,4.21,0,0,1,1.573,1.41,3.5,3.5,0,0,1,0,3.864,4.179,4.179,0,0,1-1.573,1.42,4.518,4.518,0,0,1-2.155.527h-3.8V21.1Zm.919-6.926h3.8a3.73,3.73,0,0,0,1.7-.389,3.252,3.252,0,0,0,1.236-1.054,2.482,2.482,0,0,0,.459-1.442,2.513,2.513,0,0,0-.459-1.463,3.252,3.252,0,0,0-1.236-1.054,3.73,3.73,0,0,0-1.7-.389H126.4Z"
											transform="translate(10.668 0.878)"
										/>
										<path
											className="b-navbar-mobile"
											d="M143.575,21.263a6.4,6.4,0,0,1-3.37-.937,6.773,6.773,0,0,1-2.451-2.548,7.287,7.287,0,0,1,0-7.01A6.773,6.773,0,0,1,140.2,8.22a6.528,6.528,0,0,1,6.74,0,6.772,6.772,0,0,1,2.451,2.548,7.287,7.287,0,0,1,0,7.01,6.772,6.772,0,0,1-2.451,2.548,6.4,6.4,0,0,1-3.37.937m0-13.012a5.462,5.462,0,0,0-2.9.811,6.153,6.153,0,0,0-2.115,8.232,6,6,0,0,0,2.115,2.19,5.592,5.592,0,0,0,5.8,0,5.913,5.913,0,0,0,2.1-2.19,6.269,6.269,0,0,0,0-6.042,5.922,5.922,0,0,0-2.1-2.19,5.465,5.465,0,0,0-2.9-.811"
											transform="translate(11.635 0.863)"
										/>
										<path
											className="b-navbar-mobile"
											d="M80.867,26.01h3.387a.452.452,0,0,1,.444.459v1.42a5.727,5.727,0,0,1,5.047-2.349,5.929,5.929,0,0,1,5.714,3.107,6.992,6.992,0,0,1,6.2-3.107c3.05,0,5.5,1.228,6.729,3.36a11.751,11.751,0,0,1,1.158,5.564v11.1a.452.452,0,0,1-.445.459h-3.773a.451.451,0,0,1-.445-.459V35.042c0-2.06-.28-3.18-.946-3.938a3.386,3.386,0,0,0-2.7-1.156,3.522,3.522,0,0,0-3.33,2.023,9.717,9.717,0,0,0-.6,4.191v9.4a.452.452,0,0,1-.445.459H93.1a.452.452,0,0,1-.445-.459V35.042c0-1.951-.28-3.144-.876-3.9A3.69,3.69,0,0,0,88.9,29.948a3.341,3.341,0,0,0-3.365,2.167,12.182,12.182,0,0,0-.456,4.046v9.4a.452.452,0,0,1-.445.459H80.867a.452.452,0,0,1-.445-.459v-19.1a.452.452,0,0,1,.445-.459"
											transform="translate(6.837 3.024)"
										/>
										<path
											className="b-navbar-mobile"
											d="M129.911,46.025h-3.386a.452.452,0,0,1-.445-.459V43.423a7.63,7.63,0,0,1-6.449,3.071c-5.678,0-9.779-4.372-9.779-10.406,0-6.105,4.136-10.549,9.884-10.549a7.144,7.144,0,0,1,6.344,3.143V26.467a.451.451,0,0,1,.445-.457h3.386a.451.451,0,0,1,.445.457v19.1a.452.452,0,0,1-.445.459M114.548,36.2a5.54,5.54,0,0,0,5.748,5.89c3.365,0,5.643-2.421,5.643-6,0-3.612-2.384-6.142-5.783-6.142-3.26,0-5.608,2.638-5.608,6.251"
											transform="translate(9.339 3.024)"
										/>
										<path
											className="b-navbar-mobile"
											d="M132.683,26.01h3.387a.452.452,0,0,1,.444.459V27.96c1.227-1.879,2.208-2.42,4.207-2.42h.35v4.625c-2.8.073-4.171,1.626-4.171,4.733V45.566a.452.452,0,0,1-.445.459h-3.773a.452.452,0,0,1-.445-.459v-19.1a.452.452,0,0,1,.445-.459"
											transform="translate(11.242 3.024)"
										/>
										<path
											className="b-navbar-mobile"
											d="M146.4,38.149a5.133,5.133,0,0,0,5.362,3.937,4.837,4.837,0,0,0,4.144-1.829.443.443,0,0,1,.333-.158h4.241a.456.456,0,0,1,.412.63,9.118,9.118,0,0,1-1.314,2.152,9.409,9.409,0,0,1-7.711,3.614A10.324,10.324,0,0,1,141.35,35.913a10.441,10.441,0,0,1,11.235-10.327c5.265.494,9.022,4.871,9.022,10.72a7.97,7.97,0,0,1-.176,1.843Zm10.62-4.228c-.6-2.566-2.488-3.974-5.362-3.974a5.156,5.156,0,0,0-5.4,3.974Z"
											transform="translate(12.017 3.025)"
										/>
										<path
											className="b-navbar-mobile"
											d="M167.248,44.1,160.38,26.59a.456.456,0,0,1,.412-.63h4.351a.444.444,0,0,1,.42.309l4.209,12.66,4.589-12.672a.446.446,0,0,1,.417-.3h4.377a.457.457,0,0,1,.408.64L168.731,52.383a.445.445,0,0,1-.408.276h-4.041a.458.458,0,0,1-.407-.643Z"
											transform="translate(13.632 3.074)"
										/>
										<path
											className="b-navbar-mobile"
											d="M69.562,19.983H65.776l-4.769,11.8a.457.457,0,0,0,.41.634h4.07a.445.445,0,0,0,.419-.306l1.763-5.15,2.768,8.093H62.75a4.6,4.6,0,0,0-4.245,2.917l-3.268,8.082a.457.457,0,0,0,.41.634h4.334a.444.444,0,0,0,.408-.277l2.758-6.623h9.218L75.021,46.4a.444.444,0,0,0,.411.283h4.327a.457.457,0,0,0,.41-.635Z"
											transform="translate(4.693 2.366)"
										/>
									</g>
								</g>
								<g
									className="i-navbar-mobile"
									transform="translate(4.217 39.241)">
									<path
										className="b-navbar-mobile"
										d="M91.4,43.724H0V0H139.029V11.32c0,17.9-21.323,32.4-47.627,32.4"
									/>
								</g>

								<path
									className="g-navbar-mobile"
									d="M955.324-45.344,948.263-52.4l-6.929,6.929a3.1,3.1,0,0,1-4.382,0,3.1,3.1,0,0,1,0-4.381l6.929-6.929-7.061-7.061a2.911,2.911,0,0,1,0-4.117,2.912,2.912,0,0,1,4.117,0L948-60.9l7.193-7.193a3.1,3.1,0,0,1,4.382,0,3.1,3.1,0,0,1,0,4.381l-7.194,7.194,7.061,7.061a2.911,2.911,0,0,1,0,4.117,2.9,2.9,0,0,1-2.059.853A2.9,2.9,0,0,1,955.324-45.344Z"
									transform="translate(-578.481 76.722)"
									onClick={() => setOpenMenu(false)}
								/>
								<g
									transform="translate(319.094 9.941)"
									onClick={() => {
										setOpenMenu(false)
										setOpenContact(true)
										setStep(0)
									}}>
									<path
										className="b-navbar-mobile"
										d="M37.161,44.643a16.71,16.71,0,0,0,3.358,1.73c.171.063.243.246.355.378a4.984,4.984,0,0,0,2.987,1.956,3.312,3.312,0,0,0,2.3-.529,6.725,6.725,0,0,0,2-1.987,14.125,14.125,0,0,0,2.25-5.849c.052-.314-.073-.375-.337-.388a15.483,15.483,0,0,1-3.5-.458,12.478,12.478,0,0,1-4.973-2.827c-.275-.249-.375-.188-.562.084a6.522,6.522,0,0,1-2.715,2.4c-.267.117-.235.291-.213.5a15.768,15.768,0,0,0,.95,3.95l.133.352a11.318,11.318,0,0,1-1.683-.991.3.3,0,0,1-.081-.154,12.447,12.447,0,0,1-.409-6.392,6.221,6.221,0,0,1,5.5-4.954,10.287,10.287,0,0,1,5.025.371A6.144,6.144,0,0,1,51.722,37.1a12.8,12.8,0,0,1-.466,5.4,1.411,1.411,0,0,0,0,.811,5.654,5.654,0,0,1-.033,3.365A2.468,2.468,0,0,1,48.4,48.531a1.074,1.074,0,0,0-.9.27,4.65,4.65,0,0,1-6.447-.041.9.9,0,0,0-.737-.241A2.537,2.537,0,0,1,37.3,46.359a4.861,4.861,0,0,1-.138-.785c-.023-.279-.005-.561-.005-.931"
										transform="translate(-33.598 -29.506)"
									/>
									<path
										className="b-navbar-mobile"
										d="M36.353,25.2a9.713,9.713,0,0,1,7.53,3.313,7.287,7.287,0,0,1,1.654,3.415.743.743,0,0,0,.395.572,2.159,2.159,0,0,1,1.031,1.518,5.811,5.811,0,0,1-.341,3.562,2.2,2.2,0,0,1-2.169,1.389c-.226,0-.286-.052-.256-.3.182-1.543.334-3.088.388-4.644a6.622,6.622,0,0,0-3.926-6.618,8.922,8.922,0,0,0-9.957.92,6.3,6.3,0,0,0-2.515,5.342,45.419,45.419,0,0,0,.336,4.559.522.522,0,0,0,.22.4,13.972,13.972,0,0,0,5.656,2.7,1.177,1.177,0,0,0,.762-.124,2.55,2.55,0,0,1,1.925-.019.662.662,0,0,1,.355.821.685.685,0,0,1-.653.6c-.444.025-.89.009-1.336,0a.491.491,0,0,1-.443-.236c-.158-.316-.431-.339-.713-.392a14.078,14.078,0,0,1-5.859-2.764,1.472,1.472,0,0,0-.651-.308A2.049,2.049,0,0,1,26.2,37.68a5.672,5.672,0,0,1-.348-3.808,2.128,2.128,0,0,1,1.077-1.428.49.49,0,0,0,.27-.362c.864-3.812,3.413-5.76,6.928-6.629a7.686,7.686,0,0,1,1.02-.17c.414-.044.831-.058,1.2-.083"
										transform="translate(-25.675 -25.199)"
									/>
								</g>
							</g>
						</svg>
					) : null}
				</React.Fragment>
			) : openContact ? (
				<svg
					viewBox="3 0 414 900.931"
					className="absolute top-0 w-full z-[1]">
					<defs>
						<style>
							{
								".shadow-input{box-shadow: inset 6px 6px 6px -4px rgba(0,0,0,0.34); padding-left: 10px; padding-right: 10px;}.a-navbar-mobile,.i-navbar-mobile{fill:none;}.b-navbar-mobile{fill:url(#a-navbar-mobile);}.c-navbar-mobile{fill:#d9dae4;}.d-navbar-mobile,.e-navbar-mobile,.g-navbar-mobile,.h-navbar-mobile{fill:#001f5f;}.d-navbar-mobile{font-size:22px;font-family:Silka-Bold, Silka;}.d-navbar-mobile,.k-navbar-mobile{font-weight:700;}.e-navbar-mobile{font-size:16px;}.e-navbar-mobile,.g-navbar-mobile,.j-navbar-mobile{font-family:Silka-Regular, Silka;}.f-navbar-mobile,.k-navbar-mobile{fill:#fff;}.g-navbar-mobile,.j-navbar-mobile{font-size:10px;}.i-navbar-mobile{stroke:#001f5f;}.j-navbar-mobile,.m-navbar-mobile{fill:#e40032;}.j-navbar-mobile{text-decoration:underline;}.k-navbar-mobile{font-size:18px;font-family:'Kiona-Bold';}.l-navbar-mobile{clip-path:url(#ac-navbar-mobile);}.n-navbar-mobile{stroke:none;}.o-navbar-mobile{filter:url(#aa-navbar-mobile);}.p-navbar-mobile{filter:url(#y-navbar-mobile);}.q-navbar-mobile{filter:url(#w-navbar-mobile);}.r-navbar-mobile{filter:url(#t-navbar-mobile);}.s-navbar-mobile{filter:url(#q-navbar-mobile);}.t-navbar-mobile{filter:url(#n-navbar-mobile);}.u-navbar-mobile{filter:url(#k-navbar-mobile);}.v-navbar-mobile{filter:url(#h-navbar-mobile);}.w-navbar-mobile{filter:url(#e-navbar-mobile);}.x-navbar-mobile{filter:url(#b-navbar-mobile);}"
							}
						</style>
						<pattern
							id="a-navbar-mobile"
							width={1}
							height={1}
							patternTransform="matrix(-1, 0, 0, 1, 852.505, 0)"
							viewBox="80.803 -52.434 345.449 237.133">
							<image
								preserveAspectRatio="xMidYMid slice"
								width={426.252}
								height={284.189}
								xlinkHref="/images/mobile/allises/contactMenu.webp"
							/>
						</pattern>
						<filter
							id="b-navbar-mobile"
							x={45}
							y={155}
							width={342}
							height={26}
							filterUnits="userSpaceOnUse">
							<feOffset dy={3} />
							<feGaussianBlur stdDeviation={3} result="c" />
							<feFlood floodOpacity={0.341} result="d" />
							<feComposite
								operator="out"
								in="SourceGraphic"
								in2="c"
							/>
							<feComposite operator="in" in="d" />
							<feComposite operator="in" in2="SourceGraphic" />
						</filter>
						<filter
							id="e-navbar-mobile"
							x={45}
							y={213}
							width={342}
							height={26}
							filterUnits="userSpaceOnUse">
							<feOffset dy={3} />
							<feGaussianBlur stdDeviation={3} result="f" />
							<feFlood floodOpacity={0.341} result="g" />
							<feComposite
								operator="out"
								in="SourceGraphic"
								in2="f"
							/>
							<feComposite operator="in" in="g" />
							<feComposite operator="in" in2="SourceGraphic" />
						</filter>
						<filter
							id="h-navbar-mobile"
							x={45}
							y={270}
							width={342}
							height={26}
							filterUnits="userSpaceOnUse">
							<feOffset dy={3} />
							<feGaussianBlur stdDeviation={3} result="i" />
							<feFlood floodOpacity={0.341} result="j" />
							<feComposite
								operator="out"
								in="SourceGraphic"
								in2="i"
							/>
							<feComposite operator="in" in="j" />
							<feComposite operator="in" in2="SourceGraphic" />
						</filter>
						<filter
							id="k-navbar-mobile"
							x={45}
							y={327}
							width={342}
							height={26}
							filterUnits="userSpaceOnUse">
							<feOffset dy={3} />
							<feGaussianBlur stdDeviation={3} result="l" />
							<feFlood floodOpacity={0.341} result="m" />
							<feComposite
								operator="out"
								in="SourceGraphic"
								in2="l"
							/>
							<feComposite operator="in" in="m" />
							<feComposite operator="in" in2="SourceGraphic" />
						</filter>
						<filter
							id="n-navbar-mobile"
							x={45}
							y={385}
							width={342}
							height={26}
							filterUnits="userSpaceOnUse">
							<feOffset dy={3} />
							<feGaussianBlur stdDeviation={3} result="o" />
							<feFlood floodOpacity={0.341} result="p" />
							<feComposite
								operator="out"
								in="SourceGraphic"
								in2="o"
							/>
							<feComposite operator="in" in="p" />
							<feComposite operator="in" in2="SourceGraphic" />
						</filter>
						<filter
							id="q-navbar-mobile"
							x={45}
							y={442}
							width={342}
							height={26}
							filterUnits="userSpaceOnUse">
							<feOffset dy={3} />
							<feGaussianBlur stdDeviation={3} result="r" />
							<feFlood floodOpacity={0.341} result="s" />
							<feComposite
								operator="out"
								in="SourceGraphic"
								in2="r"
							/>
							<feComposite operator="in" in="s" />
							<feComposite operator="in" in2="SourceGraphic" />
						</filter>
						<filter
							id="t-navbar-mobile"
							x={45}
							y={499.149}
							width={341.407}
							height={90.247}
							filterUnits="userSpaceOnUse">
							<feOffset dy={3} />
							<feGaussianBlur stdDeviation={3} result="u" />
							<feFlood floodOpacity={0.341} result="v" />
							<feComposite
								operator="out"
								in="SourceGraphic"
								in2="u"
							/>
							<feComposite operator="in" in="v" />
							<feComposite operator="in" in2="SourceGraphic" />
						</filter>
						<filter
							id="w-navbar-mobile"
							x={370.143}
							y={504.719}
							width={20.906}
							height={39.983}
							filterUnits="userSpaceOnUse">
							<feOffset dy={3} />
							<feGaussianBlur stdDeviation={3} result="x" />
							<feFlood floodOpacity={0.161} />
							<feComposite operator="in" in2="x" />
							<feComposite in="SourceGraphic" />
						</filter>
						<filter
							id="y-navbar-mobile"
							x={114}
							y={649}
							width={204}
							height={61.168}
							filterUnits="userSpaceOnUse">
							<feOffset dy={3} />
							<feGaussianBlur stdDeviation={3} result="z" />
							<feFlood floodOpacity={0.4} />
							<feComposite operator="in" in2="z" />
							<feComposite in="SourceGraphic" />
						</filter>
						<filter
							id="aa-navbar-mobile"
							x={0}
							y={0}
							width={433.878}
							height={56.79}
							filterUnits="userSpaceOnUse">
							<feOffset dy={3} />
							<feGaussianBlur stdDeviation={3} result="ab" />
							<feFlood floodOpacity={0.302} />
							<feComposite operator="in" in2="ab" />
							<feComposite in="SourceGraphic" />
						</filter>
						<clipPath id="ac-navbar-mobile">
							<rect
								className="a-navbar-mobile"
								width={108.286}
								height={30.3}
							/>
						</clipPath>
					</defs>
					<g>
						<path
							className="b-navbar-mobile"
							d="M414,1853.48H0V1569.291c0,39.169,52.517,74.482,133.036,89.448H414Z"
							transform="translate(0.504 -958.549)"
						/>
						<path
							className="c-navbar-mobile"
							d="M413.975,679.813l-333.939.1c-93.065,3.428-79.9-46.123-79.9-46.123L0,0H414Z"
							transform="translate(0.504 38.788)"
						/>
						<g transform="translate(0.504 9)">
							<text
								className="d-navbar-mobile"
								transform="translate(60.657 77.657)">
								<tspan x={16.499} y={21}>
									{'Formulario de contacto'}
								</tspan>
							</text>
							<text
								className="e-navbar-mobile"
								transform="translate(36 115)">
								<tspan x={0} y={15}>
									{'Nombre completo '}
								</tspan>
							</text>
							<text
								className="e-navbar-mobile"
								transform="translate(36 173)">
								<tspan x={0} y={15}>
									{'Email '}
								</tspan>
							</text>
							<text
								className="e-navbar-mobile"
								transform="translate(36 230)">
								<tspan x={0} y={15}>
									Institución / empresa
								</tspan>
							</text>
							<text
								className="e-navbar-mobile"
								transform="translate(36 287)">
								<tspan x={0} y={15}>
									{'Asunto '}
								</tspan>
							</text>
							<text
								className="e-navbar-mobile"
								transform="translate(36 344)">
								<tspan x={0} y={15}>
									{'País '}
								</tspan>
							</text>
							<text
								className="e-navbar-mobile"
								transform="translate(36 402)">
								<tspan x={0} y={15}>
									{'Teléfono '}
								</tspan>
							</text>
							<text
								className="e-navbar-mobile"
								transform="translate(38.5 459)">
								<tspan x={0} y={15}>
									{'Mensaje '}
								</tspan>
							</text>
							<g data-type="innerShadowGroup">
								<foreignObject
									x={0}
									y={0}
									transform="translate(36 140)"
									width={340}
									height={27}>
									<input
										className="w-full h-full rounded-[20px] shadow-input"
										{...register('nombre_completo', {
											required: {
												message:
													'El campo es requerido',
												value: true,
											},
										})}
									/>
								</foreignObject>
							</g>
							<g data-type="innerShadowGroup">
								<foreignObject
									x={0}
									y={0}
									transform="translate(36 198)"
									width={340}
									height={27}>
									<input
										className="w-full h-full rounded-[20px] shadow-input"
										{...register('email', {
											required: {
												message:
													'El campo es requerido',
												value: true,
											},
										})}
									/>
								</foreignObject>
							</g>
							<g data-type="innerShadowGroup">
								<foreignObject
									x={0}
									y={0}
									transform="translate(36 255)"
									width={340}
									height={27}>
									<input
										className="w-full h-full rounded-[20px] shadow-input"
										{...register('instituto', {
											required: {
												message:
													'El campo es requerido',
												value: true,
											},
										})}
									/>
								</foreignObject>
							</g>
							<g data-type="innerShadowGroup">
								<foreignObject
									x={0}
									y={0}
									transform="translate(36 312)"
									width={340}
									height={27}>
									<input
										className="w-full h-full rounded-[20px] shadow-input"
										{...register('asunto', {
											required: {
												message:
													'El campo es requerido',
												value: true,
											},
										})}
									/>
								</foreignObject>
							</g>
							<g data-type="innerShadowGroup">
								<foreignObject
									x={0}
									y={0}
									transform="translate(36 370)"
									width={340}
									height={27}>
									<input
										className="w-full h-full rounded-[20px] shadow-input"
										{...register('pais', {
											required: {
												message:
													'El campo es requerido',
												value: true,
											},
										})}
									/>
								</foreignObject>
							</g>
							<g data-type="innerShadowGroup">
								<foreignObject
									x={0}
									y={0}
									transform="translate(36 427)"
									width={340}
									height={27}>
									<input
										className="w-full h-full rounded-[20px] shadow-input"
										{...register('telefono', {
											required: {
												message:
													'El campo es requerido',
												value: true,
											},
										})}
									/>
								</foreignObject>
							</g>
						</g>
						<text
							className="g-navbar-mobile"
							transform="translate(76.504 589.877)">
							<tspan x={0} y={9}>
								{
									'Al enviar este formulario, usted reconoce haber leído y estar '
								}
							</tspan>
							<tspan x={0} y={20}>
								{'de acuerdo con nuestra política de '}
							</tspan>
						</text>
						<foreignObject
							x={0}
							y={0}
							transform="translate(36 493)"
							width={340}
							height={93}>
							<textarea
								className="w-full h-full rounded-[20px] shadow-input"
								{...register('mensaje', {
									required: {
										message: 'El campo es requerido',
										value: true,
									},
								})}
							/>
						</foreignObject>
						<foreignObject
							transform="translate(53.335 594.599)"
							x={0}
							y={0}
							width={16}
							height={16}>
							{!accept ? (
								<div
									className="w-full h-full border-solid border-[1px] border-[#001F5F]"
									onClick={() => setAccept(true)}></div>
							) : (
								<div
									className="w-full h-full bg-[#001F5F] font-bold text-white text-[14px] flex justify-center items-center"
									onClick={() => setAccept(false)}>
									X
								</div>
							)}
						</foreignObject>
						<g transform="translate(53.335 594.599)">
							<g className="i-navbar-mobile">
								<rect
									className="n-navbar-mobile"
									width={16.143}
									height={16.143}
								/>
								<rect
									className="a-navbar-mobile"
									x={0.5}
									y={0.5}
									width={15.143}
									height={15.143}
								/>
							</g>
						</g>
						<a
							href="https://juegoseml.co/pdf/GRC-F-G-004-V5_FORMATO%20AUTORIZACIO%CC%81N%20DE%20TRATAMIENTO%20DE%20DATOS%20PERSONALES_.pdf"
							target="_blank"
							rel="noopener noreferrer">
							<text
								className="j-navbar-mobile"
								transform="translate(76.504 623)">
								<tspan x={0} y={0} xmlSpace="preserve">
									{'Tratamiento de datos personales. '}
								</tspan>
							</text>
						</a>
						<g
							transform="translate(0.504 -4)"
							onClick={handleSubmit(handleSentContact)}>
							<g
								className="p-navbar-mobile"
								transform="matrix(1, 0, 0, 1, -9, -2)">
								<path
									className="h-navbar-mobile"
									d="M186,43.169H38.151c-15.378,0-29.186-12.6-34.8-31.746L0,0H146.623c16.383,0,31.052,13.581,36.823,34.092Z"
									transform="translate(123 655)"
								/>
							</g>
							<text
								className="k-navbar-mobile"
								transform="translate(175 681.584)">
								<tspan x={0} y={0}>
									{'enviar'}
								</tspan>
							</text>
						</g>
						<g transform="translate(353.99 10.743)">
							<rect
								className="h-navbar-mobile"
								width={24.686}
								height={4.377}
								rx={2.189}
							/>
							<rect
								className="h-navbar-mobile"
								width={24.686}
								height={4.377}
								rx={2.189}
								transform="translate(0 7.296)"
							/>
							<rect
								className="h-navbar-mobile"
								width={24.686}
								height={4.377}
								rx={2.189}
								transform="translate(0 14.592)"
							/>
						</g>
						<g transform="translate(314.083 9.941)">
							<path
								className="h-navbar-mobile"
								d="M37.159,44.643a16.6,16.6,0,0,0,3.342,1.73c.17.063.242.246.353.378a4.958,4.958,0,0,0,2.972,1.956,3.283,3.283,0,0,0,2.293-.529,6.708,6.708,0,0,0,2-1.987,14.165,14.165,0,0,0,2.239-5.849c.052-.314-.072-.375-.335-.388a15.339,15.339,0,0,1-3.48-.458,12.4,12.4,0,0,1-4.949-2.827c-.274-.249-.373-.188-.56.084a6.5,6.5,0,0,1-2.7,2.4c-.266.117-.234.291-.212.5a15.831,15.831,0,0,0,.946,3.95l.132.352a11.252,11.252,0,0,1-1.675-.991.3.3,0,0,1-.081-.154,12.5,12.5,0,0,1-.407-6.392A6.2,6.2,0,0,1,42.5,31.456a10.191,10.191,0,0,1,5,.371A6.138,6.138,0,0,1,51.65,37.1a12.857,12.857,0,0,1-.464,5.4,1.418,1.418,0,0,0,0,.811,5.68,5.68,0,0,1-.033,3.365,2.456,2.456,0,0,1-2.808,1.853,1.065,1.065,0,0,0-.891.27,4.612,4.612,0,0,1-6.416-.041.892.892,0,0,0-.733-.241,2.527,2.527,0,0,1-3-2.161,4.882,4.882,0,0,1-.137-.785c-.023-.279-.005-.561-.005-.931"
								transform="translate(-33.614 -29.506)"
							/>
							<path
								className="h-navbar-mobile"
								d="M36.3,25.2A9.645,9.645,0,0,1,43.8,28.512a7.3,7.3,0,0,1,1.646,3.415.743.743,0,0,0,.393.572,2.159,2.159,0,0,1,1.026,1.518,5.837,5.837,0,0,1-.339,3.562,2.189,2.189,0,0,1-2.158,1.389c-.225,0-.284-.052-.255-.3.182-1.543.332-3.088.386-4.644a6.626,6.626,0,0,0-3.907-6.618,8.845,8.845,0,0,0-9.909.92,6.316,6.316,0,0,0-2.5,5.342,45.635,45.635,0,0,0,.334,4.559.523.523,0,0,0,.219.4,13.876,13.876,0,0,0,5.629,2.7,1.167,1.167,0,0,0,.759-.124,2.527,2.527,0,0,1,1.916-.019.663.663,0,0,1,.353.821.683.683,0,0,1-.65.6c-.442.025-.886.009-1.329,0a.488.488,0,0,1-.441-.236c-.157-.316-.429-.339-.71-.392a13.981,13.981,0,0,1-5.831-2.764,1.462,1.462,0,0,0-.648-.308A2.041,2.041,0,0,1,26.2,37.68a5.7,5.7,0,0,1-.346-3.808,2.126,2.126,0,0,1,1.072-1.428.49.49,0,0,0,.269-.362c.86-3.812,3.4-5.76,6.894-6.629a7.615,7.615,0,0,1,1.015-.17c.412-.044.827-.058,1.2-.083"
								transform="translate(-25.675 -25.199)"
							/>
						</g>
						<g transform="translate(0.504)">
							<g
								className="o-navbar-mobile"
								transform="matrix(1, 0, 0, 1, -9, -6)">
								<path
									className="f-navbar-mobile"
									d="M0,0H415.878V38.79H0Z"
									transform="translate(9 6)"
								/>
							</g>
							<g transform="translate(37 4.493)">
								<g className="l-navbar-mobile">
									<a href="/">
										<foreignObject width={90} height={42}>
											<img src="/amarey-logo.webp" />
										</foreignObject>
									</a>
								</g>
							</g>
						</g>
						<path
							className="m-navbar-mobile"
							d="M955.324-45.344,948.263-52.4l-6.929,6.929a3.1,3.1,0,0,1-4.382,0,3.1,3.1,0,0,1,0-4.381l6.929-6.929-7.061-7.061a2.911,2.911,0,0,1,0-4.117,2.912,2.912,0,0,1,4.117,0L948-60.9l7.193-7.193a3.1,3.1,0,0,1,4.382,0,3.1,3.1,0,0,1,0,4.381l-7.194,7.194,7.061,7.061a2.911,2.911,0,0,1,0,4.117,2.9,2.9,0,0,1-2.059.853A2.9,2.9,0,0,1,955.324-45.344Z"
							transform="translate(-581.977 76.722)"
							onClick={() => setOpenContact(false)}
						/>
						<g transform="translate(315.597 9.941)">
							<path
								className="h-navbar-mobile"
								d="M37.161,44.643a16.71,16.71,0,0,0,3.358,1.73c.171.063.243.246.355.378a4.984,4.984,0,0,0,2.987,1.956,3.312,3.312,0,0,0,2.3-.529,6.725,6.725,0,0,0,2-1.987,14.125,14.125,0,0,0,2.25-5.849c.052-.314-.073-.375-.337-.388a15.483,15.483,0,0,1-3.5-.458,12.478,12.478,0,0,1-4.973-2.827c-.275-.249-.375-.188-.562.084a6.522,6.522,0,0,1-2.715,2.4c-.267.117-.235.291-.213.5a15.768,15.768,0,0,0,.95,3.95l.133.352a11.318,11.318,0,0,1-1.683-.991.3.3,0,0,1-.081-.154,12.447,12.447,0,0,1-.409-6.392,6.221,6.221,0,0,1,5.5-4.954,10.287,10.287,0,0,1,5.025.371A6.144,6.144,0,0,1,51.722,37.1a12.8,12.8,0,0,1-.466,5.4,1.411,1.411,0,0,0,0,.811,5.654,5.654,0,0,1-.033,3.365A2.468,2.468,0,0,1,48.4,48.531a1.074,1.074,0,0,0-.9.27,4.65,4.65,0,0,1-6.447-.041.9.9,0,0,0-.737-.241A2.537,2.537,0,0,1,37.3,46.359a4.861,4.861,0,0,1-.138-.785c-.023-.279-.005-.561-.005-.931"
								transform="translate(-33.598 -29.506)"
							/>
							<path
								className="h-navbar-mobile"
								d="M36.353,25.2a9.713,9.713,0,0,1,7.53,3.313,7.287,7.287,0,0,1,1.654,3.415.743.743,0,0,0,.395.572,2.159,2.159,0,0,1,1.031,1.518,5.811,5.811,0,0,1-.341,3.562,2.2,2.2,0,0,1-2.169,1.389c-.226,0-.286-.052-.256-.3.182-1.543.334-3.088.388-4.644a6.622,6.622,0,0,0-3.926-6.618,8.922,8.922,0,0,0-9.957.92,6.3,6.3,0,0,0-2.515,5.342,45.419,45.419,0,0,0,.336,4.559.522.522,0,0,0,.22.4,13.972,13.972,0,0,0,5.656,2.7,1.177,1.177,0,0,0,.762-.124,2.55,2.55,0,0,1,1.925-.019.662.662,0,0,1,.355.821.685.685,0,0,1-.653.6c-.444.025-.89.009-1.336,0a.491.491,0,0,1-.443-.236c-.158-.316-.431-.339-.713-.392a14.078,14.078,0,0,1-5.859-2.764,1.472,1.472,0,0,0-.651-.308A2.049,2.049,0,0,1,26.2,37.68a5.672,5.672,0,0,1-.348-3.808,2.128,2.128,0,0,1,1.077-1.428.49.49,0,0,0,.27-.362c.864-3.812,3.413-5.76,6.928-6.629a7.686,7.686,0,0,1,1.02-.17c.414-.044.831-.058,1.2-.083"
								transform="translate(-25.675 -25.199)"
							/>
						</g>
					</g>
				</svg>
			) : (
				<React.Fragment>
					<svg viewBox={`0 0 414 ${window.location.pathname === '/' ? 50 : 35}`} id="navbar__container" className={window.location.pathname === '/' ? 'absolute top-0 z-[1]' : ''}>
						<defs>
							<style>
								{
									'.a-navbar-mobile{fill:none;}.b-navbar-mobile{fill:#fff;}.c-navbar-mobile{clip-path:url(#c-navbar-mobile);}.d-navbar-mobile{fill:#e40032;}.e-navbar-mobile{fill:#001f5f;}.f-navbar-mobile{filter:url(#a-navbar-mobile);}'
								}
							</style>
							<filter
								id="a-navbar-mobile"
								x={0}
								y={0}
								width={434}
								height={56.79}
								filterUnits="userSpaceOnUse">
								<feOffset dy={3} />
								<feGaussianBlur stdDeviation={3} result="b" />
								<feFlood floodOpacity={0.302} />
								<feComposite operator="in" in2="b" />
								<feComposite in="SourceGraphic" />
							</filter>
							<filter
								id="k-mapa-servicios-desktop"
								x={0}
								y={0}
								width={414}
								height={52.967}
								filterUnits="userSpaceOnUse">
								<feOffset dy={3} />
								<feGaussianBlur stdDeviation={3} result="l" />
								<feFlood floodOpacity={0.302} />
								<feComposite operator="in" in2="l" />
								<feComposite in="SourceGraphic" />
							</filter>
							<clipPath id="c-navbar-mobile">
								<rect
									className="a-navbar-mobile"
									width={108.286}
									height={30.3}
								/>
							</clipPath>
						</defs>
						<g>
							<path
								className="b-mapa-servicios-desktop"
								d="M0,0H414V34.967H0Z"
								style={{
									filter: 'url(#k-mapa-servicios-desktop)',
									fill: 'white',
								}}
							/>
							<g
								className="f-navbar-mobile"
								transform="matrix(1, 0, 0, 1, 280, 10)"
								onClick={handleChangeSelectedLanguage}>
								<foreignObject
									x={0}
									y={0}
									width={38}
									height={38}>
									{selectedLanguage === 'es' ? (
										<svg
											xmlns="http://www.w3.org/2000/svg"
											id="Componente_38_3"
											data-name="Componente 38 – 3"
											width="25"
											height="25"
											viewBox="0 0 25 25">
											<g
												id="Grupo_5836"
												data-name="Grupo 5836">
												<path
													id="Trazado_68877"
													data-name="Trazado 68877"
													d="M1409.679,47.929a9.753,9.753,0,1,1-9.753-9.753,9.753,9.753,0,0,1,9.753,9.753"
													transform="translate(-1390.173 -38.176)"
													fill="#001f5f"
												/>
												<path
													id="Trazado_68878"
													data-name="Trazado 68878"
													d="M1479.116,60.531H1464.3a8.906,8.906,0,0,1,14.813,0"
													transform="translate(-1461.956 -55.722)"
													fill="#fd0002"
												/>
												<path
													id="Trazado_68879"
													data-name="Trazado 68879"
													d="M1479.116,571.931a8.906,8.906,0,0,1-14.812,0Z"
													transform="translate(-1461.956 -557.234)"
													fill="#fd0002"
												/>
												<path
													id="Trazado_68880"
													data-name="Trazado 68880"
													d="M1426.371,208.875a8.862,8.862,0,0,1-1.5,4.944h-14.812a8.909,8.909,0,0,1,0-9.888h14.812a8.862,8.862,0,0,1,1.5,4.944"
													transform="translate(-1407.714 -199.122)"
													fill="#ff0"
												/>
											</g>
										</svg>
									) : (
										<svg
											xmlns="http://www.w3.org/2000/svg"
											xmlnsXlink="http://www.w3.org/1999/xlink"
											id="Componente_38_3"
											data-name="Componente 38 – 3"
											width="25"
											height="25"
											viewBox="0 0 25 25">
											<defs>
												<clipPath id="clip-path">
													<path
														id="Trazado_68887"
														data-name="Trazado 68887"
														d="M321.584,78.464a8.877,8.877,0,1,0,8.877-8.877,8.877,8.877,0,0,0-8.877,8.877"
														transform="translate(-321.584 -69.587)"
														fill="none"
													/>
												</clipPath>
											</defs>
											<g
												id="Grupo_5837"
												data-name="Grupo 5837">
												<path
													id="Trazado_68882"
													data-name="Trazado 68882"
													d="M309.679,47.929a9.753,9.753,0,1,1-9.753-9.753,9.753,9.753,0,0,1,9.753,9.753"
													transform="translate(-290.173 -38.176)"
													fill="#001f5f"
												/>
												<g
													id="Grupo_5836"
													data-name="Grupo 5836"
													transform="translate(0.876 0.876)"
													clipPath="url(#clip-path)">
													<path
														id="Trazado_68883"
														data-name="Trazado 68883"
														d="M35.689,21.13,4.668,0H0V1.552L29.482,21.635h6.207Z"
														transform="translate(-8.967 -1.94)"
														fill="#feffff"
													/>
													<path
														id="Trazado_68884"
														data-name="Trazado 68884"
														d="M35.689,0H31.034L0,21.14v.495H6.221L35.689,1.562Z"
														transform="translate(-8.967 -1.94)"
														fill="#feffff"
													/>
													<rect
														id="Rectángulo_1963"
														data-name="Rectángulo 1963"
														width="5.222"
														height="21.635"
														transform="translate(6.242 -1.94)"
														fill="#feffff"
													/>
													<rect
														id="Rectángulo_1964"
														data-name="Rectángulo 1964"
														width="35.491"
														height="5.104"
														transform="translate(-8.835 6.538)"
														fill="#feffff"
													/>
													<rect
														id="Rectángulo_1965"
														data-name="Rectángulo 1965"
														width="35.491"
														height="3.899"
														transform="translate(-8.835 7.074)"
														fill="#fd0002"
													/>
													<rect
														id="Rectángulo_1966"
														data-name="Rectángulo 1966"
														width="3.365"
														height="21.635"
														transform="translate(7.201 -1.94)"
														fill="#fd0002"
													/>
													<path
														id="Trazado_68885"
														data-name="Trazado 68885"
														d="M35.409,21.635,67.17,0H64.832L33.071,21.635Z"
														transform="translate(-41.116 -1.94)"
														fill="#fd0002"
													/>
													<path
														id="Trazado_68886"
														data-name="Trazado 68886"
														d="M58.533,21.635,26.772,0H24.433L56.195,21.635Z"
														transform="translate(-32.72 -1.94)"
														fill="#fd0002"
													/>
												</g>
											</g>
										</svg>
									)}
								</foreignObject>
							</g>
							<a href="/">
								<g transform="translate(37 7.004)">
									<g
										className="c-navbar-mobile"
										transform="translate(0 -2.512)">
										<foreignObject width={90} height={42}>
											<img src="/amarey-logo.webp" />
										</foreignObject>
									</g>
								</g>
							</a>
							<g
								transform="translate(-17.918 -1.985)"
								onClick={() => setOpenMenu(!openMenu)}>
								<rect
									className="e-navbar-mobile"
									width={24.806}
									height={4.377}
									rx={2.189}
									transform="translate(373.112 12.727)"
									onClick={() => setOpenMenu(!openMenu)}
								/>
								<rect
									className="e-navbar-mobile"
									width={24.806}
									height={4.377}
									rx={2.189}
									transform="translate(373.112 20.023)"
									onClick={() => setOpenMenu(!openMenu)}
								/>
								<rect
									className="e-navbar-mobile"
									width={24.806}
									height={4.377}
									rx={2.189}
									transform="translate(373.112 27.319)"
									onClick={() => setOpenMenu(!openMenu)}
								/>
							</g>
							<g
								transform="translate(315.094 9.941)"
								onClick={() => {
									setOpenMenu(false)
									setOpenContact(true)
									setStep(0)
								}}>
								<path
									className="e-navbar-mobile"
									d="M37.161,44.643a16.71,16.71,0,0,0,3.358,1.73c.171.063.243.246.355.378a4.984,4.984,0,0,0,2.987,1.956,3.312,3.312,0,0,0,2.3-.529,6.725,6.725,0,0,0,2-1.987,14.125,14.125,0,0,0,2.25-5.849c.052-.314-.073-.375-.337-.388a15.483,15.483,0,0,1-3.5-.458,12.478,12.478,0,0,1-4.973-2.827c-.275-.249-.375-.188-.562.084a6.522,6.522,0,0,1-2.715,2.4c-.267.117-.235.291-.213.5a15.768,15.768,0,0,0,.95,3.95l.133.352a11.318,11.318,0,0,1-1.683-.991.3.3,0,0,1-.081-.154,12.447,12.447,0,0,1-.409-6.392,6.221,6.221,0,0,1,5.5-4.954,10.287,10.287,0,0,1,5.025.371A6.144,6.144,0,0,1,51.722,37.1a12.8,12.8,0,0,1-.466,5.4,1.411,1.411,0,0,0,0,.811,5.654,5.654,0,0,1-.033,3.365A2.468,2.468,0,0,1,48.4,48.531a1.074,1.074,0,0,0-.9.27,4.65,4.65,0,0,1-6.447-.041.9.9,0,0,0-.737-.241A2.537,2.537,0,0,1,37.3,46.359a4.861,4.861,0,0,1-.138-.785c-.023-.279-.005-.561-.005-.931"
									transform="translate(-33.598 -29.506)"
									onClick={() => {
										setOpenMenu(false)
										setOpenContact(true)
										setStep(0)
									}}
								/>
								<path
									className="e-navbar-mobile"
									d="M36.353,25.2a9.713,9.713,0,0,1,7.53,3.313,7.287,7.287,0,0,1,1.654,3.415.743.743,0,0,0,.395.572,2.159,2.159,0,0,1,1.031,1.518,5.811,5.811,0,0,1-.341,3.562,2.2,2.2,0,0,1-2.169,1.389c-.226,0-.286-.052-.256-.3.182-1.543.334-3.088.388-4.644a6.622,6.622,0,0,0-3.926-6.618,8.922,8.922,0,0,0-9.957.92,6.3,6.3,0,0,0-2.515,5.342,45.419,45.419,0,0,0,.336,4.559.522.522,0,0,0,.22.4,13.972,13.972,0,0,0,5.656,2.7,1.177,1.177,0,0,0,.762-.124,2.55,2.55,0,0,1,1.925-.019.662.662,0,0,1,.355.821.685.685,0,0,1-.653.6c-.444.025-.89.009-1.336,0a.491.491,0,0,1-.443-.236c-.158-.316-.431-.339-.713-.392a14.078,14.078,0,0,1-5.859-2.764,1.472,1.472,0,0,0-.651-.308A2.049,2.049,0,0,1,26.2,37.68a5.672,5.672,0,0,1-.348-3.808,2.128,2.128,0,0,1,1.077-1.428.49.49,0,0,0,.27-.362c.864-3.812,3.413-5.76,6.928-6.629a7.686,7.686,0,0,1,1.02-.17c.414-.044.831-.058,1.2-.083"
									transform="translate(-25.675 -25.199)"
									onClick={() => {
										setOpenMenu(false)
										setOpenContact(true)
										setStep(0)
									}}
								/>
							</g>
						</g>
					</svg>
				</React.Fragment>
			)}
		</React.Fragment>
	)
}
