import { Container, Title, Block,  } from './FirstPage.styled';
import { Wrapper } from '../../App.styled'
// import example from '../../assets/example.png';

const FirstPage = () => {
  return (
    
    <Wrapper>
    <Container>
      <Block>
        <Title>First Page</Title>
        </Block>
      </Container>
      </Wrapper>
  );
};

export default FirstPage;


{/* <Wrapper>
    <Container>
      <Title>First Page</Title>
      <StyledImage src={example} alt="Example" />
      </Container>
    </Wrapper> */}