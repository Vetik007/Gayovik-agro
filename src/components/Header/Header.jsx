// import { NavLink } from "react-router-dom";

// import ShoppingCart from "../../../public/ShoppingCart.svg"
import { BiSearch } from 'react-icons/bi';
// import Rectangle from '../../../public/Rectangle @3x.jpg'
// import sprite from '../../images/sprite.svg';
import sprite from '../../assets/sprite.svg';

// import react from "../../assets/react.svg"

import {
  HeaderContainer,
  Navigation,
  StyledLink,
  IconWrapper,
  HeaderContact,
  ContactList,
  InputStyled,
  ButtonStyled,
  FormStyled,
  FormWrapper,
  Parallax,
  // Text,
  ContactItem,
  NavigationWrapper,
  PhoneIcon,
  MailIcon,
  MapIcon,
  LinkHome,
  Register,
  AuzLink,
  AuzText,
  CartButton,
  NavigationList,
  // LogoIcon,
  // Basket
  // Images
} from './Header.styled';
// import sprite from '../../assets/sprite.svg';

export const Header = () => {
  return (
    <HeaderContainer>
      <HeaderContact>
        <ContactList>
          <ContactItem>
            <PhoneIcon />
            <StyledLink to="tel:+3067-111-11-11">067-111-111-111</StyledLink>
          </ContactItem>
          <ContactItem>
            <MailIcon />
            <StyledLink to="mailto:agro@gmail.com">agro@gmail.com</StyledLink>
          </ContactItem>
          <ContactItem>
            <MapIcon />
            <StyledLink
              to="https://maps.app.goo.gl/AQT1NfUeCHiqVSot7"
              target="blank"
              rel="noreferrer noopener nofollow"
            >
              Наше місцезнаходження
            </StyledLink>
          </ContactItem>
        </ContactList>
      </HeaderContact>

      <FormWrapper>
        <Parallax>
          {/* <LogoIcon width="16" height="16">
            <use href={`${sprite}#icon-favic`} />
          </LogoIcon> */}
          <LinkHome to="/">ГАЙОВИК-АГРО</LinkHome>
        </Parallax>

        <FormStyled>
          <InputStyled
            type="text"
            placeholder="Пошук за номером деталі, описом, маркою, моделлю..."
          />
          <ButtonStyled type="submit">
            <BiSearch size="24" />
          </ButtonStyled>
        </FormStyled>

        <Register>
          <AuzLink to="/signup"> РЕЄСТРАЦІЯ</AuzLink>
          <AuzText>/</AuzText>
          <AuzLink to="/signup">ВХІД</AuzLink>
        </Register>

        <CartButton type="submit">
          <svg width="24" height="24">
            <use href={`${sprite}#icon-cart`} />
          </svg>
        </CartButton>
      </FormWrapper>

      <NavigationWrapper>
        <Navigation className="Navigation">
          <NavigationList>
            <li>
              <StyledLink to="/brand" className="StyledLink">
                <IconWrapper className="IconWrapper">
                  <use href={`${sprite}#icon-logo`} />
                </IconWrapper>
                <span>Пошук за брендом</span>
              </StyledLink>
            </li>

            <li>
              <StyledLink to="/type">
                <IconWrapper>
                  <use href={`${sprite}#icon-logo`} />
                </IconWrapper>
                <span>Пошук за типом</span>
              </StyledLink>
            </li>

            <li>
              <StyledLink to="/catalog">
                <IconWrapper>
                  <use href={`${sprite}#icon-logo`} />
                </IconWrapper>
                <span>Каталог</span>
              </StyledLink>
            </li>
          </NavigationList>
        </Navigation>
      </NavigationWrapper>
    </HeaderContainer>
  );
};

//  <Basket>

//           <ShoppingCartIcon />

//           {/* <svg src={ShoppingCart} alt="SVG image">

//           </svg>  */}

//           {/* <img src={ShoppingCart} alt="SVG image"></img> */}

//         </Basket>

// =======================================================================
