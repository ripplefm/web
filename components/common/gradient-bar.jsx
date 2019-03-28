import styled from '@emotion/styled';

export default styled.div`
  width: 235px;
  height: 2px;
  margin: ${props => props.margin || '8px 4px 48px 4px'};
  background: linear-gradient(35deg, #e5dc5d, #ef5350);
`;
