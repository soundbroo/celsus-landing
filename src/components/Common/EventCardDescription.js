import React from "react";
import styled from "styled-components";

const EventCardDescription = () => (
  <EventCardDescriptionWrapper>
    <Title>Когда вечная молодость станет реальностью</Title>
    <Description>
      Pellentesque id mollis dolor. Ut euismod tortor non nisi molestie, at
      accumsan ex posuere. Vestibulum at augue vehicula, commodo sem ac, ornare
      ex. Pellentesque habitant morbi tristique senectus et netus et malesuada
      fames ac turpis egestas. Curabitur viverra dui a lectus malesuada rhon...
    </Description>
  </EventCardDescriptionWrapper>
);

export default EventCardDescription;

const EventCardDescriptionWrapper = styled.div`
  flex: 5;

  @media (max-width: 1023px) {
    display: none;
  }
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
