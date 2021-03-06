import { css } from '@emotion/core';

export default css`
  ::-webkit-scrollbar {
    width: 15px;
  }

  ::-webkit-scrollbar-track {
    background-color: #212121;
  }

  ::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.8);
    border-radius: 16px;
  }

  ::-webkit-scrollbar-corner {
    background: #212121;
  }
`;
