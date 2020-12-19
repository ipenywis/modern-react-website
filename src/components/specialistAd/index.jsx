import React from "react";
import styled from "styled-components";
import { BrandLogo } from "../brandLogo";
import { Marginer } from "../marginer";

import FarmingImg from "../../images/farming.png";
import { Button } from "../button";
import { deviceSize } from "../responsive";
import { useMediaQuery } from "react-responsive";

const SpecialistAdContainer = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  background-color: #264653;
  align-items: center;
  justify-content: center;
`;

const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: ${deviceSize.mobile}px) {
    flex-direction: column-reverse;
  }
`;

const SloganContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin-right: 5em;

  @media screen and (max-width: ${deviceSize.mobile}px) {
    align-items: center;
    margin: 0;
  }
`;

const Slogan = styled.h2`
  margin: 0;
  font-size: 24px;
  color: #fff;
  font-weight: 700;
  line-height: 1.3;
  text-align: start;

  @media screen and (max-width: ${deviceSize.mobile}px) {
    font-size: 20px;
  }
`;

const StandoutImage = styled.div`
  width: 35em;
  height: 29em;

  img {
    width: 100%;
    height: 100%;
  }

  @media screen and (max-width: ${deviceSize.mobile}px) {
    width: 18em;
    height: 14em;
  }
`;

export function SpecialistAd(props) {
  const isMobile = useMediaQuery({ maxWidth: deviceSize.mobile });

  return (
    <SpecialistAdContainer>
      <ContentContainer>
        <SloganContainer>
          <BrandLogo
            logoSize={isMobile ? 33 : 40}
            textSize={isMobile ? 28 : 35}
          />
          <Marginer direction="vertical" margin="1em" />
          <SloganContainer>
            <Slogan>You’re a Specialist, and you </Slogan>
            <Slogan>have an outstanding</Slogan>
            <Slogan>Service to offer?</Slogan>
          </SloganContainer>
          <Marginer direction="vertical" margin="0.8em" />
          <Button size={15}>Join as Specialist</Button>
        </SloganContainer>
        <StandoutImage>
          <img src={FarmingImg} alt="join-as-specialist" />
        </StandoutImage>
      </ContentContainer>
    </SpecialistAdContainer>
  );
}
