import React from "react";
import styled from "styled-components";
import Button from "./Button";
import EventCardDescription from "./EventCardDescription";

const MOCK_SPEAKERS = [
  { avatar: null, firstName: "Сергей", lastName: "Скороходов" },
  { avatar: null, firstName: "Андрей", lastName: "Ничаев" },
  { avatar: null, firstName: "Иван", lastName: "Смирнов" },
  { avatar: null, firstName: "Петр", lastName: "Островский" },
];

const MobileCardDescription = () => (
  <MobileCardDescriptionWrapper>
    <EventCardDescription />
  </MobileCardDescriptionWrapper>
);

const EventCard = () => (
  <EventCardWrapper>
    <LeftSide>
      <Date>
        <div>Предстоит</div>
        <div>12 августа 2020</div>
      </Date>
      <MobileCardDescription />
      <Button small mobileFullWidth>
        Зарегистрироваться
      </Button>
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
    <EventCardDescription />
  </EventCardWrapper>
);

export default EventCard;

const EventCardWrapper = styled.div`
  display: flex;
  background: #253c50;
  border-radius: 16px;
  padding: 48px 56px;
  margin-bottom: 12px;
  max-width: 1087px;

  @media (max-width: 1023px) {
    padding: 20px;
  }
`;

const MobileCardDescriptionWrapper = styled.div`
  @media (min-width: 1023px) {
    display: none;
  }

  > div {
    @media (max-width: 1023px) {
      display: flex;
      flex-direction: column;

      > div:first-child {
        font-size: 20px;
        margin-bottom: 8px;
      }

      > div:last-child {
        font-size: 12px;
      }
    }
  }
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

  @media (max-width: 1023px) {
    padding-right: 0;
  }
`;

const Date = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 40px;

  @media (max-width: 1023px) {
    margin-bottom: 16px;
  }

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

  @media (max-width: 1023px) {
    margin-top: 16px;
  }
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
  width: 50%;

  @media (max-width: 1023px) {
    margin-top: 20px;
  }
`;

const Name = styled.div`
  font-size: 14px;
  line-height: 140%;
  letter-spacing: -0.03em;
  color: #ffffff;
`;
