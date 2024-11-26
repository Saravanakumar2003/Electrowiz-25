const path = require('path');

module.exports = {
  resolve: {
    fallback: {
      "path": require.resolve("path-browserify"),
      "crypto": require.resolve("crypto-browserify"),
      "querystring": require.resolve("querystring-es3"),
      "url": require.resolve("url/")
    }
  }
};