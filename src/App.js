import { useSelector } from "react-redux";
import Footer from "./components/Footer";
import Portfolio from "./components/Portfolio";
import ProjectsList from "./components/ProjectsList";
import SkillsList from "./components/SkillsList";
import Wrapper from "./components/Wrapper";
import Header from "./components/Wrapper/Header";
import ThemeButton from "./components/features/ThemeButton"
import { useSkills } from "./getSkills";
import { selectTheme } from "./components/features/ThemeButton/themeButtonSlice";


function App() {
  const skills = useSkills();
  const darkTheme = useSelector(selectTheme);

  return (
    <Wrapper darkTheme={darkTheme}>
      <Header
        HeaderContent={<ThemeButton darkTheme={darkTheme} />}
        darkTheme={darkTheme}
      />
      <SkillsList
        title={"My skillset includes 🛠️"}
        skills={skills.learnedSkills}
        darkTheme={darkTheme}
      />
      <SkillsList
        title={"What I want to learn next 🚀"}
        skills={skills.iWantToLearnSkills}
        darkTheme={darkTheme}
      />
      <Portfolio darkTheme={darkTheme} />
      <ProjectsList />
      <Footer />
    </Wrapper>
  );
}

export default App;
