import {
  Container,
  CatalogList,
  Title,
  CatalogItem,
} from './SecondPage.styled';
import { Wrapper } from '../../App.styled';

const SecondPage = () => {
  return (
    <Wrapper>
      <Container className="Container">
        <Title>На цій сторінці будє виводитись каталог всіх запчастин</Title>
        <Title>Також буде можливість пошуку запчастин за маркою техніки</Title>
        <div>
          <CatalogList>
            <CatalogItem>John Deere</CatalogItem>
            <CatalogItem>Claas</CatalogItem>
            <CatalogItem>Case IH</CatalogItem>
            <CatalogItem>New Holland</CatalogItem>
            <CatalogItem>Fendt</CatalogItem>
            <CatalogItem>...</CatalogItem>
          </CatalogList>
        </div>
      </Container>
    </Wrapper>
  );
};

export default SecondPage;
