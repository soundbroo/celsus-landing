import React from "react";
import styled from "styled-components";
import Button from "./Common/Button";
import Bg from "../images/Robot.png";

const Intro = () => (
  <IntroWrapper>
    <TextWithButtons>
      <TitleText>
        <div>Искусственный интеллект в медицине</div>
        <div>Цикл онлайн лекций и дискуссий</div>
      </TitleText>
      <Buttons>
        <Button>Зарегистрироваться</Button>
        <Button invert>Программа</Button>
      </Buttons>
    </TextWithButtons>
    <Background src={Bg} alt="bg" />
  </IntroWrapper>
);

export default Intro;

const IntroWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 46px;
  /* background-image: url(${Bg});
  background-position-x: right;
  background-size: contain;
  background-repeat: no-repeat; */

  /* background-position-x: 32%;
    background-position-y: inherit;
    background-size: 100%;
    height: 660px; */
`;

const TextWithButtons = styled.div`
  z-index: 2;
`;

const Background = styled.img`
  z-index: 1;
  margin-left: -236px;
  width: 72vw;
`;

const TitleText = styled.div`
  max-width: 600px;
  color: #ffffff;
  margin-bottom: 64px;

  > div:first-child {
    font-weight: bold;
    font-size: 76px;
    line-height: 115%;
    letter-spacing: -0.03em;
    margin-bottom: 24px;
  }

  > div:last-child {
    font-size: 24px;
    line-height: 140%;
  }
`;
const Buttons = styled.div`
  display: flex;
  align-items: center;
  > div {
    margin-right: 12px;
  }
`;
