import ProjectListItem from "./ProjectListItem";
import { StyledProjectList } from "./styled";
import useProjectData from "./useProjectData";

const ProjectsList = () => {
    const { projectData } = useProjectData();
    console.log(projectData.data)

    return (
        <StyledProjectList>
            {projectData.data && projectData.data.map((project) => (
                <ProjectListItem
                key={project.id}
                title={project.name}
                description={project.description}
                demoLink={project.homepage}
                codeLink={project.html_url}
                />
            ))}
        </StyledProjectList>
    );
};

export default ProjectsList;