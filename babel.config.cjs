module.exports = {
  // ... other Webpack configuration options ...

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      // ... other rules ...
    ],
  },
};
