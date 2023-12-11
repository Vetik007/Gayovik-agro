import { Container, BrandList, Title, BrandItem } from './BrandPage.style';
import { Wrapper } from '../../App.styled';

const BrandPage = () => {
  return (
    <Wrapper>
      <Container className="Container">
        <Title>На цій сторінці будє виводитись каталог брендів</Title>
        <Title>з можливістю пошуку запчастин за брендом</Title>
        <div>
          <BrandList>
            <BrandItem>Avia</BrandItem>
            <BrandItem>Claas</BrandItem>
            <BrandItem>Gates</BrandItem>
            <BrandItem>INA</BrandItem>
            <BrandItem>Kuhn</BrandItem>
            <BrandItem>Lemken</BrandItem>
            <BrandItem>SKF</BrandItem>
            <BrandItem>Timken</BrandItem>
            <BrandItem>...</BrandItem>
          </BrandList>
        </div>
      </Container>
    </Wrapper>
  );
};

export default BrandPage;
