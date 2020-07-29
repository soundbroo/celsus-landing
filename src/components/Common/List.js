import React from "react";
import styled from "styled-components";
import ListItemCheckIcon from "../../images/ListItemCheckIcon.svg";
import ListItemRoundIcon from "../../images/ListItemRoundIcon.svg";

const List = ({ children, invert, title, items, roundStyle }) => (
  <ListWrapper invert={invert}>
    <Title>{title}</Title>
    <ListItems>
      {items.map((el, index) => (
        <ListItem key={index}>
          <img
            src={roundStyle ? ListItemRoundIcon : ListItemCheckIcon}
            alt="item"
          />
          <div>{el}</div>
        </ListItem>
      ))}
    </ListItems>
  </ListWrapper>
);

export default List;

const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const ListItems = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.div`
  display: flex;
  align-items: center;
  margin: 32px 0px;
  margin-right: 60px;
  max-width: 500px;
  > div {
    font-size: 24px;
    line-height: 140%;
    color: #fff;
    max-width: 400px;
    margin-left: 40px;
  }
`;

const Title = styled.div`
  font-weight: bold;
  font-size: 64px;
  line-height: 140%;
  letter-spacing: -0.03em;
  color: #fff;
  margin: 134px 0 102px 0;
`;
