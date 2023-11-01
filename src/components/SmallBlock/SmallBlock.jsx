import React from "react";
import * as S from "./style";

const SmallBlock = () => {
  return (
    <>
      <S.Container>
        <S.Icon src="./icons/pressure.png" />
        <S.Content>
          <S.Title>Air Pressure</S.Title>
          <S.Description>1028 PS</S.Description>
        </S.Content>
      </S.Container>
    </>
  );
};
export default SmallBlock;
