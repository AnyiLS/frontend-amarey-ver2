import React from 'react'
import './Slide3.css'
import './newStyles3.css'
import BluePoint from './BluePoint'
import RedPoint from './RedPoint'
import { useTranslation } from 'react-i18next'

interface ISlider {
	height: string
	index: number
	handleChangeSlide: (position: number) => void
}

export const Slider3: React.FC<ISlider> = () => {
	const [selectedImage, setSelectedImage] = React.useState<null | number>(
		null
	)
	const { t } = useTranslation()
	return (
		<svg
			viewBox="0 0 1920 780"
			preserveAspectRatio="none"
			className="h-full"
			width={window.screen.width}>
			<defs>
				<style>
					{
						'.a-item-1821,.ab-item-1821,.ae-item-1821,.af-item-1821,.ag-item-1821,.ai-item-1821,.aj-item-1821,.c-item-1821,.f-item-1821,.g-item-1821,.h-item-1821,.i-item-1821,.j-item-1821,.k-item-1821,.l-item-1821,.m-item-1821,.n-item-1821,.o-item-1821,.p-item-1821,.q-item-1821,.r-item-1821,.s-item-1821,.t-item-1821{fill:none;}.b-item-1821,.u-item-1821{fill:#fff;}.b-item-1821{stroke:#707070;}.c-item-1821{filter:url(#a-item-1821);}.d-item-1821{fill:#aca6a6;}.e-item-1821{fill:#afafaf;}.f-item-1821{filter:url(#c-item-1821);}.g-item-1821{filter:url(#e-item-1821);}.h-item-1821{filter:url(#g-item-1821);}.i-item-1821{filter:url(#i-item-1821);}.j-item-1821{filter:url(#k-item-1821);}.k-item-1821{filter:url(#m-item-1821);}.l-item-1821{filter:url(#o-item-1821);}.m-item-1821{filter:url(#q-item-1821);}.n-item-1821{filter:url(#s-item-1821);}.o-item-1821{filter:url(#u-item-1821);}.p-item-1821{filter:url(#w-item-1821);}.q-item-1821{filter:url(#y-item-1821);}.r-item-1821{filter:url(#aa-item-1821);}.s-item-1821{filter:url(#ac-item-1821);}.t-item-1821{filter:url(#ae-item-1821);}.v-item-1821{clip-path:url(#ag-item-1821);}.w-item-1821{fill:#e7002a;stroke:#e40032;}.ac-item-1821,.ak-item-1821,.bw-item-1821,.x-item-1821{fill:#001f5f;}.ab-item-1821,.ae-item-1821,.af-item-1821,.ag-item-1821,.ai-item-1821,.x-item-1821{stroke:#001f5f;}.y-item-1821{clip-path:url(#ah-item-1821);}.z-item-1821{fill:#f2f2f2;}.aa-item-1821{fill:#c5dbf7;}.ab-item-1821,.af-item-1821{stroke-miterlimit:3.864;}.ab-item-1821{stroke-width:0.891px;}.ad-item-1821{fill:#4899d5;}.ae-item-1821{stroke-linecap:round;stroke-linejoin:round;}.ae-item-1821,.ag-item-1821{stroke-width:1.169px;}.af-item-1821{stroke-width:0.292px;}.ag-item-1821,.ai-item-1821,.aj-item-1821{stroke-miterlimit:10;}.ah-item-1821{clip-path:url(#ai-item-1821);}.ai-item-1821,.aj-item-1821{stroke-width:3.044px;}.aj-item-1821{stroke:#e7002a;}.ak-item-1821{font-size:70px;}.ak-item-1821,.bt-item-1821,.bv-item-1821,.bw-item-1821{font-family:Silka-SemiBold, Silka;font-weight:600;}.al-item-1821{clip-path:url(#aj-item-1821);}.am-item-1821,.bv-item-1821{fill:#e40032;}.an-item-1821,.ay-item-1821{mix-blend-mode:multiply;}.an-item-1821,.at-item-1821,.ay-item-1821,.bj-item-1821,.bl-item-1821,.bp-item-1821{isolation:isolate;}.ao-item-1821{fill:#eeebeb;}.ap-item-1821{fill:#d6d6d6;}.aq-item-1821{clip-path:url(#ak-item-1821);}.ar-item-1821{clip-path:url(#al-item-1821);}.as-item-1821{fill:#9d9d9e;}.at-item-1821{opacity:0.3;}.at-item-1821,.bj-item-1821,.bl-item-1821,.bp-item-1821{mix-blend-mode:screen;}.au-item-1821{clip-path:url(#an-item-1821);}.av-item-1821{clip-path:url(#ao-item-1821);}.aw-item-1821{fill:url(#ap-item-1821);}.ax-item-1821{fill:#787878;}.ay-item-1821,.bj-item-1821{opacity:0.2;}.az-item-1821{clip-path:url(#aq-item-1821);}.ba-item-1821{clip-path:url(#ar-item-1821);}.bb-item-1821{clip-path:url(#as-item-1821);}.bc-item-1821{clip-path:url(#at-item-1821);}.bd-item-1821{fill:url(#au-item-1821);}.be-item-1821{clip-path:url(#av-item-1821);}.bf-item-1821{clip-path:url(#aw-item-1821);}.bg-item-1821{clip-path:url(#ax-item-1821);}.bh-item-1821{clip-path:url(#ay-item-1821);}.bi-item-1821{clip-path:url(#az-item-1821);}.bk-item-1821{clip-path:url(#ba-item-1821);}.bl-item-1821{opacity:0.1;}.bm-item-1821{clip-path:url(#bb-item-1821);}.bn-item-1821{clip-path:url(#bc-item-1821);}.bo-item-1821{fill:url(#bd-item-1821);}.bp-item-1821{opacity:0.4;}.bq-item-1821{clip-path:url(#be-item-1821);}.br-item-1821{clip-path:url(#bf-item-1821);}.bs-item-1821{fill:#e81d2c;}.bt-item-1821,.bu-item-1821{fill:#182856;}.bt-item-1821,.bu-item-1821,.bv-item-1821{font-size:24px;}.bu-item-1821{font-family:Silka-Regular, Silka;}.bw-item-1821{font-size:32px;}.bx-item-1821{clip-path:url(#pe-item-1821);}.by-item-1821{clip-path:url(#pf-item-1821);}.bz-item-1821{clip-path:url(#ph-item-1821);}.ca-item-1821{clip-path:url(#pi-item-1821);}.cb-item-1821{clip-path:url(#pk-item-1821);}.cc-item-1821{clip-path:url(#pl-item-1821);}.cd-item-1821{fill:url(#pm-item-1821);}.ce-item-1821{clip-path:url(#pn-item-1821);}.cf-item-1821{clip-path:url(#po-item-1821);}.cg-item-1821{clip-path:url(#pq-item-1821);}.ch-item-1821{clip-path:url(#pr-item-1821);}.ci-item-1821{fill:url(#ps-item-1821);}.cj-item-1821{clip-path:url(#pt-item-1821);}.ck-item-1821{clip-path:url(#pu-item-1821);}.cl-item-1821{fill:url(#pv-item-1821);}.cm-item-1821{clip-path:url(#py-item-1821);}.cn-item-1821{clip-path:url(#pz-item-1821);}.co-item-1821{clip-path:url(#qb-item-1821);}.cp-item-1821{clip-path:url(#qc-item-1821);}.cq-item-1821{filter:url(#pc-item-1821);}.cr-item-1821{filter:url(#oe-item-1821);}.cs-item-1821{filter:url(#ng-item-1821);}.ct-item-1821{filter:url(#mi-item-1821);}.cu-item-1821{filter:url(#lk-item-1821);}.cv-item-1821{filter:url(#km-item-1821);}.cw-item-1821{filter:url(#jo-item-1821);}.cx-item-1821{filter:url(#iq-item-1821);}.cy-item-1821{filter:url(#hs-item-1821);}.cz-item-1821{filter:url(#gu-item-1821);}.da-item-1821{filter:url(#fw-item-1821);}.db-item-1821{filter:url(#ey-item-1821);}.dc-item-1821{filter:url(#ea-item-1821);}.dd-item-1821{filter:url(#dc-item-1821);}.de-item-1821{filter:url(#ce-item-1821);}.df-item-1821{filter:url(#bg-item-1821);}'
					}
				</style>
				<filter
					id="a-item-1821"
					x={1295.781}
					y={411.472}
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
					id="c-item-1821"
					x={1481.735}
					y={288.533}
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
					id="e-item-1821"
					x={1449.735}
					y={339.54}
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
					id="g-item-1821"
					x={1342.735}
					y={118.483}
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
					id="i-item-1821"
					x={1053.735}
					y={237.483}
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
					id="k-item-1821"
					x={803.781}
					y={194.483}
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
					id="m-item-1821"
					x={1430.735}
					y={163.498}
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
					id="o-item-1821"
					x={1310.735}
					y={151.504}
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
					id="q-item-1821"
					x={1281.688}
					y={231.519}
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
					id="s-item-1821"
					x={1385.781}
					y={483.504}
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
					id="u-item-1821"
					x={1292.781}
					y={473.504}
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
					id="w-item-1821"
					x={1243.735}
					y={554.494}
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
					id="y-item-1821"
					x={1323.735}
					y={501.486}
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
					id="aa-item-1821"
					x={1416.211}
					y={507.487}
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
					id="ac-item-1821"
					x={1320.305}
					y={591.5}
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
					id="ae-item-1821"
					x={1203.735}
					y={679.818}
					width={50.6}
					height={67.195}
					filterUnits="userSpaceOnUse">
					<feOffset dy={3} />
					<feGaussianBlur stdDeviation={3} result="af" />
					<feFlood floodOpacity={0.161} />
					<feComposite operator="in" in2="af" />
					<feComposite in="SourceGraphic" />
				</filter>
				<clipPath id="ag-item-1821">
					<rect
						className="a-item-1821"
						width={1920.143}
						height={1117.999}
						transform="translate(0 88)"
					/>
				</clipPath>
				<clipPath id="ah-item-1821">
					<rect
						className="a-item-1821"
						width={1500}
						height={1119.24}
					/>
				</clipPath>
				<clipPath id="ai-item-1821">
					<rect
						className="a-item-1821"
						width={1915}
						height={1080}
						transform="translate(0 0)"
					/>
				</clipPath>
				<clipPath id="aj-item-1821">
					<rect
						className="b-item-1821"
						width={161.363}
						height={249}
						transform="translate(116.102 -113)"
					/>
				</clipPath>
				<clipPath id="ak-item-1821">
					<rect
						className="a-item-1821"
						width={32.6}
						height={49.195}
					/>
				</clipPath>
				<clipPath id="al-item-1821">
					<path
						className="a-item-1821"
						d="M92.941,592.465c0,1.459,4.2,2.642,9.381,2.642s9.381-1.183,9.381-2.642-4.2-2.642-9.381-2.642-9.381,1.183-9.381,2.642"
						transform="translate(-92.941 -589.823)"
					/>
				</clipPath>
				<clipPath id="an-item-1821">
					<rect
						className="a-item-1821"
						width={27.391}
						height={14.246}
					/>
				</clipPath>
				<clipPath id="ao-item-1821">
					<path
						className="a-item-1821"
						d="M35,42.379a13.348,13.348,0,0,1,.841-5.317,13.59,13.59,0,0,1,2.92-4.6,13.794,13.794,0,0,1,4.521-3.107,13.8,13.8,0,0,1,10.79,0A13.793,13.793,0,0,1,58.6,32.463a13.593,13.593,0,0,1,2.92,4.6,13.346,13.346,0,0,1,.841,5.317.13.13,0,0,1-.136.124.132.132,0,0,1-.124-.124,13.81,13.81,0,0,0-4.174-9.243,13.316,13.316,0,0,0-18.485,0,13.81,13.81,0,0,0-4.174,9.243.131.131,0,0,1-.136.124A.132.132,0,0,1,35,42.379"
						transform="translate(-34.985 -28.257)"
					/>
				</clipPath>
				<linearGradient
					id="ap-item-1821"
					x1={-0.092}
					y1={3.305}
					x2={-0.089}
					y2={3.305}
					gradientUnits="objectBoundingBox">
					<stop offset={0} stopColor="#fff" />
					<stop offset={1} />
				</linearGradient>
				<clipPath id="aq-item-1821">
					<rect
						className="d-item-1821"
						width={27.296}
						height={19.678}
					/>
				</clipPath>
				<clipPath id="ar-item-1821">
					<path
						className="d-item-1821"
						d="M52.337,350.34A18.336,18.336,0,0,1,39,344.608a105.975,105.975,0,0,0,13.244,18.93.224.224,0,0,0,.308,0c1.239-1.139,9.561-10.744,13.745-19.618a18.347,18.347,0,0,1-13.957,6.416"
						transform="translate(-38.998 -343.924)"
					/>
				</clipPath>
				<clipPath id="as-item-1821">
					<rect
						className="a-item-1821"
						width={19.145}
						height={12.905}
					/>
				</clipPath>
				<clipPath id="at-item-1821">
					<path
						className="a-item-1821"
						d="M109.431,395.315a.13.13,0,0,0-.17.065l0,.006a20.148,20.148,0,0,1-2.038,3.3q-1.15,1.576-2.392,3.086c-1.575,1.922-3.214,3.8-4.89,5.629-1.677-1.831-3.315-3.707-4.891-5.629q-1.238-1.512-2.392-3.086a20.143,20.143,0,0,1-2.038-3.3l0-.006a.13.13,0,0,0-.238.107,20.4,20.4,0,0,0,1.987,3.4q1.12,1.616,2.33,3.162,2.41,3.092,5,6.037a.3.3,0,0,0,.025.035.315.315,0,0,0,.089.054l0,0a.374.374,0,0,0,.258,0l0,0a.315.315,0,0,0,.088-.054.31.31,0,0,0,.025-.035q2.585-2.952,5-6.037,1.206-1.549,2.33-3.162a20.4,20.4,0,0,0,1.987-3.4.13.13,0,0,0-.068-.171"
						transform="translate(-90.365 -395.304)"
					/>
				</clipPath>
				<linearGradient
					id="au-item-1821"
					x1={-0.35}
					y1={1.531}
					x2={-0.346}
					y2={1.531}
					xlinkHref="#ap"
				/>
				<clipPath id="av-item-1821">
					<rect className="e-item-1821" width={2.54} height={2.832} />
				</clipPath>
				<clipPath id="aw-item-1821">
					<path
						className="e-item-1821"
						d="M266.662,61.68a7.128,7.128,0,0,1,2.045.938c-1.039,1.307-1.491,1.894-1.491,1.894l-1.049-.475Z"
						transform="translate(-266.166 -61.68)"
					/>
				</clipPath>
				<clipPath id="ax-item-1821">
					<rect
						className="e-item-1821"
						width={5.765}
						height={6.134}
					/>
				</clipPath>
				<clipPath id="ay-item-1821">
					<path
						className="e-item-1821"
						d="M71.058,80.871c.9-1.542,2.078-3.352,3.586-3.989-.637-1.207-1.173-2.145-1.173-2.145a11.475,11.475,0,0,0-4.592,5.095c1.039.469,2.179,1.039,2.179,1.039"
						transform="translate(-68.879 -74.737)"
					/>
				</clipPath>
				<clipPath id="az-item-1821">
					<rect className="a-item-1821" width={2.54} height={2.832} />
				</clipPath>
				<clipPath id="ba-item-1821">
					<rect
						className="a-item-1821"
						width={5.765}
						height={6.134}
					/>
				</clipPath>
				<clipPath id="bb-item-1821">
					<rect
						className="a-item-1821"
						width={22.583}
						height={4.548}
					/>
				</clipPath>
				<clipPath id="bc-item-1821">
					<path
						className="a-item-1821"
						d="M78.528.951A19.6,19.6,0,0,1,89.817,4.544a16.3,16.3,0,0,0-22.583,0A19.6,19.6,0,0,1,78.528.951"
						transform="translate(-67.234 0)"
					/>
				</clipPath>
				<linearGradient
					id="bd-item-1821"
					x1={-0.222}
					y1={10.817}
					x2={-0.218}
					y2={10.817}
					xlinkHref="#ap"
				/>
				<clipPath id="be-item-1821">
					<rect
						className="a-item-1821"
						width={25.015}
						height={10.649}
					/>
				</clipPath>
				<clipPath id="bf-item-1821">
					<rect
						className="a-item-1821"
						width={25.429}
						height={11.999}
					/>
				</clipPath>
				<filter
					id="bg-item-1821"
					x={1207.581}
					y={362.665}
					width={227}
					height={61}
					filterUnits="userSpaceOnUse">
					<feOffset dy={3} />
					<feGaussianBlur stdDeviation={3} result="bh" />
					<feFlood floodOpacity={0.161} />
					<feComposite operator="in" in2="bh" />
					<feComposite in="SourceGraphic" />
				</filter>
				<filter
					id="ce-item-1821"
					x={1393.535}
					y={239.725}
					width={227}
					height={61}
					filterUnits="userSpaceOnUse">
					<feOffset dy={3} />
					<feGaussianBlur stdDeviation={3} result="cf" />
					<feFlood floodOpacity={0.161} />
					<feComposite operator="in" in2="cf" />
					<feComposite in="SourceGraphic" />
				</filter>
				<filter
					id="dc-item-1821"
					x={1361.535}
					y={290.732}
					width={227}
					height={61}
					filterUnits="userSpaceOnUse">
					<feOffset dy={3} />
					<feGaussianBlur stdDeviation={3} result="dd" />
					<feFlood floodOpacity={0.161} />
					<feComposite operator="in" in2="dd" />
					<feComposite in="SourceGraphic" />
				</filter>
				<filter
					id="ea-item-1821"
					x={1254.535}
					y={69.676}
					width={227}
					height={61}
					filterUnits="userSpaceOnUse">
					<feOffset dy={3} />
					<feGaussianBlur stdDeviation={3} result="eb" />
					<feFlood floodOpacity={0.161} />
					<feComposite operator="in" in2="eb" />
					<feComposite in="SourceGraphic" />
				</filter>
				<filter
					id="ey-item-1821"
					x={942.535}
					y={188.676}
					width={273}
					height={61}
					filterUnits="userSpaceOnUse">
					<feOffset dy={3} />
					<feGaussianBlur stdDeviation={3} result="ez" />
					<feFlood floodOpacity={0.161} />
					<feComposite operator="in" in2="ez" />
					<feComposite in="SourceGraphic" />
				</filter>
				<filter
					id="fw-item-1821"
					x={715.581}
					y={118.676}
					width={227}
					height={88}
					filterUnits="userSpaceOnUse">
					<feOffset dy={3} />
					<feGaussianBlur stdDeviation={3} result="fx" />
					<feFlood floodOpacity={0.161} />
					<feComposite operator="in" in2="fx" />
					<feComposite in="SourceGraphic" />
				</filter>
				<filter
					id="gu-item-1821"
					x={1342.535}
					y={114.69}
					width={227}
					height={61}
					filterUnits="userSpaceOnUse">
					<feOffset dy={3} />
					<feGaussianBlur stdDeviation={3} result="gv" />
					<feFlood floodOpacity={0.161} />
					<feComposite operator="in" in2="gv" />
					<feComposite in="SourceGraphic" />
				</filter>
				<filter
					id="hs-item-1821"
					x={1222.535}
					y={102.697}
					width={227}
					height={61}
					filterUnits="userSpaceOnUse">
					<feOffset dy={3} />
					<feGaussianBlur stdDeviation={3} result="ht" />
					<feFlood floodOpacity={0.161} />
					<feComposite operator="in" in2="ht" />
					<feComposite in="SourceGraphic" />
				</filter>
				<filter
					id="iq-item-1821"
					x={1193.488}
					y={182.711}
					width={227}
					height={61}
					filterUnits="userSpaceOnUse">
					<feOffset dy={3} />
					<feGaussianBlur stdDeviation={3} result="ir" />
					<feFlood floodOpacity={0.161} />
					<feComposite operator="in" in2="ir" />
					<feComposite in="SourceGraphic" />
				</filter>
				<filter
					id="jo-item-1821"
					x={1297.581}
					y={434.697}
					width={227}
					height={61}
					filterUnits="userSpaceOnUse">
					<feOffset dy={3} />
					<feGaussianBlur stdDeviation={3} result="jp" />
					<feFlood floodOpacity={0.161} />
					<feComposite operator="in" in2="jp" />
					<feComposite in="SourceGraphic" />
				</filter>
				<filter
					id="km-item-1821"
					x={1204.581}
					y={424.697}
					width={227}
					height={61}
					filterUnits="userSpaceOnUse">
					<feOffset dy={3} />
					<feGaussianBlur stdDeviation={3} result="kn" />
					<feFlood floodOpacity={0.161} />
					<feComposite operator="in" in2="kn" />
					<feComposite in="SourceGraphic" />
				</filter>
				<filter
					id="lk-item-1821"
					x={1155.535}
					y={505.686}
					width={227}
					height={61}
					filterUnits="userSpaceOnUse">
					<feOffset dy={3} />
					<feGaussianBlur stdDeviation={3} result="ll" />
					<feFlood floodOpacity={0.161} />
					<feComposite operator="in" in2="ll" />
					<feComposite in="SourceGraphic" />
				</filter>
				<filter
					id="mi-item-1821"
					x={1235.535}
					y={452.679}
					width={227}
					height={61}
					filterUnits="userSpaceOnUse">
					<feOffset dy={3} />
					<feGaussianBlur stdDeviation={3} result="mj" />
					<feFlood floodOpacity={0.161} />
					<feComposite operator="in" in2="mj" />
					<feComposite in="SourceGraphic" />
				</filter>
				<filter
					id="ng-item-1821"
					x={1328.011}
					y={458.679}
					width={227}
					height={61}
					filterUnits="userSpaceOnUse">
					<feOffset dy={3} />
					<feGaussianBlur stdDeviation={3} result="nh" />
					<feFlood floodOpacity={0.161} />
					<feComposite operator="in" in2="nh" />
					<feComposite in="SourceGraphic" />
				</filter>
				<filter
					id="oe-item-1821"
					x={1232.105}
					y={542.693}
					width={227}
					height={61}
					filterUnits="userSpaceOnUse">
					<feOffset dy={3} />
					<feGaussianBlur stdDeviation={3} result="of" />
					<feFlood floodOpacity={0.161} />
					<feComposite operator="in" in2="of" />
					<feComposite in="SourceGraphic" />
				</filter>
				<filter
					id="pc-item-1821"
					x={1115.535}
					y={631.01}
					width={227}
					height={61}
					filterUnits="userSpaceOnUse">
					<feOffset dy={3} />
					<feGaussianBlur stdDeviation={3} result="pd" />
					<feFlood floodOpacity={0.161} />
					<feComposite operator="in" in2="pd" />
					<feComposite in="SourceGraphic" />
				</filter>
				<clipPath id="pe-item-1821">
					<rect
						className="a-item-1821"
						width={40.871}
						height={61.677}
					/>
				</clipPath>
				<clipPath id="pf-item-1821">
					<path
						className="a-item-1821"
						d="M92.941,593.135c0,1.829,5.265,3.312,11.761,3.312s11.761-1.483,11.761-3.312-5.265-3.312-11.761-3.312-11.761,1.483-11.761,3.312"
						transform="translate(-92.941 -589.823)"
					/>
				</clipPath>
				<clipPath id="ph-item-1821">
					<rect
						className="a-item-1821"
						width={34.34}
						height={17.861}
					/>
				</clipPath>
				<clipPath id="pi-item-1821">
					<path
						className="a-item-1821"
						d="M35.007,45.962A16.735,16.735,0,0,1,36.062,39.3a17.039,17.039,0,0,1,3.661-5.766,17.293,17.293,0,0,1,5.668-3.9,17.3,17.3,0,0,1,13.527,0,17.293,17.293,0,0,1,5.669,3.9A17.042,17.042,0,0,1,68.248,39.3,16.733,16.733,0,0,1,69.3,45.962a.163.163,0,0,1-.171.156.165.165,0,0,1-.156-.156,17.314,17.314,0,0,0-5.233-11.588,16.695,16.695,0,0,0-23.176,0,17.313,17.313,0,0,0-5.233,11.588.164.164,0,0,1-.171.156.165.165,0,0,1-.156-.156"
						transform="translate(-34.985 -28.257)"
					/>
				</clipPath>
				<clipPath id="pk-item-1821">
					<rect
						className="a-item-1821"
						width={34.221}
						height={24.67}
					/>
				</clipPath>
				<clipPath id="pl-item-1821">
					<path
						className="a-item-1821"
						d="M55.722,351.968A22.989,22.989,0,0,1,39,344.782c5.414,10.506,15.127,22.305,16.6,23.733a.28.28,0,0,0,.386,0c1.553-1.428,11.987-13.47,17.232-24.6a23,23,0,0,1-17.5,8.044"
						transform="translate(-38.998 -343.924)"
					/>
				</clipPath>
				<linearGradient
					id="pm-item-1821"
					x1={-0.106}
					y1={1.198}
					x2={-0.104}
					y2={1.198}
					gradientUnits="objectBoundingBox">
					<stop offset={0} stopColor="#e33940" />
					<stop offset={1} stopColor="#b80007" />
				</linearGradient>
				<clipPath id="pn-item-1821">
					<rect
						className="a-item-1821"
						width={24.002}
						height={16.179}
					/>
				</clipPath>
				<clipPath id="po-item-1821">
					<path
						className="a-item-1821"
						d="M114.269,395.317a.163.163,0,0,0-.213.081l0,.008a25.261,25.261,0,0,1-2.556,4.137q-1.442,1.976-3,3.869c-1.975,2.41-4.029,4.762-6.131,7.058-2.1-2.3-4.157-4.648-6.131-7.058q-1.552-1.9-3-3.869a25.254,25.254,0,0,1-2.555-4.137l0-.008a.163.163,0,0,0-.3.134A25.572,25.572,0,0,0,92.87,399.8q1.4,2.026,2.921,3.965,3.021,3.877,6.265,7.569a.375.375,0,0,0,.032.044.4.4,0,0,0,.111.067l.006,0a.39.39,0,0,0,.107.025.183.183,0,0,0,.109,0,.389.389,0,0,0,.107-.025l.006,0a.394.394,0,0,0,.111-.067.386.386,0,0,0,.032-.044q3.241-3.7,6.265-7.569,1.512-1.942,2.921-3.965a25.578,25.578,0,0,0,2.491-4.269.163.163,0,0,0-.085-.215"
						transform="translate(-90.365 -395.304)"
					/>
				</clipPath>
				<clipPath id="pq-item-1821">
					<rect
						className="a-item-1821"
						width={3.185}
						height={3.551}
					/>
				</clipPath>
				<clipPath id="pr-item-1821">
					<path
						className="a-item-1821"
						d="M266.788,61.68a8.937,8.937,0,0,1,2.563,1.177c-1.3,1.639-1.87,2.374-1.87,2.374l-1.315-.6Z"
						transform="translate(-266.166 -61.68)"
					/>
				</clipPath>
				<linearGradient
					id="ps-item-1821"
					x1={-5.374}
					y1={13.081}
					x2={-5.353}
					y2={13.081}
					gradientUnits="objectBoundingBox">
					<stop offset={0} stopColor="#a12025" />
					<stop offset={1} stopColor="#c1272d" />
				</linearGradient>
				<clipPath id="pt-item-1821">
					<rect className="a-item-1821" width={7.228} height={7.69} />
				</clipPath>
				<clipPath id="pu-item-1821">
					<path
						className="a-item-1821"
						d="M71.61,82.427c1.135-1.933,2.605-4.2,4.5-5-.8-1.513-1.471-2.689-1.471-2.689a14.387,14.387,0,0,0-5.757,6.387c1.3.588,2.731,1.3,2.731,1.3"
						transform="translate(-68.879 -74.737)"
					/>
				</clipPath>
				<linearGradient
					id="pv-item-1821"
					x1={-0.453}
					y1={5.347}
					x2={-0.444}
					y2={5.347}
					xlinkHref="#ps"
				/>
				<clipPath id="py-item-1821">
					<rect
						className="a-item-1821"
						width={28.313}
						height={5.702}
					/>
				</clipPath>
				<clipPath id="pz-item-1821">
					<path
						className="a-item-1821"
						d="M81.394,1.192A24.567,24.567,0,0,1,95.547,5.7a20.431,20.431,0,0,0-28.313,0,24.569,24.569,0,0,1,14.16-4.51"
						transform="translate(-67.234 0)"
					/>
				</clipPath>
				<clipPath id="qb-item-1821">
					<rect
						className="a-item-1821"
						width={31.362}
						height={13.351}
					/>
				</clipPath>
				<clipPath id="qc-item-1821">
					<rect
						className="a-item-1821"
						width={31.881}
						height={15.044}
					/>
				</clipPath>
				<image
					id="rc-item-1821"
					width={18.836}
					height={5.286}
					xlinkHref="ComponentTMP_0-image.png-item-1821"
				/>
			</defs>
			<path
				className="u-item-1821"
				d="M0,0H1920V1105H0Z"
				transform="translate(95 3.24)"
			/>
			<g className="v-item-1821" transform="translate(0 -90)">
				<path
					className="w-item-1821"
					d="M140.348,0h-1.732V141.555h.062V285.131A170.418,170.418,0,0,1,33.553,442.847l-.124.051L0,456.828V458.7l34.218-14.259c1.205-.5,2.4-1.016,3.585-1.545a172.052,172.052,0,0,0,73.626-62.037,172.036,172.036,0,0,0,28.982-95.73V48.787h-.063Z"
					transform="translate(0 88)"
				/>
				<path
					className="x-item-1821"
					d="M278.84.143,175.932,43.025c-1.205.5-2.4,1.016-3.585,1.545A172.593,172.593,0,0,0,69.739,202.337V438.681H69.8V582.257A170.358,170.358,0,0,1,0,720.063v2.085a172.208,172.208,0,0,0,42.552-44.161,172.028,172.028,0,0,0,28.982-95.73V345.913h-.062V202.337A170.42,170.42,0,0,1,176.6,44.621l.124-.051L283.338.143Z"
					transform="translate(0 88)"
				/>
			</g>
			<g style={{ transform: 'scale(0.75) translate(500px, 0px)' }}>
				<g transform="translate(0 -86.759)">
					<g transform="translate(-30 101)">
						<image
							xlinkHref="/images/mapa-servicios.png"
							style={{ width: 1950 }}
						/>
					</g>
				</g>
				{selectedImage !== 16 ? (
					<g transform="translate(725 119)">
						<RedPoint onHover={() => setSelectedImage(16)} />
					</g>
				) : (
					<React.Fragment>
						<g
							transform="translate(664.581 94.676)"
							onClick={() => setSelectedImage(null)}>
							<g
								className="aq-item-1821"
								transform="translate(88.2 75.808)">
								<g transform="translate(6.919 43.912)">
									<g className="ar-item-1821">
										<use
											transform="translate(-0.07 -0.002)"
											xlinkHref="#rc"
										/>
									</g>
								</g>
								<g className="aq-item-1821">
									<path
										className="as-item-1821"
										d="M32.583,15.631a16.3,16.3,0,1,0-31.3,7.021C4.86,32.337,14.8,43.916,16.147,45.219a.224.224,0,0,0,.308,0c1.475-1.357,12.989-13.976,15.608-24.764.027-.1.051-.206.076-.309s.05-.207.072-.31a16.291,16.291,0,0,0,.338-2.3c0-.03,0-.06.007-.09.027-.381.045-.764.045-1.152,0-.238-.007-.458-.017-.669M16.3,26.2a9.9,9.9,0,1,1,9.9-9.9,9.9,9.9,0,0,1-9.9,9.9"
										transform="translate(0 0)"
									/>
									<g
										className="at-item-1821"
										transform="translate(2.605 2.104)">
										<g className="au-item-1821">
											<g transform="translate(0 0)">
												<g className="av-item-1821">
													<rect
														className="aw-item-1821"
														width={27.55}
														height={14.249}
														transform="translate(-0.08 0)"
													/>
												</g>
											</g>
										</g>
									</g>
									<path
										className="ax-item-1821"
										d="M60.408,47.748A12.752,12.752,0,1,0,73.16,60.5,12.752,12.752,0,0,0,60.408,47.748m0,22.651a9.9,9.9,0,1,1,9.9-9.9,9.9,9.9,0,0,1-9.9,9.9"
										transform="translate(-44.108 -44.193)"
									/>
									<g
										className="ay-item-1821"
										transform="translate(2.903 25.605)">
										<g className="az-item-1821">
											<g transform="translate(0)">
												<g className="ba-item-1821">
													<rect
														className="d-item-1821"
														width={27.296}
														height={19.699}
														transform="translate(0 0)"
													/>
												</g>
											</g>
										</g>
									</g>
									<g
										className="at-item-1821"
										transform="translate(6.728 29.43)">
										<g className="bb-item-1821">
											<g transform="translate(0 0)">
												<g className="bc-item-1821">
													<rect
														className="bd-item-1821"
														width={19.18}
														height={12.922}
														transform="translate(-0.018 -0.017)"
													/>
												</g>
											</g>
										</g>
									</g>
									<g
										className="ay-item-1821"
										transform="translate(19.816 4.592)">
										<g className="be-item-1821">
											<g transform="translate(0 0)">
												<g className="bf-item-1821">
													<rect
														className="e-item-1821"
														width={3.59}
														height={3.432}
														transform="translate(-1.003 2.416) rotate(-67.457)"
													/>
												</g>
											</g>
										</g>
									</g>
									<g
										className="ay-item-1821"
										transform="translate(5.128 5.564)">
										<g className="bg-item-1821">
											<g transform="translate(0)">
												<g className="bh-item-1821">
													<rect
														className="e-item-1821"
														width={8.409}
														height={8.369}
														transform="matrix(0.651, -0.759, 0.759, 0.651, -3.031, 3.536)"
													/>
												</g>
											</g>
										</g>
									</g>
									<g
										className="at-item-1821"
										transform="translate(19.816 25.39)">
										<g className="bi-item-1821">
											<path
												className="ac-item-1821"
												d="M266.662,343.872a7.127,7.127,0,0,0,2.045-.938c-1.039-1.307-1.491-1.894-1.491-1.894l-1.049.475Z"
												transform="translate(-266.166 -341.04)"
											/>
										</g>
									</g>
									<g
										className="bj-item-1821"
										transform="translate(5.128 20.915)">
										<g className="bk-item-1821">
											<path
												className="ac-item-1821"
												d="M71.058,280.936c.9,1.542,2.078,3.352,3.586,3.989-.637,1.207-1.173,2.145-1.173,2.145a11.476,11.476,0,0,1-4.592-5.095c1.039-.469,2.179-1.039,2.179-1.039"
												transform="translate(-68.879 -280.936)"
											/>
										</g>
									</g>
									<g
										className="bl-item-1821"
										transform="translate(5.006)">
										<g className="bm-item-1821">
											<g transform="translate(0 0)">
												<g className="bn-item-1821">
													<rect
														className="bo-item-1821"
														width={22.583}
														height={4.548}
														transform="translate(0 0)"
													/>
												</g>
											</g>
										</g>
									</g>
									<g
										className="bp-item-1821"
										transform="translate(3.839 18.557)">
										<g className="bq-item-1821">
											<path
												className="u-item-1821"
												d="M76.576,249.259a12.512,12.512,0,0,1-1.43,4.134,12.882,12.882,0,0,1-2.776,3.406,12.663,12.663,0,0,1-3.776,2.269,12.838,12.838,0,0,1-8.689.162,12.662,12.662,0,0,1-3.859-2.125,12.9,12.9,0,0,1-2.9-3.3,12.476,12.476,0,0,1-1.584-4.077A12.859,12.859,0,0,0,60,258.959a12.818,12.818,0,0,0,8.5-.158,12.9,12.9,0,0,0,8.083-9.542"
												transform="translate(-51.561 -249.259)"
											/>
										</g>
									</g>
									<g
										className="at-item-1821"
										transform="translate(3.588 3.355)">
										<g className="br-item-1821">
											<path
												className="u-item-1821"
												d="M48.195,56.993a12.512,12.512,0,0,1,1.158-4.61,12.766,12.766,0,0,1,6.864-6.435A12.775,12.775,0,0,1,69.7,48.561a12.7,12.7,0,0,1,2.791,3.883,12.513,12.513,0,0,1,1.134,4.616l-.073-.59-.1-.586c-.039-.194-.083-.387-.124-.58s-.1-.382-.151-.574a12.605,12.605,0,0,0-.863-2.2,12.808,12.808,0,0,0-6.793-6.2,12.743,12.743,0,0,0-9.164-.024,12.761,12.761,0,0,0-3.979,2.444,12.923,12.923,0,0,0-4.181,8.247"
												transform="translate(-48.195 -45.06)"
											/>
										</g>
									</g>
									<path
										className="u-item-1821"
										d="M95.872,105.864a9.9,9.9,0,1,1,9.9-9.9,9.9,9.9,0,0,1-9.9,9.9"
										transform="translate(-79.572 -79.658)"
									/>
									<path
										className="bs-item-1821"
										d="M128.35,119.3l1.726-1.271a.083.083,0,0,0,.034-.067l-.025-3.763a.083.083,0,0,0-.016-.049l-1.408-1.912a.083.083,0,0,0-.116-.017l-.267.2a.083.083,0,0,0-.018.116l.5.678-.965.71-.5-.678a.083.083,0,0,0-.116-.018l-.267.2a.083.083,0,0,0-.018.116l1.294,1.756a.083.083,0,0,0,.116.018l.267-.2a.083.083,0,0,0,.018-.116l-.5-.678.964-.71.534.725.023,3.418-1.386,1.021-3.258-1.035-.534-.725.965-.711.5.678a.083.083,0,0,0,.116.018l.267-.2a.083.083,0,0,0,.018-.116L125,114.932a.083.083,0,0,0-.116-.018l-.267.2a.083.083,0,0,0-.018.116l.5.678-.965.71-.5-.678a.083.083,0,0,0-.116-.018l-.267.2a.083.083,0,0,0-.018.116l1.408,1.912a.083.083,0,0,0,.042.03l3.587,1.139a.083.083,0,0,0,.074-.012"
										transform="translate(-114.049 -103.851)"
									/>
									<path
										className="bs-item-1821"
										d="M224.859,119.107l3.573-1.182a.083.083,0,0,0,.041-.03l1.386-1.928a.083.083,0,0,0-.019-.116l-.269-.193a.083.083,0,0,0-.116.019l-.492.684-.973-.7.492-.684a.083.083,0,0,0-.019-.116l-.269-.193a.083.083,0,0,0-.116.019l-1.273,1.772a.083.083,0,0,0,.019.116l.269.193a.083.083,0,0,0,.116-.019l.492-.684.973.7-.526.731-3.245,1.073-1.4-1-.018-3.418.526-.732.973.7-.492.684a.083.083,0,0,0,.019.116l.269.193a.083.083,0,0,0,.116-.019l1.273-1.772a.083.083,0,0,0-.019-.116l-.269-.193a.083.083,0,0,0-.116.019l-.492.684-.973-.7.492-.684a.083.083,0,0,0-.019-.116l-.269-.193a.083.083,0,0,0-.116.019l-1.386,1.928a.083.083,0,0,0-.016.049l.02,3.764a.083.083,0,0,0,.034.067l1.74,1.251a.083.083,0,0,0,.074.011"
										transform="translate(-206.389 -103.664)"
									/>
									<path
										className="bs-item-1821"
										d="M247.5,199.847l.1-.316a.083.083,0,0,0-.054-.1l-2.262-.722a.083.083,0,0,0-.051,0l-3.573,1.182a.083.083,0,0,0-.053.053l-.652,2.042a.083.083,0,0,0,.012.074l2.228,3.033a.083.083,0,0,0,.042.03l2.262.722a.083.083,0,0,0,.1-.054l.1-.316a.083.083,0,0,0-.054-.1l-.8-.256.364-1.141.8.256a.083.083,0,0,0,.1-.054l.1-.316a.083.083,0,0,0-.054-.1l-2.078-.663a.083.083,0,0,0-.1.054l-.1.316a.083.083,0,0,0,.054.1l.8.256-.364,1.141-.858-.274-2.024-2.755.523-1.64,3.245-1.073.858.274-.364,1.141-.8-.256a.083.083,0,0,0-.1.054l-.1.316a.083.083,0,0,0,.054.1l2.078.663a.083.083,0,0,0,.1-.054l.1-.316a.083.083,0,0,0-.054-.1l-.8-.256.364-1.141.8.256a.083.083,0,0,0,.1-.054"
										transform="translate(-223.017 -183.909)"
									/>
									<path
										className="bs-item-1821"
										d="M179.252,247.842l2.228,3.033a.083.083,0,0,1,.016.049l.012,2.375a.083.083,0,0,1-.082.083l-.331,0a.083.083,0,0,1-.083-.082l0-.842-1.2.006,0,.842a.083.083,0,0,1-.082.083l-.331,0a.083.083,0,0,1-.083-.082l-.011-2.182a.083.083,0,0,1,.082-.083l.331,0a.083.083,0,0,1,.083.082l0,.842,1.2-.006,0-.9-2.024-2.755-1.721.009-1.995,2.776,0,.9,1.2-.006,0-.842a.083.083,0,0,1,.082-.083l.331,0a.083.083,0,0,1,.083.082l.011,2.182a.083.083,0,0,1-.082.083l-.331,0a.083.083,0,0,1-.083-.082l0-.842-1.2.006,0,.842a.083.083,0,0,1-.082.083l-.331,0a.083.083,0,0,1-.083-.082l-.012-2.375a.083.083,0,0,1,.016-.049l2.2-3.056a.083.083,0,0,1,.067-.035l2.143-.011a.083.083,0,0,1,.067.034"
										transform="translate(-161.752 -229.359)"
									/>
									<path
										className="bs-item-1821"
										d="M114.762,200.678l-3.585-1.144a.083.083,0,0,0-.051,0l-2.255.746a.083.083,0,0,0-.053.1l.1.315a.083.083,0,0,0,.1.053l.8-.264.376,1.137-.8.264a.083.083,0,0,0-.053.1l.1.315a.083.083,0,0,0,.1.053l2.071-.685a.083.083,0,0,0,.053-.1l-.1-.315a.083.083,0,0,0-.1-.053l-.8.264-.376-1.137.855-.283,3.256,1.039.54,1.634-1.995,2.776-.855.283-.376-1.137.8-.264a.083.083,0,0,0,.053-.1l-.1-.315a.083.083,0,0,0-.1-.053l-2.071.685a.083.083,0,0,0-.053.1l.1.315a.083.083,0,0,0,.1.053l.8-.264.376,1.137-.8.264a.083.083,0,0,0-.053.1l.1.315a.083.083,0,0,0,.1.053l2.254-.746a.083.083,0,0,0,.041-.03l2.2-3.056a.082.082,0,0,0,.011-.074l-.673-2.035a.083.083,0,0,0-.053-.053"
										transform="translate(-100.713 -184.675)"
									/>
								</g>
							</g>
							<g
								className="da-item-1821"
								transform="matrix(1, 0, 0, 1, -724.58, -124.68)">
								<rect
									className="u-item-1821"
									width={209}
									height={70}
									rx={15}
									transform="translate(724.58 124.68)"
								/>
							</g>
							<text
								className="bt-item-1821"
								transform="translate(104 30)">
								<tspan x={-71.928} y={0}>
									{'San José de'}
								</tspan>
								<tspan x={-65.712} y={26}>
									{'Costa Rica'}
								</tspan>
							</text>
						</g>
					</React.Fragment>
				)}
				{selectedImage !== 15 ? (
					<g transform="translate(1054 162)">
						<RedPoint onHover={() => setSelectedImage(15)} />
					</g>
				) : (
					<React.Fragment>
						<g
							transform="translate(951.535 194.676)"
							onClick={() => setSelectedImage(null)}>
							<g
								className="aq-item-1821"
								transform="translate(111.2 48.808)">
								<g transform="translate(6.919 43.912)">
									<g className="ar-item-1821">
										<use
											transform="translate(-0.07 -0.002)"
											xlinkHref="#rc"
										/>
									</g>
								</g>
								<g className="aq-item-1821">
									<path
										className="as-item-1821"
										d="M32.583,15.631a16.3,16.3,0,1,0-31.3,7.021C4.86,32.337,14.8,43.916,16.147,45.219a.224.224,0,0,0,.308,0c1.475-1.357,12.989-13.976,15.608-24.764.027-.1.051-.206.076-.309s.05-.207.072-.31a16.291,16.291,0,0,0,.338-2.3c0-.03,0-.06.007-.09.027-.381.045-.764.045-1.152,0-.238-.007-.458-.017-.669M16.3,26.2a9.9,9.9,0,1,1,9.9-9.9,9.9,9.9,0,0,1-9.9,9.9"
										transform="translate(0 0)"
									/>
									<g
										className="at-item-1821"
										transform="translate(2.605 2.104)">
										<g className="au-item-1821">
											<g transform="translate(0 0)">
												<g className="av-item-1821">
													<rect
														className="aw-item-1821"
														width={27.55}
														height={14.249}
														transform="translate(-0.08 0)"
													/>
												</g>
											</g>
										</g>
									</g>
									<path
										className="ax-item-1821"
										d="M60.408,47.748A12.752,12.752,0,1,0,73.16,60.5,12.752,12.752,0,0,0,60.408,47.748m0,22.651a9.9,9.9,0,1,1,9.9-9.9,9.9,9.9,0,0,1-9.9,9.9"
										transform="translate(-44.108 -44.193)"
									/>
									<g
										className="ay-item-1821"
										transform="translate(2.903 25.605)">
										<g className="az-item-1821">
											<g transform="translate(0)">
												<g className="ba-item-1821">
													<rect
														className="d-item-1821"
														width={27.296}
														height={19.699}
														transform="translate(0 0)"
													/>
												</g>
											</g>
										</g>
									</g>
									<g
										className="at-item-1821"
										transform="translate(6.728 29.43)">
										<g className="bb-item-1821">
											<g transform="translate(0 0)">
												<g className="bc-item-1821">
													<rect
														className="bd-item-1821"
														width={19.18}
														height={12.922}
														transform="translate(-0.018 -0.017)"
													/>
												</g>
											</g>
										</g>
									</g>
									<g
										className="ay-item-1821"
										transform="translate(19.816 4.592)">
										<g className="be-item-1821">
											<g transform="translate(0 0)">
												<g className="bf-item-1821">
													<rect
														className="e-item-1821"
														width={3.59}
														height={3.432}
														transform="translate(-1.003 2.416) rotate(-67.457)"
													/>
												</g>
											</g>
										</g>
									</g>
									<g
										className="ay-item-1821"
										transform="translate(5.128 5.564)">
										<g className="bg-item-1821">
											<g transform="translate(0)">
												<g className="bh-item-1821">
													<rect
														className="e-item-1821"
														width={8.409}
														height={8.369}
														transform="matrix(0.651, -0.759, 0.759, 0.651, -3.031, 3.536)"
													/>
												</g>
											</g>
										</g>
									</g>
									<g
										className="at-item-1821"
										transform="translate(19.816 25.39)">
										<g className="bi-item-1821">
											<path
												className="ac-item-1821"
												d="M266.662,343.872a7.127,7.127,0,0,0,2.045-.938c-1.039-1.307-1.491-1.894-1.491-1.894l-1.049.475Z"
												transform="translate(-266.166 -341.04)"
											/>
										</g>
									</g>
									<g
										className="bj-item-1821"
										transform="translate(5.128 20.915)">
										<g className="bk-item-1821">
											<path
												className="ac-item-1821"
												d="M71.058,280.936c.9,1.542,2.078,3.352,3.586,3.989-.637,1.207-1.173,2.145-1.173,2.145a11.476,11.476,0,0,1-4.592-5.095c1.039-.469,2.179-1.039,2.179-1.039"
												transform="translate(-68.879 -280.936)"
											/>
										</g>
									</g>
									<g
										className="bl-item-1821"
										transform="translate(5.006)">
										<g className="bm-item-1821">
											<g transform="translate(0 0)">
												<g className="bn-item-1821">
													<rect
														className="bo-item-1821"
														width={22.583}
														height={4.548}
														transform="translate(0 0)"
													/>
												</g>
											</g>
										</g>
									</g>
									<g
										className="bp-item-1821"
										transform="translate(3.839 18.557)">
										<g className="bq-item-1821">
											<path
												className="u-item-1821"
												d="M76.576,249.259a12.512,12.512,0,0,1-1.43,4.134,12.882,12.882,0,0,1-2.776,3.406,12.663,12.663,0,0,1-3.776,2.269,12.838,12.838,0,0,1-8.689.162,12.662,12.662,0,0,1-3.859-2.125,12.9,12.9,0,0,1-2.9-3.3,12.476,12.476,0,0,1-1.584-4.077A12.859,12.859,0,0,0,60,258.959a12.818,12.818,0,0,0,8.5-.158,12.9,12.9,0,0,0,8.083-9.542"
												transform="translate(-51.561 -249.259)"
											/>
										</g>
									</g>
									<g
										className="at-item-1821"
										transform="translate(3.588 3.355)">
										<g className="br-item-1821">
											<path
												className="u-item-1821"
												d="M48.195,56.993a12.512,12.512,0,0,1,1.158-4.61,12.766,12.766,0,0,1,6.864-6.435A12.775,12.775,0,0,1,69.7,48.561a12.7,12.7,0,0,1,2.791,3.883,12.513,12.513,0,0,1,1.134,4.616l-.073-.59-.1-.586c-.039-.194-.083-.387-.124-.58s-.1-.382-.151-.574a12.605,12.605,0,0,0-.863-2.2,12.808,12.808,0,0,0-6.793-6.2,12.743,12.743,0,0,0-9.164-.024,12.761,12.761,0,0,0-3.979,2.444,12.923,12.923,0,0,0-4.181,8.247"
												transform="translate(-48.195 -45.06)"
											/>
										</g>
									</g>
									<path
										className="u-item-1821"
										d="M95.872,105.864a9.9,9.9,0,1,1,9.9-9.9,9.9,9.9,0,0,1-9.9,9.9"
										transform="translate(-79.572 -79.658)"
									/>
									<path
										className="bs-item-1821"
										d="M128.35,119.3l1.726-1.271a.083.083,0,0,0,.034-.067l-.025-3.763a.083.083,0,0,0-.016-.049l-1.408-1.912a.083.083,0,0,0-.116-.017l-.267.2a.083.083,0,0,0-.018.116l.5.678-.965.71-.5-.678a.083.083,0,0,0-.116-.018l-.267.2a.083.083,0,0,0-.018.116l1.294,1.756a.083.083,0,0,0,.116.018l.267-.2a.083.083,0,0,0,.018-.116l-.5-.678.964-.71.534.725.023,3.418-1.386,1.021-3.258-1.035-.534-.725.965-.711.5.678a.083.083,0,0,0,.116.018l.267-.2a.083.083,0,0,0,.018-.116L125,114.932a.083.083,0,0,0-.116-.018l-.267.2a.083.083,0,0,0-.018.116l.5.678-.965.71-.5-.678a.083.083,0,0,0-.116-.018l-.267.2a.083.083,0,0,0-.018.116l1.408,1.912a.083.083,0,0,0,.042.03l3.587,1.139a.083.083,0,0,0,.074-.012"
										transform="translate(-114.049 -103.851)"
									/>
									<path
										className="bs-item-1821"
										d="M224.859,119.107l3.573-1.182a.083.083,0,0,0,.041-.03l1.386-1.928a.083.083,0,0,0-.019-.116l-.269-.193a.083.083,0,0,0-.116.019l-.492.684-.973-.7.492-.684a.083.083,0,0,0-.019-.116l-.269-.193a.083.083,0,0,0-.116.019l-1.273,1.772a.083.083,0,0,0,.019.116l.269.193a.083.083,0,0,0,.116-.019l.492-.684.973.7-.526.731-3.245,1.073-1.4-1-.018-3.418.526-.732.973.7-.492.684a.083.083,0,0,0,.019.116l.269.193a.083.083,0,0,0,.116-.019l1.273-1.772a.083.083,0,0,0-.019-.116l-.269-.193a.083.083,0,0,0-.116.019l-.492.684-.973-.7.492-.684a.083.083,0,0,0-.019-.116l-.269-.193a.083.083,0,0,0-.116.019l-1.386,1.928a.083.083,0,0,0-.016.049l.02,3.764a.083.083,0,0,0,.034.067l1.74,1.251a.083.083,0,0,0,.074.011"
										transform="translate(-206.389 -103.664)"
									/>
									<path
										className="bs-item-1821"
										d="M247.5,199.847l.1-.316a.083.083,0,0,0-.054-.1l-2.262-.722a.083.083,0,0,0-.051,0l-3.573,1.182a.083.083,0,0,0-.053.053l-.652,2.042a.083.083,0,0,0,.012.074l2.228,3.033a.083.083,0,0,0,.042.03l2.262.722a.083.083,0,0,0,.1-.054l.1-.316a.083.083,0,0,0-.054-.1l-.8-.256.364-1.141.8.256a.083.083,0,0,0,.1-.054l.1-.316a.083.083,0,0,0-.054-.1l-2.078-.663a.083.083,0,0,0-.1.054l-.1.316a.083.083,0,0,0,.054.1l.8.256-.364,1.141-.858-.274-2.024-2.755.523-1.64,3.245-1.073.858.274-.364,1.141-.8-.256a.083.083,0,0,0-.1.054l-.1.316a.083.083,0,0,0,.054.1l2.078.663a.083.083,0,0,0,.1-.054l.1-.316a.083.083,0,0,0-.054-.1l-.8-.256.364-1.141.8.256a.083.083,0,0,0,.1-.054"
										transform="translate(-223.017 -183.909)"
									/>
									<path
										className="bs-item-1821"
										d="M179.252,247.842l2.228,3.033a.083.083,0,0,1,.016.049l.012,2.375a.083.083,0,0,1-.082.083l-.331,0a.083.083,0,0,1-.083-.082l0-.842-1.2.006,0,.842a.083.083,0,0,1-.082.083l-.331,0a.083.083,0,0,1-.083-.082l-.011-2.182a.083.083,0,0,1,.082-.083l.331,0a.083.083,0,0,1,.083.082l0,.842,1.2-.006,0-.9-2.024-2.755-1.721.009-1.995,2.776,0,.9,1.2-.006,0-.842a.083.083,0,0,1,.082-.083l.331,0a.083.083,0,0,1,.083.082l.011,2.182a.083.083,0,0,1-.082.083l-.331,0a.083.083,0,0,1-.083-.082l0-.842-1.2.006,0,.842a.083.083,0,0,1-.082.083l-.331,0a.083.083,0,0,1-.083-.082l-.012-2.375a.083.083,0,0,1,.016-.049l2.2-3.056a.083.083,0,0,1,.067-.035l2.143-.011a.083.083,0,0,1,.067.034"
										transform="translate(-161.752 -229.359)"
									/>
									<path
										className="bs-item-1821"
										d="M114.762,200.678l-3.585-1.144a.083.083,0,0,0-.051,0l-2.255.746a.083.083,0,0,0-.053.1l.1.315a.083.083,0,0,0,.1.053l.8-.264.376,1.137-.8.264a.083.083,0,0,0-.053.1l.1.315a.083.083,0,0,0,.1.053l2.071-.685a.083.083,0,0,0,.053-.1l-.1-.315a.083.083,0,0,0-.1-.053l-.8.264-.376-1.137.855-.283,3.256,1.039.54,1.634-1.995,2.776-.855.283-.376-1.137.8-.264a.083.083,0,0,0,.053-.1l-.1-.315a.083.083,0,0,0-.1-.053l-2.071.685a.083.083,0,0,0-.053.1l.1.315a.083.083,0,0,0,.1.053l.8-.264.376,1.137-.8.264a.083.083,0,0,0-.053.1l.1.315a.083.083,0,0,0,.1.053l2.254-.746a.083.083,0,0,0,.041-.03l2.2-3.056a.082.082,0,0,0,.011-.074l-.673-2.035a.083.083,0,0,0-.053-.053"
										transform="translate(-100.713 -184.675)"
									/>
								</g>
							</g>
							<g
								className="db-item-1821"
								transform="matrix(1, 0, 0, 1, -951.53, -194.68)">
								<rect
									className="u-item-1821"
									width={255}
									height={43}
									rx={15}
									transform="translate(951.53 194.68)"
								/>
							</g>
							<text
								className="bt-item-1821"
								transform="translate(15 30)">
								<tspan x={0} y={0}>
									{'Ciudad de Panamá'}
								</tspan>
							</text>
						</g>
					</React.Fragment>
				)}
				{selectedImage !== 14 ? (
					<g transform="translate(1315 80)">
						<RedPoint onHover={() => setSelectedImage(14)} />
					</g>
				) : (
					<React.Fragment>
						<g
							transform="translate(1263.535 75.676)"
							onClick={() => setSelectedImage(null)}>
							<g
								className="aq-item-1821"
								transform="translate(88.2 48.808)">
								<g transform="translate(6.919 43.912)">
									<g className="ar-item-1821">
										<use
											transform="translate(-0.07 -0.002)"
											xlinkHref="#rc"
										/>
									</g>
								</g>
								<g className="aq-item-1821">
									<path
										className="as-item-1821"
										d="M32.583,15.631a16.3,16.3,0,1,0-31.3,7.021C4.86,32.337,14.8,43.916,16.147,45.219a.224.224,0,0,0,.308,0c1.475-1.357,12.989-13.976,15.608-24.764.027-.1.051-.206.076-.309s.05-.207.072-.31a16.291,16.291,0,0,0,.338-2.3c0-.03,0-.06.007-.09.027-.381.045-.764.045-1.152,0-.238-.007-.458-.017-.669M16.3,26.2a9.9,9.9,0,1,1,9.9-9.9,9.9,9.9,0,0,1-9.9,9.9"
										transform="translate(0 0)"
									/>
									<g
										className="at-item-1821"
										transform="translate(2.605 2.104)">
										<g className="au-item-1821">
											<g transform="translate(0 0)">
												<g className="av-item-1821">
													<rect
														className="aw-item-1821"
														width={27.55}
														height={14.249}
														transform="translate(-0.08 0)"
													/>
												</g>
											</g>
										</g>
									</g>
									<path
										className="ax-item-1821"
										d="M60.408,47.748A12.752,12.752,0,1,0,73.16,60.5,12.752,12.752,0,0,0,60.408,47.748m0,22.651a9.9,9.9,0,1,1,9.9-9.9,9.9,9.9,0,0,1-9.9,9.9"
										transform="translate(-44.108 -44.193)"
									/>
									<g
										className="ay-item-1821"
										transform="translate(2.903 25.605)">
										<g className="az-item-1821">
											<g transform="translate(0)">
												<g className="ba-item-1821">
													<rect
														className="d-item-1821"
														width={27.296}
														height={19.699}
														transform="translate(0 0)"
													/>
												</g>
											</g>
										</g>
									</g>
									<g
										className="at-item-1821"
										transform="translate(6.728 29.43)">
										<g className="bb-item-1821">
											<g transform="translate(0 0)">
												<g className="bc-item-1821">
													<rect
														className="bd-item-1821"
														width={19.18}
														height={12.922}
														transform="translate(-0.018 -0.017)"
													/>
												</g>
											</g>
										</g>
									</g>
									<g
										className="ay-item-1821"
										transform="translate(19.816 4.592)">
										<g className="be-item-1821">
											<g transform="translate(0 0)">
												<g className="bf-item-1821">
													<rect
														className="e-item-1821"
														width={3.59}
														height={3.432}
														transform="translate(-1.003 2.416) rotate(-67.457)"
													/>
												</g>
											</g>
										</g>
									</g>
									<g
										className="ay-item-1821"
										transform="translate(5.128 5.564)">
										<g className="bg-item-1821">
											<g transform="translate(0)">
												<g className="bh-item-1821">
													<rect
														className="e-item-1821"
														width={8.409}
														height={8.369}
														transform="matrix(0.651, -0.759, 0.759, 0.651, -3.031, 3.536)"
													/>
												</g>
											</g>
										</g>
									</g>
									<g
										className="at-item-1821"
										transform="translate(19.816 25.39)">
										<g className="bi-item-1821">
											<path
												className="ac-item-1821"
												d="M266.662,343.872a7.127,7.127,0,0,0,2.045-.938c-1.039-1.307-1.491-1.894-1.491-1.894l-1.049.475Z"
												transform="translate(-266.166 -341.04)"
											/>
										</g>
									</g>
									<g
										className="bj-item-1821"
										transform="translate(5.128 20.915)">
										<g className="bk-item-1821">
											<path
												className="ac-item-1821"
												d="M71.058,280.936c.9,1.542,2.078,3.352,3.586,3.989-.637,1.207-1.173,2.145-1.173,2.145a11.476,11.476,0,0,1-4.592-5.095c1.039-.469,2.179-1.039,2.179-1.039"
												transform="translate(-68.879 -280.936)"
											/>
										</g>
									</g>
									<g
										className="bl-item-1821"
										transform="translate(5.006)">
										<g className="bm-item-1821">
											<g transform="translate(0 0)">
												<g className="bn-item-1821">
													<rect
														className="bo-item-1821"
														width={22.583}
														height={4.548}
														transform="translate(0 0)"
													/>
												</g>
											</g>
										</g>
									</g>
									<g
										className="bp-item-1821"
										transform="translate(3.839 18.557)">
										<g className="bq-item-1821">
											<path
												className="u-item-1821"
												d="M76.576,249.259a12.512,12.512,0,0,1-1.43,4.134,12.882,12.882,0,0,1-2.776,3.406,12.663,12.663,0,0,1-3.776,2.269,12.838,12.838,0,0,1-8.689.162,12.662,12.662,0,0,1-3.859-2.125,12.9,12.9,0,0,1-2.9-3.3,12.476,12.476,0,0,1-1.584-4.077A12.859,12.859,0,0,0,60,258.959a12.818,12.818,0,0,0,8.5-.158,12.9,12.9,0,0,0,8.083-9.542"
												transform="translate(-51.561 -249.259)"
											/>
										</g>
									</g>
									<g
										className="at-item-1821"
										transform="translate(3.588 3.355)">
										<g className="br-item-1821">
											<path
												className="u-item-1821"
												d="M48.195,56.993a12.512,12.512,0,0,1,1.158-4.61,12.766,12.766,0,0,1,6.864-6.435A12.775,12.775,0,0,1,69.7,48.561a12.7,12.7,0,0,1,2.791,3.883,12.513,12.513,0,0,1,1.134,4.616l-.073-.59-.1-.586c-.039-.194-.083-.387-.124-.58s-.1-.382-.151-.574a12.605,12.605,0,0,0-.863-2.2,12.808,12.808,0,0,0-6.793-6.2,12.743,12.743,0,0,0-9.164-.024,12.761,12.761,0,0,0-3.979,2.444,12.923,12.923,0,0,0-4.181,8.247"
												transform="translate(-48.195 -45.06)"
											/>
										</g>
									</g>
									<path
										className="u-item-1821"
										d="M95.872,105.864a9.9,9.9,0,1,1,9.9-9.9,9.9,9.9,0,0,1-9.9,9.9"
										transform="translate(-79.572 -79.658)"
									/>
									<path
										className="bs-item-1821"
										d="M128.35,119.3l1.726-1.271a.083.083,0,0,0,.034-.067l-.025-3.763a.083.083,0,0,0-.016-.049l-1.408-1.912a.083.083,0,0,0-.116-.017l-.267.2a.083.083,0,0,0-.018.116l.5.678-.965.71-.5-.678a.083.083,0,0,0-.116-.018l-.267.2a.083.083,0,0,0-.018.116l1.294,1.756a.083.083,0,0,0,.116.018l.267-.2a.083.083,0,0,0,.018-.116l-.5-.678.964-.71.534.725.023,3.418-1.386,1.021-3.258-1.035-.534-.725.965-.711.5.678a.083.083,0,0,0,.116.018l.267-.2a.083.083,0,0,0,.018-.116L125,114.932a.083.083,0,0,0-.116-.018l-.267.2a.083.083,0,0,0-.018.116l.5.678-.965.71-.5-.678a.083.083,0,0,0-.116-.018l-.267.2a.083.083,0,0,0-.018.116l1.408,1.912a.083.083,0,0,0,.042.03l3.587,1.139a.083.083,0,0,0,.074-.012"
										transform="translate(-114.049 -103.851)"
									/>
									<path
										className="bs-item-1821"
										d="M224.859,119.107l3.573-1.182a.083.083,0,0,0,.041-.03l1.386-1.928a.083.083,0,0,0-.019-.116l-.269-.193a.083.083,0,0,0-.116.019l-.492.684-.973-.7.492-.684a.083.083,0,0,0-.019-.116l-.269-.193a.083.083,0,0,0-.116.019l-1.273,1.772a.083.083,0,0,0,.019.116l.269.193a.083.083,0,0,0,.116-.019l.492-.684.973.7-.526.731-3.245,1.073-1.4-1-.018-3.418.526-.732.973.7-.492.684a.083.083,0,0,0,.019.116l.269.193a.083.083,0,0,0,.116-.019l1.273-1.772a.083.083,0,0,0-.019-.116l-.269-.193a.083.083,0,0,0-.116.019l-.492.684-.973-.7.492-.684a.083.083,0,0,0-.019-.116l-.269-.193a.083.083,0,0,0-.116.019l-1.386,1.928a.083.083,0,0,0-.016.049l.02,3.764a.083.083,0,0,0,.034.067l1.74,1.251a.083.083,0,0,0,.074.011"
										transform="translate(-206.389 -103.664)"
									/>
									<path
										className="bs-item-1821"
										d="M247.5,199.847l.1-.316a.083.083,0,0,0-.054-.1l-2.262-.722a.083.083,0,0,0-.051,0l-3.573,1.182a.083.083,0,0,0-.053.053l-.652,2.042a.083.083,0,0,0,.012.074l2.228,3.033a.083.083,0,0,0,.042.03l2.262.722a.083.083,0,0,0,.1-.054l.1-.316a.083.083,0,0,0-.054-.1l-.8-.256.364-1.141.8.256a.083.083,0,0,0,.1-.054l.1-.316a.083.083,0,0,0-.054-.1l-2.078-.663a.083.083,0,0,0-.1.054l-.1.316a.083.083,0,0,0,.054.1l.8.256-.364,1.141-.858-.274-2.024-2.755.523-1.64,3.245-1.073.858.274-.364,1.141-.8-.256a.083.083,0,0,0-.1.054l-.1.316a.083.083,0,0,0,.054.1l2.078.663a.083.083,0,0,0,.1-.054l.1-.316a.083.083,0,0,0-.054-.1l-.8-.256.364-1.141.8.256a.083.083,0,0,0,.1-.054"
										transform="translate(-223.017 -183.909)"
									/>
									<path
										className="bs-item-1821"
										d="M179.252,247.842l2.228,3.033a.083.083,0,0,1,.016.049l.012,2.375a.083.083,0,0,1-.082.083l-.331,0a.083.083,0,0,1-.083-.082l0-.842-1.2.006,0,.842a.083.083,0,0,1-.082.083l-.331,0a.083.083,0,0,1-.083-.082l-.011-2.182a.083.083,0,0,1,.082-.083l.331,0a.083.083,0,0,1,.083.082l0,.842,1.2-.006,0-.9-2.024-2.755-1.721.009-1.995,2.776,0,.9,1.2-.006,0-.842a.083.083,0,0,1,.082-.083l.331,0a.083.083,0,0,1,.083.082l.011,2.182a.083.083,0,0,1-.082.083l-.331,0a.083.083,0,0,1-.083-.082l0-.842-1.2.006,0,.842a.083.083,0,0,1-.082.083l-.331,0a.083.083,0,0,1-.083-.082l-.012-2.375a.083.083,0,0,1,.016-.049l2.2-3.056a.083.083,0,0,1,.067-.035l2.143-.011a.083.083,0,0,1,.067.034"
										transform="translate(-161.752 -229.359)"
									/>
									<path
										className="bs-item-1821"
										d="M114.762,200.678l-3.585-1.144a.083.083,0,0,0-.051,0l-2.255.746a.083.083,0,0,0-.053.1l.1.315a.083.083,0,0,0,.1.053l.8-.264.376,1.137-.8.264a.083.083,0,0,0-.053.1l.1.315a.083.083,0,0,0,.1.053l2.071-.685a.083.083,0,0,0,.053-.1l-.1-.315a.083.083,0,0,0-.1-.053l-.8.264-.376-1.137.855-.283,3.256,1.039.54,1.634-1.995,2.776-.855.283-.376-1.137.8-.264a.083.083,0,0,0,.053-.1l-.1-.315a.083.083,0,0,0-.1-.053l-2.071.685a.083.083,0,0,0-.053.1l.1.315a.083.083,0,0,0,.1.053l.8-.264.376,1.137-.8.264a.083.083,0,0,0-.053.1l.1.315a.083.083,0,0,0,.1.053l2.254-.746a.083.083,0,0,0,.041-.03l2.2-3.056a.082.082,0,0,0,.011-.074l-.673-2.035a.083.083,0,0,0-.053-.053"
										transform="translate(-100.713 -184.675)"
									/>
								</g>
							</g>
							<g
								className="dc-item-1821"
								transform="matrix(1, 0, 0, 1, -1263.53, -75.68)">
								<rect
									className="u-item-1821"
									width={209}
									height={43}
									rx={15}
									transform="translate(1263.53 75.68)"
								/>
							</g>
							<text
								className="bt-item-1821"
								transform="translate(32 30)">
								<tspan x={0} y={0}>
									{'Barranquilla'}
								</tspan>
							</text>
						</g>
					</React.Fragment>
				)}
				{selectedImage !== 13 ? (
					<g transform="translate(1311 121)">
						<BluePoint onHover={() => setSelectedImage(13)} />
					</g>
				) : (
					<React.Fragment>
						<g
							transform="translate(1231.535 108.697)"
							onClick={() => setSelectedImage(null)}>
							<g
								className="aq-item-1821"
								transform="translate(88.2 48.808)">
								<g transform="translate(6.919 43.912)">
									<g className="ar-item-1821">
										<use
											transform="translate(-0.07 -0.002)"
											xlinkHref="#rc"
										/>
									</g>
								</g>
								<g className="aq-item-1821">
									<path
										className="as-item-1821"
										d="M32.583,15.631a16.3,16.3,0,1,0-31.3,7.021C4.86,32.337,14.8,43.916,16.147,45.219a.224.224,0,0,0,.308,0c1.475-1.357,12.989-13.976,15.608-24.764.027-.1.051-.206.076-.309s.05-.207.072-.31a16.291,16.291,0,0,0,.338-2.3c0-.03,0-.06.007-.09.027-.381.045-.764.045-1.152,0-.238-.007-.458-.017-.669M16.3,26.2a9.9,9.9,0,1,1,9.9-9.9,9.9,9.9,0,0,1-9.9,9.9"
										transform="translate(0 0)"
									/>
									<g
										className="at-item-1821"
										transform="translate(2.605 2.104)">
										<g className="au-item-1821">
											<g transform="translate(0 0)">
												<g className="av-item-1821">
													<rect
														className="aw-item-1821"
														width={27.55}
														height={14.249}
														transform="translate(-0.08 0)"
													/>
												</g>
											</g>
										</g>
									</g>
									<path
										className="ax-item-1821"
										d="M60.408,47.748A12.752,12.752,0,1,0,73.16,60.5,12.752,12.752,0,0,0,60.408,47.748m0,22.651a9.9,9.9,0,1,1,9.9-9.9,9.9,9.9,0,0,1-9.9,9.9"
										transform="translate(-44.108 -44.193)"
									/>
									<g
										className="ay-item-1821"
										transform="translate(2.903 25.605)">
										<g className="az-item-1821">
											<g transform="translate(0)">
												<g className="ba-item-1821">
													<rect
														className="d-item-1821"
														width={27.296}
														height={19.699}
														transform="translate(0 0)"
													/>
												</g>
											</g>
										</g>
									</g>
									<g
										className="at-item-1821"
										transform="translate(6.728 29.43)">
										<g className="bb-item-1821">
											<g transform="translate(0 0)">
												<g className="bc-item-1821">
													<rect
														className="bd-item-1821"
														width={19.18}
														height={12.922}
														transform="translate(-0.018 -0.017)"
													/>
												</g>
											</g>
										</g>
									</g>
									<g
										className="ay-item-1821"
										transform="translate(19.816 4.592)">
										<g className="be-item-1821">
											<g transform="translate(0 0)">
												<g className="bf-item-1821">
													<rect
														className="e-item-1821"
														width={3.59}
														height={3.432}
														transform="translate(-1.003 2.416) rotate(-67.457)"
													/>
												</g>
											</g>
										</g>
									</g>
									<g
										className="ay-item-1821"
										transform="translate(5.128 5.564)">
										<g className="bg-item-1821">
											<g transform="translate(0)">
												<g className="bh-item-1821">
													<rect
														className="e-item-1821"
														width={8.409}
														height={8.369}
														transform="matrix(0.651, -0.759, 0.759, 0.651, -3.031, 3.536)"
													/>
												</g>
											</g>
										</g>
									</g>
									<g
										className="at-item-1821"
										transform="translate(19.816 25.39)">
										<g className="bi-item-1821">
											<path
												className="ac-item-1821"
												d="M266.662,343.872a7.127,7.127,0,0,0,2.045-.938c-1.039-1.307-1.491-1.894-1.491-1.894l-1.049.475Z"
												transform="translate(-266.166 -341.04)"
											/>
										</g>
									</g>
									<g
										className="bj-item-1821"
										transform="translate(5.128 20.915)">
										<g className="bk-item-1821">
											<path
												className="ac-item-1821"
												d="M71.058,280.936c.9,1.542,2.078,3.352,3.586,3.989-.637,1.207-1.173,2.145-1.173,2.145a11.476,11.476,0,0,1-4.592-5.095c1.039-.469,2.179-1.039,2.179-1.039"
												transform="translate(-68.879 -280.936)"
											/>
										</g>
									</g>
									<g
										className="bl-item-1821"
										transform="translate(5.006)">
										<g className="bm-item-1821">
											<g transform="translate(0 0)">
												<g className="bn-item-1821">
													<rect
														className="bo-item-1821"
														width={22.583}
														height={4.548}
														transform="translate(0 0)"
													/>
												</g>
											</g>
										</g>
									</g>
									<g
										className="bp-item-1821"
										transform="translate(3.839 18.557)">
										<g className="bq-item-1821">
											<path
												className="u-item-1821"
												d="M76.576,249.259a12.512,12.512,0,0,1-1.43,4.134,12.882,12.882,0,0,1-2.776,3.406,12.663,12.663,0,0,1-3.776,2.269,12.838,12.838,0,0,1-8.689.162,12.662,12.662,0,0,1-3.859-2.125,12.9,12.9,0,0,1-2.9-3.3,12.476,12.476,0,0,1-1.584-4.077A12.859,12.859,0,0,0,60,258.959a12.818,12.818,0,0,0,8.5-.158,12.9,12.9,0,0,0,8.083-9.542"
												transform="translate(-51.561 -249.259)"
											/>
										</g>
									</g>
									<g
										className="at-item-1821"
										transform="translate(3.588 3.355)">
										<g className="br-item-1821">
											<path
												className="u-item-1821"
												d="M48.195,56.993a12.512,12.512,0,0,1,1.158-4.61,12.766,12.766,0,0,1,6.864-6.435A12.775,12.775,0,0,1,69.7,48.561a12.7,12.7,0,0,1,2.791,3.883,12.513,12.513,0,0,1,1.134,4.616l-.073-.59-.1-.586c-.039-.194-.083-.387-.124-.58s-.1-.382-.151-.574a12.605,12.605,0,0,0-.863-2.2,12.808,12.808,0,0,0-6.793-6.2,12.743,12.743,0,0,0-9.164-.024,12.761,12.761,0,0,0-3.979,2.444,12.923,12.923,0,0,0-4.181,8.247"
												transform="translate(-48.195 -45.06)"
											/>
										</g>
									</g>
									<path
										className="u-item-1821"
										d="M95.872,105.864a9.9,9.9,0,1,1,9.9-9.9,9.9,9.9,0,0,1-9.9,9.9"
										transform="translate(-79.572 -79.658)"
									/>
									<path
										className="bs-item-1821"
										d="M128.35,119.3l1.726-1.271a.083.083,0,0,0,.034-.067l-.025-3.763a.083.083,0,0,0-.016-.049l-1.408-1.912a.083.083,0,0,0-.116-.017l-.267.2a.083.083,0,0,0-.018.116l.5.678-.965.71-.5-.678a.083.083,0,0,0-.116-.018l-.267.2a.083.083,0,0,0-.018.116l1.294,1.756a.083.083,0,0,0,.116.018l.267-.2a.083.083,0,0,0,.018-.116l-.5-.678.964-.71.534.725.023,3.418-1.386,1.021-3.258-1.035-.534-.725.965-.711.5.678a.083.083,0,0,0,.116.018l.267-.2a.083.083,0,0,0,.018-.116L125,114.932a.083.083,0,0,0-.116-.018l-.267.2a.083.083,0,0,0-.018.116l.5.678-.965.71-.5-.678a.083.083,0,0,0-.116-.018l-.267.2a.083.083,0,0,0-.018.116l1.408,1.912a.083.083,0,0,0,.042.03l3.587,1.139a.083.083,0,0,0,.074-.012"
										transform="translate(-114.049 -103.851)"
									/>
									<path
										className="bs-item-1821"
										d="M224.859,119.107l3.573-1.182a.083.083,0,0,0,.041-.03l1.386-1.928a.083.083,0,0,0-.019-.116l-.269-.193a.083.083,0,0,0-.116.019l-.492.684-.973-.7.492-.684a.083.083,0,0,0-.019-.116l-.269-.193a.083.083,0,0,0-.116.019l-1.273,1.772a.083.083,0,0,0,.019.116l.269.193a.083.083,0,0,0,.116-.019l.492-.684.973.7-.526.731-3.245,1.073-1.4-1-.018-3.418.526-.732.973.7-.492.684a.083.083,0,0,0,.019.116l.269.193a.083.083,0,0,0,.116-.019l1.273-1.772a.083.083,0,0,0-.019-.116l-.269-.193a.083.083,0,0,0-.116.019l-.492.684-.973-.7.492-.684a.083.083,0,0,0-.019-.116l-.269-.193a.083.083,0,0,0-.116.019l-1.386,1.928a.083.083,0,0,0-.016.049l.02,3.764a.083.083,0,0,0,.034.067l1.74,1.251a.083.083,0,0,0,.074.011"
										transform="translate(-206.389 -103.664)"
									/>
									<path
										className="bs-item-1821"
										d="M247.5,199.847l.1-.316a.083.083,0,0,0-.054-.1l-2.262-.722a.083.083,0,0,0-.051,0l-3.573,1.182a.083.083,0,0,0-.053.053l-.652,2.042a.083.083,0,0,0,.012.074l2.228,3.033a.083.083,0,0,0,.042.03l2.262.722a.083.083,0,0,0,.1-.054l.1-.316a.083.083,0,0,0-.054-.1l-.8-.256.364-1.141.8.256a.083.083,0,0,0,.1-.054l.1-.316a.083.083,0,0,0-.054-.1l-2.078-.663a.083.083,0,0,0-.1.054l-.1.316a.083.083,0,0,0,.054.1l.8.256-.364,1.141-.858-.274-2.024-2.755.523-1.64,3.245-1.073.858.274-.364,1.141-.8-.256a.083.083,0,0,0-.1.054l-.1.316a.083.083,0,0,0,.054.1l2.078.663a.083.083,0,0,0,.1-.054l.1-.316a.083.083,0,0,0-.054-.1l-.8-.256.364-1.141.8.256a.083.083,0,0,0,.1-.054"
										transform="translate(-223.017 -183.909)"
									/>
									<path
										className="bs-item-1821"
										d="M179.252,247.842l2.228,3.033a.083.083,0,0,1,.016.049l.012,2.375a.083.083,0,0,1-.082.083l-.331,0a.083.083,0,0,1-.083-.082l0-.842-1.2.006,0,.842a.083.083,0,0,1-.082.083l-.331,0a.083.083,0,0,1-.083-.082l-.011-2.182a.083.083,0,0,1,.082-.083l.331,0a.083.083,0,0,1,.083.082l0,.842,1.2-.006,0-.9-2.024-2.755-1.721.009-1.995,2.776,0,.9,1.2-.006,0-.842a.083.083,0,0,1,.082-.083l.331,0a.083.083,0,0,1,.083.082l.011,2.182a.083.083,0,0,1-.082.083l-.331,0a.083.083,0,0,1-.083-.082l0-.842-1.2.006,0,.842a.083.083,0,0,1-.082.083l-.331,0a.083.083,0,0,1-.083-.082l-.012-2.375a.083.083,0,0,1,.016-.049l2.2-3.056a.083.083,0,0,1,.067-.035l2.143-.011a.083.083,0,0,1,.067.034"
										transform="translate(-161.752 -229.359)"
									/>
									<path
										className="bs-item-1821"
										d="M114.762,200.678l-3.585-1.144a.083.083,0,0,0-.051,0l-2.255.746a.083.083,0,0,0-.053.1l.1.315a.083.083,0,0,0,.1.053l.8-.264.376,1.137-.8.264a.083.083,0,0,0-.053.1l.1.315a.083.083,0,0,0,.1.053l2.071-.685a.083.083,0,0,0,.053-.1l-.1-.315a.083.083,0,0,0-.1-.053l-.8.264-.376-1.137.855-.283,3.256,1.039.54,1.634-1.995,2.776-.855.283-.376-1.137.8-.264a.083.083,0,0,0,.053-.1l-.1-.315a.083.083,0,0,0-.1-.053l-2.071.685a.083.083,0,0,0-.053.1l.1.315a.083.083,0,0,0,.1.053l.8-.264.376,1.137-.8.264a.083.083,0,0,0-.053.1l.1.315a.083.083,0,0,0,.1.053l2.254-.746a.083.083,0,0,0,.041-.03l2.2-3.056a.082.082,0,0,0,.011-.074l-.673-2.035a.083.083,0,0,0-.053-.053"
										transform="translate(-100.713 -184.675)"
									/>
								</g>
							</g>
							<g
								className="cy-item-1821"
								transform="matrix(1, 0, 0, 1, -1231.53, -108.7)">
								<rect
									className="u-item-1821"
									width={209}
									height={43}
									rx={15}
									transform="translate(1231.53 108.7)"
								/>
							</g>
							<text
								className="bt-item-1821"
								transform="translate(39 30)">
								<tspan x={0} y={0}>
									{'Cartagena'}
								</tspan>
							</text>
						</g>
					</React.Fragment>
				)}
				{selectedImage !== 12 ? (
					<g transform="translate(1283 216)">
						<BluePoint onHover={() => setSelectedImage(12)} />
					</g>
				) : (
					<React.Fragment>
						<g
							transform="translate(1202.488 188.711)"
							onClick={() => setSelectedImage(null)}>
							<g
								className="aq-item-1821"
								transform="translate(88.2 48.808)">
								<g transform="translate(6.919 43.912)">
									<g className="ar-item-1821">
										<use
											transform="translate(-0.07 -0.002)"
											xlinkHref="#rc"
										/>
									</g>
								</g>
								<g className="aq-item-1821">
									<path
										className="as-item-1821"
										d="M32.583,15.631a16.3,16.3,0,1,0-31.3,7.021C4.86,32.337,14.8,43.916,16.147,45.219a.224.224,0,0,0,.308,0c1.475-1.357,12.989-13.976,15.608-24.764.027-.1.051-.206.076-.309s.05-.207.072-.31a16.291,16.291,0,0,0,.338-2.3c0-.03,0-.06.007-.09.027-.381.045-.764.045-1.152,0-.238-.007-.458-.017-.669M16.3,26.2a9.9,9.9,0,1,1,9.9-9.9,9.9,9.9,0,0,1-9.9,9.9"
										transform="translate(0 0)"
									/>
									<g
										className="at-item-1821"
										transform="translate(2.605 2.104)">
										<g className="au-item-1821">
											<g transform="translate(0 0)">
												<g className="av-item-1821">
													<rect
														className="aw-item-1821"
														width={27.55}
														height={14.249}
														transform="translate(-0.08 0)"
													/>
												</g>
											</g>
										</g>
									</g>
									<path
										className="ax-item-1821"
										d="M60.408,47.748A12.752,12.752,0,1,0,73.16,60.5,12.752,12.752,0,0,0,60.408,47.748m0,22.651a9.9,9.9,0,1,1,9.9-9.9,9.9,9.9,0,0,1-9.9,9.9"
										transform="translate(-44.108 -44.193)"
									/>
									<g
										className="ay-item-1821"
										transform="translate(2.903 25.605)">
										<g className="az-item-1821">
											<g transform="translate(0)">
												<g className="ba-item-1821">
													<rect
														className="d-item-1821"
														width={27.296}
														height={19.699}
														transform="translate(0 0)"
													/>
												</g>
											</g>
										</g>
									</g>
									<g
										className="at-item-1821"
										transform="translate(6.728 29.43)">
										<g className="bb-item-1821">
											<g transform="translate(0 0)">
												<g className="bc-item-1821">
													<rect
														className="bd-item-1821"
														width={19.18}
														height={12.922}
														transform="translate(-0.018 -0.017)"
													/>
												</g>
											</g>
										</g>
									</g>
									<g
										className="ay-item-1821"
										transform="translate(19.816 4.592)">
										<g className="be-item-1821">
											<g transform="translate(0 0)">
												<g className="bf-item-1821">
													<rect
														className="e-item-1821"
														width={3.59}
														height={3.432}
														transform="translate(-1.003 2.416) rotate(-67.457)"
													/>
												</g>
											</g>
										</g>
									</g>
									<g
										className="ay-item-1821"
										transform="translate(5.128 5.564)">
										<g className="bg-item-1821">
											<g transform="translate(0)">
												<g className="bh-item-1821">
													<rect
														className="e-item-1821"
														width={8.409}
														height={8.369}
														transform="matrix(0.651, -0.759, 0.759, 0.651, -3.031, 3.536)"
													/>
												</g>
											</g>
										</g>
									</g>
									<g
										className="at-item-1821"
										transform="translate(19.816 25.39)">
										<g className="bi-item-1821">
											<path
												className="ac-item-1821"
												d="M266.662,343.872a7.127,7.127,0,0,0,2.045-.938c-1.039-1.307-1.491-1.894-1.491-1.894l-1.049.475Z"
												transform="translate(-266.166 -341.04)"
											/>
										</g>
									</g>
									<g
										className="bj-item-1821"
										transform="translate(5.128 20.915)">
										<g className="bk-item-1821">
											<path
												className="ac-item-1821"
												d="M71.058,280.936c.9,1.542,2.078,3.352,3.586,3.989-.637,1.207-1.173,2.145-1.173,2.145a11.476,11.476,0,0,1-4.592-5.095c1.039-.469,2.179-1.039,2.179-1.039"
												transform="translate(-68.879 -280.936)"
											/>
										</g>
									</g>
									<g
										className="bl-item-1821"
										transform="translate(5.006)">
										<g className="bm-item-1821">
											<g transform="translate(0 0)">
												<g className="bn-item-1821">
													<rect
														className="bo-item-1821"
														width={22.583}
														height={4.548}
														transform="translate(0 0)"
													/>
												</g>
											</g>
										</g>
									</g>
									<g
										className="bp-item-1821"
										transform="translate(3.839 18.557)">
										<g className="bq-item-1821">
											<path
												className="u-item-1821"
												d="M76.576,249.259a12.512,12.512,0,0,1-1.43,4.134,12.882,12.882,0,0,1-2.776,3.406,12.663,12.663,0,0,1-3.776,2.269,12.838,12.838,0,0,1-8.689.162,12.662,12.662,0,0,1-3.859-2.125,12.9,12.9,0,0,1-2.9-3.3,12.476,12.476,0,0,1-1.584-4.077A12.859,12.859,0,0,0,60,258.959a12.818,12.818,0,0,0,8.5-.158,12.9,12.9,0,0,0,8.083-9.542"
												transform="translate(-51.561 -249.259)"
											/>
										</g>
									</g>
									<g
										className="at-item-1821"
										transform="translate(3.588 3.355)">
										<g className="br-item-1821">
											<path
												className="u-item-1821"
												d="M48.195,56.993a12.512,12.512,0,0,1,1.158-4.61,12.766,12.766,0,0,1,6.864-6.435A12.775,12.775,0,0,1,69.7,48.561a12.7,12.7,0,0,1,2.791,3.883,12.513,12.513,0,0,1,1.134,4.616l-.073-.59-.1-.586c-.039-.194-.083-.387-.124-.58s-.1-.382-.151-.574a12.605,12.605,0,0,0-.863-2.2,12.808,12.808,0,0,0-6.793-6.2,12.743,12.743,0,0,0-9.164-.024,12.761,12.761,0,0,0-3.979,2.444,12.923,12.923,0,0,0-4.181,8.247"
												transform="translate(-48.195 -45.06)"
											/>
										</g>
									</g>
									<path
										className="u-item-1821"
										d="M95.872,105.864a9.9,9.9,0,1,1,9.9-9.9,9.9,9.9,0,0,1-9.9,9.9"
										transform="translate(-79.572 -79.658)"
									/>
									<path
										className="bs-item-1821"
										d="M128.35,119.3l1.726-1.271a.083.083,0,0,0,.034-.067l-.025-3.763a.083.083,0,0,0-.016-.049l-1.408-1.912a.083.083,0,0,0-.116-.017l-.267.2a.083.083,0,0,0-.018.116l.5.678-.965.71-.5-.678a.083.083,0,0,0-.116-.018l-.267.2a.083.083,0,0,0-.018.116l1.294,1.756a.083.083,0,0,0,.116.018l.267-.2a.083.083,0,0,0,.018-.116l-.5-.678.964-.71.534.725.023,3.418-1.386,1.021-3.258-1.035-.534-.725.965-.711.5.678a.083.083,0,0,0,.116.018l.267-.2a.083.083,0,0,0,.018-.116L125,114.932a.083.083,0,0,0-.116-.018l-.267.2a.083.083,0,0,0-.018.116l.5.678-.965.71-.5-.678a.083.083,0,0,0-.116-.018l-.267.2a.083.083,0,0,0-.018.116l1.408,1.912a.083.083,0,0,0,.042.03l3.587,1.139a.083.083,0,0,0,.074-.012"
										transform="translate(-114.049 -103.851)"
									/>
									<path
										className="bs-item-1821"
										d="M224.859,119.107l3.573-1.182a.083.083,0,0,0,.041-.03l1.386-1.928a.083.083,0,0,0-.019-.116l-.269-.193a.083.083,0,0,0-.116.019l-.492.684-.973-.7.492-.684a.083.083,0,0,0-.019-.116l-.269-.193a.083.083,0,0,0-.116.019l-1.273,1.772a.083.083,0,0,0,.019.116l.269.193a.083.083,0,0,0,.116-.019l.492-.684.973.7-.526.731-3.245,1.073-1.4-1-.018-3.418.526-.732.973.7-.492.684a.083.083,0,0,0,.019.116l.269.193a.083.083,0,0,0,.116-.019l1.273-1.772a.083.083,0,0,0-.019-.116l-.269-.193a.083.083,0,0,0-.116.019l-.492.684-.973-.7.492-.684a.083.083,0,0,0-.019-.116l-.269-.193a.083.083,0,0,0-.116.019l-1.386,1.928a.083.083,0,0,0-.016.049l.02,3.764a.083.083,0,0,0,.034.067l1.74,1.251a.083.083,0,0,0,.074.011"
										transform="translate(-206.389 -103.664)"
									/>
									<path
										className="bs-item-1821"
										d="M247.5,199.847l.1-.316a.083.083,0,0,0-.054-.1l-2.262-.722a.083.083,0,0,0-.051,0l-3.573,1.182a.083.083,0,0,0-.053.053l-.652,2.042a.083.083,0,0,0,.012.074l2.228,3.033a.083.083,0,0,0,.042.03l2.262.722a.083.083,0,0,0,.1-.054l.1-.316a.083.083,0,0,0-.054-.1l-.8-.256.364-1.141.8.256a.083.083,0,0,0,.1-.054l.1-.316a.083.083,0,0,0-.054-.1l-2.078-.663a.083.083,0,0,0-.1.054l-.1.316a.083.083,0,0,0,.054.1l.8.256-.364,1.141-.858-.274-2.024-2.755.523-1.64,3.245-1.073.858.274-.364,1.141-.8-.256a.083.083,0,0,0-.1.054l-.1.316a.083.083,0,0,0,.054.1l2.078.663a.083.083,0,0,0,.1-.054l.1-.316a.083.083,0,0,0-.054-.1l-.8-.256.364-1.141.8.256a.083.083,0,0,0,.1-.054"
										transform="translate(-223.017 -183.909)"
									/>
									<path
										className="bs-item-1821"
										d="M179.252,247.842l2.228,3.033a.083.083,0,0,1,.016.049l.012,2.375a.083.083,0,0,1-.082.083l-.331,0a.083.083,0,0,1-.083-.082l0-.842-1.2.006,0,.842a.083.083,0,0,1-.082.083l-.331,0a.083.083,0,0,1-.083-.082l-.011-2.182a.083.083,0,0,1,.082-.083l.331,0a.083.083,0,0,1,.083.082l0,.842,1.2-.006,0-.9-2.024-2.755-1.721.009-1.995,2.776,0,.9,1.2-.006,0-.842a.083.083,0,0,1,.082-.083l.331,0a.083.083,0,0,1,.083.082l.011,2.182a.083.083,0,0,1-.082.083l-.331,0a.083.083,0,0,1-.083-.082l0-.842-1.2.006,0,.842a.083.083,0,0,1-.082.083l-.331,0a.083.083,0,0,1-.083-.082l-.012-2.375a.083.083,0,0,1,.016-.049l2.2-3.056a.083.083,0,0,1,.067-.035l2.143-.011a.083.083,0,0,1,.067.034"
										transform="translate(-161.752 -229.359)"
									/>
									<path
										className="bs-item-1821"
										d="M114.762,200.678l-3.585-1.144a.083.083,0,0,0-.051,0l-2.255.746a.083.083,0,0,0-.053.1l.1.315a.083.083,0,0,0,.1.053l.8-.264.376,1.137-.8.264a.083.083,0,0,0-.053.1l.1.315a.083.083,0,0,0,.1.053l2.071-.685a.083.083,0,0,0,.053-.1l-.1-.315a.083.083,0,0,0-.1-.053l-.8.264-.376-1.137.855-.283,3.256,1.039.54,1.634-1.995,2.776-.855.283-.376-1.137.8-.264a.083.083,0,0,0,.053-.1l-.1-.315a.083.083,0,0,0-.1-.053l-2.071.685a.083.083,0,0,0-.053.1l.1.315a.083.083,0,0,0,.1.053l.8-.264.376,1.137-.8.264a.083.083,0,0,0-.053.1l.1.315a.083.083,0,0,0,.1.053l2.254-.746a.083.083,0,0,0,.041-.03l2.2-3.056a.082.082,0,0,0,.011-.074l-.673-2.035a.083.083,0,0,0-.053-.053"
										transform="translate(-100.713 -184.675)"
									/>
								</g>
							</g>
							<g
								className="cx-item-1821"
								transform="matrix(1, 0, 0, 1, -1202.49, -188.71)">
								<rect
									className="u-item-1821"
									width={209}
									height={43}
									rx={15}
									transform="translate(1202.49 188.71)"
								/>
							</g>
							<text
								className="bt-item-1821"
								transform="translate(50.5 30)">
								<tspan x={0} y={0}>
									{'Montería'}
								</tspan>
							</text>
						</g>
					</React.Fragment>
				)}
				{selectedImage !== 11 ? (
					<g transform="translate(1403 147)">
						<BluePoint onHover={() => setSelectedImage(11)} />
					</g>
				) : (
					<React.Fragment>
						<g
							transform="translate(1332.535 120.69)"
							onClick={() => setSelectedImage(null)}>
							<g
								className="aq-item-1821"
								transform="translate(88.2 48.808)">
								<g transform="translate(6.919 43.912)">
									<g className="ar-item-1821">
										<use
											transform="translate(-0.07 -0.002)"
											xlinkHref="#rc"
										/>
									</g>
								</g>
								<g className="aq-item-1821">
									<path
										className="as-item-1821"
										d="M32.583,15.631a16.3,16.3,0,1,0-31.3,7.021C4.86,32.337,14.8,43.916,16.147,45.219a.224.224,0,0,0,.308,0c1.475-1.357,12.989-13.976,15.608-24.764.027-.1.051-.206.076-.309s.05-.207.072-.31a16.291,16.291,0,0,0,.338-2.3c0-.03,0-.06.007-.09.027-.381.045-.764.045-1.152,0-.238-.007-.458-.017-.669M16.3,26.2a9.9,9.9,0,1,1,9.9-9.9,9.9,9.9,0,0,1-9.9,9.9"
										transform="translate(0 0)"
									/>
									<g
										className="at-item-1821"
										transform="translate(2.605 2.104)">
										<g className="au-item-1821">
											<g transform="translate(0 0)">
												<g className="av-item-1821">
													<rect
														className="aw-item-1821"
														width={27.55}
														height={14.249}
														transform="translate(-0.08 0)"
													/>
												</g>
											</g>
										</g>
									</g>
									<path
										className="ax-item-1821"
										d="M60.408,47.748A12.752,12.752,0,1,0,73.16,60.5,12.752,12.752,0,0,0,60.408,47.748m0,22.651a9.9,9.9,0,1,1,9.9-9.9,9.9,9.9,0,0,1-9.9,9.9"
										transform="translate(-44.108 -44.193)"
									/>
									<g
										className="ay-item-1821"
										transform="translate(2.903 25.605)">
										<g className="az-item-1821">
											<g transform="translate(0)">
												<g className="ba-item-1821">
													<rect
														className="d-item-1821"
														width={27.296}
														height={19.699}
														transform="translate(0 0)"
													/>
												</g>
											</g>
										</g>
									</g>
									<g
										className="at-item-1821"
										transform="translate(6.728 29.43)">
										<g className="bb-item-1821">
											<g transform="translate(0 0)">
												<g className="bc-item-1821">
													<rect
														className="bd-item-1821"
														width={19.18}
														height={12.922}
														transform="translate(-0.018 -0.017)"
													/>
												</g>
											</g>
										</g>
									</g>
									<g
										className="ay-item-1821"
										transform="translate(19.816 4.592)">
										<g className="be-item-1821">
											<g transform="translate(0 0)">
												<g className="bf-item-1821">
													<rect
														className="e-item-1821"
														width={3.59}
														height={3.432}
														transform="translate(-1.003 2.416) rotate(-67.457)"
													/>
												</g>
											</g>
										</g>
									</g>
									<g
										className="ay-item-1821"
										transform="translate(5.128 5.564)">
										<g className="bg-item-1821">
											<g transform="translate(0)">
												<g className="bh-item-1821">
													<rect
														className="e-item-1821"
														width={8.409}
														height={8.369}
														transform="matrix(0.651, -0.759, 0.759, 0.651, -3.031, 3.536)"
													/>
												</g>
											</g>
										</g>
									</g>
									<g
										className="at-item-1821"
										transform="translate(19.816 25.39)">
										<g className="bi-item-1821">
											<path
												className="ac-item-1821"
												d="M266.662,343.872a7.127,7.127,0,0,0,2.045-.938c-1.039-1.307-1.491-1.894-1.491-1.894l-1.049.475Z"
												transform="translate(-266.166 -341.04)"
											/>
										</g>
									</g>
									<g
										className="bj-item-1821"
										transform="translate(5.128 20.915)">
										<g className="bk-item-1821">
											<path
												className="ac-item-1821"
												d="M71.058,280.936c.9,1.542,2.078,3.352,3.586,3.989-.637,1.207-1.173,2.145-1.173,2.145a11.476,11.476,0,0,1-4.592-5.095c1.039-.469,2.179-1.039,2.179-1.039"
												transform="translate(-68.879 -280.936)"
											/>
										</g>
									</g>
									<g
										className="bl-item-1821"
										transform="translate(5.006)">
										<g className="bm-item-1821">
											<g transform="translate(0 0)">
												<g className="bn-item-1821">
													<rect
														className="bo-item-1821"
														width={22.583}
														height={4.548}
														transform="translate(0 0)"
													/>
												</g>
											</g>
										</g>
									</g>
									<g
										className="bp-item-1821"
										transform="translate(3.839 18.557)">
										<g className="bq-item-1821">
											<path
												className="u-item-1821"
												d="M76.576,249.259a12.512,12.512,0,0,1-1.43,4.134,12.882,12.882,0,0,1-2.776,3.406,12.663,12.663,0,0,1-3.776,2.269,12.838,12.838,0,0,1-8.689.162,12.662,12.662,0,0,1-3.859-2.125,12.9,12.9,0,0,1-2.9-3.3,12.476,12.476,0,0,1-1.584-4.077A12.859,12.859,0,0,0,60,258.959a12.818,12.818,0,0,0,8.5-.158,12.9,12.9,0,0,0,8.083-9.542"
												transform="translate(-51.561 -249.259)"
											/>
										</g>
									</g>
									<g
										className="at-item-1821"
										transform="translate(3.588 3.355)">
										<g className="br-item-1821">
											<path
												className="u-item-1821"
												d="M48.195,56.993a12.512,12.512,0,0,1,1.158-4.61,12.766,12.766,0,0,1,6.864-6.435A12.775,12.775,0,0,1,69.7,48.561a12.7,12.7,0,0,1,2.791,3.883,12.513,12.513,0,0,1,1.134,4.616l-.073-.59-.1-.586c-.039-.194-.083-.387-.124-.58s-.1-.382-.151-.574a12.605,12.605,0,0,0-.863-2.2,12.808,12.808,0,0,0-6.793-6.2,12.743,12.743,0,0,0-9.164-.024,12.761,12.761,0,0,0-3.979,2.444,12.923,12.923,0,0,0-4.181,8.247"
												transform="translate(-48.195 -45.06)"
											/>
										</g>
									</g>
									<path
										className="u-item-1821"
										d="M95.872,105.864a9.9,9.9,0,1,1,9.9-9.9,9.9,9.9,0,0,1-9.9,9.9"
										transform="translate(-79.572 -79.658)"
									/>
									<path
										className="bs-item-1821"
										d="M128.35,119.3l1.726-1.271a.083.083,0,0,0,.034-.067l-.025-3.763a.083.083,0,0,0-.016-.049l-1.408-1.912a.083.083,0,0,0-.116-.017l-.267.2a.083.083,0,0,0-.018.116l.5.678-.965.71-.5-.678a.083.083,0,0,0-.116-.018l-.267.2a.083.083,0,0,0-.018.116l1.294,1.756a.083.083,0,0,0,.116.018l.267-.2a.083.083,0,0,0,.018-.116l-.5-.678.964-.71.534.725.023,3.418-1.386,1.021-3.258-1.035-.534-.725.965-.711.5.678a.083.083,0,0,0,.116.018l.267-.2a.083.083,0,0,0,.018-.116L125,114.932a.083.083,0,0,0-.116-.018l-.267.2a.083.083,0,0,0-.018.116l.5.678-.965.71-.5-.678a.083.083,0,0,0-.116-.018l-.267.2a.083.083,0,0,0-.018.116l1.408,1.912a.083.083,0,0,0,.042.03l3.587,1.139a.083.083,0,0,0,.074-.012"
										transform="translate(-114.049 -103.851)"
									/>
									<path
										className="bs-item-1821"
										d="M224.859,119.107l3.573-1.182a.083.083,0,0,0,.041-.03l1.386-1.928a.083.083,0,0,0-.019-.116l-.269-.193a.083.083,0,0,0-.116.019l-.492.684-.973-.7.492-.684a.083.083,0,0,0-.019-.116l-.269-.193a.083.083,0,0,0-.116.019l-1.273,1.772a.083.083,0,0,0,.019.116l.269.193a.083.083,0,0,0,.116-.019l.492-.684.973.7-.526.731-3.245,1.073-1.4-1-.018-3.418.526-.732.973.7-.492.684a.083.083,0,0,0,.019.116l.269.193a.083.083,0,0,0,.116-.019l1.273-1.772a.083.083,0,0,0-.019-.116l-.269-.193a.083.083,0,0,0-.116.019l-.492.684-.973-.7.492-.684a.083.083,0,0,0-.019-.116l-.269-.193a.083.083,0,0,0-.116.019l-1.386,1.928a.083.083,0,0,0-.016.049l.02,3.764a.083.083,0,0,0,.034.067l1.74,1.251a.083.083,0,0,0,.074.011"
										transform="translate(-206.389 -103.664)"
									/>
									<path
										className="bs-item-1821"
										d="M247.5,199.847l.1-.316a.083.083,0,0,0-.054-.1l-2.262-.722a.083.083,0,0,0-.051,0l-3.573,1.182a.083.083,0,0,0-.053.053l-.652,2.042a.083.083,0,0,0,.012.074l2.228,3.033a.083.083,0,0,0,.042.03l2.262.722a.083.083,0,0,0,.1-.054l.1-.316a.083.083,0,0,0-.054-.1l-.8-.256.364-1.141.8.256a.083.083,0,0,0,.1-.054l.1-.316a.083.083,0,0,0-.054-.1l-2.078-.663a.083.083,0,0,0-.1.054l-.1.316a.083.083,0,0,0,.054.1l.8.256-.364,1.141-.858-.274-2.024-2.755.523-1.64,3.245-1.073.858.274-.364,1.141-.8-.256a.083.083,0,0,0-.1.054l-.1.316a.083.083,0,0,0,.054.1l2.078.663a.083.083,0,0,0,.1-.054l.1-.316a.083.083,0,0,0-.054-.1l-.8-.256.364-1.141.8.256a.083.083,0,0,0,.1-.054"
										transform="translate(-223.017 -183.909)"
									/>
									<path
										className="bs-item-1821"
										d="M179.252,247.842l2.228,3.033a.083.083,0,0,1,.016.049l.012,2.375a.083.083,0,0,1-.082.083l-.331,0a.083.083,0,0,1-.083-.082l0-.842-1.2.006,0,.842a.083.083,0,0,1-.082.083l-.331,0a.083.083,0,0,1-.083-.082l-.011-2.182a.083.083,0,0,1,.082-.083l.331,0a.083.083,0,0,1,.083.082l0,.842,1.2-.006,0-.9-2.024-2.755-1.721.009-1.995,2.776,0,.9,1.2-.006,0-.842a.083.083,0,0,1,.082-.083l.331,0a.083.083,0,0,1,.083.082l.011,2.182a.083.083,0,0,1-.082.083l-.331,0a.083.083,0,0,1-.083-.082l0-.842-1.2.006,0,.842a.083.083,0,0,1-.082.083l-.331,0a.083.083,0,0,1-.083-.082l-.012-2.375a.083.083,0,0,1,.016-.049l2.2-3.056a.083.083,0,0,1,.067-.035l2.143-.011a.083.083,0,0,1,.067.034"
										transform="translate(-161.752 -229.359)"
									/>
									<path
										className="bs-item-1821"
										d="M114.762,200.678l-3.585-1.144a.083.083,0,0,0-.051,0l-2.255.746a.083.083,0,0,0-.053.1l.1.315a.083.083,0,0,0,.1.053l.8-.264.376,1.137-.8.264a.083.083,0,0,0-.053.1l.1.315a.083.083,0,0,0,.1.053l2.071-.685a.083.083,0,0,0,.053-.1l-.1-.315a.083.083,0,0,0-.1-.053l-.8.264-.376-1.137.855-.283,3.256,1.039.54,1.634-1.995,2.776-.855.283-.376-1.137.8-.264a.083.083,0,0,0,.053-.1l-.1-.315a.083.083,0,0,0-.1-.053l-2.071.685a.083.083,0,0,0-.053.1l.1.315a.083.083,0,0,0,.1.053l.8-.264.376,1.137-.8.264a.083.083,0,0,0-.053.1l.1.315a.083.083,0,0,0,.1.053l2.254-.746a.083.083,0,0,0,.041-.03l2.2-3.056a.082.082,0,0,0,.011-.074l-.673-2.035a.083.083,0,0,0-.053-.053"
										transform="translate(-100.713 -184.675)"
									/>
								</g>
							</g>
							<g
								className="cz-item-1821"
								transform="matrix(1, 0, 0, 1, -1351.53, -120.69)">
								<rect
									className="u-item-1821"
									width={209}
									height={43}
									rx={15}
									transform="translate(1351.53 120.69)"
								/>
							</g>
							<text
								className="bt-item-1821"
								transform="translate(40.5 30)">
								<tspan x={0} y={0}>
									{'Valledupar'}
								</tspan>
							</text>
						</g>
					</React.Fragment>
				)}
				{selectedImage !== 10 ? (
					<g transform="translate(1480 275)">
						<BluePoint onHover={() => setSelectedImage(10)} />
					</g>
				) : (
					<React.Fragment>
						<g
							transform="translate(1402.535 245.725)"
							onClick={() => setSelectedImage(null)}>
							<g
								className="aq-item-1821"
								transform="translate(88.2 48.808)">
								<g transform="translate(6.919 43.912)">
									<g className="ar-item-1821">
										<use
											transform="translate(-0.07 -0.002)"
											xlinkHref="#rc"
										/>
									</g>
								</g>
								<g className="aq-item-1821">
									<path
										className="as-item-1821"
										d="M32.583,15.631a16.3,16.3,0,1,0-31.3,7.021C4.86,32.337,14.8,43.916,16.147,45.219a.224.224,0,0,0,.308,0c1.475-1.357,12.989-13.976,15.608-24.764.027-.1.051-.206.076-.309s.05-.207.072-.31a16.291,16.291,0,0,0,.338-2.3c0-.03,0-.06.007-.09.027-.381.045-.764.045-1.152,0-.238-.007-.458-.017-.669M16.3,26.2a9.9,9.9,0,1,1,9.9-9.9,9.9,9.9,0,0,1-9.9,9.9"
										transform="translate(0 0)"
									/>
									<g
										className="at-item-1821"
										transform="translate(2.605 2.104)">
										<g className="au-item-1821">
											<g transform="translate(0 0)">
												<g className="av-item-1821">
													<rect
														className="aw-item-1821"
														width={27.55}
														height={14.249}
														transform="translate(-0.08 0)"
													/>
												</g>
											</g>
										</g>
									</g>
									<path
										className="ax-item-1821"
										d="M60.408,47.748A12.752,12.752,0,1,0,73.16,60.5,12.752,12.752,0,0,0,60.408,47.748m0,22.651a9.9,9.9,0,1,1,9.9-9.9,9.9,9.9,0,0,1-9.9,9.9"
										transform="translate(-44.108 -44.193)"
									/>
									<g
										className="ay-item-1821"
										transform="translate(2.903 25.605)">
										<g className="az-item-1821">
											<g transform="translate(0)">
												<g className="ba-item-1821">
													<rect
														className="d-item-1821"
														width={27.296}
														height={19.699}
														transform="translate(0 0)"
													/>
												</g>
											</g>
										</g>
									</g>
									<g
										className="at-item-1821"
										transform="translate(6.728 29.43)">
										<g className="bb-item-1821">
											<g transform="translate(0 0)">
												<g className="bc-item-1821">
													<rect
														className="bd-item-1821"
														width={19.18}
														height={12.922}
														transform="translate(-0.018 -0.017)"
													/>
												</g>
											</g>
										</g>
									</g>
									<g
										className="ay-item-1821"
										transform="translate(19.816 4.592)">
										<g className="be-item-1821">
											<g transform="translate(0 0)">
												<g className="bf-item-1821">
													<rect
														className="e-item-1821"
														width={3.59}
														height={3.432}
														transform="translate(-1.003 2.416) rotate(-67.457)"
													/>
												</g>
											</g>
										</g>
									</g>
									<g
										className="ay-item-1821"
										transform="translate(5.128 5.564)">
										<g className="bg-item-1821">
											<g transform="translate(0)">
												<g className="bh-item-1821">
													<rect
														className="e-item-1821"
														width={8.409}
														height={8.369}
														transform="matrix(0.651, -0.759, 0.759, 0.651, -3.031, 3.536)"
													/>
												</g>
											</g>
										</g>
									</g>
									<g
										className="at-item-1821"
										transform="translate(19.816 25.39)">
										<g className="bi-item-1821">
											<path
												className="ac-item-1821"
												d="M266.662,343.872a7.127,7.127,0,0,0,2.045-.938c-1.039-1.307-1.491-1.894-1.491-1.894l-1.049.475Z"
												transform="translate(-266.166 -341.04)"
											/>
										</g>
									</g>
									<g
										className="bj-item-1821"
										transform="translate(5.128 20.915)">
										<g className="bk-item-1821">
											<path
												className="ac-item-1821"
												d="M71.058,280.936c.9,1.542,2.078,3.352,3.586,3.989-.637,1.207-1.173,2.145-1.173,2.145a11.476,11.476,0,0,1-4.592-5.095c1.039-.469,2.179-1.039,2.179-1.039"
												transform="translate(-68.879 -280.936)"
											/>
										</g>
									</g>
									<g
										className="bl-item-1821"
										transform="translate(5.006)">
										<g className="bm-item-1821">
											<g transform="translate(0 0)">
												<g className="bn-item-1821">
													<rect
														className="bo-item-1821"
														width={22.583}
														height={4.548}
														transform="translate(0 0)"
													/>
												</g>
											</g>
										</g>
									</g>
									<g
										className="bp-item-1821"
										transform="translate(3.839 18.557)">
										<g className="bq-item-1821">
											<path
												className="u-item-1821"
												d="M76.576,249.259a12.512,12.512,0,0,1-1.43,4.134,12.882,12.882,0,0,1-2.776,3.406,12.663,12.663,0,0,1-3.776,2.269,12.838,12.838,0,0,1-8.689.162,12.662,12.662,0,0,1-3.859-2.125,12.9,12.9,0,0,1-2.9-3.3,12.476,12.476,0,0,1-1.584-4.077A12.859,12.859,0,0,0,60,258.959a12.818,12.818,0,0,0,8.5-.158,12.9,12.9,0,0,0,8.083-9.542"
												transform="translate(-51.561 -249.259)"
											/>
										</g>
									</g>
									<g
										className="at-item-1821"
										transform="translate(3.588 3.355)">
										<g className="br-item-1821">
											<path
												className="u-item-1821"
												d="M48.195,56.993a12.512,12.512,0,0,1,1.158-4.61,12.766,12.766,0,0,1,6.864-6.435A12.775,12.775,0,0,1,69.7,48.561a12.7,12.7,0,0,1,2.791,3.883,12.513,12.513,0,0,1,1.134,4.616l-.073-.59-.1-.586c-.039-.194-.083-.387-.124-.58s-.1-.382-.151-.574a12.605,12.605,0,0,0-.863-2.2,12.808,12.808,0,0,0-6.793-6.2,12.743,12.743,0,0,0-9.164-.024,12.761,12.761,0,0,0-3.979,2.444,12.923,12.923,0,0,0-4.181,8.247"
												transform="translate(-48.195 -45.06)"
											/>
										</g>
									</g>
									<path
										className="u-item-1821"
										d="M95.872,105.864a9.9,9.9,0,1,1,9.9-9.9,9.9,9.9,0,0,1-9.9,9.9"
										transform="translate(-79.572 -79.658)"
									/>
									<path
										className="bs-item-1821"
										d="M128.35,119.3l1.726-1.271a.083.083,0,0,0,.034-.067l-.025-3.763a.083.083,0,0,0-.016-.049l-1.408-1.912a.083.083,0,0,0-.116-.017l-.267.2a.083.083,0,0,0-.018.116l.5.678-.965.71-.5-.678a.083.083,0,0,0-.116-.018l-.267.2a.083.083,0,0,0-.018.116l1.294,1.756a.083.083,0,0,0,.116.018l.267-.2a.083.083,0,0,0,.018-.116l-.5-.678.964-.71.534.725.023,3.418-1.386,1.021-3.258-1.035-.534-.725.965-.711.5.678a.083.083,0,0,0,.116.018l.267-.2a.083.083,0,0,0,.018-.116L125,114.932a.083.083,0,0,0-.116-.018l-.267.2a.083.083,0,0,0-.018.116l.5.678-.965.71-.5-.678a.083.083,0,0,0-.116-.018l-.267.2a.083.083,0,0,0-.018.116l1.408,1.912a.083.083,0,0,0,.042.03l3.587,1.139a.083.083,0,0,0,.074-.012"
										transform="translate(-114.049 -103.851)"
									/>
									<path
										className="bs-item-1821"
										d="M224.859,119.107l3.573-1.182a.083.083,0,0,0,.041-.03l1.386-1.928a.083.083,0,0,0-.019-.116l-.269-.193a.083.083,0,0,0-.116.019l-.492.684-.973-.7.492-.684a.083.083,0,0,0-.019-.116l-.269-.193a.083.083,0,0,0-.116.019l-1.273,1.772a.083.083,0,0,0,.019.116l.269.193a.083.083,0,0,0,.116-.019l.492-.684.973.7-.526.731-3.245,1.073-1.4-1-.018-3.418.526-.732.973.7-.492.684a.083.083,0,0,0,.019.116l.269.193a.083.083,0,0,0,.116-.019l1.273-1.772a.083.083,0,0,0-.019-.116l-.269-.193a.083.083,0,0,0-.116.019l-.492.684-.973-.7.492-.684a.083.083,0,0,0-.019-.116l-.269-.193a.083.083,0,0,0-.116.019l-1.386,1.928a.083.083,0,0,0-.016.049l.02,3.764a.083.083,0,0,0,.034.067l1.74,1.251a.083.083,0,0,0,.074.011"
										transform="translate(-206.389 -103.664)"
									/>
									<path
										className="bs-item-1821"
										d="M247.5,199.847l.1-.316a.083.083,0,0,0-.054-.1l-2.262-.722a.083.083,0,0,0-.051,0l-3.573,1.182a.083.083,0,0,0-.053.053l-.652,2.042a.083.083,0,0,0,.012.074l2.228,3.033a.083.083,0,0,0,.042.03l2.262.722a.083.083,0,0,0,.1-.054l.1-.316a.083.083,0,0,0-.054-.1l-.8-.256.364-1.141.8.256a.083.083,0,0,0,.1-.054l.1-.316a.083.083,0,0,0-.054-.1l-2.078-.663a.083.083,0,0,0-.1.054l-.1.316a.083.083,0,0,0,.054.1l.8.256-.364,1.141-.858-.274-2.024-2.755.523-1.64,3.245-1.073.858.274-.364,1.141-.8-.256a.083.083,0,0,0-.1.054l-.1.316a.083.083,0,0,0,.054.1l2.078.663a.083.083,0,0,0,.1-.054l.1-.316a.083.083,0,0,0-.054-.1l-.8-.256.364-1.141.8.256a.083.083,0,0,0,.1-.054"
										transform="translate(-223.017 -183.909)"
									/>
									<path
										className="bs-item-1821"
										d="M179.252,247.842l2.228,3.033a.083.083,0,0,1,.016.049l.012,2.375a.083.083,0,0,1-.082.083l-.331,0a.083.083,0,0,1-.083-.082l0-.842-1.2.006,0,.842a.083.083,0,0,1-.082.083l-.331,0a.083.083,0,0,1-.083-.082l-.011-2.182a.083.083,0,0,1,.082-.083l.331,0a.083.083,0,0,1,.083.082l0,.842,1.2-.006,0-.9-2.024-2.755-1.721.009-1.995,2.776,0,.9,1.2-.006,0-.842a.083.083,0,0,1,.082-.083l.331,0a.083.083,0,0,1,.083.082l.011,2.182a.083.083,0,0,1-.082.083l-.331,0a.083.083,0,0,1-.083-.082l0-.842-1.2.006,0,.842a.083.083,0,0,1-.082.083l-.331,0a.083.083,0,0,1-.083-.082l-.012-2.375a.083.083,0,0,1,.016-.049l2.2-3.056a.083.083,0,0,1,.067-.035l2.143-.011a.083.083,0,0,1,.067.034"
										transform="translate(-161.752 -229.359)"
									/>
									<path
										className="bs-item-1821"
										d="M114.762,200.678l-3.585-1.144a.083.083,0,0,0-.051,0l-2.255.746a.083.083,0,0,0-.053.1l.1.315a.083.083,0,0,0,.1.053l.8-.264.376,1.137-.8.264a.083.083,0,0,0-.053.1l.1.315a.083.083,0,0,0,.1.053l2.071-.685a.083.083,0,0,0,.053-.1l-.1-.315a.083.083,0,0,0-.1-.053l-.8.264-.376-1.137.855-.283,3.256,1.039.54,1.634-1.995,2.776-.855.283-.376-1.137.8-.264a.083.083,0,0,0,.053-.1l-.1-.315a.083.083,0,0,0-.1-.053l-2.071.685a.083.083,0,0,0-.053.1l.1.315a.083.083,0,0,0,.1.053l.8-.264.376,1.137-.8.264a.083.083,0,0,0-.053.1l.1.315a.083.083,0,0,0,.1.053l2.254-.746a.083.083,0,0,0,.041-.03l2.2-3.056a.082.082,0,0,0,.011-.074l-.673-2.035a.083.083,0,0,0-.053-.053"
										transform="translate(-100.713 -184.675)"
									/>
								</g>
							</g>
							<g
								className="de-item-1821"
								transform="matrix(1, 0, 0, 1, -1402.53, -245.73)">
								<rect
									className="u-item-1821"
									width={209}
									height={43}
									rx={15}
									transform="translate(1402.53 245.73)"
								/>
							</g>
							<text
								className="bt-item-1821"
								transform="translate(60 30)">
								<tspan x={0} y={0}>
									{'Cúcuta'}
								</tspan>
							</text>
						</g>
					</React.Fragment>
				)}
				{selectedImage !== 9 ? (
					<g transform="translate(1450 320)">
						<BluePoint onHover={() => setSelectedImage(9)} />
					</g>
				) : (
					<React.Fragment>
						<g
							transform="translate(1370.535 296.732)"
							onClick={() => setSelectedImage(null)}>
							<g
								className="aq-item-1821"
								transform="translate(88.2 48.808)">
								<g transform="translate(6.919 43.912)">
									<g className="ar-item-1821">
										<use
											transform="translate(-0.07 -0.002)"
											xlinkHref="#rc"
										/>
									</g>
								</g>
								<g className="aq-item-1821">
									<path
										className="as-item-1821"
										d="M32.583,15.631a16.3,16.3,0,1,0-31.3,7.021C4.86,32.337,14.8,43.916,16.147,45.219a.224.224,0,0,0,.308,0c1.475-1.357,12.989-13.976,15.608-24.764.027-.1.051-.206.076-.309s.05-.207.072-.31a16.291,16.291,0,0,0,.338-2.3c0-.03,0-.06.007-.09.027-.381.045-.764.045-1.152,0-.238-.007-.458-.017-.669M16.3,26.2a9.9,9.9,0,1,1,9.9-9.9,9.9,9.9,0,0,1-9.9,9.9"
										transform="translate(0 0)"
									/>
									<g
										className="at-item-1821"
										transform="translate(2.605 2.104)">
										<g className="au-item-1821">
											<g transform="translate(0 0)">
												<g className="av-item-1821">
													<rect
														className="aw-item-1821"
														width={27.55}
														height={14.249}
														transform="translate(-0.08 0)"
													/>
												</g>
											</g>
										</g>
									</g>
									<path
										className="ax-item-1821"
										d="M60.408,47.748A12.752,12.752,0,1,0,73.16,60.5,12.752,12.752,0,0,0,60.408,47.748m0,22.651a9.9,9.9,0,1,1,9.9-9.9,9.9,9.9,0,0,1-9.9,9.9"
										transform="translate(-44.108 -44.193)"
									/>
									<g
										className="ay-item-1821"
										transform="translate(2.903 25.605)">
										<g className="az-item-1821">
											<g transform="translate(0)">
												<g className="ba-item-1821">
													<rect
														className="d-item-1821"
														width={27.296}
														height={19.699}
														transform="translate(0 0)"
													/>
												</g>
											</g>
										</g>
									</g>
									<g
										className="at-item-1821"
										transform="translate(6.728 29.43)">
										<g className="bb-item-1821">
											<g transform="translate(0 0)">
												<g className="bc-item-1821">
													<rect
														className="bd-item-1821"
														width={19.18}
														height={12.922}
														transform="translate(-0.018 -0.017)"
													/>
												</g>
											</g>
										</g>
									</g>
									<g
										className="ay-item-1821"
										transform="translate(19.816 4.592)">
										<g className="be-item-1821">
											<g transform="translate(0 0)">
												<g className="bf-item-1821">
													<rect
														className="e-item-1821"
														width={3.59}
														height={3.432}
														transform="translate(-1.003 2.416) rotate(-67.457)"
													/>
												</g>
											</g>
										</g>
									</g>
									<g
										className="ay-item-1821"
										transform="translate(5.128 5.564)">
										<g className="bg-item-1821">
											<g transform="translate(0)">
												<g className="bh-item-1821">
													<rect
														className="e-item-1821"
														width={8.409}
														height={8.369}
														transform="matrix(0.651, -0.759, 0.759, 0.651, -3.031, 3.536)"
													/>
												</g>
											</g>
										</g>
									</g>
									<g
										className="at-item-1821"
										transform="translate(19.816 25.39)">
										<g className="bi-item-1821">
											<path
												className="ac-item-1821"
												d="M266.662,343.872a7.127,7.127,0,0,0,2.045-.938c-1.039-1.307-1.491-1.894-1.491-1.894l-1.049.475Z"
												transform="translate(-266.166 -341.04)"
											/>
										</g>
									</g>
									<g
										className="bj-item-1821"
										transform="translate(5.128 20.915)">
										<g className="bk-item-1821">
											<path
												className="ac-item-1821"
												d="M71.058,280.936c.9,1.542,2.078,3.352,3.586,3.989-.637,1.207-1.173,2.145-1.173,2.145a11.476,11.476,0,0,1-4.592-5.095c1.039-.469,2.179-1.039,2.179-1.039"
												transform="translate(-68.879 -280.936)"
											/>
										</g>
									</g>
									<g
										className="bl-item-1821"
										transform="translate(5.006)">
										<g className="bm-item-1821">
											<g transform="translate(0 0)">
												<g className="bn-item-1821">
													<rect
														className="bo-item-1821"
														width={22.583}
														height={4.548}
														transform="translate(0 0)"
													/>
												</g>
											</g>
										</g>
									</g>
									<g
										className="bp-item-1821"
										transform="translate(3.839 18.557)">
										<g className="bq-item-1821">
											<path
												className="u-item-1821"
												d="M76.576,249.259a12.512,12.512,0,0,1-1.43,4.134,12.882,12.882,0,0,1-2.776,3.406,12.663,12.663,0,0,1-3.776,2.269,12.838,12.838,0,0,1-8.689.162,12.662,12.662,0,0,1-3.859-2.125,12.9,12.9,0,0,1-2.9-3.3,12.476,12.476,0,0,1-1.584-4.077A12.859,12.859,0,0,0,60,258.959a12.818,12.818,0,0,0,8.5-.158,12.9,12.9,0,0,0,8.083-9.542"
												transform="translate(-51.561 -249.259)"
											/>
										</g>
									</g>
									<g
										className="at-item-1821"
										transform="translate(3.588 3.355)">
										<g className="br-item-1821">
											<path
												className="u-item-1821"
												d="M48.195,56.993a12.512,12.512,0,0,1,1.158-4.61,12.766,12.766,0,0,1,6.864-6.435A12.775,12.775,0,0,1,69.7,48.561a12.7,12.7,0,0,1,2.791,3.883,12.513,12.513,0,0,1,1.134,4.616l-.073-.59-.1-.586c-.039-.194-.083-.387-.124-.58s-.1-.382-.151-.574a12.605,12.605,0,0,0-.863-2.2,12.808,12.808,0,0,0-6.793-6.2,12.743,12.743,0,0,0-9.164-.024,12.761,12.761,0,0,0-3.979,2.444,12.923,12.923,0,0,0-4.181,8.247"
												transform="translate(-48.195 -45.06)"
											/>
										</g>
									</g>
									<path
										className="u-item-1821"
										d="M95.872,105.864a9.9,9.9,0,1,1,9.9-9.9,9.9,9.9,0,0,1-9.9,9.9"
										transform="translate(-79.572 -79.658)"
									/>
									<path
										className="bs-item-1821"
										d="M128.35,119.3l1.726-1.271a.083.083,0,0,0,.034-.067l-.025-3.763a.083.083,0,0,0-.016-.049l-1.408-1.912a.083.083,0,0,0-.116-.017l-.267.2a.083.083,0,0,0-.018.116l.5.678-.965.71-.5-.678a.083.083,0,0,0-.116-.018l-.267.2a.083.083,0,0,0-.018.116l1.294,1.756a.083.083,0,0,0,.116.018l.267-.2a.083.083,0,0,0,.018-.116l-.5-.678.964-.71.534.725.023,3.418-1.386,1.021-3.258-1.035-.534-.725.965-.711.5.678a.083.083,0,0,0,.116.018l.267-.2a.083.083,0,0,0,.018-.116L125,114.932a.083.083,0,0,0-.116-.018l-.267.2a.083.083,0,0,0-.018.116l.5.678-.965.71-.5-.678a.083.083,0,0,0-.116-.018l-.267.2a.083.083,0,0,0-.018.116l1.408,1.912a.083.083,0,0,0,.042.03l3.587,1.139a.083.083,0,0,0,.074-.012"
										transform="translate(-114.049 -103.851)"
									/>
									<path
										className="bs-item-1821"
										d="M224.859,119.107l3.573-1.182a.083.083,0,0,0,.041-.03l1.386-1.928a.083.083,0,0,0-.019-.116l-.269-.193a.083.083,0,0,0-.116.019l-.492.684-.973-.7.492-.684a.083.083,0,0,0-.019-.116l-.269-.193a.083.083,0,0,0-.116.019l-1.273,1.772a.083.083,0,0,0,.019.116l.269.193a.083.083,0,0,0,.116-.019l.492-.684.973.7-.526.731-3.245,1.073-1.4-1-.018-3.418.526-.732.973.7-.492.684a.083.083,0,0,0,.019.116l.269.193a.083.083,0,0,0,.116-.019l1.273-1.772a.083.083,0,0,0-.019-.116l-.269-.193a.083.083,0,0,0-.116.019l-.492.684-.973-.7.492-.684a.083.083,0,0,0-.019-.116l-.269-.193a.083.083,0,0,0-.116.019l-1.386,1.928a.083.083,0,0,0-.016.049l.02,3.764a.083.083,0,0,0,.034.067l1.74,1.251a.083.083,0,0,0,.074.011"
										transform="translate(-206.389 -103.664)"
									/>
									<path
										className="bs-item-1821"
										d="M247.5,199.847l.1-.316a.083.083,0,0,0-.054-.1l-2.262-.722a.083.083,0,0,0-.051,0l-3.573,1.182a.083.083,0,0,0-.053.053l-.652,2.042a.083.083,0,0,0,.012.074l2.228,3.033a.083.083,0,0,0,.042.03l2.262.722a.083.083,0,0,0,.1-.054l.1-.316a.083.083,0,0,0-.054-.1l-.8-.256.364-1.141.8.256a.083.083,0,0,0,.1-.054l.1-.316a.083.083,0,0,0-.054-.1l-2.078-.663a.083.083,0,0,0-.1.054l-.1.316a.083.083,0,0,0,.054.1l.8.256-.364,1.141-.858-.274-2.024-2.755.523-1.64,3.245-1.073.858.274-.364,1.141-.8-.256a.083.083,0,0,0-.1.054l-.1.316a.083.083,0,0,0,.054.1l2.078.663a.083.083,0,0,0,.1-.054l.1-.316a.083.083,0,0,0-.054-.1l-.8-.256.364-1.141.8.256a.083.083,0,0,0,.1-.054"
										transform="translate(-223.017 -183.909)"
									/>
									<path
										className="bs-item-1821"
										d="M179.252,247.842l2.228,3.033a.083.083,0,0,1,.016.049l.012,2.375a.083.083,0,0,1-.082.083l-.331,0a.083.083,0,0,1-.083-.082l0-.842-1.2.006,0,.842a.083.083,0,0,1-.082.083l-.331,0a.083.083,0,0,1-.083-.082l-.011-2.182a.083.083,0,0,1,.082-.083l.331,0a.083.083,0,0,1,.083.082l0,.842,1.2-.006,0-.9-2.024-2.755-1.721.009-1.995,2.776,0,.9,1.2-.006,0-.842a.083.083,0,0,1,.082-.083l.331,0a.083.083,0,0,1,.083.082l.011,2.182a.083.083,0,0,1-.082.083l-.331,0a.083.083,0,0,1-.083-.082l0-.842-1.2.006,0,.842a.083.083,0,0,1-.082.083l-.331,0a.083.083,0,0,1-.083-.082l-.012-2.375a.083.083,0,0,1,.016-.049l2.2-3.056a.083.083,0,0,1,.067-.035l2.143-.011a.083.083,0,0,1,.067.034"
										transform="translate(-161.752 -229.359)"
									/>
									<path
										className="bs-item-1821"
										d="M114.762,200.678l-3.585-1.144a.083.083,0,0,0-.051,0l-2.255.746a.083.083,0,0,0-.053.1l.1.315a.083.083,0,0,0,.1.053l.8-.264.376,1.137-.8.264a.083.083,0,0,0-.053.1l.1.315a.083.083,0,0,0,.1.053l2.071-.685a.083.083,0,0,0,.053-.1l-.1-.315a.083.083,0,0,0-.1-.053l-.8.264-.376-1.137.855-.283,3.256,1.039.54,1.634-1.995,2.776-.855.283-.376-1.137.8-.264a.083.083,0,0,0,.053-.1l-.1-.315a.083.083,0,0,0-.1-.053l-2.071.685a.083.083,0,0,0-.053.1l.1.315a.083.083,0,0,0,.1.053l.8-.264.376,1.137-.8.264a.083.083,0,0,0-.053.1l.1.315a.083.083,0,0,0,.1.053l2.254-.746a.083.083,0,0,0,.041-.03l2.2-3.056a.082.082,0,0,0,.011-.074l-.673-2.035a.083.083,0,0,0-.053-.053"
										transform="translate(-100.713 -184.675)"
									/>
								</g>
							</g>
							<g
								className="dd-item-1821"
								transform="matrix(1, 0, 0, 1, -1370.53, -296.73)">
								<rect
									className="u-item-1821"
									width={209}
									height={43}
									rx={15}
									transform="translate(1370.53 296.73)"
								/>
							</g>
							<text
								className="bt-item-1821"
								transform="translate(21 30)">
								<tspan x={0} y={0}>
									{'Bucaramanga'}
								</tspan>
							</text>
						</g>
					</React.Fragment>
				)}
				{selectedImage !== 8 ? (
					<g transform="translate(1296 337)">
						<RedPoint onHover={() => setSelectedImage(8)} />
					</g>
				) : (
					<React.Fragment>
						<g
							transform="translate(1216.581 308.665)"
							onClick={() => setSelectedImage(null)}>
							<g
								className="aq-item-1821"
								transform="translate(88.2 48.808)">
								<g transform="translate(6.919 43.912)">
									<g className="ar-item-1821">
										<use
											transform="translate(-0.07 -0.002)"
											xlinkHref="#rc"
										/>
									</g>
								</g>
								<g className="aq-item-1821">
									<path
										className="as-item-1821"
										d="M32.583,15.631a16.3,16.3,0,1,0-31.3,7.021C4.86,32.337,14.8,43.916,16.147,45.219a.224.224,0,0,0,.308,0c1.475-1.357,12.989-13.976,15.608-24.764.027-.1.051-.206.076-.309s.05-.207.072-.31a16.291,16.291,0,0,0,.338-2.3c0-.03,0-.06.007-.09.027-.381.045-.764.045-1.152,0-.238-.007-.458-.017-.669M16.3,26.2a9.9,9.9,0,1,1,9.9-9.9,9.9,9.9,0,0,1-9.9,9.9"
										transform="translate(0 0)"
									/>
									<g
										className="at-item-1821"
										transform="translate(2.605 2.104)">
										<g className="au-item-1821">
											<g transform="translate(0 0)">
												<g className="av-item-1821">
													<rect
														className="aw-item-1821"
														width={27.55}
														height={14.249}
														transform="translate(-0.08 0)"
													/>
												</g>
											</g>
										</g>
									</g>
									<path
										className="ax-item-1821"
										d="M60.408,47.748A12.752,12.752,0,1,0,73.16,60.5,12.752,12.752,0,0,0,60.408,47.748m0,22.651a9.9,9.9,0,1,1,9.9-9.9,9.9,9.9,0,0,1-9.9,9.9"
										transform="translate(-44.108 -44.193)"
									/>
									<g
										className="ay-item-1821"
										transform="translate(2.903 25.605)">
										<g className="az-item-1821">
											<g transform="translate(0)">
												<g className="ba-item-1821">
													<rect
														className="d-item-1821"
														width={27.296}
														height={19.699}
														transform="translate(0 0)"
													/>
												</g>
											</g>
										</g>
									</g>
									<g
										className="at-item-1821"
										transform="translate(6.728 29.43)">
										<g className="bb-item-1821">
											<g transform="translate(0 0)">
												<g className="bc-item-1821">
													<rect
														className="bd-item-1821"
														width={19.18}
														height={12.922}
														transform="translate(-0.018 -0.017)"
													/>
												</g>
											</g>
										</g>
									</g>
									<g
										className="ay-item-1821"
										transform="translate(19.816 4.592)">
										<g className="be-item-1821">
											<g transform="translate(0 0)">
												<g className="bf-item-1821">
													<rect
														className="e-item-1821"
														width={3.59}
														height={3.432}
														transform="translate(-1.003 2.416) rotate(-67.457)"
													/>
												</g>
											</g>
										</g>
									</g>
									<g
										className="ay-item-1821"
										transform="translate(5.128 5.564)">
										<g className="bg-item-1821">
											<g transform="translate(0)">
												<g className="bh-item-1821">
													<rect
														className="e-item-1821"
														width={8.409}
														height={8.369}
														transform="matrix(0.651, -0.759, 0.759, 0.651, -3.031, 3.536)"
													/>
												</g>
											</g>
										</g>
									</g>
									<g
										className="at-item-1821"
										transform="translate(19.816 25.39)">
										<g className="bi-item-1821">
											<path
												className="ac-item-1821"
												d="M266.662,343.872a7.127,7.127,0,0,0,2.045-.938c-1.039-1.307-1.491-1.894-1.491-1.894l-1.049.475Z"
												transform="translate(-266.166 -341.04)"
											/>
										</g>
									</g>
									<g
										className="bj-item-1821"
										transform="translate(5.128 20.915)">
										<g className="bk-item-1821">
											<path
												className="ac-item-1821"
												d="M71.058,280.936c.9,1.542,2.078,3.352,3.586,3.989-.637,1.207-1.173,2.145-1.173,2.145a11.476,11.476,0,0,1-4.592-5.095c1.039-.469,2.179-1.039,2.179-1.039"
												transform="translate(-68.879 -280.936)"
											/>
										</g>
									</g>
									<g
										className="bl-item-1821"
										transform="translate(5.006)">
										<g className="bm-item-1821">
											<g transform="translate(0 0)">
												<g className="bn-item-1821">
													<rect
														className="bo-item-1821"
														width={22.583}
														height={4.548}
														transform="translate(0 0)"
													/>
												</g>
											</g>
										</g>
									</g>
									<g
										className="bp-item-1821"
										transform="translate(3.839 18.557)">
										<g className="bq-item-1821">
											<path
												className="u-item-1821"
												d="M76.576,249.259a12.512,12.512,0,0,1-1.43,4.134,12.882,12.882,0,0,1-2.776,3.406,12.663,12.663,0,0,1-3.776,2.269,12.838,12.838,0,0,1-8.689.162,12.662,12.662,0,0,1-3.859-2.125,12.9,12.9,0,0,1-2.9-3.3,12.476,12.476,0,0,1-1.584-4.077A12.859,12.859,0,0,0,60,258.959a12.818,12.818,0,0,0,8.5-.158,12.9,12.9,0,0,0,8.083-9.542"
												transform="translate(-51.561 -249.259)"
											/>
										</g>
									</g>
									<g
										className="at-item-1821"
										transform="translate(3.588 3.355)">
										<g className="br-item-1821">
											<path
												className="u-item-1821"
												d="M48.195,56.993a12.512,12.512,0,0,1,1.158-4.61,12.766,12.766,0,0,1,6.864-6.435A12.775,12.775,0,0,1,69.7,48.561a12.7,12.7,0,0,1,2.791,3.883,12.513,12.513,0,0,1,1.134,4.616l-.073-.59-.1-.586c-.039-.194-.083-.387-.124-.58s-.1-.382-.151-.574a12.605,12.605,0,0,0-.863-2.2,12.808,12.808,0,0,0-6.793-6.2,12.743,12.743,0,0,0-9.164-.024,12.761,12.761,0,0,0-3.979,2.444,12.923,12.923,0,0,0-4.181,8.247"
												transform="translate(-48.195 -45.06)"
											/>
										</g>
									</g>
									<path
										className="u-item-1821"
										d="M95.872,105.864a9.9,9.9,0,1,1,9.9-9.9,9.9,9.9,0,0,1-9.9,9.9"
										transform="translate(-79.572 -79.658)"
									/>
									<path
										className="bs-item-1821"
										d="M128.35,119.3l1.726-1.271a.083.083,0,0,0,.034-.067l-.025-3.763a.083.083,0,0,0-.016-.049l-1.408-1.912a.083.083,0,0,0-.116-.017l-.267.2a.083.083,0,0,0-.018.116l.5.678-.965.71-.5-.678a.083.083,0,0,0-.116-.018l-.267.2a.083.083,0,0,0-.018.116l1.294,1.756a.083.083,0,0,0,.116.018l.267-.2a.083.083,0,0,0,.018-.116l-.5-.678.964-.71.534.725.023,3.418-1.386,1.021-3.258-1.035-.534-.725.965-.711.5.678a.083.083,0,0,0,.116.018l.267-.2a.083.083,0,0,0,.018-.116L125,114.932a.083.083,0,0,0-.116-.018l-.267.2a.083.083,0,0,0-.018.116l.5.678-.965.71-.5-.678a.083.083,0,0,0-.116-.018l-.267.2a.083.083,0,0,0-.018.116l1.408,1.912a.083.083,0,0,0,.042.03l3.587,1.139a.083.083,0,0,0,.074-.012"
										transform="translate(-114.049 -103.851)"
									/>
									<path
										className="bs-item-1821"
										d="M224.859,119.107l3.573-1.182a.083.083,0,0,0,.041-.03l1.386-1.928a.083.083,0,0,0-.019-.116l-.269-.193a.083.083,0,0,0-.116.019l-.492.684-.973-.7.492-.684a.083.083,0,0,0-.019-.116l-.269-.193a.083.083,0,0,0-.116.019l-1.273,1.772a.083.083,0,0,0,.019.116l.269.193a.083.083,0,0,0,.116-.019l.492-.684.973.7-.526.731-3.245,1.073-1.4-1-.018-3.418.526-.732.973.7-.492.684a.083.083,0,0,0,.019.116l.269.193a.083.083,0,0,0,.116-.019l1.273-1.772a.083.083,0,0,0-.019-.116l-.269-.193a.083.083,0,0,0-.116.019l-.492.684-.973-.7.492-.684a.083.083,0,0,0-.019-.116l-.269-.193a.083.083,0,0,0-.116.019l-1.386,1.928a.083.083,0,0,0-.016.049l.02,3.764a.083.083,0,0,0,.034.067l1.74,1.251a.083.083,0,0,0,.074.011"
										transform="translate(-206.389 -103.664)"
									/>
									<path
										className="bs-item-1821"
										d="M247.5,199.847l.1-.316a.083.083,0,0,0-.054-.1l-2.262-.722a.083.083,0,0,0-.051,0l-3.573,1.182a.083.083,0,0,0-.053.053l-.652,2.042a.083.083,0,0,0,.012.074l2.228,3.033a.083.083,0,0,0,.042.03l2.262.722a.083.083,0,0,0,.1-.054l.1-.316a.083.083,0,0,0-.054-.1l-.8-.256.364-1.141.8.256a.083.083,0,0,0,.1-.054l.1-.316a.083.083,0,0,0-.054-.1l-2.078-.663a.083.083,0,0,0-.1.054l-.1.316a.083.083,0,0,0,.054.1l.8.256-.364,1.141-.858-.274-2.024-2.755.523-1.64,3.245-1.073.858.274-.364,1.141-.8-.256a.083.083,0,0,0-.1.054l-.1.316a.083.083,0,0,0,.054.1l2.078.663a.083.083,0,0,0,.1-.054l.1-.316a.083.083,0,0,0-.054-.1l-.8-.256.364-1.141.8.256a.083.083,0,0,0,.1-.054"
										transform="translate(-223.017 -183.909)"
									/>
									<path
										className="bs-item-1821"
										d="M179.252,247.842l2.228,3.033a.083.083,0,0,1,.016.049l.012,2.375a.083.083,0,0,1-.082.083l-.331,0a.083.083,0,0,1-.083-.082l0-.842-1.2.006,0,.842a.083.083,0,0,1-.082.083l-.331,0a.083.083,0,0,1-.083-.082l-.011-2.182a.083.083,0,0,1,.082-.083l.331,0a.083.083,0,0,1,.083.082l0,.842,1.2-.006,0-.9-2.024-2.755-1.721.009-1.995,2.776,0,.9,1.2-.006,0-.842a.083.083,0,0,1,.082-.083l.331,0a.083.083,0,0,1,.083.082l.011,2.182a.083.083,0,0,1-.082.083l-.331,0a.083.083,0,0,1-.083-.082l0-.842-1.2.006,0,.842a.083.083,0,0,1-.082.083l-.331,0a.083.083,0,0,1-.083-.082l-.012-2.375a.083.083,0,0,1,.016-.049l2.2-3.056a.083.083,0,0,1,.067-.035l2.143-.011a.083.083,0,0,1,.067.034"
										transform="translate(-161.752 -229.359)"
									/>
									<path
										className="bs-item-1821"
										d="M114.762,200.678l-3.585-1.144a.083.083,0,0,0-.051,0l-2.255.746a.083.083,0,0,0-.053.1l.1.315a.083.083,0,0,0,.1.053l.8-.264.376,1.137-.8.264a.083.083,0,0,0-.053.1l.1.315a.083.083,0,0,0,.1.053l2.071-.685a.083.083,0,0,0,.053-.1l-.1-.315a.083.083,0,0,0-.1-.053l-.8.264-.376-1.137.855-.283,3.256,1.039.54,1.634-1.995,2.776-.855.283-.376-1.137.8-.264a.083.083,0,0,0,.053-.1l-.1-.315a.083.083,0,0,0-.1-.053l-2.071.685a.083.083,0,0,0-.053.1l.1.315a.083.083,0,0,0,.1.053l.8-.264.376,1.137-.8.264a.083.083,0,0,0-.053.1l.1.315a.083.083,0,0,0,.1.053l2.254-.746a.083.083,0,0,0,.041-.03l2.2-3.056a.082.082,0,0,0,.011-.074l-.673-2.035a.083.083,0,0,0-.053-.053"
										transform="translate(-100.713 -184.675)"
									/>
								</g>
							</g>
							<g
								className="df-item-1821"
								transform="matrix(1, 0, 0, 1, -1216.58, -368.66)">
								<rect
									className="u-item-1821"
									width={209}
									height={43}
									rx={15}
									transform="translate(1216.58 368.66)"
								/>
							</g>
							<text
								className="bt-item-1821"
								transform="translate(55 30)">
								<tspan x={0} y={0}>
									{'Medellín'}
								</tspan>
							</text>
						</g>
					</React.Fragment>
				)}
				{selectedImage !== 7 ? (
					<g transform="translate(1383 469)">
						<RedPoint onHover={() => setSelectedImage(7)} />
					</g>
				) : (
					<React.Fragment>
						<g
							transform="translate(1306.581 440.697)"
							onClick={() => setSelectedImage(null)}>
							<g
								className="aq-item-1821"
								transform="translate(88.2 48.808)">
								<g transform="translate(6.919 43.912)">
									<g className="ar-item-1821">
										<use
											transform="translate(-0.07 -0.002)"
											xlinkHref="#rc"
										/>
									</g>
								</g>
								<g className="aq-item-1821">
									<path
										className="as-item-1821"
										d="M32.583,15.631a16.3,16.3,0,1,0-31.3,7.021C4.86,32.337,14.8,43.916,16.147,45.219a.224.224,0,0,0,.308,0c1.475-1.357,12.989-13.976,15.608-24.764.027-.1.051-.206.076-.309s.05-.207.072-.31a16.291,16.291,0,0,0,.338-2.3c0-.03,0-.06.007-.09.027-.381.045-.764.045-1.152,0-.238-.007-.458-.017-.669M16.3,26.2a9.9,9.9,0,1,1,9.9-9.9,9.9,9.9,0,0,1-9.9,9.9"
										transform="translate(0 0)"
									/>
									<g
										className="at-item-1821"
										transform="translate(2.605 2.104)">
										<g className="au-item-1821">
											<g transform="translate(0 0)">
												<g className="av-item-1821">
													<rect
														className="aw-item-1821"
														width={27.55}
														height={14.249}
														transform="translate(-0.08 0)"
													/>
												</g>
											</g>
										</g>
									</g>
									<path
										className="ax-item-1821"
										d="M60.408,47.748A12.752,12.752,0,1,0,73.16,60.5,12.752,12.752,0,0,0,60.408,47.748m0,22.651a9.9,9.9,0,1,1,9.9-9.9,9.9,9.9,0,0,1-9.9,9.9"
										transform="translate(-44.108 -44.193)"
									/>
									<g
										className="ay-item-1821"
										transform="translate(2.903 25.605)">
										<g className="az-item-1821">
											<g transform="translate(0)">
												<g className="ba-item-1821">
													<rect
														className="d-item-1821"
														width={27.296}
														height={19.699}
														transform="translate(0 0)"
													/>
												</g>
											</g>
										</g>
									</g>
									<g
										className="at-item-1821"
										transform="translate(6.728 29.43)">
										<g className="bb-item-1821">
											<g transform="translate(0 0)">
												<g className="bc-item-1821">
													<rect
														className="bd-item-1821"
														width={19.18}
														height={12.922}
														transform="translate(-0.018 -0.017)"
													/>
												</g>
											</g>
										</g>
									</g>
									<g
										className="ay-item-1821"
										transform="translate(19.816 4.592)">
										<g className="be-item-1821">
											<g transform="translate(0 0)">
												<g className="bf-item-1821">
													<rect
														className="e-item-1821"
														width={3.59}
														height={3.432}
														transform="translate(-1.003 2.416) rotate(-67.457)"
													/>
												</g>
											</g>
										</g>
									</g>
									<g
										className="ay-item-1821"
										transform="translate(5.128 5.564)">
										<g className="bg-item-1821">
											<g transform="translate(0)">
												<g className="bh-item-1821">
													<rect
														className="e-item-1821"
														width={8.409}
														height={8.369}
														transform="matrix(0.651, -0.759, 0.759, 0.651, -3.031, 3.536)"
													/>
												</g>
											</g>
										</g>
									</g>
									<g
										className="at-item-1821"
										transform="translate(19.816 25.39)">
										<g className="bi-item-1821">
											<path
												className="ac-item-1821"
												d="M266.662,343.872a7.127,7.127,0,0,0,2.045-.938c-1.039-1.307-1.491-1.894-1.491-1.894l-1.049.475Z"
												transform="translate(-266.166 -341.04)"
											/>
										</g>
									</g>
									<g
										className="bj-item-1821"
										transform="translate(5.128 20.915)">
										<g className="bk-item-1821">
											<path
												className="ac-item-1821"
												d="M71.058,280.936c.9,1.542,2.078,3.352,3.586,3.989-.637,1.207-1.173,2.145-1.173,2.145a11.476,11.476,0,0,1-4.592-5.095c1.039-.469,2.179-1.039,2.179-1.039"
												transform="translate(-68.879 -280.936)"
											/>
										</g>
									</g>
									<g
										className="bl-item-1821"
										transform="translate(5.006)">
										<g className="bm-item-1821">
											<g transform="translate(0 0)">
												<g className="bn-item-1821">
													<rect
														className="bo-item-1821"
														width={22.583}
														height={4.548}
														transform="translate(0 0)"
													/>
												</g>
											</g>
										</g>
									</g>
									<g
										className="bp-item-1821"
										transform="translate(3.839 18.557)">
										<g className="bq-item-1821">
											<path
												className="u-item-1821"
												d="M76.576,249.259a12.512,12.512,0,0,1-1.43,4.134,12.882,12.882,0,0,1-2.776,3.406,12.663,12.663,0,0,1-3.776,2.269,12.838,12.838,0,0,1-8.689.162,12.662,12.662,0,0,1-3.859-2.125,12.9,12.9,0,0,1-2.9-3.3,12.476,12.476,0,0,1-1.584-4.077A12.859,12.859,0,0,0,60,258.959a12.818,12.818,0,0,0,8.5-.158,12.9,12.9,0,0,0,8.083-9.542"
												transform="translate(-51.561 -249.259)"
											/>
										</g>
									</g>
									<g
										className="at-item-1821"
										transform="translate(3.588 3.355)">
										<g className="br-item-1821">
											<path
												className="u-item-1821"
												d="M48.195,56.993a12.512,12.512,0,0,1,1.158-4.61,12.766,12.766,0,0,1,6.864-6.435A12.775,12.775,0,0,1,69.7,48.561a12.7,12.7,0,0,1,2.791,3.883,12.513,12.513,0,0,1,1.134,4.616l-.073-.59-.1-.586c-.039-.194-.083-.387-.124-.58s-.1-.382-.151-.574a12.605,12.605,0,0,0-.863-2.2,12.808,12.808,0,0,0-6.793-6.2,12.743,12.743,0,0,0-9.164-.024,12.761,12.761,0,0,0-3.979,2.444,12.923,12.923,0,0,0-4.181,8.247"
												transform="translate(-48.195 -45.06)"
											/>
										</g>
									</g>
									<path
										className="u-item-1821"
										d="M95.872,105.864a9.9,9.9,0,1,1,9.9-9.9,9.9,9.9,0,0,1-9.9,9.9"
										transform="translate(-79.572 -79.658)"
									/>
									<path
										className="bs-item-1821"
										d="M128.35,119.3l1.726-1.271a.083.083,0,0,0,.034-.067l-.025-3.763a.083.083,0,0,0-.016-.049l-1.408-1.912a.083.083,0,0,0-.116-.017l-.267.2a.083.083,0,0,0-.018.116l.5.678-.965.71-.5-.678a.083.083,0,0,0-.116-.018l-.267.2a.083.083,0,0,0-.018.116l1.294,1.756a.083.083,0,0,0,.116.018l.267-.2a.083.083,0,0,0,.018-.116l-.5-.678.964-.71.534.725.023,3.418-1.386,1.021-3.258-1.035-.534-.725.965-.711.5.678a.083.083,0,0,0,.116.018l.267-.2a.083.083,0,0,0,.018-.116L125,114.932a.083.083,0,0,0-.116-.018l-.267.2a.083.083,0,0,0-.018.116l.5.678-.965.71-.5-.678a.083.083,0,0,0-.116-.018l-.267.2a.083.083,0,0,0-.018.116l1.408,1.912a.083.083,0,0,0,.042.03l3.587,1.139a.083.083,0,0,0,.074-.012"
										transform="translate(-114.049 -103.851)"
									/>
									<path
										className="bs-item-1821"
										d="M224.859,119.107l3.573-1.182a.083.083,0,0,0,.041-.03l1.386-1.928a.083.083,0,0,0-.019-.116l-.269-.193a.083.083,0,0,0-.116.019l-.492.684-.973-.7.492-.684a.083.083,0,0,0-.019-.116l-.269-.193a.083.083,0,0,0-.116.019l-1.273,1.772a.083.083,0,0,0,.019.116l.269.193a.083.083,0,0,0,.116-.019l.492-.684.973.7-.526.731-3.245,1.073-1.4-1-.018-3.418.526-.732.973.7-.492.684a.083.083,0,0,0,.019.116l.269.193a.083.083,0,0,0,.116-.019l1.273-1.772a.083.083,0,0,0-.019-.116l-.269-.193a.083.083,0,0,0-.116.019l-.492.684-.973-.7.492-.684a.083.083,0,0,0-.019-.116l-.269-.193a.083.083,0,0,0-.116.019l-1.386,1.928a.083.083,0,0,0-.016.049l.02,3.764a.083.083,0,0,0,.034.067l1.74,1.251a.083.083,0,0,0,.074.011"
										transform="translate(-206.389 -103.664)"
									/>
									<path
										className="bs-item-1821"
										d="M247.5,199.847l.1-.316a.083.083,0,0,0-.054-.1l-2.262-.722a.083.083,0,0,0-.051,0l-3.573,1.182a.083.083,0,0,0-.053.053l-.652,2.042a.083.083,0,0,0,.012.074l2.228,3.033a.083.083,0,0,0,.042.03l2.262.722a.083.083,0,0,0,.1-.054l.1-.316a.083.083,0,0,0-.054-.1l-.8-.256.364-1.141.8.256a.083.083,0,0,0,.1-.054l.1-.316a.083.083,0,0,0-.054-.1l-2.078-.663a.083.083,0,0,0-.1.054l-.1.316a.083.083,0,0,0,.054.1l.8.256-.364,1.141-.858-.274-2.024-2.755.523-1.64,3.245-1.073.858.274-.364,1.141-.8-.256a.083.083,0,0,0-.1.054l-.1.316a.083.083,0,0,0,.054.1l2.078.663a.083.083,0,0,0,.1-.054l.1-.316a.083.083,0,0,0-.054-.1l-.8-.256.364-1.141.8.256a.083.083,0,0,0,.1-.054"
										transform="translate(-223.017 -183.909)"
									/>
									<path
										className="bs-item-1821"
										d="M179.252,247.842l2.228,3.033a.083.083,0,0,1,.016.049l.012,2.375a.083.083,0,0,1-.082.083l-.331,0a.083.083,0,0,1-.083-.082l0-.842-1.2.006,0,.842a.083.083,0,0,1-.082.083l-.331,0a.083.083,0,0,1-.083-.082l-.011-2.182a.083.083,0,0,1,.082-.083l.331,0a.083.083,0,0,1,.083.082l0,.842,1.2-.006,0-.9-2.024-2.755-1.721.009-1.995,2.776,0,.9,1.2-.006,0-.842a.083.083,0,0,1,.082-.083l.331,0a.083.083,0,0,1,.083.082l.011,2.182a.083.083,0,0,1-.082.083l-.331,0a.083.083,0,0,1-.083-.082l0-.842-1.2.006,0,.842a.083.083,0,0,1-.082.083l-.331,0a.083.083,0,0,1-.083-.082l-.012-2.375a.083.083,0,0,1,.016-.049l2.2-3.056a.083.083,0,0,1,.067-.035l2.143-.011a.083.083,0,0,1,.067.034"
										transform="translate(-161.752 -229.359)"
									/>
									<path
										className="bs-item-1821"
										d="M114.762,200.678l-3.585-1.144a.083.083,0,0,0-.051,0l-2.255.746a.083.083,0,0,0-.053.1l.1.315a.083.083,0,0,0,.1.053l.8-.264.376,1.137-.8.264a.083.083,0,0,0-.053.1l.1.315a.083.083,0,0,0,.1.053l2.071-.685a.083.083,0,0,0,.053-.1l-.1-.315a.083.083,0,0,0-.1-.053l-.8.264-.376-1.137.855-.283,3.256,1.039.54,1.634-1.995,2.776-.855.283-.376-1.137.8-.264a.083.083,0,0,0,.053-.1l-.1-.315a.083.083,0,0,0-.1-.053l-2.071.685a.083.083,0,0,0-.053.1l.1.315a.083.083,0,0,0,.1.053l.8-.264.376,1.137-.8.264a.083.083,0,0,0-.053.1l.1.315a.083.083,0,0,0,.1.053l2.254-.746a.083.083,0,0,0,.041-.03l2.2-3.056a.082.082,0,0,0,.011-.074l-.673-2.035a.083.083,0,0,0-.053-.053"
										transform="translate(-100.713 -184.675)"
									/>
								</g>
							</g>
							<g
								className="cw-item-1821"
								transform="matrix(1, 0, 0, 1, -1306.58, -440.7)">
								<rect
									className="u-item-1821"
									width={209}
									height={43}
									rx={15}
									transform="translate(1306.58 440.7)"
								/>
							</g>
							<text
								className="bt-item-1821"
								transform="translate(61 30)">
								<tspan x={0} y={0}>
									{'Bogotá'}
								</tspan>
							</text>
						</g>
					</React.Fragment>
				)}
				{selectedImage !== 6 ? (
					<g transform="translate(1294 418)">
						<RedPoint onHover={() => setSelectedImage(6)} />
					</g>
				) : (
					<React.Fragment>
						<g
							transform="translate(1230.535 391.686)"
							onClick={() => setSelectedImage(null)}>
							<g
								className="aq-item-1821"
								transform="translate(88.2 48.808)">
								<g transform="translate(6.919 43.912)">
									<g className="ar-item-1821">
										<use
											transform="translate(-0.07 -0.002)"
											xlinkHref="#rc"
										/>
									</g>
								</g>
								<g className="aq-item-1821">
									<path
										className="as-item-1821"
										d="M32.583,15.631a16.3,16.3,0,1,0-31.3,7.021C4.86,32.337,14.8,43.916,16.147,45.219a.224.224,0,0,0,.308,0c1.475-1.357,12.989-13.976,15.608-24.764.027-.1.051-.206.076-.309s.05-.207.072-.31a16.291,16.291,0,0,0,.338-2.3c0-.03,0-.06.007-.09.027-.381.045-.764.045-1.152,0-.238-.007-.458-.017-.669M16.3,26.2a9.9,9.9,0,1,1,9.9-9.9,9.9,9.9,0,0,1-9.9,9.9"
										transform="translate(0 0)"
									/>
									<g
										className="at-item-1821"
										transform="translate(2.605 2.104)">
										<g className="au-item-1821">
											<g transform="translate(0 0)">
												<g className="av-item-1821">
													<rect
														className="aw-item-1821"
														width={27.55}
														height={14.249}
														transform="translate(-0.08 0)"
													/>
												</g>
											</g>
										</g>
									</g>
									<path
										className="ax-item-1821"
										d="M60.408,47.748A12.752,12.752,0,1,0,73.16,60.5,12.752,12.752,0,0,0,60.408,47.748m0,22.651a9.9,9.9,0,1,1,9.9-9.9,9.9,9.9,0,0,1-9.9,9.9"
										transform="translate(-44.108 -44.193)"
									/>
									<g
										className="ay-item-1821"
										transform="translate(2.903 25.605)">
										<g className="az-item-1821">
											<g transform="translate(0)">
												<g className="ba-item-1821">
													<rect
														className="d-item-1821"
														width={27.296}
														height={19.699}
														transform="translate(0 0)"
													/>
												</g>
											</g>
										</g>
									</g>
									<g
										className="at-item-1821"
										transform="translate(6.728 29.43)">
										<g className="bb-item-1821">
											<g transform="translate(0 0)">
												<g className="bc-item-1821">
													<rect
														className="bd-item-1821"
														width={19.18}
														height={12.922}
														transform="translate(-0.018 -0.017)"
													/>
												</g>
											</g>
										</g>
									</g>
									<g
										className="ay-item-1821"
										transform="translate(19.816 4.592)">
										<g className="be-item-1821">
											<g transform="translate(0 0)">
												<g className="bf-item-1821">
													<rect
														className="e-item-1821"
														width={3.59}
														height={3.432}
														transform="translate(-1.003 2.416) rotate(-67.457)"
													/>
												</g>
											</g>
										</g>
									</g>
									<g
										className="ay-item-1821"
										transform="translate(5.128 5.564)">
										<g className="bg-item-1821">
											<g transform="translate(0)">
												<g className="bh-item-1821">
													<rect
														className="e-item-1821"
														width={8.409}
														height={8.369}
														transform="matrix(0.651, -0.759, 0.759, 0.651, -3.031, 3.536)"
													/>
												</g>
											</g>
										</g>
									</g>
									<g
										className="at-item-1821"
										transform="translate(19.816 25.39)">
										<g className="bi-item-1821">
											<path
												className="ac-item-1821"
												d="M266.662,343.872a7.127,7.127,0,0,0,2.045-.938c-1.039-1.307-1.491-1.894-1.491-1.894l-1.049.475Z"
												transform="translate(-266.166 -341.04)"
											/>
										</g>
									</g>
									<g
										className="bj-item-1821"
										transform="translate(5.128 20.915)">
										<g className="bk-item-1821">
											<path
												className="ac-item-1821"
												d="M71.058,280.936c.9,1.542,2.078,3.352,3.586,3.989-.637,1.207-1.173,2.145-1.173,2.145a11.476,11.476,0,0,1-4.592-5.095c1.039-.469,2.179-1.039,2.179-1.039"
												transform="translate(-68.879 -280.936)"
											/>
										</g>
									</g>
									<g
										className="bl-item-1821"
										transform="translate(5.006)">
										<g className="bm-item-1821">
											<g transform="translate(0 0)">
												<g className="bn-item-1821">
													<rect
														className="bo-item-1821"
														width={22.583}
														height={4.548}
														transform="translate(0 0)"
													/>
												</g>
											</g>
										</g>
									</g>
									<g
										className="bp-item-1821"
										transform="translate(3.839 18.557)">
										<g className="bq-item-1821">
											<path
												className="u-item-1821"
												d="M76.576,249.259a12.512,12.512,0,0,1-1.43,4.134,12.882,12.882,0,0,1-2.776,3.406,12.663,12.663,0,0,1-3.776,2.269,12.838,12.838,0,0,1-8.689.162,12.662,12.662,0,0,1-3.859-2.125,12.9,12.9,0,0,1-2.9-3.3,12.476,12.476,0,0,1-1.584-4.077A12.859,12.859,0,0,0,60,258.959a12.818,12.818,0,0,0,8.5-.158,12.9,12.9,0,0,0,8.083-9.542"
												transform="translate(-51.561 -249.259)"
											/>
										</g>
									</g>
									<g
										className="at-item-1821"
										transform="translate(3.588 3.355)">
										<g className="br-item-1821">
											<path
												className="u-item-1821"
												d="M48.195,56.993a12.512,12.512,0,0,1,1.158-4.61,12.766,12.766,0,0,1,6.864-6.435A12.775,12.775,0,0,1,69.7,48.561a12.7,12.7,0,0,1,2.791,3.883,12.513,12.513,0,0,1,1.134,4.616l-.073-.59-.1-.586c-.039-.194-.083-.387-.124-.58s-.1-.382-.151-.574a12.605,12.605,0,0,0-.863-2.2,12.808,12.808,0,0,0-6.793-6.2,12.743,12.743,0,0,0-9.164-.024,12.761,12.761,0,0,0-3.979,2.444,12.923,12.923,0,0,0-4.181,8.247"
												transform="translate(-48.195 -45.06)"
											/>
										</g>
									</g>
									<path
										className="u-item-1821"
										d="M95.872,105.864a9.9,9.9,0,1,1,9.9-9.9,9.9,9.9,0,0,1-9.9,9.9"
										transform="translate(-79.572 -79.658)"
									/>
									<path
										className="bs-item-1821"
										d="M128.35,119.3l1.726-1.271a.083.083,0,0,0,.034-.067l-.025-3.763a.083.083,0,0,0-.016-.049l-1.408-1.912a.083.083,0,0,0-.116-.017l-.267.2a.083.083,0,0,0-.018.116l.5.678-.965.71-.5-.678a.083.083,0,0,0-.116-.018l-.267.2a.083.083,0,0,0-.018.116l1.294,1.756a.083.083,0,0,0,.116.018l.267-.2a.083.083,0,0,0,.018-.116l-.5-.678.964-.71.534.725.023,3.418-1.386,1.021-3.258-1.035-.534-.725.965-.711.5.678a.083.083,0,0,0,.116.018l.267-.2a.083.083,0,0,0,.018-.116L125,114.932a.083.083,0,0,0-.116-.018l-.267.2a.083.083,0,0,0-.018.116l.5.678-.965.71-.5-.678a.083.083,0,0,0-.116-.018l-.267.2a.083.083,0,0,0-.018.116l1.408,1.912a.083.083,0,0,0,.042.03l3.587,1.139a.083.083,0,0,0,.074-.012"
										transform="translate(-114.049 -103.851)"
									/>
									<path
										className="bs-item-1821"
										d="M224.859,119.107l3.573-1.182a.083.083,0,0,0,.041-.03l1.386-1.928a.083.083,0,0,0-.019-.116l-.269-.193a.083.083,0,0,0-.116.019l-.492.684-.973-.7.492-.684a.083.083,0,0,0-.019-.116l-.269-.193a.083.083,0,0,0-.116.019l-1.273,1.772a.083.083,0,0,0,.019.116l.269.193a.083.083,0,0,0,.116-.019l.492-.684.973.7-.526.731-3.245,1.073-1.4-1-.018-3.418.526-.732.973.7-.492.684a.083.083,0,0,0,.019.116l.269.193a.083.083,0,0,0,.116-.019l1.273-1.772a.083.083,0,0,0-.019-.116l-.269-.193a.083.083,0,0,0-.116.019l-.492.684-.973-.7.492-.684a.083.083,0,0,0-.019-.116l-.269-.193a.083.083,0,0,0-.116.019l-1.386,1.928a.083.083,0,0,0-.016.049l.02,3.764a.083.083,0,0,0,.034.067l1.74,1.251a.083.083,0,0,0,.074.011"
										transform="translate(-206.389 -103.664)"
									/>
									<path
										className="bs-item-1821"
										d="M247.5,199.847l.1-.316a.083.083,0,0,0-.054-.1l-2.262-.722a.083.083,0,0,0-.051,0l-3.573,1.182a.083.083,0,0,0-.053.053l-.652,2.042a.083.083,0,0,0,.012.074l2.228,3.033a.083.083,0,0,0,.042.03l2.262.722a.083.083,0,0,0,.1-.054l.1-.316a.083.083,0,0,0-.054-.1l-.8-.256.364-1.141.8.256a.083.083,0,0,0,.1-.054l.1-.316a.083.083,0,0,0-.054-.1l-2.078-.663a.083.083,0,0,0-.1.054l-.1.316a.083.083,0,0,0,.054.1l.8.256-.364,1.141-.858-.274-2.024-2.755.523-1.64,3.245-1.073.858.274-.364,1.141-.8-.256a.083.083,0,0,0-.1.054l-.1.316a.083.083,0,0,0,.054.1l2.078.663a.083.083,0,0,0,.1-.054l.1-.316a.083.083,0,0,0-.054-.1l-.8-.256.364-1.141.8.256a.083.083,0,0,0,.1-.054"
										transform="translate(-223.017 -183.909)"
									/>
									<path
										className="bs-item-1821"
										d="M179.252,247.842l2.228,3.033a.083.083,0,0,1,.016.049l.012,2.375a.083.083,0,0,1-.082.083l-.331,0a.083.083,0,0,1-.083-.082l0-.842-1.2.006,0,.842a.083.083,0,0,1-.082.083l-.331,0a.083.083,0,0,1-.083-.082l-.011-2.182a.083.083,0,0,1,.082-.083l.331,0a.083.083,0,0,1,.083.082l0,.842,1.2-.006,0-.9-2.024-2.755-1.721.009-1.995,2.776,0,.9,1.2-.006,0-.842a.083.083,0,0,1,.082-.083l.331,0a.083.083,0,0,1,.083.082l.011,2.182a.083.083,0,0,1-.082.083l-.331,0a.083.083,0,0,1-.083-.082l0-.842-1.2.006,0,.842a.083.083,0,0,1-.082.083l-.331,0a.083.083,0,0,1-.083-.082l-.012-2.375a.083.083,0,0,1,.016-.049l2.2-3.056a.083.083,0,0,1,.067-.035l2.143-.011a.083.083,0,0,1,.067.034"
										transform="translate(-161.752 -229.359)"
									/>
									<path
										className="bs-item-1821"
										d="M114.762,200.678l-3.585-1.144a.083.083,0,0,0-.051,0l-2.255.746a.083.083,0,0,0-.053.1l.1.315a.083.083,0,0,0,.1.053l.8-.264.376,1.137-.8.264a.083.083,0,0,0-.053.1l.1.315a.083.083,0,0,0,.1.053l2.071-.685a.083.083,0,0,0,.053-.1l-.1-.315a.083.083,0,0,0-.1-.053l-.8.264-.376-1.137.855-.283,3.256,1.039.54,1.634-1.995,2.776-.855.283-.376-1.137.8-.264a.083.083,0,0,0,.053-.1l-.1-.315a.083.083,0,0,0-.1-.053l-2.071.685a.083.083,0,0,0-.053.1l.1.315a.083.083,0,0,0,.1.053l.8-.264.376,1.137-.8.264a.083.083,0,0,0-.053.1l.1.315a.083.083,0,0,0,.1.053l2.254-.746a.083.083,0,0,0,.041-.03l2.2-3.056a.082.082,0,0,0,.011-.074l-.673-2.035a.083.083,0,0,0-.053-.053"
										transform="translate(-100.713 -184.675)"
									/>
								</g>
							</g>
							<g
								className="cv-item-1821"
								transform="matrix(1, 0, 0, 1, -1213.58, -430.7)">
								<rect
									className="u-item-1821"
									width={209}
									height={43}
									rx={15}
									transform="translate(1213.58 430.7)"
								/>
							</g>
							<text
								className="bt-item-1821"
								transform="translate(63 30)">
								<tspan x={0} y={0}>
									{'Pereira'}
								</tspan>
							</text>
						</g>
					</React.Fragment>
				)}
				{selectedImage !== 5 ? (
					<g transform="translate(1325 482)">
						<BluePoint onHover={() => setSelectedImage(5)} />
					</g>
				) : (
					<React.Fragment>
						<g
							transform="translate(1244.535 458.679)"
							onClick={() => setSelectedImage(null)}>
							<g
								className="aq-item-1821"
								transform="translate(88.2 48.808)">
								<g transform="translate(6.919 43.912)">
									<g className="ar-item-1821">
										<use
											transform="translate(-0.07 -0.002)"
											xlinkHref="#rc"
										/>
									</g>
								</g>
								<g className="aq-item-1821">
									<path
										className="as-item-1821"
										d="M32.583,15.631a16.3,16.3,0,1,0-31.3,7.021C4.86,32.337,14.8,43.916,16.147,45.219a.224.224,0,0,0,.308,0c1.475-1.357,12.989-13.976,15.608-24.764.027-.1.051-.206.076-.309s.05-.207.072-.31a16.291,16.291,0,0,0,.338-2.3c0-.03,0-.06.007-.09.027-.381.045-.764.045-1.152,0-.238-.007-.458-.017-.669M16.3,26.2a9.9,9.9,0,1,1,9.9-9.9,9.9,9.9,0,0,1-9.9,9.9"
										transform="translate(0 0)"
									/>
									<g
										className="at-item-1821"
										transform="translate(2.605 2.104)">
										<g className="au-item-1821">
											<g transform="translate(0 0)">
												<g className="av-item-1821">
													<rect
														className="aw-item-1821"
														width={27.55}
														height={14.249}
														transform="translate(-0.08 0)"
													/>
												</g>
											</g>
										</g>
									</g>
									<path
										className="ax-item-1821"
										d="M60.408,47.748A12.752,12.752,0,1,0,73.16,60.5,12.752,12.752,0,0,0,60.408,47.748m0,22.651a9.9,9.9,0,1,1,9.9-9.9,9.9,9.9,0,0,1-9.9,9.9"
										transform="translate(-44.108 -44.193)"
									/>
									<g
										className="ay-item-1821"
										transform="translate(2.903 25.605)">
										<g className="az-item-1821">
											<g transform="translate(0)">
												<g className="ba-item-1821">
													<rect
														className="d-item-1821"
														width={27.296}
														height={19.699}
														transform="translate(0 0)"
													/>
												</g>
											</g>
										</g>
									</g>
									<g
										className="at-item-1821"
										transform="translate(6.728 29.43)">
										<g className="bb-item-1821">
											<g transform="translate(0 0)">
												<g className="bc-item-1821">
													<rect
														className="bd-item-1821"
														width={19.18}
														height={12.922}
														transform="translate(-0.018 -0.017)"
													/>
												</g>
											</g>
										</g>
									</g>
									<g
										className="ay-item-1821"
										transform="translate(19.816 4.592)">
										<g className="be-item-1821">
											<g transform="translate(0 0)">
												<g className="bf-item-1821">
													<rect
														className="e-item-1821"
														width={3.59}
														height={3.432}
														transform="translate(-1.003 2.416) rotate(-67.457)"
													/>
												</g>
											</g>
										</g>
									</g>
									<g
										className="ay-item-1821"
										transform="translate(5.128 5.564)">
										<g className="bg-item-1821">
											<g transform="translate(0)">
												<g className="bh-item-1821">
													<rect
														className="e-item-1821"
														width={8.409}
														height={8.369}
														transform="matrix(0.651, -0.759, 0.759, 0.651, -3.031, 3.536)"
													/>
												</g>
											</g>
										</g>
									</g>
									<g
										className="at-item-1821"
										transform="translate(19.816 25.39)">
										<g className="bi-item-1821">
											<path
												className="ac-item-1821"
												d="M266.662,343.872a7.127,7.127,0,0,0,2.045-.938c-1.039-1.307-1.491-1.894-1.491-1.894l-1.049.475Z"
												transform="translate(-266.166 -341.04)"
											/>
										</g>
									</g>
									<g
										className="bj-item-1821"
										transform="translate(5.128 20.915)">
										<g className="bk-item-1821">
											<path
												className="ac-item-1821"
												d="M71.058,280.936c.9,1.542,2.078,3.352,3.586,3.989-.637,1.207-1.173,2.145-1.173,2.145a11.476,11.476,0,0,1-4.592-5.095c1.039-.469,2.179-1.039,2.179-1.039"
												transform="translate(-68.879 -280.936)"
											/>
										</g>
									</g>
									<g
										className="bl-item-1821"
										transform="translate(5.006)">
										<g className="bm-item-1821">
											<g transform="translate(0 0)">
												<g className="bn-item-1821">
													<rect
														className="bo-item-1821"
														width={22.583}
														height={4.548}
														transform="translate(0 0)"
													/>
												</g>
											</g>
										</g>
									</g>
									<g
										className="bp-item-1821"
										transform="translate(3.839 18.557)">
										<g className="bq-item-1821">
											<path
												className="u-item-1821"
												d="M76.576,249.259a12.512,12.512,0,0,1-1.43,4.134,12.882,12.882,0,0,1-2.776,3.406,12.663,12.663,0,0,1-3.776,2.269,12.838,12.838,0,0,1-8.689.162,12.662,12.662,0,0,1-3.859-2.125,12.9,12.9,0,0,1-2.9-3.3,12.476,12.476,0,0,1-1.584-4.077A12.859,12.859,0,0,0,60,258.959a12.818,12.818,0,0,0,8.5-.158,12.9,12.9,0,0,0,8.083-9.542"
												transform="translate(-51.561 -249.259)"
											/>
										</g>
									</g>
									<g
										className="at-item-1821"
										transform="translate(3.588 3.355)">
										<g className="br-item-1821">
											<path
												className="u-item-1821"
												d="M48.195,56.993a12.512,12.512,0,0,1,1.158-4.61,12.766,12.766,0,0,1,6.864-6.435A12.775,12.775,0,0,1,69.7,48.561a12.7,12.7,0,0,1,2.791,3.883,12.513,12.513,0,0,1,1.134,4.616l-.073-.59-.1-.586c-.039-.194-.083-.387-.124-.58s-.1-.382-.151-.574a12.605,12.605,0,0,0-.863-2.2,12.808,12.808,0,0,0-6.793-6.2,12.743,12.743,0,0,0-9.164-.024,12.761,12.761,0,0,0-3.979,2.444,12.923,12.923,0,0,0-4.181,8.247"
												transform="translate(-48.195 -45.06)"
											/>
										</g>
									</g>
									<path
										className="u-item-1821"
										d="M95.872,105.864a9.9,9.9,0,1,1,9.9-9.9,9.9,9.9,0,0,1-9.9,9.9"
										transform="translate(-79.572 -79.658)"
									/>
									<path
										className="bs-item-1821"
										d="M128.35,119.3l1.726-1.271a.083.083,0,0,0,.034-.067l-.025-3.763a.083.083,0,0,0-.016-.049l-1.408-1.912a.083.083,0,0,0-.116-.017l-.267.2a.083.083,0,0,0-.018.116l.5.678-.965.71-.5-.678a.083.083,0,0,0-.116-.018l-.267.2a.083.083,0,0,0-.018.116l1.294,1.756a.083.083,0,0,0,.116.018l.267-.2a.083.083,0,0,0,.018-.116l-.5-.678.964-.71.534.725.023,3.418-1.386,1.021-3.258-1.035-.534-.725.965-.711.5.678a.083.083,0,0,0,.116.018l.267-.2a.083.083,0,0,0,.018-.116L125,114.932a.083.083,0,0,0-.116-.018l-.267.2a.083.083,0,0,0-.018.116l.5.678-.965.71-.5-.678a.083.083,0,0,0-.116-.018l-.267.2a.083.083,0,0,0-.018.116l1.408,1.912a.083.083,0,0,0,.042.03l3.587,1.139a.083.083,0,0,0,.074-.012"
										transform="translate(-114.049 -103.851)"
									/>
									<path
										className="bs-item-1821"
										d="M224.859,119.107l3.573-1.182a.083.083,0,0,0,.041-.03l1.386-1.928a.083.083,0,0,0-.019-.116l-.269-.193a.083.083,0,0,0-.116.019l-.492.684-.973-.7.492-.684a.083.083,0,0,0-.019-.116l-.269-.193a.083.083,0,0,0-.116.019l-1.273,1.772a.083.083,0,0,0,.019.116l.269.193a.083.083,0,0,0,.116-.019l.492-.684.973.7-.526.731-3.245,1.073-1.4-1-.018-3.418.526-.732.973.7-.492.684a.083.083,0,0,0,.019.116l.269.193a.083.083,0,0,0,.116-.019l1.273-1.772a.083.083,0,0,0-.019-.116l-.269-.193a.083.083,0,0,0-.116.019l-.492.684-.973-.7.492-.684a.083.083,0,0,0-.019-.116l-.269-.193a.083.083,0,0,0-.116.019l-1.386,1.928a.083.083,0,0,0-.016.049l.02,3.764a.083.083,0,0,0,.034.067l1.74,1.251a.083.083,0,0,0,.074.011"
										transform="translate(-206.389 -103.664)"
									/>
									<path
										className="bs-item-1821"
										d="M247.5,199.847l.1-.316a.083.083,0,0,0-.054-.1l-2.262-.722a.083.083,0,0,0-.051,0l-3.573,1.182a.083.083,0,0,0-.053.053l-.652,2.042a.083.083,0,0,0,.012.074l2.228,3.033a.083.083,0,0,0,.042.03l2.262.722a.083.083,0,0,0,.1-.054l.1-.316a.083.083,0,0,0-.054-.1l-.8-.256.364-1.141.8.256a.083.083,0,0,0,.1-.054l.1-.316a.083.083,0,0,0-.054-.1l-2.078-.663a.083.083,0,0,0-.1.054l-.1.316a.083.083,0,0,0,.054.1l.8.256-.364,1.141-.858-.274-2.024-2.755.523-1.64,3.245-1.073.858.274-.364,1.141-.8-.256a.083.083,0,0,0-.1.054l-.1.316a.083.083,0,0,0,.054.1l2.078.663a.083.083,0,0,0,.1-.054l.1-.316a.083.083,0,0,0-.054-.1l-.8-.256.364-1.141.8.256a.083.083,0,0,0,.1-.054"
										transform="translate(-223.017 -183.909)"
									/>
									<path
										className="bs-item-1821"
										d="M179.252,247.842l2.228,3.033a.083.083,0,0,1,.016.049l.012,2.375a.083.083,0,0,1-.082.083l-.331,0a.083.083,0,0,1-.083-.082l0-.842-1.2.006,0,.842a.083.083,0,0,1-.082.083l-.331,0a.083.083,0,0,1-.083-.082l-.011-2.182a.083.083,0,0,1,.082-.083l.331,0a.083.083,0,0,1,.083.082l0,.842,1.2-.006,0-.9-2.024-2.755-1.721.009-1.995,2.776,0,.9,1.2-.006,0-.842a.083.083,0,0,1,.082-.083l.331,0a.083.083,0,0,1,.083.082l.011,2.182a.083.083,0,0,1-.082.083l-.331,0a.083.083,0,0,1-.083-.082l0-.842-1.2.006,0,.842a.083.083,0,0,1-.082.083l-.331,0a.083.083,0,0,1-.083-.082l-.012-2.375a.083.083,0,0,1,.016-.049l2.2-3.056a.083.083,0,0,1,.067-.035l2.143-.011a.083.083,0,0,1,.067.034"
										transform="translate(-161.752 -229.359)"
									/>
									<path
										className="bs-item-1821"
										d="M114.762,200.678l-3.585-1.144a.083.083,0,0,0-.051,0l-2.255.746a.083.083,0,0,0-.053.1l.1.315a.083.083,0,0,0,.1.053l.8-.264.376,1.137-.8.264a.083.083,0,0,0-.053.1l.1.315a.083.083,0,0,0,.1.053l2.071-.685a.083.083,0,0,0,.053-.1l-.1-.315a.083.083,0,0,0-.1-.053l-.8.264-.376-1.137.855-.283,3.256,1.039.54,1.634-1.995,2.776-.855.283-.376-1.137.8-.264a.083.083,0,0,0,.053-.1l-.1-.315a.083.083,0,0,0-.1-.053l-2.071.685a.083.083,0,0,0-.053.1l.1.315a.083.083,0,0,0,.1.053l.8-.264.376,1.137-.8.264a.083.083,0,0,0-.053.1l.1.315a.083.083,0,0,0,.1.053l2.254-.746a.083.083,0,0,0,.041-.03l2.2-3.056a.082.082,0,0,0,.011-.074l-.673-2.035a.083.083,0,0,0-.053-.053"
										transform="translate(-100.713 -184.675)"
									/>
								</g>
							</g>
							<g
								className="ct-item-1821"
								transform="matrix(1, 0, 0, 1, -1244.53, -458.68)">
								<rect
									className="u-item-1821"
									width={209}
									height={43}
									rx={15}
									transform="translate(1244.53 458.68)"
								/>
							</g>
							<text
								className="bt-item-1821"
								transform="translate(63 30)">
								<tspan x={0} y={0}>
									{'Ibagué'}
								</tspan>
							</text>
						</g>
					</React.Fragment>
				)}
				{selectedImage !== 4 ? (
					<g transform="translate(1245 486)">
						<RedPoint onHover={() => setSelectedImage(4)} />
					</g>
				) : (
					<React.Fragment>
						<g
							transform="translate(1164.535 471.686)"
							onClick={() => setSelectedImage(null)}>
							<g
								className="aq-item-1821"
								transform="translate(88.2 48.808)">
								<g transform="translate(6.919 43.912)">
									<g className="ar-item-1821">
										<use
											transform="translate(-0.07 -0.002)"
											xlinkHref="#rc"
										/>
									</g>
								</g>
								<g className="aq-item-1821">
									<path
										className="as-item-1821"
										d="M32.583,15.631a16.3,16.3,0,1,0-31.3,7.021C4.86,32.337,14.8,43.916,16.147,45.219a.224.224,0,0,0,.308,0c1.475-1.357,12.989-13.976,15.608-24.764.027-.1.051-.206.076-.309s.05-.207.072-.31a16.291,16.291,0,0,0,.338-2.3c0-.03,0-.06.007-.09.027-.381.045-.764.045-1.152,0-.238-.007-.458-.017-.669M16.3,26.2a9.9,9.9,0,1,1,9.9-9.9,9.9,9.9,0,0,1-9.9,9.9"
										transform="translate(0 0)"
									/>
									<g
										className="at-item-1821"
										transform="translate(2.605 2.104)">
										<g className="au-item-1821">
											<g transform="translate(0 0)">
												<g className="av-item-1821">
													<rect
														className="aw-item-1821"
														width={27.55}
														height={14.249}
														transform="translate(-0.08 0)"
													/>
												</g>
											</g>
										</g>
									</g>
									<path
										className="ax-item-1821"
										d="M60.408,47.748A12.752,12.752,0,1,0,73.16,60.5,12.752,12.752,0,0,0,60.408,47.748m0,22.651a9.9,9.9,0,1,1,9.9-9.9,9.9,9.9,0,0,1-9.9,9.9"
										transform="translate(-44.108 -44.193)"
									/>
									<g
										className="ay-item-1821"
										transform="translate(2.903 25.605)">
										<g className="az-item-1821">
											<g transform="translate(0)">
												<g className="ba-item-1821">
													<rect
														className="d-item-1821"
														width={27.296}
														height={19.699}
														transform="translate(0 0)"
													/>
												</g>
											</g>
										</g>
									</g>
									<g
										className="at-item-1821"
										transform="translate(6.728 29.43)">
										<g className="bb-item-1821">
											<g transform="translate(0 0)">
												<g className="bc-item-1821">
													<rect
														className="bd-item-1821"
														width={19.18}
														height={12.922}
														transform="translate(-0.018 -0.017)"
													/>
												</g>
											</g>
										</g>
									</g>
									<g
										className="ay-item-1821"
										transform="translate(19.816 4.592)">
										<g className="be-item-1821">
											<g transform="translate(0 0)">
												<g className="bf-item-1821">
													<rect
														className="e-item-1821"
														width={3.59}
														height={3.432}
														transform="translate(-1.003 2.416) rotate(-67.457)"
													/>
												</g>
											</g>
										</g>
									</g>
									<g
										className="ay-item-1821"
										transform="translate(5.128 5.564)">
										<g className="bg-item-1821">
											<g transform="translate(0)">
												<g className="bh-item-1821">
													<rect
														className="e-item-1821"
														width={8.409}
														height={8.369}
														transform="matrix(0.651, -0.759, 0.759, 0.651, -3.031, 3.536)"
													/>
												</g>
											</g>
										</g>
									</g>
									<g
										className="at-item-1821"
										transform="translate(19.816 25.39)">
										<g className="bi-item-1821">
											<path
												className="ac-item-1821"
												d="M266.662,343.872a7.127,7.127,0,0,0,2.045-.938c-1.039-1.307-1.491-1.894-1.491-1.894l-1.049.475Z"
												transform="translate(-266.166 -341.04)"
											/>
										</g>
									</g>
									<g
										className="bj-item-1821"
										transform="translate(5.128 20.915)">
										<g className="bk-item-1821">
											<path
												className="ac-item-1821"
												d="M71.058,280.936c.9,1.542,2.078,3.352,3.586,3.989-.637,1.207-1.173,2.145-1.173,2.145a11.476,11.476,0,0,1-4.592-5.095c1.039-.469,2.179-1.039,2.179-1.039"
												transform="translate(-68.879 -280.936)"
											/>
										</g>
									</g>
									<g
										className="bl-item-1821"
										transform="translate(5.006)">
										<g className="bm-item-1821">
											<g transform="translate(0 0)">
												<g className="bn-item-1821">
													<rect
														className="bo-item-1821"
														width={22.583}
														height={4.548}
														transform="translate(0 0)"
													/>
												</g>
											</g>
										</g>
									</g>
									<g
										className="bp-item-1821"
										transform="translate(3.839 18.557)">
										<g className="bq-item-1821">
											<path
												className="u-item-1821"
												d="M76.576,249.259a12.512,12.512,0,0,1-1.43,4.134,12.882,12.882,0,0,1-2.776,3.406,12.663,12.663,0,0,1-3.776,2.269,12.838,12.838,0,0,1-8.689.162,12.662,12.662,0,0,1-3.859-2.125,12.9,12.9,0,0,1-2.9-3.3,12.476,12.476,0,0,1-1.584-4.077A12.859,12.859,0,0,0,60,258.959a12.818,12.818,0,0,0,8.5-.158,12.9,12.9,0,0,0,8.083-9.542"
												transform="translate(-51.561 -249.259)"
											/>
										</g>
									</g>
									<g
										className="at-item-1821"
										transform="translate(3.588 3.355)">
										<g className="br-item-1821">
											<path
												className="u-item-1821"
												d="M48.195,56.993a12.512,12.512,0,0,1,1.158-4.61,12.766,12.766,0,0,1,6.864-6.435A12.775,12.775,0,0,1,69.7,48.561a12.7,12.7,0,0,1,2.791,3.883,12.513,12.513,0,0,1,1.134,4.616l-.073-.59-.1-.586c-.039-.194-.083-.387-.124-.58s-.1-.382-.151-.574a12.605,12.605,0,0,0-.863-2.2,12.808,12.808,0,0,0-6.793-6.2,12.743,12.743,0,0,0-9.164-.024,12.761,12.761,0,0,0-3.979,2.444,12.923,12.923,0,0,0-4.181,8.247"
												transform="translate(-48.195 -45.06)"
											/>
										</g>
									</g>
									<path
										className="u-item-1821"
										d="M95.872,105.864a9.9,9.9,0,1,1,9.9-9.9,9.9,9.9,0,0,1-9.9,9.9"
										transform="translate(-79.572 -79.658)"
									/>
									<path
										className="bs-item-1821"
										d="M128.35,119.3l1.726-1.271a.083.083,0,0,0,.034-.067l-.025-3.763a.083.083,0,0,0-.016-.049l-1.408-1.912a.083.083,0,0,0-.116-.017l-.267.2a.083.083,0,0,0-.018.116l.5.678-.965.71-.5-.678a.083.083,0,0,0-.116-.018l-.267.2a.083.083,0,0,0-.018.116l1.294,1.756a.083.083,0,0,0,.116.018l.267-.2a.083.083,0,0,0,.018-.116l-.5-.678.964-.71.534.725.023,3.418-1.386,1.021-3.258-1.035-.534-.725.965-.711.5.678a.083.083,0,0,0,.116.018l.267-.2a.083.083,0,0,0,.018-.116L125,114.932a.083.083,0,0,0-.116-.018l-.267.2a.083.083,0,0,0-.018.116l.5.678-.965.71-.5-.678a.083.083,0,0,0-.116-.018l-.267.2a.083.083,0,0,0-.018.116l1.408,1.912a.083.083,0,0,0,.042.03l3.587,1.139a.083.083,0,0,0,.074-.012"
										transform="translate(-114.049 -103.851)"
									/>
									<path
										className="bs-item-1821"
										d="M224.859,119.107l3.573-1.182a.083.083,0,0,0,.041-.03l1.386-1.928a.083.083,0,0,0-.019-.116l-.269-.193a.083.083,0,0,0-.116.019l-.492.684-.973-.7.492-.684a.083.083,0,0,0-.019-.116l-.269-.193a.083.083,0,0,0-.116.019l-1.273,1.772a.083.083,0,0,0,.019.116l.269.193a.083.083,0,0,0,.116-.019l.492-.684.973.7-.526.731-3.245,1.073-1.4-1-.018-3.418.526-.732.973.7-.492.684a.083.083,0,0,0,.019.116l.269.193a.083.083,0,0,0,.116-.019l1.273-1.772a.083.083,0,0,0-.019-.116l-.269-.193a.083.083,0,0,0-.116.019l-.492.684-.973-.7.492-.684a.083.083,0,0,0-.019-.116l-.269-.193a.083.083,0,0,0-.116.019l-1.386,1.928a.083.083,0,0,0-.016.049l.02,3.764a.083.083,0,0,0,.034.067l1.74,1.251a.083.083,0,0,0,.074.011"
										transform="translate(-206.389 -103.664)"
									/>
									<path
										className="bs-item-1821"
										d="M247.5,199.847l.1-.316a.083.083,0,0,0-.054-.1l-2.262-.722a.083.083,0,0,0-.051,0l-3.573,1.182a.083.083,0,0,0-.053.053l-.652,2.042a.083.083,0,0,0,.012.074l2.228,3.033a.083.083,0,0,0,.042.03l2.262.722a.083.083,0,0,0,.1-.054l.1-.316a.083.083,0,0,0-.054-.1l-.8-.256.364-1.141.8.256a.083.083,0,0,0,.1-.054l.1-.316a.083.083,0,0,0-.054-.1l-2.078-.663a.083.083,0,0,0-.1.054l-.1.316a.083.083,0,0,0,.054.1l.8.256-.364,1.141-.858-.274-2.024-2.755.523-1.64,3.245-1.073.858.274-.364,1.141-.8-.256a.083.083,0,0,0-.1.054l-.1.316a.083.083,0,0,0,.054.1l2.078.663a.083.083,0,0,0,.1-.054l.1-.316a.083.083,0,0,0-.054-.1l-.8-.256.364-1.141.8.256a.083.083,0,0,0,.1-.054"
										transform="translate(-223.017 -183.909)"
									/>
									<path
										className="bs-item-1821"
										d="M179.252,247.842l2.228,3.033a.083.083,0,0,1,.016.049l.012,2.375a.083.083,0,0,1-.082.083l-.331,0a.083.083,0,0,1-.083-.082l0-.842-1.2.006,0,.842a.083.083,0,0,1-.082.083l-.331,0a.083.083,0,0,1-.083-.082l-.011-2.182a.083.083,0,0,1,.082-.083l.331,0a.083.083,0,0,1,.083.082l0,.842,1.2-.006,0-.9-2.024-2.755-1.721.009-1.995,2.776,0,.9,1.2-.006,0-.842a.083.083,0,0,1,.082-.083l.331,0a.083.083,0,0,1,.083.082l.011,2.182a.083.083,0,0,1-.082.083l-.331,0a.083.083,0,0,1-.083-.082l0-.842-1.2.006,0,.842a.083.083,0,0,1-.082.083l-.331,0a.083.083,0,0,1-.083-.082l-.012-2.375a.083.083,0,0,1,.016-.049l2.2-3.056a.083.083,0,0,1,.067-.035l2.143-.011a.083.083,0,0,1,.067.034"
										transform="translate(-161.752 -229.359)"
									/>
									<path
										className="bs-item-1821"
										d="M114.762,200.678l-3.585-1.144a.083.083,0,0,0-.051,0l-2.255.746a.083.083,0,0,0-.053.1l.1.315a.083.083,0,0,0,.1.053l.8-.264.376,1.137-.8.264a.083.083,0,0,0-.053.1l.1.315a.083.083,0,0,0,.1.053l2.071-.685a.083.083,0,0,0,.053-.1l-.1-.315a.083.083,0,0,0-.1-.053l-.8.264-.376-1.137.855-.283,3.256,1.039.54,1.634-1.995,2.776-.855.283-.376-1.137.8-.264a.083.083,0,0,0,.053-.1l-.1-.315a.083.083,0,0,0-.1-.053l-2.071.685a.083.083,0,0,0-.053.1l.1.315a.083.083,0,0,0,.1.053l.8-.264.376,1.137-.8.264a.083.083,0,0,0-.053.1l.1.315a.083.083,0,0,0,.1.053l2.254-.746a.083.083,0,0,0,.041-.03l2.2-3.056a.082.082,0,0,0,.011-.074l-.673-2.035a.083.083,0,0,0-.053-.053"
										transform="translate(-100.713 -184.675)"
									/>
								</g>
							</g>
							<g
								className="cu-item-1821"
								transform="matrix(1, 0, 0, 1, -1164.53, -511.69)">
								<rect
									className="u-item-1821"
									width={209}
									height={43}
									rx={15}
									transform="translate(1164.53 511.69)"
								/>
							</g>
							<text
								className="bt-item-1821"
								transform="translate(81 30)">
								<tspan x={0} y={0}>
									{'Cali'}
								</tspan>
							</text>
						</g>
					</React.Fragment>
				)}
				{selectedImage !== 3 ? (
					<g transform="translate(1417 490)">
						<BluePoint onHover={() => setSelectedImage(3)} />
					</g>
				) : (
					<React.Fragment>
						<g
							transform="translate(1337.011 464.679)"
							onClick={() => setSelectedImage(null)}>
							<g
								className="aq-item-1821"
								transform="translate(88.2 48.808)">
								<g transform="translate(6.919 43.912)">
									<g className="ar-item-1821">
										<use
											transform="translate(-0.07 -0.002)"
											xlinkHref="#rc"
										/>
									</g>
								</g>
								<g className="aq-item-1821">
									<path
										className="as-item-1821"
										d="M32.583,15.631a16.3,16.3,0,1,0-31.3,7.021C4.86,32.337,14.8,43.916,16.147,45.219a.224.224,0,0,0,.308,0c1.475-1.357,12.989-13.976,15.608-24.764.027-.1.051-.206.076-.309s.05-.207.072-.31a16.291,16.291,0,0,0,.338-2.3c0-.03,0-.06.007-.09.027-.381.045-.764.045-1.152,0-.238-.007-.458-.017-.669M16.3,26.2a9.9,9.9,0,1,1,9.9-9.9,9.9,9.9,0,0,1-9.9,9.9"
										transform="translate(0 0)"
									/>
									<g
										className="at-item-1821"
										transform="translate(2.605 2.104)">
										<g className="au-item-1821">
											<g transform="translate(0 0)">
												<g className="av-item-1821">
													<rect
														className="aw-item-1821"
														width={27.55}
														height={14.249}
														transform="translate(-0.08 0)"
													/>
												</g>
											</g>
										</g>
									</g>
									<path
										className="ax-item-1821"
										d="M60.408,47.748A12.752,12.752,0,1,0,73.16,60.5,12.752,12.752,0,0,0,60.408,47.748m0,22.651a9.9,9.9,0,1,1,9.9-9.9,9.9,9.9,0,0,1-9.9,9.9"
										transform="translate(-44.108 -44.193)"
									/>
									<g
										className="ay-item-1821"
										transform="translate(2.903 25.605)">
										<g className="az-item-1821">
											<g transform="translate(0)">
												<g className="ba-item-1821">
													<rect
														className="d-item-1821"
														width={27.296}
														height={19.699}
														transform="translate(0 0)"
													/>
												</g>
											</g>
										</g>
									</g>
									<g
										className="at-item-1821"
										transform="translate(6.728 29.43)">
										<g className="bb-item-1821">
											<g transform="translate(0 0)">
												<g className="bc-item-1821">
													<rect
														className="bd-item-1821"
														width={19.18}
														height={12.922}
														transform="translate(-0.018 -0.017)"
													/>
												</g>
											</g>
										</g>
									</g>
									<g
										className="ay-item-1821"
										transform="translate(19.816 4.592)">
										<g className="be-item-1821">
											<g transform="translate(0 0)">
												<g className="bf-item-1821">
													<rect
														className="e-item-1821"
														width={3.59}
														height={3.432}
														transform="translate(-1.003 2.416) rotate(-67.457)"
													/>
												</g>
											</g>
										</g>
									</g>
									<g
										className="ay-item-1821"
										transform="translate(5.128 5.564)">
										<g className="bg-item-1821">
											<g transform="translate(0)">
												<g className="bh-item-1821">
													<rect
														className="e-item-1821"
														width={8.409}
														height={8.369}
														transform="matrix(0.651, -0.759, 0.759, 0.651, -3.031, 3.536)"
													/>
												</g>
											</g>
										</g>
									</g>
									<g
										className="at-item-1821"
										transform="translate(19.816 25.39)">
										<g className="bi-item-1821">
											<path
												className="ac-item-1821"
												d="M266.662,343.872a7.127,7.127,0,0,0,2.045-.938c-1.039-1.307-1.491-1.894-1.491-1.894l-1.049.475Z"
												transform="translate(-266.166 -341.04)"
											/>
										</g>
									</g>
									<g
										className="bj-item-1821"
										transform="translate(5.128 20.915)">
										<g className="bk-item-1821">
											<path
												className="ac-item-1821"
												d="M71.058,280.936c.9,1.542,2.078,3.352,3.586,3.989-.637,1.207-1.173,2.145-1.173,2.145a11.476,11.476,0,0,1-4.592-5.095c1.039-.469,2.179-1.039,2.179-1.039"
												transform="translate(-68.879 -280.936)"
											/>
										</g>
									</g>
									<g
										className="bl-item-1821"
										transform="translate(5.006)">
										<g className="bm-item-1821">
											<g transform="translate(0 0)">
												<g className="bn-item-1821">
													<rect
														className="bo-item-1821"
														width={22.583}
														height={4.548}
														transform="translate(0 0)"
													/>
												</g>
											</g>
										</g>
									</g>
									<g
										className="bp-item-1821"
										transform="translate(3.839 18.557)">
										<g className="bq-item-1821">
											<path
												className="u-item-1821"
												d="M76.576,249.259a12.512,12.512,0,0,1-1.43,4.134,12.882,12.882,0,0,1-2.776,3.406,12.663,12.663,0,0,1-3.776,2.269,12.838,12.838,0,0,1-8.689.162,12.662,12.662,0,0,1-3.859-2.125,12.9,12.9,0,0,1-2.9-3.3,12.476,12.476,0,0,1-1.584-4.077A12.859,12.859,0,0,0,60,258.959a12.818,12.818,0,0,0,8.5-.158,12.9,12.9,0,0,0,8.083-9.542"
												transform="translate(-51.561 -249.259)"
											/>
										</g>
									</g>
									<g
										className="at-item-1821"
										transform="translate(3.588 3.355)">
										<g className="br-item-1821">
											<path
												className="u-item-1821"
												d="M48.195,56.993a12.512,12.512,0,0,1,1.158-4.61,12.766,12.766,0,0,1,6.864-6.435A12.775,12.775,0,0,1,69.7,48.561a12.7,12.7,0,0,1,2.791,3.883,12.513,12.513,0,0,1,1.134,4.616l-.073-.59-.1-.586c-.039-.194-.083-.387-.124-.58s-.1-.382-.151-.574a12.605,12.605,0,0,0-.863-2.2,12.808,12.808,0,0,0-6.793-6.2,12.743,12.743,0,0,0-9.164-.024,12.761,12.761,0,0,0-3.979,2.444,12.923,12.923,0,0,0-4.181,8.247"
												transform="translate(-48.195 -45.06)"
											/>
										</g>
									</g>
									<path
										className="u-item-1821"
										d="M95.872,105.864a9.9,9.9,0,1,1,9.9-9.9,9.9,9.9,0,0,1-9.9,9.9"
										transform="translate(-79.572 -79.658)"
									/>
									<path
										className="bs-item-1821"
										d="M128.35,119.3l1.726-1.271a.083.083,0,0,0,.034-.067l-.025-3.763a.083.083,0,0,0-.016-.049l-1.408-1.912a.083.083,0,0,0-.116-.017l-.267.2a.083.083,0,0,0-.018.116l.5.678-.965.71-.5-.678a.083.083,0,0,0-.116-.018l-.267.2a.083.083,0,0,0-.018.116l1.294,1.756a.083.083,0,0,0,.116.018l.267-.2a.083.083,0,0,0,.018-.116l-.5-.678.964-.71.534.725.023,3.418-1.386,1.021-3.258-1.035-.534-.725.965-.711.5.678a.083.083,0,0,0,.116.018l.267-.2a.083.083,0,0,0,.018-.116L125,114.932a.083.083,0,0,0-.116-.018l-.267.2a.083.083,0,0,0-.018.116l.5.678-.965.71-.5-.678a.083.083,0,0,0-.116-.018l-.267.2a.083.083,0,0,0-.018.116l1.408,1.912a.083.083,0,0,0,.042.03l3.587,1.139a.083.083,0,0,0,.074-.012"
										transform="translate(-114.049 -103.851)"
									/>
									<path
										className="bs-item-1821"
										d="M224.859,119.107l3.573-1.182a.083.083,0,0,0,.041-.03l1.386-1.928a.083.083,0,0,0-.019-.116l-.269-.193a.083.083,0,0,0-.116.019l-.492.684-.973-.7.492-.684a.083.083,0,0,0-.019-.116l-.269-.193a.083.083,0,0,0-.116.019l-1.273,1.772a.083.083,0,0,0,.019.116l.269.193a.083.083,0,0,0,.116-.019l.492-.684.973.7-.526.731-3.245,1.073-1.4-1-.018-3.418.526-.732.973.7-.492.684a.083.083,0,0,0,.019.116l.269.193a.083.083,0,0,0,.116-.019l1.273-1.772a.083.083,0,0,0-.019-.116l-.269-.193a.083.083,0,0,0-.116.019l-.492.684-.973-.7.492-.684a.083.083,0,0,0-.019-.116l-.269-.193a.083.083,0,0,0-.116.019l-1.386,1.928a.083.083,0,0,0-.016.049l.02,3.764a.083.083,0,0,0,.034.067l1.74,1.251a.083.083,0,0,0,.074.011"
										transform="translate(-206.389 -103.664)"
									/>
									<path
										className="bs-item-1821"
										d="M247.5,199.847l.1-.316a.083.083,0,0,0-.054-.1l-2.262-.722a.083.083,0,0,0-.051,0l-3.573,1.182a.083.083,0,0,0-.053.053l-.652,2.042a.083.083,0,0,0,.012.074l2.228,3.033a.083.083,0,0,0,.042.03l2.262.722a.083.083,0,0,0,.1-.054l.1-.316a.083.083,0,0,0-.054-.1l-.8-.256.364-1.141.8.256a.083.083,0,0,0,.1-.054l.1-.316a.083.083,0,0,0-.054-.1l-2.078-.663a.083.083,0,0,0-.1.054l-.1.316a.083.083,0,0,0,.054.1l.8.256-.364,1.141-.858-.274-2.024-2.755.523-1.64,3.245-1.073.858.274-.364,1.141-.8-.256a.083.083,0,0,0-.1.054l-.1.316a.083.083,0,0,0,.054.1l2.078.663a.083.083,0,0,0,.1-.054l.1-.316a.083.083,0,0,0-.054-.1l-.8-.256.364-1.141.8.256a.083.083,0,0,0,.1-.054"
										transform="translate(-223.017 -183.909)"
									/>
									<path
										className="bs-item-1821"
										d="M179.252,247.842l2.228,3.033a.083.083,0,0,1,.016.049l.012,2.375a.083.083,0,0,1-.082.083l-.331,0a.083.083,0,0,1-.083-.082l0-.842-1.2.006,0,.842a.083.083,0,0,1-.082.083l-.331,0a.083.083,0,0,1-.083-.082l-.011-2.182a.083.083,0,0,1,.082-.083l.331,0a.083.083,0,0,1,.083.082l0,.842,1.2-.006,0-.9-2.024-2.755-1.721.009-1.995,2.776,0,.9,1.2-.006,0-.842a.083.083,0,0,1,.082-.083l.331,0a.083.083,0,0,1,.083.082l.011,2.182a.083.083,0,0,1-.082.083l-.331,0a.083.083,0,0,1-.083-.082l0-.842-1.2.006,0,.842a.083.083,0,0,1-.082.083l-.331,0a.083.083,0,0,1-.083-.082l-.012-2.375a.083.083,0,0,1,.016-.049l2.2-3.056a.083.083,0,0,1,.067-.035l2.143-.011a.083.083,0,0,1,.067.034"
										transform="translate(-161.752 -229.359)"
									/>
									<path
										className="bs-item-1821"
										d="M114.762,200.678l-3.585-1.144a.083.083,0,0,0-.051,0l-2.255.746a.083.083,0,0,0-.053.1l.1.315a.083.083,0,0,0,.1.053l.8-.264.376,1.137-.8.264a.083.083,0,0,0-.053.1l.1.315a.083.083,0,0,0,.1.053l2.071-.685a.083.083,0,0,0,.053-.1l-.1-.315a.083.083,0,0,0-.1-.053l-.8.264-.376-1.137.855-.283,3.256,1.039.54,1.634-1.995,2.776-.855.283-.376-1.137.8-.264a.083.083,0,0,0,.053-.1l-.1-.315a.083.083,0,0,0-.1-.053l-2.071.685a.083.083,0,0,0-.053.1l.1.315a.083.083,0,0,0,.1.053l.8-.264.376,1.137-.8.264a.083.083,0,0,0-.053.1l.1.315a.083.083,0,0,0,.1.053l2.254-.746a.083.083,0,0,0,.041-.03l2.2-3.056a.082.082,0,0,0,.011-.074l-.673-2.035a.083.083,0,0,0-.053-.053"
										transform="translate(-100.713 -184.675)"
									/>
								</g>
							</g>
							<g
								className="cs-item-1821"
								transform="matrix(1, 0, 0, 1, -1337.01, -464.68)">
								<rect
									className="u-item-1821"
									width={209}
									height={43}
									rx={15}
									transform="translate(1337.01 464.68)"
								/>
							</g>
							<text
								className="bt-item-1821"
								transform="translate(28.5 30)">
								<tspan x={0} y={0}>
									{'Villavicencio'}
								</tspan>
							</text>
						</g>
					</React.Fragment>
				)}
				{selectedImage !== 2 ? (
					<g transform="translate(1303, 570)">
						<BluePoint onHover={() => setSelectedImage(2)} />
					</g>
				) : (
					<React.Fragment>
						<g
							transform="translate(1221.105 548.693)"
							onClick={() => setSelectedImage(null)}>
							<g
								className="aq-item-1821"
								transform="translate(88.2 48.808)">
								<g transform="translate(6.919 43.912)">
									<g className="ar-item-1821">
										<use
											transform="translate(-0.07 -0.002)"
											xlinkHref="#rc"
										/>
									</g>
								</g>
								<g className="aq-item-1821">
									<path
										className="as-item-1821"
										d="M32.583,15.631a16.3,16.3,0,1,0-31.3,7.021C4.86,32.337,14.8,43.916,16.147,45.219a.224.224,0,0,0,.308,0c1.475-1.357,12.989-13.976,15.608-24.764.027-.1.051-.206.076-.309s.05-.207.072-.31a16.291,16.291,0,0,0,.338-2.3c0-.03,0-.06.007-.09.027-.381.045-.764.045-1.152,0-.238-.007-.458-.017-.669M16.3,26.2a9.9,9.9,0,1,1,9.9-9.9,9.9,9.9,0,0,1-9.9,9.9"
										transform="translate(0 0)"
									/>
									<g
										className="at-item-1821"
										transform="translate(2.605 2.104)">
										<g className="au-item-1821">
											<g transform="translate(0 0)">
												<g className="av-item-1821">
													<rect
														className="aw-item-1821"
														width={27.55}
														height={14.249}
														transform="translate(-0.08 0)"
													/>
												</g>
											</g>
										</g>
									</g>
									<path
										className="ax-item-1821"
										d="M60.408,47.748A12.752,12.752,0,1,0,73.16,60.5,12.752,12.752,0,0,0,60.408,47.748m0,22.651a9.9,9.9,0,1,1,9.9-9.9,9.9,9.9,0,0,1-9.9,9.9"
										transform="translate(-44.108 -44.193)"
									/>
									<g
										className="ay-item-1821"
										transform="translate(2.903 25.605)">
										<g className="az-item-1821">
											<g transform="translate(0)">
												<g className="ba-item-1821">
													<rect
														className="d-item-1821"
														width={27.296}
														height={19.699}
														transform="translate(0 0)"
													/>
												</g>
											</g>
										</g>
									</g>
									<g
										className="at-item-1821"
										transform="translate(6.728 29.43)">
										<g className="bb-item-1821">
											<g transform="translate(0 0)">
												<g className="bc-item-1821">
													<rect
														className="bd-item-1821"
														width={19.18}
														height={12.922}
														transform="translate(-0.018 -0.017)"
													/>
												</g>
											</g>
										</g>
									</g>
									<g
										className="ay-item-1821"
										transform="translate(19.816 4.592)">
										<g className="be-item-1821">
											<g transform="translate(0 0)">
												<g className="bf-item-1821">
													<rect
														className="e-item-1821"
														width={3.59}
														height={3.432}
														transform="translate(-1.003 2.416) rotate(-67.457)"
													/>
												</g>
											</g>
										</g>
									</g>
									<g
										className="ay-item-1821"
										transform="translate(5.128 5.564)">
										<g className="bg-item-1821">
											<g transform="translate(0)">
												<g className="bh-item-1821">
													<rect
														className="e-item-1821"
														width={8.409}
														height={8.369}
														transform="matrix(0.651, -0.759, 0.759, 0.651, -3.031, 3.536)"
													/>
												</g>
											</g>
										</g>
									</g>
									<g
										className="at-item-1821"
										transform="translate(19.816 25.39)">
										<g className="bi-item-1821">
											<path
												className="ac-item-1821"
												d="M266.662,343.872a7.127,7.127,0,0,0,2.045-.938c-1.039-1.307-1.491-1.894-1.491-1.894l-1.049.475Z"
												transform="translate(-266.166 -341.04)"
											/>
										</g>
									</g>
									<g
										className="bj-item-1821"
										transform="translate(5.128 20.915)">
										<g className="bk-item-1821">
											<path
												className="ac-item-1821"
												d="M71.058,280.936c.9,1.542,2.078,3.352,3.586,3.989-.637,1.207-1.173,2.145-1.173,2.145a11.476,11.476,0,0,1-4.592-5.095c1.039-.469,2.179-1.039,2.179-1.039"
												transform="translate(-68.879 -280.936)"
											/>
										</g>
									</g>
									<g
										className="bl-item-1821"
										transform="translate(5.006)">
										<g className="bm-item-1821">
											<g transform="translate(0 0)">
												<g className="bn-item-1821">
													<rect
														className="bo-item-1821"
														width={22.583}
														height={4.548}
														transform="translate(0 0)"
													/>
												</g>
											</g>
										</g>
									</g>
									<g
										className="bp-item-1821"
										transform="translate(3.839 18.557)">
										<g className="bq-item-1821">
											<path
												className="u-item-1821"
												d="M76.576,249.259a12.512,12.512,0,0,1-1.43,4.134,12.882,12.882,0,0,1-2.776,3.406,12.663,12.663,0,0,1-3.776,2.269,12.838,12.838,0,0,1-8.689.162,12.662,12.662,0,0,1-3.859-2.125,12.9,12.9,0,0,1-2.9-3.3,12.476,12.476,0,0,1-1.584-4.077A12.859,12.859,0,0,0,60,258.959a12.818,12.818,0,0,0,8.5-.158,12.9,12.9,0,0,0,8.083-9.542"
												transform="translate(-51.561 -249.259)"
											/>
										</g>
									</g>
									<g
										className="at-item-1821"
										transform="translate(3.588 3.355)">
										<g className="br-item-1821">
											<path
												className="u-item-1821"
												d="M48.195,56.993a12.512,12.512,0,0,1,1.158-4.61,12.766,12.766,0,0,1,6.864-6.435A12.775,12.775,0,0,1,69.7,48.561a12.7,12.7,0,0,1,2.791,3.883,12.513,12.513,0,0,1,1.134,4.616l-.073-.59-.1-.586c-.039-.194-.083-.387-.124-.58s-.1-.382-.151-.574a12.605,12.605,0,0,0-.863-2.2,12.808,12.808,0,0,0-6.793-6.2,12.743,12.743,0,0,0-9.164-.024,12.761,12.761,0,0,0-3.979,2.444,12.923,12.923,0,0,0-4.181,8.247"
												transform="translate(-48.195 -45.06)"
											/>
										</g>
									</g>
									<path
										className="u-item-1821"
										d="M95.872,105.864a9.9,9.9,0,1,1,9.9-9.9,9.9,9.9,0,0,1-9.9,9.9"
										transform="translate(-79.572 -79.658)"
									/>
									<path
										className="bs-item-1821"
										d="M128.35,119.3l1.726-1.271a.083.083,0,0,0,.034-.067l-.025-3.763a.083.083,0,0,0-.016-.049l-1.408-1.912a.083.083,0,0,0-.116-.017l-.267.2a.083.083,0,0,0-.018.116l.5.678-.965.71-.5-.678a.083.083,0,0,0-.116-.018l-.267.2a.083.083,0,0,0-.018.116l1.294,1.756a.083.083,0,0,0,.116.018l.267-.2a.083.083,0,0,0,.018-.116l-.5-.678.964-.71.534.725.023,3.418-1.386,1.021-3.258-1.035-.534-.725.965-.711.5.678a.083.083,0,0,0,.116.018l.267-.2a.083.083,0,0,0,.018-.116L125,114.932a.083.083,0,0,0-.116-.018l-.267.2a.083.083,0,0,0-.018.116l.5.678-.965.71-.5-.678a.083.083,0,0,0-.116-.018l-.267.2a.083.083,0,0,0-.018.116l1.408,1.912a.083.083,0,0,0,.042.03l3.587,1.139a.083.083,0,0,0,.074-.012"
										transform="translate(-114.049 -103.851)"
									/>
									<path
										className="bs-item-1821"
										d="M224.859,119.107l3.573-1.182a.083.083,0,0,0,.041-.03l1.386-1.928a.083.083,0,0,0-.019-.116l-.269-.193a.083.083,0,0,0-.116.019l-.492.684-.973-.7.492-.684a.083.083,0,0,0-.019-.116l-.269-.193a.083.083,0,0,0-.116.019l-1.273,1.772a.083.083,0,0,0,.019.116l.269.193a.083.083,0,0,0,.116-.019l.492-.684.973.7-.526.731-3.245,1.073-1.4-1-.018-3.418.526-.732.973.7-.492.684a.083.083,0,0,0,.019.116l.269.193a.083.083,0,0,0,.116-.019l1.273-1.772a.083.083,0,0,0-.019-.116l-.269-.193a.083.083,0,0,0-.116.019l-.492.684-.973-.7.492-.684a.083.083,0,0,0-.019-.116l-.269-.193a.083.083,0,0,0-.116.019l-1.386,1.928a.083.083,0,0,0-.016.049l.02,3.764a.083.083,0,0,0,.034.067l1.74,1.251a.083.083,0,0,0,.074.011"
										transform="translate(-206.389 -103.664)"
									/>
									<path
										className="bs-item-1821"
										d="M247.5,199.847l.1-.316a.083.083,0,0,0-.054-.1l-2.262-.722a.083.083,0,0,0-.051,0l-3.573,1.182a.083.083,0,0,0-.053.053l-.652,2.042a.083.083,0,0,0,.012.074l2.228,3.033a.083.083,0,0,0,.042.03l2.262.722a.083.083,0,0,0,.1-.054l.1-.316a.083.083,0,0,0-.054-.1l-.8-.256.364-1.141.8.256a.083.083,0,0,0,.1-.054l.1-.316a.083.083,0,0,0-.054-.1l-2.078-.663a.083.083,0,0,0-.1.054l-.1.316a.083.083,0,0,0,.054.1l.8.256-.364,1.141-.858-.274-2.024-2.755.523-1.64,3.245-1.073.858.274-.364,1.141-.8-.256a.083.083,0,0,0-.1.054l-.1.316a.083.083,0,0,0,.054.1l2.078.663a.083.083,0,0,0,.1-.054l.1-.316a.083.083,0,0,0-.054-.1l-.8-.256.364-1.141.8.256a.083.083,0,0,0,.1-.054"
										transform="translate(-223.017 -183.909)"
									/>
									<path
										className="bs-item-1821"
										d="M179.252,247.842l2.228,3.033a.083.083,0,0,1,.016.049l.012,2.375a.083.083,0,0,1-.082.083l-.331,0a.083.083,0,0,1-.083-.082l0-.842-1.2.006,0,.842a.083.083,0,0,1-.082.083l-.331,0a.083.083,0,0,1-.083-.082l-.011-2.182a.083.083,0,0,1,.082-.083l.331,0a.083.083,0,0,1,.083.082l0,.842,1.2-.006,0-.9-2.024-2.755-1.721.009-1.995,2.776,0,.9,1.2-.006,0-.842a.083.083,0,0,1,.082-.083l.331,0a.083.083,0,0,1,.083.082l.011,2.182a.083.083,0,0,1-.082.083l-.331,0a.083.083,0,0,1-.083-.082l0-.842-1.2.006,0,.842a.083.083,0,0,1-.082.083l-.331,0a.083.083,0,0,1-.083-.082l-.012-2.375a.083.083,0,0,1,.016-.049l2.2-3.056a.083.083,0,0,1,.067-.035l2.143-.011a.083.083,0,0,1,.067.034"
										transform="translate(-161.752 -229.359)"
									/>
									<path
										className="bs-item-1821"
										d="M114.762,200.678l-3.585-1.144a.083.083,0,0,0-.051,0l-2.255.746a.083.083,0,0,0-.053.1l.1.315a.083.083,0,0,0,.1.053l.8-.264.376,1.137-.8.264a.083.083,0,0,0-.053.1l.1.315a.083.083,0,0,0,.1.053l2.071-.685a.083.083,0,0,0,.053-.1l-.1-.315a.083.083,0,0,0-.1-.053l-.8.264-.376-1.137.855-.283,3.256,1.039.54,1.634-1.995,2.776-.855.283-.376-1.137.8-.264a.083.083,0,0,0,.053-.1l-.1-.315a.083.083,0,0,0-.1-.053l-2.071.685a.083.083,0,0,0-.053.1l.1.315a.083.083,0,0,0,.1.053l.8-.264.376,1.137-.8.264a.083.083,0,0,0-.053.1l.1.315a.083.083,0,0,0,.1.053l2.254-.746a.083.083,0,0,0,.041-.03l2.2-3.056a.082.082,0,0,0,.011-.074l-.673-2.035a.083.083,0,0,0-.053-.053"
										transform="translate(-100.713 -184.675)"
									/>
								</g>
							</g>
							<g
								className="cr-item-1821"
								transform="matrix(1, 0, 0, 1, -1241.1, -548.69)">
								<rect
									className="u-item-1821"
									width={209}
									height={43}
									rx={15}
									transform="translate(1241.1 548.69)"
								/>
							</g>
							<text
								className="bt-item-1821"
								transform="translate(81 30)">
								<tspan x={0} y={0}>
									{'Neiva'}
								</tspan>
							</text>
						</g>
					</React.Fragment>
				)}
				{selectedImage !== 1 ? (
					<g transform="translate(1203 660)">
						<BluePoint onHover={() => setSelectedImage(1)} />
					</g>
				) : (
					<React.Fragment>
						<g
							transform="translate(1124.535 637.01)"
							onClick={() => setSelectedImage(null)}>
							<g
								className="aq-item-1821"
								transform="translate(88.2 48.808)">
								<g transform="translate(6.919 43.912)">
									<g className="ar-item-1821">
										<use
											transform="translate(-0.07 -0.002)"
											xlinkHref="#rc"
										/>
									</g>
								</g>
								<g className="aq-item-1821">
									<path
										className="as-item-1821"
										d="M32.583,15.631a16.3,16.3,0,1,0-31.3,7.021C4.86,32.337,14.8,43.916,16.147,45.219a.224.224,0,0,0,.308,0c1.475-1.357,12.989-13.976,15.608-24.764.027-.1.051-.206.076-.309s.05-.207.072-.31a16.291,16.291,0,0,0,.338-2.3c0-.03,0-.06.007-.09.027-.381.045-.764.045-1.152,0-.238-.007-.458-.017-.669M16.3,26.2a9.9,9.9,0,1,1,9.9-9.9,9.9,9.9,0,0,1-9.9,9.9"
										transform="translate(0 0)"
									/>
									<g
										className="at-item-1821"
										transform="translate(2.605 2.104)">
										<g className="au-item-1821">
											<g transform="translate(0 0)">
												<g className="av-item-1821">
													<rect
														className="aw-item-1821"
														width={27.55}
														height={14.249}
														transform="translate(-0.08 0)"
													/>
												</g>
											</g>
										</g>
									</g>
									<path
										className="ax-item-1821"
										d="M60.408,47.748A12.752,12.752,0,1,0,73.16,60.5,12.752,12.752,0,0,0,60.408,47.748m0,22.651a9.9,9.9,0,1,1,9.9-9.9,9.9,9.9,0,0,1-9.9,9.9"
										transform="translate(-44.108 -44.193)"
									/>
									<g
										className="ay-item-1821"
										transform="translate(2.903 25.605)">
										<g className="az-item-1821">
											<g transform="translate(0)">
												<g className="ba-item-1821">
													<rect
														className="d-item-1821"
														width={27.296}
														height={19.699}
														transform="translate(0 0)"
													/>
												</g>
											</g>
										</g>
									</g>
									<g
										className="at-item-1821"
										transform="translate(6.728 29.43)">
										<g className="bb-item-1821">
											<g transform="translate(0 0)">
												<g className="bc-item-1821">
													<rect
														className="bd-item-1821"
														width={19.18}
														height={12.922}
														transform="translate(-0.018 -0.017)"
													/>
												</g>
											</g>
										</g>
									</g>
									<g
										className="ay-item-1821"
										transform="translate(19.816 4.592)">
										<g className="be-item-1821">
											<g transform="translate(0 0)">
												<g className="bf-item-1821">
													<rect
														className="e-item-1821"
														width={3.59}
														height={3.432}
														transform="translate(-1.003 2.416) rotate(-67.457)"
													/>
												</g>
											</g>
										</g>
									</g>
									<g
										className="ay-item-1821"
										transform="translate(5.128 5.564)">
										<g className="bg-item-1821">
											<g transform="translate(0)">
												<g className="bh-item-1821">
													<rect
														className="e-item-1821"
														width={8.409}
														height={8.369}
														transform="matrix(0.651, -0.759, 0.759, 0.651, -3.031, 3.536)"
													/>
												</g>
											</g>
										</g>
									</g>
									<g
										className="at-item-1821"
										transform="translate(19.816 25.39)">
										<g className="bi-item-1821">
											<path
												className="ac-item-1821"
												d="M266.662,343.872a7.127,7.127,0,0,0,2.045-.938c-1.039-1.307-1.491-1.894-1.491-1.894l-1.049.475Z"
												transform="translate(-266.166 -341.04)"
											/>
										</g>
									</g>
									<g
										className="bj-item-1821"
										transform="translate(5.128 20.915)">
										<g className="bk-item-1821">
											<path
												className="ac-item-1821"
												d="M71.058,280.936c.9,1.542,2.078,3.352,3.586,3.989-.637,1.207-1.173,2.145-1.173,2.145a11.476,11.476,0,0,1-4.592-5.095c1.039-.469,2.179-1.039,2.179-1.039"
												transform="translate(-68.879 -280.936)"
											/>
										</g>
									</g>
									<g
										className="bl-item-1821"
										transform="translate(5.006)">
										<g className="bm-item-1821">
											<g transform="translate(0 0)">
												<g className="bn-item-1821">
													<rect
														className="bo-item-1821"
														width={22.583}
														height={4.548}
														transform="translate(0 0)"
													/>
												</g>
											</g>
										</g>
									</g>
									<g
										className="bp-item-1821"
										transform="translate(3.839 18.557)">
										<g className="bq-item-1821">
											<path
												className="u-item-1821"
												d="M76.576,249.259a12.512,12.512,0,0,1-1.43,4.134,12.882,12.882,0,0,1-2.776,3.406,12.663,12.663,0,0,1-3.776,2.269,12.838,12.838,0,0,1-8.689.162,12.662,12.662,0,0,1-3.859-2.125,12.9,12.9,0,0,1-2.9-3.3,12.476,12.476,0,0,1-1.584-4.077A12.859,12.859,0,0,0,60,258.959a12.818,12.818,0,0,0,8.5-.158,12.9,12.9,0,0,0,8.083-9.542"
												transform="translate(-51.561 -249.259)"
											/>
										</g>
									</g>
									<g
										className="at-item-1821"
										transform="translate(3.588 3.355)">
										<g className="br-item-1821">
											<path
												className="u-item-1821"
												d="M48.195,56.993a12.512,12.512,0,0,1,1.158-4.61,12.766,12.766,0,0,1,6.864-6.435A12.775,12.775,0,0,1,69.7,48.561a12.7,12.7,0,0,1,2.791,3.883,12.513,12.513,0,0,1,1.134,4.616l-.073-.59-.1-.586c-.039-.194-.083-.387-.124-.58s-.1-.382-.151-.574a12.605,12.605,0,0,0-.863-2.2,12.808,12.808,0,0,0-6.793-6.2,12.743,12.743,0,0,0-9.164-.024,12.761,12.761,0,0,0-3.979,2.444,12.923,12.923,0,0,0-4.181,8.247"
												transform="translate(-48.195 -45.06)"
											/>
										</g>
									</g>
									<path
										className="u-item-1821"
										d="M95.872,105.864a9.9,9.9,0,1,1,9.9-9.9,9.9,9.9,0,0,1-9.9,9.9"
										transform="translate(-79.572 -79.658)"
									/>
									<path
										className="bs-item-1821"
										d="M128.35,119.3l1.726-1.271a.083.083,0,0,0,.034-.067l-.025-3.763a.083.083,0,0,0-.016-.049l-1.408-1.912a.083.083,0,0,0-.116-.017l-.267.2a.083.083,0,0,0-.018.116l.5.678-.965.71-.5-.678a.083.083,0,0,0-.116-.018l-.267.2a.083.083,0,0,0-.018.116l1.294,1.756a.083.083,0,0,0,.116.018l.267-.2a.083.083,0,0,0,.018-.116l-.5-.678.964-.71.534.725.023,3.418-1.386,1.021-3.258-1.035-.534-.725.965-.711.5.678a.083.083,0,0,0,.116.018l.267-.2a.083.083,0,0,0,.018-.116L125,114.932a.083.083,0,0,0-.116-.018l-.267.2a.083.083,0,0,0-.018.116l.5.678-.965.71-.5-.678a.083.083,0,0,0-.116-.018l-.267.2a.083.083,0,0,0-.018.116l1.408,1.912a.083.083,0,0,0,.042.03l3.587,1.139a.083.083,0,0,0,.074-.012"
										transform="translate(-114.049 -103.851)"
									/>
									<path
										className="bs-item-1821"
										d="M224.859,119.107l3.573-1.182a.083.083,0,0,0,.041-.03l1.386-1.928a.083.083,0,0,0-.019-.116l-.269-.193a.083.083,0,0,0-.116.019l-.492.684-.973-.7.492-.684a.083.083,0,0,0-.019-.116l-.269-.193a.083.083,0,0,0-.116.019l-1.273,1.772a.083.083,0,0,0,.019.116l.269.193a.083.083,0,0,0,.116-.019l.492-.684.973.7-.526.731-3.245,1.073-1.4-1-.018-3.418.526-.732.973.7-.492.684a.083.083,0,0,0,.019.116l.269.193a.083.083,0,0,0,.116-.019l1.273-1.772a.083.083,0,0,0-.019-.116l-.269-.193a.083.083,0,0,0-.116.019l-.492.684-.973-.7.492-.684a.083.083,0,0,0-.019-.116l-.269-.193a.083.083,0,0,0-.116.019l-1.386,1.928a.083.083,0,0,0-.016.049l.02,3.764a.083.083,0,0,0,.034.067l1.74,1.251a.083.083,0,0,0,.074.011"
										transform="translate(-206.389 -103.664)"
									/>
									<path
										className="bs-item-1821"
										d="M247.5,199.847l.1-.316a.083.083,0,0,0-.054-.1l-2.262-.722a.083.083,0,0,0-.051,0l-3.573,1.182a.083.083,0,0,0-.053.053l-.652,2.042a.083.083,0,0,0,.012.074l2.228,3.033a.083.083,0,0,0,.042.03l2.262.722a.083.083,0,0,0,.1-.054l.1-.316a.083.083,0,0,0-.054-.1l-.8-.256.364-1.141.8.256a.083.083,0,0,0,.1-.054l.1-.316a.083.083,0,0,0-.054-.1l-2.078-.663a.083.083,0,0,0-.1.054l-.1.316a.083.083,0,0,0,.054.1l.8.256-.364,1.141-.858-.274-2.024-2.755.523-1.64,3.245-1.073.858.274-.364,1.141-.8-.256a.083.083,0,0,0-.1.054l-.1.316a.083.083,0,0,0,.054.1l2.078.663a.083.083,0,0,0,.1-.054l.1-.316a.083.083,0,0,0-.054-.1l-.8-.256.364-1.141.8.256a.083.083,0,0,0,.1-.054"
										transform="translate(-223.017 -183.909)"
									/>
									<path
										className="bs-item-1821"
										d="M179.252,247.842l2.228,3.033a.083.083,0,0,1,.016.049l.012,2.375a.083.083,0,0,1-.082.083l-.331,0a.083.083,0,0,1-.083-.082l0-.842-1.2.006,0,.842a.083.083,0,0,1-.082.083l-.331,0a.083.083,0,0,1-.083-.082l-.011-2.182a.083.083,0,0,1,.082-.083l.331,0a.083.083,0,0,1,.083.082l0,.842,1.2-.006,0-.9-2.024-2.755-1.721.009-1.995,2.776,0,.9,1.2-.006,0-.842a.083.083,0,0,1,.082-.083l.331,0a.083.083,0,0,1,.083.082l.011,2.182a.083.083,0,0,1-.082.083l-.331,0a.083.083,0,0,1-.083-.082l0-.842-1.2.006,0,.842a.083.083,0,0,1-.082.083l-.331,0a.083.083,0,0,1-.083-.082l-.012-2.375a.083.083,0,0,1,.016-.049l2.2-3.056a.083.083,0,0,1,.067-.035l2.143-.011a.083.083,0,0,1,.067.034"
										transform="translate(-161.752 -229.359)"
									/>
									<path
										className="bs-item-1821"
										d="M114.762,200.678l-3.585-1.144a.083.083,0,0,0-.051,0l-2.255.746a.083.083,0,0,0-.053.1l.1.315a.083.083,0,0,0,.1.053l.8-.264.376,1.137-.8.264a.083.083,0,0,0-.053.1l.1.315a.083.083,0,0,0,.1.053l2.071-.685a.083.083,0,0,0,.053-.1l-.1-.315a.083.083,0,0,0-.1-.053l-.8.264-.376-1.137.855-.283,3.256,1.039.54,1.634-1.995,2.776-.855.283-.376-1.137.8-.264a.083.083,0,0,0,.053-.1l-.1-.315a.083.083,0,0,0-.1-.053l-2.071.685a.083.083,0,0,0-.053.1l.1.315a.083.083,0,0,0,.1.053l.8-.264.376,1.137-.8.264a.083.083,0,0,0-.053.1l.1.315a.083.083,0,0,0,.1.053l2.254-.746a.083.083,0,0,0,.041-.03l2.2-3.056a.082.082,0,0,0,.011-.074l-.673-2.035a.083.083,0,0,0-.053-.053"
										transform="translate(-100.713 -184.675)"
									/>
								</g>
							</g>
							<g
								className="cq-item-1821"
								transform="matrix(1, 0, 0, 1, -1124.53, -637.01)">
								<rect
									className="u-item-1821"
									width={209}
									height={43}
									rx={15}
									transform="translate(1124.53 637.01)"
								/>
							</g>
							<text
								className="bt-item-1821"
								transform="translate(71 30)">
								<tspan x={0} y={0}>
									{'Pasto'}
								</tspan>
							</text>
						</g>
					</React.Fragment>
				)}
			</g>
			<g transform="translate(0 25.247)">
				<g className="ah-item-1821">
					<path
						className="ai-item-1821"
						d="M1931.251,1052.676H1229.636a302.6,302.6,0,0,0-279.313,186.082L735.314,1754.352"
						transform="translate(-3844.131 -455.817)"
					/>
					<path
						className="ai-item-1821"
						d="M1930.082,1052.962h847.256A302.607,302.607,0,0,0,3056.652,866.88l215.009-515.595"
						transform="translate(-3842.961 -456.102)"
					/>
					<path
						className="ai-item-1821"
						d="M5549.685,1347.079l399.5-.487A302.606,302.606,0,0,0,6228.5,1160.51l206.422-495"
						transform="translate(-3630.357 -455.975)"
					/>
					<path
						className="ai-item-1821"
						d="M7770.9,482.59H6923.642a302.61,302.61,0,0,0-279.315,186.082l-205.112,491.913"
						transform="translate(-3838.55 -456.049)"
					/>
					<path
						className="aj-item-1821"
						d="M797.214,1308.69h701.614a302.606,302.606,0,0,0,279.314-186.082l290.616-697.024"
						transform="translate(-3844.071 -456.072)"
					/>
					<path
						className="aj-item-1821"
						d="M1001.532,1308.334h-505.8a302.606,302.606,0,0,0-279.314,186.082L1.4,2010.01"
						transform="translate(-3844.849 -455.713)"
					/>
					<path
						className="aj-item-1821"
						d="M7834.65,1288.515h-505.8A302.606,302.606,0,0,0,7049.533,1474.6l-215.008,515.594"
						transform="translate(-3838.162 -455.721)"
					/>
					<path
						className="aj-item-1821"
						d="M7836.693,702.265h-505.8a302.607,302.607,0,0,1-279.314-186.082L6836.566.589"
						transform="translate(-3838.16 -456.245)"
					/>
				</g>
			</g>
			<g
				className="al-item-1821"
				transform="translate(136 500.062) rotate(90)">
				<path
					className="am-item-1821"
					d="M150.547,162.491l35.693,48.585a1.353,1.353,0,0,1,.253.781l.2,38.035a1.333,1.333,0,0,1-1.323,1.333l-5.308.025a1.325,1.325,0,0,1-1.333-1.318l-.071-13.49-19.187.1.071,13.495a1.326,1.326,0,0,1-1.323,1.333l-5.308.025a1.318,1.318,0,0,1-1.328-1.318l-.182-34.943a1.322,1.322,0,0,1,1.318-1.333l5.308-.03a1.333,1.333,0,0,1,1.333,1.323l.071,13.49,19.187-.1-.076-14.432-32.408-44.124-27.572.142L86.618,214.533l.071,14.427,19.193-.1-.071-13.49a1.322,1.322,0,0,1,1.318-1.333l5.308-.03a1.326,1.326,0,0,1,1.333,1.323l.182,34.943a1.328,1.328,0,0,1-1.318,1.333l-5.308.025a1.325,1.325,0,0,1-1.333-1.318l-.071-13.495-19.187.1.071,13.495a1.333,1.333,0,0,1-1.323,1.333l-5.308.025a1.328,1.328,0,0,1-1.333-1.318l-.2-38.035a1.326,1.326,0,0,1,.248-.781l35.181-48.96a1.34,1.34,0,0,1,1.07-.553l34.33-.177a1.319,1.319,0,0,1,1.075.542M95.271,122.767,37.84,104.442a1.285,1.285,0,0,0-.816.005L.91,116.385a1.328,1.328,0,0,0-.842,1.678L1.731,123.1a1.326,1.326,0,0,0,1.678.842l12.805-4.233,6.027,18.219-12.81,4.233a1.328,1.328,0,0,0-.842,1.678l1.663,5.039a1.332,1.332,0,0,0,1.678.841l33.179-10.97a1.324,1.324,0,0,0,.842-1.678l-1.663-5.039a1.332,1.332,0,0,0-1.678-.842L29.8,135.431l-6.022-18.219,13.7-4.532,52.158,16.648,4.26,12.886L98.287,155.5,66.34,199.963l-13.7,4.527-6.022-18.219,12.81-4.233a1.328,1.328,0,0,0,.842-1.678L58.6,175.321a1.325,1.325,0,0,0-1.673-.842L23.748,185.45a1.328,1.328,0,0,0-.842,1.678l1.663,5.039a1.328,1.328,0,0,0,1.678.841l12.81-4.238,6.027,18.219-12.81,4.238a1.327,1.327,0,0,0-.847,1.678l1.668,5.039a1.328,1.328,0,0,0,1.678.841l36.109-11.943a1.328,1.328,0,0,0,.664-.487L106.723,157.4a1.314,1.314,0,0,0,.182-1.191L96.128,123.619a1.329,1.329,0,0,0-.857-.852m70.819-8.973,57.238-18.929a1.315,1.315,0,0,0,.659-.487l22.2-30.888a1.329,1.329,0,0,0-.3-1.85l-4.309-3.1a1.324,1.324,0,0,0-1.85.3L231.844,69.8,216.261,58.6l7.873-10.955a1.323,1.323,0,0,0-.3-1.85l-4.309-3.1a1.319,1.319,0,0,0-1.85.3L197.281,71.379a1.329,1.329,0,0,0,.3,1.855l4.314,3.1a1.329,1.329,0,0,0,1.85-.3l7.873-10.955,15.583,11.2-8.42,11.715L166.8,105.177l-22.391-16.09-.284-54.749,8.42-11.715,15.583,11.2-7.873,10.955a1.324,1.324,0,0,0,.3,1.85l4.309,3.1a1.324,1.324,0,0,0,1.85-.3l20.394-28.378a1.324,1.324,0,0,0-.3-1.85l-4.309-3.1a1.329,1.329,0,0,0-1.85.3l-7.878,10.955L157.193,16.159,165.066,5.2a1.329,1.329,0,0,0-.3-1.85l-4.309-3.1a1.319,1.319,0,0,0-1.85.3L136.4,31.443a1.348,1.348,0,0,0-.248.781l.314,60.285a1.319,1.319,0,0,0,.553,1.07L164.9,113.612a1.33,1.33,0,0,0,1.191.182m96.378,7.949,1.612-5.059a1.328,1.328,0,0,0-.862-1.668l-36.231-11.563a1.337,1.337,0,0,0-.821.005l-57.238,18.929a1.311,1.311,0,0,0-.847.857l-10.438,32.7a1.32,1.32,0,0,0,.193,1.186l35.688,48.59a1.353,1.353,0,0,0,.669.477l36.231,11.568a1.326,1.326,0,0,0,1.668-.862l1.612-5.054a1.317,1.317,0,0,0-.857-1.668l-12.856-4.106,5.835-18.28,12.856,4.1a1.329,1.329,0,0,0,1.668-.857l1.612-5.059a1.328,1.328,0,0,0-.862-1.668l-33.29-10.625a1.321,1.321,0,0,0-1.663.862l-1.617,5.059a1.321,1.321,0,0,0,.862,1.663l12.851,4.106-5.83,18.28-13.748-4.385-32.413-44.129,8.385-26.264,51.981-17.19,13.743,4.39-5.83,18.28-12.856-4.106a1.334,1.334,0,0,0-1.668.862l-1.612,5.059a1.323,1.323,0,0,0,.862,1.663l33.285,10.625a1.327,1.327,0,0,0,1.668-.857l1.617-5.059a1.332,1.332,0,0,0-.862-1.668l-12.856-4.1,5.835-18.28,12.856,4.106a1.334,1.334,0,0,0,1.668-.862M99.311,113.906l27.638-20.358a1.335,1.335,0,0,0,.542-1.08l-.4-60.285a1.308,1.308,0,0,0-.259-.776L104.274.784A1.323,1.323,0,0,0,102.419.5L98.145,3.648A1.328,1.328,0,0,0,97.866,5.5l8,10.864L90.42,27.748l-8-10.864a1.326,1.326,0,0,0-1.855-.279l-4.273,3.148a1.326,1.326,0,0,0-.279,1.855L96.731,49.743a1.328,1.328,0,0,0,1.855.279l4.273-3.148a1.328,1.328,0,0,0,.284-1.855l-8-10.864,15.451-11.381,8.557,11.619.36,54.749-22.2,16.349L45.13,88.919,36.573,77.3,52.024,65.92l8,10.864a1.328,1.328,0,0,0,1.855.279l4.273-3.148a1.332,1.332,0,0,0,.284-1.855L45.708,43.929a1.324,1.324,0,0,0-1.855-.284l-4.273,3.148a1.327,1.327,0,0,0-.279,1.855l8,10.864L31.853,70.893l-8-10.864a1.328,1.328,0,0,0-1.855-.284L17.72,62.893a1.328,1.328,0,0,0-.279,1.855L40,95.373a1.3,1.3,0,0,0,.664.477L98.12,114.1a1.332,1.332,0,0,0,1.191-.2"
					transform="translate(97.42 -56.426) rotate(-15)"
				/>
			</g>
			<g transform="translate(0 -250) scale(0.95)">
				<text
					className="ak-item-1821"
					transform="translate(201.322 321.829)">
					<tspan x={0} y={66}>
						{t('COBERTURA')}
					</tspan>
				</text>
				<text
					className="bu-item-1821"
					transform="translate(289 573.182)">
					<tspan x={0} y={23}>
						{'Bogotá'}
					</tspan>
					<tspan x={0} y={61}>
						{'Medellín '}
					</tspan>
					<tspan x={0} y={99}>
						{'Cali '}
					</tspan>
					<tspan x={0} y={137}>
						{'Pereira '}
					</tspan>
					<tspan x={0} y={175}>
						{'Barranquilla '}
					</tspan>
				</text>
				<text
					className="bv-item-1821"
					transform="translate(249 531.62)">
					<tspan x={0} y={23}>
						{'Colombia'}
					</tspan>
				</text>
				<text
					className="bv-item-1821"
					transform="translate(489.5 531.62)">
					<tspan x={0} y={23}>
						{'Panamá'}
					</tspan>
				</text>
				<text
					className="bv-item-1821"
					transform="translate(757.693 531.62)">
					<tspan x={0} y={23}>
						{'Costa Rica'}
					</tspan>
				</text>
				<text
					className="bu-item-1821"
					transform="translate(533.5 573.182)">
					<tspan x={0} y={23}>
						{'Ciudad de '}
					</tspan>
					<tspan x={0} y={49}>
						{'Panamá'}
					</tspan>
				</text>
				<text
					className="bu-item-1821"
					transform="translate(810.5 573.182)">
					<tspan x={0} y={23}>
						{'San José de '}
					</tspan>
					<tspan x={0} y={49}>
						{'Costa Rica'}
					</tspan>
				</text>
				<text
					className="bu-item-1821"
					transform="translate(533 869.182)">
					<tspan x={0} y={23}>
						{'Pasto '}
					</tspan>
					<tspan x={0} y={61}>
						{'Villavicencio'}
					</tspan>
					<tspan x={0} y={99}>
						{'Bucaramanga '}
					</tspan>
				</text>
				<text
					className="bu-item-1821"
					transform="translate(289 869.182)">
					<tspan x={0} y={23}>
						{'Cartagena '}
					</tspan>
					<tspan x={0} y={61}>
						{'Valledupar '}
					</tspan>
					<tspan x={0} y={99}>
						{'Montería '}
					</tspan>
				</text>
				<text
					className="bu-item-1821"
					transform="translate(818 869.182)">
					<tspan x={0} y={23}>
						{'Neiva '}
					</tspan>
					<tspan x={0} y={61}>
						{'Ibagué '}
					</tspan>
					<tspan x={0} y={99}>
						{'Cúcuta '}
					</tspan>
				</text>
				<text
					className="bw-item-1821"
					transform="translate(251.193 463.505)">
					<tspan x={0} y={30}>
						{t('CEDIS en ciudades principales')}
					</tspan>
				</text>
				<text
					className="bw-item-1821"
					transform="translate(251.193 803.505)">
					<tspan x={0} y={30}>
						{t('CEDIS en ciudades intermedias')}
					</tspan>
				</text>
				<circle
					className="am-item-1821"
					cx={4}
					cy={4}
					r={4}
					transform="translate(272 622.505)"
				/>
				<circle
					className="am-item-1821"
					cx={4}
					cy={4}
					r={4}
					transform="translate(272 584.505)"
				/>
				<circle
					className="am-item-1821"
					cx={4}
					cy={4}
					r={4}
					transform="translate(516.5 584.505)"
				/>
				<circle
					className="am-item-1821"
					cx={4}
					cy={4}
					r={4}
					transform="translate(793.5 584.505)"
				/>
				<circle
					className="am-item-1821"
					cx={4}
					cy={4}
					r={4}
					transform="translate(516 880.505)"
				/>
				<circle
					className="am-item-1821"
					cx={4}
					cy={4}
					r={4}
					transform="translate(272 880.505)"
				/>
				<circle
					className="am-item-1821"
					cx={4}
					cy={4}
					r={4}
					transform="translate(795 880.505)"
				/>
				<circle
					className="am-item-1821"
					cx={4}
					cy={4}
					r={4}
					transform="translate(272 660.505)"
				/>
				<circle
					className="am-item-1821"
					cx={4}
					cy={4}
					r={4}
					transform="translate(516 918.505)"
				/>
				<circle
					className="am-item-1821"
					cx={4}
					cy={4}
					r={4}
					transform="translate(272 918.505)"
				/>
				<circle
					className="am-item-1821"
					cx={4}
					cy={4}
					r={4}
					transform="translate(795 918.505)"
				/>
				<circle
					className="am-item-1821"
					cx={4}
					cy={4}
					r={4}
					transform="translate(272 698.505)"
				/>
				<circle
					className="am-item-1821"
					cx={4}
					cy={4}
					r={4}
					transform="translate(516 956.505)"
				/>
				<circle
					className="am-item-1821"
					cx={4}
					cy={4}
					r={4}
					transform="translate(272 956.505)"
				/>
				<circle
					className="am-item-1821"
					cx={4}
					cy={4}
					r={4}
					transform="translate(795 956.505)"
				/>
				<circle
					className="am-item-1821"
					cx={4}
					cy={4}
					r={4}
					transform="translate(272 736.505)"
				/>
				<g
					className="bx-item-1821"
					transform="translate(201.322 774.829)">
					<g transform="translate(8.675 55.053)">
						<g className="by-item-1821">
							<use
								transform="translate(-0.088 -0.003) scale(1.254 1.254)"
								xlinkHref="#rc"
							/>
						</g>
					</g>
					<g className="bx-item-1821">
						<path
							className="ac-item-1821"
							d="M40.85,19.6A20.434,20.434,0,1,0,1.61,28.4C6.094,40.542,18.554,55.059,20.244,56.692a.281.281,0,0,0,.386,0C22.479,55,36.915,39.174,40.2,25.65c.034-.128.064-.258.1-.388s.062-.259.09-.389a20.425,20.425,0,0,0,.424-2.881c0-.038.006-.075.008-.113.033-.477.056-.958.056-1.444,0-.3-.008-.574-.021-.839M20.436,32.85A12.411,12.411,0,1,1,32.847,20.439,12.411,12.411,0,0,1,20.436,32.85"
							transform="translate(0 0)"
						/>
						<g
							className="at-item-1821"
							transform="translate(3.265 2.637)">
							<g className="bz-item-1821">
								<g transform="translate(0 0)">
									<g className="ca-item-1821">
										<rect
											className="aw-item-1821"
											width={34.54}
											height={17.865}
											transform="translate(-0.1 0)"
										/>
									</g>
								</g>
							</g>
						</g>
						<path
							className="ac-item-1821"
							d="M63.644,47.748A15.988,15.988,0,1,0,79.631,63.736,15.988,15.988,0,0,0,63.644,47.748m0,28.4A12.411,12.411,0,1,1,76.054,63.736,12.411,12.411,0,0,1,63.644,76.147"
							transform="translate(-43.208 -43.291)"
						/>
						<g
							className="ay-item-1821"
							transform="translate(3.64 32.101)">
							<g className="cb-item-1821">
								<g transform="translate(0)">
									<g className="cc-item-1821">
										<rect
											className="cd-item-1821"
											width={34.221}
											height={24.697}
											transform="translate(0 0)"
										/>
									</g>
								</g>
							</g>
						</g>
						<g
							className="at-item-1821"
							transform="translate(8.434 36.897)">
							<g className="ce-item-1821">
								<g transform="translate(0 0)">
									<g className="cf-item-1821">
										<rect
											className="bd-item-1821"
											width={24.047}
											height={16.201}
											transform="translate(-0.022 -0.022)"
										/>
									</g>
								</g>
							</g>
						</g>
						<g
							className="ay-item-1821"
							transform="translate(24.843 5.757)">
							<g className="cg-item-1821">
								<g transform="translate(0 0)">
									<g className="ch-item-1821">
										<rect
											className="ci-item-1821"
											width={4.501}
											height={4.303}
											transform="translate(-1.257 3.029) rotate(-67.457)"
										/>
									</g>
								</g>
							</g>
						</g>
						<g
							className="ay-item-1821"
							transform="translate(6.429 6.976)">
							<g className="cj-item-1821">
								<g transform="translate(0)">
									<g className="ck-item-1821">
										<rect
											className="cl-item-1821"
											width={10.543}
											height={10.492}
											transform="matrix(0.651, -0.759, 0.759, 0.651, -3.8, 4.433)"
										/>
									</g>
								</g>
							</g>
						</g>
						<g
							className="at-item-1821"
							transform="translate(24.843 31.832)">
							<g className="cg-item-1821">
								<path
									className="ac-item-1821"
									d="M266.788,344.591a8.937,8.937,0,0,0,2.563-1.177c-1.3-1.639-1.87-2.374-1.87-2.374l-1.315.6Z"
									transform="translate(-266.166 -341.04)"
								/>
							</g>
						</g>
						<g
							className="bj-item-1821"
							transform="translate(6.429 26.222)">
							<g className="cj-item-1821">
								<path
									className="ac-item-1821"
									d="M71.61,280.936c1.135,1.933,2.605,4.2,4.5,5-.8,1.513-1.471,2.689-1.471,2.689a14.387,14.387,0,0,1-5.757-6.387c1.3-.588,2.731-1.3,2.731-1.3"
									transform="translate(-68.879 -280.936)"
								/>
							</g>
						</g>
						<g
							className="bl-item-1821"
							transform="translate(6.276)">
							<g className="cm-item-1821">
								<g transform="translate(0 0)">
									<g className="cn-item-1821">
										<rect
											className="bo-item-1821"
											width={28.313}
											height={5.702}
											transform="translate(0 0)"
										/>
									</g>
								</g>
							</g>
						</g>
						<g
							className="bp-item-1821"
							transform="translate(4.813 23.265)">
							<g className="co-item-1821">
								<path
									className="u-item-1821"
									d="M82.923,249.259a15.687,15.687,0,0,1-1.792,5.183,16.15,16.15,0,0,1-3.48,4.27,15.876,15.876,0,0,1-4.734,2.844,16.1,16.1,0,0,1-10.893.2,15.874,15.874,0,0,1-4.838-2.664,16.174,16.174,0,0,1-3.639-4.136,15.641,15.641,0,0,1-1.986-5.112A16.122,16.122,0,0,0,62.138,261.42a16.071,16.071,0,0,0,10.652-.2,16.174,16.174,0,0,0,10.133-11.963"
									transform="translate(-51.561 -249.259)"
								/>
							</g>
						</g>
						<g
							className="at-item-1821"
							transform="translate(4.498 4.206)">
							<g className="cp-item-1821">
								<path
									className="u-item-1821"
									d="M48.195,60.021a15.686,15.686,0,0,1,1.452-5.779,16,16,0,0,1,8.606-8.067,16.017,16.017,0,0,1,16.9,3.275,15.924,15.924,0,0,1,3.5,4.868A15.687,15.687,0,0,1,80.076,60.1l-.092-.74-.126-.734c-.049-.243-.1-.485-.155-.728s-.126-.479-.189-.719a15.8,15.8,0,0,0-1.082-2.758,16.058,16.058,0,0,0-8.516-7.777,15.976,15.976,0,0,0-11.49-.03,16,16,0,0,0-4.988,3.064,16.2,16.2,0,0,0-5.242,10.339"
									transform="translate(-48.195 -45.06)"
								/>
							</g>
						</g>
						<path
							className="u-item-1821"
							d="M98.384,110.887a12.411,12.411,0,1,1,12.411-12.411,12.411,12.411,0,0,1-12.411,12.411"
							transform="translate(-77.948 -78.032)"
						/>
						<path
							className="bs-item-1821"
							d="M129.651,121.1l2.163-1.594a.1.1,0,0,0,.042-.084l-.031-4.718a.1.1,0,0,0-.02-.061l-1.766-2.4a.1.1,0,0,0-.145-.022l-.334.246a.1.1,0,0,0-.022.145l.626.85-1.209.891-.626-.85a.1.1,0,0,0-.145-.022l-.334.246a.1.1,0,0,0-.022.145l1.622,2.2a.1.1,0,0,0,.145.022l.335-.246a.1.1,0,0,0,.022-.145l-.626-.85,1.209-.891.67.909.028,4.285-1.737,1.28-4.084-1.3-.67-.909,1.209-.891.626.85a.1.1,0,0,0,.145.022l.335-.246a.1.1,0,0,0,.022-.145l-1.622-2.2a.1.1,0,0,0-.145-.022l-.334.246a.1.1,0,0,0-.022.145l.626.85-1.209.891-.626-.85a.1.1,0,0,0-.145-.022l-.334.246a.1.1,0,0,0-.022.145l1.766,2.4a.1.1,0,0,0,.052.037l4.5,1.429a.1.1,0,0,0,.093-.015"
							transform="translate(-111.721 -101.732)"
						/>
						<path
							className="bs-item-1821"
							d="M225.333,120.909l4.48-1.481a.1.1,0,0,0,.052-.038l1.737-2.418a.1.1,0,0,0-.024-.145l-.337-.242a.1.1,0,0,0-.145.024l-.616.858-1.22-.876.616-.858a.1.1,0,0,0-.024-.145l-.337-.242a.1.1,0,0,0-.145.024l-1.6,2.221a.1.1,0,0,0,.024.145l.337.242a.1.1,0,0,0,.145-.024l.616-.857,1.22.877-.659.917-4.069,1.345-1.752-1.259-.022-4.285.659-.917,1.22.877-.616.857a.1.1,0,0,0,.024.145l.337.242a.1.1,0,0,0,.145-.024l1.6-2.221a.1.1,0,0,0-.024-.145l-.337-.242a.1.1,0,0,0-.145.024l-.616.858-1.22-.876.616-.858a.1.1,0,0,0-.024-.145l-.337-.242a.1.1,0,0,0-.145.024l-1.737,2.418a.1.1,0,0,0-.02.061l.024,4.718a.1.1,0,0,0,.043.084l2.182,1.568a.1.1,0,0,0,.093.014"
							transform="translate(-202.176 -101.548)"
						/>
						<path
							className="bs-item-1821"
							d="M249.166,200.138l.126-.4a.1.1,0,0,0-.067-.13l-2.836-.905a.1.1,0,0,0-.064,0l-4.48,1.482a.1.1,0,0,0-.066.067l-.817,2.56a.1.1,0,0,0,.015.093l2.793,3.8a.1.1,0,0,0,.052.037l2.836.905a.1.1,0,0,0,.13-.067l.126-.4a.1.1,0,0,0-.067-.13l-1.006-.321.457-1.431,1.006.321a.1.1,0,0,0,.13-.067l.126-.4a.1.1,0,0,0-.067-.13l-2.606-.832a.1.1,0,0,0-.13.067l-.126.4a.1.1,0,0,0,.067.13l1.006.321-.457,1.431-1.076-.343-2.537-3.454.656-2.056,4.069-1.345,1.076.343-.457,1.431-1.006-.321a.1.1,0,0,0-.13.067l-.126.4a.1.1,0,0,0,.067.131l2.606.832a.1.1,0,0,0,.13-.067l.126-.4a.1.1,0,0,0-.067-.13l-1.006-.321.457-1.431,1.006.321a.1.1,0,0,0,.13-.067"
							transform="translate(-218.466 -180.155)"
						/>
						<path
							className="bs-item-1821"
							d="M180.391,247.85l2.793,3.8a.1.1,0,0,1,.02.061l.015,2.977a.1.1,0,0,1-.1.1l-.415,0a.1.1,0,0,1-.1-.1l-.006-1.056-1.5.008.006,1.056a.1.1,0,0,1-.1.1l-.415,0a.1.1,0,0,1-.1-.1l-.014-2.735a.1.1,0,0,1,.1-.1l.415,0a.1.1,0,0,1,.1.1l.006,1.056,1.5-.008-.006-1.129-2.537-3.454-2.158.011-2.5,3.48.006,1.129,1.5-.008-.006-1.056a.1.1,0,0,1,.1-.1l.415,0a.1.1,0,0,1,.1.1l.014,2.735a.1.1,0,0,1-.1.1l-.415,0a.1.1,0,0,1-.1-.1l-.006-1.056-1.5.008.006,1.056a.1.1,0,0,1-.1.1l-.415,0a.1.1,0,0,1-.1-.1l-.015-2.977a.1.1,0,0,1,.02-.061l2.754-3.832a.1.1,0,0,1,.084-.043l2.687-.014a.1.1,0,0,1,.084.042"
							transform="translate(-158.451 -224.678)"
						/>
						<path
							className="bs-item-1821"
							d="M116.271,200.97l-4.5-1.435a.1.1,0,0,0-.064,0l-2.827.935a.1.1,0,0,0-.066.131l.13.394a.1.1,0,0,0,.131.066l1-.332.472,1.426-1,.332a.1.1,0,0,0-.066.131l.13.394a.1.1,0,0,0,.131.066l2.6-.859a.1.1,0,0,0,.066-.131l-.13-.394a.1.1,0,0,0-.131-.066l-1,.332-.472-1.426,1.072-.355,4.082,1.3.677,2.049-2.5,3.48-1.072.354-.472-1.426,1-.332a.1.1,0,0,0,.066-.131l-.13-.394a.1.1,0,0,0-.131-.066l-2.6.859a.1.1,0,0,0-.066.131l.13.394a.1.1,0,0,0,.131.066l1-.332.472,1.426-1,.332a.1.1,0,0,0-.066.131l.13.394a.1.1,0,0,0,.131.066l2.826-.935a.1.1,0,0,0,.052-.038l2.754-3.832a.1.1,0,0,0,.014-.093l-.844-2.551a.1.1,0,0,0-.067-.066"
							transform="translate(-98.657 -180.906)"
						/>
					</g>
				</g>
				<g
					className="bx-item-1821"
					transform="translate(201.322 434.829)">
					<g transform="translate(8.675 55.053)">
						<g className="by-item-1821">
							<use
								transform="translate(-0.088 -0.003) scale(1.254 1.254)"
								xlinkHref="#rc"
							/>
						</g>
					</g>
					<g className="bx-item-1821">
						<path
							className="am-item-1821"
							d="M40.85,19.6A20.434,20.434,0,1,0,1.61,28.4C6.094,40.542,18.554,55.059,20.244,56.692a.281.281,0,0,0,.386,0C22.479,55,36.915,39.174,40.2,25.65c.034-.128.064-.258.1-.388s.062-.259.09-.389a20.425,20.425,0,0,0,.424-2.881c0-.038.006-.075.008-.113.033-.477.056-.958.056-1.444,0-.3-.008-.574-.021-.839M20.436,32.85A12.411,12.411,0,1,1,32.847,20.439,12.411,12.411,0,0,1,20.436,32.85"
							transform="translate(0 0)"
						/>
						<g
							className="at-item-1821"
							transform="translate(3.265 2.637)">
							<g className="bz-item-1821">
								<g transform="translate(0 0)">
									<g className="ca-item-1821">
										<rect
											className="aw-item-1821"
											width={34.54}
											height={17.865}
											transform="translate(-0.1 0)"
										/>
									</g>
								</g>
							</g>
						</g>
						<path
							className="am-item-1821"
							d="M63.644,47.748A15.988,15.988,0,1,0,79.631,63.736,15.988,15.988,0,0,0,63.644,47.748m0,28.4A12.411,12.411,0,1,1,76.054,63.736,12.411,12.411,0,0,1,63.644,76.147"
							transform="translate(-43.208 -43.291)"
						/>
						<g
							className="ay-item-1821"
							transform="translate(3.64 32.101)">
							<g className="cb-item-1821">
								<g transform="translate(0)">
									<g className="cc-item-1821">
										<rect
											className="cd-item-1821"
											width={34.221}
											height={24.697}
											transform="translate(0 0)"
										/>
									</g>
								</g>
							</g>
						</g>
						<g
							className="at-item-1821"
							transform="translate(8.434 36.897)">
							<g className="ce-item-1821">
								<g transform="translate(0 0)">
									<g className="cf-item-1821">
										<rect
											className="bd-item-1821"
											width={24.047}
											height={16.201}
											transform="translate(-0.022 -0.022)"
										/>
									</g>
								</g>
							</g>
						</g>
						<g
							className="ay-item-1821"
							transform="translate(24.843 5.757)">
							<g className="cg-item-1821">
								<g transform="translate(0 0)">
									<g className="ch-item-1821">
										<rect
											className="ci-item-1821"
											width={4.501}
											height={4.303}
											transform="translate(-1.257 3.029) rotate(-67.457)"
										/>
									</g>
								</g>
							</g>
						</g>
						<g
							className="ay-item-1821"
							transform="translate(6.429 6.976)">
							<g className="cj-item-1821">
								<g transform="translate(0)">
									<g className="ck-item-1821">
										<rect
											className="cl-item-1821"
											width={10.543}
											height={10.492}
											transform="matrix(0.651, -0.759, 0.759, 0.651, -3.8, 4.433)"
										/>
									</g>
								</g>
							</g>
						</g>
						<g
							className="at-item-1821"
							transform="translate(24.843 31.832)">
							<g className="cg-item-1821">
								<path
									className="ac-item-1821"
									d="M266.788,344.591a8.937,8.937,0,0,0,2.563-1.177c-1.3-1.639-1.87-2.374-1.87-2.374l-1.315.6Z"
									transform="translate(-266.166 -341.04)"
								/>
							</g>
						</g>
						<g
							className="bj-item-1821"
							transform="translate(6.429 26.222)">
							<g className="cj-item-1821">
								<path
									className="ac-item-1821"
									d="M71.61,280.936c1.135,1.933,2.605,4.2,4.5,5-.8,1.513-1.471,2.689-1.471,2.689a14.387,14.387,0,0,1-5.757-6.387c1.3-.588,2.731-1.3,2.731-1.3"
									transform="translate(-68.879 -280.936)"
								/>
							</g>
						</g>
						<g
							className="bl-item-1821"
							transform="translate(6.276)">
							<g className="cm-item-1821">
								<g transform="translate(0 0)">
									<g className="cn-item-1821">
										<rect
											className="bo-item-1821"
											width={28.313}
											height={5.702}
											transform="translate(0 0)"
										/>
									</g>
								</g>
							</g>
						</g>
						<g
							className="bp-item-1821"
							transform="translate(4.813 23.265)">
							<g className="co-item-1821">
								<path
									className="u-item-1821"
									d="M82.923,249.259a15.687,15.687,0,0,1-1.792,5.183,16.15,16.15,0,0,1-3.48,4.27,15.876,15.876,0,0,1-4.734,2.844,16.1,16.1,0,0,1-10.893.2,15.874,15.874,0,0,1-4.838-2.664,16.174,16.174,0,0,1-3.639-4.136,15.641,15.641,0,0,1-1.986-5.112A16.122,16.122,0,0,0,62.138,261.42a16.071,16.071,0,0,0,10.652-.2,16.174,16.174,0,0,0,10.133-11.963"
									transform="translate(-51.561 -249.259)"
								/>
							</g>
						</g>
						<g
							className="at-item-1821"
							transform="translate(4.498 4.206)">
							<g className="cp-item-1821">
								<path
									className="u-item-1821"
									d="M48.195,60.021a15.686,15.686,0,0,1,1.452-5.779,16,16,0,0,1,8.606-8.067,16.017,16.017,0,0,1,16.9,3.275,15.924,15.924,0,0,1,3.5,4.868A15.687,15.687,0,0,1,80.076,60.1l-.092-.74-.126-.734c-.049-.243-.1-.485-.155-.728s-.126-.479-.189-.719a15.8,15.8,0,0,0-1.082-2.758,16.058,16.058,0,0,0-8.516-7.777,15.976,15.976,0,0,0-11.49-.03,16,16,0,0,0-4.988,3.064,16.2,16.2,0,0,0-5.242,10.339"
									transform="translate(-48.195 -45.06)"
								/>
							</g>
						</g>
						<path
							className="u-item-1821"
							d="M98.384,110.887a12.411,12.411,0,1,1,12.411-12.411,12.411,12.411,0,0,1-12.411,12.411"
							transform="translate(-77.948 -78.032)"
						/>
						<path
							className="bs-item-1821"
							d="M129.651,121.1l2.163-1.594a.1.1,0,0,0,.042-.084l-.031-4.718a.1.1,0,0,0-.02-.061l-1.766-2.4a.1.1,0,0,0-.145-.022l-.334.246a.1.1,0,0,0-.022.145l.626.85-1.209.891-.626-.85a.1.1,0,0,0-.145-.022l-.334.246a.1.1,0,0,0-.022.145l1.622,2.2a.1.1,0,0,0,.145.022l.335-.246a.1.1,0,0,0,.022-.145l-.626-.85,1.209-.891.67.909.028,4.285-1.737,1.28-4.084-1.3-.67-.909,1.209-.891.626.85a.1.1,0,0,0,.145.022l.335-.246a.1.1,0,0,0,.022-.145l-1.622-2.2a.1.1,0,0,0-.145-.022l-.334.246a.1.1,0,0,0-.022.145l.626.85-1.209.891-.626-.85a.1.1,0,0,0-.145-.022l-.334.246a.1.1,0,0,0-.022.145l1.766,2.4a.1.1,0,0,0,.052.037l4.5,1.429a.1.1,0,0,0,.093-.015"
							transform="translate(-111.721 -101.732)"
						/>
						<path
							className="bs-item-1821"
							d="M225.333,120.909l4.48-1.481a.1.1,0,0,0,.052-.038l1.737-2.418a.1.1,0,0,0-.024-.145l-.337-.242a.1.1,0,0,0-.145.024l-.616.858-1.22-.876.616-.858a.1.1,0,0,0-.024-.145l-.337-.242a.1.1,0,0,0-.145.024l-1.6,2.221a.1.1,0,0,0,.024.145l.337.242a.1.1,0,0,0,.145-.024l.616-.857,1.22.877-.659.917-4.069,1.345-1.752-1.259-.022-4.285.659-.917,1.22.877-.616.857a.1.1,0,0,0,.024.145l.337.242a.1.1,0,0,0,.145-.024l1.6-2.221a.1.1,0,0,0-.024-.145l-.337-.242a.1.1,0,0,0-.145.024l-.616.858-1.22-.876.616-.858a.1.1,0,0,0-.024-.145l-.337-.242a.1.1,0,0,0-.145.024l-1.737,2.418a.1.1,0,0,0-.02.061l.024,4.718a.1.1,0,0,0,.043.084l2.182,1.568a.1.1,0,0,0,.093.014"
							transform="translate(-202.176 -101.548)"
						/>
						<path
							className="bs-item-1821"
							d="M249.166,200.138l.126-.4a.1.1,0,0,0-.067-.13l-2.836-.905a.1.1,0,0,0-.064,0l-4.48,1.482a.1.1,0,0,0-.066.067l-.817,2.56a.1.1,0,0,0,.015.093l2.793,3.8a.1.1,0,0,0,.052.037l2.836.905a.1.1,0,0,0,.13-.067l.126-.4a.1.1,0,0,0-.067-.13l-1.006-.321.457-1.431,1.006.321a.1.1,0,0,0,.13-.067l.126-.4a.1.1,0,0,0-.067-.13l-2.606-.832a.1.1,0,0,0-.13.067l-.126.4a.1.1,0,0,0,.067.13l1.006.321-.457,1.431-1.076-.343-2.537-3.454.656-2.056,4.069-1.345,1.076.343-.457,1.431-1.006-.321a.1.1,0,0,0-.13.067l-.126.4a.1.1,0,0,0,.067.131l2.606.832a.1.1,0,0,0,.13-.067l.126-.4a.1.1,0,0,0-.067-.13l-1.006-.321.457-1.431,1.006.321a.1.1,0,0,0,.13-.067"
							transform="translate(-218.466 -180.155)"
						/>
						<path
							className="bs-item-1821"
							d="M180.391,247.85l2.793,3.8a.1.1,0,0,1,.02.061l.015,2.977a.1.1,0,0,1-.1.1l-.415,0a.1.1,0,0,1-.1-.1l-.006-1.056-1.5.008.006,1.056a.1.1,0,0,1-.1.1l-.415,0a.1.1,0,0,1-.1-.1l-.014-2.735a.1.1,0,0,1,.1-.1l.415,0a.1.1,0,0,1,.1.1l.006,1.056,1.5-.008-.006-1.129-2.537-3.454-2.158.011-2.5,3.48.006,1.129,1.5-.008-.006-1.056a.1.1,0,0,1,.1-.1l.415,0a.1.1,0,0,1,.1.1l.014,2.735a.1.1,0,0,1-.1.1l-.415,0a.1.1,0,0,1-.1-.1l-.006-1.056-1.5.008.006,1.056a.1.1,0,0,1-.1.1l-.415,0a.1.1,0,0,1-.1-.1l-.015-2.977a.1.1,0,0,1,.02-.061l2.754-3.832a.1.1,0,0,1,.084-.043l2.687-.014a.1.1,0,0,1,.084.042"
							transform="translate(-158.451 -224.678)"
						/>
						<path
							className="bs-item-1821"
							d="M116.271,200.97l-4.5-1.435a.1.1,0,0,0-.064,0l-2.827.935a.1.1,0,0,0-.066.131l.13.394a.1.1,0,0,0,.131.066l1-.332.472,1.426-1,.332a.1.1,0,0,0-.066.131l.13.394a.1.1,0,0,0,.131.066l2.6-.859a.1.1,0,0,0,.066-.131l-.13-.394a.1.1,0,0,0-.131-.066l-1,.332-.472-1.426,1.072-.355,4.082,1.3.677,2.049-2.5,3.48-1.072.354-.472-1.426,1-.332a.1.1,0,0,0,.066-.131l-.13-.394a.1.1,0,0,0-.131-.066l-2.6.859a.1.1,0,0,0-.066.131l.13.394a.1.1,0,0,0,.131.066l1-.332.472,1.426-1,.332a.1.1,0,0,0-.066.131l.13.394a.1.1,0,0,0,.131.066l2.826-.935a.1.1,0,0,0,.052-.038l2.754-3.832a.1.1,0,0,0,.014-.093l-.844-2.551a.1.1,0,0,0-.067-.066"
							transform="translate(-98.657 -180.906)"
						/>
					</g>
				</g>
			</g>
		</svg>
	)
}
