import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #e9f0f9;
  display: flex;
  flex-direction: column;
  font-family: "Assistant", Sans-serif;
  position: relative;
  @media (max-width: 1150px) {
    height: 150vh;
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  input {
    border-radius: 1rem;
    flex: 1;
    padding: 0.5rem 1rem;
    border: 1px solid rgba(0, 0, 0, 0.2);
    &:focus {
      /* outline: none; */
    }
  }
`;
export const SearchClientWrapper = styled.div`
  padding: 1rem;
`;

export const MainContent = styled.div`
  display: flex;
  flex: 1;
  gap: 1rem;

  @media (max-width: 1150px) {
    flex-direction: column;
  }
`;

export const SideMenuContainer = styled.div`
  flex: 0.25;
  height: 100%;
  background-color: white;
  position: relative;
  overflow: auto;
  display: grid;
  place-content: center;

  @media (max-width: 1150px) {
    flex: 0.4;
    height: 30vh;
  }
`;

export const ClientList = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 0;
  right: 0;
  border-bottom: 1px solid #e9f0f9;
`;
export const Client = styled(NavLink)`
  display: flex;
  align-items: center;
  padding: 1rem 2rem;
  border-bottom: 1px solid #e9f0f9;
  text-decoration: none;
  color: #000;
  cursor: pointer;

  &:hover {
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
      rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
    border-right: 3px solid rgba(100, 84.3, 0, 0.7);
    button {
      cursor: pointer;
      color: rgba(100, 84.3, 0, 0.7);
    }
  }
`;
export const ImgWrapper = styled.div`
  height: 3rem;
  border-radius: 100%;
  overflow: hidden;
  border: 1px solid rgba(0, 0, 0, 0.1);
  aspect-ratio: 1;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  margin-right: 1rem;
`;
export const Name = styled.h3`
  font-family: "Assistant", Sans-serif;
  font-size: medium;
  font-weight: 500;
  margin: 0;
  margin-bottom: 0.5rem;
`;
export const Time = styled.p`
  margin: 0;
  opacity: 0.5;
  font-size: small;
  margin-top: 0.25rem;
`;
