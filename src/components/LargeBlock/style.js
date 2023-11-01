import styled from "styled-components";

export const Container = styled.div`
  align-items: center;
  height: fit-content;
  /* background-color: rgba(255, 255, 255, 0.4); */
`;
export const Icon = styled.img`
  width: 60px;
  height: fit-content;
  grid-column: span 10;
`;
export const Description = styled.span`
  font-size: 20px;
  grid-column: span 10;
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(10, 20px);
  color: #fff;
  align-items: center;
  justify-items: center;
`;
export const CityIcon = styled.img`
  width: 40px;
  height: fit-content;
  grid-column: span 3;
`;
export const Title = styled.span`
  font-size: 28px;
  grid-column: span 7;
`;

export const Time = styled.span`
  font-size: 20px;
  grid-column: span 7;
`;
export const Temp = styled.span`
  font-size: 20px;
  grid-column: span 3;
`;
