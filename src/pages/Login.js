import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { getMeetings, login } from "../Services/api.service";
import { saveToLocalStorag, saveToLocalStorage } from "../Utils";

const Login = () => {
  let navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    name: "",
  });
  const [nameErr, setNameErr] = useState("");
  const handleChange = (e) => {
    const { value, name } = e.target;
    setNameErr("");
    setFormValues({ ...formValues, [name]: value });
  };
  const handleNavigate = () => {
    navigate("/meeting-list");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formValues.value) {
      setNameErr("Username is required");
    }
    if (formValues.name) {
      const loginData = {
        username: formValues.name
      }

      console.log(loginData);
      login(loginData).then(response => {
        if (response.data) {
          // save use to local storage
          saveToLocalStorage(JSON.stringify(response.data), 'trackItAuth');
          // navigate to meetings
          setTimeout(() => {
            handleNavigate();
          }, 500)
        }
      }).catch(error => {
        console.log(error);
      })
    }
  };


  return (
    <Wrapper>
      <Form onSubmit={handleSubmit}>
        <Title>Sign in</Title>
        <Box>
          <Label>Username</Label>
          <Input name="name" type="text" onChange={handleChange} />
        </Box>
        <Box>{nameErr && <Error>{nameErr}</Error>}</Box>
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
const Title = styled.h2``;
const Error = styled.p`
  color: red;
`;
const Form = styled.form`
  width: 30%;
  text-align: left;
  border-radius: 5px;
  border:1px solid rgba(1,1,1,0.4);
  box-shadow: 0 1px 0 rgba(1,1,1,0.2);
  padding: 20px 30px;
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
  outline:none;
  border-radius:4px;
  width: 100%;
  padding: 8px 10px;
  border: 1px solid rgba(1,1,1,0.5);
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
