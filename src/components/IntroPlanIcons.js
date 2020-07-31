import React from "react";
import styled from "styled-components";
import IntroExpertsIcon from "../images/IntroExpertsIcon.svg";
import IntroTrendsIcon from "../images/IntroTrendsIcon.svg";
import IntroUsecasesIcon from "../images/IntroUsecasesIcon.svg";

const IntroPlanIcons = () => (
  <PlanIconsWrapper>
    <PlanItem>
      <img src={IntroTrendsIcon} alt="trends" />
      <span>Тренды сферы</span>
    </PlanItem>
    <PlanItem>
      <img src={IntroExpertsIcon} alt="trends" />
      <span>Эксперты отрасли</span>
    </PlanItem>
    <PlanItem>
      <img src={IntroUsecasesIcon} alt="trends" />
      <span>Кейсы применения</span>
    </PlanItem>
  </PlanIconsWrapper>
);

export default IntroPlanIcons;

const PlanIconsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 150px;
  flex-wrap: wrap;

  @media (max-width: 1350px) {
    padding: 0 20px;
  }

  @media (max-width: 1023px) {
    margin-top: 56px;
  }

  @media (max-width: 780px) {
    justify-content: space-around;
  }
`;

const PlanItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 210px;

  @media (max-width: 780px) {
    height: 160px;
    margin: 20px;
  }

  @media (max-width: 330px) {
    margin: 10px;
  }

  > img {
    @media (max-width: 780px) {
      width: 120px;
    }
  }

  > span {
    font-size: 24px;
    line-height: 140%;
    color: #ffffff;

    @media (max-width: 780px) {
      font-size: 14px;
    }
  }
`;
