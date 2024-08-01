import React from "react";

const useCarouselHome = () => {
  /** States */
  const [selected, setSelected] = React.useState<number | null>(null);
  const [showPopup, setShowPopup] = React.useState<boolean>(false);
  const [height, setHeight] = React.useState<number>(0);
  const [slide, setSlide] = React.useState<boolean>(true);

  const handleCloseVideo = () => {
    const video: HTMLVideoElement = document.getElementById(
      "video-1"
    ) as HTMLVideoElement;
    if (video) video.pause();
    setShowPopup(false);
  };

  const handleOnReturn = () => {
    setSelected(null);
    setSlide(true);
  };

  const handleOpenPopup = () => {
    setShowPopup(true);
    const video: HTMLVideoElement = document.getElementById(
      "video-1"
    ) as HTMLVideoElement;
    if (video) {
      video.currentTime = 0;
    }
  };

  const handleOnSelected = (number: number) => {
    setSelected(number);
    setSlide(false);
  };

  React.useEffect(() => {
    const navbarContainer: HTMLDivElement = document.getElementById(
      "navbar__container"
    ) as HTMLDivElement;
    setHeight(navbarContainer.clientHeight);
  }, []);

  return {
    showPopup,
    selected,
    height,
    slide,
    handleCloseVideo,
    handleOnReturn,
    handleOpenPopup,
    handleOnSelected
  };
};

export default useCarouselHome;
