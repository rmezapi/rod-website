import React from 'react'
import './Film.css'
import { useState } from "react";
import { Gallery } from "react-grid-gallery";
import Lightbox from "react-18-image-lightbox";
import { FBiking } from "./FBiking.ts";

function FilmBiking() {
    const images = FBiking;
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
      <h1> biking adventures! </h1>
      <h3> always </h3>
      <p>
        This collection consists of images I take during the many misc. biking adventures I go on with my friends and family.
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

export default FilmBiking