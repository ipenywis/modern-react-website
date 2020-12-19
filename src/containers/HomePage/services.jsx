import Axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Button } from "../../components/button";
import { deviceSize } from "../../components/responsive";
import { ServiceCard } from "../../components/serviceCard";

const ServicesContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Title = styled.h1`
  font-weight: 900;
  color: #000;

  @media screen and (max-width: ${deviceSize.mobile}px) {
    font-size: 25px;
  }
`;

const ServicesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const BottomContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const WarningText = styled.h3`
  color: rgba(100, 100, 100);
  font-weight: 500;
`;

const ViewMoreButton = styled(Button)`
  background-color: #f2f2f2;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.4);
  color: #959595;
  font-size: 14px;

  &:hover {
    background-color: #f2f2f2;
    filter: contrast(0.8);
  }
`;

const wait = (num) => new Promise((rs) => setTimeout(rs, num));

export function Services(props) {
  const [offeredServices, setServices] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const isServicesEmpty =
    !offeredServices || (offeredServices && offeredServices.length === 0);

  const fetchServices = async () => {
    setLoading(true);
    const response = await Axios.get("http://localhost:9000/services").catch(
      (err) => {
        console.log("Error: ", err);
      }
    );

    if (response) {
      setServices(response.data);
    }

    setLoading(false);
  };

  useEffect(() => {
    fetchServices();
  }, []);

  return (
    <ServicesContainer>
      <Title>Most used services & More</Title>
      <ServicesWrapper>
        {isServicesEmpty && !isLoading && (
          <WarningText>No Services are published yet!</WarningText>
        )}
        {isLoading && <WarningText>Loading...</WarningText>}
        {!isServicesEmpty &&
          !isLoading &&
          offeredServices.map((service, idx) => (
            <ServiceCard key={idx} {...service} />
          ))}
      </ServicesWrapper>
      <BottomContainer>
        {!isServicesEmpty && !isLoading && (
          <ViewMoreButton>View More</ViewMoreButton>
        )}
      </BottomContainer>
    </ServicesContainer>
  );
}
