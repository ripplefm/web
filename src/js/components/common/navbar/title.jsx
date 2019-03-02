import styled from 'react-emotion';

export default styled.h3`
  color: white;
  font-weight: bolder;
  font-size: ${props => props.fontSize || ''};
  margin-right: 12px;
`;
