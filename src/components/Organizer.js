import React from "react";
import styled from "styled-components";
import Logo from "../images/Logo.svg";
import CelsusAiArrowLinkIcon from "../images/CelsusAiArrowLinkIcon.svg";
import OrganizerCompanyAssociation from "../images/OrganizerCompanyAssociation.svg";
import OrganizerServiceUsingIcon from "../images/OrganizerServiceUsingIcon.svg";

const Organizer = () => (
  <OrganizerWrapper>
    <Title>Организатор</Title>
    <CelsusLink>
      <img src={Logo} alt="logo" />
      <Link>
        <a href="https://celsus.ai">celsus.ai</a>
        <img src={CelsusAiArrowLinkIcon} alt="arrow" />
      </Link>
    </CelsusLink>
    <OrganizerDescription>
      Цельс – искусственный интеллект для анализа медицинских изображений,
      разработанный российской компанией «Медицинские скрининг системы».
    </OrganizerDescription>
    <Facts>
      <Fact>
        <img src={OrganizerCompanyAssociation} alt="association" />
        <div>
          Компания входит в ассоциацию «Национальная база медицинских знаний»
          (НБМЗ) и Подкомитет 01 Технического комитета по стандартизации
          «Искусственный интеллект» (ТК 164).
        </div>
      </Fact>
      <Fact>
        <img src={OrganizerServiceUsingIcon} alt="service" />
        <div>
          Сервис уже используется в 13 регионах РФ в рамках пилотных проектов, в
          том числе в Эксперименте Департамента здравоохранения города Москвы по
          использованию искусственного интеллекта в работе отделений лучевой
          диагностики.
        </div>
      </Fact>
    </Facts>
    <Partners>
      <span>ПАРТНЕРЫ</span>
      <div>
        {["", "", "", ""].map((el) => (
          <div>{el}</div>
        ))}
      </div>
    </Partners>
  </OrganizerWrapper>
);

export default Organizer;

const OrganizerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 120px;
`;

const Title = styled.div`
  font-weight: bold;
  font-size: 64px;
  line-height: 140%;
  letter-spacing: -0.03em;
  color: #ffffff;
  margin-bottom: 128px;
`;

const CelsusLink = styled.div`
  display: flex;
  align-items: center;
  margin-left: 40px;
`;

const Link = styled.div`
  position: relative;
  margin-left: 200px;
  background: #253c50;
  border-radius: 8px;
  padding: 20px 30px;

  > a {
    font-size: 24px;
    line-height: 140%;
    color: #ffffff;
    text-decoration: none;
  }

  > img {
    position: absolute;
    width: 12px;
    height: 12px;
    top: 8px;
    right: 8px;
  }
`;
const OrganizerDescription = styled.div`
  font-size: 24px;
  line-height: 140%;
  color: #ffffff;
  background: #253c50;
  border-radius: 16px;
  padding: 32px;
  margin-top: 72px;
  max-width: 650px;
  align-self: flex-end;
`;

const Facts = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  line-height: 140%;
  color: #ffffff;
  margin-top: 148px;
  margin-bottom: 112px;
`;

const Fact = styled.div`
  max-width: 380px;

  > img {
    margin-bottom: 12px;
  }
`;

const Partners = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 128px;

  > span {
    font-weight: bold;
    font-size: 24px;
    line-height: 140%;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: #ffffff;
    margin-bottom: 85px;
  }

  > div {
    display: flex;
    justify-content: space-between;
    padding: 0 36px;

    > div {
      width: 196px;
      height: 85px;
      background: #e9edf0;
      border-radius: 8px;
    }
  }
`;
