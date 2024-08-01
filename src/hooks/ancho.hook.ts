import React from "react"

const useLayout = () => {
    /** States */
    const [width, setWidth] = React.useState<number>(window.innerWidth);
    const [height, setHeight] = React.useState<number>(window.innerHeight);
    const [isSmallScreen, setIsSmallScreen] = React.useState<boolean>(false);
    const [navbarHeight, setNavbarHeight] = React.useState<number>(0)

    React.useEffect(() => {
        window.addEventListener('resize', () => {
            setWidth(window.innerWidth);
            setHeight(window.innerHeight);
        })

        return () => {
            window.removeEventListener('resize', () => {
                setWidth(window.innerWidth);
                setHeight(window.innerHeight);
            })
        }
    }, [])

    React.useEffect(() => {
        setIsSmallScreen(width <= 1400 && height <= 625);
    }, [width, height])

    React.useEffect(() => {
        setNavbarHeight(document.getElementById('navbar__container')?.clientHeight ?? 0)

        window.addEventListener('resize', () => setNavbarHeight(document.getElementById('navbar__container')?.clientHeight ?? 0))

        return () => {
            window.removeEventListener('resize', () => setNavbarHeight(document.getElementById('navbar__container')?.clientHeight ?? 0))
        }
	}, [])

    return {
        width,
        height,
        isSmallScreen,
        navbarHeight
    }
}

export default useLayout