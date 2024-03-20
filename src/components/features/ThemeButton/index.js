import { useDispatch, useSelector } from "react-redux";
import { ThemeButtonContainer, StyledButtonText, StyledThemeButton } from "./styled";
import { selectTheme, toggleTheme } from "./themeButtonSlice";

const ChangeThemeButton = () => {
    const dispatch = useDispatch();
    const darkTheme = useSelector(selectTheme);

    return (
        <ThemeButtonContainer>
            <StyledButtonText>DARK MODE {darkTheme ? "ON" : "OFF"}</StyledButtonText>
            <StyledThemeButton onClick={() => dispatch(toggleTheme())} />
        </ThemeButtonContainer>
    )
};

export default ChangeThemeButton;