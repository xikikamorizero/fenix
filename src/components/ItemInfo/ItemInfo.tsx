import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { Item } from "./Item";
import image1 from '../../assets/img8.jpg';
import image2 from '../../assets/img5.jpg';

export const ItemInfo = () => {
  const { t } = useTranslation("global");
  return (
    <Container>
      <Item
        title={t("item.title.1")}
        text={
          t("item.text.1")
        }
        image={image1}
        revers={false}
      />
      <Item
       title={t("item.title.2")}
        text={
          t("item.text.2")
        }
        image={image2}
        revers={true}
      />
    </Container>
  );
};

const Container = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 100px;
  padding: 50px 0 50px 0;
`;