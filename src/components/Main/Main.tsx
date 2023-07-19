import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { Gallery } from "./Gallery";
import { AboutUs } from "../AboutUs/AboutUs";
import { ItemInfo } from "../ItemInfo/ItemInfo";
import image from "../../assets/main.jpg";

export const Main = () => {
  const { t } = useTranslation("global");
  return (
    <Container id={"main"}>
      <Background image={image}>
        <Banner>
          <Name>{t("main.title")}</Name>
        </Banner>
      </Background>
      <Gallery />
      <AboutUs />
      <ItemInfo />
    </Container>
  );
};
const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  gap: 100px;
  padding-bottom: 100px;
`;
const Banner = styled.div`
  width: 90%;
  height: 100vh;
  max-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Background = styled.div<{ image: string }>`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  background-image: url(${(props) => props.image});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  background-attachment: fixed, scroll;
`;
const Name = styled.div`
  width: 100%;
  color: var(--main);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 26vw;

  -moz-user-select: none;
  -khtml-user-select: none;
  user-select: none;
  filter: drop-shadow(2px 2px 10px var(--shadow));
  /* -webkit-text-stroke: 2px var(--shadow); */
`;
