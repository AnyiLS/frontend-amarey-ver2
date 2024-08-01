import moment from 'moment';
import React from 'react'
import { useTranslation } from 'react-i18next';

interface CalendarProps {
    onNext: () => void
    onPrev: () => void
    onPrevMonth: () => void
    onNextMonth: () => void
}

const January: React.FC<CalendarProps> = ({ onNext, onPrev, onNextMonth, onPrevMonth }): JSX.Element => {
    /** Variables */
    const day = moment().format('DD');
    const month = moment().format('MM');

    const {t} = useTranslation()


    React.useEffect(() => {
        if (month === '12') {
            const element = document.getElementById(`day-${day}`);

            if (element) element.style.display = 'block'
        }
    }, [day, month])

    return (
        <svg viewBox="18 0 414 856.142">
            <defs>
                <style>
                    {
                        ".a-mobile,.q-mobile{fill:none;}.b-mobile{clip-path:url(#a-mobile);}.c-mobile{fill:#e40032;}.d-mobile,.k-mobile{fill:#001f5f;}.e-mobile{fill:#c7c7cc;}.f-mobile,.g-mobile,.j-mobile{fill:#fff;}.g-mobile,.o-mobile{font-size:16px;}.g-mobile{font-family:Silka-Bold, Silka;}.g-mobile,.j-mobile,.k-mobile{font-weight:700;}.h-mobile{fill:#c5dbf7;}.i-mobile,.m-mobile,.o-mobile,.p-mobile{fill:#182856;}.i-mobile{font-size:15px;}.i-mobile,.o-mobile{font-family:Silka-Regular, Silka;}.j-mobile{font-size:18px;}.j-mobile,.k-mobile{font-family:Kiona-Bold, Kiona;}.k-mobile{font-size:11px;}.l-mobile{clip-path:url(#j-mobile);}.m-mobile{font-size:20px;}.m-mobile,.p-mobile{font-family:Silka-SemiBold, Silka;font-weight:600;}.n-mobile{clip-path:url(#k-mobile);}.p-mobile{font-size:27px;}.q-mobile{stroke:#e40032;stroke-width:3px;}.r-mobile{clip-path:url(#l-mobile);}.s-mobile{filter:url(#h-mobile);}.t-mobile{filter:url(#f-mobile);}.u-mobile{filter:url(#d-mobile);}.v-mobile{filter:url(#b-mobile);}"
                    }
                </style>
                <clipPath id="a-mobile">
                    <rect
                        className="a-mobile"
                        width={414.551}
                        height={856.141}
                        transform="translate(0 0)"
                    />
                </clipPath>
                <filter
                    id="b-mobile"
                    x={232.97}
                    y={409.209}
                    width={73}
                    height={44.09}
                    filterUnits="userSpaceOnUse"
                >
                    <feOffset dy={3} />
                    <feGaussianBlur stdDeviation={3} result="c" />
                    <feFlood floodOpacity={0.6} />
                    <feComposite operator="in" in2="c" />
                    <feComposite in="SourceGraphic" />
                </filter>
                <filter
                    id="d-mobile"
                    x={139.642}
                    y={409.209}
                    width={73}
                    height={44.09}
                    filterUnits="userSpaceOnUse"
                >
                    <feOffset dy={3} />
                    <feGaussianBlur stdDeviation={3} result="e" />
                    <feFlood floodOpacity={0.6} />
                    <feComposite operator="in" in2="e" />
                    <feComposite in="SourceGraphic" />
                </filter>
                <filter
                    id="f-mobile"
                    x={59.595}
                    y={94.511}
                    width={326.422}
                    height={302.738}
                    filterUnits="userSpaceOnUse"
                >
                    <feOffset dy={3} />
                    <feGaussianBlur stdDeviation={3} result="g" />
                    <feFlood floodOpacity={0.4} />
                    <feComposite operator="in" in2="g" />
                    <feComposite in="SourceGraphic" />
                </filter>
                <filter
                    id="h-mobile"
                    x={93.924}
                    y={311.783}
                    width={269.152}
                    height={90.485}
                    filterUnits="userSpaceOnUse"
                >
                    <feOffset dy={3} />
                    <feGaussianBlur stdDeviation={3} result="i" />
                    <feFlood floodOpacity={0.4} />
                    <feComposite operator="in" in2="i" />
                    <feComposite in="SourceGraphic" />
                </filter>
                <clipPath id="j-mobile">
                    <rect className="a-mobile" width={322} height={26} />
                </clipPath>
                <clipPath id="k-mobile">
                    <rect className="a-mobile" width={322} height={190} />
                </clipPath>
                <clipPath id="l-mobile">
                    <rect className="a-mobile" width={219.37} height={61.383} />
                </clipPath>
            </defs>
            <g transform="translate(14.806 -24.602)">
                <g transform="translate(1 24.602)">
                    <g className="b-mobile" transform="translate(0 0)">
                        <g transform="translate(436.148 1627.226) rotate(180)">
                            <path
                                className="c-mobile"
                                d="M597.981,453.3l-8.16,17.3c-14.568,30.89-48.45,50.85-86.318,50.85H259.215v.836H503.5A103.193,103.193,0,0,0,555.9,508.271,88.879,88.879,0,0,0,585,481.032a79.465,79.465,0,0,0,5.7-10.107l8.312-17.624Z"
                                transform="translate(-355.401 281.84)"
                            />
                            <path
                                className="c-mobile"
                                d="M505.963,503.55l-5.943-12.6c-10.611-22.5-35.29-37.038-62.872-37.038H259.215V453.3H437.148a75.163,75.163,0,0,1,38.162,10.21,64.737,64.737,0,0,1,21.2,19.84,57.881,57.881,0,0,1,4.148,7.362l6.054,12.837Z"
                                transform="translate(-342.462 1153.097)"
                            />
                            <path
                                className="d-mobile"
                                d="M312.653,724.35,364.82,613.712c14.568-30.89,48.45-50.85,86.318-50.85H772.059v-.836H451.138a103.2,103.2,0,0,0-52.394,14.018c-15.567,9.171-27.6,22.085-34.8,37.346l-52.211,110.73.917.229"
                                transform="translate(-328.725 227.667)"
                            />
                        </g>
                    </g>
                </g>
            </g>
            <path
                className="d-mobile"
                d="M432.355,0H21.3C7.82,0-2.265,11.674.441,24.144L20.452,453.02c2.03,9.355,10.746,16.072,20.855,16.072H432.355Z"
                transform="translate(0 0.003)"
            />
            <g transform="translate(148.642 415.209)">
                <g transform="translate(93.329 0)" onClick={onNext}>
                    <g className="v-mobile" transform="matrix(1, 0, 0, 1, -241.97, -415.21)">
                        <path
                            className="e-mobile"
                            d="M55,0H30.844A30.224,30.224,0,0,0,2.708,19.187L0,26.09H23.164a31.81,31.81,0,0,0,29.771-20.6Z"
                            transform="translate(241.97 415.21)"
                        />
                    </g>
                    <path
                        className="f-mobile"
                        d="M6.017,0l6.017,10.315H0Z"
                        transform="translate(32.651 7.02) rotate(90)"
                    />
                </g>
                <g transform="translate(0 0)" onClick={onPrev}>
                    <g className="u-mobile" transform="matrix(1, 0, 0, 1, -148.64, -415.21)">
                        <path
                            className="e-mobile"
                            d="M0,0H24.155A30.224,30.224,0,0,1,52.292,19.187L55,26.09H31.836A31.81,31.81,0,0,1,2.065,5.486Z"
                            transform="translate(148.64 415.21)"
                        />
                    </g>
                    <path
                        className="f-mobile"
                        d="M6.017,0l6.017,10.315H0Z"
                        transform="translate(22.349 19.054) rotate(-90)"
                    />
                </g>
            </g>
            <text className="g-mobile" transform="translate(200.806 87.21)">
                <tspan x={0} y={0}>
                    {t("Enero")}
                </tspan>
            </text>
            <g transform="translate(228.262 782.336)">
                <circle
                    className="h-mobile"
                    cx={11.5}
                    cy={11.5}
                    r={11.5}
                    transform="translate(-0.457 -0.125)"
                />
                <text className="i-mobile" transform="translate(27.543 15.875)">
                    <tspan x={0} y={0}>
                        {"Fecha evento"}
                    </tspan>
                </text>
            </g>
            <g transform="translate(52.281 782.336)">
                <circle
                    className="c-mobile"
                    cx={11.5}
                    cy={11.5}
                    r={11.5}
                    transform="translate(-0.476 -0.125)"
                />
                <text className="i-mobile" transform="translate(27.524 15.875)">
                    <tspan x={0} y={0}>
                        {"Fecha de hoy"}
                    </tspan>
                </text>
            </g>
            <text className="j-mobile" transform="translate(50.806 30.21)">
                <tspan x={17.677} y={18}>
                    {t("Prográmese con Grupo Amarey ")}
                </tspan>
            </text>
            <g className="t-mobile" transform="matrix(1, 0, 0, 1, 0, 0)">
                <path
                    className="f-mobile"
                    d="M308.312,19.293,285.481,217.271H115.6c-33.527,0-63.637,21.151-75.881,53.3l-5.389,14.164a19.172,19.172,0,0,1-3.835-9.893L.116,19.36C-.941,9.1,5.328,0,13.443,0H294.977c8.1,0,14.358,9.058,13.336,19.293"
                    transform="translate(68.59 100.51)"
                />
            </g>
            <g className="s-mobile" transform="matrix(1, 0, 0, 1, 0, 0)">
                <path
                    className="f-mobile"
                    d="M330.722,488.86l-6.631,57.507c-.854,8.56-6.566,14.978-13.34,14.978H89.066a12.141,12.141,0,0,1-9.5-5.018l5.389-14.164c12.244-32.151,42.354-53.3,75.881-53.3Z"
                    transform="translate(23.35 -171.08)"
                />
            </g>
            <text className="k-mobile" transform="translate(332.806 355.525)">
                <tspan x={-135.146} y={0}>
                    {"Este mes no contamos"}
                </tspan>
                <tspan x={-79.332} y={12}>
                    {"con eventos "}
                </tspan>
            </text>
            <g transform="translate(47.281 493.018)">
                <g className="l-mobile" transform="translate(14.524 50.192)">
                    <g transform="translate(-120 -557)">
                        <text className="m-mobile" transform="translate(140 557)">
                            <tspan x={-13.57} y={19}>
                                {t("Do ")}
                            </tspan>
                        </text>
                    </g>
                    <g transform="translate(-71 -557)">
                        <text className="m-mobile" transform="translate(140 557)">
                            <tspan x={-11.2} y={19}>
                                {t("Lu ")}
                            </tspan>
                        </text>
                    </g>
                    <g transform="translate(-22 -557)">
                        <text className="m-mobile" transform="translate(140 557)">
                            <tspan x={-15.36} y={19}>
                                {t("Ma ")}
                            </tspan>
                        </text>
                    </g>
                    <g transform="translate(27 -557)">
                        <text className="m-mobile" transform="translate(140 557)">
                            <tspan x={-11.58} y={19}>
                                {t("Mi ")}
                            </tspan>
                        </text>
                    </g>
                    <g transform="translate(76 -557)">
                        <text className="m-mobile" transform="translate(140 557)">
                            <tspan x={-11.92} y={19}>
                                {t("Ju ")}
                            </tspan>
                        </text>
                    </g>
                    <g transform="translate(120 -557)">
                        <text className="m-mobile" transform="translate(140 557)">
                            <tspan x={-9.54} y={19}>
                                {t("Vi ")}
                            </tspan>
                        </text>
                    </g>
                    <g transform="translate(169 -557)">
                        <text className="m-mobile" transform="translate(140 557)">
                            <tspan x={-12.43} y={19}>
                                {t("Sa ")}
                            </tspan>
                        </text>
                    </g>
                </g>
                <g className="n-mobile" transform="translate(14.524 81.192)">
                    <g transform="translate(-120 -557)">
                        <circle
                            className="b-item-1813-mobile"
                            cx={15}
                            cy={15}
                            r={15}
                            transform='translate(125 555)'
                            id='day'
                            style={{ fill: 'red', display: 'none' }}
                        />
                        <text className="o-mobile" transform="translate(140 561)">
                            <tspan x={-9.304} y={15}>
                                {"29"}
                            </tspan>
                        </text>
                    </g>
                    <g transform="translate(-71 -557)">
                        <circle
                            className="b-item-1813-mobile"
                            cx={15}
                            cy={15}
                            r={15}
                            transform='translate(125 555)'
                            id='day'
                            style={{ fill: 'red', display: 'none' }}
                        />
                        <text className="o-mobile" transform="translate(140 561)">
                            <tspan x={-9.128} y={15}>
                                {"30"}
                            </tspan>
                        </text>
                    </g>
                    <g transform="translate(-22 -557)">
                        <circle
                            className="b-item-1813-mobile"
                            cx={15}
                            cy={15}
                            r={15}
                            transform='translate(125 555)'
                            id='day'
                            style={{ fill: 'red', display: 'none' }}
                        />
                        <text className="o-mobile" transform="translate(140 561)">
                            <tspan x={-9.712} y={15}>
                                {"31"}
                            </tspan>
                        </text>
                    </g>
                    <g transform="translate(27 -557)">
                        <circle
                            className="b-item-1813-mobile"
                            cx={15}
                            cy={15}
                            r={15}
                            transform='translate(125 555)'
                            id='day-01'
                            style={{ fill: 'red', display: 'none' }}
                        />
                        <text className="o-mobile" transform="translate(140 561)">
                            <tspan x={-9.712} y={15}>
                                {"01"}
                            </tspan>
                        </text>
                    </g>
                    <g transform="translate(76 -557)">
                        <circle
                            className="b-item-1813-mobile"
                            cx={15}
                            cy={15}
                            r={15}
                            transform='translate(125 555)'
                            id='day-02'
                            style={{ fill: 'red', display: 'none' }}
                        />
                        <text className="o-mobile" transform="translate(140 561)">
                            <tspan x={-9.856} y={15}>
                                {"02"}
                            </tspan>
                        </text>
                    </g>
                    <g transform="translate(120 -557)">
                        <circle
                            className="b-item-1813-mobile"
                            cx={15}
                            cy={15}
                            r={15}
                            transform='translate(125 555)'
                            id='day-03'
                            style={{ fill: 'red', display: 'none' }}
                        />
                        <text className="o-mobile" transform="translate(140 561)">
                            <tspan x={-8.488} y={15}>
                                {"03"}
                            </tspan>
                        </text>
                    </g>
                    <g transform="translate(169 -557)">
                        <circle
                            className="b-item-1813-mobile"
                            cx={15}
                            cy={15}
                            r={15}
                            transform='translate(125 555)'
                            id='day-04'
                            style={{ fill: 'red', display: 'none' }}
                        />
                        <text className="o-mobile" transform="translate(140 561)">
                            <tspan x={-8.096} y={15}>
                                {"04"}
                            </tspan>
                        </text>
                    </g>
                    <g transform="translate(-120 -524)">
                        <circle
                            className="b-item-1813-mobile"
                            cx={15}
                            cy={15}
                            r={15}
                            transform='translate(125 555)'
                            id='day-05'
                            style={{ fill: 'red', display: 'none' }}
                        />
                        <text className="o-mobile" transform="translate(140 561)">
                            <tspan x={-9.664} y={15}>
                                {"05"}
                            </tspan>
                        </text>
                    </g>
                    <g transform="translate(-71 -524)">
                        <circle
                            className="b-item-1813-mobile"
                            cx={15}
                            cy={15}
                            r={15}
                            transform='translate(125 555)'
                            id='day-06'
                            style={{ fill: 'red', display: 'none' }}
                        />
                        <text className="o-mobile" transform="translate(140 561)">
                            <tspan x={-9.856} y={15}>
                                {"06"}
                            </tspan>
                        </text>
                    </g>
                    <g transform="translate(-22 -524)">
                        <circle
                            className="b-item-1813-mobile"
                            cx={15}
                            cy={15}
                            r={15}
                            transform='translate(125 555)'
                            id='day-07'
                            style={{ fill: 'red', display: 'none' }}
                        />
                        <text className="o-mobile" transform="translate(140 561)">
                            <tspan x={-9.832} y={15}>
                                {"07"}
                            </tspan>
                        </text>
                    </g>
                    <g transform="translate(27 -524)">
                        <circle
                            className="b-item-1813-mobile"
                            cx={15}
                            cy={15}
                            r={15}
                            transform='translate(125 555)'
                            id='day-08'
                            style={{ fill: 'red', display: 'none' }}
                        />
                        <text className="o-mobile" transform="translate(140 561)">
                            <tspan x={-9.84} y={15}>
                                {"08"}
                            </tspan>
                        </text>
                    </g>
                    <g transform="translate(76 -524)">
                        <circle
                            className="b-item-1813-mobile"
                            cx={15}
                            cy={15}
                            r={15}
                            transform='translate(125 555)'
                            id='day-09'
                            style={{ fill: 'red', display: 'none' }}
                        />
                        <text className="o-mobile" transform="translate(140 561)">
                            <tspan x={-10} y={15}>
                                {"09"}
                            </tspan>
                        </text>
                    </g>
                    <g transform="translate(120 -524)">
                        <circle
                            className="b-item-1813-mobile"
                            cx={15}
                            cy={15}
                            r={15}
                            transform='translate(125 555)'
                            id='day-10'
                            style={{ fill: 'red', display: 'none' }}
                        />
                        <text className="o-mobile" transform="translate(140 561)">
                            <tspan x={-9.416} y={15}>
                                {"10"}
                            </tspan>
                        </text>
                    </g>
                    <g transform="translate(169 -524)">
                        <circle
                            className="b-item-1813-mobile"
                            cx={15}
                            cy={15}
                            r={15}
                            transform='translate(125 555)'
                            id='day-11'
                            style={{ fill: 'red', display: 'none' }}
                        />
                        <text className="o-mobile" transform="translate(140 561)">
                            <tspan x={-10} y={15}>
                                {"11"}
                            </tspan>
                        </text>
                    </g>
                    <g transform="translate(-120 -491)">
                        <circle
                            className="b-item-1813-mobile"
                            cx={15}
                            cy={15}
                            r={15}
                            transform='translate(125 555)'
                            id='day-12'
                            style={{ fill: 'red', display: 'none' }}
                        />
                        <text className="o-mobile" transform="translate(140 561)">
                            <tspan x={-10} y={15}>
                                {"12"}
                            </tspan>
                        </text>
                    </g>
                    <g transform="translate(-71 -491)">
                        <circle
                            className="b-item-1813-mobile"
                            cx={15}
                            cy={15}
                            r={15}
                            transform='translate(125 555)'
                            id='day-13'
                            style={{ fill: 'red', display: 'none' }}
                        />
                        <text className="o-mobile" transform="translate(140 561)">
                            <tspan x={-8.584} y={15}>
                                {"13"}
                            </tspan>
                        </text>
                    </g>
                    <g transform="translate(-22 -491)">
                        <circle
                            className="b-item-1813-mobile"
                            cx={15}
                            cy={15}
                            r={15}
                            transform='translate(125 555)'
                            id='day-14'
                            style={{ fill: 'red', display: 'none' }}
                        />
                        <text className="o-mobile" transform="translate(140 561)">
                            <tspan x={-7.216} y={15}>
                                {"14"}
                            </tspan>
                        </text>
                    </g>
                    <g transform="translate(27 -491)">
                        <circle
                            className="b-item-1813-mobile"
                            cx={15}
                            cy={15}
                            r={15}
                            transform='translate(125 555)'
                            id='day-15'
                            style={{ fill: 'red', display: 'none' }}
                        />
                        <text className="o-mobile" transform="translate(140 561)">
                            <tspan x={-8.296} y={15}>
                                {"15"}
                            </tspan>
                        </text>
                    </g>
                    <g transform="translate(76 -491)">
                        <circle
                            className="b-item-1813-mobile"
                            cx={15}
                            cy={15}
                            r={15}
                            transform='translate(125 555)'
                            id='day-16'
                            style={{ fill: 'red', display: 'none' }}
                        />
                        <text className="o-mobile" transform="translate(140 561)">
                            <tspan x={-8} y={15}>
                                {"16"}
                            </tspan>
                        </text>
                    </g>
                    <g transform="translate(120 -491)">
                        <circle
                            className="b-item-1813-mobile"
                            cx={15}
                            cy={15}
                            r={15}
                            transform='translate(125 555)'
                            id='day-17'
                            style={{ fill: 'red', display: 'none' }}
                        />7
                        <text className="o-mobile" transform="translate(140 561)">
                            <tspan x={-8.136} y={15}>
                                {"17"}
                            </tspan>
                        </text>
                    </g>
                    <g transform="translate(169 -491)">
                        <circle
                            className="b-item-1813-mobile"
                            cx={15}
                            cy={15}
                            r={15}
                            transform='translate(125 555)'
                            id='day-18'
                            style={{ fill: 'red', display: 'none' }}
                        />
                        <text className="o-mobile" transform="translate(140 561)">
                            <tspan x={-8.472} y={15}>
                                {"18"}
                            </tspan>
                        </text>
                    </g>
                    <g transform="translate(-120 -458)">
                        <circle
                            className="b-item-1813-mobile"
                            cx={15}
                            cy={15}
                            r={15}
                            transform='translate(125 555)'
                            id='day-19'
                            style={{ fill: 'red', display: 'none' }}
                        />
                        <text className="o-mobile" transform="translate(140 561)">
                            <tspan x={-8.632} y={15}>
                                {"19"}
                            </tspan>
                        </text>7
                    </g>
                    <g transform="translate(-71 -458)">
                        <circle
                            className="b-item-1813-mobile"
                            cx={15}
                            cy={15}
                            r={15}
                            transform='translate(125 555)'
                            id='day-20'
                            style={{ fill: 'red', display: 'none' }}
                        />
                        <text className="o-mobile" transform="translate(140 561)">
                            <tspan x={-8.048} y={15}>
                                {"20"}
                            </tspan>
                        </text>
                    </g>
                    <g transform="translate(-22 -458)">
                        <circle
                            className="b-item-1813-mobile"
                            cx={15}
                            cy={15}
                            r={15}
                            transform='translate(125 555)'
                            id='day-21'
                            style={{ fill: 'red', display: 'none' }}
                        />
                        <text className="o-mobile" transform="translate(140 561)">
                            <tspan x={-8.632} y={15}>
                                {"21"}
                            </tspan>
                        </text>
                    </g>
                    <g transform="translate(27 -458)">
                        <circle
                            className="b-item-1813-mobile"
                            cx={15}
                            cy={15}
                            r={15}
                            transform='translate(125 555)'
                            id='day-22'
                            style={{ fill: 'red', display: 'none' }}
                        />
                        <text className="o-mobile" transform="translate(140 561)">
                            <tspan x={-8.304} y={15}>
                                {"22"}
                            </tspan>
                        </text>
                    </g>
                    <g transform="translate(76 -458)">
                        <circle
                            className="b-item-1813-mobile"
                            cx={15}
                            cy={15}
                            r={15}
                            transform='translate(125 555)'
                            id='day-23'
                            style={{ fill: 'red', display: 'none' }}
                        />
                        <text className="o-mobile" transform="translate(140 561)">
                            <tspan x={-9.664} y={15}>
                                {"23"}
                            </tspan>
                        </text>
                    </g>
                    <g transform="translate(120 -458)">
                        <circle
                            className="b-item-1813-mobile"
                            cx={15}
                            cy={15}
                            r={15}
                            transform='translate(125 555)'
                            id='day-24'
                            style={{ fill: 'red', display: 'none' }}
                        />
                        <text className="o-mobile" transform="translate(140 561)">
                            <tspan x={-8.296} y={15}>
                                {"24"}
                            </tspan>
                        </text>
                    </g>
                    <g transform="translate(169 -458)">
                        <circle
                            className="b-item-1813-mobile"
                            cx={15}
                            cy={15}
                            r={15}
                            transform='translate(125 555)'
                            id='day-25'
                            style={{ fill: 'red', display: 'none' }}
                        />
                        <text className="o-mobile" transform="translate(140 561)">
                            <tspan x={-9.376} y={15}>
                                {"25"}
                            </tspan>
                        </text>
                    </g>
                    <g transform="translate(-120 -425)">
                        <circle
                            className="b-item-1813-mobile"
                            cx={15}
                            cy={15}
                            r={15}
                            transform='translate(125 555)'
                            id='day-26'
                            style={{ fill: 'red', display: 'none' }}
                        />
                        <text className="o-mobile" transform="translate(140 561)">
                            <tspan x={-9.568} y={15}>
                                {"26"}
                            </tspan>
                        </text>
                    </g>
                    <g transform="translate(-71 -425)">
                        <circle
                            className="b-item-1813-mobile"
                            cx={15}
                            cy={15}
                            r={15}
                            transform='translate(125 555)'
                            id='day-27'
                            style={{ fill: 'red', display: 'none' }}
                        />
                        <text className="o-mobile" transform="translate(140 561)">
                            <tspan x={-8.888} y={15}>
                                {"27"}
                            </tspan>
                        </text>
                    </g>
                    <g transform="translate(-22 -425)">
                        <circle
                            className="b-item-1813-mobile"
                            cx={15}
                            cy={15}
                            r={15}
                            transform='translate(125 555)'
                            id='day-28'
                            style={{ fill: 'red', display: 'none' }}
                        />
                        <text className="o-mobile" transform="translate(140 561)">
                            <tspan x={-9.552} y={15}>
                                {"28"}
                            </tspan>
                        </text>
                    </g>
                    <g transform="translate(27 -425)">
                        <circle
                            className="b-item-1813-mobile"
                            cx={15}
                            cy={15}
                            r={15}
                            transform='translate(125 555)'
                            id='day-29'
                            style={{ fill: 'red', display: 'none' }}
                        />
                        <text className="o-mobile" transform="translate(140 561)">
                            <tspan x={-9.304} y={15}>
                                {"29"}
                            </tspan>
                        </text>
                    </g>
                    <g transform="translate(76 -425)">
                        <circle
                            className="b-item-1813-mobile"
                            cx={15}
                            cy={15}
                            r={15}
                            transform='translate(125 555)'
                            id='day-30'
                            style={{ fill: 'red', display: 'none' }}
                        />
                        <text className="o-mobile" transform="translate(140 561)">
                            <tspan x={-9.128} y={15}>
                                {"30"}
                            </tspan>
                        </text>
                    </g>
                    <g transform="translate(120 -425)">
                        <circle
                            className="b-item-1813-mobile"
                            cx={15}
                            cy={15}
                            r={15}
                            transform='translate(125 555)'
                            id='day-31'
                            style={{ fill: 'red', display: 'none' }}
                        />
                        <text className="o-mobile" transform="translate(140 561)">
                            <tspan x={-9.712} y={15}>
                                {"31"}
                            </tspan>
                        </text>
                    </g>
                    <g transform="translate(169 -425)">
                        <circle
                            className="b-item-1813-mobile"
                            cx={15}
                            cy={15}
                            r={15}
                            transform='translate(125 555)'
                            id='day'
                            style={{ fill: 'red', display: 'none' }}
                        />
                        <text className="o-mobile" transform="translate(140 561)">
                            <tspan x={-9.712} y={15}>
                                {"01"}
                            </tspan>
                        </text>
                    </g>
                </g>
                <text className="p-mobile" transform="translate(4.524 25.192)">
                    <tspan x={0} y={0}>
                        {t("Enero 2025")}
                    </tspan>
                </text>
                <line className="q-mobile" x2={342} transform="translate(4.524 40.192)" />
                <path
                    className="d-mobile"
                    d="M9.095,0l9.095,15.591H0Z"
                    transform="translate(293.111 30.68) rotate(-90)"
                    onClick={onPrevMonth}
                />
                <path
                    className="d-mobile"
                    d="M9.095,0l9.095,15.591H0Z"
                    transform="translate(346.524 12.491) rotate(90)"
                    onClick={onNextMonth}
                />
            </g>
            <g transform="translate(113.435 197.332)">
                <g className="r-mobile">
                    <path
                        className="c-mobile"
                        d="M36.582,39.483l8.673,11.806a.329.329,0,0,1,.062.19l.049,9.242a.324.324,0,0,1-.321.324l-1.29.006a.322.322,0,0,1-.324-.32l-.017-3.278-4.662.023.017,3.279a.322.322,0,0,1-.321.324l-1.29.006a.32.32,0,0,1-.323-.32l-.044-8.491a.321.321,0,0,1,.32-.324l1.29-.007a.324.324,0,0,1,.324.321l.017,3.278,4.662-.023-.018-3.507L35.51,41.29l-6.7.034-7.763,10.8.017,3.506,4.664-.025-.017-3.278a.321.321,0,0,1,.32-.324L27.321,52a.322.322,0,0,1,.324.322l.044,8.491a.323.323,0,0,1-.32.324l-1.29.006a.322.322,0,0,1-.324-.32l-.017-3.279-4.662.025.017,3.279a.324.324,0,0,1-.321.324l-1.29.006a.323.323,0,0,1-.324-.32l-.048-9.242a.322.322,0,0,1,.06-.19l8.549-11.9a.326.326,0,0,1,.26-.134l8.342-.043a.32.32,0,0,1,.261.132M23.15,29.831,9.2,25.378a.312.312,0,0,0-.2,0L.222,28.28a.323.323,0,0,0-.2.408l.4,1.224a.322.322,0,0,0,.408.2L3.94,29.088l1.465,4.427L2.292,34.543a.323.323,0,0,0-.2.408l.4,1.224a.324.324,0,0,0,.408.2l8.062-2.666a.322.322,0,0,0,.2-.408l-.4-1.224a.324.324,0,0,0-.408-.2l-3.113,1.03L5.778,28.48l3.328-1.1,12.674,4.045,1.035,3.131,1.067,3.229-7.763,10.8-3.33,1.1-1.463-4.427,3.113-1.029a.323.323,0,0,0,.2-.408L14.239,42.6a.322.322,0,0,0-.406-.2L5.771,45.062a.323.323,0,0,0-.2.408l.4,1.224a.323.323,0,0,0,.408.2l3.113-1.03L10.955,50.3l-3.113,1.03a.322.322,0,0,0-.206.408l.405,1.224a.323.323,0,0,0,.408.2l8.774-2.9a.323.323,0,0,0,.161-.118l8.547-11.9a.319.319,0,0,0,.044-.289l-2.619-7.919a.323.323,0,0,0-.208-.207m17.208-2.18,13.908-4.6a.32.32,0,0,0,.16-.118l5.394-7.505a.323.323,0,0,0-.074-.45L58.7,14.225a.322.322,0,0,0-.45.074l-1.914,2.662L52.55,14.24l1.913-2.662a.322.322,0,0,0-.073-.45l-1.047-.753a.321.321,0,0,0-.45.074l-4.955,6.894a.323.323,0,0,0,.073.451l1.048.753a.323.323,0,0,0,.45-.074l1.913-2.662,3.787,2.721-2.046,2.847L40.531,25.556l-5.441-3.91-.069-13.3L37.067,5.5l3.787,2.721-1.913,2.662a.322.322,0,0,0,.074.45l1.047.753a.322.322,0,0,0,.45-.074l4.956-6.9a.322.322,0,0,0-.074-.45L44.346,3.91a.323.323,0,0,0-.45.074L41.982,6.646,38.2,3.926,40.11,1.263a.323.323,0,0,0-.074-.45L38.989.06a.32.32,0,0,0-.45.074L33.145,7.64a.328.328,0,0,0-.06.19l.076,14.649a.32.32,0,0,0,.134.26l6.774,4.868a.323.323,0,0,0,.289.044m23.419,1.931.392-1.229a.323.323,0,0,0-.209-.405l-8.8-2.81a.325.325,0,0,0-.2,0l-13.908,4.6a.318.318,0,0,0-.206.208l-2.536,7.946a.321.321,0,0,0,.047.288l8.672,11.807a.329.329,0,0,0,.163.116l8.8,2.811A.322.322,0,0,0,56.4,52.7l.392-1.228a.32.32,0,0,0-.208-.405l-3.124-1,1.418-4.442,3.124,1a.323.323,0,0,0,.405-.208l.392-1.229a.323.323,0,0,0-.209-.405L50.5,42.2a.321.321,0,0,0-.4.209L49.7,43.643a.321.321,0,0,0,.209.4l3.123,1-1.417,4.442-3.341-1.066L40.4,37.7l2.037-6.382,12.631-4.177,3.339,1.067-1.417,4.442-3.124-1a.324.324,0,0,0-.405.209l-.392,1.229a.321.321,0,0,0,.209.4l8.088,2.582a.323.323,0,0,0,.405-.208l.393-1.229a.324.324,0,0,0-.209-.405l-3.124-1,1.418-4.442,3.124,1a.324.324,0,0,0,.405-.209m-39.645-1.9,6.716-4.947a.324.324,0,0,0,.132-.262l-.1-14.649a.318.318,0,0,0-.063-.188L25.338.19a.321.321,0,0,0-.451-.069L23.849.886a.323.323,0,0,0-.068.451l1.945,2.64L21.971,6.742,20.026,4.1a.322.322,0,0,0-.451-.068L18.537,4.8a.322.322,0,0,0-.068.451l5.036,6.836a.323.323,0,0,0,.451.068l1.038-.765a.323.323,0,0,0,.069-.451L23.118,8.3l3.755-2.765,2.079,2.823.087,13.3-5.394,3.973L10.967,21.606,8.887,18.783l3.755-2.765,1.944,2.64a.323.323,0,0,0,.451.068l1.038-.765a.324.324,0,0,0,.069-.451l-5.037-6.835a.322.322,0,0,0-.451-.069l-1.038.765a.322.322,0,0,0-.068.451l1.944,2.64L7.74,17.226,5.8,14.586a.323.323,0,0,0-.451-.069l-1.038.765a.323.323,0,0,0-.068.451L9.72,23.174a.316.316,0,0,0,.161.116l13.961,4.436a.324.324,0,0,0,.289-.048"
                        transform="translate(0 0)"
                    />
                    <path
                        className="d-mobile"
                        d="M97.084,22.522H91.635a7.38,7.38,0,0,1-3.8-1.02,7.585,7.585,0,0,1-2.759-2.772,7.686,7.686,0,0,1,0-7.652A7.691,7.691,0,0,1,87.832,8.3a7.462,7.462,0,0,1,6.829-.382,7.609,7.609,0,0,1,2.515,1.808l-.765.718a6.567,6.567,0,0,0-4.777-2.087,6.364,6.364,0,0,0-3.269.882,6.584,6.584,0,0,0-2.388,2.376,6.574,6.574,0,0,0,0,6.574,6.637,6.637,0,0,0,2.388,2.4,6.292,6.292,0,0,0,3.269.893h4.359v-5.4H91.032V15.033h6.052Z"
                        transform="translate(19.483 1.684)"
                    />
                    <path
                        className="d-mobile"
                        d="M108.092,22.487l-6.261-7.605h1.855a7.394,7.394,0,0,0,2.783-.441,3.717,3.717,0,0,0,1.369-1.125,2.654,2.654,0,0,0,.579-1.658,2.734,2.734,0,0,0-.487-1.542,3.6,3.6,0,0,0-1.391-1.194,4.516,4.516,0,0,0-2.087-.464H100.23V22.487H99.187V7.415h5.265a5.8,5.8,0,0,1,1.993.336,4.9,4.9,0,0,1,1.624.962,4.287,4.287,0,0,1,1.032,1.369,3.726,3.726,0,0,1-.406,3.86,4.416,4.416,0,0,1-1.808,1.45,4.77,4.77,0,0,1-1.4.405,12.279,12.279,0,0,1-1.449.081l5.448,6.609Z"
                        transform="translate(22.991 1.719)"
                    />
                    <path
                        className="d-mobile"
                        d="M117.508,22.65a5.523,5.523,0,0,1-2.191-.452,5.726,5.726,0,0,1-1.866-1.287,5.307,5.307,0,0,1-1.24-1.855,5.951,5.951,0,0,1-.43-2.249V7.415h1.043v9.391a4.855,4.855,0,0,0,.36,1.855,4.586,4.586,0,0,0,1.009,1.53,4.708,4.708,0,0,0,1.53,1.032,4.572,4.572,0,0,0,1.786.36,4.622,4.622,0,0,0,1.808-.36,4.713,4.713,0,0,0,1.531-1.032,4.586,4.586,0,0,0,1.009-1.53,4.877,4.877,0,0,0,.358-1.855V7.415h1.045v9.391a5.975,5.975,0,0,1-.43,2.249,5.323,5.323,0,0,1-1.24,1.855,5.759,5.759,0,0,1-1.855,1.287,5.553,5.553,0,0,1-2.226.452"
                        transform="translate(25.91 1.719)"
                    />
                    <path
                        className="d-mobile"
                        d="M125.508,22.487l-.023-15.072h5.379a5.256,5.256,0,0,1,2.446.58A4.733,4.733,0,0,1,135.1,9.548a3.759,3.759,0,0,1,0,4.256,4.7,4.7,0,0,1-1.786,1.564,5.256,5.256,0,0,1-2.446.58h-4.313v6.538Zm1.043-7.629h4.313a4.342,4.342,0,0,0,1.925-.429,3.664,3.664,0,0,0,1.4-1.16,2.678,2.678,0,0,0,.521-1.588,2.711,2.711,0,0,0-.521-1.611,3.664,3.664,0,0,0-1.4-1.16,4.342,4.342,0,0,0-1.925-.429h-4.336Z"
                        transform="translate(29.087 1.719)"
                    />
                    <path
                        className="d-mobile"
                        d="M144.484,22.68a7.434,7.434,0,0,1-3.826-1.032,7.684,7.684,0,0,1-3.8-6.666,7.684,7.684,0,0,1,3.8-6.666,7.606,7.606,0,0,1,7.652,0,7.684,7.684,0,0,1,3.8,6.666,7.684,7.684,0,0,1-3.8,6.666,7.434,7.434,0,0,1-3.826,1.032m0-14.331a6.345,6.345,0,0,0-3.293.893,6.715,6.715,0,0,0-2.4,2.412,6.652,6.652,0,0,0,0,6.654,6.7,6.7,0,0,0,2.4,2.412,6.516,6.516,0,0,0,6.585,0,6.6,6.6,0,0,0,2.388-2.412,6.725,6.725,0,0,0,0-6.654,6.614,6.614,0,0,0-2.388-2.412,6.348,6.348,0,0,0-3.293-.893"
                        transform="translate(31.722 1.688)"
                    />
                    <path
                        className="d-mobile"
                        d="M80.927,26.057h3.846a.5.5,0,0,1,.5.505v1.564a6.58,6.58,0,0,1,5.73-2.587c3.065,0,4.974.994,6.487,3.422a8.017,8.017,0,0,1,7.042-3.422c3.463,0,6.248,1.352,7.64,3.7a12.619,12.619,0,0,1,1.314,6.128V47.6a.5.5,0,0,1-.505.505H108.7a.5.5,0,0,1-.505-.505V36.005c0-2.269-.318-3.5-1.074-4.337a3.9,3.9,0,0,0-3.063-1.274,4.013,4.013,0,0,0-3.78,2.228,10.414,10.414,0,0,0-.676,4.616V47.6a.5.5,0,0,1-.505.505H94.814a.5.5,0,0,1-.505-.505V36.005c0-2.148-.318-3.463-.994-4.3a4.251,4.251,0,0,0-3.263-1.313,3.8,3.8,0,0,0-3.82,2.387,13.04,13.04,0,0,0-.517,4.457V47.6a.5.5,0,0,1-.505.505H80.927a.5.5,0,0,1-.505-.505V26.562a.506.506,0,0,1,.505-.505"
                        transform="translate(18.641 5.92)"
                    />
                    <path
                        className="d-mobile"
                        d="M132.624,48.1H128.78a.5.5,0,0,1-.505-.505v-2.36a8.765,8.765,0,0,1-7.322,3.383c-6.446,0-11.1-4.815-11.1-11.461,0-6.724,4.7-11.618,11.222-11.618a8.194,8.194,0,0,1,7.2,3.461v-2.44a.5.5,0,0,1,.505-.5h3.844a.5.5,0,0,1,.505.5V47.6a.5.5,0,0,1-.505.505M115.183,37.278a6.193,6.193,0,0,0,6.526,6.487c3.82,0,6.407-2.667,6.407-6.606a6.385,6.385,0,0,0-6.565-6.765c-3.7,0-6.367,2.906-6.367,6.885"
                        transform="translate(25.463 5.92)"
                    />
                    <path
                        className="d-mobile"
                        d="M132.743,26.057h3.846a.5.5,0,0,1,.5.505v1.643c1.393-2.069,2.507-2.666,4.776-2.666h.4v5.093c-3.184.08-4.735,1.791-4.735,5.213V47.6a.5.5,0,0,1-.505.505h-4.283a.5.5,0,0,1-.505-.505V26.562a.506.506,0,0,1,.505-.505"
                        transform="translate(30.652 5.92)"
                    />
                    <path
                        className="d-mobile"
                        d="M147.078,39.427c.637,2.666,2.944,4.336,6.088,4.336a5.565,5.565,0,0,0,4.7-2.014.509.509,0,0,1,.378-.174h4.815a.5.5,0,0,1,.468.694,9.992,9.992,0,0,1-1.492,2.37,10.813,10.813,0,0,1-8.754,3.98c-6.791,0-12.041-5.116-11.935-11.654A11.718,11.718,0,0,1,154.106,25.59c5.977.544,10.242,5.364,10.242,11.807a8.525,8.525,0,0,1-.2,2.03Zm12.057-4.656c-.676-2.826-2.825-4.377-6.088-4.377-3.144,0-5.293,1.511-6.128,4.377Z"
                        transform="translate(32.764 5.921)"
                    />
                    <path
                        className="d-mobile"
                        d="M168.181,45.935l-7.8-19.281a.5.5,0,0,1,.468-.694h4.94a.5.5,0,0,1,.477.34l4.778,13.944,5.209-13.956a.505.505,0,0,1,.473-.328H181.7a.5.5,0,0,1,.463.7l-12.3,28.4a.505.505,0,0,1-.463.3h-4.587a.505.505,0,0,1-.462-.708Z"
                        transform="translate(37.168 6.018)"
                    />
                    <path
                        className="d-mobile"
                        d="M71.5,19.983h-4.3L61.793,32.975a.5.5,0,0,0,.466.7h4.62a.5.5,0,0,0,.475-.338l2-5.672L72.5,36.577H63.771a5.219,5.219,0,0,0-4.819,3.213l-3.71,8.9a.5.5,0,0,0,.466.7h4.92a.5.5,0,0,0,.463-.305l3.131-7.295H74.688L77.7,49.077a.5.5,0,0,0,.467.312h4.912a.5.5,0,0,0,.466-.7Z"
                        transform="translate(12.796 4.632)"
                    />
                </g>
            </g>
        </svg>
    )
}

export default January