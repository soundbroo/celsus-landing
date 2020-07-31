import React from "react";
import styled from "styled-components";
import Button from "./Common/Button";
import EventCard from "./Common/EventCard";

const AllEvents = () => (
  <AllEventsWrapper>
    <Title>Все вебинары курса</Title>
    <Sort>
      <Button invert small>
        Все
      </Button>
      <Button invert transparent small>
        Предстоящие
      </Button>
      <Button invert transparent small>
        Прошедшие
      </Button>
    </Sort>
    <Events>
      <EventCard />
      <EventCard />
      <EventCard />
    </Events>
  </AllEventsWrapper>
);

export default AllEvents;

const AllEventsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 108px;

  @media (max-width: 1350px) {
    padding: 0 20px;
  }

  @media (max-width: 1023px) {
    margin-top: 72px;
  }
`;

const Title = styled.div`
  font-weight: bold;
  font-size: 64px;
  line-height: 140%;
  letter-spacing: -0.03em;
  color: #ffffff;
  margin-bottom: 48px;

  @media (max-width: 1023px) {
    font-size: 24px;
    margin-bottom: 32px;
  }
`;

const Sort = styled.div`
  display: flex;
  margin-bottom: 48px;

  @media (max-width: 1023px) {
    margin-bottom: 30px;

    > div {
      font-size: 12px;
      padding: 16px 18px;
    }
  }
`;

const Events = styled.div`
  display: flex;
  flex-direction: column;
`;
