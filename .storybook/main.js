const path = require('path')

module.exports = {
  stories: [
    '../8-dev-tools/storybook/**/*.stories.[tj]s',
    '../8-dev-tools/storybook/**/*.stories.[tj]sx',
  ],

  addons: [
    '@storybook/addon-actions/register',
    '@storybook/addon-storysource',
  ],

  webpackFinal: async config => {
    config.module.rules.push({
      test: /\.tsx?$/,
      exclude: [/node_modules/],
      use: [
        {
          loader: 'ts-loader',
          options: {
            configFile: path.resolve(__dirname, './tsconfig.json'),
          },
        },
      ],
    });
    config.resolve.extensions.push('.ts', '.tsx')
    return config;
  },
}
