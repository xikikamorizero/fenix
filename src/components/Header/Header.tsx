import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled  from "styled-components";
import logo from "../../assets/logo.png";

export const Header = () => {
  let navigate = useNavigate();
  const [state, setState] = useState(1);

  useEffect(()=>{
    switch(state){
      case 1:
        navigate('/');
        break;
      case 2:
        navigate('/m');
        break;
      case 3:
        navigate('/s');
        break;
      case 4:
        navigate('/aboutMe');
        break;
      default:
        break;
    }
  },[state])

  const ClickNavbar = (stateP: number) => {
    if (state !== stateP) {
      setState(stateP);
    }
  };

  return (
    <Container>
      <HeaderStyle>
          <Icon icon={logo} />
        <Navbar>
          <Text
            onClick={() => {
              ClickNavbar(1);
            }}
            state={state === 1 ? 'true' : null}
          >
            Главная
          </Text>
          <Text
            onClick={() => {
              ClickNavbar(2);
            }}
            state={state === 2 ? 'true' : null}
          >
            Мероприятия
          </Text>
          <Text
            onClick={() => {
              ClickNavbar(3);
            }}
            state={state === 3 ? 'true' : null}
          >
            Звезды
          </Text>
          <Text
            onClick={() => {
              ClickNavbar(4);
            }}
            state={state === 4 ? 'true' : null}
          >
            О нас
          </Text>
        </Navbar>
      </HeaderStyle>
    </Container>
  );
};

const Container = styled.div`
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

  background-color: var(--header);

  @media (max-width: 700px) {
    padding: 0;
  }
`;
const HeaderStyle = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Icon = styled.div<{icon?:string}>`
  width: 60px;
  height: 60px;
  background: url(${props => props.icon ? props.icon : ""});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 60px;

  filter: drop-shadow(2px 2px 2px var(--shadow));
`;
const Navbar = styled.div`
  width: 350px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 5px;
`;
const Text = styled.div<{state?:string|null}>`
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  text-align: center;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  color: ${props => props.state ? "var(--colorNavbar)" : "var(--logoColor)"};

  cursor: pointer;

  -moz-user-select: none;
  -khtml-user-select: none;
  user-select: none;
`;