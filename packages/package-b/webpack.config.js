const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: "./src/index.jsx",
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options: { presets: ["@babel/env", "@babel/preset-react"] }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  resolve: { extensions: ["*", ".js", ".jsx"] },
  devServer: {
    // contentBase: path.join(__dirname, "public/"),
    port: 3000,
  },
  plugins: [new HtmlWebpackPlugin({
    template: 'public/index.html',
  })],
  output: {
    path: __dirname + "/dist",
  },
  devtool: "cheap-source-map"
};
