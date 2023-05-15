import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  font-family: "Assistant", Sans-serif;
  font-style: normal;
  /* max-width:1400px;
  margin-left:auto; 
  margin-right:auto; */
`;

export const SidebarWrapper = styled.div`
  width: ${({ width }) => width};
  background-color: #15233d;
  display: flex;
  flex-direction: column;
  height: 100vh;
  -webkit-transition: all 0.5s ease;
  -moz-transition: all 0.5s ease;
  -o-transition: all 0.5s ease;
  transition: all 0.5s ease;

  @media (max-width: 700px) {
    width: 0%;
    display: ${({ isMobile }) => (isMobile ? "flex" : "none")};
    z-index: 1;
    position: absolute;
    width: 100%;
  }
`;

export const ContentWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Content = styled.div`
  display: flex;
  height: 100%;
  position: relative;
  overflow: auto;
`;
