import styled from 'react-emotion';
import { Button } from 'antd';

export default styled(Button)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 100px;
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.5);
  border-radius: 16px;
  padding-left: 12px;
  padding-right: 4px;
  margin-right: 16px;
  float: left;

  & i {
    background: white;
    color: #ef5350;
    border-radius: 50%;
    padding: 4px;
    align-self: flex-end;
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.25);
  }
`;
