module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'react-native-reanimated/plugin',
    ['@babel/plugin-proposal-decorators', {legacy: true}],
    [
      'module-resolver',
      {
        cwd: 'babelrc',
        root: ['./src'],
        extensions: [
          '.ts',
          '.tsx',
          '.js',
          '.jsx',
          '.ios.js',
          'android.js',
          '.json',
        ],
      },
    ],
  ],
};
