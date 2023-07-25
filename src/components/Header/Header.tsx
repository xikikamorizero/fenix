import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { Burger } from "./Burger";
import logo from "../../assets/logo.png";
import icon from "../../assets/language.png";
import burgerIcon from '../../assets/burger.svg';

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [burger, setBurger] = useState(false);
  const [lang, setLang] = useState("ru");
  const [langState, setLangState] = useState(false);
  const { t, i18n } = useTranslation("global");

  const handleBodyScroll = () => {
    if (burger) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };
  
  useEffect(() => {
    handleBodyScroll();
  }, [burger]);

useEffect(()=>{
  i18n.changeLanguage(lang);
},[lang])

  const Click=(language:string)=>{
    if(lang!==language){
      setLang(language);
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Container state={scrolled}>
      <HeaderStyle>
        <Icon icon={logo} />
        <Navbar>
          <IconLang
            stateI={langState}
            icon={icon}
            onClick={() => {
              setLangState(!langState);
            }}
          >
            <LangContainer stateI={langState}>
              <Language state={lang === "ru"} onClick={()=>{Click('ru')}}>ru</Language>
              <Language state={lang === "en"} onClick={()=>{Click('en')}}>en</Language>
            </LangContainer>
          </IconLang>
          <Text href="#main">{t("header.navbar.1")}</Text>
          <Text href="#contacts">{t("header.navbar.2")}</Text>
          <Text href="#aboutUs">{t("header.navbar.3")}</Text>
        </Navbar>
        <BurgerIcon
              width={"40px"}
              height={"40px"}
              iconSize={"40px"}
              icon={burgerIcon}
              onClick={()=>{setBurger(true)}}
            />
        <Burger burger={burger} click={setBurger} lang={lang} setLang={setLang} /> 
      </HeaderStyle>
    </Container>
  );
};

const Container = styled.div<{state:boolean}>`
  width: 100%;
  padding: 10px 0 10px 0;
  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;

  transition: background-color 0.3s ease;

  -webkit-box-shadow: 0px 5px 5px -5px rgba(34, 60, 80, 0.6);
  -moz-box-shadow: 0px 5px 5px -5px rgba(34, 60, 80, 0.6);
  box-shadow: 0px 5px 5px -5px rgba(34, 60, 80, 0.6);

  background-color:${(props)=>props.state? 'var(--headerA)' : ' var(--headerD)'};
`;
const HeaderStyle = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Icon = styled.div<{ icon?: string }>`
  min-width: 60px;
  min-height: 60px;
  background: url(${(props) => (props.icon ? props.icon : "")});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 60px;

  filter: drop-shadow(2px 2px 2px var(--shadow));

  @media (max-width: 700px) {
    min-width: 50px;
    min-height: 50px;
    background-size: 50px;
  }
`;
const Navbar = styled.div`
  width: 250px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 5px;

  @media (max-width: 500px) {
    display: none;
  }
`;
const Text = styled.a`
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  text-align: center;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  text-decoration: none;

  color: var(--white);

  cursor: pointer;

  -moz-user-select: none;
  -khtml-user-select: none;
  user-select: none;
`;
const IconLang = styled.div<{ icon: string; stateI: boolean }>`
  position: relative;
  width: 27px;
  height: 27px;

  max-width: 27px;
  max-height: 27px;

  border-radius: 5px;

  background-image: url(${(props) => props.icon});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 27px;

  cursor: pointer;

  background-color: ${(props) => (props.stateI ? "#ffffff21" : "")};
`;
const Language = styled.div<{ state: boolean }>`
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  width: 23px;
  height: 23px;
  background-color: ${(props) => (props.state ? "var(--colorNavbar)" : "")};
  border-radius: 5px;

  text-align: center;
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
  width: 27px;
  height: 55px;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 27px;
  background-color: #414040c8;
  border-radius: 5px;
  overflow: hidden;
  max-height: ${(props) => (props.stateI ? "100px" : "0px")};

  transition: all 0.3s linear;
  gap:2px;
`;
type PropsStyled = {
  icon: string;
  width: string;
  height: string;
  iconSize: string;
  type?:string;
};
const BurgerIcon = styled.div`
  display: ${({ type }: PropsStyled) => type? 'block':'none'};
  min-width: ${({ width }: PropsStyled) => width};
  min-height: ${({ height }: PropsStyled) => height};
  background: url(${({ icon }: PropsStyled) => icon});
  background-position: center;
  background-repeat: no-repeat;
  background-size: ${({ iconSize }: PropsStyled) => iconSize};
  cursor: pointer;

  @media (max-width: 500px) {
    display: ${({ type }: PropsStyled) => type? 'none': 'block'};
  }
`;