import * as S from "./style";
import SmallBlock from "../SmallBlock/SmallBlock";
import LargeBlock from "../LargeBlock/LargeBlock";

export const Main = ({ itemsShown, setItemsShown }) => {
  return (
    <S.Container>
      <S.Wrapper value="e">
        <LargeBlock />
        {Array.from("hello").map((i) => (
          <SmallBlock />
        ))}
      </S.Wrapper>
    </S.Container>
  );
};
