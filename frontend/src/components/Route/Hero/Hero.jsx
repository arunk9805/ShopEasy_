import React, { useState } from "react";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import styles from "../../../styles/styles";


const Hero = () => {
  const carouselItems = [
    "https://www.ethnicplus.in/media/mageplaza/bannerslider/banner/image/1/0/10_5.jpg",
    "https://www.ethnicplus.in/media/mageplaza/bannerslider/banner/image/1/2/12_4.jpg",
    "https://www.ethnicplus.in/media/mageplaza/bannerslider/banner/image/9/_/9_8.jpg",
    "https://www.ethnicplus.in/media/mageplaza/bannerslider/banner/image/1/1/11_4.jpg",
  ];

  return (
    <div className={`relative min-h-[70vh] 800px:min-h-[80vh] w-full bg-no-repeat ${styles.noramlFlex}`}>
      <AliceCarousel
        infinite
        mouseTracking
        autoPlay
        autoPlayInterval={2000}
        items={carouselItems.map((url, index) => (
          <img key={index} src={url} alt={`carousel-item-${index}`} />
        ))}
      />
      
    </div>
  );
};

export default Hero;

