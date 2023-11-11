import { BiSearch } from 'react-icons/bi';

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
  FormWrapper
} from './Header.styled';
import sprite from '../../assets/sprite.svg';

export const Header = () => {
  return (
    <HeaderContainer>

       <HeaderContact>
        <ContactList>
          <li>067-111-111-111</li>
          <li>agro@gmail.com</li>
          <li>Наше місцезнаходження</li>
        </ContactList>
      </HeaderContact>

      <FormWrapper>
        
        <FormStyled>
          


          <InputStyled type="text" placeholder="Пошук за номером деталі, описом, маркою, моделлю..." />
        <ButtonStyled type="submit">
          <BiSearch size="24" />
        </ButtonStyled>
        
        </FormStyled>

      </FormWrapper>






      <Navigation>

        <StyledLink to="/">
          <IconWrapper>
            <use href={`${sprite}#icon-logo`} />
          </IconWrapper>
          Home
        </StyledLink>


        <StyledLink to="/first">
          <IconWrapper>
            <use href={`${sprite}#icon-logo`} />
          </IconWrapper>
          First
        </StyledLink>
        <StyledLink to="/second">
          <IconWrapper>
            <use href={`${sprite}#icon-logo`} />
          </IconWrapper>
          Second
        </StyledLink>
      </Navigation>
    </HeaderContainer>
  );
};
