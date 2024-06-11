import React from 'react'
import './Film.css'
import { useState } from "react";
import { Gallery } from "react-grid-gallery";
import Lightbox from "react-18-image-lightbox";
import { BoulderingP } from "./BoulderingP.ts";

function Bouldering() {
    const images = BoulderingP;
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
      <h1> Come wih me! - Bouldering </h1>
      <h3> 2023 </h3>
      <p>
      Nature is, has been, and will always be the main stage for sport. Its magnificent features are like no other, providing the ultimate challenge for athletes to tackle. Its natural complexities continue to push engineers to design the right tools for athletes to perform in the most breathtaking of sites. From mountains to sea, valleys to rivers, tundra to jungle, there is always a sport to be practiced, and a sight to behold. 
      </p>
      <p>
      In this collection of photographs I take on the life-long dream of mine of exploring nature and attempting the sports practiced in such sceneries. With me, I bring a small LOMO LC-A film camera, the tools required, friends, and a desire to capture my experience through a set of photographs. I focus on capturing the nature around us, the fun there is to be had, and the incredible sites that allow us to experience the sport.  
      </p>
      <p>
      Bouldering, an outdoor form of climbing that centers on climbing boulders without any safety systems other than a crash pad. Bouldering is a team sport. A sport created and maintained by the climbing community itself, as climbers rate and share the boulders they climb and the routes they find with the community to compile a book. A book that allows members of the community to find and experience their first ascent on such routes as well. The goal is not to climb atop the boulder, but to use or find the most creative way to do so. A single boulder can be home to dozens of routes. Some routes are easy, others are yet to be topped. It is all about body control, technique, some strength, but most importantly will, perseverance, and a support system that makes you feel comfortable while you push past your fears and known limits. It is about community, about sharing an experience with friends, about exploring and enjoying the nature around you, but mostly, about allowing your inner child to say -- “I can climb that!”
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

export default Bouldering