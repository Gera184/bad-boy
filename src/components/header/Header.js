import {
  ContainerLeft,
  ContainerRight,
  IconAndTextWrapper,
  LogoImage,
  Wrapper,
  HeaderMobile
} from "./Header.styles";
import ErnLogo from "../../assets/images/ErnLogo.svg";
import Language from "../../assets/icons/Language.svg";
import Logout from "../../assets/icons/Logout.svg";
import User from "../../assets/icons/User.svg";
import Menu from "../../assets/icons/menu.svg";
import Headset from "../../assets/icons/Headset.svg";
import { useDispatch, useSelector } from "react-redux";
import { languageChangeAction } from "../../redux/actions/langActions";
import { BrowserView, MobileView } from 'react-device-detect';
import Modal from 'react-modal';
import React, { useCallback, useEffect, useMemo, useState } from "react";

const Header = () => {
  const dispatch = useDispatch();
  const { language } = useSelector((lang) => lang);
  const { lang } = language;

  const handleLanguageChange = (event) => {
    const newLanguage = event.target.value;

    dispatch(languageChangeAction(newLanguage));
  };


  const [showContact, setshowContact] = useState(false);
  const [showMenu, setshowMenu] = useState(false);



  return (
    <>
      <BrowserView>
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
      </BrowserView>
      <MobileView>

        <HeaderMobile>
          <img src={Headset} width="30px" height="27px" alt="HeadSet" onClick={() => setshowContact(true)} />
          <img src={ErnLogo} width="86px" height="34px" alt="Logo" />
          <img src={Menu} width="24px" height="17px" alt="Menu" onClick={() => setshowMenu(true)} />

          <Modal
          isOpen={ showContact }
          contentLabel="onRequestClose Example"
          onRequestClose={() => setshowContact(false)}
        >
          <p>Modal text!</p>
          <button onClick={() => setshowContact(false)}>Close Modal</button>
        </Modal>

        <Modal
          isOpen={ showMenu }
          contentLabel="onRequestClose Example"
          onRequestClose={() => setshowMenu(false)}
        >
          <p>Modal text!</p>
          <button onClick={() => setshowMenu(false)}>Close Modal</button>
        </Modal>

        </HeaderMobile>

      </MobileView>
    </>
  );
};

export default Header;
