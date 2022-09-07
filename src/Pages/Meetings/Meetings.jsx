const ListofMeeting = () => {
  return (
    <div className="meetings-list">
      <div className="list-header">
        <h3>List of Meetings</h3>
        <button>Add meeting</button>
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
