import { CarouselInterface } from 'flowbite'
import { Carousel } from 'flowbite-react'
import useGeneral from 'hooks/general.hook'
import {
	CarouselServiciosItems,
	carouselServiciosItems,
} from 'mocks/carouselServicios.mocks'
import React from 'react'
import Mute from 'assets/images/mute.png'
import Mute2 from 'assets/images/Button.png'
import { useLanguage } from 'context/language'

const Servicios: React.FC = () => {
	const { width } = useGeneral()
	const [height, setHeight] = React.useState<string>('100vh')
	const [slideIndex, setSlideIndex] = React.useState<number>(0)
	const [mute, setMute] = React.useState(false)
	const [openVideo, setOpenVideo] = React.useState(false)

	const carouselRef = React.useRef<any>(undefined)

	React.useEffect(() => {
		const resizeImage = () => {
			if (window.innerWidth > 1024 && window.innerHeight > 1080) {
				setHeight('100%')
			} else if (window.innerWidth < 1024 && window.innerHeight > 900) {
				setHeight('100%')
			} else if (window.innerHeight > 800) {
				setHeight('110vh')
			} else if (window.innerHeight < 700) {
				setHeight('100%')
			} else {
				setHeight('100vh')
			}
		}
		window.addEventListener('resize', resizeImage)

		resizeImage()

		return () => window.removeEventListener('resize', resizeImage)
	}, [])

	const [flowIndex, setFlowIndex] = React.useState<number>(0)

	const handleChangeSlide = (position: number) => {
		const carousel: any = document.querySelector('.next-button')
		console.log(carousel)
		carousel!.click()
	}

	/** Contexts */
	const { selectedLanguage } = useLanguage()

	return (
		<div className='h-full'>
			<Carousel
				slide={false}
				onSlideChange={(e) => setSlideIndex(e)}
				ref={carouselRef}
				rightControl={<button className="next-button"></button>}>
				{carouselServiciosItems.map(
					(item: CarouselServiciosItems, index: number) => (
						<React.Fragment key={index}>
							{item.slide(
								height,
								slideIndex,
								handleChangeSlide,
								() => {
									setOpenVideo(true)
								}
							)}
						</React.Fragment>
					)
				)}
			</Carousel>
			{openVideo && (
				<div className="fixed w-[100vw] h-[100vh] top-[0] right-[0] z-[1] bg-[#e6e6e6]">
					<video
						src="https://grupoamarey.com/pdf/video/tinywow_CEDICONOFC (1).mp4"
						width="100%"
						height="100%"
						autoPlay
						controls
						id="video-cifras"
						style={{
							height: '100vh',
							width: '100vw',
						}}></video>
					{/* <img
						src={!mute ? Mute : Mute2}
						className="absolute w-[3%] left-[3%] top-[3%]"
						alt="Mute"
						onClick={() => {
							setMute(!mute)
						}}
					/> */}
					<svg
						viewBox="0 0 48 50"
						className="w-[80px] right-[20px] absolute top-[20px]"
						onClick={() => {
							setOpenVideo(false)
							document.body.style.overflow = 'auto'
							const video: HTMLVideoElement =
								document.getElementById(
									'video-cifras'
								) as HTMLVideoElement

							if (video) {
								video.pause()
								video.currentTime = 0
							}
						}}>
						<defs>
							<style>
								{
									'.a-cifras-video-close,.b-cifras-video-close{fill:#fff;}.a-cifras-video-close{opacity:0.36;}.b-cifras-video-close{font-size:30px;font-family:Helvetica-Bold, Helvetica;font-weight:700;}.c-cifras-video-close{filter:url(#a-cifras-video-close);}'
								}
							</style>
							<filter
								id="a-cifras-video-close"
								x={0}
								y={0}
								width={48}
								height={50}
								filterUnits="userSpaceOnUse">
								<feOffset dy={1} />
								<feGaussianBlur stdDeviation={0.5} result="b" />
								<feFlood floodOpacity={0.4} />
								<feComposite operator="in" in2="b" />
								<feComposite in="SourceGraphic" />
							</filter>
						</defs>
						<g transform="translate(1.5 0.5)">
							<g
								className="c-cifras-video-close"
								transform="matrix(1, 0, 0, 1, -1.5, -0.5)">
								<ellipse
									className="a-cifras-video-close"
									cx={22.5}
									cy={23.5}
									rx={22.5}
									ry={23.5}
									transform="translate(1.5 0.5)"
								/>
							</g>
							<text
								className="b-cifras-video-close"
								transform="translate(13 35)">
								<tspan x={0} y={0}>
									{'X'}
								</tspan>
							</text>
						</g>
					</svg>
				</div>
			)}
		</div>
	)
}

export default Servicios
