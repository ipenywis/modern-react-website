import React, { createContext, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { LoginForm } from "./loginForm";
import { AccountContext } from "./context";
import { SignupForm } from "./signupForm";
import { MutedLink } from "./common";

const BoxContainer = styled.div`
  width: 280px;
  min-height: 550px;
  display: flex;
  flex-direction: column;
  border-radius: 19px;
  background-color: #fff;
  box-shadow: 0px 0px 2.7px rgba(15, 15, 15, 0.28);
  position: relative;
  overflow: hidden;
`;

const TopContainer = styled.div`
  width: 100%;
  height: 255px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0 1.8em;
  padding-bottom: 5em;
`;

const BackDrop = styled(motion.div)`
  position: absolute;
  width: 160%;
  height: 550px;
  border-radius: 50%;
  transform: rotate(60deg);
  top: -290px;
  left: -70px;
  background: #8360c3; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #2ebf91,
    #8360c3
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #2ebf91,
    #8360c3
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 10px;
`;

const HeaderText = styled.h2`
  font-weight: 600;
  color: #fff;
  z-index: 10;
  margin: 0;
  font-size: 30px;
  line-height: 1.24;
`;

const SmallText = styled.h5`
  font-weight: 500;
  color: #fff;
  z-index: 10;
  margin: 0;
  font-size: 13px;
  line-height: 1.24;
`;

const InnerContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 1.7em;
`;

const backdropVariants = {
  expanded: {
    width: "233%",
    height: "1050px",
    borderRadius: "20%",
    transform: "rotate(60deg)",
  },
  collapsed: {
    width: "160%",
    height: "550px",
    borderRadius: "50%",
    transform: "rotate(60deg)",
  },
};

const expandingTransition = {
  type: "spring",
  duration: 2.3,
  stiffness: 30,
};

export function AccountBox(props) {
  const { initialActive } = props;
  const [isExpanded, setExpanded] = useState(false);
  const [active, setActive] = useState(
    initialActive ? initialActive : "signin"
  );

  const playExpandingEffect = () => {
    setExpanded(true);
    /*
      Collapse it after short amount of time
      To Finish transition 
    */
    setTimeout(() => {
      setExpanded(false);
    }, expandingTransition.duration * 1000 - 1500);
  };

  const switchActive = (active) => {
    setTimeout(() => setActive(active), 400);
  };

  const switchToSignup = () => {
    playExpandingEffect();
    switchActive("signup");
  };

  const switchToSignin = () => {
    playExpandingEffect();
    switchActive("signin");
  };

  const contextValue = {
    switchToSignup,
    switchToSignin,
    playExpandingEffect,
  };

  return (
    <AccountContext.Provider value={contextValue}>
      <BoxContainer>
        <TopContainer>
          <BackDrop
            variants={backdropVariants}
            transition={expandingTransition}
            initial={false}
            animate={isExpanded ? "expanded" : "collapsed"}
          />
          {active === "signin" && (
            <>
              <HeaderContainer>
                <HeaderText>Welcome</HeaderText>
                <HeaderText>Back</HeaderText>
              </HeaderContainer>
              <SmallText>Please sign-in to continue!</SmallText>
            </>
          )}
          {active === "signup" && (
            <>
              <HeaderContainer>
                <HeaderText>Create </HeaderText>
                <HeaderText>Account</HeaderText>
              </HeaderContainer>
              <SmallText>Please sign-up to continue!</SmallText>
            </>
          )}
        </TopContainer>
        <InnerContainer>
          {active === "signin" && <LoginForm />}
          {active === "signup" && <SignupForm />}
        </InnerContainer>
      </BoxContainer>
    </AccountContext.Provider>
  );
}
