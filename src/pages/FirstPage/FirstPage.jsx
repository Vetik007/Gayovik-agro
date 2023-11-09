import { Container, Title, StyledImage } from './FirstPage.styled';
import { Wrapper } from '../../App.styled'
import example from '../../assets/example.png';

const FirstPage = () => {
  return (
    <Wrapper>
    <Container>
      <Title>First Page</Title>
      <StyledImage src={example} alt="Example" />
      </Container>
      </Wrapper>
  );
};

export default FirstPage;
