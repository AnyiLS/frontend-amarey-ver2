import { useLanguage } from 'context/language'
import React from 'react'
import { useTranslation } from 'react-i18next'

interface ISlider {
	height: string
	index: number
	handleChangeSlide: (position: number) => void
}

export const Slider2: React.FC<ISlider> = ({ index }) => {
	const [grandImage, setGrandImage] = React.useState<boolean>(false)
	const [hoverCard, setHoverCard] = React.useState<boolean>(true)
	const [hoverCard2, setHoverCard2] = React.useState<boolean>(true)

	React.useEffect(() => {
		if (index === 1) setTimeout(() => setGrandImage(true), 2000)
		else setTimeout(() => setGrandImage(false), 1000)
	}, [index])

	const { t } = useTranslation()

	/** Contexts */
	const { selectedLanguage } = useLanguage()

	return (
		<svg
			viewBox="1590 10 1920 780"
			preserveAspectRatio="none"
			style={{ height: '100%' }}
			width={window.screen.width}>
			<defs>
				<style>
					{
						'.a-pentagrama,.j-pentagrama,.k-pentagrama,.l-pentagrama{fill:none;}.aa-pentagrama,.b-pentagrama,.e-pentagrama,.y-pentagrama{fill:#fff;}.b-pentagrama{stroke:#707070;}.c-pentagrama{fill:#e40032;}.d-pentagrama,.v-pentagrama,.x-pentagrama{fill:#001f5f;}.f-pentagrama{clip-path:url(#ag-pentagrama);}.g-pentagrama{clip-path:url(#ah-pentagrama);}.h-pentagrama{fill:url(#ai-pentagrama);}.i-pentagrama{clip-path:url(#aj-pentagrama);}.j-pentagrama{stroke:#001f5f;}.j-pentagrama,.k-pentagrama,.l-pentagrama{stroke-miterlimit:10;stroke-width:3.044px;}.k-pentagrama{stroke:#e7002a;}.l-pentagrama{stroke:#e40032;}.m-pentagrama{clip-path:url(#ak-pentagrama);}.n-pentagrama{fill:url(#al-pentagrama);}.o-pentagrama{clip-path:url(#an-pentagrama);}.p-pentagrama,.x-pentagrama{mix-blend-mode:multiply;isolation:isolate;}.q-pentagrama{fill:#eeebeb;}.r-pentagrama{fill:#d6d6d6;}.s-pentagrama,.u-pentagrama{fill:#182856;}.s-pentagrama{font-size:32px;font-family:Silka-Regular, Silka;}.t-pentagrama{font-family:Silka-Bold, Silka;font-weight:700;}.u-pentagrama{font-size:24px;}.aa-pentagrama,.u-pentagrama,.v-pentagrama,.y-pentagrama{font-family:Silka-SemiBold, Silka;font-weight:600;}.v-pentagrama{font-size:70px;}.w-pentagrama{fill:url(#ao-pentagrama);}.x-pentagrama{opacity:0.65;}.ab-pentagrama,.y-pentagrama{font-size:120px;}.z-pentagrama{fill:url(#ap-pentagrama);}.aa-pentagrama{font-size:50px;}'
					}
				</style>
				<filter
					id="a-pentagrama"
					x={2870.641}
					y={-2704.778}
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
					id="c-pentagrama"
					x={3074.781}
					y={-2802.736}
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
					id="e-pentagrama"
					x={3039.735}
					y={-2771.729}
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
					id="g-pentagrama"
					x={2919.688}
					y={-2969.771}
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
					id="i-pentagrama"
					x={2648.735}
					y={-2889.545}
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
					id="k-pentagrama"
					x={2398.781}
					y={-2932.545}
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
					id="m-pentagrama"
					x={3025.688}
					y={-2935.771}
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
					id="o-pentagrama"
					x={2877.165}
					y={-2935.771}
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
					id="q-pentagrama"
					x={2858.735}
					y={-2861.757}
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
					id="s-pentagrama"
					x={2852.641}
					y={-2635.972}
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
					id="u-pentagrama"
					x={2974.781}
					y={-2381.757}
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
					id="w-pentagrama"
					x={3025.305}
					y={-2450.757}
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
					id="y-pentagrama"
					x={2013.781}
					y={-2629.757}
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
					id="aa-pentagrama"
					x={1916.305}
					y={-2566.757}
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
					id="ac-pentagrama"
					x={1787.781}
					y={-2468.757}
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
					id="ae-pentagrama"
					x={2213.644}
					y={1.425}
					width={1310.356}
					height={735.584}
					filterUnits="userSpaceOnUse">
					<feOffset dy={3} />
					<feGaussianBlur stdDeviation={3} result="af" />
					<feFlood floodOpacity={0.451} />
					<feComposite operator="in" in2="af" />
					<feComposite in="SourceGraphic" />
				</filter>
				<clipPath id="ag-pentagrama">
					<rect
						className="d-pentagrama"
						width={946}
						height={441.873}
					/>
				</clipPath>
				<clipPath id="ah-pentagrama">
					<rect
						className="a-pentagrama"
						width={930.007}
						height={425.061}
					/>
				</clipPath>
				<pattern
					id="ai-pentagrama"
					width={1}
					height={1}
					viewBox="0 53.38 930.007 425.061">
					<use preserveAspectRatio="xMidYMid slice" xlinkHref="#am" />
				</pattern>
				<clipPath id="aj-pentagrama">
					<rect
						className="a-pentagrama"
						width={3515}
						height={1108.458}
						transform="translate(-230 -30.433)"
					/>
				</clipPath>
				<clipPath id="ak-pentagrama">
					<rect
						className="a-pentagrama"
						width={420}
						height={191.862}
					/>
				</clipPath>
				<image
					id="am-pentagrama"
					preserveAspectRatio="xMidYMid slice"
					width={930.007}
					height={619.644}
					xlinkHref="/images/services/ComponentTMP_0-image3.webp"
				/>
				<pattern
					id="al-pentagrama"
					width={1}
					height={1}
					viewBox="0 24.157 420 191.862">
					<use
						transform="scale(0.452 0.452)"
						xlinkHref="#am-pentagrama"
					/>
				</pattern>
				<clipPath id="an-pentagrama">
					<rect
						className="b-pentagrama"
						width={718.679}
						height={651.976}
					/>
				</clipPath>
				<pattern
					id="ao-pentagrama"
					width={1}
					height={1}
					patternTransform="matrix(1, 0, 0, -1, 0, 902.916)"
					viewBox="96.849 84.638 490.691 215.683">
					<image
						preserveAspectRatio="xMidYMid slice"
						width={684.388}
						height={384.958}
						xlinkHref="	/images/services/ComponentTMP_0-image4.webp"
					/>
				</pattern>
				<pattern
					id="ap-pentagrama"
					width={1}
					height={1}
					patternTransform="matrix(-1, 0, 0, 1, 1368.777, 0)"
					viewBox="110.898 92.586 462.593 203.332">
					<image
						preserveAspectRatio="xMidYMid slice"
						width={684.388}
						height={456.259}
						xlinkHref="/images/services/ComponentTMP_0-image5.webp"
					/>
				</pattern>
				<clipPath id="bv-pentagrama">
					<rect style={{ fill: 'none' }} width={590} height={345} />
				</clipPath>
			</defs>
			<path
				className="e-pentagrama"
				d="M0,0H1920V1098.46H0Z"
				transform="translate(1581.269 9.965)"
			/>
			<g transform="translate(230 28.433)">
				<g className="f-pentagrama">
					<path
						className="d-pentagrama"
						d="M617.059,441.873H0V0H946L824.741,299.882c-34.751,85.94-116.733,141.992-207.682,141.992"
					/>
				</g>
				<g className="g-pentagrama">
					<path
						className="h-pentagrama"
						d="M606.627,425.061H0V0H930.007L810.8,288.472A220.933,220.933,0,0,1,606.627,425.061"
					/>
				</g>
				<g transform="translate(0 2)">
					<g className="i-pentagrama" transform="translate(0 0)">
						<path
							className="j-pentagrama"
							d="M1671.466,1052.676H1122.258c-95.617,0-181.856,73.266-218.64,185.742l-168.3,514.652"
							transform="translate(-390.876 -456.908)"
						/>
						<path
							className="j-pentagrama"
							d="M1239.687,1052.676h-295.9c-51.516,0-97.979,39.474-117.8,100.072l-90.678,277.28"
							transform="translate(2045.313 -60.08)"
						/>
						<path
							className="j-pentagrama"
							d="M1930.082,779.219h404c58.245,0,110.78-44.765,133.187-113.486l102.524-314.447"
							transform="translate(-590.19 -455.911)"
						/>
						<path
							className="j-pentagrama"
							d="M5034.848,1345.347h879.763c95.618,0,181.857-73.266,218.641-185.742l161.583-494.1"
							transform="translate(-1321.538 -456.358)"
						/>
						<path
							className="j-pentagrama"
							d="M7481.626,482.59H6818.412c-95.616,0-181.856,73.266-218.642,185.742l-160.557,491.014"
							transform="translate(-1625.524 -456.098)"
						/>
						<path
							className="k-pentagrama"
							d="M797.214,1307.076h549.207c95.617,0,181.857-73.266,218.641-185.742l63.457-194.079,164.03-501.671"
							transform="translate(-404.275 -456.017)"
						/>
						<path
							className="l-pentagrama"
							d="M0,0H255.238c44.437,0,84.516,34.049,101.611,86.321l29.491,90.2,76.231,233.146"
							transform="translate(1785 964.768) rotate(180)"
						/>
						<path
							className="l-pentagrama"
							d="M0,0H255.238c44.437,0,84.516,34.049,101.611,86.321l29.491,90.2,76.231,233.146"
							transform="translate(1614 964.768)"
						/>
						<path
							className="k-pentagrama"
							d="M784.281,1308.334H388.349c-95.617,0-181.857,73.265-218.641,185.741L1.4,2008.728"
							transform="translate(-232.016 -457.272)"
						/>
						<path
							className="k-pentagrama"
							d="M4363.806,1003.641H3995.887c-95.616,0-181.856-73.266-218.641-185.741L3549.76,122.15"
							transform="translate(-367.304 -455.585)"
						/>
						<path
							className="k-pentagrama"
							d="M4184.911,1004.9h395.932c95.617,0,181.857,73.266,218.641,185.741l168.3,514.652"
							transform="translate(-643.564 -456.841)"
						/>
						<path
							className="k-pentagrama"
							d="M7617.4,1288.515H7221.469c-95.617,0-181.856,73.266-218.64,185.742l-168.3,514.652"
							transform="translate(-1711.091 -457.244)"
						/>
						<path
							className="k-pentagrama"
							d="M7619.443,700.982H7223.512c-95.617,0-181.857-73.266-218.642-185.741L6836.566.589"
							transform="translate(-1711.533 -455.412)"
						/>
					</g>
				</g>
				<g transform="translate(1360 -21.34)">
					{!grandImage ? (
						<g className="m-pentagrama">
							<path
								className="n-pentagrama"
								d="M273.959,191.862H0V0H420L366.164,130.209a99.776,99.776,0,0,1-92.206,61.653"
							/>
						</g>
					) : (
						<g clipPath="url(#bv-pentagrama)">
							<path
								className="n-pentagrama"
								d="M382.894,346.061H0V0H587.007L511.764,234.858c-21.563,67.306-72.434,111.2-128.87,111.2"
							/>
						</g>
					)}
				</g>
			</g>
			<g
				className="o-pentagrama"
				transform="translate(3515 9.965) rotate(90)">
				<path
					className="c-pentagrama"
					d="M350.434,379.534l83.38,113.207a3.205,3.205,0,0,1,.6,1.81L436,582.362a2.976,2.976,0,0,1-3,3.039l-12.186-.1a3.146,3.146,0,0,1-3.1-3.082l-.559-31.143-44.053-.341.559,31.155a2.961,2.961,0,0,1-3,3.039l-12.186-.1a3.128,3.128,0,0,1-3.088-3.082l-1.445-80.672a2.952,2.952,0,0,1,2.987-3.039l12.186.086a3.165,3.165,0,0,1,3.1,3.093l.559,31.143,44.053.341-.6-33.32L340.526,396.572l-63.3-.482L205.175,497.8l.586,33.308,44.064.329-.559-31.143a2.952,2.952,0,0,1,2.987-3.039l12.186.086a3.149,3.149,0,0,1,3.1,3.094l1.445,80.672A2.966,2.966,0,0,1,266,584.143l-12.186-.1a3.146,3.146,0,0,1-3.1-3.082l-.559-31.155L206.1,549.48l.559,31.155a2.976,2.976,0,0,1-3,3.039l-12.186-.1a3.154,3.154,0,0,1-3.1-3.082l-1.57-87.811a3.007,3.007,0,0,1,.547-1.795L266.693,378.9a2.984,2.984,0,0,1,2.44-1.244l78.817.6a3.11,3.11,0,0,1,2.484,1.284M222.351,286.209l-132.4-43.991a2.934,2.934,0,0,0-1.874-.012l-82.569,26.5a3,3,0,0,0-1.883,3.849l3.966,11.681a3.117,3.117,0,0,0,3.877,1.992l29.277-9.4,14.374,42.237-29.289,9.4a3,3,0,0,0-1.883,3.849l3.966,11.681a3.132,3.132,0,0,0,3.877,1.992l75.858-24.351a2.986,2.986,0,0,0,1.883-3.849L105.564,306.1a3.132,3.132,0,0,0-3.877-1.992L72.4,313.52,58.036,271.284l31.317-10.06L209.6,301.186l10.16,29.873,10.477,30.8L158.19,463.569l-31.329,10.048L112.5,431.381l29.289-9.4a3,3,0,0,0,1.883-3.849l-3.977-11.681a3.114,3.114,0,0,0-3.866-1.992L59.969,428.814a3,3,0,0,0-1.883,3.849l3.966,11.682a3.122,3.122,0,0,0,3.877,1.992l29.289-9.408,14.374,42.237L80.3,488.572a2.992,2.992,0,0,0-1.895,3.849L82.386,504.1a3.122,3.122,0,0,0,3.877,1.992l82.558-26.512a2.945,2.945,0,0,0,1.51-1.1L249.661,366.5a3.017,3.017,0,0,0,.384-2.745l-25.7-75.553a3.17,3.17,0,0,0-1.992-1.991m162.34-18.635,130.866-42.018a2.916,2.916,0,0,0,1.5-1.1L567.118,153.8a3.109,3.109,0,0,0-.753-4.28l-9.984-7.277a3,3,0,0,0-4.24.648l-17.766,25.058-36.109-26.309,17.755-25.059a3.1,3.1,0,0,0-.741-4.28l-9.984-7.277a2.989,2.989,0,0,0-4.24.648l-45.993,64.9a3.11,3.11,0,0,0,.741,4.292l10,7.277a3.011,3.011,0,0,0,4.24-.648L487.8,156.435,523.9,182.743l-18.989,26.8L386.068,247.7l-51.884-37.8L331.925,83.5l18.989-26.8,36.108,26.309-17.755,25.059a3.1,3.1,0,0,0,.753,4.28l9.984,7.277a3,3,0,0,0,4.239-.648l45.993-64.913a3.1,3.1,0,0,0-.753-4.28L419.5,42.508a3.011,3.011,0,0,0-4.24.648L397.495,68.214l-36.1-26.3,17.754-25.07a3.109,3.109,0,0,0-.753-4.28L368.415,5.29a2.989,2.989,0,0,0-4.239.648L314.113,76.591a3.059,3.059,0,0,0-.547,1.795l2.491,139.178a3.139,3.139,0,0,0,1.3,2.485l64.593,47.067a3.073,3.073,0,0,0,2.741.456m221.523,21.179,3.553-11.632a3.148,3.148,0,0,0-2.028-3.876l-83.527-27.757a3.052,3.052,0,0,0-1.885-.012L391.461,287.493a2.913,2.913,0,0,0-1.919,1.953l-23.006,75.188a3.1,3.1,0,0,0,.477,2.744L450.382,480.6a3.219,3.219,0,0,0,1.551,1.12l83.527,27.769a2.967,2.967,0,0,0,3.8-1.941l3.553-11.62a3.121,3.121,0,0,0-2.016-3.875l-29.638-9.857,12.861-42.029,29.638,9.845a2.974,2.974,0,0,0,3.8-1.929l3.553-11.632a3.148,3.148,0,0,0-2.028-3.875l-76.748-25.506a2.954,2.954,0,0,0-3.793,1.941l-3.564,11.632a3.13,3.13,0,0,0,2.027,3.864l29.627,9.856L493.69,476.387,462,465.861,386.277,363.037l18.481-60.386L523.6,264.493l31.683,10.538L542.439,317.06,512.8,307.2a2.984,2.984,0,0,0-3.8,1.941l-3.553,11.632a3.135,3.135,0,0,0,2.027,3.864l76.737,25.506a2.969,2.969,0,0,0,3.8-1.929l3.564-11.632a3.157,3.157,0,0,0-2.028-3.875l-29.638-9.845,12.861-42.029,29.638,9.857a2.984,2.984,0,0,0,3.8-1.941M231.367,265.871l62.861-46.187a3,3,0,0,0,1.214-2.477L292.753,78.026a3.1,3.1,0,0,0-.616-1.8L239.442,4.87a3.055,3.055,0,0,0-4.268-.71l-9.72,7.142a3.049,3.049,0,0,0-.586,4.275l18.7,25.314L208.423,66.71,189.725,41.4a3.063,3.063,0,0,0-4.268-.7l-9.72,7.142a3.045,3.045,0,0,0-.586,4.275l48.408,65.558a3.066,3.066,0,0,0,4.268.7l9.72-7.142a3.049,3.049,0,0,0,.6-4.275l-18.7-25.314L254.59,55.822,274.579,82.9l2.433,126.4-50.49,37.09L106.231,206.6,86.243,179.524,121.386,153.7l18.686,25.314a3.066,3.066,0,0,0,4.268.7l9.72-7.142a3.057,3.057,0,0,0,.6-4.275l-48.42-65.547a3.058,3.058,0,0,0-4.268-.71l-9.72,7.142a3.047,3.047,0,0,0-.586,4.275l18.686,25.314L75.218,164.593l-18.7-25.314a3.068,3.068,0,0,0-4.268-.71l-9.72,7.142a3.049,3.049,0,0,0-.586,4.275l52.695,71.358a3.1,3.1,0,0,0,1.539,1.12l132.458,43.828a3.011,3.011,0,0,0,2.729-.421"
					transform="translate(-328.443 166.967) rotate(-51)"
				/>
			</g>
			<text className="s-pentagrama" transform="translate(2015 350.426)">
				<tspan x={80.416} y={30}>
					{t('Resultados medición de')}
				</tspan>
				<tspan className="t-pentagrama" y={30} xmlSpace="preserve">
					{t(' experiencia y lealtad (NPS) 2023:')}
				</tspan>
				<tspan y={30} />
			</text>
			<text className="u-pentagrama" transform="translate(2393 998)">
				<tspan x={20.92} y={23}>
					{'NPS: Net Promoter Score '}
				</tspan>
			</text>
			<text className="v-pentagrama" transform="translate(2565 150.425)">
				<tspan
					x={selectedLanguage === 'es' ? -365.855 : -244.855}
					y={66}>
					{t('NUESTROS CLIENTES,')}
				</tspan>
				<tspan
					x={selectedLanguage === 'es' ? -416.605 : -301.605}
					y={138}>
					{t('NUESTRA RAZÓN DE SER')}
				</tspan>
			</text>
			<g style={{ transform: 'scale(0.8) translate(650px, 10px)' }}>
				<g
					transform="translate(1832 554.229)"
					onMouseOver={() => setHoverCard(true)}
					onMouseLeave={() => setHoverCard(true)}>
					<path
						className="d-pentagrama"
						d="M684.641,315.6H17.574C6.991,315.6-1.191,304.109.143,291.12L38.658,19C39.772,8.14,47.24,0,56.089,0H644.931c8.822,0,16.276,8.094,17.422,18.916l39.71,272.12c1.378,13.016-6.812,24.562-17.422,24.562"
						transform="translate(702.215 315.598) rotate(180)"
					/>
					<path
						className="w-pentagrama"
						d="M667.261,300.822H17.128c-10.314,0-18.289-10.951-16.989-23.332L37.677,18.11C38.762,7.759,46.041,0,54.665,0H628.559c8.6,0,15.863,7.715,16.98,18.03l38.7,259.38c1.343,12.407-6.639,23.412-16.98,23.412"
						transform="translate(693.865 308.21) rotate(180)"
					/>
					{hoverCard && (
						<React.Fragment>
							<path
								className="x-pentagrama"
								d="M667.261,300.822H17.128c-10.314,0-18.289-10.951-16.989-23.332L37.677,18.11C38.762,7.759,46.041,0,54.665,0H628.559c8.6,0,15.863,7.715,16.98,18.03l38.7,259.38c1.343,12.407-6.639,23.412-16.98,23.412"
								transform="translate(693.865 308.21) rotate(180)"
							/>
							<text
								className="y-pentagrama"
								transform="translate(54.107 94.799)">
								<tspan x={40.38} y={113}>
									{'NPS 86%'}
								</tspan>
							</text>
						</React.Fragment>
					)}
				</g>
				<g
					transform="translate(2575 554.229)"
					onMouseOver={() => setHoverCard2(true)}
					onMouseLeave={() => setHoverCard2(true)}>
					<path
						className="d-pentagrama"
						d="M684.641,315.6H17.574C6.991,315.6-1.191,304.109.143,291.12L38.658,19C39.772,8.14,47.24,0,56.089,0H644.931c8.822,0,16.276,8.094,17.422,18.916l39.71,272.12c1.378,13.016-6.812,24.562-17.422,24.562"
						transform="translate(0)"
					/>
					<path
						className="z-pentagrama"
						d="M667.261,300.822H17.128c-10.314,0-18.289-10.951-16.989-23.332L37.677,18.11C38.762,7.759,46.041,0,54.665,0H628.559c8.6,0,15.863,7.715,16.98,18.03l38.7,259.38c1.343,12.407-6.639,23.412-16.98,23.412"
						transform="translate(8.913 7.388)"
					/>
					{hoverCard2 && (
						<React.Fragment>
							<path
								className="x-pentagrama"
								d="M667.261,300.822H17.128c-10.314,0-18.289-10.951-16.989-23.332L37.677,18.11C38.762,7.759,46.041,0,54.665,0H628.559c8.6,0,15.863,7.715,16.98,18.03l38.7,259.38c1.343,12.407-6.639,23.412-16.98,23.412"
								transform="translate(8.913 7.388)"
							/>
							<text
								className="aa-pentagrama"
								transform="translate(54.107 88.799)">
								<tspan
									x={
										selectedLanguage === 'es'
											? 117.875
											: 160
									}
									y={47}>
									{t('SATISFACCIÓN ')}
								</tspan>
								<tspan
									className="ab-pentagrama"
									x={173.16}
									y={147}>
									{'89%'}
								</tspan>
							</text>
						</React.Fragment>
					)}
				</g>
			</g>
		</svg>
	)
}
