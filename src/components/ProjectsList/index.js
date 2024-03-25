import ProjectListItem from "./ProjectListItem";
import { StyledProjectList } from "./styled";
import useProjectData from "./useProjectData";

const ProjectsList = ({ darkTheme }) => {
    const { projectData } = useProjectData();

    return (
        <StyledProjectList>
            {projectData.data && projectData.data.map((project) => (
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
};

export default ProjectsList;