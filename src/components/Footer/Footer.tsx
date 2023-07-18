import React from "react";
import styled from "styled-components";

export const Footer = () => {
  return (
    <Container>
      <FooterStyle>
      © 2023, «Fenix». Присоединяйтесь.
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
  padding: 10px 0 10px 0;
  width: 90%;
  display: flex;
  justify-content: end;
  align-items: center;

  font-style: normal;
  font-weight: 300;
  font-size: 12px;
  line-height: 14px;
  color:var(--white);

  -moz-user-select: none;
  -khtml-user-select: none;
  user-select: none;
`;
