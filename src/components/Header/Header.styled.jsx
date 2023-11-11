import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderContainer = styled.div`
  padding: 10px;
`;

export const Navigation = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledLink = styled(Link)`
  padding: 8px 16px;
  color: #ffffff; /* White text color */
  text-shadow:
    0 0 5px #00baff,
    0 0 10px #00baff,
    0 0 20px #00baff,
    0 0 40px #00baff,
    0 0 80px #00baff;
  transition:
    color 0.3s,
    text-shadow 0.3s;

  &:hover,
  &:focus {
    color: #00baff; /* Blue text color on hover/focus */
    text-shadow:
      0 0 5px #00baff,
      0 0 10px #00baff,
      0 0 20px #00baff,
      0 0 40px #00baff,
      0 0 80px #00baff;
  }
`;

export const IconWrapper = styled.svg`
  width: ${(props) => props.size || '12px'};
  height: ${(props) => props.size || '12px'};
  fill: ${(props) => props.color || '#ffffff'};
  display: inline-block;
  margin-right: 5px;
  box-shadow:
    0 0 5px #00baff,
    0 0 10px #00baff,
    0 0 20px #00baff,
    0 0 40px #00baff,
    0 0 80px #00baff;
`;


export const HeaderContact = styled.div`
    background-color: #000000;
;
    width: 1440px;
  

  
`;

export const ContactList = styled.ul`
    display: flex;
    width: 1440px;
     gap: 20px;

     color: #FFFFFF;
font-family: Poppins;
font-weight: 400;
font-size: 12px;
line-height: 18px;
    
`;

export const InputStyled = styled.input`
    width: 856px;
    height: 40px;

    display: inline-block;
    
  /* width: 100%; */
  
  font: inherit;
font-family: Poppins;
font-weight: 400;
font-size: 14px;
line-height: 24px;


  
  border: none;
  outline: none;
  /* padding-left: 16px; */
  /* padding-right: 12px; */
  ::placeholder {
    font: inherit;
    font-size: 16px;
  }
    
`;

export const ButtonStyled = styled.button`
    display: inline-block;
  width: 48px;
  height: 48px;
  border: 0;
  background-size: 70%;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  :hover {
    opacity: 1;
  }
    
`;

export const FormStyled = styled.form`
   display: flex;
  align-items: center;
  /* width: 100%; */
  max-width: 856px;
  margin-left: 250px;
  
  background-color: #fff;
  border-radius: 3px;
  overflow: hidden;

padding-left: 16px;
  padding-right: 12px;
    
`;

export const FormWrapper = styled.div`
width: 1440px;
   background-color: #2B4D5E;
   padding-top: 17px;
   padding-bottom: 16px;
`;














