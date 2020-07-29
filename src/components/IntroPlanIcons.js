import React from "react";
import styled from "styled-components";
import IntroExpertsIcon from "../images/IntroExpertsIcon.svg";
import IntroTrendsIcon from "../images/IntroTrendsIcon.svg";
import IntroUsecasesIcon from "../images/IntroUsecasesIcon.svg";

const IntroPlanIcons = () => (
  <PlanIconsWrapper>
    <PlanItem>
      <img src={IntroTrendsIcon} alt="trends" />
      {/* <span>Тренды сферы</span> */}
    </PlanItem>
    <PlanItem>
      <img src={IntroExpertsIcon} alt="trends" />
      {/* <span>Эксперты отрасли</span> */}
    </PlanItem>
    <PlanItem>
      <img src={IntroUsecasesIcon} alt="trends" />
      {/* <span>Кейсы применения</span> */}
    </PlanItem>
  </PlanIconsWrapper>
);

export default IntroPlanIcons;

const PlanIconsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 46px;
`;

const PlanItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
