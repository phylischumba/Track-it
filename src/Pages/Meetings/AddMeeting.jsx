import { useState } from "react";
import styled from "styled-components";
import { createMeeting } from "../../Services/api.service";

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
`;

const Box = styled.div`
  margin: 10px 0;
  width: 100%;
`;

const Success = styled.small`
  color: green;
`;

const Error = styled.small`
  color: red;
`;

const AddMeeting = () => {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      title: name,
      scheduled_at: date,
    };
    createMeeting(data)
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
    <StyledDiv>
      <h2>Create meeting</h2>
      <StyledForm>
        <label htmlFor="name">Name:</label>
        <StyledInput
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="date">Date:</label>
        <StyledInput
          type="date"
          id="date"
          name="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <StyledButton onClick={(e) => handleSubmit(e)}>Save</StyledButton>

        {success && (
          <Box>
            <Success>Meeting created successfully</Success>
          </Box>
        )}
        {error && (
          <Box>
            <Error>Failed to create meeting</Error>
          </Box>
        )}
      </StyledForm>
    </StyledDiv>
  );
};

export default AddMeeting;
