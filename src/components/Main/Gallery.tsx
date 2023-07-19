import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { Item } from "./Item";
import image1 from "../../assets/img1.jpg";
import image2 from "../../assets/img2.jpg";
import image7 from "../../assets/img7.jpg";

export const Gallery = () => {
  const { t } = useTranslation("global");
  return (
    <Container>
      <GalleryContainer>
        <Item title={t("card.title.1")} text={t("card.text.1")} image={image1} />
        <Item title={t("card.title.2")} text={t("card.text.2")} image={image2} />
        <Item title={t("card.title.3")} text={t("card.text.3")} image={image7} />
      </GalleryContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 80px 0 80px 0;
`;
const GalleryContainer = styled.div`
  width: 90%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
  gap: 40px;

  @media (max-width: 450px) {
    grid-template-columns: 1fr;
  }
`;
//
