import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import icon from "../../assets/instagram.svg";

export const Footer = () => {
  const { t } = useTranslation("global");
  return (
    <Container id={"contacts"}>
      <FooterStyle>
        <IconLink
          href={"https://www.instagram.com/fenix.tash/"}
          target="_blank"
          icon={icon}
        />
        <ContainerText>
          <FooterText>{t("footer.title")}</FooterText>
          <FooterText>{t("footer.text")}</FooterText>
        </ContainerText>
      </FooterStyle>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #080101;

  -webkit-box-shadow: 0px -5px 5px -7px rgba(34, 60, 80, 0.6);
  -moz-box-shadow: 0px -5px 5px -7px rgba(34, 60, 80, 0.6);
  box-shadow: 0px -5px 5px -7px rgba(34, 60, 80, 0.6);

  @media (max-width: 700px) {
    padding: 0;
  }
`;
const FooterStyle = styled.div`
  padding: 50px 0 50px 0;
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;
const FooterText = styled.div`
  font-style: normal;
  font-weight: 300;
  font-size: 12px;
  line-height: 14px;
  color: var(--white);

  -moz-user-select: none;
  -khtml-user-select: none;
  user-select: none;
`;
const IconLink = styled.a<{ icon: string }>`
  width: 40px;
  height: 40px;

  background-image: url(${(props) => props.icon});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 40px;
  cursor: pointer;
`;
const ContainerText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`