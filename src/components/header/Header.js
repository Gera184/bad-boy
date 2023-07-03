import { HeaderContainerLeft, HeaderContainerRight, HeaderWrapper, IconAndText, LogoImage } from './Header.styles'
import ErnLogo from '../../assets/images/ErnLogo.svg'
import Language from '../../assets/icons/Language.svg'
import Logout from '../../assets/icons/Logout.svg'
import User from '../../assets/icons/User.svg'
import logo from "../../assets/images/ErnLogo.svg";

import {
  ContentHeaderWrapper,
  Container,
  BellWrapper,
  LogoWrapper,
} from "./Header.styles";

const Header = () => {
  return (
    <ContentHeaderWrapper>
      <HeaderContainerRight>
        <LogoImage>
          <img src={ErnLogo} alt="logo"/>
        </LogoImage>
        <p>retailerInfo</p>
      </HeaderContainerRight>
      <HeaderContainerLeft>
        <IconAndText>
          <img src={User} alt="User"/>
        </IconAndText>
        <IconAndText>
          <img src={Language} alt="Language"/>
        </IconAndText>
        <IconAndText>
          <img src={Logout} alt="Logout"/>
        </IconAndText>
      </HeaderContainerLeft>
    </ContentHeaderWrapper>
  );
};

export default Header;
