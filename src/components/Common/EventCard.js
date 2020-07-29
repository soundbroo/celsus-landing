import React from "react";
import styled from "styled-components";
import Button from "./Button";

const MOCK_SPEAKERS = [
  { avatar: null, firstName: "Сергей", lastName: "Скороходов" },
  { avatar: null, firstName: "Андрей", lastName: "Ничаев" },
  { avatar: null, firstName: "Иван", lastName: "Смирнов" },
  { avatar: null, firstName: "Петр", lastName: "Островский" },
];

const EventCard = () => (
  <EventCardWrapper>
    <LeftSide>
      <Date>
        <div>Предстоит</div>
        <div>12 августа 2020</div>
      </Date>
      <Button small>Зарегистрироваться</Button>
      <Speakers>
        <SpeakersTitle>Спикеры:</SpeakersTitle>
        <SpeakersList>
          {MOCK_SPEAKERS.map((el) => (
            <SpeakersListItem>
              <Avatar>{el.avatar}</Avatar>
              <div>
                <Name>{el.firstName}</Name>
                <Name>{el.lastName}</Name>
              </div>
            </SpeakersListItem>
          ))}
        </SpeakersList>
      </Speakers>
    </LeftSide>
    <RightSide>
      <Title>Когда вечная молодость станет реальностью</Title>
      <Description>
        Pellentesque id mollis dolor. Ut euismod tortor non nisi molestie, at
        accumsan ex posuere. Vestibulum at augue vehicula, commodo sem ac,
        ornare ex. Pellentesque habitant morbi tristique senectus et netus et
        malesuada fames ac turpis egestas. Curabitur viverra dui a lectus
        malesuada rhon...
      </Description>
    </RightSide>
  </EventCardWrapper>
);

export default EventCard;

const EventCardWrapper = styled.div`
  display: flex;
  background: #253c50;
  border-radius: 16px;
  padding: 48px 56px;
  margin-bottom: 12px;
`;

const Avatar = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 50px;
  background: #1c3245;
  margin-right: 12px;
`;

const LeftSide = styled.div`
  flex: 3;
  padding-right: 20px;
`;

const RightSide = styled.div`
  flex: 5;
`;

const Title = styled.div`
  font-weight: bold;
  font-size: 36px;
  line-height: 140%;
  letter-spacing: -0.03em;
  color: #ffffff;
  margin-bottom: 40px;
`;

const Description = styled.div`
  font-size: 16px;
  line-height: 160%;
  color: rgba(255, 255, 255, 0.8);
`;

const Date = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 40px;

  > div:first-child {
    color: #70d9ff;
    font-size: 16px;
    line-height: 140%;
    margin-right: 20px;
    background: rgba(112, 217, 255, 0.1);
    border-radius: 8px;
    padding: 10px;
  }

  > div:last-child {
    font-size: 16px;
    line-height: 140%;
    color: #ffffff;
  }
`;

const Speakers = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
`;

const SpeakersTitle = styled.div`
  font-size: 16px;
  line-height: 140%;
  color: #ffffff;
`;

const SpeakersList = styled.div`
  display: flex;
  max-width: 300px;
  flex-wrap: wrap;
`;

const SpeakersListItem = styled.div`
  display: flex;
  align-items: center;
  margin-top: 26px;
  width: 150px;
`;

const Name = styled.div`
  font-size: 14px;
  line-height: 140%;
  letter-spacing: -0.03em;
  color: #ffffff;
`;
