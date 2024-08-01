import React from 'react'
import BarraVideo from 'assets/images/Home/BarrainicialAmarey.png'
import Mute from 'assets/images/play-micro.png'
import Mute2 from 'assets/images/Button.png'
import useGeneral from 'hooks/general.hook'
import './video.css'

interface IVideo {
	onCloseVideo: () => void
}

const Video: React.FC<IVideo> = ({ onCloseVideo }): JSX.Element => {
	/** Hooks */
	const { width } = useGeneral()
	const [mute, setMute] = React.useState(false)

	const handlePlayVideo = () => {
		if(mute){
			const video: HTMLVideoElement = document.getElementById('play') as HTMLVideoElement;

			video.pause()
			setMute(false)
		} else {
			const video: HTMLVideoElement = document.getElementById('play') as HTMLVideoElement;

			video.play()
			setMute(true)
		}
	}

	return (
		<div className="container-video mb-[1.2px]">
			<div className="w-full absolute top-0 h-[74px] container-initial-bar">
				{width > 1024 ? (
					<img src={BarraVideo} className="w-full absolute" alt="" />
				) : (
					<svg viewBox="0 0 414 68">
						<defs>
							<style>
								{
									'.a-video-mobile{fill:rgba(67,67,67,0.09);}.b-video-mobile{fill:#fff;}.c-video-mobile{filter:url(#a-video-mobile);}'
								}
							</style>
							<filter
								id="a-video-mobile"
								x={0}
								y={0}
								width={432}
								height={68}
								filterUnits="userSpaceOnUse">
								<feOffset dy={3} />
								<feGaussianBlur stdDeviation={3} result="b" />
								<feFlood floodOpacity={0.302} />
								<feComposite operator="in" in2="b" />
								<feComposite in="SourceGraphic" />
							</filter>
						</defs>
						<g>
							<g
								className="c-video-mobile"
								transform="matrix(1, 0, 0, 1, -9, -6)">
								<rect
									className="a-video-mobile"
									width={414}
									height={50}
									transform="translate(9 6)"
								/>
							</g>
							<path
								className="b-video-mobile"
								d="M17.014,18.363l4.034,5.491a.153.153,0,0,1,.029.088l.023,4.3a.151.151,0,0,1-.15.151l-.6,0a.15.15,0,0,1-.151-.149l-.008-1.524-2.168.011.008,1.525a.15.15,0,0,1-.15.151l-.6,0a.149.149,0,0,1-.15-.149l-.021-3.949a.149.149,0,0,1,.149-.151l.6,0a.151.151,0,0,1,.151.15l.008,1.524,2.168-.011-.009-1.631L16.516,19.2l-3.116.016-3.61,5.025.008,1.63,2.169-.011-.008-1.524a.149.149,0,0,1,.149-.151l.6,0a.15.15,0,0,1,.151.15l.021,3.949a.15.15,0,0,1-.149.151l-.6,0a.15.15,0,0,1-.151-.149l-.008-1.525L9.8,26.774,9.811,28.3a.151.151,0,0,1-.15.151l-.6,0a.15.15,0,0,1-.151-.149l-.022-4.3a.15.15,0,0,1,.028-.088l3.976-5.533a.151.151,0,0,1,.121-.062l3.88-.02a.149.149,0,0,1,.121.061m-6.247-4.489L4.277,11.8a.145.145,0,0,0-.092,0L.1,13.152a.15.15,0,0,0-.1.19l.188.569a.15.15,0,0,0,.19.1l1.447-.478.681,2.059-1.448.478a.15.15,0,0,0-.1.19l.188.569a.151.151,0,0,0,.19.1L5.1,15.68a.15.15,0,0,0,.1-.19l-.188-.569a.151.151,0,0,0-.19-.1L3.368,15.3l-.681-2.059,1.548-.512,5.895,1.881.481,1.456.5,1.5L7.5,22.6l-1.549.512L5.269,21.05l1.448-.478a.15.15,0,0,0,.1-.19l-.188-.569a.15.15,0,0,0-.189-.1l-3.75,1.24a.15.15,0,0,0-.1.19l.188.569a.15.15,0,0,0,.19.1l1.448-.479L5.1,23.392l-1.448.479a.15.15,0,0,0-.1.19l.188.569a.15.15,0,0,0,.19.1l4.081-1.35a.15.15,0,0,0,.075-.055l3.975-5.533a.149.149,0,0,0,.021-.135L10.864,13.97a.15.15,0,0,0-.1-.1m8-1.014,6.469-2.139a.149.149,0,0,0,.074-.055l2.509-3.491a.15.15,0,0,0-.034-.209l-.487-.35a.15.15,0,0,0-.209.034L26.2,7.888,24.441,6.622l.89-1.238a.15.15,0,0,0-.034-.209l-.487-.35a.149.149,0,0,0-.209.034L22.3,8.066a.15.15,0,0,0,.034.21l.488.35a.15.15,0,0,0,.209-.034l.89-1.238,1.761,1.266-.952,1.324-5.875,1.943L16.32,10.067,16.288,3.88l.952-1.324L19,3.822l-.89,1.238a.15.15,0,0,0,.034.209l.487.35a.15.15,0,0,0,.209-.034l2.3-3.207a.15.15,0,0,0-.034-.209l-.487-.35a.15.15,0,0,0-.209.034l-.89,1.238L17.765,1.826l.89-1.239a.15.15,0,0,0-.034-.209l-.487-.35a.149.149,0,0,0-.209.034L15.416,3.553a.152.152,0,0,0-.028.088l.036,6.813a.149.149,0,0,0,.062.121l3.15,2.264a.15.15,0,0,0,.135.021m10.892.9.182-.572a.15.15,0,0,0-.1-.188l-4.095-1.307a.151.151,0,0,0-.093,0l-6.469,2.139a.148.148,0,0,0-.1.1l-1.18,3.7a.149.149,0,0,0,.022.134l4.033,5.491a.153.153,0,0,0,.076.054l4.095,1.307a.15.15,0,0,0,.188-.1l.182-.571a.149.149,0,0,0-.1-.188l-1.453-.464.659-2.066,1.453.463a.15.15,0,0,0,.188-.1l.182-.572a.15.15,0,0,0-.1-.188l-3.762-1.2a.149.149,0,0,0-.188.1l-.183.572a.149.149,0,0,0,.1.188l1.452.464-.659,2.066-1.554-.5-3.663-4.987.948-2.968,5.875-1.943,1.553.5-.659,2.066-1.453-.464a.151.151,0,0,0-.188.1l-.182.572a.149.149,0,0,0,.1.188l3.762,1.2a.15.15,0,0,0,.188-.1l.183-.572a.151.151,0,0,0-.1-.188l-1.453-.463.659-2.066,1.453.464a.151.151,0,0,0,.188-.1m-18.439-.886,3.123-2.3a.151.151,0,0,0,.061-.122l-.045-6.813a.148.148,0,0,0-.029-.088L11.785.088a.149.149,0,0,0-.21-.032l-.483.356a.15.15,0,0,0-.032.21l.9,1.228L10.219,3.135l-.9-1.228a.15.15,0,0,0-.21-.032l-.483.356a.15.15,0,0,0-.032.21l2.342,3.18a.15.15,0,0,0,.21.032l.483-.356a.15.15,0,0,0,.032-.21l-.9-1.228L12.5,2.573l.967,1.313.041,6.187L11,11.921,5.1,10.048,4.134,8.735,5.88,7.449l.9,1.228a.15.15,0,0,0,.21.032l.483-.356a.15.15,0,0,0,.032-.21L5.166,4.964a.15.15,0,0,0-.21-.032l-.483.356a.15.15,0,0,0-.032.21l.9,1.228L3.6,8.011,2.7,6.783a.15.15,0,0,0-.21-.032L2,7.107a.15.15,0,0,0-.032.21l2.549,3.461a.147.147,0,0,0,.075.054l6.493,2.063a.151.151,0,0,0,.135-.022"
								transform="translate(192.074 10.614)"
							/>
						</g>
					</svg>
				)}
				<span
					className="right-[50px] absolute text-[#001F5F] top-[32%] z-[1] cursor-pointer close-button w-[35px] h-[35px] flex items-center justify-center rounded-[100%] bg-[#ffffffc4]" id='closevideo'
					onClick={onCloseVideo}>
					X
				</span>
			</div>

			<video
				src="https://grupoamarey.com/pdf/video/MANIFIESTOAMAREY.mp4"
				className="w-full bg-black h-screen object-contain shadow-[rgba(0,0,0,0.25)_0px_0.0625em_0.0625em,rgba(0,0,0,0.25)_0px_0.125em_0.5em,rgba(255,255,255,0.1)_0px_0px_0px_1px_inset] video-mobile"
				loop
				id='play'
				autoPlay
				playsInline
				muted={!mute}></video>
			<div>
				<img
					src={!mute ? Mute : Mute2}
					className="absolute w-[3%] left-[1%] bottom-[3%] mute-bottom"
					alt="Mute"
					onClick={handlePlayVideo}
				/>
			</div>
		</div>
	)
}

export default Video
