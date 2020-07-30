import React from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Intro from "./components/Intro";
import IntroPlanIcons from "./components/IntroPlanIcons";
import IntroAboutAI from "./components/IntroAboutAI";
import List from "./components/Common/List";
import NextEvent from "./components/NextEvent";
import AllEvents from "./components/AllEvents";
import Organizer from "./components/Organizer";
import BgPoligons from "./images/BgPoligons.svg";
import BgPoligon from "./images/BgPoligon.svg";

const App = () => {
  return (
    <>
      <BackgroundLines />
      <BackgroundCenterLines />
      <BackgroundCenterLine />
      <ContentWrapper>
        <Header />
        <Intro />
        <IntroPlanIcons />
        <IntroAboutAI />
        <List
          title="Что вы узнаете"
          items={[
            "Тренды рынка цифрового здравоохранения",
            "Как обучают нейросети для медицины",
            "Основные сценарии применения ИИ в медицине",
            "Успешные кейсы внедрения ИИ-сервисов",
            "Какие решения с применением ИИ есть на рынке",
            "Правовые аспекты применения ИИ в медицине",
          ]}
        />
        <List
          roundStyle
          title="Кому будет интересно"
          items={[
            "Представителям медицинских организаций",
            "Разработчикам медицинских сервисов",
            "Представителям стартапов и компаний сферы цифрового здравоохранения",
            "Студентам медицинских ВУЗов",
          ]}
        />
        <NextEvent />
        <AllEvents />
        <Organizer />
      </ContentWrapper>
      <Footer />
      <GlobalStyle />
    </>
  );
};
export default App;

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    background-color: #0b1e2e;
    font-family: Roboto;
    font-style: normal;
  }

  #root {
    /* width: 100%; */
    display: flex;
    flex-direction: column;
    align-items: center;
    background: url(${BgPoligons}), url(${BgPoligon});
    background-repeat: no-repeat;
    background-position-x: 24px, 190px;
    background-position-y: 1210px, 6410px;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1300px;
  min-width: 200px;
  padding: 20px 0;
  margin: 0 20px;
  border-left: 0.65px solid #ffffff24;
  border-right: 0.65px solid #ffffff24;
  z-index: 2;
`;

const BackgroundLines = styled.div`
  position: fixed;
  width: 1300px;
  height: 100vh;
  border-left: 0.65px solid #ffffff24;
  border-right: 0.65px solid #ffffff24;
  margin-left: -200px;
`;

const BackgroundCenterLines = styled.div`
  position: fixed;
  width: 700px;
  height: 100vh;
  border-left: 0.65px solid #ffffff24;
  border-right: 0.65px solid #ffffff24;
  z-index: 1;
`;

const BackgroundCenterLine = styled.div`
  position: fixed;
  width: 0;
  height: 100vh;
  border-left: 0.65px solid #ffffff24;
  z-index: 1;
`;
