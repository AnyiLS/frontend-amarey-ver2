export interface ISlide {
  height: string;
  onClick: (number: number) => void;
}

export interface AstasProps {
  onUnselected: () => void
}

export interface AstaTop {
  onOpenPopup: () => void
}

export interface SlideFourProps extends Pick<ISlide, 'height'> {
	image: string
	onReturn: () => void
	onOpenPopup: () => void
}
