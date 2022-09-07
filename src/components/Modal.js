import React from "react";
import styled from "styled-components";
const Modal = (props) => {
  const { openModal, handleModal, children } = props;
  if (!openModal) {
    return null;
  }
  return <Wrapper>{children}</Wrapper>;
};

export default Modal;
const Wrapper = styled.div`
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.2);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;
