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

const App = () => {
  return (
    <>
      <AppWrapper>
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
      </AppWrapper>
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
  }
`;

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1300px;
  min-width: 200px;
  padding: 20px;
`;
