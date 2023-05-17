import React from "react";
import texts from "../../texts/texts.json";
import taxImage from "../../assets/icons/tax-image.jpg";

import {
  AboutWrapper,
  Heading,
  MessageWrapper,
  Wrapper,
  ContactFormHeading,
  ContentFooter,
  CardContainer,
  CardTitle,
  CardContent,
  CardWrapper,
  TaxImageContainer,
} from "./Home.styles";

import { Form } from "../../components/form/Form";
import { useState } from "react";
import { useEffect } from "react";

const Home = () => {
  const [showCards, setShowCards] = useState(false);

  useEffect(() => {
    const delay = 0; // Adjust the delay between each card in milliseconds

    const timer = setTimeout(() => {
      setShowCards(true);
    }, delay);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Wrapper>
      {/* <DetailsWrapper>
        <MapBackground />
        <Content>
          <ContentSub>
            <Heading>שמרו על קשר</Heading>
            <DetailText>
              ללמעלה מ-90% מהשכירים מגיע לקבל החזרי מס הכנסה. הניסיון שלנו מראה
              כי החזר המס הממוצע המתקבל אצל לקוחותינו מגיע לכ-9,500 שקל!
            </DetailText>
            <ContactList>
              <Contact>
                <ContactIcon>
                  <Phone />
                </ContactIcon>
                <ContactDetails>0527457797</ContactDetails>
              </Contact>
              <Contact>
                <ContactIcon>
                  <Mail />
                </ContactIcon>
                <ContactDetails>daniel@gmail.com</ContactDetails>
              </Contact>
              <Contact>
                <ContactIcon>
                  <Location />
                </ContactIcon>
                <ContactDetails>מעלות תרשיחא סיטי</ContactDetails>
              </Contact>
            </ContactList>
          </ContentSub>
        </Content>
      </DetailsWrapper> */}
      <MessageWrapper>
        <ContactFormHeading>שכירים,</ContactFormHeading>
        <ContactFormHeading>תנו לנו להחזיר לכם כסף</ContactFormHeading>
        <ContactFormHeading>ממס הכנסה​!</ContactFormHeading>
        <Form />
      </MessageWrapper>
      <TaxImageContainer>
        <img style={{ width: " 100%", height: "100%" }} src={taxImage} alt="" />
      </TaxImageContainer>
      <AboutWrapper>
        <ContentFooter>
          <Heading text="center">איך התהליך עובד?</Heading>
          {texts.lang.he.cards.map((card, index) => {
            return (
              <CardWrapper key={card.title}>
                <CardContainer
                  style={{ transitionDelay: `${index * 0.5}s` }}
                  className={showCards ? "show" : ""}
                >
                  <img
                    src={require(`../../assets/icons/${card.icon}.png`)}
                    alt=""
                  />
                  <CardTitle>{card.title}</CardTitle>
                  <CardContent>{card.text}</CardContent>
                </CardContainer>
              </CardWrapper>
            );
          })}
        </ContentFooter>
      </AboutWrapper>
    </Wrapper>
  );
};

export default Home;
