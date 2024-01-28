import React, { useState } from 'react';

const Exercise1 = () => {
const [galleryState, setGalleryState] = useState({
  images: [
    "https://hips.hearstapps.com/hmg-prod/images/lychee-fruit-sugar-1530136136.jpg?crop=1xw:1xh;center,top&resize=640:*",
    "https://hips.hearstapps.com/hmg-prod/images/mango-fruit-sugar-1530136260.jpg?crop=1xw:1xh;center,top&resize=640:*",
    "https://hips.hearstapps.com/hmg-prod/images/cherries-sugar-fruit-1530136329.jpg?crop=1xw:1xh;center,top&resize=640:*",
  ],
  currentImg: 0,
});

const shiftImageBack = () => {
    setGalleryState((prevState) => ({
      ...prevState,
      currentImg: prevState.currentImg === 0 ? prevState.images.length - 1 : prevState.currentImg - 1,
    }));
};

const shiftImageForward = () => {
    setGalleryState((prevState) => ({
      ...prevState,
      currentImg: prevState.currentImg === prevState.images.length - 1 ? 0 : prevState.currentImg + 1,
    }));
};

return (
    <div>
      <button className="back" onClick={shiftImageBack}>
        Back
      </button>
      <img src={galleryState.images[galleryState.currentImg]} alt="gallery" />
      <button className="forward" onClick={shiftImageForward}>
        Forward
      </button>
    </div>
  );
};

export default Exercise1;
