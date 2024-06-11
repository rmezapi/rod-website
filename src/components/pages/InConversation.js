import React from 'react'
import './Digital.css'
import { useState } from "react";
import { Gallery } from "react-grid-gallery";
import Lightbox from "react-18-image-lightbox";
import { InConvo } from "./InConvo.ts";

function InConversation() {
    const images = InConvo;
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
      <h1> The Town: In Conversation with Daniel Shea</h1>
      <p>
      The Town is a collection of images taken in the Town of Chapel Hill, a small town I have come to know and love. Inspired by the work and ideas of Daniel Shea, I explore everything from construction to animals in only 10 photographs in both black and white and color images. The idea for this project came when reading one of Daniel's interviews on Frieze on one of his collections about New York City. In it, there is a lot of black and white, as well as hints of pastel colors in images, and sometimes even repetitively stamping a subject onto the image. Daniel is clearly in love with the city, like a portrait photographer with its muse.
      </p>
      <p> 
      The Town of Chapel Hill has been my home for 3 years now. I wanted to show a few things that often go unnoticed, like the coal plant or a small bunny. I also wanted to portray the things that we do notice, like the endless construction and remodeling of countless buildings and roads. The images include various different aspects of Chapel Hill, but definitely not all of them. Daniel finds there is something beautiful in a vast, big city like New York, however, I find that a similar beauty can be found in a small town, especially Chapel Hill. I hope you enjoy looking at them as much as I enjoyed making them.
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

export default InConversation