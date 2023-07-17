import React from "react";

import {
  Wrapper,
  SidebarMain,
  SidebarButtons,
  SidebarButton,
  SidebarButtonLink,
  SidebarBottom,
  SidebarButtonLinkContainer,
  SidebarButtonLogout,
  CustomTooltip,
} from "./Sidebar.styles";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";
import headset from "../../assets/icons/Headset.svg";
import collapseArrow from "../../assets/icons/Collapse_Arrow.svg";
import { getConfigHandler } from "./getConfigHandler";

const SideBar = () => {
  const { language } = useSelector((state) => state);
  const userMock = {
    allowPurchaseTypeCheck: true,
    allowPurchaseTypeHok: true,
    allowPurchaseTypePhoneHok: false,
    allowUpdateTransaction: false,
  };

  const config = getConfigHandler(language, userMock);

  const location = useLocation();
  const activeRoute = location.pathname;

  return (
    <Wrapper>
      <SidebarMain>
        <SidebarButtons>
          {config.map((li, index) => {
            const tooltipId = !li.permission ? `my-tooltip-${index}` : ""; // Generate unique tooltip ID

            return (
              <SidebarButton key={index}>
                <SidebarButtonLink
                  to={li.path}
                  data-tooltip-id={tooltipId}
                  data-tooltip-place="left"
                >
                  <SidebarButtonLinkContainer active={li.path === activeRoute}>
                    {li.title}
                  </SidebarButtonLinkContainer>
                </SidebarButtonLink>

                <CustomTooltip id={tooltipId}>
                  <p>
                    נראה ששירות זה לא קיים בחבילה שלך אפשר ליצור קשר עם שירות
                    לקוחות 03-9534222
                  </p>
                </CustomTooltip>
              </SidebarButton>
            );
          })}
        </SidebarButtons>
        <SidebarBottom>
          <img src={collapseArrow} alt="collapseArrow" />
          <img src={headset} alt="headset" />
          <SidebarButtonLogout>יצירת קשר ERN</SidebarButtonLogout>
        </SidebarBottom>
      </SidebarMain>
    </Wrapper>
  );
};

export default SideBar;
