import React from 'react'

import Slider from "react-slick";
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

export default function SliderLoading() {

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 5,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 4,
              initialSlide: 1
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 4 ,
              slidesToScroll: 4,
              initialSlide: 1
            }
          },
          {
            breakpoint: 500,
            settings: {
              slidesToShow: 3 ,
              slidesToScroll: 3,
              initialSlide: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 1
            }
          }
        ]
    };

    return (
        <Slider {...settings}>
           <SkeletonTheme color="#202020" highlightColor="#444">
                <Skeleton height={248}/>
            </SkeletonTheme>
            <SkeletonTheme color="#202020" highlightColor="#444" >
                <Skeleton height={248}/>
            </SkeletonTheme>
            <SkeletonTheme color="#202020" highlightColor="#444">
                <Skeleton height={248}/>
            </SkeletonTheme>
            <SkeletonTheme color="#202020" highlightColor="#444">
                <Skeleton height={248}/>
            </SkeletonTheme>
            <SkeletonTheme color="#202020" highlightColor="#444">
                <Skeleton height={248}/>
            </SkeletonTheme>
            <SkeletonTheme color="#202020" highlightColor="#444">
                <Skeleton height={248}/>
            </SkeletonTheme>
        </Slider>
    )
}
