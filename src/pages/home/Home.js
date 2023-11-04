<<<<<<< HEAD
// import React from "react";

// function Home() {
//   return <>home</>;
// }

// export default Home;


import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByAmount } from "../../redux/actions/counter";


export default function Home() {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div className="Home">
      <h1> The count is: {count}</h1>
      <button onClick={() => dispatch(increment())}>increment</button>
      <button onClick={() => dispatch(decrement())}>decrement</button>
      <button onClick={() => dispatch(incrementByAmount(33))}>
        Increment by 33
      </button>
    </div>
  );
}
=======
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
      <MessageWrapper>
        <ContactFormHeading>שכירים?</ContactFormHeading>
        <ContactFormHeading>אנחנו נדאג להחזיר את מלוא כספכם</ContactFormHeading>
        <ContactFormHeading></ContactFormHeading>
        <Form />
      </MessageWrapper>
      <TaxImageContainer>
        <img style={{ width: " 100%", height: "100%" }} src={taxImage} alt="" />
      </TaxImageContainer>
      <AboutWrapper>
        <ContentFooter>
          <Heading text="center">שלבי התהליך</Heading>
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
>>>>>>> 9a369c5 (remove conffeti)
