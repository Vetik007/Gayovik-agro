// import { useState } from 'react'
// import reactLogo from '../../assets/react.svg'
// import viteLogo from '/vite.svg'
// import { FiArrowRight } from 'react-icons/fi';
import HomePromoImg from '../../assets/HomePromo.jpg';
import FilterImg from '../../assets/Filter.jpg';

// import './HomePage.css';

import {
  PromoItem,
  PromoList,
  HomePromo,
  TextBlock,
  PromoTitle,
  PromoButton,
  PromoImg,
  ButtonIcon,
  PromoText,
} from './HomePage.styled';

function HomePage() {
  return (
    <HomePromo>
      <img src={HomePromoImg} alt="harvester" />

      <PromoList>
        <PromoItem>
          <TextBlock>
            <PromoTitle>Технічне обслоговування</PromoTitle>
            <PromoText>Потрібна заміна масла? Обери свій фільтр тут!</PromoText>
            <PromoImg src={FilterImg} alt="filter" />
            <PromoButton type="button">
              <ButtonIcon />
            </PromoButton>
          </TextBlock>
        </PromoItem>
        <PromoItem>
          <TextBlock>
            <PromoTitle>Запасні частини</PromoTitle>
            <PromoButton type="button">
              <ButtonIcon />
            </PromoButton>
          </TextBlock>
        </PromoItem>
        <PromoItem></PromoItem>
      </PromoList>
    </HomePromo>
  );
}

export default HomePage;
