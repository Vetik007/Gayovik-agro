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
            <PhoneIcon />
            <StyledLink to="tel:+3067-111-11-11">067-111-111-111</StyledLink>
          </SupportItem>

          <SupportItem>
            <MailIcon />
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
            <SocialItem>fasebook</SocialItem>
            <SocialItem>telegram</SocialItem>
            <SocialItem>viber</SocialItem>
            <SocialItem></SocialItem>
          </SocialList>
        </ContactBlock>
      </InfoSection>

      <h1>Hi Footer</h1>
    </FooterContainer>
  );
};

export default Footer;
