import { StyledListDescription, StyledListHeader, StyledListItem } from "./styled";

const ProjectListItem = () => {
    return (
        <StyledListItem>
            <StyledListHeader>Movies Browser</StyledListHeader>
            <StyledListDescription>Project description, e.g. website where you can search for favourite movies and people. Project description, e.g. website where you can search.</StyledListDescription>
            <StyledListDescription>Lorem Ipsum</StyledListDescription>
        </StyledListItem>
    )
};

export default ProjectListItem;