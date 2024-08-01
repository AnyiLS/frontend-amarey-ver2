export const notiicasMocks = (t: any) => ([
	
	{
		image: '/images/noticias-a.png',
		text: () => (
			<text className="p-products-desktop" transform="translate(465 627)">
				<tspan x={14.16} y={38}>
					{t('GRUPO AMAREY EN SUS 40 AÑOS ESTRENA SEDES')}
				</tspan>
			</text>
		),
	},

	{
		image: '/images/noticias-a.png',
		text: () => (
			<text
				className="p-products-desktop"
				transform="translate(465 627)">
				<tspan x={30.14} y={38}>
					{'LOREM IPSUM DOLOR SIT AMET, CONSECTETUER'}
				</tspan>
			</text>
		),
	},

    {
		image: '/images/noticias-a.png',
		text: () => (
			<text
				className="p-products-desktop"
				transform="translate(465 627)">
				<tspan x={30.14} y={38}>
					{'LOREM IPSUM DOLOR SIT AMET, CONSECTETUER'}
				</tspan>
			</text>
		),
	},   
    
])

export const notiicasMocksMobile = (t: any) => [
	{
		image: '/images/noticias-a.png',
		text: () => (
			<text
					className="l-products-desktop"
					transform="translate(39.5 522.111)">
					<tspan x={41.761} y={21}>
						{t('GRUPO AMAREY EN SUS')}
					</tspan>
					<tspan x={34.809} y={45}>
						{t('40 AÑOS ESTRENA SEDES ')}
					</tspan>
				</text>
		),
	},

	{
		image: '/images/noticias-a.png',
		text: () => (
			<text
			className="l-products-desktop"
			transform="translate(60 522.111)">
			<tspan x={41.761} y={21}>
				{'LOREM IPSUM DOLOR'}
			</tspan>
			<tspan x={34.809} y={45}>
				{'AMET, CONSECTETUER'}
			</tspan>
		</text>
		),
	},

    {
		image: '/images/noticias-a.png',
		text: () => (
			<text
			className="l-products-desktop"
			transform="translate(60 522.111)">
			<tspan x={41.761} y={21}>
				{'LOREM IPSUM DOLOR'}
			</tspan>
			<tspan x={34.809} y={45}>
				{'AMET, CONSECTETUER'}
			</tspan>
		</text>
		),
	},   
    
]