import React from 'react'
import './FixedContact.css'
import Formulario from 'screens/Formulario/Formulario'

const FixedContact: React.FC = (): JSX.Element => {
  const [showForm, setShowForm] = React.useState<boolean>(false);
	return (
		<React.Fragment>
			<svg
				viewBox="0 0 99.534 99.345"
				className="fixed bottom-[100px] right-[0] fixed-contact w-[70px] h-[70px]"
				width={50}
				height={50}>
				<defs>
					<style>
						{
							'.a-c-f{fill:none;}.b-c-f{clip-path:url(#a);}.c-c-f{opacity:0.25;mix-blend-mode:multiply;isolation:isolate;}.d-c-f{fill:#e40032;}.e-c-f{fill:#fff;}'
						}
					</style>
					<clipPath id="a-c-f">
						<rect
							className="a-c-f"
							width={99.534}
							height={99.345}
						/>
					</clipPath>
				</defs>
				<g className="b-c-f cursor-pointer" onClick={() => setShowForm(true)}>
					<g className="b-c-f">
						<g className="c-c-f">
							<g className="b-c-f">
								<g className="b-c-f">
									<image
										width={99.534}
										height={99.345}
										xlinkHref="/images/circulo-sombra.png"
									/>
								</g>
							</g>
						</g>
						<path
							className="d-c-f"
							d="M91.863,49.49A39.342,39.342,0,1,1,52.521,10.148,39.342,39.342,0,0,1,91.863,49.49"
							transform="translate(-2.788 -2.147)"
						/>
						<path
							className="e-c-f"
							d="M37.833,66.922a46.544,46.544,0,0,0,9.245,4.621c.471.17.669.657.977,1.009,2.228,2.55,4.719,4.678,8.223,5.223a9.341,9.341,0,0,0,6.345-1.413,18.255,18.255,0,0,0,5.52-5.308,37.064,37.064,0,0,0,6.193-15.622c.143-.839-.2-1-.927-1.038a43.867,43.867,0,0,1-9.627-1.223,34.637,34.637,0,0,1-13.691-7.551c-.758-.666-1.032-.5-1.549.225a17.8,17.8,0,0,1-7.474,6.4c-.736.313-.647.777-.586,1.325A41.076,41.076,0,0,0,43.1,64.12c.086.219.17.439.365.941a31.387,31.387,0,0,1-4.635-2.648.79.79,0,0,1-.224-.41C36.929,56.4,36.086,50.719,37.48,44.93c1.787-7.421,7.172-12.105,15.13-13.231a29.154,29.154,0,0,1,13.833.99c6.7,2.327,10.408,7.175,11.479,14.1A33.209,33.209,0,0,1,76.638,61.2a3.662,3.662,0,0,0,0,2.166,14.672,14.672,0,0,1-.091,8.988,6.8,6.8,0,0,1-7.769,4.949,3.019,3.019,0,0,0-2.465.72c-5.641,4.6-12.05,4.545-17.749-.109a2.523,2.523,0,0,0-2.028-.643c-4.445.457-7.181-1.458-8.312-5.771a12.636,12.636,0,0,1-.38-2.1c-.065-.744-.014-1.5-.014-2.487"
							transform="translate(-7.78 -6.624)"
						/>
						<path
							className="e-c-f"
							d="M55.074,25.2c8.167.218,15.259,2.67,20.732,8.85a19.232,19.232,0,0,1,4.553,9.122A1.985,1.985,0,0,0,81.446,44.7a5.766,5.766,0,0,1,2.838,4.055,15.092,15.092,0,0,1-.939,9.515,6.068,6.068,0,0,1-5.971,3.709c-.623,0-.786-.14-.7-.806.5-4.121.919-8.249,1.068-12.4.3-8.3-3.554-14.221-10.809-17.676-9.491-4.519-18.849-3.9-27.414,2.457a16.653,16.653,0,0,0-6.923,14.267,117.751,117.751,0,0,0,.925,12.176,1.386,1.386,0,0,0,.606,1.066A38.984,38.984,0,0,0,49.7,68.269a3.328,3.328,0,0,0,2.1-.33,7.222,7.222,0,0,1,5.3-.052,1.752,1.752,0,0,1,.978,2.193,1.864,1.864,0,0,1-1.8,1.614c-1.222.065-2.451.023-3.677.009a1.362,1.362,0,0,1-1.219-.629c-.435-.844-1.186-.9-1.964-1.046a39.291,39.291,0,0,1-16.131-7.381,4.108,4.108,0,0,0-1.793-.822,5.618,5.618,0,0,1-4.366-3.289,14.735,14.735,0,0,1-.958-10.171,5.706,5.706,0,0,1,2.966-3.815,1.315,1.315,0,0,0,.744-.968C32.256,33.4,39.274,28.2,48.952,25.874a21.759,21.759,0,0,1,2.808-.453c1.139-.118,2.287-.156,3.315-.222"
							transform="translate(-5.431 -5.331)"
						/>
					</g>
				</g>
			</svg>
      {
        showForm && <Formulario onClose={() => setShowForm(false)}/>
      }
		</React.Fragment>
	)
}

export default FixedContact
