import { useState } from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  width: 100%;
  height: 100%;
  padding: 24px;
  display: flex;
  flex-direction: column;
`;

const StyledButton = styled.button`
  background: #2a45cd;
  color: #fff;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  width: 50%;
  cursor: pointer;
  margin-top: 8px;
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

const StyledInput = styled.input`
  width: 50%;
  padding: 8px;
  margin: 8px 0;
  border: 1px solid #e3e3e3;
  border-radius: 4px;
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

const StyledForm = styled.form`
display: flex;
flex-direction: column;
padding: 16px 0;
`
const AddMeeting = () => {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');

  return (
    <StyledDiv>
      <h2>Create meeting</h2>
      <StyledForm>
        <label htmlFor="name">Name:</label>
        <StyledInput type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} />
        <label htmlFor="date">Date:</label>
        <StyledInput type="date" id="date" name="date" value={date} onChange={(e) => setDate(e.target.value)} />
        <StyledButton onClick={() => console.log(name,date)}>Save</StyledButton>
      </StyledForm>
    </StyledDiv>
  );
};

export default AddMeeting;
