import { useDispatch, useSelector } from "react-redux";
import { ThemeButtonContainer, StyledButtonText, StyledThemeButton, StyledIconContainer, StyledSunIcon } from "./styled";
import { selectTheme, toggleTheme } from "./themeButtonSlice";
import SunIcon from "../../../images/sun-icon.svg"

const ChangeThemeButton = () => {
    const dispatch = useDispatch();
    const $darkTheme = useSelector(selectTheme);

    return (
        <ThemeButtonContainer>
            <StyledButtonText>DARK MODE {$darkTheme ? "ON" : "OFF"}</StyledButtonText>
            <StyledThemeButton onClick={() => dispatch(toggleTheme())}>
                <StyledIconContainer $darkTheme={$darkTheme}>
                    <StyledSunIcon src={SunIcon} alt="SunIcon"/>
                </StyledIconContainer>
            </StyledThemeButton>
        </ThemeButtonContainer>
    )
};

export default ChangeThemeButton;