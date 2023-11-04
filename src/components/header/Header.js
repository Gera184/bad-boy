<<<<<<< HEAD
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
=======
import React from "react";
import Logo from "../../assets/icons/logo.png";

import {
  ContentHeaderWrapper,
  Container,
  DeatilsWrapper,
  MobileHeader,
} from "./Header.styles";

const Header = () => {
  return (
    <ContentHeaderWrapper>
      <MobileHeader>
        <img style={{ height: "75px" }} src={Logo} alt="error" />
      </MobileHeader>
      <Container container="left">
        <DeatilsWrapper>
          <img style={{ height: "100px" }} src={Logo} alt="error" />
        </DeatilsWrapper>
      </Container>
    </ContentHeaderWrapper>
>>>>>>> 9a369c5 (remove conffeti)
  );
};

export default Header;
