import React from 'react'
import './Digital.css'
import { useState } from "react";
import { Gallery } from "react-grid-gallery";
import Lightbox from "react-18-image-lightbox";
import { Yvtp } from "./Yvtp.ts";

function Yosemite() {
    const images = Yvtp;
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
      <h1> yosemite valley theme park </h1>
      <h3> 2022 </h3>
      <p>
        This is a collection of images I took when visiting Yosemite in the summer of 2022. Not only did I witness some of the most beautiful sights I will ever see,
        I also witnessed a park that resembles more a theme park than a national park. Taken aback by the amount of people, trash, cars, and more, I decided to put together 
        this collection of images that capture that 'theme park' feel about the Yosemite Valley.
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

export default Yosemite