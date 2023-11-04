import * as S from "./style";
import { Main } from "./components/main";
import { Search } from "./components/search";
import { useState } from "react";

function App() {
  const [itemsShown, setItemsShown] = useState(true);
  return (
    <S.Container>
      <Main itemsShown={itemsShown} setItemsShown={setItemsShown} />
      <Search itemsShown={itemsShown} setItemsShown={setItemsShown} />
    </S.Container>
  );
}

export default App;
