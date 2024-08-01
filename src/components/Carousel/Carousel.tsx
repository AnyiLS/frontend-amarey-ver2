import React from 'react'
import { Carousel } from 'flowbite-react'
/** Mocks */
import {
	CarouselHeaderItems,
	carouselHeaderItems,
} from 'mocks/carouselHeader.mocks'
/** Components */
import Slide4 from './components/Slide4'
/** Hooks */
import useCarouselHome from 'utils/hooks/carousel'
import useLayout from 'hooks/ancho.hook'
import { useLanguage } from 'context/language'

const CarouselHeader: React.FC = () => {
	const { selectedLanguage } = useLanguage()
	/** Hooks */
	const {
		showPopup,
		selected,
		height,
		slide,
		handleCloseVideo,
		handleOnReturn,
		handleOpenPopup,
		handleOnSelected,
	} = useCarouselHome()

	const { isSmallScreen } = useLayout()

	const [w, setW] = React.useState(window.outerWidth);
	const [t, setT] = React.useState(0);

	React.useEffect(() => {
		const d = document.body.clientWidth;
		setT((w * 100) / d)

		window.addEventListener('resize', () => setT((w * 100) / d))

		return () => {
			window.removeEventListener('resize', () => setT((w * 100) / d))
		}
	}, [])

	console.log(t)

	return (
		<div className={t > 50 ? "h-screen" : 'h-[853px]'}>
			<Carousel slide={false} slideInterval={20000}>
				{carouselHeaderItems.map(
					(item: CarouselHeaderItems, index: number) => (
						<React.Fragment key={index}>
							{selected === index ? (
								<Slide4
									height={height.toString()}
									image={item.image}
									onReturn={handleOnReturn}
									onOpenPopup={handleOpenPopup}
								/>
							) : (
								<React.Fragment>
									{item.slide(
										height.toString(),
										handleOnSelected
									)}
								</React.Fragment>
							)}
						</React.Fragment>
					)
				)}
			</Carousel>
			<div
				className={`fixed h-screen w-screen top-0 left-0 z-[100]${
					showPopup ? ' flex' : ' hidden'
				}`}>
				<video
					src={
						selectedLanguage === 'es' && showPopup
							? 'https://grupoamarey.com/pdf/video/Origen pentamero_1.mp4'
							: selectedLanguage === 'en' && showPopup
							? 'https://grupoamarey.com/videos/videos_inlges/Pentamero_ingles.mp4'
							: ''
					}
					className="w-full h-full"
					id="video-1"
					controls
					autoPlay={true}
				/>
				<span
					className="absolute top-[5%] right-[5%] text-white text-[30px] text-center font-bold bg-[#00000050] w-[50px] h-[50px] rounded-[100%]"
					onClick={handleCloseVideo}>
					X
				</span>
			</div>
		</div>
	)
}

export default CarouselHeader
