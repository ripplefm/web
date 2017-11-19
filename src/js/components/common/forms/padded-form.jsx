import styled from 'react-emotion';
import { Form } from 'antd';

export default styled(Form)`
  margin-top: 16px;
  padding: 16px 64px;

  @media (max-width: 768px) {
    padding: 16px 32px;
  }
`;
