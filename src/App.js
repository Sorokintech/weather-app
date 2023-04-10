import * as S from "./style";
import { Main } from "./components/main";
import { Search } from "./components/search";
import { Weekday } from "./components/weekday";


function App() {
  return (
    <S.Container>
    
    <Main/>
    <Weekday/>
    <Search/>
    </S.Container>
  );
}

export default App;
