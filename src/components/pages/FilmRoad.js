import React from 'react'
import './Film.css'
import { useState } from "react";
import { Gallery } from "react-grid-gallery";
import Lightbox from "react-18-image-lightbox";
import { FRoad } from "./FRoad.ts";

function FilmRoad() {
    const images = FRoad;
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
      <h1> come wih me! - road cycling</h1>
      <h3> 2023 </h3>
      <p>
      Nature is, has been, and will always be the main stage for sport. Its magnificent features are like no other, providing the ultimate challenge for athletes to tackle. Its natural complexities continue to push engineers to design the right tools for athletes to perform in the most breathtaking of sites. From mountains to sea, valleys to rivers, tundra to jungle, there is always a sport to be practiced, and a sight to behold. 
      </p>
      <p>
      In this collection of photographs I take on the life-long dream of mine of exploring nature and attempting the sports practiced in such sceneries. With me, I bring a small LOMO LC-A film camera, the tools required, friends, and a desire to capture my experience through a set of photographs. I focus on capturing the nature around us, the fun there is to be had, and the incredible sites that allow us to experience the sport.  
      </p>
      <p>
      Road cycling is fast. A team sport, where by riding behind the wheel of a teammate, you save around 30% of energy due to aerodynamics and a decrease in drag. This phenomenon creates a group of tightly packed cyclists, working together and rotating pulls at the front of the peloton. A group of now friends communicating potholes, when braking is happening, cars on your left, and anything the others need to know to keep everyone from crashing. It is a sport of trust, about predictability, as we all know that if one of us goes down, we are going down with them. Riding fast is easy near the back of the peloton, it is also the most dangerous section of the peloton. It is where all you can see is your teammates butt, their rear wheel, and the landscapes and teammates to your sides. It is a scary place to be in, but trust me when I say you'll probably want to be near the back when the burn starts to take over your legs, or your heart rate skyrockets. Cycling brings you to a close knit community, where if you get dropped from the peloton, someone will likely drop back with you. It is all worth it. The friends made, the conversations shared, the adrenaline rush, the shared workload, and so much more makes cycling in a group an addicting experience. 
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

export default FilmRoad