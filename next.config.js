const withLess = require('@zeit/next-less');

if (typeof require !== 'undefined') {
  require.extensions['.less'] = file => {};
}

module.exports = withLess({
  lessLoaderOptions: {
    javascriptEnabled: true,
    modifyVars: {
      '@primary-color': '#EF5350',
      '@body-background': '#212121',
      '@component-background': '#19191b',
      '@font-family':
        "'Roboto Condensed', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', 'Helvetica Neue', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
      '@heading-color': 'fade(#fff, 85%)',
      '@text-color': 'fade(#fff, 65%)',
      '@text-color-secondary': 'fade(#fff, 43%)',
      '@border-color-split': '#333',
      '@modal-mask-bg': 'rgba(0,0,0,0.5)',
      '@input-bg': '#111',
      '@input-addon-bg': '#111',
      '@background-color-base': '#19191b',
      '@background-color-active': '#333',
      '@border-color-base': '#222'
    }
  },
  serverRuntimeConfig: {
    coreApiUrl: process.env.CORE_API_URL_INTERNAL,
    authUrl: process.env.AUTH_URL_INTERNAL
  },
  publicRuntimeConfig: {
    youtubeApiKey: process.env.YOUTUBE_API_KEY,
    soundcloudApiKey: process.env.SOUNDCLOUD_API_KEY,
    rippleUrl: process.env.RIPPLE_URL,
    coreApiUrl: process.env.CORE_API_URL,
    authUrl: process.env.AUTH_URL,
    oauthClientName: process.env.OAUTH_CLIENT_NAME
  }
});
