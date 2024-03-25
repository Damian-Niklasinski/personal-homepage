import { StyledArticle, StyledList, StyledListItem, StyledTitle } from "./styled";

const SkillsList = ({ title, skills, darkTheme }) => (
    <StyledArticle $darkTheme={darkTheme}>
        <StyledTitle $darkTheme={darkTheme}>{title}</StyledTitle>
        <StyledList>
            {skills && skills.map((skills, index) => (
                <StyledListItem
                    key={index}
                    $darkTheme={darkTheme}
                >
                    {skills}
                </StyledListItem>
            ))}
        </StyledList>
    </StyledArticle>
);

export default SkillsList;