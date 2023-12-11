import { Container, Title, TypeList, TypeItem } from './FirstPage.styled';
import { Wrapper } from '../../App.styled';
// import example from '../../assets/example.png';

const FirstPage = () => {
  return (
    <Wrapper>
      <Container className="Container">
        <Title>На цій сторінці будуть виводитись запчастини за типом</Title>
        <Title>Також буде можливість пошуку конкретної запчастини</Title>
        <div>
          <TypeList>
            <TypeItem>Двигун</TypeItem>
            <TypeItem>Трансмісія</TypeItem>
            <TypeItem>Гальма</TypeItem>
            <TypeItem>Гідравліка</TypeItem>
            <TypeItem>Почвообробка</TypeItem>
            <TypeItem>...</TypeItem>
          </TypeList>
        </div>
      </Container>
    </Wrapper>
  );
};

export default FirstPage;

{
  /* <Wrapper>
    <Container>
      <Title>First Page</Title>
      <StyledImage src={example} alt="Example" />
      </Container>
    </Wrapper> */
}
