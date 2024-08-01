export interface CarouselPortfolio {
    images: string
    title: string
    title_2?: string
    x: number
    x_selected: number
    x_2?: number
    to: string
    viewbox?: string
    viewbox_2?: string
    width?: string
    x_left ? : number
    x_left_2 ? :number
}

export const carouselPortfolio = (t: any, selectedLanguage: 'es' | 'en'): CarouselPortfolio[] => ([
    
    {
        images: '/images/services/Medicamentos.webp',
        title: t('Medicamentos'),
        x: selectedLanguage === 'es' ? 55 : 65,
        x_selected: 15,
        to: '/productos/medicamentos',
        viewbox: '0 6.532 241.811 269.735',
        viewbox_2: '0 6.532 241.811 269.735',
        x_left: selectedLanguage === 'es' ? 55 : 65
    },
    {
        images: '/images/image_portfolio_2.webp',
        title: t('Equipos Médicos'),
        x_selected: 15,
        x: selectedLanguage === 'es' ? 42.715 : 16.715,
        to: '/productos/equipos-medicos',
        viewbox: '0 6.532 241.811 269.735',
        x_left: selectedLanguage === 'es' ? 42.715 : 26.715,
    },
    {
        images: '/images/dispositivo.webp',
        title: t('Dispositivos'),
        x_selected: 0,
        x: selectedLanguage === 'es' ? 82.715 : 52.715,
        x_2: selectedLanguage === 'es' ? 35 : 115,
        title_2: t('médico-quirúrgicos'),
        to: '/productos/dispositivos-medico-quirurgicos',
        viewbox: '0 6.532 241.811 269.735',
        x_left_2: selectedLanguage === 'es' ? 35 : 97
    },
    {
        images: '/images/services/Ortopedia.webp',
        title: t('Ortopedia'),
        x_selected: 0,
        x: selectedLanguage === 'es' ? 93.715 : 83.715,
        to: '/productos/ortopedia',
        viewbox: '30 6.532 241.811 269.735',
        viewbox_2: '65.554 6.532 241.811 269.735',
        x_left: selectedLanguage === 'es' ? 93.715 : 73.715,
    },
    {
        images: '/images/cirugia.webp',
        title: t('Cirugía robótica'),
        x_selected: 0,
        x: 57.715,
        to: '/productos/cirugia-robotica',
        viewbox: '0 6.532 241.811 269.735'
    },
    {
        images: '/images/genetica.webp',
        title: t('Genómica y genética'),
        x_selected: 0,
        x: selectedLanguage === 'es' ? 27.715 : 12.715,
        to: '/productos/genomica-y-genetica',
        viewbox: "0 6.532 241.811 269.735",
        viewbox_2: '300 0 267 342',
        width: '600'
    },
    {
        images: '/images/ciudado.webp',
        title: t('Cuidado avanzado'),
        title_2: t('de heridas'),
        x_2: 90,
        x_selected: 0,
        x: selectedLanguage === 'es' ? 42.715 : 97.715,
        to: '/productos/cuidado-avanzado-de-heridas',
        viewbox: '0 6.532 241.811 269.735'
    },
    {
        images: '/images/Instrumentalama.webp',
        title: t('Instrumental y'),
        title_2: t('esterilización'),
        x_2: selectedLanguage === 'es' ? 67.715 : 87.715,
        x_selected: 0,
        x: 63,
        to: '/productos/instrumental-y-estirilizacion',
        viewbox: '0 6.532 241.811 269.735',
        viewbox_2: '40 0 306 342',
        width: '600'
    },
    {
        images: '/images/image_portfolio.webp',
        title: t('Neurointervencionismo'),
        x: selectedLanguage === 'es' ? 15 : 25,
        x_selected: 0,
        to: '/productos/neurointervencionismo',
        viewbox: '0 6.532 241.811 269.735',
        viewbox_2: '240 0 306 342',
        width: '600'
    },
    {
        images: '/images/logistica.webp', 
        title: t('Logística'),
        title_2: t('hospitalaria'),
        x_2: selectedLanguage === 'es' ? 80.715 : 100.715   ,
        x_selected: 0,
        x: 100,
        to: '/productos/logistica-hospitalaria',
        viewbox: '0.554 6.532 241.811 269.735',
        viewbox_2: '40 0 306 342',
        width: '600'
    },
    {
        images: '/images/biomedico-movil.jpg', 
        title: t('Mantenimiento'),
        title_2: t('biomédico_2'),
        x_2: 72.715,
        x_selected: 0,
        x: selectedLanguage === 'es' ? 70 : 85,
        to: '/biomedico',
        viewbox: '0.554 6.532 241.811 269.735',
        viewbox_2: '40 0 306 342',
        width: '600',
        x_left: 85,
        x_left_2: 75.715
    }
])