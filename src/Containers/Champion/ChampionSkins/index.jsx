import React from 'react';
import Slider from 'react-slick';
import { CarouselImage } from './styled';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ChampionSkins = ({ skins, name }) => {
  var settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <div>
      <h2>Skins</h2>

      <Slider {...settings}>
        {skins.map((x, index) => {
          return (
            <div key={index}>
              <CarouselImage
                src={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${name}_${x.num}.jpg`}
                alt={x.name}
                title={x.name}
              />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default ChampionSkins;
