import React, {useState} from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import exit from "../../assets/exit.svg";
import lang from "../../assets/language.png";

type PropsType = {
  click: (a: boolean) => void;
  burger: boolean;
  lang:string;
  setLang:(a:string)=>void;
};

export const Burger = ({ ...props }: PropsType) => {
  const { t, i18n } = useTranslation("global");
  const [langState, setLangState] = useState(false);
  return (
    <Container
      open={props.burger}
      onClick={(e) => {
        props.click(false);
      }}
    >
      <BurgerContainer
        open={props.burger}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <HeaderBurger>
          <Icon
            width={"40px"}
            height={"40px"}
            iconSize={"40px"}
            icon={lang}
            onClick={() => {setLangState(!langState)}}
          >
            <LangContainer stateI={langState}>
              <Language
                state={props.lang === "ru"}
                onClick={() => {
                  props.setLang("ru");
                }}
              >
                RU
              </Language>
              <Language
                state={props.lang === "en"}
                onClick={() => {
                  props.setLang("en");
                }}
              >
                EN
              </Language>
            </LangContainer>
          </Icon>
          <Icon
            width={"40px"}
            height={"40px"}
            iconSize={"40px"}
            icon={exit}
            onClick={() => {
              props.click(false);
            }}
          />
        </HeaderBurger>

        <TitleNavbar
          onClick={() => {
            props.click(false);
          }}
          href="#main"
        >
          {t("header.navbar.1")}
        </TitleNavbar>
        <TitleNavbar
          onClick={() => {
            props.click(false);
          }}
          href="#contacts"
        >
          {t("header.navbar.2")}
        </TitleNavbar>
        <TitleNavbar
          onClick={() => {
            props.click(false);
          }}
          href="#aboutUs"
        >
          {t("header.navbar.3")}
        </TitleNavbar>
      </BurgerContainer>
    </Container>
  );
};

type StyleType = {
  open: boolean;
};

const Container = styled.div`
  position: fixed;
  right: 0;
  top: 0;
  height: 100vh;
  width: 100%;
  z-index: 11;
  display: flex;
  background-color: rgba(0, 0, 0, 0.85);
  justify-content: end;
  overflow-x: hidden;
  pointer-events: ${({ open }: StyleType) => (open ? "all" : "none")};
  transition: all 0.3s;
  opacity: ${({ open }: StyleType) => (open ? 1 : 0)};
`;
const BurgerContainer = styled.div`
  position: relative;
  width: ${({ open }: StyleType) => (open ? "500px" : "0")};
  height: 100vh;
  display: flex;
  gap: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--main);
  overflow-x: hidden;
  overflow-y: scroll;
  transition: all 0.3s;
  padding-bottom: 90px;
`;
const TitleNavbar = styled.a`
  padding: 16px;
  text-align: center;
  width: 100%;
  color: var(--white);
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  border-bottom: 1px solid silver;
  text-decoration: none;

  -moz-user-select: none;
  -khtml-user-select: none;
  user-select: none;

  cursor: pointer;

  :hover {
    color: var(--colorNavbar);
    border-bottom: 1px solid var(--colorNavbar);
    filter: drop-shadow(2px 2px 1px var(--shadow));
  }
  :active {
    background-color: #47474795;
  }
  transition: background-color 1s;
`;
type PropsStyled = {
  icon: string;
  width: string;
  height: string;
  iconSize: string;
};
const Icon = styled.div`
  position: relative;
  min-width: ${({ width }: PropsStyled) => width};
  min-height: ${({ height }: PropsStyled) => height};
  background: url(${({ icon }: PropsStyled) => icon});
  background-position: center;
  background-repeat: no-repeat;
  background-size: ${({ iconSize }: PropsStyled) => iconSize};
  cursor: pointer;

  border-radius: 50%;

  :hover {
    filter: drop-shadow(2px 2px 10px var(--shadow));
  }

  :active {
    background-color: #47474795;
  }
  transition: all 1s;
`;
const HeaderBurger = styled.div`
  padding: 30px;
  position: absolute;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
const Language = styled.div<{ state: boolean }>`
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  width: 34px;
  height: 34px;
  background-color: ${(props) => (props.state ? "var(--colorNavbar)" : "")};
  border-radius: 5px;

  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 17px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  color: var(--white);
  -moz-user-select: none;
  -khtml-user-select: none;
  user-select: none;

  cursor: pointer;
  -webkit-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
  box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);

  :hover {
    background-color: var(--colorNavbar);
  }
`;
const LangContainer = styled.div<{ stateI: boolean }>`
  display: flex;
  flex-direction: column;
  width: 40px;
  height: 78px;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 40px;
  background-color: #414040c8;
  border-radius: 5px;
  overflow: hidden;
  max-height: ${(props) => (props.stateI ? "100px" : "0px")};

  transition: all 0.3s linear;
  gap:2px;
`;