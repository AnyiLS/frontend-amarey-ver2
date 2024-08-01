import moment from 'moment'
import React from 'react'
import { useTranslation } from 'react-i18next'

interface CalendarProps {
    onNext: () => void
    onPrev: () => void
    onPrevMonth: () => void
    onNextMonth: () => void
    setView: React.Dispatch<React.SetStateAction<string>>
}

const May22: React.FC<CalendarProps> = ({
    onNext,
    onPrev,
    onNextMonth,
    onPrevMonth,
    setView,
}): JSX.Element => {
    /** Variables */
    const day = moment().format('DD')
    const month = moment().format('MM')

    const {t} = useTranslation()


    React.useEffect(() => {
        if (month === '05') {
            const element = document.getElementById(`day-${day}`)

            if (element) element.style.display = 'block'
        }
    }, [day, month])

    return (
        <svg viewBox="18 0 414 856.142">
            <defs>
                <style>
                    {
                        ".a-pentagrama,.p-pentagrama{fill:none;}.b-pentagrama{clip-path:url(#a-pentagrama);}.c-pentagrama{fill:#e40032;}.d-pentagrama,.r-pentagrama,.s-pentagrama{fill:#001f5f;}.e-pentagrama{fill:#c5dbf7;}.f-pentagrama{fill:#c7c7cc;}.g-pentagrama,.h-pentagrama,.j-pentagrama{fill:#fff;}.h-pentagrama,.n-pentagrama{font-size:16px;}.h-pentagrama{font-family:Silka-Bold, Silka;}.h-pentagrama,.j-pentagrama,.r-pentagrama{font-weight:700;}.i-pentagrama,.l-pentagrama,.n-pentagrama,.o-pentagrama{fill:#182856;}.i-pentagrama{font-size:15px;}.i-pentagrama,.n-pentagrama,.s-pentagrama{font-family:Silka-Regular, Silka;}.j-pentagrama{font-size:18px;}.j-pentagrama,.r-pentagrama{font-family:'Kiona-Bold';}.k-pentagrama{clip-path:url(#f-pentagrama);}.l-pentagrama{font-size:20px;}.l-pentagrama,.o-pentagrama{font-family:Silka-SemiBold, Silka;font-weight:600;}.m-pentagrama{clip-path:url(#g-pentagrama);}.o-pentagrama{font-size:27px;}.p-pentagrama{stroke:#e40032;stroke-width:3px;}.q-pentagrama{fill:url(#h-pentagrama);}.r-pentagrama{font-size:11px;}.s-pentagrama{font-size:8px;}.t-pentagrama{filter:url(#k-pentagrama);}.u-pentagrama{filter:url(#i-pentagrama);}.v-pentagrama{filter:url(#d-pentagrama);}.w-pentagrama{filter:url(#b-pentagrama);}"
                    }
                </style>
                <clipPath id="a-pentagrama">
                    <rect
                        className="a-pentagrama"
                        width={414.551}
                        height={856.141}
                        transform="translate(0 0)"
                    />
                </clipPath>
                <filter
                    id="b-pentagrama"
                    x={232.97}
                    y={409.209}
                    width={73}
                    height={44.09}
                    filterUnits="userSpaceOnUse">
                    <feOffset dy={3} />
                    <feGaussianBlur stdDeviation={3} result="c" />
                    <feFlood floodOpacity={0.6} />
                    <feComposite operator="in" in2="c" />
                    <feComposite in="SourceGraphic" />
                </filter>
                <filter
                    id="d-pentagrama"
                    x={139.642}
                    y={409.209}
                    width={73}
                    height={44.09}
                    filterUnits="userSpaceOnUse">
                    <feOffset dy={3} />
                    <feGaussianBlur stdDeviation={3} result="e" />
                    <feFlood floodOpacity={0.6} />
                    <feComposite operator="in" in2="e" />
                    <feComposite in="SourceGraphic" />
                </filter>
                <clipPath id="f-pentagrama">
                    <rect
                        className="a-pentagrama"
                        width={322}
                        height={26}
                    />
                </clipPath>
                <clipPath id="g-pentagrama">
                    <rect
                        className="a-pentagrama"
                        width={322}
                        height={165}
                    />
                </clipPath>
                <pattern
                    id="h-pentagrama"
                    preserveAspectRatio="xMidYMid slice"
                    width="100%"
                    height="100%"
                    viewBox="0 0 1500 1000">
                    <image
                        width={1500}
                        height={1000}
                        xlinkHref="/images/mobile/events/image-2.webp"
                    />
                </pattern>
                <filter
                    id="i-pentagrama"
                    x={59.595}
                    y={94.511}
                    width={326.422}
                    height={302.738}
                    filterUnits="userSpaceOnUse">
                    <feOffset dy={3} />
                    <feGaussianBlur stdDeviation={3} result="j" />
                    <feFlood floodOpacity={0.4} />
                    <feComposite operator="in" in2="j" />
                    <feComposite in="SourceGraphic" />
                </filter>
                <filter
                    id="k-pentagrama"
                    x={93.924}
                    y={311.783}
                    width={269.152}
                    height={90.485}
                    filterUnits="userSpaceOnUse">
                    <feOffset dy={3} />
                    <feGaussianBlur stdDeviation={3} result="l" />
                    <feFlood floodOpacity={0.4} />
                    <feComposite operator="in" in2="l" />
                    <feComposite in="SourceGraphic" />
                </filter>
            </defs>
            <g transform="translate(14.806 -24.602)">
                <g transform="translate(1 24.602)">
                    <g
                        className="b-pentagrama"
                        transform="translate(0 0)">
                        <g transform="translate(436.148 1627.226) rotate(180)">
                            <path
                                className="c-pentagrama"
                                d="M597.981,453.3l-8.16,17.3c-14.568,30.89-48.45,50.85-86.318,50.85H259.215v.836H503.5A103.193,103.193,0,0,0,555.9,508.271,88.879,88.879,0,0,0,585,481.032a79.465,79.465,0,0,0,5.7-10.107l8.312-17.624Z"
                                transform="translate(-355.401 281.84)"
                            />
                            <path
                                className="c-pentagrama"
                                d="M505.963,503.55l-5.943-12.6c-10.611-22.5-35.29-37.038-62.872-37.038H259.215V453.3H437.148a75.163,75.163,0,0,1,38.162,10.21,64.737,64.737,0,0,1,21.2,19.84,57.881,57.881,0,0,1,4.148,7.362l6.054,12.837Z"
                                transform="translate(-342.462 1153.097)"
                            />
                            <path
                                className="d-pentagrama"
                                d="M312.653,724.35,364.82,613.712c14.568-30.89,48.45-50.85,86.318-50.85H772.059v-.836H451.138a103.2,103.2,0,0,0-52.394,14.018c-15.567,9.171-27.6,22.085-34.8,37.346l-52.211,110.73.917.229"
                                transform="translate(-328.725 227.667)"
                            />
                        </g>
                    </g>
                </g>
            </g>
            <circle
                className="e-pentagrama"
                cx={14}
                cy={14}
                r={14}
                transform="translate(259.806 574.21)"
            />
            <circle
                className="e-pentagrama"
                cx={14}
                cy={14}
                r={14}
                transform="translate(259.806 640.21)"
            />
            <circle
                className="e-pentagrama"
                cx={14}
                cy={14}
                r={14}
                transform="translate(259.806 673.21)"
            />
            <circle
                className="e-pentagrama"
                cx={14}
                cy={14}
                r={14}
                transform="translate(259.806 706.21)"
            />
            <circle
                className="e-pentagrama"
                cx={14}
                cy={14}
                r={14}
                transform="translate(357.806 574.21)"
            />
            <circle
                className="e-pentagrama"
                cx={14}
                cy={14}
                r={14}
                transform="translate(357.806 640.21)"
            />
            <circle
                className="e-pentagrama"
                cx={14}
                cy={14}
                r={14}
                transform="translate(357.806 673.21)"
            />
            <circle
                className="e-pentagrama"
                cx={14}
                cy={14}
                r={14}
                transform="translate(308.806 673.21)"
            />
            <circle
                className="e-pentagrama"
                cx={14}
                cy={14}
                r={14}
                transform="translate(308.806 706.21)"
            />
            <circle
                className="e-pentagrama"
                cx={14}
                cy={14}
                r={14}
                transform="translate(210.806 673.21)"
            />
            <rect
                className="c-pentagrama"
                width={24}
                height={3}
                rx={1.5}
                transform="translate(212.806 700.21)"
            />
            <path
                className="d-pentagrama"
                d="M432.355,0H21.3C7.82,0-2.265,11.674.441,24.144L20.452,453.02c2.03,9.355,10.746,16.072,20.855,16.072H432.355Z"
                transform="translate(0 0.003)"
            />
            <g transform="translate(148.642 415.209)">
                <g
                    transform="translate(93.329 0)"
                    onClick={() => setView('23-05')}>
                    <g
                        className="w-pentagrama"
                        transform="matrix(1, 0, 0, 1, -241.97, -415.21)">
                        <path
                            className="f-pentagrama"
                            d="M55,0H30.844A30.224,30.224,0,0,0,2.708,19.187L0,26.09H23.164a31.81,31.81,0,0,0,29.771-20.6Z"
                            transform="translate(241.97 415.21)"
                        />
                    </g>
                    <path
                        className="g-pentagrama"
                        d="M6.017,0l6.017,10.315H0Z"
                        transform="translate(32.651 7.02) rotate(90)"
                    />
                </g>
                <g
                    transform="translate(0 0)"
                    onClick={() => setView('18-05')}>
                    <g
                        className="v-pentagrama"
                        transform="matrix(1, 0, 0, 1, -148.64, -415.21)">
                        <path
                            className="f-pentagrama"
                            d="M0,0H24.155A30.224,30.224,0,0,1,52.292,19.187L55,26.09H31.836A31.81,31.81,0,0,1,2.065,5.486Z"
                            transform="translate(148.64 415.21)"
                        />
                    </g>
                    <path
                        className="g-pentagrama"
                        d="M6.017,0l6.017,10.315H0Z"
                        transform="translate(22.349 19.054) rotate(-90)"
                    />
                </g>
            </g>
            <text
                className="h-pentagrama"
                transform="translate(144.806 87.21)">
                <tspan x={0} y={0}>
                    {t('22 de mayo de 2024')}
                </tspan>
            </text>
            <g transform="translate(228.262 782.336)">
                <circle
                    className="e-pentagrama"
                    cx={11.5}
                    cy={11.5}
                    r={11.5}
                    transform="translate(-0.457 -0.125)"
                />
                <text
                    className="i-pentagrama"
                    transform="translate(27.543 15.875)">
                    <tspan x={0} y={0}>
                        {'Fecha evento'}
                    </tspan>
                </text>
            </g>
            <g transform="translate(52.281 782.336)">
                <circle
                    className="c-pentagrama"
                    cx={11.5}
                    cy={11.5}
                    r={11.5}
                    transform="translate(-0.476 -0.125)"
                />
                <text
                    className="i-pentagrama"
                    transform="translate(27.524 15.875)">
                    <tspan x={0} y={0}>
                        {'Fecha de hoy'}
                    </tspan>
                </text>
            </g>
            <text
                className="j-pentagrama"
                transform="translate(60 23.21)">
                <tspan x={11.368} y={32}>
                    {t('Prográmese con Grupo Amarey ')}
                </tspan>
            </text>
            <g transform="translate(47.281 494.018)">
                <g
                    className="k-pentagrama"
                    transform="translate(14.524 50.192)">
                    <g transform="translate(-140 -557)">
                        <text
                            className="l-pentagrama"
                            transform="translate(155 557)">
                            <tspan x={-13.57} y={19}>
                                {t('Do ')}
                            </tspan>
                        </text>
                    </g>
                    <g transform="translate(-91 -557)">
                        <text
                            className="l-pentagrama"
                            transform="translate(155 557)">
                            <tspan x={-11.2} y={19}>
                                {t('Lu ')}
                            </tspan>
                        </text>
                    </g>
                    <g transform="translate(-42 -557)">
                        <text
                            className="l-pentagrama"
                            transform="translate(155 557)">
                            <tspan x={-15.36} y={19}>
                                {t('Ma ')}
                            </tspan>
                        </text>
                    </g>
                    <g transform="translate(7 -557)">
                        <text
                            className="l-pentagrama"
                            transform="translate(155 557)">
                            <tspan x={-11.58} y={19}>
                                {t('Mi ')}
                            </tspan>
                        </text>
                    </g>
                    <g transform="translate(56 -557)">
                        <text
                            className="l-pentagrama"
                            transform="translate(155 557)">
                            <tspan x={-11.92} y={19}>
                                {t('Ju ')}
                            </tspan>
                        </text>
                    </g>
                    <g transform="translate(105 -557)">
                        <text
                            className="l-pentagrama"
                            transform="translate(155 557)">
                            <tspan x={-9.54} y={19}>
                                {t('Vi ')}
                            </tspan>
                        </text>
                    </g>
                    <g transform="translate(154 -557)">
                        <text
                            className="l-pentagrama"
                            transform="translate(155 557)">
                            <tspan x={-12.43} y={19}>
                                {'Sa'}
                            </tspan>
                        </text>
                    </g>
                </g>
                <g
                    className="m-pentagrama"
                    transform="translate(14.524 81.192)">
                    <g transform="translate(-140 -557)">
                        <text
                            className="n-pentagrama"
                            transform="translate(155 561)">
                            <tspan x={-9.712} y={15}>
                                {'28'}
                            </tspan>
                        </text>
                    </g>
                    <g transform="translate(-91 -557)">
                        <text
                            className="n-pentagrama"
                            transform="translate(155 561)">
                            <tspan x={-9.712} y={15}>
                                {'29'}
                            </tspan>
                        </text>
                    </g>
                    <g transform="translate(-42 -557)">
                        <text
                            className="n-pentagrama"
                            transform="translate(155 561)">
                            <tspan x={-9.856} y={15}>
                                {'30'}
                            </tspan>
                        </text>
                    </g>
                    <g transform="translate(7 -557)">
                        <circle
                            className="b-item-1813-mobile"
                            cx={15}
                            cy={15}
                            r={15}
                            transform='translate(140 555)'
                            id='day-01'
                            style={{ fill: 'red', display: 'none' }}
                        />
                        <text
                            className="n-pentagrama"
                            transform="translate(155 561)">
                            <tspan x={-8.096} y={15}>
                                {'01'}
                            </tspan>
                        </text>
                    </g>
                    <g
                        transform="translate(56 -557)"
                        onClick={() => setView('02-05')}>
                        <circle
                            className="b-item-1813-mobile"
                            cx={15}
                            cy={15}
                            r={15}
                            transform='translate(140 555)'
                            id='day-02'
                            style={{ fill: 'red', display: 'none' }}
                        />
                        <text
                            className="n-pentagrama"
                            transform="translate(155 561)">
                            <tspan x={-9.664} y={15}>
                                {'02'}
                            </tspan>
                        </text>
                    </g>
                    <g transform="translate(105 -557)">
                        <circle
                            className="b-item-1813-mobile"
                            cx={15}
                            cy={15}
                            r={15}
                            transform='translate(140 555)'
                            id='day-03'
                            style={{ fill: 'red', display: 'none' }}
                        />
                        <text
                            className="n-pentagrama"
                            transform="translate(155 561)">
                            <tspan x={-9.856} y={15}>
                                {'03'}
                            </tspan>
                        </text>
                    </g>
                    <g
                        transform="translate(154 -557)"
                        onClick={() => setView('04-02')}>
                        <circle
                            className="b-item-1813-mobile"
                            cx={15}
                            cy={15}
                            r={15}
                            transform='translate(140 555)'
                            id='day-04'
                            style={{ fill: 'red', display: 'none' }}
                        />
                        <text
                            className="n-pentagrama"
                            transform="translate(155 561)">
                            <tspan x={-9.832} y={15}>
                                {'04'}
                            </tspan>
                        </text>
                    </g>
                    <g transform="translate(-140 -524)">
                        <circle
                            className="b-item-1813-mobile"
                            cx={15}
                            cy={15}
                            r={15}
                            transform='translate(140 555)'
                            id='day-05'
                            style={{ fill: 'red', display: 'none' }}
                        />
                        <text
                            className="n-pentagrama"
                            transform="translate(155 561)">
                            <tspan x={-9.84} y={15}>
                                {'05'}
                            </tspan>
                        </text>
                    </g>
                    <g transform="translate(-91 -524)">
                        <circle
                            className="b-item-1813-mobile"
                            cx={15}
                            cy={15}
                            r={15}
                            transform='translate(140 555)'
                            id='day-06'
                            style={{ fill: 'red', display: 'none' }}
                        />
                        <text
                            className="n-pentagrama"
                            transform="translate(155 561)">
                            <tspan x={-10} y={15}>
                                {'06'}
                            </tspan>
                        </text>
                    </g>
                    <g transform="translate(-42 -524)">
                        <circle
                            className="b-item-1813-mobile"
                            cx={15}
                            cy={15}
                            r={15}
                            transform='translate(140 555)'
                            id='day-07'
                            style={{ fill: 'red', display: 'none' }}
                        />
                        <text
                            className="n-pentagrama"
                            transform="translate(155 561)">
                            <tspan x={-9.416} y={15}>
                                {'07'}
                            </tspan>
                        </text>
                    </g>
                    <g transform="translate(7 -524)">
                        <circle
                            className="b-item-1813-mobile"
                            cx={15}
                            cy={15}
                            r={15}
                            transform='translate(140 555)'
                            id='day-08'
                            style={{ fill: 'red', display: 'none' }}
                        />
                        <text
                            className="n-pentagrama"
                            transform="translate(155 561)">
                            <tspan x={-10} y={15}>
                                {'08'}
                            </tspan>
                        </text>
                    </g>
                    <g transform="translate(56 -524)">
                        <circle
                            className="b-item-1813-mobile"
                            cx={15}
                            cy={15}
                            r={15}
                            transform='translate(140 555)'
                            id='day-09'
                            style={{ fill: 'red', display: 'none' }}
                        />
                        <text
                            className="n-pentagrama"
                            transform="translate(155 561)">
                            <tspan x={-10} y={15}>
                                {'09'}
                            </tspan>
                        </text>
                    </g>
                    <g transform="translate(105 -524)">
                        <circle
                            className="b-item-1813-mobile"
                            cx={15}
                            cy={15}
                            r={15}
                            transform='translate(140 555)'
                            id='day-10'
                            style={{ fill: 'red', display: 'none' }}
                        />
                        <text
                            className="n-pentagrama"
                            transform="translate(155 561)">
                            <tspan x={-8.584} y={15}>
                                {'10'}
                            </tspan>
                        </text>
                    </g>
                    <g transform="translate(154 -524)">
                        <circle
                            className="b-item-1813-mobile"
                            cx={15}
                            cy={15}
                            r={15}
                            transform='translate(140 555)'
                            id='day-11'
                            style={{ fill: 'red', display: 'none' }}
                        />
                        <text
                            className="n-pentagrama"
                            transform="translate(155 561)">
                            <tspan x={-7.216} y={15}>
                                {'11'}
                            </tspan>
                        </text>
                    </g>
                    <g transform="translate(-140 -491)">
                        <circle
                            className="b-item-1813-mobile"
                            cx={15}
                            cy={15}
                            r={15}
                            transform='translate(140 555)'
                            id='day-12'
                            style={{ fill: 'red', display: 'none' }}
                        />
                        <text
                            className="n-pentagrama"
                            transform="translate(155 561)">
                            <tspan x={-8.296} y={15}>
                                {'12'}
                            </tspan>
                        </text>
                    </g>
                    <g transform="translate(-91 -491)">
                        <circle
                            className="b-item-1813-mobile"
                            cx={15}
                            cy={15}
                            r={15}
                            transform='translate(140 555)'
                            id='day-13'
                            style={{ fill: 'red', display: 'none' }}
                        />
                        <text
                            className="n-pentagrama"
                            transform="translate(155 561)">
                            <tspan x={-8} y={15}>
                                {'13'}
                            </tspan>
                        </text>
                    </g>
                    <g transform="translate(-42 -491)">
                        <circle
                            className="b-item-1813-mobile"
                            cx={15}
                            cy={15}
                            r={15}
                            transform='translate(140 555)'
                            id='day-14'
                            style={{ fill: 'red', display: 'none' }}
                        />
                        <text
                            className="n-pentagrama"
                            transform="translate(155 561)">
                            <tspan x={-8.136} y={15}>
                                {'14'}
                            </tspan>
                        </text>
                    </g>
                    <g transform="translate(7 -491)">
                        <circle
                            className="b-item-1813-mobile"
                            cx={15}
                            cy={15}
                            r={15}
                            transform='translate(140 555)'
                            id='day-15'
                            style={{ fill: 'red', display: 'none' }}
                        />
                        <text
                            className="n-pentagrama"
                            transform="translate(155 561)">
                            <tspan x={-8.472} y={15}>
                                {'15'}
                            </tspan>
                        </text>
                    </g>
                    <g
                        transform="translate(56 -491)"
                        onClick={() => setView('16-05')}>
                        <circle
                            className="b-item-1813-mobile"
                            cx={15}
                            cy={15}
                            r={15}
                            transform='translate(140 555)'
                            id='day-16'
                            style={{ fill: 'red', display: 'none' }}
                        />
                        <text
                            className="n-pentagrama"
                            transform="translate(155 561)">
                            <tspan x={-8.632} y={15}>
                                {'16'}
                            </tspan>
                        </text>
                    </g>
                    <g transform="translate(105 -491)">
                        <circle
                            className="b-item-1813-mobile"
                            cx={15}
                            cy={15}
                            r={15}
                            transform='translate(140 555)'
                            id='day-17'
                            style={{ fill: 'red', display: 'none' }}
                        />
                        <text
                            className="n-pentagrama"
                            transform="translate(155 561)">
                            <tspan x={-8.048} y={15}>
                                {'17'}
                            </tspan>
                        </text>
                    </g>
                    <g
                        transform="translate(154 -491)"
                        onClick={() => setView('18-05')}>
                        <circle
                            className="b-item-1813-mobile"
                            cx={15}
                            cy={15}
                            r={15}
                            transform='translate(140 555)'
                            id='day-18'
                            style={{ fill: 'red', display: 'none' }}
                        />
                        <text
                            className="n-pentagrama"
                            transform="translate(155 561)">
                            <tspan x={-8.632} y={15}>
                                {'18'}
                            </tspan>
                        </text>
                    </g>
                    <g transform="translate(-140 -458)">
                        <circle
                            className="b-item-1813-mobile"
                            cx={15}
                            cy={15}
                            r={15}
                            transform='translate(140 555)'
                            id='day-19'
                            style={{ fill: 'red', display: 'none' }}
                        />
                        <text
                            className="n-pentagrama"
                            transform="translate(155 561)">
                            <tspan x={-8.304} y={15}>
                                {'19'}
                            </tspan>
                        </text>
                    </g>
                    <g transform="translate(-91 -458)">
                        <circle
                            className="b-item-1813-mobile"
                            cx={15}
                            cy={15}
                            r={15}
                            transform='translate(140 555)'
                            id='day-20'
                            style={{ fill: 'red', display: 'none' }}
                        />
                        <text
                            className="n-pentagrama"
                            transform="translate(155 561)">
                            <tspan x={-9.664} y={15}>
                                {'20'}
                            </tspan>
                        </text>
                    </g>
                    <g transform="translate(-42 -458)">
                        <circle
                            className="b-item-1813-mobile"
                            cx={15}
                            cy={15}
                            r={15}
                            transform='translate(140 555)'
                            id='day-21'
                            style={{ fill: 'red', display: 'none' }}
                        />
                        <text
                            className="n-pentagrama"
                            transform="translate(155 561)">
                            <tspan x={-8.296} y={15}>
                                {'21'}
                            </tspan>
                        </text>
                    </g>
                    <g
                        transform="translate(7 -458)"
                        onClick={() => setView('22-05')}>
                        <circle
                            className="b-item-1813-mobile"
                            cx={15}
                            cy={15}
                            r={15}
                            transform='translate(140 555)'
                            id='day-22'
                            style={{ fill: 'red', display: 'none' }}
                        />
                        <text
                            className="n-pentagrama"
                            transform="translate(155 561)">
                            <tspan x={-9.376} y={15}>
                                {'22'}
                            </tspan>
                        </text>
                    </g>
                    <g
                        transform="translate(56 -458)"
                        onClick={() => setView('23-05')}>
                        <circle
                            className="b-item-1813-mobile"
                            cx={15}
                            cy={15}
                            r={15}
                            transform='translate(140 555)'
                            id='day-23'
                            style={{ fill: 'red', display: 'none' }}
                        />
                        <text
                            className="n-pentagrama"
                            transform="translate(155 561)">
                            <tspan x={-9.568} y={15}>
                                {'23'}
                            </tspan>
                        </text>
                    </g>
                    <g
                        transform="translate(105 -458)"
                        onClick={() => setView('24-05')}>
                        <circle
                            className="b-item-1813-mobile"
                            cx={15}
                            cy={15}
                            r={15}
                            transform='translate(140 555)'
                            id='day-24'
                            style={{ fill: 'red', display: 'none' }}
                        />
                        <text
                            className="n-pentagrama"
                            transform="translate(155 561)">
                            <tspan x={-8.888} y={15}>
                                {'24'}
                            </tspan>
                        </text>
                    </g>
                    <g
                        transform="translate(154 -458)"
                        onClick={() => setView('25-05')}>
                        <circle
                            className="b-item-1813-mobile"
                            cx={15}
                            cy={15}
                            r={15}
                            transform='translate(140 555)'
                            id='day-25'
                            style={{ fill: 'red', display: 'none' }}
                        />
                        <text
                            className="n-pentagrama"
                            transform="translate(155 561)">
                            <tspan x={-9.552} y={15}>
                                {'25'}
                            </tspan>
                        </text>
                    </g>
                    <g transform="translate(-140 -425)">
                        <circle
                            className="b-item-1813-mobile"
                            cx={15}
                            cy={15}
                            r={15}
                            transform='translate(140 555)'
                            id='day-26'
                            style={{ fill: 'red', display: 'none' }}
                        />
                        <text
                            className="n-pentagrama"
                            transform="translate(155 561)">
                            <tspan x={-9.304} y={15}>
                                {'26'}
                            </tspan>
                        </text>
                    </g>
                    <g transform="translate(-91 -425)">
                        <circle
                            className="b-item-1813-mobile"
                            cx={15}
                            cy={15}
                            r={15}
                            transform='translate(140 555)'
                            id='day-27'
                            style={{ fill: 'red', display: 'none' }}
                        />
                        <text
                            className="n-pentagrama"
                            transform="translate(155 561)">
                            <tspan x={-9.128} y={15}>
                                {'27'}
                            </tspan>
                        </text>
                    </g>
                    <g transform="translate(-42 -425)">
                        <circle
                            className="b-item-1813-mobile"
                            cx={15}
                            cy={15}
                            r={15}
                            transform='translate(140 555)'
                            id='day-28'
                            style={{ fill: 'red', display: 'none' }}
                        />
                        <text
                            className="n-pentagrama"
                            transform="translate(155 561)">
                            <tspan x={-9.712} y={15}>
                                {'28'}
                            </tspan>
                        </text>
                    </g>
                    <g transform="translate(7 -425)">
                        <circle
                            className="b-item-1813-mobile"
                            cx={15}
                            cy={15}
                            r={15}
                            transform='translate(140 555)'
                            id='day-29'
                            style={{ fill: 'red', display: 'none' }}
                        />
                        <text
                            className="n-pentagrama"
                            transform="translate(155 561)">
                            <tspan x={-9.712} y={15}>
                                {'29'}
                            </tspan>
                        </text>
                    </g>
                    <g
                        transform="translate(56 -425)"
                        onClick={() => setView('30-05')}>
                        <circle
                            className="b-item-1813-mobile"
                            cx={15}
                            cy={15}
                            r={15}
                            transform='translate(140 555)'
                            id='day-30'
                            style={{ fill: 'red', display: 'none' }}
                        />
                        <text
                            className="n-pentagrama"
                            transform="translate(155 561)">
                            <tspan x={-9.856} y={15}>
                                {'30'}
                            </tspan>
                        </text>
                    </g>
                    <g
                        transform="translate(105 -425)"
                        onClick={() => setView('31-05')}>
                        <circle
                            className="b-item-1813-mobile"
                            cx={15}
                            cy={15}
                            r={15}
                            transform='translate(140 555)'
                            id='day-31'
                            style={{ fill: 'red', display: 'none' }}
                        />
                        <text
                            className="n-pentagrama"
                            transform="translate(155 561)">
                            <tspan x={-8.488} y={15}>
                                {'31'}
                            </tspan>
                        </text>
                    </g>
                    <g transform="translate(154 -425)">
                        <text
                            className="n-pentagrama"
                            transform="translate(155 561)">
                            <tspan x={-8.096} y={15}>
                                {'01'}
                            </tspan>
                        </text>
                    </g>
                </g>
                <text
                    className="o-pentagrama"
                    transform="translate(4.524 25.192)">
                    <tspan x={0} y={0}>
                        {t('Mayo 2024')}
                    </tspan>
                </text>
                <line
                    className="p-pentagrama"
                    x2={342}
                    transform="translate(4.524 40.192)"
                />
                <path
                    className="d-pentagrama"
                    d="M9.095,0l9.095,15.591H0Z"
                    transform="translate(293.111 30.68) rotate(-90)"
                    onClick={() => setView('06-03')}
                />
                <path
                    className="d-pentagrama"
                    d="M9.095,0l9.095,15.591H0Z"
                    transform="translate(346.524 12.491) rotate(90)"
                    onClick={() => setView('06')}
                />
            </g>
            <g
                className="u-pentagrama"
                transform="matrix(1, 0, 0, 1, 0, 0)">
                <path
                    className="q-pentagrama"
                    d="M308.312,19.293,285.481,217.271H115.6c-33.527,0-63.637,21.151-75.881,53.3l-5.389,14.164a19.172,19.172,0,0,1-3.835-9.893L.116,19.36C-.941,9.1,5.328,0,13.443,0H294.977c8.1,0,14.358,9.058,13.336,19.293"
                    transform="translate(68.59 100.51)"
                />
            </g>
            <g
                className="t-pentagrama"
                transform="matrix(1, 0, 0, 1, 0, 0)">
                <path
                    className="g-pentagrama"
                    d="M330.722,488.86l-6.631,57.507c-.854,8.56-6.566,14.978-13.34,14.978H89.066a12.141,12.141,0,0,1-9.5-5.018l5.389-14.164c12.244-32.151,42.354-53.3,75.881-53.3Z"
                    transform="translate(23.35 -171.08)"
                />
            </g>
            <text
                className="r-pentagrama"
                transform="translate(332.806 344.525)">
                <tspan x={-163.658} y={0}>
                    {'XXXIV CONGRESO ACIONAL DE'}
                </tspan>
                <tspan x={-158.675} y={12}>
                    {'OBSTETRICIA Y GINECOLOGÍA'}
                </tspan>
            </text>
            <text
                className="s-pentagrama"
                transform="translate(112.806 362.525)">
                <tspan x={69.128} y={8}>
                    {'Bogotá 22 y 25 de mayo Las Americas'}
                </tspan>
            </text>
        </svg>
    )
}

export default May22
