import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import image from "../../assets/img7.jpg";

export const AboutUs = () => {
  const { t } = useTranslation("global");
  return (
    <Background image={image}>
      <Anchor id={"aboutUs"} />
      <Container>
        <Title>{t("aboutUs.title")}</Title>
        <GridContainer>
          <Text>{t("aboutUs.text.1")}</Text>
          <Text>{t("aboutUs.text.2")}</Text>
        </GridContainer>
      </Container>
    </Background>
  );
};
const Background = styled.div<{ image: string }>`
  position: relative;
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
const Container = styled.div`
  width: 90%;
  padding: 200px 0 200px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;

  @media (max-width: 800px) {
    padding: 100px 0 100px 0;
  }
`;
const Title = styled.div`
  width: 100%;
  font-size: 46px;
  color: var(--white);
`;
const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
  gap: 90px;
`;
const Text = styled.div`
  font-size: 20px;
  line-height: 1.5em;
  color: var(--white);
`;
const Anchor = styled.div`
  position: absolute;
  top: -150px;

  @media (max-width: 900px) {
    top: 0;
  }
`;
