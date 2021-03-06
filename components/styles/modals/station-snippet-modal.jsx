import { css } from '@emotion/core';

export default css`
  .station-snippet-modal {
    text-align: center;
    white-space: nowrap;
  }

  .station-snippet-modal:before {
    content: '';
    display: inline-block;
    height: 100%;
    vertical-align: middle;
    width: 0px;
  }

  .station-snippet-modal .ant-modal {
    display: inline-block;
    vertical-align: middle;
    top: 0px;
    text-align: left;
  }

  @media (max-width: 768px) {
    .station-snippet-modal .ant-modal {
      width: 90% !important;
    }
  }
`;
