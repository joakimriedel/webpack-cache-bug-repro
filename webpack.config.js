const path = require("path");

module.exports = {
  cache: {
    type: "filesystem",
    buildDependencies: {
      config: [__filename],
    },
  },
  entry: {
    app: "./wwwroot/src/app.js",
  },
  output: {
    path: path.resolve(__dirname, "wwwroot/dist/"),
    filename: "main.js",
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader", // injects css into DOM
          },
          {
            loader: "css-loader",
          },
          {
            loader: "sass-loader",
          },
        ],
      },
      {
        // write all imported fonts to fonts folder
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        exclude: /images[\\/].+\.svg/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "fonts/",
            },
          },
        ],
      },
    ],
  },
};
