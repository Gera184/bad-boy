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

const Header = () => {
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
          <p>יציאה</p>
        </IconAndTextWrapper>
        <IconAndTextWrapper>
          <img src={Language} alt="Language" />
          <p>עברית</p>
        </IconAndTextWrapper>
        <IconAndTextWrapper>
          <img src={Logout} alt="Logout" />
          <p>משתמש</p>
        </IconAndTextWrapper>
      </ContainerLeft>
    </Wrapper>
  );
};

export default Header;
