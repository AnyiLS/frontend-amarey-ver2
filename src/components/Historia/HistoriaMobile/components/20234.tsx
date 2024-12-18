import React from 'react'
import { TimeLine } from '../HistoriaMobile'

const Component20234: React.FC<TimeLine> = ({ onNext, onPrev, t, selectedLanguage }): JSX.Element => {
	return (
		<React.Fragment>
			<svg viewBox="85 0 414 485.06" preserveAspectRatio="none">
      <defs>
      <style>
        {
          ".a-time-line,.l-time-line{fill:#fff;}.b-time-line{fill:#e7002a;stroke:#e7002a;}.c-time-line,.h-time-line,.j-time-line,.n-time-line,.o-time-line{fill:#001f5f;}.c-time-line{stroke:#001f5f;}.d-time-line{opacity:0.5;fill:url(#a-time-line);}.e-time-line{opacity:0.75;fill:url(#b-time-line);}.f-time-line{fill:none;stroke:#fff;stroke-width:3px;opacity:0.6;}.g-time-line{clip-path:url(#c-time-line);}.h-time-line{font-size:12px;font-family:Silka-Regular, Silka;}.i-time-line{fill:url(#d-time-line);}.j-time-line{font-size:19px;}.j-time-line,.l-time-line{font-family:Silka-Bold, Silka;font-weight:700;}.k-time-line{fill:#e40032;}.l-time-line{font-size:13px;}.m-time-line{opacity:0.7;}.o-time-line{font-size:4px;font-family:Silka-SemiBold, Silka;font-weight:600;}.p-time-line{filter:url(#m-time-line);}.q-time-line{filter:url(#k-time-line);}.r-time-line{filter:url(#i-time-line);}.s-time-line{filter:url(#g-time-line);}.t-time-line{filter:url(#e-time-line);}"
        }
      </style>
      <linearGradient
        id="a-time-line"
        x1={0.5}
        x2={0.5}
        y2={0.624}
        gradientUnits="objectBoundingBox"
      >
        <stop offset={0} stopColor="#001f5f" stopOpacity={0} />
        <stop offset={0.085} stopColor="#001f5f" stopOpacity={0.016} />
        <stop offset={1} stopColor="#001f5f" />
      </linearGradient>
      <linearGradient
        id="b-time-line"
        x1={0.5}
        y1={0.053}
        x2={0.5}
        y2={0.376}
        gradientUnits="objectBoundingBox"
      >
        <stop offset={0} stopColor="#001f5f" stopOpacity={0} />
        <stop offset={1} stopColor="#001f5f" />
      </linearGradient>
      <clipPath id="c-time-line">
        <rect className="a-time-line" width={200.87} height={117.544} />
      </clipPath>
      <pattern
        id="d-time-line"
        preserveAspectRatio="xMidYMid slice"
        width="100%"
        height="100%"
        viewBox="0 0 1370 1201"
      >
        <image
          width={1370}
          height={1201}
          xlinkHref="/images/CEDI.webp"
        />
      </pattern>
      <filter
        id="e-time-line"
        x={103.09}
        y={212.248}
        width={175.761}
        height={96.308}
        filterUnits="userSpaceOnUse"
      >
        <feOffset dy={3} />
        <feGaussianBlur stdDeviation={3} result="f" />
        <feFlood floodOpacity={0.502} />
        <feComposite operator="in" in2="f" />
        <feComposite in="SourceGraphic" />
      </filter>
      <filter
        id="g-time-line"
        x={111.826}
        y={266.45}
        width={155.53}
        height={78.401}
        filterUnits="userSpaceOnUse"
      >
        <feOffset dy={-3} />
        <feGaussianBlur stdDeviation={3} result="h" />
        <feFlood floodOpacity={0.2} />
        <feComposite operator="in" in2="h" />
        <feComposite in="SourceGraphic" />
      </filter>
      <filter
        id="i-time-line"
        x={367.09}
        y={375.05}
        width={110.94}
        height={44.836}
        filterUnits="userSpaceOnUse"
      >
        <feOffset dy={3} />
        <feGaussianBlur stdDeviation={3} result="j" />
        <feFlood floodOpacity={0.4} />
        <feComposite operator="in" in2="j" />
        <feComposite in="SourceGraphic" />
      </filter>
      <filter
        id="k-time-line"
        x={113.09}
        y={422.05}
        width={360}
        height={40}
        filterUnits="userSpaceOnUse"
      >
        <feOffset dy={3} />
        <feGaussianBlur stdDeviation={3} result="l" />
        <feFlood floodOpacity={0.4} />
        <feComposite operator="in" in2="l" />
        <feComposite in="SourceGraphic" />
      </filter>
      <filter
        id="m-time-line"
        x={108.15}
        y={375.05}
        width={110.94}
        height={44.836}
        filterUnits="userSpaceOnUse"
      >
        <feOffset dy={3} />
        <feGaussianBlur stdDeviation={3} result="n" />
        <feFlood floodOpacity={0.4} />
        <feComposite operator="in" in2="n" />
        <feComposite in="SourceGraphic" />
      </filter>
    </defs>
    <g transform="translate(0 0.712)">
      <path
        className="b-time-line"
        d="M600.14.02V.562h44.306V.542h44.938a53.34,53.34,0,0,1,49.364,32.9l.016.039,4.36,10.463h.587l-4.463-10.71c-.156-.377-.318-.75-.484-1.122-.528-1.192-1.1-2.361-1.745-3.577A54.028,54.028,0,0,0,689.384,0H615.41V.02Z"
        transform="translate(-586.05 146.413)"
      />
      <path
        className="c-time-line"
        d="M1788.823,802.11l-12.874,4.65q-1.276.459-2.531.946c-21.175,8.136-39.108,21.227-51.988,37.972a99.649,99.649,0,0,0-16.12,30.583,92.329,92.329,0,0,0-4.344,28.012v144.663h1.224V904.273c0-42.35,29.137-80.242,74.23-96.536l.088-.031,12.316-4.449Z"
        transform="translate(-1242.804 -802.11)"
      />
      <g transform="translate(0 50.011)">
        <g transform="translate(25.651 -927.417)">
          <g transform="translate(-25.651 927.417)">
            <path
              className="d-time-line"
              d="M232.6,0,0,435.06H586.18L353.583,0Z"
              transform="translate(0 0)"
            />
            <path
              className="e-time-line"
              d="M619.38,0,497.566,435.06h306.99L682.742,0Z"
              transform="translate(-357.971 0)"
            />
          </g>
          <line
            className="f-time-line"
            x2={435.152}
            transform="translate(49.862 1217.808)"
          />
          <path
            className="f-time-line"
            d="M0,0H266.206"
            transform="translate(143.335 1041.465)"
          />
        </g>
        <g className="g-time-line" transform="translate(273.024 162.321)">
          <path
            className="a-time-line"
            d="M187.919,117.544H12.955C5,117.544-1.077,109.123.161,99.809L11.7,12.961C12.694,5.5,18.121,0,24.5,0H187.919c7.153,0,12.951,6.872,12.951,15.348V102.2c0,8.476-5.8,15.348-12.951,15.348"
            transform="translate(0)"
          />
        </g>
        <text className="h-time-line" transform={selectedLanguage === 'es' ? "translate(293.09 172.093)" : "translate(293.09 177.093)"}>
          <tspan x={0} y={11}>
            {t("Se inaugura el Centro de ")}
          </tspan>
          <tspan x={0} y={25}>
            {t("Distribución Logística – CEDI ")}
          </tspan>
          <tspan x={0} y={39}>
            {t("en la zona industrial de ")}
          </tspan>
          <tspan x={0} y={53}>
            {t("Montevideo en Bogotá, con ")}
          </tspan>
          <tspan x={0} y={67}>
            {t("el objetivo de lograr mejores ")}
          </tspan>
          <tspan x={0} y={81}>
            {t("niveles de servicio logístico ")}
          </tspan>
          <tspan x={0} y={95}>
            {t("para los clientes.")}
          </tspan>
        </text>
        <g transform="translate(112.09 167.525)">
          <g className="t-time-line" transform="matrix(1, 0, 0, 1, -112.09, -218.25)">
            <path
              className="i-time-line"
              d="M157.706,9.579,146.267,78.308H38.822c-17.344,0-27.871-12.55-30.085-18.105L.06,9.611C-.482,4.521,2.726,0,6.877,0H150.884c4.142,0,7.341,4.5,6.822,9.579"
              transform="translate(112.09 218.25)"
            />
          </g>
          <g className="s-time-line" transform="matrix(1, 0, 0, 1, -112.09, -218.25)">
            <path
              className="a-time-line"
              d="M49.257,150.215c-17.344,0-27.871-12.55-30.085-18.105l6.862,40c.447,4.238,3.363,7.405,6.817,7.405H80.689l3.232,5.6,3.712,6.429a1.943,1.943,0,0,0,3.365,0l3.712-6.429,3.232-5.6h48.3c3.463,0,6.384-3.185,6.822-7.437l3.637-21.86Z"
              transform="translate(101.65 146.34)"
            />
          </g>
          <text className="j-time-line" transform="translate(55.859 99.877)">
            <tspan x={0} y={0}>
              {"2023"}
            </tspan>
          </text>
        </g>
        <g transform="translate(376.09 330.327)" onClick={onNext}>
          <g className="r-time-line" transform="matrix(1, 0, 0, 1, -376.09, -381.05)">
            <path
              className="k-time-line"
              d="M92.94,0H19.063C11.379,0,4.48,7.831,1.674,19.735L0,26.836H73.264c8.186,0,15.516-8.442,18.4-21.193Z"
              transform="translate(376.09 381.05)"
            />
          </g>
          <path
            className="a-time-line"
            d="M45.263,0V8.1l7.022-4.052L48.931,2.116Z"
            transform="translate(28.093 9.367)"
          />
          <text className="l-time-line" transform="translate(16.928 16.788)">
            <tspan x={0} y={0}>
              {t("Avanzar")}
            </tspan>
          </text>
        </g>
        <g transform="translate(-31.179 -682.753)">
          <g className="q-time-line" transform="matrix(1, 0, 0, 1, 31.18, 632.03)">
            <rect
              className="a-time-line"
              width={342}
              height={22}
              rx={11}
              transform="translate(122.09 428.05)"
            />
          </g>
          <g className="m-time-line" transform="translate(167.022 1070.963)">
            <path
              className="n-time-line"
              d="M1.206,3.918h0C.54,3.918,0,3.716,0,3.468V.45C0,.2.54,0,1.206,0S2.413.2,2.413.45V3.468c0,.249-.54.45-1.206.45"
              transform="translate(-0.753 0)"
            />
            <path
              className="n-time-line"
              d="M0,15.579H0a1.1,1.1,0,0,1,.95-1.206h314a1.1,1.1,0,0,1,.95,1.206,1.1,1.1,0,0,1-.95,1.206H.95A1.1,1.1,0,0,1,0,15.579"
              transform="translate(0 -12.868)"
            />
            <path
              className="n-time-line"
              d="M80.069,3.918h0c-.666,0-1.206-.2-1.206-.45V.45c0-.249.54-.45,1.206-.45s1.206.2,1.206.45V3.468c0,.249-.54.45-1.206.45"
              transform="translate(-59.616 0)"
            />
            <path
              className="n-time-line"
              d="M158.932,3.918h0c-.666,0-1.206-.2-1.206-.45V.45c0-.249.54-.45,1.206-.45s1.206.2,1.206.45V3.468c0,.249-.54.45-1.206.45"
              transform="translate(-118.479 0)"
            />
            <path
              className="n-time-line"
              d="M237.8,3.918h0c-.666,0-1.206-.2-1.206-.45V.45c0-.249.54-.45,1.206-.45S239,.2,239,.45V3.468c0,.249-.54.45-1.206.45"
              transform="translate(-177.342 0)"
            />
            <path
              className="n-time-line"
              d="M316.658,3.918h0c-.666,0-1.206-.2-1.206-.45V.45c0-.249.54-.45,1.206-.45s1.206.2,1.206.45V3.468c0,.249-.54.45-1.206.45"
              transform="translate(-237.205 0)"
            />
            <path
              className="n-time-line"
              d="M395.52,3.918h0c-.666,0-1.206-.2-1.206-.45V.45c0-.249.54-.45,1.206-.45s1.206.2,1.206.45V3.468c0,.249-.54.45-1.206.45"
              transform="translate(-296.067 0)"
            />
            <path
              className="n-time-line"
              d="M474.383,3.918h0c-.666,0-1.206-.2-1.206-.45V.45c0-.249.54-.45,1.206-.45s1.206.2,1.206.45V3.468c0,.249-.54.45-1.206.45"
              transform="translate(-354.93 0)"
            />
            <path
              className="n-time-line"
              d="M553.246,3.918h0c-.666,0-1.206-.2-1.206-.45V.45c0-.249.54-.45,1.206-.45s1.206.2,1.206.45V3.468c0,.249-.54.45-1.206.45"
              transform="translate(-414.793 0)"
            />
            <path
              className="n-time-line"
              d="M632.109,3.918h0c-.666,0-1.206-.2-1.206-.45V.45c0-.249.54-.45,1.206-.45s1.206.2,1.206.45V3.468c0,.249-.54.45-1.206.45"
              transform="translate(-473.656 0)"
            />
            <path
              className="n-time-line"
              d="M710.972,3.918h0c-.666,0-1.206-.2-1.206-.45V.45c0-.249.54-.45,1.206-.45s1.206.2,1.206.45V3.468c0,.249-.54.45-1.206.45"
              transform="translate(-532.52 0)"
            />
            <path
              className="n-time-line"
              d="M789.835,3.918h0c-.667,0-1.206-.2-1.206-.45V.45c0-.249.54-.45,1.206-.45s1.206.2,1.206.45V3.468c0,.249-.54.45-1.206.45"
              transform="translate(-592.382 0)"
            />
            <path
              className="n-time-line"
              d="M868.7,3.918h0c-.666,0-1.206-.2-1.206-.45V.45c0-.249.54-.45,1.206-.45S869.9.2,869.9.45V3.468c0,.249-.54.45-1.206.45"
              transform="translate(-651.244 0)"
            />
            <path
              className="n-time-line"
              d="M947.56,3.918h0c-.667,0-1.206-.2-1.206-.45V.45c0-.249.54-.45,1.206-.45s1.206.2,1.206.45V3.468c0,.249-.54.45-1.206.45"
              transform="translate(-710.107 0)"
            />
            <path
              className="n-time-line"
              d="M1026.423,3.918h0c-.667,0-1.206-.2-1.206-.45V.45c0-.249.54-.45,1.206-.45s1.206.2,1.206.45V3.468c0,.249-.54.45-1.206.45"
              transform="translate(-769.97 0)"
            />
            <path
              className="n-time-line"
              d="M1105.286,3.918h0c-.667,0-1.206-.2-1.206-.45V.45c0-.249.54-.45,1.206-.45s1.206.2,1.206.45V3.468c0,.249-.54.45-1.206.45"
              transform="translate(-828.834 0)"
            />
            <path
              className="n-time-line"
              d="M1184.149,3.918h0c-.666,0-1.206-.2-1.206-.45V.45c0-.249.54-.45,1.206-.45s1.206.2,1.206.45V3.468c0,.249-.54.45-1.206.45"
              transform="translate(-887.696 0)"
            />
            <path
              className="n-time-line"
              d="M1263.011,3.918h0c-.666,0-1.206-.2-1.206-.45V.45c0-.249.54-.45,1.206-.45s1.206.2,1.206.45V3.468c0,.249-.54.45-1.206.45"
              transform="translate(-947.558 0)"
            />
          </g>
          <path
            className="k-time-line"
            d="M5.8,6.262,7.169,8.135a.052.052,0,0,1,.01.03l.008,1.466a.051.051,0,0,1-.051.051h-.2a.051.051,0,0,1-.051-.051l0-.52-.739,0,0,.52a.051.051,0,0,1-.051.051h-.2a.051.051,0,0,1-.051-.051L5.828,8.291a.051.051,0,0,1,.051-.051h.2a.051.051,0,0,1,.051.051l0,.52.739,0,0-.556-1.248-1.7-1.061.005L3.334,8.268l0,.556.739,0,0-.52a.051.051,0,0,1,.051-.051h.2a.051.051,0,0,1,.051.051l.007,1.347a.051.051,0,0,1-.051.051h-.2a.051.051,0,0,1-.051-.051l0-.52-.739,0,0,.52a.051.051,0,0,1-.051.051h-.2a.051.051,0,0,1-.051-.051L3.027,8.186a.051.051,0,0,1,.01-.03L4.391,6.269a.052.052,0,0,1,.041-.021l1.321-.007a.051.051,0,0,1,.041.021M3.667,4.731,1.457,4.025a.049.049,0,0,0-.031,0l-1.39.46A.051.051,0,0,0,0,4.55l.064.194a.051.051,0,0,0,.065.032l.493-.163.232.7-.493.163a.051.051,0,0,0-.032.065l.064.194a.051.051,0,0,0,.065.032l1.277-.423a.051.051,0,0,0,.032-.065L1.7,5.088a.051.051,0,0,0-.065-.032l-.493.163-.232-.7.527-.175,2.008.642.164.5.169.512L2.554,7.706l-.527.174-.232-.7.493-.163a.051.051,0,0,0,.032-.065l-.064-.194a.051.051,0,0,0-.064-.032L.914,7.147a.051.051,0,0,0-.032.065l.064.194a.051.051,0,0,0,.065.032L1.5,7.275l.232.7-.493.163a.051.051,0,0,0-.033.065l.064.194a.051.051,0,0,0,.065.032l1.39-.46a.051.051,0,0,0,.026-.019L4.108,6.066a.051.051,0,0,0,.007-.046L3.7,4.764a.051.051,0,0,0-.033-.033m2.726-.346,2.2-.73a.051.051,0,0,0,.025-.019l.855-1.19a.051.051,0,0,0-.012-.071L9.3,2.256a.051.051,0,0,0-.071.012l-.3.422-.6-.432.3-.422a.051.051,0,0,0-.012-.071L8.45,1.646a.051.051,0,0,0-.071.012L7.594,2.751a.051.051,0,0,0,.012.072l.166.119a.051.051,0,0,0,.071-.012l.3-.422.6.432-.324.451-2,.662-.862-.62-.011-2.11L5.872.872l.6.432-.3.422a.051.051,0,0,0,.012.071l.166.119A.051.051,0,0,0,6.418,1.9L7.2.811A.051.051,0,0,0,7.191.74L7.025.62a.051.051,0,0,0-.071.012l-.3.422-.6-.431L6.354.2A.051.051,0,0,0,6.342.129L6.176.01a.051.051,0,0,0-.071.012l-.855,1.19a.052.052,0,0,0-.01.03l.012,2.323a.051.051,0,0,0,.021.041l1.073.772a.051.051,0,0,0,.046.007m3.71.306.062-.195a.051.051,0,0,0-.033-.064L8.738,3.987a.051.051,0,0,0-.032,0l-2.2.73a.05.05,0,0,0-.033.033l-.4,1.26a.051.051,0,0,0,.007.046L7.45,7.928a.052.052,0,0,0,.026.018l1.395.446a.051.051,0,0,0,.064-.033L9,8.165A.051.051,0,0,0,8.963,8.1l-.495-.158.225-.7.495.158a.051.051,0,0,0,.064-.033l.062-.195A.051.051,0,0,0,9.281,7.1L8,6.694a.051.051,0,0,0-.064.033l-.062.195a.051.051,0,0,0,.033.064l.495.158-.224.7L7.647,7.68,6.4,5.979l.323-1.012,2-.662.529.169-.224.7L8.533,5.02a.051.051,0,0,0-.064.033l-.062.195a.051.051,0,0,0,.033.064l1.281.409a.051.051,0,0,0,.064-.033l.062-.195a.051.051,0,0,0-.033-.064L9.32,5.271l.225-.7.495.158a.051.051,0,0,0,.064-.033m-6.281-.3,1.064-.785a.051.051,0,0,0,.021-.042L4.892,1.24a.05.05,0,0,0-.01-.03L4.014.03A.051.051,0,0,0,3.942.019L3.778.141a.051.051,0,0,0-.011.072l.308.419-.595.439L3.172.651A.051.051,0,0,0,3.1.64L2.937.761a.051.051,0,0,0-.011.072l.8,1.084a.051.051,0,0,0,.071.011l.165-.121a.051.051,0,0,0,.011-.072l-.308-.419L4.257.878l.329.448L4.6,3.435l-.855.63L1.737,3.427l-.329-.448L2,2.54l.308.419a.051.051,0,0,0,.071.011l.165-.121a.051.051,0,0,0,.011-.072l-.8-1.084a.051.051,0,0,0-.071-.011L1.524,1.8a.051.051,0,0,0-.011.072l.308.419-.595.439L.918,2.313A.051.051,0,0,0,.847,2.3l-.165.121A.051.051,0,0,0,.671,2.5l.868,1.18a.05.05,0,0,0,.026.018l2.212.7a.051.051,0,0,0,.046-.008"
            transform="translate(477.513 1061.26)"
          />
          <text className="o-time-line" transform="translate(162.269 1079.08)">
            <tspan x={0} y={0}>
              {"1984"}
            </tspan>
          </text>
          <text className="o-time-line" transform="translate(182.269 1079.08)">
            <tspan x={0} y={0}>
              {"1999"}
            </tspan>
          </text>
          <text className="o-time-line" transform="translate(201.269 1079.08)">
            <tspan x={0} y={0}>
              {"2000"}
            </tspan>
          </text>
          <text className="o-time-line" transform="translate(222.269 1079.08)">
            <tspan x={0} y={0}>
              {"2007"}
            </tspan>
          </text>
          <text className="o-time-line" transform="translate(241.269 1079.08)">
            <tspan x={0} y={0}>
              {"2009"}
            </tspan>
          </text>
          <text className="o-time-line" transform="translate(262.269 1079.08)">
            <tspan x={0} y={0}>
              {"2011"}
            </tspan>
          </text>
          <text className="o-time-line" transform="translate(280.269 1079.08)">
            <tspan x={0} y={0}>
              {"2011"}
            </tspan>
          </text>
          <text className="o-time-line" transform="translate(299.269 1079.08)">
            <tspan x={0} y={0}>
              {"2012"}
            </tspan>
          </text>
          <text className="o-time-line" transform="translate(318.269 1079.08)">
            <tspan x={0} y={0}>
              {"2012"}
            </tspan>
          </text>
          <text className="o-time-line" transform="translate(338.269 1079.08)">
            <tspan x={0} y={0}>
              {"2014"}
            </tspan>
          </text>
          <text className="o-time-line" transform="translate(357.269 1079.08)">
            <tspan x={0} y={0}>
              {"2014"}
            </tspan>
          </text>
          <text className="o-time-line" transform="translate(377.269 1079.08)">
            <tspan x={0} y={0}>
              {"2016"}
            </tspan>
          </text>
          <text className="o-time-line" transform="translate(397.269 1079.08)">
            <tspan x={0} y={0}>
              {"2017"}
            </tspan>
          </text>
          <text className="o-time-line" transform="translate(416.269 1079.08)">
            <tspan x={0} y={0}>
              {"2023"}
            </tspan>
          </text>
          <text className="o-time-line" transform="translate(437.269 1079.08)">
            <tspan x={0} y={0}>
              {"2023"}
            </tspan>
          </text>
          <text className="o-time-line" transform="translate(457.269 1079.08)">
            <tspan x={0} y={0}>
              {"2023"}
            </tspan>
          </text>
          <text className="o-time-line" transform="translate(478.269 1079.08)">
            <tspan x={0} y={0}>
              {"2023"}
            </tspan>
          </text>
        </g>
        <g transform="translate(117.15 330.327)" onClick={onPrev}>
          <g className="p-time-line" transform="matrix(1, 0, 0, 1, -117.15, -381.05)">
            <path
              className="k-time-line"
              d="M0,0H73.877c7.684,0,14.584,7.831,17.39,19.735l1.674,7.1H19.676c-8.186,0-15.516-8.442-18.4-21.193Z"
              transform="translate(117.15 381.05)"
            />
          </g>
          <path
            className="a-time-line"
            d="M52.285,0V8.1L45.263,4.051l3.354-1.935Z"
            transform="translate(-34.361 9.367)"
          />
          <text className="l-time-line" transform="translate(21.907 16.788)">
            <tspan x={0} y={0}>
              {t("Regresar")}
            </tspan>
          </text>
        </g>
      </g>
    </g>
			</svg>
		</React.Fragment>
	)
}

export default Component20234
