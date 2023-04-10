import styled from "styled-components";

export const Container = styled.div`
  /* width: 1100px;
    height: 550px; */
  width: 100%;
  height: 100%;
  background-color: transparent;
  /* background-color: rgb(255, 255, 255, 0.5); */
  border-radius: 30px;
  padding: 20px 50px;
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  /* gap: 130px; */
  /* padding: 140px 210px; */
`;
export const LeftBlock = styled.div`
  width: 50%;
  height: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 50px;
  padding-top: 50px;
`;
export const RightBlock = styled.div`
  width: 50%;
  height: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-top: 100px;
  padding-left: 600px;
  gap: 20px;
`;
export const Img = styled.img`
  width: 100px;
  height: 100px;
  background-color: transparent;
  margin-bottom: 5px;
`;
export const Time = styled.h3`
  font-size: 20px;
  color: #fff;
`;
export const Temp = styled.h3`
  font-size: 70px;
  line-height: 70px;
  color: #fff;
  padding-bottom: 15px;
`;
export const Condition = styled.h3`
  font-size: 40px;
  color: #fff;
`;
export const CityBlock = styled.div`
  display: flex;
  flex-direction: row;
  padding-bottom: 15px;
  font-family: "Kanit", sans-serif;
`;
export const City = styled.h2`
  font-size: 20px;
  color: #fff;
`;
export const locationImg = styled.img`
  width: 20px;
  height: 20px;
  background-color: transparent;
  margin-right: 5px;
`;
export const SmallBlock = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  padding-bottom: 30px;
`;
export const SmallBlockImg = styled.img`
  width: 35px;
  height: 45px;
  padding-top: 10px;
`;
export const SmallBlockText = styled.div`
  display: flex;
  flex-direction: column;
`;
export const SmallBlockName = styled.div`
  font-size: 20px;
  color: #fff;
`;
export const SmallBlockValue = styled.div`
  font-size: 26px;
  font-weight: 800;
  color: #fff;
`;

export const Header = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 80px;
  color: #fff;
`
