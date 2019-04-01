import { css } from '@emotion/core';

export default css`
  span.emoji {
    display: -moz-inline-box;
    -moz-box-orient: vertical;
    display: inline-block;
    vertical-align: baseline;
    *vertical-align: auto;
    *zoom: 1;
    *display: inline;
    width: 1em;
    height: 1em;
    background-size: 1em;
    background-repeat: no-repeat;
    text-indent: -9999px;
    background-position: 50%, 50%;
    background-size: contain;
  }

  span.emoji-sizer {
    line-height: 0.81em;
    font-size: 1em;
    margin: -2px 0;
  }

  span.emoji-outer {
    display: -moz-inline-box;
    display: inline-block;
    *display: inline;
    height: 1em;
    width: 1em;
  }

  span.emoji-inner {
    display: -moz-inline-box;
    display: inline-block;
    text-indent: -9999px;
    width: 100%;
    height: 100%;
    vertical-align: baseline;
    *vertical-align: auto;
    *zoom: 1;
  }

  img.emoji {
    width: 1em;
    height: 1em;
  }
`;
