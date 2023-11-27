// import { useState } from 'react'
// import reactLogo from '../../assets/react.svg'
// import viteLogo from '/vite.svg'
// import { FiArrowRight } from 'react-icons/fi';
import AboutSection from '../../components/About/About';
import PopularProducts from '../../components/PopularSection/PopularSection';

import HomePromoImg from '../../assets/HomePromo.jpg';
import FilterImg from '../../assets/Filter.jpg';
import HydraulicImg from '../../assets/Hydraulic.jpg';
import EngineImg from '../../assets/Engine.jpg';
import Transmission from '../../assets/Transmission.jpg';
import Electrical from '../../assets/Electrikal.jpg';
import Brakes from '../../assets/Brakes.jpg';
import Lubricants from '../../assets/Lubricants.jpg';
import Belt from '../../assets/Belt.jpg';
import Plow from '../../assets/Plow.jpg';
// import AboutImg from '../../assets/AboutImg.jpg';

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
  // GidravlikIcon,
  CategoryTitle,
  CategoriTitle,
  CategoriImg,
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
        <CategoriTitle>ТОВАРИ ПО КАТЕГОРІЯМ</CategoriTitle>

        <ShopCategoryList>
          <ShopCategoryItem>
            <CategoryTitle>ГІДРАВЛІКА</CategoryTitle>
            <CategoryLink to="/">
              <LinkIcon />
            </CategoryLink>

            <CategoriImg src={HydraulicImg} alt="hydraulic pump" />
          </ShopCategoryItem>

          <ShopCategoryItem>
            <CategoryTitle>ФІЛЬТРИ</CategoryTitle>
            <CategoryLink to="/">
              <LinkIcon />
            </CategoryLink>
            <CategoriImg src={FilterImg} alt="filter" />
          </ShopCategoryItem>

          <ShopCategoryItem>
            <CategoryTitle>ДВИГУН</CategoryTitle>
            <CategoryLink to="/">
              <LinkIcon />
            </CategoryLink>
            <CategoriImg src={EngineImg} alt="engine" />
          </ShopCategoryItem>

          <ShopCategoryItem>
            <CategoryTitle>ТРАНСМІСІЯ</CategoryTitle>
            <CategoryLink to="/">
              <LinkIcon />
            </CategoryLink>
            <CategoriImg src={Transmission} alt="transmission" />
          </ShopCategoryItem>

          <ShopCategoryItem>
            <CategoryTitle>ЕЛЕКТРИКА</CategoryTitle>
            <CategoryLink to="/">
              <LinkIcon />
            </CategoryLink>
            <CategoriImg src={Electrical} alt="filter" />
          </ShopCategoryItem>

          <ShopCategoryItem>
            <CategoryTitle>ГАЛЬМА</CategoryTitle>
            <CategoryLink to="/">
              <LinkIcon />
            </CategoryLink>
            <CategoriImg src={Brakes} alt="brake discs" />
          </ShopCategoryItem>

          <ShopCategoryItem>
            <CategoryTitle>МАСЛА ТА АВТОХІМІЯ</CategoryTitle>
            <CategoryLink to="/">
              <LinkIcon />
            </CategoryLink>
            <CategoriImg src={Lubricants} alt="oil canister" />
          </ShopCategoryItem>

          <ShopCategoryItem>
            <CategoryTitle>РЕМЕНІ ТА ЛАНЦЮГИ</CategoryTitle>
            <CategoryLink to="/">
              <LinkIcon />
            </CategoryLink>
            <CategoriImg src={Belt} alt="belt" />
          </ShopCategoryItem>

          <ShopCategoryItem>
            <CategoryTitle>ПОЧВООБРОБКА</CategoryTitle>
            <CategoryLink to="/">
              <LinkIcon />
            </CategoryLink>
            <CategoriImg src={Plow} alt="plow" />
          </ShopCategoryItem>
        </ShopCategoryList>
      </ShopCategory>

      <PopularProducts />

      <AboutSection />

      {/* <About>
        <img src={AboutImg} alt="tractor" />
        <Parallax>
          <AboutTitle>
            СТВОРЕННЯ НАПРЯМКУ В СІЛЬСЬКОГОСПОДАРСЬКИХ ТЕХНОЛОГІЯХ
          </AboutTitle>
        </Parallax>
        <AboutInfo>
          <AboutText>
            Маючи багаторічний досвід, компанія Гайовик-агро володіє та управляє
            мережею дистрибуції обладнання та послуг у сільськогосподарській
            галузі. Гайовик-агро є найбільшим дистриб`ютором
            сільськогосподарської та будівельної техніки в США та одним з
            найбільших імпортерів і дистриб`юторів такого обладнання у світі.
            Основними партнерами Гайовик-агро є відомі бренди, серед яких Claas,
            Lemken, Kuhn, INA, Timken, SKF, Avia, Gates.
          </AboutText>
        </AboutInfo>
      </About> */}
    </>
  );
}

export default HomePage;
