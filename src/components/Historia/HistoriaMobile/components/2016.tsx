import React from 'react'
import { TimeLine } from '../HistoriaMobile'

const Component2016: React.FC<TimeLine> = ({ onNext, onPrev, t }): JSX.Element => {
	return (
		<React.Fragment>
			<svg viewBox="85 0 414 485.06" preserveAspectRatio="none">
      <defs>
      <style>
        {
          ".a-time-line,.o-time-line{fill:#fff;}.b-time-line{fill:#e7002a;stroke:#e7002a;}.c-time-line,.i-time-line,.k-time-line,.m-time-line,.q-time-line,.r-time-line{fill:#001f5f;}.c-time-line{stroke:#001f5f;}.d-time-line{opacity:0.5;fill:url(#a-time-line);}.e-time-line{opacity:0.75;fill:url(#b-time-line);}.f-time-line{fill:none;stroke:#fff;stroke-width:3px;}.f-time-line,.g-time-line{opacity:0.6;}.h-time-line{fill:url(#c-time-line);}.i-time-line{font-size:10px;}.i-time-line,.m-time-line,.o-time-line{font-family:Silka-Bold, Silka;font-weight:700;}.j-time-line{clip-path:url(#h-time-line);}.k-time-line{font-size:12px;font-family:Silka-Regular, Silka;}.l-time-line{fill:url(#i-time-line);}.m-time-line{font-size:19px;}.n-time-line{fill:#e40032;}.o-time-line{font-size:13px;}.p-time-line{opacity:0.7;}.r-time-line{font-size:4px;font-family:Silka-SemiBold, Silka;font-weight:600;}.s-time-line{filter:url(#r-time-line);}.t-time-line{filter:url(#p-time-line);}.u-time-line{filter:url(#n-time-line);}.v-time-line{filter:url(#l-time-line);}.w-time-line{filter:url(#j-time-line);}.x-time-line{filter:url(#f-time-line);}.y-time-line{filter:url(#d-time-line);}"
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
      <pattern id="c-time-line" width={1} height={1} viewBox="4.766 18.901 90.805 45.073">
        <image
          preserveAspectRatio="xMidYMid slice"
          width={100.337}
          height={66.976}
          xlinkHref="/images/history/liquido.jpg"
        />
      </pattern>
      <filter
        id="d-time-line"
        x={179.222}
        y={81.595}
        width={118.337}
        height={67.804}
        filterUnits="userSpaceOnUse"
      >
        <feOffset dy={3} />
        <feGaussianBlur stdDeviation={3} result="e" />
        <feFlood floodOpacity={0.502} />
        <feComposite operator="in" in2="e" />
        <feComposite in="SourceGraphic" />
      </filter>
      <filter
        id="f-time-line"
        x={186.532}
        y={119.884}
        width={105.47}
        height={56.416}
        filterUnits="userSpaceOnUse"
      >
        <feOffset dy={3} />
        <feGaussianBlur stdDeviation={3} result="g" />
        <feFlood floodOpacity={0.502} />
        <feComposite operator="in" in2="g" />
        <feComposite in="SourceGraphic" />
      </filter>
      <clipPath id="h-time-line">
        <rect className="a-time-line" width={196.535} height={117.544} />
      </clipPath>
      <pattern
        id="i-time-line"
        width={1}
        height={1}
        viewBox="6.034 20.298 145.692 72.317"
      >
        <image
          preserveAspectRatio="xMidYMid slice"
          width={157.761}
          height={112.914}
          xlinkHref="/images/mobile/history/2016-2.webp"
        />
      </pattern>
      <filter
        id="j-time-line"
        x={302.798}
        y={212.248}
        width={175.761}
        height={96.308}
        filterUnits="userSpaceOnUse"
      >
        <feOffset dy={3} />
        <feGaussianBlur stdDeviation={3} result="k" />
        <feFlood floodOpacity={0.502} />
        <feComposite operator="in" in2="k" />
        <feComposite in="SourceGraphic" />
      </filter>
      <filter
        id="l-time-line"
        x={314.292}
        y={266.45}
        width={155.53}
        height={78.401}
        filterUnits="userSpaceOnUse"
      >
        <feOffset dy={-3} />
        <feGaussianBlur stdDeviation={3} result="m" />
        <feFlood floodOpacity={0.2} />
        <feComposite operator="in" in2="m" />
        <feComposite in="SourceGraphic" />
      </filter>
      <filter
        id="n-time-line"
        x={367.09}
        y={375.05}
        width={110.94}
        height={44.836}
        filterUnits="userSpaceOnUse"
      >
        <feOffset dy={3} />
        <feGaussianBlur stdDeviation={3} result="o" />
        <feFlood floodOpacity={0.4} />
        <feComposite operator="in" in2="o" />
        <feComposite in="SourceGraphic" />
      </filter>
      <filter
        id="p-time-line"
        x={113.09}
        y={422.05}
        width={360}
        height={40}
        filterUnits="userSpaceOnUse"
      >
        <feOffset dy={3} />
        <feGaussianBlur stdDeviation={3} result="q" />
        <feFlood floodOpacity={0.4} />
        <feComposite operator="in" in2="q" />
        <feComposite in="SourceGraphic" />
      </filter>
      <filter
        id="r-time-line"
        x={108.15}
        y={375.05}
        width={110.94}
        height={44.836}
        filterUnits="userSpaceOnUse"
      >
        <feOffset dy={3} />
        <feGaussianBlur stdDeviation={3} result="s" />
        <feFlood floodOpacity={0.4} />
        <feComposite operator="in" in2="s" />
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
        <g className="g-time-line" transform="translate(188.222 36.872)">
          <g className="y-time-line" transform="matrix(1, 0, 0, 1, -188.22, -87.59)">
            <path
              className="h-time-line"
              d="M.036,6.092,7.311,49.8H75.647c11.031,0,17.726-7.982,19.134-11.515L100.3,6.113C100.645,2.875,98.6,0,95.964,0H4.374C1.74,0-.295,2.861.036,6.092"
              transform="translate(188.22 87.59)"
            />
          </g>
          <g className="x-time-line" transform="matrix(1, 0, 0, 1, -188.22, -87.59)">
            <path
              className="a-time-line"
              d="M87.508,143.625c11.031,0,17.726-7.982,19.134-11.515l-4.365,25.438c-.284,2.7-2.139,4.71-4.336,4.71H67.517l-2.056,3.561L63.1,169.908a1.236,1.236,0,0,1-2.14,0L58.6,165.819l-2.056-3.561H25.824c-2.2,0-4.061-2.026-4.339-4.73l-2.313-13.9Z"
              transform="translate(176.36 -6.23)"
            />
          </g>
          <text className="i-time-line" transform="translate(38.818 61.872)">
            <tspan x={0} y={0}>
              {"2017"}
            </tspan>
          </text>
        </g>
        <g className="j-time-line" transform="translate(112.09 162.321)">
          <path
            className="a-time-line"
            d="M12.672,117.544H183.86c7.785,0,13.729-8.422,12.518-17.735L185.086,12.961C184.116,5.5,178.806,0,172.568,0H12.672C5.674,0,0,6.872,0,15.348V102.2c0,8.476,5.673,15.348,12.672,15.348"
            transform="translate(0)"
          />
        </g>
        <text className="k-time-line" transform="translate(138.857 186.093)">
          <tspan x={0} y={11}>
            {t("Los Premios Portafolio ")}
          </tspan>
          <tspan x={0} y={25}>
            {t("otorgan la Mención de ")}
          </tspan>
          <tspan x={0} y={39}>
            {t("Honor a Amarey Nova ")}
          </tspan>
          <tspan x={0} y={53}>
            {t("Medical en la categoría ")}
          </tspan>
          <tspan x={0} y={67}>
            {t("de Servicio al cliente. ")}
          </tspan>
        </text>
        <g transform="translate(311.798 167.525)">
          <g className="w-time-line" transform="matrix(1, 0, 0, 1, -311.8, -218.25)">
            <path
              className="l-time-line"
              d="M.056,9.579,11.494,78.308H118.94c17.344,0,27.871-12.55,30.085-18.105L157.7,9.611C158.244,4.521,155.035,0,150.884,0H6.878C2.736,0-.463,4.5.056,9.579"
              transform="translate(311.8 218.25)"
            />
          </g>
          <g className="v-time-line" transform="matrix(1, 0, 0, 1, -311.8, -218.25)">
            <path
              className="a-time-line"
              d="M126.617,150.215c17.344,0,27.871-12.55,30.085-18.105l-6.862,40c-.447,4.238-3.363,7.405-6.817,7.405H95.186l-3.232,5.6-3.712,6.429a1.943,1.943,0,0,1-3.365,0l-3.712-6.429-3.232-5.6H29.63c-3.463,0-6.384-3.185-6.822-7.437l-3.637-21.86Z"
              transform="translate(304.12 146.34)"
            />
          </g>
          <text className="m-time-line" transform="translate(57.902 99.877)">
            <tspan x={0} y={0}>
              {"2016"}
            </tspan>
          </text>
        </g>
        <g transform="translate(376.09 330.327)" onClick={onNext}>
          <g className="u-time-line" transform="matrix(1, 0, 0, 1, -376.09, -381.05)">
            <path
              className="n-time-line"
              d="M92.94,0H19.063C11.379,0,4.48,7.831,1.674,19.735L0,26.836H73.264c8.186,0,15.516-8.442,18.4-21.193Z"
              transform="translate(376.09 381.05)"
            />
          </g>
          <path
            className="a-time-line"
            d="M45.263,0V8.1l7.022-4.052L48.931,2.116Z"
            transform="translate(28.093 9.367)"
          />
          <text className="o-time-line" transform="translate(16.928 16.788)">
            <tspan x={0} y={0}>
              {t("Avanzar")}
            </tspan>
          </text>
        </g>
        <g transform="translate(-31.179 -682.753)">
          <g className="t-time-line" transform="matrix(1, 0, 0, 1, 31.18, 632.03)">
            <rect
              className="a-time-line"
              width={342}
              height={22}
              rx={11}
              transform="translate(122.09 428.05)"
            />
          </g>
          <g className="p-time-line" transform="translate(167.022 1070.963)">
            <path
              className="q-time-line"
              d="M1.206,3.918h0C.54,3.918,0,3.716,0,3.468V.45C0,.2.54,0,1.206,0S2.413.2,2.413.45V3.468c0,.249-.54.45-1.206.45"
              transform="translate(-0.753 0)"
            />
            <path
              className="q-time-line"
              d="M0,15.579H0a1.1,1.1,0,0,1,.95-1.206h314a1.1,1.1,0,0,1,.95,1.206,1.1,1.1,0,0,1-.95,1.206H.95A1.1,1.1,0,0,1,0,15.579"
              transform="translate(0 -12.868)"
            />
            <path
              className="q-time-line"
              d="M80.069,3.918h0c-.666,0-1.206-.2-1.206-.45V.45c0-.249.54-.45,1.206-.45s1.206.2,1.206.45V3.468c0,.249-.54.45-1.206.45"
              transform="translate(-59.616 0)"
            />
            <path
              className="q-time-line"
              d="M158.932,3.918h0c-.666,0-1.206-.2-1.206-.45V.45c0-.249.54-.45,1.206-.45s1.206.2,1.206.45V3.468c0,.249-.54.45-1.206.45"
              transform="translate(-118.479 0)"
            />
            <path
              className="q-time-line"
              d="M237.8,3.918h0c-.666,0-1.206-.2-1.206-.45V.45c0-.249.54-.45,1.206-.45S239,.2,239,.45V3.468c0,.249-.54.45-1.206.45"
              transform="translate(-177.342 0)"
            />
            <path
              className="q-time-line"
              d="M316.658,3.918h0c-.666,0-1.206-.2-1.206-.45V.45c0-.249.54-.45,1.206-.45s1.206.2,1.206.45V3.468c0,.249-.54.45-1.206.45"
              transform="translate(-237.205 0)"
            />
            <path
              className="q-time-line"
              d="M395.52,3.918h0c-.666,0-1.206-.2-1.206-.45V.45c0-.249.54-.45,1.206-.45s1.206.2,1.206.45V3.468c0,.249-.54.45-1.206.45"
              transform="translate(-296.067 0)"
            />
            <path
              className="q-time-line"
              d="M474.383,3.918h0c-.666,0-1.206-.2-1.206-.45V.45c0-.249.54-.45,1.206-.45s1.206.2,1.206.45V3.468c0,.249-.54.45-1.206.45"
              transform="translate(-354.93 0)"
            />
            <path
              className="q-time-line"
              d="M553.246,3.918h0c-.666,0-1.206-.2-1.206-.45V.45c0-.249.54-.45,1.206-.45s1.206.2,1.206.45V3.468c0,.249-.54.45-1.206.45"
              transform="translate(-414.793 0)"
            />
            <path
              className="q-time-line"
              d="M632.109,3.918h0c-.666,0-1.206-.2-1.206-.45V.45c0-.249.54-.45,1.206-.45s1.206.2,1.206.45V3.468c0,.249-.54.45-1.206.45"
              transform="translate(-473.656 0)"
            />
            <path
              className="q-time-line"
              d="M710.972,3.918h0c-.666,0-1.206-.2-1.206-.45V.45c0-.249.54-.45,1.206-.45s1.206.2,1.206.45V3.468c0,.249-.54.45-1.206.45"
              transform="translate(-532.52 0)"
            />
            <path
              className="q-time-line"
              d="M789.835,3.918h0c-.667,0-1.206-.2-1.206-.45V.45c0-.249.54-.45,1.206-.45s1.206.2,1.206.45V3.468c0,.249-.54.45-1.206.45"
              transform="translate(-592.382 0)"
            />
            <path
              className="q-time-line"
              d="M868.7,3.918h0c-.666,0-1.206-.2-1.206-.45V.45c0-.249.54-.45,1.206-.45S869.9.2,869.9.45V3.468c0,.249-.54.45-1.206.45"
              transform="translate(-651.244 0)"
            />
            <path
              className="q-time-line"
              d="M947.56,3.918h0c-.667,0-1.206-.2-1.206-.45V.45c0-.249.54-.45,1.206-.45s1.206.2,1.206.45V3.468c0,.249-.54.45-1.206.45"
              transform="translate(-710.107 0)"
            />
            <path
              className="q-time-line"
              d="M1026.423,3.918h0c-.667,0-1.206-.2-1.206-.45V.45c0-.249.54-.45,1.206-.45s1.206.2,1.206.45V3.468c0,.249-.54.45-1.206.45"
              transform="translate(-769.97 0)"
            />
            <path
              className="q-time-line"
              d="M1105.286,3.918h0c-.667,0-1.206-.2-1.206-.45V.45c0-.249.54-.45,1.206-.45s1.206.2,1.206.45V3.468c0,.249-.54.45-1.206.45"
              transform="translate(-828.834 0)"
            />
            <path
              className="q-time-line"
              d="M1184.149,3.918h0c-.666,0-1.206-.2-1.206-.45V.45c0-.249.54-.45,1.206-.45s1.206.2,1.206.45V3.468c0,.249-.54.45-1.206.45"
              transform="translate(-887.696 0)"
            />
            <path
              className="q-time-line"
              d="M1263.011,3.918h0c-.666,0-1.206-.2-1.206-.45V.45c0-.249.54-.45,1.206-.45s1.206.2,1.206.45V3.468c0,.249-.54.45-1.206.45"
              transform="translate(-947.558 0)"
            />
          </g>
          <path
            className="n-time-line"
            d="M5.8,6.262,7.169,8.135a.052.052,0,0,1,.01.03l.008,1.466a.051.051,0,0,1-.051.051h-.2a.051.051,0,0,1-.051-.051l0-.52-.739,0,0,.52a.051.051,0,0,1-.051.051h-.2a.051.051,0,0,1-.051-.051L5.828,8.291a.051.051,0,0,1,.051-.051h.2a.051.051,0,0,1,.051.051l0,.52.739,0,0-.556-1.248-1.7-1.061.005L3.334,8.268l0,.556.739,0,0-.52a.051.051,0,0,1,.051-.051h.2a.051.051,0,0,1,.051.051l.007,1.347a.051.051,0,0,1-.051.051h-.2a.051.051,0,0,1-.051-.051l0-.52-.739,0,0,.52a.051.051,0,0,1-.051.051h-.2a.051.051,0,0,1-.051-.051L3.027,8.186a.051.051,0,0,1,.01-.03L4.391,6.269a.052.052,0,0,1,.041-.021l1.321-.007a.051.051,0,0,1,.041.021M3.667,4.731,1.457,4.025a.049.049,0,0,0-.031,0l-1.39.46A.051.051,0,0,0,0,4.55l.064.194a.051.051,0,0,0,.065.032l.493-.163.232.7-.493.163a.051.051,0,0,0-.032.065l.064.194a.051.051,0,0,0,.065.032l1.277-.423a.051.051,0,0,0,.032-.065L1.7,5.088a.051.051,0,0,0-.065-.032l-.493.163-.232-.7.527-.175,2.008.642.164.5.169.512L2.554,7.706l-.527.174-.232-.7.493-.163a.051.051,0,0,0,.032-.065l-.064-.194a.051.051,0,0,0-.064-.032L.914,7.147a.051.051,0,0,0-.032.065l.064.194a.051.051,0,0,0,.065.032L1.5,7.275l.232.7-.493.163a.051.051,0,0,0-.033.065l.064.194a.051.051,0,0,0,.065.032l1.39-.46a.051.051,0,0,0,.026-.019L4.108,6.066a.051.051,0,0,0,.007-.046L3.7,4.764a.051.051,0,0,0-.033-.033m2.726-.346,2.2-.73a.051.051,0,0,0,.025-.019l.855-1.19a.051.051,0,0,0-.012-.071L9.3,2.256a.051.051,0,0,0-.071.012l-.3.422-.6-.432.3-.422a.051.051,0,0,0-.012-.071L8.45,1.646a.051.051,0,0,0-.071.012L7.594,2.751a.051.051,0,0,0,.012.072l.166.119a.051.051,0,0,0,.071-.012l.3-.422.6.432-.324.451-2,.662-.862-.62-.011-2.11L5.872.872l.6.432-.3.422a.051.051,0,0,0,.012.071l.166.119A.051.051,0,0,0,6.418,1.9L7.2.811A.051.051,0,0,0,7.191.74L7.025.62a.051.051,0,0,0-.071.012l-.3.422-.6-.431L6.354.2A.051.051,0,0,0,6.342.129L6.176.01a.051.051,0,0,0-.071.012l-.855,1.19a.052.052,0,0,0-.01.03l.012,2.323a.051.051,0,0,0,.021.041l1.073.772a.051.051,0,0,0,.046.007m3.71.306.062-.195a.051.051,0,0,0-.033-.064L8.738,3.987a.051.051,0,0,0-.032,0l-2.2.73a.05.05,0,0,0-.033.033l-.4,1.26a.051.051,0,0,0,.007.046L7.45,7.928a.052.052,0,0,0,.026.018l1.395.446a.051.051,0,0,0,.064-.033L9,8.165A.051.051,0,0,0,8.963,8.1l-.495-.158.225-.7.495.158a.051.051,0,0,0,.064-.033l.062-.195A.051.051,0,0,0,9.281,7.1L8,6.694a.051.051,0,0,0-.064.033l-.062.195a.051.051,0,0,0,.033.064l.495.158-.224.7L7.647,7.68,6.4,5.979l.323-1.012,2-.662.529.169-.224.7L8.533,5.02a.051.051,0,0,0-.064.033l-.062.195a.051.051,0,0,0,.033.064l1.281.409a.051.051,0,0,0,.064-.033l.062-.195a.051.051,0,0,0-.033-.064L9.32,5.271l.225-.7.495.158a.051.051,0,0,0,.064-.033m-6.281-.3,1.064-.785a.051.051,0,0,0,.021-.042L4.892,1.24a.05.05,0,0,0-.01-.03L4.014.03A.051.051,0,0,0,3.942.019L3.778.141a.051.051,0,0,0-.011.072l.308.419-.595.439L3.172.651A.051.051,0,0,0,3.1.64L2.937.761a.051.051,0,0,0-.011.072l.8,1.084a.051.051,0,0,0,.071.011l.165-.121a.051.051,0,0,0,.011-.072l-.308-.419L4.257.878l.329.448L4.6,3.435l-.855.63L1.737,3.427l-.329-.448L2,2.54l.308.419a.051.051,0,0,0,.071.011l.165-.121a.051.051,0,0,0,.011-.072l-.8-1.084a.051.051,0,0,0-.071-.011L1.524,1.8a.051.051,0,0,0-.011.072l.308.419-.595.439L.918,2.313A.051.051,0,0,0,.847,2.3l-.165.121A.051.051,0,0,0,.671,2.5l.868,1.18a.05.05,0,0,0,.026.018l2.212.7a.051.051,0,0,0,.046-.008"
            transform="translate(389.437 1070.764) rotate(-180)"
          />
          <text className="r-time-line" transform="translate(162.269 1079.08)">
            <tspan x={0} y={0}>
              {"1984"}
            </tspan>
          </text>
          <text className="r-time-line" transform="translate(182.269 1079.08)">
            <tspan x={0} y={0}>
              {"1999"}
            </tspan>
          </text>
          <text className="r-time-line" transform="translate(201.269 1079.08)">
            <tspan x={0} y={0}>
              {"2000"}
            </tspan>
          </text>
          <text className="r-time-line" transform="translate(222.269 1079.08)">
            <tspan x={0} y={0}>
              {"2007"}
            </tspan>
          </text>
          <text className="r-time-line" transform="translate(241.269 1079.08)">
            <tspan x={0} y={0}>
              {"2009"}
            </tspan>
          </text>
          <text className="r-time-line" transform="translate(262.269 1079.08)">
            <tspan x={0} y={0}>
              {"2011"}
            </tspan>
          </text>
          <text className="r-time-line" transform="translate(280.269 1079.08)">
            <tspan x={0} y={0}>
              {"2011"}
            </tspan>
          </text>
          <text className="r-time-line" transform="translate(299.269 1079.08)">
            <tspan x={0} y={0}>
              {"2012"}
            </tspan>
          </text>
          <text className="r-time-line" transform="translate(318.269 1079.08)">
            <tspan x={0} y={0}>
              {"2012"}
            </tspan>
          </text>
          <text className="r-time-line" transform="translate(338.269 1079.08)">
            <tspan x={0} y={0}>
              {"2014"}
            </tspan>
          </text>
          <text className="r-time-line" transform="translate(357.269 1079.08)">
            <tspan x={0} y={0}>
              {"2014"}
            </tspan>
          </text>
          <text className="r-time-line" transform="translate(377.269 1079.08)">
            <tspan x={0} y={0}>
              {"2016"}
            </tspan>
          </text>
          <text className="r-time-line" transform="translate(397.269 1079.08)">
            <tspan x={0} y={0}>
              {"2017"}
            </tspan>
          </text>
          <text className="r-time-line" transform="translate(416.269 1079.08)">
            <tspan x={0} y={0}>
              {"2023"}
            </tspan>
          </text>
          <text className="r-time-line" transform="translate(437.269 1079.08)">
            <tspan x={0} y={0}>
              {"2023"}
            </tspan>
          </text>
          <text className="r-time-line" transform="translate(457.269 1079.08)">
            <tspan x={0} y={0}>
              {"2023"}
            </tspan>
          </text>
          <text className="r-time-line" transform="translate(478.269 1079.08)">
            <tspan x={0} y={0}>
              {"2023"}
            </tspan>
          </text>
        </g>
        <g transform="translate(117.15 330.327)" onClick={onPrev}>
          <g className="s-time-line" transform="matrix(1, 0, 0, 1, -117.15, -381.05)">
            <path
              className="n-time-line"
              d="M0,0H73.877c7.684,0,14.584,7.831,17.39,19.735l1.674,7.1H19.676c-8.186,0-15.516-8.442-18.4-21.193Z"
              transform="translate(117.15 381.05)"
            />
          </g>
          <path
            className="a-time-line"
            d="M52.285,0V8.1L45.263,4.051l3.354-1.935Z"
            transform="translate(-34.361 9.367)"
          />
          <text className="o-time-line" transform="translate(21.907 16.788)">
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

export default Component2016
