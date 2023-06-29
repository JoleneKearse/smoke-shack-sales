import styled from "styled-components";
import shop from "./assets/smoke-shack.jpg";

const Title = styled.h1`
  font-size: 2em;
  text-align: center;
`;

const Shop = styled.img`
  display: block;
  max-width: 90vw;
  border-radius: 0.5em;
`;

const Header = () => {
  return (
    <>
      <Title>Vern's Smoke Shack</Title>
      <Shop src={shop} alt="Shop in June" />
    </>
  );
};

export default Header;
