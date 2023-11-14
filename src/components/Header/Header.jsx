// import { NavLink } from "react-router-dom";

// import ShoppingCart from "../../../public/ShoppingCart.svg"
import { BiSearch } from 'react-icons/bi';
// import Rectangle from '../../../public/Rectangle @3x.jpg'
import sprite from '../../images/sprite.svg'; 


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
  CartButton
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
            <StyledLink to="tel:+3067-111-11-11">
              067-111-111-111</StyledLink>
          </ContactItem>
          <ContactItem>
            <MailIcon />
            <StyledLink to='mailto:agro@gmail.com'>
              agro@gmail.com</StyledLink>
          </ContactItem>
          <ContactItem>
            <MapIcon />
            <StyledLink to="https://maps.app.goo.gl/AQT1NfUeCHiqVSot7" target="blank" rel="noreferrer noopener nofollow">
              Наше місцезнаходження</StyledLink>
          </ContactItem>
        </ContactList>
      </HeaderContact>

      <FormWrapper>
       
        <Parallax>
          {/* <Text>ГАЙОВИК-АГРО</Text> */}
          <LinkHome to="/">ГАЙОВИК-АГРО</LinkHome>
        </Parallax>
        
        <FormStyled>
          
          <InputStyled type="text" placeholder="Пошук за номером деталі, описом, маркою, моделлю..." />
        <ButtonStyled type="submit">
          <BiSearch size="24" />
        </ButtonStyled>
        
        </FormStyled>

        <Register>
          <AuzLink to="/signup">SignUp</AuzLink>
          <AuzText>/</AuzText>
          <AuzLink to="/signin">LOG IN</AuzLink>
        </Register>

        <CartButton type="submit">
          <svg width="24" height="24">
            <use href={`${sprite}#icon-cart`} />
          </svg>
        </CartButton>
        
       

        




      </FormWrapper>

      <NavigationWrapper>
        <Navigation>

        <StyledLink to="/">
          <IconWrapper>
            <use href={`${sprite}#icon-logo`} />
          </IconWrapper>
          Пошук за брендом
        </StyledLink>


        <StyledLink to="/first">
          <IconWrapper>
            <use href={`${sprite}#icon-logo`} />
          </IconWrapper>
          Пошук за типом
        </StyledLink>
        <StyledLink to="/second">
          <IconWrapper>
            <use href={`${sprite}#icon-logo`} />
          </IconWrapper>
          Second
        </StyledLink>
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