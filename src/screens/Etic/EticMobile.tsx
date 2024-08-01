import React from 'react'
import View1 from './Components/View1'
import View2 from './Components/View2'
import View3 from './Components/View3'
import View4 from './Components/View4'
import View5 from './Components/View5'
import View6 from './Components/View6'
import View7 from './Components/View7'
import View8 from './Components/View8'
import View9 from './Components/View9'
import View10 from './Components/View10'
import View11 from './Components/View11'

const EticMobile: React.FC = (): JSX.Element => {
    const [view, setView] = React.useState<number>(0)

    const handleNext = (number: number) => setView(number)

    return (
        <React.Fragment>
            {
                view === 0 ? (
                    <View1 onNext={handleNext}/>
                ) : view === 1 ? (
                    <View2 onNext={handleNext}/>
                ) : view === 2 ? (
                    <View3 onNext={handleNext}/>
                ) : view === 3 ? (
                    <View4 onNext={handleNext}/>
                ) : view === 4 ? (
                    <View5 onNext={handleNext}/>
                ) : view === 5 ? (
                    <View6 onNext={handleNext}/>
                ) : view === 6 ? (
                    <View7 onNext={handleNext}/>
                ) : view === 7 ? (
                    <View8 onNext={handleNext}/>
                ) : view === 8 ? (
                    <View9 onNext={handleNext}/>
                ) : view === 9 ? (
                    <View10 onNext={handleNext}/>
                ) :   (
                    <View11 onNext={handleNext}/>
                )
            }
        </React.Fragment>
    )
}

export default EticMobile