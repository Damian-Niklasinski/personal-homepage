import ErrorStage from "../features/ErrorStage";
import LoadingStage from "../features/LoadingStage";
import ProjectListItem from "./ProjectListItem";
import { StyledProjectList } from "./styled";
import useProjectData from "./useProjectData";

const ProjectsList = ({ darkTheme }) => {
  const { projectData } = useProjectData();

  switch (projectData.status) {
    case "pending":
      return <LoadingStage darkTheme={darkTheme} />;
    case "success":
      return (
        <StyledProjectList>
          {projectData.data &&
            projectData.data.map((project) => (
              <ProjectListItem
                key={project.id}
                title={project.name}
                description={project.description}
                demoLink={project.homepage}
                codeLink={project.html_url}
                darkTheme={darkTheme}
              />
            ))}
        </StyledProjectList>
      );
    default:
      return <ErrorStage darkTheme={darkTheme} />;
  }
};

export default ProjectsList;
