import useLayout from 'hooks/ancho.hook'
import useGeneral from 'hooks/general.hook'
import React from 'react'
import { useTranslation } from 'react-i18next'

interface ISlider {
	height: string
	index: number
	handleChangeSlide: (position: number) => void
}

export const Slider1: React.FC<ISlider> = ({ height, handleChangeSlide }) => {
	const { width } = useGeneral()
	const {t} = useTranslation()
	const { isSmallScreen } = useLayout()
	return (
		<div>
			<svg viewBox="0 0 1920 780" width='100%' height='100%' preserveAspectRatio='none'>
				<defs>
					<style>
						{
							'.a-pentagrama80,.g-pentagrama80,.h-pentagrama80{fill:none;}.b-pentagrama80,.e-pentagrama80,.q-pentagrama80{fill:#fff;}.b-pentagrama80{stroke:#707070;}.c-pentagrama80{fill:#e40032;}.d-pentagrama80,.n-pentagrama80,.o-pentagrama80,.p-pentagrama80{fill:#001f5f;}.f-pentagrama80{clip-path:url(#ag-pentagrama80);}.g-pentagrama80{stroke:#001f5f;}.g-pentagrama80,.h-pentagrama80{stroke-miterlimit:10;stroke-width:3.044px;}.h-pentagrama80{stroke:#e7002a;}.i-pentagrama80{clip-path:url(#ah-pentagrama80);}.j-pentagrama80{mix-blend-mode:multiply;isolation:isolate;}.k-pentagrama80{fill:#d6d6d6;}.l-pentagrama80{fill:#eeebeb;}.m-pentagrama80{clip-path:url(#ai-pentagrama80);}.n-pentagrama80{font-size:160px;}.n-pentagrama80,.q-pentagrama80{font-family:Kiona-Bold;}.n-pentagrama80,.p-pentagrama80,.q-pentagrama80{font-weight:700;}.o-pentagrama80{font-size:24px;font-family:Silka-Regular, Silka;}.p-pentagrama80{font-size:32px;font-family:Silka-Bold, Silka;}.q-pentagrama80{font-size:28px;}.r-pentagrama80{stroke:none;}.s-pentagrama80{filter:url(#aj-pentagrama80);}'
						}
					</style>
					<filter
						id="a-pentagrama80"
						x={1275.641}
						y={-2711.538}
						width={50.6}
						height={67.195}
						filterUnits="userSpaceOnUse">
						<feOffset dy={3} />
						<feGaussianBlur stdDeviation={3} result="b" />
						<feFlood floodOpacity={0.161} />
						<feComposite operator="in" in2="b" />
						<feComposite in="SourceGraphic" />
					</filter>
					<filter
						id="c-pentagrama80"
						x={1479.781}
						y={-2809.496}
						width={50.6}
						height={67.195}
						filterUnits="userSpaceOnUse">
						<feOffset dy={3} />
						<feGaussianBlur stdDeviation={3} result="d" />
						<feFlood floodOpacity={0.161} />
						<feComposite operator="in" in2="d" />
						<feComposite in="SourceGraphic" />
					</filter>
					<filter
						id="e-pentagrama80"
						x={1444.735}
						y={-2778.489}
						width={50.6}
						height={67.195}
						filterUnits="userSpaceOnUse">
						<feOffset dy={3} />
						<feGaussianBlur stdDeviation={3} result="f" />
						<feFlood floodOpacity={0.161} />
						<feComposite operator="in" in2="f" />
						<feComposite in="SourceGraphic" />
					</filter>
					<filter
						id="g-pentagrama80"
						x={1324.688}
						y={-2976.531}
						width={50.6}
						height={67.195}
						filterUnits="userSpaceOnUse">
						<feOffset dy={3} />
						<feGaussianBlur stdDeviation={3} result="h" />
						<feFlood floodOpacity={0.161} />
						<feComposite operator="in" in2="h" />
						<feComposite in="SourceGraphic" />
					</filter>
					<filter
						id="i-pentagrama80"
						x={1053.735}
						y={-2896.304}
						width={50.6}
						height={67.195}
						filterUnits="userSpaceOnUse">
						<feOffset dy={3} />
						<feGaussianBlur stdDeviation={3} result="j" />
						<feFlood floodOpacity={0.161} />
						<feComposite operator="in" in2="j" />
						<feComposite in="SourceGraphic" />
					</filter>
					<filter
						id="k-pentagrama80"
						x={803.781}
						y={-2939.304}
						width={50.6}
						height={67.195}
						filterUnits="userSpaceOnUse">
						<feOffset dy={3} />
						<feGaussianBlur stdDeviation={3} result="l" />
						<feFlood floodOpacity={0.161} />
						<feComposite operator="in" in2="l" />
						<feComposite in="SourceGraphic" />
					</filter>
					<filter
						id="m-pentagrama80"
						x={1430.688}
						y={-2942.531}
						width={50.6}
						height={67.195}
						filterUnits="userSpaceOnUse">
						<feOffset dy={3} />
						<feGaussianBlur stdDeviation={3} result="n" />
						<feFlood floodOpacity={0.161} />
						<feComposite operator="in" in2="n" />
						<feComposite in="SourceGraphic" />
					</filter>
					<filter
						id="o-pentagrama80"
						x={1282.165}
						y={-2942.531}
						width={50.6}
						height={67.195}
						filterUnits="userSpaceOnUse">
						<feOffset dy={3} />
						<feGaussianBlur stdDeviation={3} result="p" />
						<feFlood floodOpacity={0.161} />
						<feComposite operator="in" in2="p" />
						<feComposite in="SourceGraphic" />
					</filter>
					<filter
						id="q-pentagrama80"
						x={1263.735}
						y={-2868.517}
						width={50.6}
						height={67.195}
						filterUnits="userSpaceOnUse">
						<feOffset dy={3} />
						<feGaussianBlur stdDeviation={3} result="r" />
						<feFlood floodOpacity={0.161} />
						<feComposite operator="in" in2="r" />
						<feComposite in="SourceGraphic" />
					</filter>
					<filter
						id="s-pentagrama80"
						x={1257.641}
						y={-2642.732}
						width={50.6}
						height={67.195}
						filterUnits="userSpaceOnUse">
						<feOffset dy={3} />
						<feGaussianBlur stdDeviation={3} result="t" />
						<feFlood floodOpacity={0.161} />
						<feComposite operator="in" in2="t" />
						<feComposite in="SourceGraphic" />
					</filter>
					<filter
						id="u-pentagrama80"
						x={1379.781}
						y={-2388.517}
						width={50.6}
						height={67.195}
						filterUnits="userSpaceOnUse">
						<feOffset dy={3} />
						<feGaussianBlur stdDeviation={3} result="v" />
						<feFlood floodOpacity={0.161} />
						<feComposite operator="in" in2="v" />
						<feComposite in="SourceGraphic" />
					</filter>
					<filter
						id="w-pentagrama80"
						x={1430.305}
						y={-2457.517}
						width={50.6}
						height={67.195}
						filterUnits="userSpaceOnUse">
						<feOffset dy={3} />
						<feGaussianBlur stdDeviation={3} result="x" />
						<feFlood floodOpacity={0.161} />
						<feComposite operator="in" in2="x" />
						<feComposite in="SourceGraphic" />
					</filter>
					<filter
						id="y-pentagrama80"
						x={418.781}
						y={-2636.516}
						width={50.6}
						height={67.195}
						filterUnits="userSpaceOnUse">
						<feOffset dy={3} />
						<feGaussianBlur stdDeviation={3} result="z" />
						<feFlood floodOpacity={0.161} />
						<feComposite operator="in" in2="z" />
						<feComposite in="SourceGraphic" />
					</filter>
					<filter
						id="aa-pentagrama80"
						x={321.305}
						y={-2573.517}
						width={50.6}
						height={67.195}
						filterUnits="userSpaceOnUse">
						<feOffset dy={3} />
						<feGaussianBlur stdDeviation={3} result="ab" />
						<feFlood floodOpacity={0.161} />
						<feComposite operator="in" in2="ab" />
						<feComposite in="SourceGraphic" />
					</filter>
					<filter
						id="ac-pentagrama80"
						x={192.781}
						y={-2475.516}
						width={50.6}
						height={67.195}
						filterUnits="userSpaceOnUse">
						<feOffset dy={3} />
						<feGaussianBlur stdDeviation={3} result="ad" />
						<feFlood floodOpacity={0.161} />
						<feComposite operator="in" in2="ad" />
						<feComposite in="SourceGraphic" />
					</filter>
					<filter
						id="ae-pentagrama80"
						x={618.644}
						y={-5.335}
						width={1310.356}
						height={735.584}
						filterUnits="userSpaceOnUse">
						<feOffset dy={3} />
						<feGaussianBlur stdDeviation={3} result="af" />
						<feFlood floodOpacity={0.451} />
						<feComposite operator="in" in2="af" />
						<feComposite in="SourceGraphic" />
					</filter>
					<clipPath id="ag-pentagrama80">
						<rect
							className="a-pentagrama80"
							width={1602}
							height={1101.411}
							transform="translate(0 0)"
						/>
					</clipPath>
					<clipPath id="ah-pentagrama80">
						<rect
							className="d-pentagrama80"
							width={771.881}
							height={169.706}
						/>
					</clipPath>
					<clipPath id="ai-pentagrama80">
						<rect
							className="b-pentagrama80"
							width={695}
							height={344}
							transform="translate(0 20.534)"
						/>
					</clipPath>
					<filter
						id="aj-pentagrama80"
						x={1290}
						y={728.666}
						width={403}
						height={98.849}
						filterUnits="userSpaceOnUse">
						<feOffset dy={3} />
						<feGaussianBlur stdDeviation={3} result="ak" />
						<feFlood floodOpacity={0.4} />
						<feComposite operator="in" in2="ak" />
						<feComposite in="SourceGraphic" />
					</filter>
				</defs>
				<g className="b-pentagrama80" transform="translate(388 614.666)">
					<rect className="r-pentagrama80" width={834} height={56} />
					<rect
						className="a-pentagrama80"
						x={0.5}
						y={0.5}
						width={833}
						height={55}
					/>
				</g>
				<path
					className="e-pentagrama80"
					d="M0,0H1920V1082.626H0Z"
					transform="translate(0 23.957)"
				/>
				<g style={{ transform: 'translate(0px, -0.546px) scaleY(0.73)' }}>
					<g transform="translate(318 2)">
						<g className="f-pentagrama80" transform="translate(0 0)">
							<path
								className="g-pentagrama80"
								d="M1664.29,1052.676h-545c-94.884,0-180.462,74.855-216.964,189.771L735.314,1768.263"
								transform="translate(-30.7 -368.556)"
							/>
							<path
								className="g-pentagrama80"
								d="M1930.082,1066.872h663.213c95.617,0,181.857-74.855,218.641-189.771l168.3-525.816"
								transform="translate(-254.491 -492.18)"
							/>
							<path
								className="g-pentagrama80"
								d="M5034.848,1360.094h879.763c95.618,0,181.857-74.855,218.641-189.771l161.583-504.815"
								transform="translate(-1091.538 -451.821)"
							/>
							<path
								className="g-pentagrama80"
								d="M7481.626,482.59H6818.412c-95.616,0-181.856,74.855-218.642,189.771l-160.557,501.665"
								transform="translate(-1395.524 -455.523)"
							/>
							<path
								className="h-pentagrama80"
								d="M797.214,1326.2h549.207c95.617,0,181.857-74.855,218.641-189.771l227.487-710.843"
								transform="translate(-71.663 -456.677)"
							/>
							<path
								className="h-pentagrama80"
								d="M784.281,1308.334H388.349c-95.617,0-181.857,74.855-218.641,189.771L1.4,2023.921"
								transform="translate(100.595 -438.81)"
							/>
							<path
								className="h-pentagrama80"
								d="M4363.806,1022.763H3995.887c-95.616,0-181.856-74.855-218.641-189.771L3549.76,122.15"
								transform="translate(-770.082 -462.818)"
							/>
							<path
								className="h-pentagrama80"
								d="M4184.911,1004.9h395.932c95.617,0,181.857,74.855,218.641,189.77l168.3,525.816"
								transform="translate(-907.564 -444.952)"
							/>
							<path
								className="h-pentagrama80"
								d="M7617.4,1288.515H7221.469c-95.617,0-181.856,74.855-218.64,189.771l-168.3,525.816"
								transform="translate(-1481.091 -439.212)"
							/>
							<path
								className="h-pentagrama80"
								d="M7619.443,716.176H7223.512c-95.617,0-181.857-74.855-218.642-189.771L6836.566.589"
								transform="translate(-1481.533 -465.278)"
							/>
						</g>
					</g>
					<g className="i-pentagrama80">
						<path
							className="d-pentagrama80"
							d="M503.484,339.413H0V0H771.881l-98.94,230.346c-28.355,66.013-95.247,109.067-169.457,109.067"
							transform="translate(0 -169.706)"
						/>
					</g>
				</g>
				<g className="m-pentagrama80" transform="translate(1038 -20.534)">
					<path
						className="c-pentagrama80"
						d="M374.787,404.52l88.858,120.951a3.369,3.369,0,0,1,.631,1.944l.5,94.689a3.318,3.318,0,0,1-3.294,3.319l-13.213.063a3.3,3.3,0,0,1-3.319-3.281l-.177-33.582-47.767.24.177,33.595a3.3,3.3,0,0,1-3.294,3.319l-13.213.063a3.28,3.28,0,0,1-3.307-3.281l-.454-86.991a3.291,3.291,0,0,1,3.281-3.319l13.213-.076a3.318,3.318,0,0,1,3.319,3.294l.177,33.582,47.767-.24-.189-35.929-80.68-109.846-68.641.353L215.634,534.078l.177,35.917,47.78-.252-.177-33.582a3.291,3.291,0,0,1,3.281-3.319l13.213-.076a3.3,3.3,0,0,1,3.319,3.294l.454,86.991a3.307,3.307,0,0,1-3.281,3.319l-13.213.063a3.3,3.3,0,0,1-3.319-3.281l-.177-33.595-47.767.252L216.1,623.4a3.318,3.318,0,0,1-3.294,3.319l-13.213.063a3.307,3.307,0,0,1-3.319-3.281l-.492-94.689a3.3,3.3,0,0,1,.618-1.944l87.584-121.885a3.336,3.336,0,0,1,2.663-1.376l85.463-.442a3.283,3.283,0,0,1,2.676,1.35m-137.61-98.891L94.2,260.007a3.2,3.2,0,0,0-2.032.013L2.266,289.74a3.306,3.306,0,0,0-2.095,4.177L4.31,306.462a3.3,3.3,0,0,0,4.177,2.095l31.878-10.538,15.005,45.357L23.48,353.913a3.306,3.306,0,0,0-2.095,4.177l4.139,12.544A3.316,3.316,0,0,0,29.7,372.73l82.6-27.31a3.3,3.3,0,0,0,2.095-4.177L110.256,328.7a3.316,3.316,0,0,0-4.177-2.1L74.188,337.154,59.2,291.8l34.1-11.282,129.848,41.444,10.606,32.079,10.936,33.078L165.154,497.808l-34.112,11.27-14.993-45.357,31.891-10.538a3.306,3.306,0,0,0,2.095-4.177l-4.152-12.544a3.3,3.3,0,0,0-4.165-2.095l-82.6,27.31a3.306,3.306,0,0,0-2.095,4.177L61.164,478.4a3.306,3.306,0,0,0,4.177,2.095l31.891-10.55L112.238,515.3,80.347,525.85a3.3,3.3,0,0,0-2.108,4.177l4.152,12.544a3.306,3.306,0,0,0,4.177,2.095l89.893-29.733a3.307,3.307,0,0,0,1.653-1.211l87.571-121.873a3.272,3.272,0,0,0,.454-2.966l-26.83-81.135a3.309,3.309,0,0,0-2.133-2.12m176.3-22.338,142.494-47.124a3.275,3.275,0,0,0,1.641-1.211l55.263-76.894a3.308,3.308,0,0,0-.757-4.606l-10.727-7.711a3.3,3.3,0,0,0-4.607.757l-19.612,27.272L538.381,145.9l19.6-27.272a3.294,3.294,0,0,0-.745-4.606l-10.727-7.711a3.284,3.284,0,0,0-4.606.757L491.131,177.7a3.309,3.309,0,0,0,.745,4.619l10.74,7.711a3.308,3.308,0,0,0,4.606-.757L526.821,162l38.794,27.878-20.962,29.165L415.247,261.837,359.5,221.781l-.707-136.3,20.962-29.165L418.553,84.2l-19.6,27.272a3.3,3.3,0,0,0,.757,4.606l10.727,7.711a3.3,3.3,0,0,0,4.606-.757l50.771-70.647a3.3,3.3,0,0,0-.757-4.606l-10.727-7.711a3.308,3.308,0,0,0-4.606.757L430.113,68.093,391.331,40.228l19.6-27.285a3.308,3.308,0,0,0-.757-4.606L399.446.626a3.283,3.283,0,0,0-4.606.757L339.576,78.277a3.356,3.356,0,0,0-.618,1.943l.783,150.078a3.283,3.283,0,0,0,1.376,2.663l69.4,49.875a3.31,3.31,0,0,0,2.966.454m239.934,19.788,4.013-12.595a3.306,3.306,0,0,0-2.146-4.152l-90.2-28.786a3.327,3.327,0,0,0-2.044.013L420.547,304.682a3.263,3.263,0,0,0-2.107,2.133l-25.985,81.412a3.286,3.286,0,0,0,.48,2.953L481.78,512.144a3.369,3.369,0,0,0,1.666,1.186l90.2,28.8a3.3,3.3,0,0,0,4.152-2.146l4.013-12.582a3.279,3.279,0,0,0-2.133-4.152l-32-10.222L562.2,467.52l32,10.21a3.309,3.309,0,0,0,4.152-2.133L602.365,463a3.307,3.307,0,0,0-2.146-4.152L517.343,432.4a3.288,3.288,0,0,0-4.139,2.145l-4.026,12.595a3.288,3.288,0,0,0,2.145,4.139L543.316,461.5,528.8,507.008l-34.226-10.916L413.884,386.233l20.874-65.385,129.407-42.795,34.213,10.929-14.513,45.508-32-10.222a3.321,3.321,0,0,0-4.152,2.145l-4.013,12.595a3.293,3.293,0,0,0,2.145,4.139L628.7,369.6a3.3,3.3,0,0,0,4.152-2.133l4.026-12.595a3.316,3.316,0,0,0-2.145-4.152l-32-10.21L617.257,295l32,10.222a3.321,3.321,0,0,0,4.152-2.145M247.235,283.569l68.8-50.682a3.324,3.324,0,0,0,1.35-2.688l-1-150.078a3.256,3.256,0,0,0-.644-1.931L259.59,1.951a3.293,3.293,0,0,0-4.619-.707L244.332,9.081a3.3,3.3,0,0,0-.694,4.619l19.927,27.045L225.1,69.077,205.172,42.032a3.3,3.3,0,0,0-4.619-.694l-10.639,7.837a3.3,3.3,0,0,0-.694,4.619l51.591,70.042a3.3,3.3,0,0,0,4.619.694l10.639-7.837a3.306,3.306,0,0,0,.707-4.619L236.849,85.029,275.315,56.7l21.3,28.925.9,136.3-55.263,40.7-129.9-41.255-21.3-28.925,38.466-28.332,19.915,27.045a3.305,3.305,0,0,0,4.619.694l10.639-7.837a3.315,3.315,0,0,0,.707-4.619l-51.6-70.029a3.3,3.3,0,0,0-4.619-.707l-10.639,7.837a3.3,3.3,0,0,0-.694,4.619l19.915,27.045L79.3,176.487,59.372,149.442a3.307,3.307,0,0,0-4.619-.707l-10.639,7.837a3.3,3.3,0,0,0-.694,4.619L99.58,237.43a3.239,3.239,0,0,0,1.653,1.186l143.036,45.445a3.316,3.316,0,0,0,2.966-.492"
						transform="translate(-107 57.829) rotate(-51)"
					/>
				</g>
				<g style={{ transform: 'translate(0px, -220px) scale(0.95)' }}>
				<text
					className="n-pentagrama80"
					transform="translate(269 581.806)">
					<tspan x={0} y={0}>
						{t('Servicio')}
					</tspan>
				</text>
				<text
					className="o-pentagrama80"
					transform="translate(281 632.515)">
					<tspan x={0} y={23}>
						{
							t('El servicio es uno de los pilares del Grupo Amarey, una misión')
						}
					</tspan>
					<tspan x={0} y={51}>
						{
							t('que se ha convertido en la vocación de la compañía para')
						}
					</tspan>
					<tspan x={0} y={79}>
						{
							t('cumplir el compromiso de ser un actor determinante en la')
						}
					</tspan>
					<tspan x={0} y={107}>
						{t('labor de cuidar y salvar vidas.')}
					</tspan>
				</text>
				<text
					className="p-pentagrama80"
					transform="translate(281 745.515)">
					<tspan x={0} y={30} />
					<tspan x={0} y={62}>
						{t('Grupo Amarey, la cadena que salva vidas.')}
					</tspan>
				</text>

				<text
					className="n-pentagrama80"
					transform="translate(269 581.806)">
					<tspan x={0} y={0}>
						{t('Servicio')}
					</tspan>
				</text>
				<text
					className="o-pentagrama80"
					transform="translate(281 632.515)">
					<tspan x={0} y={23}>
						{
							t('El servicio es uno de los pilares del Grupo Amarey, una misión')
						}
					</tspan>
					<tspan x={0} y={51}>
						{
							t('que se ha convertido en la vocación de la compañía para')
						}
					</tspan>
					<tspan x={0} y={79}>
						{
							t('cumplir el compromiso de ser un actor determinante en la')
						}
					</tspan>
					<tspan x={0} y={107}>
						{t('labor de cuidar y salvar vidas.')}
					</tspan>
				</text>
				<text
					className="p-pentagrama80"
					transform="translate(281 745.515)">
					<tspan x={0} y={30} />
					<tspan x={0} y={62}>
						{t('Grupo Amarey, la cadena que salva vidas.')}
					</tspan>
				</text>
				</g>
				<g transform="translate(1299 530.666)" onClick={() => handleChangeSlide(1)}>
					<g
						className="s-pentagrama80"
						transform="matrix(1, 0, 0, 1, -1299, -734.67)" onClick={() => handleChangeSlide(1)}>
						<path
							className="d-pentagrama80"
							d="M385,0H78.968C47.139,0,18.557,23.591,6.933,59.456L0,80.849H303.493c33.911,0,64.274-25.435,76.22-63.849Z"
							transform="translate(1299 734.67)"
							onClick={() => handleChangeSlide(1)}
						/>
					</g>
					<text
						className="q-pentagrama80"
						transform="translate(71 51.424)"
						onClick={() => handleChangeSlide(1)}>
						<tspan x={0} y={0} onClick={() => handleChangeSlide(1)}>
							{t('Conoce Más')}
						</tspan>
					</text>
					<path
						className="e-pentagrama80"
						d="M45.263,0V24.412L66.419,12.2,56.314,6.375Z"
						transform="translate(235.737 28.219)"
						onClick={() => handleChangeSlide(1)}
					/>
				</g>
			</svg>
		</div>
	)
}
