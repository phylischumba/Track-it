import React, { useState } from "react";
import styled from "styled-components";

const Login = () => {
  const [formValues, setFormValues] = useState({
    name: "",
  });
  const handleChange = (e) => {
    const { value, name } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  console.log(formValues);
  return (
    <Wrapper>
      <Form onSubmit={handleSubmit}>
        <h2>Sign in</h2>
        <Box>
          <Label>Username</Label>
          <Input name="name" type="text" onChange={handleChange} />
        </Box>

        <Button type="submit">Sign in</Button>
      </Form>
    </Wrapper>
  );
};

export default Login;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  min-height: 100vh;
  margin: auto;
  align-items: center;
`;
const Form = styled.form`
  width: 30%;
  border-radius: 5px;
  box-shadow: 0 0 3px;
  padding: 20px 30px;
  @media only screen and (max-width: 767px) : {
    width: 100%;
    background-color: blue;
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
`;
