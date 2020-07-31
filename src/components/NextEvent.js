import React from "react";
import styled from "styled-components";
import Button from "./Common/Button";
import SpeakerCard from "./Common/SpeakerCard";
import NextEventDateBg from "../images/NextEventDateBg.svg";

const MOCK_ITEMS = [
  "Что такое и зачем нужна разметка данных? Виды разметки.",
  "Виды операций над медицинскими изображениями. Что такое препроцессинг изображений и зачем он нужен в анализе медицинских изображений методами ИИ?",
  "Сценарии обучения на размеченных и неразмеченных данных",
  "Основные метрики и схемы оценки качества моделей на базе нейронных сетей",
  "Сценарии использования: скрининг | диагностика. Трешхолдирование",
  "Что такое постпроцессинг и зачем он нужен?",
  "Специфика медицинской интерпретации прогноза нейронной сети.",
];

const NextEvent = () => (
  <NextEventWrapper>
    <Title>
      <Date>
        <div>
          <span>12</span>
        </div>
        <div>
          <span>Августа</span>
          <span>2020</span>
        </div>
      </Date>
      <Description>
        <Name>Исскуственный интеллект для анализа КТ-снимков</Name>
        <div>
          <DescriptionText>
            Pellentesque id mollis dolor. Ut euismod tortor non nisi molestie,
            at accumsan ex posuere. Vestibulum at augue vehicula, commodo sem
            ac, ornare ex, at accumsan ex posuere...
          </DescriptionText>
          <Button mobileFullWidth>Зарегистрироваться</Button>
        </div>
      </Description>
    </Title>
    <Speakers>
      <SpeakersTitle>Спикеры:</SpeakersTitle>
      <div>
        <SpeakerCard
          avatar={null}
          name="Сергей Скороходов"
          position="Руководитель направления здравоохранения в IBM"
          items={MOCK_ITEMS}
        />
        <SpeakerCard
          avatar={null}
          name="Иван Смирнов"
          position="Директор программ технологического сотрудничества Microsoft в России"
          items={MOCK_ITEMS}
        />
      </div>
    </Speakers>
  </NextEventWrapper>
);

export default NextEvent;

const NextEventWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 170px;

  @media (max-width: 1350px) {
    padding: 0 20px;
  }

  @media (max-width: 1023px) {
    margin-top: 80px;
  }
`;

const Title = styled.div`
  display: flex;

  @media (max-width: 1023px) {
    flex-direction: column;
  }
`;

const SpeakersTitle = styled.div`
  font-size: 16px;
  line-height: 140%;
  color: rgba(255, 255, 255, 0.55);
  margin-bottom: 28px;

  @media (max-width: 1023px) {
    margin-bottom: 12px;
  }
`;

const Date = styled.div`
  display: flex;
  align-items: center;
  font-weight: bold;
  background: url(${NextEventDateBg});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  margin-right: 106px;
  margin-top: -50px;
  color: #ffffff;
  align-self: flex-start;
  height: 208px;

  @media (max-width: 1023px) {
    height: 140px;
  }

  > div:first-child {
    font-weight: bold;
    font-size: 76px;
    line-height: 140%;
    padding: 0 12px;

    @media (max-width: 1023px) {
      font-size: 48px;
    }
  }

  > div:last-child {
    display: flex;
    flex-direction: column;

    > span:first-child {
      font-weight: 500;
      font-size: 29px;
      line-height: 140%;

      @media (max-width: 1023px) {
        font-size: 16px;
      }
    }

    > span:last-child {
      font-size: 18px;
      font-weight: 300;
      line-height: 140%;

      @media (max-width: 1023px) {
        font-size: 12px;
      }
    }
  }
`;

const Name = styled.div`
  font-weight: bold;
  font-size: 64px;
  line-height: 140%;
  letter-spacing: -0.03em;
  color: #ffffff;
  max-width: 730px;

  @media (max-width: 1023px) {
    font-size: 24px;
  }
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 100%;
  > div:last-child {
    display: flex;
    margin: 72px 0px;
    justify-content: space-between;

    @media (max-width: 1023px) {
      flex-direction: column;
      margin: 20px 0px;
    }

    > div:last-child {
      height: fit-content;
    }
  }
`;

const DescriptionText = styled.div`
  font-size: 20px;
  line-height: 160%;
  color: rgba(255, 255, 255, 0.8);
  max-width: 500px;
  margin-right: 72px;

  @media (max-width: 1023px) {
    margin-right: 0;
  }
`;

const Speakers = styled.div`
  display: flex;
  flex-direction: column;

  > div:last-child {
    display: flex;
    flex-wrap: wrap;

    > div:first-child {
      margin-right: 12px;

      @media (max-width: 1023px) {
        margin-right: 0;
      }
    }
  }
`;
