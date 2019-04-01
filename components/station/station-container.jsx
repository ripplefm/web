import { Global, css } from '@emotion/core';

const stationStyles = css`
  .station {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    width: 100vw;
    max-width: 100vw;
    height: 100vh;
    max-height: 100vh;
    overflow: hidden;
  }

  @supports not (display: grid) {
    .swipeable-tab-group {
      width: 100%;
      height: calc(100vh - 48px - (70vw * 9 / 16));
    }

    @media (min-width: 992px) {
      .station {
        position: relative;
        padding-right: 30%;
        flex-direction: row;
        flex-wrap: wrap;
        align-content: flex-start;
      }

      .station .navbar {
        min-width: 100vw;
        width: 100vw;
      }

      .station-player {
        width: 100%;
        height: calc(70vw * 9 / 16);
      }

      .swipeable-tab-group {
        width: 100%;
        height: calc(100vh - 48px - (70vw * 9 / 16));
      }

      .station-chat {
        position: absolute;
        left: 70%;
        top: 48px;
        width: 30vw;
        height: calc(100vh - 48px);
      }
    }

    @media (min-width: 1200px) {
      .station {
        padding-right: 350px;
        padding-left: 55px;
      }

      .station-player {
        width: 100%;
        height: calc((100vw - 405px) * 9 / 16);
      }

      .station-chat {
        left: calc(100vw - 350px);
      }

      .station .navbar {
        margin-left: -55px;
      }
    }
  }

  @supports (display: grid) {
    .station .navbar {
      grid-area: nav;
    }

    .station-player {
      grid-area: player;
    }

    .swipeable-tab-group {
      grid-area: tabs;
    }

    .station-chat {
      grid-area: chat;
    }

    .station-info {
      grid-area: info;
    }

    .station {
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: 48px calc(100vw * 9 / 16) auto;
      grid-template-areas: 'nav nav' 'player player' 'tabs tabs';
    }

    @media (min-width: 992px) {
      .station {
        display: grid;
        grid-template-columns: 70vw 30vw;
        grid-template-rows: 48px calc(70vw * 9 / 16) auto;
        grid-template-areas: 'nav nav' 'player chat' 'tabs chat';
      }

      .station-sidebar {
        display: none;
      }

      .station-chat {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        height: calc(100vh - 48px);
        grid-area: chat;
      }
    }

    @media (min-width: 1200px) {
      .station {
        display: grid;
        grid-template-columns: 55px auto 350px;
        grid-template-rows: 48px calc((100vw - 405px) * 9 / 16) auto;
        grid-template-areas: 'nav nav nav' 'sidebar player chat' 'sidebar info chat';
      }

      .station-sidebar {
        display: block;
      }
    }

    @media (min-width: 1200px) and (max-height: 1080px) {
      .station {
        display: grid;
        grid-template-columns: 55px auto 350px;
        grid-template-rows: 48px calc(72vw * 9 / 16) auto;
        grid-template-areas: 'nav nav nav' 'sidebar player chat' 'sidebar info chat';
      }
    }

    @media (min-width: 1200px) and (max-height: 1050px) {
      .station {
        display: grid;
        grid-template-columns: 55px auto 350px;
        grid-template-rows: 48px calc(68vw * 9 / 16) auto;
        grid-template-areas: 'nav nav nav' 'sidebar player chat' 'sidebar info chat';
      }
    }

    @media (min-width: 1200px) and (max-height: 800px) {
      .station {
        display: grid;
        grid-template-columns: 55px auto 350px;
        grid-template-rows: 48px calc(55vw * 9 / 16) auto;
        grid-template-areas: 'nav nav nav' 'sidebar player chat' 'sidebar info chat';
      }
    }
  }
`;

export default ({ children }) => (
  <div className="station">
    <Global styles={stationStyles} />
    {children}
  </div>
);
