// import { FaFacebook } from 'react-icons/fa';
// import { FaFacebookF } from 'react-icons/fa';
// import { FaTelegramPlane } from 'react-icons/fa';
// import { FaPaperPlane } from 'react-icons/fa';
// import { FaRegPaperPlane } from 'react-icons/fa';
// import { FaTelegram } from 'react-icons/fa';
// import { FaViber } from 'react-icons/fa';

import {
  FooterContainer,
  CustomerSupport,
  SupportList,
  SupportItem,
  PhoneIcon,
  StyledLink,
  MailIcon,
  SupportTextList,
  SupportTextItem,
  InfoSection,
  ProductsList,
  ProductsTitle,
  ProductsItem,
  PpoductLink,
  InfoList,
  InfoItem,
  InfoTitle,
  AuthList,
  AuthItem,
  AuthTitle,
  ContactBlock,
  ContactTitle,
  ContactLink,
  SocialList,
  SocialItem,
  IconWrapper,
  SocialText,
  SocialLink,
  SocialIconFacebook,
  SocialIconTelegram,
  SocialIconViber,
  // ListWrapper
} from './Footer.styled';

const Footer = () => {
  return (
    <FooterContainer>
      <CustomerSupport className="CustomerSupport">
        <SupportTextList>
          <SupportTextItem>
            Потрібна допомога з Вашим замовленням?
          </SupportTextItem>

          <SupportTextItem>
            Наша служба підтримки завжди готова допомогти!
          </SupportTextItem>
        </SupportTextList>

        <SupportList>
          <SupportItem>
            <IconWrapper>
              <PhoneIcon />
            </IconWrapper>
            <StyledLink to="tel:+3067-111-11-11">067-111-111-111</StyledLink>
          </SupportItem>

          <SupportItem>
            <IconWrapper>
              <MailIcon />
            </IconWrapper>
            <StyledLink to="mailto:agro@gmail.com">agro@gmail.com</StyledLink>
          </SupportItem>
        </SupportList>
      </CustomerSupport>

      <InfoSection>
        <ProductsList>
          <ProductsItem>
            <ProductsTitle>ПРОДУКЦІЯ</ProductsTitle>
          </ProductsItem>

          <ProductsItem>
            <PpoductLink to="./">Пошук за брендом</PpoductLink>
          </ProductsItem>

          <ProductsItem>
            <PpoductLink to="./">Пошук за типом</PpoductLink>
          </ProductsItem>
        </ProductsList>

        <InfoList>
          <InfoItem>
            <InfoTitle>ПИТАННЯ</InfoTitle>
          </InfoItem>

          <InfoItem>Оплата</InfoItem>

          <InfoItem>Доставка</InfoItem>

          <InfoItem>Повернення</InfoItem>
        </InfoList>

        <AuthList>
          <AuthItem>
            <AuthTitle>АКАУНТ</AuthTitle>
          </AuthItem>

          <AuthItem>Увійти</AuthItem>

          <AuthItem>Зареєструватись</AuthItem>
        </AuthList>

        <ContactBlock>
          <ContactTitle>КОНТАКТИ</ContactTitle>
          <ContactLink
            to="https://maps.app.goo.gl/AQT1NfUeCHiqVSot7"
            target="blank"
            rel="noreferrer noopener nofollow"
          >
            Наше місцезнаходження
          </ContactLink>

          <SocialList>
            <SocialItem>
              <SocialText>fasebook</SocialText>
              <SocialLink>
                <SocialIconFacebook />
                {/* <FaFacebook /> */}
              </SocialLink>
            </SocialItem>

            <SocialItem>
              <SocialText>telegram</SocialText>
              <SocialLink>
                <SocialIconTelegram />
                {/* <FaPaperPlane /> */}
                {/* <FaRegPaperPlane /> */}
                {/* <FaTelegram /> */}
              </SocialLink>
            </SocialItem>

            <SocialItem>
              <SocialText>viber</SocialText>
              <SocialLink>
                <SocialIconViber />
              </SocialLink>
            </SocialItem>
          </SocialList>
        </ContactBlock>
      </InfoSection>
    </FooterContainer>
  );
};

export default Footer;
