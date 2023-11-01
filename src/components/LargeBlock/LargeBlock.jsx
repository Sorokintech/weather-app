import React from "react";
import * as S from "./style";

const LargeBlock = () => {
  return (
    <>
      <S.Container>
        <S.Content>
          <S.Icon src="./icons/Partly cloudy.png" />
          <S.Description>Partly cloudy</S.Description>
          <S.CityIcon src="./icons/city.png" />
          <S.Title>New York</S.Title>
          <S.Temp>9 °C</S.Temp>
          <S.Time>As of 01:52 PM</S.Time>
        </S.Content>
      </S.Container>
    </>
  );
};
export default LargeBlock;
