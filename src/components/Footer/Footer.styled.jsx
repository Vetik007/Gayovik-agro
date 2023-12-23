import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import { FiPhoneCall } from 'react-icons/fi';

import { FiMail } from 'react-icons/fi';

import { FaFacebookF } from 'react-icons/fa';
import { FaTelegramPlane } from 'react-icons/fa';
import { FaViber } from 'react-icons/fa';

export const FooterContainer = styled.div`
  width: 1440px;
  height: 420px;
  background-color: #ffffff;
`;

export const CustomerSupport = styled.div`
  display: flex;
  align-items: center;

  height: 88px;
  background-color: #000000;
`;

export const SupportList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 63px;
`;

export const SupportItem = styled.li`
  display: flex;
  align-items: center;
`;

export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  background-color: #c00000;
`;

export const PhoneIcon = styled(FiPhoneCall)`
  width: 24px;
  height: 24px;
  color: #ffffff;

  /* padding: 12px; */
`;

export const MailIcon = styled(FiMail)`
  width: 24px;
  height: 24px;
  color: #ffffff;
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

export const ListWrapper = styled.div``;

export const SupportTextList = styled.ul`
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  margin-left: 269px;
  margin-right: 134px;
  color: white;
`;

export const SupportTextItem = styled.li`
  font-family: Poppins;
  font-weight: 700;
  font-size: 18px;
  line-height: 32px;
`;

export const InfoSection = styled.div`
  display: flex;
  justify-content: center;
  gap: 61px;
  margin-top: 78px;
  background-color: #ffffff;
`;

export const ProductsTitle = styled.h2`
  /* font-family: Oswald; */
  font-family: Rubik Lines;

  font-size: 20px;
  line-height: 24px;
  font-weight: 600;
  /* color: #00baff; */
`;

export const ProductsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 24px;

  font-family: Lobster;
  font-size: 20px;
  /* font-weight: 400; */
  line-height: 24px;
  font-weight: bold;

  /* text-shadow:
    0 0 5px #00baff,
    0 0 10px #00baff,
    0 0 20px #00baff,
    0 0 40px #00baff,
    0 0 80px #00baff;
  transition:
    color 0.3s,
    text-shadow 0.3s; */
`;

export const ProductsItem = styled.li``;

export const PpoductLink = styled(NavLink)``;

// ================================================

export const InfoTitle = styled.h2`
  font-family: Rubik Lines;
  font-size: 20px;
  line-height: 24px;
  font-weight: 600;
`;

export const InfoList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 24px;

  font-family: Lobster;
  font-size: 20px;
  font-weight: bold;
  line-height: 24px;

  /* text-shadow:
    0 0 5px #1fc01f,
    0 0 10px #1fc01f,
    0 0 20px #1fc01f,
    0 0 40px #1fc01f,
    0 0 80px #1fc01f;
  transition:
    color 0.3s,
    text-shadow 0.3s; */
`;

export const InfoItem = styled.li``;

// ====================================

export const AuthList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 24px;

  font-family: Lobster;
  font-size: 20px;
  font-weight: bold;
  line-height: 24px;

  /* text-shadow:
    0 0 5px #00baff,
    0 0 10px #00baff,
    0 0 20px #00baff,
    0 0 40px #00baff,
    0 0 80px #00baff;
  transition:
    color 0.3s,
    text-shadow 0.3s; */
`;

export const AuthItem = styled.li``;

export const AuthTitle = styled.h2`
  font-family: Rubik Lines;
  font-size: 20px;
  line-height: 24px;
  font-weight: 600;
`;

// ========================================

export const ContactBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const ContactTitle = styled.h2`
  font-family: Rubik Lines;
  font-size: 20px;
  line-height: 24px;
  font-weight: 600;
`;

export const ContactLink = styled(NavLink)`
  font-family: Lobster;
  font-size: 20px;
  font-weight: 400;
  line-height: 24px;
`;

// ==============================================
export const SocialList = styled.ul`
  display: flex;

  gap: 24px;
  margin-top: 20px;

  font-family: Lobster;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
`;

export const SocialText = styled.span`
  position: absolute;
  top: 0;
  font-size: 18px;
  background: #ffffff;
  /* color: #ffffff; */
  padding: 5px 8px;
  border-radius: 5px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
  opacity: 0;
  pointer-events: none;
  transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);

  &::before {
    position: absolute;
    content: '';
    height: 8px;
    width: 8px;
    background: #ffffff;
    bottom: -3px;
    left: 50%;
    transform: translate(-50%) rotate(45deg);
    transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    background: #1877f2;
    color: #ffffff;
  }
`;

export const SocialIconFacebook = styled(FaFacebookF)`
  width: 32px;
  height: 32px;
  fill: #1877f2;
  /* color: #1877f2; */
`;

export const SocialIconTelegram = styled(FaTelegramPlane)`
  width: 32px;
  height: 32px;
  fill: #1877f2;
`;

export const SocialIconViber = styled(FaViber)`
  width: 32px;
  height: 32px;
  fill: #1877f2;
`;

export const SocialItem = styled.li`
  position: relative;
  background: #ffffff;
  border-radius: 50%;
  border: 3px solid #1877f2;
  padding: 15px;
  margin: 10px;
  width: 50px;
  height: 50px;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  &:hover {
    background: #1877f2;
    border: 3px solid transparent;
  }

  &:hover {
    ${SocialText} {
      top: -45px;
      opacity: 1;
      visibility: visible;
      pointer-events: auto;
      text-shadow: 0px -1px 0px rgba(0, 0, 0, 0.1);
      background: #1877f2;
      color: #ffffff;
      transition: all 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55);
      /* fill: #ffffff; */
    }
  }

  &:hover {
    ${SocialIconFacebook}, ${SocialIconTelegram}, ${SocialIconViber} {
      /* color: #ffffff; */
      transition: all 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55);
      fill: #ffffff;
    }
  }
`;

export const SocialLink = styled.span`
  display: flex;
`;

// ===============================================
