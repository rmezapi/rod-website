import React from 'react'
import './Digital.css'
import { useState } from "react";
import { Gallery } from "react-grid-gallery";
import Lightbox from "react-18-image-lightbox";
import { NightP } from "./NightP.ts";

function Night() {
    const images = NightP;
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
      <h1> 3 friends, a bike, lights and a kimono </h1>
      <h3> 2023 </h3>
      <p>
      '3 friends, a bike, lights and a kimono' is a series of photographs that depict the outcome of giving 3 friends, a bike, lights, a kimono, and a camera. The photographs all use long exposure to create 'cool' lighting patterns with LED lights mounted on the rear wheel of a bike. As we experimented more and more with the lights on the bike wheel, numerous ideas came to us. These are just some of the ideas we had, but I believe they show the vast range in the variety of different photographs that can be taken when you give 3 friends, a bike, lights and a kimono.
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

export default Night