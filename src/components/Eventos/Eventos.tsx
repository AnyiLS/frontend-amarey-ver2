import React from 'react'
import { CalendarItems, calendarItems } from './mocks/calendar.mock'
import moment from 'moment'
import EventosMobile from './EventosMobile'
import useGeneral from 'hooks/general.hook'
import useLayout from 'hooks/ancho.hook'

const Eventos = () => {
	/** Hooks  */
	const { width } = useGeneral();
	const { navbarHeight } = useLayout();

	const month = moment().month()
	const day = moment().date()

	const [slide, setSlide] = React.useState<number>(0)

	const handleAddPage = (): void => setSlide(slide + 1 > 26 ? 0 : slide + 1)

	const handleLessPage = (): void => setSlide(slide - 1 <= 0 ? 26 : slide - 1)

	const handleChangeDay = (day: number): void => {
		const index: CalendarItems | undefined = calendarItems.find(
			(item: CalendarItems) => item.day === day
		)
		setSlide(index?.id || 1)
	}

	const handleAddMonth = () => {
		if (slide <= 3) setSlide(4)
		else if (slide <= 8) setSlide(9)
		else if (slide <= 18) setSlide(19)
		else if (slide <= 25 && slide >= 19) setSlide(slide + 1)
		else setSlide(0)
	}

	const handleLessMonth = () => {
		if (slide <= 3) setSlide(26)
		else if (slide <= 8) setSlide(0)
		else if (slide <= 18) setSlide(4)
		else if (slide <= 26 && slide >= 19) setSlide(slide - 1)
		else setSlide(0)
	}

	const searchDate = () => {
		const currentDay = moment().format('DD')
		const currentMonth = moment().format('MM')

		const currentIndex: number | null = calendarItems.findIndex((item: CalendarItems, index: number) => {
			if (item.date === `${currentDay}-${currentMonth}`) return index + 1
			else if (item.date && item.date.includes(currentMonth)) return index
			else return null
		});

		if (currentIndex) setSlide(currentIndex)
		else setSlide(0)
	}

	React.useEffect(() => {
		searchDate()
	}, [])

	return (
		<React.Fragment>
			{width > 1024 ? (
				<div className='h-full' style={{ marginTop: navbarHeight }}>
					{calendarItems.map((item: CalendarItems, index: number) => {
						const Component = item.Component

						if (slide === index)
							return (
								<Component
									month={month}
									next={handleAddPage}
									prev={handleLessPage}
									today={day}
									onChangeDay={handleChangeDay}
									onChangeMonth={handleAddMonth}
									onLessMonth={handleLessMonth}
								/>
							)
						else return <React.Fragment></React.Fragment>
					})}
				</div>
			) : (
				<EventosMobile />
			)}
		</React.Fragment>
	)
}

export default Eventos
