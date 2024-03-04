module.exports = {
  parser: "@babel/eslint-parser",
  plugins: ["react", "react-native","jest"],
  env: {
    'react-native/react-native': true,
    "jest/globals": true
  },
  extends: ["eslint:recommended", "plugin:react/recommended", "plugin:react-native/all"], 
  settings: {
    react: {
      version: 'detect',
    },
  },
};
