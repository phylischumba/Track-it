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
const Button = styled.button`
  padding: 4px 16px;
  outline: none;
  border: none;
  text-align: center;
  font-size: 16px;
  color: #fff;
  border-radius: 5px;
  background-color: #2a45cd;
`;

const ListofMeeting = () => {
  let navigate = useNavigate();

  const handleRoute = () => {
    navigate("/view-charges");
  };

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
          <th className="header">View</th>
        </tr>
        <tr>
          <td>Frontend meetup</td>
          <td>12th Sept 2022</td>
          <td className="tableData">
            <Button onClick={handleRoute}>View charges</Button>
          </td>
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
