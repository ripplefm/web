const { injectBabelPlugin } = require('react-app-rewired');
const rewireLess = require('react-app-rewire-less');

module.exports = function override(config, env) {
  config = injectBabelPlugin('emotion', config);
  config = injectBabelPlugin(
    ['import', { libraryName: 'antd', style: true }],
    config
  );
  config = rewireLess.withLoaderOptions({
    modifyVars: {
      '@primary-color': '#EF5350',
      '@body-background': '#212121',
      '@component-background': '#19191b',
      '@heading-color': 'fade(#fff, 85%)',
      '@text-color': 'fade(#fff, 65%)',
      '@text-color-secondary': 'fade(#fff, 43%)',
      '@border-color-split': '#333',
      '@modal-mask-bg': 'rgba(0,0,0,0.5)',
      '@input-bg': '#111',
      '@border-color-base': '#222'
    }
  })(config, env);
  return config;
};
