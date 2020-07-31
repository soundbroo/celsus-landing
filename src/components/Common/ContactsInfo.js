import React from "react";
import styled from "styled-components";
import logo from "../../images/Logo.svg";

const ContactsInfo = () => (
  <ContactsInfoWrapper>
    <div>
      <img src={logo} alt="logo" />
    </div>
    <Contacts>
      <div>
        <div>E-mail</div>
        <div>digitalhealth@celsus.ai</div>
      </div>
      <div>
        <div>Telegram</div>
        <div>@digitalhealth</div>
      </div>
    </Contacts>
  </ContactsInfoWrapper>
);

export default ContactsInfo;

const ContactsInfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 46px;
  padding: 0 20px;

  @media (max-width: 1023px) {
    flex-direction: column;
    align-items: flex-start;
    margin-top: 0;

    > div:first-child {
      > img {
        margin: 0 20px 20px 20px;
        width: 112px;
        margin-top: 0;
      }
    }
  }
`;

const Contacts = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  > div {
    margin: 0 28px;

    @media (max-width: 1023px) {
      margin: 0 20px;
    }

    > div:first-child {
      color: #fff;
      font-weight: normal;
      font-size: 14px;
      line-height: 140%;

      @media (max-width: 1023px) {
        font-size: 12px;
      }
    }

    > div:last-child {
      color: #48c8ff;
      font-weight: bold;
      font-size: 20px;
      line-height: 140%;

      @media (max-width: 1023px) {
        font-size: 14px;
      }
    }
  }
`;
