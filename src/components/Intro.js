import React from "react";
import styled from "styled-components";
import Button from "./Common/Button";
import Bg from "../images/Robot.jpg";

const Intro = () => (
  <IntroWrapper>
    <TextWithButtons>
      <TitleText>
        <div>Искусственный интеллект в медицине</div>
        <div>Цикл онлайн лекций и дискуссий</div>
      </TitleText>
      <Buttons>
        <Button mobileFullWidth>Зарегистрироваться</Button>
        <Button invert mobileFullWidth>
          Программа
        </Button>
      </Buttons>
    </TextWithButtons>
    <Background src={Bg} alt="bg" />
  </IntroWrapper>
);

export default Intro;

const IntroWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 110px;

  @media (max-width: 1023px) {
    margin-top: 32px;
  }
`;

const TextWithButtons = styled.div`
  z-index: 2;

  @media (max-width: 1023px) {
    padding-left: 20px;
    width: 100%;
  }
`;

const Background = styled.img`
  position: absolute;
  right: -100px;
  width: calc(1000px + 8vw);
  z-index: 1;
  border-radius: 9px;

  @media (max-width: 1023px) {
    right: -20px;
    top: 0;
    width: calc(300px + 10vw);
    border-radius: 12px;
  }
`;

const TitleText = styled.div`
  max-width: 600px;
  color: #ffffff;
  margin-bottom: 64px;

  @media (max-width: 1023px) {
    margin-top: 48px;
    margin-bottom: 24px;
  }

  > div:first-child {
    font-weight: bold;
    font-size: 76px;
    line-height: 115%;
    letter-spacing: -0.03em;
    margin-bottom: 24px;

    @media (max-width: 1023px) {
      font-size: 32px;
      max-width: 250px;
    }
  }

  > div:last-child {
    font-size: 24px;
    line-height: 140%;

    @media (max-width: 1023px) {
      font-size: 14px;
    }
  }
`;
const Buttons = styled.div`
  display: flex;
  align-items: center;

  > div {
    margin-right: 12px;

    @media (max-width: 1023px) {
      margin-right: 20px;
    }
  }

  @media (max-width: 1023px) {
    flex-direction: column;
  }
`;
