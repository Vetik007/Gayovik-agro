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
    InfoBlock,
    ProductsList,
    ProductsTitle,
    ProductsItem,
    PpoductLink,
    InfoList,
    InfoTitle
    // ListWrapper
} from "./Footer.styled"

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
                        <StyledLink to="tel:+3067-111-11-11">
              067-111-111-111</StyledLink>
                    </SupportItem>

                    <SupportItem>
                        <MailIcon />
                        <StyledLink to='mailto:agro@gmail.com'>
              agro@gmail.com</StyledLink>
                    </SupportItem>

                    </SupportList>

            </CustomerSupport>

            <InfoBlock>
                <ProductsTitle>
                    Продукція
                </ProductsTitle>
                <ProductsList>

                    <ProductsItem>
                        <PpoductLink to='./'>
              Пошук за брендом</PpoductLink>

                    </ProductsItem>

                    <ProductsItem>
                        <PpoductLink to='./'>
              Пошук за типом</PpoductLink>
                    </ProductsItem>

                </ProductsList>

                <InfoTitle>
                    Питання
                </InfoTitle>

                <InfoList>
                    Оплата
                </InfoList>

                <InfoList>
                    Доставка
                </InfoList>

                <InfoList>
                    Повернення
                </InfoList>


            </InfoBlock>



      
            <h1 >Hi Footer</h1>
      
        </FooterContainer>
    );
    
};

export default Footer;