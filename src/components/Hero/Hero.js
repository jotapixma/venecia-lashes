import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import { useSwiper } from 'swiper/react';
import EastIcon from '@mui/icons-material/East';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Image from "next/legacy/image";
import useMediaQuery from '@mui/material/useMediaQuery';
import { Button } from '../../components/Buttons/Button'
import styles from './Hero.module.scss';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

SwiperCore.use([Autoplay]);


let items = [
  {
    "id": '1',
    "image": '/home/slider-home.jpg',
    "image_mobile": '/slider-mobile.png',
    "title": 'Naturalmente tú',
    "button_text": 'Contáctanos',
    "url_link" : '#contact'
  }
];


export default function Hero({sliderItems}) {
  const [swiper, setSwiper] = React.useState(null);

  const matchesMd = useMediaQuery('(min-width:900px)');

  const handlePrevSlide = () => {
    swiper.slidePrev();
  };

  const handleNextSlide = () => {
    swiper.slideNext();
  };


  return (
    <React.Fragment>
      <div className={styles.heroContainer}>
        {/* ${!showPrevArrow && styles.disabled} */}
        {/* <button type="button" className={`${styles.genericArrow} ${styles.leftArrow} `} onClick={handlePrevSlide}><ArrowBackIosIcon/></button> */}
        <Swiper
          modules={[Pagination]}
          autoplay={{ delay: 10000 }}
          loop={true}
          slidesPerView={1}
          pagination={{ clickable: true }}
          onSwiper={(swiper) =>{ 
            setSwiper(swiper)
          }}
        >
          {items &&
            items.map((item) => (
              <SwiperSlide key={item.id}>
                <article className={styles.hero}>
                  <div className={styles.heroBody}>
                    <div className={styles.heroBody__container}>
                      <div className={styles.heroBox}>
                        <h1 className={styles.heroTitle}>{item.title}</h1>
                        {/* <Button uppercase href={`${item.url_link}`}>Contáctanos</Button> */}
                      </div>
                    </div>
                  </div>
                  {matchesMd ? (
                    <figure className={styles.bannerMask}>
                      <Image 
                        src={item.image} 
                        width={3024} 
                        height={1000} 
                        alt={item.title} 
                        priority={true}
                        layout="responsive"
                      />
                    </figure>
                  ) : (
                    <figure className={styles.bannerMask}>
                      <Image 
                        src={item.image_mobile} 
                        width={900} 
                        height={1300} 
                        alt={item.title} 
                        priority={true}
                        layout="responsive"
                        objectFit='contain'
                      />
                    </figure>
                  )}
                </article>
              </SwiperSlide>
            ))
          }
        </Swiper>
        {/* <button type="button" className={`${styles.genericArrow} ${styles.rightArrow}`} onClick={handleNextSlide}><ArrowForwardIosIcon/></button> */}

      </div>

    </React.Fragment>
  )
}