import React from "react";

export const carouselItemsMobile = (t: any, selectedLanguage: "es" | "en") => [
  {
    image: "/images/mobile/rewards/carousel-1.webp",
    text: (onNext: () => void, onPrev: () => void) => (
      <React.Fragment>
        <defs>
          <style>
            {
              ".a-time-line-4{fill:#fff;}.b-time-line-4{fill:url(#c-time-line-4);}.c-time-line-4,.f-time-line-4{fill:#001f5f;}.c-time-line-4{font-size:12px;font-family:Silka-Bold, Silka;font-weight:700;}.d-time-line-4,.j-time-line-4{opacity:0.5;}.e-time-line-4{fill:url(#f-time-line-4);}.f-time-line-4{font-size:9px;}.f-time-line-4,.h-time-line-4{font-family:Silka-SemiBold, Silka;font-weight:600;}.g-time-line-4{fill:url(#i-time-line-4);}.h-time-line-4{fill:#182856;font-size:6px;}.i-time-line-4,.j-time-line-4{fill:#c7c7cc;}.k-time-line-4{filter:url(#l-time-line-4);}.l-time-line-4{filter:url(#j-time-line-4);}.m-time-line-4{filter:url(#g-time-line-4);}.n-time-line-4{filter:url(#d-time-line-4);}.o-time-line-4{filter:url(#a-time-line-4);}"
            }
          </style>
          <filter
            id="a-time-line-4"
            x={153.393}
            y={0}
            width={221.214}
            height={225.606}
            filterUnits="userSpaceOnUse"
          >
            <feOffset dy={3} />
            <feGaussianBlur stdDeviation={3} result="b" />
            <feFlood floodOpacity={0.502} />
            <feComposite operator="in" in2="b" />
            <feComposite in="SourceGraphic" />
          </filter>
          <pattern
            id="c-time-line-4"
            width={1}
            height={1}
            viewBox="-55.398 -100.145 428.138 437.391"
          >
            <image
              preserveAspectRatio="xMidYMid slice"
              width={329.984}
              height={207.606}
              xlinkHref="/images/mobile/rewards/carousel-1.webp"
            />
          </pattern>
          <filter
            id="d-time-line-4"
            x={364.227}
            y={35.869}
            width={162.739}
            height={165.867}
            filterUnits="userSpaceOnUse"
          >
            <feOffset dy={3} />
            <feGaussianBlur stdDeviation={3} result="e" />
            <feFlood floodOpacity={0.502} />
            <feComposite operator="in" in2="e" />
            <feComposite in="SourceGraphic" />
          </filter>
          <pattern
            id="f-time-line-4"
            width={1}
            height={1}
            patternTransform="translate(474.842 185.735) rotate(-180)"
            viewBox="-28.206 -114.859 312.316 319.066"
          >
            <image
              preserveAspectRatio="xMidYMid slice"
              width={237.421}
              height={147.867}
              xlinkHref="/images/mobile/rewards/carousel-1.webp"
            />
          </pattern>
          <filter
            id="g-time-line-4"
            x={0}
            y={35.869}
            width={162.739}
            height={165.867}
            filterUnits="userSpaceOnUse"
          >
            <feOffset dy={3} />
            <feGaussianBlur stdDeviation={3} result="h" />
            <feFlood floodOpacity={0.502} />
            <feComposite operator="in" in2="h" />
            <feComposite in="SourceGraphic" />
          </filter>
          <pattern
            id="i-time-line-4"
            width={1}
            height={1}
            patternTransform="translate(895.593 205.735) rotate(-180)"
            viewBox="88.051 -204.827 406.279 415.059"
          >
            <image
              preserveAspectRatio="xMidYMid slice"
              width={432.796}
              height={147.867}
              xlinkHref="/images/mobile/rewards/carousel-2.webp"
            />
          </pattern>
          <filter
            id="j-time-line-4"
            x={120.107}
            y={221.613}
            width={84.573}
            height={49.58}
            filterUnits="userSpaceOnUse"
          >
            <feOffset dy={3} />
            <feGaussianBlur stdDeviation={3} result="k" />
            <feFlood floodOpacity={0.6} />
            <feComposite operator="in" in2="k" />
            <feComposite in="SourceGraphic" />
          </filter>
          <filter
            id="l-time-line-4"
            x={323.32}
            y={221.613}
            width={84.573}
            height={49.58}
            filterUnits="userSpaceOnUse"
          >
            <feOffset dy={3} />
            <feGaussianBlur stdDeviation={3} result="m" />
            <feFlood floodOpacity={0.6} />
            <feComposite operator="in" in2="m" />
            <feComposite in="SourceGraphic" />
          </filter>
        </defs>
        <g transform="translate(-47.483 188.947)">
          <g className="o-time-line-4" transform="matrix(1, 0, 0, 1, -9, -6)">
            <path
              className="a-time-line-4"
              d="M584.12,138.606h-185.5c-5.335,0-9.459-5.792-8.787-12.339L409.251-59.422C409.813-64.9,413.578-69,418.038-69H564.1c4.447,0,8.205,4.08,8.782,9.535L592.9,126.224c.694,6.561-3.434,12.381-8.782,12.381"
              transform="translate(-227.37 75)"
            />
          </g>
          <path
            className="b-time-line-4"
            d="M584.12,138.606h-185.5c-5.335,0-9.459-5.792-8.787-12.339L409.251-59.422C409.813-64.9,413.578-69,418.038-69H564.1c4.447,0,8.205,4.08,8.782,9.535L592.9,126.224c.694,6.561-3.434,12.381-8.782,12.381"
            transform="translate(-236.372 69)"
          />
          <text
            className="c-time-line-4"
            transform="translate(255.346 162.803)"
          >
            <tspan x={selectedLanguage === "es" ? -75.864 : -69.864} y={11}>
              {selectedLanguage === "es"
                ? t("Certificado Amarey Nova ")
                : t("Certificado Amarey Nova ")
                    .split(" ")
                    .slice(0, 3)
                    .join(" ")}
            </tspan>
            <tspan x={selectedLanguage === "es" ? -54.714 : -30.714} y={25}>
              {selectedLanguage === "es"
                ? t("Medical ISO 90001")
                : t("Certificado Amarey Nova ")
                    .split(" ")
                    .slice(3, 6)
                    .join(" ")}
            </tspan>
          </text>
          <g className="d-time-line-4">
            <g className="n-time-line-4" transform="matrix(1, 0, 0, 1, -9, -6)">
              <path
                className="a-time-line-4"
                d="M528.194,78.867H396.074c-3.8,0-6.737-4.125-6.258-8.789L403.644-62.178c.4-3.9,3.082-6.822,6.258-6.822H513.937c3.167,0,5.844,2.906,6.255,6.792L534.449,70.049c.495,4.673-2.446,8.818-6.255,8.818"
                transform="translate(907.73 120.74) rotate(180)"
              />
            </g>
            <path
              className="e-time-line-4"
              d="M528.194,78.867H396.074c-3.8,0-6.737-4.125-6.258-8.789L403.644-62.178c.4-3.9,3.082-6.822,6.258-6.822H513.937c3.167,0,5.844,2.906,6.255,6.792L534.449,70.049c.495,4.673-2.446,8.818-6.255,8.818"
              transform="translate(898.731 114.736) rotate(180)"
            />
            <text
              className="f-time-line-4"
              transform="translate(438.097 149.303)"
            >
              <tspan x={selectedLanguage === "es" ? -51.799 : -10.799} y={8}>
                {t("Certificado Ucipharma ")}
              </tspan>
              <tspan x={selectedLanguage === "es" ? -21.928 : -40.928} y={19}>
                {t("ISO 90001")}
              </tspan>
            </text>
          </g>
          <g className="d-time-line-4">
            <g className="m-time-line-4" transform="matrix(1, 0, 0, 1, -9, -6)">
              <path
                className="a-time-line-4"
                d="M528.194,78.867H396.074c-3.8,0-6.737-4.125-6.258-8.789L403.644-62.178c.4-3.9,3.082-6.822,6.258-6.822H513.937c3.167,0,5.844,2.906,6.255,6.792L534.449,70.049c.495,4.673-2.446,8.818-6.255,8.818"
                transform="translate(543.5 120.74) rotate(180)"
              />
            </g>
            <path
              className="g-time-line-4"
              d="M528.194,78.867H396.074c-3.8,0-6.737-4.125-6.258-8.789L403.644-62.178c.4-3.9,3.082-6.822,6.258-6.822H513.937c3.167,0,5.844,2.906,6.255,6.792L534.449,70.049c.495,4.673-2.446,8.818-6.255,8.818"
              transform="translate(534.504 114.736) rotate(180)"
            />
            <text className="h-time-line-4" transform="translate(55 125.803)">
              <tspan x={selectedLanguage === "es" ? -43.197 : -10} y={6}>
                {t("Certificación OEA (Operador ")}
              </tspan>
              <tspan x={selectedLanguage === "es" ? -43.302 : -30} y={14}>
                {t("Económico Autorizado) de la ")}
              </tspan>
              <tspan x={selectedLanguage === "es" ? -35.004 : -20} y={22}>
                {t("DIAN, obtenida en 2001, ")}
              </tspan>
              <tspan x={selectedLanguage === "es" ? -47.439 : -30} y={30}>
                {t("demostrando la seguridad en la ")}
              </tspan>
              <tspan x={selectedLanguage === "es" ? -32.13 : -10} y={38}>
                {t("cadena de suministro ")}
              </tspan>
              <tspan x={-44.649} y={46}>
                {t("internacional de la compañía.")}
              </tspan>
            </text>
          </g>
          <rect
            className="i-time-line-4"
            width={24.022}
            height={5.837}
            rx={2.919}
            transform="translate(199.512 247.356)"
          />
          <rect
            className="j-time-line-4"
            width={24.022}
            height={5.837}
            rx={2.919}
            transform="translate(228.497 247.356)"
          />
          <rect
            className="j-time-line-4"
            width={24.022}
            height={5.837}
            rx={2.919}
            transform="translate(257.481 247.356)"
          />
          <rect
            className="j-time-line-4"
            width={24.022}
            height={5.837}
            rx={2.919}
            transform="translate(286.466 247.356)"
          />
          <g transform="translate(120.107 221.613)" onClick={onPrev}>
            <g
              className="l-time-line-4"
              transform="matrix(1, 0, 0, 1, -129.11, -227.61)"
            >
              <path
                className="i-time-line-4"
                d="M0,0H29.238A36.583,36.583,0,0,1,63.295,23.224l3.278,8.356H38.535A38.5,38.5,0,0,1,2.5,6.64Z"
                transform="translate(129.11 227.61)"
              />
            </g>
            <path
              className="a-time-line-4"
              d="M7.283,0l7.283,12.485H0Z"
              transform="translate(27.052 23.063) rotate(-90)"
            />
          </g>
          <g transform="translate(323.32 221.613)" onClick={onNext}>
            <g
              className="k-time-line-4"
              transform="matrix(1, 0, 0, 1, -332.32, -227.61)"
            >
              <path
                className="i-time-line-4"
                d="M66.573,0H37.335A36.583,36.583,0,0,0,3.278,23.224L0,31.58H28.038A38.5,38.5,0,0,0,64.073,6.64Z"
                transform="translate(332.32 227.61)"
              />
            </g>
            <path
              className="a-time-line-4"
              d="M7.283,0l7.283,12.485H0Z"
              transform="translate(39.521 8.497) rotate(90)"
            />
          </g>
        </g>
      </React.Fragment>
    ),
  },
  {
    image: "/images/mobile/rewards/carousel-1.webp",
    text: (onNext: () => void, onPrev: () => void) => (
      <React.Fragment>
        <defs>
          <style>
            {
              ".a-time-line-4{fill:#fff;}.b-time-line-4{fill:url(#c-time-line-4);}.c-time-line-4,.f-time-line-4,.h-time-line-4{fill:#001f5f;}.c-time-line-4{font-size:12px;font-family:Silka-Bold, Silka;font-weight:700;}.d-time-line-4,.i-time-line-4{opacity:0.5;}.e-time-line-4{fill:url(#f-time-line-4);}.f-time-line-4{font-size:7px;}.f-time-line-4,.h-time-line-4{font-family:Silka-SemiBold, Silka;font-weight:600;}.g-time-line-4{fill:url(#i-time-line-4);}.h-time-line-4{font-size:9px;}.i-time-line-4,.j-time-line-4{fill:#c7c7cc;}.k-time-line-4{filter:url(#l-time-line-4);}.l-time-line-4{filter:url(#j-time-line-4);}.m-time-line-4{filter:url(#g-time-line-4);}.n-time-line-4{filter:url(#d-time-line-4);}.o-time-line-4{filter:url(#a-time-line-4);}"
            }
          </style>
          <filter
            id="a-time-line-4"
            x={153.393}
            y={0}
            width={221.214}
            height={225.605}
            filterUnits="userSpaceOnUse"
          >
            <feOffset dy={3} />
            <feGaussianBlur stdDeviation={3} result="b" />
            <feFlood floodOpacity={0.502} />
            <feComposite operator="in" in2="b" />
            <feComposite in="SourceGraphic" />
          </filter>
          <pattern
            id="c-time-line-4"
            width={1}
            height={1}
            viewBox="-49.26 -90.655 418.298 427.339"
          >
            <image
              preserveAspectRatio="xMidYMid slice"
              width={333.338}
              height={207.605}
              xlinkHref="/images/mobile/rewards/carousel-1.webp"
            />
          </pattern>
          <filter
            id="d-time-line-4"
            x={364.227}
            y={34.869}
            width={162.739}
            height={165.867}
            filterUnits="userSpaceOnUse"
          >
            <feOffset dy={3} />
            <feGaussianBlur stdDeviation={3} result="e" />
            <feFlood floodOpacity={0.502} />
            <feComposite operator="in" in2="e" />
            <feComposite in="SourceGraphic" />
          </filter>
          <pattern
            id="f-time-line-4"
            width={1}
            height={1}
            patternTransform="translate(472.138 295.735) rotate(-180)"
            viewBox="-140.956 -108.704 328.284 335.378"
          >
            <image
              preserveAspectRatio="xMidYMid slice"
              width={236.069}
              height={147.867}
              xlinkHref="/images/mobile/rewards/carousel-1.webp"
            />
          </pattern>
          <filter
            id="g-time-line-4"
            x={0}
            y={34.869}
            width={162.739}
            height={165.867}
            filterUnits="userSpaceOnUse"
          >
            <feOffset dy={3} />
            <feGaussianBlur stdDeviation={3} result="h" />
            <feFlood floodOpacity={0.502} />
            <feComposite operator="in" in2="h" />
            <feComposite in="SourceGraphic" />
          </filter>
          <pattern
            id="i-time-line-4"
            width={1}
            height={1}
            patternTransform="translate(400.062 295.735) rotate(-180)"
            viewBox="30 -101.997 333.605 323.447"
          >
            <image
              preserveAspectRatio="xMidYMid slice"
              width={235.031}
              height={147.867}
              xlinkHref="/images/mobile/rewards/carousel-1.webp"
            />
          </pattern>
          <filter
            id="j-time-line-4"
            x={120.107}
            y={221.613}
            width={84.573}
            height={49.58}
            filterUnits="userSpaceOnUse"
          >
            <feOffset dy={3} />
            <feGaussianBlur stdDeviation={3} result="k" />
            <feFlood floodOpacity={0.6} />
            <feComposite operator="in" in2="k" />
            <feComposite in="SourceGraphic" />
          </filter>
          <filter
            id="l-time-line-4"
            x={323.32}
            y={221.613}
            width={84.573}
            height={49.58}
            filterUnits="userSpaceOnUse"
          >
            <feOffset dy={3} />
            <feGaussianBlur stdDeviation={3} result="m" />
            <feFlood floodOpacity={0.6} />
            <feComposite operator="in" in2="m" />
            <feComposite in="SourceGraphic" />
          </filter>
        </defs>
        <g transform="translate(-47.483 188.947)">
          <g className="o-time-line-4" transform="matrix(1, 0, 0, 1, -9, -6)">
            <path
              className="a-time-line-4"
              d="M584.12-69h-185.5c-5.335,0-9.459,5.792-8.787,12.339l19.415,185.689c.562,5.474,4.327,9.578,8.787,9.578H564.1c4.447,0,8.205-4.08,8.782-9.535L592.9-56.619C593.6-63.18,589.468-69,584.12-69"
              transform="translate(-227.37 75)"
            />
          </g>
          <path
            className="b-time-line-4"
            d="M584.12-69h-185.5c-5.335,0-9.459,5.792-8.787,12.339l19.415,185.689c.562,5.474,4.327,9.578,8.787,9.578H564.1c4.447,0,8.205-4.08,8.782-9.535L592.9-56.619C593.6-63.18,589.468-69,584.12-69"
            transform="translate(-236.372 69)"
          />
          <text
            className="c-time-line-4"
            transform="translate(255.346 162.803)"
          >
            <tspan x={selectedLanguage === "es" ? -69.27 : -29.27} y={11}>
              {selectedLanguage === "es"
                ? t("Certificado Ucipharma ")
                : t("Certificado Ucipharma ")}
            </tspan>
            <tspan x={selectedLanguage === "es" ? -29.286 : -75.286} y={25}>
              {selectedLanguage === "es" ? t("ISO 90001") : t("ISO 90001")}
            </tspan>
          </text>
          <g className="d-time-line-4">
            <g className="n-time-line-4" transform="matrix(1, 0, 0, 1, -9, -6)">
              <path
                className="a-time-line-4"
                d="M138.43,0H6.31C2.51,0-.427,4.125.051,8.789L13.879,141.046c.4,3.9,3.082,6.822,6.258,6.822H124.172c3.167,0,5.844-2.906,6.255-6.792L144.685,8.818C145.179,4.145,142.239,0,138.43,0"
                transform="translate(517.97 188.74) rotate(180)"
              />
            </g>
            <path
              className="e-time-line-4"
              d="M138.43,0H6.31C2.51,0-.427,4.125.051,8.789L13.879,141.046c.4,3.9,3.082,6.822,6.258,6.822H124.172c3.167,0,5.844-2.906,6.255-6.792L144.685,8.818C145.179,4.145,142.239,0,138.43,0"
              transform="translate(508.966 182.736) rotate(180)"
            />
            <text
              className="f-time-line-4"
              transform="translate(440.097 149.303)"
            >
              <tspan x={-58.076} y={7}>
                {t("Certificado Novatécnica Sistema ")}
              </tspan>
              <tspan x={-42.745} y={16}>
                {t("de gestión de calidad en ")}
              </tspan>
              <tspan x={-54.289} y={25}>
                {t("dispositivos médicos ISO 13485")}
              </tspan>
            </text>
          </g>
          <g className="d-time-line-4">
            <g className="m-time-line-4" transform="matrix(1, 0, 0, 1, -9, -6)">
              <path
                className="a-time-line-4"
                d="M138.43,0H6.31C2.51,0-.427,4.125.051,8.789L13.879,141.046c.4,3.9,3.082,6.822,6.258,6.822H124.172c3.167,0,5.844-2.906,6.255-6.792L144.685,8.818C145.179,4.145,142.239,0,138.43,0"
                transform="translate(153.74 188.74) rotate(180)"
              />
            </g>
            <path
              className="g-time-line-4"
              d="M138.43,0H6.31C2.51,0-.427,4.125.051,8.789L13.879,141.046c.4,3.9,3.082,6.822,6.258,6.822H124.172c3.167,0,5.844-2.906,6.255-6.792L144.685,8.818C145.179,4.145,142.239,0,138.43,0"
              transform="translate(144.739 182.736) rotate(180)"
            />
            <text className="h-time-line-4" transform="translate(70 149.303)">
              <tspan x={selectedLanguage === "es" ? -56.704 : -90} y={8}>
                {t("Certificado Amarey Nova ")}
              </tspan>
              <tspan x={-41.022} y={19}>
                {t("Medical ISO 90001")}
              </tspan>
            </text>
          </g>
          <rect
            className="i-time-line-4"
            width={24.022}
            height={5.837}
            rx={2.919}
            transform="translate(199.512 247.356)"
          />
          <rect
            className="j-time-line-4"
            width={24.022}
            height={5.837}
            rx={2.919}
            transform="translate(228.497 247.356)"
          />
          <rect
            className="i-time-line-4"
            width={24.022}
            height={5.837}
            rx={2.919}
            transform="translate(257.481 247.356)"
          />
          <rect
            className="i-time-line-4"
            width={24.022}
            height={5.837}
            rx={2.919}
            transform="translate(286.466 247.356)"
          />
          <g transform="translate(120.107 221.613)" onClick={onPrev}>
            <g
              className="l-time-line-4"
              transform="matrix(1, 0, 0, 1, -129.11, -227.61)"
            >
              <path
                className="j-time-line-4"
                d="M0,0H29.238A36.583,36.583,0,0,1,63.295,23.224l3.278,8.356H38.535A38.5,38.5,0,0,1,2.5,6.64Z"
                transform="translate(129.11 227.61)"
              />
            </g>
            <path
              className="a-time-line-4"
              d="M7.283,0l7.283,12.485H0Z"
              transform="translate(27.052 23.063) rotate(-90)"
            />
          </g>
          <g transform="translate(323.32 221.613)" onClick={onNext}>
            <g
              className="k-time-line-4"
              transform="matrix(1, 0, 0, 1, -332.32, -227.61)"
            >
              <path
                className="j-time-line-4"
                d="M66.573,0H37.335A36.583,36.583,0,0,0,3.278,23.224L0,31.58H28.038A38.5,38.5,0,0,0,64.073,6.64Z"
                transform="translate(332.32 227.61)"
              />
            </g>
            <path
              className="a-time-line-4"
              d="M7.283,0l7.283,12.485H0Z"
              transform="translate(39.521 8.497) rotate(90)"
            />
          </g>
        </g>
      </React.Fragment>
    ),
  },
  {
    image: "/images/mobile/rewards/carousel-1.webp",
    text: (onNext: () => void, onPrev: () => void) => (
      <React.Fragment>
        <defs>
          <style>
            {
              ".a-time-line-4{fill:#fff;}.b-time-line-4{fill:url(#c-time-line-4);}.c-time-line-4,.h-time-line-4{fill:#001f5f;}.c-time-line-4{font-size:10px;font-family:Silka-Bold, Silka;font-weight:700;}.d-time-line-4,.i-time-line-4{opacity:0.5;}.e-time-line-4{fill:url(#f-time-line-4);}.f-time-line-4{fill:url(#g-time-line-4);}.g-time-line-4{fill:#182856;font-size:6px;}.g-time-line-4,.h-time-line-4{font-family:Silka-SemiBold, Silka;font-weight:600;}.h-time-line-4{font-size:9px;}.i-time-line-4,.j-time-line-4{fill:#c7c7cc;}.k-time-line-4{filter:url(#l-time-line-4);}.l-time-line-4{filter:url(#j-time-line-4);}.m-time-line-4{filter:url(#h-time-line-4);}.n-time-line-4{filter:url(#d-time-line-4);}.o-time-line-4{filter:url(#a-time-line-4);}"
            }
          </style>
          <filter
            id="a-time-line-4"
            x={153.393}
            y={0}
            width={221.214}
            height={225.606}
            filterUnits="userSpaceOnUse"
          >
            <feOffset dy={3} />
            <feGaussianBlur stdDeviation={3} result="b" />
            <feFlood floodOpacity={0.502} />
            <feComposite operator="in" in2="b" />
            <feComposite in="SourceGraphic" />
          </filter>
          <pattern
            id="c-time-line-4"
            width={1}
            height={1}
            viewBox="-47.586 -95.669 422.454 431.584"
          >
            <image
              preserveAspectRatio="xMidYMid slice"
              width={331.44}
              height={207.606}
              xlinkHref="/images/mobile/rewards/carousel-1.webp"
            />
          </pattern>
          <filter
            id="d-time-line-4"
            x={364.227}
            y={35.869}
            width={162.739}
            height={165.867}
            filterUnits="userSpaceOnUse"
          >
            <feOffset dy={3} />
            <feGaussianBlur stdDeviation={3} result="e" />
            <feFlood floodOpacity={0.502} />
            <feComposite operator="in" in2="e" />
            <feComposite in="SourceGraphic" />
          </filter>
          <pattern
            id="f-time-line-4"
            width={1}
            height={1}
            patternTransform="translate(474.842 295.735) rotate(-180)"
            viewBox="-28.206 -14.859 312.316 319.066"
          >
            <image
              preserveAspectRatio="xMidYMid slice"
              width={237.421}
              height={147.867}
              xlinkHref="/images/mobile/rewards/carousel-1.webp"
            />
          </pattern>
          <pattern
            id="g-time-line-4"
            width={1}
            height={1}
            patternTransform="translate(770.593 295.735) rotate(-180)"
            viewBox="8.051 -20.827 406.279 415.059"
          >
            <image
              preserveAspectRatio="xMidYMid slice"
              width={432.796}
              height={147.867}
              xlinkHref="/images/mobile/rewards/carousel-2.webp"
            />
          </pattern>
          <filter
            id="h-time-line-4"
            x={0}
            y={35.869}
            width={162.739}
            height={165.867}
            filterUnits="userSpaceOnUse"
          >
            <feOffset dy={3} />
            <feGaussianBlur stdDeviation={3} result="i" />
            <feFlood floodOpacity={0.502} />
            <feComposite operator="in" in2="i" />
            <feComposite in="SourceGraphic" />
          </filter>
          <filter
            id="j-time-line-4"
            x={120.107}
            y={221.613}
            width={84.573}
            height={49.58}
            filterUnits="userSpaceOnUse"
          >
            <feOffset dy={3} />
            <feGaussianBlur stdDeviation={3} result="k" />
            <feFlood floodOpacity={0.6} />
            <feComposite operator="in" in2="k" />
            <feComposite in="SourceGraphic" />
          </filter>
          <filter
            id="l-time-line-4"
            x={323.32}
            y={221.613}
            width={84.573}
            height={49.58}
            filterUnits="userSpaceOnUse"
          >
            <feOffset dy={3} />
            <feGaussianBlur stdDeviation={3} result="m" />
            <feFlood floodOpacity={0.6} />
            <feComposite operator="in" in2="m" />
            <feComposite in="SourceGraphic" />
          </filter>
        </defs>
        <g transform="translate(-47.483 188.947)">
          <g className="o-time-line-4" transform="matrix(1, 0, 0, 1, -9, -6)">
            <path
              className="a-time-line-4"
              d="M584.12,138.606h-185.5c-5.335,0-9.459-5.792-8.787-12.339L409.251-59.422C409.813-64.9,413.578-69,418.038-69H564.1c4.447,0,8.205,4.08,8.782,9.535L592.9,126.224c.694,6.561-3.434,12.381-8.782,12.381"
              transform="translate(-227.37 75)"
            />
          </g>
          <path
            className="b-time-line-4"
            d="M584.12,138.606h-185.5c-5.335,0-9.459-5.792-8.787-12.339L409.251-59.422C409.813-64.9,413.578-69,418.038-69H564.1c4.447,0,8.205,4.08,8.782,9.535L592.9,126.224c.694,6.561-3.434,12.381-8.782,12.381"
            transform="translate(-236.372 69)"
          />
          <text
            className="c-time-line-4"
            transform="translate(255.346 155.803)"
          >
            <tspan x={selectedLanguage === "es" ? -83.175 : -75.175} y={9}>
              {t("Certificado Novatécnica Sistema ")}
            </tspan>
            <tspan x={selectedLanguage === "es" ? -60.89 : -77.89} y={21}>
              {t("de gestión de calidad en ")}
            </tspan>
            <tspan x={selectedLanguage === "es" ? -77.635 : -60.635} y={33}>
              {t("dispositivos médicos ISO 13485")}
            </tspan>
          </text>
          <g className="d-time-line-4">
            <g className="n-time-line-4" transform="matrix(1, 0, 0, 1, -9, -6)">
              <path
                className="a-time-line-4"
                d="M528.194,78.867H396.074c-3.8,0-6.737-4.125-6.258-8.789L403.644-62.178c.4-3.9,3.082-6.822,6.258-6.822H513.937c3.167,0,5.844,2.906,6.255,6.792L534.449,70.049c.495,4.673-2.446,8.818-6.255,8.818"
                transform="translate(907.73 120.74) rotate(180)"
              />
            </g>
            <path
              className="e-time-line-4"
              d="M528.194,78.867H396.074c-3.8,0-6.737-4.125-6.258-8.789L403.644-62.178c.4-3.9,3.082-6.822,6.258-6.822H513.937c3.167,0,5.844,2.906,6.255,6.792L534.449,70.049c.495,4.673-2.446,8.818-6.255,8.818"
              transform="translate(534.504 114.736) rotate(180)"
            />
            <path
              className="f-time-line-4"
              d="M528.194,78.867H396.074c-3.8,0-6.737-4.125-6.258-8.789L403.644-62.178c.4-3.9,3.082-6.822,6.258-6.822H513.937c3.167,0,5.844,2.906,6.255,6.792L534.449,70.049c.495,4.673-2.446,8.818-6.255,8.818"
              transform="translate(898.731 114.736) rotate(180)"
            />
            <text
              className="g-time-line-4"
              transform="translate(438.097 125.803)"
            >
              <tspan x={-43.197} y={6}>
                {t("Certificación OEA (Operador ")}
              </tspan>
              <tspan x={-43.302} y={14}>
                {t("Económico Autorizado) de la ")}
              </tspan>
              <tspan x={-35.004} y={22}>
                {t("DIAN, obtenida en 2001, ")}
              </tspan>
              <tspan x={-47.439} y={30}>
                {t("demostrando la seguridad en la ")}
              </tspan>
              <tspan x={-32.13} y={38}>
                {t("cadena de suministro ")}
              </tspan>
              <tspan x={-44.649} y={46}>
                {t("internacional de la compañía.")}
              </tspan>
            </text>
          </g>
          <g className="d-time-line-4">
            <g className="m-time-line-4" transform="matrix(1, 0, 0, 1, -9, -6)">
              <path
                className="a-time-line-4"
                d="M528.194,78.867H396.074c-3.8,0-6.737-4.125-6.258-8.789L403.644-62.178c.4-3.9,3.082-6.822,6.258-6.822H513.937c3.167,0,5.844,2.906,6.255,6.792L534.449,70.049c.495,4.673-2.446,8.818-6.255,8.818"
                transform="translate(543.5 120.74) rotate(180)"
              />
            </g>
            <text
              className="h-time-line-4"
              transform="translate(66.512 149.303)"
            >
              <tspan x={selectedLanguage === "es" ? -51.799 : -20} y={8}>
                {t("Certificado Ucipharma ")}
              </tspan>
              <tspan x={selectedLanguage === "es" ? -21.928 : -60} y={19}>
                {t("ISO 90001")}
              </tspan>
            </text>
          </g>
          <rect
            className="i-time-line-4"
            width={24.022}
            height={5.837}
            rx={2.919}
            transform="translate(199.512 247.356)"
          />
          <rect
            className="i-time-line-4"
            width={24.022}
            height={5.837}
            rx={2.919}
            transform="translate(228.497 247.356)"
          />
          <rect
            className="j-time-line-4"
            width={24.022}
            height={5.837}
            rx={2.919}
            transform="translate(257.481 247.356)"
          />
          <rect
            className="i-time-line-4"
            width={24.022}
            height={5.837}
            rx={2.919}
            transform="translate(286.466 247.356)"
          />
          <g transform="translate(120.107 221.613)" onClick={onPrev}>
            <g
              className="l-time-line-4"
              transform="matrix(1, 0, 0, 1, -129.11, -227.61)"
            >
              <path
                className="j-time-line-4"
                d="M0,0H29.238A36.583,36.583,0,0,1,63.295,23.224l3.278,8.356H38.535A38.5,38.5,0,0,1,2.5,6.64Z"
                transform="translate(129.11 227.61)"
              />
            </g>
            <path
              className="a-time-line-4"
              d="M7.283,0l7.283,12.485H0Z"
              transform="translate(27.052 23.063) rotate(-90)"
            />
          </g>
          <g transform="translate(323.32 221.613)" onClick={onNext}>
            <g
              className="k-time-line-4"
              transform="matrix(1, 0, 0, 1, -332.32, -227.61)"
            >
              <path
                className="j-time-line-4"
                d="M66.573,0H37.335A36.583,36.583,0,0,0,3.278,23.224L0,31.58H28.038A38.5,38.5,0,0,0,64.073,6.64Z"
                transform="translate(332.32 227.61)"
              />
            </g>
            <path
              className="a-time-line-4"
              d="M7.283,0l7.283,12.485H0Z"
              transform="translate(39.521 8.497) rotate(90)"
            />
          </g>
        </g>
      </React.Fragment>
    ),
  },
  {
    image: "/images/mobile/rewards/carousel-1.webp",
    text: (onNext: () => void, onPrev: () => void) => (
      <React.Fragment>
        <defs>
          <style>
            {
              ".a-time-line-4{fill:#fff;}.b-time-line-4{fill:url(#c-time-line-4);}.c-time-line-4,.f-time-line-4{fill:#001f5f;}.c-time-line-4{font-size:7px;}.c-time-line-4,.f-time-line-4,.h-time-line-4{font-family:Silka-SemiBold, Silka;font-weight:600;}.d-time-line-4,.i-time-line-4{opacity:0.5;}.e-time-line-4{fill:url(#f-time-line-4);}.f-time-line-4{font-size:9px;}.g-time-line-4{fill:url(#i-time-line-4);}.h-time-line-4{fill:#182856;font-size:10px;}.i-time-line-4,.j-time-line-4{fill:#c7c7cc;}.k-time-line-4{filter:url(#l-time-line-4);}.l-time-line-4{filter:url(#j-time-line-4);}.m-time-line-4{filter:url(#g-time-line-4);}.n-time-line-4{filter:url(#d-time-line-4);}.o-time-line-4{filter:url(#a-time-line-4);}"
            }
          </style>
          <filter
            id="a-time-line-4"
            x={153.393}
            y={0}
            width={221.214}
            height={225.605}
            filterUnits="userSpaceOnUse"
          >
            <feOffset dy={3} />
            <feGaussianBlur stdDeviation={3} result="b" />
            <feFlood floodOpacity={0.502} />
            <feComposite operator="in" in2="b" />
            <feComposite in="SourceGraphic" />
          </filter>
          <pattern
            id="c-time-line-4"
            width={1}
            height={1}
            viewBox="-14.876 -117.981 637.397 651.172"
          >
            <image
              preserveAspectRatio="xMidYMid slice"
              width={607.645}
              height={207.605}
              xlinkHref="/images/mobile/rewards/carousel-2.webp"
            />
          </pattern>
          <filter
            id="d-time-line-4"
            x={364.227}
            y={34.869}
            width={162.739}
            height={165.867}
            filterUnits="userSpaceOnUse"
          >
            <feOffset dy={3} />
            <feGaussianBlur stdDeviation={3} result="e" />
            <feFlood floodOpacity={0.502} />
            <feComposite operator="in" in2="e" />
            <feComposite in="SourceGraphic" />
          </filter>
          <pattern
            id="f-time-line-4"
            width={1}
            height={1}
            patternTransform="translate(470.062 295.735) rotate(-180)"
            viewBox="-118.766 -94.972 305.844 312.454"
          >
            <image
              preserveAspectRatio="xMidYMid slice"
              width={235.031}
              height={147.867}
              xlinkHref="/images/mobile/rewards/carousel-1.webp"
            />
          </pattern>
          <filter
            id="g-time-line-4"
            x={0}
            y={34.869}
            width={162.739}
            height={165.867}
            filterUnits="userSpaceOnUse"
          >
            <feOffset dy={3} />
            <feGaussianBlur stdDeviation={3} result="h" />
            <feFlood floodOpacity={0.502} />
            <feComposite operator="in" in2="h" />
            <feComposite in="SourceGraphic" />
          </filter>
          <pattern
            id="i-time-line-4"
            width={1}
            height={1}
            patternTransform="translate(450.062 295.735) rotate(-180)"
            viewBox="-82 -94.972 316.844 312.454"
          >
            <image
              preserveAspectRatio="xMidYMid slice"
              width={236.069}
              height={147.867}
              xlinkHref="/images/mobile/rewards/ComponentTMP_0-image3.png"
            />
          </pattern>
          <filter
            id="j-time-line-4"
            x={120.107}
            y={221.613}
            width={84.573}
            height={49.58}
            filterUnits="userSpaceOnUse"
          >
            <feOffset dy={3} />
            <feGaussianBlur stdDeviation={3} result="k" />
            <feFlood floodOpacity={0.6} />
            <feComposite operator="in" in2="k" />
            <feComposite in="SourceGraphic" />
          </filter>
          <filter
            id="l-time-line-4"
            x={323.32}
            y={221.613}
            width={84.573}
            height={49.58}
            filterUnits="userSpaceOnUse"
          >
            <feOffset dy={3} />
            <feGaussianBlur stdDeviation={3} result="m" />
            <feFlood floodOpacity={0.6} />
            <feComposite operator="in" in2="m" />
            <feComposite in="SourceGraphic" />
          </filter>
        </defs>
        <g transform="translate(-47.483 188.947)">
          <g className="o-time-line-4" transform="matrix(1, 0, 0, 1, -9, -6)">
            <path
              className="a-time-line-4"
              d="M584.12-69h-185.5c-5.335,0-9.459,5.792-8.787,12.339l19.415,185.689c.562,5.474,4.327,9.578,8.787,9.578H564.1c4.447,0,8.205-4.08,8.782-9.535L592.9-56.619C593.6-63.18,589.468-69,584.12-69"
              transform="translate(-227.37 75)"
            />
          </g>
          <path
            className="b-time-line-4"
            d="M584.12-69h-185.5c-5.335,0-9.459,5.792-8.787,12.339l19.415,185.689c.562,5.474,4.327,9.578,8.787,9.578H564.1c4.447,0,8.205-4.08,8.782-9.535L592.9-56.619C593.6-63.18,589.468-69,584.12-69"
            transform="translate(-236.372 69)"
          />
          <text className="c-time-line-4" transform="translate(53.87 147.303)">
            <tspan x={-58.076} y={7}>
              {t("Certificado Novatécnica Sistema ")}
            </tspan>
            <tspan x={-42.745} y={16}>
              {t("de gestión de calidad en ")}
            </tspan>
            <tspan x={-54.289} y={25}>
              {t("dispositivos médicos ISO 13485")}
            </tspan>
          </text>
          <g className="d-time-line-4">
            <g className="n-time-line-4" transform="matrix(1, 0, 0, 1, -9, -6)">
              <path
                className="a-time-line-4"
                d="M138.43,0H6.31C2.51,0-.427,4.125.051,8.789L13.879,141.046c.4,3.9,3.082,6.822,6.258,6.822H124.172c3.167,0,5.844-2.906,6.255-6.792L144.685,8.818C145.179,4.145,142.239,0,138.43,0"
                transform="translate(517.97 188.74) rotate(180)"
              />
            </g>
            <path
              className="e-time-line-4"
              d="M138.43,0H6.31C2.51,0-.427,4.125.051,8.789L13.879,141.046c.4,3.9,3.082,6.822,6.258,6.822H124.172c3.167,0,5.844-2.906,6.255-6.792L144.685,8.818C145.179,4.145,142.239,0,138.43,0"
              transform="translate(508.966 182.736) rotate(180)"
            />
            <text
              className="f-time-line-4"
              transform="translate(448.097 149.303)"
            >
              <tspan x={-56.704} y={8}>
                {t("Certificado Amarey Nova ")}
              </tspan>
              <tspan x={-41.022} y={19}>
                {t("Medical ISO 90001")}
              </tspan>
            </text>
          </g>
          <g className="d-time-line-4">
            <g className="m-time-line-4" transform="matrix(1, 0, 0, 1, -9, -6)">
              <path
                className="a-time-line-4"
                d="M138.43,0H6.31C2.51,0-.427,4.125.051,8.789L13.879,141.046c.4,3.9,3.082,6.822,6.258,6.822H124.172c3.167,0,5.844-2.906,6.255-6.792L144.685,8.818C145.179,4.145,142.239,0,138.43,0"
                transform="translate(153.74 188.74) rotate(180)"
              />
            </g>
            <path
              className="g-time-line-4"
              d="M138.43,0H6.31C2.51,0-.427,4.125.051,8.789L13.879,141.046c.4,3.9,3.082,6.822,6.258,6.822H124.172c3.167,0,5.844-2.906,6.255-6.792L144.685,8.818C145.179,4.145,142.239,0,138.43,0"
              transform="translate(144.739 182.736) rotate(180)"
            />
          </g>
          <text
            className="h-time-line-4"
            transform="translate(177.679 125.803)"
          >
            <tspan x={selectedLanguage === "es" ? 5.326 : 25.326} y={9}>
              {t("Certificación OEA (Operador ")}
            </tspan>
            <tspan x={selectedLanguage === "es" ? 5.151 : -5.151} y={21}>
              {t("Económico Autorizado) de la ")}
            </tspan>
            <tspan x={selectedLanguage === "es" ? 18.981 : -2.981} y={33}>
              {t("DIAN, obtenida en 2001, ")}
            </tspan>
            <tspan x={selectedLanguage === "es" ? 4.196 : 2.196} y={45}>
              {t("demostrando la seguridad en ")}
            </tspan>
            <tspan x={selectedLanguage === "es" ? 17.831 : 0} y={57}>
              {selectedLanguage === 'es' ? t("la cadena de suministro ") : t("la cadena de suministro ").split(' ').slice(0,3).join(' ')}
            </tspan>
            {selectedLanguage === "en" && (
              <tspan x={67.831} y={69}>
                {t("la cadena de suministro ").split(' ').slice(3,4).join(' ')}
              </tspan>
            )}
          </text>
          <rect
            className="i-time-line-4"
            width={24.022}
            height={5.837}
            rx={2.919}
            transform="translate(199.512 247.356)"
          />
          <rect
            className="i-time-line-4"
            width={24.022}
            height={5.837}
            rx={2.919}
            transform="translate(228.497 247.356)"
          />
          <rect
            className="i-time-line-4"
            width={24.022}
            height={5.837}
            rx={2.919}
            transform="translate(257.481 247.356)"
          />
          <rect
            className="j-time-line-4"
            width={24.022}
            height={5.837}
            rx={2.919}
            transform="translate(286.466 247.356)"
          />
          <g transform="translate(120.107 221.613)" onClick={onPrev}>
            <g
              className="l-time-line-4"
              transform="matrix(1, 0, 0, 1, -129.11, -227.61)"
            >
              <path
                className="j-time-line-4"
                d="M0,0H29.238A36.583,36.583,0,0,1,63.295,23.224l3.278,8.356H38.535A38.5,38.5,0,0,1,2.5,6.64Z"
                transform="translate(129.11 227.61)"
              />
            </g>
            <path
              className="a-time-line-4"
              d="M7.283,0l7.283,12.485H0Z"
              transform="translate(27.052 23.063) rotate(-90)"
            />
          </g>
          <g transform="translate(323.32 221.613)" onClick={onNext}>
            <g
              className="k-time-line-4"
              transform="matrix(1, 0, 0, 1, -332.32, -227.61)"
            >
              <path
                className="j-time-line-4"
                d="M66.573,0H37.335A36.583,36.583,0,0,0,3.278,23.224L0,31.58H28.038A38.5,38.5,0,0,0,64.073,6.64Z"
                transform="translate(332.32 227.61)"
              />
            </g>
            <path
              className="a-time-line-4"
              d="M7.283,0l7.283,12.485H0Z"
              transform="translate(39.521 8.497) rotate(90)"
            />
          </g>
        </g>
      </React.Fragment>
    ),
  },
];
// transform="translate(22 125.803)"
