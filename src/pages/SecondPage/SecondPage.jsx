import { Container, Block, Title, StyledLink } from './SecondPage.styled';
import { Wrapper } from '../../App.styled';

const SecondPage = () => {
  return (
    <Wrapper>
    <Container>
      <Block>
        <Title>Second Page</Title>
        <StyledLink to="/second/5">Half</StyledLink>
      </Block>
      </Container>
      </Wrapper>
  );
};

export default SecondPage;
