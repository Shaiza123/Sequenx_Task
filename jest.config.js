module.exports = {
    preset: "react-native",
    setupFiles: [
      "./node_modules/react-native/jest/setup.js"
    ],
    moduleFileExtensions: [
      "ts",
      "tsx",
      "js",
      "jsx",
      "json",
      "node"
    ],
    transformIgnorePatterns: [
      "node_modules/(?!react-native|react-navigation)/"
    ],
    transform: {
      '^.+\\.[jt]sx?$': require.resolve('babel-jest'),
    },
};
