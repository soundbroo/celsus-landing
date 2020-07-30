import React from "react";
import styled from "styled-components";
import ContactsInfo from "./Common/ContactsInfo";
import SubscribeIcon from "../images/SubscribeIcon.svg";
import Button from "./Common/Button";

const Footer = () => (
  <FooterWrapper>
    <FooterBlockWrapper>
      <Subscription>
        <SubscriptionInfoWrapper>
          <img src={SubscribeIcon} alt="subscribe" />
          <SubscriptionInfo>
            <MainText>
              Хочу получать уведомления о новостях, событиях и предложениях
            </MainText>
            <TimingText>(не чаще 3 раз в месяц)</TimingText>
            <PolicyText>
              Подписываясь на рассылку, вы соглашаетесь с Политикой
              конфиденциальности и даете согласие на использование файлов
              cookie, обработку и хранение своих персональных данных.
            </PolicyText>
          </SubscriptionInfo>
        </SubscriptionInfoWrapper>
        <Inputs>
          <EmailField type="text" placeholder="Email" />
          <Button small>Подписаться</Button>
        </Inputs>
      </Subscription>
    </FooterBlockWrapper>
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
  z-index: 2;
`;

const FooterBlockWrapper = styled.div`
  background: #102537;
  width: 100%;
  border-bottom: 1px solid #364553;
`;

const Subscription = styled.div`
  display: flex;
  justify-content: space-between;
  margin: auto;
  padding: 40px 20px;
  max-width: 1300px;
`;

const SubscriptionInfoWrapper = styled.div`
  display: flex;

  > img {
    align-self: baseline;
    margin-right: 32px;
  }
`;

const SubscriptionInfo = styled.div`
  max-width: 548px;
`;

const MainText = styled.div`
  font-weight: bold;
  font-size: 24px;
  line-height: 114%;
  color: #ffffff;
  margin-bottom: 8px;
`;

const TimingText = styled.div`
  font-size: 16px;
  line-height: 140%;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 20px;
`;

const PolicyText = styled.div`
  font-size: 10px;
  line-height: 110%;
  color: rgba(255, 255, 255, 0.3);
`;

const Inputs = styled.div`
  display: flex;
  align-items: center;
`;

const EmailField = styled.input`
  background: rgba(255, 255, 255, 0.16);
  border-radius: 60px;
  border: none;
  width: 275px;
  height: 60px;
  font-size: 20px;
  line-height: 140%;
  color: rgba(255, 255, 255, 0.45);
  padding-left: 24px;
  outline: none;
  margin-right: 10px;
`;

const Contacts = styled.div`
  display: flex;
  justify-content: space-between;
  height: 148px;
  max-width: 1300px;
  margin: auto;
  padding: 0 20px;
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
