import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { FiArrowRight } from 'react-icons/fi';

export const HomePromo = styled.div`
  display: flex;
  justify-content: center;
  gap: 24px;
  margin-bottom: 24px;
  margin-top: 40px;
`;

export const PromoList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const PromoItem = styled.li`
  position: relative;
  width: 350px;
  height: 116px;
  background-color: white;
`;

export const TextBlock = styled.div`
  width: 145px;
  margin-top: 26px;
  margin-left: 16px;
`;

export const PromoTitle = styled.h2`
  margin-bottom: 4px;
  font-family: Oswald;
  font-weight: bold;
  font-size: 16px;
  color: #c00000;
`;

export const PromoText = styled.p`
  font-family: Poppins;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: #101d23;
`;

export const PromoImg = styled.img`
  position: absolute;
  top: 0;
  right: 45px;
`;

export const PromoButton = styled.button`
  position: absolute;
  width: 40px;
  height: 40px;
  border-radius: 50%;

  right: 16px;
  top: 38px;
  background-color: #2b4d5e;

  text-decoration: none;
  border: 1px solid rgb(146, 148, 248);
  overflow: hidden;

  &:hover {
    box-shadow: 1px 1px 25px 10px rgba(146, 148, 248, 0.4);
  }

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      120deg,
      transparent,
      rgba(146, 148, 248, 0.4),
      transparent
    );
    transition: all 650ms;
  }

  &:hover:before {
    left: 100%;
  }
`;

export const ButtonIcon = styled(FiArrowRight)`
  width: 16px;
  height: 16px;
  color: white;
`;

export const BrandsList = styled.ul`
  display: flex;
  justify-content: center;
  margin-top: 88px;
  margin-bottom: 74px;
`;

export const BrandsItem = styled.li``;

export const BrandIcon = styled.svg`
  width: 150px;
  height: 63px;
  background-color: #f1f1f2;
`;

export const BrandsLink = styled(NavLink)``;

export const ShopCategory = styled.section``;

export const ShopCategoryList = styled.ul`
  background-color: white;
`;

export const ShopCategoryItem = styled.li`
  display: flex;
  align-items: center;
  gap: 4px;
  position: relative;
  width: 364px;
  height: 118px;
  border: 1px solid #e6e6e7;
  border-radius: 4px;
`;

export const CategoryLink = styled(NavLink)``;

export const LinkIcon = styled(FiArrowRight)`
  display: flex;
  width: 16px;
  height: 16px;
  color: #2b4d5e;
`;

export const GidravlikIcon = styled.svg`
  position: absolute;
  width: 118px;
  height: 116px;
  right: 32px;
  top: 5px;
`;

export const CategoryTitle = styled.h2`
  margin-left: 17px;
  font-family: Oswald;
  font-weight: bold;
  font-size: 14px;
  line-height: 21px;
  color: #c00000;
`;

export const Band = styled.div``;
