import {
  ContainerLeft,
  ContainerRight,
  IconAndTextWrapper,
  LogoImage,
  Wrapper,
} from "./Header.styles";
import ErnLogo from "../../assets/images/ErnLogo.svg";
import Language from "../../assets/icons/Language.svg";
import Logout from "../../assets/icons/Logout.svg";
import User from "../../assets/icons/User.svg";
import { useDispatch, useSelector } from "react-redux";
import { languageChangeAction } from "../../redux/actions/langActions";
import { useEffect } from "react";
import { useAxios } from "../../hooks/useAxios";

const Header = () => {
  const dispatch = useDispatch();
  const { language } = useSelector((lang) => lang);
  const { texts, lang } = language;

  const handleLanguageChange = (event) => {
    const newLanguage = event.target.value;

    dispatch(languageChangeAction(newLanguage));
  };

  return (
    <Wrapper>
      <ContainerRight>
        <LogoImage>
          <img src={ErnLogo} alt="logo" />
        </LogoImage>
        {/* <p>retailerInfo</p> */}
      </ContainerRight>
      <ContainerLeft>
        <IconAndTextWrapper>
          <img src={User} alt="User" />
          <select>
            <option>E045680</option>
          </select>
        </IconAndTextWrapper>
        <IconAndTextWrapper>
          <img src={Language} alt="Language" />
          <select value={lang} onChange={handleLanguageChange}>
            <option value="hebrew">עברית</option>
            <option value="arabic">ערבית</option>
          </select>
        </IconAndTextWrapper>
        <IconAndTextWrapper>
          <img src={Logout} alt="Logout" />
          <p>יציאה</p>
        </IconAndTextWrapper>
      </ContainerLeft>
    </Wrapper>
  );
};

export default Header;
