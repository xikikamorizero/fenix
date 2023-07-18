import React from "react";
import styled from "styled-components";
import { Item } from "./Item";
import image1 from "../../assets/img1.jpg";
import image2 from "../../assets/img2.jpg";
import image7 from "../../assets/img7.jpg";

export const Gallery = () => {
  return (
    <Container>
      <GalleryContainer>
        <Item title={"Поэзия"} text={"поэзия это круто"} image={image1} />
        <Item title={"Музыка"} text={"музыка это круто"} image={image2} />
        <Item title={"Вeчеринки"} text={"вечеринки это круто"} image={image7} />
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
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 20px;

  @media (max-width: 450px) {
    grid-template-columns: 1fr;
  }
`;
//
