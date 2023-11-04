import styled from "styled-components";

export const Container = styled.div`
  /* height: fit-content; */
  grid-column: span 6;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  color: #fff;
  align-items: center;
  justify-items: center;
`;
export const Icon = styled.img`
  width: 100px;
  height: fit-content;
  justify-self: self-end;
  grid-column: span 4;
`;
export const Description = styled.span`
  font-size: 26px;
  grid-column: span 10;
  padding: 5px;
`;

export const CityIcon = styled.img`
  width: 30px;
  height: fit-content;
  grid-column: span 2;
  justify-self: self-end;
`;
export const Title = styled.span`
  font-size: 32px;
  grid-column: span 7;
`;
export const Temp = styled.span`
  font-size: 28px;
  grid-column: span 6;
  justify-self: start-end;
`;
export const Time = styled.span`
  font-size: 18px;
  grid-column: span 10;
`;
