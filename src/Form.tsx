import styled from "styled-components";

const FormArea = styled.div`
  margin: 2em 0;
  border: 1px solid #ed4449;
  border-radius: 0.5em;
`;

const FormTitle = styled.h2`
  font-size: 1.5em;
  text-align: center;
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.5em;
`;

const Categories = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.5em;
  margin: 0.75em 0;
`;

const Button = styled.button`
  border-radius: 0.25em;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 0.75em;
  font-weight: 500;
  font-family: inherit;
  background-color: #1a1a1a;
  cursor: pointer;
  transition: border-color 0.25s;
`;

const Form = () => {
  return (
    <FormArea>
      <FormTitle>Add Sales</FormTitle>
      <ButtonBox>
        <Categories>
          <Button>DK Ultra King</Button>
          <Button>DK Medium King</Button>
          <Button>DK Full Flavour King</Button>
          <Button>DK Ultra Regular</Button>
          <Button>DK Medium Regular</Button>
          <Button>DK Full Flavour Regular</Button>
        </Categories>
        <Categories>
          <Button>Putter's Ultra King</Button>
          <Button>Putter's Medium King</Button>
          <Button>Putter's Full Flavour King</Button>
          <Button>Putter's Ultra Regular</Button>
          <Button>Putter's Medium Regular</Button>
          <Button>Putter's Full Flavour Regular</Button>
        </Categories>
        <Categories>
          <Button>Oakdale Smooth King</Button>
        </Categories>
        <Categories>
          <Button>du Maurier Signature King</Button>
          <Button>du Maurier Signature Regular</Button>
          <Button>du Maurier Smooth King</Button>
          <Button>du Maurier Smooth Regular</Button>
          <Button>du Maurier Distinct King</Button>
          <Button>du Maurier Distinct Regular</Button>
        </Categories>
        <Categories>
          <Button>Players</Button>
          <Button>John Players</Button>
          <Button>Canadian Classics Select</Button>
        </Categories>
        <Categories>
          <Button>pop</Button>
          <Button>lighter</Button>
          <Button>chips</Button>
          <Button>papers</Button>
          <Button>Pickerel</Button>
        </Categories>
      </ButtonBox>
    </FormArea>
  );
};

export default Form;
