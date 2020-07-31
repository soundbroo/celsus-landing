import React from "react";
import styled from "styled-components";
import ContactsInfo from "./Common/ContactsInfo";
import SubscribeIcon from "../images/SubscribeIcon.svg";
import Button from "./Common/Button";

const InputsBlock = () => (
  <InputsBlockWrapper>
    <EmailField type="text" placeholder="Email" />
    <Button small>Подписаться</Button>
  </InputsBlockWrapper>
);

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
            <InputsBlock>
              <EmailField type="text" placeholder="Email" />
              <Button small>Подписаться</Button>
            </InputsBlock>
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

  @media (max-width: 1023px) {
    padding: 20px;
  }
`;

const SubscriptionInfoWrapper = styled.div`
  display: flex;

  > img {
    align-self: baseline;
    margin-right: 32px;

    @media (max-width: 1023px) {
      margin-right: 12px;
    }
  }
`;

const SubscriptionInfo = styled.div`
  max-width: 548px;

  @media (max-width: 1023px) {
    max-width: 100%;
  }
`;

const MainText = styled.div`
  font-weight: bold;
  font-size: 24px;
  line-height: 114%;
  color: #ffffff;
  margin-bottom: 8px;

  @media (max-width: 1023px) {
    font-size: 16px;
  }
`;

const TimingText = styled.div`
  font-size: 16px;
  line-height: 140%;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 20px;

  @media (max-width: 1023px) {
    font-size: 12px;
    margin-bottom: 10px;
  }
`;

const PolicyText = styled.div`
  font-size: 10px;
  line-height: 110%;
  color: rgba(255, 255, 255, 0.3);

  @media (max-width: 1023px) {
    font-size: 10px;
  }

  @media (max-width: 580px) {
    margin-left: -48px;
  }
`;

const Inputs = styled.div`
  display: flex;
  align-items: center;

  @media (min-width: 1023px) {
    display: flex;
  }

  @media (max-width: 1023px) {
    display: none;
  }
`;

const InputsBlockWrapper = styled.div`
  @media (max-width: 1023px) {
    display: flex;
    align-items: center;

    > div:last-child {
      font-size: 14px;
    }
  }

  @media (max-width: 580px) {
    margin-left: -48px;
  }

  @media (min-width: 1023px) {
    display: none;
  }
`;

const EmailField = styled.input`
  background: rgba(255, 255, 255, 0.16);
  border-radius: 60px;
  border: none;
  max-width: 275px;
  height: 60px;
  font-size: 20px;
  line-height: 140%;
  color: rgba(255, 255, 255, 0.45);
  padding-left: 24px;
  outline: none;
  margin-right: 10px;

  @media (max-width: 1023px) {
    font-size: 14px;
    height: 100%;
    padding: 16px 32px;
    width: 100%;
  }
`;

const Contacts = styled.div`
  display: flex;
  justify-content: space-between;
  height: 148px;
  max-width: 1300px;
  margin: auto;
  padding: 0 20px;

  @media (max-width: 600px) {
    padding: 0;
  }

  > div {
    margin-top: 0;
    width: 100%;

    @media (max-width: 1350px) {
      padding: 0;
    }

    @media (max-width: 600px) {
      justify-content: center;
      padding: 0;
    }
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
