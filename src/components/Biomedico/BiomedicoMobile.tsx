import { useLanguage } from "context/language";
import React from "react";
import { useTranslation } from "react-i18next";

const BiomedicoMobile: React.FC = (): JSX.Element => {
  /** States */
  const [step, setStep] = React.useState<number>(0);

  const { t } = useTranslation();
  const { selectedLanguage } = useLanguage();

  return (
    <React.Fragment>
      {step === 0 ? (
        <svg viewBox="0 0 414 850">
          <defs>
            <style>
              {
                ".a-reward-2-mobile{fill:none;}.b-reward-2-mobile{clip-path:url(#a-reward-2-mobile);}.c-reward-2-mobile{fill:#e7002a;stroke:#e7002a;}.d-reward-2-mobile,.e-reward-2-mobile,.g-reward-2-mobile,.h-reward-2-mobile{fill:#001f5f;}.d-reward-2-mobile{stroke:#001f5f;}.e-reward-2-mobile{font-size:14px;font-family:Silka-Regular, Silka;}.f-reward-2-mobile{font-family:Silka-SemiBold, Silka;font-weight:600;}.g-reward-2-mobile{font-size:32px;}.g-reward-2-mobile,.j-reward-2-mobile{font-family:'Kiona-Bold';font-weight:700;}.i-reward-2-mobile{fill:url(#d-reward-2-mobile);}.j-reward-2-mobile{fill:#fff;font-size:18px;}.k-reward-2-mobile{filter:url(#e-reward-2-mobile);}.l-reward-2-mobile{filter:url(#b-reward-2-mobile);}"
              }
            </style>
            <clipPath id="a-reward-2-mobile">
              <rect
                className="a-reward-2-mobile"
                width={414}
                height={896.023}
              />
            </clipPath>
            <filter
              id="b-reward-2-mobile"
              x={0}
              y={0}
              width={510.432}
              height={478.671}
              filterUnits="userSpaceOnUse"
            >
              <feOffset dy={3} />
              <feGaussianBlur stdDeviation={3} result="c" />
              <feFlood floodOpacity={0.302} />
              <feComposite operator="in" in2="c" />
              <feComposite in="SourceGraphic" />
            </filter>
            <pattern
              id="d-reward-2-mobile"
              width={1}
              height={1}
              viewBox="58.12 53.531 490.013 457.475"
            >
              <image
                preserveAspectRatio="xMidYMid slice"
                width={490.013}
                height={652.598}
                xlinkHref="/images/mobile/biomedic/biomedico-3.webp"
              />
            </pattern>
            <filter
              id="e-reward-2-mobile"
              x={92}
              y={765}
              width={248}
              height={61.169}
              filterUnits="userSpaceOnUse"
            >
              <feOffset dy={3} />
              <feGaussianBlur stdDeviation={3} result="f" />
              <feFlood floodOpacity={0.4} />
              <feComposite operator="in" in2="f" />
              <feComposite in="SourceGraphic" />
            </filter>
          </defs>
          <g>
            <g className="b-reward-2-mobile" transform="translate(0 0)">
              <path
                className="c-reward-2-mobile"
                d="M600.14.019v.52h35.81V.521h36.322c17.5,0,33.165,12.4,39.9,31.586l.013.037,3.524,10.044h.474l-3.607-10.281c-.126-.362-.257-.72-.391-1.077A50.5,50.5,0,0,0,696.49,8.708,38.811,38.811,0,0,0,672.272,0h-59.79V.019Z"
                transform="translate(-635.182 285.066)"
              />
              <path
                className="c-reward-2-mobile"
                d="M743.71.02V.562H699.4V.542H654.466a53.34,53.34,0,0,0-49.364,32.9l-.016.039-4.36,10.463h-.587l4.463-10.71c.156-.377.318-.75.484-1.122.528-1.192,1.1-2.361,1.745-3.577A54.028,54.028,0,0,1,654.466,0H728.44V.02Z"
                transform="translate(-265.71 852.076)"
              />
              <path
                className="d-reward-2-mobile"
                d="M1700.965,802.11l10.055,3.632q1,.359,1.977.739c16.539,6.355,30.547,16.58,40.607,29.66a77.834,77.834,0,0,1,12.591,23.888,72.115,72.115,0,0,1,3.393,21.879V994.9h-.956V881.907c0-33.079-22.758-62.676-57.979-75.4l-.069-.024-9.62-3.475Z"
                transform="translate(-1733.589 -72.878)"
              />
            </g>
            <g transform="translate(0 1)">
              <text
                className="e-reward-2-mobile"
                transform="translate(208 624)"
              >
                <tspan x={-136.549} y={13}>
                  {t("Somos la compañía de servicio técnico")}
                </tspan>
                <tspan x={-152.299} y={29}>
                  {t("biomédico más grande del país y la primera")}
                </tspan>
                <tspan
                  x={selectedLanguage === "es" ? -154.175 : -152.175}
                  y={45}
                  xmlSpace="preserve"
                >
                  {t("empresa a nivel nacional en certificarse con")}
                </tspan>
                <tspan
                  x={selectedLanguage === "es" ? -137.179 : -148.179}
                  y={61}
                >
                  {t(" la ")}
                </tspan>
                <tspan className="f-reward-2-mobile" y={61}>
                  {t(" norma ISO 13485 de ICONTEC")}
                </tspan>
                <tspan y={61} xmlSpace="preserve">
                  {t("para el")}
                </tspan>
                <tspan
                  x={selectedLanguage === "es" ? -142.142 : -100.142}
                  y={77}
                >
                  {t(" servicio técnico de dispositivos médicos.")}
                </tspan>
              </text>
              <text className="g-reward-2-mobile" transform="translate(46 518)">
                <tspan x={selectedLanguage === "es" ? 41.08 : 60.08} y={32}>
                  {t("mantenimiento ")}
                </tspan>
                <tspan x={selectedLanguage === "es" ? 82.568 : 42.568} y={66}>
                  {t("biomédico ")}
                </tspan>
              </text>
              <g
                className="l-reward-2-mobile"
                transform="matrix(1, 0, 0, 1, -9, -6)"
              >
                <path
                  className="h-reward-2-mobile"
                  d="M.257,33.423l29.069,229.35L46.018,394.449c9.233,40.078,31.022,66.222,55.193,66.222H492.432V0H27.179C10.705,0-1.982,15.745.257,33.423"
                  transform="translate(9 6)"
                />
              </g>
              <path
                className="i-reward-2-mobile"
                d="M.256,33.191,29.182,260.95l16.61,130.763c9.187,39.8,30.869,65.762,54.922,65.762h389.3V0H27.046C10.653,0-1.973,15.636.256,33.191"
                transform="translate(2.419)"
              />
              <g onClick={() => setStep(1)}>
                <g
                  className="k-reward-2-mobile"
                  transform="matrix(1, 0, 0, 1, -9, -6)"
                >
                  <path
                    className="h-reward-2-mobile"
                    d="M230,0H47.176C28.161,0,11.086,12.6,4.142,31.746L0,43.169H181.308c20.259,0,38.4-13.581,45.534-34.092Z"
                    transform="translate(101 771)"
                  />
                </g>
                <text
                  className="j-reward-2-mobile"
                  transform="translate(147.5 793.584)"
                >
                  <tspan x={0} y={0}>
                    {t("Conoce Más")}
                  </tspan>
                </text>
              </g>
            </g>
          </g>
        </svg>
      ) : step === 1 ? (
        <svg viewBox="91 45 414 850">
          <defs>
            <style>
              {
                ".a-reward-2-mobile{fill:none;}.b-reward-2-mobile{clip-path:url(#a-reward-2-mobile);}.c-reward-2-mobile{fill:#e7002a;stroke:#e7002a;}.d-reward-2-mobile,.e-reward-2-mobile,.h-reward-2-mobile{fill:#001f5f;}.d-reward-2-mobile{stroke:#001f5f;}.e-reward-2-mobile,.l-reward-2-mobile{font-size:14px;}.e-reward-2-mobile,.g-reward-2-mobile,.l-reward-2-mobile{font-family:Silka-SemiBold, Silka;font-weight:600;}.f-reward-2-mobile{font-family:Silka-Regular, Silka;font-weight:400;}.i-reward-2-mobile{fill:url(#d-reward-2-mobile);}.j-reward-2-mobile,.l-reward-2-mobile,.m-reward-2-mobile{fill:#fff;}.j-reward-2-mobile{font-size:18px;font-family:'Kiona-Bold';font-weight:700;}.k-reward-2-mobile{fill:rgba(67,67,67,0.3);}.n-reward-2-mobile{filter:url(#g-reward-2-mobile);}.o-reward-2-mobile{filter:url(#e-reward-2-mobile);}.p-reward-2-mobile{filter:url(#b-reward-2-mobile);}"
              }
            </style>
            <clipPath id="a-reward-2-mobile">
              <rect
                className="a-reward-2-mobile"
                width={414}
                height={896.023}
              />
            </clipPath>
            <filter
              id="b-reward-2-mobile"
              x={0}
              y={0}
              width={510.432}
              height={478.671}
              filterUnits="userSpaceOnUse"
            >
              <feOffset dy={3} />
              <feGaussianBlur stdDeviation={3} result="c" />
              <feFlood floodOpacity={0.302} />
              <feComposite operator="in" in2="c" />
              <feComposite in="SourceGraphic" />
            </filter>
            <pattern
              id="d-reward-2-mobile"
              width={1}
              height={1}
              viewBox="-80.144 78.472 530.909 495.655"
            >
              <image
                preserveAspectRatio="xMidYMid slice"
                width={490.013}
                height={652.598}
                xlinkHref="/images/mobile/biomedic/biomedic-4.webp"
              />
            </pattern>
            <filter
              id="e-reward-2-mobile"
              x={206.432}
              y={785}
              width={184}
              height={61.169}
              filterUnits="userSpaceOnUse"
            >
              <feOffset dy={3} />
              <feGaussianBlur stdDeviation={3} result="f" />
              <feFlood floodOpacity={0.4} />
              <feComposite operator="in" in2="f" />
              <feComposite in="SourceGraphic" />
            </filter>
            <filter
              id="g-reward-2-mobile"
              x={82.432}
              y={39}
              width={432}
              height={56}
              filterUnits="userSpaceOnUse"
            >
              <feOffset dy={3} />
              <feGaussianBlur stdDeviation={3} result="h" />
              <feFlood floodOpacity={0.302} />
              <feComposite operator="in" in2="h" />
              <feComposite in="SourceGraphic" />
            </filter>
          </defs>
          <g transform="translate(8.851 5)">
            <g transform="translate(82.581 0)">
              <g className="b-reward-2-mobile" transform="translate(0 0)">
                <path
                  className="c-reward-2-mobile"
                  d="M600.14.019v.52h35.81V.521h36.322c17.5,0,33.165,12.4,39.9,31.586l.013.037,3.524,10.044h.474l-3.607-10.281c-.126-.362-.257-.72-.391-1.077A50.5,50.5,0,0,0,696.49,8.708,38.811,38.811,0,0,0,672.272,0h-59.79V.019Z"
                  transform="translate(-635.182 285.066)"
                />
                <path
                  className="c-reward-2-mobile"
                  d="M743.71.02V.562H699.4V.542H654.466a53.34,53.34,0,0,0-49.364,32.9l-.016.039-4.36,10.463h-.587l4.463-10.71c.156-.377.318-.75.484-1.122.528-1.192,1.1-2.361,1.745-3.577A54.028,54.028,0,0,1,654.466,0H728.44V.02Z"
                  transform="translate(-265.71 852.076)"
                />
                <path
                  className="d-reward-2-mobile"
                  d="M1700.965,802.11l10.055,3.632q1,.359,1.977.739c16.539,6.355,30.547,16.58,40.607,29.66a77.834,77.834,0,0,1,12.591,23.888,72.115,72.115,0,0,1,3.393,21.879V994.9h-.956V881.907c0-33.079-22.758-62.676-57.979-75.4l-.069-.024-9.62-3.475Z"
                  transform="translate(-1733.589 -72.878)"
                />
              </g>
            </g>
            <g transform="translate(0 1)">
              <text
                className="e-reward-2-mobile"
                transform="translate(118.581 531)"
              >
                <tspan x={0} y={13}>
                  {t("Ofrecemos soluciones de mantenimiento")}
                </tspan>
                <tspan x={0} y={29}>
                  {t(" biomédico ")}
                </tspan>
                <tspan className="f-reward-2-mobile" y={29} xmlSpace="preserve">
                  {t("para todos los actores del sector")}
                </tspan>
                <tspan className="f-reward-2-mobile" x={0} y={45}>
                  {t("salud. Nuestro apoyo es ejecutado con")}
                </tspan>
                <tspan className="f-reward-2-mobile" x={0} y={61}>
                  {t("entrenamiento, experiencia e innovación en los")}
                </tspan>
                <tspan
                  className="f-reward-2-mobile"
                  x={0}
                  y={77}
                  xmlSpace="preserve"
                >
                  {t("procesos humanos y técnicos.")}
                </tspan>
                <tspan className="f-reward-2-mobile">
                  <tspan x={0} y={93} />
                  <tspan x={0} y={109}>
                    {t("Nuestro modelo de")}
                  </tspan>
                  <tspan className="g-reward-2-mobile" y={109}>
                    {t("mantenimiento inhouse y")}
                  </tspan>
                  <tspan className="g-reward-2-mobile" x={0} y={125}>
                    {t("mantenimiento posventa")}
                  </tspan>
                  <tspan y={125} xmlSpace="preserve">
                    {t("nos permiten construir")}
                  </tspan>
                  <tspan x={0} y={141}>
                    {t("soluciones personalizadas para cada cliente,")}
                  </tspan>
                  <tspan x={0} y={157}>
                    {t("asegurando los más altos estándares de calidad")}
                  </tspan>
                  <tspan x={0} y={173}>
                    {t("y un plan de mantenimiento eficiente para toda")}
                  </tspan>
                  <tspan x={0} y={189}>
                    {t("  la ")}
                  </tspan>
                  <tspan className="g-reward-2-mobile" y={189}>
                    {t(" tecnología biomédica involucrada. ")}
                  </tspan>
                </tspan>
              </text>
              <g
                className="p-reward-2-mobile"
                transform="matrix(1, 0, 0, 1, -8.85, -6)"
              >
                <path
                  className="h-reward-2-mobile"
                  d="M492.175,33.423l-29.069,229.35L446.414,394.449c-9.233,40.078-31.022,66.222-55.193,66.222H0V0H465.253c16.474,0,29.162,15.745,26.923,33.423"
                  transform="translate(9 6)"
                />
              </g>
              <path
                className="i-reward-2-mobile"
                d="M489.757,33.191,460.831,260.95l-16.61,130.763c-9.187,39.8-30.869,65.762-54.922,65.762H0V0H462.967c16.394,0,29.019,15.636,26.79,33.191"
                transform="translate(0)"
              />
              <g
                className="o-reward-2-mobile"
                transform="matrix(1, 0, 0, 1, -8.85, -6)"
                onClick={() => setStep(2)}
              >
                <path
                  className="h-reward-2-mobile"
                  d="M166,0H34.049C20.325,0,8,12.6,2.989,31.746L0,43.169H130.857c14.622,0,27.713-13.581,32.864-34.092Z"
                  transform="translate(215.43 791)"
                />
              </g>
              <text
                className="j-reward-2-mobile"
                transform="translate(270.081 813.584)"
              >
                <tspan x={0} y={0}>
                  {t("Más")}
                </tspan>
              </text>
              <g
                className="n-reward-2-mobile"
                transform="matrix(1, 0, 0, 1, -8.85, -6)"
              >
                <rect
                  className="k-reward-2-mobile"
                  width={414}
                  height={38}
                  transform="translate(91.43 45)"
                />
              </g>
              <text
                className="l-reward-2-mobile"
                transform="translate(289.581 63)"
              >
                <tspan x={-93.114} y={0}>
                  {t("Mantenimiento biomédico")}
                </tspan>
              </text>
              <path
                className="m-reward-2-mobile"
                d="M7,0l7,11H0Z"
                transform="translate(118.581 65) rotate(-90)"
                onClick={() => setStep(0)}
              />
            </g>
          </g>
        </svg>
      ) : (
        <svg viewBox="0 45 414 850">
          <defs>
            <style>
              {
                ".a-reward-2-mobile{fill:none;}.b-reward-2-mobile{clip-path:url(#a-reward-2-mobile);}.c-reward-2-mobile{fill:#e7002a;stroke:#e7002a;}.d-reward-2-mobile,.e-reward-2-mobile,.h-reward-2-mobile{fill:#001f5f;}.d-reward-2-mobile{stroke:#001f5f;}.e-reward-2-mobile,.j-reward-2-mobile,.l-reward-2-mobile{font-size:14px;}.e-reward-2-mobile,.j-reward-2-mobile{font-family:Silka-Regular, Silka;}.f-reward-2-mobile,.i-reward-2-mobile{fill:#e40032;}.f-reward-2-mobile,.g-reward-2-mobile,.h-reward-2-mobile{font-size:17px;}.f-reward-2-mobile,.g-reward-2-mobile,.h-reward-2-mobile,.l-reward-2-mobile{font-family:Silka-SemiBold, Silka;font-weight:600;}.j-reward-2-mobile{font-weight:400;}.k-reward-2-mobile{fill:rgba(67,67,67,0.3);}.l-reward-2-mobile,.n-reward-2-mobile{fill:#fff;}.m-reward-2-mobile{fill:url(#d-reward-2-mobile);}.o-reward-2-mobile{fill:url(#g-reward-2-mobile);}.p-reward-2-mobile{filter:url(#h-reward-2-mobile);}.q-reward-2-mobile{filter:url(#e-reward-2-mobile);}.r-reward-2-mobile{filter:url(#b-reward-2-mobile);}"
              }
            </style>
            <clipPath id="a-reward-2-mobile">
              <rect
                className="a-reward-2-mobile"
                width={414}
                height={896.023}
              />
            </clipPath>
            <filter
              id="b-reward-2-mobile"
              x={0}
              y={34}
              width={432}
              height={56}
              filterUnits="userSpaceOnUse"
            >
              <feOffset dy={3} />
              <feGaussianBlur stdDeviation={3} result="c" />
              <feFlood floodOpacity={0.302} />
              <feComposite operator="in" in2="c" />
              <feComposite in="SourceGraphic" />
            </filter>
            <pattern
              id="d-reward-2-mobile"
              width={1}
              height={1}
              viewBox="40.317 152.471 262.457 155.662"
            >
              <image
                preserveAspectRatio="xMidYMid slice"
                width={343.09}
                height={501.427}
                xlinkHref="/images/mobile/biomedic/biomedico-1.webp"
              />
            </pattern>
            <filter
              id="e-reward-2-mobile"
              x={35}
              y={299}
              width={361.09}
              height={221.485}
              filterUnits="userSpaceOnUse"
            >
              <feOffset dy={3} />
              <feGaussianBlur stdDeviation={3} result="f" />
              <feFlood floodOpacity={0.502} />
              <feComposite operator="in" in2="f" />
              <feComposite in="SourceGraphic" />
            </filter>
            <pattern
              id="g-reward-2-mobile"
              width={1}
              height={1}
              patternTransform="translate(757.18 994.906) rotate(-180)"
              viewBox="17.508 114.915 319.808 189.677"
            >
              <image
                preserveAspectRatio="xMidYMid slice"
                width={343.09}
                height={457.453}
                xlinkHref="/images/mobile/biomedic/biomedico-2.webp"
              />
            </pattern>
            <filter
              id="h-reward-2-mobile"
              x={35}
              y={620.485}
              width={361.09}
              height={221.485}
              filterUnits="userSpaceOnUse"
            >
              <feOffset dy={3} />
              <feGaussianBlur stdDeviation={3} result="i" />
              <feFlood floodOpacity={0.502} />
              <feComposite operator="in" in2="i" />
              <feComposite in="SourceGraphic" />
            </filter>
          </defs>
          <g>
            <g transform="translate(0 0)">
              <g className="b-reward-2-mobile" transform="translate(0 0)">
                <path
                  className="c-reward-2-mobile"
                  d="M600.14.019v.52h35.81V.521h36.322c17.5,0,33.165,12.4,39.9,31.586l.013.037,3.524,10.044h.474l-3.607-10.281c-.126-.362-.257-.72-.391-1.077A50.5,50.5,0,0,0,696.49,8.708,38.811,38.811,0,0,0,672.272,0h-59.79V.019Z"
                  transform="translate(-635.182 285.066)"
                />
                <path
                  className="c-reward-2-mobile"
                  d="M743.71.02V.562H699.4V.542H654.466a53.34,53.34,0,0,0-49.364,32.9l-.016.039-4.36,10.463h-.587l4.463-10.71c.156-.377.318-.75.484-1.122.528-1.192,1.1-2.361,1.745-3.577A54.028,54.028,0,0,1,654.466,0H728.44V.02Z"
                  transform="translate(-265.71 852.076)"
                />
                <path
                  className="d-reward-2-mobile"
                  d="M1700.965,802.11l10.055,3.632q1,.359,1.977.739c16.539,6.355,30.547,16.58,40.607,29.66a77.834,77.834,0,0,1,12.591,23.888,72.115,72.115,0,0,1,3.393,21.879V994.9h-.956V881.907c0-33.079-22.758-62.676-57.979-75.4l-.069-.024-9.62-3.475Z"
                  transform="translate(-1733.589 -72.878)"
                />
              </g>
            </g>
            <g transform="translate(0 40)">
              <text className="e-reward-2-mobile" transform="translate(45 88)">
                <tspan x={5.298} y={13}>
                  {t("Nuestras manos expertas pueden entender y ")}
                </tspan>
                <tspan x={11.5} y={29}>
                  {t("cuidar la tecnología para la tranquilidad de ")}
                </tspan>
                <tspan x={13.943} y={45}>
                  {t("nuestros clientes y proveedores, todo para ")}
                </tspan>
                <tspan x={2.547} y={61}>
                  {t("crear soluciones para el cuidado de la salud y ")}
                </tspan>
                <tspan x={113.798} y={77}>
                  {t("los pacientes. ")}
                </tspan>
              </text>
              <text className="e-reward-2-mobile" transform="translate(29 200)">
                <tspan x={selectedLanguage === "es" ? 0.354 : 50.354} y={13}>
                  {t("Atendemos una capacidad instalada cercana a los ")}
                </tspan>
                <tspan className="f-reward-2-mobile" x={4.668} y={31}>
                  {selectedLanguage === "es"
                    ? t("12.000 equipos ")
                    : t("12.000 equipos ").split(" ").slice(0, 5).join(" ")}
                </tspan>
                <tspan className="g-reward-2-mobile" y={31} xmlSpace="preserve">
                  {selectedLanguage === "es"
                    ? t("de marcas representadas")
                    : t("de marcas representadas")
                        .split(" ")
                        .slice(0, 5)
                        .join(" ")}
                </tspan>
                {selectedLanguage === "en" && (
                  <tspan className="g-reward-2-mobile" y={49} x={150}>
                    {t("de marcas representadas")
                      .split(" ")
                      .slice(5, 9)
                      .join(" ")}
                  </tspan>
                )}
              </text>
              <text
                className="h-reward-2-mobile"
                transform="translate(43 490.485)"
              >
                <tspan x={25.714} y={0}>
                  <tspan x={50.714} y={16}>
                    {t("Contamos con ")}
                  </tspan>
                  <tspan className="i-reward-2-mobile" y={16}>
                    {t("130 profesionales ")}
                  </tspan>
                </tspan>
                <tspan className="j-reward-2-mobile">
                  <tspan x={30.419} y={34}>
                    {t("dedicados al cuidado de la tecnología ")}
                  </tspan>
                  <tspan x={3.917} y={52}>
                    {t("biomédica y comprometidos con la seguridad ")}
                  </tspan>
                  <tspan x={106.656} y={70}>
                    {t("de los pacientes ")}
                  </tspan>
                </tspan>
              </text>
              <g
                className="r-reward-2-mobile"
                transform="matrix(1, 0, 0, 1, -9, -40)"
              >
                <rect
                  className="k-reward-2-mobile"
                  width={414}
                  height={38}
                  transform="translate(9 40)"
                />
              </g>
              <text className="l-reward-2-mobile" transform="translate(207 24)">
                <tspan x={-93.114} y={0}>
                  {t("Mantenimiento biomédico")}
                </tspan>
              </text>
              <g
                className="q-reward-2-mobile"
                transform="matrix(1, 0, 0, 1, -9, -40)"
              >
                <path
                  className="m-reward-2-mobile"
                  d="M379.7,305.241,366.655,489.273c-.376,4.858-2.9,8.5-5.9,8.5H56.047c-2.988,0-5.51-3.624-5.9-8.465L36.706,305.279c-.469-5.823,2.305-10.989,5.9-10.989H373.794c3.584,0,6.355,5.14,5.9,10.951"
                  transform="translate(7.35 10.71)"
                />
              </g>
              <path
                className="n-reward-2-mobile"
                d="M7,0l7,11H0Z"
                transform="translate(36 26) rotate(-90)"
                onClick={() => setStep(1)}
              />
              <g
                className="p-reward-2-mobile"
                transform="matrix(1, 0, 0, 1, -9, -40)"
              >
                <path
                  className="o-reward-2-mobile"
                  d="M379.7,305.241,366.655,489.273c-.376,4.858-2.9,8.5-5.9,8.5H56.047c-2.988,0-5.51-3.624-5.9-8.465L36.706,305.279c-.469-5.823,2.305-10.989,5.9-10.989H373.794c3.584,0,6.355,5.14,5.9,10.951"
                  transform="translate(423.74 1124.26) rotate(180)"
                />
              </g>
            </g>
          </g>
        </svg>
      )}
    </React.Fragment>
  );
};

export default BiomedicoMobile;
