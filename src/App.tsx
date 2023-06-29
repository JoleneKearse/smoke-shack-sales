import styled from "styled-components";
import Header from "./Header";
import Form from "./Form";
import Total from "./Total";

const Container = styled.div`
  margin: 1em;
`;

const App = () => {
  return (
    <Container>
      <Header />
      <Form></Form>
      <Total />
    </Container>
  );
};

export default App;
