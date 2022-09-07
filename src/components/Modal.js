import React from "react";
import styled from "styled-components";
const Modal = (props) => {
  const { openModal, handleModal } = props;
  if (!openModal) {
    return null;
  }
  return (
    <Wrapper>
      <Form>
        <Header>
          <Title>Add user</Title>
          <Icon onClick={handleModal}>x</Icon>
        </Header>

        <Box>
          <Label>Username</Label>
          <Input name="name" type="text" />
        </Box>
        <Box>
          <Label>Amount</Label>
          <Input name="amount" type="text" />
        </Box>
        <Box>
          <Label>Status</Label>
          <Select>
            <option value="paid">Paid</option>
            <option value="unpaid">Unpaid</option>
          </Select>
        </Box>

        <Button type="submit">Add</Button>
      </Form>
    </Wrapper>
  );
};

export default Modal;
const Wrapper = styled.div`
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.2);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Header = styled.div`
  display: flex;
  height: 20px;
  align-items: center;
  justify-content: space-between;
`;
const Title = styled.h2``;
const Error = styled.p`
  color: red;
`;
const Icon = styled.h2`
  font-size: 16px;
  cursor: pointer;
`;
const Form = styled.form`
  width: 70%;
  text-align: left;
  border-radius: 5px;
  box-shadow: 0 0 3px;
  padding: 20px 30px;
  background-color: #fff;
  @media only screen and (max-width: 767px) {
    width: 80%;
  }
`;
const Label = styled.label`
  display: block;
  font-size: 16px;
  margin-bottom: 8px;
`;
const Input = styled.input`
  outline: none;
  width: 100%;
  padding: 8px 10px;
  border: 2px solid #d3d3d3;
  font-size: 12px;
`;
const Box = styled.div`
  margin: 10px 0;
  width: 100%;
`;
const Button = styled.button`
  width: 100%;
  text-align: center;
  font-size: 16px;
  color: #fff;
  background-color: blue;
  padding: 10px 8px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
`;

const Select = styled.select`
  width: 100%;
  padding: 8px 10px;
  border: 2px solid #d3d3d3;
  font-size: 12px;
`;
