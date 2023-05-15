import React, { useState } from "react";
import BellIcon from "../../assets/icons/bell-icon.png";
import Search from "../../assets/icons/search.png";
import Logo from "../../assets/icons/logo.png";
import logoOpen from "../../assets/icons/logo-open.png";

import {
  ContentHeaderWrapper,
  Container,
  HeaderLogo,
  DeatilsWrapper,
  Deatils,
  MobileHeader,
  MobileMenuToggleBtn,
  MobileSearchWrapper,
  MobileSearchInput,
  MobileSearchControls,
  MobileSearchResult,
  BellWrapper,
} from "./Header.styles";

const Header = ({ toggleMobileNav, isMobile }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ContentHeaderWrapper>
      <MobileHeader>
        <MobileMenuToggleBtn onClick={toggleMobileNav}>
          &#8801;
        </MobileMenuToggleBtn>
        {/* <img className="logo-img" src={logoOpen} alt="error" /> */}
      </MobileHeader>
      <Container container="left">
        {/* <HeaderLogo /> */}
        <DeatilsWrapper>
          <img style={{ height: "100px" }} src={Logo} alt="error" />
        </DeatilsWrapper>
        {/* <BellWrapper>
          <img src={BellIcon} alt="error" />
        </BellWrapper> */}
      </Container>
    </ContentHeaderWrapper>
  );
};

export default Header;
