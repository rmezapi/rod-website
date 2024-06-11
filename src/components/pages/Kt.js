import React from 'react'
import './Digital.css'
import { useState } from "react";
import { Gallery } from "react-grid-gallery";
import Lightbox from "react-18-image-lightbox";
import { Katie } from "./Katie.ts";

function Kt() {
    const images = Katie;
    const [index, setIndex] = useState(-1);
    const currentImage = images[index];
    const nextIndex = (index + 1) % images.length;
    const nextImage = images[nextIndex] || currentImage;
    const prevIndex = (index + images.length - 1) % images.length;
    const prevImage = images[prevIndex] || currentImage;
    const handleClick = (index, item) => setIndex(index);
    const handleClose = () => setIndex(-1);
    const handleMovePrev = () => setIndex(prevIndex);
    const handleMoveNext = () => setIndex(nextIndex);

  return (
    <>
    <div className='text-container'>
      <h1> kt. </h1>
      <p>
      'kt' is a collection of portraits of Katie. In this collection of photographs, I hope to capture kt’s beauty, talent, passion, joy, and some of the little things that remind me of kt. She is one full of surprises and so much love to give. A talented ballerina with an immense passion for dance. A friend, companion and jokester. This collection is just a glimpse of kt, as capturing it all deemed too impossible a task.
      </p>
    </div>
    <div className='gallery'>
        <Gallery
        images={images}
        onClick={handleClick}
        enableImageSelection={false}
      />
      {!!currentImage && (
        /* @ts-ignore */
        <Lightbox
          mainSrc={currentImage.original}
          imageTitle={currentImage.caption}
          mainSrcThumbnail={currentImage.src}
          nextSrc={nextImage.original}
          nextSrcThumbnail={nextImage.src}
          prevSrc={prevImage.original}
          prevSrcThumbnail={prevImage.src}
          onCloseRequest={handleClose}
          onMovePrevRequest={handleMovePrev}
          onMoveNextRequest={handleMoveNext}
        />
      )}
    </div>
    </>
  )
}

export default Kt