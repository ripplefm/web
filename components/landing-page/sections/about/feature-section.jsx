import React from 'react';
import styled from '@emotion/styled';

const SectionContainer = styled.div`
  z-index: 1;
  padding: 16px;
  margin: 16px;
  transition: all ease-in-out 200ms;

  & h1 {
    font-weight: bolder;
    color: white;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    margin: 12px 0px;
    font-size: 2.5em;
  }

  & p {
    max-width: 250px;
    font-size: 14px;
    font-weight: lighter;
  }
`;

const FeatureIconContainer = styled.div`
  display: flex;
  width: 55px;
  height: 55px;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
`;

const FeatureIcon = styled.img`
  width: 50%;
  height: 50%;
`;

export default ({ name, children, icon, iconBackground }) => (
  <SectionContainer>
    <FeatureIconContainer style={{ background: iconBackground }}>
      <FeatureIcon src={`/static/images/icons/${icon}.svg`} />
    </FeatureIconContainer>
    <h1>{name}</h1>
    <p>{children}</p>
  </SectionContainer>
);
