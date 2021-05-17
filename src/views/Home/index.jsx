import React, { useEffect, useState } from 'react';

import api from '../../services/api';
import Slider from "react-slick";
import Footer from '../../components/Footer';
import SliderLoading from '../../components/SliderLoading';
import TopTitlesLoading from '../../components/TopTitlesLoading';

import { Breathe, CardTall, Container, Movie, Mosaic, Row, Title } from './styles.styled';

export default function Home() {

  const [ popularTitles, setPopularTitles ] = useState([]);
  const [ latestTitles, setLatestTitles ] = useState([]);
  const [ topFive, setTopFive ] = useState([]);

  const [ isLoading, setIsLoading ] = useState(true);

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

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  })

  useEffect(() => {
    getPopularTitles();
    getLatest();
  }, [])

  const getPopularTitles  = async () => {
    const response = await api.get(`/popular?api_key=${process.env.REACT_APP_API_KEY}&language=pt-BR`);
    setPopularTitles(response.data.results.slice(4,20));
    setTopFive(response.data.results.slice(0,3))
  }

  const getLatest = async () => {
    const response = await api.get(`/upcoming?api_key=${process.env.REACT_APP_API_KEY}&language=pt-BR`);
    setLatestTitles(response.data.results);
  }

    return (
    <>
        <Container id="top5">  
            <Row>
                <Title>Top 3 Brasil</Title>
            </Row>
            <Mosaic>
              {
                isLoading ?
                  <TopTitlesLoading />  :
                  <>
                    <CardTall>
                      <img src={`${process.env.REACT_APP_IMAGES_PATH}${topFive[0]?.poster_path}`} alt="" />
                    </CardTall>
                    <CardTall>
                      <img src={`${process.env.REACT_APP_IMAGES_PATH}${topFive[1]?.poster_path}`} alt="" />
                    </CardTall>
                    <CardTall>
                      <img src={`${process.env.REACT_APP_IMAGES_PATH}${topFive[2]?.poster_path}`} alt="" />
                    </CardTall>
                  </>

              }
            </Mosaic>
            <Row>
                <Title id="populares">Populares</Title>
            </Row>
            {
              isLoading ?
              <SliderLoading /> :
              <Slider {...settings}>
                { popularTitles?.map( popularTitle => (
                    <Movie key={popularTitle.id}>
                        <img src={`${process.env.REACT_APP_IMAGES_PATH}${popularTitle.poster_path}`} alt="" />
                    </Movie>
                ))}
              </Slider>
            }
            <Breathe />
            <Row>
                <Title id="recemadicionados">Lançamentos</Title>
            </Row>
            {
              isLoading ?
                <SliderLoading /> :
                <Slider {...settings}>
                  { latestTitles?.map( latestTitle => (
                      <Movie key={latestTitle.id}>
                          <img src={`${process.env.REACT_APP_IMAGES_PATH}${latestTitle.poster_path}`} alt="" />
                      </Movie>
                  ))}
                </Slider>
            }
            <Breathe />
        </Container>
        <Footer />
    </>
    )
}
