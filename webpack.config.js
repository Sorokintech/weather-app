const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js", // Entry point of your application
  output: {
    path: path.resolve(__dirname, "dist"), // Output directory
    filename: "bundle.js", // Output bundle filename
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Apply this rule to .js files
        exclude: /node_modules/, // Exclude node_modules directory
        use: {
          loader: "babel-loader", // Use Babel loader for transpiling JavaScript
        },
      },
      {
        test: /\.css$/, // Apply this rule to .css files
        use: ["style-loader", "css-loader"], // Use style and css loaders for handling CSS files
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html", // Path to your index.html file
      filename: "index.html", // Output HTML filename
    }),
  ],
  resolve: {
    extensions: [".js", ".jsx"], // Include file extensions in resolve
  },
  devServer: {
    contentBase: "./dist", // Serve content from the 'dist' directory
    port: 3000, // Port number for development server
  },
};
