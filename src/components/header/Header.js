import React from "react";
import Logo from "../../assets/icons/logo.png";

import {
  ContentHeaderWrapper,
  Container,
  DeatilsWrapper,
  MobileHeader,
} from "./Header.styles";

const Header = ({ toggleMobileNav, isMobile }) => {
  // const [isOpen, setIsOpen] = useState(false);

  return (
    <ContentHeaderWrapper>
      <MobileHeader>
        {/* <MobileMenuToggleBtn onClick={toggleMobileNav}>
          &#8801;
        </MobileMenuToggleBtn> */}
        <img style={{ height: "75px" }} src={Logo} alt="error" />
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
