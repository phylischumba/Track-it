import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { getUsers, createCharges } from "../../Services/api.service";

const AddCharges = ({ handleModal, meetingId }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [formValues, setFormValues] = useState({
    amount: "",
  });
  const [selectUser, setUserSelect] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };
  const handleSelect = (e) => {
    setUserSelect(e.target.value);
  };

  useEffect(() => {
    setLoading(true);
    getUsers()
      .then((res) => {
        if (res.status === 200) {
          setLoading(false);
          setUsers(res.data.data);
        }
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  }, []);
  const { amount } = formValues;
  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      meeting_uid: meetingId,
      charges: amount,
      user: selectUser,
    };
    console.log(payload, "payload");
    createCharges(payload)
      .then((response) => {
        // set saving state
        if (response.status === 201) {
          setError(false);
          setSuccess(true);
        } else {
          setError(true);
        }
      })
      .catch((error) => {
        console.log(error);
        setError(true);
        setSuccess(false);
      });
  };
  return (
    <Form
      onClick={(e) => {
        e.stopPropagation();
      }}
      onSubmit={handleSubmit}
    >
      <Header>
        <Title>Add user</Title>
        <Icon onClick={handleModal}>x</Icon>
      </Header>

      <Box>
        <Label>Username</Label>
        {loading ? (
          <p>Loading ...</p>
        ) : (
          <Select value={selectUser} onChange={handleSelect}>
            {users.map((user) => (
              <option key={user.user_uid}>{user.name}</option>
            ))}
          </Select>
        )}
      </Box>
      <Box>
        <Label>Amount</Label>
        <Input
          name="amount"
          type="text"
          onChange={handleChange}
          value={formValues.amount}
        />
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
  );
};

export default AddCharges;
const Header = styled.div`
  display: flex;
  height: 20px;
  align-items: center;
  justify-content: space-between;
`;
const Button = styled.button`
  background: #2a45cd;
  color: #fff;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  width: 8%;
  cursor: pointer;
  margin-top: 8px;
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;
const Title = styled.h2``;
const Icon = styled.h2`
  font-size: 16px;
  cursor: pointer;
`;
const Form = styled.form`
  width: 50%;
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

const Select = styled.select`
  width: 100%;
  padding: 8px 10px;
  border: 2px solid #d3d3d3;
  font-size: 12px;
`;
