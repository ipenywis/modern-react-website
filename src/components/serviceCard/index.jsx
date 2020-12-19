import React from "react";
import styled from "styled-components";
import { Marginer } from "../marginer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  width: 300px;
  min-height: 250px;
  background-color: #fff;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.4);
  margin: 0.5em;
  margin-bottom: 1.3em;
`;

const TopContainer = styled.div`
  width: 100%;
`;

const ServiceThumbnail = styled.div`
  width: 100%;
  height: 11em;

  img {
    width: 100%;
    height: 100%;
  }
`;

const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1;
  padding: 15px 14px;
`;

const BottomContainer = styled.div`
  width: 100%;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid rgba(15, 15, 15, 0.19);
  padding: 0 10px;
`;

const Title = styled.h2`
  font-size: 18px;
  margin: 0;
  font-weight: 500;
  color: #000;
  text-align: start;
`;

const SpecialistName = styled.h4`
  margin: 0;
  color: rgba(151, 151, 151, 1);
  font-size: 12px;
  font-weight: 400;
`;

const RatingContainer = styled.div`
  display: flex;
  color: #ebe204;
`;

const PriceContainer = styled.div`
  display: flex;
  align-items: center;
`;

const PriceText = styled.div`
  margin-left: 3px;
  color: #2ba679;
  font-weight: 700;
`;

const StartingAtText = styled.h6`
  margin: 0;
  color: rgb(161, 161, 161);
  font-weight: 400;
`;

export function ServiceCard(props) {
  const { thumbnailUrl, specialist, id, title, rate, rating } = props;

  return (
    <CardContainer>
      <TopContainer>
        <ServiceThumbnail>
          <img src={thumbnailUrl} alt={title} />
        </ServiceThumbnail>
      </TopContainer>
      <ContentContainer>
        <Title>{title}</Title>
        <Marginer direction="vertical" margin={10} />
        <SpecialistName>{specialist.fullName}</SpecialistName>
      </ContentContainer>
      <BottomContainer>
        <RatingContainer>
          <FontAwesomeIcon icon={faStar} size="sm" />
          {rating}
        </RatingContainer>
        <PriceContainer>
          <StartingAtText>STARTING AT</StartingAtText>
          <PriceText>${rate}/hr</PriceText>
        </PriceContainer>
      </BottomContainer>
    </CardContainer>
  );
}
