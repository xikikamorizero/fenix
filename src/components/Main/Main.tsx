import React from "react";
import styled from "styled-components";
import { Gallery } from "./Gallery";
import { AboutUs } from "../AboutUs/AboutUs";

export const Main = () => {
  return (
    <Container>
      <Banner>
        <Name>Fenix</Name>
      </Banner>
      <Gallery />
      <AboutUs />
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
`
const Banner = styled.div`
  width: 90%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
type PropsStyle = {
  icon: string;
};
const Name = styled.div`
  width: 100%;
  color: var(--white);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 60vh;

  -moz-user-select: none;
  -khtml-user-select: none;
  user-select: none;
  /* filter: drop-shadow(2px 2px 2px var(--shadow)); */
  -webkit-text-stroke: 2px var(--shadow);
`;
