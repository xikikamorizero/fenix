import React from "react";
import styled from "styled-components";

type Props = {
  title: string;
  text: string;
  image: string;
};
export const Item = ({ ...props }: Props) => {
  return (
    <ItemContainer>
      <ItemTitle>{props.title}</ItemTitle>
      <ItemText>{props.text}</ItemText>
      <ItemImage icon={props.image} />
    </ItemContainer>
  );
};

const ItemContainer = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;

  border-radius: 20px;
  background-color: #0D0D0D;

  -webkit-box-shadow: 0px 5px 10px 3px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 0px 5px 10px 3px rgba(34, 60, 80, 0.2);
  box-shadow: 0px 5px 10px 3px rgba(34, 60, 80, 0.2);

  :hover{
    -webkit-box-shadow: 0px 5px 8px 10px rgba(27, 59, 84, 0);
  -moz-box-shadow: 0px 5px 8px 10px rgba(34, 60, 80, 0.2);
  box-shadow: 0px 5px 8px 10px rgba(34, 60, 80, 0.2);
  }
`;
const ItemTitle = styled.div`
  font-size: 32px;
  color: var(--white);
`;
const ItemText = styled.div`
  font-size: 16px;
  color: var(--white);
`;
const ItemImage = styled.div<{ icon: string }>`
  width: 100%;
  height: 250px;
  background: url(${(props) => props.icon});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  margin-top: 20px;
  border-radius: 20px;
`;
