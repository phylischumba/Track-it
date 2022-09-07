import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const StyledButton = styled.button`
background: #2a45cd;
color: #fff;
padding: 8px 16px;
border: none;
cursor: pointer;
border-radius: 4px;
`
const StyledHeader = styled.h2`
font-size: 20px;
`

const ListofMeeting = () => {
    let navigate = useNavigate();

  return (
    <div className="meetings-list">
      <div className="list-header">
        <StyledHeader>List of Meetings</StyledHeader>
        <StyledButton onClick={() => navigate('/add-meeting')} >Add meeting</StyledButton>
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
      </table>
    </div>
  );
};

export default ListofMeeting;
