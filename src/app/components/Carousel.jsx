import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const fadeImages = [
  {
    url: '../../../public/slider1.jpeg'
  },
  {
    url: '../../../public/slider2.jpeg'
  },
  {
    url: '../../../public/slider3.jpeg'
  },
];

const Slideshow = () => {
  return (
    <div className="w-screen">
      <div className="slide-container">
        <Fade>
          {fadeImages.map((fadeImage, index) => (
            <div key={index}>
              <img style={{ width: '100%' }} src={fadeImage.url} alt="Hospedaria Pedra da Mitra" />
              <h2>{fadeImage.caption}</h2>
            </div>
          ))}
        </Fade>
      </div>
    </div>
  )
}

export default Slideshow;
