import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: transparent;
  padding: 20px 50px;
  display: flex;
  flex-direction: row;
`;
export const Wrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
`;

export const SmallBlockContainer = styled.div`
  grid-column: span 6;
  /* display: flex;
  flex-flow: wrap;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: flex-start;
  justify-content: flex-end;
  align-content: space-around; */
  display: flex;
  flex-flow: wrap;
  -webkit-box-pack: end;
  place-content: space-around flex-end;
  flex-direction: column;
  align-content: flex-end;
  justify-content: flex-start;
  align-items: flex-end;
`;
