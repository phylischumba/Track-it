import styled from "styled-components";
const ListofMeeting = () => {
  return (
    <div className="meetings-list">
      <div>
        <h3>List of Meetings</h3>
        <button>Add meeting</button>
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
            <Button>View charges</Button>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default ListofMeeting;
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
