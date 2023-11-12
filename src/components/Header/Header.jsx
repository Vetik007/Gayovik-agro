import { NavLink } from "react-router-dom";


import { BiSearch } from 'react-icons/bi';
// import Rectangle from '../../../public/Rectangle @3x.jpg'
import { FiMail } from "react-icons/fi";
import { FiPhoneCall } from "react-icons/fi";


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
  Paral,
  Text,
  ContactItem,
  NavigationWrapper
  // Images
} from './Header.styled';
import sprite from '../../assets/sprite.svg';

export const Header = () => {
  return (
    <HeaderContainer>

       <HeaderContact>
        <ContactList>
          <ContactItem>
            <FiPhoneCall />
            <NavLink to="tel:+3067-111-11-11">
              067-111-111-111</NavLink>
          </ContactItem>
          <ContactItem>
            <FiMail />
            <NavLink to='mailto:agro@gmail.com'>
              agro@gmail.com</NavLink>
          </ContactItem>
          <ContactItem>
            <NavLink to="https://maps.app.goo.gl/UbRt4DQgzanKoj3j9" target="blank" rel="noreferrer noopener nofollow">
              Наше місцезнаходження</NavLink>
          </ContactItem>
        </ContactList>
      </HeaderContact>

      <FormWrapper>
       
        <Paral>
          <Text>ГАЙОВИК-АГРО</Text>
        </Paral>
        
        <FormStyled>
          
          <InputStyled type="text" placeholder="Пошук за номером деталі, описом, маркою, моделлю..." />
        <ButtonStyled type="submit">
          <BiSearch size="24" />
        </ButtonStyled>
        
        </FormStyled>

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
