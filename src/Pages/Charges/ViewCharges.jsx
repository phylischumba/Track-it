import React, { useState } from "react";
import Modal from "../../components/Modal";

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
      <Modal openModal={openModal} handleModal={handleModal} />
    </>
  );
};

export default ViewCharges;
