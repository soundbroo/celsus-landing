import React from "react";
import styled from "styled-components";

const Button = ({ children, invert, transparent, small, mobileFullWidth }) => (
  <ButtonWrapper
    invert={invert}
    transparent={transparent}
    small={small}
    mobileFullWidth={mobileFullWidth}
  >
    {children}
  </ButtonWrapper>
);

export default Button;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: fit-content;
  padding: ${({ small }) => (small ? "16px 32px" : "24px 32px")};
  margin: 12px 0px;
  background: ${({ invert }) => (invert ? "none" : "#70d9ff")};
  color: ${({ invert, transparent }) =>
    transparent ? "#fff" : invert ? "#88DBFF" : "#000"};
  border: ${({ invert, transparent }) =>
    transparent ? "none" : invert ? "2px solid #88DBFF" : "none"};
  border-radius: 38px;
  font-size: 20px;
  line-height: 140%;
  cursor: pointer;

  @media (max-width: 1023px) {
    width: ${({ mobileFullWidth }) =>
      mobileFullWidth ? "calc(100% - 60px)" : "fit-content"};
    justify-content: center;
    padding: 16px 32px;
  }

  @media (max-width: 425px) {
    font-size: 16px;
  }
`;
