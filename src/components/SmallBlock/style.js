import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  color: #fff;
  justify-content: center;
  align-items: center;
  height: fit-content;
  padding: 10px;
  /* border: 1px solid #fff;
  border-radius: 5px; */
  width: 40%;
  margin: 3px;
`;
export const Icon = styled.img`
  width: 30px;
  height: fit-content;
`;
export const Content = styled.div`
  display: flex;
  flex-direction: row;
  /* justify-content: center; */
  align-items: center;
  color: #fff;
  gap: 6px;
`;
export const Title = styled.span`
  font-size: 24px;
`;
export const Description = styled.span`
  font-size: 26px;
`;
