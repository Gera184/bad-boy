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
  );
};

export default Header;
