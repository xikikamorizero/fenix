import React from "react";
import styled from "styled-components";

export const AboutUs = () => {
  return (
    <Container>
      <Title>Проект Феникс</Title>
      <GridContainer>
        <Text>
          Phoenix is a creative hub, where wanderers of words, melodies, and
          colors unite. Together we share our passion to inspire others. Our
          gatherings witness the magic of heartwarming poetry and foot-tapping
          music.
        </Text>
        <Text>
          When it’s time to let loose, we throw themed parties. From exploring
          the stars to diving into the depths, our imaginations know no bounds.
          Have fun, connect, and create lifelong memories with Phoenix.
        </Text>
      </GridContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 90%;
  padding: 60px 0 60px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
`;
const Title = styled.div`
width: 100%;
  font-size: 46px;
  color: var(--white);
`;
const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 90px;
`;
const Text = styled.div`
  font-size: 20px;
  line-height: 1.5em;
  color: var(--white);
`;