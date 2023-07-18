import React from "react";
import styled from "styled-components";

export const ItemInfo =()=>{
    return(
<Container>

</Container>
    )
}

const Container = styled.div`
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap:40px;
    padding: 50px 0 50px 0;
`
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