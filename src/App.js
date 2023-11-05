import * as S from "./style";
import { Main } from "./components/main";
import { Search } from "./components/search";

function App() {
  return (
    <S.Container>
      <Main />
      <Search />
    </S.Container>
  );
}

export default App;
