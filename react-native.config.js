module.exports = {
  project: {
    ios: {},
    android: {},
  },
  assets: ['./assets/fonts'],
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./peperonnie'],
        extensions: ['.ios.js', '.android.js', '.js', '.json'],
      }
    ]
  ]
};