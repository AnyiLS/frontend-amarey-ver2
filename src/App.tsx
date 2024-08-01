import React from 'react'
import { Flowbite } from 'flowbite-react'
import customTheme from 'customTheme'
import useRouter from 'routes'
import useGeneral from 'hooks/general.hook'
import Video from 'components/Video/Video'
import { NavbarMovil } from 'componentsmovil/NavbarMovil/NavbarMovil'
import { RouterProvider } from 'react-router-dom'
import FooterMobile from 'componentsmovil/Footer/Video'
import FixedContact from 'components/fixed-components/FixedContact'
import FixedSocialNetworks from 'components/fixed-components/FixedSocialNetworks'
import Navbar from 'components/Navbar/Navbar'
import Footer from 'components/Footer/Footer'
import { LanguageProvider, useLanguage } from 'context/language'
import { I18nextProvider, initReactI18next } from 'react-i18next'

import i18n from 'i18next'
/** Mocks */
import { customTexts } from 'mocks/translations'
import { Loading } from 'components/Loading'

const Component = () => {
	/** Contexts  */
	const { selectedLanguage } = useLanguage()

	/** Hooks */
	const { router } = useRouter()
	const { width } = useGeneral()

	/** States */
	// const [showVideoPopup, setShowVideoPopup] = React.useState<boolean>(true);
	const showVideoPopup = sessionStorage.getItem('showVideo')

	const setShowVideoPopup = () => {
		sessionStorage.setItem('showVideo', 'false')
		window.location.reload()
	}

	i18n.use(initReactI18next).init({
		resources: { ...customTexts },
		lng: selectedLanguage,
		interpolation: { escapeValue: false },
	})

	return (
		<I18nextProvider i18n={i18n}>
			<Flowbite theme={{ theme: customTheme }}>
				{showVideoPopup === 'false' || window.location.pathname !== '/' ? (
					<div id="main" style={{ width: window.screen.width }}>
						<React.Suspense fallback={<Loading />}>
							{width >= 768 ? <Navbar /> : <NavbarMovil />}
							<RouterProvider router={router} />
							{width >= 768 ? <Footer /> : <FooterMobile />}
							{window.location.pathname !== '/contactenos' &&
								width > 767 && (
									<React.Fragment>
										<FixedContact />
										<FixedSocialNetworks />
									</React.Fragment>
								)}
						</React.Suspense>
					</div>
				) : (
					<Video onCloseVideo={setShowVideoPopup} />
				)}
			</Flowbite>
		</I18nextProvider>
	)
}

const App: React.FC = (): JSX.Element => {
	React.useEffect(() => {
		const video = sessionStorage.getItem('showVideo')

		if (!video) sessionStorage.setItem('showVideo', 'true')
	}, [])

	return (
		<LanguageProvider>
			<React.Fragment>
				<Component />
			</React.Fragment>
		</LanguageProvider>
	)
}

export default App

