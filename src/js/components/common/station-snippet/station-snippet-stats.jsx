import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 16px;
  border-top: 1px solid #222;
`;

const StatisticContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StatisticValue = styled.span`
  color: #fff;
  margin-left: 6px;
  font-size: 16px;
  margin-top: 2px;
`;

const StationStatistic = ({ name, value }) => (
  <StatisticContainer>
    <img src={`/images/icons/${name}.svg`} alt={name} />
    <StatisticValue>{value}</StatisticValue>
  </StatisticContainer>
);

export default ({ station }) => (
  <Container>
    <StationStatistic name="followers" value={station.followers} />
    <StationStatistic name="listeners" value={station.total_listeners} />
  </Container>
);
