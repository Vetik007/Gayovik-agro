// import { useState } from 'react'
// import reactLogo from '../../assets/react.svg'
// import viteLogo from '/vite.svg'
// import { FiArrowRight } from 'react-icons/fi';
import HomePromoImg from '../../assets/HomePromo.jpg';
import FilterImg from '../../assets/Filter.jpg';
import sprite from '../../assets/sprite.svg';

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
  BrandsList,
  BrandIcon,
  BrandsItem,
  BrandsLink,
  ShopCategory,
  ShopCategoryList,
  ShopCategoryItem,
  CategoryLink,
  LinkIcon,
  GidravlikIcon,
  CategoryTitle,
} from './HomePage.styled';

function HomePage() {
  return (
    <>
      <HomePromo>
        <img src={HomePromoImg} alt="harvester" />

        <PromoList>
          <PromoItem>
            <TextBlock>
              <PromoTitle>Технічне обслоговування</PromoTitle>
              <PromoText>
                Потрібна заміна масла? Обери свій фільтр тут!
              </PromoText>
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
          <PromoItem>
            <PromoButton type="button">
              <ButtonIcon />
            </PromoButton>
          </PromoItem>
        </PromoList>
      </HomePromo>

      <BrandsList>
        <BrandsItem>
          <BrandsLink
            to="https://avia-unimot.com.ua/en/main/"
            target="blank"
            rel="noreferrer noopener nofollow"
          >
            <BrandIcon>
              <use href={`${sprite}#icon-avia`} />
            </BrandIcon>
          </BrandsLink>
        </BrandsItem>

        <BrandsItem>
          <BrandsLink
            to="https://www.claas.ua/"
            target="blank"
            rel="noreferrer noopener nofollow"
          >
            <BrandIcon>
              <use href={`${sprite}#icon-claas`} />
            </BrandIcon>
          </BrandsLink>
        </BrandsItem>

        <BrandsItem>
          <BrandsLink
            to="https://www.gates.com/"
            target="blank"
            rel="noreferrer noopener nofollow"
          >
            <BrandIcon>
              <use href={`${sprite}#icon-gates`} />
            </BrandIcon>
          </BrandsLink>
        </BrandsItem>

        <BrandsItem>
          <BrandsLink
            to="https://aftermarket.schaeffler.ua/uk"
            target="blank"
            rel="noreferrer noopener nofollow"
          >
            <BrandIcon>
              <use href={`${sprite}#icon-ina`} />
            </BrandIcon>
          </BrandsLink>
        </BrandsItem>

        <BrandsItem>
          <BrandsLink
            to="https://www.kuhn.ua/"
            target="blank"
            rel="noreferrer noopener nofollow"
          >
            <BrandIcon>
              <use href={`${sprite}#icon-kuhn`} />
            </BrandIcon>
          </BrandsLink>
        </BrandsItem>

        <BrandsItem>
          <BrandsLink
            to="http://lemken.com.ua/"
            target="blank"
            rel="noreferrer noopener nofollow"
          >
            <BrandIcon>
              <use href={`${sprite}#icon-lemken`} />
            </BrandIcon>
          </BrandsLink>
        </BrandsItem>

        <BrandsItem>
          <BrandsLink
            to="https://www.skf.com/ua/"
            target="blank"
            rel="noreferrer noopener nofollow"
          >
            <BrandIcon>
              <use href={`${sprite}#icon-skf`} />
            </BrandIcon>
          </BrandsLink>
        </BrandsItem>

        <BrandsItem>
          <BrandsLink
            to="https://www.timken.com/ru/"
            target="blank"
            rel="noreferrer noopener nofollow"
          >
            <BrandIcon>
              <use href={`${sprite}#icon-timken`} />
            </BrandIcon>
          </BrandsLink>
        </BrandsItem>
      </BrandsList>

      <ShopCategory>
        <ShopCategoryList>
          <ShopCategoryItem>
            <CategoryTitle>ГІДРАВЛІКА</CategoryTitle>
            <CategoryLink to="/">
              <LinkIcon />
            </CategoryLink>
            <GidravlikIcon>
              <use href={`${sprite}#icon-gidravlic`} />
            </GidravlikIcon>
          </ShopCategoryItem>
        </ShopCategoryList>
      </ShopCategory>
    </>
  );
}

export default HomePage;
