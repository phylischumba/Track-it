import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const StyledButton = styled.button`
  background: #2a45cd;
  color: #fff;
  padding: 8px 16px;
  border: none;
  cursor: pointer;
  border-radius: 4px;
  align-self: baseline;
`;
const StyledHeader = styled.h2`
  font-size: 20px;
  align-self: baseline;
  @media only screen and (max-width: 768px) {
    margin-bottom: 8px;
  }
`;

const ListofMeeting = () => {
  let navigate = useNavigate();

  return (
    <div className="meetings-list">
      <div className="list-header">
        <StyledHeader>List of Meetings</StyledHeader>
        <StyledButton onClick={() => navigate("/add-meeting")}>
          Add meeting
        </StyledButton>
      </div>

      <table className="table">
        <tr>
          <th className="header">Name</th>
          <th className="header">Date</th>
        </tr>
        <tr>
          <td>Frontend meetup</td>
          <td>12th Sept 2022</td>
        </tr>
        <tr>
          <td>Backend meetup</td>
          <td>15th Sept 2022</td>
        </tr>
      </table>
    </div>
  );
};

export default ListofMeeting;
