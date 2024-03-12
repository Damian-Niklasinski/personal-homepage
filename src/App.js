import Wrapper from "./components/Wrapper";
import Header from "./components/Wrapper/Header";
import ThemeButton from "./components/features/ThemeButton"


function App() {
  return (
    <Wrapper>
      <Header HeaderContent={<ThemeButton />} />
    </Wrapper>
  );
}

export default App;
