import React from "react";
import { useTranslation } from "react-i18next";
import { useLanguage } from "context/language";

export interface IEtic {
  onNext: (number: number) => void;
}

const View2: React.FC<IEtic> = ({ onNext }): JSX.Element => {
  const { t } = useTranslation();

  const { selectedLanguage } = useLanguage();

  return (
    <svg viewBox="165 39 414 909.512">
      <defs>
        <style>
          {
            ".a-reward-2-mobile,.c-reward-2-mobile{fill:#e40032;}.b-reward-2-mobile,.k-reward-2-mobile{fill:#fff;}.c-reward-2-mobile{stroke:#e40032;}.d-reward-2-mobile,.h-reward-2-mobile,.i-reward-2-mobile,.j-reward-2-mobile{fill:#001f5f;}.d-reward-2-mobile{stroke:#001f5f;}.e-reward-2-mobile{clip-path:url(#a-reward-2-mobile);}.f-reward-2-mobile{clip-path:url(#b-reward-2-mobile);}.g-reward-2-mobile{fill:url(#c-reward-2-mobile);}.h-reward-2-mobile{font-size:14px;font-family:Silka-Regular, Silka;}.i-reward-2-mobile{font-size:32px;}.i-reward-2-mobile,.k-reward-2-mobile{font-family:Kiona-Bold;font-weight:700;}.k-reward-2-mobile{font-size:18px;}.l-reward-2-mobile{fill:rgba(67,67,67,0.3);}.m-reward-2-mobile{filter:url(#h-reward-2-mobile);}.n-reward-2-mobile{filter:url(#f-reward-2-mobile);}.o-reward-2-mobile{filter:url(#d-reward-2-mobile);}"
          }
        </style>
        <clipPath id="a-reward-2-mobile">
          <rect
            className="a-reward-2-mobile"
            width={413.475}
            height={301.615}
            transform="translate(0 0)"
          />
        </clipPath>
        <clipPath id="b-reward-2-mobile">
          <rect
            className="b-reward-2-mobile"
            width={409.525}
            height={297.384}
            transform="translate(0 0)"
          />
        </clipPath>
        <pattern
          id="c-reward-2-mobile"
          width={1}
          height={1}
          viewBox="121.988 122.21 239.001 173.555"
        >
          <image
            preserveAspectRatio="xMidYMid slice"
            width={528.683}
            height={297.384}
            xlinkHref="/images/mobile/etic/etic-2.webp"
          />
        </pattern>
        <filter
          id="d-reward-2-mobile"
          x={227.994}
          y={658.774}
          width={291.799}
          height={69.389}
          filterUnits="userSpaceOnUse"
        >
          <feOffset dy={3} />
          <feGaussianBlur stdDeviation={3} result="e" />
          <feFlood floodOpacity={0.4} />
          <feComposite operator="in" in2="e" />
          <feComposite in="SourceGraphic" />
        </filter>
        <filter
          id="f-reward-2-mobile"
          x={227.994}
          y={738.774}
          width={291.799}
          height={69.389}
          filterUnits="userSpaceOnUse"
        >
          <feOffset dy={3} />
          <feGaussianBlur stdDeviation={3} result="g" />
          <feFlood floodOpacity={0.4} />
          <feComposite operator="in" in2="g" />
          <feComposite in="SourceGraphic" />
        </filter>
        <filter
          id="h-reward-2-mobile"
          x={157.894}
          y={33}
          width={432}
          height={56}
          filterUnits="userSpaceOnUse"
        >
          <feOffset dy={3} />
          <feGaussianBlur stdDeviation={3} result="i" />
          <feFlood floodOpacity={0.302} />
          <feComposite operator="in" in2="i" />
          <feComposite in="SourceGraphic" />
        </filter>
      </defs>
      <g>
        <rect
          className="b-reward-2-mobile"
          width={414}
          height={896}
          transform="translate(166.394)"
        />
        <g transform="translate(-148.346)">
          <path
            className="c-reward-2-mobile"
            d="M779.848,453.3l-12.54,26.591c-22.388,47.474-74.461,78.149-132.658,78.149H259.215v1.285H634.65a158.592,158.592,0,0,0,80.522-21.544A136.594,136.594,0,0,0,759.9,495.919a122.129,122.129,0,0,0,8.753-15.533L781.424,453.3Z"
            transform="translate(1132.164 1402.313) rotate(180)"
          />
          <path
            className="d-reward-2-mobile"
            d="M312.96,778.8,382.628,631.05c19.455-41.252,64.7-67.908,115.273-67.908H926.475v-1.117H497.9a137.812,137.812,0,0,0-69.969,18.721c-20.79,12.247-36.859,29.493-46.47,49.874L311.735,778.5l1.225.306"
            transform="translate(1074.822 1443.575) rotate(180)"
          />
          <path
            className="d-reward-2-mobile"
            d="M312.349,670.709l34.928-74.077c9.754-20.682,32.439-34.046,57.793-34.046h214.87v-.56H405.071a69.094,69.094,0,0,0-35.08,9.386,57.862,57.862,0,0,0-23.3,25.005l-34.958,74.139.614.153"
            transform="translate(828.475 891.529) rotate(180)"
          />
        </g>
        <g transform="translate(166.919 0.004)">
          <g className="e-reward-2-mobile" transform="translate(0 -0.004)">
            <path
              className="a-reward-2-mobile"
              d="M0,0,26.544,204.69c7.607,58.661,24.688,96.922,72.542,96.922H413.475V0Z"
              transform="translate(0 0.004)"
            />
          </g>
        </g>
        <g transform="translate(170.869 0.004)">
          <g className="f-reward-2-mobile" transform="translate(0 -0.004)">
            <path
              className="g-reward-2-mobile"
              d="M0,0,26.291,201.818c7.534,57.838,24.452,95.562,71.849,95.562H409.525V0Z"
              transform="translate(0 0.004)"
            />
          </g>
        </g>
        <text className="h-reward-2-mobile" transform="translate(204.394 422)">
          <tspan x={0} y={13}>
            {t("En el Grupo Amarey estamos comprometidos en ")}
          </tspan>
          <tspan x={0} y={29}>
            {t("mantener relaciones honestas, constructivas e ")}
          </tspan>
          <tspan x={0} y={45}>
            {t("idóneas con nuestros grupos de interés. Guiados ")}
          </tspan>
          <tspan x={0} y={61}>
            {t("por nuestros valores corporativos hemos creado ")}
          </tspan>
          <tspan x={0} y={77}>
            {t("el presente Código de ética, a través del cual ")}
          </tspan>
          <tspan x={0} y={93}>
            {t("establecemos las reglas de conducta ética que ")}
          </tspan>
          <tspan x={0} y={109}>
            {t("deben ser seguidas y observadas en su ")}
          </tspan>
          <tspan x={0} y={125}>
            {t("comportamiento diario por todas las personas ")}
          </tspan>
          <tspan x={0} y={141}>
            {t("vinculadas a la empresa, tanto los miembros de ")}
          </tspan>
          <tspan x={0} y={157}>
            {t("la junta directiva, directores, empleados de ")}
          </tspan>
          <tspan x={0} y={173}>
            {t("todos los niveles, proveedores, asesores y ")}
          </tspan>
          <tspan x={0} y={189}>
            {t("contratistas, así como para los empleados ")}
          </tspan>
          <tspan x={0} y={205}>
            {t("indirectos. ")}
          </tspan>
        </text>
        <text className="i-reward-2-mobile" transform="translate(202.394 359)">
          <tspan x={33.592} y={32}>
            {t("Código de ética")}
          </tspan>
        </text>
        <a
          href="https://grupoamarey.com/pdf/codigo-etica.pdf"
          target="_blank"
          rel="noreferrer"
        >
          <g transform="translate(166.394 -3645.115)">
            <g
              className="o-reward-2-mobile"
              transform="matrix(1, 0, 0, 1, -166.89, 3645.12)"
            >
              <path
                className="j-reward-2-mobile"
                d="M273.8,0H56.16C33.523,0,13.2,15,4.93,37.792L0,51.389H215.834c24.117,0,45.71-16.167,54.205-40.584Z"
                transform="translate(236.99 664.77)"
              />
            </g>
            <text
              className="k-reward-2-mobile"
              transform={
                selectedLanguage === "es"
                  ? "translate(110 4342.584)"
                  : "translate(105 4338.584)"
              }
            >
              <tspan x={selectedLanguage === 'es' ? 0 : 55} y={selectedLanguage === 'es' ? 0 : -5}>
                {selectedLanguage === 'es' ? t("Ver Código de ética") : t("Ver Código de ética").split(' ').slice(0,2).join(' ')}
              </tspan>
              {selectedLanguage === "en" && (
                <tspan x={20} y={15}>
                  {t("Ver Código de ética").split(' ').slice(2,8).join(' ')}
                </tspan>
              )}
            </text>
          </g>
        </a>
        <a
          href="https://grupoamarey.com/pdf/manualcompliance.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <g transform="translate(166.394 -3565.115)">
            <g
              className="n-reward-2-mobile"
              transform="matrix(1, 0, 0, 1, -166.89, 3565.12)"
            >
              <path
                className="j-reward-2-mobile"
                d="M273.8,0H56.16C33.523,0,13.2,15,4.93,37.792L0,51.389H215.834c24.117,0,45.71-16.167,54.205-40.584Z"
                transform="translate(236.99 744.77)"
              />
            </g>
            <text
              className="k-reward-2-mobile"
              transform="translate(207 4332.584)"
            >
              <tspan x={selectedLanguage === "es" ? -70.38 : -40.38} y={0}>
                {t("Ver Manual de")}
              </tspan>
              <tspan x={selectedLanguage === "es" ? -57.816 : -97.816} y={20}>
                {t("Compliance")}
              </tspan>
            </text>
          </g>
        </a>
        <g
          className="m-reward-2-mobile"
          transform="matrix(1, 0, 0, 1, -0.5, 0)"
        >
          <rect
            className="l-reward-2-mobile"
            width={414}
            height={38}
            transform="translate(166.89 39)"
          />
        </g>
        <text className="k-reward-2-mobile" transform="translate(373.394 65)">
          <tspan x={-95.733} y={0}>
            {t("ÉTICA Y COMPLIANCE ")}
          </tspan>
        </text>
        <path
          className="b-reward-2-mobile"
          d="M7,0l7,11H0Z"
          transform="translate(202.394 65) rotate(-90)"
          onClick={() => onNext(0)}
        />
      </g>
    </svg>
  );
};

export default View2;
