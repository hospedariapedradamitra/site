import Image from 'next/image';
import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const fadeImages = [
  {
    url: '/slider1.webp'
  },
  {
    url: '/slider2.webp'
  },
  {
    url: '/slider3.webp'
  },
];

const Slideshow = () => {
  return (
    <div className="w-screen">
      <div className="slide-container">
        <Fade>
          {fadeImages.map((fadeImage, index) => (
            <div key={index}>
                  <Image width={1920} height={600} layout="responsive" src={fadeImage.url} alt="Hospedaria Pedra da Mitra" />
              <h2>{fadeImage.caption}</h2>
            </div>
          ))}
        </Fade>
      </div>
    </div>
  )
}

export default Slideshow;
