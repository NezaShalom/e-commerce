import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function Banner() {
  return (
    <div className='relative'>
    <div className='absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20' />
    <Carousel
      autoPlay
      infiniteLoop
      showStatus={false}
      showIndicators={false}
      showThumbs={false}
      showArrows={false}
      interval={2000}
    >
      <div>
        <img
          loading='lazy'
          src='https://photos.smugmug.com/Image/i-qnPRtrC/0/e853de3a/X2/min-X2.jpg'
          alt='Audiable'
        />
      </div>

      <div>
        <img
          loading='lazy'
          src='https://photos.smugmug.com/Image/i-SVjqJZg/0/cfd44d60/X2/artem-X2.jpg'
          alt='Prime video'
        />
      </div>
    </Carousel>
  </div>
  )
}

export default Banner