import React from "react";
import styled from "styled-components";

type Props = {
  title: string;
  text: string;
  image: string;
  revers: boolean;
};

export const Item = ({ ...props }: Props) => {
  return (
    <Container revers={props.revers}>
      <ItemTextContainer>
        <ItemTitle>{props.title}</ItemTitle>
        <ItemText>{props.text}</ItemText>
      </ItemTextContainer>
      <ItemImage icon={props.image} />
    </Container>
  );
};

const Container = styled.div<{ revers: boolean }>`
  width: 80%;
  display: flex;
  flex-direction: ${(props) => (props.revers ? "row-reverse" : "row")};
  justify-content: space-between;
  align-items: center;
  gap: 200px;

  @media (max-width: 750px) {
    flex-direction: column;
    flex-direction: column-reverse;
    gap: 20px;
    width: 100%;
  }
`;
const ItemImage = styled.div<{ icon: string }>`
  width: 100%;
  height: 40vw;
  background: url(${(props) => props.icon});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  border-radius: 20px;

  -webkit-box-shadow: 0px 5px 10px 1px rgba(34, 60, 80, 0.2);
-moz-box-shadow: 0px 5px 10px 1px rgba(34, 60, 80, 0.2);
box-shadow: 0px 5px 10px 1px rgba(34, 60, 80, 0.2);

  @media (max-width: 750px) {
    height: 370px;
  }
`;
const ItemTextContainer = styled.div`
  width: 100%;
  height: 40vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  color: var(--white);

  @media (max-width: 750px) {
    height: auto;
  }
`;
const ItemTitle = styled.div`
  width: 100%;
  font-size: 32px;
  line-height: 1.2em;
`;
const ItemText = styled.div`
  width: 100%;
  font-size: 16px;
  line-height: 1.5em;
`;