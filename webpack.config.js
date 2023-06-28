const path = require("path");
const webpack = require("webpack");

module.exports = env => {
  return {
    mode: "development",
    entry: "./src/index.jsx",
    output: {
      filename: "./js/bundle.js"
    },

    resolve: {
      extensions: [".js", ".jsx"]
    },

    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: ["babel-loader"]
        }
      ]
    },

    devServer: {
	    static: {
      directory: path.resolve(__dirname, "./dist"),
    },
    }
  }
}

