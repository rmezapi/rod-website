import React from 'react'
import './Film.css'
import { useState } from "react";
import { Gallery } from "react-grid-gallery";
import Lightbox from "react-18-image-lightbox";
import { FMtb } from "./FMtb.ts";

function FilmMtb() {
    const images = FMtb;
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
      <h1> come with me! - mountain biking</h1>
      <h3> 2023 </h3>
      <p>
      Nature is, has been, and will always be the main stage for sport. Its magnificent features are like no other, providing the ultimate challenge for athletes to tackle. Its natural complexities continue to push engineers to design the right tools for athletes to perform in the most breathtaking of sites. From mountains to sea, valleys to rivers, tundra to jungle, there is always a sport to be practiced, and a sight to behold. 
      </p>
      <p>
      In this collection of photographs I take on the life-long dream of mine of exploring nature and attempting the sports practiced in such sceneries. With me, I bring a small LOMO LC-A film camera, the tools required, friends, and a desire to capture my experience through a set of photographs. I focus on capturing the nature around us, the fun there is to be had, and the incredible sites that allow us to experience the sport.  
      </p>
      <p>
      Mountain biking is scary. Moreso, it is easily one of the most physical sports I have ever done. All you need is a mountain bike and a helmet, though I definitely recommend bringing water, a camera, and a multi-tool in case of any mechanical issues with the bike. Riding through the Carolina North Forest single track trails is like a roller coaster, only you are in charge of avoiding trees, rocks, and roots. You generate all the power, you choose the safest (or fastest) line, and go. It comes so fast, there is no room for doubt. Once you doubt, you are putting yourself at risk of falling, as for mountain bikers going slow equals a higher chance of falling. It is like road biking in the way you want to go fast, and like bouldering in the sense that makes you think -- “I can do that!” It is a rush of adrenaline the entire time, and for some, like me, there is nothing better.
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

export default FilmMtb