import { StyledListDescription, StyledListHeader, StyledListItem, StyledListLink } from "./styled";

const ProjectListItem = ({title, description, demoLink, codeLink}) => {
    return (
        <StyledListItem>
            <StyledListHeader>{title}</StyledListHeader>
            <StyledListDescription>{description}</StyledListDescription>
            <StyledListDescription>
                {`Demo: `} <StyledListLink href={demoLink}>{demoLink}</StyledListLink><br />
                {`Code: `} <StyledListLink href={codeLink}>{codeLink}</StyledListLink>
            </StyledListDescription>
        </StyledListItem>
    )
};

export default ProjectListItem;