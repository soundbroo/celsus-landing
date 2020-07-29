import React from "react";
import styled from "styled-components";
import ContactsInfo from "./Common/ContactsInfo";

const Footer = () => (
  <FooterWrapper>
    <FooterBlockWrapper>
      <Contacts>
        <ContactsInfo />
      </Contacts>
    </FooterBlockWrapper>
    <FooterBlockWrapper>
      <CompanyName>© ООО "Медицинские скрининг системы" 2020</CompanyName>
    </FooterBlockWrapper>
  </FooterWrapper>
);

export default Footer;

const FooterWrapper = styled.div`
  background: #102537;
  width: 100%;
`;

const FooterBlockWrapper = styled.div`
  background: #102537;
  width: 100%;
  border-bottom: 1px solid #364553;
`;

const Contacts = styled.div`
  display: flex;
  justify-content: space-between;
  height: 148px;
  width: 65%;
  margin: auto;
  > div {
    margin-top: 0;
    width: 100%;
  }
`;

const CompanyName = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  line-height: 16px;
  height: 48px;
  color: rgba(255, 255, 255, 0.5);
`;
