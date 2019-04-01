import { css } from '@emotion/core';
import scrollbarStyles from './scrollbar';
import loaderStyles from './loader';
import emojiStyles from './emoji';

export default css`
  body {
    overflow-x: hidden;
  }

  .hidden {
    display: none;
  }

  .ant-dropdown .ant-menu {
    border: none;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  }

  .ant-select-selection--multiple .ant-select-selection__choice {
    background: #ef5350;
  }

  .ant-layout-sider-zero-width-trigger {
    position: fixed;
    top: -2px;
    left: 0px;
    z-index: 99;
    background: #212121;
    transition: transform ease-in-out 150ms;
  }

  .ant-layout-sider-zero-width-trigger:hover {
    background: transparent;
    transform-style: preserve-3d;
    transform: scale(1.1);
  }

  .ant-input:focus {
    border-color: transparent;
    box-shadow: none;
  }

  .ant-input:hover {
    border-color: transparent;
  }

  ${scrollbarStyles}
  ${loaderStyles}
  ${emojiStyles}
`;
