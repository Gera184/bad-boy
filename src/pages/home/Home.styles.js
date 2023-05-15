import styled, { keyframes, css } from "styled-components";

const popUpAnimation = keyframes`
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const DetailsWrapper = styled.div`
  flex: 0.5;
  display: flex;
  justify-content: center;
  position: relative;
  padding-top: 2rem;
`;
export const MapBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: -10;
  background-image: url("./backgrounds/background.jpg");
  mask-image: linear-gradient(2deg, #00000070, transparent 100%);
  background-size: cover;
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

export const CardWrapper = styled.div`
  padding-top: 1rem;
`;

export const CardContainer = styled.div`
  direction: rtl;
  text-align: center;
  background-color: #ffffff;
  border-radius: 4px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);
  padding: 16px;
  font-family: "Assistant", sans-serif;
  border-radius: 1rem;
  background-color: #15233d;
  transition-property: opacity, transform;
  transition-duration: 0.9s;
  transition-timing-function: ease-in-out;
  opacity: 0;
  transform: translateX(100%);

  &.show {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const CardTitle = styled.h2`
  font-size: 18px;
  color: whitesmoke;
  margin-bottom: 8px;
`;
export const CardContent = styled.p`
  font-size: 14px;
  color: white;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
  gap: 7.5rem;
  padding: 0 5rem;
  position: relative;
  margin-top: 2rem;
`;
export const ContentSub = styled.div`
  width: 40%;
  direction: rtl;

  @media (max-width: 800px) {
    width: 100%;
  }
`;
export const ContentFooter = styled.div`
  direction: rtl;
  margin-top: 10rem;
  margin-bottom: 1.5rem;

  @media (max-width: 800px) {
    margin: 2rem;
  }
`;

export const Heading = styled.h2`
  font-size: x-large;
  margin-top: 0;
  margin-bottom: 1rem;
  text-align: ${({ text }) => text && text};
`;

export const LogoWrapper = styled.div`
  margin-bottom: 1.5rem;
`;

export const DetailText = styled.p`
  font-size: small;
  color: gray;
  margin: 0;
  @media (max-width: 800px) {
    width: unset;
    line-height: 1.3;
  }
`;

export const ContactList = styled.div`
  margin: 2rem 0;
  display: grid;
  gap: 1rem;
`;

export const Contact = styled.div`
  display: flex;
  gap: 2rem;
`;
export const ContactIcon = styled.div`
  svg {
    width: 1rem;
    height: 1rem;
    fill: goldenrod;
  }
`;

export const ContactDetails = styled.div`
  font-size: small;
`;

export const AboutWrapper = styled.div`
  justify-content: center;
  display: flex;
  flex: 0.5;
  background-color: rgba(37, 150, 190, 0.1);
`;

export const MessageWrapper = styled.div`
  direction: rtl;
  position: absolute;
  top: 40%;
  right: 5%;
  transform: translateY(-40%);
  width: 25%;
  z-index: 10;
  padding: 1.5rem;
  border-radius: 2%;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;
  animation: ${popUpAnimation} 2s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;

  @media (max-width: 800px) {
    position: static;
    transform: unset;
    width: unset;
    padding: 1.5rem 3rem;
    box-shadow: none;
    z-index: unset;
  }
`;

export const ContactFormHeading = styled.h3`
  margin: 0;
  text-align: center;
  font-size: x-large;
`;

export const Error = styled.div`
  font-size: small;
  color: red;
`;
