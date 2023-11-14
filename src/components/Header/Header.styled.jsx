import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import { FiPhoneCall } from "react-icons/fi";
import { FiMail } from "react-icons/fi";
import { FiMapPin } from "react-icons/fi";


export const HeaderContainer = styled.div`
  padding: 10px;
`;

export const NavigationWrapper = styled.div`
  /* display: flex;
  justify-content: center;
  align-items: center; */
  /* background-color: #FFFFFF1A; */
   /* background-color: #597887 ; */
  width: 1440px;

  background-color: #355e73
`;


export const Navigation = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: #FFFFFF1A;
  width: 1440px; */
`;

export const StyledLink = styled(NavLink)`
  padding: 8px 12px;

  font-family: Poppins;
font-weight: bold;

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

export const PhoneIcon = styled(FiPhoneCall)`
  width: 16px;
  height: 16px;
  color: #ffffff;
`;

export const MailIcon = styled(FiMail)`
  width: 16px;
  height: 16px;
 color: #ffffff;
`;

export const MapIcon = styled(FiMapPin)`
  width: 16px;
  height: 16px;
 color: #ffffff;
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
    width: 1440px;
  
`;

export const ContactList = styled.ul`
    display: flex;
    width: 1440px;
     gap: 20px;
     margin-left: 32px;

     color: #FFFFFF;
font-family: Poppins;
font-weight: 400;
font-size: 12px;
line-height: 18px;
    
`;

export const ContactItem = styled.li`
    display: flex;
    align-items: center;
`;

export const InputStyled = styled.input`
    width: 856px;
    height: 40px;

    display: inline-block;
   
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
  height: 40px;

  margin-left: 60px;
  
  background-color: #fff;
  border-radius: 5px;
  overflow: hidden;

padding-left: 16px;
  padding-right: 12px;
    
`;

export const FormWrapper = styled.div`
display: flex;
align-items: center;
width: 1440px;
/* height: 40px; */
   background-color: #2B4D5E;
   /* padding-top: 17px;
   padding-bottom: 16px; */
`;

export const Register = styled.div`
display: flex;
align-items: center;
gap: 5px;
margin-left: 60px;

`;

export const AuzLink = styled(NavLink)`
font-family: Oswald;
font-size: 14px;
line-height: 16px;
font-weight: 500;
color: #FFFFFF;

`;

export const AuzText = styled.p`
margin: 0;
font-family: Oswald;
font-size: 18px;
font-weight: bold;
color: #FFFFFF;

`;

export const CartButton = styled.button`
background-color: transparent;
margin-left: 24px;

`;








export const Parallax = styled.div`
position: relative;
 width: 165px;
  height: 0;
  border-top: 72px solid #C00000;
  /* border-bottom: 72px solid #C00000; Высота трапеции */
  border-left: 0px solid transparent; /* Длина верхней стороны */
  border-right: 23px solid transparent; /* Длина верхней стороны */

`;

export const Text = styled.p`
 position: absolute;
    top: -50px;
    left: 24px;
    color: white;
    font-weight: bold;
    font-size: 14px;

`;

export const LinkHome = styled(NavLink)`
 position: absolute;
    top: -50px;
    left: 24px;
    color: white;
    font-weight: bold;
    font-size: 14px;

`;




























