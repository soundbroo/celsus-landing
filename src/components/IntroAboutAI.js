import React from "react";
import styled from "styled-components";
import IntroAboutCardIcon from "../images/IntroAboutCardIcon.svg";

const IntroAboutAI = () => (
  <IntroAboutAIWrapper>
    <AboutText>
      Искусственный интеллект — одна из самых многообещающих технологий на рынке
      медтеха. ИИ-сервисы могут повысить точность диагностики, автоматизировать
      рутинную часть работы врача, подобрать оптимальный метод лечения и даже
      помочь в создании новых лекарств.
    </AboutText>
    <AboutCard>
      <img src={IntroAboutCardIcon} alt="about" />
      <div>
        В цикле лекций вы узнаете, как решения на базе технологий искусственного
        интеллекта меняют здравоохранение уже сегодня.
      </div>
    </AboutCard>
  </IntroAboutAIWrapper>
);

export default IntroAboutAI;

const IntroAboutAIWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 150px;

  @media (max-width: 1350px) {
    padding: 0 20px;
  }

  @media (max-width: 1023px) {
    margin-top: 64px;
  }
`;

const AboutText = styled.div`
  font-weight: 300;
  font-size: 40px;
  line-height: 140%;
  color: #fff;

  @media (max-width: 1023px) {
    font-size: 18px;
  }
`;

const AboutCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #70d9ff;
  border-radius: 8px;
  padding: 40px;
  max-width: 1118px;
  margin-top: 90px;

  @media (max-width: 1023px) {
    margin-top: 32px;
    padding: 16px;
  }

  > img {
    @media (max-width: 1023px) {
      align-self: baseline;
      width: 32px;
    }
  }

  > div {
    font-size: 24px;
    line-height: 140%;
    margin-left: 40px;

    @media (max-width: 1023px) {
      font-size: 14px;
      margin-left: 16px;
    }
  }
`;
