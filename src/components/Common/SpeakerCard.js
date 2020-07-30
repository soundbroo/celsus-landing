import React from "react";
import styled from "styled-components";
import SpeakerCardQuotes from "../../images/SpeakerCardQuotes.svg";

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
`;

const SpeakerInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const Avatar = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50px;
  background: #1c3245;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px 20px;
  max-width: 250px;
`;

const Name = styled.div`
  font-weight: bold;
  font-size: 20px;
  line-height: 140%;
  color: #ffffff;
  margin-bottom: 8px;
`;

const Position = styled.div`
  color: rgba(255, 255, 255, 0.8);
  font-weight: 500;
  font-size: 14px;
  line-height: 140%;
`;

const ItemsList = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  &::before {
    content: "";
    background: url(${SpeakerCardQuotes});
    background-repeat: no-repeat;
    position: absolute;
    top: 0px;
    left: -42px;
    width: 48px;
    height: 48px;
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
  }
`;

const Item = styled.div`
  display: flex;
  font-size: 20px;
  line-height: 125%;
  color: #ffffff;
  margin: 10px 0px;
`;

const Prefix = styled.div`
  min-width: 12px;
  height: 2px;
  background: #70d9ff;
  border-radius: 10px;
  margin: 10px 14px 10px 0;
`;
