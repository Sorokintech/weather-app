import React from "react";
import * as S from "./style";

const SmallBlock = (...props) => {
  console.log(props);
  return (
    <>
      <S.Container>
        <S.Content>
          <S.Icon src={`./icons/additional/${props.icon}.png`} />
          <S.Title>{props.key}</S.Title>
        </S.Content>
        <S.Description>{props.value}</S.Description>
      </S.Container>
    </>
  );
};
export default SmallBlock;
