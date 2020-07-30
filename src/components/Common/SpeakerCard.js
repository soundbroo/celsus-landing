import React from "react";
import styled from "styled-components";
import SpeakerCardQuotes from "../../images/SpeakerCardQuotes.svg";
import SpeakerCardMobileQuotes from "../../images/SpeakerCardMobileQuotes.svg";

const SpeakerCard = ({ avatar, name, position, items }) => (
  <SpeakerCardWrapper>
    <SpeakerInfo>
      <Avatar>{avatar}</Avatar>
      <Info>
        <Name>{name}</Name>
        <Position>{position}</Position>
      </Info>
    </SpeakerInfo>
    <ItemsList>
      {items.map((el) => (
        <Item>
          <Prefix />
          <div>{el}</div>
        </Item>
      ))}
    </ItemsList>
  </SpeakerCardWrapper>
);

export default SpeakerCard;

const SpeakerCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 32px 24px 32px 72px;
  background: #253c50;
  border-radius: 16px;
  max-width: 548px;
  margin-bottom: 12px;

  @media (max-width: 700px) {
    padding: 20px 16px;
  }
`;

const SpeakerInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const Avatar = styled.div`
  min-width: 80px;
  height: 80px;
  border-radius: 50px;
  background: #1c3245;

  @media (max-width: 700px) {
    min-width: 48px;
    height: 48px;
    margin-right: 20px;
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px 20px;
  max-width: 250px;

  @media (max-width: 700px) {
    margin: 0;
  }
`;

const Name = styled.div`
  font-weight: bold;
  font-size: 20px;
  line-height: 140%;
  color: #ffffff;
  margin-bottom: 8px;

  @media (max-width: 700px) {
    font-size: 14px;
  }
`;

const Position = styled.div`
  color: rgba(255, 255, 255, 0.8);
  font-weight: 500;
  font-size: 14px;
  line-height: 140%;

  @media (max-width: 700px) {
    font-size: 10px;
  }
`;

const ItemsList = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  @media (max-width: 700px) {
    font-size: 10px;
    padding-left: 24px;
  }

  &::before {
    content: "";
    background: url(${SpeakerCardQuotes});
    background-repeat: no-repeat;
    position: absolute;
    top: 0px;
    left: -42px;
    width: 48px;
    height: 48px;

    @media (max-width: 700px) {
      background: url(${SpeakerCardMobileQuotes});
      background-repeat: no-repeat;
      left: -9px;
      top: 6px;
      width: 32px;
      height: 32px;
    }
  }

  &::after {
    content: "";
    background: url(${SpeakerCardQuotes});
    background-repeat: no-repeat;
    position: absolute;
    transform: rotate(180deg);
    top: calc(100% - 36px);
    left: calc(100% - 54px);
    width: 48px;
    height: 48px;

    @media (max-width: 700px) {
      background: url(${SpeakerCardMobileQuotes});
      background-repeat: no-repeat;
      top: calc(100% - 28px);
      left: calc(100% - 28px);
      width: 32px;
      height: 32px;
    }
  }
`;

const Item = styled.div`
  display: flex;
  font-size: 20px;
  line-height: 125%;
  color: #ffffff;
  margin: 10px 0px;

  @media (max-width: 700px) {
    font-size: 12px;
  }
`;

const Prefix = styled.div`
  min-width: 12px;
  height: 2px;
  background: #70d9ff;
  border-radius: 10px;
  margin: 10px 14px 10px 0;

  @media (max-width: 700px) {
    min-width: 8px;
  }
`;
