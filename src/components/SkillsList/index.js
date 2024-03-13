import { StyledArticle, StyledList, StyledListItem, StyledTitle } from "./styled";

const SkillsList = ({ title, skills }) => (
    <StyledArticle>
        <StyledTitle>{title}</StyledTitle>
        <StyledList>
            {skills && skills.map((skills, index) => (
                <StyledListItem key={index}>
                    {skills}
                </StyledListItem>
            ))}
        </StyledList>
    </StyledArticle>
);

export default SkillsList;