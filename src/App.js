import Portfolio from "./components/Portfolio";
import ProjectsList from "./components/ProjectsList";
import SkillsList from "./components/SkillsList";
import Wrapper from "./components/Wrapper";
import Header from "./components/Wrapper/Header";
import ThemeButton from "./components/features/ThemeButton"
import { useSkills } from "./getSkills";


function App() {
  const skills = useSkills();

  return (
    <Wrapper>
      <Header HeaderContent={<ThemeButton />} />
      <SkillsList
        title={"My skillset includes 🛠️"}
        skills={skills.learnedSkills}
      />
      <SkillsList
        title={"What I want to learn next 🚀"}
        skills={skills.iWantToLearnSkills}
      />
      <Portfolio />
      <ProjectsList />
    </Wrapper>
  );
}

export default App;
