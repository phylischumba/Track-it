import React, { useState } from "react";
import Modal from "../../components/Modal";
import styled from "styled-components";

const ViewCharges = () => {
  const [openModal, setOpenModal] = useState(false);
  const handleModal = () => {
    setOpenModal((prev) => {
      return !prev;
    });
  };
  return (
    <>
      <div className="meetings-list">
        <div>
          <h3>List of users</h3>
          <button onClick={handleModal}>Add user</button>
        </div>

        <table className="table">
          <tr>
            <th className="header">Name</th>
            <th className="header">Amount</th>
            <th className="header">Status</th>
          </tr>
          <tr>
            <td>John Doe</td>
            <td>50</td>
            <td>Paid</td>
          </tr>
        </table>
      </div>
      <Modal openModal={openModal} handleModal={handleModal}>
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
      </Modal>
    </>
  );
};

export default ViewCharges;
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
