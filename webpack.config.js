const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    // options related to how webpack emits results
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js"
  }
};
