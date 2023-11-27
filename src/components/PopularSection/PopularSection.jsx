// import AboutImg from '../../assets/AboutImg.jpg';

import sprite from '../../assets/sprite.svg';

// import './HomePage.css';

import FilterImg from '../../assets/FilterTop.jpg';

import {
  PopularSection,
  PopularTitle,
  ProductsList,
  ProductsItem,
  ProductImg,
  Name,
  Availability,
  Price,
  ProductButton,
  ButtonIcon,
} from './PopularSection.styled';

function PopularProducts() {
  return (
    <PopularSection>
      <PopularTitle>ПОПУЛЯРНІ ТОВАРИ</PopularTitle>
      <ProductsList>
        <ProductsItem>
          <ProductImg src={FilterImg} alt="filter" />
          <Name>Масляний фільтр</Name>
          <Availability>В наявності. На складі</Availability>
          <Price>500 грн.</Price>
          <ProductButton type="button">
            <ButtonIcon width="16" height="16">
              <use href={`${sprite}#icon-shopping`} />
            </ButtonIcon>
            Додати у кошик
          </ProductButton>
        </ProductsItem>

        <ProductsItem>
          <ProductImg src={FilterImg} alt="filter" />
          <Name>Масляний фільтр</Name>
          <Availability>В наявності. На складі</Availability>
          <Price>500 грн.</Price>
          <ProductButton type="button">
            <ButtonIcon width="16" height="16">
              <use href={`${sprite}#icon-shopping`} />
            </ButtonIcon>
            Додати у кошик
          </ProductButton>
        </ProductsItem>

        <ProductsItem>
          <ProductImg src={FilterImg} alt="filter" />
          <Name>Масляний фільтр</Name>
          <Availability>В наявності. На складі</Availability>
          <Price>500 грн.</Price>
          <ProductButton type="button">
            <ButtonIcon width="16" height="16">
              <use href={`${sprite}#icon-shopping`} />
            </ButtonIcon>
            Додати у кошик
          </ProductButton>
        </ProductsItem>

        <ProductsItem>
          <ProductImg src={FilterImg} alt="filter" />
          <Name>Масляний фільтр</Name>
          <Availability>В наявності. На складі</Availability>
          <Price>500 грн.</Price>
          <ProductButton type="button">
            <ButtonIcon width="16" height="16">
              <use href={`${sprite}#icon-shopping`} />
            </ButtonIcon>
            Додати у кошик
          </ProductButton>
        </ProductsItem>

        <ProductsItem>
          <ProductImg src={FilterImg} alt="filter" />
          <Name>Масляний фільтр</Name>
          <Availability>В наявності. На складі</Availability>
          <Price>500 грн.</Price>
          <ProductButton type="button">
            <ButtonIcon width="16" height="16">
              <use href={`${sprite}#icon-shopping`} />
            </ButtonIcon>
            Додати у кошик
          </ProductButton>
        </ProductsItem>

        <ProductsItem>
          <ProductImg src={FilterImg} alt="filter" />
          <Name>Масляний фільтр</Name>
          <Availability>В наявності. На складі</Availability>
          <Price>500 грн.</Price>
          <ProductButton type="button">
            <ButtonIcon width="16" height="16">
              <use href={`${sprite}#icon-shopping`} />
            </ButtonIcon>
            Додати у кошик
          </ProductButton>
        </ProductsItem>
      </ProductsList>
    </PopularSection>
  );
}

export default PopularProducts;
