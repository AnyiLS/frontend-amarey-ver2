import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import Swal from 'sweetalert2'

const Formulario: React.FC<{ onClose: () => void }> = ({ onClose }) => {
	const { handleSubmit, formState: {isValid}, register, reset } = useForm({ mode: 'onChange' })
	const [accept, setAccept] = React.useState<boolean>(false)

	const {t} = useTranslation()

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

					onClose()
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
		document.body.style.overflow = 'hidden'

		return () => {
			document.body.style.overflow = 'auto'
		}
	}, [])

	return (
		<div>
			<svg
				viewBox="0 0 1920 1080"
				className="fixed top-0 left-0 z-[1] bg-[#ffffffa1]">
				<defs>
					<style>
						{
							'.shadow-input{box-shadow: inset 6px 6px 6px -4px rgba(0,0,0,0.34); padding-left: 10px; padding-right: 10px;}.shadow-input:focus{outline: none;}.a-formu,.d-formu,.e-formu,.i-formu,.o-formu{fill:#fff;}.a-formu{opacity:0.5;}.b-formu{fill:#d9dae4;}.c-formu{fill:url(#a-formu);}.d-formu{opacity:0.36;}.e-formu{font-size:34px;font-family:Helvetica-Bold, Helvetica;}.e-formu,.f-formu,.o-formu{font-weight:700;}.f-formu,.j-formu{fill:#001f5f;}.f-formu{font-size:32px;font-family:Silka-Bold, Silka;}.g-formu,.h-formu{fill:#182856;}.g-formu{font-size:18px;}.g-formu,.h-formu,.k-formu{font-family:Silka-Regular, Silka;}.h-formu,.k-formu{font-size:12px;}.k-formu{fill:#e40032;}.l-formu{text-decoration:underline;}.m-formu{font-size:10px;}.n-formu,.q-formu{fill:none;}.n-formu{stroke:#001f5f;}.o-formu{font-size:16px;font-family:Kiona-Bold, Kiona;}.p-formu{stroke:none;}.r-formu{filter:url(#aa-formu);}.s-formu{filter:url(#y-formu);}.t-formu{filter:url(#v-formu);}.u-formu{filter:url(#s-formu);}.v-formu{filter:url(#p-formu);}.w-formu{filter:url(#m-formu);}.x-formu{filter:url(#j-formu);}.y-formu{filter:url(#g-formu);}.z-formu{filter:url(#d-formu);}.a-formua{filter:url(#b-formu);}'
						}
					</style>
					<pattern
						id="a-formu"
						width={1}
						height={1}
						patternTransform="matrix(-1, 0, 0, 1, 2113.552, 0)"
						viewBox="282.186 0 235 757.906">
						<image
							preserveAspectRatio="xMidYMid slice"
							width={1136.776}
							height={757.906}
							xlinkHref="/images/contactoformu.webp"
						/>
					</pattern>
					<filter
						id="b-formu"
						x={1401.184}
						y={141.136}
						width={57.64}
						height={57.64}
						filterUnits="userSpaceOnUse">
						<feOffset dy={1} />
						<feGaussianBlur stdDeviation={0.5} result="c-formu" />
						<feFlood floodOpacity={0.4} />
						<feComposite operator="in" in2="c-formu" />
						<feComposite in="SourceGraphic" />
					</filter>
					<filter
						id="d-formu"
						x={741.92}
						y={278.871}
						width={597.229}
						height={44.474}
						filterUnits="userSpaceOnUse">
						<feOffset dy={3} />
						<feGaussianBlur stdDeviation={3} result="e-formu" />
						<feFlood floodOpacity={0.341} result="f-formu" />
						<feComposite
							operator="out"
							in="SourceGraphic"
							in2="e-formu"
						/>
						<feComposite operator="in" in="f-formu" />
						<feComposite operator="in" in2="SourceGraphic" />
					</filter>
					<filter
						id="g-formu"
						x={741.92}
						y={360.196}
						width={597.229}
						height={44.474}
						filterUnits="userSpaceOnUse">
						<feOffset dy={3} />
						<feGaussianBlur stdDeviation={3} result="h-formu" />
						<feFlood floodOpacity={0.341} result="i-formu" />
						<feComposite
							operator="out"
							in="SourceGraphic"
							in2="h-formu"
						/>
						<feComposite operator="in" in="i-formu" />
						<feComposite operator="in" in2="SourceGraphic" />
					</filter>
					<filter
						id="j-formu"
						x={741.92}
						y={441.521}
						width={597.229}
						height={44.474}
						filterUnits="userSpaceOnUse">
						<feOffset dy={3} />
						<feGaussianBlur stdDeviation={3} result="k-formu" />
						<feFlood floodOpacity={0.341} result="l-formu" />
						<feComposite
							operator="out"
							in="SourceGraphic"
							in2="k-formu"
						/>
						<feComposite operator="in" in="l-formu" />
						<feComposite operator="in" in2="SourceGraphic" />
					</filter>
					<filter
						id="m-formu"
						x={741.92}
						y={522.846}
						width={597.229}
						height={44.474}
						filterUnits="userSpaceOnUse">
						<feOffset dy={3} />
						<feGaussianBlur stdDeviation={3} result="n-formu" />
						<feFlood floodOpacity={0.341} result="o-formu" />
						<feComposite
							operator="out"
							in="SourceGraphic"
							in2="n-formu"
						/>
						<feComposite operator="in" in="o-formu" />
						<feComposite operator="in" in2="SourceGraphic" />
					</filter>
					<filter
						id="p-formu"
						x={741.92}
						y={604.17}
						width={288.449}
						height={44.474}
						filterUnits="userSpaceOnUse">
						<feOffset dy={3} />
						<feGaussianBlur stdDeviation={3} result="q-formu" />
						<feFlood floodOpacity={0.341} result="r-formu" />
						<feComposite
							operator="out"
							in="SourceGraphic"
							in2="q-formu"
						/>
						<feComposite operator="in" in="r-formu" />
						<feComposite operator="in" in2="SourceGraphic" />
					</filter>
					<filter
						id="s-formu"
						x={1050.7}
						y={604.17}
						width={288.449}
						height={44.474}
						filterUnits="userSpaceOnUse">
						<feOffset dy={3} />
						<feGaussianBlur stdDeviation={3} result="t-formu" />
						<feFlood floodOpacity={0.341} result="u-formu" />
						<feComposite
							operator="out"
							in="SourceGraphic"
							in2="t-formu"
						/>
						<feComposite operator="in" in="u-formu" />
						<feComposite operator="in" in2="SourceGraphic" />
					</filter>
					<filter
						id="v-formu"
						x={741.92}
						y={685.495}
						width={597.229}
						height={99.115}
						filterUnits="userSpaceOnUse">
						<feOffset dy={3} />
						<feGaussianBlur stdDeviation={3} result="w-formu" />
						<feFlood floodOpacity={0.341} result="x-formu" />
						<feComposite
							operator="out"
							in="SourceGraphic"
							in2="w-formu"
						/>
						<feComposite operator="in" in="x-formu" />
						<feComposite operator="in" in2="SourceGraphic" />
					</filter>
					<filter
						id="y-formu"
						x={1317.442}
						y={692.202}
						width={23.083}
						height={42.143}
						filterUnits="userSpaceOnUse">
						<feOffset dy={3} />
						<feGaussianBlur stdDeviation={3} result="z-formu" />
						<feFlood floodOpacity={0.161} />
						<feComposite operator="in" in2="z-formu" />
						<feComposite in="SourceGraphic" />
					</filter>
					<filter
						id="aa-formu"
						x={910.105}
						y={862.158}
						width={260.859}
						height={70.608}
						filterUnits="userSpaceOnUse">
						<feOffset dy={3} />
						<feGaussianBlur stdDeviation={3} result="ab" />
						<feFlood floodOpacity={0.4} />
						<feComposite operator="in" in2="ab" />
						<feComposite in="SourceGraphic" />
					</filter>
				</defs>
				<g transform="translate(-5936.927 -104.083)">
					<g transform="translate(6379.139 138.262)">
						<path
							className="b-formu"
							d="M992.019,0H43.556C19.5,0,0,23.776,0,53.113V778.531c0,29.323,19.5,53.111,43.556,53.111H873.377c38.737,0,73.656-47.2,88.451-119.551L1035.165,60.33C1038.753,28.422,1018.42,0,992.019,0"
						/>
						<path
							className="c-formu"
							d="M235,120.191V757.906H47.383C21.217,757.906,0,734.938,0,706.619V6.079A53.386,53.386,0,0,1,.337,0L111.557,23.969C186.268,40.075,235,78.05,235,120.191"
							transform="translate(0 73.736)"
						/>
					</g>
					<g
						transform="translate(7339.611 155.719)"
						onClick={onClose}>
						<g
							className="aa-formu"
							transform="matrix(1, 0, 0, 1, -1402.68, -141.64)">
							<circle
								className="d-formu"
								cx={27.32}
								cy={27.32}
								r={27.32}
								transform="translate(1402.68 141.64)"
							/>
						</g>
						<text
							className="e-formu"
							transform="translate(15.248 39.354)">
							<tspan x={0} y={0}>
								{'x'}
							</tspan>
						</text>
					</g>
					<text
						className="f-formu"
						transform="translate(6702.991 183.674)">
						<tspan x={61.464} y={30}>
							{t('Formulario de contacto')}
						</tspan>
					</text>
					<text
						className="g-formu"
						transform="translate(6678.848 270.458)">
						<tspan x={0} y={17}>
							{t('Nombre completo ')}
						</tspan>
					</text>
					<text
						className="g-formu"
						transform="translate(6678.848 351.782)">
						<tspan x={0} y={17}>
							{t('Email ')}
						</tspan>
					</text>
					<text
						className="g-formu"
						transform="translate(6678.848 433.107)">
						<tspan x={0} y={17}>
							{t('Instituci\xF3n ')}
						</tspan>
					</text>
					<text
						className="g-formu"
						transform="translate(6678.848 514.432)">
						<tspan x={0} y={17}>
							{t('Asunto ')}
						</tspan>
					</text>
					<text
						className="g-formu"
						transform="translate(6678.848 595.757)">
						<tspan x={0} y={17}>
							{t('Pa\xEDs ')}
						</tspan>
					</text>
					<text
						className="g-formu"
						transform="translate(6987.627 595.757)">
						<tspan x={0} y={17}>
							{t('Tel\xE9fono ')}
						</tspan>
					</text>
					<text
						className="g-formu"
						transform="translate(6678.848 677.082)">
						<tspan x={0} y={17}>
							{t('Mensaje ')}
						</tspan>
					</text>
					<text
						className="h-formu"
						transform="translate(6719.51 811.4)">
						<tspan x={0} y={11}>
							{
								t('Al enviar este formulario, usted reconoce haber le\xEDdo y estar de acuerdo con nuestra pol\xEDtica ')
							}
						</tspan>
						<tspan x={0} y={26}>
							{t('de ')}
						</tspan>
					</text>
					<g data-type="innerShadowGroup">
						<foreignObject
							x={0}
							y={0}
							transform="translate(6678.848 292.954)"
							width={602}
							height={47}>
							<input className="w-full h-full rounded-[20px] shadow-input" {...register('nombre_completo', {required: {message: 'El campo es requerido', value: true}})} />
						</foreignObject>
					</g>
					<g data-type="innerShadowGroup">
						<foreignObject
							x={0}
							y={0}
							transform="translate(6678.848 374.279)"
							width={602}
							height={47}>
							<input className="w-full h-full rounded-[20px] shadow-input" {...register('email', {required: {message: 'El campo es requerido', value: true}})} />
						</foreignObject>
					</g>
					<g data-type="innerShadowGroup">
						<foreignObject
							x={0}
							y={0}
							transform="translate(6678.848 455.604)"
							width={602}
							height={47}>
							<input className="w-full h-full rounded-[20px] shadow-input" {...register('instituto', {required: {message: 'El campo es requerido', value: true}})}/>
						</foreignObject>
					</g>
					<g data-type="innerShadowGroup">
						<foreignObject
							x={0}
							y={0}
							transform="translate(6678.848 536.929)"
							width={602}
							height={47}>
							<input className="w-full h-full rounded-[20px] shadow-input" {...register('asunto', {required: {message: 'El campo es requerido', value: true}})}/>
						</foreignObject>
					</g>
					<g data-type="innerShadowGroup">
						<foreignObject
							x={0}
							y={0}
							transform="translate(6678.848 618.254)"
							width={290}
							height={47}>
							<input className="w-full h-full rounded-[20px] shadow-input" {...register('pais', {required: {message: 'El campo es requerido', value: true}})} />
						</foreignObject>
					</g>
					<g data-type="innerShadowGroup">
						<foreignObject
							x={0}
							y={0}
							transform="translate(6987.627 618.254)"
							width={290}
							height={47}>
							<input className="w-full h-full rounded-[20px] shadow-input"  {...register('telefono', {required: {message: 'El campo es requerido', value: true}})}/>
						</foreignObject>
					</g>
					<g>
						<foreignObject
							x={0}
							y={0}
							transform="translate(6678.848 699.578)"
							width={602}
							height={100}>
							<textarea className="w-full h-full rounded-[20px] shadow-input" {...register('mensaje', {required: {message: 'El campo es requerido', value: true}})} />
						</foreignObject>
					</g>
					<g transform="translate(6697.45 826.919)" style={{ cursor: 'pointer' }} onClick={() => window.open('https://juegoseml.co/pdf/GRC-F-G-004-V5_FORMATO%20AUTORIZACIO%CC%81N%20DE%20TRATAMIENTO%20DE%20DATOS%20PERSONALES_.pdf', '_blank')}>
						<text className="k-formu">
							<tspan className="l-formu" x={37.826} y={11}>
								{t('Tratamiento de datos personales.')}
							</tspan>
							<tspan className="m-formu" y={11} />
						</text>
					</g>
					<g transform="translate(6694.096 808.859)">
						<g className="n-formu">
							<rect
								className="p-formu"
								width={19.06}
								height={19.06}
							/>
							<rect
								className="q-formu"
								x={0.5}
								y={0.5}
								width={18.06}
								height={18.06}
							/>
						</g>
					</g>
					<foreignObject transform='translate(6690.033 817.241)' x={0} y={0} width={16} height={16}>
							{
								!accept ? (
									<div className='w-full h-full border-solid border-[1px] border-[#001F5F]' onClick={() => setAccept(true)}></div>
								) : (
									<div className='w-full h-full bg-[#001F5F] font-bold text-white text-[14px] flex justify-center items-center' onClick={() => setAccept(false)}>X</div>
								)
							}
						</foreignObject>
					<g transform="translate(6856.033 882.241)" onClick={handleSubmit(handleSentContact)}>
						<g
							className="r-formu cursor-pointer"
							transform="matrix(1, 0, 0, 1, -919.11, -868.16)">
							<path
								className="j-formu cursor-pointer"
								d="M242.859,0H49.813C29.735,0,11.706,15.351,4.373,38.688L0,52.608H191.444c21.391,0,40.544-16.55,48.08-41.546Z"
								transform="translate(919.11 868.16)"
							/>
						</g>
						<text
							className="o-formu cursor-pointer"
							transform="translate(85.215 34.232)">
							<tspan x={0} y={0}>
							{t('enviar')}
							</tspan>
						</text>
					</g>
				</g>
			</svg>
		</div>
	)
}

export default Formulario
