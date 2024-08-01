import React from 'react'
import { SiteMapMock, siteMapMock } from 'mocks/navbar.mocks'

const useNavbar = () => {
    /** States */
    const [results, setResults] = React.useState<SiteMapMock[]>([]);
    const [isScroll, setIsScroll] = React.useState<boolean>(false);
    const [previousScrollPosition, setPreviousScrollPosition] = React.useState(0);

    const handleSearchPage = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value === '') {
            setResults([])
        } else {
            const searchResults: SiteMapMock[] = siteMapMock.filter((item: SiteMapMock) => item.label.toLowerCase().includes(e.target.value.toLowerCase()));
            setResults(searchResults)
        }
    }

    const handleGetScroll = () => {
        const currentScrollPosition: number = window.pageYOffset;
        setIsScroll(currentScrollPosition < previousScrollPosition);
        setPreviousScrollPosition(currentScrollPosition);
    }

    const active = [
        { label: 'Home', path: ['/'] },
        { label: 'Trayectoria', path: ['/historia', '/filosofia', '/reconocimientos', '/responsabilidad'] },
        { label: 'Soluciones', path: ['/nuestros-aliados', '/biomedico', '/productos'] },
        { label: 'Actualidad', path: ['/noticias', '/eventos'] },
        { label: 'Etica', path: ['/codigo-linea-etica'] },
        { label: 'Trabaje', path: ['/trabaje-nosotros'] },
        { label: 'Contactenos', path: ['/contactenos'] },
    ]

    React.useEffect(() => {
        window.addEventListener('scroll', handleGetScroll);

        return () => {
            window.removeEventListener('scroll', handleGetScroll)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [previousScrollPosition])



    return {
        results,
        handleSearchPage,
        active
    }
}

export default useNavbar