import { StyledListDescription, StyledListHeader, StyledListItem } from "./styled";

const ProjectListItem = ({title, description, demoLink, codeLink}) => {
    return (
        <StyledListItem>
            <StyledListHeader>{title}</StyledListHeader>
            <StyledListDescription>{description}</StyledListDescription>
            <StyledListDescription>
                {`Demo: ${demoLink}`}<br />
                {`Code: ${codeLink}`}
            </StyledListDescription>
        </StyledListItem>
    )
};

export default ProjectListItem;