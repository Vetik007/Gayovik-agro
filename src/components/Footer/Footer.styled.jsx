import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import { FiPhoneCall } from 'react-icons/fi';

import { FiMail } from 'react-icons/fi';

export const FooterContainer = styled.div`
  width: 1440px;
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

export const PhoneIcon = styled(FiPhoneCall)`
  width: 16px;
  height: 16px;
  color: #ffffff;
  background-color: #c00000;
  padding: 12px;
`;

export const MailIcon = styled(FiMail)`
  width: 16px;
  height: 16px;
  color: #ffffff;
  background-color: #c00000;
  padding: 12px;
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
  font-family: Oswald;
  font-size: 18px;
  line-height: 24px;
  font-weight: 600;
`;

export const ProductsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 24px;

  font-family: Poppins;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
`;

export const ProductsItem = styled.li``;

export const PpoductLink = styled(NavLink)``;

export const InfoTitle = styled.h2`
  font-family: Oswald;
  font-size: 18px;
  line-height: 24px;
  font-weight: 600;
`;

export const InfoList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 24px;

  font-family: Poppins;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
`;

export const InfoItem = styled.li``;

export const AuthList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 24px;

  font-family: Poppins;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
`;

export const AuthItem = styled.li``;

export const AuthTitle = styled.h2`
  font-family: Oswald;
  font-size: 18px;
  line-height: 24px;
  font-weight: 600;
`;

export const ContactBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const ContactTitle = styled.h2`
  font-family: Oswald;
  font-size: 18px;
  line-height: 24px;
  font-weight: 600;
`;

export const ContactLink = styled(NavLink)``;

export const SocialList = styled.ul`
  display: flex;

  gap: 24px;

  font-family: Poppins;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
`;

export const SocialItem = styled.li``;