module.exports = {
  preset: 'react-native',
  verbose: true,
  setupFilesAfterEnv: [
    '@testing-library/react-hooks/dont-cleanup-after-each.js',
  ],
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
  setupFiles: [
    './node_modules/react-native-gesture-handler/jestSetup.js',
    '<rootDir>/jest.setup.js',
  ],
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?react-native|react-clone-referenced-element|@react-native-community|rollbar-react-native|@fortawesome|@react-native|@react-navigation)',
  ],
  moduleDirectories: ['node_modules', 'utils', __dirname],
};
