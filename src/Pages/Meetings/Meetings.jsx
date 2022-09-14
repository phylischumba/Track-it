import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { getMeetings } from "../../Services/api.service";
import { useEffect, useState } from "react";

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
const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
// const Button = styled.button`
//   padding: 4px 16px;
//   outline: none;
//   border: none;
//   text-align: center;
//   font-size: 16px;
//   color: #fff;
//   border-radius: 5px;
//   background-color: #2a45cd;
// `;

const ListofMeeting = () => {
  let navigate = useNavigate();

  const handleRoute = (meetingUid) => {
    navigate(`/view-charges/${meetingUid}`);
  };
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    getMeetings()
      .then((res) => {
        if (res.status === 200) {
          setLoading(false);
          setData(res.data.data);
        }
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  }, []);

  const formatDate = (date) => {
    return new Date(date).toDateString();
  };

  return (
    <div className="meetings-list">
      <div className="list-header">
        <StyledHeader>Meetings</StyledHeader>
        <StyledButton onClick={() => navigate("/add-meeting")}>
          Add meeting
        </StyledButton>
      </div>

      <table className="table">
        <thead>
          <tr>
            <th className="header">Name</th>
            <th className="header">Date</th>
            <th className="header">View</th>
          </tr>
        </thead>
        <tbody>
          {data.length && !loading
            ? data.map((meet, index) => {
                console.log(meet, "meet");
                return (
                  <tr key={index}>
                    <td>{meet.title}</td>
                    <td>{formatDate(meet.scheduled_at)}</td>
                    <td className="tableData">
                      <StyledButton onClick={handleRoute(meet.meeting_uid)}>
                        View charges
                      </StyledButton>
                    </td>
                  </tr>
                );
              })
            : null}
        </tbody>
      </table>
      {data.length < 1 && !loading ? <Div>No meetings recorded</Div> : null}
    </div>
  );
};

export default ListofMeeting;
