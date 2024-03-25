import { StyledListDescription, StyledListHeader, StyledListItem, StyledListLink } from "./styled";

const ProjectListItem = ({ title, description, demoLink, codeLink, darkTheme }) => {
    return (
        <StyledListItem $darkTheme={darkTheme}>
            <StyledListHeader $darkTheme={darkTheme}>{title}</StyledListHeader>
            <StyledListDescription $darkTheme={darkTheme}>{description}</StyledListDescription>
            <StyledListDescription $darkTheme={darkTheme}>
                {`Demo: `}
                <StyledListLink
                    href={demoLink}
                    $darkTheme={darkTheme}
                >
                    {demoLink}
                </StyledListLink><br />
                {`Code: `}
                <StyledListLink
                    href={codeLink}
                    $darkTheme={darkTheme}
                >
                    {codeLink}
                </StyledListLink>
            </StyledListDescription>
        </StyledListItem>
    )
};

export default ProjectListItem;